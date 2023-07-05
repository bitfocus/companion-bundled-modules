# Characterworks Companion Module

v 2.0.0<br>
5/6/23<br>
Eddie Wettach <ewettach@gmail.com>

## Change Log

2.0.0 - Added support for Companion version 3 <br>
1.0.2 - Added ability to trigger grid buttons<br>
1.0.1 - Initial CW Support - trigger motions and set text functions

## Requirements:

1.  Companion
2.  Characterworks 3.7 (it may work on other versions as well)

## How to:

1.  Add an instance of Characterworks to Companion.
2.  Configure the IP address of the server running Characterworks
3.  Configure the port number of the server running Characterworks (default is 5201)
4.  Configure a button with the action Trigger Characterworks or Set_text in Characterworks Motion
5.  Follow more specific steps below under "Actions" depending on what you selected in the above #4

## Actions:

### Trigger Characterworks

Allows user to play, finish, or stop motions on a certain channel.

#### Parameters:

- **Action**:
  - play_motions - command for playing out a motion
  - finish_motions - command for finishing out a motion
  - stop_motions - command for hard stopping a motion
- **Motion Name**: The name of the motion within Characterworks you which to trigger.
- **Channel**: The channel (preview, live1, or live2) that you want the trigger to output on

Example:
Action: play_motions *This is the command you want to send to the motion
Motion Name: scorebug *This is the name of the motion file that you create within Characterworks
Channel: preview \*This is the channel you want to output the graphic on

### Set Text

Allows user to set the text of a motion that is already online.
**It is very important to note that the motion you are setting the text of must already be playing. You can do this in one step by programming a companion button to first Trigger a play_motions then add the Set Text action. Please see final under this Set Text section to see example of running both commands on one button with a delay on the set text**

In this section, we will be using a motion that is set up such as the one in the picture below for a reference:

#### Parameters:

- **Motion Name**: The name of the motion within Characterworks you which to set text on.
- **Text Layer**: This the text object/layer you wish to set. If the text object is in the root of the motion (as seen in figure 1.3 below) then you can just type in the name of the text object. If it is under a composition or sub-compositions, you must separate the compositions by backslash, follwed by the name of the text object (as seen in figure 1.4 below)
- **Text Value**: The actual string of text you wish to display
- **Channel**: The channel (preview, live1, or live2) that you want the trigger to output on

Example:
Action: play_motions *This is the command you want to send to the motion
Motion Name: scorebug *This is the name of the motion file that you create within Characterworks
Channel: preview \*This is the channel you want to output the graphic on

As stated above, you must have the motion running before you can set the text of it. Below is an example of how using a delay (you may need to adjust the delay depending on network performance) will allow you to execute a play_motion and a set_text all on one button press.

### Grid Button

Allows user to specify the button on a Characterworks Grid Controller to play. Parameters are the name of the Grid (i.e. Grid 1) and the row, column of button. The first row and first column are (0,0) so be sure that you count from 0 instead of 1.

## References:

Online documentation on Characterworks:
https://www.chrworks.com/help/
Details on what Characterworks will respond to via HTTP POST requests can be found under the heading REMOTE CONTROL within Characterworks Online Help
