# Tech Ministry Spotify Controller

This module allows you to control and view the status of Spotify running on a Mac or Windows computer.

Requires the free [spotify-controller](http://github.com/josephdadams/spotify-controller) app.

## Important Notes

- **Mac support (full control):**  
  Supports full playback control, seeking, volume, shuffle, repeat, etc.

- **Windows support (limited control):**  
  The module uses Spotify deep links on Windows to open the app and start specific tracks or albums.  
  Some features like pause, next/previous, seek, and volume control are not available on Windows.

## Configuration

- Enter the IP address of the computer running `spotify-controller`.
- Default port: **8801**.

## Available Actions

| Action                      | Mac | Windows |
| --------------------------- | :-: | :-----: |
| Play/Pause/Toggle           | ✅  |   ❌    |
| Play Track by ID            | ✅  |   ✅    |
| Play Track by ID in Context | ✅  |   ✅    |
| Next/Previous               | ✅  |   ❌    |
| Set Player Position (Seek)  | ✅  |   ❌    |
| Volume Up/Down/Set/Ramp     | ✅  |   ❌    |
| Mute/Unmute                 | ✅  |   ❌    |
| Repeat On/Off/Toggle        | ✅  |   ❌    |
| Shuffle On/Off/Toggle       | ✅  |   ❌    |

## Available Variables

_(All available on Mac; limited on Windows)_

- **Information/Status**
- **Version**
- **Current Song Name**
- **Current Album**
- **Current Artist**
- **Current Track Duration**
- **Current Track Playback Position**
- **Track ID**
- **Player State**
- **Current Volume Level**

## Available Feedbacks

- Change button color if playback is in **X** state (Playing, Paused, Stopped) _(Mac only)_

## Available Presets

- Play/Pause (with icons)
- Volume Up/Down/50%/100%
- Volume Level on Button _(Mac only)_
- Current Track Name on Button
