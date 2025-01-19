# Libre Office Impress Remote Connection

Connect to Libre Office Impress via Network

## Setup Connection
					
 - Open **Slide Show &#62; Slide Show Settings...**
 - Activate **Enable Remote Control** and **Enable insecure Wifi Connections**
 - Restart Libre Office Impress and allow Firewall pass-through if it pops up
 - In Companion: Enter IP below and save settings
 - Open **Slide Show &#62; Impress Remote...**
 - Enter the pin 9876 into the Companion Connection and click **Connect**

## Known Issues

 - Only the Presentation in the active Window can be started
 - The variable presentation_name does not always get sent by LibreOffice Impress
 - Toggle Blank Screen does not work the first Time if it got triggered outside Companion

## Configuration

| Option                | Description                                                     |
| --------------------- | --------------------------------------------------------------- |
| Target IP             | Destination Host name / IP                                      |
| Target Port           | Destination port (1599)                                         |

## Actions

| Action           | Description                                                                   |
| ---------------- | ----------------------------------------------------------------------------- |
| Start Presentation  | Start presentation (if stopped) and goto Slide (if specified) |
| Goto Slide  | Goto Slide (if Presentation started) |
| Next Step           | Play next Transition |
| Previous Step | Previous Transition |
| Blank Screen | Turn On/Off Blank Screen|

## Variables

| Variable          | Description                                                                   |
| ----------------- | ----------------------------------------------------------------------------- |
| lo_version        | Libre Office Version |
| presentation_name | Presentation Name (does not reliably work) |
| total_slides      | Total Slides |
| slide             | Current Slide |
| notes             | Current Notes |

## Credits

Based on [generic-tcp-udp](https://github.com/bitfocus/companion-module-generic-tcp-udp/) module