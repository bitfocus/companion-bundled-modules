# Help section for the AnalogWay Livecore module

With this module you can control the multiformat converter VIO 4K by AnalogWay.
If you want to test your configuration, you can also connect to the AnalogWay simulator. If you use the simulator on the same computer as Companion use the IP the simulator runs on (default is 192.168.56.101), if you run the simulator on a different machine use the IP of that machine and you have to run AWGateway on that machine too.

You can control VIO by ethernet, which is tested and the most common use. You can also control VIO by USB, in that case you have to set the USB interface on the VIO to ethernet, it will then appear on your computer as a ethernet adapter and the only device connected to that ethernet adapter is the VIO. Controlling VIO by RS-232 is not supported by Companion.

You can use Companion and WebRCS at the same time with up to five controling instances.

This module uses always the default TCP port number of 10600 for control of the device. Make sure the port number is not set to something different on your VIO.
