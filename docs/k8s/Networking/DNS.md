---
title: DNS
---

Whenever a _service_ is created, the Kubernetes DNS pod creates a record for the service, mapping the service name 
to the IP address. Now, in the default namespace, any pod can reach the service using its **service name** (`curl 
http://web-service`).

If the service isn't in the `default` namespace, you can talk to it with `http://web-service.apps` (`apps` being the 
name of the namespace).

You can also access the service via `curl http://web-service.apps.svc.cluster.local` (FQDN):

- Hostname: `web-service`
- Namespace: `apps`
- Type: `svc` (for service)
- Root (by default): `cluster.local` 

*Pods*, on the other hand, have DNS entries that correspond to their IP address with the dots replaced by dashes (`curl 
http://10-165-57-5.apps.pod.cluster.local`). 
