# Denon SSD/USB Recorders

This module controls a Denon USB/SD recorder over Ethernet.
Includes DN-700R, DN-900R, DN-500R, DN-F450R, DN-F650R

The older RS232 only models (DN-500R, DN-F450R, DN-F650R) can be controlled with a USB to RS232 adapter via the `Generic: TCP Serial Port` module in Companion or an external Ethernet to RS232 adapter.

## **Available commands:**

### Power Control

* Power On
* Power Standby (Off)

### Media Selection

* Set Media to SD1
* Set Media to SD2
* Set Media to USB
* Set Media to Network

### Recording Controls

#### Record Input Selection

* Set Record Input to RCA
* Set Record Input to XLR
* Set Record Input to Coax
* Set Record Input to AES/EBU
* Record Mode: Stereo
* Record Mode: Mono Left
* Record Mode: Mono L+R Mix

#### Recording Actions

* Initiate Recording
* Pause Recording
* Split Recording (Create new track while recording)
* One Touch Record On/Off
* Add Mark (Add track marker)

#### Record Monitoring

* Record Monitor On/Off
* Input Volume Mode: Fixed/Variable
* Volume Controls:
  * L+R Volume: Up/Down 1dB
  * Left Channel: Up/Down 1dB
  * Right Channel: Up/Down 1dB
  * Balance: Left/Right 1dB

#### Recording Format

* PCM: 16-bit / 24-bit
* MP3: 64K / 128K / 192K / 256K / 320K

### Playback Controls

* Play
* Pause
* Stop
* Track Selection:
  * Next Track
  * Previous Track/Restart
  * Select Specific Track

### Transport Status

* Transport Off
* Stopped
* Playing
* Paused
* Record Pause
* Recording

### Panel Controls

* Panel Lock
* Panel Unlock
* Transport Lock

**Presets Included:**

* Presets for most commands

**Feedback Included:**

* Playing / Paused
* Recording / Paused
* Power On / Off

Thanks and appreciation to Brian Singerman for sponsoring the recent updates for feedback and variable support.<br>
Also, thanks and appreciation to Kevin Haddock for sponsoring the initial work on this module.

--------
Contributions for development of this open source module are always welcome
<https://github.com/sponsors/istnv>
