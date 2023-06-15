## MixEffect Companion Module

This module will allow you to control a MixEffect instance running on iOS devices such as an iPhone, iPad, iPod Touch, etc.

### Configuration

The MixEffect Companion Module requires that your MixEffect app is configured for OSC. This configuration includes:

1. Enabling OSC support within MixEffect Automation Settings,
2. Enabling the OSC server for the particular switcher you want to control, and
3. Setting a port number to the switcher's OSC server.

For more information see the [Getting Started with OSC in MixEffect](https://docs.mixeffect.app/automate/osc) guide.

Once OSC is enabled on the MixEffect app you can proceed to configure this module. You will need:

1. the Target IP address (which is the IP of the iOS device running MixEffect), and
2. the Target Port (which is the port of the switcher's OSC server described above).

### Actions

We have included a number of actions to help you control MixEffect. There are actions in each of these categories:

#### App Actions

- App: Connect to Switcher
- App: Remote Webview
- App: Run Shortcut
- App: Run Shortcut and Return
- App: Switcher Section
- App: Switcher Page
- App: Switcher Page Previous
- App: Switcher Page Next
- App: Video Follows Audio
- App: View Only Mode

#### Auxiliary/Output

- AUX: Set Aux/Output Source _(added in v1.1.0)_

#### Color Generators

- Color Generator: Set _(added in v1.1.0)_

- Color Generator: Hue Set _(added in v1.1.0)_
- Color Generator: Saturation Set _(added in v1.1.0)_
- Color Generator: Luminance Set _(added in v1.1.0)_

- Color Generator: Hue Adjust _(added in v1.1.0)_
- Color Generator: Saturation Adjust _(added in v1.1.0)_
- Color Generator: Luminance Adjust _(added in v1.1.0)_

#### Downstream Keyers

- DSK: Auto _(added in v1.1.0)_
- DSK: Inputs _(added in v1.1.0)_

- DSK: Key _(added in v1.1.0)_
- DSK: Key Clip Gain _(added in v1.1.0)_
- DSK: Key Clip Set _(added in v1.1.0)_
- DSK: Key Gain Set _(added in v1.1.0)_
- DSK: Key Clip Adjust _(added in v1.1.0)_
- DSK: Key Gain Adjust _(added in v1.1.0)_

- DSK: Key Invert _(added in v1.1.0)_
- DSK: Key Pre Multiplied _(added in v1.1.0)_

- DSK: Mask _(added in v1.1.0)_
- DSK: Mask Enable _(added in v1.1.0)_

- DSK: Mask Top Set _(added in v1.1.0)_
- DSK: Mask Bottom Set _(added in v1.1.0)_
- DSK: Mask Left Set _(added in v1.1.0)_
- DSK: Mask Right Set _(added in v1.1.0)_

- DSK: Mask Top Adjust _(added in v1.1.0)_
- DSK: Mask Bottom Adjust _(added in v1.1.0)_
- DSK: Mask Left Adjust _(added in v1.1.0)_
- DSK: Mask Right Adjust _(added in v1.1.0)_

- DSK: On Air _(added in v1.1.0)_
- DSK: Rate _(added in v1.1.0)_
- DSK: Tie _(added in v1.1.0)_

#### Fairlight Audio

- Fairlight: Audio Frame Delay _(added in v1.1.0)_
- Fairlight: Input Mix Option Set _(added in v1.1.0)_

- Fairlight: Fader Gain Set _(added in v1.1.0)_
- Fairlight: Input Gain Set _(added in v1.1.0)_
- Fairlight: Master Gain Set _(added in v1.1.0)_

- Fairlight: Fader Gain Adjust _(added in v1.1.0)_
- Fairlight: Input Gain Adjust _(added in v1.1.0)_
- Fairlight: Master Gain Adjust _(added in v1.1.0)_

- Fairlight: Reset Peaks _(added in v1.1.0)_
- Fairlight: Reset Source Peaks _(added in v1.1.0)_

#### Macro Actions

- Macro: Run
- Macro: Continue _(added in v1.1.0)_
- Macro: Loop _(added in v1.1.0)_
- Macro: Stop _(added in v1.1.0)_

#### Media Player Actions

- Media Player: Select Media Player
- Media Player: Clip
- Media Player: Clip Cycle
- Media Player: Clip Reverse
- Media Player: Still
- Media Player: Still Cycle
- Media Player: Still Reverse

#### Mix Effect Bus

- M/E: Select Mix Effect Bus
- M/E: Fade to Black Auto' _(added in v1.1.0)_
- M/E: Fade to Black Rate _(added in v1.1.0)_
- M/E: Set Preview Input _(added in v1.1.0)_
- M/E: Set Program Input _(added in v1.1.0)_

#### Multiviewer

- Multiviewer: Set Layout _(added in v1.1.0)_
- Multiviewer: Set Layout Advanced _(added in v1.1.0)_
- Multiviewer: Set Window _(added in v1.1.0)_

#### Output

- Output: Recording Set Filename _(added in v1.1.0)_
- Output: Recording Start or Stop _(added in v1.1.0)_
- Output: Recording Switch Disk _(added in v1.1.0)_
- Output: Streaming Set Service _(added in v1.1.0)_
- Output: Streaming Start or Stop _(added in v1.1.0)_

#### SuperSource Actions

- SuperSource: Art _(added in v1.1.0)_
- SuperSource: Art Border _(added in v1.1.0)_

- SuperSource: Art Border Enable _(added in v1.1.0)_
- SuperSource: Art Border Bevel Style Set _(added in v1.1.0)_

- SuperSource: Art Border Outer Width Set _(added in v1.1.0)_
- SuperSource: Art Border Inner Width Set _(added in v1.1.0)_
- SuperSource: Art Border Outer Softness Set _(added in v1.1.0)_
- SuperSource: Art Border Inner Softness Set _(added in v1.1.0)_
- SuperSource: Art Border Bevel Softness Set _(added in v1.1.0)_
- SuperSource: Art Border Bevel Position Set _(added in v1.1.0)_
- SuperSource: Art Border Hue Set _(added in v1.1.0)_
- SuperSource: Art Border Saturation Set _(added in v1.1.0)_
- SuperSource: Art Border Luminance Set _(added in v1.1.0)_
- SuperSource: Art Border Light Source Direction Set _(added in v1.1.0)_
- SuperSource: Art Border Light Source Altitude Set _(added in v1.1.0)_

- SuperSource: Art Border Outer Width Adjust _(added in v1.1.0)_
- SuperSource: Art Border Inner Width Adjust _(added in v1.1.0)_
- SuperSource: Art Border Outer Softness Adjust _(added in v1.1.0)_
- SuperSource: Art Border Inner Softness Adjust _(added in v1.1.0)_
- SuperSource: Art Border Bevel Softness Adjust _(added in v1.1.0)_
- SuperSource: Art Border Bevel Position Adjust _(added in v1.1.0)_
- SuperSource: Art Border Hue Adjust _(added in v1.1.0)_
- SuperSource: Art Border Saturation Adjust _(added in v1.1.0)_
- SuperSource: Art Border Luminance Adjust _(added in v1.1.0)_
- SuperSource: Art Border Light Source Direction Adjust _(added in v1.1.0)_
- SuperSource: Art Border Light Source Altitude Adjust _(added in v1.1.0)_

- SuperSource: Art Key _(added in v1.1.0)_
- SuperSource: Art Key Clip Gain _(added in v1.1.0)_

- SuperSource: Art Key Clip Set _(added in v1.1.0)_
- SuperSource: Art Key Gain Set _(added in v1.1.0)_
- SuperSource: Art Key Clip Adjust _(added in v1.1.0)_
- SuperSource: Art Key Gain Adjust _(added in v1.1.0)_

- SuperSource: Art Key Invert _(added in v1.1.0)_
- SuperSource: Art Key Pre Multiplied _(added in v1.1.0)_
- SuperSource: Art Place In _(added in v1.1.0)_
- SuperSource: Preset
- SuperSource: Previous Preset
- SuperSource: Next Preset
- SuperSource: Highlight

- SuperSource: Box Crop
- SuperSource: Box Position
- SuperSource: Box Size

- SuperSource: Box Crop Set _(added in v1.1.0)_
- SuperSource: Box Crop Adjust _(added in v1.1.0)_
- SuperSource: Box Position Set _(added in v1.1.0)_
- SuperSource: Box Position Adjust _(added in v1.1.0)_
- SuperSource: Box Size Set _(added in v1.1.0)_
- SuperSource: Box Size Adjust _(added in v1.1.0)_

- SuperSource: Box Source
- SuperSource: Box Enable _(added in v1.1.0)_
- SuperSource: Transition Speed
- SuperSource: Cycle Transition Speed
- SuperSource: Transition Style
- SuperSource: Cycle Transition Style
- SuperSource: Grow Highlighted Box
- SuperSource: Grow Highlighted Box By
- SuperSource: Shrink Other Boxes
- SuperSource: Shrink Other Boxes By
- SuperSource: Swap
- SuperSource: Swap Boxes
- SuperSource: Auto
- SuperSource: Cut
- SuperSource: Cascade
- SuperSource: Cascade Presets

#### Switcher

- Switcher: Startup State Save _(added in v1.1.0)_
- Switcher: Startup State Clear _(added in v1.1.0)_

#### Transition Actions

- Transition: Auto
- Transition: Cut
- Transition: Dip _(added in v1.1.0)_
- Transition: Dip Source _(added in v1.1.0)_
- Transition: DVE _(added in v1.1.0)_
- Transition: DVE Flip Flop _(added in v1.1.0)_
- Transition: DVE Inputs _(added in v1.1.0)_
- Transition: DVE Key _(added in v1.1.0)_
- Transition: DVE Key Clip Gain _(added in v1.1.0)_
- Transition: DVE Key Enable _(added in v1.1.0)_
- Transition: DVE Key Invert _(added in v1.1.0)_
- Transition: DVE Key Pre Multiplied _(added in v1.1.0)_
- Transition: DVE Reverse _(added in v1.1.0)_
- Transition: DVE Style _(added in v1.1.0)_
- Transition: Mix _(added in v1.1.0)_
- Transition: Next _(added in v1.1.0)_
- Transition: Preview _(added in v1.1.0)_
- Transition: Rate _(added in v1.1.0)_
- Transition: Style _(added in v1.1.0)_
- Transition: Wipe _(added in v1.1.0)_
- Transition: Wipe Border _(added in v1.1.0)_
- Transition: Wipe Flip Flop _(added in v1.1.0)_
- Transition: Wipe Pattern _(added in v1.1.0)_
- Transition: Wipe Position _(added in v1.1.0)_
- Transition: Wipe Reverse _(added in v1.1.0)_
- Transition: Wipe Size _(added in v1.1.0)_
- Transition: Wipe Source _(added in v1.1.0)_
- Transition: Wipe Symmetry _(added in v1.1.0)_

#### Upstream Keyers

- USK: Chroma _(added in v1.1.0)_
- USK: Chroma Advanced _(added in v1.1.0)_
- USK: Chroma Advanced Sample _(added in v1.1.0)_
- USK: DVE Border _(added in v1.1.0)_
- USK: DVE Border Enable _(added in v1.1.0)_
- USK: DVE Mask _(added in v1.1.0)_
- USK: DVE Position _(added in v1.1.0)_
- USK: DVE Rotation _(added in v1.1.0)_
- USK: DVE Size _(added in v1.1.0)_
- USK: DVE Size Position Rotation _(added in v1.1.0)_
- USK: Run Flying Key _(added in v1.1.0)_
- USK: Flying Key Keyframe _(added in v1.1.0)_
- USK: Flying Key Rate _(added in v1.1.0)_
- USK: Flying Size Position _(added in v1.1.0)_
- USK: Inputs _(added in v1.1.0)_
- USK: Luma Key _(added in v1.1.0)_
- USK: Luma Key Clip Gain _(added in v1.1.0)_
- USK: Luma Key Invert _(added in v1.1.0)_
- USK: Luma Key Pre Multiplied _(added in v1.1.0)_
- USK: Mask _(added in v1.1.0)_
- USK: Pattern _(added in v1.1.0)_
- USK: On Air _(added in v1.1.0)_
- USK: Style _(added in v1.1.0)_

### Variables

- `aux_bus` - Internal variable set using the **Select Aux Bus** Action. Used by other actions when the **Selected Aux Bus** option from the dropdown is selected. _(added in v1.1.0)_
- `box` - Internal variable set using the **Select Box** Action. Used by other actions when the **Selected Box** option from the dropdown is selected. _(added in v1.1.0)_
- `color_generator` - Internal variable set using the **Select Color Generator** Action. Used by other actions when the **Selected Color Generator** option from the dropdown is selected. _(added in v1.1.0)_
- `media_player` - Internal variable set using the **Select Media Player** Action. Used by other actions when the **Selected Media Player** option from the dropdown is selected.
- `mix_effect_bus` - Internal variable set using the **Select Mix Effect Bus** Action. Used by other actions when the **Selected Mix Effect Bus** option from the dropdown is selected. _(added in v1.1.0)_
- `supersource` - Internal variable set using the **Select SuperSource** Action. Used by other actions when the **Selected SuperSource** option from the dropdown is selected. _(added in v1.1.0)_
- `dsk` - Internal variable set using the **Select DSK** Action. Used by other actions when the **Selected DSK** option from the dropdown is selected. _(added in v1.1.0)_
- `usk` - Internal variable set using the **Select USK** Action. Used by other actions when the **Selected USK** option from the dropdown is selected. _(added in v1.1.0)_

### Feedbacks

- Set color based on the value of the `aux_bus` variable _(added in v1.1.0)_
- Set color based on the value of the `box` variable _(added in v1.1.0)_
- Set color based on the value of the `color_generator` variable _(added in v1.1.0)_
- Set color based on the value of the `media_player` variable
- Set color based on the value of the `mix_effect_bus` variable _(added in v1.1.0)_
- Set color based on the value of the `supersource` variable _(added in v1.1.0)_
- Set color based on the value of the `dsk` variable _(added in v1.1.0)_
- Set color based on the value of the `usk` variable _(added in v1.1.0)_
