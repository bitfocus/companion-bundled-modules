## AV-KEY

AV-Key is a versatile windowless utility that enables you to remotely control applications that do not offer any native way to control them remotely. Thankfully though, most do allow the triggering of actions via keyboard short keys, this is where AV-KEY steps in, acting as a bridge. AV-KEY listens for commands received via Ethernet and converts them into keystrokes. Now when any program on the receiving computer has keyboard focus, the keystrokes emulated by AV-KEY are received just as if it was typed directly on the keyboard.

To learn more and download a free version goto: https://www.ifelseware.com/AV-Key/

##### Instance Settings

* IP Address

* Target port: Default is 7000. If that port is already being used by something else go ahead and change it now. Remember you will also need to match the port number in AV-Key as well.

##### Available button actions:

**Key Down (Virtual Key Code):**

Sends a single key press signal of the selected key code. 

**NOTE: The AV-Key will repeat the key code every 500ms until the matching key up signal is received. It is wise to also add the matching key up command to Companion's button release action.**
  
**Key Up (Virtual Key Code):**

Sends a single key release signal of the selected key code. 

**Send Text String:**

Using this command you can send entire block of text at the same time. If needed you can also embed anywhere within the string a special character or function key. This is done by using standard virtual key codes. To add a key code, place the decimal code between the following set of characters **[{'  + key code + '}]**.
As an example, we can send pair of sentences separated by a line feed/carriage return (key code 13). 
A full text string would look like this: **Hello from planet earth![{13}]Please take me to your leader.**

**Send Combination of key codes:**

With this command you can execute up to four separate key strokes, including special function keys in a single sequence. 

**PowerPoint Cue**

To make programing simple we have included a list of prebuilt presets engineered specifically for PowerPoint. Simply choose the function want from the drop down list.

* Launch From From Beginning
* Launch From Current Slide
* Next Slide
* Previous Slide
* First Slide
* Last Slide
* GOTO Slide Number
* Next Hotspot
* Previous Hotspot
* Click Hotspot
* Play | Pause Media
* Stop Media
* Next Bookmark
* Previous Bookmark
* Mute Audio
* End Show
