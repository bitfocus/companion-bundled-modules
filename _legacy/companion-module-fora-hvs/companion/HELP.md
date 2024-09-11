# For.A Hanabi Video Switcher Companion Module

This module allows for control of a [For.A Hanabi Video Switcher](https://www.for-a.com/products/professional/switcher_p.html) video switcher using the undocumented websocket protocol. The official way to remote control these devices is to use the `BVS-3000/DVS` or `GVG-100` protocols over the serial port.

Because we are using an undocumented protocol, it is possible that a software update from For.A could introduce breaking changes.

## Supported Models

This module has been tested on the following switcher models. If you would like support for a model not in this list, please [open an issue](https://github.com/bitfocus/companion-module-fora-hvs/issues).

- HVS 100/110
- HVS 2000

## Current Features

- All Models
  - Change ME sources
  - Change AUX sources
  - Cut & Auto transitions (ME and MELite)
  - Cut & Auto transitions (KEY, DSK, and FlexKey)
  - Recall/playback macros by id #
  - Reboot the switcher
  - Send the switcher a custom command (**Note**: If you send something the switcher doesnt understand, it may drop the connection.)
  - Variables for _Key On Air_ and _Last Recalled Event_
- HVS 100/110 Only
  - Recall events by id #
- HVS2000 Only
  - Change MELite sources

## Planned / Coming Soon

- Pull source names from the switcher
- Better disconnect detection
- **Feedbacks**
  - Tally (PVW / PGM / Clear)
  - Key status (ON AIR / CLEAR)
