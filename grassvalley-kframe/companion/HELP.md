## GrassValley K-Frame

This module allows you to control GrassValley K-Frame video production systems via UDP protocol.

### Configuration

1. **K-Frame IP Address**: Enter the IP address of your K-Frame system
2. **Suite**: Select the suite number (1-4) corresponding to your K-Frame configuration
3. **Keepalive Interval**: How often to send heartbeat messages in milliseconds (default: 2000)
4. **Max Reconnection Attempts**: Number of retry attempts if connection is lost (default: 5)

### Connection Status

The module will automatically connect when you enable it with a valid IP address configured.

- **Green**: Connected to K-Frame
- **Yellow**: Connecting or reconnecting
- **Red**: Disconnected

### Actions

#### Macro Recall

Trigger a macro on the K-Frame.

- **Macro Number**: Enter a number between 1 and 999

#### AUX Route

Route a video source to an AUX bus.

- **AUX Number**: The AUX bus number (1-96)
- **Source Number**: The source to route (1-850)

### Feedbacks

#### Connection Status

Changes button appearance based on connection state. You can set it to trigger on:

- Connected
- Connecting
- Handshaking
- Reconnecting
- Disconnected

#### Macro Sent

Briefly activates when a macro command is sent. Can filter by specific macro number or any macro (set to 0).

#### AUX Sent

Briefly activates when an AUX route command is sent. Can filter by specific AUX number or any AUX (set to 0).

### Presets

The module includes ready-to-use presets:

- **Connection Status**: A button that shows the current connection state with color coding
- **Macro 1-10**: Quick access buttons for the first 10 macros
- **AUX Route Template**: A template button for AUX routing (customize the numbers)

### Troubleshooting

**Module won't connect:**

- Verify the K-Frame IP address is correct
- Check that the K-Frame is powered on and network accessible
- Ensure no firewall is blocking UDP ports 5000, 5001, 6130, 6131

**Commands not working:**

- Check the connection status is green (connected)
- Verify the macro/AUX numbers are valid for your K-Frame configuration

**Connection drops frequently:**

- Try increasing the Keepalive Interval
- Check network stability between Companion and K-Frame
- Increase Max Reconnection Attempts if needed

### Network Requirements

The module uses the following UDP ports:

- **5000**: Initial connection to K-Frame
- **5001+**: Dynamic port assigned by K-Frame for commands
- **6130**: Module's main socket
- **6131**: Module's listener socket

Ensure these ports are not blocked by firewalls.

### Disclaimer

This plugin is not affiliated with Grass Valley®. Grass Valley® is a registered trademark of its respective owner. The User agrees to indemnify and hold harmless the Developer from all claims, damages, or liabilities arising from use of this Software with any Grass Valley® hardware or systems.

## Credits

Based on the protocol implementation from [gv-macro-player-streamdeck](https://github.com/Orthiconnn/gv-macro-player-streamdeck).
