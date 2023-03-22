**Riedel Mediornet Module**

This module enables the matrix control of Riedels Mediornet.

## Configuration
Please enter:
- IP-Address
- Auto-Take
- InputCount
- OutputCount

EmBER+ Port is 9000 by specification from Riedel.

**IP-Address:**
Enter the IP Address of the main Mediornet Device

**Auto-Take:**
When enabled, a source is routed to the selected destination immediatly.

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

## Available feedbacks
* Source currently selected
* Target currently selected
* Source which is routed to currently selected target
* Valid take feedback, when target and source of the same matrix is selected
* Clear feedback, when somthing is selected

## Available presets
* Take
* Clear
* Source Selection
* Target Selection

## Available variables
| Variable name                                         | What it shows                                                                                 |
|-------------------------------------------------------|-----------------------------------------------------------------------------------------------|
| **$(INSTANCENAME:input_MATRIXLABEL_SOURCEID)**        | Label of the specified source in the specified matrix                                         |
| **$(INSTANCENAME:output_MATRIXLABEL_TARGETID)**       | Label of the specified target in the specified matrix                                         |
| **$(INSTANCENAME:output_MATRIXLABEL_TARGETID_input)** | Label of the specified source in the specified matrix routed to the currently selected target |
| **$(INSTANCENAME:selected_target)**                   | Label of the selected target                                                                  |
| **$(INSTANCENAME:selected_target_source)**            | Label of the source routed to the selected target                                             |
