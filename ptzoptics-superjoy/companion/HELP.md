## PTZ Optics SuperJoy

This module uses the http CGI interface on the SuperJoy controller to enable control over camera selection and preset control.  Feedback is available based on some assumptions.  The CGI interface only has a status query for the currently selected camera, and there is no method to subscribe to state changes.  In order to work around this, the module will store the most recently selected preset on each camera, and then update this state whenever it is changed by the module, or when that camera is selected.  Because of this interface limitation, the feedback values are not accurate if the selected camera or preset is changed on the controller directly, until that camera is selected again and the state is refreshed.  If you select a camera first, the selected preset value will update and the preset feedback will update to the correct values if they have been changed.  Likewise, using the direct preset function will force a given camera to that preset, so the state is assured there again.

**Available functions**

* Select Camera
* Direct preset - selects a specific preset on a specific camera
* Selected camera feedback (caches last known state)
* Selected preset per-camera (caches last known state)
* HDMI on / off and relative presets not yet implemented

**Configuration Instructions**

* Enter the controller's IP or hostname.
* Enter the camera group number in the group field.  Currently, only one group per instance is supported.
* Choose from camera + preset button combinations, camera select only presets, or build your own.
* The number of camera and number of preset fields will determine the number of preset buttons generated.