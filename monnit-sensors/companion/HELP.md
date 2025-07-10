# Monnit Sensors Module

This module retrieves sensor data from a Monnit account using the `SensorList` API.

## Configuration

- **API Key ID** and **API Secret Key**: credentials for the Monnit JSON API.
- **Refresh Interval**: how often (in minutes) the module polls the API. 0 will disable automatic polling.
- **Verbose Logging**: when enabled, request and response details are printed to the log.

## Variables

For each sensor the following variables are created using the sensor name as a prefix (spaces replaced by underscores):

- `<sensor>_lastCommunication`
- `<sensor>_temperature` – temperature value
- `<sensor>_humidity` – only for sensors that report humidity
- `<sensor>_battery`
- `<sensor>_signal`
- `last_poll_date` – date of the last successful automatic refresh
- `last_poll_time` – time of the last successful automatic refresh

## Actions

- **Refresh All Sensors** – manually request an update from the API.
- **Refresh Single Sensor** – update data for a selected sensor only.

## Feedbacks

- **Temperature Threshold** – warns when temperature is above or below a limit.
- **Specific Temperature** – warns when temperature equals a specific value.
- **Humidity Threshold** – warns when humidity is above or below a limit.
- **Specific Humidity** – warns when humidity equals a specific value.
- **Battery Level Warning** – warns when battery percentage falls below a limit.
- **Signal Strength Warning** – warns when signal percentage falls below a limit.
- **Last Checkin** – warns when a sensor has not reported within a set number of minutes.

The `LastCommunicationDate` is converted to your local time. Readings are parsed into numeric temperature and humidity values when available.
