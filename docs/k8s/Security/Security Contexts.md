---
title: Security Contexts
---

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: sleep-pod
spec:
  # pod-level
  securityContext:
    runAsUser: 1000
  containers:
    - name: ubuntu
      image: ubuntu 
      command:
        - sleep 3600
      # container-level
      securityContext:
        runAsUser: 1000
        capabilities:
          add:
            - MAC_ADMIN
```
