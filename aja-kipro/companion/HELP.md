## AJA Ki Pro / Ki Pro Ultra

This module will allow you to control the AJA Ki Pro and Ki Pro Ultra series recorders.

### Configuration
* Enter the IP Address of the KiPro.
* Enter the password for the KiPro. If authentication is not used leave blank.
* Enable or disable polling of the KiPro for feedback items
* Select a rate to poll the KiPro

Some older KiPro units will output incorrect headers that will result in polling being disabled

### To use the module
Add an action to a button and choose the action you wish to use.

**Available actions:**
* Play
* Stop
* Record
* Next Clip
* Previous Cliip
* Fast Forward
* Fast Reverse
* Step Forward
* Step Reverse/Back
* Format
* Erase Clip By Name (Requires extension)
* Erase Clip By List
* Set Custom Take Number
* Set Custom Clip Name
* Load Clip By Name (Requires extension)
* Load Clip By List
* Loop Clip
* Set Timecode Value
* Set Media State

**Available feedback:**
* Transport State

**Available Variables:**
* Timecode Hours
* Timecode Minutes
* Timecode Seconds
* Timecode Frames
* Transport State
* Current Clip Name
* Remaining Media Available
* System Name

**Available Presets:**
* Transport control
  * Play
  * Stop
  * Record
  * Next Clip
  * Previous Clip
  * Fast Forward
  * Rewind
  * Step Forward
  * Step Backward
* Timecode
  * Full Timecode
  * Timecode Hours
  * Timecode Minutes
  * Timecode Seconds
  * Timecode Frames
* Functions
  * Stop and Format
  * Reset Timecode and Record

### Non-compliant header warning
* Some older KiPro units will return non HTTP compliant headers that will result in a warning in the log and polling being disabled
