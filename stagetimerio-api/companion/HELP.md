<img src="https://r2.stagetimer.io/logo/logo-full-dark.png" alt="Stagetimer Logo" width="285" height="50">

&nbsp;

# Stagetimer.io module for Companion

This module lets you remotely control [Stagetimer](https://stagetimer.io/) using Companion.

It connects using the [Stagetimer HTTP RPC API](https://stagetimer.io/docs/api-v1) and [Stagetimer Socket.io endpoint](https://stagetimer.io/docs/api-v1/#socket-io-endpoint).

For a comprehensive guide with video tutorials, see the full documentation:
**[Controlling Stagetimer via Companion for Stream Deck](https://stagetimer.io/docs/integration-with-streamdeck-companion/)**

---

## Requirements

To use this module you need:

- A Stagetimer account on a **paid plan** (*Pro* or *Premium*).
- **Room ID**: The ID of the Stagetimer room you want to control.
- **API Key**: A key that authorizes you to use the Stagetimer API. You can generate an API key on the controller page.

---

## Configuration

1. Click on the module in the Connections list to reveal the configuration pane.
2. Enter your **Room ID** and **API Key** in the form and click *Save*.
3. If the details you entered are correct, the module will connect. If the module fails to connect, please review the output in the Companion Logs tab.

---

## Presets

There are multiple presets available for the most common actions, ready to drop into your button layout.

The presets are organized into categories:

- **Transport**: Start/Stop, Previous, Next, Add/Subtract time
- **Viewer**: Time display, Wrap-up indicator, Flash, Blackout, Focus mode
- **Timer**: Reset, Start, Stop specific timers
- **Message**: Toggle, Show, Hide, Create messages

Find a complete reference with button images in the Stagetimer docs:
**[Controlling Stagetimer via Companion for Stream Deck](https://stagetimer.io/docs/integration-with-streamdeck-companion/#presets)**

---

## Actions

The following Actions are available:

**Message actions:**

- **Message: Hide**  
    Hide a message in the room
- **Message: Show**  
    Show a message in the room
- **Message: Toggle visibility**  
    Show/hide a message in the room
- **Message: Create new message**  
    Create a new message in the room

**Timer actions:**

- **Timer: Reset**  
    Reset a specific timer to original duration
- **Timer: Start**  
    Start or resume a specific timer in the room
- **Timer: Stop**  
    Stop a specific timer in the room
- **Timer: Toggle playback**  
    Toggle (start/stop) a specific timer in the room
- **Timer: Create new timer**
    Create a new timer in the room
- **Timer: Update timer**
    Update an existing timer in the room

**Transport actions:**

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
- **Transport: Reset**  
    Reset or restart the currently highlighted timer.
- **Transport: Subtract time**  
    Subtract an amount of time from the highlighted timer in the room.

**Viewer actions:**

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
- **Viewer: Enable ON AIR**
    Enable ON AIR mode in the room
- **Viewer: Disable ON AIR**
    Disable ON AIR mode in the room
- **Viewer: Toggle ON AIR**
    Toggle (enable/disable) ON AIR mode in the room

**Utility actions:**

- **Utility: Get room**  
    Get status of the room
- **Utility: Get status**  
    Get playback status of the room
- **Utility: Test auth**  
    Test connection and authentication

---

## Variables

Variables let you display live data from Stagetimer on your Stream Deck buttons.

**Room**
- `$(stagetimer:roomId)` - Room ID
- `$(stagetimer:roomName)` - Room name
- `$(stagetimer:roomTimezone)` - Room timezone ([Docs](https://stagetimer.io/docs/using-timers/#timezones))

**Playback Snapshot**  
The time display is equal to the Stagetimer output, taking [timer appearance](https://stagetimer.io/docs/using-timers/#timer-appearances) into account ([Docs](https://stagetimer.io/docs/viewer/#3-timer)). The current time remaining is always strictly a countdown.

- `$(stagetimer:timeDisplay)` - Time Display
- `$(stagetimer:timeDisplayHours)` - Time Display (hours)
- `$(stagetimer:timeDisplayMinutes)` - Time Display (minutes)
- `$(stagetimer:timeDisplaySeconds)` - Time Display (seconds)
- `$(stagetimer:currentTimerRemaining)` - Timer remaining time
- `$(stagetimer:currentTimerRemainingAsMs)` - Timer remaining time (ms)
- `$(stagetimer:currentTimerRemainingHours)` - Timer remaining time (hours)
- `$(stagetimer:currentTimerRemainingMinutes)` - Timer remaining time (minutes)
- `$(stagetimer:currentTimerRemainingSeconds)` - Timer remaining time (seconds)

**Current Timer**
- `$(stagetimer:currentTimerId)` - Timer ID
- `$(stagetimer:currentTimerName)` - Timer name
- `$(stagetimer:currentTimerSpeaker)` - Timer speaker
- `$(stagetimer:currentTimerNotes)` - Timer notes
- `$(stagetimer:currentTimerAppearance)` – Timer appearance ([Docs](https://stagetimer.io/docs/using-timers/#timer-appearances))
- `$(stagetimer:currentTimerStartTime12h)` - Hard start time (12h format, [Docs](https://stagetimer.io/docs/using-timers/#using-the-start-time-properly))
- `$(stagetimer:currentTimerStartTime24h)`- Hard start time (24h format, [Docs](https://stagetimer.io/docs/using-timers/#using-the-start-time-properly))
- `$(stagetimer:currentTimerDuration)` - Timer duration
- `$(stagetimer:currentTimerDurationAsMs)` - Timer duration (ms)
- `$(stagetimer:currentTimerLabels)` - Timer labels (comma-separated)
- `$(stagetimer:currentTimerLabel1)` - Timer label 1
- `$(stagetimer:currentTimerLabel2)` - Timer label 2
- `$(stagetimer:currentTimerLabel3)` - Timer label 3

**Next Timer**
- `$(stagetimer:nextTimerId)` - Timer ID
- `$(stagetimer:nextTimerName)` - Timer name
- `$(stagetimer:nextTimerSpeaker)` - Timer speaker
- `$(stagetimer:nextTimerNotes)` - Timer notes
- `$(stagetimer:nextTimerAppearance)` – Timer appearance ([Docs](https://stagetimer.io/docs/using-timers/#timer-appearances))
- `$(stagetimer:nextTimerStartTime12h)` - Hard start time (12h format, [Docs](https://stagetimer.io/docs/using-timers/#using-the-start-time-properly))
- `$(stagetimer:nextTimerStartTime24h)`- Hard start time (24h format, [Docs](https://stagetimer.io/docs/using-timers/#using-the-start-time-properly))
- `$(stagetimer:nextTimerDuration)` - Timer duration
- `$(stagetimer:nextTimerDurationAsMs)` - Timer duration (ms)
- `$(stagetimer:nextTimerLabels)` - Timer labels (comma-separated)
- `$(stagetimer:nextTimerLabel1)` - Timer label 1
- `$(stagetimer:nextTimerLabel2)` - Timer label 2
- `$(stagetimer:nextTimerLabel3)` - Timer label 3

---

## Feedbacks

- Blackout mode
- Flashing
- Focus mode
- ON AIR mode
- Message showing
- Playback running
- Playback stopped
- Timer is over time
- Timer is running and on time
- Timer is showing red wrap-up warning
- Timer is showing yellow wrap-up warning

---

## Using with the Desktop App

This module also works with the [Stagetimer desktop app](https://stagetimer.io/desktop-app/) for offline use.

1. In the desktop app, go to **Menu → API** to find the Room ID, API Key, and API URL.
2. Enter these details in the Companion module configuration.
3. Make sure to update the **API URL** field to match your desktop app's local address (e.g., `http://127.0.0.1:3000`).

---

## Controlling Multiple Rooms

You can control multiple Stagetimer rooms by adding multiple connections:

1. Change the label of your first connection to something distinctive (e.g., `stagetimer-1`).
2. Add another "stagetimer.io: Stagetimer API" connection.
3. Configure with a unique label (e.g., `stagetimer-2`) and the second room's credentials.

Reference variables by connection label:
- Room 1: `$(stagetimer-1:currentTimerName)`
- Room 2: `$(stagetimer-2:currentTimerName)`

---

## Troubleshooting

**Connection fails:**
- Verify your Room ID and API Key are correct
- Ensure you have an active *Pro* or *Premium* subscription
- Check the Companion Logs tab for detailed error messages

**Variables not updating:**
- The module uses Socket.io for real-time updates
- If variables are stale, try disabling and re-enabling the connection

**Need more help?**
Visit the [Stagetimer documentation](https://stagetimer.io/docs/) or contact support at support@stagetimer.io
