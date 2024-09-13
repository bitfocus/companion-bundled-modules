## Brompton Technology Tessera Control

This module controls Tessera processors over HTTP.

### Usage
To use this module with a processor, please enable IP Control from the Control tile in the processor software.
Once Companion has launched, in the module configuration enter the IP of the LED processor you wish to monitor and control.

Warning: Different processor versions support different API endpoints. Ensure the actions you are using are compatible with the software version of your processor.
A full list of the supported API endpoints for each processor software version can be found under the respective web-pages:
https://www.bromptontech.com/support/downloads/.

### Available commands
#### Input
- Input Port Number Select
- Input Port Type Select

#### Processing
- Scaler Toggle/Enable/Disable
- Colour Replace Toggle/Enable/Disable
- 14-Way Colour Correction Toggle/Enable/Disable
- Curves Toggle/Enable/Disable
- 3D LUT Toggle/Enable/Disable
- 3D LUT Strength Increase
- 3D LUT Strength Decrease
- 3D LUT Strength Select

#### Override
- Blackout Toggle/Enable/Disable
- Freeze Toggle/Enable/Disable
- Test Pattern Toggle/Enable/Disable
- Test Pattern Format Select
- Test Pattern Type Select
- Frame Store Capture
- Frame Store Select

#### Colour & Output
- Output Brightness Select
- Output Brightness Set To Common Maximum
- Output Brightness Increase
- Output Brightness Decrease
- Overdrive Toggle/Enable/Disable
- Output Colour Temperature Select
- Output Colour Temperature Increase
- Output Colour Temperature Decrease
- Highlight Out-of-gamut Pixels Toggle/Enable/Disable
- Highlight Out-of-gamut Pixels Toggle/Enable/Disable (v3.4)
- Highlight Overbright Pixels Toggle/Enable/Disable
- OSCA Module Correction Toggle/Enable/Disable
- OSCA Seam Correction Toggle/Enable/Disable
- Dark Magic Toggle/Enable/Disable
- Extended Bit Depth Toggle/Enable/Disable
- PureTone Toggle/Enable/Disable

#### Network
- Request Failover

#### Camera
- Phase Offset Mode Select
- Phase Offset Angle Select
- Phase Offset Fraction Select
- Phase Offset Increase
- Phase Offset Decrease
- ShutterSync Mode Select
- ShutterSync Angle Select
- ShutterSync Speed Select
- ShutterSync Time Select
- ShutterSync Prioritise Refresh Rate Toggle/Enable/Disable
- Hidden Markers Toggle/Enable/Disable
- Frame Remapping Toggle/Enable/Disable

#### Presets
- Preset Select
- Preset Next
- Preset Previous

#### Groups
- Group Brightness Select
- Group Brightness Increase
- Group Brightness Decrease

#### System
- Shut down
- Reboot

### Available variables
#### Input
- inputPortNumber
- inputPortType

#### Processing
- scaler
- colourReplace
- colourCorrect
- curves
- lut
- lutStrength

#### Override
- blackout
- freeze
- testPattern
- testPatternFormat
- testPatternType

#### Colour & Output
- outputBrightness
- outputBrightnessPercentage
- overdrive
- outputColourTemperature
- highlightOutOfGamut
- highlightOutOfGamut3.4
- highlightOverbright
- oscaModuleCorrection
- oscaSeamCorrection
- darkMagic
- extendedBitDepth
- pureTone

#### Camera
- phaseOffsetMode
- phaseOffsetAngle
- phaseOffsetSpeed
- phaseOffsetFraction
- shutterSyncMode
- shutterSynceAngle
- shutterSyncSpeed
- shutterSyncTime
- shutterSyncPrioritiseRefreshRate
- hiddenMarkers
- frameRemapping

#### Presets
- activePresetNumber
- activePresetName

#### Groups
- groupBrightness1, groupBrightness2, etc. (These will only be visible to the companion app after a successful connection to the processor.)