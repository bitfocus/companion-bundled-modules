# KISSBOX GPIO Control

Control KISSBOX IO3CC and IO8CC GPIO devices with digital/analog inputs and outputs.

## Quick Setup

### 1. Configure KISSBOX Editor Software
1. Open the **KissBox Editor** software
2. Go to the Network/Return Data settings
3. Enter your **server IP address** (Bitfocus Buttons or Companion)
4. Enter port **10002**
5. Save settings to the KISSBOX device

### 2. Configure Module
- **Device IP Address**: Your KISSBOX IP address
- **Device Port**: `10001` (default)
- **UDP Listen Port**: `10002` (must match what you set in KISSBOX)
- **Device Type**: IO3CC (3 slots) or IO8CC (8 slots)

### 3. Card Configuration
Select which cards are installed in each slot:
- **DI8DC**: 8 Digital Inputs
- **DO8SK**: 8 Digital Outputs (Relay)
- **DO4PR**: 4 Digital Outputs (Relay)
- **AI8RA**: 8 Analog Inputs (0-255)
- **AO8DA**: 8 Analog Outputs (0-255)
- **Empty Slot**: No card installed

**Important**: Only configure cards that are actually installed. Actions and buttons are generated based on your configuration.

### 4. Enable Real-Time Input Updates (Optional but Recommended)

For input cards to update automatically when they change:

1. Open the **KissBox Editor** software
2. Click the icon for each **input card** slot
3. **UNCHECK** "Disable time-out"
4. Set whatever interval
5. Save to the device

**Note**: For output cards, **CHECK** "Disable time-out" to prevent unwanted timeouts.

---

## Using the Module

### Actions
Control your outputs:
- **Digital Outputs**: Set ON/OFF, Toggle, Pulse
- **Analog Outputs**: Set Value (0-255) or Percentage (0-100%)

### Feedbacks
Buttons change color based on input/output status automatically.

### Variables
Display live values on buttons:
- `$(kissbox-gpio:slot1_ch1_state)` - Slot 1, port 1 state (boolean: true/false)
- `$(kissbox-gpio:slot1_ch1_value)` - Slot 1, port 1 value (number)
- `$(kissbox-gpio:connection_status)` - Connection status

### Presets
Pre-built buttons for each configured card - use as starting points in Bitfocus Buttons & Companion!

## Troubleshooting

### Status shows "Connection Failure"
- Check IP address is correct
- Verify KISSBOX is powered on and on the network
- Check firewall isn't blocking UDP traffic
- Check that you have set up the return UDP port
- Can you ping the device?

### Enable Verbose Logging
Turn on in module settings to see detailed network traffic for debugging.

---

**Support**: https://github.com/bitfocus/companion-module-kissbox-gpio
