# Help section for the Analog Way Picturall module

With this module you can control all Media Servers from the Picturall series by Analog Way.
This module has been sponsored by Analog Way. We want to thank Analog Way for the support of free software and Companion!

This module uses always the default TCP port number of 11000 for control of the device. Make sure the port number is not set to something different on your Picturall server.

Since version 3.5.1 of Picturall server it supports SPX graphics. There are no dedicated actions in this module to control the SPX graphics server. You can either add your commands to macros and trigger the macro from a custom command or with a cue or you can use Companion's SPX: GC module. The Picturall module and the SPX module can be used at the same time on the same server.

## Available variants for Analog Way Picturall

none
There are different servers available, but they use all the same protocol. The available commands doesn't depend on specific hardware.

## Available actions for Analog Way Picturall

* Run Cue
* Playback Go
* Playback Goto
* Select Cuestack into Playback
* Playback Release
* Layer Playback control
* Layer Playback Seek
* Set Layer Media End Action
* Send custom command

All text inputs in actions support parsing of variables. The input text color will turn red if a non valid number is entered, but variables parsing is working even if the text is red. You just have tom make sure that the content of the variable matches the option. 

You easily can send any command to the Picturall server with the "Send custom command" action. There are two ways of obtaining what text to use as a custom command.  
  1. Do some manipulation with the Picturall commander and then use the `Learn` button at Companion to get the status of the last changed control. The learn button will insert a "set ..." command with the parameters of the control which has been updated. Note, that the learn button always inserts all current parameters of the control, even if only one has changed. Just delete the parameters you don't want to be updated when recalling the action. Also note that if you have some stuff running which will constantly update values, like current timecode of a source or rotation or movement values, you will most likely not be able to learn your last user input to the action because there will be other values updated later.
  2. Picturall commander logs all commands it sends to the server and you can just use them in Companion as well. To find out the command in the Picturall Commander go to  Edit -> Options -> Logging and make sure you have Log commands checked.  
    After this select View -> Commander log  
    Now when you do any changes in Commander the sent commands will be copied to the Commander Log after 5 to 10 seconds.  
    You only have to enter the part AFTER the "-->"

## Available variables for Analog Way Picturall
There is a variable for the server software version. Although the server can only be controlled by the Picturall Commander with a matching software version, the Companion module should work with all server versions since 2.0.
There are variables for each playback indicating the state of the playback. The x_cuestack variable indicates if a cuestack is selected in the playback. It reads "0" if none or the number of the selected cuestack. The x_cue variable indicates the active cue of the cuestack in the playback. It reads "0" if none or the number of the active cue.

There are some variables which are not exposed in the instance configuration.
This are the available variables (you have to replace INSTANCENAME with the name of your instance and the captital letter X denotes where yhou have to substitute a number)
* $(INSTANCENAME:sourceX_elapsed) Gives you the source's elapsed playtime
* $(INSTANCENAME:sourceX_countdown) Gives you the source's remaining time until outpoint
* $(INSTANCENAME:sourceX_playstate) Gives you a literal readout of the playstate, e.g. Play, Stop...
* $(INSTANCENAME:playbackX_questack) Gives you the number of the cuestack in the playback, 0 if empty
* $(INSTANCENAME:playbackX_cue) Gives you the number of the current cue played back in a playback, 0.0 if none
* $(INSTANCENAME:playbackX_state) Gives you a literal readout of the state of a playback, e.g. Waiting for trigger...
* $(INSTANCENAME:playbackX_progress) Gives you the progress of the fade between current and next cue in a playback in percent


Most of these variables are not pulled actively, so they read N/A until companion receives the first change.

## Available presets for Analog Way Picturall
There are presets for the Go actions for all playbacks.

## Available feedbacks for Analog Way Picturall
There is one feedback indicating if a cuestack is selected in a playback or if it is empty.  
Another feedback shows the current playstate of a layer source.