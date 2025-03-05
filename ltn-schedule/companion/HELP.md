# LTN Schedule

LTN Schedule delivers simplified workflows for creating 24/7 linear programs from archived content
and live elements, with ad management.

LTN Schedule is part of LTN Lift, a solution for flexible broadcast workflows.
It is an LTN-hosted playout solution that gives channel creators the modular tools to rapidly scale
and uniquely reach cross-platform audiences more efficiently, driving greater revenue.
LTN Lift simplifies mixing pre-recorded assets and live sources programming distributed across all
digital platforms, including FAST. Increase subscribers while reducing churn.
Deliver the right ad markers to the right platforms.
More infos available on the LTN website: https://ltnglobal.com/

## Configuration

To get a pair of credentials for the Schedule API, create a new user in the Schedule UI and assign
the api user role to it. You can then use it to connect through this companion module.

| Setting          | Description                                                     |
|------------------|-----------------------------------------------------------------|
| **Host**         | Enter the hostname of your Schedule instance.                   |
| **API Username** | Enter the username of one of the Schedule instance's API Users. |
| **API Password** | Enter the corresponding password.                               |

## Actions

| Action                      | Description                                                                                                                                          |
|-----------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Toggle playback running** | Starts/stops the playback without publishing (timestamp can be set like in the Schedule UI).                                                         |
| **Toggle publishing**       | Starts/stops publishing if the playback is running.                                                                                                  |
| **Toggle push targets**     | Enables/disables push targets.                                                                                                                       |
| **Skip a playback element** | Jump to next item when the playback is running, with a selectable strategy                                                                           |
| **Trigger an ad**           | Triggers an ad of the desired length when system is pushing.                                                                                         |
| **Cancel an ad**            | Cancels a running ad break.                                                                                                                          |
| **Toggle breaking live**    | Starts/stop a breaking live, with a selectable livestream. If the selected livestream is different from the running one, it will try to switch to it |
| **Toggle PNG Overlay**      | Toggle the activation of the PNG overlay.                                                                                                            |
| **Toggle HTML5 Overlay**    | Toggle the activation of the HTML5 overlay.                                                                                                          |
| **Toggle hold**             | Toggle the hold parameter of the current running element.                                                                                            |
| **Insert template**         | Insert an existing template from the Schedule system                                                                                                 |
| **Cancel bumper**           | Cancels the currently-running bumper if there is one                                                                                                 |
| **Resync system**           | Attempts re-syncing with the redundant system                                                                                                        |
| **Jump to element**         | Jump to an element by ID, index, title, or custom key and value pair                                                                                 |
| **Toggle output scaling**   | Activate or deactivate the currently set output scaling settings                                                                                     |

## Feedback available

| Feedback                            | Description                                                                                          |
|-------------------------------------|------------------------------------------------------------------------------------------------------|
| **Playout running status**          | Shows whether the playback is running.                                                               |
| **Publish status**                  | Shows whether the playback is not running/running/pushing.                                           |
| **Targets publish status**          | Shows if the selected push targets are disabled/enabled/pushing/error.                               |
| **Skippable status**                | Shows if the skip action is possible, or on cooldown.                                                |
| **Ad trigger status**               | Shows if an ad can be triggered or if one is currently running.                                      |
| **Breaking live status**            | Shows if breaking live can be enabled, and if it is active                                           |
| **Breaking live livestream status** | Shows if a specific livestream is the active breaking live and is running                            |
| **PNG Overlay status**              | Shows if the overlay is active or not.                                                               |
| **HTML5 Overlay status**            | Shows if the overlay is active or not.                                                               |
| **Hold status**                     | Shows if the current element has the hold property enabled or not, or if it is currently being held. |
| **Template insertion status**       | Shows if the insertion of a template is running or has failed                                        |
| **Breaking live bumper status**     | Shows if a breaking live bumper is currently running or not                                          |
| **Redundant system sync status**    | Shows the current status of the redundancy system                                                    |
| **Element playing status**          | Shows if an element is playing (by ID)                                                               |
| **Flexible playback status**        | Shows if flexible playback mode is activated                                                         |
| **Output scaling status**           | Shows if output scaling is activated                                                                 |

## Variables

| Variable                 | Description                                                                                        |
|--------------------------|----------------------------------------------------------------------------------------------------|
| **currentRemainingTime** | Shows a timer with the remaining time for the current element                                      |
| **totalPlayedTime**      | Shows a timer with the total played time of the rundown                                            |
| **totalRemainingTime**   | Shows a timer with the total remaining time of the rundown                                         |
| **totalDuration**        | Shows the total duration of the rundown                                                            |
| **adRemainingTime**      | Shows a timer with the remaining time of the current longest ad break, or empty if none is running |
| **elementRunning**       | Shows the ID of the current element running                                                        |
| **elementRunningIndex**  | Shows the index of the current element running                                                     |

## Presets

- A preset for each livestream to use as breaking live is created.
- A preset for each existing push target on the Schedule system is created.
- Presets for playback actions (toggle playback, publish, overlays, hold) are created
- A preset for template insertion is created
- Presets for current status timers are created
- A preset for jumping to an element
- A preset for output scaling button
