## Generic Data Entry

This module provides some convenience functionality to enter user data and stores it in variables.  
It can make your surface's buttons act like keyboard keys.

Basically it collects some user entries up to a given criteria and then presents all the data.  
There is also the ability to edit the data.

### Configuration

Much of the general behavior is configured here. Parts of the configuration can be changed on the fly with actions.

* Automatic enter when raw length is reached  
  With this option enabled, you can collect data as long as you want and if the given amount of characters is met or superseeded then the data will be entered automatically. E.g. if you want to enter a 4-digit pin number, turn it on set length to 4
* Automatic enter when formatted length is reached  
  same as above but with the length of the formatted data. This can be different because formatting may e.g. add separators or remove spaces
* Automatic enter when regular expression matches  
  This is a more davanced concept. A [regular expression](https://en.wikipedia.org/wiki/Regular_expression) or "regex" is a special pattern describing a variety of possibilities how a string may look like. Checking for a length is also possible with regex, but less conveniant. With regex you can check for a literal string, which means your data is entered automatically if you enter exactly that string. This could act like a password entry. Switch to the entry page and only if the correct data is entered, an automatic enter will happen and you can do the switch back to the last page. There are tons of possibilities as regex is very flexible. A complete guide to regex is way beyond this help page. Please look it up in the internet. This module uses the ECMA script flavour of regular expressions
* Automatic enter after inactivity timeout  
  If you activate this option, every time you make a change to the data a timer will be triggered and once the timer runs out, the data is entered automatically. This may be useful if you don't have much space on your buttons and don't want an enter button. Just type your data and wait a little time for them tho being entered automatically.
* Enter Criteria  
  Specify if you want the automatic enter occur if any of the above criteria is met or all of them.  
	A useful combination could be length, time and all of them. So the timer doesn't fire until the minimum length is met.
* When entering... and After entering...  
  Define what to do with the data when enter occurs. You'll get it.
* Format Type
  This can be used to specify how the formatted output should be formatted.  
	There are a few different possibilities how formatting can be done:
	- None  
    Easy, there will be no formatting which gives the best performance obviously by just using the same result for farmatted as raw.
	- ECMA-376  
    When you type data in a cell of your favorite spreadsheet application, it will try to format it for you. There are two parts to it, first it will try to detect what kind of data you are entering and then it will format it to your liking. Usually you can adjust the formatting with a magical syntax and that syntax is standardised in ECMA-376.  
		You can use it with this module as well. If you choose 'automatic' it will try to automatically detect the type of the entered data as text, a number, a date or a time. If you don't want to have this guesswork, you can also deliberately choose one of the data types. Second you can set up how the data should be presented, exactly the way like you are used from spreadsheet apps. E.g. 0000.00 will always show a number with at least four digits and rounded to two decimals. [Here](https://support.microsoft.com/en-us/office/review-guidelines-for-customizing-a-number-format-c0a1d1fa-d3f4-4018-96b7-9c9354dd99f5) is the full documentation.  
		This module also allows to mess with locales. If you add a locale string in curly brackets like 0.00{de} the output will be 0,00 instead of 0.00 as the decimal separator in Germany is the comma. Locales so far only are working for the formatting, not for the interpreting. That means if you want to enter a date you have to do it in US notation like mm/dd/yy but then you can format it in your locale. Supported locales are: cs, da, de, el, en, es, fi, fr, hu, is, id, it, ja, ko, nb, nl, pl, pt, ru, sk, sv, th, tr, zh.



	- printf notation  
    This is most useful for number formatting. It can be used to bring numbers in a wanted format like with a fixed precision or with padding or can convert numbers to a different radix. You have to give the format string in [printf notation](https://en.wikipedia.org/wiki/Printf) and the entry_raw will be used as the argument.  
		The following list shows the most common keywords:
      - %f to (float) number
      - %k to number with metric system prefixes (like k, M, G, and so on...)
      - %e to exponential “E notation” (e.g. 13 -> 1.23e+2)
      - %K to scientific notation (e.g. 123 -> 1.23 × 10²)
      - %i to integer
      - %u to unsigned integer
      - %U to unsigned positive integer (>0)
      - %P to (absolute) percent (e.g.: 1.25 -> 125% ; 0.75 -> 75%)
      - %p to relative percent (e.g.: 1.25 -> +25% ; 0.75 -> -25%)
      - %t to time duration, convert ms into H:min:s
      - %m to degrees/minutes/seconds notation
      - %h to unsigned hexadecimal
      - %x to unsigned hexadecimal, force pairs of symbols (e.g. 'f' -> '0f')
      - %o to unsigned octal
      - %b to unsigned binary
      - %X string to hexadecimal: convert a string into hex charcodes, force pair of symbols (e.g. 'f' -> '0f' ; 'hello' -> '68656c6c6f')
      - %z string to base64
      - %Z string to base64url
      - %J to JSON (call JSON.stringify()
  
		Many keywords can have parameters, wich are put in between the % and the letter. The parameters can be used for aligning, padding, truncating, rounding and so on. E.g. %[.2!]f would give a floating point representation rounded to two digits and the are always shown, even when zero.  
		%[z5]f would give a number which is padded with zeroes to minimum five chars.  
		%[g_]f would insert a _ every three chars to mark thousands group.

  - Regular Expression Replacement  
    If your format looks like "/some regex/some replacement/optional modifiers", it will apply this replacement.  
		This is very powerful, but also may be hard to understand. Especially as normally regular expressions are not build to match partially entered strings. If you want to have good formatting with a regex replacement and at the same time want this while the string can also be incomplete, you have to master regex.  
		Because the slash is used to denote the boundaries of the search and the replacement patterns, it has to be escaped if you want to use it in a pattern with a leading backslash.
		More easy replacements can be done if you only want to replace characters or words. E.g. the pattern /./*/g will replace every character with a * like in a password entry field.  
		/(.)(..)$/$1\/$2/ This regex will insert a slash in front of the second last char

* Maximum entry length before truncation  
  Data can become quite large, sometimes you want to limit the length of data one can enter. Here's the place to do this.

* Cursor Character  
  If you want to change the character used for the cursor in the entry_cursor variable for some reason, you can. 


### Variables
* entry_raw  
  the data as it gets collected
* entry_last  
  when data meets the enter criteria or is manually entered, the raw data gets transferred to this variable
* entry_second_last  
  when data gets transferred to entry_last, entry_last gets transferred here
* entry_raw_length  
  the length of the raw entry
* entry_last_length  
* the length of the last entered data
* entry_formatted  
  same as entry_raw but with optional formatting
* entry_cursor  
  same as entry_raw but with cursor rendered at insert position
* cursor_position  
  the insert position
* entrycounter  
  a counter simply increasing every time data gets entered, you can use it to trigger actions

### Actions

* Insert Data  
  With this action you can insert Data to the entry_raw at the insert position  
	Data can be one or more characters
* Overwrite Data  
  With this action you can overwrite Data in the entry_raw
* Delete Data  
  With this action you can delete Data from the entry_raw in both directions
* Set Data  
  Discard all existing raw data and set it
* Normalize Unicode
  Unicode characters can be composed by several combining parts, most notably diacritics. Often there is also a character available which combines commonly used compositions in one character, like ñ or Ä or ø. You can enter such characters either by making a button which inserts the final character or you can make two buttons, one for the base character 'n' and one for the diacritics '~'. If you go the diacritics road, you can safe buttons and the result will look the same but technically you entered two characters. You will see this in the length of the entry and also when moving with the cursor.  
	With the normalize unicode action all composed characters will be combined if a combined character exists. There is a preset category for all available diacritics and in those presets a normalize action is added. 
* Set cursor position
	This moves the cursor. If the insert position is outside of the data, the closest position will be chosen (start or end)
* Enter Data  
  Copies the current value of entry_raw or entry_raw_formatted to entry_last and increases entrycounter
	This can be used at any time, even if you have opted for time or lenght based enter in configuration.
* Change modifier  
  Sets or unsets one of the modifiers, like shift or alt on a keyboard
	If you want a behavior like shift buttons, it is best to use "set this button" as press action and "release this button" as release action. Modifier will be active if at least one button is pressed.
	If you want a behavior like caps-lock button, it is best to use "toggle modifier" and visualize with "any" feedback.
	With "set for one modification", the modifier will be turned on and automatically turn off after the next modification (insert, overwrite, delete, set, enter), like on a mobile
* Cancel Timeout  
  This action may be useful if you are using automatic enter by timeout and you want to cancel the currently running timer. Imagine you want to set the data from Companion so that there is a starting point. Later you want to be able to just complete the prefilled data with data insertion and you want to enter that by timer. Now you can either disable the timeout, set the data and then enable timeout again or you can set the data and cancel the now running timeout.
* Set Enter criteria  
  change enter criteria on the fly, this will be stored in configuration
	Beware that if you change the enter criteria and an automatic enter would have to take place according to the new criteria deriberately no enter is triggered.
* Set format  
  change the formatting on the fly, this will be stored in configuration
	If you are using automatic enter by lenght of the formatted value, beware that changing the format could result in a formatted value which now would reach your length, but this action deliberately does not trigger an automatic enter.

### Feedbacks

* Modifier  
  this boolean feedback shows if a modifier is active
* Valid  
  Shows if data in entry raw matches a regular expression  
	This can be used to give feedback of validity or also to distribute data more advanced when used in trigger condition

### Presets

There are several Preset categories.
- Numpad
  All the numbers you need for building a simple numpad. No modifier support.
- US Keyboard
  All the characters present on a standard US keyboard with their standard Shift and Alt modifiers.
- Control
  Buttons for the most often used control actions like enter, setting modifiers, moving cursor
- Diacritics
  Diacritic characters for combinations with other characters. The buttons in these presets also add a normalize action.
