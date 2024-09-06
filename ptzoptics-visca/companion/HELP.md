# companion-module-ptzoptics-visca

This module can be used to control PTZOptics cameras using the PTZOptics flavor of the Sony VISCA protocol communicating over TCP.

It _may_ work with other manufacturers' cameras, but it isn't guaranteed to do so. (We attempt to maintain support for other cameras as long as it doesn't interfere with supporting PTZOptics cameras.) If you find that some commands work with your camera but others don't, you may be able to replace the nonfunctional commands with a "Custom command" that sends the byte sequence your camera requires.

## Commands

- Custom Command
  Custom commands allow you to send any valid VISCA byte sequence to the camera. The camera must respond with an `ACK` message followed at some later time (either immediately or after a delay) by a `Completion` message: that is,`90 4y FF` and `90 5y FF` where the nibble indicated by `y` is consistent in both replies. Specify the VISCA bytes using this format, beginning with `81` and ending with `FF` and with one or more non-`FF` bytes between: `81 01 02 03 04 FF`
