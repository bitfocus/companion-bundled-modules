## Softouch EasyWorship

This module controls EasyWorship 7.3+

**Available Button Presets**

* EZW: Logo Command
* EZW: Black Command
* EZW: Clear Command
* EZW: Previous Slide Command
* EZW: Next Slide Command
* EZW: Play Command
* EZW: Pause Command
* EZW: Toggle Command
* EZW: Send Command 

**Trouble Shooting Missing EasyWorship Servers in Connections**
Sometimes there will not be any servers in the EasyWorship Servers dropdown selector.
If this happens then it means one of two things. One, there aren't actually any EasyWorship servers running.
Two, that companion got confused about something.  In the latter case try restarting companion.
If that doesn't work then reboot your machine.

If you've done all this, perhaps multiple times, and EasyWorship doesn't show up.  Run the powershell
script.

**Variables**
$(EZW:Logo) used in Feedback to control the Logo buttons color
$(EZW:Black) used in Feedback to control the Black buttons color
$(EZW:Clear) used in Feedback to control the Clear buttons color

**Addition Button Manual Configuration - Colors are suggestions only.  Use whatever you like best**
## Logo - Add 2 addition feedbacks to have the logo buttons state mimic EasyWorship
internal: Check variable value.
    Variable: $(EZW:Logo)
    Operation: =
    Value: 0
    Change style properties of Color and Background
    Color: White
    Background: Black

internal: Check variable value.
    Variable: $(EZW:Logo)
    Operation: =
    Value: 1
    Change style properties of Color and Background
    Color: Black
    Background: R=255 G=204 B=102

## Black - Add 2 addition feedbacks to have the black buttons state mimic EasyWorship
internal: Check variable value.
    Variable: $(EZW:Black)
    Operation: =
    Value: 0
    Change style properties of Color and Background
    Color: White
    Background: Black

internal: Check variable value.
    Variable: $(EZW:Black)
    Operation: =
    Value: 1
    Change style properties of Color and Background
    Color: Black
    Background: R=255 G=204 B=102

## Clear - Add 2 addition feedbacks to have the clear buttons state mimic EasyWorship
internal: Check variable value.
    Variable: $(EZW:Clear)
    Operation: =
    Value: 0
    Change style properties of Color and Background
    Color: White
    Background: Black

internal: Check variable value.
    Variable: $(EZW:Clear)
    Operation: =
    Value: 1
    Change style properties of Color and Background
    Color: Black
    Background: R=255 G=204 B=102

