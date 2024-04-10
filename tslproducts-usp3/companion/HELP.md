## TSL Products Universal Switch Panel (USP3)

This module will allow you to have a TSL Products Universal Switch Panel (USP3) or DNF Controls USP act as a satellite surface in Companion, or you can use it to remotely press buttons on the panel for other functions.

## Module Development
This module was developed and sponsored by [Middleman Software, Inc.](http://middleman.tv)

### Module Configuration
* Choose the model/panel type you will be using, either the newer TSL Products USP3 panel or the older DNF Controls USP panel, as they use different protocols.
* Choose whether you want the module instance to act as a satellite surface for Companion, or function as a controller for the panel. The older DNF USP panels can only be satellite surfaces.

### TSL Products USP3 Panel
* Enter the IP address of the device in the configuration settings.
* Choose the Port as configured on the USP3 Panel.

#### Panel Configuration
The module will attempt to auto-configure your panel using some assumed defaults. However, if it cannot, follow these steps:

* On the USP3’s Remote Device Assignment web page, set Device Type = USP3 API. The USP3 is now configured as a TCP/IP Server.
* The Companion Module will connect using the Port Number associated with the Remote Device.
* Enter the IP address of the computer running Companion so that it will be allowed to connect to and control the USP3. **If the IP Address of your Companion server changes, the connection to the panel will be lost.**
* On the USP3 Tally Assignment Table web page, for each key, set Tally Source to the specific Remote Device that will be allowed to control the LCD key’s text and color using the USP3 API. Tally Type will default to “Follow UPS3 API”.
* On the Event Action Table web page, choose each key press/release, MEM, GPO, and GPI “Event In” that will be sent to the 3rd party client (this module instance).
	* Select the Event IN Local, Key, GPI, GPO, or MEM number
	* Select the ON ACTION Local/Remote Device and OFF ACTION Local/Remote Device to receive the key press, GPI ON, GPO ON, MEM ON, and key release, GPI OFF, GPO OFF, MEM OFF.
* Remote Device Assignment:
	* Device Type: USP3_API
	* Connection Type: TCP (default)
	* Connection Mode: TCP Server (default)


### DNF Controls USP Panel
If you select this option, the USP panel can act as a satellite surface for Companion. These older panels do not have any other functions supported.

#### Panel Configuration
The module will attempt to auto-configure your panel using some assumed defaults. However, if it cannot, follow these steps:

* Log into your USP panel's web interface. The default username is 'dnfuser' and the default password is 'controls'.
* Under 'Remote Device Assignment', pick a Device # and use the following settings:
	* Remote Device Label: Companion
	* IP Address: The IP Address of the Companion server - it must be on the same subnet as the panel because the data traffic is SNMP which is UDP-based **If the IP Address of your Companion server changes, the connection to the panel will be lost**
	* Destination Port Number: The Port Number configured in Companion for this panel **Must Be Unique from other instances of the module, if using multiple panels**
	* Heartbeat Rate: 5 Seconds
	* Click 'Save'
* Under 'Switch Assignment', for every switch you want to use to use with Companion (ideally all of them):
	* Choose the Switch Number
	* Assign the Remote Device to: Companion
	* Type: Remote USP

### Satellite Surface Mode
If you are using your USP3 or older USP panel as a satellite surface for Companion:
* Enter the Port number for the Companion Satellite API. The default is 16622 and cannot be currently changed within Companion, but this could possibly change in the future.
* Select your preferred font size for buttons. Choosing 'Auto Scale' will scale the button text based on character length. There is a maximum amount of characters that will fit on a USP button, so the remaining characters that do not fit will be automatically truncated.

You can also configure some settings like you would any other surface type by selecting the "Surfaces" tab in the Companion UI, such as:
* The surface name
* The startup page
* Surface brightness (Anything less than 50% will utilize the USP panel's 'DIM' color settings, anything higher will use the normal brightness/color settings.) 
* Never PIN Lock (This is recommended because the pin lock numbers may not necessasily fit in the layout of the USP panel)

### Non-Satellite Surface Mode
If you are not using the panel as a satellite surface (USP3 only):
* Choose whether or not to enable polling, which will periodically request new data from the device.
* If polling is enabled, choose a polling rate.
* This mode will enable the "Key Press" actions, variables, and feedbacks (USP3 models only).

### Module Features

**Actions:**
* Set GPO On/Off (USP3 only)
* Press Panel Key (when not in surface mode) (USP3 only)
* Set Key Text (when not in surface mode) (USP3 only)

**Feedbacks:**
* GPI [1-16] is On/Off (USP3 only)
* GPO [1-16] is On/Off (USP3 only)
* MEM [1-16] is On/Off (USP3 only)
* Key [1-16] is On/Off (USP3 only)

**Variables:**
* Connected to Panel (True/False)
* Conected to Companion Satellite API (True/False) (if in surface mode)
* GPI [1-16] State (USP3 only)
* GPO [1-16] State (USP3 only)
* MEM [1-16] State (USP3 only)
* Key [1-16] State (when not in surface mode) (USP3 only)