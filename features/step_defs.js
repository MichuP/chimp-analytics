var dtm = require('./dtm_api.js');
var utils = require('./utils.js');

module.exports = function() {

    this.When(/^I visit "([^"]*)"$/, function(url) {
        browser.url(url);
    });
	
	this.Then(/^the number of fired rules is "([^"]*)"$/, function(num) {
		var log = browser.execute(function() {
			// for some reason all functions in the objects are replaced with {}
			return window._satellite.Logger.messages;
		});
		browser.timeoutsImplicitWait(1000);
		var rules = dtm.getRulesExecutedOnLoad(log['value']);
		expect(num).toEqual(rules.length.toString());	
    });	
	
	this.Then(/^the data element value of "([^"]*)" is "([^"]*)"$/, function(el, val) {
		var de = browser.execute(function(name) {
			return window._satellite.getVar(name);
		}, el);
		browser.timeoutsImplicitWait(1000);
		expect(de['value']).not.toBeUndefined();
		expect(val).toEqual(de['value']);	
    });	
	
	this.Then(/^the actual value of "([^"]*)" sent to Analytics is "([^"]*)"$/, function(variable, val) {
		var funcArgs = utils.filterScil;
		var vars = browser.execute(function(func) {
			var filterScil = new Function(func['arg1'], func['body'])
			return filterScil(window.s_c_il[1]);
		}, funcArgs);
		expect(val).toEqual(vars['value'][variable]);
    });	
}