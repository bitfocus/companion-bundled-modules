## Philips Hue

This module will allow you to connect to your Philips Hue bridge and control your lights.

### Configuration

1. Select your Hue bridge from the list or enter the IP address manually (bridges are discovered in the background, reload may be required).
2. Either [manually create](https://developers.meethue.com/develop/get-started-2/) a bridge user or use the "**Create new User**" option (bridge user field should be empty).
3. Creating a user:
   - Select the "**Create new user**" option.
   - Press the big sync button on top of your Hue bridge.
   - Press "**Save**" button on the Companion config page.
   - The new user will be created in the background and the configuration will update automatically. Check the module state or the log for errors.

### Actions

| Action | What it does                                                                                            |
| ------ | ------------------------------------------------------------------------------------------------------- |
| Scene  | Trigger the selected Scene                                                                              |
| Light  | Set the state of the selected light (_On_, _Off_, _Toggle_) and optionally set the brightness           |
| Room   | Set the state of the selected room (_On_, _Off_, _Toggle_) and optionally set the brightness            |
| Group  | Set the state of the selected group of lights (_On_, _Off_, _Toggle_) and optionally set the brightness |
| Zone   | Set the state of the selected zone (_On_, _Off_, _Toggle_) and optionally set the brightness            |

### Dynamic Variables

| Variable                    | Description            |
| --------------------------- | ---------------------- |
| $(INSTANCENAME:light\_{id}) | Name of the light {id} |
| $(INSTANCENAME:room\_{id})  | Name of the room {id}  |
| $(INSTANCENAME:scene\_{id}) | Name of the scene {id} |
| $(INSTANCENAME:zone\_{id})  | Name of the zone {id}  |

Check the **Variables** tab to see all available variables.

### Feedback

| Feedback | Description                                    |
| -------- | ---------------------------------------------- |
| Light    | Sets the button color based on the light state |
| Room     | Sets the button color based on the room state  |
| Zone     | Sets the button color based on the zone state  |
