---
title: Manual Scheduling
---

If no _nodeName_ (spec section) is set in the pod/deployment definition manifest, the scheduler will bind the pod to a 
node then 
write its name under _nodeName_ and creating a **Binding** object.

:::caution

The _Binding_ kind has be deprecated since 1.7

:::

If there is no scheduler, the pod will stay in a _Pending_ state; but you can do its work by setting the _nodeName_ 
in the _spec_ section at creation time. If the pod is already created, you won't be able to modify the _nodeName_ of 
the pod, but you can send a pod binding object definition to the Kube API:

```yaml
apiVersion: v1
kind: Binding
metadata:
  name: nginx
target:
  apiVersion: v1
  kind: Node
  name: node03
```

```shell
curl --header "Content-Type: application/json" --request POST --data '{"apiVersion": "v1", "kind": "Binding", ...}' 
http://$SERVER/api/v1/namespaces/default/pods/$PODNAME/binding
```
