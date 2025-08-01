# Companion Module: Highpass Countdown

This module provides a simple countdown timer that can be displayed in a web browser and controlled from Companion.

## Features

- Set a countdown time (HH:MM:SS).
- Start, pause, and stop the timer.
- Add or subtract time from the current countdown.
- Display the timer in a web browser on the network.
- Change the color of the timer based on its state (running, paused, stopped) and time remaining (amber and red warnings).
- Set top and bottom auxiliary text.
- Show the internal time on the web page.

## Configuration

1.  **Web Server Port**: The port on which the web server will run (default: 8080).
2.  **Show Internal Time**: Display the computer's internal time on the web page.
3.  **Time Corner**: Choose the corner of the screen to display the internal time.
4.  **Amber Time (seconds)**: The timer will turn amber when the remaining time is less than or equal to this value.
5.  **Red Time (seconds)**: The timer will turn red when the remaining time is less than or equal to this value.
6.  **Timer Font Size (vw)**: The font size of the timer as a percentage of the viewport width.
7.  **Aux Font Size (vw)**: The font size of the auxiliary text as a percentage of the viewport width.

## Web Interface

To view the timer, open a web browser and navigate to `http://<your-ip-address>:<port>`. The IP address is that of the computer running Companion, and the port is the one configured in the module settings.

## Presets

The module comes with a number of presets to get you started:

-   **Timer Display**: A button that shows the current timer value and changes color based on the state.
-   **Start/Pause/Stop Timer**: Buttons to control the timer.
-   **Set Timer**: Buttons to set the timer to common values (1, 5, 10, 30, 60 minutes).
-   **Add/Subtract Minute**: Buttons to add or subtract one minute from the timer. 