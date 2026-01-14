# Capacitimer

NOTE: Compatible with Capacitimer v1.2.1+

## Network Discovery

The module uses mDNS/Bonjour to automatically discover Capacitimer instances on your network. Discovered instances appear in the configuration dropdown.

## WebSocket Connection

The module maintains a WebSocket connection for real-time updates at `ws://[host]:3001`. If the WebSocket disconnects, it will automatically attempt to reconnect every 5 seconds.

## Actions

### Timer Control
- **Start Timer** - Start or resume the timer countdown
- **Pause Timer** - Pause the timer, preserving current time
- **Reset Timer** - Reset to the last reset time (resets to the time showing when start was last pressed)
- **Toggle Timer** - Toggle between start and pause states
- **Set Timer** - Set timer to specific hours, minutes, and seconds
  - Option to keep running after setting
- **Adjust Timer** - Add or subtract seconds from current time
  - Use positive values to add, negative to subtract

### Display Control
- **Toggle Timer Visibility** - Show/hide the main timer display
- **Toggle Time of Day** - Show/hide current time of day
- **Set Timer Font** - Choose from 5 monospace fonts:
  - Roboto Mono
  - Kode Mono
  - PT Mono
  - Share Tech Mono
  - Courier Prime
- **Set Timer Font Size** - Adjust timer font size (0-100%)
- **Set Time of Day Font Size** - Adjust time of day font size (0-100%)

### Color & Appearance
- **Set Timer Colors** - Configure colors for different timer states
  - Normal color (above threshold)
  - Warning color (warning threshold)
  - Critical color (critical threshold)
  - Supports variables for hex color codes
- **Set Color Thresholds** - Define when color states trigger
  - Normal threshold (default: 300s)
  - Warning threshold (default: 60s)
  - Critical threshold (default: 0s)
- **Set Time of Day Color** - Customize time of day text color
  - Supports variables for hex color codes

### Settings
- **Update Settings** - Batch update display settings
  - Show/hide hours, minutes, seconds, milliseconds
  - Count up after zero option

## Feedbacks

### Timer State
- **Timer Running** - Active when timer is counting down
- **Timer Paused** - Active when timer is paused
- **Timer Stopped** - Active when timer is stopped (not running or paused)
- **Timer Negative** - Active when timer is counting up past zero

### Time-Based
- **Time Remaining Less Than** - Triggers when time is below a threshold
  - Configurable threshold in seconds
- **Time Remaining Greater Than** - Triggers when time is above a threshold
  - Configurable threshold in seconds

### Display State
- **Timer Visible** - Active when main timer is visible
- **Time of Day Visible** - Active when time of day is visible

### Dynamic Color Feedbacks (Advanced)
These feedbacks automatically sync with the colors and thresholds set in Capacitimer:

- **Timer Color: Normal** - Applies normal color when time >= normal threshold
- **Timer Color: Warning** - Applies warning color when warning threshold <= time < normal threshold
- **Timer Color: Critical** - Applies critical color when critical threshold <= time < warning threshold

## Variables

### Timer State
- `time_remaining` - Time remaining formatted (HH:MM:SS)
- `time_remaining_seconds` - Time remaining in seconds
- `is_running` - "Yes" or "No"
- `is_paused` - "Yes" or "No"
- `reset_time` - Reset time formatted (HH:MM:SS)

### Display Settings
- `timer_visible` - "Yes" or "No"
- `time_of_day_visible` - "Yes" or "No"
- `timer_font` - Current timer font name
- `timer_font_size` - Timer font size percentage (0-100)
- `time_of_day_font_size` - Time of day font size percentage (0-100)

### Colors
- `color_normal` - Normal state color (hex)
- `color_warning` - Warning state color (hex)
- `color_critical` - Critical state color (hex)
- `time_of_day_color` - Time of day color (hex)

### Thresholds
- `threshold_normal` - Normal threshold in seconds
- `threshold_warning` - Warning threshold in seconds
- `threshold_critical` - Critical threshold in seconds

## Variable Support

Most actions support Companion variables. You can use any variable in:
- Timer hours, minutes, seconds fields
- Adjust timer seconds
- Font size percentages
- Color hex codes
- Threshold values


