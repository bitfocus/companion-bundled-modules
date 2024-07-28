# Analog Way AWJ

**Most important:**  
**[Beware of selection synchronization!](#sync)**  
**There are many presets but many more actions and feedbacks, presets are a good starting point though.**

TOC:  
[Configuration](#configuration)  
[Actions](#actions)  
[Feedbacks](#feedbacks)  
[Variables](#variables)  
[Presets](#presets)  

This module works with all Analog Way devices that support the AWJ protocol. As of now, these are the devices of the LivePremier, Alta 4K and Midra 4K series. Although all these devices share the same protocol, they have quite different capabilities and workflows. Companion tries to hide this as much as possible from you and make this module as generic as possible. Basically, all the available features are retrieved from the device and only available features are presented to you in dropdowns and so on. E.g. you will only get selections for the inputs built into your device or you get only presets for memories that hold data. That also means you have to be connected to a device to get any selections at all. If you want to preprogram your show, you need to use one of the Analog Way simulators which you can download for free from [https://analogway.com](https://analogway.com) If you have programmed a show with one device and exchange it to a different device later, all your programmed values will stay in the actions and feedbacks but of course, they won't work if your new device doesn't support that features, e.g. if you have programmed Aux 6 with LivePremier this action won't work on a Midra 4K device. Or if you have programmed an input plug selection at Midra the action won't work on LivePremier. Most of the actions and feedbacks will work on all devices the same, e.g. transitioning screen 2 will do this on any device if you have activated screen 2.

Not every option of every action or feedback is explained in this manual, most of them are self-explanatory. Here you find only general hints and explanations of options that have differences from Analog Way's WebRCS.  
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

Another general advice: the connection protocol between Companion and the AWJ device is fast, but not insanely fast. If you change a parameter at the device it will need a few milliseconds until that parameter is stored remote, the change is executed, the acknowledge is returned and that new value is stored in Companion again. That has no relevance for parameters you just set, but there are some actions which first read parameters and then act on them, e.g. if you use a toggle action the current state is first read, then toggled, then that command is send and then it is complete when the new value acknowledge has been received. If you trigger a new toggle while the first action hasn't been finished, it will still be based on the original state because the toggled one hasn't been received yet.  
This behavior will most likely lead to unexpected results when incrementing or decrementing values at short intervals e.g. by using a rotary encoder. You can avoid this problem by either slowing down your input frequency or by not using values from the device, but custom variables instead. Then you would increment or decrement the custom variable and send the value to the device. Unfortunately you will loose the two way communication by doing so and if the parameter changes outside of Companion the variable will not stay in sync.

## <a name="configuration"></a>Configuration

### Device Network Address

Here you enter the address of the device like you would enter it in the browser if you want to connect to WebRCS.  
You can use an IP address, an IPv6 address or a hostname. For a hostname you need working DNS resolution of course.  
You also can use http:// and https:// but self-signed certificates are considered insecure, so https will only work with a valid certificate (adding a custom CA certificate to your system won't circumvent this).  
If you need to use custom ports, you can add it to the URL with a colon. This module uses the same connection parameters as WebRCS, in WebRCS you will see Companion as another WebRCS client.  
If you are using authentication on your device, you have to add the credentials to the URL like http://username:password@192.168.2.140 The username is always 'admin' and the password is whatever you have chosen. Please note, that authentication adds security on a very low level. Your password will be stored and transmitted in clear text. Everyone who has access to the module configuration can see the password, so you shouldn't use a shared password and you should password-protect access to the Companion GUI as well.

### Device MAC Address

The MAC Address of the device as six double-digit hexadecimal values with a delimiter like : or . or - (e.g. `1b:3f:ee:43:2a:b9`).  
You only have to fill in this value yourself if you want to turn on a freshly connected device by wake on lan. If you connect with an already turned-on device, the MAC address will be filled automatically, so you can always turn on the last connected device.

### Turn sync selection on after connection established

If you check this box, the selection synchronization will be automatically turned on after the connection is established. See the action ['Sync selection'](#sync) to learn what that means.

### Show also disabled inputs in dropdowns  

If you disable an input, it won't be included in dropdowns where inputs are shown. If you check this box also disabled inputs are shown and can be used.

### Colors

Here you can define your preferred default colors, which are used in feedbacks and presets. Remember that these are only default colors, if you drag a preset to a button, that color will be stored at the button and won't change later.


## <a name="actions"></a>Actions

### Recall Screen Memory  
Available at: LivePremier, Alta 4K, Midra 4K  
You can choose one or more screens to load a screen memory to. At LivePremier memories can be loaded to regular screens and auxscreens, on Alta and Midra screen memories can be loaded only on regular screens.  
If you choose selected screens or selected preset this action will work on all screens which are currently selected, i.e. exactly the same behaviour as if you would press a load screen memory button on WebRCS.  
Additionally, you can choose to select the chosen screens, if you tick that box all screens included in the action will be selected and all other screens will be deselected. If you use this action multiple times in one button, the last selection wins. Then you should prefer a dedicated action for selection. 

### Recall Aux Memory

Available at: Alta 4K, Midra 4K  
You can choose one or more auxscreens to load an aux memory to.  
If you choose selected screens or selected preset this action will work on all auxscreens which are currently selected, i.e. exactly the same behaviour as if you would press a load aux memory button on WebRCS.  
Additionally, you can choose to select the chosen auxscreens, if you tick that box all auxscreens included in the action will be selected and all other screens will be deselected. If you use this action multiple times in one button, the last selection wins. Then you should prefer a dedicated action for selection.

### Recall Master Memory

Available at: LivePremier, Alta 4K, Midra 4K  
A master memory will always be loaded to all screens and auxscreens it is programmed for unless one of the screens is locked.  
Additionally you can choose to select the screens contained in the memory, if you tick that box the according screens will be selected and all other screens will be deselected.	

### Recall Layer Memory

Available at: LivePremier  

### Recall Multiviewer Memory

Available at: LivePremier, Alta 4K, Midra 4K

### Take Screen

Available at: LivePremier, Alta 4K, Midra 4K  
You can choose which screens/auxscreens to take. If you choose 'Selected Screens', the action does exactly what the Take button on WebRCS does. Additionally you have the option to take all screens or your own selection of screens. You can also combine 'Selected Screens' with your own selection, and then all currently selected screens and the ones specified will transition. The screen selection status itself is not affected by the action.  
If you are working with a T-Bar at the same time and the T-Bar is not at an end position, the action will do the transition to the opposite side from where you started, e.g. if your T-Bar had been down when you started the transition, the action will finish the transition towards up.

### Cut Screen

Available at: LivePremier, Alta 4K, Midra 4K  
Same as Take Screen but without effects. The transition time is always zero.

### Set T-Bar Position

Available at: LivePremier, Alta 4K, Midra 4K  
You can set the T-Bar position. Beware that T-Bar position is not synchronized live between clients, you will not see the position change in WebRCS.   
You can use any numbers in floating point or integer format to enter the position and maximum level. E.g. the following inputs all lead to a position exactly halfway: 50 / 100, 50% / 100, 0.5 / 1, 127 / 255, 13.4 / 26.8   
The input in text format has been chosen to make the action compatible with variables, most notably the internal:t-bar variable. You can use Companion with an X-Keys keyboard with T-Bar, the internal:t-bar variable will hold the value from the T-Bar (0-255). Just program a trigger to run the action whenever the variable changes.

### Set Transition Time

Available at: LivePremier, Alta 4K, Midra 4K  
You can set the time used for a take transition. At LivePremier there is the possibility to set individual times for program and preview giving you the opportunity of different fade-in and fade-out times at one transition. At Alta and Midra both presets use the same time so the action doesn't give you individual settings when used with Alta or Midra.

### Select Layer Source

Available at: LivePremier, Alta 4K, Midra 4K  
At LivePremier you could also use layer memories for this, but sometimes it is more convenient to just switch a source without the need of a memory and at Alta and Midra this action is especially useful because you don't have layer memories there.  
Although this action is available on all platforms, due to the very different layer types an existing setup may not transfer very well to a different system.  
If you choose the option to set the source for selected layers, you'll get a separate dropdown for all types of layer sources. At Livepremier these are regular layer sources and background sets for the native layer, at Alta and Midra there are additionally aux-background-layer sources and foreground sources. At the time of programming the button Companion can't know what type of layer will be selected at execution time, so when the action is executed for every selected layer the chosen input will be set. There is also a don't change option which will not execute a source change if a layer of that type is selected.  
Imagine you have image one set in background set 1 and as foreground image 1. If you now choose background set 1 as the native layer source and foreground image 1 as the foreground layer source and image 1 as the layer aux-background-layer source, you can switch image 1 to all layers with the same button and Companion always chooses the correct type.

### Set Input Plug

Available at: Alta 4K, Midra 4K  

### Set Input Keying

Available at: LivePremier, Alta 4K, Midra 4K  
Remember that keying is not a functionality done in the layer but in the input. If you change keying it will immediately impact all occurences of that input in any layer on preview and program.

### Set Input Freeze

Available at: LivePremier , Alta 4K, Midra 4K 
Remember that input freeze is not a functionality done in the layer but in the input. If you change freeze it will immediately impact all occurences of that input in any layer on preview and program.

### Set Layer Freeze

Available at: Alta 4K, Midra 4K  
Beware, there is no differentiation between program and preview.  

### Set Screen Freeze

Available at: Alta 4K, Midra 4K 

### Set Position and Size

Available at: LivePremier, Alta 4K, Midra 4K (only for live layers on Alta/Midra)  
Positioning and sizing on steroids. You can either select a specific layer to work on use the selected layers or do a combination of selection and specification. E.g. you can use all selected layers but only for one specified screen or you can use a specified layer for the selected screens.  
Layers of locked screens / presets will not be touched.  
For each layer to touch, you can choose which parameters to act on: vertical and horizontal position, width and height. If you e.g. include the X Position but not the Y Position, the layer will only be touched in the horizontal position and the vertical position will stay the same.
Unlike WebRCS this action does not always refer to the layer position from the center of the layer but offers detailed settings for the anchor point in X and Y directions inside or outside of the layer.

All input fields of this action support Companion variables can even be used with an expression like syntax. The functions of the Companion expressions can't be used but all operators like +, -, *, /, (), %, ternary ? : and so on are working. That means you can use something like "$(internal:custom_var1) + 0.5 * $(internal:custom_var2)".  
There are several special keywords available to be placed in an expression. If you use a keyword, it will be replaced with the actual values at runtime for each layer individually. The keywords are:  
- sw - screen width
- sh - screen height
- sa - screen aspect ratio
- lx - position of left edge of the layer within screen
- ly - position of the top edge of the layer within screen
- lw - layer width
- lh - layer height
- la - current aspect ratio of the layer
- bx - position of left edge of the bounding box of all selected layers within current screen
- by - position of the top edge of the bounding box of all selected layers within current screen
- bw - width of the bounding box of all selected layers within current screen
- bh - height of the bounding box of all selected layers within current screen
- ba - aspect ratio of the bounding box of all selected layers within current screen
- iw - width of the source currently assigned to the layer, 0 if empty
- ih - height of the source currently assigned to the layer, 0 if empty
- ia - aspect ratio of the source currently assigned to the layer, none if empty
- l1x - position of left edge of the first layer of the selection within screen
- l1y - position of the top edge of the first layer of the selection within screen
- l1w - first layer of the selection width
- l1h - first layer of the selection height
- l1a - current aspect ratio of the first layer of the selection
- screen - name of the screen, e.g. S2
- layer - name of the layer, e.g. 3 for layer three
- index - the index of the layer being adjusted. Will be 0 for one layer but if you have a selection of multiple layers it will show you which one is processed right now.
- amount - the count of processible layers in the selection, e.g. a background layer could be selected but as it can't be positioned it will not be included

The general way how this action works is:
1. Do movement if needed. The anchor point position is moved to the X and Y coordinates. For the anchor point, you will usually want the center of the layer, this is the same behavior as WebRCS and is given as default entries. The anchor points have to be entered in pixels as well and so the horizontal center is to be calculated by the layer x position + half of the layer width. The expression is `lx + 0.5 * lw`. For the vertical anchor, it is `ly + 0.5 * lh`.
You can think of the anchor point as the origin of a coordinate system. When you use the positioning part of this action, you define the origin with the anchor point and then you offset the coordinate system. If you set your anchor point to be at the top left corner of the layer, it will move the top left corner to the destination. If you set the anchor point to the center of the layer, the center will be positioned at the X / Y values.
2. Do resizing if needed. If you do resizing, the anchor position stays at the same spot and everything else will be resized.
Again you can think of a transformation of a coordinate system with its origin at the (new) anchor point position. IF your anchor point was at the top left corner before movement, it will be at the top left corner after movement and now during the resize that top left corner will stay at ist position and the other corners may change. If your anchor position is outside of the layer area, the layer will also appear to move from resize only. Once again, the anchor stays at its spot and the whole coordinate system is scaled.  
This size change is easier to understand for relative sizing and you can do that by using factors. But usually you will enter a value and this will be the target size of the layer.

All results positioning expressions will be rounded to full integers before being sent to the device as AWJ does not support positioning by floating point numbers. That is also a little problem when resizing a layer because the wanted aspect ratio can not always be reached exactly with integer numbers. If you want to retrieve the current aspect ratio, you have two options:  
1. calculate it yourself by using lw / lh. You'll get the de facto aspect ratio of the layer.
2. use the keywords la, sa, ba or ia. These values are calculated by an algorithm that compares the the actual aspect ratio to several common aspect ratios and if the actual aspect ratio is very close to a common aspect ratio but a tiny bit off because of a rounding error, it will return the common aspect ratio. For example, if your layer is 1000px wide and should be 16/9, the height would need to be 562.5px. You can only enter heights of 563px or 562px, which would both give different aspect ratios from 16/9. The algorithm detects that your ar is close enough to 16/9 and that there is no way to have exactly 16/9, so it assumes you wanted the ar to be exactly 16/9 and gives that as a result. The algorithm is smart enough to only detect the nearest possible pixels, e.g. 999/563 will not be replaced by 16/9.  
la is thus the preferred keyword to use for aspect ratio retaining resizing of layers. There will be no rounding error introduced as long as you are not working with tiny layer sizes.

If you choose to touch x or y position, the anchor point will be positioned at the according values.

With the keywords you can do many fancy things like right aligning a layer to the screen with X position of 'sw' and Anchor X of 'lx + lw'. Or you can center the layer in the screen with X position of '0.5 * sw' and Anchor X of 'lx + 0.5 * lw'. With the anchor you define the original position and with the x and y the position to go to.  
IF you want to scale many layers and want them to keep their relative positions, you have to use the keywords for the bounding box of the layers, e.g. you want them to be scaled up by 5% from the middle of the layers use 'bx + 0.5 * bw' for the Anchor X. For the width you can use 'lw * 1.05'

Even more, you can preceed your input field with "inc" for increase or "dec" for decrease. If you use one of these keywords the value will not be set in absolute fashion but it will be incremented. If you e.g. use inc 10 for X Position and 0.5 for Anchor X, the layer will move 10 pixels to the right with every execution of the action. If you use inc 0.05 * sw for X Position and 0.5 for Anchor X, the layer will move 5% of the screen to the right with every execution of the action.

The same syntax of the positioning inputs can also be used for width and height inputs. If you use both, width and height, the layer aspect ratio will be changed to whatever the result is. If you use only one, width or height, you get the option how to treat aspect ratio of the layer.  
By default only the selected parameter will be changed and the other one will be left untouched, resulting in a change of aspect ratio. Write "keep" or "la" in the input field and the other parameter will be adjusted to keep the current aspect ratio. Write any number or a fraction like 16/9 to set the aspect ratio to that value. If you e.g. just want to fix the a/r without changing the current width, you can use lw for the width and 4/3 for the a/r. Additionally with the Anchor fields you can set the direction where the layer should be extended.

Last, but not least the action also offers the learn button. Push it to get the position, size and aspect ratio of the selected or specified layer. After learning X Position, Y Position, Width and Height are selected for a complete status of the layer. So aspect ratio is not visible but the field will be updated with a numerical representation of the aspect ratio. If you disable Width or Height you can see the field and use also a/r.  
Because you can use math in the input fields this functionality is also quite useful for mathematical one-time adjustments, e.g. learn the status of a layer, add "*1.2" to Width and Height and Test fire the action to increase layer size by 20%. The learned position will reflect to the entered anchor, make sure you have entered your desired anchor position before hitting learn. Actually it doesn't matter at all which anchor position you use here if your only goal is to reproduce the position. But if you want to edit the values later to resize the layer, you need to use the same anchor because the position reflects to it. Simply put if you e.g. enter `lx + lw` for anchor x position, the learned x Position will be the right edge of the layer. 


### Copy Program to Preview

Available at: LivePremier, Alta 4K, Midra 4K  

### Set Preset Toggle

Available at: LivePremier, Alta 4K, Midra 4K 

### Multiviewer Widget Selection

Available at: LivePremier, Alta 4K, Midra 4K  
This action works best in conjunction with the 'Select Source in Multiviewer Widget' action. First select a widget, then choose a source

### Select Source in Multiviewer Widget

Available at: LivePremier, Alta 4K, Midra 4K  
Sometimes you want to just switch the source of one widget or don't want to write many memories, there you go.

### Screen Selection

Available at: LivePremier, Alta 4K, Midra 4K  
Straight to the interesting part: what are the so-called intelligent selection options?  
There is an intelligent press option and an intelligent release option. As the name suggests both options have to be used in conjunction on one button with the same screen but one in the press actions and the other in the release actions. E.g. put selection of screen S1 with intelligent press option on the press actions of one button and selection of screen S1 with intelligent release option on the release actions of the same button. Now do the same for other screens on other buttons.  
What you get, is the following behavior: If you press just one of the screen selection buttons, this screen will be selected and all other screens will be deselected, this is the same as the 'select exclusive' option. But if you press one selection button and hold it down, you can toggle other screens while still holding down the first button. The functionality mimics the selection process of the old Encore controllers (sending some props to Folsom :-* ).  
Keep in mind that you have to be careful with setting up the actions and options, one mistake and the logic may not work. Also remember that this logic relies not only on button presses but also on the releases, although you can use it also with an emulator, web buttons or an API, chances are higher that a release event will be missed. If one release is not triggered the logic will lock up. If you made a mistake during programming or a trigger had been lost and the logic doesn't react as it should, you can either press and release all selection buttons one by one or use the reset option to reset it. Reset won't make any selection changes. This logic doesn't work when run by triggers, when you run an intelligent press action from triggers it will do an exclusive selection.  
You are advised to not mix buttons using the intelligent selection method and other selection methods in your programming. You can totally mix them but you will likely be confused and end up not knowing what is going on.

If you want to make a custom selection (a.k.a. group), just use this action multiple times on a button. Select the first screen exclusive and then add any additional screen with select.

### Lock Screen

Available at: LivePremier, Alta 4K, Midra 4K  
If you choose all screens as the target and toggle as the action while some screens are locked and some are not, the action behaves exactly like the general lock button in WebRCS. A partial lock will be toggled to a full lock.

### Select Preset

Available at: LivePremier, Alta 4K, Midra 4K  
Don't mistake this for a memory, here you can select either Program or Preview.

### Select Layer

Available at: LivePremier, Alta 4K, Midra 4K  
There are different strategies how to select layers. Either you can use the currently selected screens and then select one or more layers on the selected screens or you can specify the screens where to select the layer or layers. If you choose one of the select options, then all layers which are not chosen for selection are getting deselected. If you choose one of the toggle options, the specified layer or layers are toggled. Companion can't know the number of layers available at the selected screen when you set up the action, so for the options with selected screens, you get the maximum possible layer options. There is no harm if you include a layer that is not available later.

### <a name="sync"></a>Sync selection

Available at: LivePremier, Alta 4K, Midra 4K  
With this action, you can turn selection synchronization on or off. It is the same functionality as the toggle 'Selection Synced to Server' in WebRCS. You most likely want to have this turned on most of the time and you can automatically activate synchronization after connecting to a device in the configuration.  
**Selection synchronization is a very relevant concept for your daily work with this module!**  
What is it about: In WebRCS most of the manipulations are a multi-step process. First you select something and then you apply a manipulation to the selection. E.g. first you select a layer and then adjust the source of that layer or first you select a screen and then press Take to transition that screen. WebRCS keeps track of many selections like screen selection, layer selection, widget selection...  
In Companion you have the choice of whether you want to use direct commands like "Transition S1" or you can use the same procedure as WebRCS where you select first and then do something with the selection. That means Companion has to keep track of the selection as well.  
All WebRCS Clients, and Companion is in fact a WebRCS client, have their own selection. Client 1 can e.g. have screen S1 selected and client 2 can have screen S2 selected. If client one hits Take, S1 will transition and if client 2 hits take, S2 will transition, but none of the clients knows which screen is selected in the other client. Your Analog Way device itself also can keep track of all the selections. If you turn selection synchronization on, actually the client now will use the selection of the device instead of its local selection. If you change the selection it will be changed on the device. If other clients also syncronize to the device they will immediately see the changes.  
If you are using only one WebRCS client, selection synchronization doesn't matter, you are absolutely good to go with the local selection of the client. But if you want to integrate Companion into your workflow, usually you want to turn synchronization on on Companion and on your WebRCS client.  
Having said that, there are also situations where you don't want selection synchronization. As far as it concerns Companion then you can either use direct commands or you can permanently or temporarily disable synchronization. You even could turn sync off, select something locally and turn sync on again with one button.  
For your convenience Companion can automatically turn on its synchronization after a connection is established. WebRCS clients although will always start without synchronization and you have to turn it on manually in the client.  

### Stream Control

Available at: Alta 4K, Midra 4K  

### Stream Audio Mute

Available at: Alta 4K, Midra 4K  

### Route audio (block)

Available at: LivePremier, Alta 4K, Midra 4K  
Although this action is available on all platforms it works quite differently on LivePremier on the one hand and Alta and Midra on the other hand.  
LivePremier only includes a static audio routing between any input and output and Dante. With this action, you can change the routes.  
Alta and Midra include an audio layer that works similarly to a video layer and can be used to change audio output and store the assignment in memories. In WebRCS you can assign single inputs to the audio layer or one of ten custom blocks. At Midra and Alta this action will set the channels of the custom blocks, using the blocks itself still has to be done in WebRCS. 
This action routes audio channels in one continuous block. You define the first input, the first output and the number of channels.  
There is one speciality: if you choose 'No Source' as the first channel, no source will be applied to all outputs of the block.  
When you are on Alta or Midra 4K and you use this action multiple times to change routes within one custom block, you should use a tiny delay between the actions because internally block channels are not routed individually but replaced as one bunch. You want to make sure that the first action is complete and feedback has been received before you start the next route. You are safe to route as many channels as you like in one action though or many actions without delays affecting different custom blocks.

### Route audio (channels)

Available at: LivePremier, Alta 4K, Midra 4K  
Same as with Route audio block but here you don't have to use continuous audio channels. You define the first output channel and an individual selection of input channels to route there.
Remember, you don't have to route all channels in one action, you can use this action multiple times. But timing concerns for Alta and Midra 4K are the same as with the Route audio (block) action.

### Timer Setup
### Timer Adjust Time
### Timer Transport

Available at: LivePremier, Alta 4K, Midra 4K  
The timer control is split into three different actions: Timer Setup, Timer Adjust Time and Timer Transport.  
With Timer Setup you can adjust the general parameters of the timer like the mode or colors. With Timer Adjust Time you set the time and with Timer Transport you can start and stop the timer. 
For your convenience there are two options that toggle the running state: start/pause and start/stop.
Note, that Timer Transport doesn't work on Midra Simulator but it works on the real device.
Times for the Adjust Time command can be entered in the action or any variable with a matching content can be used.

### Set Testpattern

Available at: LivePremier, Alta 4K, Midra 4K  
There are options to individually turn on or off and select testpatterns, as well as turn off all testpatterns.

### Send custom AWJ replace command

Available at: LivePremier, Alta 4K, Midra 4K  
This is a very powerful action. You can send any AWJ command to your device and automate almost everything.  
You can download the AWJ programmers guide for your device from Analog Way's website, where you find a lot of information and documentation of the AWJ protocol. To sum it up AWJ uses a path that is a little bit like an URL or a file directory path to point to a parameter and then sets this parameter to a value. With this action, you can set any available parameter at any path to any value. But you can use only commands supported by the AWJ protocol, e.g. everything selection-related is not supported by the AWJ protocol and can only be used with the dedicated actions, not with the AWJ replace command.  
Additionally, the parameters can be taken from existing variables or user variables further enhancing the flexibility.
There are a few special mechanisms in this module, which will greatly ease the work with AWJ.
1. There is a "Learn" button at the action. If you push the Learn button, the path and value from your last manipulation will be automatically transferred to the input fields. Let's say your last action in WebRCS has been renaming a memory. If you push Learn, you will get the path and value that was used to do the rename. Now just change the value in Companion and run your action. Voilà, you're able to rename memories from Companion. If you have a look at the path, you'll also find that the memory number is in the path. You can just edit it and rename a different memory. Just use the Learn button to get you started and then tweak the path and value to your liking.  
  There is a caveat too: sometimes one user action in WebRCS internally sends more than one command or if one command is executed more than one thing changes (e.g. if you recall a memory many layers will change). Every change sends its status and only the last one will be available with the Learn button (you can record multiple status changes with the Action Recorder though). Also sometimes the path needed to change something is different from the path to read the value. In all of those cases, the Learn button will not work and you have to use the programmer's guide to get the right command.
1. Internally the device works with image scalers and processors which are arranged in presets. Each time you hit Take the preset shown on program and on preview change. When working with AWJ often you can't address program and preview, but you have to address the hardware preset. Companion will take that burden from you. Whenever you actually would have to enter "A" or "B" or "UP" or "DOWN" you can just use "pvw" or "pgm" in the path and the action will replace it at execution time with the correct address.
2. Many commands just set parameters that will be reflected in the GUI but the visual output won't change. These commands need to be followed by a so-called xUpdate command to tell the processors to use the new parameters. The action offers a convenient checkbox to append such an xUpdate command to your custom command. If you're in doubt whether you need it or not, just first try without xUpdate.
3. The text inputs for path, text value and object value allow parsing variables. If you want to set e.g. the name of an input to the value of a custom variable you can use the custom variable in the text value field. If you want to set boolean or numeric values by a variable, you have to use the object value instead and make sure that you have data in the correct format.  

### Send custom AWJ get command

Available at: LivePremier, Alta 4K, Midra 4K  
This is the get equivalent to the "Send custom AWJ replace command" action. You can send any AWJ get command to your device, retrieve the value and store it to a custom variable.
Variable parsing for the path is possible and the Learn button for the path acts exactly like at the custom AWJ replace command. Please refer to the documentation there.  
The value will be stored in a custom variable.  
The type of the retrieved value can optionally be stored in another custom variable.
If no value can be found at the path the returned value and the type will both be "undefined".
If the type is "boolean" the value will read either 1 or 0.  
If the type is an object, it will be stringified. This gives you the same format as you need to use in the custom AWJ replace command.

### Set GPO

Available at: LivePremier  
If your GPOs are not configured to do Tally, you're able to set them with this action. Just use your Aquilon as a GPO interface :-)

### Device Power

Available at: LivePremier, Alta 4K, Midra 4K
Depending on your platform this action will have different options because LivePremier can handle wake on LAN and has no standby mode and Alta and Midra have standby but can't wake on LAN.

## Action Recorder

You can use the Action Recorder with this module to record actions as you make some changes on the device. The Action Recorder only records custom AWJ replace commands, even if you do a change where a dedicated action would be available. Additionally, received global updates will not be included in the recorded custom AWJ replace command for a value change but in a separate command that holds only the global update.  
You will see that depending on what type of values you change your device sends a lot of global updates, you are advised to review your recording and see if there are any global updates and if there are some, delete all but the last one.  
Also depending on what type of values you change you will record status messages. Most of them are only sent by the device but not meant to be set by a third-party application. You are advised to delete status messages as well.
If you want to record changes for e.g. positions or any other values with a range, it is better to enter the final value in WebRCS numerically. If you drag around a layer you will record every single position along your way.

## <a name="feedbacks"></a>Feedbacks

### Synchronization of the selection

Available at: LivePremier, Alta 4K, Midra 4K

### Master Memory

Available at: LivePremier, Alta 4K, Midra 4K  
Like on WebRCS this feedback indicates the last used master memory. Don't mistake it for a currently used master memory, due to the nature of master memories it is not possible to show if a master memory is actually active.

### Screen Memory

Available at: LivePremier, Alta 4K, Midra 4K  
At LivePremier this will work for all screen memories on screens and auxscreens, for Alta and Midra 4K this feedback only reflects screen memories on screens.

### Aux Memory

Available at: Alta 4K, Midra 4K

### Source Tally

Available at: LivePremier, Alta 4K, Midra 4K  
This feedback will show you whether a source can be seen on screen. It is more enhanced than the tally indicators of WebRCS or the device because it tracks the real visibility. A tally will not light if the source is in the layer but the layer is outside of the screen or if the layer has no area or is masked totally or is completely transparent. At Alta and Midra 4K also visibility of inputs in background sets will also be shown.  
There is no calculation if a layer completely covers another layer as layer content can also be transparent itself.

### Transition active

Available at: LivePremier, Alta 4K, Midra 4K

### Screen Selection

Available at: LivePremier, Alta 4K, Midra 4K  
If selection syncronization is off you will see the selection status of Companion's own selection, if selection syncronization is on you will see the selection status of the device.  
If you want to work with the same selection on Companion and WebRCS you have to turn on selection syncronizstion on both clients.

### Screen Lock

Available at: LivePremier, Alta 4K, Midra 4K  
If selection syncronization is off you will see the status of Companion's own screen lock, if selection syncronization is on you will see status of the device's screen lock.  
If you want to work with the same lock on Companion and WebRCS you have to turn on selection syncronizstion on both clients.

### Preset Selection

Available at: LivePremier, Alta 4K, Midra 4K  
If selection syncronization is off you will see the selected preset of Companion, if selection syncronization is on you will see the selected preset of the device.  
If you want to work with the same preset on Companion and WebRCS you have to turn on selection syncronizstion on both clients.

### Preset Toggle

Available at: LivePremier, Alta 4K, Midra 4K  
Shows if Preset Toggle is turned on or off at the device.

### Layer Selection

Available at: LivePremier, Alta 4K, Midra 4K  
If selection syncronization is off you will see if the layer is selected at Companion, if selection syncronization is on you will see if the layer is selected on the device.  
If you want to work with the same layer selection on Companion and WebRCS you have to turn on selection syncronizstion on both clients.

### Widget Selection

Available at: LivePremier, Alta 4K, Midra 4K  
If selection syncronization is off you will see if the multiviewer widget is selected at Companion, if selection syncronization is on you will see if the widget is selected on the device.  
If you want to work with the same widget selection on Companion and WebRCS you have to turn on selection syncronizstion on both clients.

### Input Freeze

Available at: LivePremier, Alta 4K, Midra 4K  

### Layer Freeze

Available at: Alta 4K, Midra 4K  

### Screen Freeze

Available at: Alta 4K, Midra 4K  

### Timer State

Available at: LivePremier, Alta 4K, Midra 4K  
Each feedback visualizes one timer state. Remember that you can add multiple feedbacks to one button to monitor different states on one button.

### Stream Running State

Available at: Alta 4K, Midra 4K  


### GPI State
### GPO State

Available at: LivePremier  

### Custom Feedback

Available at: LivePremier, Alta 4K, Midra 4K  
This Feedback is a very powerful tool, able to visualize almost every parameter not covered by the other feedbacks.  
You have to enter an AWJ path and every time the property of that path changes the feedback will be evaluated. The path has to point to exactly one property. Wildcards are not allowed with one exception: instead of the preset designators A and B, you can also use PVW and PGM. If you use PVW or PGM the feedback will always check a property in preview or program.  
You can specify how the result should be interpreted and according to that have different options to generate a decision if the feedback is active or not.  
The actual value does not necessarily have to be of the type you want it to be interpreted as. If you e.g. receive a text with the content "12" and interpret it as a number, it will be converted to the number 12. However, if you want to interpret a text like "#12" as a number, it will not work.  
If you want to use Regular Expression matching for text, the expression has to be entered without the slashes or modifiers.
If you interpret the value as an object, at the moment no options are available to do further checks. The feedback will be true if something has been received at all.  
There is a checkbox to invert the status of the feedback. That means if you use e.g. the numeric comparison > and invert the result, you have an overall <= comparison.  

There is a learn button available to automatically fill the options. In order to automatically fill options you have to make a change in WebRCS to the property you want to monitor. Then press the learn button. The options will be filled with the last received path and value, which are most likely the ones corresponding to your change. Note: some actions in WebRCS do change many parameters, even if it sometimes looks to you as if it was only one parameter. Only the last received change will be learned in the feedback and this may not be the one you are looking for. You should always check the path if it looks like you expect. If you don't get the correct path, then you can't use the learn button and have to refer to the AWJ programmers guide available from Analog Way.

Each time you add a custom feedback also a variable for that feedback will be generated. In that variable, you can monitor the value received by that feedback.  
So it is possible to monitor e.g. device temperature, notifications, input status, connected monitors, memory validity...  
Despite popular demand, it is not possible to monitor the times of timers. The AWJ devices simply do not expose those values.  
If you interpret the value as boolean, the value will be inverted according to the option and the variable will hold the result either as a 1 or as a 0.  
The variable will be automatically named after your AWJ path (without the $ or @ characters), if you want to have a mofe conveniant name, you can enter it in the variable name option.


## <a name="variables"></a>Variables

This module dynamically provides a lot of variables, the exact number depends on your device and programming but will usually be in the hundreds. So most of the variables are not promoted in the variables overview but you can use them on buttons anyway. Many presets are making use of variables for dynamic button text. If you want your variables and button texts relying on variables to continue working, you can't rename the label of your connection once you start using presets or you have to modify all variable usages by hand.  
An example: the preset for recalling screen memory 1 contains a variable with the name of screen memory 1. If you use the preset and change the name of the memory later, the new name will be reflected on the button. The variable with the name is provided by the connection. If you change the label of the connection the button can't get the correct variable value any more because it still listens to a variable from a connection with the old label.

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
frozen_IN1	| gives a * if input 1 is frozen
frozen_S1 | gives a * if screen 1 is frozen. Only available at Alta 4K and Midra 4K
frozen_S1_L1 | gives a * if layer 1 of screen 1 is frozen. Only available at Alta 4K and Midra 4K
frozen_S1_NATIVE | gives a * if background layer of screen 1 is frozen. Only available at Alta 4K and Midra 4K
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
----


The tally variables are not automatically generated for all possible combinations. Instead, the variables are generated along with your used feedbacks. That means if you want to use a variable for source LIVE_3 on screen S2 preview, you have to add a feedback showing that state on some button. At the time you add the feedback the variable will also be added and can be used in triggers.  
Caveat: there have been reports of rare cases where feedback subscriptions are not processed correctly at Companion startup. That means if you create a feedback, the variable will show in the variables list and can be used in triggers. If you restart Companion the variable is still there and usable but it won't be shown in the variables list. To make it accessible again, you have to change a parameter in one of the feedbacks generating the variable.


## <a name="presets"></a>Presets

This module provides a good amount of presets but most of them are generated dynamically. E.g. if you write a screen memory, you'll find a preset to load that screen memory, but there are no presets for invalid memories.
Once you've dragged a preset to a button it will stay there and its parameters will not change. If you for example delete a screen memory, then the preset will disappear but your button will still be there and try to load that non-existent memory.  
Many presets use variables in the button text so the button will follow your setup to a degree. If you rename a memory then the new name will be reflected on the button. If you want to use a different label on your Companion button, just edit it.  
Please use the presets as a quick way to get your programming started and adjust them as you need.

All presets also have color information. In the config you can set up your preferred default colors and all presets will use your provided colors. Presets for memories automatically use the color you have chosen in WebRCS. Again, after you dragged a preset to a button it will stay static. Changes in the default colors or memory colors in WebRCS will not be reflected on programmed buttons.


## Version History

You can find the version History of this module at the [readme page](https://github.com/bitfocus/companion-module-analogway-awj#readme) of the source repository