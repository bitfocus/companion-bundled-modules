## Mitti

**Basic Configuration**

- In Mitti > Preferences... > OSC/UDP Controls, select "Enabled"
- In the configuration page for the Mitti module in Companion, enter the IP address of the computer running Mitti

**Enabling Button Variables & Feedback**

- In Mitti > Preferences... > OSC/UDP Controls, select **Custom** from the **Feedback To** dropdown.
- For **IP Address** enter the IP address of the computer running Companion.
- For **Port** enter the port number that is present on the configuration page for the Mitti module in Companion. By default port `1234` is used.

![Mitti](images/mitti.png?raw=true 'Mitti')

**Available Actions**

- Play
- Toggle Play
- Stop
- Panic
- Rewind
- Jump to previous cue
- Jump to next cue
- Jump to specific cue
- Jump to selected cue
- Jump to cue with name
- Select previous cue
- Select next cue
- Goto 30
- Goto 20
- Goto 10
- Play Selected Cue
- Play cue with number / ID
- Play cue with name
- Toggle Fullscreen
- Fullscreen On
- Fullscreen Off
- Toggle Playlist Loop
- Playlist Loop On
- Playlist Loop Off
- Toggle Playlist Transition on Play
- Transition on Play Off
- Transition on Play On
- Resend OSC Feedback

_Requires Mitti 2_

- Cue Scale
- Cue Position
- Cue Crop
- Cue Rotation
- Cue Hue
- Cue Saturation
- Cue Vibrance
- Cue Brightness
- Cue Contrast
- Cue Opacity
- Cue Volume
- Toggle Goto Cue after End
- Goto after End On
- Goto after End Off
- Set Goto after End Cue
- Master Fader

**Available Feedback**

- Play/Pause Status
- Cue Name Playing
- Cue ID Playing
- Cue ID Selected
- Time Remaining

**Available Variables**

- currentCueName
- currentCueID (requires Mitti 2)
- previousCueName
- nextCueName
- selectedCueName
- selectedCueID (requires Mitti 2)
- playStatus
- cueTimeLeft **(-HH:MM:SS)**
- cueTimeLeft_h
- cueTimeLeft_m
- cueTimeLeft_s
- currentCueTRT **Total Runtime (TRT) of Current Cue**
- cue\_(number)\_cueName (requires Mitti 2)
