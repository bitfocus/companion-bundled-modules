# Generic Ember Plus

- [Ember Plus](https://github.com/Lawo/ember-plus)

This is a generic ember plus module - successful use of this tool requires use and familiary with Ember Plus Viewer or a similar tool to identify the Ember Paths, and types, to be monitored and controlled.

The module only supports connection via TCP.

## Configuration

### Bonjour

Some devices support mDNS announcements according to the Ember Plus [specification](https://github.com/Lawo/ember-plus/blob/master/documentation/Ember%2B%20Service%20Discovery.pdf). The module should discover these, otherwise device IP and Port can be manually entered.

### Matrix Control

If you require matrix control, enter the ember path(s) here.

### Auto Take

Defines matrix behaviour.

### Paths to Monitor

Paths defined here will be registed with the host on initialisation, they are available as variables and for use in feedbacks.

## Paths

Central to the concept of ember+ is the address or path of the data element you wish to monitor or change. There are several ways to represent these in the module. Principally as decimals and strings. Regardless of the preferred method, one should be consistent - undesired behaviour can occur if the same path is specified in both methods across different actions and feedbacks.

- ### Decimal: 1.2.3.4

  Paths can always be entered as a decimal address (ie _1.2.3.4_).

- ### String: Path.To.Ember.Node

  Paths can also be entered as a period seperated string. Such as _Path.To.Ember.Node_. These text paths can be found in Ember Plus Viewer, however they need to be reformatted to use period seperators rather than forward slashes. Note: ' ' & '#' characters used in ember paths are not supported for use in variables by companion, and will be replaced by '\_' in variable ids - the path can still be used in actions and feedbacks however.

- ### Decimal in Brackets: My Useful Ember Path [1.2.3.4]

  Any path field that contains brackets [] will just use the contents enclosed in the brackets as the path. Thus you can copy paste any path with text and decimals from Ember Plus Viewer, and keep the text for readability or enter your own description _This is a very useful path[1.2.3.4]_. Only the path will be used for variable creation. This method cannot be used in config fields.

- ### Variables

  Except in the module configuration, all of the above can be constructed with variables for both actions and feedbacks.

## Value Fields

For Set Value Actions one must ensure the correct data type is selected. In particular confusion can occur between Integer and ENUM types.

## Actions

- Set Value Integer
- Set Value Real
- Set Value Boolean
- Set Value ENUM
- Set Value String
- Matrix Connect
- Matrix Disconnect
- Matrix Set Connection
- Take
- Clear
- Set Selected Source
- Set Selected Target

## Feedbacks

- Parameter Compare Number
- Parameter Equals String
- Parameter ENUM Equals String
- Parameter True
- Take is possible
- Clear is possible
- Source Background If Selected
- Target Background if Selected

Parameter Compare Number, Parameter Equals String, and Parameter True type coerce all data to the respective data type, thus can be used on any node type. Ie, you can check a boolean node with the Parameter Equals String feedback by setting the Value to _true_. However, the path dropdown for each feedback is filtered to parameters of the appropriate type(s) for ease of use. Prior to version 2.5 all data was coerced to strings prior to equality tests. The path field for Parameter Compare Number and Parameter Equals String presents a dropdown of registered paths. New paths (including variables) can be entered and if valid will be automatically registered and added to the dropdowns and variable list.

## Presets

- Take
- Clear

## Action Recorder

The Action Recorder can record Set Value actions for ember parameters you are currently subscribed to.
