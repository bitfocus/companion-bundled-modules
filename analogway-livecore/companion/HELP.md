# Help section for the AnalogWay Livecore module

With this module you can control all graphic switchers from the Livecore series by Analog Way. Most popular models are Ascender and NeXtage. It is also possible to control stacked configurations or configurations with an output epander. In any case please use the IP of the master machine.
If you want to test your configuration, you can also connect to the Livecore simulator. If you use the simulator on the same computer as Companion use the IP the simulator runs on (default is 192.168.56.101), if you run the simulator on a different machine use the IP of that machine and you have to run AWGateway on that machine too.

Most commands are straight forward, only thing to mention is the screen selection for the global take command.
Before you can use the global take command you have to select the screens which will be affected by the command. The selection is stored in the device until it is changed. The screen selection for the third party protocol is independent from the screen selection of WebRCS, so you can't see in WebRCS which screens are selected for the take command of Companion. There is a feedback tough to show the selection status of companion.

This module offers a choice of three TCP port numbers for control of the device. 10600 is the default port, 10500 and 10400 are offered in case 10600 is not available in your network configuration. Make sure the port number is not set to something different on your Livecore machine.

**Available variants for AnalogWay Livecore**

The variants given in the configuration are not functional and can be ignored.  
The module always gives you the maximum number of inputs and screens available for the whole Livecore series.

**Available commands for AnalogWay Livecore**

* Take selected screens (Global take)
* Take single screen
* Load Memory
* Load Master Memory
* Set recall filter
* Freeze Input
* Recall Monitoring Memory
* Fullscreen Monitoring
* Select screens for global take
* Load confidence mode
* Switch input plug
* Send custom command (supports parsing of variables)

**Available Feedbacks**

* Source used
* Memory active
* Screen selected