bingoGenerator = require("./generators/generator_bases/srl_generator_v5.js");

var bingoList = [];

bingoList[1] = [
	{ name: "2 Health Extenders", types: ["extender"] },
	{ name: "Shipwreck Pagies", types: ["pagie"] },
	{ name: "Shipwreck Quills", types:["quill"] }
];
bingoList[2] = [
	{ name: "Kartos Karting", types: ["rextro", "tribal"] },
	{ name: "2 Rextro Pagies", types: ["rextro"] },
	{ name: "5 Ghost Writers", types: ["ghostwriter"] },
	{ name: "5 Hub Pagies", types:["pagie"] }
];
bingoList[3] = [
	{ name: "Tribal Kartos", types: ["kartos", "tribal"] },
	{ name: "2 Energy Extenders", types: ["extender"] },
	{ name: "50 Quills in 2 Worlds", types: ["quill"] },
	{ name: "Defeat Rampo", types: ["boss", "tribal"] }
];
bingoList[4] = [
	{ name: "Expand Glitter", types: ["tome", "glitter"] },
	{ name: "Expand 2 Tomes", types: ["tome"] },
	{ name: "Learn all Tribal Moves", types: ["trowzer","tribal"] },
	{ name: "Glitter Kartos", types: ["kartos", "glitter"] }
];
bingoList[5] = [
	{ name: "Help Clara 2 Times", types: ["pagie"] },
	{ name: "Learn 8 Trowzer moves", types: ["trowzer"] },
	{ name: "Tribal Ghost Writers", types: ["ghostwriter", "tribal"] }
];
bingoList[6] = [
	{ name: "Unlock Moody", types: ["tome", "moody"] },
	{ name: "Freezing Room - Intended Way", types: ["pagie", "glitter", "challenge"] },
	{ name: "Glaciators", types: ["rextro", "glitter"] }
];
bingoList[7] = [
	{ name: "Defeat Brrreeze", types: ["boss", "glitter"] },
	{ name: "Glitter Ghost Writers", types: ["ghostwriter", "glitter"] },
	{ name: "Help Planker 2 Times", types: ["pagie"] }
];
bingoList[8] = [
	{ name: "Learn all Glitter Moves", types: ["trowzer", "glitter"] },
	{ name: "10 Hub Pagies", types:["pagie"] },
	{ name: "2 Transformation Pagies", types: ["pagie"] },
	{ name: "Brrreeze - No Skip", types:["pagie", "glitter", "challenge"] }
];
bingoList[9] = [
	{ name: "Quiz 1", types:["challenge"] },
	{ name: "10 Sub-Area Pagies", types:["pagie"] },
	{ name: "Bee Bop", types: ["rextro", "moody"] },
	{ name: "Tribal Planker - Flightless", types: ["pagie", "tribal", "challenge"] }
];
bingoList[10] = [
	{ name: "Unlock Cashino", types: ["tome", "cashino"] },
	{ name: "Expand Moody ", types: ["tome", "moody"] },
	{ name: "Moody Kartos", types: ["kartos", "moody"] },
	{ name: "Defeat 2 Bosses", types:["boss"] }
];
bingoList[11] = [
	{ name: "4 Health Extenders", types: ["extender"] },
	{ name: "Defeat Trev", types: ["boss", "moody"] },
	{ name: "Hurdle Hijinx", types: ["rextro", "cashino"] },
	{ name: "Help 2 Trolleys", types: ["pagie", "moody"] }
];
bingoList[12] = [
	{ name: "2 Pirate Treasures", types: ["pirate"] },
	{ name: "100 Quills in 2 Worlds", types: [ "quill"] },
	{ name: "Race Nimble 2 Times", types: ["pagie"] },
	{ name: "200 Quills", types: ["quill"] }
];
bingoList[13] = [
	{ name: "Learn all Moody Moves", types: ["trowzer", "moody"] },
	{ name: "Moody Ghost Writers", types: ["ghostwriter", "moody"] },
	{ name: "Toxic Pipe Pagie, No Sonar Sheild/Reptile Rush", types: ["pagie", "challenge"] }
];
bingoList[14] = [
	{ name: "Cashino Kartos", types: ["kartos", "cashino"] },
	{ name: "Open Moody First", types:["challenge", "tome", "moody"] },
	{ name: "Unlock Galleon", types: ["tome", "galleon"] }
];
bingoList[15] = [
	{ name: "Expand 3 Tomes", types: ["tome"] },
	{ name: "Defeat I.N.E.P.T.", types: ["boss", "cashino", "kartos"] },
	{ name: "2 Kartos Pagies", types: ["kartos"] },
	{ name: "4 Transformation Pagies", types: ["pagie"] }
];
bingoList[16] = [
	{ name: "4 Energy Extenders", types: ["extender"] },
	{ name: "Save 10 Ghost Writers", types: ["ghostwriter"] },
	{ name: "Up 'n' Nova", types: ["rextro", "galleon"] }
];
bingoList[17] = [
	{ name: "15 Hub Pagies", types:["pagie"] },
	{ name: "Learn 12 Trowzer moves", types: ["trowzer"] },
	{ name: "30 Tokens from broken slot machines", types: ["pagie", "cashino"] },
	{ name: "Expand Cashino", types: ["tome", "cashino"] }
];
bingoList[18] = [
	{ name: "200 Quill Pagie", types: ["quill"] },
	{ name: "400 Quills", types: ["quill"] },
	{ name: "4 Rextro Pagies", types: ["rextro"] }
];
bingoList[19] = [
	{ name: "3 Pirate Treasures", types: ["pirate"] },
	{ name: "15 Sub-Area Pagies", types:["pagie"] },
	{ name: "Expand Galleon", types: ["tome", "galleon"] }
];
bingoList[20] = [
	{ name: "Cashino Ghost Writers", types: ["ghostwriter", "cashino"] },
	{ name: "Unlock All Grand Tomes", types: ["tome", "completionist"] },
	{ name: "Help 2 Space Frogs", types: ["pagie", "galleon"] }
];
bingoList[21] = [
	{ name: "Galleon Ghost Writers", types: ["ghostwriter", "galleon"] },
	{ name: "4 Pirate Treasures", types: ["pirate"] },
	{ name: "Deal with 8 Knights of Hamalot", types: ["pagie"] },
	{ name: "Defeat Planette", types: ["boss", "galleon"] }
];
bingoList[22] = [
	{ name: "3 Kartos Pagies", types: ["kartos"] },
	{ name: "Galleon Kartos", types: ["kartos", "galleon"] },
	{ name: "Play 2 Rounds of Golf", types: ["pagie"] },
	{ name: "All Playcoins", types: ["completionist"] }
];
bingoList[23] = [
	{ name: "Save 15 Ghost Writers", types: ["ghostwriter"] },
	{ name: "6 Transformation Pagies", types: ["pagie"] },
	{ name: "All Mollycools", types: ["completionist"] },
	{ name: "Windtunnel Pagie, No Reptile Rush", types: ["pagie", "challenge"] }
];
bingoList[24] = [
	{ name: "6 Rextro Pagies", types: ["rextro"] },
	{ name: "Learn all 15 Trowzer moves", types: ["trowzer","completionist"] },
	{ name: "600 Quills", types: ["quill"] },
	{ name: "20 Sub-Area Pagies", types:["pagie"] }
];
bingoList[25] = [
	{ name: "Defeat 4 Bosses", types:["boss"] },
	{ name: "Defeat Cap B w/ Missle Riding", types:["boss", "challenge"] },
	{ name: "Complete All Kartos Tracks", types: ["kartos", "completionist"] },
	{ name: "Defeat Cap B w/ Butterthree", types:["boss", "challenge"] }
];
