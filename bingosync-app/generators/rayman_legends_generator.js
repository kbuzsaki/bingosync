var bingoGenerator = require("./generators/generator_bases/srl_generator_v5.js");

var bingoList = [];
bingoList[1] = [
  { name: "1-B - All Tensies", types: [] },
  { name: "2-B - 100 Lums", types: [] },
  { name: "World 3 - Music Level", types: [] },
  { name: "1-4i - All Tensies", types: [] },
];
bingoList[2] = [
  { name: "3-B - All Tensies", types: [] },
  { name: "1-B 100 Lums", types: [] },
  { name: "World 1 - Music Level", types: [] },
  { name: "1-5i - All Tensies", types: [] },
];
bingoList[3] = [
  { name: "2-B - All Tensies", types: [] },
  { name: "3-B - 100 Lums", types: [] },
  { name: "Unlock Barbara", types: [] },
  { name: "1-6i - All Tensies", types: [] },
];
bingoList[4] = [
  { name: "Open 5 Lucky Tickets", types: [] },
  { name: "4-B - All Tensies", types: [] },
  { name: "5-B - 150 Lums", types: [] },
  { name: "2-3i - Save All Tensies", types: [] },
];
bingoList[5] = [
  { name: "Use Ten 2 Player Strats", types: ["2P"] },
  { name: "5-B - All Tensies", types: [] },
  { name: "4-B - 100 Lums", types: [] },
  { name: "2-4i - All Tensies", types: [] },
];
bingoList[6] = [
  { name: "Use Five 2 Player Strats", types: ["2P"] },
  { name: "2-2 - All Tensies", types: [] },
  { name: "1-4 - 450 Lums", types: [] },
  { name: "2-5i - All Tensies", types: [] },
];
bingoList[7] = [
  { name: "Unlock Elysia", types: [] },
  { name: "1-4 - All Tensies", types: [] },
  { name: "2-2 - 450 Lums", types: [] },
  { name: "3-3i - All Tensies", types: [] },
];
bingoList[8] = [
  { name: "Unlock Aurora", types: [] },
  { name: "5-3 - All Tensies", types: [] },
  { name: "3-5 - 100 Lums", types: [] },
  { name: "3-4i - All Tensies", types: [] },
];
bingoList[9] = [
  { name: "Unlock Estelia", types: [] },
  { name: "4-4 - 450 Lums", types: [] },
  { name: "4-6 - 100 Lums", types: [] },
  { name: "5-2 - 450 Lums", types: [] },
  { name: "5-5 - 450 Lums", types: [] },
  { name: "Open 10 Lucky Tickets", types: [] },
];
bingoList[10] = [
  { name: "World 2 - Music Level", types: [] },
  { name: "1-6 - All Tensies", types: [] },
  { name: "1-2 - 450 Lums", types: [] },
  { name: "1-3i - All Tensies", types: [] },
];
bingoList[11] = [
  { name: "World 1 - Music Level (8-Bit)", types: [] },
  { name: "2-3 - All Tensies", types: [] },
  { name: "2-4 - 450 Lums", types: [] },
  { name: "2-1i - All Tensies", types: [] },
];
bingoList[12] = [
  { name: "World 3 - Music Lvel (8-Bit)", types: [] },
  { name: "3-2 - All Tensies", types: [] },
  { name: "2-3 - 450 Lums", types: [] },
  { name: "2-2i - All Tensies", types: [] },
];
bingoList[13] = [
  { name: "Unlock Twila", types: [] },
  { name: "3-3 - All Tensies", types: [] },
  { name: "3-2i - All Tensies", types: [] },
];
bingoList[14] = [
  { name: "Unlock Selena", types: [] },
  { name: "3-4 - All Tensies", types: [] },
  { name: "3-1 - 450 Lums", types: [] },
  { name: "1-1 - All Tensies", types: [] },
  { name: "4-1i - All Tensies", types: [] },
];
bingoList[15] = [
  { name: "Unlock Ursula", types: [] },
  { name: "3-4 - 450 Lums", types: [] },
  { name: "4-2 - All Tensies", types: [] },
  { name: "1-2 - All Tensies", types: [] },
  { name: "1-1 - 450 Lums", types: [] },
  { name: "3-1i - All Tensies", types: [] },
  { name: "4-2i - All Tensies", types: [] },
];
bingoList[16] = [
  { name: "Use One 2 Player Strat", types: ["2P"] },
  { name: "4-4 - All Tensies", types: [] },
  { name: "4-1 - 450 Lums", types: [] },
  { name: "World 4 - Music Level", types: [] },
  { name: "1-3 - All Tensies", types: [] },
  { name: "1-3 - 450 Lums", types: [] },
  { name: "3-5i - All Tensies", types: [] },
  { name: "4-3i - All Tensies", types: [] },
];
bingoList[17] = [
  { name: "Open 15 Lucky Tickets", types: [] },
  { name: "5-1 - All Tensies", types: [] },
  { name: "4-3 - 450 Lums", types: [] },
  { name: "Unlock Emma", types: [] },
  { name: "1-5 - All Tensies", types: [] },
  { name: "1-5 - 600 Lums", types: [] },
  { name: "4-4i - All Tensies", types: [] },
];
bingoList[18] = [
  { name: "Use Three 2 Player Strats", types: ["2P"] },
  { name: "5-2 - All Tensies", types: [] },
  { name: "4-5 - 600 Lums", types: [] },
  { name: "No 2 Player Strats", types: ["2P"] },
  { name: "2-1 - All Tensies", types: [] },
  { name: "1-6 - 600 Lums", types: [] },
  { name: "4-5i - All Tensies", types: [] },
];
bingoList[19] = [
  { name: "1-1i - All Tensies", types: [] },
  { name: "5-4 - 450 Lums", types: [] },
  { name: "World 5 - Music Level", types: [] },
  { name: "2-4 - All Tensies", types: [] },
  { name: "2-5 - 450 Lums", types: [] },
  { name: "4-6i - All Tensies", types: [] },
];
bingoList[20] = [
  { name: "1-2i - All Tensies", types: [] },
  { name: "5-4 - All Tensies", types: [] },
  { name: "5-6 - 150 Lums", types: [] },
  { name: "Unlock Olympia", types: [] },
  { name: "2-5 - All Tensies", types: [] },
  { name: "2-1 - 450 Lums", types: [] },
  { name: "5-1i - All Tensies", types: [] },
];
bingoList[21] = [
  { name: "3-5 - All Tensies", types: [] },
  { name: "5-4 - All Tensies", types: [] },
  { name: "World 2 - Music Level (8-Bit)", types: [] },
  { name: "3-2 - 450 Lums", types: [] },
  { name: "5-2i - All Tensies", types: [] },
];
bingoList[22] = [
  { name: "4-1 - All Tensies", types: [] },
  { name: "4-3 - All Tensies", types: [] },
  { name: "Unlock Sibylla", types: [] },
  { name: "3-3 - 600 Lums", types: [] },
  { name: "5-3i - All Tensies", types: [] },
];
bingoList[23] = [
  { name: "4-5 - All Tensies", types: [] },
  { name: "World 4 - Music Level (8-Bit)", types: [] },
  { name: "4-2 - 450 Lums", types: [] },
  { name: "5-4i - All Tensies", types: [] },
];
bingoList[24] = [
  { name: "Open 20 Lucky Tickets", types: [] },
  { name: "3-1 - All Tensies", types: [] },
  { name: "4-6 - All Tensies", types: [] },
  { name: "5-1 - 600 Lums", types: [] },
  { name: "5-5i - All Tensies", types: [] },
];
bingoList[25] = [
  { name: "World 5 - Music Levl (8-Bit)", types: [] },
  { name: "5-5 - All Tensies", types: [] },
  { name: "5-3 - 600 Lums", types: [] },
  { name: "5-6i - All Tensies", types: [] },
];
