## Softron M|Replay

Allows you to control [M|Replay](https://softron.tv/products/mreplay) from Softron Media Services.

### Configuration

- In the M|Replay app > Preferences > General > HTTP Remote Control, enable remote control
- By default, M|Replay uses port 8090. You can change this if needed, just remember to edit the port in the module settings to match
- If you enable a password in M|Replay, you must provide a password in the module settings

### Available Actions

**Output Control:**

- Select Output
- Assign Input to Output

**Playback Control:**

- Set Playback Rate (supports -32x to 32x, including fractional speeds)
- Go to Position (supports live, playhead, absolute, in point, out point references)

**Markers & Clips:**

- Create Marker (at live, playhead, or absolute time)
- Create Clip (flexible in/out point and duration options)

**Playlist Control:**

- Play Playlist
- Pause Playlist
- Stop Playlist
- Skip Next/Previous
- Play/Pause Specific Clip in Playlist

### Available Feedbacks

- Input Routed to Output - Change style when a specific input is routed to a specific output
- Output Selected - Change style when an output is selected
- Output Enabled - Change style when an output is enabled
- Input Enabled - Change style when an input is enabled
- Playback Playing - Change style when playback is active (rate > 0)
- Playback Paused - Change style when playback is paused (rate = 0)
- Playback Reverse - Change style when playing in reverse (rate < 0)
- Loop Recording Active - Change style when loop recording is enabled

### Available Variables

**Status Variables:**

- playback_rate - Current playback rate
- remaining_time / remaining_timecode - Time remaining in session
- current_time / current_timecode - Current position
- playhead_time / playhead_timecode - Playhead position
- delay_time / delay_timecode - Delay time
- drop_frame - Drop frame enabled
- loop_recording - Loop recording enabled
- framerate - Current frame rate
- remaining_space - Remaining disk space

**Configuration Variables:**

- selected_output_name - Name of currently selected output
- selected_output_input_name - Name of input feeding selected output
- input_count - Total number of inputs
- output_count - Total number of outputs
- marker_count - Total number of markers
- playlist_count - Total number of playlists
- clip_count - Total number of clips

**Application Info Variables:**

- application_version - M|Replay version
- application_build_number - Build number
- computer_name - Computer name running M|Replay
- application_in_demo - Demo mode status

### Available Presets

**Playback Control:**

- Forward speeds: 32x, 16x, 8x, 4x, 2x, 1x, 75%, 66%, 50%, 33%, 25%
- Reverse speeds: All forward speeds in reverse
- Pause (with feedback)

**Navigation:**

- Go to Live
- Jump back/forward (10s, 30s, 1m, 5m) from playhead
- Jump back (10s, 30s, 1m, 5m) from live

**Markers:**

- Generic: MARK LIVE, MARK PLAY
- Sports: Goal, Penalty, Foul, Red Card, Yellow Card, Reacts, Crowd

**Clips:**

- Generic clips: 5s, 10s, 15s, 20s, 30s, 1m
- Sports clips: Each sports event type (Goal, Penalty, Foul, Red Card, Yellow Card, Reacts, Crowd) in all duration options

**Output Selection:**

- Dynamic presets for each output with selection feedback

**Playlist Control:**

- Dynamic presets for Play, Pause, Stop, Skip Next/Previous for each playlist
