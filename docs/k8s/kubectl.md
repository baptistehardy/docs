---
title: 'kubectl'
sidebar_position: 1
---

CLI access to k8s’ API server

#### Config using file
```
kubectl apply -f config-file.yml
kubectl delete -f config-file.yml
```

#### CRUD commands

```
kubectl create deployment [name] --image=[image]
kubectl edit deployment [name]
kubectl delete deployment [name]
```

#### Component status

```
kubectl get nodes | pod | services | replicaset | deployment
```

#### Pod debugging

```
kubectl describe pod [pod name] # pod info -> details & events
kubectl logs [pod name]
kubectl exec -it [pod name] -- bin/bash
```

#### Namespace

```
kubectl get services -n|--namespace kubernetes-dashboard
```

## kubectl run

```shell title="Create an NGINX Pod"
kubectl run nginx --image=nginx
```

```shell title="Generate a pod manifest YAML file"
kubectl run nginx --image=nginx --dry-run=client -o yaml
```

## kubectl create

```shell title="Create a deployment"
kubectl create deployment --image=nginx nginx
```

```shell title="Generate a deployment manifest YAML file"
kubectl create deployment --image=nginx nginx --dry-run=client -o yaml
```

```shell title="Generate a deployment manifest YAML file with 4 replicas"
kubectl create deployment --image=nginx nginx --replicas=4 --dry-run=client -o yaml > nginx-deployment.yaml
```

## kubectl apply

Creates the object if it doesn't already exist.

A **last applied configuration** file in JSON is stored by Kubernetes as an **annotation** in the live object configuration to compare the local file and the live object configuration.

## kubectl set

```shell
kubectl set image deployment/myapp-deployment container-name=image-name
```
