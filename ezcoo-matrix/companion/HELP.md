This module is known to work with:

- [MX44HAS2](https://www.easycoolav.com/products/4k60-444-hdmi-matrix-4x4-dolby-vision-with-audio-breakout-ip-rs232-ir-control-hdcp22-18g-bps)
- [MX42HS](https://www.easycoolav.com/products/hdmi-matrix-4x2-matrix-4-in-2-out-18gbps-mx42hs)

These products have no authentication mechanism, use in private networks only.

### Configuration

- **IP Address** - The IP address or hostname of the switch
- **IP Port** - Port number (default: `23`)
- **Polling Interval** - How often to refresh the complete stats from the switch
- **Use polled data from unit** - CHECKED=periodically query the complete switch status / UNCHECKED=rely on spontaneous messages from switch
- **Log returned data** - Log network responses as Info messages
- **Log token data** - Log parsed responses as Info messages

The module polls complete status from the switch on first connect.
All further changes are signalled from the switch with spontaneous messages.
The periodical polling is therefore not necessary to keep Companion in sync with the switch.
It is implemented as extra safety mechanism.

### Available Actions

There are four actions in this module:

- **Select Input** action is used to set the configured input channel of a matrix switch for further assignment to output channels. No immediate changes trigger, just Feedbacks update.
- **Switch Output** action is used to set the configured channel to take input from the previously selected input
- **Input to Output** action is used to set the configured input channel to configured output channel
- **All outputs to selected input** action sets every output channel to take the selected input channel (CHECKED option) or configured input channel (UNCHECKED option)

### Available Feedbacks

There are two feedbacks:

- **Status for input** - highlights the input channel that has been selected for further assignment
- **Status for output** - highlights all output channels that are currently switched to the selected input channel

### Available Variables

|     Variable      | Description                                         | Example |
| :---------------: | :-------------------------------------------------- | :------ |
| `input_route1-4`  | list of Outputs connected to specific Input 1-4     | `1234`  |
| `output_route1-4` | Input assigned to specific Output 1-4 (exactly one) | `2`     |

.

### Available Presets

Presets for all Actions/Feedbacks are available. Please note that after changing connection's Label you have to disable & enable the connection for Presets to catch this change. Exisitng buttons must be recreated from presets.

### Further Development

The communication protocol allows for future extension of this module:

- **blank/unblank** action for each Output channel
- **SPDIF audio extraction on/off** action for each Output channel
- **4K->2K downscaler on/off** action for each Output channel
- **Change EDID** action for each Input channel
- **Signal detected** feedback for each Input channel

These properties were set statically in our use case. We don't need to control them from Companion. Not implemented at the moment and no promise it ever will.
