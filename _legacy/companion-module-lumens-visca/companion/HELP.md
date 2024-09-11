## companion-module-lumens-visca

This module uses the Sony Visca protocol to control Lumens cameras.

### Configuration

- You can specify the Camera Label.
- Type in the IP address of the device.
- Type in the port of the device (default is 52381).
- You can also specify the Camera ID. (default is "id 1")

### More Detailed Information

Lumens prepares a more detailed operation document for you.  
You also can find the available actions for different product model.  
In detail, Please refer to the following link :  
https://www.lumens.com.tw/en/Downloads_Search?id=0&keyword=Companion&keyword2=  
or you can visit https://www.lumens.com.tw/en/Download  
then search "companion"

### Available Actions

##### === System ===

- Power On
- Power Off
- Menu On/Off Toggle
- Menu Enter
- Menu Up
- Menu Down
- Menu Left
- Menu Right
- Tally Lamp On
- Tally Lamp Off
- Tally Mode - Red : Enabled at Tally Lamp On mode
- Tally Mode - Green : Enabled at Tally Lamp On mode
- Tally Mode - Yellow : Enabled at Tally Lamp On mode

##### === Pan/Tilt ===

- Tilt Up : speed 1 (low speed) to 24 (high speed)
- Tilt Down : speed 1 (low speed) to 24 (high speed)
- Pan Left : speed 1 (low speed) to 24 (high speed)
- Pan Right : speed 1 (low speed) to 24 (high speed)
- Pan-Tilt_UpLeft : speed 1 (low speed) to 24 (high speed)
- Pan-Tilt_UpRight : speed 1 (low speed) to 24 (high speed)
- Pan-Tilt_DownLeft : speed 1 (low speed) to 24 (high speed)
- Pan-Tilt_DownRight : speed 1 (low speed) to 24 (high speed)
- Pan-Tilt_Stop : lens stop moving
- Pan-Tilt_Home : lens goes to HOME position
- Pan-Tilt_Reset : lens does position initialization and then goes to last position

##### === Lens ===

- Zoom Stop
- Zoom In : speed : p=0 (Low) to 7 (High)
- Zoom Out : speed : p=0 (Low) to 7 (High)
- Focus Stop : Enabled at Manual Focus Mode
- Focus Near : speed : p=0 (Low) to 7 (High)，Enabled at Manual Focus Mode
- Focus Far : speed : p=0 (Low) to 7 (High)，Enabled at Manual Focus Mode
- Auto Focus Mode
- Manual Focus Mode
- One Push Auto Focus : Enabled at Manual Focus Mode

##### === Exposure ===

- Exposure Mode - Auto
- Exposure Mode - Manual
- Exposure Mode - Shutter Priority
- Exposure Mode - Iris Priority
- Iris Up: Enabled at Iris Priority or Manual Mode
- Iris Down: Enabled at Iris Priority or Manual Mode
- Shutter Up : Enabled at AE Shutter Priority or Manual Mode
- Shutter Down : Enabled at AE Shutter Priority or Manual Mode
- Gain Up : Enabled at AE Manual Mode
- Gain Down : Enabled at AE Manual Mode
- Exposure Compensation On
- Exposure Compensation Off
- Exposure Compensation Up : Enabled at Exposure Compensation On mode
- Exposure Compensation Down : Enabled at Exposure Compensation On mode
- BackLight On : Enabled at AE Full Auto Mode
- BackLight Off : Enabled at AE Full Auto Mode

##### === White Balance ===

- White Balance Mode - Auto
- White Balance Mode - One Push
- White Balance Mode - Manual
- One Push WB : Enabled at One Push WB mode
- WB Red GAIN Up : Enabled at WB Manual mode
- WB Red GAIN Down : Enabled at WB Manual mode
- WB Blue GAIN Up : Enabled at WB Manual mode
- WB Blue GAIN Down : Enabled at WB Manual mode

##### === Image ===

- Image Mode - Default
- Image Mode - Custom
- Bright Up : Enabled at Custom mode
- Bright Down : Enabled at Custom mode
- Sharpness Up
- Sharpness Down

##### === Save / Recall Preset ===

- Save Preset : id = 0~127
- Recall Preset : id = 0~127

##### === Digital-Effect ===

- Mirror On
- Mirror Off
- Flip On
- Flip Off
- Mirror + Flip On
- Mirror + Flip Off

##### === Auto-Tracking ===

- Auto-Tracking On
- Auto-Tracking Off
