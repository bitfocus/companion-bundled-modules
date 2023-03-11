# HDTV WolfPackGreen HDMI Matrix

A module for controlling HDTV WolfPackGreen HDMI Matrix.

## Support for Models

- HDTVFIX1600AE
- HDTVFIX1600E

## Available Commands

- Route single input to specific output
- Route single input to multiple outputs
- Select Inputs
- Select Outputs
- Apply Outputs
- Clear Selection
- Send Command
- Save Layout
- Recall Layout
- Unset Output
- Unset All Output

Note: To use Apply Outputs, select an input, then select the outputs you want the input to go to, repeat for all of the input/outputs combinations you want to set and then run Apply Outputs action

## Example Configuration

You can download an example configuration that is setup for all of the commands at <https://raw.githubusercontent.com/bitfocus/companion-module-hdtv-wolfpackgreen/main/examples/HDTV%20Companion%20Example%20Configuration.companionconfig> and then right-click and Save As.

The pages in the configuration are 95-99. The first button on pages 96-99 will take the action on the button on press and release but if you long press the button it will navigate to page 95. For page 99, there is a long press for buttons 1-3 to navigate to page 95, apply the selected outputs and clear the selected outputs.

Note: You will need to enable Companion OSC Listener in the Settings for the navigation buttons to work at they use generic OSC commands /press/bank/X Page/X button
