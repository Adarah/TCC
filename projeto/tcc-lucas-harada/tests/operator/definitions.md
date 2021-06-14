# Definitions
## Operator
Administrative user with elevated privileges to control devices
## User
Regular user who interacts with the device managed by the operator
## Device
Smart IoT plug that we can control remotely
### Device Status
An MQTT device can be in the following statuses:
* On
* Off
* Unknown (when the device can't be contacted)

In our system we would like to have these additional statuses:
* In use (device must be on, and currently being used by a user)
* Idle (device is on, but not being used)
* Shutting down