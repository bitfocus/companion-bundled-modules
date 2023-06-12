### Green-GO Intercom OSC Remote

The _Green-GO Intercom OSC Remote_ is a Bitfocus Companion (v3.0) module allowing users to control a wired Green-GO intercom device over the local network.

#### General Information & Limitations

Because of limitations in the scripting VM present on current Green-GO devices, this Companion module enables you to remotely control a _maximum of 6 channels_ (channels 1 - 6).

It is also worth mentioning that we currently can't support Green-GO WAA antennas or WBPX(SP) belt packs as can't control those devices via OSC.

Please check the tables below for an overview of supported button actions and feedbacks. Also, remember to use the available button presets for easy setup.

If you need more information about the Companion module, please refer to our [documentation](https://docs.greengo.digital/en/guides/companion/) or contact our [community](https://greengoconnect.com) in case you need further assistance.

##### Prerequisites

- Green-GO device using at least [firmware](https://manual.greengoconnect.com/en/release-notes/firmware/) v5.0.3.0255 or above.
- Get the [osc-remote.gg5t](https://github.com/bitfocus/companion-module-greengo-intercom/blob/master/osc-remote.gg5t) script and add it to your configuration.
- Use the integrated script editor to adjust the `remoteIP` (Companion) and `controlPort` to fit your needs.
- Compile the script to create a binary script for your device(s).
- Load the script on a device, either directly by selecting the device in the index tree or by configuring a user's device profile.
- Save your configuration to your devices to ensure proper operation without the software running in the background.

#### Configure the Module

There are a few configuration options, of which currently only the first two are required to run this Companion module:

- **Device IP:** Match this to your Green-GO device's IPv4 address and avoid using broadcast addresses to prevent receiving conflicting states.
- **Control Port:** Specify the UDP port that is utilized for OSC messages. Please ensure the port number matches the one specified in your [osc-remote.gg5t](https://github.com/bitfocus/companion-module-greengo-intercom/blob/master/osc-remote.gg5t) Green-GO script.
- **Device Type:** This option is a placeholder. It currently _serves no function_ and can be ignored.<br>Once the Green-GO firmware exposes OSC endpoints, this placeholder will define available states and variables.
- **Channel Count:** Define the number of channels (1 - 6) to control the amount of actions, feedbacks, presets, and variables created for this module. Using a lower number of channels can improve performance and reduce network load.

##### Available Button Actions

| Action                    | What it does                                                      |
| :------------------------ | :---------------------------------------------------------------- |
| Set Channel Talk          | Control the talk state of a channel                               |
| Send Channel Call         | Control the call state of a channel                               |
| Send Channel Cue          | Control the cue state of a channel                                |
| Set Channel Listen &nbsp; | Control the listen state (mute channel output) of a channel       |
| Set Channel Level         | Control the output level of a channel                             |
| Set PGM Level             | Control the output level of the program audio special channel     |
| Set Main Level            | Control the main output level of the device                       |
| Set Input Gain            | Control the input gain of the device's active input               |
| Set Input Source          | Control the active input source of the user                       |
| Set Isolate State         | Control the state of the isolate function                         |
| Identify Device           | Call the device's identfy function to let its status lights blink |

<br>

##### Available Button Feedbacks

| Feedback                    | What it does                                                                                   |
| :-------------------------- | :--------------------------------------------------------------------------------------------- |
| Check Channel Talk          | React to the current talk state of a channel                                                   |
| Check Channel Call          | React to the current call state of a channel                                                   |
| Check Channel Cue           | React to the current cue state of a channel                                                    |
| Check Channel Listen &nbsp; | React to the current listen state of a channel (muted/unmuted)                                 |
| Check Channel Level         | React to the current output level of a channel                                                 |
| Check Channel State         | React to the current state of a channel (can be used to check for members or active VOX input) |
| Check PGM Level             | React to the current output level of the program audio special channel                         |
| Check Main Level            | React to the current output level of the device                                                |
| Check Input Gain            | React to the current gain level of the device's active input                                   |
| Check Isolate State         | React to the current isolate state of the device                                               |
| Online Heartbeat            | Check for the the connection state of the device (updated every 5 seconds)                     |
