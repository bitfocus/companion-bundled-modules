## ClassX LiveBoard

A BitFocus Companion module for performing simple actions in **ClassX LiveBoard** broadcast software

_Note: use unique component names on your lvb projects_

**Presets**

There is a premade preset button for all contents present on LiveBoard's Content grid.

_Note: Premade buttons use "Tap" action and have all the feedbacks associated._


**Configuration parameters**

- IP: Ip address where ClassX LiveBoard is listening for connections (use 127.0.0.1 for local machine)
- Command port: Comunication port at _Settings > Misc > Remote connections_ (usually 301)
- Event port: Event port at _Settings > Misc > Remote connections_ (usually 401)
- Log to console: \*_Optional_ - Enable protocol debugging to Companion log

**Available actions**

- Content Play: _by content name_
- Content Resume: _by content name_
- Content Pause: _by content name_
- Content Stop: _by content name_
- Stop All Contents
- Content go to FrameMarker: _by content name and framemarker name_
- Content next FrameMarker: _by content name_
- Content previous FrameMarker: _by content name_
- Command: _arbitary LBC command_
- Content Tap\*: _by content name_

**Available feedbacks**

- Content Stopped: _by content name_
- Content Paused: _by content name_
- Content Playing: _by content name_

\*_Content Tap emits action "Content Play" while stopped, "Content Resume" while paused and "Content Stop" while playing_
