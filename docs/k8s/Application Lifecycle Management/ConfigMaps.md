---
title: ConfigMaps
---

## Imperative

```shell title="Create a ConfigMap"
kubectl create configmap configmap-name \
    --from-literal=DATABASE_URL=127.0.0.1:5432
    --from-literal=APP_SECRET=e6ef478se4f87rg984dr5115sezf8
```

```shell title="Create a ConfigMap with a file"
kubectl create configmap configmap-name --from-file=app.env
```

## Declarative

```yaml title="config-map.yml"
apiVersion: v1
kind: ConfigMap
metadata:
  name: app-config
data:
  DATABASE_URL: 127.0.0.1:5432
  APP_SECRET: e6ef478se4f87rg984dr5115sezf8
```

```shell title="Create a ConfigMap via manifest file"
kubectl create -f config-map.yml
```

## In a Pod definition

### Entire ConfigMap

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
        - configMapRef:
            name: app-config
```

### Values from ConfigMaps

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
        - name: DATABASE_URL
          valueFrom:
            configMapKeyRef:
              name: app-config
              key: DATABASE_URL
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
    - name: app-config-volume
      configMap:
        name: app-config
```

## Commands

```shell
kubectl get configmaps
```

```shell
kubectl describe configmaps
```
