## Blackmagic Design Hyperdeck

Allows you to connect and control any model of Hyperdeck available from Blackmagic Design.

**Connecting**
Older models of Hyperdeck (pre 2023) can **only be connected to one controller at a time.** This includes ATEM switchers or other instances of Companion. If you're having trouble connecting, make sure all other controllers are disconnected.

**Supported commands**

- Play (options for speed %, single clip, and loop)
- Record
- Record (with name)
- Record (with name and current date/time)
- Record (with custom reel)
- Stop
- Goto (timecode)
- Goto Clip (n)
- Goto Clip (name)
- Go Fwd (n) clips
- Go Back (n) clips
- Goto Start/End of clip
- Jog forward (timecode) duration
- Jog backward (timecode) duration
- Shuttle (with speed)
- Select (slot)
- Set preview/output mode
- Select video input
- Select audio input
- Select file format
- Format Prepare
- Format Confirm
- Remote Control (enable/disable)

**Supported feedback**

- Transport Status
- Active Clip
- Active Slot
- Slot/Disk Status
- Loop Playback Status
- Single Clip Playback Status
- Video Input
- Audio Input
- Format Prepared

**Supported button variables**

- Transport Status
- Speed
- Clip ID
- Slot ID
- Video Format
- Recording time available
- Clip count
- Timecode
- File Format
