## Sennheiser Digital 6000 Radio Microphone System

Control and monitor the EM 6000, EM 6000 Dante and L 6000 via Sennheiser Sound Control Protocol (UDP).

### Actions

#### EM 6000

- Antenna Booster
- Audio Output Level
- Display Brightness
- Identify
- Reciever Bank & Channel
- Reciever Carrier Frequency
- Reciever Encryption
- Reciever Mute
- Reciever Name
- Transmitter Sync Settings

#### L 6000

- Identify

### Feedbacks

#### EM 6000

**Advanced Feedbacks**

- Reciever Status

RF Meters (Yellow) range -100dBm to -50dBm. RF A always on top/left side regardless of orientation. Includes Diversity & Peak LEDs.

LQI Meter (Blue) range 0% to 100%

AF meter (Tri-colour) range -50dBFS to 0dBFS. Includes Signal Presence ( > -100dBFS ) and Peak LEDs.

**Boolean Feedbacks**

- AF Peak
- Audio Mute
- Active Status
- Active Warning
- Booster
- Clock Source
- Diversity
- Encryption
- RF Peak
- Test Tone Active

#### L 6000

**Advanced Feedbacks**

- Battery Status

**Boolean Feedbacks**

- Device Hot
- Fan Warning
- Slot Warning

### Variables

#### EM 6000

**Device**

- Name
- Version

**Output**

- Level

**Recieve Channel**

- Active Bank
- Active Channel
- Carrier Frequency
- Name
- Test Tone Level
- RF 1 Level
- RF 2 Level
- AF Level
- LQI

**SKX Transmitter**

- Battery - Percent
- Battery - Time
- Capsule, Gain
- Limit - Low
- Limit - High
- Lowcut
- Name
- Type

**System**

- Brightness
- Clock
- Clock Frequency

#### L 6000

**Device**

- Name
- Version

**Battery Slot**

- LED
- LED Meaning
- Type

**Battery**

- Capacity
- Current
- Cycle Count
- Energy
- Operating Time (H)
- Operating Time (Min)
- State of Charge
- State of Health
- Temperature
- Voltage
- Time to Full (H)
- Time to Full (Min)

### Presets

#### EM 6000

- Reciever Status

#### L 6000

- Battery Status
- Device Status

### Not Supported

The following controls or feedbacks are not supported by the SSC API.

#### EM 6000

- Transmission Mode (LR, LD)
- Command Mode
- Tx Sync Settings: Name, Power LED Mode, RF Power.

### Release History

#### 1.0.0

Initial Release

#### 1.0.6

Support sequential actions

Use Node 22
