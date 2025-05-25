# Audinate Dante Controller

This module controls Dante audio devices and routing in simple local networks.
It's based on Chris Ritsen's [Network audio controller](https://github.com/chris-ritsen/network-audio-controller) ( Python project)

## Config

* Select network interface 
* Set poll interval time to request info from network 
* Set response time before considering a device offline

## Actions

* Make Crosspoint
* Make Crosspoint (with dynamics drop-down choices)
* Clear Crosspoint
* Clear Crosspoint (with dynamics drop-down choices)

## Variables
### Global
* Device Names

### Per device :
* Rx Channel count
* Tx Channel count
* Rx Channel names
* Tx Channel names
* Sample Rate
* Latency

## Feedbacks

* Change background if crosspoint is active
