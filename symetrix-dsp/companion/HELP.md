## Symetrix DSP

This module will allow you to control your Symetrix DSP using TCP commands and ready incomming data.

### Configuration

- In Companion, specify the IP address of the Symetrix DSP and the DSP TCP control port (defaults to 48631)



### Available actions

**General**
- flash_dsp
- reboot_dsp

**Setup**
- load_preset
- load_global_preset
- get_latest_preset _(Will get the latest recalled preset from DSP to send to feedback in case a preset is recalled from SymView)_

**Change control values**
- set_value _(Set control number to a specific number 0 - 65535)_
- change_value _(Set control number to a specific number 0 - 65535)_
- toggle_on_off _(If value of control number is greater than 0, value is set to 0. If value is 0, value will be set to 65535)_

### Available feedbacks

**General**
- connected _(Is true when a TCP connection is active with the DSP)_

**Values**
- on_off_value _(Is **true** when a control number has a positive value other than **0**)_

### Available variables

**General**
- connected _(Is **true** when a TCP connection is active with the DSP)_

**Setup**
- last_preset _(Last recalled preset from the TCP connection. Recalls from Symview will not be displayed)_

**Control values**
- control_value_### _(Returns the current value of a control number when it updates. **Push must be enabled in Composer for the specific control number**)_


_Note:_ As you can see, the values of control numbers dynamically stored in a variable (replace ### with the control number). 
If a variable does not exist yet, it will be created on the go when needed.
