## ByteHive PlayoutBee

Companion module to control ByteHive's PlayoutBee media player. Currently supports featurs up to PlayoutBee 0.9.3.

### Configuration

The module provides the ability to configure thae following options:

1. **PlayoutBee IP** - The IP Address if the device running PlayoutBee
2. **PlayoutBee REST Port** - The TCP port number on which PlayoutBee listens for RESTful API commands (at the moment, PlayoutBee only uses port 3000)
3. **Polling Interval in Milliseconds** - The number of milliseconds the module waits between API calls to Playout Bee (defaults to 100ms, but you can increase up to 1000ms)

### Actions

The actions available in this module mimic those available in the [PlayoutBee REST API](https://docs.playoutbee.com/api).

1. **Play** - Play the current clip
2. **Pause** - Pause the current clip
3. **Stop** - Stop the current clip
4. **Next** - Select the next clip (_NOTE: if the last clip is already selected it wraps and selects the first clip_)
5. **Select Clip** - Select a specific clip from a dropdown list
6. **Set Loop** - Turn on, turn off or toggle the clip loop feature

### Feedbacks

The module provides the ability to set button feedback based on the following conditions:

1. **Current Clip** - Select the clip you want to provide feedback for
2. **Player Status** - Feedback depends on whether PlayoutBee is _playing_, _stopped_ or _paused_.
3. **Loop Status** - Feedback depends on whether the Loop clip setting isn _on_ or _off_.

### Variables

The following variables are vailable for use:

1. `clip_id` - The number of the currently selected clip
2. `clip_name` - The file name of the currently selected clip
3. `status` - The player status
4. `loop` - The player loop setting status
5. `timecode` - The timecode of the current clip
6. `timecode_hh` - The _hours_ part of `timecode`
7. `timecode_mm` - The _minutes_ part of `timecode`
8. `timecode_ss` - The _seconds_ part of `timecode`
9. `timecode_ff` - The _frames_ part of `timecode`
10. `remaining_timecode` - The time remaining of the current clip
11. `remaining_hh` - The _hours_ part of `remaining_timecode`
12. `remaining_mm` - The _minutes_ part of `remaining_timecode`
13. `remaining_ss` - The _seconds_ part of `remaining_timecode`
14. `remaining_ff` - The _fraction_ part of `remaining_timecode` (_NOTE: This is fraction and not frames because PlayoutBee doesn't report remaining frames_)
