## Philips SICP Module

This module can be used to control Philips Signage displays.
The module has been tested with Philips 86BDL3511Q,
but should be compatible with other displays supporting
[SERIAL / ETHERNET INTERFACE COMMUNICATION PROTOCOL v1.99](https://www.exertis.nl/dynamic/media/1/documents/Drivers/The%20SICP%20Commands%20Document%20V1_99%2025%20May2017.pdf)

## Config

Make sure your display is connected to your LAN and has a static IP, or you have made a DHCP reservation on your router.

To start the display through Companion, TCP should always be available on your display. In the model I use this is done by setting the "Power save mode" to mode 3 or 4.

Alternatively Wake On LAN can be used, in this case WoL should be enabled on both the display and the module config.

## Actions

Currently the following actions are supported.

- Power
  - On
  - Off
  - Toggle
- Set Input Source

## Feedback

Currently the following feedbacks are supported.

- Power
- Input Source

## Supported Devices

The module has been tested with Philips 86BDL3511Q (Q-line),
but should be compatible with other displays supporting
[SERIAL / ETHERNET INTERFACE COMMUNICATION PROTOCOL v2.03](https://community.xibo.org.uk/uploads/short-url/vwVq2nPyhJKL4kTCYpa6VYhQUa8.pdf)
According to the documentation the following models should be supported:

| model      | platform       | model        | platform    | model      | platform     |
| ---------- | -------------- | ------------ | ----------- | ---------- | ------------ |
| 10BDL3051T | Android        | BDL6520EL    | eagle 1.2   | BDL5586XL  | eagle 1.3    |
| 32BDL4050D | Dragon 1.0     | BDL6524ET/02 | eagle 1.2   | BDL8470EU  | Himalaya     |
| 43BDL4050D | Dragon 1.0     | BDL3250EL    | eagle 1.3   | BDL8470QT  | Himalaya     |
| 43BDL4051T | Dragon 1.0     | BDL4250EL    | eagle 1.3   | BDL8470QU  | Himalaya     |
| 49BDL4050D | Dragon 1.0     | BDL4252EL    | eagle 1.3   | BDL9870EU  | Himalaya     |
| 55BDL4050D | Dragon 1.0     | BDL4254ET    | eagle 1.3   | 75BDL3000U | Himalaya 1.2 |
| 55BDL4051T | Dragon 1.0     | BDL4256ET    | eagle 1.3   | 75BDL3010T | Himalaya 1.2 |
| 65BDL3051T | Dragon 1.0     | BDL4271VL    | eagle 1.3   | 75BDL3003H | Himalaya 1.2 |
| 65BDL4050D | Dragon 1.0     | BDL4650EL    | eagle 1.3   | BDL3220QL  | MTK5580      |
| 42BDL5055P | Dragon 1.5     | BDL4652EL    | eagle 1.3   | BDL4220QL  | MTK5580      |
| 42BDL5057P | Dragon 1.5     | BDL4671VL    | eagle 1.3   | BDL4235DL  | MTK5580      |
| 49BDL5055P | Dragon 1.5     | BDL4677XH    | eagle 1.3   | BDL4620QL  | MTK5580      |
| 49BDL5057P | Dragon 1.5     | BDL4678XL    | eagle 1.3   | BDL5520QL  | MTK5580      |
| 55BDL5055P | Dragon 1.5     | BDL4776XL    | eagle 1.3   | BDL3230QL  | MTK5580P2    |
| 55BDL5057P | Dragon 1.5     | BDL4777XH    | eagle 1.3   | BDL4330QL  | MTK5580P2    |
| BDL4676XL  | eagle          | BDL4777XL    | eagle 1.3   | BDL4335QL  | MTK5580P2    |
| BDL4677XL  | eagle          | BDL5551EL    | eagle 1.3   | BDL4830QL  | MTK5580P2    |
| BDL4682XL  | eagle          | BDL5554ET    | eagle 1.3   | BDL4835QL  | MTK5580P2    |
| BDL5585XL  | eagle          | BDL5556ET    | eagle 1.3   | BDL5530QL  | MTK5580P2    |
| BDL5587XL  | eagle          | BDL5571VL    | eagle 1.3   | BDL5535QL  | MTK5580P2    |
| BDL6551V   | eagle          | BDL5586XH    | eagle 1.3   | 55BDL1005X | Phoenix 1.0  |
| 55BDL1007X | Phoenix 1.0    | 65BDL3000Q   | Phoenix 1.0 | BDL4290VL  | Phoenix 2.0  |
| BDL4990VL  | Phoenix 2.0    | 65BDL3010T   | Phoenix 1.0 | BDL4970EL  | Phoenix 2.0  |
| BDL5570EL  | Phoenix 2.0    | BDL3260EL    | Phoenix 1.0 |
| BDL5590VL  | Phoenix 2.0    | BDL4260EL    | Phoenix 1.0 |
| 55BDL9018L | LED            | BDL4280VL    | Phoenix 1.0 |
| 55BDL9025L | LED            | BDL4660EL    | Phoenix 1.0 |
| 49BDL3050Q | QL3            | BDL4680VL    | Phoenix 1.0 |
| 55BDL3050Q | QL3            | BDL4765EL    | Phoenix 1.0 |
| 65BDL3050Q | QL3            | BDL4780VH    | Phoenix 1.0 |
| 75BDL3050Q | QL3            | BDL4988XC    | Phoenix 1.0 |
| 86BDL3050Q | QL3            | BDL4988XL    | Phoenix 1.0 |
| XxBDL4051D | Dragon 1.6     | BDL5560EL    | Phoenix 1.0 |
| 49BDL4150D | Himalaya 2.0   | BDL5580VL    | Phoenix 1.0 |
| 55BDL4150D | Himalaya 2.0   | BDL5588XC    | Phoenix 1.0 |
| 65BDL4150D | Himalaya 2.0   | BDL5588XH    | Phoenix 1.0 |
| 75BDL4150D | Himalaya 2.0   | BDL5588XL    | Phoenix 1.0 |
| 86BDL4150D | Himalaya 2.0   | BDL6520QL    | Phoenix 1.0 |
| 98BDL4150D | Himalaya 2.0   | BDL6526QT    | Phoenix 1.0 |
| xxBDL3010Q | Challenger 2.1 | BDL4270EL    | Phoenix 2.0 |
