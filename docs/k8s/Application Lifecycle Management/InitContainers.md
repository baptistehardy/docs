---
file: InitContainers
---

**InitContainers** are only run once at the creation of a new pod before any normal container is started. These are 
useful to setup an application or a database with scripts.

If any of the **InitContainers** fail to complete, Kubernetes restarts the pod repeatedly until the InitContainers 
succeed.

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: myapp-pod
  labels:
    app: myapp
spec:
  containers:
  - name: myapp-container
    image: busybox
    command: ['sh', '-c', 'echo The app is running! && sleep 3600']
  initContainers:
  - name: init-container
    image: busybox
    command: ['sh', '-c', 'git clone <repository-url> ; done;']
```
