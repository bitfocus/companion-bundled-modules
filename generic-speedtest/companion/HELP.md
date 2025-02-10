## Generic Speedtest

This module will allow you to conduct an internet speed test using Ookla's speedtest.net.

_Note: As of v2.0.0, Cloudflare is no longer provided as an option due to support being dropped by the underlying speedtest library and Cloudflare's library not being compatible with Node.js._

### Configuration

- Use the "Run Test" action to run a speed test. Until you run a test using the action, results will not be shown. When you run a new test, all previous results will be cleared until the new test results are received

### Available actions

- Run Test

### Available feedbacks

- Test Results
- Test Status

### Available variables

- download_speed
- upload_speed
- ping
- jitter
- server_city
- server_distance
- client_public_ip
- test_status
