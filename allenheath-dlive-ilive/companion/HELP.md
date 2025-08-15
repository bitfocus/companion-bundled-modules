# Allen & Heath dLive & iLive Module

This module provides comprehensive control for Allen & Heath dLive and iLive digital mixing consoles via MIDI over TCP/IP.

## Supported Consoles

- **dLive Series**: Full feature set with up to 128 input channels, 24 DCAs, and 500 scenes
- **iLive Series**: Compatible feature set with up to 64 input channels, 16 DCAs, and 250 scenes

## Connection Setup

1. **IP Address**: Enter the IP address of your dLive Surface or MixRack
2. **Console Type**: Select either "dLive" or "iLive" to enable appropriate features
3. **Network Ports**: 
   - **MIDI Port**: Configurable (default: 51328) - Used for basic mixer commands
   - **TCP Port**: Configurable (default: 51321) - Used for dLive advanced features only
4. **Port Configuration**: Both MIDI and TCP ports can be customized in the module configuration

## Available Actions

### 🔇 Mute Controls

#### All Consoles:
- **Mute Input Channel** - Mute/unmute input channels
- **Mute FX Send** - Mute/unmute FX send buses
- **Mute FX Return** - Mute/unmute FX return channels
- **Mute DCA** - Mute/unmute DCA groups
- **Toggle 48v Phantom on Preamp** - Enable/disable phantom power

#### dLive Only:
- **Mute Mono Group** - Mute/unmute mono group buses
- **Mute Stereo Group** - Mute/unmute stereo group buses  
- **Mute Mono Aux** - Mute/unmute mono aux sends
- **Mute Stereo Aux** - Mute/unmute stereo aux sends
- **Mute Mono Matrix** - Mute/unmute mono matrix outputs
- **Mute Stereo Matrix** - Mute/unmute stereo matrix outputs
- **Mute Group Master** - Mute/unmute mute group masters

#### iLive Only:
- **Mute Mix** - Mute/unmute mix buses

### 🎚️ Fader Level Controls

#### All Consoles:
- **Set Input Fader to Level** - Control input channel fader levels
- **Set FX Send Master Fader to Level** - Control FX send master levels
- **Set FX Return Fader to Level** - Control FX return levels
- **Set DCA Fader to Level** - Control DCA fader levels

#### dLive Only:
- **Set Mono Group Master Fader to Level** - Control mono group master levels
- **Set Stereo Group Master Fader to Level** - Control stereo group master levels
- **Set Mono Aux Master Fader to Level** - Control mono aux master levels
- **Set Stereo Aux Master Fader to Level** - Control stereo aux master levels
- **Set Mono Matrix Master Fader to Level** - Control mono matrix master levels
- **Set Stereo Matrix Master Fader to Level** - Control stereo matrix master levels

#### iLive Only:
- **Set Mix Fader to Level** - Control mix bus fader levels

### 🎛️ Advanced Controls (Protocol V2.0)

#### Scene Management:
- **Scene Recall** - Recall a specific scene by number
- **Scene Go Next** - Navigate to the next scene
- **Scene Go Previous** - Navigate to the previous scene

#### Solo Controls:
- **Solo Input Channel** - Solo/unsolo input channels

#### EQ Controls:
- **EQ Enable/Disable Input Channel** - Enable or disable EQ on input channels

#### Preamp Controls:
- **Set Preamp Gain** - Control preamp gain levels (-10dB to +50dB range)
- **Toggle Preamp Pad** - Enable/disable -20dB input pad

#### Filter Controls:
- **Set High Pass Filter** - Control HPF frequency (Off, 20Hz to 400Hz)

#### Send Level Controls:

**dLive Systems:**
- **Set Aux Mono Send Level** - Control individual aux mono send levels
- **Set Aux Stereo Send Level** - Control individual aux stereo send levels
- **Set FX Mono Send Level** - Control individual FX mono send levels
- **Set FX Stereo Send Level** - Control individual FX stereo send levels
- **Set Matrix Mono Send Level** - Control individual matrix mono send levels
- **Set Matrix Stereo Send Level** - Control individual matrix stereo send levels
- **Input to Main Assign** - Assign/unassign inputs to main mix

**iLive Systems:**
- **Set Mix Send Level** - Control individual mix send levels
- **Set FX Send Level** - Control individual FX send levels

### 🎯 Routing & Assignment

- **Assign DCA Groups for Channel** - Assign input channels to multiple DCA groups
- **Assign Mute Groups for Channel** _(dLive only)_ - Assign input channels to multiple mute groups

### 🎙️ Special Features (dLive Only)

- **Talkback On** - Enable/disable talkback
- **Virtual Soundcheck** - Switch between Inactive, Record Send, and Virtual Soundcheck modes

## Fader Level Range

All fader controls use a precise dB scale:
- **Range**: -∞ to +10.5dB
- **Resolution**: 0.5dB steps
- **Total Steps**: 128 levels

## Technical Notes

- **MIDI Implementation**: Uses standard MIDI commands (Note On, Control Change, NRPN, SysEx, Pitchbend)
- **Real-time Control**: All actions are executed immediately
- **Error Handling**: Connection status and error logging included
- **Debug Logging**: Detailed MIDI message logging available

## Version History

- **v2.0.0**: Complete rewrite for Companion 3.0/4.0 compatibility
  - Added Protocol V2.0 support with 20+ new actions
  - Enhanced EQ, preamp, and send level controls
  - Improved scene navigation
  - Solo controls and advanced routing
- **v1.x**: Legacy Companion 2.x versions

## Compatibility

- **Companion**: Version 3.0+ (use v1.x for Companion 2.x)
- **dLive Firmware**: V2.0+ recommended for full Protocol V2.0 features
- **iLive Firmware**: Compatible with current firmware versions

## Support

For technical support and feature requests, please visit the [GitHub repository](https://github.com/bitfocus/companion-module-allenheath-dlive-ilive).
