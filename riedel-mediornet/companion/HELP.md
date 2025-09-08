**Riedel Mediornet Module**

This module enables the matrix control of Riedels Mediornet.

## Configuration
Please enter:
- IP-Address
- Auto-Take
- Reset Selection
- InputCount
- OutputCount

EmBER+ Port is 9000 by specification from Riedel.

**IP-Address:**
Enter the IP Address of the main Mediornet Device

**Auto Take:**
When enabled, a source is routed to the selected destination immediately.

**Reset Selection:** Reset Source and Target after Take action.

**Input-/OutputCount:**
For offline Programming, you can give a wanted amount of in-/outputs to give you access to all variables and dropdown menues.
This value is internally overwritten, when a connection is established.

## Available commands
For each matrix there are the two selection actions.
* Select Source
* Select Target

For all matrices exists
* take
* clear
* undo

## Available feedbacks
* Source currently selected
* Target currently selected
* Source which is routed to currently selected target
* Source which is routed to specified target
* Valid take feedback, when target and source of the same matrix is selected
* Clear feedback, when something is selected
* Undo, shows when you can undo the last routing process on a selected target

## Available presets
* Take
* Clear
* Undo
* Source Selection
* Target Selection

## Available variables
| Variable name                                            | What it shows                                                                                 |
|----------------------------------------------------------|-----------------------------------------------------------------------------------------------|
| **$(INSTANCENAME:input_MATRIXLABEL_SOURCEID)**           | Label of the specified source in the specified matrix                                         |
| **$(INSTANCENAME:output_MATRIXLABEL_TARGETID)**          | Label of the specified target in the specified matrix                                         |
| **$(INSTANCENAME:output_MATRIXLABEL_TARGETID_input)**    | Label of the specified source in the specified matrix routed to the currently selected target |
| **$(INSTANCENAME:output_MATRIXLABEL_TARGETID_input_id)** | Id of the specified source in the specified matrix routed to the specified target             |
| **$(INSTANCENAME:selected_target)**                      | Label of the selected target                                                                  |
| **$(INSTANCENAME:selected_target_source)**               | Label of the source routed to the selected target                                             |
| **$(INSTANCENAME:selected_target_undo_source)**          | Label of the source which was routed to the target previously                                 |
| **$(INSTANCENAME:selected_source)**                      | Label of the source which is selected                                                         |
