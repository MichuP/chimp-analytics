var _sat;

module.exports = {
    // constructor kind of thing to initiate the module
    // how to use it when executing return _satellite gives stack overflow?
    init: function(_satellite) {
        _sat = _satellite;
    },

    getNumOfExecutedRules: function(Logger) {
        var numFired = 0;
        for (var i = 0, len = Logger.length; i < len; i++) {
            if (Logger[i][1].indexOf('fired') >= 0) {
                numFired++;
            }
        }
        return numFired;
    }
};