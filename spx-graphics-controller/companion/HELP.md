SPX is an open source graphics controller that runs graphics using HTML and Javascript templates. In addition to the web renderer it also interfaces with Casper CG.
[https://www.spxgc.com/]
[https://github.com/TuomoKu/SPX-GC]

## Direct commands
Commands which does not require any specific rundown

* Execute a direct play/continue/stop -command to a template without current rundown ** NEEDS TESTING **
* Uses an invoke handler to call a function in a template ** NEEDS TESTING **

## Rundown commands and navigation
Commands to load playlists, move focus on the opened rundown etc.

* Move focus to the first item on the rundown
* Move focus down to the next item
* Move focus up to the previous item
* Move focus to the last item on the 
* Animate all layers out (does not clear layers)
* Open rundown from project / file ** NEEDS TESTING **

## Playback controls
Commands for rundown items.

* Start focused item
* Continue
* Stop focused item
* Start item by ID
* Continue to item by ID
* Stop item by ID

## Some presets are created for the above functions