## Available commands

* Run Script/Command
* Play
* Pause
* Stop
* Go to Cue
* Fade to Cue
* Go to Next Cue
* Go to Previous Cue
* Poll
* Update Polling Target
* Start Polling Timer
* Stop Polling Timer

Use the "Start Polling Timer" command to set the polling target and start polling. Once polling, you can use these variables to display the results:

| Variable                                    | Description                               |
|---------------------------------------------|-------------------------------------------|
| $(Vertex:Playback_CueTime)                  | CueTime of selected Playback              |
| $(Vertex:Playback_CurrentOrLastCue)         | CurrentOrLastCue of selected Playback     |
| $(Vertex:Playback_NextCue)                  | NextCue of selected Playback              |
| $(Vertex:Playback_RemainingCueTime)         | RemainingCueTime of selected Playback     |
| $(Vertex:Playback_RemainingTimeCode)&nbsp;  | RemainingTimeCode of selected Playback    |
| $(Vertex:Playback_TimeCode)                 | TimeCode of selected Playback             |
| $(Vertex:polling_target)                    | Current polling target                    |
