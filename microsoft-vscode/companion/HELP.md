## VSCode

### Setup

1. Install the [CommandSocket](https://marketplace.visualstudio.com/items?itemName=pascaldiehm.commandsocket) extension for VSCode.
2. Open your VSCode settings, set `commandsocket.password` and change `commandsocket.port` if the default port is conflicting with your setup.
3. Add an instance of the `VSCode` module to your companion setup.
4. Configure the instance to match your setup in VSCode.
5. Look at the instance variables and check if it successfully fetched your VSCode version.
   - If it did: You're good to go.
   - Otherwise: Check the instance status. If it is green, you have probably entered the wrong password. If it says `Connection Failure`, either VSCode is not running, the CommandSocket extension is not enabled or you mismatched the target IP/port.

### Configuration

| Setting                | Description                                                                                                                                                                                                                                                               |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Target IP              | The IP-Address of the computer running VSCode                                                                                                                                                                                                                             |
| Target port            | The port you set in VSCode unter `commandsocket.port`                                                                                                                                                                                                                     |
| Password               | The password you set under `commandsocket.password`                                                                                                                                                                                                                       |
| Reconnect delay        | How long to wait until a reconnection is attempted. Set to 0 to disable automatic reconnection.                                                                                                                                                                           |
| Fetch delay (commands) | How long to wait between fetching the command list (in milliseconds). Since this is a fairly intensive operation, keep this as high as possible (commands change rarely). Running a command is always possible, you only need the fetched list to configure your actions. |
| Fetch delay (state)    | How long to wait between fetching the current VSCode and editor state (in milliseconds).                                                                                                                                                                                  |

### Actions

- Run any command (including optional argument)
- Show a notification in VSCode and get feedback over selected options
- Show a message in the status bar
- Show an input or select box

### Variables

- Current editor version, language, line count and tab size
- Command count in current workspace
- VSCode state (including cursor position, file name and git branch)
- Last interaction responses (from notification buttons, input and select)

### Feedbacks

Each variable has according feedback definitions.

### Tips and fixes

##### I can't find the command I am looking for

If you want to run a command provided by an extension, you can just look at the _Feature Contributions_ tab of the corresponding extension page.
Under _Commands_ you will find the identifiers for all commands provided by this extension.

Finding the identifier of an internal command can be a little tricky though.
A good place to start ist the list of default keyboard shortcuts: Run the VSCode command `Preferences: Open Default Keyboard Shortcuts (JSON)`.
If it is not listed there, you will have to either look it up on the internet or make an educated guess - most command names and groups are quite descriptive of what they do.

##### The command I am looking for is not available

Commands provided by extensions will not be registered in VSCode until the extension becomes active.
As long as the command is not registered, the companion interface will not allow you to choose it.
(Note that the command will stay chosen, even when the extension is deactivated again.)

So to make sure that a command is available, just run it manually once, wait for companion to update its command list (or update it manually) and try again.

##### Companion can't connect even though VSCode is running and the connection is setup correctly

It is always possible that for some reason the WebSocket server died or couldn't start because you at some point had two instances of VSCode open and are currently in the second one that couldn't start the server.

TLDR: Reload VSCode and it should be fixed.
