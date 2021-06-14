"""
Feature: Manage remote devices
    Scenario: Operator schedules command on device for a specific time (crontab)

    Given I am an authenticated and authorized operator
        And I have a remote device

    When I schedule an operation

    Then it should perform that operation at the specific time
        And notify the operator if the operation fails for any reason
"""


def test_schedule_device_operation():
    raise NotImplementedError()


"""
Feature: Manage remote devices
    Scenario: Operator wants to see all scheduled operations for a device

    Given I am an authenticated and authorized operator
        And I have a remote device

    When I ask for a list of all scheduled operations for a device

    Then I should receive the next upcoming operation to be applied along with
    the time until it is applied
        And a list of crontab schedules
"""

# TODO: pensar em o que acontecer no caso de falta de conectividade entre servidor e sensor
# cada bancada tem 2 ESP-8266, um que liga/desliga e monitora energia, e a outra que interage com a GPIO da FPGA

def test_show_device_schedule():
    raise NotImplementedError()


"""
Feature: Manage remote devices
    Scenario: Operator wants to see a list of all devices and their status

    Given I am an authenticated and authorized operator

    When I ask for a list of all devices

    Then I should receiver a list of all devices along their current status
"""
# TODO: Logica de autorizacao de aluno para um determinado slot de tempo


def test_show_device_schedule():
    raise NotImplementedError()
