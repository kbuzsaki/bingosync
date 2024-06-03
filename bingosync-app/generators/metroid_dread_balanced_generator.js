var bingoGenerator = require("./generators/generator_bases/srl_generator_v5.js");

var bingoList = 
[];
bingoList[1] = [
	{
		name: "Use 1 Map Station",
		types: ['map', 'station']
	},
	{
		name: "Defeat an E.M.M.I.",
		types: ['combat', 'emmi']
	},
	{
		name: "Spider Magnet",
		types: ['item', 'movement']
	},
	{
		name: "Morph Ball",
		types: ['ball', 'item']
	},
	{
		name: "Charge Beam",
		types: ['beam', 'item']
	},
];
bingoList[2] = [
	{
		name: "Defeat 1 Major Boss",
		types: ['boss', 'combat']
	},
	{
		name: "Check 2 Adam Hints",
		types: ['adam', 'station']
	},
	{
		name: "Defeat 2 Gobblers",
		types: ['combat']
	},
	{
		name: "Parry a Muzby",
		types: ['combat']
	},
	{
		name: "1 Aeion Ability",
		types: ['aeion', 'item']
	},
	{
		name: "50 Missiles",
		types: ['item', 'expansion', 'missile']
	},
	{
		name: "Pulse Radar",
		types: ['aeion', 'item']
	},
];
bingoList[3] = [
	{
		name: "Use 2 Artaria Save Stations",
		types: ['save', 'station', 'location']
	},
	{
		name: "Use 1 Save Station in 2 Regions",
		types: ['save', 'station']
	},
	{
		name: "Use 2 Morph Ball Launchers",
		types: ['action', 'ball']
	},
	{
		name: "Open 3 Missile Covers",
		types: ['action', 'missile']
	},
	{
		name: "Wide Beam",
		types: ['item', 'beam']
	},
	{
		name: "Phantom Cloak",
		types: ['aeion', 'item']
	},
	{
		name: "Morph Ball Bombs",
		types: ['ball', 'item']
	},
];
bingoList[4] = [
	{
		name: "Use 2 Map Stations",
		types: ['map', 'station']
	},
	{
		name: "Defeat Corpius",
		types: ['boss', 'combat']
	},
	{
		name: "Defeat 2 E.M.M.I.",
		types: ['combat', 'emmi']
	},
	{
		name: "Destroy 5 Breakable Walls",
		types: ['action', 'wall']
	},
	{
		name: "3 Energy Tanks",
		types: ['expansion', 'energy']
	},
	{
		name: "Push 1 Wide Beam Box",
		types: ['action', 'beam']
	},
];
bingoList[5] = [
	{
		name: "Use 1 Save Station in 3 Regions",
		types: ['save', 'station']
	},
	{
		name: "Use 4 Save Stations",
		types: ['save', 'station']
	},
	{
		name: "Destroy 2 Enky",
		types: ['action', 'combat']
	},
	{
		name: "2 Aeion Abilities",
		types: ['aeion', 'item']
	},
	{
		name: "4 Power Bombs",
		types: ['item', 'expansion', 'ball']
	},
	{
		name: "Diffusion Beam",
		types: ['item', 'beam']
	},
];
bingoList[6] = [
	{
		name: "Defeat Kraid",
		types: ['boss', 'combat']
	},
	{
		name: "Open 5 Missile Covers",
		types: ['action', 'missile']
	},
	{
		name: "Push 3 Wide Beam Boxes",
		types: ['action', 'beam']
	},
	{
		name: "1 Nothing Item",
		types: ['item']
	},
	{
		name: "Varia Suit",
		types: ['item', 'suit']
	},
	{
		name: "Flash Shift",
		types: ['aeion', 'item']
	},
];
bingoList[7] = [
	{
		name: "Defeat 2 Major Bosses",
		types: ['boss', 'combat']
	},
	{
		name: "Defeat a Chozo Soldier",
		types: ['combat', 'chozo']
	},
	{
		name: "Open 2 Super Missile Covers",
		types: ['action', 'missile']
	},
	{
		name: "Open 2 Wide Beam Covers",
		types: ['action', 'beam']
	},
	{
		name: "Spin Boost",
		types: ['item', 'movement']
	},
	{
		name: "Speed Booster",
		types: ['item', 'movement']
	},
];
bingoList[8] = [
	{
		name: "Use 3 Map Stations",
		types: ['map', 'station']
	},
	{
		name: "Check 5 Adam Hints",
		types: ['adam', 'station']
	},
	{
		name: "Destroy 4 Enky",
		types: ['action', 'combat']
	},
	{
		name: "80 Missiles",
		types: ['expansion', 'missile']
	},
	{
		name: "1 Duplicate Item",
		types: ['item']
	},
	{
		name: "Grapple Beam",
		types: ['item', 'movement']
	},
];
bingoList[9] = [
	{
		name: "Defeat 2 Robot Chozo",
		types: ['combat', 'chozo']
	},
	{
		name: "Use 4 Morph Ball Launchers",
		types: ['action', 'ball']
	},
	{
		name: "Defeat 3 E.M.M.I.",
		types: ['combat', 'emmi']
	},
	{
		name: "Open 2 Grapple Blocks",
		types: ['action', 'grapple']
	},
	{
		name: "Pull 2 Grapple Boxes",
		types: ['action', 'grapple']
	},
	{
		name: "Super Missile",
		types: ['item', 'missile']
	},
];
bingoList[10] = [
	{
		name: "Use 2 Cataris Save Stations",
		types: ['save', 'station', 'location']
	},
	{
		name: "Use 2 Burenia Save Stations",
		types: ['save', 'station', 'location']
	},
	{
		name: "Use 1 Save Station in 3 Regions",
		types: ['save', 'station']
	},
	{
		name: "Use 8 Save Stations",
		types: ['save', 'station']
	},
	{
		name: "Destroy 9 Breakable Walls",
		types: ['action', 'wall']
	},
	{
		name: "6 Energy Tanks",
		types: ['expansion', 'energy']
	},
];
bingoList[11] = [
	{
		name: "Defeat 3 Major Bosses",
		types: ['combat', 'boss']
	},
	{
		name: "Quiet Robe Robot Chozo",
		types: ['combat']
	},
	{
		name: "Defeat 3 Gobblers",
		types: ['combat']
	},
	{
		name: "Open 3 Wide Beam Covers",
		types: ['action', 'beam']
	},
	{
		name: "3 Aeion Abilities",
		types: ['aeion', 'item']
	},
	{
		name: "Storm Missiles",
		types: ['item', 'missile']
	},
];
bingoList[12] = [
	{
		name: "Use 4 Map Stations",
		types: ['map', 'station']
	},
	{
		name: "Use 3 Artaria Save Stations",
		types: ['save', 'station', 'location']
	},
	{
		name: "Use 1 Save Station in 4 Regions",
		types: ['save', 'station']
	},
	{
		name: "Use 6 Morph Ball Launchers",
		types: ['action', 'ball']
	},
	{
		name: "Push 5 Wide Beam Boxes",
		types: ['action', 'beam']
	},
	{
		name: "120 Missiles",
		types: ['expansion', 'missile']
	},

];
bingoList[13] = [
	{
		name: "Vanilla Space Jump Item",
		types: ['location']
	},
	{
		name: "Defeat 2 Shakernaut",
		types: ['combat']
	},
	{
		name: "Defeat 2 Chozo Soldiers",
		types: ['combat', 'chozo']
	},
	{
		name: "Open 4 Super Missile Covers",
		types: ['action', 'missile']
	},
	{
		name: "Open 8 Missile Covers",
		types: ['action', 'missile']
	},
	{
		name: "Plasma Beam",
		types: ['beam', 'item']
	},
];
bingoList[14] = [
	{
		name: "Vanilla Screw Attack Item",
		types: ['location']
	},
	{
		name: "Elun Chozo Soldier",
		types: ['combat', 'chozo']
	},
	{
		name: "Release the XM",
		types: ['action']
	},
	{
		name: "Defeat 4 E.M.M.I.",
		types: ['combat', 'emmi']
	},
	{
		name: "Open 2 Storm Missile Gates",
		types: ['action', 'missile']
	},
	{
		name: "8 Power Bombs",
		types: ['expansion', 'pb']
	},
	{
		name: "Main Power Bomb",
		types: ['ball', 'item']
	},
];
bingoList[15] = [
	{
		name: "Use 2 Ghavoran Save Stations",
		types: ['save', 'station', 'location']
	},
	{
		name: "Use 2 Dairon Save Stations",
		types: ['save', 'station', 'location']
	},
	{
		name: "Use 1 Save Station in 5 Regions",
		types: ['save', 'station']
	},
	{
		name: "Destroy 6 Enky",
		types: ['action', 'combat']
	},
	{
		name: "Open 4 Grapple Blocks",
		types: ['action', 'grapple']
	},
	{
		name: "Pull 3 Grapple Boxes",
		types: ['action', 'grapple']
	},
];
bingoList[16] = [
	{
		name: "Defeat 4 Major Bosses",
		types: ['boss', 'combat']
	},
	{
		name: "Ice E.M.M.I.",
		types: ['combat', 'emmi']
	},
	{
		name: "Speed E.M.M.I.",
		types: ['combat', 'emmi']
	},
	{
		name: "Destroy 4 Robot Chozo",
		types: ['combat', 'chozo']
	},
	{
		name: "Open 4 Wide Beam Covers",
		types: ['action', 'beam']
	},
	{
		name: "Destroy 14 Breakable Walls",
		types: ['action', 'wall']
	},
];
bingoList[17] = [
	{
		name: "Use 5 Map Stations",
		types: ['map', 'station']
	},
	{
		name: "Check 8 Adam Hints",
		types: ['adam', 'station']
	},
	{
		name: "Defeat and Omnithon",
		types: ['combat']
	},
	{
		name: "Destroy 8 Enky",
		types: ['action', 'combat']
	},
	{
		name: "Open 3 Storm Missile Gates",
		types: ['action', 'missile']
	},
	{
		name: "Space Jump",
		types: ['item', 'movement']
	},
];
bingoList[18] = [
	{
		name: "Use the Elun Save Station",
		types: ['save', 'station', 'location']
	},
	{
		name: "Use 2 Ferenia Save Stations",
		types: ['save', 'station', 'location']
	},
	{
		name: "Use 1 Save Station in 6 Regions",
		types: ['save', 'station']
	},
	{
		name: "Use 12 Save Stations",
		types: ['save', 'station']
	},
	{
		name: "8 Energy Tanks",
		types: ['expansion', 'energy']
	},
	{
		name: "Screw Attack",
		types: ['item', 'movement']
	},
];
bingoList[19] = [
	{
		name: "Defeat Escue",
		types: ['boss', 'combat']
	},
	{
		name: "Defeat Drogyga",
		types: ['boss', 'combat']
	},
	{
		name: "Defeat 3 Chozo Soldiers",
		types: ['combat', 'chozo']
	},
	{
		name: "Defeat 4 Gobblers",
		types: ['combat']
	},
	{
		name: "Gravity Suit",
		types: ['item', 'suit']
	},
	{
		name: "Cross Bombs",
		types: ['ball', 'item']
	},
];
bingoList[20] = [
	{
		name: "Defeat Golzuna",
		types: ['boss', 'combat']
	},
	{
		name: "Defeat Experiment No. Z-57",
		types: ['boss', 'combat']
	},
	{
		name: "Defeat 6 Chozo Robots",
		types: ['combat', 'chozo']
	},
	{
		name: "Defeat 5 E.M.M.I.",
		types: ['combat', 'emmi']
	},
	{
		name: "Ice Missile",
		types: ['item', 'missile']
	},
];
bingoList[21] = [
	{
		name: "Defeat 5 Major Bosses",
		types: ['boss', 'combat']
	},
	{
		name: "Use 6 Map Stations",
		types: ['map', 'station']
	},
	{
		name: "Wave E.M.M.I.",
		types: ['combat', 'emmi']
	},
	{
		name: "Defeat 4 Shakernaut",
		types: ['combat']
	},
	{
		name: "160 Missiles",
		types: ['expansion','missile']
	},
];
bingoList[22] = [
	{
		name: "Use 1 Save Station in 7 Regions",
		types: ['save', 'station']
	},
	{
		name: "Post Speed E.M.M.I. Shinespark Item",
		types: ['action', 'location']
	},
	{
		name: "Power Bomb E.M.M.I.",
		types: ['combat', 'emmi']
	},
	{
		name: "Open 4 Storm Missile Gates",
		types: ['action', 'missile']
	},
];
bingoList[23] = [
	{
		name: "12 Power Bombs",
		types: ['expansion', 'pb']
	},
	{
		name: "Wave Beam",
		types: ['beam', 'item']
	},
	{
		name: "10 Energy Tanks",
		types: ['expansion', 'energy']
	},
];
bingoList[24] = [
	{
		name: "Defeat 6 E.M.M.I",
		types: ['combat', 'emmi']
	},
	{
		name: "Elite Chozo Soldier",
		types: ['combat']
	},
	{
		name: "Check 10 Adam Hints",
		types: ['adam', 'station']
	},
	{
		name: "Defeat 4 Chozo Soldiers",
		types: ['combat', 'chozo']
	},
];
bingoList[25] = [
	{
		name: "Defeat 6 Major Bosses",
		types: ['boss', 'combat']
	},
	{
		name: "Use 1 Save Station in 8 Regions",
		types: ['save', 'station']
	},
	{
		name: "Use the Itorash Save Station",
		types: ['save', 'station', 'location']
	},
];;
