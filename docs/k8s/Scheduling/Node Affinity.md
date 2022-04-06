---
title: Node Affinity
---

With **node selectors**, you cannot provide advanced expressions like OR or NOT, only AND. You can with **node 
affinities**.

What looked simple before is now much more complex but more advanced:

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: myapp-pod
spec:
  containers:
    - name: data-cruncher
      image: data-cruncher
  affinity:
    nodeAffinity:
      requiredDuringSchedulingIgnoredDuringExecution:
        nodeSelectorTerms:
          - matchExpressions:
              - key: "size"
                operator: In
                values:
                  - Large
                  - Medium
              # Kinda dumb but it's just an example
              - key: "size"
                operator: NotIn
                values:
                  - Small
              - key: "size"
                operator: Exists # or DoesNotExist
```


Node affinity types:

- _requiredDuringSchedulingIgnoredDuringExecution_
- _preferredDuringSchedulingIgnoredDuringExecution_ (telling the scheduler to try its best at finding a corresponding 
  node)
- TBA: _requiredDuringSchedulingRequiredDuringExecution_

Changes in node affinity will not affect the running pods in the currently available affinity types.
