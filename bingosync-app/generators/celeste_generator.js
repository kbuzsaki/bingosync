bingoGenerator = require("./generators/generator_bases/srl_generator_v5.js");

var bingoList = [];
bingoList[1] = [
  { name: "skip door skip ", types: ["door skip"] },
  { name: "4a no autoscroller skip", types: ["4a"] },
  { name: "3a no spike jump", types: ["3a"] },
  { name: "4a no spike jump", types: ["4a"] },
  { name: "6a no lake skip", types: ["6a"] },
];
bingoList[2] = [
  { name: "1a talk to theo", types: ["1a"] },
  { name: "2a talk to theo", types: ["2a"] },
  { name: "3a talk to theo (elevator)", types: ["3a"] },
  { name: "5a 2nd room theo cutscene", types: ["5a"] },
  { name: "6a towerfall room", types: ["6a"] },
];
bingoList[3] = [
  { name: "3a read diary (last key room)", types: ["3a"] },
  { name: "5a theo search cutscene", types: ["5a"] },
  { name: "3a read notes (towel room)", types: ["3a"] },
  { name: "5a seeker berry", types: ["5a","1 berry"] },
  { name: "City winged berry", types: ["1a","1 berry"] },
];
bingoList[4] = [
  { name: "2a awake berry", types: ["2a","1 berry"] },
  { name: "5a theo berry", types: ["5a","1 berry"] },
  { name: "7a 500m gem", types: ["7a","gem"] },
  { name: "5a stun 10 different seekers", types: ["5a","task"] },
  { name: "4a jump on 4 snowballs in different rooms", types: ["4a","task"] },
];
bingoList[5] = [
  { name: "5a winged berry", types: ["5a","1 berry"] },
  { name: "7a 0m gem", types: ["7a","gem"] },
  { name: "2a tape", types: ["2a","old side b-side"] },
  { name: "3a tape", types: ["3a","resort b-side"] },
  { name: "6a tape", types: ["6a","reflect b-side"] },
];
bingoList[6] = [
  { name: "1a tape", types: ["1a","city b-side"] },
  { name: "4a winged berry", types: ["4a","1 berry"] },
  { name: "3a heart", types: ["3a"] },
  { name: "5a heart", types: ["5a"] },
  { name: "7a 1000m gem", types: ["7a","gem"] },
  { name: "7a winged berry", types: ["7a","1 berry"] },
];
bingoList[7] = [
  { name: "3a winged berry", types: ["3a","1 berry"] },
  { name: "2a heart", types: ["2a"] },
  { name: "7a no autoscroller skip (2000m)", types: ["7a"] },
  { name: "4a secret way (before cliff)", types: ["4a"] },
  { name: "7a 2000m gem", types: ["7a","gem"] },
  { name: "1a dashless (5 rooms)", types: ["1a"] },
];
bingoList[8] = [
  { name: "3a chest first, towel last", types: ["resort path"] },
  { name: "3a towel first, book last", types: ["resort path"] },
  { name: "3a towel first, chest last", types: ["resort path"] },
  { name: "3a book first, towel last", types: ["resort path"] },
  { name: "3a book first, chest last", types: ["resort path"] },
  { name: "3a chest first, book last", types: ["resort path"] },
];
bingoList[9] = [
  { name: "1a heart", types: ["1a"] },
  { name: "4a heart", types: ["4a"] },
  { name: "5a tape", types: ["5a","mirror b-side"] },
  { name: "6a heart", types: ["6a"] },
  { name: "7a tape", types: ["7a","summit b-side"] },
];
bingoList[10] = [
  { name: "4a tape", types: ["4a","ridge b-side"] },
  { name: "2a last badeline room without shortcuts", types: ["2a"] },
  { name: "7a 1500m gem", types: ["7a","gem"] },
  { name: "5a not skipping 2nd key", types: ["5a"] },
  { name: "7a right way (1000m)", types: ["7a"] },
];
bingoList[11] = [
  { name: "6a only top route", types: ["6a path"] },
  { name: "6a only bottom route", types: [" 6a path"] },
  { name: "7a 2500m gem", types: ["7a","gem"] },
  { name: "7a skip 4 flags (3000m)", types: ["7a","task"] },
];
bingoList[12] = [
  { name: "5a kill a seeker", types: ["5a","task"] },
  { name: "6a no dev skip", types: ["6a"] },
  { name: "6a hitting one kevinblock on 4 sides", types: ["6a","task"] },
  { name: "7a secret way (2500m)", types: ["7a"] },
  { name: "7a do door skip", types: ["door skip"] },
];
bingoList[13] = [
  { name: "7a 3 gems", types: ["7a","gem"] },
  { name: "4a watch final cutscene", types: ["4a"] },
  { name: "5a not doing search skip", types: ["5a","task"] },
  { name: "3a all Oshiro berries (3)", types: ["3a berries"] },
  { name: "7a all 0m berries (4)", types: ["7a berries"] },
];
bingoList[14] = [
  { name: "4a all cliff berries [last] (5)", types: ["4a berries"] },
  { name: "1a all chasm berries [last] (5)", types: ["1a berries"] },
  { name: "3a all elevator berries (4)", types: ["3a berries"] },
  { name: "5a all search berries (6)", types: ["5a berries"] },
  { name: "7a all 500m berries (6)", types: ["7a berries"] },
];
bingoList[15] = [
  { name: "10 berries", types: ["berries"] },
  { name: "3a all huge mess berries (7)", types: ["3a berries"] },
  { name: "4a all old trail berries [3rd] (7)", types: ["4a berries"] },
  { name: "7a all 1000m berries (6)", types: ["7a berries"] },
  { name: "1a all start berries (6)", types: ["1a berries"] },
];
bingoList[16] = [
  { name: "1a all crossing berries [2nd] (9)", types: ["1a berries"] },
  { name: "2a all badeline berries (8)", types: ["2a berries"] },
  { name: "4a all start berries (8)", types: ["4a berries"] },
  { name: "7a all 3000m berries (8)", types: ["7a berries"] },
  { name: "7a 10 berries", types: ["7a berries"] },
];
bingoList[17] = [
  { name: "5a 10 berries", types: ["5a berries"] },
  { name: "find and play Pico-8 (3a)", types: ["3a","pico-8"] },
  { name: "7a all 1500m berries (8)", types: ["7a berries"] },
  { name: "7a all 2000m berries (8)", types: ["7a berries"] },
  { name: "2a all start berries (9)", types: ["2a berries"] },
];
bingoList[18] = [
  { name: "4a all shrine berries [2nd] (9)", types: ["4a berries"] },
  { name: "1a 10 berries", types: ["1a berries"] },
  { name: "2a 10 berries", types: ["2a berries"] },
  { name: "3a 10 berries", types: ["3a berries"] },
  { name: "7a all 2500m berries (8)", types: ["7a berries"] },
];
bingoList[19] = [
  { name: "20 berries", types: ["berries"] },
  { name: "beat core (need 4 hearts)", types: ["core"] },
  { name: "4a 10 berries", types: ["4a berries"] },
  { name: "3a all start berries (11)", types: ["3a berries"] },
  { name: "5a all depths berries [2nd] (11)", types: ["5a berries"] },
];
bingoList[20] = [
  { name: "30 berries", types: ["berries"] },
  { name: "5a all start berries (12)", types: ["5a berries"] },
  { name: "2a all berries (18)", types: ["2a berries"] },
  { name: "core all berries (5)", types: ["core"] },
];
bingoList[21] = [
  { name: "50 berries", types: ["berries"] },
  { name: "7a 20 berries", types: ["7a berries"] },
  { name: "5a 20 berries", types: ["5a berries"] },
  { name: "old side b-side", types: ["old side b-side"] },
  { name: "7a heart", types: ["7a"] },
];
bingoList[22] = [
  { name: "70 berries", types: ["berries"] },
  { name: "4a 20 berries", types: ["4a berries"] },
  { name: "3a all berries (25)", types: ["3a berries"] },
  { name: "1a all berries (20)", types: ["1a berries"] },
  { name: "Pico 8 all berries (18)", types: ["pico-8"] },
];
bingoList[23] = [
  { name: "100 berries", types: ["berries"] },
  { name: "4a all berries (29)", types: ["4a berries"] },
  { name: "5a all berries (31)", types: ["5a berries"] },
  { name: "7a 30 berries", types: ["7a berries"] },
  { name: "full dashless city", types: ["1a"] },
];
bingoList[24] = [
  { name: "120 berries", types: ["berries"] },
  { name: "city b-side", types: ["city b-side"] },
  { name: "ridge b-side", types: ["ridge b-side"] },
  { name: "7a all berries (47)", types: ["7a berries"] },
  { name: "mirror b-side", types: ["mirror b-side"] },
];
bingoList[25] = [
  { name: "8 hearts", types: [] },
  { name: "150 berries", types: ["berries"] },
  { name: "summit b-side", types: ["summit b-side"] },
  { name: "resort b-side", types: ["resort b-side"] },
  { name: "reflection b-side", types: ["reflect b-side"] },
];
