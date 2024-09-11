## Christie Pandoras Box V6

Nativ implementation using Christie Pandoras Box SDK

** Implemented Commands
* Sequence Transport Mode
* Jump to CUE on Sequence
* Jump to NEXT / LAST CUE on Sequence
* ResetAll Active Values
* ClearAll Active Values
* Toggle Fullscreen by SiteID
* Store Active Values to Sequence
* Ignore Next CUE
* Clear Selection
* Save Project
* Apply View
* Set Site IP
* Select Sequence

** Implemented Dynamic Variables
* $(christie-pb:seqid)	Selected Sequence Timecode Timeline
* $(christie-pb:seqstate)	State of the timeline (Running, Stopped, Paused)
* $(christie-pb:seqtime)	Current time of Sequence (hh:mm:ss)
* $(christie-pb:seqtime_h)	Current time of Sequence (hours)
* $(christie-pb:seqtime_m)	Current time of Sequence (minutes)
* $(christie-pb:seqtime_s)	Current time of Sequence (seconds)
* $(christie-pb:seqtime_f)	Current time of Sequence (frames)
* $(christie-pb:nextqid)	Selected Sequence for Remaining Cue Time
* $(christie-pb:nextqtime)	Time until next Cue (hh:mm:ss)
* $(christie-pb:nextqtime_h)	Time until next Cue (hours)
* $(christie-pb:nextqtime_m)	Time until next Cue (minutes)
* $(christie-pb:nextqtime_s)	Time until next Cue (seconds)
* $(christie-pb:nextqtime_f)	Time until next Cue (frames)