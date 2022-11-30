## AJA Kumo Router control
This module sends HTTP requests to the router for control. On connection, we get the current router status and watch for changes for feedbacks and variables.

* Route an input to an output
* Select a destination
* Select a source
* Perform router salvo recall
* Feedbacks for Companion button changes for destination/source

### Variables
- Salvo names
- Source and Destination Names
- Currently selected src/dest button internally
- Destinations current source

### Feedbacks
All feed backs are booleans, which allows them to be used in triggers.
- Source routes to destination
- Currently selected src/dest
