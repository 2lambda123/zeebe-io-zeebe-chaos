// Copyright 2023 Camunda Services GmbH
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

package cmd

import (
	"bytes"
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"time"

	"github.com/spf13/cobra"
	"github.com/zeebe-io/zeebe-chaos/go-chaos/internal"
)

func AddClusterCommands(rootCmd *cobra.Command, flags *Flags) {
	var clusterCommand = &cobra.Command{
		Use:   "cluster",
		Short: "Interact with the Cluster API",
		Long:  "Can be used to query cluster topology and to request dynamic scaling",
	}
	var statusCommand = &cobra.Command{
		Use:   "status",
		Short: "Queries the current cluster topology",
		RunE: func(cmd *cobra.Command, args []string) error {
			return printCurrentTopology(flags)
		},
	}
	var waitCommand = &cobra.Command{
		Use:   "wait",
		Short: "Waits for a topology change to complete",
		RunE: func(cmd *cobra.Command, args []string) error {
			return portForwardAndWaitForChange(flags)
		},
	}
	var scaleCommand = &cobra.Command{
		Use:   "scale",
		Short: "Scales the cluster to the given size",
		RunE: func(cmd *cobra.Command, args []string) error {
			return scaleCluster(flags)
		},
	}

	rootCmd.AddCommand(clusterCommand)
	clusterCommand.AddCommand(statusCommand)
	clusterCommand.AddCommand(waitCommand)
	waitCommand.Flags().Int64Var(&flags.changeId, "changeId", 0, "The id of the change to wait for")
	waitCommand.MarkFlagRequired("changeId")
	clusterCommand.AddCommand(scaleCommand)
	scaleCommand.Flags().IntVar(&flags.brokers, "brokers", 0, "The amount of brokers to scale to")
	scaleCommand.MarkFlagRequired("brokers")
}

func scaleCluster(flags *Flags) error {
	k8Client, err := createK8ClientWithFlags(flags)
	ensureNoError(err)

	err = k8Client.AwaitReadiness()
	ensureNoError(err)

	port, closePortForward := k8Client.MustGatewayPortForward(0, 9600)
	defer closePortForward()
	currentTopology, err := QueryTopology(port)
	ensureNoError(err)
	if currentTopology.PendingChange != nil {
		return fmt.Errorf("cluster is already scaling")
	}

	if len(currentTopology.Brokers) > flags.brokers {
		_, err = scaleDownBrokers(k8Client, port, flags.brokers)
	} else if len(currentTopology.Brokers) < flags.brokers {
		_, err = scaleUpBrokers(k8Client, port, flags.brokers)
	} else {
		return fmt.Errorf("cluster is already at size %d", flags.brokers)
	}
	ensureNoError(err)

	return nil
}

func scaleUpBrokers(k8Client internal.K8Client, port int, brokers int) (*ChangeResponse, error) {
	changeResponse, err := requestBrokerScaling(port, brokers)
	ensureNoError(err)
	_, err = k8Client.ScaleZeebeCluster(brokers)
	ensureNoError(err)
	waitForChange(port, changeResponse.ChangeId)
	return changeResponse, nil
}

func scaleDownBrokers(k8Client internal.K8Client, port int, brokers int) (*ChangeResponse, error) {
	changeResponse, err := requestBrokerScaling(port, brokers)
	ensureNoError(err)

	// Wait for brokers to leave before scaling down
	waitForChange(port, changeResponse.ChangeId)
	_, err = k8Client.ScaleZeebeCluster(brokers)

	ensureNoError(err)
	return changeResponse, nil
}

func requestBrokerScaling(port int, brokers int) (*ChangeResponse, error) {
	brokerIds := make([]int32, brokers)
	for i := 0; i < brokers; i++ {
		brokerIds[i] = int32(i)
	}
	url := fmt.Sprintf("http://localhost:%d/actuator/cluster/brokers", port)
	request, err := json.Marshal(brokerIds)
	if err != nil {
		return nil, err
	}
	resp, err := http.Post(url, "application/json", bytes.NewReader(request))
	if err != nil {
		return nil, err
	}
	if resp.StatusCode < 200 || resp.StatusCode >= 400 {
		return nil, fmt.Errorf("scaling failed with code %d", resp.StatusCode)
	}

	defer func(Body io.ReadCloser) {
		_ = Body.Close()
	}(resp.Body)

	response, err := io.ReadAll(resp.Body)
	if err != nil {
		return nil, err
	}

	var changeResponse ChangeResponse
	err = json.Unmarshal(response, &changeResponse)
	if err != nil {
		return nil, err
	}
	return &changeResponse, nil
}

func printCurrentTopology(flags *Flags) error {
	k8Client, err := createK8ClientWithFlags(flags)
	if err != nil {
		panic(err)
	}

	err = k8Client.AwaitReadiness()
	if err != nil {
		return err
	}

	port, closePortForward := k8Client.MustGatewayPortForward(0, 9600)
	defer closePortForward()

	topology, err := QueryTopology(port)
	if err != nil {
		return err
	}
	formatted, err := json.MarshalIndent(topology, "", "  ")
	if err != nil {
		return err
	}
	internal.LogInfo("Current topology: %s", string(formatted))
	return nil
}

func portForwardAndWaitForChange(flags *Flags) error {
	k8Client, err := createK8ClientWithFlags(flags)
	if err != nil {
		panic(err)
	}

	err = k8Client.AwaitReadiness()
	if err != nil {
		return err
	}

	port, closePortForward := k8Client.MustGatewayPortForward(0, 9600)
	defer closePortForward()

	return waitForChange(port, flags.changeId)
}

func waitForChange(port int, changeId int64) error {
	interval := time.Second * 5
	timeout := (time.Minute * 25)
	iterations := int(timeout / interval)
	for i := 0; i < int(iterations); i++ {
		topology, err := QueryTopology(port)
		if err != nil {
			return err
		}
		changeStatus := describeChangeStatus(topology, int64(changeId))
		switch changeStatus {
		case ChangeStatusCompleted:
			internal.LogInfo("Change %d completed successfully", changeId)
			return nil
		case ChangeStatusFailed:
			internal.LogInfo("Change %d failed with status %s", changeId, topology.LastChange.Status)
			return fmt.Errorf("change %d failed with status %s", changeId, topology.LastChange.Status)
		case ChangeStatusOutdated:
			internal.LogInfo("Change %d is outdated but was most likely completed successfully, latest change is %d", changeId, topology.LastChange.Id)
			return nil
		case ChangeStatusPending:
			competed := len(topology.PendingChange.Completed)
			pending := len(topology.PendingChange.Pending)
			total := competed + pending
			internal.LogInfo("Change %d is %s with %d/%d operations complete", changeId, topology.PendingChange.Status, competed, total)
		case ChangeStatusUnknown:
			internal.LogInfo("Change %d not yet started", changeId)
		}
		internal.LogVerbose("Waiting %s before checking again. Iteration %d out of %d", interval, i, iterations)
		time.Sleep(interval)
	}

	return fmt.Errorf("change %d did not complete within 25 minutes", changeId)
}

type ChangeStatus string

const (
	ChangeStatusOutdated  ChangeStatus = "OUTDATED"
	ChangeStatusCompleted ChangeStatus = "COMPLETED"
	ChangeStatusFailed    ChangeStatus = "FAILED"
	ChangeStatusPending   ChangeStatus = "PENDING"
	ChangeStatusUnknown   ChangeStatus = "UNKNOWN"
)

func describeChangeStatus(topology *CurrentTopology, changeId int64) ChangeStatus {
	if topology.LastChange != nil && topology.LastChange.Id == changeId {
		if topology.LastChange.Status == "COMPLETED" {
			return ChangeStatusCompleted
		} else {
			return ChangeStatusFailed
		}
	} else if topology.LastChange != nil && topology.LastChange.Id > changeId {
		return ChangeStatusOutdated
	} else if topology.PendingChange != nil && topology.PendingChange.Id == changeId {
		return ChangeStatusPending
	} else {
		return ChangeStatusUnknown
	}
}

func QueryTopology(port int) (*CurrentTopology, error) {
	url := fmt.Sprintf("http://localhost:%d/actuator/cluster", port)
	resp, err := http.Get(url)
	if err != nil {
		return nil, err
	}
	if resp.StatusCode != 200 {
		return nil, fmt.Errorf("expected status code 200 but got %d", resp.StatusCode)
	}
	defer func(Body io.ReadCloser) {
		_ = Body.Close()
	}(resp.Body)
	body, err := io.ReadAll(resp.Body)
	if err != nil {
		return nil, err
	}

	var topology CurrentTopology
	err = json.Unmarshal(body, &topology)
	if err != nil {
		return nil, err
	}
	return &topology, nil
}

type ChangeResponse struct {
	ChangeId         int64
	CurrentTopology  []BrokerState
	PlannedChanges   []Operation
	ExpectedTopology []BrokerState
}

type CurrentTopology struct {
	Version       int32
	Brokers       []BrokerState
	LastChange    *LastChange
	PendingChange *TopologyChange
}

type BrokerState struct {
	Id            int32
	State         string
	Version       int64
	LastUpdatedAt string
	Partitions    []PartitionState
}

type PartitionState struct {
	Id       int32
	State    string
	Priority int32
}

type LastChange struct {
	Id          int64
	Status      string
	StartedAt   string
	CompletedAt string
}

type TopologyChange struct {
	Id              int64
	Status          string
	StartedAt       string
	CompletedAt     string
	InternalVersion int64
	Completed       []Operation
	Pending         []Operation
}

type Operation struct {
	Operation   string
	BrokerId    int32
	PartitionId int32
	Priority    int32
}
