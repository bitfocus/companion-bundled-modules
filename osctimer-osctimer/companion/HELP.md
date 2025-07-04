# O:S:C Timer Control – Companion Module

This Companion module provides advanced remote control of the O:S:C Timer application via OSC.

It supports up to four independent timers with full time management, layout control, color customization, notes handling, broadcast subscriptions, and real-time feedback.

---

## Features

- Control up to **4 independent timers**
- Full timer control:
  - Start / Stop / Reset / Reset & Stop
- Set time:
  - Absolute duration (HH:MM:SS)
  - Count down to time of day with UTC offset
- Adjust time:
  - Unified Add/Subtract action for hours/minutes/seconds
  - Choose between Static (permanent) and Live (temporary) adjustments
- Direction:
  - Count Up or Count Down
- Display:
  - Set display format (e.g. SS.D, MM:SS, HH:MM:SS)
  - Customize display colors with full RGBA (float) values
- Notes:
  - Set note text, alignment, and auto-remove timer
- Alerts:
  - Define alert threshold time
  - Set behavior at timer end (stop or continue)
- Layout:
  - Single / Dual / Quad display slots
  - Assign widgets (timer, clock, broadcast, monitor) to slots
- Broadcast:
  - Subscribe OSC clients to timer text, warnings, end state, or time triggers
- Companion:
  - Rich presets library
  - Feedback support for visual zone status and dynamic display

---

## Requirements

- **O:S:C Timer** app (v2.2.1+ recommended)
- **Bitfocus Companion** v4.0 or later
- **Node.js** v18+

---

## Setup

1. Launch the O:S:C Timer app
2. Ensure default or custom OSC ports are set per timer:
    - Timer 1: 53001
    - Timer 2: 53002
    - Timer 3: 53003
    - Timer 4: 53004
3. In Companion, configure the module:
    - Enter the host IP (where OSC Timer runs)
    - Assign the appropriate ports for each timer

---

## Actions

### Timer Control

- `Start`, `Stop`, `Reset`, `Reset and Stop`
- Set specific duration (H:M:S)
- Count to time of day (UTC offset optional)
- Count direction: Up or Down
- End behavior: Stop at zero or continue past zero
- Display format: Choose between multiple time layouts

### Time Adjustment (Unified)

- One action handles all time adds/subtracts:
  - Hours, Minutes, Seconds
  - Mode: Static (permanent) or Live (temporary)

### Alerts

- Set a warning threshold time (H:M:S)

### Notes

- Set custom text for display
- Choose alignment
- Auto-remove after time (optional)

### Display Customization

- Set color using RGBA float values (0.0–1.0 range)
  - Backgrounds, fonts, app UI, notes, and clock
- Supports full transparency

### Layout

- Select layout mode: Single / Dual / Quad
- Assign widgets to display slots:
  - Timers
  - Clock
  - Broadcast
  - Monitor

### OSC Broadcast Subscriptions

- Subscribe/unsubscribe OSC clients to:
  - Timer text updates
  - Warning state transitions
  - Timer end triggers
  - Specific time triggers

---

## Feedbacks

- **Timer Zone**
  - Visual feedback for Normal / Warning / End zones
- **Timer Running**
  - Indicates if a timer is active
- **Timer Display**
  - Show current timer time on button

---

## Variables

| Variable ID      | Description            |
|------------------|------------------------|
| `timer1_time` – `timer4_time` | Timer display time |
| `timer1_name` – `timer4_name` | Custom timer names |

---

## Troubleshooting

- Ensure OSC Timer is open and network reachable
- Verify correct IP and ports in module config
- Module requires OSC Timer version 2.2.1 or later for full compatibility
- Use Companion's logs for debugging OSC communication

---

## Compatibility

- **O:S:C Timer:** v2.2.1+
- **Companion:** v4.0+
- **Node.js:** v18+

---

## Support

- GitHub: [bitfocus/companion-module-osctimer-osctimer](https://github.com/bitfocus/companion-module-osctimer-osctimer)
- Author: Rasmus Kreiner – osctimer@rasmuskreiner.dk

---

## Changelog

### v1.1.0

- Unified time adjustment action (live/static)
- Color pickers now normalize to RGBA float values
- Expanded layout and widget assignment support
- Improved presets and dynamic feedback
- Bugfixes and polish