## Figure 53 Go Button

Controls Go Button by [Figure 53](https://figure53.com).

## Configuration
Setting | Description
-----------------|---------------
**Target IP** | Enter the address of the iOS device running Go Button
**Port** | Enter the port for OSC control of Go Button.<br /> Defaults to 53100
**Use TCP?** | Check to enable TCP mode. This is required for variables and feedback.
**Use Tenths** | If checked, the variable *r_left* will display 0.1 seconds when less than 5 seconds. If unchecked, the time left will be adjusted by 1 second for a more accurate count-down.<br />*This option increases network traffic and may cause unreliable feedback and variables*
**OSC Passcode** | Enter a passcode if enabled on Go Button.

### Available Actions
Action | Description
-----------------|---------------
**Go** | Play or Resume the current cue.
**Oops** | Stop and restart the most recently played cue.
**Stop** | Immediatly stop all cues and hits.
**Panic** | Fade out then stop all cues and hits.
**Reset** | Reset the show. Stops all cues and unselects all cues.
**Next** | Move the selection forward one cue.
**Previous** | Move the selection backward one cue.
**Pause** | Pause all currently running cues and hits.
**Resume** | Resume all paused cues and hits.
**Start** | Start a specific cue.
**Go To** | Move playhead selection to a specific cue.
**FullScreen** | Toggle Full Screen mode.
**Master Volume** | Toggle Master Volume Visible.
**Master Volume Set** | Set the Master Volume.
**Master Volume Up** | Increase Master Volume 6db.
**Master Volume Down** | Decrease Master Volume 6db.
**Master Dim** | Toggle Master Volume Dim.
**Master Mute** | Toggle Master Volume Mute.
**Hit Go** | Play/Resume the specified Hit.
**Hit Pause** | Pause the specified Hit.
**Hit Stop** | Stop the specified Hit.
**Timer Start** | Start/Restart the show timer.
**Timer Stop** | Stop the show timer.
**Timer Reset** | Reset the show timer.

There are presets included for most of these actions.
## Variables available (TCP mode only)
Variable | Description
-----------------|---------------
**$(INSTANCENAME:q_ver)** | Version of Go Button attached
**$(INSTANCENAME:s_name)** | Name of the Go Button Show
**$(INSTANCENAME:g_text)** | Go Button 'Text'
**$(INSTANCENAME:n_id)** | UniqueID of the current Playhead Cue
**$(INSTANCENAME:n_name)** | Name of the current Playhead Cue or [none]
**$(INSTANCENAME:n_num)** | Number of the current Playhead Cue
**$(INSTANCENAME:n_notes)** | First 20 characters of the Note on the Playhead Cue
**$(INSTANCENAME:n_stat)** | Playhead Cue Status: "✕" if broken, "⏽" if loaded, "⏵" if running, "⏸" if paused, otherwise "·"
**$(INSTANCENAME:r_id)** | UniqueID of the current Running Cue
**$(INSTANCENAME:r_name)** | Name of the current Running Cue or [none]
**$(INSTANCENAME:r_num)** | Number of the current Running Cue
**$(INSTANCENAME:r_stat)** | Running Cue Status: "✕" if broken, "⏽" if loaded, "⏵" if running, "⏸" if paused, otherwise "·"
**$(INSTANCENAME:r_hhmmss)** | Remaining time for Running Cue as "HH:MM:SS"
**$(INSTANCENAME:r_hh)** | Hours left for Running Cue
**$(INSTANCENAME:r_mm)** | Minutes left for Running Cue
**$(INSTANCENAME:r_ss)** | Seconds left for Running Cue
**$(INSTANCENAME:r_left)** | Shortest display time left for Running Cue.
**$(INSTANCENAME:q_{num}_name)** | Name of cue number {num}. Hits are numbered 'HIT#' where # is the Hit number.<br />$(INSTANCENAME:q_HIT1_name) will show the name of Hit number 1.

To use these, replace INSTANCENAME with the name of your module instance.

## Feedback available (TCP mode only)
Feedback | Description
-----------------|---------------
**Cue Number Color as Background** | Use the Go Button color for specified cue number as background.<br />Only works for Hit cues. Use HIT# where # is the Hit number for the cue number.
**Color when Full Screen** | Set the button color when Go Button is Full Screen
**Color when Master Fader Visible** | Set the button color when the Master Fader is Visible
**Color when Dimmed** | Set the button color when Master Fader is Dimmed
**Color when Muted** | Set the button color when Master Fader is Muted
