---
title: Storage Class
---

````yaml title="sc-definition.yml"
apiVersion: storage.k8s.io/v1
kind: StorageClass
metadata:
  name: google-storage
provisioner: kubernetes.io/gce-pd
````

```yaml title="pvc-definition.yml"
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: gce-claim
spec:
  accessModes:
    - ReadWriteOnce
  storageClassName: google-storage
  resources:
    requests:
      storage: 500Mi
```
