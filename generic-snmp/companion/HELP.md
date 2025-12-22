# companion-module-generic-snmp

Generic modules is only for use with custom applications. If you use this module to control a device or software on the market that more than you are using, please let us know about this software, so we can make a proper module for it. If we already support this and you use this to trigger a feature our module doesnt support, please let us know. We want companion to be as easy as possible to use for anyone.

## Configuration

To configure this module you will need:

1. Agent Address - The IP Address of the SNMP enabled device you want to control
2. UDP Port - The number of the UDP port on which the agent is listening (defaults to port 161)
3. SNMP Version - The version of SNMP used by the agent. This will dictate how this module will authenticate with the agent
4. Poll Interval - The poll interval for Get OID value actions with update enabled, and _all_ Get OID Value feedbacks.

### SNMP versions v1/v2c

If you selected SNMP version `v1` or `v2c` you will also need to configure a `community` string with suffucient access for the actions you wish to perform.

### SNMP versions v3

If you selected SNMP version `v3` you will also need to configure the following:

1. Engine ID - The agent's SNMP Engine ID (required)
2. User Name - A username with suffucient access for the actions you wish to perform.
3. Security Level - Whether to implement authentication and encryption
   - `noAuthNoPriv` - No message authentication or encryption
   - `authNoPriv` - Message authentication and no encryption
   - `authPriv` - Message authentication and encryption
4. Auth Protocol - The message authentication protocol. (Available if Security Lavel is `authNoPriv` or `authPriv`)
   - `No Auth` - use if your agent's security level is `noAuthNoPriv`
   - `MD5` - for MD5 message authentication (HMAC-MD5-96)
   - `SHA` - for SHA message authentication (HMAC-SHA-96)
5. Auth Key - The message authentication key. (Available if Security Lavel is `authNoPriv` or `authPriv`)
6. Priv Protocol - The encryption algorith. (Available if Security Lavel is `authPriv`)
   - `No Priv` - use if your agent's security level is `AuthNoPriv`
   - `AES` - for 128-bit AES encryption (CFB-AES-128)'
   - `AES256B` - for 256-bit AES encryption (CFB-AES-256) with "Blumenthal" key localiztaion
   - `AES256R` - 256-bit AES encryption (CFB-AES-256) with "Reeder" key localiztaion
7. `Priv Key` - Encryption Key (Available if Security Lavel is `authPriv`)

## Actions

You can perform the following actions with this module:

- Get OID value, return to custom variable
  - Optional update based on connection poll
  - Optional convert returned OctetString to DisplayString
- Set OID value to an OctetString
- Set OID value to a Number. This includes the following SNMP Object Types:
  - Integer
  - Counter
  - Gauge
  - TimeTicks
- Set OID value to a Boolean
- Set OID value to an IP Address
- Set OID value to an OID

## Feedbacks

- Get OID value
  - Always updates based on connection poll
  - Optional convert returned OctetString to DisplayString
  - As a value feedback, it can be accessed in the `Local Variables` tab
