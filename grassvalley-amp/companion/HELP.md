## AMP

This module connects to devices that support the AMP protocol.

### Configuration

- Type in the device IP address.
- The device will communicate over port 3811.
- You can specify the AMP channel.

### Available actions

- Play
- Loop playback (On/Off)
- Stop
- Eject
- Record
- Shuttle Reverse
- Shuttle Forward
- Load clip
- Record clip - This creates and loads a clip for recording. To start the recording, enter the record command after sending this command. **WARNING** This command _will overwrite any clip already named what is specified currently in the bin_ - there is not any error checking before running it by the device.

### Feedbacks

#### Transport feedbacks and variables

- Playing
- Stopped
- Fast forward
- Rewind
- Recording
