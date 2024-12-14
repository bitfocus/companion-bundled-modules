# Allen & Heath CQ mixers

1. Make sure that your mixer has a valid IP adress and is reachable from your current network environment.
2. Put the IP of the mixer in the configuration part of the module.
3. If the connection was successful, you can now use the available actions, feedbacks and variables. 



## Actions

### 1. Mute/Unmute Channels
- **Description**: Mute, unmute, or toggle the mute state of a specific channel.
- **Options**:
  - Channel selection.
  - Mute command: `Mute`, `Unmute`, `Toggle`.
- **Action**: Sends a MIDI message to mute/unmute a channel.

### 2. Pan/Balance [Absolute]
- **Description**: Set the pan/balance of individual channels to a specific target.
- **Options**:
  - Channel selection.
  - Pan target: `LR`, `Out1/2`, `Out3/4`, etc.
  - Pan value.
- **Action**: Sends a MIDI message to set the pan position.

### 3. Pan/Balance [Relative]
- **Description**: Adjust pan/balance incrementally.
- **Options**:
  - Channel selection.
  - Pan target.
  - Direction: `Left`, `Right`.
- **Action**: Sends a MIDI message to adjust pan based on direction.

### 4. Volume Control - Inputs to Outputs/FX [Absolute]
- **Description**: Set an absolute dB value for Inputs or FX channels.
- **Options**:
  - Channel selection.
  - Target: `LR`, `Out1/2`, `FX1`, etc.
  - dB value.
- **Action**: Sends a MIDI message to set volume levels.

### 5. Volume Control - Inputs to Outputs/FX [Relative]
- **Description**: Increment or decrement volume by 1 dB.
- **Options**:
  - Channel selection.
  - Target.
  - Direction: `Increment`, `Decrement`.
- **Action**: Sends a MIDI message for volume adjustment.

### 6. Volume Control - Outputs, FX, DCAs [Absolute]
- **Description**: Set the volume for outputs, FX unit inputs, or DCAs.
- **Options**:
  - Channel selection.
  - dB value.
- **Action**: Sends a MIDI message to adjust volume.

### 7. Volume Control - Outputs, FX, DCAs [Relative]
- **Description**: Adjust output or FX/DCAs volume incrementally.
- **Options**:
  - Channel selection.
  - Direction: `Increment`, `Decrement`.
- **Action**: Sends a MIDI message to adjust volume.

### 8. Scene Change
- **Description**: Load a scene on the SQ mixer.
- **Options**:
  - Scene number (1-100).
- **Action**: Sends a MIDI message to load the selected scene and updates the active scene feedback.

### 9. Soft Key Control
- **Description**: Press or release a soft key on the SQ mixer.
- **Options**:
  - Soft Key selection: `Soft Key 1`, `Soft Key 2`, `Soft Key 3`.
  - Action: `Press`, `Release`.
- **Action**: Sends a MIDI message to simulate a key press or release.


## Feedback

### 1. Mute Status
- **Description**: Monitors if a specific channel is muted.
- **Options**:
  - Channel selection.
- **Feedback**: Returns a boolean indicating the current mute state of the channel.

### 2. Scene Active
- **Description**: Checks if a specific scene is currently active.
- **Options**:
  - Scene number (1-100).
- **Feedback**: Returns a boolean indicating if the specified scene is active.



## Known Issues

1. When the module is sending out "GET" messages for the current mute state of Mute Groups or DCAs, the console always returns 'off' (fix by Allen & Heath needed, not a Companion related issue)
2. Mute toggle is not working for DCAs and Mute Groups (fix by Allen & Heath needed, not a Companion related issue)
3. The console has no function for lettig the Companion module get the currently active scene. Therefore after a scene is loaded from the Companion action, the module just assumes that the scene was loaded successfully (fix by Allen & Heath needed, not a Companion related issue).