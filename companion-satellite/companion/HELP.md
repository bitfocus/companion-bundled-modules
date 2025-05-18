# Companion Satellite Module

This module allows you to connect one Companion instance to another using the Companion Satellite API. The connected Companion instance will appear as a satellite device.

## Configuration

- **Target IP**: The IP address of the Companion instance to connect to
- **Target Port**: The port number for the satellite API (default is 16622)
- **Number of Columns**: The number of columns to display (default is 8)
- **Number of Rows**: The number of rows to display (default is 4)

## Actions

- **Button Event**: Send button events to the remote Companion
  - Choose row and column to target
  - Event types: Press, Release, Rotate Left, Rotate Right

## Feedbacks

- **Button Image**: Displays the image from the remote Companion button
  - Configure row and column to display

## Presets

Presets are automatically created for each button in the grid. Each preset:

- Displays the button image from the remote Companion
- Sends appropriate press/release actions

## Variables

- **$(companion-satellite:connection_state)**: Current connection state (Connected or Disconnected)
- **$(companion-satellite:companion_version)**: Version of the connected Companion instance
- **$(companion-satellite:companion_api_version)**: API version of the connected Companion instance
- **$(companion-satellite:target_address)**: Address of the target Companion instance

## Usage

1. Configure the module with the IP address and port of the target Companion instance
2. The module will automatically connect and establish itself as a satellite device
3. Add presets to your buttons to mirror and control the remote Companion instance
4. Use actions to send specific button events to the remote Companion
