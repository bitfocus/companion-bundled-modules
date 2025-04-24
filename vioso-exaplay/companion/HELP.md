# Exaplay Control Module

This module enables control of Exaplay via TCP commands and provides feedback to monitor the playback status as well as other parameters. Additionally, variables are provided that reflect the current state of each composition. Although commands use a composition identifier with the `"comp"` prefix, the module internally creates and updates variables using the new naming convention (`"comp-id"`).

---

## Supported Commands / Actions

The following actions can be executed through the module:

- **Transport Mode**  
  Toggles playback for a selected composition.  
  Examples:  
  - `play,comp1`  
  - `pause,comp1`  
  - `stop,comp1`  
  *(Note: The command still uses "comp1" as an identifier. The module internally maps these commands to variable names with the "comp-id" prefix.)*

- **Go to Cue**  
  Sets the cue index for a selected composition to jump to a specific cue.  
  Example:  
  - `set:cue,comp1,2`  
    (The cue index is stored in the internal variable `cue_index_comp-id1` and displayed via the corresponding feedback.)

- **Play Cuelist Clip**  
  Plays a specific clip from the cuelist by setting a manual clip index.  
  Example:  
  - `set:cue,comp1,3`  
    (The clip index is stored in the internal variable `clip_index_comp-id1` and displayed via the corresponding feedback. This prevents the device-reported cue index from overwriting the manual setting.)

- **Set Volume**  
  Sets the volume for a selected composition to a specified value (0 to 100).  
  Example:  
  - `set:vol,comp1,60`

- **Volume Adjust +/-**  
  Increases or decreases the volume of a selected composition by 10%.  
  Examples:  
  - Increase using the "+" option  
  - Decrease using the "-" option

- **Jump to Time**  
  Sets the cue time for a selected composition to a specific point in seconds.  
  Example:  
  - `set:cuetime,comp1,2.0`

---

## Feedbacks

The module provides several feedbacks to visualize the current status and parameters:

- **Transport Mode Feedback**  
  Compares the current playback status (converted from numeric values: `1` → "playing", `2` → "paused", otherwise "stop") with an expected value and changes the button color accordingly.

- **Volume Display Feedback**  
  Displays the current volume level of the selected composition.

- **Clip Index Display Feedback**  
  Displays the clip index that is manually set via the "Play Cuelist Clip" action.

- **Cue Index Display Feedback**  
  Shows the cue index set via the "Go to Cue" action.

- **Current Time Feedback**  
  Displays the current playback time when a defined threshold is exceeded.

- **Frame Index Display Feedback**  
  Displays the current frame index.

- **Combined Info Feedback**  
  Bundles all of the above information into one multi-line display, including the transport mode, volume, clip index, cue index, current time, frame index, and total composition duration.

---

## Presets

In addition to actions and feedbacks, the module comes with pre-configured presets to simplify user interaction:

- **Play/Pause Preset**  
  This preset displays a button that toggles between playing and pausing the selected composition (e.g., comp1). It uses different feedback styles based on the current transport mode (playing, paused, or stopped). For example, when the composition is playing, a specific background color is displayed, and the button text shows the corresponding variable (e.g., `$(Exaplay:playback_status_comp-id1)`).

- **Stop Preset**  
  This preset provides a dedicated stop function. The button is styled to indicate the stop state and updates its appearance based on the transport mode feedback.

*(These presets are defined within the module's code and can be adjusted by the user or extended with additional presets.)*

---

## Variables

For each composition, the module automatically creates and updates a set of variables. These variables are generated with a new naming convention using the `"comp-id"` prefix, even though the composition identifiers in the commands remain as `"comp1"`, `"comp2"`, etc.

The following variables are generated:

- `playback_status_comp-idX`  
  (e.g., `playback_status_comp-id1` – holds the current playback status as text: "playing", "paused", "stop", or "unknown")

- `current_time_comp-idX`  
  (e.g., `current_time_comp-id1` – contains the current playback time in seconds)

- `frame_index_comp-idX`  
  (e.g., `frame_index_comp-id1` – contains the current frame index)

- `cue_index_comp-idX`  
  (e.g., `cue_index_comp-id1` – holds the cue index updated via the "Go to Cue" action)

- `clip_index_comp-idX`  
  (e.g., `clip_index_comp-id1` – holds the clip index set via the "Play Cuelist Clip" action)

- `composition_duration_comp-idX`  
  (e.g., `composition_duration_comp-id1` – contains the total duration of the composition)

- `current_volume_comp-idX`  
  (e.g., `current_volume_comp-id1` – contains the current volume level)

*Note: The module internally converts the composition identifier from the `"comp"` format to the `"comp-id"` format when defining and updating variables.*

---

## Function Summary

- **Actions**:  
  - **Transport Mode**: Starts, pauses, or stops playback for a composition.  
  - **Go to Cue**: Jumps to a specific cue within a composition by updating the cue index.  
  - **Play Cuelist Clip**: Sets a manual clip index to play a specified clip.  
  - **Set Volume**: Adjusts the volume of a composition to a specific value.  
  - **Volume Adjust**: Increases or decreases the volume by 10%.  
  - **Jump to Time**: Moves playback to a specific time within the composition.

- **Feedbacks**:  
  - **Transport Mode Feedback**: Indicates whether the composition’s playback status matches the expected value.  
  - **Volume Display Feedback**: Shows the current volume level.  
  - **Clip Index Display Feedback**: Displays the manually set clip index.  
  - **Cue Index Display Feedback**: Shows the current cue index.  
  - **Current Time Feedback**: Displays the current time if a specified threshold is exceeded.  
  - **Frame Index Display Feedback**: Shows the current frame index.  
  - **Combined Info Feedback**: Consolidates all key parameters (transport mode, volume, clip index, cue index, current time, frame index, and composition duration) in one display.

- **Variables**:  
  The module automatically creates and updates variables to represent the current status of each composition. These variables now use the `"comp-id"` prefix (for example, `playback_status_comp-id1`) to distinguish them from command identifiers.

- **Presets**:  
  Pre-configured button presets (such as Play/Pause and Stop) are provided to facilitate control of the module. These presets utilize the actions, feedbacks, and variables described above to deliver clear, visual feedback of the module's state.



