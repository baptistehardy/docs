---
title: Certificates API
---

**kubeadm** store the CA files on the master node.

The **Certificates API** allows you to sign certificates with a CA without logging into the master node.

It is managed by the **controller manager**.

This enables you to:

- Create a CSR object
- Review Requests
- Approve Requests
- Share certificates to users

## Usage

```shell title="Generate the private key"
openssl genrsa -out nicolas.key 2048
```

```shell title="Certificate Signing Request"
openssl req -new -key nicolas.key -subj "/CN=nicolas" -out nicolas.csr
```

```yaml title="nicolas-csr.yml"
apiVersion: certificates.k8s.io/v1
kind: CertificateSigningRequest
metadata:
  name: nicolas
spec:
  groups:
    - system:authenticated
  request: # cat nicolas.csr | base64 | tr -d "\n"
  signerName: kubernetes.io/kube-apiserver-client
  usages:
  - server auth
```

```shell title="List requests"
kubectl get csr
```

```shell title="Approve the request"
kubectl certificate approve nicolas
```

```shell title="Get the certificate"
kubectl get csr nicolas -o yaml
```

You'll need to use `base64 --decode` on the `certificate` field from the last command.

You can deny a request with `kubectl certificate deny [request-name]` and delete it with `kubectl delete csr 
[request-name]`.
