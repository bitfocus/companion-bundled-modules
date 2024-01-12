## Luminex LumiNode / LumiCore

Control your LumiNode or LumiCore devices

This should work with all models of LumiNode or LumiCore.

Firmware version 2.5.0 and later should work. Some actions or feedbacks may not work with earlier versions.

The devices have to be reachable over the Bitfocus Companion network.

### Configuration

- Type in the IP address of the device. Any IP on which the LumiNode Web interface can be reached, should work.
- If authentication is enabled on the device, provide the password.

### Actions implemented

General actions:

- Identify the device
- Reboot
- Reset
- Recall a profile
- Turn the LCD display on or off

DMX / RDM:

- Acknowledge DMX stream loss indications, either per port or on all ports
- Trigger RDM discovery, either per port or on all ports

Play:

- Play Control: `go`, `forward`, `back` and `reset`
- Play a specific snapshot

### Feedbacks implemented

- Playing Cue: Red background color when the `snapshot_id` is the current snapshot
- Next Cue: Orange background color when the `snapshot_id` is the next snapshot

### Presets implemented

General presets:

- Active profile name. Identify device when triggered
- Reboot
- Reset

Play:

- Play Reset. Reset players to first cue.
- Play Back. Move next cue back.
- Play Forward. Move next cue forward.
- Play Go. Play next cue.
- Play Snapshot. Play a specific snapshot. Button will become RED if snapshot is playing, orange when staged as the next cue.

Profiles:

- For each profile slot: button to recall the profile

### Variables implemented

| Id                    | Name                      |
| --------------------- | ------------------------- |
| `short_name`          | Short Name                |
| `long_name`           | Long Name                 |
| `nr_dmx_ports`        | Number of DMX ports       |
| `nr_processblocks`    | Number of Process Engines |
| `serial`              | Serial Number             |
| `mac_address`         | MAC address               |
| `device_type`         | Device Model              |
| `current_snapshot`    | Current Snapshot          |
| `next_snapshot`       | Next Snapshot             |
| `active_profile_name` | Active Profile Name       |
| `profile_${id}_name`  | Profile `${id}` Name      |
