var dtm = require("./dtm_api.js");

module.exports = function() {

    this.When(/^I visit "([^"]*)"$/, function(url) {
        browser.url(url);
    });

    this.Then(/^DTM object is available$/, function() {
		var bdate = browser.execute(function() {
			// when trying to pass just _satellite I get stack exceeded error - the object is too big somehow?
			return window._satellite.buildDate;
		});
		browser.timeoutsImplicitWait(1000);
		console.log(bdate['value']);
    });
	
	this.Then(/^the number of page load rules is "([^"]*)"$/, function(num) {
        var rules = browser.execute(function() {
			return window._satellite.pageLoadRules.length;
		});
		browser.timeoutsImplicitWait(1000);
		// Jasmine assertions can be found here https://jasmine.github.io/2.3/introduction.html#section-Expectations
		expect(num).toEqual(rules['value'].toString());	
    });
	
	this.Then(/^the number of fired rules is "([^"]*)"$/, function(num) {
		var log = browser.execute(function() {
			// for some reason all functions in the objects are replaced with {}
			return window._satellite.Logger.messages;
		});
		browser.timeoutsImplicitWait(1000);
		var rules = dtm.getNumOfExecutedRules(log['value']);
		expect(num).toEqual(rules.toString());	
    });	
}