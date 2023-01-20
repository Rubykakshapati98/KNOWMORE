Feature: Is register successful?
  Is Registration process successfully completed



 Scenario: Register a applicant on Crowdly
    Given When I go to Registration Page
    When I enter my name
    When I enter my email
    When I enter my password
    When I enter my re-password
    When I press register
    Then Alert success message is shown

  