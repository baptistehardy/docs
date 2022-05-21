---
title: Persistent Volumes
---

**Persistent Volumes** (PV) are **cluster-wide** pool of storage volumes that can be claimed with **Persistent Volumes 
Claims** (PVC).

```yaml title="pv-definition.yml"
apiVersion: v1
kind: PersistentVolume
metadata:
  name: pv-1
spec:
  accessModes:
    - ReadWriteOnce
    # - ReadOnlyMany
    # - ReadWriteMany
  capacity:
    storage: 1Gi
  hostPath:
    path: /tmp/data
```

## Persistent Volume Claim (Binding)

Types of binding: 

- Sufficient Capacity
- Access Modes
- Volumes Modes
- Storage Class
- Selector

```yaml title="pvc-definition.yml"
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: pv-1-claim
spec:
  accessModes:
    - ReadWriteOnce
  resources:
    requests:
      storage: 500Mi
```

## Using in pods

```yaml
apiVersion: v1
kind: Pod 
metadata:
  name: web-server
spec:
  containers:
    - name: nginx
      image: nginx
      volumeMounts:
        - mountPath: /var/www/html
          name: nginx-volume
  volumes:
    - name: nginx-volume
      persistentVolumeClaim:
        claimName: pv-1-claim
```
