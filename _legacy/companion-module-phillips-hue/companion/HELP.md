## Philips Hue

This module will allow you to connect to your Philips Hue bridge and control your lights.

### Configuration
1. Select your Hue bridge from the list or enter the IP address manually (bridges are discovered in the background). 
2. Either [manually create](https://developers.meethue.com/develop/get-started-2/) a bridge user or use the "**Create new User**" checkbox.
3. Creating a user:
   - Check the "**Create new User**" checkbox.
   - Press on the big sync button on top of your Hue bridge.
   - Press "**Apply Changes**" button on Companion config page.
   - The new user will be created in the background and the configuration will update automatically. Check the log for errors.

### Available actions

| Action                | What it does                                                             |
|-----------------------|--------------------------------------------------------------------------|
| All_Scenes            | Trigger a scene                                                          |
| Lamps_Switch          | Switch lamp on or off                                                    |
| Lamps_Switch_Bri      | Switch lamp on or off and also set the brightness                        |
| Room_Switch           | Turn all lights in a room on or off                                      |
| Room_Switch_Bri       | Turn all lights in a room on or off and also set the brightness          |
| LightGroup_Switch     | Turn all lights in a group on or off                                     |
| LightGroup_Switch_Bri | Turn all lights in a group on or off and also set the brightness         |
| Zones_Switch          | Turn all lights in a specific zone on or off                             |
| Zones_Switch_Bri      | Turn all lights in a specific zone on or off and also set the brightness |



