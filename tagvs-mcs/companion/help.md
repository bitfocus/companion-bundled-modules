# TAG MCS Companion Module

This module integrates with the TAG Video Systems MCS API (v5), allowing you to switch layouts and audio channels on outputs. It communicates directly with the TAG MCS (not MCM), which is the system of record in mixed environments.

---

## 🔧 Configuration

- **MCS IP Address**  
  The IP address of the TAG MCS system.

- **Port**  
  Defaults to `443`.

- **Username / Password**  
  Credentials for API access.

- **Enable Polling**  
  Whether the module should poll the MCS for updates (default: `true`).

- **Polling Rate (milliseconds)**  
  How often to refresh data (default: `5000` seconds).

- **Verbose Mode**  
  Enable logging of internal actions and API responses for debugging.

---

## ⚙️ Actions

- **Select Output**
  Select an Output to be used on other actions.

- **Select Layout**
  Select a Layout to be used on other actions.

- **Select Video Channel**
  Select a Video Channel to be used on other actions.

- **Select Audio Channel**
  Select a Audio Channel to be used on other actions.

- **Select Tile Number**
  Select a Tile Number to be used on other actions.

- **Modify Layout**
  Modify a layout by changing the Video Channel assigned to a Tile Number.

- **Apply Layout to Output**  
  Assign a layout to an output. These can either be chosen from a list or using the pre-selected Output or Layout.

- **Change Audio Channel for Output**  
  Assign a selected audio channel to an output, using `audio_index` (defaults to `1`).

---

## 💡 Feedbacks

- **Layout is Active on Output**  
  Active when a selected layout is currently assigned to an output. These can either be chosen from a list or using the pre-selected Output or Layout.

- **Output Using Selected Audio Channel**  
  Active when a selected audio channel is currently feeding the output.

---

## 📊 Variables

Variables are generated per output, layout, and channel.

### ➤ Outputs

- `output_<uuid>_label` — Display Label UUID of the Output
- `output_<uuid>_layout_label` — Label of the Layout currently assigned
- `output_<uuid>_audio_channel_label` — Label of the audio channel
- `output_<uuid>_mux_audio_pid` — Output audio PID

### ➤ System Info

- `output_count` — Total number of Outputs
- `layout_count` — Total number of Layouts
