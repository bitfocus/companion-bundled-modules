# Generic Ping and Wake

This module will ping a host, and if the host is not alive, send a Wake-On-LAN magic packet to the MAC address of the host. If the MAC address is not known, it will attempt an ARP lookup first.

## Configuration

- Host IP Address
- Host MAC Address (if known)
- Attempt ARP Lookup of MAC Address
- Ping Settings
  - Timeout Rate
  - Retry Rate (how often to re-ping)
- Wake On Lan (WOL) Settings
  - UDP Port (default is Port 9)
  - Broadcast Address
  - Resend Attempts
  - Interval between Packet Resends
- Enable Verbose Logging

## Actions

- Start Ping Interval (Ping will auto start when module is configured, but if you want to stop pinging and restart it, use this action)
- Stop Ping Interval (Variables and Feedbacks will stop working also)
- Perform ARP Now
- Send WOL Now
- Enable/Disable WOL Function
- Shutdown Windows PC

## Feedbacks

- Host is Alive or Not Alive

## Variables

- Host IP
- Host MAC
- Ping Variables
  - Host is Alive
  - Max Ping Response Time
  - Min Ping Response Time
  - Avg Ping Response Time
  - Packet Loss Percentage
  - Last Ping Performed
- ARP Variables
  - Last ARP Successful
  - Last ARP Performed
- WOL Variables
  - UDP Port
  - Broadcast Address
  - Resend Attempts
  - Interval between Packet Resends
  - Last WOL Sent
