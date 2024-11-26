## Neutrik DPRO Remote Control Protocol

Please visit https://discourse.checkcheckonetwo.com for help, discussions, suggestions, etc.

_Andrew Broughton, Oct 2024_

---

**Instructions**

Note that this module only works to connected hardware. This module allows control of NA2-IO-DPRO microphone inputs (Gain, P48, HPF).

**MACROS** ("Learn" Function)

> _Macro Preset is not available in this version, so please download the Macro Button page from https://discourse.checkcheckonetwo.com/t/macro-page-for-yamaha-rcp-and-midi-module_

> Macros utilize the new Action Recorder feature in v3, and will only work while connected to a Nexus.

> Using one of the buttons you imported from the link above, press and hold the **REC Macro** button for 3 seconds to reset it. It will turn green and show **Ready to Record**. Press and hold it again to start recording. When it shows **REC Step: 0**, start doing stuff on the Nexus. The Steps will increase as you add operations. Press it again to stop recording. All the actions you performed are now stored to that button. The button's name will change to **New Macro**. To reset the button and start again, simply press and hold the button for 3 seconds again until it turns green.

> Don't forget that you can create a macro by pressing a SD button (while recording) that already has actions on it while a Nexus is connected.The new Macro will have those commands in it as well as any you added before you pressed the button or after!

**VARIABLES**

> Select "Auto-Create Variable" to create a variable in the form **CommandName_Ch#**

> Use **@(internal:custom_MyCustomVar)** in the value field to update a custom variable within a feedback. Custom variable must already exist
