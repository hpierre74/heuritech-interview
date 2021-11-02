Feature: Home page
  I want to make sure the home page works as expected

  Background:
    Given I use the mocked api
    And I am on the "home" page
    When I wait for the api response "baseTrends"
    Then I should see a "trends list"
    And I should see 20 trend tiles
    And Trend item 1 should contain "Other Leather Sandals"

  Scenario: Moodboard
    When I click on trend item 1
    And I wait for the api response "moodboard"

    Then I should see a "moodboard"
    And "moodboard title" should contain "Other Leather Sandals"
    And I should count 30 "images" in "moodboard masonry"

    When I click outside
    Then I should not see a "moodboard"

    When I click on trend item 2
    Then I should see a "moodboard"
    And "moodboard title" should contain "Yellow Shoes"
    And I should count 30 "images" in "moodboard masonry"

  Scenario: Sorting and unsorting
    When I select "select item growth" in "sort by select"
    And I wait for the api response "trendsByGrowth"
    Then Trends should be sorted by growth
    And Trend item 1 should contain "Knife Pleats Skirts"
    When I select "select item idle" in "sort by select"
    And I wait for the api response "baseTrends"
    Then Trend item 1 should contain "Other Leather Sandals"
    When I click on "select favorites"
    And I wait for the api response "favoriteTrends"
    And I select "select item growth" in "sort by select"
    And I wait for the api response "favoritesByGrowth"
    Then Trends should be sorted by growth







