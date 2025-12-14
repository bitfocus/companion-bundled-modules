# Imagine Communications Logical Router Control

This module controls Imagine Communications (f/k/a Harris) video routers via Logical Router Control (LRC) protocol.

## Compatibility

This module is based on version 1.1 of the LRC protocol. Not all features are available in prior versions of the protocol.

All testing was performed against a Platinum IP3. Any router supporting the LRC protocol should be compatible, but YMMV.

## Setup

1. In the Companion web UI, add a new connection for "Imagine Communications Logical Router Control"
2. Configure the connection as follows:
   1. **Label:** Something useful to identify the connection elsewhere in Companion
   2. **IP Address:** IP address of the LRC server (usually the video router itself)
   3. **Port:** Default 52116, shouldn't need changing
   4. **User ID:** Numeric identifier for any commands requiring this parameter (e.g. `LOCK`, `PROTECT`, `XBUFFER`)
   5. **Salvo Count:** Number of salvos to query from the router (range from 0 to n) since the protocol doesn't provide a way to query them all programmatically
   6. **Allow Empty Crosspoint Destination:** Safeguard to prevent routing a single source to every destination in a single crosspoint command
   7. **Crosspoint Format:** Sets sources/destinations used in crosspoint commands to be sent as either numbers (default) or names.
      If you use a variable in the respective fields, you should set this to the same format as your variable values as the values will be sent unmodified.

## Actions

All commands available in the LRC protocol should be available here.
Please see _Protocol Documentation_ at the bottom of this document for a link to full documentation.

### Crosspoint Take (XPOINT)

Request a take of a logical crosspoint.

One source and many destinations can be specified in each action.
Optionally, channels (levels) may be specified for both source and desination.
If multiple destinations are specified, the same channel (level) will be used for all destinations.

### Crosspoint Buffer Control (XBUFFER)

Control crosspoint buffers (execute/clear)

### Crosspoint Disconnect (XDISCONNECT)

Disconnect logical crosspoints

### Crosspoint Preset (XPRESET)

Preset a crosspoint command

### Salvo Execution (XSALVO)

Request execution of a crosspoint salvo.

One salvo can be specified in each action.
Optionally, one or more flags may be specified to adjust behavior of the request.

Some implementations of LRC (e.g. on a Imagine Platinum MX as reported in #9) seem to require inclusion of a user ID to properly execute XSALVO commands.
If you are attempting to use XSALVO commands and they're not working, you may need to enable the `Send User ID with XSALVO Commands` configuration option.

### Destination Lock (LOCK)

Secure a destination from further crosspoint status changes by any User ID including the lock owner.
The command will be sent with the User ID defined in the instance settings.

### Destination Protect (PROTECT)

Secure a destination from further crosspoint changes requested by anyone except the lock owner (user).
The command will be sent with the User ID defined in the instance settings.

### Protocol Query (PROTOCOL)

Information (name, version) about the LRC protocol on a given router may be queried using this action.
Primarily used for troubleshooting. Output will be logged to "debug" in the Companion web UI.

### Destination Query (DEST)

Information (total count, ID, name) about the destinations on a given router may be queried using this action.
Primarily used for troubleshooting. Output is visible in debug-level logs in the Companion web UI.

### Source Query (SRC)

Information (total count, ID, name) about the sources on a given router may be queried using this action.
Primarily used for troubleshooting. Output is visible in debug-level logs in the Companion web UI.

### Manual Message

If none of the other actions fit your needs, you may call this action to build a LRC message manually.
You will need to (1) select a message type, (2) select an operation, and (3) provide all arguments.
**Warning!** There is only a limited amount of sanity/error checking in this action.

If you find yourself using this, please [open an issue](https://github.com/bitfocus/companion-module-imagine-lrc/issues/new) so that we can add whatever is missing or fix whatever is broken in the other actions.

### Raw Message

If none of the other actions fit your needs, you may call this action to send an arbitrary message directly to the router via the existing TCP socket.
There is **no sanity/error checking** in this action, so make sure you know what you're doing if using this.

If you find yourself using this, please [open an issue](https://github.com/bitfocus/companion-module-imagine-lrc/issues/new) so that we can add whatever is missing or fix whatever is broken in the other actions.

## Feedback

### Salvo State

Button colors can be changed in response to the state (ON/OFF) of a given salvo.
Salvo state information is synchronized upon initial connection and automatically updated by the router upon change of any crosspoints set within the salvo.

### Crosspoint State

Button colors can be changed in response to the state of a given crosspoint.
Crosspoint state information is automatically updated by the router upon change of any crosspoints.

### Destination Lock State

Button colors can be changed in response to the state (locked/unlocked) of a given destination.
Destination lock state information is automatically updated by the router upon change of lock state.

### Destination Protect State

Button colors can be changed in response to the state (protected/not-protected) of a given destination.
Destination protect state information is automatically updated by the router upon change of protect state.

## Presets

### Salvos

A preset is automatically created for each salvo provided by the router.
Action is `Salvo Execution` for the given salvo.
Feedback is `Salvo State` in green if the given salvo is active.

## Variables

Starting from version 2.2, this module exposes the following variable types:

### Routing Database

- Input Names by ID
- Input IDs by Name
- Output Names by ID

### Routing State

- Destination (by name or number) Status - Current Routed Input Name
- Destination (by name or number) Status - Current Routed Input Number
- Destination (by name or number) Status - Lock/Protect State

## Protocol Documentation

Full documentation for the LRC protocol is available in the [Imagine Communications Customer Portal](https://community.imaginecommunications.com/)
in a document titled "Logical Router Control Operation and Reference Manual".
An account is required to access the documentation. Instructions for joining can be found on the login page.
