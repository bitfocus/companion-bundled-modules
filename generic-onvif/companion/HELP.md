# Generic ONVIF

This module controls cameras and other devices that support the ONVIF protocol.

## Actions

It is recommended to use the presets as much as possible as there are a lot of actions, variables, and feedbacks that work together.

### PTZ Functions

-   Pan Left/Right
-	Tilt Up/Down
-	Pan/Tilt UpLeft, UpRight, DownLeft, DownRight
-   Zoom In/Out
-   Relative Move
    -   Moves the camera relative to the current PTZ position
    -   Specify Individual Pan, Tilt, and Zoom values along with Pan, Tilt, and Zoom Speeds
-   Absolute Move
    -   Moves the camera to an absolute PTZ position
    -   Specify Individual Pan, Tilt, and Zoom values along with Pan, Tilt, and Zoom Speeds
-   Continuous Move
    -   Moves the camera continuously until stopped
    -   Specify Pan, Tilt, and Zoom Velocity
    -   Specify Timeout - max amount of continous time allowed
-   Stop Move
    -   Stop Pan/Tilt
    -   Stop Zoom
-   Go to Home Position
    -   Specify Pan, Tilt, and Zoom Speeds
-   Set Home Position
-   Recall Preset
-   Set Preset Name

### Imaging Functions

-   Brightness
-   Color Saturation
-   Contrast
-   Exposure
    -   Mode (Auto/Manual)
    -   Exposure Time
    -   Gain
    -   Iris
-   Focus
    -   Mode (Auto/Manual)
    -   Default Speed
    -   Near Limit
    -   Far Limit
-   Sharpness

## Feedbacks

-   Camera is Moving (Pan/Tilt)
-   Camera is Zooming

## Variables

-   Error State
-   Firmware Version
-   Hardware ID
-   Manufacturer
-   Model
-   Move Status (Pan/Tilt)
-   Move Status (Zoom)
-   Preset Names
-   PTZ Position X/Y
-   PTZ Position Z
-   Serial Number

## Presets

-   Up/Down/Left/Right/UpLeft/UpRight/DownLeft/DownRight
