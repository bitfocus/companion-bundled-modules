## Ubiquiti UniFi

This module will allow you to control the POE mode of ubiquiti UniFi switches.

### Configuration
* Enter the IP Address of the UniFi controller.
* Enter the port of the UniFi controller.
* Enter a local user on the UniFi controller. NOTE: It is recommended to make a unique user just for this application.
* Enter the password for the user. NOTE: This password will be stored in clear text within the companion config.

### To use the module
Add an action to a button and choose the action you wish to use.
NOTE: Commands may not be executed immediately if a large number of update actions are stacked.

**Available actions:**
* Power Cycle POE Switchport
* Switchport POE Mode
