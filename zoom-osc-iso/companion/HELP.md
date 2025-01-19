# ZoomOSC/ISO Module Documentation

## Introduction

This module gives you deep control of Zoom through controllers like the StreamDeck. Using ZoomOSC and ZoomISO, it provides a seamless way to manage participants, with their names displayed on the keys. It’s a zero-code, drag-and-drop solution with advanced options for custom workflows.

---

## ZoomOSC/ISO Requirements

- Licensed versions recommended.
- Minimum versions: ZoomOSC 4.2, ZoomISO 2.0.6 (<a href="https://liminalet.com" target="_blank">More info</a>).

## ZoomOSC/ISO Configuration

1. **Transmission IP:** IP of Companion computer (or `127.0.0.1` if on the same computer).
2. **Transmission Port:** Available port for Companion.
3. **Receiving Port:** Port for ZoomOSC/ISO to receive commands.
4. **OSC Output Rate:** Set to "Fastest Possible."
5. **Gallery Tracking Mode:** Set to "Zoom ID."

## Companion Module Configuration

1. **Target Host:** IP of ZoomOSC/ISO computer.
2. **Sending/Receiving Ports:** Match ZoomOSC/ISO settings.
3. **Default Selection:** Choose single or multi-participant selection.

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

## Groups

One of the most powerful features of this module is the ability to place participants into groups. Just like participants, groups are referenceable and selectable. You can index into groups with variables to display their members. Buttons with these properties are automatically available in the Presets area under **Manage Selections and Groups**, where new buttons are generated based on the number of groups specified during setup.

### Default Groups

There are two default groups. These groups are automatically managed by the module, so you cannot add or remove members manually or change the group properties:

1. **Hosts:** Includes the host and all co-host(s) of the meeting.
2. **Spotlights:** Includes all attendees currently spotlighted.

### Group Management

- **Add Participants to Groups:** The primary way to manage groups is by selecting one or more participants and adding or removing them from a group.
- **Save and Load Groups:**
  - Load participants into a group by their Zoom Name from a file.
  - Save the current group configuration to a file (note: When loading a group from a file, only participants currently in the meeting will be added to the group)

### Group Use Cases

Groups can have a variety of purposes, such as:

- **Speakers:** Create a subset of users that will be coming up to stage and are not co-host
- **Panelists:** Organize participants into different panel conversations.

Once users are assigned to groups, you can easily select a group (e.g., "Panelists") and apply actions like **Add Spotlight** to the entire group.

---

## Variables and Feedback

This module supports various **dynamic feedback options** to enhance your workflow and button functionality. One key feature is **multi-state feedback** for participants, providing real-time status updates for their camera, mic, and hand raise. Each status has an icon with both "on" and "off" states for easy visualization.

### Multi-State Feedback Configuration Options

1. **Disable** (_Not recommended unless you don’t need feedback indicators._)

   - Turns off multi-state feedback.
   - Reverts to single feedback where you must manually add individual feedback for the camera, mic, and hand raise.

2. **Bottom (On and Off for Mic/Camera, Only On for Hand Raise)**

   - Always shows mic and camera status (on/off).
   - Hand raise icon appears only when the hand is raised.

3. **Bottom (Only Active States)**

   - Displays icons only when:
     - Mic is unmuted.
     - Camera is on.
     - Hand is raised.

4. **Bottom (On and Off Active States)**
   - Always displays icons:
     - Bright for active states (e.g., camera on).
     - Dim for inactive states (e.g., mic muted).

These configurations provide flexibility to tailor feedback based on your needs. The default presets use multi-state feedback to ensure a seamless experience, but advanced users can adjust settings as required.

---

## Social Stream Ninja Integration

One of the configuration options, is to send chat messages to Social Stream Ninja. In order for this to work, you need to provide your social stream ninja session id in the module configuration.

Once the integration is turned on, you will need to update the urls you are using for your Social Stream Ninja browser source within OBS or other streaming software.

### Social Stream Ninja Configuration

You need to configuration Social Stream Ninja so that it will allow you to make API calls to it and to get your Session Id

1. Enable API Control
   - Open Social Stream Ninja
   - Go to Global settings and tools > Mechanics
   - Enable Enable remote API control of extension
1. Get Your Session ID:
   - Navigate to Global settings and tools > Session Options
   - Copy your Session ID
   - Alternatively, find it in your URL after ?session=

### Social Stream Ninja Dock

Social Stream Ninja includes a web page to see all of the message using the url below (replace XXXXXXXX with your social stream id)

- `https://socialstream.ninja/dock.html?session=XXXXXXXXX&server&server2&sync&label=main&limit=300`

If using OBS, you can make this url a custom browser dock.

### Lower 3rd

Social Stream Ninja has a built-in lower 3rd that you can reference by using

`https://socialstream.ninja/index.html?session=XXXXXXXXX&aligntop&server&server2`

If you are using OBS, you can create a browser source on a scene and use url above (replace XXXXXXXX with your social stream id) and set the following properties

- Width: 1200
- Height: 300
- Shutdown source when not visible

---

## Support and Acknowledgments

This is a community-driven project utilizing the open APIs of ZoomOSC/ISO. While Zoom (and formerly Liminal) have designed its behavior, they hold no liability for this module or its upkeep. Ultimately, it is managed by and the responsibility of the open-source Companion community, Bitfocus, and its users.

### Support

- **Module:** <a href="https://github.com/Bitfocus/companion-module-zoom-osc-iso/issues" target="_blank">Known Issues</a>
- **ZoomOSC/ISO:** `info@liminalet.com`

Special thanks to contributors like Jeffrey Davidsz, Andy Carluccio, and the Companion community for their efforts in creating and improving this module.
