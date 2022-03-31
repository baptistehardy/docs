---
title: ReplicaSets
---

**Replication Controller**: old technology replaced by **ReplicaSet**

- Allows one or more instances of one pod running at the same time for **high availability**

- Ensures that the specified number of pods is running

- **Load balancing & scaling** across multiple nodes in the cluster

## YAML

```yaml title="replicaset-definition.yml"
apiVersion: apps/v1
kind: ReplicaSet
metadata:
  name: myapp-rs
  labels:
    app: myapp
    type: front-end
spec:
  template:
    # Definition of the pod
    metadata:
      name: myapp-pod
      labels:
        app: nginx
        type: front-end
    spec:
      containers:
        - name: nginx
          image: nginx:1.21.6
  # Number of replicas for the template pod
  replicas: 2
  # Selects the pods that should be controlled by the ReplicaSet
  selector:
    matchLabels:
      type: front-end
    
```

## Commands

```shell title="Create a ReplicaSet"
kubectl create -f replicaset-definition.yml
```
```shell
kubectl apply -f replicatset-definition.yml
```

:::note

The pods' name will start with the ReplicaSet's name (_myapp-rs_ in the example) followed by a random ID (e.g. 
_myapp-rs-y8lv2_)

:::

<br/>

```shell title="Update the ReplicaSet"
kubectl replace -f replicatset-definition.yml
```

<br/>

```shell title="Scale the ReplicaSet with the definition file"
kubectl scale --replicas=3 -f replicatset-definition.yml
```

```shell title="Scale the ReplicaSet with its name"
kubectl scale --replicas=3 replicaset myapp-rs
```

<br/>

```shell title="List ReplicaSets"
kubectl get replicaset
```

<br/>

```shell title="Delete a ReplicaSet"
kubectl delete replicaset myapp-rs
```
