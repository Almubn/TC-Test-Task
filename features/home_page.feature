Feature: Check home page

  @searchPage
  Scenario: User can navigate to home page
    Given I am on the TC home page
    Then Search Bar should be displayed
    And Page title is equal to Thomas Cook | Package Holidays, Hotels and Flights, Cheap holidays
