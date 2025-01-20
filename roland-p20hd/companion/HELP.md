## Roland P-20HD

This module will allow you to control a Roland P-20HD.

You need to get the IP address of the device - Menu (3/3) > LAN (1/3) > IP Setting<br>
Set up the User Account with a User ID and Password - Menu (3/3) > LAN (2/3) > User ID & Password<br>
Enable Remote Control - Menu (3/3) > LAN (3/3) > Remote Control > ON

IMPORTANT: If the User ID or Password is empty (they are empty by default or after resetting), the device won't accept a remote connection.<br>
If you are using DHCP to auto-assign an IP address, it's best practice to boot the device first, before plugging in a LAN cable.

### Configuration

- Enter the IP address of the device as well as the User ID and Password in the configuration settings.
- The device will use TCP port 8023.
- There is a config setting for the period of the timer used to poll the device for status (small periods can impact performance!)

**Available Actions:**

- Start/Stop Recording
- Play/Pause
- Jog
- Shuttle
- Set Playback Speed
- Set IN/OUT Point
- Speed Range ON/OFF
- Create Clip
- Clip Actions (Select, Cue, Delete)
- Add Current Clip to Palette
- Play Selected Clip
- Create/Delete Bookmarks
- Jump to Markers in Timeline
- Select Playlist
- Start/Stop Autoplay of selected Playlist
- Start/Stop Still Image
- Start/Stop Audio Clip
- Audio Level
- Switch Input
- Switch Output
- Request Active Sensing
- Shut down this Unit

**Available Feedbacks:**

- Audio Clip is available
- Clip is available
- Clip is cued-up
- Clip is selected
- In Point is Set
- Playlist is selected
- SPEED RANGE is enabled
- Still Image is available
- Unit has an Open Project
- Unit in/out config
- Unit is Playing
- Unit is Recording

**Available Variables:**

- Audio Level
- Number of Currently Cued-Up Clip
- Playlist Containing Cued-Up Clip
- In Point
- Input Selection Status
- Output Selection Status
- Playback Range
- Playback Speed
- Playing
- Product Name
- Project Mode
- Recording
- Number of Currently Selected Clip
- Playlist Containing Selected Clip
- Number Of Clips In Playlist Containing Selected Clip
- Version
