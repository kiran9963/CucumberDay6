@tag
Feature: Provide details using two dimensional map
  I want to use this template for my feature file

  @tag1
  Scenario: Providing data using map
   Given user should launch browser
    And User click the add customer link
    When USer Should provide the info
      | fname  | lname  | email             | Address   | Mob   |
      | kranti | kiran  | kranti@gmail.com  | ANDHIRA   | 99999 |
      | kiran  | kranti | kranthi@gmail.com | Chennai   | 88888 |
      | kk     | tk     | kktk@gmail.com    | Karnataka |  7777 |

    Then To verify the customer id is Displayed