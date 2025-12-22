## AJA HELO

**Supported Actions**

- Start/Stop Record
- Start/Stop Streaming
- Change Audio / Video input
- Change recording profile
- Change streaming profile
- Change Current layout
- Recall Presets
- Enable/Disable Scheduler and configure scheduler actions
- Rename file
- Rename file with current timestamp - YYYYMMDD_HHMM

Check out the [AJA HELO Support Page](https://www.aja.com/products/helo#support) for firmware updates and hardware support.

For information on the HELO REST API, please see the [AJA HELO REST API Repo](https://gitlab.aja.com/pub/rest_api).

**Variables & Polling**

This module supports polling the HELO REST API, and saves the response to certain states. Polling can be set to various options.

**Authentication (Beta)**

In the event that your HELO has User Authentication enabled the module will attempt to authenticate with the given password.
