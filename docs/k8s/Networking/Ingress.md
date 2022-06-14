---
title: Ingress
---

Ingress is a built-in Layer 7 **load balancer**.

Ingress **Controllers** are not included by default.

Ingress **Resources** are configuration files (manifests).


## Ingress Controllers

Ingress **Controllers**:
- Nginx
- HAProxy
- Traefik
- Contour
- Istio
- GCE (GCP)

### Nginx 

#### Deployment 

```yaml
apiVersion: extensions/v1beta1
kind: Deployment
metadata:
  name: nginx-ingress-controller
spec:
  replicas: 1
  selector:
    matchLabels:
      name: nginx-ingress
  template: 
    metadata:
      labels: 
        name: nginx-ingress
    spec:
    containers:
      - name: nginx-ingress-controller
        image: quay.io/kubernetes-ingress-controller/nginx-ingress-controller:0.31.1
      args:
        - /nginx-ingress-controller
        - --configmap=$(POD_NAMESPACE)/nginx-configuration
      env:
        - name: POD_NAME
          valueFrom:
            fieldRef:
              fieldPath: metadata.name
        - name: POD_NAMESPACE
          valueFrom:
            fieldRef:
              fieldPath: metadata.namespace
      ports:
        - name: http
          containerPort: 80
        - name: https
          containerPort: 443
```

#### ConfigMap

```yaml
kind: ConfigMap
apiVersion: v1
metadata:
  name: nginx-configuration
```

#### Service

```yaml
apiVersion: v1
kind: Service
metadata:
  name: nginx-ingress
spec:
  type: NodePort
  ports:
    - port: 80
      targetPort: 80
      protocol: TCP
      name: http
    - port: 443
      targetPort: 443
      protocol: TCP
      name: https
  selector:
    name: nginx-ingress
```

#### Auth

```yaml
apiVersion: v1
kind: ServiceAccount
metadata:
  name: nginx-ingress-serviceaccount
```

#### Roles 

#### ClusterRoles

#### RoleBindings

## Ingress Resources

```yaml
apiVersion: extensions/v1beta1
kind: Ingress
metadata: 
  name: ingress-subdomain1
spec: 
  backend:
    serviceName: subdomain1-service
    servicePort: 80
```

### Hosts

```yaml
apiVersion: extensions/v1beta1
kind: Ingress
metadata: 
  name: ingress-paths
spec:
  rules:
    - host: subdomain1.domain.com
      http:
        paths:
          - backend:
              serviceName: subdomain1-service 
              servicePort: 80
    - host: subdomain2.domain.com
      http:
        paths:
          - backend:
              serviceName: subdomain2-service
              servicePort: 80
```

### Paths

```yaml
apiVersion: extensions/v1beta1
kind: Ingress
metadata: 
  name: ingress-paths
spec:
  rules:
    - http:
        paths:
          - path: /path1
            backend:
              serviceName: path1-service 
              servicePort: 80
          - path: /path2
              serviceName: path2-service
              servicePort: 80
```

## Commands

```yaml title="Imperative ingress creation command"
kubectl create ingress <ingress-name> --rule="host/path=service:port"
```
