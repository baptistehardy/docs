---
title: Designing a Cluster
---

- Education :
  - Minikube
  - Single node cluster via `kubeadm`/GCP/AWS/AKS
- Development & Testing:
  - Multi-node cluster with 1 master and multiple workers
  - `kubeadm` or GCP/AWS/AKS
- Production applications hosting:
  - Multi-node cluster with multiple master nodes
  - `kubeadm` or GCP/AWS/AKS
  - Up to 5000 nodes
  - Up to 150 000 pods
  - Up to 300 000 containers
  - Up to 100 pods/node

## On-prem

Use `kubeadm`; _GKE_ for GCP, _Kops_ for AWS and _AKS_ for Azure.

## Storage

- High performance: SSD storage
- Multiple concurrent connections: network-based storage
- Persistent shared volumes
- Label nodes with specific disk types
- Use **node selectors** to assign apps to nodes with certain characteristics 

## Nodes

- Virtual or physical machines
- Linux X86_64 arch
- Minimum of 4 nodes
- Don't host workloads on master nodes
- ETCD instances can be separated from the master nodes
