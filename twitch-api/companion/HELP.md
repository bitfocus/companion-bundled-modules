## Twitch API and Chat test

### Features
- Display live status, uptime, and viewers, of multiple Twitch streams.
- Connect to Twitch chat and control which chat modes are active, as well as perform moderation commands like Clear Chat.
- Send predefined messages to a channel.
- Execute API request to run channel advertisements (if available), create stream markers, and run custom API requests.
- OAuth flow to handle generation of tokens with just the permissions you need, and the option to store them entirely locally, or manged by a token server.

### Permissions
Before getting started, please note that some functions require an Auth token from the streamer themselves (such as starting an ad break, or getting subscriber counts), some may be usable by a channel moderator/editor, and some may be usable by anyone (for example, any user can monitor if any other streamer is live or not, or the status of their chat modes). Please keep this in mind so that you auth while logged in to the appropriate Twitch account for what you wish to control with Companion.

### Getting started
The first thing you will need to do is set up which channels you wish to monitor, this list of channels will be tracked for when they go online/offline, track chat, and be usable in Actions/Feedbacks.

Next you will need to do after adding the Twitch instance to Companion is set up what permissions you plan to use in the Config screen for the connection. Keep in mind that some API requests require permissions from the broadcaster themselves, some can use permissions from a moderator or editor, and some can be done by any user.

For example, starting ads requires the broadcaster themselves to auth with the Companion app, but a Shoutout can be done with moderator permissions so the user going through the OAuth process in Companion can do shoutouts on any channel they are a moderator of.

Once the scopes have been selected, save the config, and then go back into the config screen and follow the link to the Auth URL to go through the OAuth process.


### Twitch Rate Limits
- API Requests: 800 per minute
- Chat messages in channel without Moderator/Broadcaster status: 20 per 30 seconds.
- Chat messages in channel with Moderator/Broadcaster status: 100 per 30 seconds.
