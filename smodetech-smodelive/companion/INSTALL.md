# How To Configure Smode Live for StreamDeck 

## Install Companion
* Install win64 version of Companion from Bitfocus website:
https://bitfocus.io/companion

 * Here the last current version link:
https://s3.bitfocus.io/builds/companion/companion-win64-3.1.2+6243-stable-05c37a10.exe


## Install NodeJS
Use NodeJS v18.xx.xx (18.19.0) x64 (And not version 20)
Here the link:
https://nodejs.org/download/release/v18.19.0/node-v18.19.0-x64.msi
Use default installation.

## Install yarn package manager
In a shell console type the following command:
`npm install yarn -g`

## Checkout companion-module-smodetech-smodelive source code

* It is important to create a root folder containing plugins so first of all:
Create a new folder companion-dev 
Then checkout companion-module-smodetech-smodelive from this url inside the companion-dev folder.
https://github.com/bitfocus/companion-module-smodetech-smodelive


* In a shell console launched in the companion-dev/companion-module-smodetech-smodelive folder type the following command
`yarn install`

* Launch Companion
* Click on Angrenage Wheel 
* Select develloper module path to the companion-dev folder
* Click on LAUNCH GUI
* Disable x-keys

* Add connection
* Search
* Smode live
* Select Smode live and enter the Smode ip address.

Enjoy