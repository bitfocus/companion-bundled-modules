## APC Rack PDU

This module provides control for the APC Rack PDU devices over SNMP.

## Configuration

The module requires the IP address of the APC Rack PDU device and the SNMP community string to connect.

This module is based on the npm package https://www.npmjs.com/package/rackpdu.

Required PDU configuration for the plugin to interact with the Rack PDU:

```text
Configure Rack PDU Hardware
1. In `Administration -> Network -> SNMPv1 -> access`

   enable Enable 'Enable SNMPv1 access'

2. In `Administration -> Network -> SNMPv1 -> access control`

   - set 'Access Type' of public Community Name to 'Read'
   - set 'Access Type' of private Community Name to 'Write+'
```

## Contribution

Feel free to contribute by submitting issues or pull requests.
