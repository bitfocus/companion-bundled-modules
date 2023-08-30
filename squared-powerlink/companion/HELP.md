## SquareD Powerlink Controller

This uses the Modbus protocol over IP to control SquareD Powerlink Controllers therefore this needs to be plugged in via ethernet and not Serial.

This module assumes that each Panel includes a Left Bus and a Right Bus. For other setups, the breaker number is also labeled with the bus numbering.

### Configuration
* Hide disconnected - Hide panels and breakers in Action choices that don't have anything plugged in to them. This is helpful when you are on site but may not be helpful when offsite or when the device is disconnected.

### Device Support

- NF3500G4
- NF3000G3
- NF2000G3

## Initial Support

- Direct Breaker Control Action - This action directly overrides all other control from inputs, schedules, or zones and turns the breaker on or off.

## Future Support

- Zone Control Action
- Controller Info
- Feedbacks

Please add any feature requests or issues to [https://github.com/bitfocus/companion-module-squared-powerlink/issues](https://github.com/bitfocus/companion-module-squared-powerlink/issues).
