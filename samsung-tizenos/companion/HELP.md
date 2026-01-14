## Samsung Tizen OS — Companion Module

This Companion module allows you to control a Samsung Tizen signage display via its embedded web server.  
It supports logging in, querying device information, and changing device settings such as the panel power state.

### Tested Device & Firmware

This module has been tested with the following hardware and software configuration:

- **Model:** Samsung 85" Crystal 4K UHD Signage QBC (QB85C)
- **Tizen OS / Firmware Version:** `Tizen 7.0`
- **Application Version:** `S-KSU2EWWC-1113.2; S-KECINSS-1013`

Other models or firmware versions may work but are not guaranteed.

### Device Setup

On the Samsung monitor, navigate to:
Settings → Network → Embedded Server Settings

Set **Server Mode** to **"Server"**.

After that, open the embedded web interface in a browser:
https://\<IP-address\>:4000

There you can set or change the administrator password.

### Module Configuration

Open the Companion module configuration and configure the following fields:

- **Target IP** — IP address or hostname of the Tizen web server
- **Target Port** — Web server port (default: `4000`)
- **Use HTTPS** — Enable if the device is configured to use HTTPS
- **Login ID** — Administrator username (default: `admin`)
- **Password** — Password for the administrator account
- **MAC Address** — MAC address of the display  
  _(used for actions and feedbacks; exactly one monitor is expected)_
