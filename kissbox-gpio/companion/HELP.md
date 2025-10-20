# KISSBOX IO3CC / IO8CC GPIO Control

This module provides comprehensive control for KISSBOX IO3CC and IO8CC GPIO cardcage devices.

## Configuration

### Device Settings
- **Device IP Address**: IP address of your KISSBOX device
- **Device Port**: Network port to send commands to (default: 10001)
- **UDP Listen Port**: Port to listen on for incoming UDP responses
  - Set to **0** for automatic (system assigns random available port)
  - Set to specific port (e.g., **9812**) if KISSBOX is configured to send to that port
  - Note: With automatic port, the device will reply to the source port of outgoing packets
- **Device Type**: Select IO3CC (3 slots) or IO8CC (8 slots)

### Automatic Status Updates

The module automatically:
- **Polls all slots every 5 seconds** to refresh status
- **Receives real-time updates** from the KISSBOX when configured (see Setup Guide below)

### Verbose Logging
- Enable detailed logging for troubleshooting connection and protocol issues

## Device Overview

KISSBOX IO3CC and IO8CC are modular GPIO cardcage systems:
- **IO3CC**: 3 card slots
- **IO8CC**: 8 card slots
- Each card provides up to 8 channels
- Supports both digital (switching) and analog cards

### Addressing
- **Slots**: Numbered 0-2 (IO3CC) or 0-7 (IO8CC) - displayed as Slot 1-3 or 1-8 in the UI
- **Channels**: Numbered 0-7 per card - displayed as Channel 1-8 in the UI

## Actions

### Digital Output Control
- **Set Digital Channel**: Turn a digital output ON or OFF
- **Toggle Digital Channel**: Toggle between ON and OFF
- **Pulse Channel**: Turn ON for a duration, then turn OFF

### Analog Output Control
- **Set Analog Channel**: Set an analog output value (0-255)
- **Set Channel Percentage**: Set an analog output using percentage (0-100%)

### Bulk Operations
- **Set All Channels in Slot**: Set all 8 channels to specific values
- **Set All Channels OFF**: Turn off all channels in a slot
- **Set All Channels ON**: Turn on all channels in a slot

### Status Reading
- **Read Single Channel**: Request status of a specific channel
- **Read All Channels in Slot**: Request status of all channels in a slot

## Feedbacks

Feedbacks allow buttons to change appearance based on channel status:

### Individual Channel
- **Channel is ON**: Activates when channel value > 0
- **Channel is OFF**: Activates when channel value = 0
- **Channel Value Equals**: Activates when channel equals a specific value
- **Channel Value Greater Than**: Activates when channel exceeds a threshold
- **Channel Value Less Than**: Activates when channel is below a threshold
- **Channel Value In Range**: Activates when channel is within a range

### Slot Status
- **Any Channel ON in Slot**: At least one channel is active
- **All Channels ON in Slot**: All channels are active
- **All Channels OFF in Slot**: No channels are active

## Variables

Variables display real-time channel status as text:

### Device Information
- `$(kissbox-gpio:device_type)` - Device type (IO3CC or IO8CC)
- `$(kissbox-gpio:device_host)` - Device IP address
- `$(kissbox-gpio:device_port)` - Device port

### Individual Channels
For each slot (1-8) and channel (1-8):
- `$(kissbox-gpio:slot_X_ch_Y_value)` - Raw value (0-255)
- `$(kissbox-gpio:slot_X_ch_Y_state)` - State (ON/OFF)
- `$(kissbox-gpio:slot_X_ch_Y_percent)` - Percentage (0-100%)

Example: `$(kissbox-gpio:slot_1_ch_1_value)` for Slot 1, Channel 1

### Slot Summary
For each slot (1-8):
- `$(kissbox-gpio:slot_X_active_count)` - Number of active channels
- `$(kissbox-gpio:slot_X_all_values)` - All channel values (comma-separated)
- `$(kissbox-gpio:slot_X_all_states)` - All channel states (8-bit binary)

Example: `$(kissbox-gpio:slot_1_active_count)` for Slot 1

### Global Summary
- `$(kissbox-gpio:total_active_channels)` - Total active channels across all slots

## Presets

Pre-configured buttons for common use cases:

### Digital Channel Control
- Toggle buttons with ON/OFF feedback
- Status display buttons showing current state

### Analog Channel Control
- Value display buttons showing raw value and percentage
- Color-coded feedback based on value ranges
- Quick-set buttons for 25%, 50%, 75%, 100%

### Slot Controls
- All OFF button
- All ON button (digital or analog)
- Slot status overview

### Pulse Actions
- Quick pulse buttons (1 second default)
- Configurable pulse duration

## Setup Guide

### Configuring Automatic Status Updates

You can enable automatic status updates in the KISSBOX device configuration for real-time feedback.

### Configuring Timeout Settings per Card

The "Disable time-out" setting in the KISSBOX web interface controls automatic status updates for each card:

#### For Input Cards
- **Recommended**: UNCHECK "Disable time-out" (timeout enabled)
- Set an interval in milliseconds (e.g., 10000 for 10 seconds)
- Enables automatic status updates when inputs change
- Companion buttons will reflect input status changes in real-time
- Essential for monitoring external signals and switches

#### For Output Cards
- **Recommended**: CHECK "Disable time-out" (timeout disabled)
- Output cards don't need to send automatic status updates
- Companion already knows the output state since it controls the outputs
- Reduces unnecessary network traffic

#### Configuration Steps
1. Open the KISSBOX web interface in your browser
2. Click on the card icon for the specific slot you want to configure
3. For **input cards**: UNCHECK "Disable time-out" and enter a heartbeat interval (e.g., 10000)
4. For **output cards**: CHECK "Disable time-out"
5. Save the card configuration

This configuration ensures optimal performance and real-time feedback for your GPIO setup.

## Tips

### For Digital Cards
- Use "Set Digital Channel" actions with ON/OFF values
- Use "Toggle Digital Channel" for switch-like behavior
- Use "Pulse Channel" for momentary triggers

### For Analog Cards
- Use "Set Channel Percentage" for intuitive 0-100% control
- Use "Set Analog Channel" for precise 0-255 control
- Monitor values using analog presets with color-coded feedback

### Best Practices
- Enable verbose logging during initial setup to troubleshoot
- Use presets as starting points and customize as needed
- Group related channels on the same Companion page
- Configure timeout settings appropriately for input vs output cards

## Troubleshooting

### Connection Status

The module shows accurate connection status:
- **Connecting**: Waiting for first response from device
- **OK**: Device is responding (only shown after receiving actual data)
- **Connection Failure**: No response after 10 seconds - check IP address and network
- **Disconnected**: Device stopped responding (no data for 30+ seconds)

### Connection Issues
- **Status shows "Connection Failure"**: Verify device IP address and port are correct
- **Status stuck on "Connecting"**: Device not responding - check network connectivity
- Enable **Verbose Logging** to see all UDP traffic and diagnose issues
- Check firewall rules - UDP traffic must be allowed on configured ports
- Verify KISSBOX is powered on and accessible on the network
- **Avoid port conflicts**: Don't set UDP Listen Port to same value as Device Port

### Status Not Updating in Real-Time
- Configure automatic updates in KISSBOX web interface:
  - **INPUT cards**: Uncheck "Disable time-out" and set interval (e.g., 1000ms)
  - **OUTPUT cards**: Check "Disable time-out" to prevent automatic timeouts
- Verify return IP address is set to your Companion server in KISSBOX settings
- Module polls every 5 seconds automatically as fallback
- Use "Read All Channels" action to manually refresh immediately
- Enable **Verbose Logging** to confirm packets are being received

### Values Not Changing
- Verify correct slot and channel numbers (0-based in protocol, 1-based in UI)
- Check card type (digital vs analog) - use appropriate actions
- Enable **Verbose Logging** to see sent commands and received responses
- Ensure card is properly seated in slot
- Check if output cards have "Disable time-out" checked (prevents unwanted auto-off)

## Support

For issues or questions:
- GitHub: https://github.com/bitfocus/companion-module-kissbox-gpio/issues
- KISSBOX Documentation: https://www.kiss-box.com

