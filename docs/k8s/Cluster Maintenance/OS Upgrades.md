---
file: OS Upgrades
---

**Base software upgrade** or applying **security patches** on a cluster.

The master node waits up to 5 minutes by default to consider a node dead and reschedule pods from 
deployments/ReplicaSets.

To **gracefully move the workload** from a node that has to be updated, you can drain it:

```shell
kubectl drain node-name
```

The pods are **terminated** and **recreated** on another and the node is tagged as **unschedulable** until the restriction is 
removed with the following command:

```shell
kubectl uncordon node-name
```

To make a node unschedulable (but does not drain it), you can use the `cordon` command:

```shell
kubectl cordon node-name
```
