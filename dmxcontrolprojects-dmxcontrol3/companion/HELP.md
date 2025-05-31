## DMXControl Companion Module

This module is designed to control DMXControl version 3.3.0.  
It enables seamless integration between Companion and DMXControl, allowing you to trigger macros, control executors, and monitor feedback directly from your Companion interface.

[Learn more about DMXControl on the official homepage.](https://www.dmxcontrol.de/)

## Configuration

- **Net ID**: Use the Network ID from DMXControl Umbra to enable automatic connection.
- **Device Name**: A custom name to register Companion in the DMXC network.
- **Disable Auto-discovery**: Enable this option to prevent automatic connection using the Network ID.
- **Target IP**: IP address for manually connecting to Umbra.
- **Target Port**: TCP port for manual connection to Umbra.
- **Username & Password**: Reserved for future use.

### Supported Actions (for Executor or Macro)

- **Press Button**: Press a macro or executor button (numbers 1–4).
- **Release Button**: Release the pressed button.
- **Increment Fader**: Increase the fader value by a step size.
- **Decrement Fader**: Decrease the fader value by a step size.
- **Set Fader**: Set the fader to a specific value.

### Supported Feedback

- **Button State**: Indicates if the button is pressed.
- **Button Name**: Displays the name of the selected button.
- **Fader State**: Shows the current value of the fader.
- **Fader Name**: Displays the name of the fader.
- **Macro Image**: Displays the image associated with the macro.
