## AWS Elemental MediaLive

This module allows you to start, stop, or toggle and see status of your MediaLive channels

More capability might be added in the future upon request

## Setup

The usage of this module is pretty simple, just create a new IAM user with **only** these three permissions: **ListChannels, StartChannel, StopChannel**

Then generate an Access Key for that user and fill out the config in Companion

#### DO NOT USE YOUR ROOT ACCOUNT

Also, remember to select the correct region, otherwise no channels will show up

If any issue arises, please submit a [Github issue](https://github.com/bitfocus/companion-module-aws-medialive/issues)

## Actions

- Start channel
- Stop channel
- Toggle channel

## Feedback

- Channel status

## Variables

- Channel name
- Channel status
