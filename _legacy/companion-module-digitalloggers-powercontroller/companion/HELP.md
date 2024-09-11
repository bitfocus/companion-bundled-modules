Digital Loggers Power Controller

This module controls outlets on Digital Logger Power Controller devices, like the Web Power Pro Switch or the Ethernet Power Controller.

## Config

*You must enable `Allow legacy plaintext login methods` in the Settings for the Device. Use the `Secure` option in the module config if you are concerned about passing this password over the network.*

To get outlet states for feedbacks, you must enable the Update Interval in the config area. Setting it to `0` will disable the interval, but feedbacks will not be updated if the device is controlled outside of the Companion module.

## Actions

- Turn Outlet On/Off/Cycle
- Turn All Outlets On/Off

## Variables

- Outlet Names
- Outlet States

## Feedbacks

- Outlet is On/Off

## Presets

- Turn Outlet On/Off/Cycle
- Turn All Outlets On/Off