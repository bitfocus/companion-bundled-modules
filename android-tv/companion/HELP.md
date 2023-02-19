# Google AndroidTV
*Tested with TCL AndroidTV*

> Make sure you pair the device first!

## TV Setup

For this to turn on the tv you need to turn on Networked Standby.
   1. Hit the Settings Cog Button on your remote.
   2. Go to More Settings
   3. Select Network & Internet
   4. Scroll down to Networked Standby and turn it on.

TV Connection
- Ethernet - Works
- Wifi - Seems to work just fine

## Usage

Create a pair action and launch that action.
When connection is successful it will display a PIN number on the device.
Create an Enter Pin action and fill in the pin code, run the action.

It should be paired now (you can see it on the device).

This module supports:

* Pairing the device
* Power on/off
<!-- * Changing the input -->
* Adjusting volume and mute status
* Launch custom App links just like those custom buttons on remotes or if you want to link directly to a piece of content (Example : "https://www.netflix.com/title.*")
* Feedbacks
* Launching most button commands
  - I included all the button commands but your mileage may vary. I have tested this on a TCL Android Tv and a few of the function buttons did other things.
    - F1 - TCL Channel
    - F2 - TV Settings
    - F3, F6 - TV Input
    - F7 - Apps screen
    - F8 - Media Player
    - F9 - Google Play

## Troubleshooting
 * TV won't turn on
   - Make sure that you turned on Networked Standby
   - Make sure that the Mac Address of the TV is in the config. This should happen automatically if you connect to the TV when the TV is turned on.
   - You might have to hit the button again. This is something that I am trying to make more reliable.
   - I had issues when I turned On Developer Settings.
   - Depending on your tv, there might be other options that you can turn on that don't let the TV turn completely off.
   - Report an issue on Github.
 * This button doesn't work
   - It might not work with your specific model.
   - Unfortunately, the specific input commands didn't work for my TV. You can try setting the input using the F3 button and Down or Up commands.
 * Nothing works anymore
   - Try disabling and re-enabling the module
   - Try unpairing and re-pairing the TV.
		- Uncheck the "Paired" checkbox in the Module Configuration and hit save button to clear saved credentials.
