**Global Cache iTach IP2SL**

iTach serial is bi-directional, RS232 communication. All communication is 8 data bits and one stop bit. Parity, hardware flow control, and baud rate are set through the iTach internal web page, with baud rate enabled up to 115.2 Kbaud.

If you are using the `Command` action, all serial data is passed through without interpretation or conversion.

If you use the `HEX based command` action, the hex values you enter will be converted and sent as binary data as expected.

If a serial connector is not configured correctly, buffer overflows (indicating data loss), or parity errors will occur. Any errors will be captured and presented on the Serial web page to aid in proper setup. `Settings such as Serial Multiconnection Mode, 7 data bit mode, or 2 stop bit mode are only accessible from the Serial web page.`

Please make sure you have the proper baud rate settings, options, and serial cable that matches your serial device.

There is an option to change how the commands are terminated in the button config to give you flexibility depending on application requirements.

  * Option 1: No Termination, does not alter your command at all.
  * Option 2: `\r` Carriage Return - Default settings
  * Option 3: `\n` Line Feed
  * Option 4: `\r\n` Carriage Returns and Line Feed

![Serial Parameters](images/serial.jpg?raw=true "serial parameters")


**ser2net**

The Global Cache iTach IP2SL module will also communicate with a computer running the ser2net application.  
This has been tested on a RaspberryPi with a USB to RS232 adapter. 
The verified use case was to control a camera that only has a RS232 VISCA port.

You must configure the serial connection in ser2net.  Use port 4999 in ser2net to receive data as this is the hardcode port in the IP2SL hardware and this module. All other settings should fit your application. 

An example ser2net configuration line to forward raw VISCA hex command to a camera with a 9600 baud serial port is below.
`4999:raw:5:/dev/ttyUSB0:9600 8DATABITS NONE 1STOPBIT`
