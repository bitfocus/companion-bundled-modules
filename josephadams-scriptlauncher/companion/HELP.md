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
- **Mac: Restart Dock**
- **Mac: Restart Finder**
- **Mac: Restart SystemUIServer (Menu Bar)**
- **Mac: Force Kill App**
- **Mac: Restart CoreAudio**
- **Mac: Logout**
- **Mac: Change Wallpaper**
- **Mac: Open Google Chrome** - includes option to silence debugger extensions

> 🧠 Most macOS utilities use native AppleScript or shell commands and do not require any additional setup.

### Windows Utilities

- **Windows: Run PowerShell Script** Executes a `.ps1` script using PowerShell with optional arguments and input.
- **Windows: Speak Text** Uses the system voice to speak the given text (PowerShell-based TTS).
- **Windows: Kill Application** Force-kills a process by name (e.g., `notepad`, `obs64`).
- **Windows: Run Scheduled Task** Triggers a Windows Task Scheduler task by name.
- **Windows: Launch Application** Starts an application using its name or full path (e.g., `notepad.exe`, `C:\App\app.exe`).
- **Windows: Run Script File** Executes `.bat`, `.vbs`, or `.exe` files with optional arguments.
- **Windows: Take Screenshot** Uses Snipping Tool to capture a screenshot to the clipboard (`/clip` mode).
- **Windows: Set Wallpaper** Changes the desktop wallpaper using the Windows API via PowerShell.
- **Windows: Open File or Folder** Opens a file or folder in Explorer.
- **Windows: Toggle Mute** Mutes or unmutes system audio.
- **Windows: Open Google Chrome** - includes option to silence debugger extensions

## Deep Link / URI Actions

- **Open Deep Link / URI:** Open any URI (e.g., st-business://, zoommtg://, slack://, etc.) using the system default handler.
- **Open Splashtop Connection:** Open a Splashtop session for a specific machine using your account email and the machine’s MAC address.
- **Join Zoom Meeting:** Launch Zoom and join a meeting with ID and optional passcode.
- **Open Teams Chat:** Open a Microsoft Teams chat by email address.
- **Start FaceTime Call:** Initiate a FaceTime call to a phone number or Apple ID.
- **Open Slack Channel:** Open a Slack channel by workspace and channel ID.
- **Compose Email:** Open the default mail client to compose a new email with optional recipient, subject, and body pre-filled.
- **Open File or Folder:** Open a local file or folder using the system’s default application.
- **Open VNC Connection:** Open a VNC connection to a specified host and port.
- **Open WhatsApp Chat:** Open a WhatsApp chat with a phone number and optional message.
- **Open Skype Chat:** Start a Skype chat with a specific username.
- **Open Telegram Chat:** Open a Telegram chat by username.
- **Start Google Meet:** Launch a new Google Meet session in the browser.
- **Play YouTube Video:** Open a specific YouTube video by its video ID in the browser.
- **Play Apple Music Track:** Open a specific Apple Music track by its track ID.

## Spotify Actions

- **Spotify: Open Track** Open a specific Spotify track by its track ID.
- **Spotify: Open Album** Open a specific Spotify album by its album ID.
- **Spotify: Open Artist** Open a specific Spotify artist page by its artist ID.
- **Spotify: Open Playlist** Open a specific Spotify playlist by its playlist ID.
- **Spotify: Search** Perform a search in the Spotify app using a search query.
- **Spotify: Open Show** Open a specific Spotify podcast show by its show ID.
- **Spotify: Open Episode** Open a specific Spotify podcast episode by its episode ID.

---

## Feedbacks

- "X" Font is Installed
- CPU Load
- CPU Temp (⚠️ Note: CPU Temperature is not available on Apple Silicon Macs.)
- Disk Usage
- GPU Load (⚠️ Note: GPU Load is not available on all computers.)
- Memory Usage
- Network Interface Utilization/Load
- Network Interface is Up/Down

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
