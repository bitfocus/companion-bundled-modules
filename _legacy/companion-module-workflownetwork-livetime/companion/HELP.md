# LiveTime Companion Module

This module controls the [LiveTime](https://www.workflownetwork.com/products/live-time) software using the [beta API](https://workflownetwork.zendesk.com/hc/en-us/articles/4421381933079) that was added in verison 1.18.

## Requirements

- Must be on server version 1.18 or higher
- Must have a server on and the Presets Engine module enabled (via an In-App Purchase).
- Presets called by the API must exist on the same Mac that the Server is on. If using a Preset built on another LiveTime Mac, please use the export/import Preset functions.
- The server password must be enabled.
- API must be turned on in Live Time preferences.

## Known issues

- There currently isn't a way to set a timer without also starting it (API Limitation)
- The "Reset" action's auto-start option isn't working correctly (API Bug?)
  - For now, keep that option disabled.
- Time-of-Day is slow to show up when called (API Bug?)

_(I'm calling those last 2 API bugs because they exhibit the same behaviour when the request is sent from CURL, so it isn't a Companion issue)_

## Available Commands

- Timers (Main and Aux)
  - Start
  - Stop
  - Set
  - Reset
- Presets
  - Recall by index
  - Recall previous
  - Recall next
- Overlay
  - Show
  - Hide
