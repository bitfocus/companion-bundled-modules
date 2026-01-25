# MADRIX Aura 2/8/12/32

This module allows you to control MADRIX Aura 2, Aura 8, Aura 12, and Aura 32 devices via HTTP commands.

## Quick Start

To enable remote control commands in your MADRIX Aura device, you must add XML configuration lines to the **ShowConfig.xml** file. This can be done using either:
- **MADRIX Hardware Manager** (recommended for remote devices)
- **Direct SD Card access** (for local editing)

---

## Configuration Setup

### Method 1: Using MADRIX Hardware Manager (Recommended)

**Prerequisites:**
- MADRIX Aura device is connected via USB or network and is reachable
- MADRIX Hardware Manager is installed on your computer

**Step-by-step instructions:**

1. Open the MADRIX Hardware Manager
2. Navigate to the **External Storage** tab
3. Select your MADRIX Aura device from the list (ensure it shows as connected)
4. Click on your **MADRIX Aura device** to expand the folder structure and view its contents
5. **Download the configuration file**: Right-click on **ShowConfig.xml** and click **Download Files**
6. Open the downloaded ShowConfig.xml file with a text editor (e.g., Editor, Notepad++, VS Code, Sublime Text)
7. Locate the position after the last `<scene index...>` line and before the `<plxconfig>` line
8. Add the XML remote command lines (see section below)
9. Save the file
10. Go back to the Hardware Manager → **External Storage** tab
11. Right-click on your **MADRIX Aura device** and click **Upload Files**
12. Select the modified ShowConfig.xml file and confirm the upload
13. Wait for the upload to complete.

### Method 2: Direct SD Card Access

1. Power off your MADRIX Aura device
2. Remove the SD card from the device
3. Insert the SD card into your computer (using a card reader if necessary)
4. Locate the ShowConfig.xml file on the SD card
5. Open it with a text editor
6. Add the XML remote command lines (see section below)
7. Save the file
8. Safely eject the SD card from your computer
9. Insert the SD card back into the MADRIX Aura device
10. Power on the device and wait for it to restart

---

## XML Configuration Lines

Add the following lines to your ShowConfig.xml file. **IMPORTANT: Preserve all whitespace and indentation** - the leading space at the beginning of each line is crucial.

**Location in file:** Insert these lines directly after the last `<scene index...>` element and **before** the `<plxconfig>` element.

```xml
 <remote name="Play" action="play" value="0" porttype="http" command="play" enabled="yes" />
 <remote name="Pause" action="pause" value="0" porttype="http" command="pause" enabled="yes" />
 <remote name="Stop" action="stop" value="0" porttype="http" command="stop" enabled="yes" />
 <remote name="record" action="record" value="0" porttype="http" command="record" enabled="yes" />
 <remote name="Intensity fix" action="intensity" porttype="http" command="intensity" enabled="yes" />
 <remote name="Intensity inc" action="intensity_inc" porttype="http" command="intensityinc" enabled="yes" />
 <remote name="Intensity dec" action="intensity_dec" porttype="http" command="intensitydec" enabled="yes" />
 <remote name="Cue" action="scene" porttype="http" command="cue" enabled="yes" />
 <remote name="Next Cue" action="next" value="0" porttype="http" command="next" enabled="yes" />
 <remote name="Previous Cue" action="previous" value="0" porttype="http" command="previous" enabled="yes" />
 <remote name="speed inc" action="speed_inc" porttype="http" command="speedinc" enabled="yes" />
 <remote name="speed" action="speed16" porttype="http" command="speed" enabled="yes" />
 <remote name="speed inc" action="speed_inc" porttype="http" command="speedinc" enabled="yes" />
 <remote name="speed dec" action="speed_dec" porttype="http" command="speeddec" enabled="yes" />
 <remote name="Group 1" action="intensitygroup1" porttype="http" command="group1" enabled="yes" />
 <remote name="Group 2" action="intensitygroup2" porttype="http" command="group2" enabled="yes" />
 <remote name="Group 3" action="intensitygroup3" porttype="http" command="group3" enabled="yes" />
 <remote name="Group 4" action="intensitygroup4" porttype="http" command="group4" enabled="yes" />
 <remote name="Group 5" action="intensitygroup5" porttype="http" command="group5" enabled="yes" />
 <remote name="Group 6" action="intensitygroup6" porttype="http" command="group6" enabled="yes" />
 <remote name="Group 7" action="intensitygroup7" porttype="http" command="group7" enabled="yes" />
 <remote name="Group 8" action="intensitygroup8" porttype="http" command="group8" enabled="yes" />
 <remote name="Group 1 inc" action="intensitygroup1inc" porttype="http" command="group1inc" enabled="yes" />
 <remote name="Group 1 dec" action="intensitygroup1dec" porttype="http" command="group1dec" enabled="yes" />
 <remote name="Group 2 inc" action="intensitygroup2inc" porttype="http" command="group2inc" enabled="yes" />
 <remote name="Group 2 dec" action="intensitygroup2dec" porttype="http" command="group2dec" enabled="yes" />
 <remote name="Group 3 inc" action="intensitygroup3inc" porttype="http" command="group3inc" enabled="yes" />
 <remote name="Group 3 dec" action="intensitygroup3dec" porttype="http" command="group3dec" enabled="yes" />
 <remote name="Group 4 inc" action="intensitygroup4inc" porttype="http" command="group4inc" enabled="yes" />
 <remote name="Group 4 dec" action="intensitygroup4dec" porttype="http" command="group4dec" enabled="yes" />
 <remote name="Group 5 inc" action="intensitygroup5inc" porttype="http" command="group5inc" enabled="yes" />
 <remote name="Group 5 dec" action="intensitygroup5dec" porttype="http" command="group5dec" enabled="yes" />
 <remote name="Group 6 inc" action="intensitygroup6inc" porttype="http" command="group6inc" enabled="yes" />
 <remote name="Group 6 dec" action="intensitygroup6dec" porttype="http" command="group6dec" enabled="yes" />
 <remote name="Group 7 inc" action="intensitygroup7inc" porttype="http" command="group7inc" enabled="yes" />
 <remote name="Group 7 dec" action="intensitygroup7dec" porttype="http" command="group7dec" enabled="yes" />
 <remote name="Group 8 inc" action="intensitygroup8inc" porttype="http" command="group8inc" enabled="yes" />
 <remote name="Group 8 dec" action="intensitygroup8dec" porttype="http" command="group8dec" enabled="yes" />
```

---

## Companion Configuration

### Finding Your Device's IP Address

You can find the IP address of your MADRIX Aura device in one of these ways:

**Option 1: Check the Device Directly**
- Look at the **right side of your MADRIX Aura device** - the IP address is printed on the device label

**Option 2: Use MADRIX Hardware Manager (via USB)**
- Connect your device via USB to your computer
- Open MADRIX Hardware Manager
- Navigate to the **External Storage** tab
- Select your device - the IP address will be displayed in the device information

### Important: Network Configuration

**Your Companion computer MUST be in the same IP address range as your MADRIX Aura device.**

For example:
- If your Aura has IP: `10.84.0.44` → Your PC should be in the `10.84.0.x` range
- Configure your PC's network settings to match the device's subnet (typically subnet mask: `255.0.0.0`)

### Host (IP Address) in Companion

Enter the IP address of your MADRIX Aura device in the module configuration. This is the network address where Companion can reach your device.

---

## Available Actions in Companion

### Playback Control

- **Playback State**: Control playback state
  - **Set State**: Set to Play, Pause, or Stop
  - **Toggle Between States**: Toggle between two selected states (e.g., Play ↔ Pause)

- **Previous Cue**: Jump to the previous cue
- **Next Cue**: Jump to the next cue
- **Specific Cue**: Jump to a specific cue number (1-255)

### Intensity Control

- **Intensity**: Master intensity control
  - **Set Value**: Set intensity to a specific value (0-255)
  - **Increase**: Increase intensity by step value (default: 26)
  - **Decrease**: Decrease intensity by step value (default: 26)

- **Group Intensity**: Control intensity for specific groups (1-8)
  - **Set Value**: Set group intensity to a specific value (0-255)
  - **Increase**: Increase group intensity by step value (default: 26)
  - **Decrease**: Decrease group intensity by step value (default: 26)

### Speed Control

- **Speed**: Playback speed control
  - **Set Value**: Set speed to a specific value (0-255, default: 100)
  - **Increase**: Increase speed by step value (default: 10)
  - **Decrease**: Decrease speed by step value (default: 10)

### Recording

- **Record**: Start/stop recording

## Command Reference

All commands are sent via HTTP GET requests to: `http://[IP]/remote.cgi?[command]`

| Command | Description | Example |
|---------|-------------|---------|
| `play` | Start playback | `remote.cgi?play` |
| `pause` | Pause playback | `remote.cgi?pause` |
| `stop` | Stop playback | `remote.cgi?stop` |
| `intensity=X` | Set master intensity | `remote.cgi?intensity=255` |
| `intensityinc=X` | Increase master intensity | `remote.cgi?intensityinc=26` |
| `intensitydec=X` | Decrease master intensity | `remote.cgi?intensitydec=26` |
| `speed=X` | Set playback speed | `remote.cgi?speed=100` |
| `speedinc=X` | Increase speed | `remote.cgi?speedinc=10` |
| `speeddec=X` | Decrease speed | `remote.cgi?speeddec=10` |
| `cue=X` | Go to cue number X | `remote.cgi?cue=1` |
| `previous` | Previous cue | `remote.cgi?previous` |
| `next` | Next cue | `remote.cgi?next` |
| `group1=X` | Set group 1 intensity | `remote.cgi?group1=255` |
| `group1inc=X` | Increase group 1 intensity | `remote.cgi?group1inc=26` |
| `group1dec=X` | Decrease group 1 intensity | `remote.cgi?group1dec=26` |
| `record` | Start/stop recording | `remote.cgi?record` |

*Note: Groups 1-8 follow the same pattern as shown above for group1*



## Troubleshooting

### Configuration Issues

**The commands are not working or are not being recognized:**
- Ensure ShowConfig.xml has been properly configured with the XML remote command lines
- Verify that **all whitespace and indentation** in the XML lines is preserved exactly as provided
- Confirm that the XML lines are placed after the last `<scene index...>` element and before the `<plxconfig>` element
- Check that you have uploaded the modified file via **Method 1** or properly saved it via **Method 2**

### Network & Connectivity Issues

**Companion cannot reach the device:**
- Check that the IP address in Companion configuration is correct (see "Finding Your Device's IP Address" section)
- Ensure your Companion computer is in the **same IP address range** as your MADRIX Aura device (e.g., if device is `10.84.0.44`, your PC should be in the `10.84.0.x` range)
- Ensure your MADRIX Aura device is powered on and network accessible
- Verify network connectivity between your Companion computer and the Aura device
- Test connectivity by pinging the device from command line: `ping [your-device-ip]`

### Device Issues

**Device is not responding:**
- Confirm the device is powered on and has finished startup
- If you made changes via Method 1 (Hardware Manager), wait 30-60 seconds for the device to restart
- If you made changes via Method 2 (SD Card), power cycle the device

### Debugging & Logs

- View the Companion module log for detailed command execution and error messages
- Default values: **Intensity step = 26**, **Speed step = 10**
- Each action execution will log the HTTP command being sent and the device response

## Important Configuration Notes

- **XML Whitespace**: The leading space at the beginning of each XML line is crucial and must not be removed
- **File Syntax**: Ensure proper XML syntax in ShowConfig.xml (valid XML structure)
- **Backup**: Before making changes, consider backing up your original ShowConfig.xml file

## Supported Devices

- MADRIX Aura 2
- MADRIX Aura 8
- MADRIX Aura 12
- MADRIX Aura 32

## Version & Changelog

**Current Version: 1.0.1** (Released: 2026-01-21)

For detailed version history and planned features, see the [CHANGELOG](../CHANGELOG.md).

---

## Disclaimer

Made with ❤ by **verLEDung - LED- & Veranstaltungstechnik**

Website: https://verledung.com  
Impressum: https://verledung.com/impressum

**You need MADRIX installations or programming?**  
Contact: kontakt@verledung.com

---

This module is **not an official product** of inoage GmbH. It is an independent implementation for controlling MADRIX Aura devices via Bitfocus Companion.

**MADRIX® is a registered trademark of inoage GmbH.**

**inoage GmbH**  
Wiener Straße 56  
01219 Dresden, Germany  
Phone: +49 351 862 6869 0  
E-mail: info@madrix.com  

Copyright © 2001 – 2025 inoage GmbH | All rights reserved.


