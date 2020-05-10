var _bingoGenerator = require("./generators/generator_bases/srl_generator_v8_subtypes.js");
var bingoList = require("./generators/goal_lists/banjo_tooie.js");

bingoGenerator = function(bingoList, opts) {
    opts.mode = "long";
    return _bingoGenerator(bingoList, opts);
};
