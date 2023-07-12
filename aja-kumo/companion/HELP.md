## AJA Kumo Router control
This module sends HTTP requests to the router for control. On connection, we get the current router status and watch for changes for feedbacks and variables.

### Actions

- Route a source (input) to a destination (output) (`route`)
	- The primary command for routing. Use to set the Source and the Destination in a single button press.
- Pre-select a destination (`destination`)
	- This is a two-part action. It sets a draft destination you choose and Companion remembers it. Then later, run "Send source" action once you know the intended Source. This could be in a separate button press, or after some processing has occurred.
- Send source to the pre-selected destination (`source`)
	- The second part. Sends a route command with the Source being the one chosen here, and the Destination being the one pre-selected with the action "Pre-select".
- Take (apply) a salvo
	- Sends a command to apply a saved salvo.
- Swap source between two given destinations
	- Nominate a Destination A and B, and the sources between the two will be swapped. Useful for example for swapping the inputs shown on a particular section of a multiviewer.

### Variables
- Salvo names
	- `$(kumo:salvo_name_n)`
- Currently routed source per destination:
	- `$(kumo:dest_n)`
- Source and destination names: 
	- `$(kumo:src_name_n_line1)`
	- `$(kumo:src_name_n_line2)`
	- `$(kumo:dest_name_n_line1)`
	- `$(kumo:dest_name_n_line2)`
- Currently pre-selected source button within Companion
	- `$(kumo:source)`
- Currently pre-selected destination within Companion
	- `$(kumo:destination)`

### Feedbacks
All feedbacks are booleans, which allows them to be used in triggers.

- Selection of a destination button (`active_destination`)
	- When a different destination button is selected in Companion
- Selection of a source button (`active_source`)
	- When a source button is selected in Companion
- Source matches the pre-selected destination (`source_match`)
	- When this source is routed to the pre-selected destination remembered by Companion
- Specific source is routed to a specific destination (`destination_match`)
	- When routing on this device changes to a specific source and destination.

### Usage


#### Behaviour similar to KUMO

To create a complete 'matrix' of source and destination buttons similar to the KUMO CP and KUMO Web Browser User Interface, follow the below steps.

1. For a source button:
	- Create a button with Button text:
	```1\n$(kumo:src_name_1_line1)\n$(kumo:src_name_1_line2)```
	- Add a Press action for **Send source to the pre-selected destination** with `Source number`: 1.
	- Add a Feedback for **Source matches the pre-selected destination** with `Source number`: 1. By default, this will make the button background turn red. 
	- Copy and paste the button to have as many Source buttons as desired. Modify each one and increment the number `1` in the Button text, Press action and Feedback to the correct number.
2. For a destination button:
	- Create a button with Button text:
	```1\n$(kumo:dest_name_1_line1)\n$(kumo:dest_name_1_line2)```
	- Add a Press action for **Pre-select a destination** with `Destination number`: 1
	- Add a Feedback for **Selection of a destination button** with `Destination number`: 1. By default, this will make the button background turn red.
	- Copy and paste the button to have as many Destinations buttons as desired. Modify each one and increment the number `1` in the Button text, Press action and Feedback to the correct number.

##### Side note

The feedback 'Selection of a source button' (`active_source`) is not used in the above steps and is not be required for recreating the typical 2-button press of the KUMO Control Panel.

It may be potentially used if you wish to have a 3-button press system, i.e., first button press is the Destination (feedback to illuminate that button), second button press is the Source (feedback to illuminate that button: `active_source`), and a 3rd button press to 'Apply' or commit that decision. However, this would need to be implemented. Because currently the action 'Send source to the pre-selected destination' (`source`) immediately sends the routing change.