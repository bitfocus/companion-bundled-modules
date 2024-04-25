## companion-module-dataton-watchout-json

This module will connect to a Watchout 7 Director. Behind the scenes each second the playback status of all timelines is being fetched and used for feedback.

All timeline information including names/cues are being fetched each 5 seconds. 

Presets for timelines are build with feedback and also with variables for text. This means that when changing names of timelines your button will be updated.

Because Watchout 7 works with ID's, it is possible to use the same buttons in different shows, the timeline names will update on your buttons, because the ID's are re-used by Watchout.

### Avaiable actions
* Timeline action (play/pause/stop)
* Jump to time (on timeline in miliseconds, select if you want to play direcly or pause)
* Jump to cue (on timeline, select if you want to play direcly or pause)
* Show information (it will manualy fetch timeline information, it will be done each 5 seconds also)

### Variables
* Heartbeat (last time the Director was seen)
* Asset manager (on which machine is it running)
* Director (on which machine is it running)
* All available timelines names

### Presets
* Basic - Jump to Cue
* Basic - Jump to Time
* Basic - Update timelines
* Play - Play button for all timelines incl feedback for play/pause
* Pause - Pause button for all timelines incl feedback for play/pause
* Stop - Stop button for all timelines incl feedback for play/pause

