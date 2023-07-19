## Generic TCP Serial Module
A generic module to forward a TCP connection to an attached serial/comm/rs232/rs485 port

This is a Serial (RS232) to TCP bridge for Companion. By itself it is not very useful.

Most Companion modules use TCP networking to control devices. This module creates a TCP server connected to a serial port on the Companion computer.

Many devices have older models that communicate via serial port. Some manufactures release newer devices with ethernet but still use the remote commands as the serial ports. Several Companion modules work with the ethernet devices in this fashion. This bridge module allows the TCP module to interface with those older model serial control devices.

This module allows 4 incoming TCP connections. It may be possible to confuse the device if more than one client sends a command at the same time.

--------
Contributions for maintenance and development of this open source module are always welcome
https://github.com/sponsors/istnv

--------

### Traffic Flow
* Data coming from a TCP client is forwarded as-is _ONLY_ to the serial port. This prevents other clients from seeing commands that may not correspond to device feedback notifications.
* Data coming from the serial port is sent as-is to _ALL_ connected TCP clients. This allows all clients to adjust feedback/variables if possible or necessary.


## Configuration
Setting | Description
-----------------|---------------
**Listen Port** | Enter the IP Port number to listen for a TCP connection. Defaults to 32100 and will need to be changed if more than one serial port is to be configured.
**Serial Port** | Choose the Serial port attached to the device [1]
**Baud Rate** | Choose the baud rate for the serial port
**Data Bits** | Choose the data bits for the serial port
**Parity** | Choose the parity for the serial port
**Stop Bits** | Choose the stop bits for the serial port

## Variables
Variable | Description
-----|-----
ip_add | Address of the clients connected to the TCP server

This is a helper to assist other modules. There are no actions.

[1] When the module first starts up, it will scan the system for serial ports. Until ports are found, the configuration drop-down menu will be empty or not available. The log will show 'No serial port configured' when the scan is complete.

