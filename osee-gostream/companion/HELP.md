## GoStreamDeck

Should work with all models of GoStreamDeck.

Firmware versions 7.5.2 and later are known to work, other versions may experience problems.

Devices must be controlled over a network, USB control is NOT supported.

## Common issues

### Macros not showing as running

Companion is not always able to detect that a macro has been run. This happens when the macro has zero length.
You can resolve this by giving the macro a pause/sleep of 1 frame.

### Diagnosing connection issues

The most common cause of Companion not being able to connect to your GoStreamDeck is misconfiguration of the networking. Due to how the discovery protocol works, it will see GoStreamDeck that you may not be able to connect to.  
A good way to rule out Companion as being at fault, is to disconnect the USB to your GoStreamDeck, and use the GoStreamDeck software. If that is unable to connect then it is most likely a network configuration issue.

To be able to connect to your GoStreamDeck, both the GoStreamDeck and your Companion machine must be connected to the same network (ideally cabled, but wifi should work). They must also be of the same IP address range. For example, your network could be `192.168.0.x`, where each machine has a different number instead of the `x`. In most cases the subnet mask should be 255.255.255.0, unless your network is setup to use something else.
