---
title: RBAC
---

```yaml title="developer-role.yml"
apiVersion: rbac.authorization.k8s.io/v1
kind: Role
metadata:
  name: developer
rules:
  - apiGroups: [""]
    resources: ["pods"]
    verbs: ["list", "get", "create", "update", "delete"]
  - apiGroups: [""]
    resources: ["ConfigMap"]
    verbs: ["create"]
```

```shell
kubectl create role developer --namespace=default --verb=list,get,create,update,delete --resource=pods
```

```yaml title="devuser-developer-binding.yml"
apiVersion: rbac.authorization.k8s.io/v1
kind: RoleBinding
metadata:
  name: devuser-developer-binding
subjects:
  - kind: User
    name: dev-user
    apiGroup: rbac.authorization.k8s.io
roleRef:
  apiGroup: rbac.authorization.k8s.io
  kind: Role
  name: developer
```

```shell
kubectl create rolebinding dev-user-binding --namespace=default --role=developer --user=dev-user
```

## Commands

```shell
kubectl create -f developer-role.yml
```

```shell
kubectl get roles
```

```shell
kubectl get rolebindings
```

```shell
kubectl describe role developer
```

```shell
kubectl describre rolebinding devuser-developer-binding 
```

## Check Access

```shell
kubectl auth can-i create deployments
```

```shell
kubectl auth can-i delete nodes
```

```shell
kubectl auth can-i create deployments --as dev-user
```

```shell
kubectl auth can-i create pods --as dev-user
```

```shell
kubectl auth can-i create pods --as dev-user --namespace test
```
