## PTZ Optics SuperJoy

This module allows you to control the [PTZOptics SuperJoy Controller](https://ptzoptics.com/superjoy/). It provides all the functionality available in the [SuperJoy HTTP-CGI Commands documentation](https://ptzoptics.com/wp-content/uploads/2025/03/SuperJoy-HTTP-CGI-Commands.pdf) as of January 2, 2026.

A demostration video [BitFocus Companion - PTZOptics SuperJoy Module 2.0.0](https://youtu.be/yF2KJxUafj4) is available on YouTube.

**Configuration Instructions**

- Make sure the camera is on firmware after version 2.4.5_250331
- Enter the controller's IP or hostname in the connection configuration.

**Caveats**

***Upgrading from 1.0.0***

The 1.0.0 package treated each Camera Group as a separate device. The Camera Group was set in the
configuration and only cameras for that group could be controlled. This version more closely follows
the behavior of the hardware so only one Companion Connection should be made for each SuperJoy Controller. The 1.0.0 version Configuration, Actions, and Feedbacks will be automatically upgraded for
any existing connections, but the user will need to merge them to a single instance if multiple instances of 1.0.0 were used.

***The Controller has no Group or Camera specific state***

The SuperJoy does not maintain any internal state about a Group,  Camera, or Preset which might be expected by the user. This can cause Feedbacks and Variables to have possibly unexpected results.
This is best explained by the following scenario.

1. The user selects Group 1, Camera 1, Preset 1 via Companion
1. The user changes to Group 2, Camera 2, Preset 2 via Companion
1. The user changes back to Group 1 via the Controller directly.

The state of the controller is now Group=1, Camera=2, Preset=2 and Feedbacks and Variables in Companion will reflect that state. The controller did not "remember" that when Group 1 was last selected the Camera and Preset were 1 and set them back. Companion is only informed of the camera change. To get back in sync, simply select an Companion action that sets the Group, Camera, and Preset.

***HDMI Output Status***

Users may be confused by the behavior of the HDMI Output Status behavior. When the HDMI Output button
on the controller is selected the on/off state is toggled and unaffected by further selecting a camera from the controller. The API behavior is different. It provides the ability to set the HDMI Output
by toggling, turning on, or turning off. When executed by Companion as an Action, this will immediately
change the HDMI Output Status and be reflected in any Feedbacks. However, the behavior of selecting a camera in the CGI API is that when a camera is selected, _it also turns the HDMI output on_. So, if you have disabled HDMI Output, then changes cameras via Companion, the HDMI Output will be re-enabled. If you want to have it always off, you will need to add additional Actions to each button selecting cameras to also turn off the HDMI output.
