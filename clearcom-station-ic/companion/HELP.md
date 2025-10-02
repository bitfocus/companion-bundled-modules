## Clear-Com Station-IC Module

#### A Companion Module for Clear-Com's Station-IC virtual client for Windows and MacOS computers (Station-IC version 1.6 and higher)

#### v1.0.3

Station-IC connects to capable Eclipse-HX, LQ, or Gen-IC intercom systems. This Companion Module provides ability to operate Station-IC keysets, favourite keys, reply key, and global mutes and provides names and states of all options.

Questions, Bugs, Comments, please visit the [checkcheckonetwo support site](https://discourse.checkcheckonetwo.com/c/software/stream-deck-companion/14)

### Getting started:

Connect Station-IC to your intercom system according to the Station-IC and system documentation.
Copy the unique Remote API key from Station-IC / Settings / Remote API, paste into the Companion module configuration and Save.

**Note: Normally station-IC is accessed on local IP 127.0.0.1 and port 16000.**

Verify that the connection to Station-IC has turned green in Companion / Connections.
Buttons can be created and actions selected from the Station-IC connections or dragged from the Button Presets tab.

### Create and configure a button

Selecting an unused button in Companion / Buttons provides the option to Create a Button.
Once created Press Actions can be configured. Click the folder icon -> select the Station-IC connection and the action type desired.

The action can now be assigned to a key on Station-IC, function and action. The button can now be named and pressed.
Feedback can be associated with the button in a similar way in the Feedback tab. Feedbacks are customizable in colors, text etc.

### Preset buttons

Preset buttons include a preset of button actions, feedback state and then the user can name the button as required.
The actions and feedback need to be assigned to a channel by the user to ensure that the action and feedback is in sync.  
In some instances, there may be more than one action on a button press.
Example is a Talk button where there is a latched action when pressed and a second non-latching action if held for longer than 200 ms. This is optional and can be tweaked by the user.

### Dynamic text for buttons:

Companion facilitates dynamically updated text for buttons.

Example - Name on Keyset #1: `$(CC_Station-IC:KS_1_LABEL)`

Example - Listen level on Keyset #1: Vol: `$(CC_Station-IC:KS_1_VOL)`

Example - Reply Key feedback displaying the name of incoming caller: `$(CC_Station-IC:RK_LABEL)`

**Note: Above examples assume the Station-IC connection in Companion is named "CC_Station-IC"**

Dynamic text can be created from multiple variables.

Example - Listen key displaying both key name, function, and current volume in 3 lines on a button:
`$(CC_Station-IC:KS_1_LABEL)\nListen\nVol: $(CC_Station-IC:KS_1_VOL)`

Station-IC is a free download from [Clear-Com's website](https://www.clearcom.com/Station-IC).

_Andrew Broughton, May 2025_
