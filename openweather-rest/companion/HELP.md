## <a href="https://openweathermap.org/"> <img src="https://openweathermap.org/themes/openweathermap/assets/img/logo_white_cropped.png" width=150></a>

Retrieve and display weather information. <br>
This module requires an active internet connection and you will need your own API key from here: <a href="https://openweathermap.org/home/sign_up" title="OpenWeather">OpenWeather.com</a>
.<br>


## Configuration
**Setting** | **Description**
-----------------|---------------
**API Key** | Enter your API Key from OpenWeather
**Units** | Select to display Celsius & kPH, otherwise Fahrenheit & MPH
**Location** | Enter the weather location <sup>*2</sup>
**Refresh** | How often to update the weather info in Minutes

---
## Available Actions/commands
**Command** | **Description**
---|---
**Refresh** | Refresh weather information. (To prevent API abuse, there is a limit one poll per minute).

---
## Feedback
&nbsp; | **Description**
---|---
**Graphic** | OpenWeather graphic for current weather

---
## Variables
Replace `ow` with the actual instance label.

**Variable** | **Description**
---|---
*Location* | &nbsp;
`$(ow:l_name)` | Name
`$(ow:l_region)` | Region or State (if available)
`$(ow:l_country)` | Country
`$(ow:l_localtime)` | Local Time
*Current Information* | &nbsp;
`$(ow:c_time)` | Time last updated
`$(ow:c_temp)` | Temperature<sup>*1</sup>
`$(ow:c_time)` | Time last updated
`$(ow:c_press)` | Barometric Pressure
`$(ow:c_humid)` | /relative Humidity
`$(ow:c_text)` | Condition description
`$(ow:c_wind)` | Wind speed
`$(ow:c_windir)` | Wind direction

---

<sup>*1</sup> Temperature variables include the degree (°) symbol

---

<sup>*2</sup>  Enter one of the following for the weather location

**Description** | **Example**
---|---
City name | Paris<sup>*3</sup>
US zip | 10001
UK postcode | SW1
Canada postal code | G2J

---

<sup>*3</sup> City name options:
- Add a comma "," and a 2 character country code to specify which City: "Paris,FR"
- Add a comma "," and a 2 character state code followed by another comma and a 2 character country code to specify which City: "Paris,TX,US"