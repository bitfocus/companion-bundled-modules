## <a href="https://openweathermap.org/"> <img src="https://openweathermap.org/themes/openweathermap/assets/img/logo_white_cropped.png" width=150></a>

Retrieve and display weather information. <br>

Stuck backstage in some cold, dark ballroom, running A/V support for meetings?<br>
Do you wonder what the weather is like outside?<br>
Display the current weather information on a Companion button!<br>

This module requires an active internet connection and you will need your own API key from here: <a href="https://openweathermap.org/home/sign_up" title="OpenWeather">OpenWeather.com</a>.<br>

---

Contributions for maintenance and development of this open source module are always welcome
https://github.com/sponsors/istnv

---

## Configuration

| **Setting**           | **Description**                                             |
| --------------------- | ----------------------------------------------------------- |
| **API Key**           | Enter your API Key from OpenWeather                         |
| **Location**          | Enter the weather location <sup>\*2</sup>                   |
| **Measurement Units** | Select to display Celsius & kPH, otherwise Fahrenheit & MPH |
| **Refresh Frequency** | How often to update the weather info in Minutes             |

---

## Available Actions/commands

| **Command** | **Description**                                                                                                                  |
| ----------- | -------------------------------------------------------------------------------------------------------------------------------- |
| **Refresh** | Refresh weather information every # of minutes. (To prevent API abuse, there is a minimum of one minute between update queries). |

---

## Feedback

| &nbsp;      | **Description**                         |
| ----------- | --------------------------------------- |
| **Graphic** | OpenWeather graphic for current weather |

---

## Variables

Replace `ow` with the actual instance label.

| **Variable**          | **Description**                         |
| --------------------- | --------------------------------------- |
| _Location_            | &nbsp;                                  |
| `$(ow:l_name)`        | Name                                    |
| `$(ow:l_region)`      | Region or State (if available)          |
| `$(ow:l_country)`     | Country                                 |
| `$(ow:l_localtime)`   | Local Time                              |
| _Current Information_ | &nbsp;                                  |
| `$(ow:c_time)`        | Time last updated                       |
| `$(ow:c_temp)`        | Temperature in selected _units_         |
| `$(ow:c_tempf)`       | Temperature Farenheit                   |
| `$(ow:c_tempc)`       | Temperature Celsius                     |
| `$(ow:c_tempk)`       | Temperature Kelvin                      |
| `$(ow:c_feels)`       | 'Feels like' in selected _units_        |
| `$(ow:c_feelf)`       | 'Feels like' Farenheit                  |
| `$(ow:c_feelc)`       | 'Feels Like' Celsius                    |
| `$(ow:c_feelk)`       | 'Feels Like' Kelvin                     |
| `$(ow:c_time)`        | Time last updated                       |
| `$(ow:c_press)`       | Barometric Pressure in selected _units_ |
| `$(ow:c_inhg)`        | Barometric Pressure inHg                |
| `$(ow:c_mmhg)`        | Barometric Pressure mmHg                |
| `$(ow:c_hpa)`         | Barometric Pressure in hPa              |
| `$(ow:c_humid)`       | /relative Humidity                      |
| `$(ow:c_text)`        | Condition description                   |
| `$(ow:c_wind)`        | Wind speed in selected _units_          |
| `$(ow:c_windi)`       | Wind speed MPH                          |
| `$(ow:c_windm)`       | Wind speed MPS                          |
| `$(ow:c_windir)`      | Wind direction                          |

---

<sup>\*1</sup> Temperature variables include the degree (°) symbol

---

<sup>\*2</sup> Enter one of the following for the weather location

| **Description**    | **Example**         |
| ------------------ | ------------------- |
| City name          | Paris<sup>\*3</sup> |
| US zip             | 10001               |
| UK postcode        | SW1                 |
| Canada postal code | G2J                 |

---

<sup>\*3</sup> City name options:

- Add a comma "," and a 2 character country code to specify which City: "Paris,FR"
- Add a comma "," and a 2 character state code followed by another comma and a 2 character country code to specify which City: "Paris,TX,US"
