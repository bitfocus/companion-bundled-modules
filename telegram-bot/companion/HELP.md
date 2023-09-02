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