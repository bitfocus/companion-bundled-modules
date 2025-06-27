## Sony SRG-A12 Camera Control

This module allows you to control Sony SRG-A12 PTZ cameras using the VISCA over IP protocol.

### Initial Setup

1. **Configure Your Camera**
   - Ensure your Sony SRG-A12 camera is connected to your network
   - Enable VISCA over IP in the camera settings
   - Note the camera's IP address

2. **Module Configuration**
   - Enter the camera's IP address in the "Camera IP Address" field
   - The VISCA port is typically 52381 (default)
   - Set your preferred default speeds for pan/tilt and zoom operations

### Available Actions

#### Power Controls
- **Power On**: Turn the camera on
- **Power Off**: Turn the camera off

#### Pan/Tilt Movement
- **Pan Left/Right**: Move camera horizontally with adjustable speed (1-24)
- **Tilt Up/Down**: Move camera vertically with adjustable speed (1-24)
- **Pan/Tilt Stop**: Stop all pan/tilt movement
- **Pan/Tilt Home**: Return camera to home position

#### Zoom Controls
- **Zoom Tele (In)**: Zoom in with adjustable speed (1-7)
- **Zoom Wide (Out)**: Zoom out with adjustable speed (1-7)
- **Zoom Stop**: Stop zoom movement

#### Focus Controls
- **Focus Near/Far**: Manual focus control with adjustable speed (1-7)
- **Focus Stop**: Stop focus movement
- **Focus Auto**: Enable automatic focus
- **Focus Manual**: Switch to manual focus mode
- **One Push Auto Focus**: Trigger single auto-focus operation

#### Preset Positions
- **Recall Preset**: Move to saved preset position (1-100)
- **Save Preset**: Save current camera position as preset (1-100)

#### Image Settings
- **White Balance**: Auto, Indoor, Outdoor, or One-Push modes
- **Exposure**: Auto or Manual exposure control

#### Recording
- **Start/Stop Recording**: Control camera recording functions

### Feedback Options
- **Connection Status**: Shows if camera is connected (green when connected)
- **Recording Status**: Indicates recording state (red when recording)
- **Power Status**: Shows camera power state
- **Focus Mode**: Indicates if auto focus is active

### Variables
The module provides these variables for use in other actions:
- `$(sony-srga12:connection_status)` - Connection state
- `$(sony-srga12:camera_ip)` - Camera IP address
- `$(sony-srga12:power_status)` - Power state
- `$(sony-srga12:recording_status)` - Recording state
- `$(sony-srga12:focus_mode)` - Current focus mode

### Troubleshooting

**Camera Not Responding:**
- Verify network connectivity between Companion and camera
- Check that VISCA over IP is enabled on the camera
- Confirm the IP address and port are correct
- Ensure no firewall is blocking UDP port 52381

**Slow Response:**
- Network latency can affect response time
- Consider adjusting movement speeds if commands seem delayed

**Commands Not Working:**
- Some cameras may have different VISCA command implementations
- Power cycle the camera if it becomes unresponsive
- Check camera firmware version for compatibility
