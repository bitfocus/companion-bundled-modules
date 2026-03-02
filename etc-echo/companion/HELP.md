## ETC Echo

This module works with ETC's [Echo Integration Interface](https://www.etcconnect.com/Products/Architectural-Systems/Echo/Interfaces/Echo-Integration-Interface/Features.aspx?LangType=1033) (EII) to control architectural and building lighting.

Note: This module is configured to only control _one_ Echo "Space" at a time, due to the sheer number of parameters required to track all 16 available spaces. The ability to receive feedbacks from multiple modules in parallel does not currently work.

#### Available Commands

- All "set" actions listed in the install manual for the EII: Set Preset, Set Space Off, Activate Sequence, Deactivate Sequence, Set Specific Zone Intensity
- All "get" actions listed in the install manual, including feedbacks and data gathering

#### Getting Started

The EII must be configured to talk to the device Companion is running on in order to recieve feedbacks.

On the device, Go to Setup > Interface Config > Subscriptions and enter the following under one of the subscriber entries:

- The IP address of the computer Companion is running on
- `04703` for the UDP port
- Change the EOM setting to `CR`

Once the module is configured correctly and connected, set up a trigger to get sync data every five seconds. This is highly recommended if the Echo system has multiple control stations or keypads, since Echo will not tell Companion if something has changed on its own.

In Companion, go to Triggers > Add Trigger and fill out the following:

- Events: Time Interval (5 seconds)
- Actions: `<etc-echo>` > Sync
