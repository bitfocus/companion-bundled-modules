# Mixing Station

This module provides access to the mixer parameters exposed via the [Mixing Station](https://mixingstation.app) API.

## Features

This module provides access to:

- All mixer parameters exposed in the Mixing Station API
- Feedback and variables for all those parameters

Live metering data is currently not implemented, but can be added in the future

## Requirements

- Desktop version of Mixing Station (>= V2.4.1)
- Companion

## Setup

1. Open Mixing Station and enable the REST api (see [manual](https://mixingstation.app/ms-docs/integrations/apis/))
2. Add the `Mixing Station` module to companion
3. Enter the IP (usually `localhost`) and Port (usually `8080`) of the API
4. Connect Mixing Station to a mixer or use offline mode

### Actions

The following actions are provided:

| Action             | Description                             |
| ------------------ | --------------------------------------- |
| `Start Offline`    | Starts offline mode in mixing station   |
| `Connect to Mixer` | Connects mixing station to a mixer      |
| `Set Value`        | Sets a mixer parameter to a fixed value |
| `Toggle Value`     | Toggles a mixer parameter               |

#### Set Value

This action allows you to set a single mixer parameter.
The value you enter will be in the target unit. So if your parameter value is in `dB` you need
to enter the value in dB as well.

On/Off values are represented by `1/0`

#### Toggle Value

This action allows you to toggle through a single mixer parameter.
The parameter must be a on/off value or a selection (for example a mute button, or peq filter type).

### Feedback / Variables

The module will dynamically create variables based on the configured feedback items. Thus, if you want to display
a variable of a mixer value, make sure to create a feedback item for it first.
Afterward, a new variable will be available in companion.

For example:

1. Add a new feedback to a button: `Mixer value`
2. Chose the parameter, for example `ch.1.grp.dca.0` for the DCA 1 assignment of Channel 2
3. Now a new variable has automatically been created which you can for example use
   in the button text: `mixer_ch-1-grp-dca-0`
