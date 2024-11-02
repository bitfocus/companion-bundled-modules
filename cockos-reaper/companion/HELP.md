## Cockos Reaper

This module connects to the Cockos Reaper software.

### Configuration

- In Companion's Reaper module settings:

  - Type in the IP address of the computer running Reaper.
  - Under **Target port**, type in the port that Reaper is listening for OSC messages on.
  - Under **Feedback port**, type in the port that Reaper is sending OSC messages to.

- In Reaper's preferences:
  - Go to **Control/OSC/web**:
  - Add a device
  - Set the **Control surface mode** to **OSC**
  - Set **Mode** to **Configure device IP+local port**
  - Set **Device IP** to companion's IP address.
  - Set **Device port** to the **Feedback port**.
  - Set **Local listen port** to the **Target port**.

### Available actions

- Record
- Play
- Stop
- Pause
- Autoarm Record
- Reset Solos
- Rewind (Start)
- Rewind (Stop)
- Forward (Start)
- Forward (Stop)
- Click/Metronome
- Go To Marker
- Go To Region
- Track Mute
- Track Solo
- Track Arm
- Track Unmute
- Track Unsolo
- Track Unarm
- Track Mute (toggle)
- Track Solo (toggle)
- Track Arm (toggle)
- Track Select
- Track Deselect
- Track Monitoring Enable
- Track Monitoring Disable
- Track FX Bypass
- Track FX Open UI
- Track FX Unbypass
- Track FX Close UI
- Custom Action

### Available feedbacks

Feedbacks are available to reflect the state of the following actions:

- Play
- Stop
- Record
- Rewind
- Forward
- Repeat
- Click/Metronome
- Track Mute
- Track Solo
- Track Arm
- Track Monitoring
- Track Selected
- Track FX Active
- Track FX UI Open
- Custom feedback based on an OSC message and its value

### Available presets

All presets include feedback for their respective actions.

- Play
- Stop
- Record
- Rewind (Start and Stop combined)
- Forward (Start and Stop combined)
- Repeat
- Click/Metronome
