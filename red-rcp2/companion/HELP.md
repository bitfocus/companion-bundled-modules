## Red RCP2 Camera Control

### Configuration

- Type in the IP address of the Red camera. This should work with all DSMC3 cameras but has only been tested with the RED V-RAPTOR 8K S35

### Available Actions

- Set ISO
- Set Record Format (Sensor Crop)
- Set Sensor Frame Rate (Recording Frame Rate)
- Start Recording
- Stop Recording
- Send Generic Command (RCP2 API)

### Available Return Variables

- $(NAME:fps) Sensor Frame Rate
- $(NAME:iso) ISO
- $(NAME:record_format) Record Format
- $(NAME:recording) Recording State
- $(NAME:shutter) Shutter
- $(NAME:white_balance) White Balance
