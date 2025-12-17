## Sony PTZ Camera Module

A module for controlling Sony PTZ Camera BRC and SRG series using HTTP-based commands with digest authentication

### Supported Devices

- BRC-AM7
- SRG-A40
- SRG-A12
- ILME-FR7

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
- Preset Set
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
- Auto Focus
  - on/off
  - mode (normal/interval/zoomtrigger)
  - sensitivity (normal/low)
- Absolute Focus \*SRG only
- Absolute Zoom \*SRG only
- Absolute PTZF
- Absolute PanTilt
- Relative PanTilt \*SRG only
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
- Preset Set
- Rotary Button
  - Pan
  - Tilt
  - Zoom
- Auto Focus

### Variables

- `$(this:autoFraming)` - Auto Framing Status
- `$(this:modelName)` - Model Name
- `$(this:multiTracking)` - Multi-Person Tracking Status
- `$(this:multiTrackingNum)` - Multi Tracking Target Number
- `$(this:name)` - Camera Name
- `$(this:power)` - System Power State
- `$(this:serial)` - Serial Number
- `$(this:softVersion)` - Software Version
- `$(this:streamMode)` - Stream Mode
- `$(this:zoomMode)` - Zoom Mode
- `$(this:panPos)` - Current Pan Position
- `$(this:tiltPos)` - Current Tilt Position
- `$(this:zoomPos)` - Current Zoom Position
- `$(this:focusPos)` - Current Focus Position
- `$(this:panRangeLeft)` - Possible Left Movement Range of Pan
- `$(this:panRangeRight)` - Possible Right Movement Range of Pan
- `$(this:tiltRangeLower)` - Possible Lower Movement Range of Tilt
- `$(this:tiltRangeUpper)` - Possible Upper Movement Range of Tilt
- `$(this:zoomRangeWide)` - Possible Wide Movement Range of Zoom
- `$(this:zoomRangeTele)` - Possible Tele Movement Range of Zoom
- `$(this:absoluteFocus)` - Absolute Focus Value
- `$(this:afSensitivity)` - Auto Focus Sensitivity
- `$(this:autoFocusMode)` - Auto Focus Mode (normal/interval/zoomtrigger) \*SRG only
- `$(this:focusMode)` - Focus Mode (auto/manual)

https://github.com/bitfocus/companion-module-sony-ptz/issues
