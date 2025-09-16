## Disguise OSC

This module provides default OSC controls to the d3/disguise server. Setup OSC transport within d3/disguise.

Warning: Full functionality is only available if the disguise is configured to _always send_ osc feedback

**ACTIONS**

**show control**

- Play
- Play to end of section
- Loop section
- Stop
- Previous Section
- Next Section
- Return to start
- Previous track
- Next track
- Track name
- Track ID
- Cue
- Float Cue
- Fade up
- Fade down
- Hold
- Decrease master volume
- Increase master volume
- Toggle shift[^1]
- Shift aware volume[^2]
- Decrease master brightness
- Decrease master brightness
- Shift aware brightness[^2]

[^1]: Toggle shift inverts a boolean variable not available to the user. It provides increased functionality to shift aware actions, presets and feedbacks.

[^2]: If shift is _false_ shift aware volume / brightness decrement the linked value by the user provided step value. If shift is _true_ shift aware volume/brightness increment the linked value by the user provided step value.

**layer control**

- video layer
  - blendmode
  - brightness
  - tint
  - speed
  - mode
  - at end point
  - transition_time
  - volume
  - brightness (shift)
  - contrast (scale)
  - saturation scale

**VARIABLES**

- currentSectionName
- nextSectionName
- heartbeat
- playMode
- current section time elapsed
- current section time remaining
- sectionHint
- timecode position
- timecode position hours
- timecode position minutes
- timecode position seconds
- timecode position frames
- trackid
- track name
- track position
- track position hours
- track position minutes
- track position seconds
- track position frames
- master volume
- master brightness
- bpm

**PRESETS**

- play
- play section
- loop section
- stop
- previous section
- next section
- return to start
- previous track
- next track
- fade up
- fade down
- hold
- shift aware volume[^3]
- decrease master volume
- increase master volume
- shift aware brightness[^3]
- decrease master brightness
- decrease master brightness
- heartbeat / toggle shift[^4]

[^3]: Shift aware volume/brightness presets allow chnages to be made in both directions depending on the value of the shift variable

[^4]: The heartbeat preset includes the toggle shift action. Each time the button is pressed shift will invert.

**FEEDBACKS**

- heartbeat
- playmode
- increase volume[^5]
- decrease volume[^5]
- master volume = 0
- increase brightness[^5]
- decrease brightness[^5]
- master brightness = 0

[^5]: increase (or decrease) volume (or brightness) feedbacks change the png on the button to indicate if the shift variable state is set to allow increase or decrease to volume and brightness

**TASKS**

- [ ] Add presets for information received from Disguise e.g. section name, timecode position
- [ ] Add combined preset for fade down / fade up / hold
- [ ] Ask Disguise if an output message can be added for status of fade down and hold
