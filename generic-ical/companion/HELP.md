# Companion Module: iCal Scheduler

This module integrates iCal calendar feeds with Bitfocus Companion, allowing you to trigger actions based on calendar events.

## Configuration

- **iCal Feed URL**: Enter the URL of your iCal feed (e.g., from Google Calendar, Outlook, etc.)
  - Obtaining an iCal URL in Google Calendar:
    - Navigate to Settings and Sharing > Calendar Setting > Integrate calendar
      - If calendar is public, use "Public address in iCal Format"
      - If calendar is private, use "Secret address in iCal Format"
- **Refresh Interval**: How often to check for calendar updates (1-1440 minutes)

## Features

### Variables

The following variables are available when events are active:

Current Event:

- `$(ical:event_name)` - Event name (shows "Nothing Scheduled" when no event is active)
- `$(ical:event_start_date)` - Event start date (YYYY-MM-DD)
- `$(ical:event_start_time)` - Event start time (HH:MM)
- `$(ical:event_end_date)` - Event end date (YYYY-MM-DD)
- `$(ical:event_end_time)` - Event end time (HH:MM)

Next Event:

- `$(ical:next_event_name)` - Next event name
- `$(ical:next_event_start_date)` - Next event start date (YYYY-MM-DD)
- `$(ical:next_event_start_time)` - Next event start time (HH:MM)
- `$(ical:next_event_end_date)` - Next event end date (YYYY-MM-DD)
- `$(ical:next_event_end_time)` - Next event end time (HH:MM)

### Actions

- **Refresh Calendar**: Manually refresh the iCal feed
- **Check Current Events**: Check and log any currently active events

### Feedbacks

- **Event Active**: Changes button style when there is a currently active event
- **Event Time Window**: Changes button style during a configurable time window before and after events, as well as during the events. You can set:
  - Minutes Before: How many minutes before an event to activate (0-120 minutes)
  - Minutes After: How many minutes after an event to remain active (0-120 minutes)

### Using Feedbacks with Triggers

While the feedbacks above can be used to change button styles, their primary power comes from using them within Companion's Trigger system to perform automated actions based on calendar events.

To set this up:

1. Go to the **Triggers** tab in Companion
2. Create a new trigger with the **+ Add Trigger** button, then follow the steps for each section:

- **Events**: Add **On condition becoming true** or **On condition becoming false**, depending on if you want the trigger to fire at the start (true) or end (false) of an event
- **Conditions**: add either the Event Active or Event Time Window feedback
- **Actions**: add the actions you want to execute when the feedback becomes active/inactive

This allows you to automatically perform actions when events start or end, such as:

- Switching scenes in your streaming software
- Adjusting lighting or audio settings
- Starting or stopping recordings
- Sending commands to other connected devices

## Support

For help and discussions about this module, please visit:
https://github.com/bitfocus/companion-module-generic-ical/issues
