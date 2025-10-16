# Sony Bravia Simple IP Module

A generic module for controlling Sony Bravia TV's that support the Simple IP control method. To control TV's that support the HTTP control protocol, use the Sony Bravia module

### Configuration

[Follow Sony's instructions to enable Simple IP control on your TV](https://pro-bravia.sony.net/develop/integrate/ssip/overview/index.html)

### To use the module

Add an action to a button and choose the action you wish to use.

**Available Actions:**

- Send Command (Sends any Simple IP command)
- Set Power Status (On, Off, Toggle)
- Set Volume Level (0-100)
- Set Input Source (HDMIXXX, COMPONENTXXX, etc)
- Set Mute State (On, Off)
- Set Picture Mute State (On, Off)
- Press Key (Volume Up, Volume Down, Channel Up, Channel Down, etc)

**Available Feedbacks:**

- Power Status
- Volume Level
- Input Source
- Mute State
- Picture Mute State

**Available Variables:**

- Power State
- Volume Level
- Input Source
- Audio Mute State
- Picture Mute State
