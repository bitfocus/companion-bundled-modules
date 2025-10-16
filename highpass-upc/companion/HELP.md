
The module connects with a macOS helper application that provides WebSocket control of both Keynote and PowerPoint presentations.

### Installation & Setup

1. Download the UPC Helper App and install it on your macOS machine from https://github.com/mko1989/upc/releases
2. Launch the UPC app - it will appear as a tray icon in your menu bar
3. Note the authentication token displayed in the console when the app starts
4. Select your presentations folder by right-clicking the tray icon and choosing "Select Folder"

### Configuration

- Target IP: The IP address of your macOS machine (127.0.0.1 for local)
- Target Port: WebSocket port (default: 8765)
- Authentication Token: The 8-character token shown in the UPC console

### Variables Available

Use these variables in your button text and conditionals:

- `$(UPC:presentationName)` - Current presentation name
- `$(UPC:currentSlide)` - Current slide number
- `$(UPC:slideCount)` - Total slides
- `$(UPC:state)` - Playing/Stopped
- `$(UPC:presentationType)` - keynote/powerpoint/none
- `$(UPC:slideNotes)` - Current slide notes
- `$(UPC:driverType)` - Active driver