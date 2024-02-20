# Help for the JVC module

>> TESTED against KZ100 and PZ510 cameras

## Configuration
* **Target IP** Enter the address of the JVC Camera.
* **Username** default = jvc
* **Password** default = 0000

## Actions

>>First look at the presets, they have a stop command in there!

The following actions are available:
* **Zoom:** Program voor Wide or Tele, ALWAYS put a stop command (do it on keyup)
* **Focus:** Program voor Near or Far, ALWAYS put a stop command (do it on keyup)
* **Set Zoom position:** position 0-499
* **Set preset zoom position in memory:** put position (0-499) into memory A, B, C or D
* **Gain control:** +1 or -1 steps of 3db
* **White balance control:** Set to Auto WB, 3200K or 5600K options depens on camera model
* **Iris:** Set open and close
* **Exposure setting:** Manual, Auto, IrisPriority, ShutterPriority
* **Recoring control:** Start or stop recording
* **StudioTally lamp control:** Set tally light of the camera (you have to enable tally control at the camera first)
* **Set Tracking On/Off** Switches automatic tracking on or off. This functionality is not available at all cameras but the action is always available.
* **Set Tracking Mode** Choose different tracking modes.
* **Menu control** Use to control the camera's OSD menu.

## Variables available

* **model**: Model of the camera (Standard would be $(JVC ptz:model), type that in a button text)
* **serial**: Serial number of the camera (Standard would be $(JVC ptz:serial), type that in a button text)
* **pan**: Actual pan position of the haed. This position is only updated after a movement action has been executed or with polling.
* **tilt**: Actual tilt position of the haed. This position is only updated after a movement action has been executed or with polling.

# Feedbacks

For recoring and tally you can program feedback on a button. They will respond to status.
For your programming convenience feedbacks are also available for the state of the tally lamp and the tracking state.
These feedbacks will only reflect the current camera state if polling is enabled. Without polling the feedbacks are locally tracked and may not show the real state.
