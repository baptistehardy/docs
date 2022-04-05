---
title: Deployments
---

- Deploy multiple pods
- **Rolling updates** (upgrade/update the pods' container images)
- **Rollback changes**
- **Pause/resume** for environment changes (webserver version, scaling, resource allocation) 

Deployment comes higher in the hierarchy:
- Deployments
- ReplicaSets
- Pods

## YAML

```yaml title="deployment-definition.yml"
apiVersion: apps/v1
kind: Deployment
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
  # Selects the pods that should be controlled by the ReplicaSet (even though it's a deployment)
  selector:
    matchLabels:
      type: front-end
    
```

## Commands

```shell title="Create a Deployment"
kubectl create -f deployment-definition.yml
```
```shell
kubectl apply -f deployment-definition.yml
```

<br/>


```shell title="List Deployments"
kubectl get deployments
```
