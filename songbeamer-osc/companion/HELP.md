# Songbeamer OSC

After configuring host and port this module will open it's own OSC instance in order to communicate with SongBeamer.

This module does define actions with names and options that map most of the implemented OSC functionalities. Therefore it eases up the use of OSC as a remote control by mapping specific actions with the respective paths / options.

## Songbeamer Requirements

Please be aware that OSC is a functionality that is not enabled in Songbeamer by default. Check the forum for details!

To check whether OSC is active open Songbeamer Menu - Help - OSC logger (tested with version 6.0.0g)
If it shows "disabled" you need to enable it by running a Songbeamer macro.
Open the macro window (ALT + F8) and execute
`IniSFS.OSC.Enabled := True;`

# Technical things ...

## Changelog

### Version 2.0.0

- Companion 3.0 compatibility

## Functional Scope

### Actions

presentation_state

- /presentation/state

presentation_page

- /presentation/page

presentation_versemarker

- /presentation/pagecaption

presentation_language_primary

- /presentation/primary_language

presentation_language

- /presentation/language

presentation_message_visible

- /presentation/message/visible

presentation_message_text

- /presentation/message/text

navigate_to

- /presentation/nextpage
- /presentation/prevpage
- /playlist/next
- /playlist/previous

video_state

- /video/state

video_position

- /video/position

livevideo_state

- /livevideo/state

### Feedbacks

presentation_state

- /presentation/state
