## Generic Web-Table

This module will allow you to access a table via any web browser to retreave, store an change its values.<br>
It's recommended to use a modern browser like 
<a href="https://www.google.com/intl/de/chrome/" target="_blank">Chrome</a> or 
<a href="https://www.mozilla.org/de/firefox/new/" target="_blank">Firefox</a> for the table interface.<br><br>
<strong>WARNING: Changing the module label effects the browser link!</strong><br><br>

#### Companion Configuration
* Change password if needed. This password verifies data exchange between Companion and clients (empty = no password)
* Set table size by defining its columns and rows
* Enable/Disable variables for all individual table cells<br>
<strong>WARNING: Enabling can impact performance on large tables!</strong>

##### <u>Actions:</u>
* Append New Row
* Change Data Columns
* Clear Data
* Control External Access
* Select Row
* Set Cell Value
* Set Row Values

##### <u>Feedbacks:</u>
* Cell Value
* Data Available
* External Access Status
* Selected Row
* Row Values

##### <u>Variables:</u>
* data_columns
* data_rows
* external_access_status
* selected_row_id
* selected_row_values
* individual cell values (optional)
<br><br>

#### Using The Table
The easiest way to open the table is by clicking on the link ("Open table in new tab"), provided in the configuration tab.<br>
Other ways would be to enter "<b>http://<i><companion_ip></i>:<i><companion_port></i>/instance/<i><instance_label></i></b>" into a browser.

##### <u>Navigation:</u>
All cells of the table are editable except for column or row heads.<br>
Each cell can be selected by clicking or tapping on it. It will light up to show it has been selected.<br>
Inside each cell the left and right arrow keys can be used to move the cursor.

* Navigate to the next cell (right side) by using the keyboard shortcut <b>↹ (Tab)</b>.
* Navigate to the previous cell (left side) by using the keyboard shortcut <b>Shift + ↹ (Shift + Tab)</b>.
* Navigate to the cell below (bottom side) by using the keybord shortcut <b>↓ (ArrowDown)</b>.
* Navigate to the cell above (top side) by using the keybord shortcut <b>↑ (ArrowUp)</b>.

##### <u>Column Manipulation:</u>
By clicking or tapping an a column head, a context menu will provide additional options to manipulate a whole column.

* <mark><b>Add Column Before</b></mark> - will add a new column to the left side of the selected column.
* <mark><b>Add Column After</b></mark> - will add a new column to the right side of the selected column.
* <mark><b>Copy Column</b></mark> - will copy all cells of the selected column to be able to paste repeatable later.
* <mark><b>Cut Column</b></mark> - will cut all cells of the selected column to be able to paste once later.
* <mark><b>Clear Column</b></mark> - will clear all cells of the selected column.
* <mark><b>Delete Column</b></mark> - will delete all cells of the selected column.

##### <u>Row Manipulation:</u>
By clicking or tapping an a row head, a context menu will provide additional options to manipulate a whole row.

* <mark><b>Add Row Above</b></mark> - will add a new row to the top side of the selected row.
* <mark><b>Add Row After</b></mark> - will add a new row to the bottom side of the selected row.
* <mark><b>Copy Row</b></mark> - will copy all cells of the selected row to be able to paste repeatable later.
* <mark><b>Cut Row</b></mark> - will cut all cells of the selected row to be able to paste once later.
* <mark><b>Clear Row</b></mark> - will clear all cells of the selected row.
* <mark><b>Delete Row</b></mark> - will delete all cells of the selected row.

##### <u>Data Exchange:</u>
On the bottom of the browser table, there are some options to submit, request, import or export table data.

* <mark><b>Submit Data</b></mark> - will submit the table from the browser to Companion.
* <mark><b>Request Current Data</b></mark> - will request the current table from Companion to load into the browser.
* <mark><b>Import CSV</b></mark> - will import a .csv file from the device as a table and upload it to the browser.
* <mark><b>Export CSV</b></mark> - will export the table from the browser to a .csv file and download it to the device.

##### <u>Browser Storage:</u>
By default the browser will store all table data automatically. If there is table data stored from a last session, it will promt you to load this data to continue working. This data gets shared across multiple tabs of the same browser on a single device for each instance.