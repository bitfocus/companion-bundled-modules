## NTP Technology DOT Protocol for Audio Router Control

This module will control NTP Audio Routers that support DOT Protocol.

- [NTP Technology Page](https://www.ntp.dk/)

## Configuration
Enter the IP address of the control port of the router controller. The default port is 10005.
In the case of redundant router controllers, enter the secondary controller IP and port, and enable the redundant controllers switch. 
When the module is enabled it will try and connect to the Primary, if this fails at anytime, it will try and connect to the Secondary, and visa versa. This process typically takes 20 seconds or so, as it relies on the TCP connection going into error before attempting connection to the other controller.

Configure the Source and Destination count, this should be equal to highest index number used for each. The system will limit values entered to the specified range. Refer to the VMC-Config app, Configure>Logical Lines to identify Index values.

The alarms should match the number of configured alarm indexs in your system. Refer to VMC-Config, Configure>Messages. You can edit each entry and check/set the Number field to set the Alarm index.

## Actions

- **Crosspoint** Set, Remove or Interrogate a crosspoint

- **Input - Delay** Set input delay
- **Input - Gain** Set input gain
- **Input - P48** Set input phantom power

## Variables
- **Destination - Source** The source routed to a given destination

## Feedbacks
- **Alarm** True if the alarm index is asserted. Alarm text is written to the log. Warn level when asserted, Info level when removed.
- **Crosspoint** True if the specified crosspoint is connected

## Version History

### Version 1.0.2
- Minor TCP improvements & fixes

### Version 1.0.1
- Update dependencies

### Version 1.0.0
- Initial Release
