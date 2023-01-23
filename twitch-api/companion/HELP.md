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
The first thing you will need to do after adding the Twitch instance to Companion is choose whether to use the provided token server, or to use a local token.

Both OAuth flows will redirect you to Twitch, and ask for permission from your currently logged in Twitch account to be granted, after which you'll be returned to this app. User Access Tokens have an expiration of roughly 4 hours, so using the provided token server will take care of automatic refreshing of your token for as long as you need it and can be revoked at any time through your Twitch Connection Settings page which will remove it from the token server. Local tokens follow the same process but will be directly given to you and not stored anywhere other than your local companion configuration, but keep in mind that when the token expires you will need to manually go through the OAuth process again to obtain a new token.

The final configuration is an optional list of space separated channels to monitor and the stream status of to display to you, as well as provide the option to open that channels page in your default browser as a button action. As well as monitoring the live stream status of these channels, these channels will also be available to you to send Twitch Chat messages to.

With configuration now done, many presets are now available to drag and drop into Companions web interface. Channel Status buttons can be customized after being placed, as while their action and feedback require the full channel name the button text itself can be shortened or changed to whatever is convenient. The ad buttons look similar in the preset window as they use a feedback to display a countdown, so hover over them to see the preset ad duration.

Some functions (such as sending chat messages) can be sent to any of the channels listed in the configuration, but others are limited to the channel that the OAuth token belongs to (such as monitoring/changing chat modes, triggering channel advertisements, or creating stream markers). To use token specific commands on different Twitch channels will require you to create additional instances of this Twitch module in Companion and go through the OAuth process while logged in to different accounts to generate separate tokens.


### Twitch Rate Limits
- API Requests: 800 per minute
- Chat messages in channel without Moderator/Broadcaster status: 20 per 30 seconds.
- Chat messages in channel with Moderator/Broadcaster status: 100 per 30 seconds.