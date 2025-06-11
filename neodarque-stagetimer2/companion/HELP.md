# StageTimer2 Companion Module

This module allows control of Neodarque’s StageTimer2 software via OSC.

Most actions require selecting the target **Timer #** (1 or 2). Be sure to configure the correct OSC IP and port in the module settings.

---

## 🧩 Actions

### 🎬 Basic Timer Control
- **Start Timer**
- **Stop Timer**
- **Reset Timer**
- **Enable Timer**
- **Disable Timer**

### 🔁 Navigation
- **Next Entry** – Moves to the next timer entry
- **Previous Entry** – Goes back to the previous entry
- **Load Timer (by Index)** – Loads a specific timer entry by index

### ⏱️ Set Time
- **Set Timer Time** – Accepts time in formats like `SS`, `MM:SS`, or `HH:MM:SS`

### ➕ Timer Adjustments
- **Increase/Decrease Timer** – Adjust time by X seconds, minutes, or hours

### 🖥️ Fullscreen
- **Enter Fullscreen**
- **Exit Fullscreen**

### 💬 Message Display
- **Set Message** – Displays a custom message on screen
- **Clear Message** – Clears the currently displayed message

---

## 🌈 Feedbacks

These change button colors based on timer states:

- **Timer Enabled** – Changes when timer is enabled
- **Timer Running** – Indicates when the timer is actively counting
- **Timer Overtime** – Changes when the timer has gone past zero
- **Timer Ended** – Indicates the timer reached its end
- **Alert Time Reached** – Changes when timer reaches alert threshold

---

## 🧪 Variables

Live variables you can use in button text:

- `$(timer:timer1_time)` – Timer 1 current time  
- `$(timer:timer2_time)` – Timer 2 current time  
- `$(timer:timer1_type)` – Timer 1 type  
- `$(timer:timer2_type)` – Timer 2 type  
- `$(timer:timer1_enabled)` – Timer 1 state (enabled/disabled)  
- `$(timer:timer2_enabled)` – Timer 2 state  
- `$(timer:timer1_isrunning)` – Timer 1 running state  
- `$(timer:timer2_isrunning)` – Timer 2 running state  
- `$(timer:timer1_isonalert)` – Timer 1 alert state  
- `$(timer:timer2_isonalert)` – Timer 2 alert state  
- `$(timer:timer1_isonend)` – Timer 1 ended  
- `$(timer:timer2_isonend)` – Timer 2 ended  
- `$(timer:timer1_isonovertime)` – Timer 1 overtime  
- `$(timer:timer2_isonovertime)` – Timer 2 overtime  

---

## 🧰 Presets

This module includes dynamic presets that show the current timer values with feedback coloring:

- **Time Button (Timer 1 & 2)**  
  Displays the live timer time and changes background color when running.

---

## ✅ Setup Notes

1. Make sure OSC is enabled in StageTimer2.
2. Set the correct IP and Port in the Companion module config.
3. Most actions require selecting a timer (1 or 2).