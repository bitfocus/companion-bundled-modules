## ThinkM Blink(1) module

Install the blink1 software from https://github.com/todbot/Blink1Control2/releases on the remote machine and make sure it accepts connections (API)
Then type the IP Address in the config section.

It is also possible to connect multiple Blink1's to your local machine and select via serialnumber (again in the config section) the right one. Create multiple instances if you have more Blink1's.

> Make sure you connect the Blink1's before starting companion. You can insert the key later but will need to disable & enable the instance to reconnect to the device.

**Available commands**

- Set color to local connected Blink1
- Switch off local connected Blink1
- Set color, set color of Blink(1) to 1 color
- Set Pattern, set Blink(1) to a pattern by nameid
- Custom commands allowed, please let us know which commands you use often

**Tally**

Companion 3.0 does not allow modules to do this anymore. But you can recreate it with a couple of simple triggers. Both are needed for proper functionality.

Tally on:

![Tally Trigger](images/tally-trigger-on-example.png?raw=true 'Tally Trigger')

Tally off:

![Tally Trigger](images/tally-trigger-off-example.png?raw=true 'Tally Trigger')
