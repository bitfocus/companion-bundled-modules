## Da-Share MultiPlay module

This module connects to the MultiPlay program with a Telnet connection.

> At the moment no data from the player is returned therefor no feedback is provided.
> Make sure to activate the TCP connection: File > Production Properties > Telnet Patches > Command Listen > Port number & ACTIVE

Go to [da-share MultiPlay](https://www.da-share.com/software/multiplay/) for download.

### Commands supported

| Action          | Description                                                          |
| --------------- | -------------------------------------------------------------------- |
| clear           | Clears the Telnet client window                                      |
| version         | Reports the MultiPlay version                                        |
| quit            | Terminates the Telnet session                                        |
| go              | GO at current cue list position                                      |
| stop all        | Stop all cues                                                        |
| fade all        | Fade all cues out                                                    |
| pause all       | Pause all playing cues                                               |
| resume all      | Resume all paused cues                                               |
| stopwatch start | Start the stopwatch                                                  |
| stopwatch stop  | Stop the stopwatch                                                   |
| stopwatch reset | Reset the stopwatch                                                  |
| advance         | Advance the current GO position                                      |
| pause           | Pause the currently selected cue                                     |
| resume          | Resume the currently selected cue                                    |
| stop            | Stop the currently selected cue                                      |
| jump            | Jump the currently selected cue to near the end                      |
| next track      | Jump to next track on the currently selected cue (playlist only)     |
| previous track  | Jump to previous track on the currently selected cue (playlist only) |
