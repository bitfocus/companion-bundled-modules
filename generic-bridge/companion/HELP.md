
## Generic Bridge

This exposes a Bridge service for reflecting Companion states.
It can be used to bridge between two Companion instances (client/server) or
between a Companion instance (server) and a custom application.
It provides either a WebSocket server (listening) or WebSocket client (connecting)
based service. For bridging states over the established WebSocket connection,
use Companion Triggers to send states and Companion Feedbacks to receive states.

Its four building blocks are:

- **Companion Connection: Bridge Server**:<br/>
  Establish this under "Connections" by configuring the "Generic Bridge"
  module in the "Bridge WebSocket Communication Role" named "WebSocket
  Server (listening)". Set the IP address and TCP port to local
  ones. Ensure that your operating system firewall allows incoming connections
  to it.

- **Companion Connection: Bridge Client**:<br/>
  Establish this under "Connections" by configuring the "Generic Bridge"
  module in the "Bridge WebSocket Communication Role" named "WebSocket
  Client (connecting)". Set the IP address and TCP port to remote
  ones. Ensure that your operating system firewall allows outgoing connections
  to it.

- **Companion Action: Send Bridge State**:
  Establish this under "Buttons > Edit Button > Actions" by
  configuring the "Send Bridge State" actions.

- **Companion Feedback: Receive Bridge State**:
  Establish this under "Buttons > Edit Button > Feedbacks" by
  configuring the "Receive Bridge State" feedbacks.

