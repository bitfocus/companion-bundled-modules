# Allen & Heath QU module

Controls the Allen & Heath QU.

## Functions:
*	Mutes
*	Faders and Pan
*	Mix and FX sends: Level, Pan, Assign
*	Matrix sends: Level, Pan, Assign
*	Groups: Assign (Level, Pan in mix mode)
*	Mute Groups: Assign, Mute
*	DCA Groups: Assign, Level, Mute
*	PAFL select
*	Scene Recall
*	Preamp (local): 48V
*	MMC Transport Control

## Special functions:
*	Feedbacks: Mutes, PAFL
*	Presets: Mutes, PAFL
*	Variables: Fader level, Send level, Channel name, Current scene
*	Step level increment: Fader level, Send level
*	Scene step increment (+/- 10)

Created by referring to "QU Midi Protocol v.1.9" manual.

Current version: 1.0.7

Start version: 1.0.0

New in v.1.0.1
* Fix level
* New variables
* Presets

New in v.1.0.3
* Fix feedbacks
* Remove all system.emit
* Add PAFL feedbacks
* Add PAFL presets

New in v.1.0.4
* Add scene step
* Add currentScene variable

New in v.1.0.5
* Fix issue #6

New in v.1.0.6
* Fix issue #9

New in v.1.0.7
* Add QU-Pac & QU-SB config
* Add shutdown action

## Configuring:

### New instance
First step after adding QU instance is to setting it up:

*	Name: 					the INSTANCE name you want
*	Target IP:				IP to reach your QU (needs on the same net)
*	Model:					your QU model

## How to:

### Fader / Send level step increment
*	There are two specifc values on level dropdown menu (at the top) when you configuring fader / send level.

### Fader level and Channel name on button
When you configure a button, in button text start typing <b>$(</b> then system will suggests you all variables you can use.

All variable/text can be concats to produce complex string. Use <b>\n</b> to make new line.
Example:

	$(QU:ch_name_32)\n$(QU:level_input_32) dB

will produce a string like:

	  CH 1
	 -8 dB

If you set a name (from console) for channel 1 (ex: Singer) the result will be like:

	Singer
	-8 dB

### Send level
It works like a fader level but you have to compose variable name (no suggests) following this indications:

*	$(INSTANCE:sendlev_TYPE_CH_TO)

where:

*	INSTANCE is the name used on config
*	TYPE is a type of level
*	CH channel from
*	TO channel to

Referring to follow tables:

TYPE (ex: input_mix => from INPUT to MIX)

*	input_mix / input_group
*	stereo_mix / stereo_group
*	fx_return_mix / fx_return_group / fx_return_fxs

CH (ex: 32 => CH 1; 65 => ST 2; 9 => FX 2)

*	input		32 -> 63
*	stereo		64 -> 66
*	fx_return	8  -> 11

TO (ex: 0 => MIX 1; 5 => MIX 7/8; 17 => FX Send 2)

*	mix			0  -> 6
*	group		8  -> 11		(only in mix mode)
*	fxs			16 -> 19

Example: if you want the level of "Stereo 3 into Group 3/4", write <b>$(QU:sendlev_stereo_group_66_9)</b>
