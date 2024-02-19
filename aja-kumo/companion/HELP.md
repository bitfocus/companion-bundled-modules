## AJA KUMO Router control
This module sends HTTP requests to the router for control. On connection, we get the current router status and watch for changes for feedbacks and variables.

### Usage

#### 2-button press behavior similar to KUMO Control Panel  

A complete 'matrix' of source and destination buttons can be created that can apply routing changes using a familiar 2-button press method to the one present in the KUMO Control Panel (CP) and the web browser interface.


**Create the buttons**

1. Go to Presets > AJA: Kumo > Source buttons, and drag each desired Source to a button on your page.

2. Go to Destination buttons, and drag each desired Destination to a button on your page.

**Use**

1. Press a 'Destination' button. It illuminates a Source to which it is currently routed, and grabs it for a subsequent routing change.

2. Press any 'Source' button. It will perform a route between that Source and the Destination you just grabbed.



## Documentation

### Actions

- Route a source (input) to a destination (output) (`route`)
	- For explicitly routing a source to a destination. Used to perform a route in a single button press.
- Pre-select a destination (`destination`)
	- This is a two-part action. It sets a draft destination you choose and Companion remembers it. Then later, run "Send source" action once you know the intended Source. This could be in a separate button press, or after some processing has occurred.
- Send source to the pre-selected destination (`source`)
	- The second part. Sends a route command with the Source being the one chosen here, and the Destination being the one pre-selected with the action "Pre-select".
- Take (apply) a salvo
	- Sends a command to apply a saved salvo.
- Swap source between two given destinations
	- Nominate a Destination A and B, and the sources between the two will be swapped. Useful for example for swapping the inputs shown on a particular section of a multiviewer.

### Presets

- Destination buttons
	- A button to simulate the behavior of the KUMO Control Panel. Press once to 'grab' a Destination, the corresponding Source button is shown highlighted and then press any other Source button to apply routing to that Source.
	- Destinations 1 through max matrix count (4, 16, 32 or 64) are available in the list.
	- The button label consists of 3 lines: Number, Label Line 1 and Label Line 2.
- Source buttons
	- A button to simulate the behavior of the KUMO Control Panel. A Source button will illuminate when you press a Destination button, if that Destination and Source are currently routed.
	- Sources 1 through max matrix count (16, 32, or 64) are available in the list.
	- The button label consists of 3 lines: Number, Label Line 1 and Label Line 2.

### Variables
`n` indicates the number of the source or destination.

- Source and destination names: 
	- `$(kumo:src_name_n_line1)`
	- `$(kumo:src_name_n_line2)`
	- `$(kumo:dest_name_n_line1)`
	- `$(kumo:dest_name_n_line2)`
- Source and destination combination name for button labels:
	- `$(kumo:src_n_label_combo)`
	- `$(kumo:dest_n_label_combo)`
- Currently pre-selected source button within Companion
	- `$(kumo:source)`
- Currently pre-selected destination within Companion
	- `$(kumo:destination)`
- Currently routed source per destination:
	- `$(kumo:dest_n)`
- Salvo names
	- `$(kumo:salvo_name_n)`

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

### 2-button press behavior - manual steps

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