## Crestron Digital Matrix module

A module for controlling Crestron Digital Matrix.

It sends TCP commands to port 23. You must enable telnet on the Crestron device.
For troubleshooting purposes enable debug logging in the config.
Authentication is optional. On my DM, the user requires at least OPERATOR or higher level privileges, but your mileage may vary.

If you try the wrong password a few times in a row, your IP may get blocked. You'll need to unblock it using Crestron Toolbox. This module will stop attempting to reconnect until you save the config with a new password.

It detects available inputs and outputs to select via dropdown, but you can also enter custom input or output number, or use a variable with the input or output number.
This enables you to setup pages to set manual routes via action "internal: Custom Variable: Set raw value" or the generic dataentry module.

Upon successful connection time and date is sent to the system.
Optionally you can activate a polling interval to get active routes for your feedbacks. E.g. when you are using the frontpanel or other devices for setting routes.
You can set a trigger for a successful connected module to send commands and with enabled polling it also detects connection losses and tries to reconnect.

If you have any issues, feel free to open an issue on github:
https://github.com/bitfocus/companion-module-crestron-digitalmatrix/issues

**Available functions in this module**

- Route input to output (Audio, Video, USB, Audio & Video, Audio & Video & USB)
- Feedback for routes
- polling for routes
