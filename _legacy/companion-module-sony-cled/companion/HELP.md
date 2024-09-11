## Sony CLED module

A module for controlling Sony CLED controller model ZRCT-200

This sends TCP commands using the ADCP protocol. Feedback is not implemented.
You can add multiple controllers by IP address so the same commands will be sent to all.

https://github.com/bitfocus/companion-module-sony-cled/issues

**Available commands in this module**

- Select Input
- Select Color Space
- Select Picture Mode
- Select HDR Mode
- Send Other Command

The "other command" option allows you to manually enter a string such as `blank "on"`. See Sony documentation for available commands.
