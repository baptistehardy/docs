---
title: Rolling Updates & Rollbacks
---

Updates do not only encompass image updates but also label updates, selectors...

By using the `kubectl apply -f` command, rolling updates are automatically created.

## Deployment strategies

- **Recreate**: creates downtime as all the pods from the deployment are destroyed then recreated
- **Rolling Update** (default): creates a new ReplicaSet creating new pods as old pods from the old ReplicaSet are 
  destroyed

```shell title="Get the status of the rollout"
kubectl rollout status deployment/myapp-deployment
```

```shell title="Get the revision history of a deployment"
kubectl rollout history deployment/myapp-deployment
```

## Rollback

A **rollback** will do the reverse and bring back the old ReplicaSet and scale down the new one.

```shell title="Rollback an update"
kubectl rollout undo deployment/myapp-deployment
```
