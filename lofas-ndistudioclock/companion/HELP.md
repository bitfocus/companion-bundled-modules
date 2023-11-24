## Lofas NDI Studio Clock

Module to control Lofas NDI Studio Clock <http://ndi.lofas.se/>.

NDI Studio Clock outputs a controllable studio clock as an NDI source.

### Configuration

- The remote device must be running NDI Studio Clock.
- The software can be downloaded from <http://ndi.lofas.se/>.
- Make sure that "Enable HTTP-server" is checked.
- Configure the instance with the IP address of the remote machine.
- The module makes HTTP requests over port 13344 by default.

### To use the module

Add an action to a button and choose the action you wish to use.
Add a feedback to an existing button

**Available Actions:**

- Enable/Disable/Toggle ON AIR
- Enable/Disable/Toggle countdown
- Enable/Disable/Toggle "Go ON AIR when countdown finishes" (auto ON AIR)
- Enable/Disable/Toggle "Show clock in 12 hours format (AM/PM)"
- Enable/Disable/Toggle transparent background
- Show/Hide/Toggle clock hands
- Set countdown text and time

**Available Feedbacks:**

- ON AIR status
- Countdown enabled
- Auto ON AIR enabled
