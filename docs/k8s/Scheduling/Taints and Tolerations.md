---
title: Taints and Tolerations
---

## Pod to node relationship

Taints and tolerations define what pods can be scheduled on a node.

If no taints are applied to the nodes, the scheduler will spread the pods across the nodes equally to balance the workload.


By **default**, pods cannot tolerate any taint applied to a node.

You can add a **toleration** to a pod to allow it to **withstand that taint** and be the only pod to be scheduled on that node.

Taints and tolerations **DO NOT** work as selectors: just because a pod has a toleration to a tainted node **DOES 
NOT** mean it'll go to the node it tolerates, it might be scheduled to another node. If you want to schedule pods to 
select nodes, you want _nodeAffinity_.

By default, the master nodes have a taint so that no pods will be scheduled to it. 

## Taints

```shell title="Tainting a node"
kubectl taint nodes node-name key=value:taint-effect
```

**Taint effects** are:
- _NoSchedule_: The pods will not be scheduled on the node
- PreferNoSchedule: The scheduler will _try_ to avoid to place a non-tolerant pod on that node (not guaranteed)
- NoExecute: The already running pods on the node that do not withstand the taint will be evicted (and killed)

The taint effects answer the question: what happens to pods that **DO NOT** tolerate the taint?

## Tolerations

```yaml title="pod-definition.yml"
apiVersion: v1
kind: Pod
metadata:
  name: myapp-pod
spec:
  containers:
    - name: nginx-container
      image: nginx
  tolerations:
    - key: "key"
      operator: "Equal" 
      value: "value"
      effect: "NoSchedule" # Taint effect
```
