# Vor

#### from Borealis Solutions

This module will connect to an instance of the Vor recording software on the local network. For more detailed information about installing, configuring, and using the Vor software, check out their [helpful documentation](https://docs.getvor.app/)!

### Available commands for Vor

- Start Recording
- Stop Recording
- Toggle Recording
- Take a Snapshot

- Set the _Show Name_ parameter
- Set the _Show Number_ parameter
- Increment the _Show Number_ by 1
- Decrement the _Show Number_ by 1
- Reset the _Show Number_ to 1

- Load a _Composition_ (layout configuration)

- Quit the Vor software
- Shutdown the Vor Server

### Feedbacks

- **Recording Status** (boolean) - `true` to indicate the system is currently recording
- **Recording Pulse** (integer) - Value from 1 to 100 to facilitate visual feedback (flashing) when a recording is being captured

### Presets

Presets are available to simplify the most common tasks. Start with these helpful shortcuts and their lovely icons and customize your layout and behavior to suit your own workflow!

- **Recording Start** - Start a recording
- **Recording Start** - Stop a recording
- **Recording Toggle** - Start/Stop a recording and update the button according to current recording status
- **Snapshot** - Take a single frame snapshot

- **Recording Status** - Visual feedback on a button to indicate a recording is in progress (no button press actions)

### Examples

![Example](images/examples.png 'Example')
