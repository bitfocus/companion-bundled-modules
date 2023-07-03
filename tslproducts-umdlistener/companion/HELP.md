# TSL Products UMD Listener
This module will allow you to listen for incoming TSL UMD data from your video switcher and set tally states on your Companion Buttons.

## Configuration
* Enter the listening port that Companion should use to listen for the incoming data.
* Select whether to listen via TCP or UDP.
* Select the Protocol Version to use

## Actions

This module inherently has no actions. If you wish to perform an action based on a tally state change, use a Trigger.

## Variables

* Variable for each Address with UMD Label for value (address_label)
* Variable for each Address and Tally State (On/Off) (address_1, address_2, address_3, address_4)

## Feedbacks

* Set button to color if address `x` Tally `y` (1-4) is this state (On/Off)

## Presets

* Tally State Green/Red with Tally Label from Variable

## Sponsored By
This module's availability to Companion was sponsored in part by Alex Hasker <alex@lexaudiovisual.com.au>.