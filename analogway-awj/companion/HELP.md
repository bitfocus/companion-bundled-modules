# Analog Way AWJ

**Most important:**  
**[Beware of selection synchronization!](#sync)**  
**There are many presets but much more actions and feedbacks, presets are a good starting point though.**

This module works with all Analog Way devices which support the AWJ protocol. As of now this are the devices of the LivePremier, Alta 4K and Midra 4K series. Although all these devices share the same protocol, they have quite different capabilities and workflows. Companion tries to hide this as much as possible from you and make this module as generic as possible. Basically all the available features are retrieved from the device and only available features are presented to you in dropdowns and so on. E.g. you will only get selections for the inputs built into your device or you get only presets for memories which hold data. That also means you have to be connected to a device to get any selections at all. If you want to preprogram your show, you need to use one of the Analog Way simulators which you can download for free from [https://analogway.com](https://analogway.com) If you have programmed a show with one device and exchange it to a different device later, all your programmed values will stay in the actions and feedbacks but of course they won't work if your new device doesn't support that features, e.g. if you have programmed Aux 6 with LivePremier this action won't work on a Midra 4K device. Or if you have programmed an input plug selection at Midra the action won't work on LivePremier. Most of the actions and feedbacks will work on all devices the same, e.g. transitioning screen 2 will do this on any device if you have activated screen 2.

Not every option of every action or feedback is explained in this manual, most of them are self explanatory. Here you find only general hints and explanations of options which have differences to Analog Way's WebRCS.  
Because of space restrictions on our small Stream Deck buttons, some things are abbreviated on the buttons:
- Master Memory: MM
- Screen Memory: SM or M
- Layer Memory: LM
- Aux Memory: AM
- Multiviewer Memory: VM
- Multiviewer: MV
- Screen 1...x: S1 ... Sx
- Aux 1...x: A1 ... Ax
- Program: PGM
- Preview: PVW (not PRW like in WebRCS)

## Configuration

- Device Network Address
  
  Here you enter the address of the device like you would enter it in the browser if you want to connect to WebRCS.  
	You can use an IP-address, an IPv6-address or a hostname. For a hostname you need working DNS resolution off course.  
	You also can use http:// and https:// but self signed certificates are considered insecure, so https will only work with a valid certificate (adding a custom CA certificate to your system won't circumvent this).  
	If you need to use  custom ports, you can add it to the url with a colon. This module uses the same connection parameters as WebRCS, in WebRCS you will see Companion as another WebRCS client.  
	If you are using authentication on your device, you have to add the credentials to the url like http://username:password@192.168.2.140 The username is always 'admin' and the password is whatever you have chosen. Please note, that authentication adds security on a very low level. Your password will be stored and transmitted in clear text. Everyone who has access to the module configuration can see the password, so you shouldn't use a shared password and you should password protect the access to the Companion GUI as well.

- Device MAC Address
  
  The MAC Address of the device as six double digit hexadecimal values with a delimiter like : or . or - (e.g. 1b:3f:ee:43:2a:b9).  
	You only have to fill in this value yourself if you want to turn on a fresh connected device by wake on lan. If you connect with an already turned on device, the MAC adress will be filled automatically, so you can always turn on the last connected device.

- Turn sync selection on after connection established
  
  If you check this box, the selection synchronization will be automatically turned on after the connection is established. See the action ['Sync selection'](#sync) to learn what that means.

- Colors
  
  Here you can define your preferred default colors, which are used in feedbacks and presets. Remember that these are only default colors, if you drag a preset to a button, that color will be stored at the button and won't change later.


## Actions

- Recall Screen Memory
  
  Available at: LivePremier, Alta 4K, Midra 4K  
	You can choose one or more screens to load a screen memory to. At LivePremier memories can be loaded to regular screens and auxscreens, on Alta and Midra screen memories can be loaded only on regular screens.  
	If you choose selected screens or selected preset this action will work on all screens which are currently selected, i.e. exactly the same behaviour as if you would press a load screen memory button on WebRCS.  
	Additionally you can choose to select the chosen screens, if you tick that box all screens included in the action will be selected and all other screens will be deselected. If you use this action multiple times in one button, the last selection wins. Then you should prefer a dedicated action for selection. 

- Recall Aux Memory

	Available at: Alta 4K, Midra 4K	  
	You can choose one or more auxscreens to load an aux memory to.  
	If you choose selected screens or selected preset this action will work on all auxscreens which are currently selected, i.e. exactly the same behaviour as if you would press a load aux memory button on WebRCS.  
	Additionally you can choose to select the chosen auxscreens, if you tick that box all auxscreens included in the action will be selected and all other screens will be deselected. If you use this action multiple times in one button, the last selection wins. Then you should prefer a dedicated action for selection.

- Recall Master Memory

	Available at: LivePremier, Alta 4K, Midra 4K  
	A master memory will always be loaded to all screens and auxscreens it is programmed for unless one of the screens is locked.  
	Additionally you can choose to select the screens contained in the memory, if you tick that box the according screens will be selected and all other screens will be deselected.	

- Recall Layer Memory

	Available at: LivePremier  

- Recall Multiviewer Memory

	Available at: LivePremier, Alta 4K, Midra 4K

- Take Screen

	Available at: LivePremier, Alta 4K, Midra 4K  
	You can choose which screens/auxscreens to take. If you choose 'Selected Screens', the action does exactly what the Take button on WebRCS does. Additionally you have the option to take all screens or your own selection of screens. You can also combine 'Selected Screens' with your own selection, then all currently selected screens and the ones specified will transition. The screen selection status itself is not affected by the action.  
	If you are working with a T-Bar at the same time and the T-Bar is not at an end position, the action will do the transition to the opposite side from where you started, e.g. if your T-Bar had been down when you started the transition, the action will finish the transition towards up.

- Cut Screen

	Available at: LivePremier, Alta 4K, Midra 4K  
	Same as Take Screen but without effects. The transition time is always zero.

- Set T-Bar Position

	Available at: LivePremier, Alta 4K, Midra 4K  
	You can set the T-Bar position. Beware that T-Bar position is not syncronized live between clients, you will not see the position change in WebRCS.   
	You can use any numbers in floating point or integer format to enter the position and maximum level. E.g. the following inputs all lead to a position exactly half way: 50 / 100, 50% / 100, 0.5 / 1, 127 / 255, 13.4 / 26.8   
	The input in text format has been chosen to make the action compatible with variables, most notably the internal:t-bar variable. You can use Companion with a X-Keys keyboard with T-Bar, the internal:t-bar variable will hold the value from the T-Bar (0-255). Just program a trigger to run the action whenever the variable changes.

- Set Transition Time

	Available at: LivePremier, Alta 4K, Midra 4K  
	You can set the time used for a take transition. At LivePremier there is the possibility to set individual times for program and preview giving you the opportunity of different fade in and fade out times at one transition. At Alta and Midra both presets use one time and so the action doesn't give you individual settings when used with Alta or Midra.

- Select Layer Source

	Available at: LivePremier, Alta 4K, Midra 4K  
	At LivePremier you could also use layer memories for this, but sometimes it is more convenient to just switch a source without the need of a memory and at Alta and Midra this action is especially useful because you don't have layer memories there.  
	Although this action is availabla at all platforms, due to the very different layer types an existing setup may not transfer very well to a different system.  
	If you choose the option to set the source for selected layers, you'll get a separate dropdown for all types of layer sources. At Livepremier these are regular layer sources and background sets for the native layer, at Alta and Midra there are additionally aux-background-layer-sources and foreground sources. At the time of programming the button Companion can't know what type of layer will be selected at execution time, so when the action is executed for every selected layer the chosen input will be set. There is also a don't change option which will not execute a source change if a layer of that type is selected.  
	Imagine you have image one set in background set 1 and as foreground image 1. If you now chose background set 1 as native layer source and foreground image 1 as the foreground layer source and image 1 as the layer aux background layer source, you are able to switch image 1 to all layers with the same button and Companion always chooses the correct type.

- Set Input Plug
  
	Available at: Alta 4K, Midra 4K  

- Set Input Keying

	Available at: LivePremier, Alta 4K, Midra 4K  
	Remember that keying is not a functionality done in the layer but in the input. If you change keying it will immediately impact all occurences of that input in any layer on preview and program.

- Set Input Freeze

	Available at: LivePremier  
	Remember that freeze is not a functionality done in the layer but in the input. If you change freeze it will immediately impact all occurences of that input in any layer on preview and program.
	
- Set Position and Size
  
	Available at: LivePremier

- Copy Program to Preview

	Available at: LivePremier, Alta 4K, Midra 4K  

- Set Preset Toggle

	Available at: LivePremier, Alta 4K, Midra 4K 

- Multiviewer Widget Selection

	Available at: LivePremier, Alta 4K, Midra 4K  
	This action works best in conjunction with the 'Select Source in Multiviewer Widget' action. First select a widget, then choose a source

- Select Source in Multiviewer Widget

	Available at: LivePremier, Alta 4K, Midra 4K  
	Sometimes you want to just switch the source of one widget or don't want to write many memories, there you go.

- Screen Selection

	Available at: LivePremier, Alta 4K, Midra 4K  
	Straight to the interesting part: what are the so called intelligent selection options?  
	There is a intelligent press option and an intelligent release option. As the name suggests both options have to be used in conjunction on one button with the same screen but one in the press actions and the other in the release actions. E.g. put selection of screen S1 with intelligent press option on the press actions of one button and selection of screen S1 with intelligent release option on the release actions of the same button. Now do the same for other screens on other buttons.  
	What you get, is the following behavior: If you press just one of the screen selection buttons, the according screen will be selected and all other screens will be deselected, this is the same like the 'select exlusive' option. But if you press one selection button and hold it pressed down, you can toggle other screens while still holding down the first button. The functionality mimics the selection process of the old Encore controllers.  
	Keep in mind that you have to be carefull with setting up the actions and options, one mistake and the logic may not work. Also remember that this logic relies not only on button presses but also on the releases, although you can use it also with emulator or web buttons or an API, chances are higher that a release event will be missed. If one release is not triggered the logic will lock up. If you made a mistake during programming or a trigger had been lost and the logic doesn't react like it should, you can either press and release all selection buttons one by one or use the reset option to reset it. Reset won't do any selection changes. This logic doesn't work when run by triggers, when you run a intelligent press action from triggers it will do an exclusive selection.  
	You are advised to not mix buttons using the intelligent selection method and other selection methods in your programming. You can totally mix them but you will likely be confused and end up not knowing what is going on.

	If you want to make a custom selection (a.k.a. group), just use this action multiple times on a button. Select the first screen exlusive and then add any additional sceen with select.

- Lock Screen

	Available at: LivePremier, Alta 4K, Midra 4K  
	If you choose all screens as the target and toggle as the action while some screens are locked and some are not, the the action behaves exactly like the general lock button in WebRCS. A partial lock will be toggled to a full lock.

- Select Preset
  
	Available at: LivePremier, Alta 4K, Midra 4K  
	Don't mistake this for a memory, here you can select either Program or Preview.

- Select Layer

	Available at: LivePremier, Alta 4K, Midra 4K  
	There are different strategies how to select layers. Either you can use the currently selected screens and then select one or more layers on the selected screens or you can specify the screens where to select the layer or layers. If you choose one of the select options, then all layers which are not chosen for selection are getting deselected. If you choose one of the toggle options, the specified layer or layers are toggled. Companion can't know the number of layers available at the selected screen when you set up the action, so for the options with selected screens you get the maximum possible layer options. There is no harm if you include a layer which is not available later.

- <a name="sync"></a>Sync selection

	Available at: LivePremier, Alta 4K, Midra 4K  
	With this action you can turn selection syncronization on or off. It is the same functionality like the toggle 'Selection Synced to Server' in WebRCS. You most likely want to have this turned on most of the times and you can automatically activate syncronization after connecting to a device in the configuration.  
	**Selection syncronization is a very relevant concept for your daily work with this module!**  
	What is it about: In WebRCS most of the manipulations are a multi step process. First you select something and then you apply a manipulation to the selection. E.g. first you select a layer and then you adjust the source of that layer or first you select a screen and then you press Take to transition that screen. WebRCS keeps track of many selections like screen selection, layer selection, widget selection...  
	In Companion you have the choice of wether you want to use direct commands like "Transition S1" or you can use the same procedure as WebRCS where you select first and then do something with the selection. That means Companion has to keep track of the selection as well.  
	All WebRCS Clients and Companion is in fact a WebRCS client have their own selection. Client 1 can e.g. have screen S1 selected and client 2 can have screen S2 selected. If client one hits Take, S1 will transition and if client 2 hits take, S2 will transition, but none of the clients knows which screen is selected in the other client. Your Analog Way device itself also can keep track of all the selections. If you turn selection syncronization on, actually the client now will use the selection of the device instead of its local selection. If you change the selection it will be changed on the device. If other clients also syncronize to the device they will immediately see the changes.  
	If you are using only one WebRCS client, selection syncronization doesn't matter, you are absolute good to go with the local selection of the client. But if you want to integrate Companion into your workflow, usually you want to turn syncronization on on Companion and on your WebRCS client.  
	Having said that, there are also situations where you don't want selection syncronization. As far as it concerns Companion then you can either use direct commands or you can permanently or temporarily disable syncronization. You even could turn sync off, select something locally and turn sync on again in one button.  
	For your convenience Companion can automatically turn on its syncronization after a connection is established. WebRCS clients although will always start without syncronization and you have to turn it on manually in the client.  

- Stream Control

  Available at: Alta 4K, Midra 4K  

- Stream Audio Mute

  Available at: Alta 4K, Midra 4K  

- Route audio (block)

	Available at: LivePremier, Alta 4K, Midra 4K  
	Although this action is available on all platforms it works quite different on LivePremier on one hand and Alta and Midra on the other hand.  
	LivePremier only includes a static audio routing between any input and output and Dante. With this action you can change the routes.  
	Alta and Midra include an audio layer which works similar to a video layer and can be used to change audio output and store the assignemnt in memories. In WebRCS you can assign single inputs to the audio layer or one of ten custom blocks. At Midra and Alta this action will set the channels of the custom blocks, using the blocks itself still has to be done in WebRCS. 
	This action routes audio channels in one continous block. You define the first input, the first output and the number of channels.  
	There is one speciality: if you choose 'No Source' as the first channel, no source will be applied to all outputs of the block.  
	When you are on Alta or Midra 4K and you use this action multiple times to changes routes within one custom block, you should use a tiny delay between the actions because internally block channels are not routed individually but replaced as one bunch. You want to make sure that the first action is complete and feedback has been received before you start the next route. You are safe to route as many channels as you like in one action though or many actions without delays affecting different custom blocks.

- Route audio (channels)

	Available at: LivePremier, Alta 4K, Midra 4K  
	Same as with Route audio block but here you dont have to use continous audio channels. You define the first output channel and an individual selection of input channels to route there.
	Remember, you don't have to route all channels in one action, you can use this action multiple times. But timing concerns for Alta and Midra 4K are the same as with the Route audio (block) action.

- Timer Setup
- Timer Adjust Time
- Timer Transport

	Available at: LivePremier, Alta 4K, Midra 4K  
	Timer control is split in three different actions: Timer Setup, Timer Adjust Time and Timer Transport.  
	With Timer Setup you can adjust the general parameters of the timer like the mode or colors. With Timer Adjust Time you set the time and with Timer Transport you can start and stop the timer. 
	For your convenience there are two options which toggle the running state: start/pause and start/stop.
	Note, that Timer Transport doesn't work on Midra Simulator but it works on the real device.
	Times for the Adjust Time command can be entered in the action or any variable with a matching content can be used.

- Set Testpattern

	Available at: LivePremier, Alta 4K, Midra 4K  
	There are options to individually turn on or off and select testpatterns, as well as turn off all testpatterns

- Send custom AWJ replace command

	Available at: LivePremier, Alta 4K, Midra 4K  
	This is a very powerful action. You can send any AWJ command to your device and automate almost everything.  
	You can download the AWJ programmers guide for your device from Analog Way's website, there you find a lot of information and documentation of the AWJ protocol. To sum it up AWJ uses a path which is a little bit like a url or a file directory path to point to a parameter and then sets this parameter to a value. With this action you can set any available parameter at any path to any value. But you can use only commands supported by the AWJ protocol, e.g. everything selection related is not supported by the AWJ protocol and can only be used with the dedicated actions, not with the AWJ replace command.  
	Additionally the parameters can be taken from existing variables or user variables further enhancing the flexibility.
	There are a few special mechanisms in this module, which will greatly ease the work with AWJ.
	1. There is a "Learn" button at the action. If you push the Learn button, the path and value from your last manipulation will be automatically transfered to the input fields. Let's say your last action in WebRCS has been renaming a memory. If you push Learn, you will get the path and value which was used to do the rename. Now just change the value in Companion and run your action. Voilà, you're able to rename memories from Companion. If you have a look at the path, you'll also find that the memory number is in the path. You can just edit it and rename a different memory. Just use the Learn button to get you started and then tweak the path and value to your liking.  
  There is a caveat too: sometimes one user action in WebRCS internally sends more than one command or if one command is executed more than one thing changes (e.g. if you recall a memory many layers will change). Every change sends its status and only the last one will be available with the Learn button (you can record multiple status changes with the Action Recorder though). Also sometimes the path needed to change something is different from the path to read the value. In all of those cases the Learn button will not work and you have to use the programmers guide to get the right command.
	1. Internally the device works with image scalers and processors which are arranged in presets. Each time you hit Take the preset shown on program and on preview change. When working with AWJ often you can't address program and preview, but you have to address the hardware preset. Companion will take that burdon from you. Whenever you actually would have to enter "A" or "B" or "UP" or "DOWN" you can just use "pvw" or "pgm" in the path and the action will replace it at execution time with the correct address.
	2. Many commands just set parameters which will be reflected in the GUI but the visual output won't change. These commands need to be followed by a so called xUpdate command to tell the processors to use the new parameters. The action offers a convenient checkbox to append such a xUpdate command to your custom command. If you're in doubt whether you need it or not, just first try without xUpdate.
	3. The texinputs for path, text value and object value allow parsing variables. If you want to set e.g. the name of an input to the value of a custom variable you can use the custom variable in the text value field. If you want to set boolean or numeric values by a variable, you have to use the object value instead and make sure that you have data in the correct format.

- Set GPO

  Available at: LivePremier  
	If your GPOs are not configured to do Tally, you're able to set them with this action. Just use your Aquilon as a GPO interface :-)

- Device Power

	Available at: LivePremier, Alta 4K, Midra 4K
	Depending on your platform this action will have different options because LivePremier can handle wake on LAN and has no standby mode and Alta and Midra have standby but can't wake on LAN

## Action Recorder

You can use the Action Recorder with this module to record actions as you do some changes on the device. The Action Recorder only records custom AWJ replace command, even if you do a change where a dedicated action would be available. Additionally received global updates will not be included in the recorded custom AWJ replace command for a value change but in a separate command which holds only the global update.  
You will see that depending on what type of values you change your device sends a lot of global updates, you are advised to review your recording and see if there are any global updates and if there are some, delete all but the last one.  
Also depending on what type of values you change you will record status messages. Most of them are only sent by the device but not meant to be set by a third party application. You are advised to delete status messages as well.
If you want to record changes for e.g. positions or any other values with a range, it is better to enter the final value in WebRCS numerically. If you drag around a layer you will record every single position along your way.

## Feedbacks

- Synchronization of the selection

  Available at: LivePremier, Alta 4K, Midra 4K

- Master Memory

  Available at: LivePremier, Alta 4K, Midra 4K  
	Like on WebRCS this feedback indicates the last used master memory. Don't mistake it for a currently used master memory, due to the nature of master memories it is not possible to show if a master memory is actually active.

- Screen Memory

  Available at: LivePremier, Alta 4K, Midra 4K  
	At LivePremier this will work for all screen memories on screens and auxscreens, for Alta and Midra 4K this feedback only reflects screen memories on screens.

- Aux Memory

  Available at: Alta 4K, Midra 4K

- Source Tally
  
  Available at: LivePremier, Alta 4K, Midra 4K  
	This feedback will show you wether a source can be seen on screen. It is more enhanced than the tally indicators of WebRCS or the device because it tracks the real visibility. A tally will not light if the source is in the layer but the layer is outside of the screen or if the layer has no area or is masked totally or is completely transparent. At Alta and Midra 4K also visibility of inputs in background sets will be shown.  
	There is no calculation if a layer completely covers another layer.

- Transition active
  
  Available at: LivePremier, Alta 4K, Midra 4K

- Screen Selection
  
  Available at: LivePremier, Alta 4K, Midra 4K  
	If selection syncronization is off you will see the selection status of Companion's own selection, if selection syncronization is on you will see the selection status of the device.  
	If you want to work with the same selection on Companion and WebRCS you have to turn on selection syncronizstion on both clients.

- Screen Lock

  Available at: LivePremier, Alta 4K, Midra 4K  
	If selection syncronization is off you will see the status of Companion's own screen lock, if selection syncronization is on you will see status of the device's screen lock.  
	If you want to work with the same lock on Companion and WebRCS you have to turn on selection syncronizstion on both clients.

- Preset Selection

	Available at: LivePremier, Alta 4K, Midra 4K  
	If selection syncronization is off you will see the selected preset of Companion, if selection syncronization is on you will see the selected preset of the device.  
	If you want to work with the same preset on Companion and WebRCS you have to turn on selection syncronizstion on both clients.

- Preset Toggle

	Available at: LivePremier, Alta 4K, Midra 4K  
	Shows if Preset Toggle is turned on or off at the device.

- Layer Selection

	Available at: LivePremier, Alta 4K, Midra 4K  
	If selection syncronization is off you will see if the layer is selected at Companion, if selection syncronization is on you will see if the layer is selected on the device.  
	If you want to work with the same layer selection on Companion and WebRCS you have to turn on selection syncronizstion on both clients.

- Widget Selection

	Available at: LivePremier, Alta 4K, Midra 4K  
	If selection syncronization is off you will see if the multiviewer widget is selected at Companion, if selection syncronization is on you will see if the widget is selected on the device.  
	If you want to work with the same widget selection on Companion and WebRCS you have to turn on selection syncronizstion on both clients.

- Input Freeze

	Available at: LivePremier  

- Timer State

	Available at: LivePremier, Alta 4K, Midra 4K  
	Each feedback visualizes one timer state. Remember that you can add multiple feedbacks to one button to monitor different states on one button.

- Stream Running State

	Available at: Alta 4K, Midra 4K  


- GPI State
- GPO State

  Available at: LivePremier  

- Custom Feedback
  
	Available at: LivePremier, Alta 4K, Midra 4K  
	This Feedback is a very powerful tool, able to visualize almost every parameter not covered by the other feedbacks.  
	You have to enter an AWJ path and every time the property of that path changes the feedback will be evaluated. The path has to point to exactly one property. Wildcards are not allowed with one exeption: instead of the preset designators A and B, you can also use PVW and PGM. If you use PVW or PGM the feedback will always check a property in preview or program.  
	You can specify how the result should be interpreted and according to that have different options to generate decision if the feedback is active or not.  
	The actual value does not necessary has to be of the type you want it to be interpreted as. If you e.g. receive a text with the content "12" and interpret it as a number, it will be converted to the number 12. However if you want to interpret a text like "#12" as a number, it will not work.  
	If you want to use Regular Expression matching for text, the expression has to be entered without the slashes or modifiers.
	If you interpret the value as an object, at the moment no options are available to do further checks. The feedback will be true if something has been received at all.  
	There is a checkbox to invert the status of the feedback. That means if you use e.g. the numeric comparison > and invert the result, you have overall a <= comparison.  

	There is a learn button available to automatically fill the options. In order to automatically fill options you have to do a change in WebRCS to the property you want to monitor. Then press the learn button. The options will be filled with the last received path and value, which are most likely the ones corresponding to your change. Note: some actions in WebRCS do change many parameters, even if it sometimes looks to you as if it was only one parameter. Only the last received change will be learned in the feedback and this may not be the one you are looking for. You should always check the path if it looks like you expect. If you don't get the correct path, then you can't use the learn button and have to refer to the AWJ programmers guide available from Analog Way.

	Each time you add a custom feedback also a variable for that feedback will be generated. In that variable you can monitor the value received by that feedback.  
	So it is possible to monitor e.g. device temperature, notifications, input status, connected monitors, memory validity...  
	Despite popular demand it is not possible to monitor the times of timers. The AWJ devices simply do not expose those values.  
	If you interpret the value as boolean, the value will be inverted according to the option and the variable will hold the result either as a 1 or as a 0.  
	The variable will be automatically named after your AWJ path (without the $ or @ characters), if you want to have a mofe conveniant name, you can enter it in the variable name option.


## Variables

This module dynamically provides a lot of variables, the exact number depends on your device and programming but will usually be in the hundreds. So most of the variables are not promoted in the variables overview but you can use them on buttons anyway. Many presets are making use of variables for dynamic button text. If you want your variables and button texts relying on variables continue working, you can't rename the label of your connection once you started using presets or you have to modify all variable usages by hand.  
An example: the preset for recallin screen memory 1 containes a variable with then name of screen memory 1. If you use the preset and change the name of the memory later, the new name will be reflected on the button. The variable with the name is provided ba the connection. If you change the label of the connection the button can't get the correct variable value any more because it still listens to a variable from a connection with the old label.

In the following table often there are variables with a 1, usually the ...1 is only an example and variables for all items are available.

Variable|	Description
----------------|----------------
connectionLabel | how you labelled the Connection in Companion
masterMemory1label | the label of the Master Memory
screenMemory1label | the label of the Screen Memory
auxMemory1label | the label of the AuxMemory
layerMemory1label | the label of the Layer Memory
multiviewerMemory1label | the label of the Multiviewer Memory
INPUT_1label | the label of the input
STILL_1label | the label of the still image
SCREEN_1label | the label of the screen
AUXSCREEN_1label | the label of the aux screen
frozen_IN1	| gives a * if frozen
screenS1memoryPGM | the memory currently loaded in screen program
screenS1memoryPVW | the memory currently loaded in screen preview
screenA1memoryPGM | the memory currently loaded in aux program
screenA1memoryPVW | the memory currently loaded in aux preview
screenS1memoryLabelPGM   | the label of the memory in program
screenS1memoryLabelPVW | the label of the memory in preview
screenA1memoryLabelPGM | the label of the memory in program
screenA1memoryLabelPVW | the label of the memory in preview
screenS1timePGM | the transtion time for the screen and preset
screenS1timePVW | the transtion time for the screen and preset
screenA1timePGM | the transtion time for the aux and preset
screenA1timePVW | the transtion time for the aux and preset
selectedPreset	| PGM or PVW
timer1_status | Running or Stopped and so on
tally_S1_pgm_LIVE_1 | the tally state (0 or 1) of the source LIVE_1 in S1 program

The tally variables are not automatically generated for all possible combinations. Instead the variables are generated along with your used feedbacks. That means if you want to use a variable for source LIVE_3 on screen S2 preview, you have to add a feedback showing that state on some button. At the time you add the feedback the variable will also be added and can be used in triggers.  
Caveat: there have been reports of rare cases where feedback subscriptions are not processed correctly at Companion startup. That means if you create a feedback, the variable will show in the variables list and can be used in triggers. If you restart Companion the variable is still there and usable but it won't be shown in the variables list. To make it accessible again, you have to change a parameter in one of the feedbacks generating the variable.


## Presets

This module provides a good amount of presets but most of them are generated dynamically. E.g. if you write a screen memory, you'll find a preset to load that screen memory, but there are no presets for invalid memories.
Once you've dragged a preset to a button it will stay there and it's parameters will not change. If you for example delete a screen memory, then the preset will disappear but your button will still be there and try to load that non existing memory.  
Many presets use variables in the button text so the button will follow your setup to a degree. If you rename a memory then the new name will be reflected on the button. If you want to use a different label on your Companion button, just edit it.  
Please use the presets as a quick way to get your programming started and adjust them as you need.

All presets also have color information. In the config you can set up your preferred default colors and all presets will use your provided colors. Presets for memories automatically use the color you have chosen in WebRCS. Again, after you dragged a preset to a button it will stay static. Changes of the default colors or memory colors in WebRCS will not be reflected on programmed buttons.


## Version History

You can find the version History of this module at the [readme page](https://github.com/bitfocus/companion-module-analogway-awj#readme) of the source repository