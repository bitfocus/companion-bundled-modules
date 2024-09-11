## Teradek VidiU

This module will allow you to control a Teradek VidiU device.

### Configuration
* Enter the IP address of the device in the configuration settings.
* Enter the password of the device as configured in the web interface of the VidiU.
* The device will use HTTP port 80.
* Set VidiU Go dropdown to Yes for compatability (Experimental)
    * Turns off collection of variables not supported by VidiU Go
    * Adds check for VidiU Go stop responding to status requests
    * Adds check for VidiU Go powered up after Companion running

**Available actions:**
* Start Broadcasting
* Stop Broadcasting
* Start Recording
* Stop Recording