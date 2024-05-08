# SGL DCT

This module will allow you to control SGL DCT Slow Motion cameras.

## Configuration Options:

-   IP/Port of Device
-   Specify Unused Buffer Variables Text
-   Specify Recording, Playback, and Stop Modes
-   Record into Earliest Free Buffer Upon Init
-   Force Sequential Recording
-   Enable Polling
-   Enable Verbose Logging

## Actions:

-   Set Buffer Count
-   Play/Pause/Stop
-   Increase/Decrease Play Speed
-   Ramp Playback
-   Record (Use Next Available or Specify Buffer)
-   Record Stop
-   Mark In Frame
-   Mark Out Frame
-   Change Recording Mode
-   Change Playback Mode
-   Change Stop Mode
-   Seek to Frame
-   Free Buffer(s)
-   Set Video Mode
-   Set Frame Rate Mode
-   Change Networking Settings
-   Switch Device Mode
-   Reboot Device
-   Shutdown Device
-   Run Custom Command

_All text input fields support parsing for variable values._

## Feedbacks:

-   Buffer (buffer ID) Status: (Free, Used, Record, Play, Pause)
-   Recording Mode is X (Loop, Once)
-   Playback Mode is X (Loop, Once)
-   Stop Mode is X (Live, Black, Color Bars)

## Variables:

-   Buffer (buffer ID) Frames Recorded
-   Buffer (buffer ID) Frames Available
-   Buffer (buffer ID) Status (Free, Used, Record, Play, Pause)
-   Current Recording Buffer (1-4)
-   Current Playback Buffer (1-4)
-   Current Recording Mode (Loop, Once)
-   Current Playback Mode (Loop, Once)
-   Current Stop Mode (Live, Black, Color Bars)
-   Current Frame Position of Playback Buffer
-   Current Playback Marker In
-   Current Playback Marker Out
