---
title: Service Accounts
---

**User Accounts** (humans) vs **Service Accounts** (machines/bots)

Creating a service account generates a token (secret) that you can use to authenticate an application. 

By default, each namespace has a *default* service account that holds a secret. This secret is **mounted by default** to 
all pods within that namespace (`automountServiceAccountToken: false` in `spec`).

Within that pod, you can get the token inside `/var/run/secrets/kubernetes.io/serviceaccount/token`.

To mount another service account to a pod, use the `serviceAccountName` parameter within the `spec` section to specify 
its name.
