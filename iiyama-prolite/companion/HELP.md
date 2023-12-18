## Iiyama Prolite

Control module for Iiyama Prolite screens.

There are two control protocols across the Iiyama portfolio. This module supports both. If you can't find which one is supported by your screen, try both - the OK light will come on in the Companion instance if it's working.

If the monitor can have a Serial Control ID, make sure it's set to 1. That's the factory default, and it would only have changed if you've previously controlled this screen over serial.

If the screen is in a deep sleep (e.g. after using Power Off action), you can't wake it up with the Power action. Instead, use the Wake On Lan action. You'll need to enable Wake On Lan in the screen configuration. It may take several seconds for the screen to wake up and be ready to accept other commands.
