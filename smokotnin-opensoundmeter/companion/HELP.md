## Open Sound Meter

This module is intended to be used with Open Sound Meter, a donation supported sound level metering application by Pavel Smokotnin (https://www.facebook.com/psmokotnin). 

https://opensoundmeter.com/

Using the OSM API, the module receives sound level information over a network and saves this in Companion variables.

## Usage

1. Install the Open Sound Meter application on your computer (only Windows has been tested so far).
2. On starting the application, select the WiFi symbol in the bottom right corner.
3. Enable the remote control API server (see page 54 of the manual at https://opensoundmeter.com/en/support for details).

## Limitations

1. Open Sound Meter API data is multicast at 239.255.42.42:49007 - you'll need your local network to support multicast to receive this data.
2. The module does not support multiple sources within Open Sound Control.
3. The module does not support multiple instances of Open Sound Meter on the same network.
4. I've only tested this on Windows - I don't know if it works on other platforms. Let me know if you try it!
5. The module does not support the full range of Open Sound Meter's API - only the level data is available.
6. I've not added any time-based averaging to the level data yet.

## Credits

This module was developed by Nick Roberts (https://github.com/phuvf). I'm not affiliated with Open Sound Meter - I just need to make a clapometer for a show, and this seemed like the easiest way to do it.

Open Sound Meter is free to use, but donation supported.

Please consider supporting the developer at https://opensoundmeter.com/en/about#donate.
