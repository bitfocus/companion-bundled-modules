# Aver PTZ

## Description

Use VISCA commands to control the PTZ camera. Please note that some VISCA commands will only work with specific Aver models and firmware version. Check your camera user manual or vendor website for further details.

## Configuration

**Target IP:** The IP of the device

**Target Port:** The port of the device. The default is 52381.

**VISCA over IP:** An IP packet header prepended to the VISCA command. The default is checked. To remove the IP packet header from VISCA commands uncheck the option.

UDP is the transportation protocol used of this module.

## Custom Command
For improved support a Custom Command button has been provided to allow versatility beyond the included buttons. The Custom Command button accepts VISCA commands into an input text field.

**Input type:** hexadecimal without the 0x prefix

**Formatting:** with or without spaces

Most VISCA command documents will show 8x 01 04 3F 02 01 FF. The x represents the camera number, typically 1 is used for camera 1.

For example: 81 01 04 3F 02 01 FF, will recall/load Camera 1 Preset 1 if it has been previously set.

