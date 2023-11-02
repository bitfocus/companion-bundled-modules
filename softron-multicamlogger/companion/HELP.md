# Softron Multicam Logger

This module will control the [Softron Multicam Logger](https://softron.tv/products/record/multicam-logger) application. To use this module the 'HTTP Remote Control' option must be ticked in the Multicam Logger application settings dialog. 

## Configuration
You must enter the IP address of the computer running Multicam Logger in the module configuration. If it is running on the same computer as Companion use 127.0.0.1

Multicam Logger uses port 8888 for remote control, there is no need to change this setting unless you are using port forwarding.

To enable the continuous updating of variables use the Polling option. This will increase network traffic and the load on Companion and Multicam Logger. You may choose a polling interval, default is 1000ms.

## Actions

- **Add Marker** add a text note to the log. This action will only work when logging is in the running state.
- **Change Angle (Take)** Swap Program and Preview
- **Set Preview** Choose the angle for Preview. The list of available inputs should update when the module is started.
- **Set Program** Choose the angle for Program. The list of available inputs should update when the module is started.
- **Start Logging** Start the log.
- **Stop Logging** Stop the log. Start and Stop can be combined on a single button by means of Step1 and Step2 actions.
- **Update Input List** Update the list of inputs shown in the Program and Preview actions.

## Feedbacks
Three feedback types are provided

- **Logging State** change background colour based on logging state
- **Preview Input** change background colour based on current preview input
- **Program Input** change background colour based on current program state

To ensure that the preview and program feedbacks update when changes are made outside of Companion polling must be enabled.

## Variables
Status information sent by the Multicam Logger application is stored in variables. If the polling config option is enabled then these variables are updated once per second, otherwise they are updated only on startup and when a command is sent.

## Version History

### 1.0.0
First Release, tested with Multicam Logger version 2.2.7
