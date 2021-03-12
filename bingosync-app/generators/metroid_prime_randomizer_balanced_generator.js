var bingoGenerator = require("./generators/generator_bases/srl_generator_v5.js");

var bingoList = [];
bingoList[1] = [
  { name: "1 Plated Beetle", types: ["chozo","hunting","mini-boss"] },
  { name: "Use 1 Map Station", types: ["station"] },
  { name: "Hive Mecha", types: ["chozo","mini-boss"] },
  { name: "Use 1 Chozo Save Station", types: ["chozo","station"] },
];
bingoList[2] = [
  { name: "1 Suit", types: ["collect","suit"] },
  { name: "2 Mini Bosses", types: ["bosscount"] },
  { name: "40 Missiles", types: ["collect","missile"] },
  { name: "Space Jump Boots", types: ["upgrade"] },
];
bingoList[3] = [
  { name: "1 Major Boss", types: ["bosscount"] },
  { name: "3 E-Tanks", types: ["collect","energy"] },
  { name: "Varia Suit", types: ["upgrade","suit"] },
  { name: "Use 1 Magmoor Save Station", types: ["magmoor","station"] },
  { name: "1 Beam Combo", types: ["collect","combo"] },
];
bingoList[4] = [
  { name: "1 Sheegoth", types: ["phendrana","hunting","mini-boss"] },
  { name: "1 Power Bomb Expansion", types: ["collect","power"] },
  { name: "Morph Ball Bombs", types: ["upgrade","ball"] },
  { name: "Incinerator Drone", types: ["chozo","mini-boss"] },
  { name: "Use 2 Chozo Save Stations", types: ["chozo","station"] },
];
bingoList[5] = [
  { name: "2 Plated Beetles", types: ["chozo","hunting"] },
  { name: "Defeat Ghosts in 2 Rooms", types: ["chozo","hunting"] },
  { name: "Break 3 walls with Power Bomb", types: ["action","power"] },
  { name: "Flaahgra", types: ["chozo","boss"] },
  { name: "Wave Beam", types: ["upgrade","beam"] },
];
bingoList[6] = [
  { name: "3 Mini Bosses", types: ["bosscount"] },
  { name: "Use 1 Missile Station", types: ["station"] },
  { name: "Get Magmoor Workstation Item", types: ["magmoor","location"] },
  { name: "Get Ruined Gallery Item (morph track)", types: ["chozo","location"] },
  { name: "Use 1 Phendrana Save Station", types: ["phendrana","station"] },
];
bingoList[7] = [
  { name: "Defeat Shadow Pirates in 2 Rooms", types: ["hunting"] },
  { name: "Get 1 Duplicate or Nothing Item", types: ["collect"] },
  { name: "Get Ruined Courtyard Item", types: ["phendrana","location"] },
  { name: "Ice Beam", types: ["upgrade","beam"] },
];
bingoList[8] = [
  { name: "2 Beam Combos", types: ["collect","combo"] },
  { name: "2 Major Bosses", types: ["bosscount"] },
  { name: "All Hall of the Elders Bomb Slots", types: ["chozo","action"] },
  { name: "Defeat 5 different Metroids", types: ["hunting"] },
  { name: "Thermal Visor", types: ["upgrade","visor"] },
];
bingoList[9] = [
  { name: "1 Elite Pirate", types: ["mines","hunting","mini-boss"] },
  { name: "Defeat Flying Pirates in 3 Rooms", types: ["hunting"] },
  { name: "Get Arbor Chamber Item", types: ["tallon","location"] },
  { name: "Get Tower of Light Item", types: ["chozo","location"] },
  { name: "Super Missiles", types: ["upgrade","combo"] },
  { name: "Thardus", types: ["phendrana","boss"] },
];
bingoList[10] = [
  { name: "2 Power Bomb Expansions", types: ["collect","power"] },
  { name: "Get Elder Chamber Item", types: ["chozo","location"] },
  { name: "Wavebuster", types: ["combo"] },
  { name: "Ice Spreader", types: ["combo"] },
  { name: "Flamethrower", types: ["combo"] },
  { name: "Get Quarantine Monitor Item", types: ["phendrana","location"] },
];
bingoList[11] = [
  { name: "6 E-Tanks", types: ["collect","energy"] },
  { name: "70 Missiles", types: ["collect","missile"] },
  { name: "Use 5 Spinners (must have Boost)", types: ["action","spinner"] },
  { name: "Boost Ball", types: ["upgrade","ball"] },
  { name: "Spider Ball", types: ["upgrade","ball"] },
  { name: "Use 2 Magmoor Save Stations", types: ["magmoor","station"] },
];
bingoList[12] = [
  { name: "2 Sheegoths", types: ["phendrana","hunting"] },
  { name: "Get Research Core Item", types: ["phendrana","location"] },
  { name: "X-Ray Visor", types: ["upgrade","visor"] },
  { name: "Defeat 3 Power Pirates with Super Missiles", types: ["mines","hunting"] },
  { name: "Gravity Suit", types: ["upgrade","suit"] },
  { name: "Break 3 Super Missile Walls", types: ["action","super"] },
];
bingoList[13] = [
  { name: "4 Mini Bosses", types: ["bosscount"] },
  { name: "2 Suits", types: ["collect","suit"] },
  { name: "Get Gravity Chamber Item (lower)", types: ["phendrana","location"] },
  { name: "Phazon Elite", types: ["mines","mini-boss"] },
  { name: "Defeat 9 different Metroids", types: ["hunting"] },
  { name: "Use 2 Phendrana Save Stations", types: ["phendrana","station"] },
];
bingoList[14] = [
  { name: "Defeat Ghosts in 4 Rooms", types: ["chozo","hunting"] },
  { name: "Use 2 Map Stations", types: ["station"] },
  { name: "Check Dynamo Item (upper)", types: ["chozo","location"] },
  { name: "Get Main Plaza Tree Item", types: ["chozo","location"] },
  { name: "Defeat 3 Wave Pirates with Wavebuster", types: ["mines","hunting"] },
  { name: "Use 1 Mines Save Station", types: ["mines","station"] },
];
bingoList[15] = [
  { name: "2 Elite Pirates", types: ["mines","hunting"] },
  { name: "Defeat Shadow Pirates in 4 Rooms", types: ["hunting"] },
  { name: "Get Biohazzard Containment", types: ["tallon","location"] },
  { name: "Get Life Grove Tunnel Item", types: ["tallon","location"] },
  { name: "Plasma Beam", types: ["upgrade","beam"] },
  { name: "Defeat all Hunter Metroids (Fungal Hall A)", types: ["mines","hunting"] },
];
bingoList[16] = [
  { name: "3 Beam Combos", types: ["collect","combo"] },
  { name: "Defeat Flying Pirates in 6 Rooms", types: ["hunting"] },
  { name: "Use 7 Spinners (must have Boost)", types: ["action","spinner"] },
  { name: "Main Power Bombs", types: ["upgrade","ball"] },
  { name: "Get Research Lab Hydra Item", types: ["phendrana","location"] },
  { name: "Get Dynamo Item (upper)", types: ["chozo","location"] },
];
bingoList[17] = [
  { name: "3 Power Bomb Expansions", types: ["collect","power"] },
  { name: "100 Missiles", types: ["collect","missile"] },
  { name: "Get Phendrana Shorelines Item (Spider Track)", types: ["phendrana","location"] },
  { name: "Get Storage Cave Item", types: ["phendrana","location"] },
  { name: "Defeat 3 Ice Pirates with Ice Spreader", types: ["mines","hunting"] },
  { name: "All Beams (4)", types: ["collect","beam"] },
];
bingoList[18] = [
  { name: "3 Sheegoths", types: ["phendrana","hunting"] },
  { name: "Get Sunchamber Ghosts Item", types: ["chozo","location"] },
  { name: "Cloaked Drone", types: ["mines","mini-boss"] },
  { name: "Get Training Chamber Item", types: ["chozo","location"] },
  { name: "Activate the Observatory", types: ["phendrana","action"] },
  { name: "Use the Frigate Save Station", types: ["tallon","station"] },
];
bingoList[19] = [
  { name: "Defeat Ghosts in 6 Rooms", types: ["chozo","hunting"] },
  { name: "Get Furnace Item (upper)", types: ["chozo","location"] },
  { name: "Get Gravity Chamber Item (upper)", types: ["phendrana","location"] },
  { name: "Get Plasma Processing Item", types: ["magmoor","location"] },
  { name: "Get Storage Depot A Item", types: ["mines","location"] },
  { name: "Break 5 Super Missile Walls", types: ["action","super"] },
];
bingoList[20] = [
  { name: "3 Elite Pirates", types: ["mines","hunting"] },
  { name: "9 E-Tanks", types: ["collect","energy"] },
  { name: "Defeat Shadow Pirates in 6 Rooms", types: ["hunting"] },
  { name: "Use 3 Map Stations", types: ["station"] },
  { name: "Defeat 1 Large Enemy with Flamethrower", types: ["action"] },
  { name: "Both Visors", types: ["collect","visor"] },
];
bingoList[21] = [
  { name: "4 Sheegoths", types: ["phendrana","hunting"] },
  { name: "3 Major Bosses", types: ["bosscount"] },
  { name: "Use 10 Spinners (must have Boost)", types: ["action","spinner"] },
  { name: "Life Grove Ghosts", types: ["tallon","hunting"] },
  { name: "Defeat 3 Plasma Pirates with Flamethrower", types: ["mines","hunting"] },
  { name: "Phazon Suit", types: ["upgrade","suit"] },
];
bingoList[22] = [
  { name: "5 Mini Bosses", types: ["bosscount"] },
  { name: "Defeat Flying Pirates in 9 Rooms", types: ["hunting"] },
  { name: "Use 2 Missile Stations", types: ["station"] },
  { name: "Omega Pirate", types: ["mines","boss"] },
  { name: "Check all 3 Beam Locations", types: ["location"] },
  { name: "All Morph Ball Systems (4)", types: ["collect","ball"] },
];
bingoList[23] = [
  { name: "3 Suits", types: ["collect","suit"] },
  { name: "130 Missiles", types: ["collect","missile"] },
  { name: "Get Metroid Quarantine B Item", types: ["mines","location"] },
  { name: "Get Processing Center Access Item", types: ["mines","location"] },
  { name: "Defeat 13 different Metroids", types: ["hunting"] },
  { name: "Use 2 Mines Save Stations", types: ["mines","station"] },
];
bingoList[24] = [
  { name: "4 Beam Combos", types: ["collect","combo"] },
  { name: "4 Power Bomb Expansions", types: ["collect","power"] },
  { name: "Get Phazon Mining Tunnel Item", types: ["mines","location"] },
  { name: "Meta Ridley", types: ["tallon","boss"] },
  { name: "30% Scan Completion", types: ["collect","action"] },
];
bingoList[25] = [
  { name: "4 Major Bosses", types: ["bosscount"] },
  { name: "12 E-Tanks", types: ["collect","energy"] },
  { name: "Use a Save Station in each Region", types: ["station"] },
];
