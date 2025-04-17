# Extron® MMX TCP module

A module to control Extron® MMX AV switchers via serial RS232 in conjunction with generic TCP Serial module.
Commands are Extron® SIS™ (Extron Simple Instruction Set) and taken from documentation:
https://media.extron.com/public/download/files/userman/MMX_4262_C_OL.pdf
[or here](../MMX_4262_C_OL.pdf)

## Configuration

| Option                | Description                                                      |
| --------------------- | ---------------------------------------------------------------- |
| Target IP             | Destination Host name / IP of the generic TCP Serial Module (TSP)|
| Target Port           | Destination port                                                 |
| Save TCP Response     | Option to save the last response received via TCP                |

## Actions

- Create a video and audio tie/route
- Create a video only tie/route
- Create an audio only tie/route
- Mute/Unmute Audio and or Video
- Set audio level (+24dB to -18dB)
- Increment/Decrement audio level
- Frontpanel Lock/Unlock

## Feedbacks
- View video output tie/route
- View audio output tie/route
- View Audio / Video mute
- View audio level
- View front panel lock status
- Information request

## Variables

If enabled, the last response received via TCP will be stored in `$(NAME:tcp_response)`
`$(NAME:AudioLevelIn1)`
`$(NAME:AudioLevelIn2)`
`$(NAME:AudioLevelIn3)`
`$(NAME:AudioLevelIn4)`
`$(NAME:FrontpanelLock)`