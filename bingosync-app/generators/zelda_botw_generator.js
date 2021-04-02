_bingoGenerator = require("./generators/generator_bases/srl_generator_v5.js");
bingoList = require("./generators/goal_lists/zelda_botw_english.js");

bingoGenerator = function(goals, opts) {
    opts.mode = "long";
    opts.path = "botw";
    return _bingoGenerator(goals, opts);
};