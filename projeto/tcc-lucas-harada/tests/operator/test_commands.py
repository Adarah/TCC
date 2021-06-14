# from tcc_lucas_harada import __version__
#
#
# def test_version():
#     assert __version__ == '0.1.0'


"""
Feature: Control remote devices
    Scenario: Operator turns device on

    Given I am an authenticated and authorized operator
        And I have a remote device turned off

    When I ask it to turn on

    Then it should turn on
        And notify the operator whether the operation has succeeded
"""


def test_turn_on_device():
    raise NotImplementedError()


"""
Feature: Control remote devices
    Scenario: Operator turns device off

    Given I am an authenticated and authorized operator
        And I have a remote device turned on
        And the device is not in the middle of any operations

    When I ask it to turn off

    Then it should turn off in at most X minutes (X to be determined)
        And notify the operator the shutdown operation has started
        And optionally notify the current User (if any) that the operator attempted to shutdown the device
        And notify the operator whether the operation has succeeded when finished
"""


def test_turn_off_device():
    raise NotImplementedError()
