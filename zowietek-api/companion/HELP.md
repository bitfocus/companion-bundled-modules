# Zowietek API

This module can be used to communicate with Zowietek devices, providing Companion actions and feedbacks for control of PTZ, streaming, audio, NDI, tally, and more.

---
### Actions


##### Set Output Info
- **Description:** Changes the video output settings such as resolution, audio state, and loop out.  
- **Options:**  
  - **format:** Output resolution from a list of choices  
  - **audio_switch:** Mute/unmute audio  
  - **loop_out_switch:** Toggle loop-out vs normal output  
- **Learn:** Fetches and pre-fills current output info  
- **Callback:** Sends updated settings to the device

##### Set PTZ Config
- **Description:** Configures PTZ parameters (protocol, IP/port, baud rate, etc.).  
- **Options:**  
  - **protocol:** The PTZ protocol  
  - **ip, port, type:** Connection info  
  - **addr, addr_fix, baudrate_id:** Additional PTZ line settings  
- **Learn:** Fetches current PTZ configuration  
- **Callback:** Sends PTZ settings to the device

##### Control PTZ
- **Description:** Sends a PTZ command (e.g., pan, tilt, focus, preset).  
- **Options:**  
  - **command:** Pan left/right, tilt up/down, etc.  
  - **value:** Horizontal or vertical position  
  - **preset_id, preset_desc:** For preset operations  
- **Callback:** Invokes the chosen PTZ command once

##### Set Focus Mode
- **Description:** Sets the PTZ focus mode to Auto, Manual, or One-Push.  
- **Options:**  
  - **focusmode:** 0 = Auto, 1 = Manual, 2 = One-Push  
- **Learn:** Fetches the current focus mode  
- **Callback:** Applies the new focus mode

##### Set AF Sensitivity
- **Description:** Sets the camera’s auto-focus sensitivity.  
- **Options:**  
  - **selected_id:** High, Medium, Low, Ultra-Low  
- **Learn:** Reads current AF sensitivity from the device  
- **Callback:** Updates AF sensitivity

##### Set Focus Area
- **Description:** Adjusts the focus zone and optional point coordinates.  
- **Options:**  
  - **selected_id:** Top/Center/Bottom/Left/Right/All/Point  
  - **x_percent, y_percent, d_pixel:** Used if zone = point  
- **Learn:** Fetches the current focus zone  
- **Callback:** Applies the focus area settings

##### Set Focus Speed
- **Description:** Sets the PTZ focus speed.  
- **Options:**  
  - **focus:** Integer 1–10  
  - **save_flag:** Whether or not to save  
- **Learn:** Fetches current focus speed  
- **Callback:** Applies the chosen focus speed

##### Set AF Lock
- **Description:** Lock or unlock the PTZ autofocus.  
- **Options:**  
  - **af_lock_status:** 0 = Off, 1 = On  
- **Learn:** Retrieves the current AF Lock status  
- **Callback:** Applies the AF lock setting

##### Set Digital Zoom
- **Description:** Adjusts the digital zoom factor.  
- **Options:**  
  - **digital_zoom:** 100–1200  
  - **digital_zoom_enable:** 0 = Off, 1 = On  
  - **digital_zoom_max:** Max allowed zoom factor  
- **Learn:** Reads current digital zoom settings  
- **Callback:** Applies the new digital zoom settings

##### Set Zoom Speed
- **Description:** Sets the PTZ zoom speed.  
- **Options:**  
  - **zoom:** Integer 1–10  
  - **save_flag:** Whether or not to save  
- **Learn:** Reads current zoom speed  
- **Callback:** Updates the zoom speed

##### Trigger One-Push Focus
- **Description:** Triggers a one-push focus at optional coordinates.  
- **Options:**  
  - **x_percent, y_percent, d_pixel:** Region for one-push focus  
- **Callback:** Sends the focus command instantly

##### Add Decoding URL
- **Description:** Adds a new decoding URL (RTSP, etc.).  
- **Options:**  
  - **name:** Friendly name for the stream  
  - **url:** Stream URL  
  - **streamtype:** Local vs Live  
  - **switch:** On/off  
- **Callback:** Sends to the device to begin decoding

##### Toggle Stream
- **Description:** Starts or stops a streaming index.  
- **Options:**  
  - **index:** The stream index (0,1,2...)  
  - **switch:** On/off  
- **Callback:** Toggles the selected stream

##### Set Device Time
- **Description:** Updates the ZowieBox device clock and time-related settings (manual or NTP).  
- **Options:**  
  - **device_time:** New time (ISO format)  
  - **setting_mode_id:** Manual, PC sync, or NTP  
  - **time_zone_id:** Time zone label  
  - **ntp_enable, ntp_server, ntp_port:** NTP configuration  
- **Learn:** Retrieves the current device time  
- **Callback:** Updates the device time

##### Recording Control
- **Description:** Starts, stops, or pauses a recording task.  
- **Options:**  
  - **index:** The recording storage device (USB, SD, NAS)  
  - **command:** Start/stop/pause/resume  
- **Callback:** Sends the command to control recording

##### Set Tally
- **Description:** Configures tally color and mode.  
- **Options:**  
  - **color_id:** Off, Red, Green, Blue  
  - **mode_id:** Auto or Manual  
- **Learn:** Fetches the current tally configuration  
- **Callback:** Applies the new tally settings

##### Toggle Tally
- **Description:** Toggles tally on/off, or uses device state to invert.  
- **Options:**  
  - **switch:** Off, On, or Toggle  
- **Callback:** Updates the tally state accordingly

##### Reboot Device
- **Description:** Sends a reboot command to the device.  
- **Callback:** Reboots if supported

##### Modify Encoding Parameters
- **Description:** Sets encoding parameters for one channel (codec, resolution, etc.).  
- **Options:**  
  - **venc_chnid:** Channel index  
  - **codec, profile, ratecontrol, bitrate, rotate, etc.**  
- **Learn:** Reads the current encoding config from the device  
- **Callback:** Updates the selected channel with new parameters

##### Enable/Disable NDI Decoding
- **Description:** Enables or disables NDI decoding for a given NDI source.  
- **Options (Enable Only):**  
  - **ndi_name:** The NDI source name  
- **Callback:** Updates NDI decoding state

##### Set NDI Group
- **Description:** Sets the NDI group used in decoder mode.  
- **Options:**  
  - **groups:** Name of the NDI group  
- **Callback:** Applies the group setting

##### NDI Switch
- **Description:** Toggles the NDI encoding function on/off.  
- **Options:**  
  - **switch_value:** 0 = Off, 1 = On  
- **Callback:** Switches NDI encoding state

##### Set Audio Config
- **Description:** Sets all audio parameters (input type, codec, bitrate, sample rate, channel, volume).  
- **Options:**  
  - **ai_type, switch (0/1), codec, bitrate, sample_rate, channel, volume, ao_devtype**  
- **Learn:** Retrieves current audio config  
- **Callback:** Applies new audio settings

##### Set Audio Switch
- **Description:** Turns audio on or off.  
- **Options:**  
  - **switch:** 0 = Off, 1 = On  
- **Callback:** Immediately toggles audio

##### Set Exposure Info
- **Description:** Configures camera’s exposure parameters (mode, shutter, gain, flicker, etc.).  
- **Options:**  
  - **mode, gain, shutter, wdr, flicker, bias, backlight, metering, sensitive, etc.**  
- **Learn:** Fetches current exposure settings  
- **Callback:** Updates exposure parameters

##### Set Aperture
- **Description:** Adjusts lens aperture (0=CLOSE ... 12=F1.6).  
- **Options:**  
  - **aperture:** Aperture ID  
- **Learn:** Reads current aperture setting  
- **Callback:** Applies new aperture value

##### Set White Balance
- **Description:** Sets color temperature, gains, hue, saturation, IR-cut, etc.  
- **Options:**  
  - **mode, var, rgain, bgain, saturation, hue, ircut, etc.**  
- **Learn:** Fetches the current WB settings  
- **Callback:** Updates white balance parameters

##### Set Image Info
- **Description:** Adjusts brightness, contrast, sharpness, gamma, flip, color/gray.  
- **Options:**  
  - **brightness, contrast, sharpness, gamma, flip, color_gray**  
- **Learn:** Reads current picture settings  
- **Callback:** Applies new image adjustments

##### Set Noise Reduction
- **Description:** Configures 2D/3D noise reduction levels and correction factor.  
- **Options:**  
  - **nr_2d, nr_3d, correction**  
- **Learn:** Fetches current NR settings  
- **Callback:** Updates noise reduction parameters

##### Set Image Style
- **Description:** Applies a preset picture style (e.g. default, normal, bright, clarity).  
- **Options:**  
  - **selected_id:** Style ID  
- **Learn:** Reads current style from the device  
- **Callback:** Applies the selected style

##### Set AE Lock
- **Description:** Locks or unlocks auto-exposure so it remains constant.  
- **Options:**  
  - **ae_lock_status:** 0 = Off, 1 = On  
- **Learn:** Reads the current AE lock status  
- **Callback:** Applies the AE lock setting

---

### Feedbacks

##### **Output Info**
- **Description:** Indicates whether the device’s current output resolution, audio state, and loop-out setting match the user’s chosen values.
- **Learn:** Fetches current output info  
- **Callback:** Compares stored settings with the user’s selections

##### **Audio Config**
- **Description:** Shows whether the device’s audio configuration matches the user’s chosen input type, codec, bitrate, etc.
- **Learn:** Reads current audio config  
- **Callback:** Compares all relevant fields

##### **Device Time**
- **Description:** Checks if the device’s internal clock matches a user-specified time.
- **Learn:** Reads the current device time  
- **Callback:** Compares the user’s desired time to the stored device time

##### **Tally**
- **Description:** Checks if the current tally color/mode matches user-chosen values.
- **Learn:** Fetches current tally parameters  
- **Callback:** Compares color and mode to the stored state
