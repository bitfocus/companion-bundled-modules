## Smart-AVI Matrix
This module is for controlling the matrices with direct IP control by Smart-AVI, the MU-88, the MXU-88 and MXCORE series. The devices' documentation are really bad and the devices seem to be quite buggy, so please don't complain if the module, especially feedbacks, are not working correctly.

### Configuration
* Type in the IP address of the device.
* Since there is no reliable way to query the type of the connected device, you have to enter the device type manually  
* Leave the Framenumber at "00" unless you changed the number of your matrix for some reason 

### Actions
* Switch - Route input to output
* Select source and destination - just select inputs and outputs for routing them with the 'Route selected ports' action
* Route selected ports - make tie between selected ports

### Feedbacks
* Route - Shows if a given source is routed to a given output or selected port
* selected Source and Destination - Shows the currently selected ports for the 'Route selected ports' action

### Variables
* source_U_O1 - The input currently routed to output 1 on level U, the number counts up to the number of available ports, the single letter is the internal code for the level

### Presets
* Presets are available for selection of all inputs and outputs your matrix supports. You can use them to make routes with one, two or three button pushes. 
With one push you need a button for every input and set it to your output. 
With two pushes use: 1. Select Output, 2. Select and Take Input   
with three pushes use: 1. Select Output or Select Input, 2. Select Input or Select Output, 3. Take selected  
The presets for selecting and switching crosspoints make the buttons act very similar to an X/Y salvo panel. Color feedbacks show active routes and selections as background and text colors. It is more difficult to explain than it is in reality, so just play with it and you'll get it.