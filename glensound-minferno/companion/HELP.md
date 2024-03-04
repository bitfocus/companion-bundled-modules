## Glensound Minferno

Websocket-based module that replicates the functionality of the Minferno Web UI.

### Configuration

- Type in the IP address or hostname of the device. 
- If you don't know the IP address, you can usually reach your device by using minferno00xxxx.local -hostname, where xxxx is your device's serial number that can be found from the back of the device.

##### Notes about Gain
- Gain step is 1dB per increment/decrement
- Lineup Settings (dBu): LINE = 0 / MIC = -58 / MIC+PHN = -35
- Gain Range (dB): LINE = -15 to +15 / MIC = -30 to +15 / MIC+PHN = -35 to +15

### Available Actions

- Toggle PGM "On Air"
- Gain Up
- Gain Down
- Gain Lineup - see notes above

### Available Feedbacks

- PGM Status

### Available Variables

- PGM Status
- Gain
- Meter Peak (Scaled to match the device LEDs)
- Meter Peak RAW (Raw data reported by Minferno)
