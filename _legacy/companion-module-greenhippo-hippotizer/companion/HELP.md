## GreenHippo Hippotizer
Module for controlling the Green Hippo Hippotizer, https://www.green-hippo.com/.

**This has only been tested on v4.5.1, if you run an older version I cannot guarantee that it will work** 

It communicates over OSC so before you run it in companion you need to setup OSC on your Hippotizer.

MultiController -> Controllers -> Add New Source -> OSC Input
Remember IP and Port number for later.

Next go to MultiController -> Pin Mappings
Click +Pins and select the preset pins for the mixes/layers you want to control.
(Your Boreal) -> Engine -> Mix(x) -> Layer(x) -> Presets

When that is done add Hippotizer in Companion and setup IP and port in instance.

**Available commands for Hippotizer**

* Cut
* Fade
* Fade through Black
* Fade Up First
* Snap Start
* Snap End
* Send OSC Integer

Last one is for sending generic OSC integer to, for example, trigger a macro.
