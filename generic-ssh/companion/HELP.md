## Generic SSH

An SSH client for Companion V3

### Overview

This module can harness the power of SSH to allow you to do anything from configure servers, network equipment, and much more, right from Companion!

### Configuration

Configuration fields:

- Target Hostname/IP (required): Hostname or IP address of the server to make a connection to.
- Target Port (required): Destination TCP port to make the SSH connection to. (Default is TCP 22)
- Username (required): Username to use to connect to the remote server.
- Password (only used with password-based auth): Password to use to authenticate with the remote server.
- Full path to Private Key file on local system (key-based authentication): Full path on local system to the private key file. Note: This only used when you want to use key-based authentication instead of a password.
- Passphrase (key-based authentication): Passphrase to use to decrypt the private key (if private key encryption was used when the key was generated)

### Action Usage

- Execute SSH Command
  - Allows for the execution of commands with the "Command Error" feedback
    - The feedback will activate if the last command(s) ran from this action returned a non 0 exit code, or if the command(s) wrote anything to STDERR.
  - Allows for asynchronous execution of multiple commands by separating them with "\n".
    - If you need to have a "\n" in your command(s), you can use "\\\\n" to represent that.
    - Asynchronous means that all of the commands will be executed roughly at the same time, and they will not wait for the previous command to finish executing before the next ones start executing.
  - You can see the output from the remote server in the debug log in Companion.
- Execute SSH Command in Shell Session (Advanced)
  - Allows for the execution of commands within an interactive shell session.
  - Allows for synchronous execution of multiple commands by separating them with "\n".
    - If you need to have a "\n" in your command(s), you can use "\\\\n" to represent that.
    - Synchronous means that all of the commands will be executed one at a time, right after the previous command finishes
      - This is achieved by inserting an LF (newline) character between the commands when it is being fed into the shell session. This behaves similar to pasting multiple commands that are separated by newlines into a terminal emulator.
      - When you run commands in a shell session, it will try to run the exit command last, which is written to the shell after an LF character. For some commands, this may not work, and your shell may stay open indefinitely. You can try to put `;exit` at the end of the command (or something similar, depending on which shell you are using) to exit the shell session after the execution of the other command(s).
  - This is good for when you want to set environment variables before executing another command.
    - Example: `EXAMPLE_ENV_VAR=hello\necho $EXAMPLE_ENV_VAR`
  - Unfortunately, the "Command Error" feedback is not supported for STDERR when using this action, as we can't capture STDERR using an interactive shell instance at this time. It should work for exit codes for the last command ran before the shell session terminates, though.
  - You can see the output from the remote server in the debug log in Companion.

### Limitations

- Using commands that require interactive keyboard input or prompts are not officially supported.
  - You can use the "Execute SSH Command in Shell Session (Advanced)" action and append a response to a prompt of the previous command, for example: `apt-get install examplepackage\nY`, however if the command does not have a prompt as expected, or has more prompts than expected, then you may run into issues, such as the shell session staying active indefinitely. The best way around this is to see if the given command has an enviroment variable or an option to accept prompts by default, for example: `apt-get install examplepackage -y`. NOTE: only the "Execute SSH Command in Shell Session (Advanced)" action supports the use of environent variables.
  - Given the above limitation on prompts, using the "sudo" command on some systems may cause issues if it prompts for a sudo password. It is recommended to authenticate as a user that has permission to perform the desired commands without any prompts.
