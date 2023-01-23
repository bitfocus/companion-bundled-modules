<img src="https://git.project-name-here.de/Project-Name-Here/soundr/raw/branch/master/resources/logo.svg" height="80px">

# [Project Name Here] Soundr

This module allows you to control a Soundr server.
You can get the server here: [Link](https://git.project-name-here.de/Project-Name-Here/soundr)

# Configuration

**Target IP** - The IP of the Soundr server. This is the IP of the computer running the Soundr server.

**Target Port** - The port of the Soundr server. This is the port of the computer running the Soundr server.

**refreshTime** - The time in seconds between each refresh of the Soundr server. The Soundr server will be queried for the current state of it.

**soundsToMonitor** - The sounds to monitor. This is a list of sounds that will be monitored. Each sound is represented by a numeric id. If a sound is played, the state of the sound will be updated. This is useful for buttons that show the current state of a sound or it's remaining time. 

# Actions
There is a wide variety of actions supported. The best way to discover them is head over to Companion and try them out. Many functions support pre-defined presets or will support them soon.

## Sound controls
**Stop all sounds** - This action will stop all sounds on the Soundr server.

**Buffer all sounds** - This action will buffer all sounds on the Soundr server. This will cause them to be loaded into memory. This is useful if you want to play a sound immediately after it has been triggered.

**Play sound** - This action will play a sound on the Soundr server. The sound can be selected via the dropdown menu. It also allows you to set a sound of looping. The Vanity id, also known as a nickname allows you to reference the sound in variables or other functions. The vanity can be any number. I recommend a high id here.

**Stop sound** - This action will stop a sound on the Soundr server. The sound can be selected via it's vanity id.

<hr>



### Other information (Disclaimer)
This information is mentioned on the soundr git page, however I would like to reiterate here.
Please do not use soundr for military or life-depending applications.

## Getting further help
If something does not work or you need further help, either raise an issue or send me an E-Mail. I will try to help you as soon as possible.
I can not supply 24/7 support. I am a student and I have a life outside of programming.
