## RØDECaster Video
This module can be used to communicate with a RØDECaster Video switcher.


## Documentation

### Actions

- **Control Buttons**
	- Directly control buttons on the device.
- **Input Sources**
	- Used for direct control of input sources.
- **Scene Sources**
	- Used for direct control of scenes.
- **Media Sources**
	- Used for direct control of media sources.
- **Overlay Sources**
	- Used for direct control of overlays.
- **Audio Sources**
	- Control audio sources, including level, gain and mute.
- **Audio Delay**
	- Control master audio delay value.
- **Transitions**
	- Control transition type and time.
- **Auto Switching**
	- Enable/Disable/Toggle auto switching.
- **Logo**
	- Enable/Disable/Toggle logo watermark.
- **Frame Rate**
	- Change the frame rate of the device.
- **Keying**
	- Enable/disable keying on input sources.
- **Video Outputs**
	- Controls video outputs.


### Feedbacks
All feedbacks are booleans, which allows them to be used in triggers.

- **Control State**
	- Provides feedback for button state of physical device, including PGM, PVW, Idle and Unavailable.
- **Input State**
	- Provides feedback for specific input, including PGM, PVW, Idle and Unavailable.
- **Scene State**
	- Provides feedback for specific scene, including PGM, PVW, Idle and Unavailable.
- **Media State**
	- Provides feedback for specific media, including PGM, PVW, Idle and Unavailable.
- **Overlay State**
	- Provides feedback for specific overlay, including PGM, PVW, Idle and Unavailable.
- **Streaming State**
	- Provides feedback if the device is streaming or ready to stream.
- **Recording State**
	- Provides feedback if the device is recording or ready to record.
- **Audio Source Status**
	- Provides feedback on audio channels and mixes, including current level, gain and mute state.
- **Auto Switching State**
	- Provides feedback on if auto switchin is enabled or not.
- **Logo State**
	- Provides feedback on if the logo watermark is enabled or not.
- **Keying Status**
	- Provides feedback based on an input's keying status.
- **Video Outputs**
	- Provides feedback based on video output state.


### Variables

##### Show Information
- `$(RCV:show_name)`
- `$(RCV:stream_timecode)`
- `$(RCV:record_timecode)`
- `$(RCV:audio_delay_frames)`
- `$(RCV:audio_delay_ms)`
- `$(RCV:transition_time)`

##### Device Settings
- `$(RCV:device_fanspeed)`
- `$(RCV:frame_rate)`

##### Input Sources
- `$(RCV:input_1_name)`
- `$(RCV:input_2_name)`
- `$(RCV:input_3_name)`
- `$(RCV:input_4_name)`
- `$(RCV:input_5_name)`
- `$(RCV:input_6_name)`

##### Scene Source Names
- `$(RCV:scene_A_name)`
- `$(RCV:scene_B_name)`
- `$(RCV:scene_C_name)`
- `$(RCV:scene_D_name)`
- `$(RCV:scene_E_name)`
- `$(RCV:scene_F_name)`
- `$(RCV:scene_G_name)`

##### Media Source Names
- `$(RCV:media_A_name)`
- `$(RCV:media_B_name)`
- `$(RCV:media_C_name)`
- `$(RCV:media_D_name)`
- `$(RCV:media_E_name)`
- `$(RCV:media_F_name)`
- `$(RCV:media_G_name)`

##### Overlay Source Names
- `$(RCV:overlay_A_name)`
- `$(RCV:overlay_B_name)`
- `$(RCV:overlay_C_name)`
- `$(RCV:overlay_D_name)`
- `$(RCV:overlay_E_name)`
- `$(RCV:overlay_F_name)`
- `$(RCV:overlay_G_name)`

##### Wireless Device Status
- `$(RCV:wireless1_connected)`
- `$(RCV:wireless1_signal)`
- `$(RCV:wireless1_battery)`
- `$(RCV:wireless1_charging)`
- `$(RCV:wireless1_muted)`
- `$(RCV:wireless1_record)`
- `$(RCV:wireless2_connected)`
- `$(RCV:wireless2_signal)`
- `$(RCV:wireless2_battery)`
- `$(RCV:wireless2_charging)`
- `$(RCV:wireless2_muted)`
- `$(RCV:wireless2_record)`

##### Storage Information
- `$(RCV:storage_usb_data_used)`
- `$(RCV:storage_usb_data_remain)`
- `$(RCV:storage_usb_percent)`
- `$(RCV:storage_sd_data_used)`
- `$(RCV:storage_sd_data_remain)`
- `$(RCV:storage_sd_percent)`

##### Audio Sources
- `$(RCV:master_live_L` (db)
- `$(RCV:master_live_R` (db)
- `$(RCV:<channel>-<mix>_setlevel)` (db)
- `$(RCV:<channel>-<mix>_setgain)` (db)
- `$(RCV:<channel>-<mix>_livelevelL)` (db)
- `$(RCV:<channel>-<mix>_livelevelR)` (db)