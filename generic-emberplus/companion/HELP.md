# Generic Ember Plus

- [Ember Plus](https://github.com/Lawo/ember-plus)

This is a generic ember plus module - successful use of this tool requires use and familiary with Ember Plus Viewer or a similar tool to identify the Ember Paths, and types, to be monitored and controlled.

The module only supports connection via TCP.

## Configuration

#### Bonjour

Some devices support mDNS announcements according to the Ember Plus [specification](https://github.com/Lawo/ember-plus/blob/master/documentation/Ember%2B%20Service%20Discovery.pdf). The module should discover these, otherwise device IP and Port can be manually entered.

#### Matrix Control

If you require matrix control, enter the ember path(s) here.

#### Auto Take

Defines matrix behaviour.

#### Paths to Monitor

Paths defined here will be registed with the host on initialisation, and available as variables and for use in feedbacks.

## Paths

Central to the concept of ember+ is the address or path of the data element you wish to monitor or change. There are several ways to enter this in the module.

- #### Decimal: 1.2.3.4

  Paths can always be entered as a decimal address (ie _1.2.3.4_).

- #### String: Path.To.Ember.Node

  Paths can also be entered as a period seperated string. Such as _Path.To.Ember.Node_. These text paths can be found in Ember Plus Viewer, however they need to be reformatted to use period seperators rather than forward slashes. Note: Some characters (such as #) used in ember paths are not supported for use in variables by companion, and the expected variable will not be created - the path can still be used in actions and feedbacks however.

- #### Decimal in Brackets: My Useful Ember Path [1.2.3.4]

  Any path field that contains brackets [] will just use the contents enclosed in the brackets as the path. Thus you can copy paste any path with text and decimals from Ember Plus Viewer, and keep the text for readability or enter your own description _This is a very useful path[1.2.3.4]_. Only the path will be used for variable creation. This method cannot be used in config fields.

- #### Variables
  Except in the module configuration, all of the above can be constructed with variables for both actions and feedbacks.

## Value Fields

For Set Value Actions one must ensure the correct data type is selected. In particular confusion can occur between Integer and ENUM types.

For both actions and feedbacks, values are treated 'raw' - that is the transform specified in the _factor_ field is not applied. Companion expressions can be used to perform these transforms if necessary.
Similarly ENUMS are always refered to by Integer Index .

## Actions

- Set Value Integer
- Set Value Integer from Variable
- Set Value Real
- Set Value Boolean
- Set Value ENUM (as Integer)
- Set Value ENUM from Variable (as Integer)
- Set Value String
- Matrix Connect
- Matrix Disconnect
- Matrix Set Connection
- Take
- Clear
- Set Selected Source
- Set Selected Target

## Feedbacks

- Parameter Equals
- Parameter Equals String
- Take is possible
- Clear is possible
- Source Background If Selected
- Target Background if Selected

Both Parameter Equals, and Parameter Equals String type convert all data to strings before performing an equality test, thus can be used on any node type. Ie, you can check a boolean node with the Parameter Equals String feedback by setting the Value to _true_. The path field for Parameter Equals and Parameter Equals String presents a dropdown of registered paths. New paths (including variables) can be entered and if valid will be automatically registered and added tp the drop downs and variables.

## Presets

- Take
- Clear

## Action Recorder

The Action Recorder can record Set Value actions for ember nodes you are currently subscribed to.
