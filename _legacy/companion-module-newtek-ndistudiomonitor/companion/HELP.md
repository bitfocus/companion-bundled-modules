# NewTek NDI Studio Monitor

**Control for NDI Studio Monitor versions 4 & 5**

**Sources and presets are updated every 5 seconds**, if you don't see a source in the dropdown lists or presets just refresh the page.

**Feedbacks and variables are updated every second**.

NDI Studio Monitor by default uses a "web password" (if not deactivated during installation of NDI Tools). The default user and password are "admin" "admin".

**User and password can be changed** through NDI Studio Monitor web interface (person icon in the top bar) **or removed entirely** by deleting the file: 
"C:\Users\YOURUSERNAME\AppData\Local\NewTek\Studio Monitor\authentication\web_passwords"

## Available commands

* **Source**: sets the main (background) source
* **Overlay PiP**: sets source as a Picture in Picture
* **Overlay alpha**: sets the source as an alpha-overlay
* **Overlay hide**:	hides the overlay (PiP or alpha)
* **Audio mute**: mute the audio inside NDI Studio Monitor
* **Audio unmute**: unmute the audio inside NDI Studio Monitor
* **Rec start**: start the recording (works only if a main source has been set)
* **Rec stop**: stop the recording
* **Custom JSON**: allows for custom JSON to be sent to the configuration page **(see Custom JSON note below)**

## Feedbacks

* **Source is selected**
* **Source is in overlay (PiP or alpha)**
* **Source is in PiP overlay**
* **Source is in alpha overlay**
* **Recording is active**
* **Audio is muted**

## Variables

* **activeSourceComplete**: current active main source complete name e.g. "hostname (source name)"
* **activeSourceHost**: current active main source hostname
* **activeSourceName**: current active main source name
* **activeOverlayComplete**: current active overlay source complete name e.g. "hostname (source name)"
* **activeOverlayHost**: current active overlay source hostname
* **activeOverlayName**: current active overlay source name
* **recording**: true if recording is active, false otherwise
* **recordingTimeS**: recording time in seconds
* **recordingTimeMS**: recording time in minutes:seconds format

## Custom JSON

"Custom JSON" action will send JSON data to /v1/configuration page of the web server.

Most of the options could be enabled or disabled by setting the value to true or false. 

If {"Version":1} is not specified it will be automatically added.
If action doesn't work please check again the JSON syntax.
Multiple configuration commands can be combined into a single JSON string.

Examples:
* **{"window":{"display_device":""}}** set NDI Studio Monitor as a window
* **{"window":{"display_device":"Full Screen"}}** set NDI Studio Monitor in full screen mode (works only if only one desktop is available)
* **{"window":{"display_device":"Monitor 1"}}** or "Monitor 2" etc. set NDI Studio Monitor to full screen on the first desktop (works only if multiple extended desktops are available)
* **{"record_path":"C:\\Users\\User\\Videos"}** set recording folder (double backslash is mandatory)
* **{"PTZ_controller":""}** set the PTZ joystick to be used
* **{"window":{"display_device":"All Monitors"}}** set NDI Studio Monitor to full screen mode across all desktops (works only if multiple extended desktops are available)
* **{"decorations":{"best_fit":true}}** scale the NDI source to fit the window size (set to false to disable source scaling)
* **{"audio_output":"Speakers (Realtek High Definition Audio)"}** changes audio output device to the specified one (device name is the same as in Windows settings)
* **{"decorations":{"audio_gain":-20}}** set audio gain to +0dB (SMPTE level); note that -14 = +6dB (EBU level) and so on
* **{"decorations":{"enable_ndi_output":true}}** enable NDI output from NDI Studio Monitor
* **{"decorations":{"checkerboard":true}}** display a checkboard instead of black for the alpha channel
* **{"decorations":{"show_alpha":true}}** display a grayscale image of the alpha channel
* **{"decorations":{"tally":true}}** enable tally
* **{"decorations":{"vu_meter":true}}** enable VU meter overlay
* **{"decorations":{"vu_meter_scale":true}}** enable VU meter labels
* **{"decorations":{"center_cross":true}}** enable a center cross overlay
* **{"decorations":{"safe_areas":true}}** enable safe areas overlay
* **{"decorations":{"show_4_3":true}}** enable 4:3 aspect overlay
* **{"decorations":{"square_aspect":true}}** enable square aspect overlay
* **{"decorations":{"hide_ptz_controls":false}}** display PTZ controls overlay
* **{"decorations":{"show_web_address":true}}** show web address on next lauch of NDI studio
* **{"decorations":{"do_not_hide_controls":true}}** force control overlays to be always on
* **{"decorations":{"flip_horizontal":true}}** flip the displayed source horizontally
* **{"decorations":{"flip_vertical":true}}**  flip the displayed source vertically
* **{"decorations":{"lowest_latency":true}}** enable low latency mode
* **{"decorations":{"hw_accel":true}}** enable hardware acceleration
* **{"decorations":{"low_bandwidth":true}}** enable low bandwidth mode
* **{"window":{"always_on_top":true}}** keep NDI Studio Monitor on top of other windows
* **{"window":{"hide_border":true}}** hide window border
* **{"window":{"showcmd":1}}** force window placement mode:
 * 0 = hidden
 * 1 = normal (windowed)
 * 2 = minimized
 * 3 = maximized
 * other values are documented at https://docs.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-showwindow
