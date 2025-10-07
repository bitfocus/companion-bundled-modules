## Barco EventMaster

This module uses the official EventMaster JSON API.  
**Note:** The JSON API is not available in the simulator; you must use a real EventMaster device or the official virtual box simulator.  
If the status is OK, it ONLY means that the configured IP responds to ICMP ping.

The module will update presets and actions every 15 seconds by default (configurable in module settings).

---

### **Configuration Options**

- **Target IP**: IP address of the EventMaster device
- **Polling Interval**: How often to refresh data (in seconds, 0 to disable)
- **Authentication Mode**: None, Operator ID, or Super User Password
- **Auth Value**: Authentication credentials (when required)
- **Enable Live Updates**: Enable real-time EventMaster subscriptions for instant feedback
- **Notification Server Port**: Local port for receiving EventMaster notifications (default: 3000)
- **Notification Listener IP**: IP address the EventMaster should send notifications to (auto-detected)

---

### **Live Updates (EventMaster Subscriptions)**

When **Enable Live Updates** is enabled, the module subscribes to real-time notifications from the EventMaster device. This provides:

#### **Benefits**
- **Instant Tally Updates**: Source tally/feedback buttons update immediately when content changes
- **Real-time Variables**: Source monitoring variables update within ~200ms of changes
- **Reduced Network Load**: Only affected destinations are queried instead of polling everything

#### **How It Works**
1. The module starts a local notification server on the configured port
2. It subscribes to EventMaster screen and AUX destination change events
3. When content changes, EventMaster sends notifications to your Companion system
4. The module batches and processes notifications, updating only affected sources/destinations
5. Tally feedback and variables update automatically without waiting for the next poll (See Sources Feedback)

#### **Network Requirements**
- **Firewall**: The notification port (default 3000) must be open for incoming connections
- **Routing**: EventMaster must be able to reach your Companion system's IP address

---

### **Available Actions**

#### **Presets**
- **Recall Preset**: Load a preset to Preview or Program
- **Recall Next Preset**: Automatically recall the next available preset
- **Save Preset**: Save current state as a new preset
- **Delete Preset**: Remove an existing preset
- **Rename Preset**: Change the name of an existing preset

#### **Transport Controls**
- **Cut Active**: Instantly switch preview to program
- **Take/Trans Active**: Transition preview to program with fade

#### **Cues**
- **Play Cue**: Start playing a cue
- **Stop Cue**: Stop a playing cue  
- **Pause Cue**: Pause a playing cue

#### **Sources & Destinations**
- **Freeze/Unfreeze Source**: Freeze or unfreeze video sources
- **Freeze/Unfreeze Destination**: Freeze or unfreeze destination outputs
- **Arm/Unarm Destination**: Enable/disable destinations for transitions

#### **AUX Destinations**
- **Set testpattern for AUX**: Apply test patterns to AUX outputs (legacy)
- **Change AUX Content**: Enhanced AUX control with multiple options:
  - Set preview/program sources independently
  - Change AUX destination name
  - Apply test patterns
  - All parameters optional - only change what you specify

#### **Screen Destinations**
- **Set testpattern for screen destinations**: Apply test patterns to screen outputs (legacy)
- **Change Screen Content**: Comprehensive screen destination control:
  - **Test Patterns**: Apply various test patterns
  - **Background Control**: Set program/preview background sources with matte options
  - **Layer Management**: Configure individual layers with source, mode, and positioning
  - **Window Control**: Position and resize layer windows with pixel precision
  - All parameters optional for selective updates

#### **Layers**
- **Fit Layers to Screen Destination**: Auto-fit specified layers to fill screen
- **Clear Layers from Screen Destination**: Remove content from specified layers

#### **User Keys**
- **Recall User Key**: Activate user-defined key macros with layer targeting

#### **Groups**
- **Activate Destination Group**: Enable destination groups by ID or name

#### **Source Backup System**
- **List Source Main Backup**: Show backup configurations for inputs/backgrounds
- **Activate Source Main Backup**: Configure up to 3 backup sources per input:
  - Set backup sources (inputs or stills)
  - Choose active backup state (primary, backup 1, 2, or 3)
  - Automatic failover support
- **Reset Source Main Backup**: Reset source backup to primary

#### **MVR (Multi-Viewer)**
- **Activate MVR Preset**: Load MVR preset by ID
- **Change MVR Layout**: Switch multi-viewer layouts with frame unit control

#### **System & Diagnostics**
- **Reset Frame Settings**: Various reset options (soft, factory, power down)
- **Get Power Status**: Check power supply status and update variables
- **Get Frame Settings**: Retrieve system information and update variables

---

### **Usage Examples**

#### **Basic Operation**
1. **Preset Recall**: Select preset and mode (Preview/Program) to load content
2. **Source Switching**: Use "Change AUX Content" or "Change Screen Content" for flexible source routing
3. **Transitions**: Use "Take/Trans Active" for smooth transitions or "Cut Active" for instant switching

#### **Advanced Layer Control**
1. **Layer Positioning**: Use "Change Screen Content" with window H/V position and size controls
2. **Layer Sources**: Set different sources per layer with preview/program mode selection
3. **Background Management**: Independent control of program and preview backgrounds

#### **Backup Configuration**
1. **Setup Backups**: Use "Activate Source Main Backup" to configure backup sources
2. **Monitor Status**: Use "List Source Main Backup" to check current backup configurations
3. **Manual Switching**: Use backup state selection to manually switch between sources

#### **Source Monitoring**
1. **Automatic Monitoring**: Source variables are automatically populated on startup and updated during polling
   - Each source shows which destinations it's active on (PGM and PVW)
   - Variables update in real-time based on your polling interval
   - Get instant overview of source usage across all destinations
2. **Manual Refresh**: Use "Refresh Source Monitoring" action for immediate updates of all sources
   - Perfect for confirming current source distribution
   - Individual destination actions also refresh source monitoring
   - Ideal for live production monitoring and troubleshooting

#### **Test Patterns**
- Simple test patterns: Use legacy "Set testpattern" actions
- Advanced patterns: Use "Change AUX/Screen Content" for pattern + source combinations

---

### **Available Variables**

#### **System Information**
- `$(barco-eventmaster:frame_IP)`: EventMaster IP address
- `$(barco-eventmaster:frame_version)`: Software version
- `$(barco-eventmaster:frame_OSVersion)`: Operating system version  
- `$(barco-eventmaster:power_status1)`: Power supply 1 status
- `$(barco-eventmaster:power_status2)`: Power supply 2 status

#### **Hardware Status**
- `$(barco-eventmaster:cardX_info)`: Card slot X information (X = 1-20)
  - Displays card type, status, and temperature/fan status
- `$(barco-eventmaster:syscard_info)`: System card information

#### **Source Monitoring** *(Auto-populated on startup and polling)*
- `$(barco-eventmaster:source_X_pgm_destinations)`: Which destinations source X is active on PGM
- `$(barco-eventmaster:source_X_pvw_destinations)`: Which destinations source X is active on PVW

*Examples:*
- `$(barco-eventmaster:source_1_pgm_destinations)` = "Screen Main, AUX 2"
- `$(barco-eventmaster:source_5_pgm_destinations)` = "Not active on PGM"

*Note: Source monitoring variables are automatically populated during startup and updated via polling. You can also manually refresh them using the "Refresh Source Monitoring" action*

---

### **Available Feedback (Source Tally)**

The module provides two types of source tally feedback for buttons:

#### **Source Active (Simple)**
- **Purpose**: Basic tally feedback - shows if a source is active anywhere
- **Colors**: 
  - **Red**: Source is active on Program (PGM) on any destination
  - **Green**: Source is active on Preview (PVW) on any destination
  - **No Color**: Source is not active anywhere
- **Use Case**: Quick overview of source activity across your entire system
- **Configuration**: Just select the source number

#### **Source Active on Destinations**
- **Purpose**: Advanced tally feedback - shows if a source is active on specific destinations
- **Colors**:
  - **Red**: Source is active on Program (PGM) on the selected destination(s)
  - **Green**: Source is active on Preview (PVW) on the selected destination(s)
  - **No Color**: Source is not active on the selected destination(s)
- **Destination Options**:
  - **Anywhere**: Monitor all destinations (same as Simple feedback)
  - **Anywhere PGM**: Monitor all destinations for PGM activity only
  - **Anywhere PVW**: Monitor all destinations for PVW activity only
  - **Specific Screens**: Monitor individual screen destinations (LED MAIN PGM, LED SIDES PVW, etc.)
  - **Specific AUX**: Monitor individual AUX destinations (WAL 1 PGM, WAL 2 PVW, etc.)
- **Tally State Options**:
  - **Program**: Only show feedback when source is on PGM
  - **Preview**: Only show feedback when source is on PVW
- **Use Case**: Precise monitoring of source usage on specific outputs

#### **Real-time Updates**
- Both feedback types update automatically when **Live Updates** are enabled
- Updates occur within ~200ms of EventMaster content changes
- Fallback to polling updates if live updates are disabled
- Works with background layers, regular layers, and AUX content

#### **Usage Examples**
1. **Master Tally Wall**: Use "Source Active (Simple)" for an overview of all source activity
2. **Operator Panel**: Use "Source Active on Destinations" to monitor specific screen or AUX outputs
3. **Director Panel**: Use destination-specific feedback to see what's live on main program feeds
4. **Technical Monitoring**: Use both types - simple for overview, specific for detailed monitoring

---

### **Available Presets**

Dynamic presets are generated based on your EventMaster configuration:
- **Presets**: Recall, Save, Delete, Rename operations
- **Cues**: Play, Stop, Pause controls
- **Transport**: Auto Trans/Cut buttons
- **User Keys**: Quick access to configured user keys
- **Layers**: Fit/Clear layer operations
- **MVR**: Multi-viewer preset and layout controls

---

### **Tips & Best Practices**

1. **Polling**: Set appropriate polling interval based on your network and performance needs
2. **Authentication**: Use Super User mode for full access, Operator ID for restricted access
3. **Backup Sources**: Configure backup sources for critical inputs to ensure show continuity
4. **Layer Management**: Use "Change Screen Content" for precise layer control vs. simple "Fit/Clear" operations
5. **Test Patterns**: Use enhanced content actions for combining test patterns with source routing

---

For detailed option descriptions and parameter ranges, see the action configuration dialogs in Companion.