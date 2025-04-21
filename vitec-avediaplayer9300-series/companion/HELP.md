## Vitec AvediaPlayer 9300 series

Control module for the AvediaPlayer 9300 series IPTV Endpoints

The endpoint must have HTTPS Upgrade disabled under the services tab.

## Actions

- **Current Channel URI**
- **Get Channel List**
- **Mode**
- **Mute**
- **Teletext**
- **Volume**
- **Volume Up**
- **Volume Down**

## Variables

- **Current Channel URI**
- **Current Channel Name**
- **Current Channel Number**
- **Mode**
- **Volume**

## Feedbacks

- **Current Channel**
- **Mode**
- **Mute**
- **Teletext**

## Version History

### Version 1.2.9

- Reduce error logging 
- Parse variables with context object

### Version 1.2.8

- Check status before updating

### Version 1.2.7

- Support sequential actions

### Version 1.2.6

- Add message queue
- Update dependencies
- Use Node 22

### Version 1.2.5

- Update dependencies
- Update status on Authentication Failure, stop polling

### Version 1.2.4

- Quieten logging
- Convert to ESM

### Version 1.2.3

- Rotary volume control preset
- Better error logging

### Version 1.2.1

- Add volume up, volume down and mode presets
- Improve mute preset
- Companion-module-base > 1.8.0

### Version 1.2.0

- Add set mute & channel presets

### Version 1.1.0

- Add channel list action & populate Current Channel URI dropdown
- Add channel name, channel number variables.

### Version 1.0.0

- Initial release
