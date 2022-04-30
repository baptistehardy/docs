---
title: Backup & Restore Methods
---

## Resource configurations

The *declarative* way is preferred for backups of **Resource Configurations**. That way, they can be uploaded to a
repository and reused easily.

`kubectl get all --all-namespaces -o yaml > all-deployed-services.yml` or use tools like **Velero**.

## ETCD

By default, ETCD data is stored in `/var/lib/etcd` as stated in the `--data-dir` command.

```shell title="Save a snapshot of ETCD in the current folder"
ETCDCTL_API=3 etcdctl snapshot save snapshot.db --endpoints=https://127.0.0.1:2379 --cacert=/etc/etcd/ca.crt 
--cert=/etc/etcd/etcd-server.crt --key=/etc/etcd/etcd-server.key
```

```shell title="Get the status of the backup"
ETCDCTL_API=3 etcdctl snapshot status snapshot.db
```

```shell title="Restore from the backup"
ETCDCTL_API=3 etcdctl snapshot restore snapshot.db --data-dir /var/lib/etcd-from-backup
```
