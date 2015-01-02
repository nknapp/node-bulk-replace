var assert = require("assert");
var bulkReplace = require("./bulk-replace");

var test = {
    "{": "}",
    "}": "{",
    "|": ";"
};

var str = "}{|";
var expected = "{};";

assert.equal(bulkReplace(str, test), expected);

console.log("OK");
