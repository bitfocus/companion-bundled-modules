# Eyevinn Open Intercom

- [Eyevinn Open Intercom Github](https://github.com/Eyevinn/companion-module-eyevinn-intercom)

Eyevinn Open Intercom Companion Module allows you to use the Eyevinn Open Intercom controls (mute, push to talk, etc...) with an Elgato Stream Deck. This requires having an Eyevinn Open Intercom running.

## Configuration

### Presets

#### Global Buttons

- Status - Displays the connection status between the module and Open Intercom
- Open Intercom - Opens the intercom website (requires you to configure the URL path in the button)
- Global Input Mute - Mute/Unmmute all calls

#### Call 1-8 Buttons

These buttons allow you to use the controls for a call at a specific index. The first call in your list of calls will be Call 1. The name of the call line will be displayed on the button once you are connected to Open Intercom.

- Input Mute - Mute/Unmute microphone
- Output Mute - Mute/Unmute speaker
- PTT - Push to talk (unmute the microphone while pressed)
- Volume up
- Volume down

#### Call X Buttons

Here you can see buttons named Call 1 to 8. Holding down one of these buttons allows you to use the controls for that call with the "X" buttons. The name of the call line will be displayed on the button once you are connected to Open Intercom. \
E.g. holding down "Call 2" and then pressing "Volume up X" will increase the volume of Call 2.

## Actions

You can also create your own buttons using our Actions.

- Open Intercom - specify the URL
- Toggle Global Mute
- Set Selected Channel - for using the Call X Buttons

For the following actions you can specify the call index or leave it empty to use in combination with the selected channel. Leaving the channel index empty is equivalent to setting index to 0.

- Toggle Input Mute
- Toggle Output Mute
- Push To Talk Start
- Push To Talk Stop
- Increase Volume
- Decrease Volume

## Feedbacks

You can add Feedbacks to your buttons to get their state or set predefined styles. Each of these feedbacks get updated when receiving a relevant message from Open Intercom.

- Get Global Mute Button Status - returns true if global mute is inactive

The following feedbacks use channelIndex as an option

- Is Button Disabled - returns true if the Intercom is disconnected or there is no call at that index
- Get Button Channel Name - sets the text of the button to the call line name at that index
- Get Input Mute Button Status - sets the entire style block for the input mute button at that index. This includes the disabled state.
- Get Ouput Mute Button Status - sets the entire style block for the output mute button at that index. This includes the disabled state.
