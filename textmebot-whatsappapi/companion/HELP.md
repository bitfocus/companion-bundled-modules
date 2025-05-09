## TextMeBot WhatsappApi

- Allows to send Text Messages


## Setup

- Go to https://textmebot.com/#lepopup-NewApiKey to get an API-Key
- You will receive your ApiKey by email
- Add your phone number using the link received in the email
- Link your WhatsApp number with the API using the link received in the email
- Put the API-Key in the field in companion config

## Getting Group IDs
- In the group you want to sent messages to
- Create an Invite-Link for the Group
- The Invite-Link looks like https://chat.whatsapp.com/xyz where xyz is the group_info to be used
- Use the group_info string to convert the group_info into an group_id (123456789@g.us). Therefore use the Function "Convert Group_Info to Group_ID" which writes the Group_ID into an Variable named the same as the groupname
- Very Important (critical!): The phone number linked to the API (Sender) has to be part of the WA Group before sending a message using this API. Otherwise, WhatsApp might temporarily block your number because you are trying to send a message to a group that you are not a member of. And never remove your number from the Group while using the API to send messages to that Group. 

## ⚠️Warning⚠️ (please read and remember):

WhatsApp will block your number if you send messages to people who is not expecting to receive a message from you.
Please use this api with caution and responsibility.

Some recommendations to avoid getting your phone number blocked by WhatsApp
1) Implement a delay between messages (min. 5 seconds). The more the better.
2) Do not send messages to people that you do not know.
3) It is recommended to have the recipient of the message in your phone contact list
4) Use a dedicated phone number for the API. If WhatsApp block your number, you do not loose your personal chats, images, contacts, documents, etc.
5) A loop in your code will send 100s of message and whatsapp will block your number. Be careful!


## 🚨Disclaimer🚨 (please read and remember):

a) This API is inended for Personal Usage only. If you decide to use it for Business, it is at your own risk.
b) Ensure to have a robust contingenct plan. Like Twilio. To be used in case of API downtime.
c) You are the only one responsible for the messages and the content that you sent. Rember that messages will be sent from your phone number.
d) TextMeBot is not responsible for any ban or block performed by WhatsApp on your number. And I cant do anything to unblock it