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
