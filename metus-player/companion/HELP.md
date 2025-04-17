## Metus Technology Player Controller

This module allows you to control [Metus Player](https://www.metus.com/metus-player/) using the [PlayerWeb API](https://metuskb.atlassian.net/wiki/spaces/MP/pages/3259924481/Metus+PlayerWEB+Controller).

### Configuration

- Install PlayerWeb.
- You need to specify a user to control Metus Player. Login to PlayerWeb with the admin user and browse to the Users page.
- Create a new user. Change this user's role to Operator.
- Open the module configuration in Companion. Enter the PlayerWeb API URL. The default port for the API is 5010. Eg: http://10.7.10.42:5010
- Enter the credentials of the newly created user. You don't need to fill the token field, it will be set automatically.
- Save your configuration. The module should connect to the PlayerWeb API.
