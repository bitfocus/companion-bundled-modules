# Sony Professional Video Monitor

The module implements SDCP control for the following Sony Professional monitors. 

- BVM-E171 / BVM-E251
- BVM-X300
- PVM-X550
- PVM-A250 / PVM-A170
- LMD-A240 / LMD-A220 / LMD-A170

## Configuration
Only 'TCP Single' connections are currently supported. To control a monitor it must have an IP address and a Monitor Unit ID set.

The following settings are required

- **Device IP** IP address set in the monitor
- **Device Port** Sony specify this as 53484 but it may be modified here
- **Monitor ID** This must match the monitor unit ID
- **Type** Specify the type of monitor to be controlled so that only applicable actions are shown

## Version 1.0.0
First Release