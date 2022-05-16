---
title: Cluster Roles
---

## Scoped resources

Resources are either **namespaced** or **cluster-scoped**.

You can get the list of resources by using the `kubectl api-resources --namespaced=[true or false]` command.

### Namespaced resources

By default, they are created in the *default* namespace. You have to specify the namespace they belong to in the 
command/specification.

- Pods
- ReplicaSets
- Jobs
- Deployments
- Services
- Secrets
- Roles
- RoleBindings
- ConfigMaps
- PVC

### Cluster-scoped

- Nodes
- PV (Persistent Volumes)
- ClusterRoles
- ClusterRoleBindings
- CertificateSigningRequests
- Namespaces

## Cluster Roles

A cluster admin could view, create and delete nodes.

A storage admin could only view, create and delete persistent volumes (PVs).

:::tip

You can also give access to all namespaced resources through cluster roles, like pods and services.

:::

```yaml title="cluster-admin-role.yml"
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRole
metadata:
  name: cluster-administrator
rules: 
  - apiGroups: [""]
    resources:
      - nodes
    verbs:
      - list
      - get 
      - create
      - delete
```

```yaml title="cluster-admin-role-binding.yml"
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRoleBinding
metadata:
  name: cluster-admin-role-binding
subjects:
  - kind: User
    name: cluster-admin
    apiGroup: rbac.authorization.k8s.io
roleRef:
  apiGroup: rbac.authorization.k8s.io
  kind: ClusterRole
  name: cluster-administrator
```
