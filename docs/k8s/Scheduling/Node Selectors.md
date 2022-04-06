---
title: Node Selectors
---

To select a node that suits the workload of a pod in a simple way, you can use **node selectors**. They are **node labels**.

For example, you'll want a data cruncher to run on a server/node that has high bandwidth in terms of storage and RAM.
If not all of your servers/nodes are equal, you can **affect a pod to a specific node**.

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: myapp-pod
spec:
  containers:
    - name: data-cruncher
      image: data-cruncher
  # Node labels
  nodeSelector:
    size: Large
```

## Labeling nodes

```shell title="Labeling a node"
kubectl label nodes node-name key=value
```

```shell
kubectl label nodes node01 size=Large
```
