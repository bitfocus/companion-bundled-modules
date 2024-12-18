## LightShark LS1

### Configuration

Enter the IP of your console into the module configuration. If you use non default OSC ports, also adjust these in order to get the module to communicate with your console.

The module will poll the current information from your console. You can control how often that happens by changing the polling interval in the module configuration. Make sure to use a value greater than 1000ms (1s) to make sure that the console will not crash.

You can also disable polling completely and use the sync actions to manually retrieve the latest information from the console.
