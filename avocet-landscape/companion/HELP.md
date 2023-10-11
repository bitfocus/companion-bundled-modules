## Avoce RT Limited
This module connects to Landscape Transmission Automation and provides cues panel support.

### Configuration
* This requires that your Avocet Landscape system be configured with the latest cues panel controller
* You must also configure the python3 process companion_cuespanel.py to be started at boot.

* The python process can be obtained from Avocet RT Limited along with instructions for configuring 
  the software plus example layout. The pyhon application provides the serial communications interface
  to the Landscape automation system. It is only supported on a Raspberry Pi using python3. Use of this software
  requires the correct cues panel controller on the Landscape. Please contact Avocet for full instructions and 
  arrange an update of your Landscape system.
  

### Available actions
* ButtonPressed - accepts the button name as a parameter
* ButtonReleased - accepts the button name as a parameter
* The button name determines the action performed by the Landscape and there are specific to each site.
* Standard buttons names include HOLD, TAKE, MCUE, PAUSE

### Feedback
* Panel Button State - Controls the state of the cues panel button.
* Comms State -  Sets the state of the comms indicator.
