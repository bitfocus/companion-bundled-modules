## Stagetec Nexus XCI

This module is a SNMP trap reciever optimised for the logic configurable traps from the Stagetec Nexus XCI. It allows boolean feedbacks to be created and used to trigger events in Companion based on Logic configured in Nexus Service.

Each XCI card is capable of 256 logic configurable SNMP traps. NB. In the test system the 256th logic cell doesnt report an OID correctly.

Due to the necessary UDP port binding, it is only possible to run one instance of this module at a time.

### Configuration

**XCI IP** 


The IP of the XCI card. Any traps recieved from other IPs will be ignored.

**Community String**


The community string set on the XCI. Any traps recieved with a non-matching community will be ignored.

### XCI Configuration
Configuring the XCI to trigger SNMP traps requires use of Nexus service.

In the ethernet configuration window select the XCI card and navigate to the SNMP tab.

![Network Configuration](images/xci-network-snmp.png)

Ensure SNMP is enabled. Set the community string and the trap number to at least one. One of the destination IPs should be the host IP of the companion computer.  This module will work regardless of if the XCI is in SNMP V1 or V2c mode.

SNMP traps will only be triggered from logic cells according to the settings in "First Cell Number", "Logic Cell Number" and "Logic Trap Number".

Logic configuration to trigger the traps is then done in the Logic section of Nexus Service. 

![Logic Configuration](images/nexus-logic.png)

Both the network settings and logic configuration must be uploaded to the nexus system once the respective changes are made.

### Note on use

Since this module just listens for SNMP traps, it does not pickup the state of logic cells at module initialisation. All feedbacks are initialised to false.