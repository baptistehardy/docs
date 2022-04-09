---
title: Monitoring Cluster Components
---

Monitoring **node**-level metrics and **pods** level-metrics:
- Metrics Server (in-memory solution, no history)
- Prometheus
- Elastic Stack
- Datadog
- Dynatrace

Kubelet has a cAdvisor component to retrieve metrics from pods and expose them through its API.

## Commands

```shell title="Get metrics from nodes"
kubectl top node
```

```shell title="Get metrics from pods"
kubectl top pod
```
