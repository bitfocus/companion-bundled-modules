## Telegram Bot Module

This module allows interacting with the Telegram Bot API. 

Currently supported actions:

- Send a message
- Send a rolling dice
- Send a poll
- Send an image
- Send an audio file
- Send a location
- Send a venue
- Send a contact

When the bot receives a message, it will update its variables:

- ChatId of the sender
- Message
- Timestamp

You can use a trigger on the timestamp and check the message and ChatId in this trigger to react to messages received by the bot.

### Setup

In order to be able to use this module, you need to create a Telegram bot. Follow these instructions in order to create a new bot: <br>
<a href="https://www.directual.com/lesson-library/how-to-create-a-telegram-bot" target="_blank">Create a Telegram bot</a> <br>
Paste the received API token into the module configuration. <br>
In order to be able to send messages, you need the ChatId of the Telegram user, which should receive your messages. Simply search for the user 'GetIDs Bot' and send the message '/start'. This will output the ChatId of your Telegram user. 

Now you need to find your created Bot and just send it any message you want, to start the communication. 

After you've followed these steps, you should be able to send Telegram messages using Companion.