# OpenSong Control

This module contols the software [OpenSong.](http://www.opensong.org)

## Available Actions
* Next/Previous Slide
* First/Last Slide
* Next/Previous Section
* Current Song Section - Chorus, Bridge, Prechorus, Tag
* Current Song Verse - Input specific verse number
* Change Screen Modes - Normal, Black, White, Freeze, Hide, Logo
* Show/Hide Message
* Close Presentation

## Available Feedbacks
* Current Screen Mode
* Presentation Running

## Available Variables
* Current Song Title

Control of slides is achieved by the REST API from Opensong. Feedbacks use websockets.

Please enable this in settings in 'Settings -> System -> Automation API'

If Authentication key is left blank also leave it blank in the Companion instance configuration.

### A Note on Connection
If connection to OpenSong is lost (e.g. OpenSong is closed), companion will attempt to reconnect the next time an OpenSong action is triggered. 