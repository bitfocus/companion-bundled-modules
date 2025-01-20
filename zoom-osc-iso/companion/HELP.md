# ZoomOSC/ISO Module Documentation

## Introduction

This module gives you deep control of Zoom through controllers like the StreamDeck. Using ZoomOSC and ZoomISO, it provides a seamless way to manage participants, with their names displayed on the keys. It’s a zero-code, drag-and-drop solution with advanced options for custom workflows.

---

## ZoomOSC/ISO Requirements

- Licensed versions recommended.
- Minimum versions: ZoomOSC 4.2, ZoomISO 2.0.6 (<a href="https://liminalet.com" target="_blank">More info</a>).

## ZoomOSC/ISO Configuration

You will need to configure these settings in ZoomOSC/ZoomISO UI

1. **Transmission IP:** IP of Companion computer (or `127.0.0.1` if on the same computer).
1. **Transmission Port:** Available port for Companion.
1. **Receiving Port:** Port for ZoomOSC/ISO to receive commands.
1. **OSC Output Rate:** Set to "Fastest Possible."
1. **Gallery Tracking Mode:** Set to "Zoom ID."

## Companion Module Configuration

There are a number of configuration options for the module that allow you to configure how to communicate with ZoomISO/ZoomOSC, how many internal groups to track, Participant Multi-State feedback, Social Stream Ninja integration, and advanced performance tweaks.

1. **ZoomISO/ZoomOSC Transmission IP (e.g. Target Host):** Match ZoomISO/ZoomOSC Transmission IP.
1. **ZoomISO/ZoomOSC Receiving Port:** Match ZoomISO/ZoomOSC Recieving Port.
1. **ZoomISO/ZoomOSC Transmission Port:** Match ZoomISO/ZoomOSC Transmission Port
1. **Default Selection:** Select one participant at a time or Select multiple participants simultaneously.
1. **Number of selectable groups:**

   One of the most powerful features of this module is the ability to place participants into groups. Just like participants, groups are referenceable and selectable. You can index into groups with variables to display their members. Buttons with these properties are automatically available in the Presets area under _Manage Selections and Groups_, where new buttons are generated based on the number of groups specified during setup.

   - **Default Groups**

     There are two default groups. These groups are automatically managed by the module, so you cannot add or remove members manually or change the group properties:

     1. _Hosts:_ Includes the host and all co-host(s) of the meeting.
     1. _Spotlights:_ Includes all attendees currently spotlighted.

   - **Group Management**

     - _Add Participants to Groups:_ The primary way to manage groups is by selecting one or more participants and adding or removing them from a group.
     - _Save and Load Groups:_
       - Load participants into a group by their Zoom Name from a file.
       - Save the current group configuration to a file (note: When loading a group from a file, only participants currently in the meeting will be added to the group)

   - **Group Use Cases**

     - _Speakers:_ Create a subset of users that will be coming up to stage and are not co-host
     - _Panelists:_ Organize participants into different panel conversations.

   Once users are assigned to groups, you can easily select a group (e.g., "Panelists") and apply actions like _Add Spotlight_ to the entire group.

1. **Sync iso configuration time in sections (only for ZoomISO):** How often to update the ZoomISO audioLevels, outputRouting, audioRouting, and engineState. The default is 1 second.

1. _Participant Multi-State Feedback_

   This module supports various _dynamic feedback options_ to enhance your workflow and button functionality. One key feature is _multi-state feedback_ for participants, providing real-time status updates for their camera, mic, and hand raise. Each status has an icon with both "on" and "off" states for easy visualization.

   1. **Disable (Not recommended unless you don’t need feedback indicators.)**

      - Turns off multi-state feedback.
      - Reverts to single feedback where you must manually add individual feedback for the camera, mic, and hand raise.

   1. **Bottom (On and Off for Mic/Camera, Only On for Hand Raise)**

      - Always shows mic and camera status (on/off).
      - Hand raise icon appears only when the hand is raised.

   1. **Bottom (Only Active States)**

      - Displays icons only when:
      - Mic is unmuted.
      - Camera is on.
      - Hand is raised.

   1. **Bottom (On and Off Active States)**
      - Always displays icons:
      - Bright for active states (e.g., camera on).
      - Dim for inactive states (e.g., mic muted).

   These configurations provide flexibility to tailor feedback based on your needs. The default presets use multi-state feedback to ensure a seamless experience, but advanced users can adjust settings as required.

1. **Send Zoom Chat to Social Stream Ninja**

   One of the configuration options, is to send chat messages to Social Stream Ninja. In order for this to work, you need to provide your social stream ninja session id in the module configuration.

   Once the integration is turned on, you will need to update the urls you are using for your Social Stream Ninja browser source within OBS or other streaming software.

   - **Install Social Stream Ninja Configuration**

     You can install Social Stream Ninja at [https://socialstream.ninja/landing#manually-install-extension](https://socialstream.ninja/landing#manually-install-extension). We suggest manually installing the extension as that is the most update to date version.

   - **Social Stream Ninja Configuration**

     You need to configuration Social Stream Ninja so that it will allow you to make API calls to it and to get your Session Id

     1. Enable API Control
        - Open Social Stream Ninja
        - Go to Global settings and tools > Mechanics
        - Enable Enable remote API control of extension
     1. Get Your Session ID:
        - Navigate to Global settings and tools > Session Options
        - Copy your Session ID
        - Alternatively, find it in your URL after ?session=

   - **Social Stream Ninja Dock**

     Social Stream Ninja includes a web page to see all of the message using the url below (replace XXXXXXXX with your social stream id)

     - `https://socialstream.ninja/dock.html?session=XXXXXXXXX&server&server2&sync&label=main&limit=300`

     If using OBS, you can make this url a custom browser dock.

   - **Lower 3rd**

     Social Stream Ninja has a built-in lower 3rd that you can reference by using

     `https://socialstream.ninja/index.html?session=XXXXXXXXX&aligntop&server&server2`

     If you are using OBS, you can create a browser source on a scene and use url above (replace XXXXXXXX with your social stream id) and set the following properties

     - Width: 1200
     - Height: 300
     - Shutdown source when not visible

1. **Advanced - Optional Performance Tweaks**

   _IMPORTANT NOTE:_ The advanced optional performance tweaks is for power users that would like to tweak the module performance.

   Depending on your usage of ZoomOSC and ZoomISO, there may be things going on behind the scenes that you may not be using and can disable to try to get even better performance from this module.

   - **Enable Variable for Each User (variables that are the ZoomId for each participant)**

     The module tracks a variable for each user based on their ZoomId but the ZoomId changes every time they enter the meeting, so within the module we do not use these variables for anything but for legacy purposes, we have not removed them.

     It is suggested to turn this setting off.

   - **Enable Variable for Participants (e.g. Participant001 to Participant999)**

     This impacts the participant presets, participant buttons, and participant variables. For many shows, these buttons are not used as it is the list of all participants in the order that they joined and for large meetings, it is typically quicker to find a person using the Zoom participant list and manually taking action on them.

     Most people use the Gallery buttons over the participant buttons as it is way easier to find people in the Gallery since you can sort the gallery by first name.

     If you want to keep previous behavior of keeping these variables updated, set to true keep the behavior of previous versions.

   - **Sync Action/Presets/Feedbacks**

     As participants, groups, and zISO are updated behind the scenes, it is:

     1. Keeping the option dropdown for the actions updated with the participant names, group names, zISO output/ audio names, zISO audio levels
     1. Keeping the presets updated for the number of participant names, group names, zISO output / audio names
     1. Keeping the feedbacks option dropdowns updated with the participant and group names.

     Keeping all these in sync is important and needed when setting up your button layout but when you are running the show you are typically not updating the design of your buttons, so you do not need to pull in new presets, adding / removing groups, or picking a different options from the option dropdowns.

     Set to true keep the behavior of previous versions.

     If you do need to sync the values manually, there is a new action called "Update Actions/Feedbacks/Presets with current Zoom Data".

---

## Basic Workflow

Select user(s), then apply action(s).

## ZoomISO Control

- Route participants to video/audio outputs.
- Configure outputs and engine settings directly from the module.

## Selections

- **Dynamic Participant Display:** Names automatically appear for quick selection.
- **Selection Types:**
  - **From Participants:** Static list of participants.
  - **From Gallery:** Dynamic list matching Zoom’s Gallery View.
- **Single vs. Multi-Selection Mode:**
  - **Single:** Select one participant at a time.
  - **Multi:** Select multiple participants simultaneously.

## More Workflows

See more workflows at <a href="https://github.com/bitfocus/companion-module-zoom-osc-iso/blob/main/README.md" target="_blank">Module Readme</a>

---

## Support and Acknowledgments

This is a community-driven project utilizing the open APIs of ZoomOSC/ISO. While Zoom (and formerly Liminal) have designed its behavior, they hold no liability for this module or its upkeep. Ultimately, it is managed by and the responsibility of the open-source Companion community, Bitfocus, and its users.

- **Module Support:** <a href="https://github.com/Bitfocus/companion-module-zoom-osc-iso/issues" target="_blank">Known Issues</a>
- **ZoomOSC/ISO Support:** `info@liminalet.com`

Special thanks to contributors Jeffrey Davidsz, Andy Carluccio, Jonathan Kokotajlo, and the Companion community for their efforts in creating and improving this module.
