## Adder Infinity ALIF Companion Module
This module connects to an [Adder ALIF 1100](https://www.adder.com/en/kvm-solutions/adderlink-infinity-1102), [Adder ALIF2100](https://www.adder.com/en/kvm-solutions/adderlink-infinity-2122), or [Adder ALIF 4000](https://www.adder.com/en/kvm-solutions/adderlink-infinity-4001) Receiver and allows for connecting and disconnecting presets. Logs have been added to identify connection errors.

**This module is provided "as is" without any warranties, express or implied. The developer assumes no responsibility for any issues, malfunctions, or damages that may arise from its use. By using this module, you acknowledge that you do so at your own risk. Compatibility with future versions of Bitfocus Companion and Adder Infinity ALIF Receivers is not guaranteed.**

1. [Basic Configuration](#basic-configuration)
2. [Actions](#actions)
    1. [Refresh Presets](#refresh-presets)
    3. [Connect Preset](#connect-preset)
    5. [Disconnect](#disconnect)
3. [Feedback](#feedback)
    1. [Preset Connection Status](#preset-connection-status)
    2. [Boolean Feedbacks](#boolean-feedbacks)



### Basic Configuration

Configuration | Help 
--------------|----------
**Label**  | Your friendly name for the ALIF Receiver
**Receiver IP** | Target IP Address for the ALIF Receiver
**password** | User password if required

<br>

### Actions
#### Refresh Presets

Requests the current list of presets from the receiver and saves them into your configuration. Included as a button action if needed, but is also found as the 'Learn' function in the [Connect Preset](#connect-preset) Action. When using Bitfocus Companion, you will need to use this action to get the current state.

#### Connect Preset
Connects the receiver to a preset defined in it's preset list.

Option | help
-------|------
**Learn** | Refreshes available presets. (Only available on Companion)
**Preset** | Name of the Preset to connect.

#### Disconnect
- Action to disconnect connected receiver.

<br>

### Feedback
#### Preset Connection Status
A Feedback option that allows for different button background/text colours based on the state of the connections specified in the Actions. These colours can be customized. The selected Preset to track is required to provide the correct feeback.

- What does this feedback provide?
Whenever a connection is attempted, the receiver will return a success or failure. The feedback will change the background based on this state. These are possible states:

State | Explanation
------ | -------
**Disconnected** | When the preset is disconnected. This will return the disconnected colours (Default Red/White) configured by the user.
**Connected** | Returns configured Button/Text colour (Default Green/Black) when all configured actions connected successfully
- When does feedback get updated?
Feedback will get updated whenever the Action is attempted.

Additional Help and Tips:
- The feedback [Preset Connection Status](#preset-connection-status) will allow you to receive feedback based on the response from the receiver.
- Can be used with Companions Step options or Duration Groups to add Disconnection Features. Adding a Step 2 or Duration Group combined with the [Disconnect Preset](#disconnect-preset) will allow you to toggle the connection on the same button.
- You can use the Internal Feedback "Logic: operation" to create Logical AND or Logical OR conditions when combining multiple ALIF receivers on a single button.

#### Boolean Feedback
A Boolean feedback has been provided to allow for further customization and for compatibility with Bitfocus Buttons.

##### Preset Connection Status - Boolean
Returns "true" if a success message is received while connecting. By combining two of these, one inverted, you can track when a preset is connected or disconnected.

Tips:
- Combining multiple boolean feedbacks will give you similar results to the advanced feedback but with more customization.

### Additional Tips
#### Using Multiple Receivers
Companion allows for connecting multiple modules. You can use this to control multiple receivers and create a single action to connect multiple receivers to presets. This give the flexibility to connect several ALIF devices with one button.
- Feedback can be added to track different ALIF Receiver connections on the same button. Using the Logic: operation internal Feedback, you can add multiple conditions in the AND. If all receivers return connected, it will then activate the styling defined.
