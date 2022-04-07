---
title: Static Pods
---

**Static Pods** are created by a **kubelet** if there is no api-server, etcd or control-plane altogether by placing 
manifest files in `/etc/kubernetes/manifests`. 

This can allow you to deploy the controller manager, api-server and etcd on master node via kubelet.

Both static pods and daemon sets are ignored by the kube-scheduler.
