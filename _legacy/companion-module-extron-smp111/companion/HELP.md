# Module for Extron SMP 111

> This module connects to the Extron H.264 Streaming Media Processor (SMP) 111 and allows you to login, send commands, and recieve feedback based on the status of the device.

## Connecting

* Admin or User Password can be set if used
* Extron telnet connection has a timeout default of 5mins, a 5sec heartbeat has been set to keep connection alive and poll for feedback

## Supported commands

* **Recording** Stop/Record/Pause
* **Mark Recording** Mark a recording
* **Extend Recording** Extend a scheduled recording by X mins
* **RTMP Push Stream** On/Off
* **Recall Presets** Recall input, stream & encoder presets

## Supported feedback

* **Recording state** Stop/Record/Pause
* **RTMP Push Stream** On/Off

## Supported button variables

* **Recording state** Stopped/Recording/Paused
* **Time Remaining** Time remaining on a recording in hh:mm format
