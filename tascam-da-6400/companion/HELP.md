## Tascam DA-6400 Multichannel Audio Recorder

This module will control the Tascam DA-6400.

- [Tascam DA 6400 Page](https://tascam.com/us/product/da-6400/)

## Configuration
Enter the IP address, port and password of the recorder.

## Actions
- **Stop** 
- **Play** 
- **Record** 
- **Pause** 
- **Search** 
- **Skip**
- **Repeat Mode**
- **Remote/Local Select**
- **Play Mode Select**
- **Mark - Delete**
- **Mark - Set**
- **Mark - Direct Skip Preset**
- **Project Delete**
- **Project Select**
- **Project Skip**
- **Rebuild Project**
- **Chase Select**
- **TC Restart**
- **TC Generator Mode**
- **TC Frame Type**
- **TC Output Mode**
- **Clock Master Select**
- **Word Thru Select**
- **Pause Mode**
- **Audio Over Marker**
- **Time Interval Marker**
- **Time Interval Marker Time**
- **Sync Unlock Marker**
- **REC FS Select**
- **File Name Select**
- **Media Format**
- **Aux Assign Key**
- **Aux Assign Key Tally**
- **Meter Peak Hold Time**
- **Meter Peak Clear**
- **Digital Reference Level**
- **Take Erase**
- **Direct Track Search Preset**
- **Record Function**


## Variables
- **Caution Status**
- **Error Status**
- **Track Number**
- **Track Time**
- **Track Time: Hours**
- **Track Time: Minutes**
- **Track Time: Seconds**
- **Track Time: Frames**
- **Error Status**
- **Caution Status**

## Feedbacks
- **Caution**
- **Error**
- **Mecha Status**
- **PSU Error** Undocumented and presumed only relevant for the DA-6400dp. Unknown how to query state, so module assumes device is OK on connect.
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

### Version 1.1.0
- Seperate track time variables for Hours, Minutes, Seconds & Frames
- Update companion module base to 1.6.0, update companion module tools to 1.4.2
- Add feedbacks
- Add learn function to many actions
- Code Refactor

### Version 1.0.2
- Initial release
