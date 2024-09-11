## Motu AVB

This module connects to a Motu AVB audio interface.

### Configuration
* Type in the device IP address.
* The device will communicate via OSC over port 37297 by default.

### Available Actions
* Set Channel Mute
* Set Main Mute
* Set Group Mute
* Set Monitor Mute
* Set Channel Fader Level
* Increase/Decrease Channel Fader Level **see note**
* Set Main Fader Level
* Increase/Decrease Main Fader Level **see note**
* Group Fader Level
* Increase/Decrease Group Fader Level **see note**
* Monitor Fader Level
* Increase/Decrease Monitor Fader Level **see note**
* Set Solo on Channel
* Set Solo on Group
* Set Aux Levels

**Note:**
The OSC protocol for the Motu AVB is one-directional. So actions like Increase/Decrease Fader Level will only function when the fader level has been previously set to a known amount.

### Available Variables:
* Channel Fader Level
* Main Fader Level
* Group Fader Level
* Monitor Fader Level

**Only when level has been set within Companion**