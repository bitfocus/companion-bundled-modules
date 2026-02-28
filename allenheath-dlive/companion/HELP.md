# Allen & Heath dLive Module for Companion

## Connecting to the dLive

The connection accepts three parameters:

#### Target IP

The IP address of the dLive console. By default this is `192.168.1.70` for a MixRack and `192.168.1.71` for a surface.

#### MIDI Port

The MIDI TCP port to connect to. By default this is `51325` for a MixRack and `51328` for a surface.

#### Main MIDI Channels

The MIDI channels used to control the console. By default this is `1 to 5` but can be changed in the console settings.

## Actions

This module implements every control action in the Allen & Heath dLive MIDI over TCP/IP protocol V2.0 apart from the "get" actions (e.g. "get fader level"), which may be added in a future release. This can be found [here](https://www.allen-heath.com/content/uploads/2024/06/dLive-MIDI-Over-TCP-Protocol-V2.0.pdf).

The following actions are supported:
|Action|Description|Parameters|
|---|---|---|
|Mute|Mute or unmute a channel|Channel Type, Channel Number, Mute|
|Fader Level|Set the fader level of a channel|Channel Type, Channel Number, Level|
|Assign to Main Mix|Assign a channel to the main mix|Channel Type, Channel Number, Assign|
|Aux / FX / Matrix Send Level|Set the send level from a channel to an aux / fx send / matrix|Channel Type, Channel Number, Destination Channel Type, Destination Channel Number, Level|
|Input to Group / Aux / Matrix|Send an input to a group / aux / matrix|Input Channel, Destination Channel Type, Destination Channel Number, On|
|Assign to DCA|Assign a channel to a DCA|Channel Type, Channel Number, DCA, Assign|
|Assign to Mute Group|Assign a channel to a mute group|Channel Type, Channel Number, Mute Group, Assign|
|Set Socket Preamp Gain|Set the preamp gain of a MixRack or DX card socket|Socket Type, Socket Number, Gain|
|Set Socket Preamp Pad|Enable or disable the pad of a MixRack or DX card socket|Socket Type, Socket Number, Pad|
|Set Socket Preamp 48v|Enable or disable 48v of a MixRack or DX card socket|Socket Type, Socket Number, 48v|
|Set Channel Name|Set the name of a channel|Channel Type, Channel Number, Name|
|Set Channel Colour|Set the colour of a channel|Channel Type, Channel Number, Colour|
|Recall Scene|Recall a scene|Scene Number|
|Recall Cue List|Recall a cue list|Recall ID|
|Go Next/Previous (Surface Only)|Trigger the Go/Next/Previous action using the MIDI CC messages defined in the console settings|Control Number, Control Value|
|Parametric EQ|Set the type, frequency, width and gain of a parametric EQ band|Channel Type, Channel Number, Band, Type, Frequency, Width, Gain|
|HPF Frequency|Set the high pass filter frequency of an input channel|Input Channel, Frequency|
|Set HPF On/Off|Enable or disable the high pass filter of an input channel|Input Channel, HPF|
|Set UFX Global Key|Set the global key for all UFX units|Key|
|Set UFX Global Scale|Set the global scale for all UFX units|Scale|
|Set UFX Unit Parameter|Set a UFX parameter using the MIDI channel and control message defined in the console settings|MIDI Channel, Control Number, Control Value|
