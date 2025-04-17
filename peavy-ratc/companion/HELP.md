## Peavy RATC Control Protocol

This module is for control of Peavy NION DSPs. The RATC v1, v2, and v2 RAW modes are supported. All testing performed against Nion's running firmware 2.0. The selected protocol version must match what your DSP configuration. RATC v2 is more powerful, offering relative changes, multiple change groups, and a keep alive. It should be used preferentially unless RATC v1 is required for compatibility reasons. Similarly, RATCv2 offers a better experience than RATCv2 RAW unless control of an arbitrarily large number of aliases is required, or the system can't be changed due to other dependencies.

This module may work with older Media Matrix units in RATCv1 mode, however this is untested and unsupported.

### Configuration

**Host**

Enter the hostname or IP address of the DSP.

**Port**

This should normally remain 1632.

**Username / Password**

The RATC protocol specifics that a login must be performed after connection before control is allowed. This is transmitted in plain text.

In nWare ensure that the user account has Network Control Access set to allowed.

**Use V2**

Disable to use RATC v1 commands.

### Actions

Most actions require reference to a control alias. The module will auto query and build a drop-down list of the control aliases upon connection. You may enter a custom alias if working offline. Refer to Peavy's External Control User Guide for further details.

All control aliases in use are added to the default change group so they can be polled periodically. If you use a variable without an associated action, you should manually add it to the default control group.

To create a toggle button, use the Control Position Invert action (RATCv2 only), and insert the variable for the controls position as its position value.

### Variables

The detected control aliases, their values & positions (RATCv2) are returned as variables. Variable names for control aliases containing white space ' ' will be replaced with '\_'. Values are kept as strings and retain their units; positions are converted to a number. Note: Returned strings containing whitespace will be truncated at the first whitespace.

Variables are not defined when in RATC v2 RAW mode to preserve system resources. They can still be referenced if you follow the pattern of (yourModuleName:controlAliasValue*rawAlias) or (yourModuleName:controlAliasPosition_rawAlias). However, in the rawAlias the '/' have been substituted with '*'. I.e., $(Nion_N3:controlAliasValue\_\_\_devices_10_controls_hold_time)
They will not have a value assigned until used by an action.

### Feedbacks

No feedbacks are provided. The native Internal Variable Check Value feedback is suitable for common feedback tasks such as mute tally when provided with a controls value or position variable.

## Action Recorder

The Action Recorder will translate any recieved numeric valueIs messages into Control Position Set (if RATCv2) or Control Set actions.

## Version History

### Version 1.1.4

- Better sanitising of variable Ids

### Version 1.1.3

- Parse local variables

### Version 1.1.2

- Use Node 22
- Update dependencies

### Version 1.1.1

- Minor fixes
- Update dependencies

### Version 1.1.0

- Action Recorder
- Update dependencies

### Version 1.0.3

- Minor fixes

### Version 1.0.1

- Better status updates
- Minor fixes & typos
- Companion-module-base updated to 1.8.0

### Version 1.0.0

- Initial release
