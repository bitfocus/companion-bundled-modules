## DHD Audio ECP Module

This module allows you to control DHD Audio mixing consoles using the ECP (External Control Protocol) over TCP/IP.

**Supported Consoles:**

- Series 52
- RM4200D
- Other DHD consoles with ECP support

### Configuration

1. Enter the IP address of your DHD console
2. Set the port (default: 2008 for ECP)
3. The module will automatically connect and maintain the connection

### Features

**Actions:**

- **Set Logic State** - Set a logic to ON or OFF (with optional pulse mode)
- **Pulse Logic** - Send a pulse (0→1→0) for edge-triggered operations
- **Toggle Logic State** - Toggle a logic between states
- **Request Logic State** - Query the current state

**Feedbacks:**

- Logic State - Visual indication when a logic matches the expected state

**Variables:**

- `$(dhdecp:connection_status)` - Connection status
- `$(dhdecp:host)` - Configured host IP
- `$(dhdecp:port)` - Configured port

### Logic Addresses

Logic addresses are dynamic and configured in your DHD Toolbox project. Valid range is 0-65535.

**Converting from Export.dpx:**

- DHD Export.dpx files use 32-bit hex addresses (e.g., `0x400002cf`)
- Extract the lower 16 bits (last 4 hex digits): `0x02cf`
- Convert to decimal: `719`
- Use this decimal value as the Logic ID

**Online Parser Tool:**
Use the [DHD Export.dpx Parser](https://daniellippens.github.io/companion-module-dhdaudio-ecp/parser.html) to automatically extract and convert all Logic IDs from your Export.dpx file.

### Using Pulse Mode

Some DHD logic configurations require **pulse mode** (rising edge: 0→1→0) instead of simply setting a state. Use the **Pulse Logic** action or enable pulse mode in **Set Logic State** for:

- Edge-triggered logic operations
- Flip-flop functions
- Any logic that needs a momentary trigger

### Working with Interlock Logic Buses

**IMPORTANT:** When controlling logics that use DHD's Interlock Logic Bus feature, you must pulse the **Logic Source** (typically a Key or button), NOT the Logic Function output itself.

**Example:**
If you have a Logic Function "MX2MON: SAMEASDJ" (LF 30) with Interlock Logic Bus enabled:

- ❌ **Don't pulse:** LF 30 (the Logic Function output)
- ✅ **Do pulse:** The Key logic configured as the Logic Source (e.g., "Key 1: SAME AS DJ")

**How to find the correct logic to pulse:**

1. Open your DHD Toolbox project
2. Find the Logic Function with Interlock enabled
3. Look at the "Logic Sources" section
4. Find the Key or button logic in that list
5. Get its hex address from Export.dpx
6. Convert to decimal and use that Logic ID in Companion

The interlock mechanism only triggers when the Logic Function's **input sources** change, not when the output is directly modified.

### Support

For more information about the ECP protocol, visit:
https://developer.dhd.audio/docs/API/ECP/
