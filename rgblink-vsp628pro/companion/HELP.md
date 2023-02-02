## RGBlink VSP 628pro

Tested with one model. Device must be controlled over a network, over UDP.

**Available commands**

- Save configuration to one of 21 banks and load from them.
- Change system mode (standard / pip / dual 2k / switcher)
- Change layer source
- Lock / unlock front panel.
- Change freeze / live mode.
- Change active layer A/B.
- Change output resolution.
- Operation on sources:
  - mirror on X and/or Y axis,
  - rotate 90° left/right
  - change parameters of the following effects:
    - brightness,
    - contrast,
    - chroma,
    - hue,
    - color temperature,
    - gamma,
    - sharpness,
    - noise reduction,
    - flip colors.

**Available feedbacks (current state) for mini**

Feedbacks are very similar to available commands:

- Last loaded/saved bank
- Current system mode
- Current layer
- Current layer source
- Is front panel locked
- Is freeze / live mode
- Output resolution
- Params of operation of sources

By default, the device is queried for its parameters.

**Tested with device with params**

- Main Board HW: V 1.2
- Control Board HW: V 1.4
- Core Board SW: V 1.94
- Control Board SW: V 2.97
- FPGA 1: V 2.05
- FPGA 2: V 3.09
