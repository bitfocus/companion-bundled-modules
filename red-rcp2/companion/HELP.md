## Red RCP2 Camera Control

### Configuration

- Type in the IP address of the Red camera. This should work with all DSMC3 cameras but has only been tested with the RED V-RAPTOR 8K S35

### Available Actions

 - Set ISO
 - Set Record Format (Sensor Crop)
 - Set Sensor Frame Rate (Recording Frame Rate)
 - Set White Balance
 - Set Exposure Adjust (Static)
 - Increase Exposure Adjust
 - Decrease Exposure Adjust
 - Start Recording
 - Stop Recording
 - Send Generic Command (RCP2 API)

### Available Return Variables

- $(NAME:aperture) Iris Aperture
- $(NAME:exposure_adjust) Exposure Adjust
- $(NAME:fps) Sensor Frame Rate
- $(NAME:iso) ISO
- $(NAME:lut_project) Current Project/Camera LUT
- $(NAME:lut_sdi1) Current LUT on SDI 1 Output
- $(NAME:lut_sdi2) Current LUT on SDI 2 Output
- $(NAME:lut_top_lcd) Top LCD LUT
- $(NAME:record_codec) Recording Codec
- $(NAME:record_duration) Recording Duration
- $(NAME:record_format) Record Format
- $(NAME:recording) Recording State
- $(NAME:sdi_freq) SDI Output Frequency
- $(NAME:shutter) Shutter
- $(NAME:tint) Tint
- $(NAME:white_balance) White Balance