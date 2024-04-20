# Module for local control of Raspberry Pi GPIO #

## About the module ##
This module is intended to run on CompanionPi, since it can only control GPIO pins locally. For such type of control it
utilizes *onoff* module for node.js.

## Actions ##
The module provides following actions:
- ***Set pin LOW (eg. 0)*** - this action sets the logic value of the pin to 0.
- ***Set pin HIGH (eg. 1)*** - this action sets the logic value of the pin to 1.

## Feedbacks ##
The module also provides feedback for logic state of configured pins. It can read state of both types of pins - these configured as inputs and also these configured as outputs.

## Variables ##
The module provides user accessible variables reflecting logic state of all configured pins. When apllying config, their list will occur on the bottom of module config window.

## Presets ##
The module utilizes its actions and feedbacks in presets.
The list of provided presets:
- ***Set GPIO Pin HIGH*** - this preset consists of *Set pin HIGH* action and state feedback for the pin.
- ***Set GPIO Pin LOW*** - this preset consists of *Set pin LOW* action and state feedback for the pin.
- ***GPIO pin pushbutton*** - this preset incorporates *Set pin HIGH* action as *key down action* and *Set pin LOW* action as *key up/release action*, it also involves pin state feedback.
- ***GPIO Pin LATCH button*** - this preset has the same features as the previous one, but it also configures the button to *latch* mode. That way *key down action* executes on the first push and *key up/release asction* executes on the second push.

## Configuration ##
The module configuration is pretty straightforward. 
There are 27 GPIO pins on newer Raspberry Pi, so for each GPIO pin there are these configuration options:
- ***Use GPIO pin*** - the most important checkbox for every pin - has to be checked when the pin is used, without checking this checkbox, the pin is not configured
- ***Set as IN/OUT*** - this option sets the pin as *input* or *output*
    - ***OUT*** - when the pin is set as *output*, all the remaining config fields should be left in default state.
- ***Trigger type*** - this option sets the interrupt to pin configured as *input*. The interrupt allows the module to refresh all feedbacks and state variables right at the moment when the signal on the input pin changes.
There are following options:
    - ***NONE*** - the interrupt is not enabled for pin
    - ***RISING*** - this sets the interrupt to be triggered when the input signal logic value changes from *LOW* to *HIGH* (eg. *0* to *1*)
    - ***FALLING*** - this sets the interrupt to be triggered when the input signal logic value changes from *HIGH* to *LOW* (eg. *1* to *0*)
    - ***RISING+FALLING*** - this sets the interrupt to be triggered on both events mentioned in previous two options
- ***Enable debouncing*** - this checkbox enables debouncing algorithm on previosly set interrupt. Debouncing is needed especially when working with push buttons and similar devices, because these parts are not mechanically perfect and when pushed or released, they generate volatile signal, "randomly" changing from *0* to *1*, and we don't want the module to register all the changes but only one.
- ***Debounce time*** - this option allows user to set timeout for debounce algorithm
- ***Invert values on this pin*** - this option inverts the logic values on the input pin, when the input signal is *LOW* (eg. *0*) the value read from pin is *HIGH* (eg. *1* and when the input signal is *HIGH* (eg. *1*) the value read from pin is *LOW* (eg. *0*)

The module also reads the current state of all configured pins regularly with adjustable interval. This interval is set on top od config window - option ***GPIO Pins state refresh interval (ms)***