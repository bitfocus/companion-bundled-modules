# 25-Seven PDM/PDM II Broadcast Delay

Control a PDM or PDM II Broadcast Delay using the Serial Remote Control protocol over TCP.

For the easiest implementation, the preset buttons in this module are designed to mimic the front panel buttons of the PDM unit.

For more advanced use, you can use the Send Raw Command action and refer to the last_response variable for a more custom approach. Refer to the PDM manual on the Telos website for exact commands (careful, they're case-sensitive!)

WARNING: disabling any reporting via raw command can negatively affect feedbacks and variables!

## Configuration

| Option   | Description                |
| -------- | -------------------------- |
| Host     | PDM or PDM II IP/hostname    |
| Port     | TCP port (default 5443)     |
| Delay Poll Interval | Milliseconds between delay polls (only when DelayFull=0) |



## Actions

| Action | Description |
| ------ | ----------- |
| Down (press/start) | Send `down <Argument>` |
| Up (release/end) | Send `up <Argument>` |
| Trigger (momentary) | Send `trigger <Argument>` |
| Get Variable | Send `get <Variable>` |
| Send Raw Command | Send a raw command line (LF appended) |


## Variables

| Variable | Description |
| -------- | ----------- |
| `$(NAME:depth)` | Current delay length in seconds (as reported) |
| `$(NAME:peak_input)` | Peak input level in dBFS |
| `$(NAME:peak_output)` | Peak output level in dBFS |
| `$(NAME:temperature_c)` | Internal temperature in °C |
| `$(NAME:temperature_f)` | Internal temperature in °F |
| `$(NAME:last_response)` | Last line received from the device |


Each event also exposes a variable in the form:

- `$(NAME:<eventname>)` (lowercase)

Example:

- `$(NAME:delayfull)`
- `$(NAME:muted)`

## Feedbacks

| Feedback | Active when |
| -------- | ----------- |
| Delay Full | `Delay is fully built up` |
| Build Lamp | `Build button would be illuminated` |
| Exit Lamp | `Exit button would be illuminated` |
| Cough Lamp | `Cough button would be illuminated` |
| Bypass Active | `Bypass is engaged` |

## Presets

- DUMP, BUILD, EXIT, COUGH, BYPASS (with matching feedbacks)
- Delay Display (shows `Delay` value)


## Operational Disclaimer

This module is provided as-is. Use at your own risk. In broadcast airchains,
test thoroughly and ensure appropriate safeguards. The authors are not
responsible for on-air content or operational impact.
