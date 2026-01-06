# VR Sync  
## Setup
Always make sure to fill in your VR Sync server IP (including http for Sync Box or https for online dashboard), port and license key.
If you don't know your server/port, please contact support@vr-sync.com.
The default VR Sync box uses http://172.28.1.9 and port 7237.
For development purposes, you can use the checkboxes to log all incoming and/or outgoing messages. Beware that outgoing messages contain your license key.
  
  
## Actions:

##### Play
Sends a play command for a single media item. Requires the media ID and type, which can be found in the "media" variable under the VR Sync variables page.
You can also loop the video.
You can modify the delay between sending the command and the actual playback on the devices. This delay is necessary to give devices enough time to load the video and start perfectly synchronized. Setting it too low may cause devices to immediately have to seek in the video after starting because they did not load the video quickly enough and became out of sync as a result.

##### Stop
Sends a stop command, wich stops all media playback on all devices.

##### Send Text Message
Sends a text message which will be displayed in VR for a few seconds.

#### Calibrate Viewpoint
Calibrates everyones viewpoint, so that the direction they are currently looking is now used for the center of media.
  
  
## Feedbacks:
##### Connection Status
This represents whether the module is connected to VR Sync or not. Can be used to for instance change the background color of a button.  
  
    
## Variables:
##### media
This variable shows all media that is loaded on your devices. The devices will have to have been connected to the VR Sync server at least once.
You can use this variable to look up what ID and type the media is that you would like to play.

##### playStartedTrigger
This is a randomly generated GUID that changes every time a piece of media actually starts playing. That is to say, when the playDelayMs of a play command has elapsed.
You can use this value in a Trigger with an "On variable change" event to link actions to the actual start of playback.
Please note that this value may not be exactly synchronized, since it simply waits for playDelayMs milliseconds after sending a play command.
It does not take network and server processing latency into account. 
However, on a local network with a cable or strong wifi connection, the difference is probably at most a few dozen milliseconds.