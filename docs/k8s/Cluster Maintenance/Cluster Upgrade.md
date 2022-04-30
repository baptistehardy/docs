---
title: Cluster Upgrade
---

Control plane components cannot be on a newer version than the API server.

Only the **last three newest versions** of Kubernetes are **supported** (e.g. if v1.23 is released, v1.20 is now unsupported).

The recommended way is **upgrading to each version at a time** (no jump from v1.20 to v1.23, only from v1.20 to v1.
21 to v1.22 to v1.23).

## How to upgrade

### kubeadm

- Upgrade the master nodes first (no impact on the deployed services but no access to the API)
- Upgrade one worker node at a time **or** make new ones and replace the old nodes 

You'll need to upgrade **kubeadm** manually, then **kubelet** manually.

Warning: When using `kubectl get nodes`, **kubelet**'s version is shown.

#### Master nodes

- `kubeadm upgrade plan`
- `apt update`
- `apt install kubeadm=1.12.0-00`
- `kubeadm upgrade apply v1.12.0`
- `apt install kubelet=1.12.0-00`
- `systemctl restart kubelet`


#### Worker nodes

- `kubectl drain node-01`
- `ssh node-01`
- `apt install kubeadm=1.12.0-00`
- `apt install kubelet=1.12.0-00`
- `kubeadm upgrade node`
- `systemctl restart kubelet`
- `kubectl uncordon node-01`
