---
title: Daemon Sets
---

**Daemon Sets** run one copy of a pod in each node, even when a new node is added.

Daemon Sets are perfect for **monitoring solutions** and **logs viewers**.

They can also be used for **kube-proxy** and **networking** (weave-net).


## YAML

```yaml title="deamonset-definition.yml"
apiVersion: apps/v1
kind: DaemonSet
metadata:
  name: monitoring-daemon
spec:
  template:
    metadata:
      name: monitoring-agent
      labels:
        app: monitoring-agent
    spec:
      containers:
        - name: monitoring-agent
          image: monitoring-agent
  selector:
    matchLabels:
      type: monitoring-agent
```

## Commands

```shell title="List Daemon Sets"
kubectl get daemonsets
```

<br/>

```shell title="Get details about a daemon set"
kubectl describe daemonsets monitoring-daemon
```
