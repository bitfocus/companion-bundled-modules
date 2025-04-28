## Crestron Digital Matrix module

A rudimentary module for controlling Crestron Digital Matrix. Tested with DM-MD8x8 only, but I think it should also work with the 16 and 32. 

This sends TCP commands to port 23.  You must enable telnet on the Crestron device.  
Response will appear in debug log for troubleshooting purposes.  
Authentication is optional.  On my DM, the user requires at least OPERATOR or higher level privileges, but your mileage may vary.  

If you try the wrong password a few times in a row, your IP may get blocked.  You'll need to unblock it using Crestron Toolbox.  This module will stop attempting to reconnect until you save the config with new password.

https://github.com/bitfocus/companion-module-crestron-digitalmatrix/issues

**Available commands in this module**

* Route input to output