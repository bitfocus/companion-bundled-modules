## InfluxDB

This module allows you to send data to an InfluxDB instance.

### Configuration

* `URL` (required): The URL of the InfluxDB instance.
* `Token` (required): The InfluxDB token to use for authentication.
* `Organization` (required): The InfluxDB organization to use.
* `Bucket` (required): The InfluxDB bucket to write to.

### Available actions

* `Write`: Write data to InfluxDB.
* `Write Float Point`: Write a single float point to InfluxDB.
* `Write String Point`: Write a single string point to InfluxDB.
* `Write Boolean Point`: Write a single boolean point to InfluxDB.
* `Flush Buffer`: Flush the write buffer to InfluxDB.

### Available feedbacks
TODO

### Available presets
TODO

### Available variables
TODO
