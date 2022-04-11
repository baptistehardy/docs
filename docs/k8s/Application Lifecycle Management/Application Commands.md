---
file: Application Commands
---

A container only lives as long as the process inside it is alive.
If a service inside the container is stopped or crashes, the container exits.

This process is defined by the `CMD` command inside the **image**.

_Nginx_ or _MySQL_ use their own process as `CMD` to run their image. On the other hand, _Ubuntu_ uses `bash` so it exits 
right away if it cannot find inputs (`docker run ubuntu sleep 5`) or a terminal.

By default, Docker **does not attach a terminal** to a container when it is run.

In a `Dockerfile`, `CMD` has to either be a **shell command** (`CMD sleep 5`) or a **JSON array** where the first 
argument is the **executable/command** (`CMD ["sleep", "5"]`).

You can use `ENTRYPOINT` (`ENTRYPOINT ["sleep"]`) command in the _Dockerfile_ then append the number of seconds 
in the command line (also using `--entrypoint`). You can _also_ use `CMD` afterwards to set a **default value** 
(`CMD ["5"]`).

## Arguments

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: ubuntu-custom-pod
spec:
  containers:
    - name: ubuntu-custom
      image: ubuntu-custom
      args: ["10"] # Overrides CMD value
      command: ["new-sleep-command"] # Overrides ENTRYPOINT value
```
