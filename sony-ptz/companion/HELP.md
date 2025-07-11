## Sony PTZ Camera Module

A module for controlling Sony PTZ Camera BRC and SRG series using HTTP-based commands with digest authentication

### Supported Devices

- BRC-AM7
- SRG-A40
- SRG-A12

### Actions

- System Power
  - on
  - standby
- Auto Framing
  - on
  - off
  - pause on
  - pause off
  - restart (off and on)
- Auto Framing Shot Mode
  - close up
  - waist
  - full body
- Auto Framing Start Position
  - Move (Recall)
  - Decide (Set)
- Preset Call
  - Look Back
  - PTZ Home (Center Position)
  - Preset Number (1-10)
- Number of Multi-Person Tracking Target
  - 1 (off)
  - 2-8 (on)
- Multi-Person Tracking Wait Time
  - 0 (wait forever)
  - 1-60 (seconds)
- Pan Tilt
  - up
  - down
  - left
  - right
  - up-left
  - up-right
  - down-left
  - down-right
- Zoom
  - tele
  - wide
- Stop Pan Tilt Zoom
  - pan/tilt
  - wide/tele
- Other Command
  - Any command can be sent

### Presets

- System Power
- Auto Framing
- Multi-Person Tracking
- Pan/Tilt/Zoom
  - down: start
  - up: stop
- Preset Call

### Variables

- `$(BRC-AM7:autoFraming)` - Auto Framing Status	
- `$(BRC-AM7:modelName)` - Model Name
- `$(BRC-AM7:multiTracking)` - Multi-Person Tracking Status	
- `$(BRC-AM7:multiTrackingNum)` - Multi Tracking Target Number	
- `$(BRC-AM7:name)` - Camera Name	
- `$(BRC-AM7:power)` - System Power State
- `$(BRC-AM7:serial)` - Serial Number
- `$(BRC-AM7:softVersion)` - Software Version
- `$(BRC-AM7:streamMode)` - Stream Mode	
- `$(BRC-AM7:zoomMode)` - Zoom Mode	


https://github.com/bitfocus/companion-module-sony-ptz/issues

