# d&b audiotechnik Amps

Specify the IP address of the amp you want to connect to.

### Supported d&b audiotechnik Amps

- 5D
- 10D
- 30D
- 40D
- D20
- D40
- D80

### Available commands for d&b audiotechnik Amps

- Power On/Off/Toggle
- Mute/Unmute/Toggle Channel A/B/C/D/All
- Select Array Processing Preset for Channel A/B/C/D/All **(only for D20, other amplifiers will follow)**
- Recall AmpPreset **(not for 5D)**
- Eq Bypass On/Off
- Eq Bypass Band On/Off
- Eq Clear Band
- Eq Clear All Bands
- Eq Set Band Parametric
- Eq Set All Bands Parametric
- Set Level Channel A/B/C/D
- Delay Set
- Delay Bypass ON/OFF
- Input Gain Enabled/Disabled


### Available Variables for d&b audiotechnik Amps

- Amp Type
- Amp Name
- Amp Firmware
- Power State
- Mute State Channel A/B/C/D
- Amp Preset Names **(not for 5D)**
- Amp Preset States **(not for 5D)**
- Amp Preset Last Recall **(not for 5D)**
- Eq Bypass State
- Delay Bypass State
- Delay (UNIT: ms)
- Level Channel A/B/C/D
- Speaker ID per Channel
- Speaker Name per Channel
- Speaker Types
- Input Gain Enabled/Disabled

### Available Feedbacks for d&b audiotechnik Amps

- Power State
- Mute State Channel A/B/C/D
- Amp Last Preset Recall **(not for 5D)**
- Amp Channel Eq Bypass A/B/C/D
- Amp Channel Delay Bypass A/B/C/D

### EQ All JSON Format
- Band  1 to 16 (5D only 1 to 8)
- Type 1 to 5
  (1 = Parametric
  2 = Notch
  3 = Low Shelf
  4 = High Shelf
  5 = Asymetric)
- Frequency in Hz 20 to 20000
- Gain in dB -18 to 12
- Q 0.5 to 25
- Slope 1 to 4
  (1 = 6dB/Oct
  2 = 12dB/Oct
  3 = 18dB/Oct
  4 = 24dB/Oct)

```json
[
  {
    "band": 1,
    "type": 1,
    "freq1": 100,
    "gain": -3,
    "q": 1.5
  },
  {
    "band": 2,
    "type": 2,
    "freq1": 100,
    "q": 1.5
  },
  {
    "band": 3,
    "type": 3,
    "freq1": 100,
    "slope1": 1,
    "gain": -3
  },
  {
    "band": 4,
    "type": 4,
    "freq1": 100,
    "slope1": 1,
    "gain": -3
  },
  {
    "band": 4,
    "type": 4,
    "freq1": 100,
    "freq2": 200,
    "slope1": 1,
    "slope2": 2,
    "gain": -3
  }
]
```