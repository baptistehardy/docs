---
title: Authentication
---

## Type of accounts

- Users
  - Admins (`kubectl`)
  - Developers (`curl https://kube-server:6443`)
- Service Accounts (manageable by k8s)
  - Bots

## Authentication Mechanisms

- Static Password File
- Static Token File
- Certificates
- Identity Services

### Basic

This is **NOT** the recommended authentication mechanism.

:::warning

This method was deprecated in 1.19.

:::

#### Static Password File

You can create a `.csv` file with password, username and user ID then pass it to the _Kube API service_/_Kube API 
manifest_ (kubeadm)
with 
`--basic-auth-file=user-details.csv`.

```csv title="user-details.csv"
password123,user1,u0001,group1
password123,user2,u0002,group1
password123,user3,u0003,group2
```

Then, you can use the created credentials with a `curl` command: `curl -v -k https://master-node:6443/api/v1/pods -u 
"user1:password123"`

#### Static Token File

Same as the Static Password File method but you have to set the `--token-auth-file=user-details.csv` command instead.

Then, you can use the created credentials with a `curl` command: `curl -v -k https://master-node:6443/api/v1/pods 
--header "Authorization: Bearer FjuLIg45se78GEseg74fe5f433q8fze"`
