# Exaplay Control Module

This module enables control of Exaplay via TCP commands and provides feedback and variables to monitor and automate playback, cue/clip selection, volume, and more.

---

## Actions

All actions require you to enter the correct **Composition ID**.  
You can enter either just the number (e.g. `1`) or the full ID (e.g. `comp1`).  
**For every action and every step in multi-step actions, you must fill in the Composition ID field.**

### Available Actions

- **Transport Mode**  
  *What to do:*  
  - Select the action "Transport Mode"  
  - Enter the desired Composition ID (e.g. `1` or `comp1`)  
  - Choose the command: Play, Pause, or Stop

- **Set Cue**  
  *What to do:*  
  - Select the action "Set Cue"  
  - Enter the desired Composition ID (e.g. `1` or `comp1`)  
  - Enter the cue/clip number you want to jump to (e.g. `2`)  

- **Set Volume**  
  *What to do:*  
  - Select the action "Set Volume"  
  - Enter the desired Composition ID (e.g. `1` or `comp1`)  
  - Enter the volume value (0–100)

- **Volume Adjust +/-**  
  *What to do:*  
  - Select the action "Volume Adjust +/-"  
  - Enter the desired Composition ID (e.g. `1` or `comp1`)  
  - Choose whether to increase (+10%) or decrease (-10%) the volume

- **Jump to Time**  
  *What to do:*  
  - Select the action "Jump to Time"  
  - Enter the desired Composition ID (e.g. `1` or `comp1`)  
  - Enter the time in seconds (e.g. `12.5`)  

---

## Feedbacks

All feedbacks require you to enter the correct **Composition ID** (e.g. `1` or `comp1`).  
If you want to monitor a specific cue/clip, you must also enter the cue/clip number.

> **Note:**  
> Feedbacks only become active and display correct information after the corresponding action (whose feedback you want to monitor) has been triggered at least once for the selected composition. For example, the "Cue/Clip Active Feedback" will only work after you have used the "Set Cue" action for that composition.

### Available Feedbacks

- **Transport Mode Feedback**  
  - Enter the Composition ID  
  - Choose the transport mode to compare (Playing, Paused, Stop)

- **Cue/Clip Active Feedback**  
  - Enter the Composition ID  
  - Enter the cue/clip number to monitor

- **Cue/Clip Index Display Feedback**  
  - Enter the Composition ID  
  - Optionally set background and text color

- **Volume Display Feedback**  
  - Enter the Composition ID  
  - Optionally set background and text color

- **Current Time Feedback**  
  - Enter the Composition ID  
  - Enter the time in seconds to compare  
  - Optionally set background and text color

- **Frame Index Display Feedback**  
  - Enter the Composition ID  
  - Optionally set background and text color

- **Combined Info Feedback**  
  - Enter the Composition ID  
  - Optionally set background and text color

---

## Presets

Preset buttons are provided for common tasks.  
**You must always enter the correct Composition ID in the preset options for each button, even if the preset contains multiple steps.**

### Examples

- **Play/Pause Preset**  
  - Enter the Composition ID in the preset options  
  - The button will show the playback status for the selected composition

  *Tip:*  
  In the button text, you can display the variable for the desired composition by adding the composition number before the last parenthesis.  
  Example:  
  ```
  $(vioso-exaplay:playback_status_comp1)
  ```
  Replace `1` with your desired composition number.

- **Set Cue/Clip Preset**  
  - Enter the Composition ID  
  - Enter the cue/clip number

- **Volume +/- Presets**  
  - Enter the Composition ID

- **Jump to Time Preset**  
  - Enter the Composition ID  
  - Enter the time in seconds

- **Feedback Display Presets**  
  - Enter the Composition ID (and cue/clip number if needed)

---

## Variables

For each composition, the module automatically creates and updates variables.  
You must use the correct composition ID in variable references.

**Examples:**  
- `$(vioso-exaplay:playback_status_comp1)` — Shows the playback status for composition 1  
- `$(vioso-exaplay:cue_index_comp2)` — Shows the current cue index for composition 2  
- `$(vioso-exaplay:current_volume_comp1)` — Shows the current volume for composition 1

---

## Important Notes

- Always enter the correct Composition ID for every action, feedback, and preset button.
- This applies even if an action or preset contains multiple steps.
- For all feedbacks, the Composition ID is required.
- When using variables in button texts, you can display the value for a specific composition by adding the desired number before the last parenthesis, e.g.:  
  ```
  $(vioso-exaplay:playback_status_comp1)
  ```
- The "Set Cue" action replaces both "Go to Cue" and "Play Cuelist Clip". Use the cue/clip number as needed.
- **Feedbacks only become active after the corresponding action has been triggered at least once for the selected composition.**

If you have any questions or need further customization, please refer to the module documentation or contact support.



