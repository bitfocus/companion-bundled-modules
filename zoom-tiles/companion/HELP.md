# Zoom Tiles

## Configuration

To configure this module, you need to provide the following settings:

- **Target IP**: The IP address of the computer running Zoom Tiles application
- **Zoom Tiles Receiving Port**: The port number that Zoom Tiles is listening on (default: 3456)

Make sure the Zoom Tiles application is running and configured to receive OSC commands on the specified port.

## Usage

### Using Variables with User Names

Actions that require a **userName** parameter support Companion variables. This allows you to dynamically specify users in your commands.

**Integration with ZoomOSC/ZoomISO:**

1. Add the ZoomOSC or ZoomISO module to your Companion instance
2. Use their user selection actions to choose a participant
3. Reference the `$(zoomOSC:selectedUser)` or `$(zoomISO:selectedUser)` variable in Zoom Tiles actions
4. This allows you to perform operations like Favorite, Block, or Replace on dynamically selected users

**Example:** In a "Favorite by User Name" action, use `$(zoomOSC:selectedUser)` instead of typing a static name.

## Supported Actions and Feedbacks

### Block

Block actions prevent specific participants from appearing in your gallery views.
UnBlock actions allow previously blocked participants to appear again.
You can block/unblock by user name or by their position in a specific gallery.

| Name | Description |
| --- | --- |
| Block by Index | Block a tile using the gallery index and tile index. |
| Block by User Name | Block user(s) by User Name. For multiple users, separate names with a comma. |
| UnBlock by User Name | UnBlock user(s) by User Name. For multiple users, separate names with a comma. |

### Capture

Capture actions control the Zoom Tiles capture engine.
Start capturing to begin recording video tiles, stop to end the capture session.

| Name | Description |
| --- | --- |
| Start Capture Engine | Start the capture engine to begin capturing video tiles. |
| Stop Capture Engine | Stop the capture engine to end capturing video tiles. |

### Config

Load a Zoom Tiles configuration file to quickly apply saved settings.
Configuration files must be stored with an absolute path on the system running Zoom Tiles.

| Name | Description |
| --- | --- |
| Load Configuration | Load a configuration file from an absolute path on disk. |

### Favorite

Favorite actions mark participants to ensure they remain visible in your gallery views.
UnFavorite actions remove the favorite marking from participants.
You can favorite/unfavorite by user name or by their position in a specific gallery.

| Name | Description |
| --- | --- |
| Favorite by Index | Favorite a tile using the gallery index and tile index. |
| Favorite by User Name | Favorite user(s) by User Name. For multiple users, separate names with a comma. |
| UnFavorite by Index | UnFavorite a tile using the gallery index and tile index. |
| UnFavorite by User Name | UnFavorite user(s) by User Name. For multiple users, separate names with a comma. |

### Gallery Timer

Gallery Timer actions control gallery view rotation and visibility.
Use queue timers to automatically cycle through participants, enable/disable specific galleries, and activate hole punch for transparency effects.

| Name | Description |
| --- | --- |
| Activate Hole Punch | Activate hole punch for a specific gallery view. |
| Deactivate Hole Punch | Deactivate Hole Punch for a specific gallery view. |
| Disable Gallery | Disable a specific gallery view. |
| Enable Gallery | Enable a specific gallery view. |
| Start Queue Timer | Start the queue timer for gallery updates. |
| Stop Queue Timer | Stop the queue timer for gallery updates. |

### Join Leave

Join and leave Zoom meetings directly from Companion.
Start your personal meeting, create an instant meeting, join with Meeting ID/Password, or use ZAK tokens for authenticated joins.

| Name | Description |
| --- | --- |
| Join Meeting | Join a meeting with Meeting ID, Password, and Display Name |
| Leave Meeting | Leave the current meeting |
| Start Instant Meeting | Start an instant meeting |
| Start Personal Meeting ID | Start a meeting using your Personal Meeting ID |
| ZAK Join Meeting | Join a meeting using ZAK token, Meeting ID, Password, and Display Name |

### Replace

Replace actions allow you to swap participants in gallery views.
You can replace by user name, tile index, or a combination of both.

| Name | Description |
| --- | --- |
| Replace by User Name | Replace user in the gallery with a new user regardless of where they are in the gallery. |
| Replace Tile Index in a Gallery with a New User | Replace a Tile Index with a specific User. If both users are already in the gallery then they swap places in the gallery |
| Replace Tile Index with Tile Index | Replace a Tile Index with another Tile Index. |
| Replace User with Tile Index | Replace a user with a specific gallery/tile index. |
