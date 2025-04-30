## Generic MIDI module for Companion - v1.3.2

Please visit https://discourse.checkcheckonetwo.com for help, discussions, suggestions, etc.

_Andrew Broughton 2025_

---

### This module supports the following MIDI message types:

- Note On
- Note Off
- Control Change (CC)
- Program Change (PC)
- Aftertouch
- Pitch Wheel
- Channel Pressure
- Sysex
- MIDI Time Code (receive only)

### Features:

- MacOS, Windows, Linux Support
- MIDI over LAN via rtpMIDI (Network-MIDI on MacOS)
- Using incoming Midi Timestamp with Action Recorder

### To Do:

- Long Sysex message support
- Filtering of Real-Time messages
- MSC support?
- Virtual Ports under Windows?

Thanks to _Julian Waller_ for rewriting node-midi to TS and creating a companion TS template!
