---
title: Certificate Details
---

```shell title="Get certificate details"
openssl x509 -in /etc/kubernetes/pki/apiserver.crt -text -noout
```

```shell title="Inspect service logs"
journalctl -y etcd.service -l 
```

```shell title="View logs with kubeadm"
kubectl logs etcd-master
```

```shell title="View logs via Docker"
docker ps -a 
docker logs [container-id]
```
