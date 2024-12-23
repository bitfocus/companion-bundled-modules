## VDO.Ninja

Control [VDO.Ninja](https://vdo.ninja) settings remotely.

### Getting Started

- Think of an API ID to use for your production. It should be unique and difficult to guess
- Add your API ID as a URL parameter (ex. `&api=your-unique-api-key`) to your VDO.Ninja URL
- Add the same API ID in the Companion module settings

### Available Actions

#### Local

- Mic Control
- Camera Control
- Speaker Control
- Playback Volume
- Send Chat Message
- Record Video
- Reload
- Hang Up
- Set Video Bitrate
- Set Audio Pan
- Raise Hand
- Screen Share
- Force Keyframe
- Next Slide
- Previous Slide

#### Director

##### Targets self

- Self in Group
- Join Group
- Leave Group
- View Group
- Join View Group
- Leave View Group
- Highlight Video Control

##### Targets a room guest

- Guest Mic
- Guest Speaker
- Set Guest Mic Volume
- Overlay Message to Guest
- Transfer Guest
- Guest in Scene
- Guest Mic in Scene
- Guest in Group
- Guest Blind
- Guest Highlight
- Solo Talk
- Two-way Solo Talk
- Force Keyframe
- Hang Up Guest

### Available Feedbacks

- Mic Status
- Camera Status
- Speaker Status
- Guest in Scene

### Available Variables

- mic (Current mute status, either by stream ID or guest position)
- camera (Current camera status, either by stream ID or guest position)
- speaker (Available for the "Director" role only)
- label (If specified, otherwise it will be the guest position number)
- scenes (List of scenes a guest is currently active in)
