---
title: Resource Requirements and Limits
---

## Resource Requests

If there is no sufficient resources available on all nodes, the scheduler will keep pods as _Pending_.

By default, Kubernetes assumes that a container will need **0.5 CPU** and **256 Mi of RAM**.

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: webapp
  labels:
    name: webapp
spec:
  containers:
    - name: webapp-container
      image: webapp
      ports:
        - containerPort: 8080
      resources:
        requests:
          memory: "1Gi"
          cpu: "1" # minimum is 0.1
```

## Resources Limits

If a pod tries to consume more CPU, it'll be throttled. 

If a pod tries to consume more memory constantly, it'll be terminated.

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: webapp
  labels:
    name: webapp
spec:
  containers:
    - name: webapp-container
      image: webapp
      ports:
        - containerPort: 8080
      resources:
        requests:
          memory: "1Gi"
          cpu: "1"
        limits:
          memory: "2Gi"
          cpu: "2"
```

By default, a container will take **1 vCPU** and **512 Mi of RAM** maximum.

For a pod to pick up those defaults, you must have first set those as default values for request and limit by creating a **LimitRange** in that namespace.


```yaml title="Limiting CPU usage"
apiVersion: v1
kind: LimitRange
metadata:
  name: cpu-limit-range
spec:
  limits:
  - default:
      cpu: "1"
    defaultRequest:
      cpu: "0.5"
    type: Container
```

```yaml title="Limiting RAM usage"
apiVersion: v1
kind: LimitRange
metadata:
  name: memory-limit-range
spec:
  limits:
  - default:
      memory: 512Mi
    defaultRequest:
      memory: 256Mi
    type: Container
```
