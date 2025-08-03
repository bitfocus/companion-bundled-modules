# AETA Audio Codecs Module for Companion

This module allows control of AETA Audio Codecs through Companion.

Utilities folder contains reference files for developers as well as a dial pad companion page template for phones/codecs numbers input.

## Configuration

* **IP Address** - The IP address of your AETA codec
* **Port** - The TCP port for AARC protocol (default: 6000)
* **Password** - AARC password if configured on the codec (leave blank if none)
* **Enable Status Polling** - Enable/disable automatic status updates
* **Polling Interval** - How often to poll for status updates (in milliseconds)
* **Enable VU Meter** - (Feature currently disabled)
* **VU Meter Interval** - (Feature currently disabled)

## Available Actions

### Call Control
* **Dial Number** - Make a call to a specified number or SIP URI  
  _Applicable units: all units_
* **Hang Up** - End the current call  
  _Applicable units: all units_

### Audio Settings
* **Set Input Gain** - Adjust input gain (-12 to +12 dB)  
  _Applicable units: HS3, S3, S4, S5, S+, SxS_
* **Set Output Gain** - Adjust output gain (-11 to +22 dBu)  
  _Applicable units: all units_
* **Set Coding Algorithm** - Change the audio coding algorithm  
  _Applicable units: all units_
* **Set Coding Bit Rate** - Change the audio bit rate  
  _Applicable units: all units_
* **Set Audio Interface Format** - Select analogue or AES/EBU  
  _Applicable units: HS3, S3, S4, S5, Scoop5 S, Scoop5 S-IP_
* **Set AES Sync Mode** - Set AES synchronization (genlock/master)  
  _Applicable units: S4, S5, Scoop5 S, Scoop5 S-IP_
* **Set AES Nominal Sampling Rate** - Set AES interface sampling rate  
  _Applicable units: S4, S5, Scoop5 S, Scoop5 S-IP_
* **Set Input Impedance** - Set analogue input impedance  
  _Applicable units: S4, S5, Scoop5 S_
* **Set Output Load** - Set analogue output load  
  _Applicable units: HS3, S3_
* **Set Channel Panning Mode** - Set stereo panning  
  _Applicable units: S+, Sy+ S_
* **Set Output Signal Selection** - Route output signal (send/receive/mix)  
  _Applicable units: S+, Sy+ S_
* **Set Input Attenuation Pad** - Enable/disable input pad  
  _Applicable units: S+, Sy+ S_
* **Set Headphone Coordination Channel Routing** - Configure headphone routing  
  _Applicable units: S+, Sy+ S_
* **Monitor Audio Levels** - Start/stop periodic monitoring (feature currently disabled)

### Network Settings
* **Set Network Type** - Change network interface type  
  _Applicable units: all units_
* **Set IP Quality** - Adjust IP streaming quality settings  
  _Applicable units: S4, S5, S+, SxS_
* **Set Packet Replication** - Configure packet redundancy  
  _Applicable units: S+, S5, SxS_
* **Set DHCP Mode** - Switch between DHCP and static IP  
  _Applicable units: S4, S5, S+, SxS_
* **Set IP Address** - Set static IP address  
  _Applicable units: S4, S5, S+, SxS_
* **Set DNS Address** - Set DNS server  
  _Applicable units: S4, S5, S+, SxS_
* **Set Gateway** - Set default gateway  
  _Applicable units: S4, S5, S+, SxS_
* **Set Subnet Mask** - Set subnet mask  
  _Applicable units: S4, S5, S+, SxS_

### System Settings
* **Set 5A System** - Enable/disable 5A system  
  _Applicable units: all units_
* **Load Preset Configuration** - Apply predefined settings:  
  _Applicable units: all units (presets use multiple commands)_
  - High Quality (Opus Stereo)
  - Low Latency (G722)
  - Mobile Data (Low Bandwidth)
  - ISDN Backup Mode
* **Refresh Data** - Manual refresh of codec status
* **Reset Device** - Reboot the device  
  _Applicable units: all units_
* **Send Custom AT# Command** - Send a custom AT# command  
  _Applicable units: all units_

### Advanced/Other
* **Set Dial Method** - Select tone or pulse dialing  
  _Applicable units: S+, S4, S5, SxS_
* **Set Dial Tone** - Wait for dial tone or not  
  _Applicable units: S+, S4, S5, SxS_
* **Set ISDN Call Filter** - Set ISDN call filtering mode  
  _Applicable units: all units_
* **Set Proprietary ISDN Filter** - Enable/disable proprietary ISDN filter  
  _Applicable units: HS3, S3_
* **Set High Layer Capability (HLC)** - Enable/disable HLC encoding  
  _Applicable units: HS3, S3_
* **Set Auto Redial** - Enable/disable auto redial for codec  
  _Applicable units: S4, S5, S+, SxS_
* **Set Redial Retries** - Set number of redial attempts  
  _Applicable units: S4, S5, S+, SxS_
* **Set Redial Wait Time** - Set wait time between redials  
  _Applicable units: S4, S5, S+, SxS_
* **Set Loop Control** - Configure loop control for outgoing links  
  _Applicable units: S4, S5, Scoop5 S, Scoop5 S-IP_
* **Set Backup Network** - Select backup network type  
  _Applicable units: S4, S5, SxS_
* **Set Passive Backup Mode** - Enable/disable passive backup  
  _Applicable units: S4, S5, SxS_
* **Set Original/Copy Field (MPEG only)** - Set MPEG original/copy field  
  _Applicable units: HS3, S3_
* **Set Copyright Field (MPEG only)** - Set MPEG copyright field  
  _Applicable units: HS3, S3_
* **Set Error Correction/Protected Mode** - Configure error correction  
  _Applicable units: all units_
* **Set Clock Mode (POTS)** - Set POTS clock mode  
  _Applicable units: S+, S5, SxS_
* **Set Line Level (POTS)** - Set POTS output line level  
  _Applicable units: S+, S5, SxS_
* **Set Speed (POTS)** - Set POTS speed mode  
  _Applicable units: S+, S4, S5, SxS_
* **Set Data Channel** - Enable/disable serial data channel  
  _Applicable units: all units_
* **Set Data Channel Baud Rate** - Set baud rate for data channel  
  _Applicable units: all units_
* **Set Relay Transmission** - Enable/disable relay transmission  
  _Applicable units: all units_
* **Set GPI State** - Set General Purpose Input (GPI) state  
  _Applicable units: S+, S4, S5, SxS_
* **Set GPO State** - Set General Purpose Output (GPO) state  
  _Applicable units: S+, S4, S5, SxS_
* **Set Auxiliary 3 kHz Audio Channel** - Enable/disable auxiliary channel  
  _Applicable units: HS3, S3, S4, S5_
* **Display Text Message** - Send a text message to the device  
  _Applicable units: S+, S4, S5, SxS_

## Available Feedbacks

### Status Indicators
* **Codec Connected** - Changes color when codec has an established connection
* **Ringing** - Changes color when there's an incoming call
* **Calling** - Changes color during outgoing call attempt
* **Call Established** - Changes color when call is connected
* **Call Released** - Changes color when call is ended

### Technical Monitoring
* **Codec Alarms** - Changes color when the codec has active alarms

## Variables

### Connection Status
* Connection Status
* Codec Model
* Last Error Message

### Call Status
* Ringing Status
* Calling Status
* Established Status
* Released Status
* Dial Number
* Local Number

### Audio Settings
* Coding Algorithm
* Coding Bit Rate
* Audio Status
* Audio Level
* Input/Output Gain

### Network Settings
* Network Type
* IP Quality
* Packet Replication
* Network Quality
* Jitter Buffer Status

### System Status
* Active Alarms
* 5A System Status
* Configuration Number
* Test Loop Status

### Network Configuration
* IP Address
* IP Mask
* Gateway
* DNS
* DHCP Mode

## Supported Models

* HIFISCOOP 3
* SCOOP 3
* SCOOP 4+
* SCOOPY+
* SCOOP5 S
* SCOOP5 S-IP
* SCOOPY+ S

## Error Handling

The module includes comprehensive error handling:
* Connection failures
* Authentication errors
* Invalid commands
* Network issues
* Audio problems
* Hardware alarms

## Version History

### Version 1.0.3-beta
* fixed call states feedbacks