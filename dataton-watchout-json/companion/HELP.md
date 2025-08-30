## companion-module-dataton-watchout-json

This module will connect to a Watchout 7 Director. It uses two methods for staying synchronized:

* **Real-time updates**: Playback status (play/pause/stop) is received via Server-Sent Events (SSE) for instant feedback
* **Structure updates**: Timeline information (names, cues, etc.) is polled every 10 seconds to detect show changes

All timeline information including names/cues are being fetched when the module connects, when shows are loaded, and periodically to detect changes.

Presets for timelines are built with feedback and also with variables for text. This means that when changing names of timelines your button will be updated.

Because Watchout 7 works with ID's, it is possible to use the same buttons in different shows, the timeline names will update on your buttons, because the ID's are re-used by Watchout.

### Available actions

**Timeline Control:**

- Timeline action (play/pause/stop/toggle)
- Jump to time (on timeline in milliseconds, select if you want to play directly or pause)
- Jump to cue (on timeline, select if you want to play directly or pause)
- Conditional timeline actions (play timeline if another timeline is in specific state)

**Input Management:**

- Send Input Value (send single value to show variable/input)
- Send Multiple Inputs (send multiple input values at once via JSON)

**Show Management:**

- Show information (manually fetch timeline information)
- Load Show from JSON (load show from JSON data)
- Load Show from File (load show from .watch file path)

**Cue Sets:**

- Set group state by variant (set single cue group variant)
- Set multiple cue groups (set multiple cue group variants at once via JSON)
- Reset all cue groups (reset all cue groups to default variants)

**Node Management:**

- Shutdown node (shutdown a specific Watchout node)
- Restart services (restart services on a specific Watchout node)

### Variables

- Heartbeat (last time the Director was seen)
- Asset manager (on which machine is it running)
- Director (on which machine is it running)
- All available timelines names
- All available snapshot names

### Presets

**Navigation:**

- Jump to Cue
- Jump to Time
- Update timelines

**Timeline Control:**

- Play - Play button for all timelines incl feedback for play
- Pause - Pause button for all timelines incl feedback for pause
- Stop - Stop button for all timelines incl feedback for stop
- Toggle - Toggle button for all timelines incl feedback for play/pause

**Input Management:**

- Send Input - Send single input value to show
- Send Multiple Inputs - Send multiple input values at once

**Show Management:**

- Load Show JSON - Load show from JSON data
- Load Show File - Load show from .watch file

**Cue Sets:**

- Set Cue Group Variant - Set single cue group variant
- Set Multiple Cue Groups - Set multiple cue group variants
- Reset All Cue Groups - Reset all cue groups to defaults

**Media Presets:**

- Toggle snapshot - Toggle button for all snapshots incl feedback for active
- Clear snapshots - deactivate all active snapshots

**Node Management:**

- Shutdown - Shutdown a node incl a 2 sec delay for safety (needs IP address)

> > Be aware this module is tested on Watchout version 7.5.1 Older versions might not work correctly because of newer API
