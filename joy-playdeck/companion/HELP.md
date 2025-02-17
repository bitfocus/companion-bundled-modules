A generic module for performing simple actions in Playdeck (Video Playout Software)

#### Available commands for Playdeck:

- **Play** - PLAY the selected Clip in the Playlist.
- **Pause** - PAUSE the Playback of the Playlist.
- **Stop** - STOP the Playback of the Playlist.
- **Next** Clip - The Playback jumps to the NEXT available Clip in the Playlist and also skips Block Separators (e.g. Pause, Stop).
- **Previous Clip** - The Playback jumps to the PREVIOUS available Clip BEFORE the current Clip in the Playlist and also skips Block Separators.
- **Restart Clip** - The Playback RESTARTS the current played Clip.
- **Jump** - JUMP to the end of the Clip in the Playlist with a certain amount of SECONDS left (set in Playdeck).
- **Fade In** - FADE IN of the current selected Clip in the Playlist.
- **Fade Out** - FADE OUT the Playback of the Playlist.
- **Mute Audio** - MUTE all Audio output of the Playlist.
- **Unmute Audio** - UNMUTE the Audio output of the Playlist.
- **Activate All** - ACTIVATE all Clips in the Playlist.
- **Stop All Overlays**- HIDE a certain Overlay.
- **Play Overlay** - SHOW one or more Overlays.
- **Stop Overlay** - HIDE a certain Overlay.
- **Play Action** - SHOW a certain Action.
- **Select Block** - SELECT a certain BLOCK (all Clips) in the Playlist.
- **Activate Block** - ACTIVATE a certain Block (all Clips) in the Playlist.
- **Deactivate Block** - DEACTIVATE a certain Block (all Clips) in the Playlist.
- **Select Clip** - SELECT a certain Clip in the Playlist.
- **Activate Clip** - ACTIVATE a certain Clip in the Playlist.
- **Deactivate Clip** - DEACTIVATE a certain Clip in the Playlist.
- **Cue** - CUE a certain Clip in the Playlist.
- **Cue And Play** - CUE AND PLAY a certain Clip in the Playlist.
- **Start Recording** - START a new recording.
- **Stop Recording** - STOP the current recording.
- **Custom command** - sends a custom command (shold be formatted like `<{command}|{playlidID}|{blockID}|{clipID}>`)

#### Available feedbacks (become active after some actions):

- **Current state of playlist** with options:
  - _Playlist_: Left or Rigth
  - _State_: _**STOP**_, _**PAUSE**_, _**PLAY**_, _**CUE**_
  - _Block ID_: 0 for any
  - _Clip ID_: 0 for any

#### Available variables (_null_ if no feedbacks):

- `playlist_{n}_state` - State of **_n_** (1 for Left, 2 for Right) playlist
- `playlist_{n}_block` - Current block of **_n_** playlist
- `playlist_{n}_clip` - Current clip of **_n_** playlist (number in block)
