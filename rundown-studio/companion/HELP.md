## Rundown Studio

Learn more about our [API on our documentation](https://rundownstudio.app/docs/rundown/api/).

### Module Config

You will need to enter your API Token. API tokens can be generated from within the Rundown Studio dashboard in the API Section. Only team admins can generate and regenerate these tokens, however anyone on your team can read and use the token.

You will also need the ID of your particular Rundown that you wish to use in this module. You can retrieve this ID by opening a rundown and looking at the URL of the page. For example: `https://app.rundownstudio.app/rundown/<rundown_id>`

If necessary, there is an Advanced Configuration area of the module which allows you to configure the following:

- API Base URL
- Websocket Base URL
- Websocket Path
- Update Interval

Normal operation does not require modification of these values and they should be left alone unless you have been instructed otherwise.

### Module Actions

The following Actions are available:

- Start rundown
- Pause rundown
- Go to next cue
- Go to previous cue

### Module Feedbacks

The following Feedbacks are available:

- Rundown State (Paused/Running/Ended)
- Visual Progress (used in Presets)

### Module Variables

The following Variables are available:

- Time of Day
- Rundown Name
- Rundown Date
- Rundown Planned Start Time
- Rundown Planned End Time
- Rundown Planned Length
- Rundown Status
- Rundown State
- Current Cue Title
- Current Cue Subtitle
- Current Cue Duration (ms/ss/mmss/hhmmss)
- Current Cue Time Left (ms/ss/mmss/hhmmss)
- Current Cue Time Elapsed (ms/ss/mmss/hhmmss)
- Next Cue Title
- Next Cue Subtitle
- Next Cue Duration (ms/ss/mmss/hhmmss)

### Module Presets

The following Presets are available:

- Transport Controls
- Rundown Info (Name, Date, etc.)
- Current Cue/Next Cue Info
- Visual Progress Dots (last 5 seconds)
