# ProTimer Companion Module

Control your ProTimer software directly from Bitfocus Companion.  
This module connects to the ProTimer Web API and allows full control over timers, messages, screen display, and visual settings.

---

## Configuration

In the **module configuration**, you must specify:

- **Host** – IP address or hostname of the computer running ProTimer  
- **Port** – API port number (as configured in ProTimer)

Example:  
`Host: 127.0.0.1`  
`Port: 9000`

Once connected, the module will report **OK** when communication with the ProTimer API is successful.

---

## Actions

### 🕒 Timer Control
| Action | Description |
|--------|--------------|
| **Timer start** | Starts the current timer. |
| **Timer stop** | Stops the current timer. |
| **Timer pause** | Pauses the current timer. |
| **Timer toggle pause/resume** | Toggles between pause and resume. |
| **Timer set** | Sets a specific timer value (format: `HH:MM:SS`). |
| **Timer (countdown / countdown to zero)** | Starts a countdown or countdown-to-zero timer with a specified time. |
| **Timer countup** | Starts a countup timer from a specified starting time. |
| **Timer countdown to time** | Counts down to a specific wall-clock time (format `HH:MM:SS`), with an option to clear or go beyond zero. |
| **Timer update** | Adjusts the timer by a number of seconds (use `+30` or `-10` format). |
| **Timer blinking** | Controls the blinking state of the timer (`On`, `Off`, or `Toggle`). |

---

### 🖥️ Screen Control
| Action | Description |
|--------|--------------|
| **Screen blackout** | Turns the display output on, off, or toggles between states. |

---

### 💬 Message Control
| Action | Description |
|--------|--------------|
| **Message toggle** | Show, hide, or toggle the on-screen message. |
| **Message set** | Updates the message text (use variables if needed). |
| **Message send** | Sends a one-time message to all displays. |

---

### ⚙️ Settings
| Action | Description |
|--------|--------------|
| **Change settings** | Dynamically change visual or layout settings of the ProTimer display. |

**Available settings include:**
- **Display mode** (`All`, `Single Top`, `Single Bottom`, `Side by Side Top`, `Side by Side Bottom`)  
- **Text and name size**
- **Colors** for text, background, boxes, clocks, timers, and QLab timers  
- **Transparency** of the background  
- **Clock/Timer/QLab names and color bars**  
- **Enable/disable color bars**  

Most options accept variables, numeric input, color pickers, or dropdowns as applicable.

---

## Feedbacks
- **Feedbacks can be enabled or disabled via the Enable Timer Feedbacks / Polling checkbox in the module configuration.**
- **When disabled, the module does not poll the ProTimer API, and variables/feedbacks will not update.**

---

## Variables

The module provides live variables for timers and clocks. Variables are updated automatically when **Enable Timer Feedbacks / Polling** is turned on in the module configuration.

### Timer Variables
| Variable | Description |
|----------|-------------|
| `$(PROTIMER:timer_time)` | Timer in `HH:MM:SS` format |
| `$(PROTIMER:timer_mmss)` | Timer in `MM:SS` format |
| `$(PROTIMER:timer_hh)` | Timer hours |
| `$(PROTIMER:timer_mm)` | Timer minutes |
| `$(PROTIMER:timer_ss)` | Timer seconds |
| `$(PROTIMER:timer_state)` | Timer state: `running` or `stopped` |

### Clock Variables
| Variable | Description |
|----------|-------------|
| `$(PROTIMER:clock_time)` | Clock in `HH:MM:SS` format |
| `$(PROTIMER:clock_mmss)` | Clock in `MM:SS` format |
| `$(PROTIMER:clock_hh)` | Clock hours |
| `$(PROTIMER:clock_mm)` | Clock minutes |
| `$(PROTIMER:clock_ss)` | Clock seconds |

---

## Notes

- This module communicates with ProTimer via its built-in **HTTP API** (`/api/` endpoints).  
- Ensure that ProTimer’s web server is enabled and accessible from your Companion system.  

---

## Example Setup

1. Open ProTimer → Settings → Enable Webserver → Note the IP and port.  
2. In Companion, add the **ProTimer** module.  
3. Enter the same **Host** and **Port** values.  
4. Create buttons for timer control, message display, or display settings.  
5. Test the connection — the module status should turn **OK**.
