---
title: 'kubectl'
sidebar_position: 1
---

CLI access to k8s’ API server

### Config using file
```
kubectl apply -f config-file.yml
kubectl delete -f config-file.yml
```

### CRUD commands

```
kubectl create deployment [name] --image=[image]
kubectl edit deployment [name]
kubectl delete deployment [name]
```

### Component status

```
kubectl get nodes | pod | services | replicaset | deployment
```

### Pod debugging

```
kubectl describe pod [pod name] # pod info -> details & events
kubectl logs [pod name]
kubectl exec -it [pod name] -- bin/bash
```

### Namespace

```
kubectl get services -n|--namespace kubernetes-dashboard
```
