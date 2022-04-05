---
title: Labels and Selectors
---

With **labels**, you can group objects according to their _type_, _functionality_, _environment_ etc, then select these 
object with **selectors**.

You can set **labels** as a key-value store under the _metadata_ section of a definition manifest file.

```shell type="Select pods with a defined label"
kubectl get pods --selector app=App1
```

You can use **selectors** under the _spec_ section of a definition file.

```yaml
apiVersion: apps/v1
kind: ReplicaSet
metadata:
  name: webapp
  labels: 
    app: App1
    type: front-end
spec:
  replicas: 3
  selector:
    # Set the labeled objects to select here
    matchLabels:
      app: App1
  template:
    # etc...
```

## Annotations

You can also use **annotations** to add information about your objects, like build versions, contact details etc.
