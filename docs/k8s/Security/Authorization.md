---
title: Authorization
---

## Authorization Mechanisms

### Node Authorizer

Node authorization is a special-purpose authorization mode that specifically authorizes API requests made by _kubelets_.

_Kubelets_ must use a credential that identifies them as being in the` system:nodes` group, with a username of 
`system:node:<nodeName>`.

### ABAC

_ABAC_ = Attribute-based Access Control

Access rights are granted to users through the use of policies which combine attributes together.

To use it, you pass a  `json` policy to the API server.

```json
{"kind":  "Policy", "spec": {"user":  "dev-user", "namespace":  "*", "resource":  "pods", "apiGroup":  "*"}}
```

This method is bothersome and difficult to manage as you have to change the rights of every single user one by one and 
restart the 
API 
server for the changes to apply.

### RBAC

Instead of giving attributes to users, we give them roles that have attributes, like `developer` or `security` that has 
the 
necessary permissions.

### Webhook

Webhooks allows Kubernetes to outsource the authorization decision to a third-party application like Open Policy Agent.

## Authorization Mode

- AlwaysAllow (default)
- AlwaysDeny
- Node
- ABAC
- RBAC
- Webhook

You can set it with the `--authorization-mode=<mode>` argument in the API server service or set them separated with 
quotes (`--authorization-mode=Node,RBAC,Webhook`), the API server will then process the authorization in order.
