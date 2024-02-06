## Panasonic AVHS

This module will connect to the Panasonic AV-UHS500, AV-HS410 and AW-HS50 video switchers. To control the AV-HS410, you will need to install the plug-in software for external interface control.

If you want feedbacks to work on the AV-HS410 please enable both network plugins (AUXP_IP and HS410_IF)
Plugins for the AV-HS410 mixer can be found by creating a login and downloading them directy from Panasonic: [Panasonic Support](https://eww.pass.panasonic.co.jp/p2ui/guest/TopLogin.do?lang=en&category=pav)

### Configuration

- Type in the device IP address.
- The device will communicate over port 60040 as default, this can be changed in the settings.

**Note** When using this module with more than one AV-HS410, the variables will be mirrored on all instances of the module, and the values will only follow the first mixer. This is due to the multicast protocol implemented by Panasonic.

### Available actions

- Bus crosspoint control
- Send AUTO transition
- Send CUT transition
- Auto transition time control (Not supported by AV-HS50)

For additional actions, please raise a feature request on [GitHub](https://github.com/bitfocus/companion-module-panasonic-avhs/).
