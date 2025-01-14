# PJLink

PJLink is a projector control standard created by the Japan Business Machine and Information System Industries Association ([JBMIA](https://www.jbmia.or.jp/english/index.php)). This module implements most commands and data available for both Class 1 and Class 2 protocols.

----------
*Note:*
The authorization 'password' sequence generates a random number used a control ticket to validate messages. This number resets whenever a connection is started. If you access a projector from two different controllers, this number gets regenerated for nearly every command or query as each connection resets the control ticket. This may appear as if the projector is frequently dropping offline.

----------

## **Available Commands for PJLink**

- Power On/Off Projector
- AV Mute Projector
- Freeze / Unfreeze Input
- Change Input (Dynamic Input Names from Projector)
- Speaker Volume Up by 1
- Speaker Volume Down by 1
- **Note:**
<br>Class 2 projectors provide actual input names
<br>Class 1 Projectors will create generic names based on the input type:
  - 1: RGB (analog)
  - 2: Video (analog)
  - 3: Digital (SDI, DVI, HDMI)
  - 4: Storage (USB, SD Card)
  - 5: Network (HD-BaseT, NDI)
  - 6: Internal (Flash memory Logo or still)

## **Available Variables for PJLink**

- Projector Class
- Projector Name
- Projector Manufacturer
- Projector Product Name
- Projector Other Info
- Error Status
- Freeze Status
- Input Horizontal Resolution
- Input Vertical Resolution
- Recommended Horizontal Resolution
- Recommended Vertical Resolution
- Lamp Hour (Lamps 1 to 8) (N/A for laser units)
- Lamp On (Lamps 1 to 8)
- Serial Number
- Software Version
- Filter Usage Time
- Filter Replacement Model Number
- Lamp Replacement Model Number
- Mute Status
- Power Status
- Projector Input
- **Note:** Some variables are only available with Class 2 protocol. These will show as 'N/A' on a Class 1 projector.

## **Available Feedback for PJLink**

- Error Status
- Freeze Status
- Lamp Hour
- Mute Status
- Power Status
- Projector Input

----------

Contributions for maintenance and development of this open source module are always welcome
<https://github.com/sponsors/istnv>

----------
