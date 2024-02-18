## VICREO Hotkey
This module connects to the VICREO Listener program which you need to download and run on the remote machine.

>  VICREO Listener is a small program that sits on your machine waiting for incoming TCP connection/commands. It uses pre-defined commands to simulate key-presses on your machine. You can use this program to preform hotkey actions from remote.

Go to [VICREO Listener](https://vicreo-listener.com) for download.
When you have an issue let me know at: [https://github.com/bitfocus/companion-module-vicreo-hotkey/issues](https://github.com/bitfocus/companion-module-vicreo-hotkey/issues)

## Usage

Download and run the application on the remote computer (local is also possible). In companion, fill in the IP address of the remote computer or 127.0.0.1 if installed on the same machine.

From version 8.0.0 its possible to use the Bonjour service to find a listener on the network.

>> Check the build in presets!

## SUPPORTED ACTIONS ##

* Single hotkey
* Special key (see keylist)
* Combination of keys

>> After this you would need a license. Go to [VICREO Listener](https://vicreo-listener.com/license) to get one.

* trio combination of keys
* quartet combination of keys
* Separate key press
* Separate key release
* MousePosition
* MouseClick
* MouseScrolling
* Send a string
* Send Shell command
* Open a file remotely 
* Send key directly to a process

## Keys ##

>The following keys are supported:

Backspace
Delete
Enter
Tab
Esc
Arrow up
Arrow Down
Arrow Right
Arrow Left
Home
End
Page Up
Page Down
F1
F2
F3
F4
F5
F6
F7
F8
F9
F10
F11
F12
Command/Win
Option/alt
Control
Shift
Right-Shift
Space(bar)
Leftmouse
Rightmouse

## Check out the special keys ! ##
Some functions might not work on different OS

Audio mute (toggle)
Audio volume down
Audio volume up
Play
Stop
Pause
Previous track
Next track
Numpad 0
Numpad 1
Numpad 2
Numpad 3
Numpad 4
Numpad 5
Numpad 6
Numpad 7
Numpad 8
Numpad
Monitor brightness up
Monitor brightness down
Insert
Keyboard light up
Keyboard light down 
Printscreen

### Open a file ###
Goto presets and drag-drop [Open Notepad]. This will give you the right example how to do this.
### TIPS for MacOS ###

For mac, when you need the path of a file, right-click on the file and when you see the menu, press and hold Alt to be able to copy the full path.

When using Powerpoint for mac, you can program a goto slide via a process. Use the 'Send KeyPress To MacOS Process' action and fill the process name (in this case Microsoft Powerpoint, you can search for it in activity monitor on the mac) and select the desired key. For example ANSI_3. Then use a bit delay (30ms) on the same button for the ANSI_KeypadEnter.

>> When using file paths make sure you put " around the path, like: "filepath"

### TIPS for Windows ###

For Windows, when you need to open a file, right-click on the file while pressing Shift, to be able to copy the full path. Leave it all as it is (wrong slashes and ")
There is an example preset to open notepad.

### Mouse Position and click ###

From version 4.0.10 upwards there is control over the mouse via position and a click (left, right, middle button, double click)