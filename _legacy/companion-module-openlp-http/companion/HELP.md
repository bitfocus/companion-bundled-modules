# OpenLP

This module lets you interact with [OpenLP](https://openlp.org/), an open source worship presentation software.

![streamdeck-sample.png](docs/streamdeck-sample.png)<br>

### OpenLP Configuration

- Allow Remote module in OpenLP, then set listener IP address to 0.0.0.0 in the configuration. Use ethernet if possible rather than wireless.

### Configuration in Companion

- Select your OpenLP version 2.4 or 3.0
- Type in the IP address (127.0.0.1 if running locally) and port previously set in OpenLP application
- Set username and password if required

### Available Actions

- Set display mode (blank/show/desktop/theme)
- Toggle display mode (show/blank)
- Go to specific slide number (by number)
- Go to specific service item (by number)
- Progress into next/previous slide/service item

### Available Variables

- Current display mode
- Current slide number, current slide tag, slide count in current service
- Current selected service item
- Service item title si_1, si_2, ... up to 20
- Slide tag and name slide_1, slide_tag_1, slide_2, ... up to 20

### Available Feedbacks

- Current display mode
- Service item selected (by number)
- Service item on specific slide (by number)
