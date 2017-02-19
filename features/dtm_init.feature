Feature: DTM check

  As an analytics developer
  I want to check for _satellite object on uusi.op.fi
  So I can test whether DTM is installed properly and it uses proper AMC library versions

  Scenario: Check for DTM 
    When I visit "https://uusi.op.fi"
    Then DTM object is available
	And the number of page load rules is "3"
	And Adobe Analytics is available and initialized
	And Adobe Target is available and initialized
	And Adobe Visitor ID service is available
	