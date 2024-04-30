# Generic TCP and UDP module

A generic module for performing simple TCP and UDP requests

If you are using this plugin, you are trying to control some device or software that is not directly supported yet, and we would therefore really appreciate if you made a module request for it here:

<https://github.com/bitfocus/companion-module-requests/issues>

Many more internal variables and feedbacks are possible specific modules and more people will get to benefit from these in the future, thanks.

## Configuration

| Option                | Description                                                     |
| --------------------- | --------------------------------------------------------------- |
| Target IP             | Destination Host name / IP                                      |
| Target Port           | Destination port                                                |
| TCP/UDP               | Connection protocol to use                                      |
| Save TCP Response*    | Option to save the last response received via TCP               |
| Convert TCP Response* | Optionally convert response to 'String' or 'Hex' encoded string |

\* only available if protocol is set to TCP

## Actions

| Action           | Description                                                                   |
| ---------------- | ----------------------------------------------------------------------------- |
| Send Command     | Send printable characters, with optional termination sequence                 |
| Send HEX Command | Send a HEX encoded sequence of characters, with optional termination sequence |

## Variables

If enabled, the last response received via TCP will be stored in `$(NAME:tcp_response)`
