## Microsoft Teams

This module enables Companion to control the Microsoft Teams desktop application. 

### Setup

#### API Version 1.0.0

An API token is needed for this module to be able to control the Teams instance - follow this URL to generate an API token and copy it to the config field in the module page: <br> <a href='https://support.microsoft.com/en-us/office/connect-to-third-party-devices-in-microsoft-teams-aabca9f2-47bb-407f-9f9b-81a104a883d6' target='_blank'>Generate API token</a>

#### API Version 2.0.0

To authenticate to Microsoft Teams: In Teams go to Settings -> Privacy and at the bottom, Manage API. Enable the API. 
Start a meeting and send any button action from companion. Teams will pop up and ask for you to allow the device.
The API key is automatically saved.<br>
Official Microsoft support page: <br> <a href='https://support.microsoft.com/en-us/office/connect-to-third-party-devices-in-microsoft-teams-aabca9f2-47bb-407f-9f9b-81a104a883d6' target='_blank'>Connect to third-party devices in Microsoft Teams</a>

### Actions

- Send a reaction
- Leave the active meeting
- Toggle the microphone
- Toggle the camera
- Raise/Unraise the hand
- Toggle the background blur effect

### Feedbacks

- In meeting
- Microphone mute active
- Camera on
- Hand raised
- Currently Recording
- Background blurred
- User has unread messages
- Sharing active
- User sharing active
- Can share
- Can stop sharing
- Can toggle mute
- Can toggle video
- Can toggle hand
- Can toggle blur
- Can react
- Can leave
- Can chat
- Can pair third party device