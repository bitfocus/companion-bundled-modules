## ChyronHego Lyric

Control ChyronHego Lyric with the Intelligent Interface protocol.

Tested against Lyric 8.8 RU2.

### Config

- **Host**

IP or Hostname of Lyric Server

- **Port**

Port to connect to Intelligent Interface

- **Keep Alive Message**

Sent after an interval of inactivity to sustain the TCP connection. There is no standard Keep Alive message specified in the protocol.

- **Verbose Logging**

Write more data to the logs at debug level.

### Actions

- **Custom Message**

Refer to Lyric Help for details on creating other message types. Text and variables can be combined to create any arbitary message. The module will append the required '\\\\\\r\\n' to the end of the message.

- **Send & Execute Macro**

- **Read Message**

- **Read & Update Message**

- **Template Data Message**

- **Update Current Template Data Message**

- **Update Template Data Message**

- **Update Message Path**

### Feedbacks

None

### Variables

None

### Version History

- **1.0.0**

Initial Release

- **1.0.1**

Add outbound message queue
Avoid unnecessary status updates
Support consecutive actions
Use Node 22
Use Yarn 4.5
Update Dependencies
