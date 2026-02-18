## Your module

**Configuration**

This module requires the [Native Web sockets Adapter](https://www.iobroker.net/#en/adapters/adapterref/iobroker.ws/README.md) to be installed on the ioBroker server.

The installation process is identical to any other ioBroker adapter. Once an instance is available, it can be configured in the
companion module settings. Please make sure to choose the protocol according to your adapter settings.

If you enabled the setting `Secure(HTTPS)` in the adapter configuration, you need to select `WSS` as protocol.

| Configuration Key                     | Description                                                                                                                                                          |
| ------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Protocol                              | The protocol to use. `WS` or `WSS`                                                                                                                                   |
| Host                                  | The hostname or IP of the ioBroker server running the `Native Web sockets` adapter.                                                                                  |
| Port                                  | The port on which the adapter is listening.                                                                                                                          |
| Ignore non-acknowledged state changes | Default: `true`. If disabled, non-acknowledged state changes will - for example - trigger feedback updates in the module. This is usually _not_ desired.             |
| Load all Aliases                      | Default: `true`. If enabled, will retrieve object and state metadata for all `alias.*` objects                                                                       |
| Additional Namespace (CSV)            | A comma-separated list of additional namespaces to monitor. By default, only metadata within the `alias` namespaces is retrieved.                                    |
| Enable Development Mode               | Default: `false`. If enabled, additional development-related actions will be available.                                                                              |
| Enable Trace Logs                     | Default: `false`. If enabled, additional trace logs will be output to help with debugging issues. Enable with caution, on a busy system this produces a lot of logs. |

**Available Actions**

The following _generic_ actions are available:

| Action       | Applicable Entities                        | Description                                                                                      |
| ------------ | ------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| Toggle       | Writable; `boolean`                        | Toggles the value of a specified ioBroker state by retrieving the current value and negating it. |
| Set State    | Writable; `boolean`, `number` and `string` | Sets the value of a specified ioBroker state.                                                    |
| Press Button | Writable; `boolean` with role = `button`   | 'Presses' the button                                                                             |
| Increment    | Writable; `number`                         | Increments the value of a specified ioBroker state by a constant value or companion variable.    |
| Send Message | `N/A`                                      | Sends a message to a specified instance of an ioBroker adapter.                                  |

**Available Feedbacks**

| Feedback                                         | Applicable Entities | Description                                                                                                                    |
| ------------------------------------------------ | ------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| Change from switch state                         | `boolean`           | Boolean Feedback. Subscribes to an ioBroker state and compares it to the configured value, then raises a feedback/style change |
| Populate ioBroker state                          | ALL                 | Subscribes to an ioBroker state and retrieves its value for use in feedbacks/styles                                            |
| Populate timestamp of last ioBroker state change | ALL                 | Subscribes to an ioBroker state and retrieves the timestamp of its last change for use in feedbacks/styles                     |

**Note**

This is a beta release of the module. Not all available actions and feedbacks are fully documented.
For more information refer to the [Roadmap](https://github.com/bitfocus/companion-module-iobroker-ws?tab=readme-ov-file#roadmap) of this module.
