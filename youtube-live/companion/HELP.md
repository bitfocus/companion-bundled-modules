## YouTube Live

This module will allow you to control YouTube live events/broadcasts.

The module is only able to manipulate predefined broadcasts, it is currently not capable of creating them.
So all broadcasts to be controlled by the module have to be created in the YouTube Studio first.

### Available actions

- **Start broadcast test** - this action initializes a YouTube broadcast. You'll need to explicitly use this only if you want
  to launch the so called "monitor stream" of a broadcast. The same goal can be achieved by visiting the Live Control Room
  of the broadcast when the associated input stream is active.
- **Go live** - this action starts a YouTube broadcast and makes it available for the public.
- **Finish broadcast** - this action ends a published YouTube broadcast.
- **Advance broadcast to next phase** - this action combines the above actions into one action (off → testing → live → finished).
- **Refresh broadcast/stream feedbacks** - this triggers immediate refresh of broadcast lifecycle status/
  stream health and their feedbacks/variables. This can typically be useful for quickly checking if your RTMP
  stream data has successfully reached the corresponding YouTube endpoint.
- **Reload everything from YouTube** - this forces all cached data to be reloaded from YouTube. This can be
  used to make broadcasts created after Companion startup appear in the Companion UI.
- **Send message to live chat** - this action send a message (200 chars max.) to a Youtube broadcast's live chat.

[ytapi]: https://developers.google.com/youtube/v3/live/docs/liveBroadcasts/transition

### Configuration

#### Connecting to YouTube account

In order to set up module, you need to authorize it for accessing your channel via the YouTube Data API.
For this you will need to create a new Google API application.
This is done via the Google API console:

1. Log in to the [API console](https://console.developers.google.com/) with your personal Google account.
2. Create a new project (name of the project doesn't matter, but we suggest something as _companion-yt-control_).
3. Enable _YouTube Data API v3_ for the project - the easiest way to do so is to search for it and click on _enable_ on its page.
4. Go back by clicking the Google APIs logo. Then, click on _OAuth consent screen_ on the sidebar and fill in the following information:
    - User Type: _External_ (do not worry, there is no need to submit the app for verification)
    - Application name: _YouTube Live_ (the exact name does not matter)
    - Scopes for Google APIs: add `https://www.googleapis.com/auth/youtube.force-ssl

5. Head to _Credentials_ page. Select _Create credentials_ on the top bar and pick _OAuth client ID_.

   Create the client ID with these options:
     - Aplication type: _Web application_
     - Name is not important, its only used to identify created credentials in the API console
     - Authorized redirect URLs: This is where the Google OAuth server will forward the authorization grant, so it
       **must** be the same as the _OAuth redirect url_ parameter set in Companion (by default `http://localhost:3000`)

    After creating these credentials, copy _client ID_ and _client secret_ into corresponding fields in the module instance cofiguration in Companion.

6. When first configuring the module, make sure that the _Authorization token_ field in instance configuration is empty.
7. After applying changes to module configuration, you will be redirected to your OAuth consent screen
   to authorize module for accessing your YouTube channel. Proceed with the account with which you want the module to interact.

When all above is done, the module is ready for work.

#### Action configuration

When creating buttons for either starting or stopping a broadcast,
you should pick the broadcast to work with using the provided dropdown menu.
It should contain all broadcasts present on the channel.

### Thanks

Big thanks to members of [AVC Silicon Hill](https://avc.sh.cvut.cz/), for inspiration for further development.
