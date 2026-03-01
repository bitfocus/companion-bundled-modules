# Evision HD102 Module

## Overview

The **Evision HD102 module** allows you to control an **Evision HD102 LED screen controller** via UDP.  
You can adjust screen brightness, incrementally increase or decrease brightness, freeze the display, and activate blackout.  

> Note: The HD102 does not send feedback to Companion.  
> Brightness state is internally tracked by the module.

---

## Configuration

After adding the module:

- **Host:** The IP address of your Evision HD102 controller.  
- **Port:** The UDP port used by the HD102 (default is usually `9099`). 

Ensure your computer can reach the device over the network.

---

## Actions

### Set Brightness
Adjust the display brightness of the LED screen.

- **Option:** Brightness (%) — number from 0 to 100.

### Adjust Brightness (+/-)
Increase or decrease brightness relative to the current value.

- **Option:** Adjustment — positive or negative number (for example `+1` or `-5`).

Brightness is automatically limited between 0 and 100.

### Freeze
Freeze the current screen content.

- **Option:** State — `ON` or `OFF`.

### Blackout
Turn off the LED screen immediately.

- **Option:** State — `ON` or `OFF`.

---

## Variables

- `${brightness}` — Displays the current brightness value (0–100).

This value updates when the brightness is changed on the HD102 controller.

---

## Notes

- The module sends UDP packets to the device. Ensure your firewall allows UDP traffic.  
- The device does not return status information.  

---

## Troubleshooting

- **No response from the device:** Check IP and Port configuration. Make sure the device is on the same network.  
