# The Lighting Controller

Should work with all releases of [The Lighting Controller](http://thelightingcontroller.com), which is more commonly know as -
- Showtec QuickDMX
- Chauvet ShowXpress
- Sweetlight Controller

And uses the same API as the [Live Mobile](https://thelightingcontroller.com/viewtopic.php?f=85&t=4552) application and web interface, as well as VirtualDJ.

You can watch it in action [here](https://youtu.be/ZXqoXWrK5jI).

## Features
The module exposes button and fader names and states/values.  These can be best understood by looking at the preset examples.

Buttons can either be referenced using name which is independent of where they appear in the controller software, or by their position, which is based on the page, column and row number.

Using the button position presets means that moving buttons around in the controller interface will result in corresponding changes to the position of buttons on the StreamDeck, and it also supports button renaming.  As such this is the recommended approach.  However, you can alternatively explicitly reference by name, which will not be affected by buttons being moved, or pages being renamed.  The presets are split into two, otherwise identical, groups called 'Buttons by name' and 'Buttons by position' to demonstrate the difference.

Button colors and icons can also be synchronized with controller button colors using the feedback system.  Again, the presets demonstrate this.

The Faders also support lerping (fading) between 2 colors with the relative fader value, again using the feedback system.  The presets show a Fader On, which fades with the fader, and goes to 0 (normally MAX, though +100 can be used instead), when pressed; and a Fader Off, which doesn't fade with the fader, but goes to -100 on pressing, and is highlighted when the value is set to -100 (can be controlled with the tolerance option).  Using both button presets together allows you to toggle a fader between 0 and -100, and easily see the current setting.

### Commands

- Tempo control using:
    - Set BPM to explicit value
    - Tap BPM which not only set's the current BPM, but sends manual Beat commands to controller.
    - Turn on/off Audio BPM (where BPM calculated from PC audio), when on use the Tap action to send individual Beat commands.
- Set Freeze DMX to on/off.
- Send a cue name, which will toggle the button of the same name.
- Button commands, which can either be targetted by their name or position, and use one of the following modes:
    - Toggle a button (equivalent to LiveMobile)
    - Press a button (useful when using Solo Page buttons as prevents accident unsetting, or for flash   buttons)
    - Release a button (for completeness)
- Set fader to explicit value
- Timeline control, note that module tracks state manually as no feedback is received from QuickDMX, so issues may result if other control software is used at the same time:
    - Play From - Plays from the marker
    - Play/Pause - Plays or pauses the timeline
    - Stop - Stops the timeline
- Sequential List control
    - Go
    - Pause
    - Stop
- Refresh
    - Manual refresh interface state
- Custom Command (Advanced users only - allows sending a custom TCP command for future-proofing)

### Feedback

- **Update button based on status** : Indicates when the Controller software is disconnected, by dimming buttons and setting text to 'Offline'.
- **Synchronise button colors, by name** : Will synchronise the button colours using the specified button's name.  Also indicates when button name is no longer valid.
- **Synchronise button colors, by position** : Will synchronise the button colours using the specified button's position. Also indicates when button position is no longer valid.
- **Match fader value** : Will set the button color when the specified fader's value matches a specific value to within the specified tolerance.
- **Fade with fader value** : Will fade the background color of the button based on the fader's value.
- **Timeline play/pause** : Changes the timeline play/pause to the correct icon.
- **Sets the BPM Tap button state** : Updates the current beat icon on a button.
