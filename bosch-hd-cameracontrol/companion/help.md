# Bosch HD Camera Control Module

## Overview
This module provides TCP servers for controlling video switching and camera presets.

## TCP Servers

### Video Switcher Server (Port 5000 and 10001)
Emulates Kramer MV-6 (6 inputs) or TvOne Corio (8 inputs) devices
Updates the kramer_vid_in variable or updates the TvOne_vid_in variable with the input number which will let user create triggers for use with whatever switcher is supported by Companion.

### Camera Preset Server (Port 80)
- Supports 8 cameras (cam1 to cam8)
- Updates corresponding preset variables:
  - `cam1_preset`
  - `cam2_preset`
  - `cam3_preset`
  - `cam4_preset`
  - `cam5_preset`
  - `cam6_preset`
  - `cam7_preset`
  - `cam8_preset`

## Authentication
To distinguish which camera to control user needs to add following usernames in HD Camera Control 
- Camera 1: username `cam1`
- Camera 2: username `cam2`
- Camera 3: username `cam3`
- Camera 4: username `cam4`
- Camera 5: username `cam5`
- Camera 6: username `cam6`
- Camera 7: username `cam7`
- Camera 8: username `cam8`

## Trigger Examples
Video switching:
Events: On variable change - Variable to watch - bosch-hd-camera:kramer_vid_in
Actions: atem: ME: Set Program input from variables
Input ID: $(bosch-hd-camera:TvOne_vid_in)

Preset recall:
Events: On variable change - Variable to watch - bosch-hd-camera:cam1_preset
Actions: visca: Recall Preset
Use variables for preset: check
Preset number: $(bosch-hd-camera:cam1_preset)

