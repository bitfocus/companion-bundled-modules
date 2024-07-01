**Sponsor**<br />
This module, as with Companion, is free and open source, but if you'd like to support the continued development of this and my other modules (vMix, Google Sheets, Twitch, Discord, and more) tips will always be appreciated either on [Github](https://github.com/sponsors/thedist) or [Ko-Fi](https://ko-fi.com/thedist).


# Voicemeeter Proxy
Companion interacts with the Voicemeeter API by searching for the install location and then binding to a .dll file used by Voicemeeter for external remote control, but because of this it means that if you wish to control Voicemeeter on a machine other than the one running Companion you will need to use a proxy running on the machine running Voicemeeter.


## Prereuisuites
NodeJS >= 18


## Steps to run the Proxy (Only required if running Voicemeeter on a separate machine to Companion)
1. Download the [companion-module-vbaudio-voicemeeter repository](https://github.com/bitfocus/companion-module-vbaudio-voicemeeter). This can be done either by `git clone` or by clicking on the Code button, and then downloading the zip
2. In the directory you've cloned or unzipped the repo to, run `npm i`. This will download the modules dependencies (NOTE: there may be additional dependencies separate from the module required to build it due to the nature of Voicemeeters API, if there is any issues feel free to reach out on the [Issues Page](https://github.com/bitfocus/companion-module-vbaudio-voicemeeter/issues))
3. Run `node proxy` to start running the proxy on the default port of 8099, or use the `-p PORT` argument to specify a port, such as `node proxy -p 3000`
4. In Companion, create an instance for Voicemeeter and in the configuration set the IP and Port of where the proxy is running
