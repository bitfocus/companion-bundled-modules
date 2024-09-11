## Biamp Tesira

This module will allow you to control the Biamp Tesira family of devices.

### Configuration
* Enter the IP address of the device in the configuration settings.

**Available actions:**
* Set fader to a specific level
* Increment fader up continuously
* Increment fader down continuously
* Stop incrementing
* Custom command
* Recall Preset

If you want a specific action to be added, please open an issue request on the module repo.

**Presets:**
* Increase Fader Level (with down action to start the action, up action to stop it)
* Decrease Fader Level (same actions)

**Variables / device feedback**
* you can use a custom commmand to subscribe to status updates from the tesira. Use the following command format:
* (InstanceTag) subscribe (attribute) (index) (CustomLabel) (250)
* (InstanceTag) is found in the tesira DSP configuration
* subscribe is a command to tesira which causes it to respond anytime the specified object is changed
* (attribute) is dependent on the specific object being referenced (ex. a level control has an attribute called 'level', and an attribute called 'mute') - reference the tesira text protocol information at biamp.com for full information
* (index) is also dependent on the object being referenced (ex: a level control may have multiple channels, in this case, index is the channel number)
* (CustomLabel) this is important, as the tesira will respond with updates attached to this label, which translates to the variable name that you'll find in companion (ex: Level1)
* (250) this number (can be anything) is the time in milliseconds between possible updates.  250 should be a good starting point.  objects like RMS meters can cause congestion if allowed to update too often

* all responses are captured into a variable that can be used in button text in the format $(instanceName:CustomLabel)

**Further reference**
* https://support.biamp.com/Tesira/Control/Tesira_Text_Protocol
* https://support.biamp.com/Tesira/Control/Tesira_command_string_calculator
