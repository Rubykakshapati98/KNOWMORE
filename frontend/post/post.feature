Feature: Is post successful?
  Is Post process successfully completed
 Scenario: Post a applicant on Gyangun
    Given When I go to post Page 
    When I input my email 
    When I input my password
    When I input login
    When I input profile 
    When I input add
    When I search my name
    When I search my price
    When I search my category
    When I press content
    When I add content
    When I press update
    When I press yes
    Then successfull message is shown