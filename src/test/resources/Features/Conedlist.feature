@tag
Feature: Provide details using single dimensional list
  I want to use this template for my feature file

  @tag1
  Scenario: Providing data using list
    Given user should launch browser
    And  User click the add customer link
    When User provide valid details1 
      | kranti | kiran | kranthi@gmail.com | andhra | 9885398386 |
    Then To verify the customer id is Displayed
 