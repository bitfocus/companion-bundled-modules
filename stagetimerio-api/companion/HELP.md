![Stagetimer.io logo](https://stagetimer.io/assets/logo-full-dark.svg)

# Stagetimer.io module for Companion

This module lets you remotely control [Stagetimer](https://stagetimer.io/) using Companion.

It connects using the [Stagetimer HTTP RPC API](https://stagetimer.io/docs/api-v1) and [Stagetimer Socket.io endpoint](https://stagetimer.io/docs/api-v1/#socket-io-endpoint).

## Requirements

To use this module you need:

- A Stagetimer account on a **paid plan** (*Pro* or *Premium*).
- **Room ID**: The ID of the Stagetimer room you want to control.
- **API Key**: A key that authorizes you to use the Stagetimer API. You can generate an API key on the controller page.

## Configuration

1. Click on the module in the Connections list to reveal the configuration pane.
2. Enter your **Room ID** and **API Key** in the form and click *Save*.
3. If the details you entered are correct, the module will connect. If the module fails to connect, please review the output in the Companion Logs tab.

## Presets

There are multiple presets available for the most common actions, ready to drop into  your button layout.

## Actions

The following Actions are available:

- **Message: Hide**  
    Hide a message in the room
- **Message: Show**  
    Show a message in the room
- **Message: Toggle visibility**  
    Show/hide a message in the room
- **Timer: Reset**  
    Reset a specific timer to original duration
- **Timer: Start**  
    Start or resume a specific timer in the room
- **Timer: Stop**  
    Stop a specific timer in the room
- **Timer: Toggle playback**  
    Toggle (start/stop) a specific timer in the room
- **Transport: Add time**  
    Add an amount of time to the highlighted timer in the room.
- **Transport: Next**  
    Highlight the next timer in the list
- **Transport: Previous**  
    Reset the highlighted timer in the room if it is running. If the highlighted timer is not running, highlight the previous timer in the list. Optionally, you can automatically start the previous timer once it's highlighted.
- **Transport: Start**  
    Start or resume the highlighted timer in the room
- **Transport: Start/stop**  
    Start/stop the highlighted timer in the room
- **Transport: Stop**  
    Stop the highlighted timer in the room
- **Transport: Subtract time**  
    Subtract an amount of time from the highlighted timer in the room.
- **Utility: Get room**  
    Get status of the room
- **Utility: Get status**  
    Get playback status of the room
- **Utility: Test auth**  
    Test connection and authentication
- **Viewer: Disable blackout mode**  
    Disable blackout mode in the room
- **Viewer: Disable focus mode**  
    Disable focus mode in the room
- **Viewer: Enable blackout mode**  
    Enable blackout mode in the room
- **Viewer: Enable focus mode**  
    Enable focus mode in the room
- **Viewer: Flash the screen**  
    Flashes the screen in the room. Can be used to grab the attention of speakers.
- **Viewer: Stop flashing**  
    Stops any flashing timers and message on the screen.
- **Viewer: Toggle blackout mode**  
    Toggle (enable/disable) blackout mode in the room
- **Viewer: Toggle focus mode**  
    Toggle (enable/disable) focus mode in the room

## Variables

- `$(stagetimer:currentTimerDuration)` - Timer duration
- `$(stagetimer:currentTimerDurationAsMs)` - Timer duration (ms)
- `$(stagetimer:currentTimerId)` - Timer ID
- `$(stagetimer:currentTimerName)` - Timer name
- `$(stagetimer:currentTimerNotes)` - Timer notes
- `$(stagetimer:currentTimerRemaining)` - Timer remaining time
- `$(stagetimer:currentTimerRemainingAsMs)` - Timer remaining time (ms)
- `$(stagetimer:currentTimerSpeaker)` - Timer speaker
- `$(stagetimer:roomId)` - Room ID
- `$(stagetimer:roomName)` - Room name

## Feedbacks

- Blackout mode
- Flashing
- Focus mode
- Message showing
- Playback running
- Playback stopped
- Timer is over time
- Timer is running and on time
- Timer is showing red wrap-up warning
- Timer is showing yellow wrap-up warning
