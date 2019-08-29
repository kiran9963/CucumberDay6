Feature: Add customer
  I want to use this template for my feature file

  Scenario: Generate a customer Id
    Given user should launch browser
    And User click the add customer link
    When USer Should provide the Data
      | kranti | kiran | kranthi@gmail.com | andhra     | 9885398386 |
      | kiran  | kk    | kkk@gmail.com     | vijayawada |  424242424 |
    Then To verify the customer id is Displayed
