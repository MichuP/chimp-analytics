var dtm = require('./dtm_api.js');
var utils = require('./utils.js');

module.exports = function() {

	this.Then(/^DTM object is available$/, function() {
		var bdate = browser.execute(function() {
			// when trying to pass just _satellite I get stack exceeded error - the object is too big somehow?
			return window._satellite.buildDate;
		});
		browser.timeoutsImplicitWait(1000);
		// Jasmine assertions can be found here https://jasmine.github.io/2.3/introduction.html#section-Expectations
		expect(bdate['value']).not.toBeUndefined();
		console.log('Last build date: ' +bdate['value']);
    });
	
	this.Then(/^the number of page load rules is "([^"]*)"$/, function(num) {
        var rules = browser.execute(function() {
			return window._satellite.pageLoadRules.length;
		});
		browser.timeoutsImplicitWait(1000);
		expect(num).toEqual(rules['value'].toString());	
    });
	
	this.Then(/^the number of event based rules is "([^"]*)"$/, function(num) {
        var rules = browser.execute(function() {
			return window._satellite.rules.length;
		});
		browser.timeoutsImplicitWait(1000);
		expect(num).toEqual(rules['value'].toString());	
    });
	
	this.Then(/^the number of direct call rules is "([^"]*)"$/, function(num) {
        var rules = browser.execute(function() {
			return window._satellite.directCallRules.length;
		});
		browser.timeoutsImplicitWait(1000);
		expect(num).toEqual(rules['value'].toString());	
    });

	this.Then(/^Adobe Analytics is available and initialized$/, function() {
		var sc = browser.execute(function() {
			return window._satellite.getToolsByType('sc')[0];
		});
		browser.timeoutsImplicitWait(1000);
		expect(sc['value']).not.toBeUndefined();
		expect(sc['value']['initialized']).toBe(true);
    });
	
	this.Then(/^Adobe Target is available and initialized$/, function() {
		var tnt = browser.execute(function() {
			return window._satellite.getToolsByType('tnt')[0];
		});
		browser.timeoutsImplicitWait(1000);
		expect(tnt['value']).not.toBeUndefined();
		expect(tnt['value']['initialized']).toBe(true);
		
    });
	
	this.Then(/^Adobe Visitor ID service is available$/, function() {
		var vid = browser.execute(function() {
			return window._satellite.getToolsByType('visitor_id')[0]['name'];
		});
		browser.timeoutsImplicitWait(1000);
		expect(vid['value']).not.toBeUndefined();
    });
	
}