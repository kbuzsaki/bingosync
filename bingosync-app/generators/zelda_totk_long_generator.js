_bingoGenerator = require("./generators/generator_bases/srl_generator_v5.js");
bingoList = require("./generators/goal_lists/zelda_totk_english.js");

bingoGenerator = function (goals, opts) {
  opts.mode = "long";
  return _bingoGenerator(goals, opts);
};