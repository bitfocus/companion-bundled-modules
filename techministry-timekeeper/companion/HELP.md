## TechMinistry-TimeKeeper

This module will allow you to view and control timers, messages, and countdowns from TimeKeeper.

To learn more about the TimeKeeper project, visit the main repository at <http://www.github.com/josephdadams/timekeeper>.

### Configuration
* The remote device must be running the Time Keeper server.
* The software can be downloaded from <http://www.github.com/josephdadams/timekeeper>.
* Configure the instance with the IP address of the remote machine. If it is the same machine as Companion, it can be "127.0.0.1".
* The module makes HTTP requests over port 4000 by default.
* After the module has connected to the server, you can return to the config page to filter the actions and variables to a specific TimeKeeper Room.

### To use the module
Add an action to a button and choose the action you wish to use.

**Available Actions:**
* Add time to most recent Timer of Joined Room
* Add time to selected Timer
* Create [x] seconds countdown now in Joined Room
* Create [x] seconds countdown now in Selected Room
* Create new Timer in Joined Room
* Create new Timer in Selected Room
* Send a message now to Joined Room
* Send a message now to Selected Room

**Available Variables:**
* Total Rooms
* Current Room Joined
* Total Timers of Room Joined
* Room Joined Latest Timer Time Remaining
* Room Joined Latest Timer Time Label
* Room Joined Latest Message

**Available Feedbacks:**
* Most Recent Timer from Joined Room has expired
* Timer [x] has expired

**Available Presets:**
* 