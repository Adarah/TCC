"""
Feature: Recommend optimal windows to turn on/off devices to operator
    Scenario: Operator wants a report of current energy consumption for a group
    of devices

    Given I am an authenticated and authorized operator
        And I know the id of a device

    When I ask for a report of the device's energy consumption along a
    specified time window


    Then it should return me a breakdown of energy usage
"""


def test_generate_energy_consumption_report():
    raise NotImplementedError()


"""
Feature: Recommend optimal windows to turn on/off devices to operator
    Scenario: Operator wants a report of the device's usage statistics for a group
    of devices

    Given I am an authenticated and authorized operator
        And I know the ids of a group of devices

    When I ask for a report of the device's usage along a specified time window

    Then it should return me a breakdown of the device's usage time
"""


def test_generate_device_usage_report():
    raise NotImplementedError()


"""
Feature: Recommend optimal windows to turn on/off devices to operator
    Scenario: Operator wants to know the best times to turn on/off a group of
    devices to save energy

    Given I am an authenticated and authorized user
        And I know the id of a device

    When I ask for a recommendation of when to turn on/off the device

    Then it should return me a schedule suggestion, and optionally apply that
    suggestion for future use
"""


def test_recommend_schedule():
    raise NotImplementedError()


"""
Feature: Report user's usage statistics
    Scenario: Operator wants a report of a user's usage statistics 

    Given I am an authenticated and authorized operator
        And I know the id of a user

    When I ask for a report of the user's usage along a specified time window

    Then it should return me a breakdown of general usage time for the user
        And 
"""


def test_generate_user_usage_report():
    raise NotImplementedError()


