# PresentationTools CueTimer

Controls CueTimer by [PresentationTools](https://presentationtools.com/).

## Configuration

- IP address of the computer running CueTimer for local use 127.0.0.1.
- Port, the default is 31601.

## Available actions:

- Fire the next timer
- Cue next
- Pause
- Restart
- Reset
- Revert
- Blackout
- Add 1 minute
- Subtract 1 minute
- Increase speed by 5%
- Decrease speed by 5%
- Fullscreen
- NDI
- Message
- Single Timer Mode
- Clock
- Move next up
- Move next down
- Fire timer with ID
- Cue timer with ID
- Cue Current
- Initialize List
- Set Duration
- Add X Minutes
- Subtract X Minutes

## Variables:

Variables can be used by putting $(instancename:variablename) e.g. $(cuetimer:hours)

##### Variables names:

- hours
- minutes
- seconds
- name
- speed
- endTime
- nextTimerName
- nextTimerDuration
- scheduleOffset
- scheduleOffsetStatus

## Feedback:

##### Active timer

- Foreground & Backgroun colors

##### Status

- Orange/Black for on/off

- Available status

- Fullscreen
- NDI
- Message
- Single Timer Mode
- Clock
- Pause
- Blackout

##### Timer with ID

- timerDuration
- timerName
- timerBackground

## Presets:

All the Actions, Variables and Feedbacks are available via the Presets tab.
