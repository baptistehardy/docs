---
title: 'Pods'
---

## YAML

### Definition

```yaml title="pod-definition.yml"
apiVersion: v1 # Type: String
kind: Pod # Type: String
metadata: 
  # Type: Dictionary
  # Accepts specific fields
  name: myapp-pod
  labels:
    # Type: Dictionary
    # Made to label roles of pods (web, api, database, etc.) or anything to identify them
    app: myapp
    type: front-end

# Type: Dictionary
spec:
  # Type: List/array
  # Pods can have multiple containers inside them
  containers:
    - name: nginx-container
      image: nginx 
```
### Example

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: nginx
  labels:
    app: nginx
    type: front-end
spec:
  containers:
    - name: nginx
      image: nginx:1.21.6
```

## Commands

```shell title="Create a pod"
kubectl create -f pod-definition.yml
```
```shell
kubectl apply -f pod-definition.yml
```
<br/>

```shell title="List pods available"
kubectl get pods
```

<br/>

```shell title="Get detailed information about a pod"
kubectl describe pod myapp-pod
```

<br/>

```shell title="Delete pod"
kubectl delete pod myapp-pod
```
