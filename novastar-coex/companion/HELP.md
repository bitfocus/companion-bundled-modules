## companion-module-novastar-coex

This module is based on [novastar-coex](https://github.com/atomicinfotech/novastar-coex), so a lot of the notes and documentation are applicable to this project.

# Currently Supported Actions

- Change Input Source
- Brightness
- Display Mode
- Blackout
- Normal
- Freeze
- Gamma
- Color Temperature
- Preset
- Working Mode
- Test Pattern


# Compatibility

This module has been tested extensively with the MX40 Pro processor, but it should work with all NovaStar COEX/VMP devices (MX40 Pro, KU20, CX80 Pro).

# Known Issues

1. Input selection currently only works when processor is in "Send Only" working mode.  Input selection on layers when in All in One mode is not yet supported.  As soon as the API supports it, and we get documentation, it will be implemented.

2. Setting working mode to 3 (All-In-One) doesn't work.

3. If you are running COEX VMP software, the processor will be locked to only recieve API commands from that device/ip.  Attempting to run API commands from any other device/IP will return a "device locked" error.  Current workaround is to close VMP, or run the commands from the same computer that is running the VMP software client.



Submit issues on [Github](https://github.com/bitfocus/companion-module-novastar-coex/issues)
