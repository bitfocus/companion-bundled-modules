# VICREO Broadcast Titles

This module connects to VICREO Broadcast Titles via WebSocket API to provide remote control capabilities.

## Configuration

- **Host**: IP address of the computer running VICREO Broadcast Titles (default: 127.0.0.1)
- **WebSocket Port**: Port number shown in VICREO Broadcast Titles under "Output Controls" → "WebSocket API" (default: 8080)
- **Reconnect Interval**: How often to attempt reconnection if connection is lost (default: 5 seconds)

## Actions

### Navigation

- **Navigate Up**: Move selection up one row
- **Navigate Down**: Move selection down one row
- **Select Row**: Select a specific row by 0-based index
- **Select Row (1-based)**: Select a specific row by 1-based row number

### Output Control

- **Go Live**: Send currently selected row to live output (NDI stream)
- **Clear Output**: Clear the live output

### Information

- **Refresh Data**: Refresh and return current Excel data
- **Get Status**: Request current application status
- **Get Data**: Get current Excel data and sheet information
- **Get Sheets**: Get list of available Excel sheets

### Combined Actions

- **Select Row and Go Live**: Select a specific row and immediately go live
- **Next Row and Go Live**: Move to next row and go live
- **Previous Row and Go Live**: Move to previous row and go live
- **Go Live with Specific Row**: Go live with a specific row number (supports variables)

## Variables

### Status Variables

- `$(vicreo-titles:selected_row)`: Currently selected row number (1-based)
- `$(vicreo-titles:live_row)`: Currently live row number (1-based)
- `$(vicreo-titles:total_rows)`: Total number of rows in loaded data
- `$(vicreo-titles:is_output_live)`: Whether output is live (YES/NO)

### Data Variables

- `$(vicreo-titles:has_data)`: Whether Excel data is loaded (YES/NO)
- `$(vicreo-titles:filename)`: Name of loaded Excel file
- `$(vicreo-titles:current_sheet)`: Name of current sheet
- `$(vicreo-titles:sheet_count)`: Number of available sheets

### Row Data Variables

The module automatically creates variables for each row and column in your Excel data:

**Selected Row:**

- `$(vicreo-titles:selected_title)`: Title/Name column of selected row (automatically updated when selection changes)

**Live Row:**

- `$(vicreo-titles:live_title)`: Title/Name column of live row (automatically updated when live row changes)

**Individual Row Variables:**

- `$(vicreo-titles:row_1_title)`: Title of row 1
- `$(vicreo-titles:row_2_title)`: Title of row 2
- etc. (up to 50 rows)

## Feedbacks

### Status Feedbacks

- **Output is Live**: Button lights up when output is live
- **Excel Data is Loaded**: Button lights up when Excel data is loaded

### Row Feedbacks

- **Specific Row is Selected**: Button lights up when a specific row is selected
- **Specific Row is Live**: Button lights up when a specific row is live
- **Selected Row is Live**: Button lights up when the currently selected row is also the live row

### Content Feedbacks

- **Selected Row Contains Text**: Button lights up when selected row contains specific text in a column
- **Live Row Contains Text**: Button lights up when live row contains specific text in a column

## Presets

The module includes several ready-to-use button presets:

### Navigation and Control

- **Up/Down**: Navigation buttons with arrow icons
- **Go Live**: Red live button with feedback
- **Clear**: Clear output button

### Quick Actions

- **Next & Live**: Navigate down and go live in one action
- **Previous & Live**: Navigate up and go live in one action

### Selected Row Control

- **Go Live with Selected Row**: Shows current selected row title and goes live when pressed (highlights red when selected row is already live)

### Status Display

- **Selected Row Display**: Shows "SEL: #[number] [title]" of currently selected row
- **Live Row Display**: Shows "LIVE: #[number] [title]" of currently live row (highlights red when live)
- **Row Status**: Shows "Row X / Y" with current position

### Dynamic Row Buttons

When Excel data is loaded, the module automatically creates individual row buttons:

- Each button shows the row title from your Excel data
- Buttons highlight green when that row is selected
- Buttons highlight red when that row is live
- Pressing a button selects that row and goes live immediately

## Usage Examples

### Basic Setup

1. Load Excel data in VICREO Broadcast Titles
2. Note the WebSocket port shown in the application
3. Configure this module with the correct host and port
4. Add presets or create custom buttons with navigation and live actions

### Quick Start with Presets

1. Install and configure the module
2. Load Excel data in VICREO Broadcast Titles
3. Use the built-in presets:
   - Add "Selected Row Display" to see current selection
   - Add "Go Live with Selected Row" for easy live control
   - Add "Up" and "Down" navigation buttons
   - Dynamic row buttons will automatically appear for your Excel data

### Custom Button Setup

Create custom buttons using actions and variables:

- **Next**: Navigate Down → Go Live
- **Previous**: Navigate Up → Go Live
- **Clear**: Clear Output
- **Row 1**: Select Row (1-based) → Go Live
- **Row 2**: Select Row (1-based) → Go Live

### Advanced Variable Usage

Create dynamic text displays:

- Current selection: "$(vicreo-titles:selected_title)"
- Row status: "Row $(vicreo-titles:selected_row) of $(vicreo-titles:total_rows)"
- Live content: "LIVE: $(vicreo-titles:live_title)"
- File info: "$(vicreo-titles:filename) - Sheet $(vicreo-titles:current_sheet)"

### Status Display

Use variables to show current status:

- Text button showing: "Row $(vicreo-titles:selected_row) of $(vicreo-titles:total_rows)"
- Text button showing: "$(vicreo-titles:live_title)" for current live title

### Feedback Examples

- Live button: Red when output is live
- Row buttons: Green when that specific row is selected
- Status button: Blue when Excel data is loaded

## Requirements

- VICREO Broadcast Titles v2.0 or later
- Both Companion and VICREO Broadcast Titles must be on the same network
- Excel data must be loaded in VICREO Broadcast Titles for full functionality

## Troubleshooting

### Connection Issues

1. Verify VICREO Broadcast Titles is running
2. Check the WebSocket port in VICREO Broadcast Titles UI
3. Ensure firewall is not blocking the connection
4. Try using 127.0.0.1 instead of localhost

### Actions Not Working

1. Ensure Excel data is loaded in VICREO Broadcast Titles
2. Check that the data table has focus in the application
3. Verify the WebSocket connection status in Companion
4. Check Companion logs for error messages

### Variables Not Updating

1. Ensure WebSocket connection is established
2. Check if VICREO Broadcast Titles is sending status updates
3. Try the "Get Status" action to refresh variables
4. Verify Excel data is properly loaded and contains a "Name" or title column
5. Check that row data includes proper row numbers
6. The module automatically derives title variables from your dataset - ensure your Excel data has consistent column names

### Title Variables Not Showing

1. Ensure your Excel data has a "Name" column (primary) or other title column as the first column
2. Variables like `$(vicreo-titles:selected_title)` and `$(vicreo-titles:live_title)` are automatically populated from your data
3. Row variables (`$(vicreo-titles:row_X_title)`) are created for each row in your Excel file
4. If titles appear blank, check that your Excel data has content in the title/name column
