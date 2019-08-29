Feature: Add customer
  I want to use this template for my feature file

  Scenario: Generate a customer Id
    Given user should launch browser
    And User click the add customer link
    When User provide valid details customer
      | fname   | kiran            |
      | lname   | kranti           |
      | gmail   | kranti@gmail.com |
      | Address | vijayawda        |
      | mob     |       8608578638 |
    Then To verify the customer id is Displayed
