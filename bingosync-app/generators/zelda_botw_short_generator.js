_bingoGenerator = require("./generators/generator_bases/srl_generator_v5.js");
bingoList = require("./generators/zelda_botw_goals.js");

bingoGenerator = function(goals, opts) {
    opts.mode = "short";
    return _bingoGenerator(goals, opts);
};