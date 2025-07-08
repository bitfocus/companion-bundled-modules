## Adder Infinity AIM Companion Module
This module connects to an [Adder Infinity AIM](https://www.adder.com/en/infinity) server and allows for connecting pre-defined channels and presets. Logs have been added to identify connection errors.

**This module is provided "as is" without any warranties, express or implied. The developer assumes no responsibility for any issues, malfunctions, or damages that may arise from its use. By using this module, you acknowledge that you do so at your own risk. Compatibility with future versions of Bitfocus Companion and Adder Infinity AIM is not guaranteed.**

1. [Basic Configuration](#basic-configuration)
2. [Actions](#actions)
    1. [Refresh Devices and Presets](#refresh-devices-and-presets)
    2. [Connect Channel](#connect-channel)
    3. [Connect Preset](#connect-preset)
    4. [Disconnect Receiver](#disconnect-receiver)
    5. [Disconnect Preset](#disconnect-preset)
3. [Feedback](#feedback)
    1. [Channel Connection Status Pre-Configured (Companion Only)](#channel-connection-status-pre-configured-companion-only)
    2. [Channel Connection Status](#channel-connection-status)
    3. [Preset Connection Status](#preset-connection-status)


### Basic Configuration

Configuration | Help 
--------------|----------
**Label**  | Your friendly name for the module
**AIM IP** | Target IP Address for the AIM Server
**username** | Username you want to make connections with. *This user must have permissions for the channels and presets you want to control
**password** | User password
**Channel Poll Interval** | In Milliseconds, how often you want to poll the server for configured channel connections and presets to provide connection status feedback. *Sends an API request to identify current connection status for each action. Polling only occurs if feedback has been added to the button.
**Poll** | Enable/Disable Polling

<br>

### Actions
#### Refresh devices and presets

Requests the current list of Channels, Receivers and Presets from the AIM server and saves them into your configuration. Included as a button action if needed, but is also found as the 'Learn' function in the [Connect Channel](#connect-channel) Action.

#### Connect Channel
Connects a Single Receiver to a Channel with the specified connection mode. 
***User must have permission to connect to the channel in the specified mode. If another user is using the receiver, the connection will fail.**

Option | help
-------|------
**Learn** | Refreshes available Receiver and Channel lists.
**Receiver** | Receiver that should be connected.
**Channel** | Channel to connect to.
**Connection Mode** | The connection mode to connect to the channel. User must have permission and connection mode must be available for the channel. Default is "Shared"
**Force** | Allows the user to Force the connection even if someone else is logged into the receiver. This requires the API user to be an admin or for the server setting "Grant All Users Force Disconnect"

<br>
<br>

Additional Help and Tips:  
- You can string multiple channel connections by adding more actions with additional connections to create manual presets.  
- The feedback [Channel Connection Status](#channel-connection-status) will allow you to receive feedback based on the current connection status of all connections associated with this button.
- Can be used with Companions Step options or Duration Groups to add Disconnection Features. Adding a Step 2 or Duration Group combined with the [Disconnect Receiver](#disconnect-receiver) will allow you to toggle the connection on the same button.

#### Connect Preset
Connects a predefined preset on the AIM server in the specified connection mode. 
***User must have permission to connect to all the channels in the specified preset. If another user is using a receiver, or a permission isn't set, the connection will fail.**

Option | help
-------|------
**Learn** | Refreshes available presets.
**Preset** | Name of the Preset to connect.
**Connection Mode**| The connection mode to connect the preset in. User must have permission and connection mode must be available for the channel. Default is "Shared"
**Force** | Allows the preset to be force connected even if a receiver is in use.

<br>
<br>

Additional Help and Tips:
- If any of the connections in the preset fail, the entire preset will fail.
- The feedback [Channel Connection Status](#channel-connection-status) will allow you to receive feedback based on the current connection status of all connections for the preset.
- Can be used with Companions Step options or Duration Groups to add Disconnection Features. Adding a Step 2 or Duration Group combined with the [Disconnect Preset](#disconnect-preset) will allow you to toggle the connection on the same button.

#### Disconnect Receiver
- Action to disconnect specifed Receiver.
- 'Learn' Button will refresh list of Receivers.

#### Disconnect Preset
- Action to Disconnect specified Preset.
- 'Learn' button will refresh list of presets.
- Force will cause a forceful disconnect of the preset

<br>

### Feedback
#### Channel Connection Status Pre-Configured (Companion Only)
A Feedback option that allows for different button background/text colours based on the state of the connections specified in the Actions. These colours can be customized.

*_This pre-configured feedback only works in Companion and is not supported in Buttons_

- When does feedback get updated?
When Polling is disabled, Feedback will get updated whenever the Action is attempted. When polling is enabled, the Buttons feedback will get refreshed whenever the server is polled.

- What does this feedback provide?
Whenever a connection is attempted, the AIM server will respond with a success or error state. The feedback will change the background based on this state. There are 4 possible states:

State | Explanation
------ | -------
**Default** | When the channel(s)/preset is disconnected with no recorded connection errors. This will return the default colours configured by the user.
**Connected** | Returns configured Button/Text colour (Default Green/Black) when all configured actions connected successfully
**Warning** | Returns Configured Button/Text Colour (Default Orange/Black) when some of the configured actions have connected successfully (Predefined Presets will return this if one of the channels defined in the preset has been disconnected)
**Error** | Returns Configured Button/Text Colour (Default Red/White) when all connections have returned an error.

<br>
<br>

#### Channel Connection Status
A Boolean Feedback has been made available for those who want more customization of the styling of buttons based on channel connection status. The boolean feedbacks will return True if a condition is met:
Feedback | Explanation
------ | -------
**Receiver** | Receiver feedback is tracking for.
**Channel** | Channel to track connection with receiver.
**Connection State** | Returns True if the Receiver and Channel match the given connection state. Options are _Connected, Error, Disconnected_
**Learn Values** | Will update the list of Channels and Receivers

<br>


- You can utilize these feedbacks in combination to create a similar effect as the pre-configured feedback, but with more flexibility to add different styling beyond background colours.
- Utilizing the "Internal - Logic: Operation" Feedback, you can combine multiple feedbacks in to a Logical AND or Logical OR operation. Using this, you can combine multiple Receiver/Channel connections for feedback.

#### Prest Connection Status
A Boolean Feedback have been made available for those who want more customization of the styling of buttons based on preset connection status. The boolean feedbacks will return True if a condition is met:
Feedback | Explanation
------ | -------
**Preset** | The Preset feedback is tracking for.
**Connection State** | Returns True if the Receiver and Channel match the given connection state. Options are _Connected, Error, Disconnected, Partial Connection_
**Learn Values** | Will update the list of Channels and Receivers

<br>


- You can utilize these feedbacks in combination to create a similar effect as the pre-configured feedback, but with more flexibility to add different styling beyond background colours.
- Utilizing the "Internal - Logic: Operation" Feedback, you can combine multiple feedbacks in to a Logical AND or Logical OR operation. Using this, you can combine multiple action connections for feedback.