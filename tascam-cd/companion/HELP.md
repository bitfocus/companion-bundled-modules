## Tascam SS-CDR250N / SS-R250N Media Player & Recorder

This module will control the Tascam SS-CDR250N and SS-R250N Media Player and Recorders

- [Tascam SS-CDR250N Page](https://tascam.com/us/product/ss-cdr250n/top)
- [Tascam SS-R250N Page](https://tascam.com/us/product/ss-r250n/top)

## Configuration
Enter the IP address, port of the media player. If a password is required, enter the password.

## Actions
- **Stop** 


 STOP puts the controlled device into the stop state and also takes the controlled device out of input monitor mode.
- **Play**


 Play puts the controlled device into playback mode and also brings the controlled device from record ready mode to recording mode.
- **Record**


 RECORD puts the controlled device into record ready mode. It also numbers tracks during recording and puts the controlled device into input monitoring mode when no media is in the controlled device.
- **Pause**


 READY puts the controlled device into playback standby mode or record ready mode.
- **Jog**


 Enables JOG playback of the controlled device.
- **Shuttle**


 SHUTTLE puts the controlled device into the shuttle mode. The controlled device remains in the shuttle mode until it receives a command such as STOP, PLAY, or PAUSE.
- **Flash Load**


 FLASH LOAD puts the controlled device into Flash Load mode.
- **Eject**


 EJECT ejects a CD Media from the controlled device. (If the controlled device is SS-R250N, it returns ILLEGAL [F2].) If the device selected on the controlled device is not CD, this command is ignored.
- **Skip**


 SKIP allows the controlled device to skip a track.
- **Call**


 CALL locates the controlled device to a call point and puts the controlled device into the ready state.
- **Auto Cue Select**


 AUTO CUE SELECT turns the Auto-cue mode of the controlled device on or off.
- **Auto Cue Level Preset**


 AUTO CUE LEVEL PRESET sets the auto cue level of the controlled device.
- **Direct Track Search Preset**


 DIRECT TRACK SEARCH PRESET performs a search for a track on the controlled device by specifying the track number.
- **Auto Track Select**


 AUTO TRACK SELECT turns the Auto-cue mode of the controlled device on or off.
- **Auto Track Level Preset**


 AUTO TRACK LEVEL PRESET sets the auto track level of the controlled device.
- **Sync Rec Level Preset**

 SYNC REC LEVEL PRESET sets the level of the sync recording of the controlled device.
- **Pitch Control Select**


 PITCH CONTROL SELECT turns the pitch control mode of the controlled device on or off.
- **Auto Ready Select**


 AUTO READY SELECT turns the auto ready mode of the controlled device on or off.
- **Repeat Mode**


 REPEAT SELECT turns the repeat mode of the controlled device on or off.
- **Sync Rec Select**


 SYNC REC SELECT turns the sync rec mode of the controlled device on or off.
- **Incremental Playback Select**


 INCR PLAY SELECT turns the incremental playback mode of the controlled device on or off.
- **Key Control Select**


 KEY CONTROL SELECT turns the key control mode of the controlled device on or off.
- **Remote/Local Select**


 REMOTE/LOCAL SELECT enables or disables key operation on the controlled device.
- **Play Mode Select**


 PLAY MODE SELECT sets the playback mode of the controlled device.
- **Specified Device Status Sense**


 SPECIFIED DEVICE STATUS SENSE requests to return the status of the specified device of the controlled device.
- **Current Track Time Sense**


 CURRENT TRACK TIME SENSE requests the controlled device to return the selected time information about the current track or the whole media, when in a playback or a ready state.
- **Power Control**


 POWER CONTROL turns ON / OFF (standby) the power of the controlled device.
- **Device Select**


 DEVICE SELECT changes the device to be used on the controlled device.
- **Divide**


 The File currently in playback standby mode on the controlled device is divided into two files at that point.
- **Delete**


 The file(s) for the current track on the controlled device are deleted.
- **Play Area Select**


 PLAY AREA SELECT sets the playback area of the controlled device.
- **File Name Select**


 Set the format of the recording file name of the controlled device.
- **Media Format**


 Formats the selected media in the controlled device.
- **Input Select**


 INPUT SELECT sets the input source select of the controlled device.

## Variables
- **Track Number** 
- **Track Time**
- **Error Status**
- **Caution Status**
- **Device Status**

## Feedbacks
- **Caution State**
- **Device Select**
- **End of Media**
- **Error State**
- **Incremental Play**
- **Mecha Status**
- **Play Area**
- **Play Mode**
- **Remote/Local Control**
- **Repeat**
- **Resume Play**

## Version History

### Version 2.1.3
- Fix password regex

### Version 2.1.2
- Better status updates
- Better preset formatting
- Update companion-module-base to 1.8.0

### Version 2.1.1
- Add record preset

### Version 2.1.0
- Add device, status and transport presets

### Version 2.0.3
- End of Media feedback
- Track Number & Track Time variable fixes
- Track Time mode saved to device config
- Update companion-module-tools to 1.5.0

### Version 2.0.2
- Minor fixes

### Version 2.0.1
- Add action & feedback subscription callbacks
- Update package.json
- Update companion-module-base to 1.7.0

### Version 2.0.0
- Brand new module vs 1.0.0
