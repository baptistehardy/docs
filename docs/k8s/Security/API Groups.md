---
title: API Groups
---

- `/metrics`
- `/healthz`
- `/version`
- `/api`
- `/apis`
- `/logs`

## `/api` (core)

`/api/v1/` (core) gives access to:

- `namespaces`
- `pods`
- `rc`
- `events`
- `endpoints`
- `nodes`
- `bindings`
- `PV`
- `PVC`
- `configmaps`
- `secrets`
- `services`

## `/apis` (named)

Future features will be made available via these named groups.

`/apis` (named) gives access some of these API groups:
- `/apps`
  - `/v1` (resources)
    - `/deployments` (verbs/methods)
      - `list`
      - `get`
      - `create`
      - `delete`
      - `update`
      - `watch`
    - `/replicasets`
    - `/statefulsets`
- `/extensions`
- `/networking.k8s.io`
  - `/v1`
    - `/networkpolicies`
- `/storage.k8s.io`
- `/authentication.k8s.io`
- `/certificates.k8s.io`
  - `/v1`
    - `/certifiatesigninrequest`
