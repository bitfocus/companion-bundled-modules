## Dahua PTZ security camera's

This module will allow you to control Dahua and Amcrest PTZ camera's using the Amcrest protocol.

See https://support.amcrest.com/hc/en-us/articles/360002010791-Amcrest-HTTP-API-SDK

Only basic PTZ-commands of this API are implemented.

### Configuration
Set IP address, port, and password. Password is necessary.

### Stream URL
Stream URL for OBS is:
rtsp://your-username:your-password@your-ip:554/cam/realmonitor?channel=1&subtype=0
