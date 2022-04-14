---
title: Secrets
---

**Secrets** are **encoded/hashed** ConfigMaps.

They **NEED** to be hashed with _base64_.

You can also use tools like **Helm Secrets** and **HashiCorp Vault** to protect secrets.

## Encoding

```shell
echo -n 'password' | base64
```

## Decoding

```shell
echo -n 'cGFzc3dvcmQ=' | base64 --decode
```


## Imperative

```shell title="Create a Secret"
kubectl create secret secret-name \
    --from-literal=DB_PASSWORD=cGFzc3dvcmQ=
    --from-literal=APP_SECRET=e6ef478se4f87rg984dr5115sezf8
```

```shell title="Create a Secret with a file"
kubectl create secret secret-name --from-file=app.env
```

## Declarative

```yaml title="secret.yml"
apiVersion: v1
kind: Secret
metadata:
  name: app-secret
data:
  DB_PASSWORD: cGFzc3dvcmQ=
  APP_SECRET: e6ef478se4f87rg984dr5115sezf8
```

```shell title="Create a Secret via manifest file"
kubectl create -f secret.yml
```

## Using in a Pod definition

### Entire Secret

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: simple-webapp
spec:
  containers:
    - name: simple-webapp
      image: simple-webapp
      ports:
        - containerPort: 8080
      envFrom:
        - secretRef:
            name: app-secret
```

### Values from Secret

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: simple-webapp
spec:
  containers:
    - name: simple-webapp
      image: simple-webapp
      ports:
        - containerPort: 8080
      env:
        - name: DB_PASSWORD
          valueFrom:
            secretKeyRef:
              name: app-secret
              key: DB_PASSWORD
```

### Volume

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: simple-webapp
spec:
  containers:
    - name: simple-webapp
      image: simple-webapp
      ports:
        - containerPort: 8080
  volumes:
    - name: app-secret-volume
      secret:
        secretName: app-secret
```

```shell
ls /opt/app-secret-volumes
```

```shell
cat /opt/app-secret-volumes/DB_PASSWORD
```

## Commands

```shell
kubectl get secrets
```

```shell
kubectl describe secrets
```

```shell
kubectl get secret app-secret -o yaml
```
