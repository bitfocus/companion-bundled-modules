# TASCAM BD-MP1 Blu-Ray Player
*Companion Module*

## WARNING: Update from Companion 2.x to 3.x
If you are updating from Companion 2.x you might have to correct your variables manually.
Companion 3.x doesn't allow the colon inside variable names anymore and thus all variables have been renamed using the underscore as a replacement.
Also the module uses the new boolean feedbacks now which should have been automatically upgraded.

## NOTE
Only one client connection can be made at a time.

## Dynamic Variables
| Variable | Description |
| --- | --- |
| **track_total** | Total Track |
| **track_number** | Track Number |
| **group_total** | Total Group/Title |
| **group_number** | Group/Title Number |
| **elapse_hour** | Elapse Hour |
| **elapse_minute** | Elapse Minute |
| **elapse_second** | Elapse Second |
| **remain_hour** | Remain Hour |
| **remain_minute** | Remain Minute |
| **remain_second** | Remain Second |

## Actions
| Action | Parameters |
| --- | --- |
| **Stop** ||
| **Play** ||
| **Pause** ||
| **Chapter Jump** | Chapter |
| **Track/Chapter Jump Next** ||
| **Track/Chapter Jump Prev** ||
| **Title Jump** | Title |
| **Title Jump Next** ||
| **Title Jump Prev** ||
| **Time Mode Code** | Time Mode (Total Elapsed, Total Remain, Elapsed, Remain) |
| **Hide Menu** | On/Off (OSD on, OSD off) |
| **Setup Menu** ||
| **Top Menu (Disc Menu)** ||
| **Option Menu** ||
| **Pop Up Menu** ||
| **Return** ||
| **Audio Dialog** | Audio stream code (Primary, Secondary) |
| **Subtitle** ||
| **Enter** ||
| **Disc Tray** | Disc Tray Open/Close (Open, Close) |
| **Video Resolution** | Resolution (Auto, 480/576i, 480/576p, 720p, 1080i, 1080p) |
| **Display/Info** ||
| **Function/Color** | Color (Red, Green, Blue, Yellow) |
| **Home** ||
| **Ten Key** | Number (0-9) |
| **Slow/Search** | Direction (Forward, Reverse) |
|| Search Speed (Fast, Slow) |
| **Mute** | On/Off (Mute on, Mute off) |
| **Cursor** | Direction (Left, Right, Up, Down) |
| **Auto Play** | Auto Play (On, Off) |
| **PIP Mark** | PIP Mark (On, Off) |
| **3D Output** | 3D Output (Auto, Off) |
| **TV Aspect Ratio** | TV Aspect Ratio (16:9 Wide, 16:9 Wide/Auto, 4:3 pan & scan, 4:3 letterbox) |
| **TV System** | TV System (NTSC, PAL, Multi-system) |
| **1080p 24 Conversion** | 1080p 24 Conversion (On, Off) |
| **HDMI Color Space** | HDMI Color Space (RGB Video Level, RGB PC Level, YCbCr 4:4:4, YCbCr 4:2:2) |
| **HDMI Deep Color** | HDMI Deep Color (48 Bits, 36 Bits, 30 Bits, Off) |
| **Secondary Audio** | Secondary Audio (On, Off) |
| **Fs Setting** | Fs Setting (48k LPCM, 96k LPCM, 192k LPCM) |
| **Speaker Configuration** | Speaker/Woofer Number (2.1Ch, 3.1Ch, 4.1Ch, 5.1Ch, 6.1Ch, 7.1Ch) |
| **SC Speaker Setting** | Type (Center, Left, Right, Left Surround, Right Surround) |
|| Size (Large, Small) |
|| Level (Example: -01 = -1dB, +10 = +10dB) |
|| Delay (0-9999ms) |
| **Firmware Upgrade** | Firmware Upgrade (Via USB, Via Disc) |
| **HDMI CEC** | HDMI CEC (HDMI1, Off) |
| **Reset Factory Defaults** ||
| **BD-Live Network Access** | BD-Live Network Access (On, Limited, Off) |

## Feedbacks
| Feedback | Parameters |
| --- | --- |
| **Disc Status** | Disc Status (There is no disc media, There is disc media, Mounted media is unformatted, Disc tray is opening or open, Disc tray is closing or closed, Disc tray error) |
|| Negate Status |
| **Status** | Status (Play, Pause, Slow play reverse, Slow play forward, Search play reverse, Search play forward, Step play, FS play, Menu setting is displayed, Setup mode, Track/Root menu, Home menu) |
|| Negate Status |

* * *

&copy; 2023 Christian Volmering &lt;christian@volmering.name&gt;
