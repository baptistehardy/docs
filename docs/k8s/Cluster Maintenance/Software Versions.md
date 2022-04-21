---
title: Software Versions
---

Kubernetes follows the **SemVer** versioning terminology.

On the _Release_ page of the [k8s GitHub repository](https://github.com/kubernetes/kubernetes), you can extract the 
archive's contents and find the executables for all Kubernetes components of the control plane (kube-apiserver, 
controller-manager, kube-scheduler, kubelet, kube-proxy, kubectl, ETCD and CodeDNS). 

kube-apiserver, controller-manager, kube-scheduler, kubelet, kube-proxy, kubectl all share the same version as 
kubernetes itself. However, ETCD and CodeDNS are independent components and share a different version number.

You can get the current version of a node with `kubectl get nodes`.
