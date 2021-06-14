"""
Feature: Audit remote devices
    Scenario: User wants to know which operations were applied to which devices by whom

    Given I am an authenticated and authorized user
        And I have a remote device

    When I ask for an audit of the device

    Then it should return a list of operations applied to that device, along
    with timestamps, authors, and operation outcomes (success/fail).
"""


def test_audit_operations():
    raise NotImplementedError()
