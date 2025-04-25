## Q-SYS Remote Control

This module will connect to Q-SYS systems using the [QRC](https://q-syshelp.qsc.com/#External_Control_APIs/QRC/QRC_Overview.htm) protocl.

**Available commands for Q-SYS Remote Control**

- ChangeGroup.Invalidate
- Component.Set
- Control.Get
- Control.Set
- Control.Toggle
- LoopPlayer.Cancel
- LoopPlayer.Start
- LoopPlayer.Stop
- Mixer.SetCrossPointDelay
- Mixer.SetCrossPointGain
- Mixer.SetCrossPointMute
- Mixer.SetCrossPointSolo
- Mixer.SetCueGain
- Mixer.SetCueMute
- Mixer.SetInputCueAfl
- Mixer.SetInputCueEnable
- Mixer.SetInputGain
- Mixer.SetInputMute
- Mixer.SetInputSolo
- Mixer.SetOutputGain
- Mixer.SetOutputMute
- PA.PageSubmit - Message
- Snapshot.Load
- Snapshop.Save
- StatusGet

**Mixer Input Output String Synatx**

The mixer control API uses a string specification to determine to which inputs and outputs to apply changes. The syntax supports space- or comma-separated numbers, ranges of numbers, all numbers (*), and negation of a selection with the ! operator. For example:

| Syntax     | Meaning                              |
| ---------- | ------------------------------------ |
| *          | Everything                           |
| 1 2 3      | Channels 1, 2, 3                     |
| 1-6        | Channels 1 through 6                 |
| 1-6 9      | Channels 1 through 6 and 9           |
| 1-3 5-9    | Channels 1 through 3 and 5 through 9 |
| 1-8 !3     | Channels 1 through 8 except 3        |
| * !3-5     | Everything but 3 through 5           |
|            |                                      |

**Feedbacks**

- Core State
- Feedback on boolean control value
- Feedback if control value at or exceeds threshold
- Fade color over control value range


**Variables**

- Engine Status
- Named control values
