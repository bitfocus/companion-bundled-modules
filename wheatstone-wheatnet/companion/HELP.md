## Wheatstone WheatNet IP

Communicate with Wheatstone I/O Blades using TCP connection.

### Configuration

- Target IP (required): IP address of the server to make a connection to.
- Target Port (required): Destination TCP port to make the connection to. (Default is TCP 55776)
- Heartbeat interval (in seconds): Interval in seconds to send keepalive messages to ensure the connection doesn't close. The Blade will timeout and close a TCP connection if it does not have any activity for more than 120 seconds. You should attempt to send the heartbeat more frequently than the 120 second timeout period. A 30 second heartbeat
  message would be a good target rate to implement.
- Log extra info during connection operations, for debugging purposes: Enable if you have Problems to reach out to the developer with a module log.

Each Blade supports up to 20 simultaneous TCP connections (10 on a PC driver) from client PCs or other network devices.
The Blade acts as a TCP server for the connection. The PC acts as a TCP client for the connection. The Blade listens for TCP
connections on port 55776. All remote computers will make a TCP connection to the Blades with this one TCP port number.

### Available functions

**Actions**

- System: Set IFID, Set Subscription Rate
- UMIX Mixer: Ducking Level
- UMIX Input: ON/OFF, Balance, Duck, Ramp, Set Fader Output, Increment/Decrement Fader Output
- UMIX Output: ON/OFF, Set Master Fader, Increment/Decrement Master Fader
- LIO: Set Level
- SLIO: Set Level
- SALVO: Fire

**Feedbacks**

- UMIX Mixer: Master Fader ≥ value
- UMIX Input: ON, Ducking Active, Fader ≥ value
- UMIX Output: ON

**Variables**

All System and UMIX Parameters.
System Variables are read only at connect, thus not updated.
UMIX Variables get populated via subscriptions coming from feedbacks.
-> If needed, this can be changed to read one or both at heartbeat timer. Let me know.

**Presets**

### Limitations

- While setting up feedbacks it may happen that some feedbacks aren't working anymore. Try to restart the module.
- LIO & SLIO feedbacks not implemented (first need to implement subscribing and maybe parsing of available number of )
- MIC commands not implemented
- SRC / DST commands not implemented
