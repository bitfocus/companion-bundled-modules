# Songbeamer OSC

After configuring host and port this module will open it's own OSC instance in order to communicate with SongBeamer.

This module does define actions with names and options that map most of the implemented OSC functionalities.
Therefore it eases up the use of OSC as a remote control by mapping specific actions with the respective paths / options.

## Songbeamer Requirements

Please be aware that OSC is a functionality that is not enabled in Songbeamer by default.
Open Tools/Extras -> Midi/OSC Setup and use the OSC tab to enable and configure port setup.

## Pre-Songbeamer 6.10 (some functions might not be functional)

To check whether OSC is active open Songbeamer Menu - Help - OSC logger (tested with version 6.0.4a)
If it shows "disabled" you need to enable it by running a Songbeamer macro.
Open the macro window (ALT + F8) and execute
`IniSFS.OSC.Enabled := True;`
Check the forum for details!

## Implementation status

Any behaviour that is not implemented yet should show a log entry referencing a respective GitHub issues.
More details can be found on the issues page https://github.com/bitfocus/companion-module-songbeamer-osc/issues

Please be aware that quite a lot of functionality is not yet fully implemented in Songbeamer.
This module is NOT provided by the Songbeamer developers but rather a user! Upcoming release changes might not be available at the same time.

# Technical things ...

THIS PART IS ONLY RELEVANT IF YOU ARE TESTING OR DEVELOPING THIS MODULE

- Upcoming devolpment milestones are tracked in https://github.com/bitfocus/companion-module-songbeamer-osc/milestones
- Original Songbeamer OSC documentation is in documents/SongBeamer.docx
- Modified Songbeamer OSC documentation with status comments and references to existing bug tickets is in documents/SongBeamer_OSC.docx

## Initial connection and variables

During start of the module /xinfo is requested from Songbeamer
This is used to check the Songbeamer version and updated status to ok if a response is received.

Every time /xinfo response is received the module will try to send an initial request for all variables.
This is because Songbeamer will only send updates but not the original state.
Variables will also be subscribed when using them prepared feedbacks

Because in it's current state all variable ids equal their path
(e.g. presentation_state == /presentation/state) a simple str replacement
followed by a request to the respective url is used for init

## Use of development branch

In order to run this module or any updates before official releases
Please be aware this is for testing ONLY!
The module itself or Songbeamer might crash any moment!

1. Install companion
2. Download the desired branch from github
3. create a folder to store all development modules
4. unpack the ZIP archive into the folder
5. open a Shell and run 'yarn install' inside the modules folder
6. start companion, and set the developer modules path to the folder created before

## Things that can go wrong

### Node version

- Make sure you're running node ^18.12 - e.g. by running 'nvm install 18' and using the respective 'nvm use ....' this means node 19 or newer does not work with companion!
- make sure yarn is available e.g. by running 'corepack enable' in a shell

### Windows Execetuion policies

4. in case you're trying yarn commands on Windows 11 'Set-ExecutionPolicy Restricted' needs to be allowed from an admin powershell first '

## Changelog

### Version 2.3.0

- updated to match companion 4.0
- upgraded used modules - companion_base 1.12 beucase of "isVisibleExpression" -> incompatible with older versions of companion

### Version 2.2.0

- implemented preset colors (#37)
- implemented stage actions (#75)
- requires Songbeamer 6.13

### Version 2.1.0

- See github tickets #74, #67, #68, #62, #16, #32, #71, #70, #65, #64, #63, #43, #17, #44

### Version 2.0.0

- Companion 3.0 compatibility
