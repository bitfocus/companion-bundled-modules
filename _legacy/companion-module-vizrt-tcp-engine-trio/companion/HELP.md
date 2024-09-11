## VizRT Send Command Line module for Companion

**Available commands for viz Send Command Line module**

- **Send manual commands over TCP to vizRT Engine**
  - Examples : "MAIN SHOW_COMMANDS 1", commands can also be chained with ";" - "SCENE*<Scene Name> CUE;SCENE*<Scene Name>*STAGE SHOW 0.0;MAIN_SCENE*STAGE START"
  - viz Engine External Commands -> see vizRT External Commands.txt file (https://github.com/bitfocus/companion-module-vizrt-sendcommandline/blob/main/vizRT%20External%20Commands.txt)
- **Send manual commands over TCP to viz Trio**
  - Examples : "page:read 1000", commands can also be chained with ";" - "page:takeout 1001;page:take 1000;"
  - viz Trio Documentation : https://documentation.vizrt.com/viz-trio-guide/4.0/Overview_of_Commands.html

This library is in no way associated with, or endorsed by VizRT.
