# Ontime Companion Module

This module gives control over Ontime leveraging its [WebSockets API](https://docs.getontime.no/api/protocols/websockets/)

## Requirements
- Ontime v4.0.0 or greater

## Connecting to Ontime

To connect companion to Ontime you will need to provide the module with an address to Ontime's server. \
This can be a IP address in your local network, localhost (if you are running everything in the same machine) or a URL for Ontime Cloud.

Ontime provides an interface to generate these links:
1. Navigate to `Editor` -> `Settings` -> `Sharing and reporting` -> `Share link`
2. Select `Companion` as `Ontime view`
3. If your stage is behind a password, activate the `Authenticate` toggle
4. Click the `Create share link` button which adds the address to your clipboard

5. Back to Companion, you can now insert the copied address in the `Ontime server address` field

## Links

Download ontime or try our cloud service from the website [www.getontime.no](https://www.getontime.no/) \
View full release notes for the module on [GitHub](https://github.com/bitfocus/companion-module-getontime-ontime/releases) \
Read the docs at [http://docs.getontime.no](https://docs.getontime.no/) \
Follow Ontime's development on [GitHub](https://github.com/cpvalente/ontime) \
Join the [discord community](https://discord.com/invite/eje3CSUEXm)

### New for module version 5.2.0
- Better message feedback
- Variables for flag, group and rundown offsets
- Variables as input to change action on custom fields and title
- A playback toggle action