# companion-module-ibm-watson
This module is for controlling your IBM Watson live closed captioning system. 

This was built by reverse engineering the calls sent from the web interface that is normally used to control the system.
system.address:8080 is your webpage and system.address:8000 is your http control port.

There are some presets avaliable, I prefer the toggle option with the built in feedback showing if it is captioning or is not captioning. (green, red, repsectivly) 

See LICENSE


**Available commands**

* Start Captioning
* Stop Captioning
* Toggle Captioning
* Fetch Status
* Mute Captions
* Unmute Captions
