# CTP Systems DIO8008R/RX

This module will control the DIO8008R and DIO8008RX Dante enabled audio routers. There are 16 Dante inputs/outputs and 8 Analogue inputs/outputs. 

For more information on the product please visit these pages:

- [CTP Systems DIO product page](https://www.ctpsystems.co.uk/dante_interfaces.html)
- [Remote interface reference manual](https://www.ctpsystems.co.uk/pinouts/DIO8008R%20manual.pdf)

## Configuration
Enter the IP address of the control port of the CTP DIO device. The port can be changed from the default 10001 but it is unlikely that this is necessary.

## Actions
- **Connect** a source (input) to a destination (output)
- **Disconnect** a source (input) from a destination (output)
- **Lock** a destination so that it cannot be connected to anything else or disconnected from the current source. The lock state for each destination is held in a Companion variable.
- **Adjust input/output level** the audio input/output gain can be adjusted from -12 to +12 with 0 being unity gain
- **Status** display the current route table and audio level adjustments in the debug log
- **Change label** allows the user to change the label for a source or destination as used in Companion. Note that when the action is executed the previous label is deleted. When Companion is restarted all labels return to defaults.
- **Reset** provides the ability to reset the routing or the audio levels back to default

## Version History

### Version 1.0.3
Maintenance

### Version 1.0.2
Maintenance

### Version 1.0.1
Added ability to change source and destination labels

### Version 1.0.0
First Release