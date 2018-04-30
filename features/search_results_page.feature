Feature: Perform a search

@searchPage
Scenario: User is able to perform a search
Given I am on the TC home page
And Search Bar should be displayed
When Click on search button
Then Your search Bar should be displayed
And Page title is equal to Thomas Cook