## Interspace Industries CueEther

This Companion module allows you to send Cues directly to a **CueEther** via TCP or as a UDP broadcast to multiple units.
By default this module is setup to use UDP. Broadcasting Cues to the default 255.255.255.255 broadcast address
## CueEther Setup
1. Firstly, access the webpage of the CueEther Receiver to configure the **Work Mode** to **UDP** or **TCP Server**
 - If you're having trouble locating the webpage, try running **arp -a** within the Command Prompt or Shell
 - This will resolve, listing the used IP Addresses on the network
 - Which you can then verify, by entering the addresses listed (that have the type **dynamic**) one-by-one into your browsers URL search (e.g. 192.168.0.150)
 - You will hopefully soon be greeted by a prompt asking you to sign in (with the details provided in the CueEther manual)
 ### If you're unable to find the device webpage:
 - Ensure the CueEther is connected (via Ethernet) to a network reachable by this computer, and powered by USB
 - Ensure that your search URL looks something like: http://192.168.0.150/ after searching each address one-by-one
2. Once you have access to the i2 Cue Rx webpage, navigate to the **Serial Port** tab, and wait a moment for it to load
3. Then change the **Work Mode**value to **UDP** or **TCP Server** (if it isn't already in the desired mode), and press Save
4. You should then be prompted to restart the module, select **Restart Module**
5. Now when you visit the **Serial Port** tab (after the module restarts), the **Work Mode** should have updated to your desired mode. Otherwise repeat from **Step 3**

## Companion Setup
1. With the CueEther configured to your needs, ensure that the Protocol below corresponds with the selected **Work Mode**
2. In the case that the CueEther has been configured as a **TCP Server**, enter the known Fixed IP Address into the **CueEther Fixed IP** field
3. Otherwise the default values should be adequate for a **UDP Server**
4. Now by adding the Cue Presets to your Companion layout, you should be able to Send Cues to your device
5. The background of the Cue Presets will light up (red/green/white) on press, if everything has been setup correctly

[CueEther Module Github] (https://github.com/bitfocus/companion-module-interspace-cueether)