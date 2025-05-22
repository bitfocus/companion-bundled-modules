# Generic File Reader
This module will allow you to read a local file and pull the contents into a Variable.

## Configuration
* Enter the file path.
* Re-Read Rate:  
  how often to re-open the file and read the contents again   
  Set to minimum 1000ms  
  If set to lower value, the file will be read once and then only again if started by the action

## Actions

* Read File Now
* Read Custom File Path into Custom Variable
* Read Specific Line into Custom Variable
* Read Specific Line of Custom File Path into Custom Variable
* Start/Stop File Reading Interval

## Variables

* File Path
* File Contents
* Date/Time File Last Read
