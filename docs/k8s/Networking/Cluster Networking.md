---
title: Cluster Networking
---

## IP & FQDN

Each node should have unique **IPs**, **MAC addresses** and **hostnames**.

## Ports

### Master nodes

On master nodes, these ports should be opened:
- **Kube-API**: 6443
- **Kubelet**: 10250
- **Kube-scheduler**: 10251
- **Kube-controller-manager**: 10252
- **ETCD**: 2379-2380

### Nodes

On normal nodes, these ports should be opened:

- **Services**: 30000-32767
- **Kubelet**: 10250
