# Glensound Divine

Module to control the [Glensound Divine Network Audio Monitor](https://www.glensound.co.uk/product-details/divine-617/).

Please log issues and feature requests on [github](https://github.com/bitfocus/companion-module-glensound-divine/issues).

## Actions

**Mix Selection**

Choose which input channel or mix to listen to

**Mix Enable**

Turn input channels or mixes on or off

**Set Volume**

Set a specific volume level between 0 (mute) and 127 (maximum)

**Mute**

There is no Mute function in the API, this button will set the volume to 0 and store the previous volume value

**Unmute**

Set the volume to the value stored when the Mute action was last used

**Volume Up**

Increase the volume, this could be assigned to a rotary control to make a volume knob. The step (rate of change per rotation) can also be set.

**Volume Down**

Decrease the volume, this could be assigned to a rotary control to make a volume knob. The step (rate of change per rotation) can also be set.

**Get Info**
Request update to device info variables

## Presets

- Volume Knob with rotate left and right

## Feedbacks

**Indicator**
Position indicator

**Meter**
Level Meter advanced feedback

## Variables

Product Id, Firmware version, Host name, Friendly name, Domain name, Mix selected (value), Mix selected (label), Volume, Volume (dB), Input Levels, Output Level, Pot Position, Device Temperature

## Version 1.0.0

The first release of the module

## Version 1.1.0

Feat: Input Levels, Output Level, Volume (dB), Pot Position, Device Temperature variables
Feat: Indicator, Meter Feedback
Feat: Fast Meters config option
Feat: Parse variables for channel in Mix Selection, Mix Enable
Fix: Module init and device polling
Allow connection via hostname
Minor fixes
Update dependencies
