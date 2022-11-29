## VDO.Ninja

Control [VDO.Ninja](https://vdo.ninja) settings remotely.

### Getting Started

- Ensure you are using VDO.Ninja 22 or above
- Add an API ID as a URL parameter (ex. `&api=xxxxxx`) to your VDO.Ninja URL
- Enter the same API ID in the module settings

### Available Actions

#### General

- Mic Control
- Speaker Control
- Speaker Volume
- Camera Control
- Record Local Video
- Reload
- Hang Up
- Send Chat Message
- Set Bitrate
- Set Panning
- Raise Hand
- Toggle Screen Share

#### Control Rooms

- Room Guest: Mute/Unmute Guest
- Room Guest: Deafen/Un-Deafen Guest
- Room Guest: Mic Volume
- Room Guest: Hang Up
- Room Guest: Transfer
- Room Guest: Add/Remove Group
- Room Guest: Add/Remove Scene
- Room Guest: Mute Guest in Scene
- Room Guest: Blind/Un-Blind Guest
- Room Guest: Highlight Guest

### Available Feedbacks

- Mic Status
- Camera Status
- Speaker Status

### Available Variables

- mic (Current mute status, either by stream ID or guest position)
- camera (Current camera status, either by stream ID or guest position)
- speaker (Available for the "Director" role only)
