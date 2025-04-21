# Generic Remote Control Protocol SW-P-08

The SW-P-08 protocol is implemented by many broadcast routers and control systems. You may need to enable this protocol on your router control system. This module supports up to 256 levels, 65535 sources and 65535 destinations. If your router controller does not support the extended command set then you are limited to 16 levels, 1024 sources and 1024 destinations.

[Please log suggestions and issues on github.](https://github.com/bitfocus/companion-module-generic-swp08/issues)

## Configuration

These settings must be entered before the module can be used.

- **IP Address** of the router or controller
- **Port** of the router of controller
- **Matrix** This will probably be 1 in most systems
- **Levels** This number controls the levels offered in the level selection menus. It is not verified against the hardware and only affects the user interface. All levels are enabled by default, use the Levels actions to modify the selection.
- **Router has more than 1024 sources or destinations** If you have a large router enable this option to ensure all source and destination names are retrieved. If you don't need the names from the router or your router doesn't support names then this option can be ignored.
- **Request Supported Commands** By default Companion will ask the router which SW-P-08 commands and responses it supports. If this check fails then it can be disabled using this option.
- **Request Names** When connection is made to the router ask for the names. Not supported by all routers.
- **Name Length** Ask the router to return names of this length. Not supported by all routers.

## Action Commands

There are multiple ways of making crosspoint buttons to cater for different applications. For basic operation where one button makes one pre-defined route only **Set Crosspoint** is required.

- **Select Levels** Add the level(s) in the action to the level selection for the next take
- **DeSelect Levels** Remove the level(s) in the action from the level selection for the next take
- **Toggle Levels** For each level in the action set the state to the opposite of the current state
- **Select Destination** and **Select Destination name** Preset the destination for the next route take
- **Select Source** and **Select Source name** Preset the source for the next route take
- **Route Source to selected Levels and Destination** and **Route Source name to selected Levels and Destination** Use the preset levels and destination with the source from this action and make the route
- **Take** Make the crosspoint from preset levels, source and destination
- **Clear** Forget any preset levels, destination or source. Optionally re-enable all levels.
- **Set Crosspoint** and **Set Crosspoint by name** specify levels, source and destination in the action and make the route
- **Refresh Source and Destination names** Ask the router for the current set of names and update

## Feedbacks

Button background colours can be changed to show current selection status.

- **Crosspoint Connected**
- **Crosspoint Connected By Name**
- **Selected Levels**
- **Selected Levels and Destination**
- **Selected Destination**
- **Selected Source**
- **Source routed to selected Destination**

## Variables

Some dynamic information is stored in variables which you can access through the Companion user interface.

- **Number of Source names** reported by router
- **Number of Destination names** reported by router
- **Selected Destination** set by actions
- **Selected Source** set by actions
- **Selected Destination Source** and **Selected Destination Source Name** When a destination is selected the variable updates by interrogating the router. If multiple levels are defined then there is a variable for each level.
- **Source\_?** The name of each source as defined in the the router
- **Destination\_?** The name of each destination as defined in the router

## Action Recorder

Tally and connected messages recieved from the router will create new set crosspoint actions, allowing for easy creation of salvos.

## Version History

### Version 1.0.0

- First Release

### Version 1.0.1

- Reworked levels to be more flexible
- Added route source by name action
- Added toggle level action
- Added variables for source and destination labels
- Added option to re-enable levels on clear
- Added feedback for selected level and destination
- Fixed packaging of bytes sent to router

### Version 1.0.2

- Reworked incoming data processing
- Reworked name decoding to support larger routers
- Added module config option for name length
- Added module config option to request names on connection
- Added variables for selected destination source

### Version 1.0.3

- Added module config option to disable the supported commands check

### Version 1.0.4

- Added support for more than 16 levels
- Added support for more then 1024 sources/destinations
- Tidy up config page layout
- Add more supported device types to the module properties

### Version 1.0.5

- Added presets for some actions
- Added feedback Source routed to selected Destination

### Version 2.0.0

- Update for Companion Version 3
- Add connection keep alive
- Accept variables for Select Source Name, Select Destination Name, Set Crosspoint by Name
- Add Crosspoint Connected, Crosspoint Connected By Name feedback
- Action Recorder support
- Select Source and Destination Presets now generated according to router size (up to 256)
- Select Source and Destination Presets now with names
- Select Source presets have 2nd Source Routed to Destination feedback

### Version 2.0.1

- Add TX message queue
- Update dependencies
- Update package manager

### Version 2.0.2

- Fix typo in variable-parsing function

### Version 2.0.3

- Use Node 22
- Update dependencies

### Version 2.0.4

- Update manifest-path
- Throttling
