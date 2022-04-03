---
title: Commands
---

## Imperative & Declarative

_Imperative_: Giving all the steps to get to the destination

_Declarative_: Giving the destination as the only instruction

## Infrastructure as Code

_Imperative_ = Step by step instructions on how to provision a VM, set up NGINX on it, editing the configuration files,
git clone a repository, then start the server

_Declarative_ = 
- VM Name: web-server
- Package: nginx
- Port: 8080
- Path: /var/www/nginx
- Code: git clone path

The software (Terraform, Ansible, Puppet...) will do the job according to what you declared.

### In k8s

The **imperative** way is using commands such as: 
- Create objects
  - `kubectl run --image=nginx nginx`
  - `kubectl create deployment --image=nginx nginx`
  - `kubectl expose deployment nginx --port 80`
- Edit objects
  - `kubectl edit deployment nginx`
  - `kubectl scale deployment nginx --replicas=5`
  - `kubectl set image deployment nginx nginx=nginx:1.20`
  

- `kubectl create -f nginx.yml`
- `kubectl replace -f nginx.yml`
- `kubectl delete -f nginx.yml`

The **declarative** way is using the `kubectl apply -f nginx.yml` command. It'll look at what's different and automatically apply the changes.
