## Cisco CMS Module

This module controls the Cisco Meeting Server via its [API](https://www.cisco.com/c/dam/en/us/td/docs/conferencing/ciscoMeetingServer/Reference_Guides/Version-3-1/Cisco-Meeting-Server-API-Reference-Guide-3-1.pdf).

CMM (Cisco Meeting Manager) is a great tool provided by Cisco to control CMS, but there is no way of executing several commands at once. With this module, a user can execute several commands at the push a button.

**Setup**
* Input the IP, API Port, username and password in the config page.
* This module will constantly poll the CMS server with API requests to be able to get the list of current calls and calllegs in the server. You can set the interval (in ms) of the poll. It is not recommended to set intervals too small, as this will result in higher resource usage. 10000 (10s) seems to be a good ballance between wait times and resource usage. 
* If you have a CMS cluster (more than one server acting as a single CMS instance) you will have to add more than one instance of this module - one for each server. This is due to the fact that in a cluster, the calls are unique to each physical server, so you will need to poll and send commands to the specific server your call is in. (Don't forget to create the api user in all your servers!).

**Currently Available commands**

* Add a user to a call (Using their uri) or merge 2 calls.
* Mute/Unmute a participant's audio.
* Mute/Unmute a participant's video.
* Drop a participant from a call.
* End a Call (or meeting).
* Change layout of all participants in a call.
* Change layout of a single participant.
  
**To Do**
* Add "participant" methods. - This will allow to set importances, toggle name tags and many other participant-specific actions.
* Implement Feedbacks
* Any other methods available in the [API](https://www.cisco.com/c/dam/en/us/td/docs/conferencing/ciscoMeetingServer/Reference_Guides/Version-3-1/Cisco-Meeting-Server-API-Reference-Guide-3-1.pdf) that can be usefull for meeting managers. 
