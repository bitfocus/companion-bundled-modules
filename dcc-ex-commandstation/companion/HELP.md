# companion-module-dcc-ex-commandstation

A companion module for model railway control using DCC.

This module will allow you to control a [DCC-EX CommandStation](https://dcc-ex.com/index.html) using a StreamDeck. This combination makes it very easy to make a dynamic and fully customisable push-button DCC controller. It is similar in concept to web/app throttles but uses a relatively cheap hardware interface. Any button can send one or more commands to the CommandStation-EX. Buttons can be arranged in multiple pages, allowing for example one page for each loco.

## Requirements
This is the setup I use, many other combinations of hardware will work.

* CommandStation-EX (version 5) running with a network connection
  * [Follow these instructions](https://dcc-ex.com/get-started/index.html)
* Network connection between CommandStation-EX and Companion (both on same LAN)
* An instance of the DCC-EX module running in Companion
  * Enter the IP address of the Arduino running CommandStation
* StreamDeck controller connected by USB to computer running Companion

## Actions
* Track power control for main, prog, and join
* Loco throttle control with direction
* Loco rotary throttle control
* Loco direction control
* Loco decoder functions 0-68 control
* Accessory control (both types of addressing)
* Emergency stop
* Reset commmand station
* Custom command
* Set a variable for selected loco DCC address

## Feedback
Feedback can be used to update the button colours and styles. Changes made by any other throttles will be reflected in Companion.
* Track power and join status
* Loco decoder function states
* Selected loco DCC address variable 

## Variables
Variables can be used for button labels
* Command station type and version information
* Track power status
* Selected DCC address
* Loco throttle data (speed and direction) for each loco controlled

## Preset Buttons
* Main and prog power control (on/off/feedback)
* Function 0-68 control (on/off/feedback)
* Emergency stop, Direction, Rotary throttle

## Version History

### Version 1.0.0
* First Release

### Version 2.0.0
* Updated for Companion 3
* Add selected loco variable
* Add loco throttle variables
* Add power, join and selected address feedback
* Add function presets

### Version 2.1.0
* Added feedback for enabled loco functions
* Added change direction action and preset
* Added rotary throttle control action
