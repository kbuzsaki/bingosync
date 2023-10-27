_bingoGenerator = require("./generators/generator_bases/srl_generator_v5.js");
bingoList = require("./generators/goal_lists/zelda_botw_german.js");

bingoGenerator = function(goals, opts) {
    opts.mode = "short";
    return _bingoGenerator(goals, opts);
};
