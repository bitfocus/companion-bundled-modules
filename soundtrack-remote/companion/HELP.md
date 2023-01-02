# Soundtrack Remote

## Getting your API key

To request an API key from Soundtrack, fill out [this form from their website](https://www.soundtrackyourbrand.com/our-api/apply)

## Getting ID's for Zones and media sources

Right now, this module doesn't automatically list Soundtrack Zones, Playlists, Schedules, or Stations. You will need to manually get these from browser URL's.

### Zones

To get the ID for a Zone, go to the Soundtrack website, click on the Zone page, and select the zone you would like to control with Companion. The URL will look something like this:

`https://business.soundtrackyourbrand.com/accounts/{{ your_account_id  }}/zones/{{  your_zone_id  }}/player`

Copy your zone ID from the URL and paste it into the Zone ID field in Companion, and you should be set!

### Playlists, Schedules, and Stations

To get the ID for a Playlist, Schedule, or Station, go to the Soundtrack website and navigate to the Playlist, Schedule, or Station you want the ID from. The URL will look something like this:

Playlist or Station: `https://business.soundtrackyourbrand.com/accounts/{{ your_account_id  }}/your_music/{{  your_playlist_id  }}`  
Schedule: `https://business.soundtrackyourbrand.com/accounts/{{ your_account_id  }}/your-music/schedules/edit/{{  your_schedule_id  }}`