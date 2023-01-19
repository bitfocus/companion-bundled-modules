## Disguise System Management Controller

This module controls and monitors the System Management Controller in Disguise hardware.

## Usage

Upon launch enter the IP of the MGMT port of the machine you wish to monitor.
For controlling the machine enter the username and password of a valid SMC user.

### Available variables

- Serial
- Name
- Type
- Role
- System Power
- Power Overload
- Main Power Fault
- Power Control Fault
- LED Strip Mode
- LED Strip Red
- LED Strip Green
- LED Strip Blue

### Available actions

- Power On
- Power Off
- Power Cycle
- Flash LCD
- Send Notification
- Set LED Strip

### Available feedbacks

- System Power
- Power Fault

### Non-compliant header warning

This module might not (fully) work with older firmware versions.

https://github.com/bitfocus/companion-module-disguise-smc
