---
title: Network Policy
---

## Ingress & Egress

For a front-end app's point of view, **ingress** traffic is received from the users at port 80 and **egress** 
traffic is 
sent to 
the API at port 5000. 

That API's ingress traffic is from the front-end server at port 5000 and the egress traffic to the database at port 5432.

At the end, the database's ingress traffic is from the API at port 5432.

-> Ingress :80 -> Egress: 5000 -> Ingress: 5000 -> Egress: 5432 -> Ingress :5432

## Network Security

By default, Kubernetes is an "**All Allow**" policy that allows all pods to reach each other via their pods names, 
services or IPs across all nodes.

To limit what pod can access what other pod (e.g. the front-end pod should not be able to access the database pod), 
you need to configure a **network policy** resource to link to a pod. 

## Network Policy

That network policy could look like: `Allow Ingress Traffic from API pod on Port 5432`. The front-end pod will then 
not be able to communicate to the database pod.

To apply a network policy to a pod, you'll need to use **selectors** with the `podSelector > matchLabels` parameters 
on the network policy resource matching the pod's labels.

### Rules

`Allow Ingress Traffic from API pod on Port 5432`:

```yaml
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: db-policy
spec:
  podSelector:
    matchLabels:
      role: db
  policyTypes:
    - Ingress
    - Egress
  ingress:
    - from:
      - podSelector:
          matchLabels:
            name: api-pod
      - namespaceSelector:
          matchLabels:
            name: prod
      - ipBlock:
          cidr: 192.168.1.0/24
      ports:
        - protocol: TCP
          port: 5432
  egress:
    - to:
      - ipBlock:
          cidr: 192.168.2.10/24
      ports:
        - protocol: TCP
          port: 80
```
