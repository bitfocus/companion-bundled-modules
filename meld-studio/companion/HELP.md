# Meld Studio

This module allows you to control Meld Studio using its Qt WebChannel API.

## Setup

### Meld Studio Configuration

1. **Enable WebChannel in Meld Studio**
   - Open Meld Studio
   - Go to Settings/Preferences
   - Enable Qt WebChannel support
   - Note the WebChannel port (default: 13376)

### Companion Configuration

1. **Add the Module**
   - In Companion, click "Add connection"
   - Select "Meld Studio" from the list

2. **Configure Connection**
   - **Host/IP**: Enter the IP address of the machine running Meld Studio
     - Use `127.0.0.1` if Companion and Meld Studio are on the same machine
     - Use the actual IP address if they're on different machines
   - **Port**: Enter the WebChannel port (default: 13376)

3. **Test Connection**
   - Save the configuration
   - The status should show "OK" if the connection is successful
   - If connection fails, verify that:
     - Meld Studio is running
     - WebChannel is enabled in Meld Studio
     - The IP address and port are correct
     - No firewall is blocking the connection

## Features

### Scene Control

- **Scene Switching**: Control which scene is active in Meld Studio
- **Scene Feedback**: Buttons highlight when their corresponding scene is active
- **Auto-discovery**: Available scenes are automatically detected and can be assigned to buttons

### Streaming Control

- **Toggle Streaming**: Start/stop streaming directly from Companion
- **Stream Status**: Visual feedback shows current streaming state

### Recording Control

- **Toggle Recording**: Start/stop recording directly from Companion
- **Recording Status**: Visual feedback shows current recording state

### Presets

- **Scene Presets**: Drag-and-drop buttons are automatically created for each discovered scene
- **Control Presets**: Pre-configured streaming and recording toggle buttons

## Usage

1. **Scene Control**
   - Use the Actions dropdown to assign scenes to buttons
   - Or drag scene presets from the Presets tab directly to your Stream Deck
   - Active scenes will be highlighted in red (configurable)

2. **Streaming/Recording**
   - Use "Toggle Streaming" and "Toggle Recording" actions
   - Or use the pre-configured presets for quick setup

## Troubleshooting

### Connection Issues

- **"Connection Failed"**: Check that Meld Studio is running and WebChannel is enabled
- **"Timeout"**: Verify IP address and port settings
- **"WebSocket Error"**: Check firewall settings and network connectivity

### Scene Issues

- **No Scenes Appear**: Ensure Meld Studio has scenes configured
- **Scenes Don't Update**: Try disconnecting and reconnecting the module
- **Scene Names Truncated**: Long scene names may be shortened for display

### General Issues

- **Module Won't Load**: Check Companion logs for detailed error messages
- **Buttons Don't Work**: Verify the connection status is "OK"
- **Feedback Not Working**: Check that scene feedback is properly configured

## Advanced Configuration

### Network Setup

- **Local Setup**: Use `127.0.0.1:13376` (default)
- **Remote Setup**: Use the actual IP address of the Meld Studio machine
- **Multiple Instances**: Each Meld Studio instance can use a different port

### Firewall Configuration

- **Windows**: Allow Companion through Windows Firewall
- **Network**: Ensure port 13376 (or custom port) is not blocked
- **VPN/Remote**: May require additional network configuration

## Support

For issues and feature requests:

- Check the [Companion Module Issues](https://github.com/bitfocus/companion-module-meld-studio/issues)
- Visit the [Companion Community](https://github.com/bitfocus/companion)
- Consult the [Meld Studio Documentation](https://meldstudio.com/docs)
