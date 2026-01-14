**Soundcraft Ui12 / Ui16 / Ui24R**

This module controls the Soundcraft Ui series (Ui12, Ui16 and Ui24R).
Please be aware of your device's capabilities – not all available features are supported on all device versions.
If you're missing a feature, feel free to [open an issue](https://github.com/bitfocus/companion-module-soundcraft-ui/issues).

| Console Function       | What it does                                                     |
| ---------------------- | ---------------------------------------------------------------- |
| Mute                   | Mute channels on master, AUX or FX buses (incl. feedback)        |
| Solo                   | Set SOLO for channels on master bus (incl. feedback)             |
| Set Fader Levels       | Set the level of faders on master, AUX or FX buses               |
| Change Fader Levels    | Relatively change the level of faders on master, AUX or FX buses |
| Fade transitions       | Perform fade transitions on all channels                         |
| Set channel delay      | Set delay for all faders and master                              |
| Set/change PAN         | Set and relatively change PAN for channels on mastwer and AUX    |
| PRE/POST               | Set PRE/POST for channels on AUX or FX buses                     |
| PRE/POST PROC          | Set PRE/POST PROC for channels on AUX buses (Ui24R only)         |
| SOLO/Headphone Volume  | Set and change the volume of SOLO and Headphone buses            |
| MUTE Groups            | Enable, disable and toggle MUTE groups                           |
| Media Player           | Control media player transport, load playlists and tracks        |
| 2-Track Recording      | Control the dual-track recorder                                  |
| Multitrack Recording   | Control the multitrack recorder (Ui24R only)                     |
| Dim Master             | Dim the master bus (incl. feedback) (Ui24R only)                 |
| Shows, Snapshots, Cues | Load shows, snapshots and cues. Save snapshots and cues          |
| Phantom Power          | Switch phantom power on hardware channels                        |
| Automix                | Enable/disable automix groups, assign channels to groups         |
| FX Settings            | Set parameters and BPM for FX processors                         |
| Patching               | Change patch config (Ui24R only)                                 |

This module supports variables and feedback for most functions.
Fader levels, channel names, PAN values and player status are available as variables.
Some variable types have to be enabled in the module config.

Boolean feedback is available for MUTE, SOLO, PRE/POST, and more.
