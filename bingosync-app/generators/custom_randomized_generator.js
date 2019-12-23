_bingoGenerator = require("./generators/generator_bases/simple_generator.js");

// dummy list for compatibility, this is ignored and the custom list
// from the options is used instead
bingoList = [];

bingoGenerator = function(ignoredBingoList, opts) {
    realBingoList = opts.custom_board;
    return _bingoGenerator(realBingoList, opts);
};
