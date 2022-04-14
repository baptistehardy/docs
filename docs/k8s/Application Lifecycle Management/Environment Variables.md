---
title: Environment Variables
---

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
          value: 127.0.0.1:5432
```

## ENV Value Types

### Plain Key Value

```yaml
env:
  - name: DATABASE_URL
    value: 127.0.0.1:5432
```

### ConfigMap

```yaml
env:
  - name: DATABASE_URL
    valueFrom:
      configMapKeyRef:
```

### Secrets

```yaml
env:
  - name: DATABASE_URL
    valueFrom:
      secretKeyRef:
```
