var _bingoGenerator = require("./generators/generator_bases/srl_generator_v8_subtypes.js");
var bingoList = require("./generators/goal_lists/banjo_tooie.js");

function bingoGenerator(bingoList, opts) {
    opts.mode = "short";
    return _bingoGenerator(bingoList, opts);
}
