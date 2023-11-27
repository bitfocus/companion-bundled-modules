## SnapAV-WattBox

This module will allow you to control the WattBox family of devices using companion.

### Configuration

- The WattBox must be powered on and connected to the same network as the computer that is running Companion.
- This module controls the WattBox through REST on port 80  or Telnet on port 23.

#### Static Network Configuration (optional)

- For better performance and reliability, it is recommended that you assign the WattBox a static IP address. One way to accomplish this is to make a DHCP reservation on your router or DHCP server.

### To use the module

Add a button and choose the action you want to use.

**Available Actions:**

- Turn an outlet on the WattBox on or off.
- Rebooting outlet.
- Turning auto reboot on
- Turning audio reboot off

**Available Presets**
- Outlet On
- Outlet Off

**Available Feedbacks**
- Outlet On
- Outlet Off

**Available Variables**
- Outlet Name
- Outlet State
- Device Name
- Cloud Status
- Voltage
- Amperage
- Wattage
- Device Serial Number

### Tested Devices

- WattBox WB-300-IP-3 (Firmware: WB10.6c14) (REST)
- WB-250-IPW-2 (Telnet)