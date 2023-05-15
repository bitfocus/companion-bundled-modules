# Generic Ping
This module will allow you to ping a remote device and use the response in a variable or module ok/error state.

## Configuration
* Enter the IP Address of the device to ping
* Timeout Rate
* Retry Rate (how often to re-ping)

## Actions

If you wish to perform an action based on a ping state, use a Trigger with the variables built into this module.

* Start Ping Interval (Ping will auto start when module is configured, but if you want to stop pinging and restart it, use this action)
* Stop Ping Interval (Variables and Feedbacks will stop working also)
* Send Custom Ping (Specify a custom host outside of the module config to send a ping to; ping results can be sent to a custom variable)

## Variables

* Host is Alive
* Max Ping Response Time
* Min Ping Response Time
* Avg Ping Response Time
* Packet Loss Percentage

## Feedbacks

* Set button to color if Host is Alive or Not Alive