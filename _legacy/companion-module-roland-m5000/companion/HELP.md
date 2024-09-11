## Roland M-5000

This module will allow you to control a Roland M-5000 Audio Console. With a serial bridge it will also control the M-2xx, M-3xx and M-2xx models using a serial connection

> The Roland M-5000 only accepts 1 connection at a time over ethernet. The serial mixer will need a serial cable (USB Prolific chipset tested) and probably a null modem cable/adapter depending on the cable.

The serial bridge has been tested with the TCP-Serial module and the VMXProxy open source software by James Covey-Crump (on GitHub). The latter has a simulator which is good for testing.

Many of the available actions on the mixr are implemented. There are a few missing which could be added.

### Configuration
* Enter the IP address of the device in the configuration settings. (127.0.0.1 for serial bridge running locally)
* The M-5000 will listen on TCP port 8023. Set serial bridge to listen on 8023 for serial mixers.
* There is a configuration setting for the mixer model which creates the correct number of channels and function choices for each mixer variant
* The polling interval to get feedback data can be set in the configuration.
* For serial mixers you will need to set the serial bridge and the mixer serial settings to match -  115kbps tested.
* If a fader level is requested to go above maximum or below minimum levels an Out of Range Error is shown in the log
* There is also a bug in the Roland mixer software that sends an Out of Range Error when a MAIN fader command is sent. The command works but sends an error!
* There is a configuration field to enable/disable Out of Range Errors in the log
* There are configuration fields to set he default value for relative fader moves and enable a logarithmic response 

**Available actions:**
* Input, User Channel Phantom Power On/Off
* Input, User, Aux, Subgroup Mix Minus, Matrix, Main Channel EQ On/Off
* Set Input, User Channel Aux Send/Aux Pan Level
* Set Input, Subgroup, Aux, User Channel Pan
* Mute/Unmute Input, Subgroup, Mix Minus, Matrix, Main, DCA, Mute Group, User Channel
* Input, Subgroup, Aux, Mix Minus, Main, Monitor, DCA, User Channel Fader and Relative Fader Level
* (moving Relative Fader Level past minimum/maximum values or a Main fader move will generate an out of range error in the log)
* Recall Scene and Relative Scene
* Store Scene and Create New Scene
* Set Display, Panel and Lamp Brightness
* Monitor Dimmer On/Off
* Start, Stop and Pause USB Recording
* Jump to USB recording location or recording Song

**Variables:**
* Channel Names - names are retrieved at start-up only. It is assumed they don't change much so they are not polled to keep serial load down. 
* If a requested channel name has not been assigned on the mixer it will cause an out of range error in the log. See above to disable the errors.

**Feedbacks:** 
* Channel Mute Status
* Channel Level
* Phantom Power Status
* EQ Status

**Presets:** 
* There are three presets in groups for each channel type: A simple up/down relative fader action and a channel status button which gives the channel name, level and a mute toggle.

#### Possible additions if needed
**Possible future Variables:** (not yet implemented)
* Aux Send / Pan Levels
* Channel Pan Levels
* Channel Mutes
* Fader Levels
* Current Scene
* Software Version
* REAC Connection Status
* Display Brightness
* Panel Brightness
* Lamp Brightness
* Monitor Dimmer Setting
* USB Recorder Status
* USB Recorder Current Position
* USB Recorder Song Number
* USB Recorder Song Name
* USB Recorder Remaining Time

**Possible future Feedbacks:** (not yet implemented)
* USB Recorder Status

**Serial Mixers:** (Needs serial bridge)

If connected via serial bridge this module can control M-200, M-3xx and M-4xx mixers which have a serial connection
There is an additional option for Main channels of MUL which is different from the M-5000 naming scheme for Main channels
MUL is only for serial connected mixers
This represents the Main Left channel but the mixer operated Left/Right as a bonded stereo pair
