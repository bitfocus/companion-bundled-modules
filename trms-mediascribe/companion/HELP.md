## TRMS MediaScribe

This module allows you to control [TRMS MediaScribe](https://trms.com) transcription appliances from Bitfocus Companion. MediaScribe provides real-time transcription, captioning, and recording capabilities.

## Configuration

| Setting                       | Description                                                                                                       |
| ----------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| **MediaScribe Appliance URL** | The full URL of your MediaScribe appliance, including the protocol and port. Example: `http://192.168.1.100:8080` |
| **API Token**                 | The API bearer token for authentication. Obtain this from your MediaScribe appliance's administration settings.   |

## Actions

| Action                  | Description                                                                                               |
| ----------------------- | --------------------------------------------------------------------------------------------------------- |
| **Start Transcribing**  | Starts a new transcription session. Returns a warning if already recording.                               |
| **Stop Transcribing**   | Stops the current transcription session. Returns a warning if not currently recording.                    |
| **Toggle Transcribing** | Starts transcription if stopped, or stops it if currently active.                                         |
| **Set Preset**          | Changes the active MediaScribe preset to the selected one. Cannot be changed while recording.             |
| **Cycle Preset**        | Advances to the next preset in the list, wrapping around to the first. Cannot be changed while recording. |

## Feedbacks

| Feedback            | Type    | Description                                                                                 |
| ------------------- | ------- | ------------------------------------------------------------------------------------------- |
| **Is Transcribing** | Boolean | True when a transcription session is active. Default style: red background with white text. |
| **Has No Signal**   | Boolean | True when the input signal is lost. Default style: yellow background with black text.       |

## Variables

| Variable                         | Description                                           |
| -------------------------------- | ----------------------------------------------------- |
| `transcription-status`           | Current transcription state: "Active" or "Inactive"   |
| `active-preset-id`               | The ID of the currently active preset                 |
| `active-preset-name`             | The display name of the currently active preset       |
| `transcription-duration-seconds` | Elapsed transcription time in seconds                 |
| `transcription-duration-string`  | Elapsed transcription time formatted as HH:MM:SS      |
| `site-name`                      | The configured site name of the MediaScribe appliance |
| `has-no-signal`                  | Whether input signal is missing: "true" or "false"    |

## Presets

The module includes pre-configured button presets ready for drag-and-drop use:

| Preset                   | Category          | Description                                                                                        |
| ------------------------ | ----------------- | -------------------------------------------------------------------------------------------------- |
| **Start Transcribing**   | Recording Control | Starts transcription. Turns red when active.                                                       |
| **Stop Transcribing**    | Recording Control | Stops transcription.                                                                               |
| **Toggle Transcribing**  | Recording Control | Toggles transcription on/off. Turns red when active.                                               |
| **Cycle Preset**         | Presets           | Cycles through available presets.                                                                  |
| **Transcription Status** | Status            | Display-only button showing current status. Changes color based on transcription and signal state. |
| **Active Preset**        | Status            | Display-only button showing the name of the currently active MediaScribe preset.                   |
