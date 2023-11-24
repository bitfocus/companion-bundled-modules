## A Module to control the MUX KVM-Switches by Guntermann & Drunck

The module has been tested with DL-Mux4, firmware 1.1 but should be compatible with all KVM switches from that line.
The number of inputs is automatically detected.
The DVI-Signal present feedback will only work with DVI switches, not VGA or DP.

**Attention, to use this module you need non-trivial configuration at the KVM-switch.**

First you have to log into the Webapp, which is the hardest part because this is very old gear.
If you do not have the IP of the switch, reset it to default.  
Switch the unit off, press the reset button, switch the unit on while still holding the reset button pressed, wait until the switch-LED starts flashing fast, let the reset button go.  
Now the switch can be reached at https://192.168.0.1, by default only network port A is active.  
The switch can only be configured using https and it uses a self signed certificate, you have to add all needed exemptions to trust that certificate (you can install your own certificate later).  
Additionally, and even more challenging, the switch uses TLS for establishing a connection which is not supported by modern browsers any more, so use a browser aprox. before 2019.  
The certificate runs out on Dec. 31. 2033, if you did not install your own certificate or do a factory reset after that date, you won't be able to use the Webapp ever again.  
If you managed to connect to the device, you will most likely run into the next problem. The webapp is a Java-application run in the browser as a plug-in.  
First you'll need to also allow plug-in loading from unsecure sites according to your OS. At Windows you have to add IP of the switch to "trusted sites" and additionally customize the security settings for those trusted sites.  
Next G&D uses Java 1.3 which is completely outdated, you won't be able to run the webapp with a modern system.  
One working system uses Windows 7, Internet Explorer 9 and Java-Plug-In 10.5 (included in jre-7u5). In the internet working virtualbox images with preinstalled OS can be found. 

Once you managed to get to the login prompt, the default username is "Admin" and the default password is "4658".  
When logged in, you have to navigate in the tree to "KVM switches" and there to "[All switches]". Click on [All switches] and now you should see one or more lines at the right, depending on how many outputs your device has.  
A normal KVM-switch has one output, so it is one line. Double-Click anywhere in that line to open the configuration panel.  
Select the tab "Network". Select the sub-tab "SNMP Agent".  
Make sure to have the following settings:

Global  
- Status: Enabled (default)
- Protocol: UDP (default)
- Port: 161 (default, you can use any other port but use the same as in connection configuration)

SNMPv2  
- Access: Full (you have to set)
- Read-write community: private (you have to set, you can use any other word you like but use the same word as in the connection configuration)

Once you set all this, press ok.

In the connection configuration use the same values for the port and the Read-write community.


### Available actions

- Switch input
- Cycle input

### Available feedbacks

- Current input
- DVI Signal Status
  The DVI Signal Status is only updated by the switch every minute or so, so it may not be used for real time monitoring

Feedbacks are based on polling every second.

### Available variables

- Current input