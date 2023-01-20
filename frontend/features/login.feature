Feature: Is login successful?
  Is Login process successfully completed



 Scenario: Register a applicant on Crowdly
    Given When I go to Login Page 
    When I search my email 
    When I hi my password
    When I press login
    Then successfull message is shown

  