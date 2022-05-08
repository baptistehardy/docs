---
file: KubeConfig
---

By default, _kubectl_ looks for the KubeConfig file in `$HOME/.kube/config`.

## KubeConfig file

The `KubeConfig` file has three sections:
- Clusters (_URL_: Development, Production, AWS/GCP etc.)
- Contexts (_clusters & users_: Admin@Production, AWS@dev_user etc.)
- Users (_Certificates_: Admin, dev_user etc.)

```yaml title="KubeConfig File"
apiVersion: v1
kind: Config 
current-context: dev_user@aws # default context used
clusters:
  - name: my-kube-server
    cluster:
      certificate-authority: ca.crt
      server: https://my-kube-server:6443
contexts:
  - name: my-kube-admin@my-kube-server
    context:
      cluster: my-kube-server
      user: my-kube-admin
      namespace: kube-system
users:
  - name: my-kube-admin
    user:
      client-certificate: admin.crt
      client-key: admin.key
```

## Commands

```shell title="Get the current KubeConfig"
kubectl config view
```

```shell title="Change context"
kubectl config use-context production-user@kube-production-server
```
