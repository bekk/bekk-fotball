Feature: Manage players
  In order to manage a football team
  As an administrator
  I want to be able to manage players
  
  
  Scenario: Register new player
    Given I am on the new player page
    When I fill in "Name" with "name 1"
    And I fill in "Suit number" with "suit_number 1"
    And I fill in "Suit name" with "suit_name 1"
    And I fill in "Is active" with "is_active 1"
    And I press "Create"
    Then I should see "name 1"
    And I should see "suit_number 1"
    And I should see "suit_name 1"
    And I should see "is_active 1"

  Scenario: Delete player
    Given the following players:
      |name|suit_number|suit_name|is_active|
      |name 1|suit_number 1|suit_name 1|is_active 1|
      |name 2|suit_number 2|suit_name 2|is_active 2|
      |name 3|suit_number 3|suit_name 3|is_active 3|
      |name 4|suit_number 4|suit_name 4|is_active 4|
    When I delete the 3rd player
    Then I should see the following players:
      |Name|Suit number|Suit name|Is active|
      |name 1|suit_number 1|suit_name 1|is_active 1|
      |name 2|suit_number 2|suit_name 2|is_active 2|
      |name 4|suit_number 4|suit_name 4|is_active 4|
