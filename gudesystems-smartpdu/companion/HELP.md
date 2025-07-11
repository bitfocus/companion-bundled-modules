# Gude Systems Smart PDU

This module allows you to control Smart PDUs from [Gude Systems](https://www.gude.info/), such as the Expert Power Control 8226.

## Module Setup

1. Enter the **IP address** of the PDU.
2. If the device requires authentication, enable the checkbox and enter the **username** and **password**.
3. Optionally, enable **polling** to keep outlet states and sensor variables updated on an interval.

---

## Actions

- **Turn ON Outlet**  
  Turns a specified outlet (or all outlets) on.

- **Turn OFF Outlet**  
  Turns a specified outlet (or all outlets) off.

- **Toggle Outlet**  
  Flips the state of the outlet (on → off or off → on).

- **Reset Outlet**  
  Performs a pre-configured power cycle (off → delay → on).

---

## Feedbacks

- **Outlet ON State**  
  Changes color when a selected outlet is currently ON.

---

## Variables

- `hostname` – Device hostname
- `firmware` – Firmware version
- `uptime` – Device uptime in seconds
- `outlet_count` – Number of detected outlets
- `outlet_1_name`, `outlet_1_state`, etc. – Outlet names and ON/OFF state
- `sensor_XXX_L1_0`, etc. – Flattened sensor values with their names, values and units  
  (e.g., `Sensor 664.L1.0` → `sensor_664_L1_0_name`, `sensor_664_L1_0_value`, `sensor_664_L1_0_unit`)

---

If your PDU supports additional sensors or features, those will be exposed as variables automatically when polling is enabled.
