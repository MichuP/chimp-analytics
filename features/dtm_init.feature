@watch
Feature: DTM check

  As a visitor
  I want to check for _satellite object on uusi.op.fi
  So I can check how many page load rules are there

  Scenario: Check for DTM 
    When I visit "https://uusi.op.fi"
    Then DTM object is available
	And the number of page load rules is "3"
	And the number of fired rules is "1"
	And the data element value of "Page Name" is "henkiloasiakkaat:etusivu"