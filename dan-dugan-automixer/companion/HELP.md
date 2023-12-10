## Dan Dugan Sound Design Model Automixer

This module will control the Model M or N automixer. There are 64 Madi or Dante inputs & outputs, and 16 adat inputs and outputs.
Many functions will work with the Dugan-MY16 and other units.

- [Dugan Auto Mixer Product Page](https://www.dandugan.com/products/)

## Configuration
Enter the IP address of the control NIC of the Automixer. The unit will accept connections on TCP:23 or TCP:9776 (and UDP:9776, not supported at present). This model defaults to TCP:23 for easiest integration with firewalls and complex networks. 
Poll interval determines how frequenctly channel & scene names are checked, set to zero to turn off. 
Enter the number of automix channels the unit is configured to for correct initialisation. Once connected if the unit reports a different number of configured channels the module will log the discrepancy and adapt. The messaging rate can be left at fast most of the time. If you find commands are getting lost or responses are missing, especially over a WAN you may try slowing it down. Similarly the metering rate determines how fast the level and gain meters are polled - this will only work with the Model M & N. Unsolicited message subscription determines if the dugan will inform companion about changes from other clients; in general this should be left on. Use of feedbacks will force subscriptions on if it is off. The Is Talking threshold sets the operational threshold for a simple function to identify the current active talker. The function returns the channel with the least gain reduction at any time, as long as they are at or above the set threshold, otherwise nothing is returned.

## Actions
- **Channel - Bypass** Query / Change Channel Bypass
- **Channel - Group Assignment** Query / Change Channel Group Assignment
- **Channel - Mode** Query / Change Channel Mode: Manual, Auto, Mute
- **Channel - Music** Query / Change Channel Music Mode
- **Channel - Name** Query / Change Channel Name - up to 15 characters. Accepts variables
- **Channel - NOM Mode** Query / Change Channel NOM Mode
- **Channel - Override** Query / Change Channel Override
- **Channel - Preset** Query / Change Channel Preset: Manual, Auto, Mute
- **Channel - Weight** Query / Change Channel Weight. Accepts variables

- **Group - Automix Depth** Query / Change Group Automix Depth. Accepts variables
- **Group - Last Hold** Query / Change Group Last Hold
- **Group - Music System Threshold** Query / Change Group Music System Threshold. Accepts variables
- **Group - Music System Threshold Input** Query / Change Group Music System Threshold Input
- **Group - Mute** Query / Change Group Mute
- **Group - NOM Gain Limit** Query / Change Group Gain Limit. Accepts variables
- **Group - Override** Query / Change Group Override
- **Group - Preset** Query / Change Group Preset

- **Matrix - Bus Mute** Query / Change Matrix Mute
- **Matrix - Bus Polarity** Query / Change Matrix Polarity
- **Matrix - Crosspoint** Query / Change Matrix Crosspoint Gain
- **Matrix - Gain** Query / Change Matrix Output Gain. Accepts variables
- **Matrix - Output** Query / Change Matrix Output. Accepts variables

- **Metering** Query various metering and channel flags. Return data not handled yet.

- **Query - Bulk Config** Query all channel params or matrix crosspoints
- **Query - Name List** Query Channel or Scene Name List
- **Query - System** Query readonly system parameters and write to log

- **Recall Defaults** Reset channels or matrix to defaults

- **Scene - Active** Query Active Scene
- **Scene - Count** Query Scene Count
- **Scene - Delete** Delete. Accepts variables
- **Scene - Recall** Recall Scene. Accepts variables
- **Scene - Rename** Rename Scene. Accepts variables
- **Scene - Save** Save Scene. Accepts variables
- **Scene - Save New** Save New Scene. Applies default name "Scene #"

- **System - Adat Mirror** Query / Change channel count echod to Adat
- **System - Automix Channel Offset** Query / change input channel mapped to Automix Channel 1
- **System - Automix Channels** Query / Change channel count (8 > 64)
- **System - Blink Mode** Query / Change blink mode
- **System - Clock Source** Query / Change clock Source
- **System - Link Group** Query / Change link group
- **System - Clock Source** Query / Change clock Source
- **System - Name** Query / Change unit name. Accepts variables
- **System - Network** Query / Change IP, Subnet or Gateway address
- **System - Network DHCP** Query / Change DHCP 
- **System - Name** Query / Change unit name. Accepts variables
- **System - Subscribe Unsolicited** Query / Change unsolicited messages

## Variables
- **Channel - Name** String
- **Channel - Weight** Number (dB)
- **Channel - Input Level** Number (dB)
- **Channel - Output Level** Number (dB)
- **Channel - Automix Gain Reduction** Number (dB)

- **Group - Automix Depth**  Number (dB)
- **Group - Music System Threshold**  Number (dB)
- **Group - Music System Gain Reduction**  Number (dB)
- **Group - NOM Gain Limit** Number
- **Group - NOM Gain Reduction** Number(dB)

- **Is Talking - Channel** Number
- **Is Talking - Name** String

- **Matrix - Fader** Number(dB)
- **Matrix - Output Level** Number(dB)
- **Matrix - Crosspoint** Number(dB)

- **Scene - Active** Name, Index, Has Changed
- **System - All** All system queries returned to varibles. All queried once on connect.

## Feedbacks
All feedbacks are boolean. Using any feedbacks will force the subscription level to at least the minimum required.

- **Channel - Automix Gain Reduction**
- **Channel - Bypass**
- **Channel - Clip**
- **Channel - Group Assignment**
- **Channel - Input Level**
- **Channel - Mode**
- **Channel - Music**
- **Channel - NOM Mode**
- **Channel - Output Level**
- **Channel - Override**
- **Channel - Preset**
- **Channel - Signal Presence**

- **Group - Last Hold**
- **Group - Music System Gain Reduction**
- **Group - Music System Threshold Input**
- **Group - Mute**
- **Group - NOM Gain Limit**
- **Group - Override**
- **Group - Preset**

- **Matrix - Bus Mute**
- **Matrix - Bus Polarity**
- **Matrix - Output Level**
- **Matrix - Output Route**

- **Scene - Has Changed** True when any parameter is changed from the saved state of the recalled scene

## Support for other models
At present only the Model M & N are explicitly supported. With that said, the dugan units share a common api.
The Model M & N represent a complete set of API commands. All other units (MY-16, Model-E3A, etc) support a subset of of these commands. The core channel controls are supported by all units.
It is advised to set the the channel count to the appropriate value, turn the metering off, and dont use the functions not supported by your unit. This functionality is untested.

## Version History

### Version 1.0.0
- Initial release
