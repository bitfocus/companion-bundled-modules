## Analog Way LivePremier Series REST API module

This module allows you to control all models of Analog Way's LivePremier live image processing lineup.
It uses the LivePremier's REST API, so it is basically "fire and forget". That means the module just sends commands and doesn't care about execution or feedback. With the REST API system states could be polled from the system, but the traffic would be to much to continuously pull everything and keep in sync.
That means no feedback is provided by the module. If you want to have bidirectional communication look for the **Analog Way AWJ API module** (just search for AWJ).

# Configuration

Just enter the IPv4 address and there you go. If you can't use TCP port 80 for the Aquilon (e.g. with the simulator) you can also optionally specify a port. IPv6 or hostname is not supported.

# Note

The module can control different types of LivePremier hardware and you can also reconfigure the cards on site. The module doesn't know or care about what type of hardware you have and what its capabilities are. So most of the time more options are offered than your actual hardware may support. Using none existing screens or inputs or other resources usually doesn't give you an error, but it is not recommended.