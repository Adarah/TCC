"""
Feature: Get public data from devices
    Scenario: User wants a list of all devices available

    Given I am an (anonymous) user
        And I have some remote devices

    When I ask it to list them all

    Then it should return a list of all devices
        And their current status
"""


def test_list_all_devices():
    raise NotImplementedError()


"""
Feature: Get public data from devices
    Scenario: User wants data from a specific device

    Given I am an (anonymous) user
        And I know the id of a device 

    When I ask for the data from the device with the given id

    Then it should return me a timeseries of all datapoints that device ever had
"""


def test_read_device_data():
    raise NotImplementedError()
