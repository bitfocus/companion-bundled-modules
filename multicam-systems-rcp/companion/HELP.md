# Multicam RCP - Companion Module

Control your broadcast cameras, manage tally signals, PTZ presets, and video routing through Multicam RCP.

## Configuration

### Connection Settings

- **Target IP**: The IP address of your Multicam RCP server (default: `127.0.0.1`)
- **Port**: The port of your Multicam RCP server (default: `3000`)
- **Control as User**: Select which user profile to control cameras as. The previewed camera of this user will be the default control target.
- **Auto Reconnect**: Automatically reconnect if the connection is lost
- **Debug Messages**: Enable detailed logging of WebSocket communication

## Features

### Camera Control

- Set camera properties (iris, gain, pedestal, etc.) to absolute values
- Adjust properties relative to current value
- Server-side increment/decrement with configurable step sizes
- Quick access buttons for common adjustments

### PTZ Presets

- Recall stored PTZ presets (1-1000)
- Store new PTZ presets
- Clear PTZ presets

### User-Based Control

- Select which camera a user is previewing
- Camera selection follows the configured user's preview
- Multiple users can preview different cameras simultaneously

### Tally Feedback

- Program tally (red) indication
- Preview tally (green) indication
- Dynamic tally color feedback
- Support for all tally colors (red, green, blue, yellow, purple)

### Video Routing

- Route video sources to destinations on supported routers/switchers
- Integrates with Blackmagic Videohub, ATEM, and other supported devices

## Actions

### Camera Control

- **Set Camera Property**: Set a property to an absolute value
- **Adjust Camera Property (Relative)**: Add/subtract from current value
- **Increase/Decrease Camera Property**: Use server-side step logic

### Quick Controls

- Iris +/-
- Gain +/-
- Pedestal +/-
- Zoom +/-
- Focus +/-
- Saturation +/-
- Contrast +/-
- Sharpness +/-

### Toggles

- Toggle Auto Iris
- Toggle Auto Focus
- Toggle Color Bars

### PTZ

- Recall PTZ Preset
- Store PTZ Preset
- Clear PTZ Preset

### Users

- Select Camera for User Preview
- Clear User Preview

### Routing

- Set Video Route

## Feedbacks

### Tally

- Camera Tally: Program (Red)
- Camera Tally: Preview (Green)
- Camera Tally: Any Active
- Camera Tally: Dynamic Color

### Users

- User Previewing Camera
- Selected User Previewing Camera
- Any User Previewing Camera

### Connection

- Connected to Server

### Properties

- Property Equals Value
- Property Greater Than
- Auto Iris Enabled
- Auto Focus Enabled
- Color Bars Enabled

## Variables

### Global

- `$(multicam-rcp:connected)` - Connection status
- `$(multicam-rcp:camera_count)` - Number of cameras
- `$(multicam-rcp:user_count)` - Number of users
- `$(multicam-rcp:selected_user_name)` - Selected user name
- `$(multicam-rcp:selected_user_preview_camera)` - Camera the selected user is previewing

### Per Camera (replace X with camera index 0, 1, 2...)

- `$(multicam-rcp:camera_X_name)` - Camera name
- `$(multicam-rcp:camera_X_id)` - Camera ID
- `$(multicam-rcp:camera_X_uuid)` - Camera UUID
- `$(multicam-rcp:camera_X_tally)` - Tally state
- `$(multicam-rcp:camera_X_tally_color)` - Tally color
- `$(multicam-rcp:camera_X_{property})` - Any camera property value

### Per User (replace X with user index 0, 1, 2...)

- `$(multicam-rcp:user_X_name)` - User name
- `$(multicam-rcp:user_X_preview_camera)` - Camera the user is previewing

## Presets

The module provides auto-generated presets for quick setup:

### Camera Selectors

- Buttons for each camera with tally feedback
- Click to set as the selected user's preview camera

### Camera Tally Indicators

- Display buttons showing camera name and tally state

### PTZ Presets

- Buttons for presets 1-10 per camera
- Buttons for presets 1-10 following selected camera

### Quick Controls

- Increase/decrease buttons for common properties

### Toggles

- Auto Iris, Auto Focus, Color Bars toggle buttons

### Status

- Connection status indicator
- Camera count display
- Selected user preview display

## Support

For issues and feature requests, please visit:
https://github.com/bitfocus/companion-module-multicam-systems-rcp/issues
