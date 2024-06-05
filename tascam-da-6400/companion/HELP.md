## Tascam DA-6400 Multichannel Audio Recorder

This module will control the Tascam DA-6400.

- [Tascam DA 6400 Page](https://tascam.com/us/product/da-6400/)

## Configuration
Enter the IP address, port and password of the recorder.

## Actions
- **Stop**

This stops the controlled device.
- **Play**

This starts controlled device playback.
- **Record**

This puts the controlled device into recording or recording standby status.
- **Pause**

This pauses playback of the controlled device.
- **Search**

This starts search playback on the controlled device.
- **Skip**

This skips on the controlled device.
- **Repeat Mode**

This sets the repeat mode of the controlled device.
- **Remote/Local Select**

Set whether operations using the controlled device itself are enabled or disabled.
- **Play Mode Select**

This sets the play mode of the controlled device.
- **Current Track Time**

This requests that time information about the current take (or take being recorded) be returned. (Hour, minute, second, frame)
- **Mark - Delete**

Delete a mark on the controlled device.
- **Mark - Set**

This sets a mark on the controlled device.
- **Mark - Direct Skip Preset**

Specify a mark number to skip to it.
- **Project Delete**

This deletes a project.
- **Project Select**

Specify the project number to change the current project.
- **Project Skip**

This changes the project.
- **Rebuild Project**

This rebuilds the current project/session.
- **Chase Select**

This turns the chase mode of the controlled device on/off.
- **TC Restart**

This restarts the controlled device TC GENERATOR from the START TIME.
- **TC Generator Mode**

This sets the TC GENERATOR mode of the controlled device.
- **TC Frame Type**

This sets the TC FRAME TYPE of the controlled device.
- **TC Output Mode**

This sets the TC mode output by the TC output connector of the controlled device.
- **Clock Master Select**

Set the master clock of the controlled device.
- **Word Thru Select**

This sets the WORD/VIDEO SETUP of the controlled device.

- **Bit Length Select**

This sets the bit length used by the controlled device.
- **Pause Mode**

This sets the PAUSE mode of the controlled device.
- **Audio Over Marker**

This sets the AUDIO OVER MARKER of the controlled device.
- **Time Interval Marker**

This sets the TIME INTERVAL MARKER of the controlled device.
- **Time Interval Marker Time**

This sets the TIME INTERVAL MARKER TIME of the controlled device
- **Sync Unlock Marker**

This sets the SYNC UNLOCK MARKER of the controlled device.
- **REC FS Select**

This sets the REC FS used by the controlled device.
- **File Name Select**

This sets the FILE NAME used by the controlled device.
- **Media Format**

This formats the specified media of the controlled device.
- **Aux Assign Key**

This sets the AUX KEY ASSIGN of the controlled device.
- **Aux Assign Key Tally**

This sets the AUX TALLY ASSIGN of the controlled device.
- **Meter Peak Hold Time**

This sets the METER PEAK HOLD TIME used by the controlled device.
- **Meter Peak Clear**

Clear meter peak holds on the controlled device.
- **Digital Reference Level**

This sets the DIGITAL REFERENCE LEVEL used by the controlled device.
- **Take Erase**

Erase a specified take in the current project on the controlled unit.
- **Direct Track Search Preset**

Specify a take number to search for it directly.
- **Record Function**

This turns the record function of the controlled device on/off.


## Variables
- **Caution Status**
- **Error Status**
- **Track Number**
- **Track Time**
- **Track Time: Hours**
- **Track Time: Minutes**
- **Track Time: Seconds**
- **Track Time: Frames**

## Feedbacks
- **Caution**
- **Error**
- **Mecha Status**
- **PSU Error**  Undocumented. Presumed only relevant for the DA-6400dp. Unknown how to query state - module assumes device is OK on connect.
- **Repeat Mode**
- **Remote/Local Mode**
- **Keyboard Type**
- **Chase Mode**
- **TC Generator Mode**
- **TC Frame Type Mode**
- **TC Output Mode**
- **Clock Master**
- **Word Through**
- **Bit Length**
- **Pause Mode**
- **Play Mode**
- **Audio Over Marker**
- **Time Interval Marker**
- **Sync Unlock Marker**
- **Record Sample Rate**
- **File Name**
- **Meter Peak Time**
- **Digital Reference Level**

## Version History

### Version 1.2.3
- Fix password regex

### Version 1.2.2
- Better status updates
- Transport preset layout
- Update companion module base to 1.8.0

### Version 1.2.1
- Add record preset

### Version 1.2.0
- Add transport & status presets
- Update companion-module-tools to 1.5.0

### Version 1.1.3
- Bug fixes & timer safety

### Version 1.1.1
- Bug fixes
- Update help
- Update companion module base to 1.7.0

### Version 1.1.0
- Seperate track time variables for Hours, Minutes, Seconds & Frames
- Update companion module base to 1.6.0, update companion module tools to 1.4.2
- Add feedbacks
- Add learn function to many actions
- Code refactor

### Version 1.0.2
- Initial release
