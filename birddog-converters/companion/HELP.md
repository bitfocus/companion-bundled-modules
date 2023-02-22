## BirdDog Converters

This module allows you to control BirdDog NDI encoders and decoders.

### Requirements

- BirdDog converter running the latest NDI 5 firmware version

### Configuration

- Enter the IP address or hostname of the BirdDog device in the module settings

### Available actions

- Change Decode Source
  - _Note: when using custom sources, you must include the full name (ex. `PTZ-1 (CAM)` instead of `PTZ-1`)_
- Refresh NDI Source List
- Jump to Next/Previous Decode Source
- Reboot Device
- Restart Video System

### Available variables

- decode_source
- current_mode
- video_format
- video_resolution
- video_framerate
- source_status
