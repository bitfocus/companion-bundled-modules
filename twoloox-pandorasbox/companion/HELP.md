Help File for companion-module-twoloox-pandorasbox
Companion module for controlling twoloox Pandoras Box media servers via the PandorasAutomation (PBAU) TCP protocol.

Configuration
After adding the module in Companion:

Host: IP address of Pandoras Box server (e.g., 192.168.1.100)
Port: Default 6211
Domain: Default 0
The module will automatically:

Discover all sequences
Create dynamic presets
Start timecode polling for playing sequences
Architecture
Multi-Connection Design
Main TCP Connection: Sequence discovery, status polling (5x/sec), commands
Per-Sequence Connections: Independent timecode polling (30x/sec when playing, 5x/sec when stopped)
Protocol Details
PBAU Header: Mixed endianness (BE headers, LE sequence IDs)
Commands Implemented: 15+ (Transport, Cue, Programming, Project, SMPTE)
Polling: Adaptive rate based on sequence state

Known Limitations
No feedback implementation yet (status display only via variables)
Cue discovery not implemented (manual cue ID entry required)
SMPTE mode cannot be read back (write-only command)

Features
✅ Sequence Control
Play/Pause/Stop sequences
Goto Cue, Next/Last Cue
Ignore Next Cue
SMPTE Timecode Mode (None/Send/Receive)
Real-time timecode display (30fps)
Sequence selection for editing

✅ Programming
Store Active to Sequence
Store Active to Container Beginning
Clear All Active
Reset All

✅ Project Management
Save Project
Toggle Site Fullscreen
Set Site IP Address
Apply GUI View


✅ Dynamic Features
Automatic sequence discovery
Per-sequence timecode polling (30x/sec when playing)
26+ dynamic presets (4 per sequence)
Real-time status variables

Tested Versions
Companion: v4.2
Pandoras Box: v8.11.3

Support
For issues and feature requests, contact twoloox GmbH
