---
title: Namespaces
---

The **default** namespace is available by _default_ when Kubernetes is first set up.

The **kube-system** namespace comprises internal and critical pods (network, DNS service...).

The **kube-public** namespace comprises resources that should be available to all the users.

*Namespaces* allow for **isolation** (e.g. _dev_ and _prod_ namespaces) with their own policies, resource limits...

<br/>

The resources within a same namespace can refer to each other just by their name
(e.g. `mysql.connect("db-service")` where _db-service_ is the hostname of the database).

It is possible to reach a resource from another namespace by appending its name to the resource you want to connect 
to (e.g. `mysql.connect("db-service.dev.svc.cluster.local")` where _dev_ is the namespace, _cluster.local_ is the 
default domain name of a k8s cluster and _svc_ is the subdomain for the service).
A DNS entry is created with the service.

- db-service.dev.svc.cluster.local
- service-name.namespace.service.domain

## YAML

### Namespace manifest

```yaml title="namespace-dev.yml"
apiVersion: v1
kind: Namespace
metadata:
  name: dev
```

### Specifying a namespace for a resource

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: myapp-pod
  // highlight-next-line
  namespace: dev
  labels:
    app: myapp
    type: front-end
spec:
  containers:
    - name: nginx-container
      image: nginx:1.21.6
```

## Commands

```shell title="Get the list of pods from another namespace"
kubectl get pods --namespace=kube-system
```
```shell
kubectl get pods -n kube-system
```

<br/>

```shell title="Create a pod in a specified namespace"
kubectl create -f pod-definition.yml --namespace=dev
```

<br/>

```shell title="Create a namespace"
kubectl create -f namespace-dev.yml
```
```shell
kubectl create namespace dev
```
<br/>

```shell title="Change the current namespace to dev"
kubectl config set-context $(kubectl config current-context) --namespace=dev
```

<br/>

```shell title="List pods from all namespaces"
kubectl get pods --all-namespaces
```

## Resource Quota

```yaml title="compute-quota.yml"
apiVersion: v1
kind: ResourceQuota
metadata:
  name: compute-quota
  namespace: dev
spec:
  hard:
    pods: '10'
    requests.cpu: '4'
    requests.memory: 5Gi
    limits.cpu: '10'
    limites.memory: 10Gi
```
