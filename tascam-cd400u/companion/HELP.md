## Tascam CD-400U Media Player

This module will control the Tascam CD-400U when fitted with an IF-E100 Ethernet module.

- [Tascam CD-400U Page](https://tascam.com/us/product/cd-400u/)

## Configuration

Enter the IP address, and port of the media player. If using CD-400U DAB, enable the DAB check box.

It is recommended to disable APS on the CD-400U as when in power save mode the network interface is disabled.

**NOTE**

This module has been tested with firmware 1.42 / 0.38. It is recommended to use this or a more recent release.

Testing has revealed the unit may become non responsive to network control when a damaged CD-DA is loaded. If this occurs, it can be resolved by changing device on the unit front panel, and then forcing the companion module to reconnect.

## Actions

- **Stop**

STOP puts the controlled device into the stop state.
If the mode is FM, AM or DAB, this command switches between frequency and preset modes.

- **Play**

Play puts the controlled device into playback mode.

- **Pause**

READY puts the controlled device into playback standby mode.

- **Search**

When the source is CD, USB or SD, SEARCH puts the controlled device into the search playback mode. The controlled device remains in the search playback mode until it receives a command such as STOP, PLAY, or READY.
When the source is FM or AM, this command automatically searches for received frequencies in the higher or lower direction.

- **Eject**

EJECT ejects a CD Media from the controlled device.
If the device selected on the controlled device is not CD, this command ejects the CD Media.

- **Skip**

SKIP allows the controlled device to skip a track.
If the mode is FM or AM and a preset number is not displayed (Frequency mode), this command changes the received frequency.
If the mode is FM or AM and a preset number is displayed (Preset mode), this command moves to the previous or next preset number.

- **Direct Track Search Preset**

DIRECT TRACK SEARCH PRESET performs a search for a track on the controlled device by specifying the track number. If a track search is performed while the controlled device is in a stop state, the controlled device remains in the stop state at the beginning of the selected track.
If a track search is performed while the controlled device is in a state other than the above state, the controlled device switches back to the state where it was before starting a search and remains in that state. When the source is AM, FM or DAB, this performs selection of a preset station by specifying the preset number.

- **Clear**

CLEAR replies no or cancel when a message is displayed. (Same as CLEAR button)

- **Enter**

ENTER works as same as pressing the main unit MULTI JOG dial or remote control ENTER button.
When a Menu Screen is open, ENTER confirms selections and settings.
When play area is folder and selecting a track/folder (folder icon is blinking), ENTER starts playback if a track is selected or moves down one level if a folder is selected.
When a message is displayed, ENTER replies Yes.

- **Back**

BACK works as same as pressing the main unit BACK **[PAIRING]** button.
When the Menu screen is open, BACK returns to the Home Screen. When a Menu setting screen is open, BACK goes up one menu level.
When the current source is USB or SD and the play area is folder (the folder icon shown), this move up one folder level.
When the current source is BLUETOOTH, press and hold to activate Bluetooth pairing mode. When a Bluetooth connection is active (Connected shown), press to disconnect forcefully.

- **Device Select**

DEVICE SELECT changes the device to be used on the controlled device.

- **Incremental Playback**

INCR PLAY SELECT turns the incremental playback mode of the controlled device on or off.

- **Play Area Select**

PLAY AREA SELECT sets the playback area of the controlled device. This command is not supported when the media is CD-DA.

- **Play Mode Select**

PLAY MODE SELECT sets the playback mode of the controlled device.

- **Remote/Local Select**

REMOTE/LOCAL SELECT enables or disables key operation on the controlled device.

- **Repeat Play Select**

REPEAT SELECT turns the repeat mode of the controlled device on or off.

- **Resume Play Mode**

RESUME PLAY SELECT turns the resume play mode of the controlled device on or off.

## Variables

- **Error Status**
- **Caution Status**
- **Device Status**

## Feedbacks

- **Caution State**
- **Device Select**
- **Error State**
- **Incremental Play**
- **Mecha Status**
- **Media Status**
- **Play Area**
- **Play Mode**
- **Remote/Local Control**
- **Repeat**
- **Resume Play**

## Version History

### Version 1.1.4

- Update dependencies
- Minor fixes

### Version 1.1.3

- Correct module name
- Fix config password regex

### Version 1.1.2

- Better preset layouts
- Better status updates
- Update companion-module-base to 1.8.0

### Version 1.1.1

- Fix Caution - Media Error feedback parameter value

### Version 1.1.0

- Add device, status & transport presets, update companion-module-tools

### Version 1.0.1

- Update help.md

### Version 1.0.0

- Initial release
