# Innosonix Maxx

Specify the IP address and Authentication Token of the Amplifier you want to connect.

### Supported Innosonix Maxx Amplifiers

- UMA04/POE

### Available actions

| Title                                              | Description                                               | Model Support |
|----------------------------------------------------|-----------------------------------------------------------| ------------- |
| Set Channel Mute                                   | Sets the mute status for a channel                        | All           |
| Set Channel Delay                                  | Sets the delay for a channel (ms, meters, samples)        | All           |
| Set Channel Delay Readout Type                     | Sets the format of delay summe (ms, meters, samples)      | All           |
| Set Channel Delay Temp.                            | Sets the delay temperature in °C for a channel            | All           |
| Set Channel Power                                  | Sets the power status for a channel                       | All           |
| Set Channel AutoStandby                            | Sets the values for automatic standby mode for a channel. | All           |
| Set Channel Volume                                 | Sets the volume for a channel                             | All           |
| x Dynamic variables can be used with these actions |                                                           |

### Available feedbacks

| Title         | Description                            | Model Support |
| ------------- | -------------------------------------- | ------------- |
| Channel Mute  | Displays the mute status of a channel  | All           |
| Channel Power | Displays the power status of a channel | All           |

### Available Variables

| Title            | Description                                                 | Model Support |
|------------------|-------------------------------------------------------------| ------------- |
| Mute             | Returns the mute status                                     | All           |
| Delay summe      | Returns the sum of all delays  (ms, meters, samples)        | All           |
| Delay type       | Return format for delay sum (ms, meters, samples)           | All           |
| Delay temp.      | Returns each delay temperature in °C                        | All           |
| Delay in ms      | Returns each delay in milliseconds                          | All           |
| Delay in meters  | Returns each delay in meters                                | All           |
| Delay in samples | Returns each delay in samples                               | All           |
| AutoStandby      | Returns the values for automatic standby mode for a channel | All           |
| Channel Volume   | Returns the volume for a channel                            | All           |
