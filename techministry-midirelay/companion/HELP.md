## TechMinistry MIDI Relay

This module will allow you to send MIDI Channel Voice, MIDI Show Control, and SysEx messages to a listener on a remote machine which will then relay the MIDI message to the selected MIDI port on that remote machine.

### Configuration
* The remote device must be running midi-relay, a listener program that relays the MIDI commands on the remote machine/network. You can download it here: <http://www.github.com/josephdadams/midi-relay>
* This module is only compatible with midi-relay v3.0 or greater. If you need compatibility with an older version of midi-relay, you will need to downgrade your version of Companion.
* Configure the instance with the IP address of the remote machine running the MIDI Relay listener/server.
* The module makes HTTP/socket.io requests over port 4000 by default.

### To Use The Module
Each action requires you to select a MIDI port. The list of ports are the ports available on the computer running MIDI Relay. Depending on the action chosen, other parameters are shown that can be sent along with the MIDI message.

You can select from the following actions:

* Send MIDI Note On
* Send MIDI Note Off
* Send Polyphonic Aftertouch
* Send Controller Change (CC)
* Send Program Change (PC)
* Send Channel Pressure / Aftertouch
* Send Pitch Bend / Pitch Wheel
* Send MIDI Show Control (MSC)
* Send SysEx Message (Hexadecimal or Decimal)