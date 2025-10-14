# Disguise LiveUpdate Module

This module provides real-time integration with Disguise Designer via the LiveUpdate API, allowing you to monitor properties and control your show directly from Companion.

## Configuration

### Connection Settings
- **Director IP Address**: The IP address of the Disguise Designer Director machine (default: 127.0.0.1)
- **Port**: The port number for the LiveUpdate API (default: 80)
- **Reconnect Interval**: Time in milliseconds between reconnection attempts (default: 5000ms)
- **Pending Subscription Timeout**: Time to wait for subscription confirmation (default: 30000ms)

## How It Works

This module uses **Feedbacks** to subscribe to Disguise properties. Each feedback creates a module variable that updates in real-time. You can then use these variables anywhere in Companion - in button text, expressions, triggers, or other modules.

## Getting Started

### 1. Monitor a Disguise Property

1. Add the **"LiveUpdate Variable"** feedback to a button
2. Configure the feedback:
   - **Variable Name**: `fps` (or any name you choose)
   - **Object Path**: `subsystem:MonitoringManager.findLocalMonitor("fps")`
   - **Property Path**: `object.seriesAverage("Actual", 1)`
   - **Update Frequency**: `1000` (milliseconds, or 0 for real-time)
3. The module creates a variable: `$(liveupdate:fps)`
4. Use this variable anywhere in Companion!

### 2. Display the Value

In your button text, use:
```
FPS: $(liveupdate:fps)
```

Or with expressions for formatting:
```
FPS: ${toFixed($(liveupdate:fps), 1)}
```

### 3. Visual Feedback with Expressions

Use Companion's expression system to change button colors based on values:

**Button Background Color Expression:**
```javascript
$(liveupdate:fps) < 30 ? rgb(200,0,0) : 
$(liveupdate:fps) < 60 ? rgb(200,150,0) : 
rgb(0,150,0)
```

This changes the button:
- Red if FPS < 30
- Orange if FPS < 60
- Green if FPS ≥ 60

### 4. Set a Property Value

Use the **"Set to Disguise"** actions to change properties:

1. Add action: **"Set to Disguise (Number)"**
2. Configure:
   - **Value**: `10.5` (can use variables like `$(internal:custom_my_value)`)
   - **Object Path**: `screen2:surface_1`
   - **Property Path**: `object.offset.x`

## Feedbacks

### LiveUpdate Variable
Creates a live-updating variable that tracks a Disguise property.

**Options:**
- **Variable Name**: Name for the module variable (e.g., "fps", "track_length")
- **Object Path**: Designer expression to find the object
- **Property Path**: Python expression to access the property
- **Update Frequency**: Minimum time between updates in milliseconds (0 = real-time)

**Examples:**

| What to Monitor | Object Path | Property Path |
|----------------|-------------|---------------|
| Track length | `track:track_1` | `object.lengthInBeats` |
| FPS | `subsystem:MonitoringManager.findLocalMonitor("fps")` | `object.seriesAverage("Actual", 1)` |
| Screen name | `screen2:surface_1` | `object.mesh.description` |
| Transport playhead | `transportManager:default` | `object.player.tRender` |
| Screen offset (vector) | `ledscreen:myledscreen` | `object.offset` |

**Note:** This feedback manages the subscription lifecycle. For visual feedback based on the variable value, use Companion's expression system.

### Connection OK
Indicates whether the module is connected to Disguise Designer.

## Actions

### Set to Disguise (String)
Set a Disguise property with a string value.

**Use for:** Text properties (e.g., description, name)

**Options:**
- **Value**: The string value to set (can use variables)
- **Object Path**: Designer expression to find the object
- **Property Path**: Python expression to access property

**Example:** Set track description
- Value: `My Track Name`
- Object Path: `track:track_1`
- Property Path: `object.description`

### Set to Disguise (Number)
Set a Disguise property with a numeric value.

**Use for:** Numbers (e.g., offset.x, length, timing)

**Options:**
- **Value**: The numeric value (can use variables). Do NOT use quotes around numbers.
- **Object Path**: Designer expression to find the object
- **Property Path**: Python expression to access property

**Example:** Set screen X offset
- Value: `10.5`
- Object Path: `screen2:surface_1`
- Property Path: `object.offset.x`

### Set to Disguise (Boolean)
Set a Disguise property with a true/false value.

**Use for:** Boolean properties (e.g., enabled, visible)

**Example:** Enable a track
- Value: `True`
- Object Path: `track:track_1`
- Property Path: `object.enabled`

### Set to Disguise (JSON)
Set a Disguise property with a complex JSON object.

**Use for:** Complex objects (e.g., vectors, arrays)

**Example:** Set screen offset vector
- Value: `{"x": 4.0, "y": 3.0, "z": 0.0}`
- Object Path: `screen2:surface_1`
- Property Path: `object.offset`

## Variables

### connection_status
Shows the current connection status (`Connected` or `Disconnected`).

### Module Variables (Dynamic)
Module variables are automatically created for each active subscription. The variable name matches what you specified in the feedback.

**Example:** If you created a subscription with variable name `fps`, use: `$(liveupdate:fps)`

## Common Use Cases

### Monitor FPS with Color Warning

1. Add **"Subscribe to Disguise Property"** feedback to a button:
   - Variable Name: `fps`
   - Object Path: `subsystem:MonitoringManager.findLocalMonitor("fps")`
   - Property Path: `object.seriesAverage("Actual", 1)`
   - Update Frequency: `1000`

2. Set button text:
   ```
   FPS\n${toFixed($(liveupdate:fps), 1)}
   ```

3. Set button background expression:
   ```javascript
   $(liveupdate:fps) < 30 ? rgb(200,0,0) : rgb(0,150,0)
   ```

### Display Track Length in Timecode

1. Add **"Subscribe to Disguise Property"** feedback:
   - Variable Name: `track_length`
   - Object Path: `track:track_1`
   - Property Path: `object.lengthInBeats`

2. Set button text with formatting:
   ```
   Track 1\nLength\n${secondsToTimestamp($(liveupdate:track_length))}
   ```

### Monitor and Control Screen Offset

1. Add **"Subscribe to Disguise Property"** feedback:
   - Variable Name: `screen_offset`
   - Object Path: `screen2:surface_1`
   - Property Path: `object.offset`

2. Display the value in button text:
   ```
   X: ${toFixed(jsonparse(parseVariables('$(liveupdate:screen_offset)')['x'], 2)}
   Y: ${toFixed(jsonparse(parseVariables('$(liveupdate:screen_offset)')['y'], 2)}
   ```

3. Create buttons to adjust offset:
   - Action: **"Set to Disguise (Number)"**
   - Value: `$(liveupdate:screen_offset) + 1` (use custom variable)
   - Object Path: `screen2:surface_1`
   - Property Path: `object.offset.x`

### Monitor Transport Playhead

1. Add **"Subscribe to Disguise Property"** feedback:
   - Variable Name: `playhead`
   - Object Path: `transportManager:default`
   - Property Path: `object.player.tRender`
   - Update Frequency: `100`

2. Display in button:
   ```
   Playhead\n${secondsToTimestamp($(liveupdate:playhead))}
   ```

## Advanced Features

### Automatic Error Recovery
The module automatically handles subscription errors:
- **After 3 consecutive property path errors**, the subscription is automatically unsubscribed
- Variable shows `PATH_ERROR (unsubscribed)` to indicate the issue
- Fix the property path in the feedback options
- Subscription automatically recreates on next evaluation

### Self-Healing Subscriptions
If subscriptions are dropped (e.g., connection loss, WebSocket errors):
- Module automatically reconnects to Disguise
- All feedback subscriptions are automatically recreated
- No manual intervention required

### Option Change Detection
When you edit feedback options (object path, property path):
- Changes are detected automatically
- Old subscription is removed
- New subscription is created
- No need to remove and re-add the feedback

## Object Path Examples

Disguise uses "Designer expressions" to find objects:

| Object Type | Example |
|-------------|---------|
| Track | `track:track_1` |
| Screen (v2) | `screen2:surface_1` |
| LED Screen | `ledscreen:myledscreen` |
| Transport Manager | `transportManager:default` |
| Monitoring (FPS) | `subsystem:MonitoringManager.findLocalMonitor("fps")` |
| Monitoring (Custom) | `subsystem:MonitoringManager.findLocalMonitor("my_monitor")` |

## Property Path Examples

Property paths use Python-style expressions to access object properties:

| Property | Example |
|----------|---------|
| Simple property | `object.description` |
| Numeric property | `object.lengthInBeats` |
| Nested property | `object.mesh.description` |
| Vector component | `object.offset.x` |
| Full vector | `object.offset` |
| Method call | `object.seriesAverage("Actual", 1)` |
| Player property | `object.player.tRender` |

## Troubleshooting

### Variable shows "..." or "ERROR"
- Check that object path and property path are correct in Disguise
- Verify the object exists in your project
- Check the module log for specific error messages

### Variable shows "PATH_ERROR (unsubscribed)"
- The property path has a syntax error
- Fix the property path in the feedback options
- The subscription will automatically recreate

### Connection closes with "Cannot convert JSON String to double"
- You used the wrong action type (e.g., String action for a number property)
- Use **"Set to Disguise (Number)"** for numeric properties
- Use **"Set to Disguise (String)"** for text properties
- Module will automatically reconnect

### Subscription doesn't update when I change options
- Wait a few seconds - updates happen on next feedback evaluation
- Check that you're connected to Disguise (green status)
- Check the module log for subscription messages

## Notes

- **Type Safety**: Always use the correct "Set to Disguise" action type (String/Number/Boolean/JSON) to match the property type in Disguise
- **Variable Names**: Choose descriptive names that are easy to remember
- **Update Frequency**: Use `0` for real-time updates, or higher values (in milliseconds) to reduce network traffic
- **Expressions**: Companion's expression system is powerful - use it for comparisons, formatting, and calculations instead of comparison feedbacks

## API Documentation

For detailed information about the LiveUpdate API and available objects/properties, visit:
- [Disguise LiveUpdate API Documentation](https://developer.disguise.one/api/session/liveupdate/)
- [Disguise Designer Scripting Reference](https://developer.disguise.one/scripting/)

## Support

For questions about Disguise Designer integration:
- integrations@disguise.one

For general Disguise support:
- support@disguise.one
- help.disguise.one
