## ProBel SW-P-02 General Switcher Communication Protocol

Implementation referenced to SW-P-02 Issue 37. 07/09/2017.

This module implements the basic router controls of SW P 02.

## Configuration

Enter the IP address, port and source and destination count.

Wait on Ack will force companion to wait for a response before sending the next command in the queue.

Interrogate on Connect will interrogate all destinations when a connection is established.

## Actions

- **INTERROGATE**
- **CONNECT**
- **CONNECT ON GO**
- **GO** Set / Clear

## Variables

- **Destination** Returns the source number connected to a destination.

## Feedbacks

- **Crosspoint** True when the specified crosspoint is connected

## Action Recorder

The Action Recorder will translate any recieved tally or connected messages into new connect actions, to quickly build salvos.

## Version History

### Version 1.2.4

- Parse variables with context object

### Version 1.2.3

- Use Node 22
- Update dependencies

### Version 1.2.2

- Better logging of recieved tally/connected messages

### Version 1.2.1

- Improvements to message TX and RX

### Version 1.2.0

- Allow variables in feedbacks
- Fix typos
- Update to ESM

### Version 1.1.0

- Action Recorder
- Update dependencies

### Version 1.0.4

- Better status updates
- Update companion-module-base to 1.8.0

### Version 1.0.3

- Fix typos
- Update companion-module-tools

### Version 1.0.2

- Decode & Write Dual Controller Status Response to logs
- Add feedback subscription
- Minor fixes

### Version 1.0.1

- Initial release
