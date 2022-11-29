## A module for controlling spotify via the Web API.

### Setup

Go to [here](https://developer.spotify.com/dashboard/applications) and create an application.  
Copy the Client ID and Client Secret and add them to the config boxes.  
Set https://spotauth.github.io/ as your Redirect URL both in the Config and on the spotify application you created.  
When you save the modules config a URL will be placed on in the auth URL config box, make sure to refresh to load it, go to this URL and then copy the Approval Code into the config.  
This time when you save the config an Access Token and Refresh Token will be wrote to the config.  
Now go assign the "Write the ID of the current Active Device to config" button, start playing music on the device you wish to control and then press the button you just assigned.  
The module is now fully configured and should work without issue.

If you have an issues with the module please open an issue on the module's GitHub repo or message Peter Stather on the official Slack.
