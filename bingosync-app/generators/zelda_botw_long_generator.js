_bingoGenerator = require("./generators/generator_bases/srl_generator_v5.js");
bingoList = require("./generators/zelda_botw_goals.js");

bingoGenerator = function(goals, opts) {
    opts.mode = "long";
    return _bingoGenerator(goals, opts);
};