## AV Stumpfl Pixera JSON Api Rev264

Nativ implementation using Pixera JSON/TCP Api

** Implemented Commands
* Timeline Transport Mode
* Timeline NextCue
* Timeline PerviusCue
* Timeline IgnoreNextCue
* Timeline Store
* Visible Screen On/Off
* Screen is Projectable On/Off
* Screen Trigger Mapping		
* Goto Timecode
* Goto Cue by Name
* Goto Cue by Index
* Blend to Timecode
* Blend to Cue by Name
* Blend to Next Cue
* Blend to Prev Cue
* Timeline Opacity				
* Timeline SMPTE Mode				
* Timeline Fade Opacity			(StartOpacityAnimation)
* Layer Reset
* Layer Mute/VolumeMute
* Layer Paramter
* Control Action
* API (e.g. {"jsonrpc":"2.0", "id":9, "method":"Pixera.Compound.startFirstTimeline"})

** Implemented Feedback
* Button Color Timeline State
* Button Text Timeline Timecode
* Button Text Timeline Remain

** Response
* API Commands returns Handles if available