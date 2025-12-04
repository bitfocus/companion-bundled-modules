# Companion module for Dataton Watchout 7

This module connects to Dataton Watchout 7 Director via HTTP API and Server-Sent Events (SSE) to provide real-time control and feedback for timeline management, cue control, input management, and show loading.

Because Watchout 7 works with ID's, it is possible to use the same buttons in different shows, the timeline names will update on your buttons, because the ID's are re-used by Watchout.

## Configuration

* **IP address**: The IP address of the Watchout Director
* **Port**: The HTTP API port (default: 3019)
* **Sort timelines on name**: When enabled, timeline dropdowns are sorted alphabetically by name. When disabled (default), they are sorted by ID preserving Watchout's native order.
* **Default toggle behavior**: Choose the default action for timeline toggle when timeline is stopped. Options are "Play" (default) or "Pause".

## Connection Method

The module uses a **dual update system**:
- **Real-time updates (SSE)**: Instant feedback for playback states, input changes, and media presets
- **Periodic polling (30s)**: Detects timeline structure changes, new cues, and show updates

## Actions

### Timeline Control
* **Timeline Action**: Play, pause, or stop a specific timeline
* **Timeline Toggle**: Toggle between play and pause for a timeline (smart detection of current state)
* **Only play timeline if**: Conditional playback - play a timeline only if it's in a specific state
* **Only play timeline if other timeline condition is met**: Play timeline A when timeline B is in a specific state

### Timeline Navigation
* **Jump to Time**: Jump to a specific time (in milliseconds) with play or pause state
* **Jump to Cue**: Jump to a specific cue with play or pause state

### Input Management
* **Send Input Value**: Send a single value to a show input/variable
* **Send Multiple Inputs**: Send multiple input values at once using JSON format
  - Format: `[{"key": "InputName", "value": 0.5}, {"key": "Input2", "value": 1.0}]`

### Show Management
* **Load Show from JSON**: Load a complete show from JSON data
* **Load Show from File**: Load a show from a .watch file path on the Watchout system
  - Supports optional show name parameter
* **Show information**: Manually refresh timeline and show information

### Cue Set Control
* **Set group state by with variant**: Set a single cue group to a specific variant
* **Set Multiple Cue Groups**: Set multiple cue group variants simultaneously using JSON
  - Format: `{"GroupName1": "VariantName1", "GroupName2": "VariantName2"}`
* **Reset all cue groups by Name**: Reset all cue groups to their default state

### Node Management
* **Shutdown node**: Shutdown a Watchout node by IP address
* **Restart Services**: Restart services on a Watchout node by IP address

## Variables

The module provides dynamic variables that update automatically:

* **$(companion-module-name:director)**: Name of the Watchout Director
* **$(companion-module-name:asset_manager)**: Name of the Asset Manager
* **$(companion-module-name:heartbeat)**: Last reply from Watchout
* **$(companion-module-name:show_name)**: show_name
* **$(companion-module-name:TIMELINE_ID)**: Name of each timeline
* **$(companion-module-name:TIMELINE_ID_CUE_ID)**: When a CUE has a name, it will be shown. If its a timer the value will be the timer value, otherwise it will show the name of the cue

Variables update in real-time via SSE and are refreshed every 30 seconds via polling to catch structural changes.

## Feedbacks

### Timeline Status
* **Timeline Running**: Indicates if a timeline is currently playing
* **Timeline Paused**: Indicates if a timeline is paused
* **Timeline Stopped**: Indicates if a timeline is stopped

### Cue Set Status
* **Cue Set Active**: Indicates if a specific cue group variant is active

All feedbacks update in real-time via the SSE connection for instant visual feedback.

## Presets

The module includes comprehensive presets organized by category:

### Basic Category
* **Update timeline info**: Manual refresh of show information

### Timeline Control (Per Timeline)
* **Play [Timeline Name]**: Play button with green play icon
* **Pause [Timeline Name]**: Pause button
* **Stop [Timeline Name]**: Stop button
* **Toggle [Timeline Name]**: Smart play/pause toggle

### Show Management
* **Send Input Value**: Template for sending single input values
* **Send Multiple Inputs**: Template for sending multiple inputs via JSON
* **Load Show from JSON**: Template for loading shows from JSON data
* **Load Show from File**: Template for loading shows from file paths

### Cue Sets
* **Set Cue Group Variant**: Template for setting single cue group variants
* **Set Multiple Cue Groups**: Template for setting multiple cue groups via JSON
* **Reset All Cue Groups**: Reset all cue groups to default

### Node Management
* **Shutdown Node**: Template for node shutdown
* **Restart Services**: Template for service restart

### Timeline Navigation (Per Timeline with Cues)
* **Jump to [Cue Name]**: Direct cue navigation buttons

All presets are generated dynamically based on your show structure and update automatically when timelines or cues change.

## Advanced Features

### Input System Integration
The module supports Watchout's input system for dynamic show control:
- Send real-time values to show variables
- Batch input updates for synchronized changes
- Variable parsing support for dynamic values

### Show Loading Automation
Automate show loading workflows:
- Load shows from JSON data for backup/restore
- Load shows from file paths for playlist automation
- Automatic refresh of module state after show changes

### Enhanced Cue Set Control
Advanced cue set management:
- Single and batch cue group updates
- JSON-based configuration for complex setups
- Real-time feedback for cue set states

### Conditional Timeline Control
Smart timeline automation:
- Conditional playback based on timeline states
- Cross-timeline dependencies
- State-aware toggle operations

## Limitations

* The module requires Watchout 7 with HTTP API enabled (port 3019)
* SSE connection provides real-time updates but polling is still needed for structural changes
* Cue information is read-only (names, times, states cannot be modified via API)
* Node management requires direct IP access to individual nodes (port 3017)
* Input management requires appropriate input variables to be defined in the Watchout show

## Troubleshooting

* **No timeline updates**: Check if both HTTP API (port 3019) and SSE are accessible
* **Missing cues**: Cues only appear if they have valid names and start times in Watchout
* **Connection issues**: Verify IP address, port accessibility, and Watchout Director is running
* **Input errors**: Ensure input keys match exactly with show variable names
* **Show loading failures**: Verify file paths are accessible from the Watchout Director system

For detailed API documentation, refer to the [Watchout 7 External Protocol Documentation](https://docs.dataton.com/watchout-7/external_protocol/external_protocol.html).

> > Be aware this module is tested on Watchout version 7.5.1 Older versions might not work correctly because of newer API
