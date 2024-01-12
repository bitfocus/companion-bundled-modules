## Luminex GigaCore

Control your Luminex GigaCore

For second generation GigaCore's, firmware version 1.2.0 or later is advised. Earlier versions may work but were not tested.

- GigaCore30i
- GigaCore20t
- GigaCore18t
- GigaCore16t
- GigaCore16i
- GigaCore10i
- GigaCore10t

For first generation GigaCore's, firmware version 3.0.2 or later is advised. Earlier versions may work but were not tested

- GigaCore10
- GigaCore12
- GigaCore14R
- GigaCore16Xt
- GigaCore16RFO
- GigaCore26i

The devices have to be reachable over the Bitfocus Companion network.

### Configuration

- Type in the IP address of the device. Any IP on which the GigaCore Web interface can be reached, should work.
- If authentication is enabled on the device, provide the password.
- Check the 'Gen1' checkbox if you are targetting a first generation GigaCore:
  - GigaCore10
  - GigaCore12
  - GigaCore14R
  - GigaCore16Xt
  - GigaCore16RFO
  - GigaCore26i

### Actions implemented

General actions:

- Identify the device
- Reboot
- Reset
- Recall a profile

Groups / Trunks:

- Set port to a specific group
- Set port to a specific trunk
- Increment the group or trunk of a port

Port settings:

- Enable, disable or toggle PoE on a port. Only available on PoE-capable ports on a PoE-capable switch.
- Enable, disable or toggle Link on a port

### Feedbacks implemented

- Link State: Make text color Green if port has an active link
- Port Disabled: Make text color Grey if port is disabled
- Port Color: Set the background color to the color of the group or trunk assigned to the port
- Group Color: Set the background color to the color of a specific group

For PoE-capable ports on PoE-capable switches:

- PoE enabled on a certain port: make text color Green when PoE is enabled
- PoE sourcing on a certain port: make text color Green when PoE is sourcing

### Presets implemented

General presets:

- Active profile name. Identify device when pressed
- Device name and active profile name. Identify device when pressed
- Reboot
- Reset

Groups / Trunks:

- For each group, button to set port 1 to the group. Can easily be modified to set another port to the group.

Ports:

- For each port, button to toggle the link
- For each port, button to increment the group or trunk of that port

For PoE-capable ports on PoE-capable switches:

- For each port, a button to toggle PoE

Profiles:

- For each profile slot: button to recall the profile

### Variables implemented

| Id                        | Name                      |
| ------------------------- | ------------------------- |
| `device_name`             | Device Name               |
| `serial`                  | Serial Number             |
| `mac_address`             | MAC address               |
| `model`                   | Device Model              |
| `nr_ports`                | Number of network ports   |
| `poe_capable`             | PoE Support               |
| `active_profile_name`     | Active Profile Name       |
| `profile_${id}_name`      | Profile `${id}` Name      |
| `group_${id}_name`        | Group `${id}` Name        |
| `group_${id}_color`       | Group `${id}` Color       |
| `trunk_${id}_name`        | Trunk `${id}` Name        |
| `trunk_${id}_color`       | Trunk `${id}` Color       |
| `port_${id}_legend`       | Port `${id}` Legend       |
| `port_${id}_enabled`      | Port `${id}` Enabled      |
| `port_${id}_up`           | Port `${id}` Link up      |
| `port_${id}_protected`    | Port `${id}` Protected    |
| `port_${id}_member_id`    | Port `${id}` Member ID    |
| `port_${id}_member_type`  | Port `${id}` Member Type  |
| `port_${id}_member_name`  | Port `${id}` Member name  |
| `port_${id}_member_color` | Port `${id}` Member color |
| `port_${id}_poe_enabled`  | Port `${id}` PoE enabled  |
| `port_${id}_poe_sourcing` | Port `${id}` PoE state    |
