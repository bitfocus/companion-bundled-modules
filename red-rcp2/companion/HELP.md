## Red RCP2 Camera Control

### Configuration

- Type in the IP address of the Red camera. This should work with all DSMC3 cameras but has only been tested with the RED V-RAPTOR 8K S35

### Available Actions

#### Recording Control
- Start Recording
- Stop Recording
- Toggle Recording

#### Camera Settings
- Set ISO
- Set Record Format (Sensor Crop)
- Set Sensor Frame Rate (Recording Frame Rate)
- Set White Balance
- Set Exposure Adjust (Static)
- Increase Exposure Adjust
- Decrease Exposure Adjust

#### Camera Identification (NEW in v1.1.3)
- Set Camera ID
- Set Reel Number
- Set Camera Position

#### LUT Control (NEW in v1.1.3)
- Toggle LUT on SDI 1
- Toggle LUT on SDI 2
- Enable LUT on SDI 1
- Disable LUT on SDI 1
- Enable LUT on SDI 2
- Disable LUT on SDI 2

#### System Control (NEW in v1.1.3)
- Shutdown Camera

#### Advanced
- Send Generic Command (RCP2 API)

### Available Return Variables

#### Image Settings
- $(NAME:aperture) Iris Aperture
- $(NAME:exposure_adjust) Exposure Adjust
- $(NAME:fps) Sensor Frame Rate
- $(NAME:iso) ISO
- $(NAME:shutter) Shutter
- $(NAME:tint) Tint
- $(NAME:white_balance) White Balance

#### Recording
- $(NAME:record_codec) Recording Codec
- $(NAME:record_duration) Recording Duration
- $(NAME:record_format) Record Format
- $(NAME:recording) Recording State

#### LUT Information
- $(NAME:lut_project) Current Project/Camera LUT
- $(NAME:lut_sdi1) Current LUT on SDI 1 Output
- $(NAME:lut_sdi2) Current LUT on SDI 2 Output
- $(NAME:lut_top_lcd) Top LCD LUT
- $(NAME:lut_sdi1_enabled) SDI 1 LUT enabled (On/Off)
- $(NAME:lut_sdi2_enabled) SDI 2 LUT enabled (On/Off)

#### Output
- $(NAME:sdi_freq) SDI Output Frequency

#### Camera Identification (NEW in v1.1.3)
- $(NAME:camera_id) Camera ID string
- $(NAME:camera_pin) Camera PIN
- $(NAME:camera_position) Camera position letter (A-Z)
- $(NAME:reel_number) Current reel number
- $(NAME:clip_name) Next clip name to be recorded
- $(NAME:total_clips) Total clips on media

#### Media Information (NEW in v1.1.3)
- $(NAME:media_remaining_min) Remaining recording time (minutes)
- $(NAME:media_remaining_time) Remaining recording time (HH:MM:SS)
- $(NAME:media_capacity_min) Total media capacity (minutes)
- $(NAME:media_free_space) Free space on media
- $(NAME:media_used_space) Used space on media

#### Camera Information (NEW in v1.1.3)
- $(NAME:camera_name) Camera name
- $(NAME:camera_type) Camera model type
- $(NAME:serial_number) Camera serial number
- $(NAME:firmware_version) Firmware version

#### Timecode (NEW in v1.1.3)
- $(NAME:timecode) Current timecode
- $(NAME:timecode_display_mode) Timecode display mode
