# ProPresenter API

This "**ProPresenter API**" module allows you to remotely control ProPresenter via it's <a href="https://openapi.propresenter.com" target="_blank">public API</a>  
  
Please note that this "**ProPresenter API**" module does not work with older versions of ProPresenter that do not have the ProPresenter API. For older versions of ProPresenter, you have to continue to use the old ProPresenter module which uses an *unsupported reverse-engineered* remote protocol.  
  
This means there are now two Companion modules that work with ProPresenter:  
1. The old module called "**ProPresenter**" 
2. This new module called "**ProPresenter API**"
  
___
### Notes for existing users of the old ProPresenter module: ###  
While it would have been ideal to simply update the old module to use both the old reverse-engineered remote protocol as well as the vendor supported API, it was decided to make a completely new seperate module that ONLY uses the officially supported API. This does mean that all of your actions from the old module in your current setup will not be upgraded or imported into the new module and they remain part of the old module.  
While this is not a good upgrade experience - the main reason for this decision is to make ongoing support much more manageable, **ensuring users receive better and more reliable support going forward.**  
  
**New "API" Module:**
- **Name:** ProPresenter API
- **Support Level:** ✅ Actively Supported
- **Works With ProPresenter Versions:** 7.9 to Current
- **Connection Method:** ✅ Vendor Supported API

**Old Module:**
- **Name:** ProPresenter
- **Support Level:** Minimal
- **Works With ProPresenter Versions:** ✅ 6.0 to Current
- **Connection Method:** ❗️Unsupported Reversed-Engineered Protocol
  
  
**😱 Old Module Users - DON'T PANIC!! 😱**  
It's perfectly fine to run BOTH the old and new modules side-by-side, connected to the SAME ProPresenter!  
There is no pressure to re-create your whole setup with actions from the new module.  

Take your time to explore the new actions and features that the new module offers.  See if there is any new functionality that you want to add to your setup and over time, when you are ready, slowly add the new actions to your old buttons and disable the old actions while testing.  Once you have proven the new actions work for you, you can remove the old actions.  
  
Also, please note that the old module does have a few actions that are not (yet) supported in the official ProPresenter API and if you use those actions, you will want to keep using the old module alongside the new module.
  
**Remember - You don't have to choose!**  
Please dopn't forget that you can run both modules at same time - connected to same instance of ProPresenter.  Keep running the old module version as long as you like or need to.  Explore the cool new features in the new module version.  
___  
  
### 🚧 BETA! - WORK IN PROGESSS 🚧  
The module is still a work in progress - so you will find it's missing some things that you might expect. But it is complete "enough" to be tested by "early adopters" and it has some nice new features/actions. Over time, more features will be added. Please also note that this documentation is also a work in progress.  

### 🐛 HELP! - I HAVE FOUND A BUG! 🐛  
If you have any issues, please check the <a href="https://github.com/bitfocus/companion-module-renewedvision-propresenter-api/issues" target="_blank">known issues list</a> - and add your issue if it's not already there.

## How to Configure the Connection: ##  
This Companion module connects via a network connection to ProPresenter.  
You can run Companion on the same computer as ProPresenter or any other computer on the same network.  

To setup this module you will need the to do the following as a minimum:  
  
✅ **Enable Network** must be enabled in ProPresenter Network Settings.  
✅ Enter the computer **IP Address (or Hostname)** and the ProPresenter network **Port**  
  
Both the IP Address and ProPresenter port are shown in the network settings of ProPresenter.
  
There are more optional and advanced settings that you may come back and configure if you decide you want to:  
* **Custom Time format:** hh:mm:ss or mm:ss or ss (any # of digits, etc) is used to specify how you would like the time of timers to be formatted for the variables timer_ID_custom.  
* **MIDI Setup** See more details about that at the end of this help file!  
* **Extra Debug:** Keep this off - unless you are troubleshooting/submitting an issue where the extra info can help devs to figure out your issue!
  
## Getting Started:
### Button Presets:
The fastest and easiest way to define buttons is to use presets.  
This new module has quite a good number nice presets to get you started. (With more on the way in future updates) 
  
These button presets are ready-made buttons with text, actions, feedback and some with nice icons. They are ready for you to simply drag and drop onto your StreamDeck pages.  
 
Even if you prefer manually building button actions and feedbacks yourself, the presets have some nice starting points (and icons) you might like to start with on your buttons.  

❗️IMPORTANT NOTE ABOUT PRESETS❗️  
Please note that all the presets are built to suit FULL BUTTON display with the "TopBar" turned off in Companion settings.  
If you like to show the topbar on your buttons, you will have to re-format the text and images on the preset buttons.  

  
### Actions:
For those that want to build their own buttons (and triggers) - you will want to explore and get familiar with all the available actions that you can add to your buttons and triggers.
  
❗️ACTIVE vs FOCUSED vs SPECIFIED❗️  
Before you get started building buttons with actions, it's important to become familiar the concept of **ACTIVE vs FOCUSED vs SPECIFIED** in ProPresenter.  This is described below:  
  
>When you trigger a slide in a presentation, that presentation becomes the "ACTIVE Presentation".  

The slide has an Orange (or Green) border to show it's triggered/live.  
Did you know that you can click on another presentation to view it while the slide that you previously triggered  **stays live**?... This is not a common thing you might do - but you *can* go "wandering off" and look at other presentations while your triggered slide in the "ACTIVE Presentation" **stays live**.  With that in mind, let's introduce the concept of the FOCUSED presentation:  
  
>Any Presentation that you are *looking at* is the "FOCUSED Presentation".  
  
You can focus (click to look at) any presentation you want without making it ACTIVE.  It becomes the ACTIVE Presentation if/when you click a slide in that presentation. Also, note that if you clear the slide/all, the ACTIVE presentation at the time of clearing, stays the ACTIVE presentation.  
  
This same concept of ACTIVE vs FOCUSED is also true for all presentation playlists, media playlists and audio playlists.  

This is an important concept to understand when choosing to add an action to add to a button (or trigger). Start with this question in mind: "Which one of these do I want to take an action on - the ACTIVE thing or the FOCUSED thing"  

The actions are named to be clear about which they work with.  
eg "Active Presentation Operation" vs "Focused Presentation Operation".  
  
To really see the difference you might experiment and explore the difference between triggering the "next" slide in the Active presentation vs the "next" slide in the Focused presentation. Try these both while one presentation is active and a different presentation is in focus!
  
Finally, in addition to performing actions on the the thing that is active or focused, you can also perform actions on a specific thing - by giving some form of identifier (See **Specific Identifiers** below).

**Compound Actions**
Once you figure out what you want to target and choose an Action that targets what you want, you will notice that within most actions there are multiple commands/operations you can select from.
Explore the operations with each action to get familiar with what is possible.  

**Variables in Actions** are supported throughout the module in many actions inputs - It might not be obvious at first - but when you see a DropDown to pick something, check the last item on the list - there is usually a manual option you can pick which will allow you to enter text or variables (See below for more on variabbles)  

**Specific Identifiers**
Many things in ProPresenter can be indentified by using ANY one of three identifiers: UUID or Name or Index.  
A UUID is a special globally unique identifier that ProPresenter has assigned to many objects. Once you figure out what somethings UUID is it can be used indentify that object "forever".  For now, the easy way is to look through the module variables - there are several variables that show the UUID of things - eg the active presentation.  
Be careful with UUIDs - TODO: explain how UUID of playlist items and UUID of presentations are not the same and how UUID looks works.  Short version: Names and indexes are often best choice to specify something (see below).
In addition to these strange UUID's - you can also use **Names** as identifiers. Using names is probably the most easy option and fine for most uses!  
Finally, you can also use Index to indentify things (esp slides). Please note that Index counting starts at 0.  The first item is index 0!  

**More Info On Actions**
* Note that setting a timer will change it's name if you do not perform an operation...and will set it's "allows Overrun"
* Use ? on Action inputs for useful tips/instructions.  
* Explore the button presets as great starting points/inspiration for the kinds of things you can do.  
* The Trigger Next/Previous operation, targeting Presentation focuses the active slide - It scrolls to ensure the active slide is visible.  It might be the only way to focus the active slide - as all other trigger operations on Active or Focuses presenation don't seem to do this.  They trigger slides without ensuring the triggered slide is visible.


### Variables:
Can be used on button labels - can be used in many action inputs.
Some variables are dynamically created so that there are variables for each thing - eg timers, stage display layouts.  
When looking at the Variable ID's you will notice that the uuid is sometimes included -  which makes for a bit of a confusing/long ID, but this long ID is globally unique and allows these variables to always work even if the names have duplicates.  
Note that, the Variable description has a nice friendly name.  
One special variable is Time Since Last Status Update - for debugging purposes. (You can even Trigger the module to automatically restart when the "Time Since Last Status Update" gets over some appropiate limit - Although hopefully you never need to!)  
  
### Feedbacks:
Feedbacks are typically used to update a button to show the state of something - Take a look at some of the presets to get an idea of how some feedbacks can be used.

### Triggers:
TODO:  A couple of useful examples of triggers with ProPresenter..
Calendar - trigger a specific presentation at a time.

### Other Notes:
Note that a few API functions were introduced in later versions of ProPresenter so there might be one or two actions that don't work if you are running an older version of ProPresenter.  
  
Find My Mouse - handy for setups with multiple screens using native outputs.  
  
Arrangements - Do you use arrrangements? - If you want to do some actions that rely on knowing about presentation arrangements, you will have to wait for a future API update by RV. API support for working with arranged presentation is conspicuously missing from the current API.  There are no endpoints that include any arrangement info. Consequently there is no reliable way to get total slide count of a presentation (seems odd doesn't it)  
  
Messages: Triggering supports text tokens only (Showing a dynamic number of text tokens for each select message, hurt my brain a bit - I kinda dread adding timers to the mix.  For now, timers can be configured and started seperately)  
  
If you use  to "Specific Presentation: Operation"/"Tigger Slide By It's Index" to trigger a specific slide in a specific presentation that is not the currently active presentation in a playlist...  
...you might expect a subsequent call to "Active Presentation: Operation"/"Focus Active Presenation" to change focus to it within that playlist...  
.. but it does not, instead, it will focus the presenation you specified but in the library it lives in.  
You can however, trigger the **first** slide in *any* specific presentation in a playlist using "Specific Playlist: Operation"/"Trigger Playlist Item By It's Index" and then once it's the active presentation you can then trigger specific slides within it with "Specific Playlist: Operation"/"Trigger Slide By It's Index"
  
Variables are not "reset" when disconnected or connection is lost - the last knwon values just stay!  
  
Many dynamic variables use UUID in ID instead of name - Names can contain invalid characters for variable names. Also, ProPresenter allows duplicates names for items and Companion variable names must be unique.  This has the drawback of not being very readable when reading expressions tha tcontain these variables.  The nice thing about uuid is that is never changes - so you can rename objects as often as you like in ProPresenter and the _uuid_ style variables that refer to them will continue to work.  
  
The Set operation for a timer allows you to rename it - but ONLY IF you choose "None" for the optional operation.  
When using a Timer set action to update a timer, I have seen that doing an operation (start/reset) too soon after you have updated it seems to revert the changes made by timer set action - wait a little while or use the option to set AND perform operation.  
  
A momentary flash of warning symbol will appear on all buttons with ProPresenter actions when a request fails - check debug log for details. (prob invalid input in an action for a button or trigger)
  
Looks are identified by name or index.... UUID of live look does not match any UUID of the list of configured looks. So we can't use UUID for identifying a look to trigger.  TODO: Does this need any more explanation.  
  
  
## 🎹 Simple MIDI Button Pusher:  
There is an optional feature added to this module which enables remote pushing of Companion buttons via MIDI.  
If you enable it, you can send a **Note-On** message to this module through a shared MIDI-Port and cause a button press.  
This feature uses a very simple mapping of Note-On MIDI messages to buttons in Companion:

Midi Channel = Button Page.  
The numerical value of the Note-On = Row of button.  
Note-On Intensity = Column of button.  

In the module config, enable the MIDI Button Pushing and then choose an existing MIDI port in the "Midi Port" dropdown.
If you like, pick the last option in the Midi-Port Name dropdown called "Custom Virtual Port" to create a local (non-networked) custom virtual port with any name you choose.  

You need to enter the port number that your Companion is configured to listen to (if you have changed it from the default of 8000) as there is no way for this module to "know" what port your Companion is listening on.  (This Port is configured in the main window of Companion).  
   
Tip: You can setup as many MIDI ports are you like in MacOS or Windows (Windows needs 3rd party software). Make sure that the MIDI port you setup for this is just for Companion and ProPresenter.  Also, make sure it is only used as a *destination* and NOT a *source* in ProPresenter MIDI settings - otherwise you will probably feedback MIDI notes that you intend to send out to this module, straight back into ProPresenter, and they will trigger unintended actions within ProPresenter itself.
