var bingoGenerator = require("./generators/generator_bases/srl_generator_v5.js");

var bingoList = [];
bingoList[1] = [
  { name: "6 Sub-Area Pagies", types:["subarea", "pagie"] },
  { name: "2 Health Extenders", types: ["extender"] },
  { name: "All Shipwreck Quills", types:["quill", "hub"] },
  { name: "Shipwreck Creek Pagies", types: ["hub", "pagie"] },
];
bingoList[2] = [
  { name: "3 Extenders", types: ["extender"] },
  { name: "2 Energy Extenders", types: ["extender"] },
  { name: "10 Hub Pagies", types:["hub","pagie"] },
  { name: "7 Tribal Pagies", types:["tribal","pagie"] },
];
bingoList[3] = [
  { name: "Defeat The Great Rampo", types: ["boss", "tribal"] },
  { name: "Tribal Bubble Pagie Intended", types:["tribal","pagie"] },
  { name: "2 Pirate Treasures", types: ["pirate"] },
  { name: "Save 5 Ghost Writers", types: ["ghost"] },
];
bingoList[4] = [
  { name: "Help Planker 2 Times", types: ["pagie"] },
  { name: "2 Playcoins", types: ["rextro"] },
  { name: "Blasto & Blastooie", types: ["hub", "tribal", "pagie"] },
  { name: "Glitter Kartos", types: ["kartos", "glitter"] },
];
bingoList[5] = [
  { name: "Help Clara 2 Times", types: ["pagie"] },
  { name: "Tribal Ghost Writers", types: ["ghost", "tribal"] },
  { name: "Rampo w/out Flight", types:["boss", "tribal", "challenge"] },
  { name: "Tribal Kartos", types: ["kartos", "tribal"] },
];
bingoList[6] = [
  { name: "Icy Nimble Race", types: ["tribal", "pagie"] },
  { name: "Quiz 2", types:["quiz"] },
  { name: "4 Extenders", types: ["extender"] },
  { name: "Toxic Pipe Pagie, No Sonar Sheild/Reptile Rush", types: ["pagie", "hub", "challenge"] },
];
bingoList[7] = [
  { name: "Quiz 1", types:["quiz"] },
  { name: "3 Green Ghost Writers", types: ["ghost"] },
  { name: "200 Quills", types: ["quill"] },
  { name: "Learn 10 Trowzer moves", types: ["trowzer"] },
];
bingoList[8] = [
  { name: "Kartos Karting Highscore", types: ["rextro", "tribal"] },
  { name: "2 Pagies from Unique Transformation", types: ["pagie", "transformation"] },
  { name: "Windtunnel Pagie, No Reptile Rush", types: ["pagie", "hub", "challenge"] },
  { name: "Freezing Room - Intended Way", types: ["pagie", "glitter", "challenge"] },
];
bingoList[9] = [
  { name: "3 Yellow Ghost Writers", types: ["ghost"] },
  { name: "Equip your first tonic in Cashino", types:["challenge"] },
  { name: "Cashino Kartos", types: ["kartos", "cashino"] },
  { name: "50 Quills in 3 Worlds", types: ["quill"] },
];
bingoList[10] = [
  { name: "Glaciators", types: ["rextro", "glitter", "subarea"] },
  { name: "2 Kartos Pagies", types: ["kartos"] },
  { name: "5 Extenders", types: ["extender"] },
  { name: "3 Pirate Treasures", types: ["pirate"] },
];
bingoList[11] = [
  { name: "Bee Bop", types: ["rextro", "moody"] },
  { name: "3 Blue Ghost Writers", types: ["ghost"] },
  { name: "30 Tokens from broken slot machines", types: ["pagie", "cashino", "transformation"] },
  { name: "Purchase Lizard Leap First", types: ["trowzer", "glitter", "challenge"] },
];
bingoList[12] = [
  { name: "Thorns Intended Way", types: ["transformation", "moody", "pagie"] },
  { name: "Collect 2 Pagies from the Knights of Hamalot", types: ["pagie"] },
  { name: "10 Glitter Pagies", types:["glitter","pagie"] },
  { name: "Gun-tlet Highscore", types: ["rextro"] },
];
bingoList[13] = [
  { name: "Defeat Brrreeze Blok", types: ["boss", "glitter", "subarea"] },
  { name: "10 Sub-Area Pagies", types:["subarea", "pagie"] },
  { name: "Blag Flag Highscore", types: ["rextro"] },
  { name: "Jobstacle Highscore", types: ["rextro"] },
];
bingoList[14] = [
  { name: "Learn all Glitter Moves", types: ["trowzer", "glitter"] },
  { name: "8 Moody Pagies", types:["moody","pagie"] },
  { name: "8 Cashino Pagies", types:["cashino","pagie"] },
  { name: "6 Transformation Pagies", types: ["pagie", "transformation"] },
];
bingoList[15] = [
  { name: "3 Red Ghost Writers", types: ["ghost"] },
  { name: "Save 10 Ghost Writers", types: ["ghost"] },
  { name: "15 Hub Pagies", types:["hub","pagies"] },
  { name: "Defeat 2 Bosses", types:["boss"] },
];
bingoList[16] = [
  { name: "Moody Kartos", types: ["kartos", "moody"] },
  { name: "Help 2 Trolleys", types: ["pagie", "moody"] },
  { name: "4 Pirate Treasures", types: ["pirate"] },
  { name: "3 Kartos Pagies", types: ["kartos"] },
];
bingoList[17] = [
  { name: "2 Pink Ghost Writers", types: ["ghost"] },
  { name: "4 Playcoins", types: ["rextro"] },
  { name: "3 Pagies from Unique Transformation", types: ["pagie", "transformation"] },
  { name: "Brrreeze Intended Way", types:["boss", "glitter", "challenge", "subarea"] },
];
bingoList[18] = [
  { name: "Collect All Hub Pagies", types: ["pagie", "hub"] },
  { name: "Glitter Ghost Writers", types: ["ghost", "glitter"] },
  { name: "Learn 12 Trowzer moves", types: ["trowzer"] },
  { name: "100 Quills in 2 Worlds", types: [ "quill"] },
];
bingoList[19] = [
  { name: "Learn all Moody Moves", types: ["trowzer", "moody"] },
  { name: "30 Quills in 4 Worlds", types: ["quill"] },
  { name: "8 Extenders", types: ["extender"] },
  { name: "Defeat Trev the Tenteyecle", types: ["boss", "moody"] },
];
bingoList[20] = [
  { name: "14 Sub-Area Pagies", types:["subarea", "pagie"] },
  { name: "Defeat I.N.E.P.T.", types: ["boss", "cashino", "kartos"] },
  { name: "300 Quills", types: ["collectible"] },
  { name: "Moodymaze Health Extender", types:["extender", "moody"] },
];
bingoList[21] = [
  { name: "All Mollycools", types: ["galleon", "transformation"] },
  { name: "Save 15 Ghost Writers", types: ["ghost"] },
  { name: "Moody Ghost Writers", types: ["ghost", "moody"] },
  { name: "Hurdle Hijinx", types: ["rextro", "cashino"] },
];
bingoList[22] = [
  { name: "15 Quills in 5 Worlds", types: ["quill", "galleon"] },
  { name: "Cashino Ghost Writers", types: ["ghost", "cashino"] },
  { name: "Pirate Ship Pagie", types: ["galleon", "transformation"] },
  { name: "3 Galleon Ghosts", types: ["ghost", "galleon"] },
];
bingoList[23] = [
  { name: "Galleon Energy Extender", types: ["extender", "galleon"] },
  { name: "4 Pink Ghost Writers", types: ["ghost"] },
  { name: "Defeat 3 Bosses", types:["boss"] },
  { name: "Complete 2 Pachinko Machines", types:["challenge", "cashino"] },
];
bingoList[24] = [
  { name: "Quiz 3 then 2 then 1", types:["quiz", "challenge"] },
  { name: "150 Quills in 1 World", types: ["quill"] },
  { name: "4 Pagies from Unique Transformation", types: ["pagie", "transformation"] },
  { name: "100 Tokens at Once", types:["challenge", "cashino", "pagie"] },
];
bingoList[25] = [
  { name: "400 Quills", types: ["collectible"] },
  { name: "18 Sub-Area Pagies", types:["subarea", "pagie"] },
  { name: "Defeat Capital B", types:["boss", "quiz"] },
  { name: "Open Moody First", types:["tome", "challenge", "moody"] },
];
