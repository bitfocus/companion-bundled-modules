## SportInTheBoxVersion In The Box 2 plugin

Sport In TheBox is a powerful production and playout system that allows the user to create engaging live content and output it to video boards, in-house tv systems and streaming.

It handles playout of stored images and videos, live video inputs, replays and graphics for both full screen scoreboards and overlays for TV.


With great flexibility SportInTheBoxVersion In The Box can output almost any format and resolution to adapt with custom video screens, making it the ideal solution for both smaller clubs and larger arenas.


Sport In The Box In The Box can have multiple live video inputs with SDI, HDMI or NDI and the output windows can be placed in any size and position on the desktop to adapt to the LED-screens used, taking away the need for a video scaler.

For more information and contacts visit [our website](https://www.iccmediasport.com/en/sport-in-the-box/)

![main_form](sibMainForm.png)

## Actions

### Trigger QuickButton

Best way to create QB action is to drag it from SIB presets.
All values will be filled.

![preset_start_qb.png](preset_start_qb.png)

or select from list of possible actions in drop-down.

![action_trigger_qb.png](action_trigger_qb.png)

Plugin uses SIB api to fire QuickButton events via *Trigger ID*.

![qb_trigger_id](sibQuickButtonsTriggerId.png)

API password is set in *Settings -> General -> API*

![sib_api_pass](sibApiPass.png)

### Open database

![action_open_db.png](action_open_db.png)

To open database, SIB v2.16 and above is required as well as SIB service
helper (can be found in tray area).

![sib_helper_tray.png](sib_helper_tray.png)

![sib_helper.png](sib_helper.png)

New password will be generated at first start and should
be set in the module *helper password* field.

![cmp_helper_pass.png](cmp_helper_pass.png)

### Change team

Change team via preset. Home and guest team can be changes separately.

![preset_teams.png](preset_teams.png)

Inside preset, all teams are shown with team color and small team image.

![preset_team_select.png](preset_team_select.png)

Once created, team can be changed with the action editor.

![action_change_team.png](action_change_team.png)
