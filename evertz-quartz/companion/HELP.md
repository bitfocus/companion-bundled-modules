## Evertz Quartz Router module

A module for controlling Evertz EQX routers using Quartz protocol.

To use this module, the router must have a Quartz interface enabled. Enter the IP address and TCP port in the module config. Source and Destination numbers are defined within the Quartz interface, so they may be different than the EQX crosspoint numbers.

The legal levels are V,A,B,C,D,E,F,G in 8 level systems and V,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O in 16 level systems. MAGNUM based control systems support up to 26 legal levels. V,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,W,X,Y,Z.
Multiple levels can be set at once, for example `VABC` routes video and first 3 audio levels.

**Available Commands in this module**

-   Fire a Salvo
-   Lock/Unlock Destination
-   Route Source to Destination (XPT)
-   Set Destination
-   Route Source to Selected Destination

The latter two actions work together to build a traditional router control panel, so you can first press the destination and then press the source to make the route.
Here you will find a way to see the salvo ID's without having to download the active config file. (http://[MAGNUM_IP]/magnum/controls/listPreset)
You have to be logged in to access the listPreset.

**Config options**

Max Sources and Destinations should be set to match the number enabled in Quartz.  
Source and Destination names will be refreshed when starting the module or saving the module config.
