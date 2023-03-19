## Softron OnTheAir Video

Allows you to connect and control OnTheAir Video available from Softron Media Services.
(The API is only available on the full version on OnTheAir Video. from version 4; this does not work with the _Express_ version)

### Supported commands

- Play (with optional clip)
- Play a clip at a given position (timecode or seconds)
- Pause
- Pause a clip at a given position (timecode or seconds)
- Resume
- Stop
- Skip to next clip
- Skip to previous clip
- Goto T-n seconds of the current clip
- Update list of playlists and clips

### Supported feedback

- Playback status
- Active clip
- Active clip, with status
- Time remaining

### Supported button variables

- Playback status
- Active clip index
- Active clip name
- Clip duration
- Clip time elapsed
- Clip time remaining
- For each playlist:
- Playlist name
- Clip names for each clip
- Playlist duration
- Playlist time elapsed
- Playlist time remaining

### Usage

Upon launch, the module will get a list of all open playlists and clips. This list does not update automatically, so in order to refresh this data there is an **Update playlist info** action that will reload variables to the current state.
