## Generic Stopwatch

This module lets you start/stop/clear a timer like you would on a stopwatch.

### Config

* You can set the precision of the timer in milliseconds.
* Production Timer Mode:
    When enabled, this mode emulates the behavior of certain broadcast or production countdown clocks. It affects how countdowns behave when starting in reverse (counting down):
* Disabled:
        The countdown begins exactly at the set duration. For example, a 5-second timer starts at 5000ms and counts down through 4999ms, 4998ms, …, down to 0ms. The timer remains at the 0 second for a full final second before ending. This means the 0 second is included as a full visible second, which may be confusing when displaying the timer without milliseconds.
* Enabled:
        The countdown begins at one full second above the set duration (e.g., a 5-second timer starts at 5999ms). It counts down through 5999ms, 5998ms, …, down to 1000ms, and ends immediately when hitting 999ms. This ensures that 0 is not counted as a visible second, making it clearer in a production environment. This mode will also always start the timer at X999ms, even if the timer was stopped. This ensures that the first digit is always 1 second long. Not perfectly accurate for a stopwatch, however it is more functional for a production timer.

## Actions

* Start/Stop/Reset/Toggle
* Set Watch
* Add/Subtract Hours Minutes Seconds

## Feedbacks

* Stopwatch is Running

## Variables
* Hours, Minutes, Seconds
* Stopwatch is Running