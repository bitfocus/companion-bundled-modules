# mDNS browser

TypeScript/JavaScript library for discovery and publishing of services using
Multicast DNS (mDNS) and DNS-SD also known as Zeroconf/Bonjour.

To install:

```
npm install tinkerhub-mdns
```

Example:

```javascript
const { MDNSServiceDiscovery } = require('tinkerhub-mdns');

const discovery = new MDNSServiceDiscovery({
  type: 'spotify-connect'
});

// Listen for services as they become available
discovery.onAvailable(service => {
  // Service available
});

// And for updates to them, such as new network addresses
discovery.onUpdate(service => {
  // Service updated
});

// And for when they are no longer available
discovery.onUnavailable(service => {
  // Service no longer available
});

// When discovery is no longer needed destroy it
discovery.destroy();
```

## Service data

Every service discovered using this discovery will have some data available:

* `id: string` - the identifier of the service, the hostname as used in DNS-SD
* `name: string` - the parsed name
* `type: string` - the type of service
* `protocol: 'tcp' | 'udp'` - the protocol used in the registration
* `subtypes: string[]` - subtypes found for the service
* `addresses: HostAndPort[]` - addresses where the service can be reached
* `data: Map<string, string | boolean>` - decoded data for the service
* `binaryData: Buffer[]` - raw binary data

## Publishing services

This library supports publishing of services using `MDNSServicePublisher`:

```javascript
import { MDNSServicePublisher } from 'tinkerhub-mdns';

const publisher = new MDNSServicePublisher({
  name: 'unique-name-of-service',

  type: 'http',

  protocol: 'tcp',

  port: 8080
});

// To unpublish call destroy()
await publisher.destroy();
```
