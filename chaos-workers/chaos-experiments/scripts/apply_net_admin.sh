#!/bin/bash
set -euo pipefail

scriptPath=$(
  cd "$(dirname "${BASH_SOURCE[0]}")"
  pwd -P
)
source utils.sh

namespace=$(getNamespace)

CLUSTERID=${namespace%-zeebe}

kubectl patch zb "$CLUSTERID" --type merge --patch='{"spec":{"controller":{"reconcileDisabled":true}}}'
kubectl patch statefulset zeebe -n "$namespace" --patch "$(cat "$scriptPath/net_admin_patch.yaml")"

# shellcheck disable=SC2046
kubectl delete pod "$(getBrokerLabels)"
