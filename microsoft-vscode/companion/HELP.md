# VSCode

## Setup

1. Add an instance of the `Microsoft: VSCode` module to your Companion setup and configure it:
   1. Make sure the port doesn't conflict with any other services.
   2. Set a password. (optional, but highly recommended)
   3. Change the bind address if necessary, empty binds to all interfaces.
2. Install the [CommandSocket](https://marketplace.visualstudio.com/items?itemName=pascaldiehm.commandsocket) extension in VSCode and configure it:
   1. Make sure `commandsocket.role` is set to `client`.
   2. Change `commandsocket.host` to the address of your Companion instance (empty defaults to `127.0.0.1`).
   3. Match the `commandsocket.port` and `commandsocket.password` to your Companion setup.

## Configuration

| Setting      | Description                                                               |
| ------------ | ------------------------------------------------------------------------- |
| Bind address | The address to bind the server to. Leave empty to bind to all interfaces. |
| Port         | The port to bind the server to.                                           |
| Password     | The password to use for encryption.                                       |
| Sticky       | Keep connected to a VSCode instance until it quits.                       |

## Actions

- Execute commands in VSCode
- Display notifications and status bar messages in VSCode
- Request input from the user
- Start/stop a debugging session
- Manually activate extensions

## Variables

| Name                      | Description                                               | Type       |
| ------------------------- | --------------------------------------------------------- | ---------- |
| `clients_count`           | The number of connected VSCode instances                  | `number`   |
| `version`                 | The version of VSCode                                     | `string`   |
| `commands_count`          | The number of commands available                          | `number`   |
| `debug`                   | Whether a debugging session is active                     | `boolean`  |
| `debug_name`              | The name of the active debugging session                  | `string`   |
| `debug_breakpoints`       | The number of breakpoints                                 | `number`   |
| `environment_host`        | The type of environment hosting the VSCode window         | `string`   |
| `environment_name`        | The name of the VSCode window                             | `string`   |
| `environment_language`    | The language of the VSCode window                         | `string`   |
| `environment_remote`      | The name of the remote host                               | `string`   |
| `environment_shell`       | The shell used by the VSCode window                       | `string`   |
| `extensions_count`        | The number of installed extensions                        | `number`   |
| `extensions_active_count` | The number of active extensions                           | `number`   |
| `workspace_trusted`       | Whether the workspace is trusted                          | `boolean`  |
| `workspace_name`          | The name of the workspace                                 | `string`   |
| `workspace_folders`       | The list of workspace folders                             | `string[]` |
| `workspace_folders_count` | The number of workspace folders                           | `number`   |
| `git_branch`              | The name of the active git branch                         | `string`   |
| `git_commit`              | The hash of the active git commit                         | `string`   |
| `git_ahead`               | The number of commits ahead of the remote                 | `number`   |
| `git_behind`              | The number of commits behind the remote                   | `number`   |
| `git_remote`              | The name of the active git remote                         | `string`   |
| `git_url`                 | The URL of the active git remote                          | `string`   |
| `git_changes`             | The number of changes in the working directory            | `number`   |
| `editor_name`             | The name of the active editor                             | `string`   |
| `editor_path`             | The path of the active editor                             | `string`   |
| `editor_language`         | The language of the active editor                         | `string`   |
| `editor_encoding`         | The encoding of the active editor                         | `string`   |
| `editor_eol`              | The end of line sequence of the active editor             | `string`   |
| `editor_indent`           | The indentation width of the active editor                | `number`   |
| `editor_tab`              | Whether the active editor uses tabs for indentation       | `boolean`  |
| `editor_dirty`            | Whether the active editor contains unsaved changes        | `boolean`  |
| `editor_column`           | The column of the cursor in the active editor             | `number`   |
| `editor_line`             | The line of the cursor in the active editor               | `number`   |
| `editor_lines`            | The number of lines in the active editor                  | `number`   |
| `editor_warnings`         | The number of warnings in the active editor               | `number`   |
| `editor_errors`           | The number of errors in the active editor                 | `number`   |
| `result_alert`            | The selected option from the last alert dialog            | `string`   |
| `result_input`            | The input from the last input dialog                      | `string`   |
| `result_pick`             | The selected option from the last pick dialog             | `string[]` |
| `error_debug_start`       | The error message from the last debug start action        | `string`   |
| `error_activate`          | The error message from the last activate extension action | `string`   |

## Feedbacks

Most variable values can be checked using the `internal: Variable: Check value`, `internal: Variable: Compare two variables` and `internal: Variable: Check boolean expression` feedbacks. Additionally, this module provides the following feedbacks:

| Feedback            | Description                                      | Available for type |
| ------------------- | ------------------------------------------------ | ------------------ |
| _Variable_ contains | Check if a variable contains a value             | `string`           |
| _Variable_ matches  | Check if a variable matches a regular expression | `string`           |
| _Variable_ includes | Check if a list includes a value                 | `string[]`         |
| Command available   | Check if a command is available                  |                    |
| Extension installed | Check if an extension is installed               |                    |
| Extension active    | Check if an extension is active                  |                    |
