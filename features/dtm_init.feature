@watch
Feature: DTM check

  As an analytics developer
  I want to check for _satellite object on uusi.op.fi
  So I can test whether DTM is installed properly and it uses proper AMC library versions

  Scenario: Check for DTM 
    When I visit "https://uusi.op.fi"
    Then DTM object is available
	And Adobe Analytics library version is "1.9.9"
	And Adobe Target library version is "2.1.2"
	And Adobe Visitor ID service library version is "4.2.1"