# Govee Lights

This module controls Govee lights.

In order to control the lights over the network (i.e. with Companion), you will need to have them first configured via the Govee Home App. Then, in the Govee Home App, go to the Settings of the Device, and enable LAN Control.

You will also need to apply for an API key. This can be done with the Govee Home App as well.

Once you have enabled LAN control and have your API key, enter the API key into the module config, and click "Save". The module will auto-detect the Govee devices found on your network.

If your device is not found, you can manually enter its MAC address and Model number in the config.

*Note:* The Govee API has rate-limits. Up to 10 commands can be sent per minute. If you attempt to do more than this, you will get an error.

### Actions

* Turn On
* Turn Off
* Change Brightness
* Change Color

### Variables

* Last Set Power State
* Last Set Brightness Level
* Last Set Color

### Feedbacks

* Last Set Power State

### Presets

* 