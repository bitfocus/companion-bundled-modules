# Generic Stopwatch

This module provides a virtual stopwatch that can be controlled through Companion actions. It's perfect for timing events, countdowns, and production timing needs.

## Configuration

### Precision
Set the precision of the timer in milliseconds. The default is 500ms, which updates the display twice per second. Lower values (like 100ms) provide more frequent updates but use more system resources.

### Production Timer Mode
When enabled, this mode emulates the behavior of certain broadcast or production countdown clocks. It affects how countdowns behave when starting in reverse (counting down):

**Disabled (Standard Mode):**
- The countdown begins exactly at the set duration
- Example: A 5-second timer starts at 5000ms and counts down through 4999ms, 4998ms, …, down to 0ms
- The timer remains at 0 seconds for a full final second before ending
- The 0 second is included as a full visible second, which may be confusing when displaying without milliseconds

**Enabled (Production Mode):**
- The countdown begins at one full second above the set duration
- Example: A 5-second timer starts at 5999ms and counts down through 5999ms, 5998ms, …, down to 1000ms, ending immediately when hitting 999ms
- This ensures that 0 is not counted as a visible second, making it clearer in production environments
- The timer will always start at X999ms, even if the timer was stopped, ensuring the first digit is always 1 second long
- More functional for production timing, though not perfectly accurate for stopwatch use

## Actions

### Basic Controls
- **Start** - Starts the stopwatch counting up from current time
- **Start in Reverse** - Starts the stopwatch counting down from current time
- **Stop** - Pauses the stopwatch at current time
- **Reset** - Resets the stopwatch to 00:00:00
- **Toggle** - Starts if stopped, stops if running

### Time Management
- **Set** - Set the stopwatch to a specific time
  - Hours: Enter hours (supports variables)
  - Minutes: Enter minutes (supports variables) 
  - Seconds: Enter seconds (supports variables)

- **Add** - Add time to the current stopwatch value
  - Hours: Hours to add (supports variables)
  - Minutes: Minutes to add (supports variables)
  - Seconds: Seconds to add (supports variables)

- **Subtract** - Subtract time from the current stopwatch value
  - Hours: Hours to subtract (supports variables)
  - Minutes: Minutes to subtract (supports variables)
  - Seconds: Seconds to subtract (supports variables)

## Feedbacks

- **Stopwatch is Running** - Provides feedback when the stopwatch is actively running

## Variables

### Time Display Variables
- **hms** - Hours, Minutes, Seconds (HH:MM:SS format)
- **hmsms** - Hours, Minutes, Seconds, Milliseconds (HH:MM:SS.mmm format)
- **hours** - Hours only (HH format)
- **minutes** - Minutes only (MM format)
- **seconds** - Seconds only (SS format)
- **milliseconds** - Milliseconds only (mmm format)

### Extended Time Variables
- **mmm** - Total minutes (e.g., 125 minutes for 2:05:00)
- **sss** - Total seconds (e.g., 7500 seconds for 2:05:00)

### Target Time Variables (Future Enhancement)
- **target12_hms** - Target time in 12-hour AM/PM format
- **target24_hms** - Target time in 24-hour format

### Status Variables
- **isRunning** - Shows "True" when running, "False" when stopped
- **isReverse** - Shows direction of counting

## Usage Examples

### Basic Stopwatch
1. Use **Reset** to start at 00:00:00
2. Use **Start** to begin counting up
3. Use **Stop** to pause timing
4. Use **Start** again to resume

### Countdown Timer
1. Use **Set** to set your desired countdown time (e.g., 5 minutes = 0 hours, 5 minutes, 0 seconds)
2. Use **Start in Reverse** to begin counting down
3. Watch the timer count down to 00:00:00

### Production Timer
1. Enable **Production Timer Mode** in configuration
2. Set your countdown time
3. Use **Start in Reverse** for broadcast-style countdown behavior

## Tips

- All time input fields support Companion variables, allowing dynamic time setting
- Use the **isRunning** variable to create conditional button colors or text
- The precision setting affects update frequency - balance smooth display with system performance
- Variables can be used in button text to display current time values