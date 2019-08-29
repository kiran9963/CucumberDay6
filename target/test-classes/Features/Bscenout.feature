@tag
Feature: Fill the form
  I want to use this template for my feature file

  @tag1
  Scenario Outline: customer details
    Given user should launch browser
    And User click the add customer link
    When User provide the details in form "<fname>","<lname>","<email>","<Address>","<Mob>"
    Then To verify the customer id is Displayed

    Examples: 
      | fname  | lname  | email             | Address   | Mob    |
      | kranti | kiran  | kranti@gmail.com  | ANDHIRA   | 143014 |
      | kiran  | kranti | kranthi@gmail.com | Chennai   |  88888 |
      | kk     | tk     | kktk@gmail.com    | Karnataka |   7777 |
