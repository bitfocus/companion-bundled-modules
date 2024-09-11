## Avolites AI module by Nijs Jonas
This module is used to control avolites AI media servers over Art-net.
To make this work make sure that firewalls/antivirus is disabled on both the companion machine and AI.

You will need to setup artnet on the AI side, make sure you select the correct network adapter and use 100ch mode in the system settings.

![System Settings](images/SystemSettings.png?raw=true "System Settings")

Then you need to make sure that on each layer artnet is enabled and the universe is set to 0 or the same as in companion.
Also make sure that the channels of the layers are set to 1 for layer 1, 101 for layer 2, 201 for layer 3 and 301 for layer 4.

![Layer Settings](images/LayerSettings.png?raw=true "Layer Settings")

if you find bugs or have problems feel free to report them at the github module:

https://github.com/bitfocus/companion-module-avolites-ai/issues