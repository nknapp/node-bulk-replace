var quotemeta = require("quotemeta");

module.exports = function(str, regex, map) {
    if (arguments.length === 2) {
        map = regex;
        regex = new RegExp(Object.keys(map).map(quotemeta).join("|"), "ig");
    }

    return str.replace(regex, function(all) {
        if (all in map) {
            return map[all];
        }

        return all;
    });
};
