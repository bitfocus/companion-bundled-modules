# Help for the DiGiCo module

** Folowing commands are supported:

* Mute channel
* Solo channel
* Phantom Channel
* Set fader of channel
* Fire Snapshot number (0-9999)
* Fire Next Snapshot
* Fire Previous Snapshot
* Fire Macro (1-256)

** Folowing feedbacks are supported:

* Macro feedback

**All features are fully supported using either the OSC commandset or Ipad commandset. Please make sure that
you are using the same commandset that is enabled on your console or certian features may not work as expected.

** Note on feedbacks, Companion needs to be added to the DiGiCo console
external control setup with appropriate receive and target ports under Type as a DiGiCo Pad, not as as a OSC device, to get
bi-directional feedback. Only one device with bi-directional control can be enabled at a time. Multiple devices can communicate
to the console as just a Type OSC device, without feedback. Macro feedback status are automatically sent back by the console when a macro is triggered,
 but you can also enable polling for instances where companion may be started after the console, the console may be rebooted, etc.

Would you like some more commands or have ideas? Just ask on Github.
