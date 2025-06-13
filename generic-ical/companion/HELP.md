# Companion Module: iCal Scheduler

This module integrates iCal calendar feeds with Bitfocus Companion, allowing you to trigger actions based on calendar events.

## Configuration

1. **iCal Feed URL**: Enter the URL of your iCal feed (e.g., from Google Calendar, Outlook, etc.)
2. **Refresh Interval**: How often to check for calendar updates (1-1440 minutes)

## Features

### Variables
The following variables are available when events are active:

Current Event:
- `$(ical-scheduler:event_name)` - Event name (shows "Nothing Scheduled" when no event is active)
- `$(ical-scheduler:event_start_date)` - Event start date (YYYY-MM-DD)
- `$(ical-scheduler:event_start_time)` - Event start time (HH:MM)
- `$(ical-scheduler:event_end_date)` - Event end date (YYYY-MM-DD)
- `$(ical-scheduler:event_end_time)` - Event end time (HH:MM)

Next Event:
- `$(ical-scheduler:next_event_name)` - Next event name
- `$(ical-scheduler:next_event_start_date)` - Next event start date (YYYY-MM-DD)
- `$(ical-scheduler:next_event_start_time)` - Next event start time (HH:MM)
- `$(ical-scheduler:next_event_end_date)` - Next event end date (YYYY-MM-DD)
- `$(ical-scheduler:next_event_end_time)` - Next event end time (HH:MM)

### Actions
- **Refresh Calendar**: Manually refresh the iCal feed
- **Check Current Events**: Check and log any currently active events

### Feedbacks
- **Event Active**: Changes color when there is a currently active event
- **Event Time Window**: Changes color during a configurable time window before and after events, as well as during the events. You can set:
  - Minutes Before: How many minutes before an event to activate (0-120 minutes)
  - Minutes After: How many minutes after an event to remain active (0-120 minutes)

### Using Feedbacks with Triggers

While the feedbacks above can be used to change button colors, their primary power comes from using them within Companion's Trigger system to perform automated actions based on calendar events.

To set this up:

1. Go to the **Triggers** tab in Companion
2. Create a new trigger with the **+ Add** button
3. Select **Feedback state** as the trigger type
4. Choose one of this module's feedbacks (Event Active or Event Time Window)
5. Configure the feedback settings as needed
6. Add the actions you want to execute when the feedback becomes active/inactive

This allows you to automatically perform actions when events start or end, such as:
- Switching scenes in your streaming software
- Adjusting lighting or audio settings
- Starting or stopping recordings
- Sending commands to other connected devices

## Support

For help and discussions about this module, please visit:
https://github.com/bitfocus/companion-module-generic-ical/issues
