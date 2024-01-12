## ProBel SW-P-02 General Switcher Communication Protocol

Implementaiton referenced to Document: SW-P-02 Issue 37. 07/09/2017.

This module implements the basic router controls of SW P 02. There are many other commands that are part of the SW P 02 specification, most are device specific or not widely supported. If you would like other commands to be implemented please create an issue to request it, but be prepared to commit time to testing; or create a pull request.

## Configuration
Enter the IP address, port and source and destination count. The Wait on Ack check box will force companion to wait for a response before sending the next command in the queue. The interrogate on connect checkbox will interrogate all destinations when a connection is established.

## Actions
- **INTERROGATE** 
- **CONNECT** 
- **CONNECT ON GO** 
- **GO** Set / Clear

## Variables
- **Destination** Returns the source number conencted to a destination.

## Feedbacks
- **Crosspoint** True when the specified crosspoint is connected

## Version History

### Version 1.0.2
- Decode & Write Dual Controller Status Response to logs
- Add feedback subscription
- Minor fixes

### Version 1.0.1
- Initial release