## gamepad-io

This module allows you to use game controllers with Companion, either by just tracking variables and feedbacks of button/axis states, or as a control surface.

### Configuration

- The remote device must be running gamepad-io, a listener program that relays the gamepad controller events to Companion. You can download it for free here: <http://www.github.com/josephdadams/gamepad-io>
- Configure the instance with the IP address of the remote machine running the gamepad-io software.
- The module makes socket.io requests over port 8809 by default.

_Configuration Steps:_

1. Enter the gamepad-io host IP address. If it is the same computer as Companion, you can leave the default of `127.0.0.1`.
1. Click "Save", and reload the module configuration tab by clicking on the module again in the Connections tab.
1. If no controllers have been detected, both gamepad-io and the gamepad-io module will report this. You may need to press a button on a connected game controller or game pad in order for it to detect.
1. Once you have a controller detected, click the module in the Connections tab and the configuration page will now show a list of controllers.
1. If you previously configured a controller which is no longer connected to the computer, you will need to select a different controller.
1. Select the controller you want to use. The number of buttons and axes will be shown alongside the name of the controller.
1. Choose the button mapping you want to use with the controller. If your controller is not listed in the choices, simply choose `Generic`. Any controller should work - just the variables and other features will not be specifically known/named.

   _Xbox 360 Controller Button Mapping_
   ![XBox 360 Controller](images/xbox360.png?raw=true 'XBox 360 Controller')

   _Xbox One Controller Button Mapping_
   ![XBox One Controller](images/xboxone.png?raw=true 'XBox One Controller')

1. `Use controller as a Companion Satellite Surface`: If you want to use the controller as a Companion control surface, enable this option. This will allow the module to automatically create a satellite surface to Companion.
   The buttons on the controller will map to Companion in the same order as they are displayed in Companion. Row 1, Button 1 would be button 0 on the controller. The button numbering in Companion is "zero based". So, for example, if you have a standard layout with 8 columns and 4 rows, button 9 on the controller would become the Companion surface button on row 2, column 2.
1. When you are using the controller as a Companion surface, you will have the following configuration options:
   - `Haptic Feedback when Button Pressed (Experimental)`: Whether or not to emit a haptic/vibration response to the controller when a button has been pressed. You can set the type and other parameters in Actions on a per button/axis level.
   - `Button Press Threshold`: The percentage of variance in the button that must be met to trigger a button _PRESS_. This is useful for buttons that may not fully reach 100% or if you want to trigger them early.'
   - `Button Release Threshold`: The percentage of variance in the button that must be met to trigger a button _RELEASE_. This is useful for buttons that may not fully reach 0% or if you want to trigger them early.'
   - `Button Debounce`: the amount of time in milliseconds that must pass before another press of the same button can be registered again.
   - `Use Axis Movement as Button Press`: Allows you to move an axis that will ultimately be registered as a button press on the surface. All axis "buttons" will fall on the surface after the last button index. If enabled, all axes on the controller will each occupy two buttons on the surface, one for positive movement and one for negative movement.
   - `Axis Movement Press Threshold`: The axis movement threshold is the percentage of variance in the axis that must be met to trigger a button press or release. This is useful for joysticks that may not fully reach 100%. So, for example, if set to 10, the joystick must be within 90-100% to trigger a press, or 0-10% to trigger a release.
1. `Behavior on Disconnect`: The behavior on disconnect is what happens when the module loses connection to gamepad-io or the controller you were using. You can choose to reset all buttons and axes to 0, or hold the last value until reconnected.
1. `Verbose Logging`: Enabling this option will put more detail in the log, which can be useful for troubleshooting purposes.

**After you have successfully configured your module with a controller, the module status will change to "Ok", and you can revisit the module configuration at any time to change settings as desired.**

### Actions

- Surface Settings (Available when using game controller as a Companion surface)

  - `Enable/Disable Haptic Feedback (Global/For All Buttons)`: Enables/Disables haptic feedback to the controller.
  - `Set Haptic Properties (Per Button)`: Change the haptic feedback settings for a specific button on the controller.
  - `Set Button Press Threshold (Global/For All Buttons)`: Change the percentage of variance in the button that must be met to trigger a button _PRESS_.
  - `Set Button Release Threshold (Global/For All Buttons)`: Change the percentage of variance in the button that must be met to trigger a button _RELEASE_.
  - `Set Button Type (Per Button)`: Set whether it should behave like a button, or a trigger. Buttons are typically pressed (value of 1) or not pressed (value of 0). Triggers are essentially a one-sided axis that can be pressed some value between 0 and 1, whereas a normal axis can go between -1, 0 (center), and 1. This setting will inform some other actions and variables on how the button should behave. By default, all buttons will behave like Buttons.
  - `Set Button Invert (Per Button)`: Invert the button press behavior for a specific button on the controller.
  - `Set Button Debounce (Global/For All Buttons)`: Change the amount of time in milliseconds that must pass before another press of the same button can be registered again.
  - `Set Haptic Properties (Per Axis)`: Change the haptic feedback settings for a specific axis on the controller.
  - `Set Axis Deadzones (Per Axis)`: Change the range of the joystick/axis movement (per axis) that is ignored.
  - `Set Axis Movement as Button Presses (Global/For All Axes)`: Allow axis movement to be interpreted as a surface button press.
  - `Set Axis Movement Press Threshold (Global/For All Axes)`: Change the percentage of variance in the axis in order for a button to be _PRESSED_ or _RELEASED_.
  - `Set Axis Type (Per Axis)`: Used to tell the module whether this is an X or Y axis, which informs the variable outputs. It helps you to know if it is an axis going left/right, or up/down.
  - `Set Axis Invert (Per Axis)`: Used to invert a specific axis so that negative movement becomes positive, etc.

- Controller Settings:
  - `Lock/Unlock Controller`: Locks the controller so that no further input is accepted, until unlocked.
  - `Send Haptic Feedback`: Sends a Haptic Feedback command to the Controller.
  - `Set Button Mapping`: Change the button name and id for a specific button on the controller.
  - `Set Axis Mapping`: Change the axis name and id for a specific axis on the controller.
  - `Set Button Range Display (Per Button)`: The display range is the minimum and maximum values to actually display/use in variables. This is useful for changing the range of a button to a differernt value than the default 0 to 1.
  - `Set Axis Range Display (Per Axis)`: The display range is the minimum and maximum values to actually display/use in variables. This is useful for changing the range of an axis to a different value than the default -1 to 1.
- Other Settings:
  - `Button/Axis Behavior on Disconnect`: The behavior on disconnect is what happens when the module loses connection to gamepad-io or the controller you were using. You can choose to reset buttons and axes to 0, hold the last value until reconnected, or set each button/axis to a custom value.
  - `Set Button Value / Percent`: Set the value of a specific button on the controller. This can be useful if the button is not behaving as expected or you don't have a controller right now.
  - `Release Button Value Hold`: Release the value hold of a specific button on the controller. Returns value control to the controller.
  - `Set Axis Value / Percent`: Set the value of a specific axis on the controller. This can be useful if the axis is not behaving as expected or you don't have a controller right now.
  - `Release Axis Value Hold`: Release t he value hold of a specific axis on the controller. Returns value control to the controller.
  - `Load / Save Custom Mapping`: Load from disk or Save to disk your custom mapping.
  - `Relaunch`: Close the gamepad-io application and re-open it.

## Feedbacks

- `Controller Connected`: Used to show that a controller is detected by gamepad-io and available for use in Companion.
- `Controller is Locked`: Used to show that the Controller has been locked out (in Actions) or not.
- `Controller Button is Pressed`: Used to show that a particular Button on the controller is currently pressed or not.
- `Controller Button is Touched`: Used to show that a particular button on the controller is currently touched or not. Triggers on a controller, for example, can be touched but not fully pressed.
- `Button is Inverted`: Used to show if the selected Button is inverted or not.
- `Axis is Inverted`: Used to show if the selected Axis is inverted or not.

## Variables

_General:_

- `connected`: Whether or not the module is connected to the gamepad-io software.
- `information`: Current status of the module
- `version`: Current version of the gamepad-io software

_Surface Mode:_

- `use_as_surface`: Whether the module is creating a satellite surface with the controller data or not
- `haptic_when_pressed`: Whether the module will send a haptic response to the controller when a button is pressed
- `button_press_threshold`: Button Press Threshold
- `button_release_threshold`: Button Release Threshold
- `button_debounce`: Current button debounce value, in ms
- `axis_button_press`: Whether axis movement can trigger a Companion surface button press or not
- `axis_movement_threshold`: Current threshhold value, how close the axis has to be to its min or max range to be triggered

_Controller:_

- `controller_uuid`: Unique UUID of the controller, provided by gamepad-io
- `controller_id`: ID of the controller detected by gamepad-io
- `controller_name`: A friendlier version of the ID
- `controller_total_buttons`: Total Number of Buttons on the controller
- `controller_total_axes`: Total Number of Axes on the controller
- `controller_locked`: Whether the Lock has been turned on (in Actions) or not.

_Buttons:_

- `button_x_pressed`: Button [x] is Pressed
- `button_x_touched`: Button [x] is Touched
- `button_x_val`: Raw Value between 0 to 1 of how much Button [x] is Pressed
- `button_x_val_abs`: Absolute Value of Button [x]
- `button_x_val_display`: Display range of Value if it has been remapped
- `button_x_val_display_abs`: Absolute Value of Display Range
- `button_x_pct`: Percentage between 0 to 100 of how much Button [x] is Pressed
- `button_x_pct_abs`: Absolute value of Percentage
- `button_x_type`: Whether the button is a Button or a Trigger
- `button_x_inverted`: If the button has been inverted or not (Inverted Button Values are only affected in the Display Range)
- `button_x_hold`: If the value of the button has been set to a specific value by the module or not

_Axes:_

- `axis_x_pressed`: Axis [x] is Pressed
- `axis_x_val`: Value of Axis [x] between -1 and 1
- `axis_x_val_abs`: Absolute Value of Axis [x]
- `axis_x_val_display`: Display Range of Value if it has been remapped
- `axis_x_val_display_abs`: The Absolute Value of the Display Range
- `axis_x_pct`: Percentage of Value between -100 and 100
- `axis_x_pct_abs`: Absolute Value of Percentage of Value between -100 and 100
- `axis_x_direction`: If X, left/right, if Y, up/down. If unknown, negative/positive
- `axis_x_invert`: If the axis has been inverted or not (Inverted Axis Values are only affected in the Display Range)
- `axis_x_range_display_min`: The remapped value of the actual axis negative value
- `axis_x_range_display_max`: The remapped value of the actual axis positive value
- `axis_x_neg_deadzone`: Axis Deadzone Negative range
- `axis_x_pos_deadzone`: Axis Deadzone Positive range
- `axis_x_hold`: If the value of the axis has been set to a specific value by the module or not

## Presets

- No presets at this time.
