# Adder XDIP

This module allows you to control an [Adder XDIP](https://www.adder.com/en/kvm-solutions/adderlink-xdip) receiver on your local network.

## Receiver Setup

Before receivers can be controlled by Companion, the ‘Enable Remote Control’ option must be checked within the Advanced page of each Receiver’s configuration. The XDIP unit must have firmware version v1.05 or above. _Note:_ XDIP firmware version v1.06 has a bug which prevents the 'Enable Remote Control' option from being saved.

## Module Setup

Enter the IP address and Access Password for the receiver in the Companion XDIP module connection settings. The port should be left as the default unless you have a reason to change it. When a connection is established the list of channels, names and descriptions will be retrieved from the receiver.

## Actions

The following actions are possible.

**Get Connected Channel** Interrogate the receiver to discover which channel it is connected to and put this information into a Companion variable.

**Switch Channel** Change the receiver to the selected channel. If no channels are shown then Companion has not been able to connect.

**Disconnect Receiver** Output nothing from the receiver.

**Refresh Channel List** If changes are made to the configuration of the channels on the receiver then this action should be used to update Companion with the new information.

**Refresh Access Token** If switching channels fails due to a missing access token then this action may help resolve the problem.

## Variables

A few variables are available. Variables will only update on connection or when an action is performed. There is no polling so if a channel is changed using the interface on the XDIP Companion variables will be out of date until 'Get Connected Channel' action is used.

**Connected Channel Id** The number of the channel that the receiver is switched to. These numbers are the same as those shown on the XDIP device menu.

**Connected Channel Name** The name of the channel that the receiver is switched to.

**Access Token State** This variable will show 'Valid' if an access token has been successfully acquired. An access token is required to switch channels.

**Receiver Name** The name of the Receiver.

**Receiver Description** The description of the Receiver.

## Versions

### 1.0.0

First release

### 2.0.0

Rewrite for Companion 3

### 3.0.0

Conversion to TypeScript, add feedbacks
