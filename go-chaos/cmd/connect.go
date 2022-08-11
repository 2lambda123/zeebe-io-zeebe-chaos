// Copyright 2022 Camunda Services GmbH
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
	"fmt"

	"github.com/spf13/cobra"
	"github.com/zeebe-io/zeebe-chaos/go-chaos/internal"
)

func init() {
	rootCmd.AddCommand(connect)
	connect.AddCommand(connectBrokers)
}

var connect = &cobra.Command{
	Use:   "connect",
	Short: "Connect Zeebe nodes",
	Long:  `Connect all Zeebe nodes again, after they have been disconnected uses sub-commands to connect brokers, gateways, etc.`,
}

var connectBrokers = &cobra.Command{
	Use:   "brokers",
	Short: "Connect Zeebe Brokers",
	Long:  `Connect all Zeebe Brokers again, after they have been disconnected.`,
	Run: func(cmd *cobra.Command, args []string) {
		k8Client, err := internal.CreateK8Client()
		if err != nil {
			panic(err)
		}

		// No patch is need, since we expect that disconnect was executed before.
		// If not all fine and the pods are already connected.

		// We run connect on all nodes, since roles can have been changed in between so it is easier to run the commands on all nodes.

		podNames, err := k8Client.GetBrokerPodNames()
		if err != nil {
			panic(err.Error())
		}

		if len(podNames) <= 0 {
			panic(fmt.Sprintf("Expected to find brokers in current namespace %s, but found nothing\n", k8Client.GetCurrentNamespace()))
		}

		for _, pod := range podNames {
			err = internal.MakeIpReachableForPod(k8Client, pod)
			if err != nil {
				fmt.Printf("Error on connection Broker: %s. Error: %s\n", pod, err.Error())
			} else {
				fmt.Printf("Connected %s again, removed unreachable routes.\n", pod)
			}
		}
	},
}
