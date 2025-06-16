# Streaming ACN Sender

This module will transmit SACN packets to the IP and universe you specify below. If you need more universes, add multiple SACN instances.

---

## Functions and Configuration Options

- **Source Name**  
  Sets the name that will be broadcast as the sACN source. This is visible to receivers.

- **Source UUID**  
  Unique identifier for this sACN source. Should be unique for each instance.

- **Receiver IP or Multicast IP**  
  The destination address for sACN packets.  
  - For **unicast**, enter the IP address of a single receiver (e.g., `192.168.1.101`).
  - For **multicast**, enter a valid sACN multicast address (e.g., `239.255.XXX.XXX`).

- **Bind to specific IP (optional)**  
  The local network interface IP address to send packets from. Leave blank to use the system default as shown in $(internal:bind_ip).

- **Universe (1-63999)**  
  The sACN universe number to transmit. Each instance can send to a different universe.

- **Priority (1-201)**  
  Sets the DMX priority for this source. Higher values take precedence if multiple sources are present.

- **Update interval when no fades are running (ms)**  
  How often to send sACN packets when idle (default: 1000ms or 1 Hz).

- **Update interval for fades (ms)**  
  How often to send sACN packets when a fade is running (default: 40ms or 25 Hz).

- **Variables to expose, channel range**  
  Specify which DMX channels (slots) to expose as variables in Companion.  
  Example: `1-5,34,100-130` exposes channels 1 to 5, 34, and 100 to 130.

---

### Unicast vs Multicast

- **Unicast**  
  Enter the IP address of a single receiver. Only that device will receive the sACN data.

- **Multicast**  
  Enter a multicast address in the range `239.255.0.0` to `239.255.255.255`.  
  All devices listening to that multicast group and universe will receive the data.

  **Examples**
    - For **Universe 1**:  `239.255.0.1`
    - For **Universe 10**:  `239.255.0.10`
    - For **Universe 256**:  `239.255.1.0`
    - For **Universe 513**:  `239.255.2.1`

    ---

### Notes

- If you want to send to multiple universes, create multiple module instances, each with its own universe and (optionally) multicast address.
- Make sure your network and receivers support multicast if you use it.
- The "Variables to expose" setting allows you to limit which DMX channels are available as variables for triggers or feedback in Companion.

---
