---
title: Services
---

Services enable communication between various components within and outside an application, connectivity between pods

A service will listen to a port on the node and forward requests on that port to a port on the pod running the app 
(NodePort)

It has its own IP address (cluster IP of the service)

## Service types

### NodePort

Mapping a port on a node to a port on a pod

From the viewpoint of the service :

Node:30080 (NodePort) <=> Service Port 80 (Port) <=> Pod:80 (Target Port)

The NodePort has a range of 30000-32767

If multiple pods are selected by the service by default:
- Algorithm: Random
- SessionAffinity: Yes

Also, by default, the service will span multiple nodes and search for all the pods with the selected tags. You'll 
then be able to connect to the app via the nodes' IP adresses on the same port (30080 here).


```yaml title="service-definition.yml"
apiVersion: v1
kind: Service
metadata:
  name: myapp-service
spec:
  type: NodePort
  ports:
    # If targetPort is not defined, port will be used for both
    - targetPort: 80
      port: 80
      nodePort: 30080
  selector:
    app: myapp
    type: front-end
```

### ClusterIP

A single interface to access a group of pods (back-end, front-end, redis, database etc)

```yaml title="service-definition.yml"
apiVersion: v1
kind: Service
metadata:
  name: back-end
spec:
  type: ClusterIP
  ports:
    - targetPort: 80
      port: 80
  selector:
    app: myapp
    type: back-end

```

### LoadBalancer

Can replace a separate NGINX server for load balancing/reverse proxy.

Only works with supported cloud platforms, otherwise it will work as a NodePort service.

```yaml title="service-definition.yml"
apiVersion: v1
kind: Service
metadata:
  name: myapp-service
spec:
  type: LoadBalancer
  ports:
    - targetPort: 80
      port: 80
      nodePort: 30080
```

## Commands

```shell title="Create a service"
kubectl create -f service-definition.yml
```

<br/>

```shell title="List services"
kubectl get services
```

<br/>

```shell title="Describe services"
kubectl describe services service-name
```
