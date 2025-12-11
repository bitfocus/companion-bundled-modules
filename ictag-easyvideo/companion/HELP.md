## easyVideo

This module will help to control your easyVideo Instance provided by ICT AG.

---

### Implemented Commands

- **Cue Video (with ID)** _ID 0 ≙ Clip 0_
- **Next Clip**
- **Overlay**
- **Pause/Play**
- **Previous Clip**
- **Stop**
- **Video (with ID)** _ID 0 ≙ Clip 0_
- **Load Media Folder**

---

## Guide: Configurate easyVideo for OSC remoting

_Hint: You need a easyVideo PRO License:_

1. Open **easyVideo**.
2. Click into Video Canvas:
3. Open Config Menü **CFG**
4. Switch to **PRO**
5. Set **Net Mode** to OSC
6. **Optional:** For Feedback Enable **Send FileInfo** and **Send PlayInfo** (Info-IP ≙ Companion IP, Info-Port)<br>_Hint: Each easyVideo instance requires its own Info-Port!_
7. Press **Speichern** to save the Settings

---

## Changelog:

#### v1.1

New:

- Action: `Load Media Folder` (`/ict_ev/loadFolder`) to load entire media folders via OSC.
- Variables: Added many new variables to represent player state (`playback_*`, `current_*`), including formatted time variables (`playback_clipTimeFormatted`, `playback_clipDurationFormatted`, `playback_clipRemainFormatted`) and `playback_playStateFormatted`.
- Feedbacks: Implemented `RemainingTime` (text) and `mediaProgressBar` (graphical) feedbacks, plus `clipState` feedback which changes background color when `playback_clipId` matches a configured ID and can optionally filter by playing/paused state.

Changed:

- Actions: ID 0 ≙ Clip 0 due to Index shown in easyVideo 1.5

#### v1.0

- Initial Release

Made with 💚 by [MIDIA](https://midia.de/)
