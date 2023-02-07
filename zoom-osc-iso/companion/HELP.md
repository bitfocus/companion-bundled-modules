# ZoomOSC/ISO module

This module is rebuild for the new version (> 4.0.5) of Zoom OSC/Zoom ISO V2.

It is mainly based on the principle of selecting a caller or caller group first and then do an user action. Most of what you need you'll find in the presets.

## Selection of participants

Before you can do an user action like `pin` or `spotlight` you need to select a participant. There are several way's op doing that;

- Selection based on index (order based on order of entering the meeting)
		- Presets found @ `Select from Participants`
- Selection based on Gallery position (set the same amound of row/columns to reflect the GUI best)
		- Presets found @ `Select from Gallery`
- Selection based on pre-known username
		- Preset found @ `Manage Selections of Participants`
- Selection from within a group
		- Presets found @ `Manage Selections of Groups` & `Select Hosts participants` 

> There is a special group called Hosts. All Hosts and Co-Host will automaticly enter this group for easy selection. There are no presets for clearing and/or adding to this group.

> In the Instance config its now posible to create multiple groups. As groups are set, you'll find predefined groups in the presets based on the name of the group.

> When you use the prebuild presets, action and feedback (mute/handraise/active speaker) are automaticly applied

### Single and multi - selection

By setting this option, you can select a participant and quickly jump to an other or select multiple participants and send all of the selected the same action

## Global actions

These actions are selectable without the need to select a user first. For example you can use `Join Meeting` to join a recuring meeting, by filling the fields, `Meeting ID`, `Password` and `Name`.

## ISO Commands

Some of the actions only apply to ZoomISO. You'll also find them in a seperate preset category: `ZoomISO Output Actions`. These actions are mainly based on selecting a participant and then route them to an output. There are 2 ways of doing this;

First method
1. Select a single participant
2. Select a single output e.q. `Select output 1`
3. Hit `Apply output`

Second method
1. Select multiple participants
2. Select multiple outputs
3. Hit `Apply outputs`

>  The order of selection is the order of routing

## Feedback

You will find feedback for;
+ Microphone live/hot
+ Selected
+ Active speaker
+ Handraised
+ Camera on/live
+ Engine state