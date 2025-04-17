# Companion Module AVGear IP410

This module allows you to control an [AV Gear IP410](https://avgear.com.au/shop/distribution/power-distribution/avg-ip410/) remote controlled PDU. (This module should also work with the AVIOSYS IP9850, the OEM of the IP410)

## Device Setup
Make sure the Http web server is enabled - https is not supported at this time. Please be mindful of the network you are connection over as the user name and password is transmitted in clear text.

## Module Setup
Enter the IP address, user name and password for the device in the AVGear IP410 module connection settings. If you have set up the device to run on a non-standard port (ie. not port 80), that port can be included in the IP address as a <IP Address>:<port>. All that's left is to set your polling interval. By default the module will poll the device once every second - a value of 0 will disable polling, but as connections to the device are not kept open, that will mean that the module will assume the device is online until the next action is performed. If you are using companion to also monitor device state, it is recommened that if you are concerned about companion or network load to just have a higher polling interval so that state will at least be reasonably accurate.

## Actions
The following actions are possible.

**Get Power State** Polls the device to return the power status for all channels. Updates internal variables

**Set Power State** Change the power state of the selected channel.

**Toggle Power State** Changes a power state from off to on or on to off. Acts on the last known state as represented in Companion.

**Get Socket Names** Gets the names of the sockets in the reciver. Updates internal variables.

## Variables
The following module variables are available. Variables will update on connection, on polling interval, or when its associated action is performed.

**Socket X Power State** For each channel there is a variable that repressents its power state: Either On or Off

**Socket X Name** For each channel there is a name variable that reflects the name as set up in the device web interface.

## Feedbacks
The module exposes the following feedbacks

**Socket X State** A boolean value that represents the state of the selected socket number

## Versions

### 1.0.0
First release

### 1.1.0
Adds fix for special characters in user names and passwords

### 1.2.0
Switches API away from Raw HTTP to JSON. Apparently, the JSON API doesn't have the same issues as the RAW HTTP api whereby the system might report incorrect on\off state. This is a (now) a known issue with the basic HTTP interface with the recommened fix being to move to JSON.

### 1.2.1
Update Companion Module Base and Companion Tools. Utilises new Authentication Failure Option