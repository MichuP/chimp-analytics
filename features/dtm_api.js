var _sat;

module.exports = {
    // constructor kind of thing to initiate the module
    // how to use it when executing return _satellite gives stack overflow?
    init: function(_satellite) {
        _sat = _satellite;
    },

	getRulesExecutedOnLoad: function(Logger) {
		var rules = [],
			s = '';
        for (var i = 0, len = Logger.length; i < len; i++) {
			if (Logger[i][1].indexOf('fired') >= 0) {
                s =  Logger[i][1].match(/"([^']+)"/)[1];
				rules.push(s);
            }
        }
		return rules;
	}
};