# companion-module-dcc-ex-commandstation

A bitfocus companion module for model railway control using DCC.

This module will allow you to control a [DCC++EX CommandStation-EX](https://dcc-ex.com/index.html) using a StreamDeck. This combination makes it very easy to make a dynamic and fully customisable push-button DCC controller. It is similar in concept to web/app throttles but uses a relatively cheap hardware interface. Any button can send one or more commands to the CommandStation-EX. Buttons can be arranged in multiple pages, allowing for example one page for each loco.

## Requirements
This is the setup I use, many other combinations of hardware will work.

* CommandStation-EX running on Arduino Mega with motor shield and WiFi
  * [Follow these instuctions](https://dcc-ex.com/get-started/index.html)
* Track power and external PSU wired to motor shield
* Network connection between CommandStation-EX and Companion (both on same LAN)
* An instance of the DCC++EX module running in Companion
  * Enter the IP address of the Arduino running CommandStation
* StreamDeck controller connected by USB to computer running Companion

## Version History

### Version 1.0.0
First Release