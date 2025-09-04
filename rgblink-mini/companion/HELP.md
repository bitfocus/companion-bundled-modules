# RGBlink mini

This module was initially created for the _mini_ device. However, some actions have been tested with the _mini_, others with the _mini-edge SDI_. Some actions are also expected to work on the _mini+_, _mini-pro_, and other models. See the table below for specific details.

Devices must be controlled over a network — USB control is NOT supported.

## **Available Actions**

| Action | Description | Declarative API Compatibility ([** API Specifications](#api-list)) | Test results with mini [(*1)](#device-1) | Test results with mini-edge SDI [(*2)](#device-2) |
|--------|-------------|------------------------------------------------------------|--|--|
| Switch signal source | Similar to pressing the 1/2/3/4/5 source button on the device. 5th input is in BETA. | mini [(1)](#api-mini);<br/>mini-pro [(2)](#api-mini-pro);<br/>mini Series: mini-pro, mini-pro v3, mini-ISO [(3)](#api-v106) | 🟩 OK | 🟨 Works but causes issues |
| Switch mode (T-BAR/Auto) | Choose between T-BAR or Auto mode for switching. |  mini [(1)](#api-mini);<br/>mini-pro [(2)](#api-mini-pro);<br/>mini Series: mini-pro, mini-pro v3, mini-ISO [(3)](#api-v106) | 🟩 OK | 🟩 OK |
| Select source and target | Combines <span style="color:gray">_Switch signal source_</span> and <span style="color:gray">_Switch mode (T-BAR/Auto)_</span>. 5th input is in BETA. | _See details for combined actions_ | 🟨 As I remember, it works, but setting PGM also sets PST | ⬜ Not tested yet |
| BETA: Performs a transition between Program and Preview | Performs a transition between Program and Preview (TAKE/CUT) | Take mentioned in mini-pro [(2)](#api-mini-pro);<br/>Q Series:Q16pro Gen2 1U, FLEX Series:FLEXpro 16,FLEXpro 4 [(3)](#api-v106);<br/> mini-edge SDI (email) [(4)](#mail-20250726)| ⬜ Not tested yet | 🟩 OK |
| BETA: Switch signal source (PST or PGM) | Switch the selected signal to PST or PGM. Likely a better alternative to <span style="color:gray">_Select source and target_</span>, but untested on _mini_. | mini Series: mini-pro, mini-pro v3, mini-ISO [(3)](#api-v106) (Note: PST command is the same as _Switch signal source_, which is compatible with mini/mini-pro) | ⬜ Not tested yet | 🟩 OK |
| Set switch effect | Set a transition effect, such as cut or fade. See hardware manual or presets for more. | mini [(1)](#api-mini);<br/>mini-pro [(2)](#api-mini-pro);<br/>mini Series: mini-pro, mini-pro v3, mini-ISO [(3)](#api-v106) | 🟩 OK | ⬜ Not tested yet |
| BETA: Load scene/view to Preview (PVM) | Load saved earlier scene/view to Preview | mini-pro [(2)](#api-mini-pro);<br/>mini-edge SDI (email) [(4)](#mail-20250726) | ⬜ Not tested yet | 🟩 OK |
| Select PIP mode | Select picture-in-picture mode (off, center, top, bottom, left, right, etc.). | mini [(1)](#api-mini);<br/>mini-pro [(2)](#api-mini-pro);<br/>mini Series: mini-pro, mini-pro v3, mini-ISO [(3)](#api-v106) | 🟩 OK | 🟥 Not reccomended |
| Select PIP layer (A or B) | Select the PIP layer before setting the signal source. | _Undocumented_ | 🟩 OK | 🟥 Not reccomended |
| Build PIP from selected sources | Set PIP mode, select two sources and output (Live or Preview). Combines <span style="color:gray">_Select PIP mode_</span>, <span style="color:gray">_Select PIP layer (A or B)_</span>, and <span style="color:gray">_Switch signal source_</span>. | _See details for combined actions_ | 🟩 OK | 🟥 Not reccomended |
| BETA: Switch input signal channel (HDMI/SDI) | Select the input channel (HDMI or SDI) for numbered inputs, if supported by hardware. | mini Series: mini-ISO, mini-edge SDI, mini-mx SDI [(3)](#api-v106) | ⬜ Not tested yet | 🟩 OK |
| BETA: Set T-BAR position | Set the T-BAR position to MIN or MAX. | mini Series: mini-pro, mini-pro v3, mini-ISO [(3)](#api-v106) | ⬜ Not tested yet | 🟩 OK |
| BETA: Set AFV (Audio Follow Video) | Enable or disable AFV for selected input | mini Series: mini-pro, mini-pro v3, mini-ISO [(3)](#api-v106) | ⬜ Not tested yet | 🟩 OK |
| EXPERIMENTAL:  Set LINE IN on/off | Turn on/off LINE IN | MSP Series: MSP 405 [(3)](#api-v106) | ⬜ Not tested yet | ⬜ Not tested yet |
| EXPERIMENTAL: Set mixing audio | Turn on/off audio from sources | mini Series: mini-pro, mini-pro v3, mini-ISO [(3)](#api-v106) | ⬜ Not tested yet | ⬜ Not tested yet |
| EXPERIMENTAL: Set audio volume | Set audio volume for inputs and output |  mini Series: mini-pro, mini-pro v3, mini-ISO [(3)](#api-v106) | ⬜ Not tested yet | ⬜ Not tested yet |
| EXPERIMENTAL: Set LINE IN audio volume | Set volume for LINE IN | mini Series: mini-pro, mini-pro v3, mini-ISO [(3)](#api-v106) | ⬜ Not tested yet | ⬜ Not tested yet |
| EXPERIMENTAL: Set MIC IN audio volume | Set volume for MIC IN | mini Series: mini-pro, mini-pro v3, mini-ISO [(3)](#api-v106) | ⬜ Not tested yet | ⬜ Not tested yet |

### <a name="tested-with"></a>(*) Tested with devices

1. <a name="device-1"></a> mini, with firmware MCU VER 1.14, VIDEO VER 1.57  
2. <a name="device-2"></a> mini-edge SDI, with firmware 1.2.0

### <a name="api-list"></a>(**) API Specifications

1. <a name="api-mini"></a> mini API(EN)-20210225.pdf  
2. <a name="api-mini-pro"></a> RGBlink mini-pro OpenAPI_V1.2_20220208.pdf  
3. <a name="api-v106"></a> RGBlink API_V1.0.6_20250611.pdf
4. <a name="mail-20250726"></a> Email message 2025.07.26 (B.)

## **Available Feedbacks (Current State)**

There are a few feedbacks available, similar to actions. See presets for usage examples.

## **Release Notes**

### Changes in 2.1.0 (July 2025)

Added actions and changes based on _RGBlink API_V1.0.6_20250611.pdf_, some of them tested with mini-edge SDI (firmware 1.2.0)
- Added extra polling commands for mini-edge SDI (disabled by default in connection settings)
- Added 5th input number (BETA — not all hardware includes this button)
- Added BETA action _Switch signal source (PST or PGM)_, intended as a better alternative to _Select source and target_ (tested with minie-edge SDI)
- Added BETA action _Switch input signal channel (HDMI/SDI)_ for devices with 4 HDMI and 4 SDI inputs (tested with minie-edge SDI)
- Added BETA action _Set T-BAR position_ (tested with minie-edge SDI)
- Added BETA action _Set AFV (Audio Follow Video)_ (tested with minie-edge SDI)
- Added BETA action _Performs a transition between Program and Preview_ (Take/CUT) (tested with minie-edge SDI)
- Added BETA action _Load scene/view to Preview (PVM)_ (tested with minie-edge SDI)
- Added EXPERIMENTAL action _Set LINE IN on/off_ (not yet tested)
- Added EXPERIMENTAL action _Set mixing audio_ (not yet tested)
- Added EXPERIMENTAL action _Set audio volume_ (not yet tested)
- Added EXPERIMENTAL action _Set LINE IN audio volume_ (not yet tested)
- Added EXPERIMENTAL action _Set MIC IN audio volume_ (not yet tested)
