## Powersoft Amplifiers

Control and monitor Powersoft amplifiers via the network API. Supports single or multiple devices, channel mute/gain control, power control, and real-time feedback.

## Configuration

- **Mode** (`mode`): Single device or Multiple devices.
  - Single: set a single Host/Port.
  - Multiple: leave Host/Port empty and fill Devices IPs list.
- **Amplifier Hostname/IP** (`host`): Used in Single mode.
- **Port** (`port`): Default 80.
- **Polling Interval (ms)** (`pollingInterval`): Default 1000ms.
- **Devices IPs** (`devicesCsv`): In Multi mode, comma or newline separated list of device IPs.
- **Maximum Number of Channels** (`maxChannels`): Default 8.
- **Decimal Places** (`decimalPlaces`): Default 3 (formatting for variables/labels).
- **Power/Standby Parameter Path (override)** (`powerPath`): Optional manual path override.
- **UDP feedback (second API)**
  - Enable UDP feedback polling (`enableUdpFeedback`): Reads power/mutes/alarms via UDP 1234.
  - UDP Device Port (`udpPort`): Default 1234.
  - UDP Poll Interval (`udpPollInterval`): Default 1000ms.
  - Force answer_port=0 (`udpAnswerPortZero`): For firmware requiring 0.

Notes:
- HTTPS, username, password options exist but are hidden/not required in typical setups.

Compatibility:
- This module has been tested with Powersoft Ottocanali series amplifiers. Other series may work, but paths and features can vary by model and firmware.
 - Live output peak metering paths are not exposed by the HTTP API we target. As a result, the module exposes the Limiter Threshold (dB) per channel instead of a real-time peak meter.

## Actions

- **Power**
  - Power On / Power Off / Toggle Power
- **Channel Mute**
  - Mute Channel / Unmute Channel / Toggle Mute Channel
- **Channel Gain**
  - Set Channel Gain (absolute, dB)
  - Adjust Channel Gain (relative, ±dB)
- **Diagnostics – Output Speaker Aux Line**
  - Tone Generator: Enable/Disable, Frequency, Level (per channel)
  - Impedance Measure: Enable/Disable, Frequency, Min/Max Level (per channel)
  - Tone Detection: Enable/Disable, Frequency, Min/Max Threshold (per channel)
  - Convenience actions to Stop All Diagnostics (per channel and all channels)

## Presets

- **Per-channel Mute Toggle**: For each channel `CHx`
  - Default: label `UNMUTED`, green background
  - When muted (feedback driven): label `MUTED`, red background
- **Gain Up/Down**: Relative +1 dB / −1 dB.
- **Clip Indicator**: Highlights when channel is clipping (if supported by device).
- **Power**: On / Off / Toggle.
- **Diagnostics**:
  - Start/Stop Output Tone Generator (per channel and all channels)
  - Start/Stop Impedance Measure (per channel and all channels)
  - Enable/Disable Tone Detection (per channel and all channels)

## Feedbacks

- **Power State** (`powerState`)
- **Channel Mute State** (`channelMute`) – drives preset color and label
- Optional, if supported by device/paths:
  - **Channel Clip** (`channelClip`)
  - **Channel Signal Present** (`channelSignal`)
  - **Channel Temperature Warning/Critical** (`channelTempWarning` / `channelTempCritical`)
  - **Channel Impedance Warning** (`channelImpedanceWarning`)
- **Device Fault** (`deviceFault`)

## Variables (selection)

- Per-channel: mute, gain (dB), limiter threshold (dB), signal present, clip, temperature, load impedance
- Per-channel critical alarms from UDP READALLALARMS2 (require UDP feedback enabled):
  - Over-Temperature → `ch<nr>_overtemp_<id>`
  - Low Load Protection → `ch<nr>_lowload_<id>`
  - Rail Voltage Fault → `ch<nr>_rail_fault_<id>`
  - Other Fault → `ch<nr>_other_fault_<id>`
  - Thermal SOA → `ch<nr>_thermal_soa_<id>`
  - AUX Current Fault → `ch<nr>_aux_current_fault_<id>`
- Device: name, firmware, IP address, power state, fault state
- Speakers: `Speaker <ch> Model` (speaker model name per output channel)

Variable naming:
- All variables are per-device and include a sanitized device identifier suffix (e.g., `name_192_168_1_10`, `sp1_model_192_168_1_10`).

## Troubleshooting

- Verify amplifier IP(s) and network routing.
- Ensure the device API/port is reachable (default HTTP 80).
- If using UDP feedback, confirm UDP 1234 is allowed and reachable.
- Adjust polling intervals if status feels sluggish or too chatty.
- Check Companion module logs for errors; ensure correct parameter paths when overriding.
