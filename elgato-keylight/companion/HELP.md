## Elgato-KeyLight

This module will allow you to control the Elgato Key Light and Ring Light family of products using Companion.

### Configuration

- The Key Light must be powered on and connected to the same network as the computer that is running Companion. The Key Light can be controlled accross VLANs, however, you must allow communication between the required VLANs on port 9123.
- This module controls the Key Light through REST on port 9123.

#### Static Network Configuration (optional)

- For better performance and reliability, it is recommended that you assign the Key Light a static IP address. One way to accomplish this is to make a DHCP reservation on your home router or DHCP server.

### To use the module

Add a button and choose the action you want to use.

**Avalible Actions:**

- Turn the Key Light on and off.
- Adjust the brightness of the Key Light.
- Adjust the color temperature of the Key Light (143 = 7000K, 344 = 2900K)

### Tested Devices

- Key Light (Firmware: 1.0.3/200)
- Key Light Air (Firmware: 1.0.3/195, 1.0.3/200)
