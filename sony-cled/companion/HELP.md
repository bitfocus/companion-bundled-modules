## Sony CLED module

A module for controlling Sony CLED controller model ZRCT-300

This sends TCP commands using the ADCP protocol. Feedbacks and variables are not implemented.
You can add multiple controllers by IP address so the same commands will be sent to all.
Authentication is supported.

https://github.com/bitfocus/companion-module-sony-cled/issues

**Available commands in this module**

- System Power
- Cabinet Power
- Blank
- Select Input
- Select Color Space
- Select Transfer Matrix
- Select Gamma
- Select Picture Mode
- Select HDR Mode
- Select HDR Auto Mode
- Advanced Picture Settings
- Test Pattern
- Send Other Command

The "other command" option allows you to manually enter a string such as `blank "on"`. See Sony documentation for available commands.
