

# **Fulldome.pro Projection Server**
This module controls Fulldome.pro Projection Servers.

## Configuration
**Target IP:** Enter the target IP of the Fulldome.pro Projection Server to control. 
*This will almost always be 192.168.10.10 and the device running Companion must be on the same subnet.*
**Listen for Feedback** Listen for OSC messages broadcast by Fulldome.pro Projection Server.
*This is required for updating variables which keep server state. If not using this option server state must be managed manually.*
 
## Actions
Thes actions have been created to allow the user to configure buttons without needing to know the underlying OSC paths and in many cases without knowing the parameters or parameter types. 

### Playback Control
- Playback: Play<br />
   Plays the currently selected item from its current playback position.
- Playback: Play Item<br />
   Plays a particular item from a named playlist.
- Playback: Play/Pause Toggle<br />
- Playback: Pause<br />
    Stops playback of the current item at the playback position so it can be resumed (by the Play action).
- Playback: Stop<br />
    Stops playback of the current item (whether playing or paused) and sets the playback position to the start.
- Playback: Seek<br />
    Moves the playback position of the current item to a specified point.
- Playback: Seek Backward<br />
    Skips backward by 1/10 of the show.
- Playback: Seek Forward<br />
    Skips forward by 1/10 of the show
- Playback: Seek Next
    Skips to the start of the next item in the playlist
- Playback: Seek Previous
    Skips back to the start of the previous item in the playlist
### Sound
The volume level is represented in the interface as an integer from 0 (minimum) to 100 (maximum), but it is actually stored on the server as a float between 0 and 1.0.
- Sound: Mute OFF<br />
    Unmutes the audio regardless of its current state
- Sound: Mute ON<br />
    Mutes tha audio regardless of its current state
- Sound: Mute toggle<br />
    Toggles muting on or off based on current state
- Sound: Volume set<br />
    Allows volume to be set according to a variable value 
- Sound: Volume decrease<br />
    Decreases the volume by 1 step in 100.
- Sound: Volume increase<br />
    Increases the volume by 1 step in 100.
### Stagelight
Showing and hiding the stagelight does not stop or restart playback. Consider adding multiple actions to a button to pause playback when the stagelight is switched on and resume playback when it is stopped.
- Stagelight: OFF<br />
  Turns the stagelight off regardless of its current state
- Stagelight: ON<br />
   Turns the stagelight on regardless of its current state
- Stagelight: toggle<br />
   Toggles the staglight on or off based on current state
### Server
- Server: Restart Application<br />
   Restarts the server application
   ***Warning**: This will interrupt playback. It is used if the server is unresponsive as a less 'nuclear' option than switching it off and on again.* 
- Server: Shutdown<br />
    Performs a managed shutdown off the server. Settings are saved before shutdown. Slightly less 'nuclear' than using the power button.
    *Note: the server cannot be restarted from this module. To restart the server from Companion, add and configure the **Generic: Wake-On-LAN** module.  
### Projectors
   *Note the projector on/off commands will only work when the Fulldome.pro server is on and server application is running. It requires a network or serial connection between the Fulldome.pro server and each projector. Many projector makes and models have their own Companion modules. To turn projectors on and off independently of the Fulldome.pro server, try using a dedicated module for your projectors.
- Projectors: Power OFF<br />
   Sends projectors off message regardless of their current state
- Projectors: Power ON<br />
   Sends projectors on message regardless of their current state
- Projectors: Power Toggle<br />
   Turns the projectors on or off based on current state.
### Video Capture
If equiped with Fulldome Live, the Projection Server can capture external video via HDMI. Source can be Fisheye, Planar or Equirectangular format. 
- Video Mode: Set
   Sets external video capture mode from the drop-down list. 
---
## Test Patterns
Showing and hiding test patterns does not stop or restart playback. Consider adding multiple actions to a button to pause playback when a test pattern is shown and resume playback when it is hidden.
- Test Pattern: hide<br />
   Turns off any test pattern 
- Test Pattern: show named<br />
    Shows the test pattern named in the Test Pattern parameter
- Test Pattern show selected<br />
    Shows the test pattern chosen from a drop-down list
---
## Variables
This is the list of variables currentlly used to track the state of the server. The OSC listener sets the variables based on messages broadcast from the server. This allows for some simple feedbacks to be created and change the appearance of buttons to reflect the state.<br />

|variableID|Description|
|---------:|-----------|
|playlist|The name of the current playlist<hr />|
|playlistItem|The position of the current item in the current playlist<br />(0 = first, 1 = second, etc.)<hr />|
|position|The playback position of the current item<br />(0.0 = start ... 1.0 = end)<hr />|
|projectorsPower|Whether projectors are on (1) or off (0)<br />Used to track state of projector power<hr />|
|soundMute|Whether volume is muted (1) or not (0)<br />Used to track state of muting|
|soundVolume |The current system volume<br />(Internally stored as float from 0.0 to 1.0 but represented in the interface as an integer from 0 to 100)<br />
|stagelight|Whether stagelight is on (1) or off (0)<br />Used to track state of stagelight<hr />|
|status|The status of the Media Player<br />(0=Inital, 1=Play, 2=Stop, 3=Pause, 4=FadeIn2Play, 5=FadeOutToPause, 6=FadeOut2Stop, 7=FadeToNextLoop)<hr />|
<br />
More variables will be added in future releases.
---

## Feedbacks

- Content Playing
- Sound Mute
- Stagelight
- Projectors Power

---
## Presets
### Media Player
- Play/Pause
- Play
- Pause
- Stop
- Next
- Previous
- Rewind
- Fast Forward
### Projectors
- Projector Power Toggle
### Server
- Restart Server Application
- Shutdown Server
### Sound
- Volume Up
- Volume Down
- Volume (rotary)
- Mute Toggle
- Mute
- Unmute
### Stagelight
- Stagelight Toggle
- Stagelight On
- Stagelight Off
### Test Paterns
- Hide Test Pattern
- Show White No Blends test pattern
- Show Numbers test pattern
- Show Illuminance test pattern
- Show Geometry 1 test pattern
- Show Geometry 2 test pattern
- Show Grid 4K Black test pattern
- Show Grid 4K White test pattern
- Show White test pattern
- Show Red test pattern
- Show Green test pattern
- Show Blue test pattern
### Video Capture
- Video Capture Mode OFF
- Video Capture Mode Planar
- Video Capture Mode Fisheye
- Video Capture Mode Equirectangular

---
# Background
## How the Fulldome.pro Projection Server uses OSC
Fulldome.pro Projection Servers use OSC to show their status to external devices. The Projection Server also responds to OSC commands from external sources such as Companion.

There are no special methods for actively polling available servers. Instead, each server periodically (every 1 second) sends a broadcast alive packet with information about itself. Thus, any willing client can "listen to the broadcast" on this port for a while, determine which servers are available, choose one of them and work with it.
In theory the send and receive ports for OSC messages could change, but in practice they don't, and are not configurable by the user. So for the time being cannot be set in this module. 

All subsequent messages from the server are received on another port, which can be received from the alive packet. No semblance of a connection to the server is established. The server does NOT communicate personally with a particular client - it always sends broadcast messages, receives, and processes any suitable OSC messages - without understanding where and from whom they are.
There may be (rare) situations when several servers are available on the network. All of them send broadcast messages: responses to requests, a description of the current state, events, etc. Therefore, to avoid glitches, the client application needs to ignore messages that are not received from the selected server. That is, the client must focus on the IP address of the sender of the packet.

The more likely situation is that there are several clients on the  same network as a single Projection Server.
*For example, in a planetarium the control desk will have a desktop client, there may be an science communicator in the audience with an iPad client and a Streamdeck with Companion client at a presenters podium.*
The server is independent of the client application and is always in some state. The client application must determine at startup what state the server is currently in and make changes to its interface. When the server state changes, whether due to an event ending (e.g. a movie has finished playing) or a command from another client (e.g. turning on the Stagelight) clients must make changes to their own interfaces accordingly.

Because OSC runs over UDP, the client needs to be prepared for messages to disappear, rearrange their order, and other UDP 'features'.

Future releases may use the Alive packet to detect multiple servers on the network, select which server to use and to set the ports for sending and receiving OSC messages.

*For reference the module sends OSC messages to port 8000 of the Projection server and listens for broadcast messages from the Projection Server on port 8001.*

# About Fulldome.pro
Founded in 2010 to introduce easy-to-use and cost-effective digital technology and dynamic programming to the planetarium industry, Fulldome.pro has emerged as a global leader in the immersive dome marketplace.

Our revolutionary patented hardware and software integration and auto-calibration technologies allow for fast, efficient, and highly reliable project production and set up.

For more information go to <www.fulldome.pro>
