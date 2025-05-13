# Script Launcher

This module communicates with ScriptLauncher — a free local automation tool you can run on any computer. It allows remote script execution, automation, system control, and much more using Bitfocus Companion.

👉 Download ScriptLauncher: [github.com/josephdadams/scriptlauncher](http://github.com/josephdadams/scriptlauncher)

---

## Configuration

- ScriptLauncher IP Address and Port
- Control Password
- Enable Verbose Logging (for debugging socket events)

---

## Actions

### System Control

- **Shutdown**
- **Cancel Shutdown**
- **Reboot**
- **Lock Computer**

### Alerts & Information

- **Send Alert** (Notification pop-up)
- **Get Installed Fonts**
- **Start/Stop System Info Polling**

### App Control

- **Focus App**
- **Quit App**

### Script Execution

- **Execute Custom Script** (Run any script or executable with optional stdin)
- **Run AppleScript** (Mac only)

### File Operations

- **Rename or Move File**
- **Move Dated File in Folder**
- **Move Dated File in Folder (With Extension)**
- **Move File(s) Based on Size**

### Input Simulation

- **Send Key Press** (With optional modifiers - ctrl, alt, shift, command)
- **Move Mouse**
- **Click Mouse** (Single or double click)
- **Hold Mouse Button / Release Mouse Button**
- **Scroll Mouse**

### macOS Utilities

- **Mac: Set Window Bounds**
- **Mac: Minimize Front Window**
- **Mac: Hide All Apps**
- **Mac: Bring App to Front**
- **Mac: Quit All Apps Except Finder**
- **Mac: Toggle Mute**
- **Mac: Set Volume Level**
- **Mac: Volume Up / Volume Down**
- **Mac: Sleep Computer**
- **Mac: Toggle Dark Mode**
- **Mac: Speak Text** (TTS using built-in voices)
- **Mac: Create Note** (in the Notes app)
- **Mac: Open URL in Default Browser**
- **Mac: Capture Screenshot to Desktop**

> 🧠 Most macOS utilities use native AppleScript or shell commands and do not require any additional setup.

---

## Feedbacks

Currently not implemented — but future support may include:

- Script completion feedback

---

## Variables

### Always Available:

- `connection_state` — status of the module connection
- `platform` — OS of the ScriptLauncher host
- `version` — ScriptLauncher app version
- `arch` — System architecture
- `hostname` — Hostname of the machine
- `uptime` — How long ScriptLauncher has been running

### If System Info is enabled:

- `cpu_brand`, `cpu_speed`, `cpu_load`
- `memory_free`, `memory_used`, `memory_total`
- `network_interfaces[]` — includes IP, MAC, and interface name

### If Fonts are requested:

- `fonts[]` — list of installed font families

---

## Presets

TBD — presets can be created based on your use cases, such as:

- Reboot computer with confirmation
- Toggle lights via AppleScript
- Speak alert messages

---

## Developer

This module and the ScriptLauncher app were built by [@josephdadams](https://github.com/josephdadams).

PRs, feedback, and feature requests are welcome!
