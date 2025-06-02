## binary-moipcontroller - HELP

This Bitfocus Companion module provides control and monitoring of SnapAV Binary MoIP (Media over IP) devices. Use it to manage routing, display on-screen messages, control audio volume, and interact with device settings such as CEC.

---

## Configuration

Before using the module, set the following:

- **Target IP**: The IP address of the SnapAV MoIP Controller. (Should have either a static IP or a DHCP Reservation on your network)
- **Audio Receiver Index**: The MoIP receiver to use for volume control in your room (default is 1).

---

## Actions

These actions can be assigned to buttons in Companion:

### Switch Input
**Description:** Route a specific transmitter to a specific receiver.  
**Options:**
- `Transmitter #`: The source transmitter.
- `Receiver #`: The target receiver.

### Disconnect Input
**Description:** Disconnect a transmitter from the specified receiver.  
**Options:**
- `Receiver Index`: The receiver to disconnect.

### Display OSD Message
**Description:** Show an on-screen display (OSD) message on the specified receiver.  
**Options:**
- `Receiver Index`: The target receiver.
- `Message`: The text to display.

### Clear OSD Message
**Description:** Clear the current OSD message from the specified receiver.  
**Options:**
- `Receiver Index`: The target receiver.

### Reboot Controller
**Description:** Send a reboot command to the MoIP controller.  
**Options:** None

### Send CEC
**Description:** Use CEC to turn on or off for a specific node's receiver(TV).  
**Options:**
- `Receiver Index`: The node to control.
- `Mode`: On or Off

### Volume Up (+5)
**Description:** Increase volume by 5% on the configured audio receiver.  
Uses the receiver index from the module configuration.

### Volume Down (-5)
**Description:** Decrease volume by 5% on the configured audio receiver.  
Uses the receiver index from the module configuration.

---

## Feedbacks

Feedbacks dynamically change button appearance based on the controller’s state. These can help visualize routing and status in real time.

### Example: Receiver is Set to a Specific Transmitter
**Name:** Receiver is Routed to Transmitter  
**Description:** Changes button color when a receiver is currently routed to a given transmitter.  
**Options:**
- `Receiver Index`
- `Transmitter Index`
- `Foreground Color` and `Background Color`: Set the button colors when the condition is true.

This feedback is useful for creating toggle or routing dashboards where button states reflect live system configuration.

---

## Variables

This module includes the following internal variable:

- `volume_level`: Reflects the current volume level (0–100) for the configured audio receiver.


