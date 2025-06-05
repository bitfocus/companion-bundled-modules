## Adder Infinity AIM Companion Module
This module connects to an [Adder Infinity AVM Receiver](https://www.adder.com/en/kvm-solutions/adderview-matrix-c1100-user-station) and allows for connecting and disconnecting presets. Logs have been added to identify connection errors.

**This module is provided "as is" without any warranties, express or implied. The developer assumes no responsibility for any issues, malfunctions, or damages that may arise from its use. By using this module, you acknowledge that you do so at your own risk. Compatibility with future versions of Bitfocus Companion and Adder AVM is not guaranteed.**

1. [Basic Configuration](#basic-configuration)
2. [Actions](#actions)
    1. [Refresh Channels](#refresh-presets)
    3. [Connect Preset](#connect-preset)
    5. [Disconnect](#disconnect)
3. [Feedback](#feedback)
    1. [Channel Connection Status](#preset-connection-status)



### Basic Configuration

Configuration | Help 
--------------|----------
**Label**  | Your friendly name for the AVM Receiver
**AIM IP** | Target IP Address for the AVM Receiver
**password** | User password if required
**Listen for Events** | Enable/Disable Event Listening websocket to listen for Video Loss Events

<br>

### Actions
#### Refresh Presets

Requests the current list of presets from the receiver and saves them into your configuration. Included as a button action if needed, but is also found as the 'Learn' function in the [Connect Preset](#connect-preset) Action.

#### Connect Preset
Connects the receiver to a preset defined in it's preset list.

Option | help
-------|------
**Learn** | Refreshes available presets.
**Preset** | Name of the Preset to connect.

<br>
<br>

Additional Help and Tips:
- The feedback [Preset Connection Status](#preset-connection-status) will allow you to receive feedback based on the response from the receiver.
- If you have enabled "Listen for Events" and are using feedback, the button will update if a "Video Loss" event is triggered.
- Can be used with Companions Step options or Duration Groups to add Disconnection Features. Adding a Step 2 or Duration Group combined with the [Disconnect Preset](#disconnect-preset) will allow you to toggle the connection on the same button.

#### Disconnect
- Action to disconnect connected receiver.

<br>

### Feedback
#### Preset Connection Status
A Feedback option that allows for different button background/text colours based on the state of the connections specified in the Actions. These colours can be customized.

- When does feedback get updated?
Feedback will get updated whenever the Action is attempted. When Listening for Events is enabled, the Buttons feedback will get refreshed whenever a message is received.

- What does this feedback provide?
Whenever a connection is attempted, the receiver will return a success or failure. The feedback will change the background based on this state. It will also provide feedback for a video loss event if configured. These are possible states:

State | Explanation
------ | -------
**Disconnected** | When the preset is disconnected. This will return the disconnected colours (Default Red/White) configured by the user.
**Connected** | Returns configured Button/Text colour (Default Green/Black) when all configured actions connected successfully
**Video Loss** | Returns Configured Button/Text Colour (Default Orange/Black) when a video loss message has been received from the Receiver. The user can configure a custom message to replace the Text during a video loss event.

<br>
<br>


### Additional Tips
#### Using Multiple Receivers
Companion allows for connecting multiple modules. You can use this to control multiple receivers and create a single action to connect multiple receivers to presets. This give the flexibility to connect several AVM devices with one button.

*When using multiple actions per button, Feedback will be limited due to the modules being completely seperate. If multiple feedbacks are applied, only the last to update will display.