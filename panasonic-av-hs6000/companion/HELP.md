# Panasonic - AV-HS6000

Companion module to control Panasonic AV-HS6000 video mixer via TCP/IP connection.

## Setup

1. **Network Configuration**
   - Connect your Panasonic AV-HS6000 to the same network as your Companion system
   - Note the IP address of your AV-HS6000 mixer
   - Ensure the mixer's external control interface is enabled

2. **Module Configuration**
   - **Mixer IP**: Enter the IP address of your AV-HS6000 mixer (default: 192.168.0.10)
   - **Mixer Port**: TCP port for communication (default: 62000)
   - **Auto Refresh**: Enable automatic status refresh from mixer
   - **Refresh Timing**: Interval in seconds for bus status refresh (0-30 seconds)
   - **Source Name Refresh**: Interval in seconds for source name updates (10-120 seconds)
   - **Timeout**: Connection timeout in seconds (5-500 seconds)

## Features

### Bus Control
- **ME1**: Program, Preview, and 4 Keyers (Fill/Self)
- **ME2**: Program, Preview, and 4 Keyers (Fill/Self)
- **DSK**: 3 Downstream Keyers (Fill/Self)
- **AUX**: Multiple auxiliary outputs

### Available Actions
- **Set Bus Source**: Assign input sources to various mixer buses
- **Bus Operations**: Control crosspoint assignments for all mixer buses

### Feedbacks
- **Bus Status**: Visual feedback showing current source assignments
- **Connection Status**: Indicates if the module is connected to the mixer

### Variables
- Dynamic variables for current bus assignments and mixer status
- Source names (when available from mixer)

## Supported Buses

### ME1 (Mix Effects 1)
- PGM (Program)
- PRW (Preview) 
- KEY1-F/S through KEY4-F/S (Keyer Fill/Self)
- UTIL1/UTIL2 (Utility buses)

### ME2 (Mix Effects 2)
- PGM (Program)
- PRW (Preview)
- KEY1-F/S through KEY4-F/S (Keyer Fill/Self)
- UTIL1/UTIL2 (Utility buses)

### DSK (Downstream Keyers)
- DSK 1-F/S through DSK 3-F/S (Fill/Self)

### AUX Outputs
- AUX 1 through AUX 24

## Troubleshooting

### Connection Issues
1. **Check Network Connection**
   - Verify the mixer IP address is correct
   - Ensure both devices are on the same network
   - Check that port 62000 is not blocked by firewalls

2. **Mixer Configuration**
   - Verify external control is enabled on the AV-HS6000
   - Check the mixer's network settings
   - Ensure the correct protocol is selected

3. **Module Status**
   - Red status: Connection failed - check IP/port settings
   - Yellow status: Connecting - wait for connection to establish
   - Green status: Connected and operational

### Performance Tips
- Set refresh timing to 0 to disable auto-refresh if not needed
- Use longer refresh intervals for better performance with multiple modules
- Monitor network traffic if experiencing delays

## Protocol Information

This module implements the Panasonic AV-HS6000 external interface protocol over TCP/IP. For detailed protocol specifications, refer to the [official Panasonic documentation](https://eww.pass.panasonic.co.jp/pro-av/support/dload/hs6000_3ext/AV-HS6000%20external%20IF_protocol-E.pdf).

## Support

For issues with this module:
1. Check the troubleshooting steps above
2. Verify your mixer firmware version is compatible
3. Report issues on the [GitHub repository](https://github.com/bitfocus/companion-module-panasonic-av-hs6000/issues)