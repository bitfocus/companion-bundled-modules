## Analog Way CorePlay Solo

This module controls the CorePlay Solo media player from Analog Way

### Configuration

Enter the IP address or host name of the CorePlay Solo media player like you would do in a browser including the http:// prefix. https is also possible but self-signed certificates or certificates trusted locally by the OS are not supported.

### Actions

* Player: Transport
* Player: Take
* Player: Seek to time
* Player: Set Media by index
* Player: Set Default Take Configuration
* Playlist: Select Item
* Audio: Mute
* Audio: Volume

### Boolean Feedbacks

* Playhead state
* Tally: shows if a media item is loaded or running in preview or program
* Take in progress
* Player Configuration: Transition type
* Player Configuration: Playhead Option
* Player Configuration: Preset Toggle

### Advanced Feedbacks

* Preview Thumbnail: shows the thumbnail of a media item on a button

### Variables

* preview1_elapsed: Elapsed time of running media in milliseconds
* preview1_remain: Remaining time of running media in milliseconds
* program1_elapsed: Elapsed time of running media in milliseconds
* program1_remain: Remaining time of running media in milliseconds
* take1_transitionDuration: Player 1 Take duration in seconds
* take1_startPoint: Player 1 Take transition type
* take1_startPoint: Player 1 Take from position
* take1_presetToggle: Player 1 Preset Toggle
* collections: JSON object holding all slots of all collections
* playlists: JSON object holding all playlists
* serialnumber: Serial number of the device
* hostname: Hostname of the device

Please note that during playing some media the player will send time updates to Companion at very high frequencies. To avoid drawing problems the variables are only updated every 100ms. If you are using the variables to automate some actions or syncronize with other devices, you should take the reduced readout frequency into account.
