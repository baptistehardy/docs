---
title: CNI
---

## Configuration

Network plugins can be setup with the `--network-plugin=cni`, `--cni-bin-dir` and `--cni-conf-dir`parameters for 
the _kubelet_ service.

`/opt/cni/bin` contains all the bin files of the cni-compatible network plugins.

`/etc/cni/net.d` contains the config (`.conf`) file for the CNI used by the *kubelet*.

## Deploying a CNI network plugin

### weave

```shell
kubectl apply -f "https://cloud.weave.works/k8s/net?k8s-version=$(kubectl version | base64 | tr -d '\n')"
```

Weave services will then appear in the `kube-system` namespace.
