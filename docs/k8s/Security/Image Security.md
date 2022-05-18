---
title: Image Security
---

The `image` parameter in a container has one explicit part and two implicit ones. 

For example, when using `image: nginx`, `image: docker.io/library/nginx` is implicit, as `library` is the default 
user/account 
that Docker images are from and `docker.io` is the default registry URL.

`image: registry/user/image`

## Private Repository

To use a private registry in Kubernetes, first create a Secret of type `docker-registry` :

```shell
kubectl create secret docker-registry regcred --docker-server=registry-url.io --docker-username=registry-user
--docker-password=registry-password --docker-email=registry@email.com
```

Then add a `imagePullSecrets` parameter to the `spec` section:

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: nginx
spec:
  containers:
    - name: nginx
      image: nginx:1.21.6
  imagePullSecrets:
    - name: regcred
```
