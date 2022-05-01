---
title: Security Primitives
---

## Access to the API server

Who can access (**authentication**) and what can they do (**authorization**)?

### Authentication

- Username/password or username/token
- Certificates
- Authentication providers (e.g. LDAP)
- Service Accounts (bots)

### Authorization

- RBAC Authorization
- ABAC Authorization
- Node Authorization
- Webhook Mode

## TLS Certificates

All communication between the API server and the other components of the cluster are secured by **TLS certificates**.

## Network Policies

By default, all nodes can talk to each other within a cluster.

You can restrict that access with **Network Policies**.
