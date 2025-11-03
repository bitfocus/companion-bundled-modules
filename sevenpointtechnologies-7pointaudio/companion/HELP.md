## 7 Point Audio

To understand the purpose of the actions available in this module, please reference and read the 7 Point Audio reference manual available in the About > User Manual menu option.

This module is created to provide a managed set of actions that can remotely send commands to 7 Point Audio for remote control capabilities. This provides an additional, tactile way for users to interact with the software.

#### Initial Configuration

1. Within 7 Point Audio, enable the **Remote Control Ability** from the Settings > Configuration > Remote menu.
2. Set the **Remote UDP Port** in the same menu to the Port in the defined Settings. By default this setting in 7 Point Audio is set to 7788, which is the default in this Companion module as well. While they need to be set to the same value, if you make no changes to the setting the everything should work.
3. Apply the Settings changes and make sure to **_Allow_** the changes if prompted by the operating system.

#### Add actions

Add any actions you need to the buttons as you wish. These buttons will be used to fire off network commands to the 7 Point Audio software.

| Command     | Description                                                                                                                                                                                          |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| play        | Will cause the typical Play command to be sent. This will move any items from Next to Now.                                                                                                           |
| playbutton  | Plays a button identified by the buttonid.                                                                                                                                                           |
| stop        | Will cause a stop action to be executed. A single send of this command will cause normal Fade Out transitions to occur. Sending a second command in rapid succession will cause a Stop All to occur. |
| stopall     | Will cause all audio to stop immediately without a fade transition.                                                                                                                                  |
| rewind      | Rewinds the current playing sound.                                                                                                                                                                   |
| loop        | Sets the Loop status of the current playing track.                                                                                                                                                   |
| pause       | Toggles the Paused state of the current playing sound.                                                                                                                                               |
| equalizer   | Enables/Disables the Equalizer DSP on the output.                                                                                                                                                    |
| compressor  | Enables/Disables the Compressor DSP on the output.                                                                                                                                                   |
| defaultfade | Enables/Disables the Default Fade In/Out settings.                                                                                                                                                   |
| crossfade   | Enables/Disables the Crossfade setting.                                                                                                                                                              |
| volume      | Sets the Volume level to a value between 0 and 100.                                                                                                                                                  |
| volumedown  | Adjusts the volume down between 1 - 5.                                                                                                                                                               |
| volumeup    | Adjusts the volume up between 1 - 5.                                                                                                                                                                 |
