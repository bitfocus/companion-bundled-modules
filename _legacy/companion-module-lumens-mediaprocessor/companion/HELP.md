## lumens-mediaprocessor module

This module is used to control Lumens media processor.

### Configuration

- You can specify the media processor Label.
- Type in the IP address of the device.
- Type in the port of the device (default is 5080).

### More Detailed Information

Lumens prepares a more detailed operation document for you.  
You also can find the available actions for different product model.  
In detail, Please refer to the following link :  
https://www.lumens.com.tw/en/Downloads_Search?id=0&keyword=Companion&keyword2=  
or you can visit https://www.lumens.com.tw/en/Download  
then search "companion"

### Available Actions in this module

##### === System ===

- Power Mode : (1)Standby, (2)Wakeup
- Power Off
- Backup to USB : (1)Start, (2)Stop

##### === Video/Audio ===

- Record Start
- Record Stop
- Audio Volume Input : Channel = 1 ~ 4; Volume = 0 ~ 125
- Audio Volume Output : Channel = (1)Line&HDMI output, (2)PGM output; Volume = 0 ~ 125
- Audio Mute Input : Channel = 1 ~ 4; Mode : (1)unmute, (2)mute
- Audio Mute Output : Channel = (1)Line&HDMI output, (2)PGM output; Mode : (1)unmute, (2)mute
- Audio Type Input : Channel = 1 ~ 4; Type : (1)Line, (2)Mic, (3)HDMI, (4)IP Audio
- Audio Type Output : Channel = (1)Line&HDMI output, (2)PGM output; Type : (1)ALL, (2)Line+PGM, (3)MultiView
- Video Source ID : Channel = 1 ~ 4; ID : 1 ~ 255

##### === Image ===

- Snapshot
- Layout : ID = 1 ~ 18
- Background : ID = 0 ~ 9 (0 : Background off)
- Overlay : ID = 0 ~ 30 (0 : Overlay off)
- Scene : ID = 0 ~ 30
- Macro : ID = 1 ~ 3

##### === Network ===

- Stream : ID = 1~3; Mode : (1)Start (2)Stop

##### === Camera ===

- Camera Recall Preset : Channel = 1 ~ 4; ID : 1 ~ 9
- Camera Save Preset : Channel = 1 ~ 4; ID : 1 ~ 9
- Camera Move : Mode = (1)Stop, (2)Up, (3)Down, (4)Left, (5)Right; Channel = 1 ~ 4; Speed = 1 ~ 24(fast)
- Camera Zoom : Mode = (1)Stop, (2)Zoom In, (3)Zoom Out; Channel = 1 ~ 4; Speed = 1 ~ 7(fast)
