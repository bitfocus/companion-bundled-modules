# Riedel RSP-1232HL Companion Module

This module allows you to control Riedel Smart Panels from Bitfocus Companion.

## Requirements

**Minimum Firmware Version**: 2.0.0 or higher

This module requires the panel to be running firmware version 2.0.0 or later. Earlier firmware versions may not support the WebSocket API used by this module.

## Configuration

### Connection Settings

- **Host**: IP address of the Riedel panel (e.g., 192.168.0.1)
- **Port**: WebSocket port (default: 80)

## Supported Actions

### Network Configuration

- **Set IP Address**: Change the IP address of a network interface
  - Interface: Config1, Media1, or Media2
  - IP Address: New IP address
  - Subnet Mask: Network mask
  - Gateway: Default gateway
  - DHCP: Enable/disable DHCP

### Device Control

- **Reboot Device**: Restart the panel
- **Fetch Device Info**: Get device information
- **Fetch Network Status**: Get current network status

## Feedbacks

- **Connection Status**: Shows if the panel is connected
- **Network Interface Status**: Displays the current IP of an interface

## Variables

- `connection_status`: Connection state (Connected/Disconnected)
- `media1_ip`: Current IP address of Media1 interface
- `config1_ip`: Current IP address of Config1 interface
- `media2_ip`: Current IP address of Media2 interface
- `device_name`: Device name/model
- `firmware_version`: Current firmware version

## Network Interfaces

The panel has three network interfaces:

- **Media1**: Main network interface (typically for control/media)
- **Config1**: Configuration network interface
- **Media2**: Secondary media network interface

## Troubleshooting

### Cannot Connect

1. Verify the IP address is correct
2. Ensure the panel is powered on and accessible on the network
3. Check that no firewall is blocking WebSocket connections
4. Try pinging the device first

### Changes Don't Take Effect

- Some settings may require a device reboot
- Wait a few seconds after sending commands
- Check the connection status in Companion

## Support

For issues or feature requests, please visit:
https://github.com/maxajbarlow/companion-module-riedel-rsp1232hl/issues
