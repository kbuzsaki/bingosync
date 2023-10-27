var ootBingoGenerator = require("./generators/generator_bases/oot_generator.js");
var bingoList = require("./generators/goal_lists/ocarina_of_time.js");

function bingoGenerator(bingoList, opts) {
    opts.mode = "blackout";
    return ootBingoGenerator(bingoList, opts);
}
