@watch
Feature: uusi frontpage validation

  As an analyst
  I want to visit uusi.op.fi
  So I can check whether analytics tracking is according to specs

  Scenario: Check for DTM 
    When I visit "https://uusi.op.fi"
    Then DTM object is available
	And the actual value of "eVar6" sent to Analytics is "henkiloasiakkaat:etusivu"