---
title: TLS in Kubernetes
---

## Terms

- Root Certificates (CA)
- Client Certificates
- Server Certificates

Certificate = Public Key

Certificates generally have _.crt_ or _.pem_ file extensions.

Private keys generally have _.key_ or _-key.pem_ file extensions.

## Server Certificates

- **Kube API server**: apiserver.crt & apiserver.key
- **ETCD**: etcdserver.crt & etcdserver.key
- **Kubelet**: kubelet.crt & kubelet.key

## Client Certificates

Clients that interact with the API server

- **Admin**: admin.crt & admin.key
- **Kube Scheduler**: scheduler.crt & scheduler.key
- **Kube Controller Manager**: controller-manager.crt & controller-manager.key
- **Kube Proxy**: kube-proxy.crt & kube-proxy.key
- **Kube API to ETCD**: apiserver-etcd-client.crt & apiserver-etcd-client.key
- **Kube API to Kubelet**: apiserver-kubelet-client.crt & apiserver-kubelet-client.key

## Certificate Authority

Kubernetes requires at least one CA for the TLS certificates in a cluster.

## Certificate Creation

### Certificate Authority

```shell title="Generate the private key"
openssl genrsa -out ca.key 2048
```

```shell title="Certificate Signing Request"
openssl req -new -key ca.key -subj "/CN=KUBERNETES-CA" -out ca.csr
```

```shell title="Sign the certificate"
openssl x509 -req -in ca.csr -signkey ca.key -out ca.crt
```

### Admin user

```shell title="Generate the private key"
openssl genrsa -out admin.key 2048
```

```shell title="Certificate Signing Request"
openssl req -new -key admin.key -subj "/CN=kube-admin/O=system:masters" -out admin.csr
```

```shell title="Sign the certificate"
openssl x509 -req -in admin.csr -CA ca.crt -CAkey ca.key -out admin.crt
```

#### Usage

##### CMD

`curl https://kube-apiserver:6443/api/v1/pods --key admin.key --cert admin.crt --cacert ca.crt`

##### kube-config

```yaml title="kube-config.yml"
apiVersion: v1
kind: Config
clusters:
  - cluster:
      certificate-authority: ca.crt
      server: https://kube-apiserver:6443
    name: kubernetes
users:
  - name: kubernetes-admin
    user: 
      client-certificate: admin.crt
      client-key: admin.key
```

### kube-scheduler

```shell title="Generate the private key"
openssl genrsa -out scheduler.key 2048
```

```shell title="Certificate Signing Request"
openssl req -new -key scheduler.key -subj "/CN=system:kube-scheduler" -out scheduler.csr
```

```shell title="Sign the certificate"
openssl x509 -req -in scheduler.csr -CA ca.crt -CAkey ca.key -out scheduler.crt
```

### kube-controller-manager


```shell title="Generate the private key"
openssl genrsa -out controller-manager.key 2048
```

```shell title="Certificate Signing Request"
openssl req -new -key controller-manager.key -subj "/CN=system:kube-controller-manager" -out controller-manager.csr
```

```shell title="Sign the certificate"
openssl x509 -req -in controller-manager.csr -CA ca.crt -CAkey ca.key -out controller-manager.crt
```

### kube-proxy

```shell title="Generate the private key"
openssl genrsa -out kube-proxy.key 2048
```

```shell title="Certificate Signing Request"
openssl req -new -key kube-proxy.key -subj "/CN=system:kube-proxy" -out kube-proxy.csr
```

```shell title="Sign the certificate"
openssl x509 -req -in kube-proxy.csr -CA ca.crt -CAkey ca.key -out kube-proxy.crt
```

### ETCD

### API server

```shell title="Generate the private key"
openssl genrsa -out apiserver.key 2048
```

```shell title="Certificate Signing Request"
openssl req -new -key apiserver.key -subj "/CN=kube-apiserver -out apiserver.csr -config openssl.cnf
```

```
[req]
req_extensions = v3_req
distinguished_name = req_distinguished_name
[v3_req]
basicConstraints = CA:FALSE
keyUsage = nonRepudiation,
subjectAltName = @alt_names
[alt_names]
DNS.1 = kubernetes
DNS.2 = kubernetes.default
DNS.3 = kubernetes.default.svc
DNS.4 = kubernetes.default.svc.cluster.local
IP.1 = 10.1.1.1
IP.2 = 172.17.0.1
```

### kubelet nodes

Generate certificates for each node with their name and add them to their respective `kubelet-config.yml`:

```yaml
apiVersion: kubelet.config.k8s.io/v1beta1
kind: KubeletConfiguration
authentication:
  x509:
    clientCAfile: "/var/lib/kubernetes/ca.pem"
authorization:
  mode: Webhook
clusterDomain: "cluster.local"
clusterDNS: 
  - "10.32.0.10"
podCIDR: "${POD_CIDR}"
resolvConf: "/run/systemd/resolve/resolv.conf"
runtimeRequestTimeout: "15m"
tlsCertFile: "/var/lib/kubelet/node01.crt"
tlsPrivateKeyFile: "/var/lib/kubelet/node01.key"
```

### kubelet nodes (client certificates)

```shell title="Generate the private key"
openssl genrsa -out kubelet-client-node01.key 2048
```

```shell title="Certificate Signing Request"
openssl req -new -key kubelet-client-node01.key -subj "/CN=system:node:node01/O=SYSTEM:NODES" -out 
kubelet-client-node01.csr
```

```shell title="Sign the certificate"
openssl x509 -req -in kubelet-client-node01.csr -CA ca.crt -CAkey ca.key -out kubelet-client-node01.crt
```
