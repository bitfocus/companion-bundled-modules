Module for JOY Event & Media's Playdeck player. Now it support all versions up to 3.8b13.
You can choose appropriate version. The module automatically adjusts the set of commands in accordance with your chosen version.

**Available commands (for Playdeck 3.8b13) (version dependent):**

**CONTROL**: CROSSFADE, CUE, CUE and PLAY, CUE and PLAY (Sync), CUE FLEX, CUE FLEX and PLAY, CUE FLEX and PLAY (Sync), CUE NEXT, CUE NEXT and PLAY, CUE NEXT BLOCK, CUE NEXT BLOCK and PLAY, FADE IN, FADE OUT, JUMP to end, JUMP to start, PAUSE, PLAY, PLAY previous, RESTART, STOP;

**EDITING**: ACTIVATE all clips, ACTIVATE clip/block, APPEND clip, CHANGE clip, De-ACTIVATE clip/block, DELETE block, DELETE clip, DESELECT, INSERT clip, LOAD Playlist, SELECT block, SELECT clip;

**AUDIO**: MUTE, Un-MUTE;

**OVERLAY**: PLAY, STOP, STOP ALL, TOGGLE;

**SCRIPTS**: RESTART;

**ACTIONS**: PLAY, PLAY (Sync);

**DESKTOP**: TOGGLE;

**NOTES**: HIDE;

**STREAM**: START, STOP;

**RECORDING**: START, STOP;

**Custom command** - sends a custom command (shold be formatted like `<{command}|{playlidID}|{blockID}|{clipID}>`)

**Available feedbacks (become active after some actions):**

- **Current state of playlist** with options:
  - _Playlist_: Left or Rigth
  - _State_: _**STOP**_, _**PAUSE**_, _**PLAY**_, _**CUE**_
  - _Block ID/Name_: 0 for any
  - _Clip ID/Name_: 0 for any

**Available variables (for Playdeck 3.8b13) (_null_ if no feedbacks):**

- `general_active_channels` - Number of active channels
- `general_playlist_file` - Current playlist file
- `general_production_mode` Production Mode state
- `general_recording` Recording state
- `general_recording_duration` Recording duration in seconds
- `playlist_{n}_block_id` Current block of **_n_** playlist
- `playlist_{n}_block_name` Current block name of **_n_** playlist
- `playlist_{n}_block_time_end` Time when block of **_n_** playlist ends
- `playlist_{n}_clip_duration` Current clip duration in seconds in **_n_** playlist
- `playlist_{n}_clip_id` Current clip in **_n_** playlist
- `playlist_{n}_clip_name` Current clip name in **_n_** playlist
- `playlist_{n}_clip_position` Current clip elapsed time in seconds in **_n_** playlist
- `playlist_{n}_clip_progress` Current clip progress in percents in **_n_** playlist
- `playlist_{n}_clip_remaining` Current clip remaining time in seconds in **_n_** playlist
- `playlist_{n}_clip_time_end` Time when current clip in **_n_** playlist ends
- `playlist_{n}_clip_type` Current clip type in **_n_** playlist
- `playlist_{n}_state` State of **_n_** playlist
