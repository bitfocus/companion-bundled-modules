# PTPv2 Client

Utility module to provide basic monitoring PTPv2 on a network the companion instance is connected to. For detailed diagnostics consider using Meinberg's PTP Track Hound.

The module binds to UDP ports 319 & 320 on the selected interface.

## Feedbacks

- PTP Synced

Module will report sync loss after twice the Sync interval duration without a sync event.

## Variables

- Last Sync
- PTP Master (Clock Identity)
- PTP Master (Address)
- PTP Time (s)
- PTP Time (ns)

PTP Time variables updated each sync event.
