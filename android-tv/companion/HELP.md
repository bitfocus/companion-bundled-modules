# Google AndroidTV
*Tested with TCL AndroidTV*

> Make sure you pair the device first!

## TV Setup
For this to turn on the tv you need to turn on Networked Standby.
1. Hit the **Settings Cog** Button on your remote.
2. Go to **More Settings**
3. Select **Network & Internet**
4. Scroll down to **Networked Standby** and turn it on. *If this option is not available, Google sign in might be required.

TV Connection
- Ethernet - Can be unreliable when trying to Power ON
- Wifi - Very reliable in testing


## Companion Setup
1. Select the dropdown **Automatic Search** to find compatible Android TVs on your local network.
	1. Select **Manual** and enter the IP address manually if not found. **Device must be turned on and on the same network for Automatic Search to work.**
	2. **This module only supports IPv4 addresses.**
2. Hit the **Save** button.

## Pairing
1. Create a pair action and launch that action.
	- There are Preset buttons to aid with this.
		1. Go to **Buttons**
		2. Select the **Presets** tab
		3. Select **Google:androidtv**
		4. Select **Pairing**
		5. Click and Drag **Pair** and **Send Pin** onto the controller.
		6. Launch the **Pair** button from the controller.
2. When connection is successful it will display a PIN number on the device.
3. Create an **Enter Pin** action and fill in the pin code, run the action.
	1. Select the **Send Pin** button created before from the controller.
	2. Enter the pin displayed on the TV.
	3. Launch the **Send Pin** button from the controller.

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

## Going to the Input Screen
Your mileage may vary with this solution. To go to the input screen from the home screen, create a button in Companion to launch the following button pushes:
1. KEYCODE_F3 button to bring up the input switcher.
2. KEYCODE_DPAD_CENTER button to select the last used Input.

## Troubleshooting
 * TV won't turn on
   - Make sure that you turned on Networked Standby
   - Make sure that the Mac Address of the TV is in the config. This should happen automatically if when you pair to the TV and the TV is turned on.
   - You might have to hit the ON button again. When the TV is on an ethernet connection, sometimes it struggles to turn back on. Set the **Retry Duration** option in the module settings to 30 to keep trying to wake the TV. Alternatively, turn on the Wifi connection on the TV and switch to that address for TV control.
   - I had issues when I turned On Developer Settings.
   - Depending on your tv, there might be other options that you can turn on that don't let the TV turn completely off.
   - Report an issue on Github.
 * This button doesn't work
   - It might not work with your specific model.
   - Unfortunately, the specific input commands didn't work for my TV. You can try setting the input using the F3 button and Down or Up commands.
 * Nothing works anymore
   - Try disabling and re-enabling the module
   - Try unpairing and re-pairing the TV.
		- Uncheck the **Paired** checkbox in the Module Configuration and hit save button to clear saved credentials.
