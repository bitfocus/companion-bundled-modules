# Companion Module: Highpass acCompaniment

This module connects Bitfocus Companion to the acCompaniment Electron application.

## Configuration

- **acCompaniment IP Address**: The IP address of the machine running the acCompaniment app (default: `127.0.0.1`).
- **acCompaniment Port**: The port number the acCompaniment app is listening on (default: `8080`).
- **Attempt Reconnect**: If checked, the module will attempt to reconnect if the connection is lost.

## Features

- Dynamically creates actions and presets for each sound cue configured in the Soundboard app.
- Provides actions to play and stop individual cues.
- Provides an action to stop all playing audio.
- (Planned) Feedbacks to show the playing state of cues.

## Setup

1.  Run the acCompaniment Electron application.
2.  In Bitfocus Companion, add a new instance of the "Highpass acCompaniment" module.
3.  Configure the IP address and port to match your acCompaniment application settings.
