Supports all versions up to **4.2b9**.
You can select the appropriate version, and the module will automatically adjust the set of commands according to your choice.

---

**🔧 Available Commands (for Playdeck 4.1b16; version dependent)**

- **CONTROL**:
  CUE/PLAY/FADE-IN by number/list/UID/flex; CUE/PLAY Next; SWITCH CHANNEL; PAUSE/STOP; POSITION; POSITION SAVE/RECALL; FADE EDIT; SELECT Previous/Next Clip; MARK Next Clip; ACTIVATE/DISABLE Clip; LOOP/UNLOOP Clip

- **ASSETS**:
  LOAD, APPEND Project

- **AUDIO**:
  MUTE, UNMUTE

- **OVERLAY**:
  PLAY, STOP, STOP ALL; TOGGLE OVERLAY

- **ACTIONS**:
  START, STOP, STOP ALL

- **DESKTOP**:
  START, STOP

- **STREAM**:
  START, STOP

- **RECORDING**:
  START, STOP

- **UTILS**:
  WAIT

- **Custom command** — sends a custom command.
  Format:

  ```text
  <{command}|{playlistID}|{blockID}|{clipID}>
  ```

---

**📡 Available Feedbacks (activated after certain actions)**

**Current channel state**

- **Channel**: 1–8
- **State**: `STOP`, `PAUSE`, `PLAY`, `CUE`
- **Block Number/Name**: `0` = any
- **Clip Number/Name**: `0` = any
- **Item ID**

**Current ready state**

- **Target**: `CHANNEL`, `OUTPUT (DESKTOP)`, `INPUT`, `DIRECTOR VIEW`, `RECORDING`
- **Target Number**: numeric value
