## Turtle AV Mineola

This module uses HTTP & WebSockets to control the Turtle AV Mineola audio processor.

---

### Actions

#### Power

- **Power** - Turn the device on/off or toggle
- **Reboot** - Reboot the device

#### Input Controls

- **Gain** - Adjust input gain (-12dB to +12dB)
- **Mute** - Mute/unmute input channels
- **Name** - Set input channel name
- **Phantom Power** - Enable/disable 48V phantom power
- **Sensitivity** - Set input sensitivity level (+24dBu, +14dBu, +4dBu, 0dBV, -18dBV, -35dBV)

#### Output Controls

- **Delay** - Set output audio delay (0-50ms)
- **Gain** - Adjust output gain (-60dB to +12dB)
- **Level** - Set output reference level (+20dBu, +14dBu, +4dBu, 0dBV, -18dBV)
- **Master Output Member** - Add/remove output from master group
- **Mute** - Mute/unmute output channels
- **Name** - Set output channel name

#### Output Master

- **Mute** - Mute/unmute master output
- **Volume** - Adjust master output volume (0-100)

#### Preset Management

- **Clear** - Clear a preset slot
- **Name** - Set preset name
- **Recall** - Load a saved preset
- **Save** - Save current settings to preset

---

### Feedbacks

#### Device Information

- DEP SDK version
- Hostname
- IP Address (Primary & Secondary)
- MAC Address (Primary & Secondary)
- MCU Version
- Model Name
- Firmware Version

#### Input Status

- Gain
- Mute state
- Channel name
- Phantom power state
- Sensitivity
- Signal level

#### Output Status

- Audio delay
- Gain
- Master output membership
- Mute state
- Channel name
- Output level
- Signal level

#### Output Master Status

- Mute state
- Volume level

#### Power & Presets

- Power state
- Preset name
- Preset validity

---

### Variables

All feedback values are available as variables for use in button text and expressions.
