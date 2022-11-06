var bingoGenerator = require("./generators/generator_bases/srl_generator_v5.js");

var bingoList = [];
bingoList[1] = [
	{
		name: "Have 25 missiles",
		types: ['free', 'missiles']
	},
	{
		name: "Fully view frozen Ridley",
		types: ['location', 'free']
	},
	{
		name: "Unlock Blue Doors",
		type: ['locks', 'bluedoor']
	},
	{
		name: "Have 4 energy tanks and 15 missiles",
		types: ['energy', 'missiles']
	},
	{
		name: "Collect Charge Beam",
		types: ['charge', 'beam']
	},
	{
		name: "Collect Super Missile",
		types: ['super']
	},
	{
		name: "Collect any 2 beam upgrades",
		types: ['beam', 'icebeam', 'charge', 'wide', 'wave', 'plasma']
	},
	{
		name: "Visit broken/flooded Sector 5",
		types: ['location']
	},
	{
		name: "Use Save near Arachnus",
		types: ['location', 'save']
	},
	{
		name: "Use 16 Save Points",
		types: ['location', 'save']
	},
];
bingoList[2] = [
	{
		name: "Have 16 power bombs",
		types: ['free', 'powerbomb']
	},
	{
		name: "Collect Speed Booster",
		types: ['speed']
	},
	{
		name: "Collect any 2 missile upgrades",
		types: ['missilelauncher', 'super', 'icemissile', 'diffusion']
	},
	{
		name: "Collect any 25 expansions",
		types: ['item', 'free', 'missiles', 'energy', 'powerbomb']
	},
	{
		name: "Collect any 10 expansions",
		types: ['item', 'free', 'missiles', 'energy', 'powerbomb']
	},
	{
		name: "Collect Wide Beam",
		types: ['beam', 'wide']
	},
	{
		name: "Collect Diffusion Missiles",
		types: ['diffusion']
	},
	{
		name: "Collect Varia Suit",
		types: ['suit', 'varia']
	},
	{
		name: "Collect Gravity Suit",
		types: ['suit', 'gravity']
	},
];
bingoList[3] = [
	{
		name: "Have 3 energy tanks",
		types: ['free', 'energy']
	},
	{
		name: "Have 50 missiles",
		types: ['item', 'missiles']
	},
	{
		name: "Have 20 power bombs",
		types: ['powerbomb']
	},
	{
		name: "Have 45 missiles and 16 power bombs",
		types: ['missiles', 'powerbomb']
	},
	{
		name: "Collect Plasma Beam",
		types: ['beam', 'plasma']
	},
	{
		name: "Collect Screw Attack",
		types: ['screw']
	},
	{
		name: "Lower water level in Sector 4",
		types: ['location']
	},
	{
		name: "Use 1 Save in each area",
		types: ['location', 'save']
	},
	{
		name: "Use 7 Save Points",
		types: ['location', 'save']
	},
];
bingoList[4] = [
	{
		name: "Have 2 energy tanks and 12 power bombs",
		types: ['free', 'energy', 'powerbomb']
	},
	{
		name: "Defeat Charge Core-X",
		types: ['boss', 'chargecore']
	},
	{
		name: "Have 6 energy tanks",
		types: ['free', 'energy']
	},
	{
		name: "Unlock Green Doors",
		types: ['locks', 'greendoor']
	},
{
		name: "Collect Ice Missiles",
		types: ['icemissile']
	},
	{
		name: "Collect Hi-Jump/Jumpball",
		types: ['hijump']
	},
	{
		name: "Collect Space Jump",
		types: ['space']
	},
	{
		name: "Collect Bomb Data",
		types: ['bomb']
	},
	{
		name: "Collect Power Bomb Data",
		types: ['powerbomb']
	},
];
bingoList[5] = [
	{
		name: "Defeat Zazabi",
		types: ['boss', 'zazabi']
	},
	{
		name: "Collect Ice Beam",
		types: ['icebeam', 'beam']
	},
	{
		name: "Have 20 missiles and 20 power bombs",
		types: ['missiles', 'powerbomb']
	},
	{
		name: "Collect Wave Beam",
		types: ['wave', 'beam']
	},
	{
		name: "Finish in Quarantine Bay",
		types: ['finish', 'location']
	},
	{
		name: "Finish in ship",
		types: ['finish', 'location']
	},
	{
		name: "Defeat any 3 bosses",
		types: ['boss', 'arachnus', 'nettori', 'zazabi', 'yakuza', 'chargecore', 'widecore', 'serris', 'megacore', 'ridley', 'nightmare', 'box', 'box2']
	},
	{
		name: "Use 12 Save Points",
		types: ['location', 'save']
	},
	{
		name: "Finish at Ops Recharge Station",
		types: ['finish', 'location']
	},
];
bingoList[6] = [
	{
		name: "Have 75 missiles",
		types: ['missiles']
	},
	{
		name: "Use Save before Serris",
		types: ['save', 'serris']
	},
	{
		name: "Use 20 Save Points",
		types: ['location', 'save']
	},
	{
		name: "Kill the Energy Tank Mimic",
		type: ['mimic', 'specific']
	},
	{
		name: "Collect the Energy Tank Mimic item",
		type: ['mimic', 'specific']
	},
	{
		name: "Collect both Ripper Tower items",
		type: ['location', 'specific']
	},
	{
		name: "Unlock Red Doors",
		types: ['locks', 'reddoor']
	},

];
bingoList[7] = [
	{
		name: "Collect any 3 missile upgrades",
		types: ['missilelauncher', 'super', 'icemissile', 'diffusion']
	},
	{
		name: "Have 28 power bombs",
		types: ['powerbomb']
	},
	{
		name: "Get both suits",
		types: ['suit', 'gravity', 'varia']
	},
	{
		name: "Kill the Missile Tank Mimic",
		type: ['mimic', 'specific']
	},
	{
		name: "Collect the Ripper Freezer item",
		type: ['location', 'specific']
	},
	{
		name: "Sector 5 Data Room item",
		types: ['location', 'specific']
	},
	{
		name: "Collect any 40 expansions",
		types: ['item', 'missiles', 'energy', 'powerbomb']
	},
	{
		name: "Collect any 60 expansions",
		types: ['item', 'missiles', 'energy', 'powerbomb']
	},

];
bingoList[8] = [
	{
		name: "Use 2 Saves in each area",
		types: ['location', 'save']
	},
	{
		name: "Visit the 6<->5 Sector connectors",
		types: ['location', 'screw']
	},
	{
		name: "Visit the 2<->4 Sector connectors",
		types: ['location', 'screw']
	},
	{
		name: "Visit the 3<->1 Sector connectors",
		types: ['location', 'screw']
	},
	{
		name: "Have 100 missiles",
		types: ['missiles']
	},
	{
		name: "Get the Fish Tank item",
		type: ['location', 'specific']
	},


];
bingoList[9] = [
	{
		name: "Defeat Wide Core",
		types: ['boss', 'widecore']
	},
	{
		name: "Defeat Mega Core",
		types: ['boss', 'megacore']
	},
	{
		name: "Defeat Serris",
		types: ['boss', 'serris']
	},
	{
		name: "Collect Hi-Jump and Space Jump",
		types: ['hijump', 'space']
	},
	{
		name: "Have 10 energy tanks",
		types: ['energy']
	},
	{
		name: "Unlock Yellow Doors",
		types: ['locks', 'yellowdoor']
	},
	{
		name: "Collect both items in Lava Spark",
		types: ['specific']
	},

];
bingoList[10] = [
	{
		name: "Have 7 energy tanks and 80 missiles",
		types: ['missiles', 'energy']
	},
	{
		name: "Defeat Mega Core-X",
		type: ['boss', 'megacore']
	},
	{
		name: "Finish in Sector 5 Crab Box",
		types: ['finish', 'location']
	},
	{
		name: "Finish in Sector 6 Data Room",
		types: ['finish', 'location']
	},
	{
		name: "Finish at Sector 4 Pump Control Terminal",
		types: ['finish', 'location']
	},
	{
		name: "Release the animals on Habitation Deck",
		type: ['location', 'specific']
	},
	{
		name: "Collect both Zazabi Speedway items",
		types: ['location', 'specific', 'zazabi']
	},
];
bingoList[11] = [
	{
		name: "Have 125 missiles",
		types: ['missiles']
	},
	{
		name: "Defeat Yakuza",
		types: ['boss', 'yakuza']
	},
	{
		name: "Defeat Nettori",
		types: ['boss', 'nettori']
	},
	{
		name: "Sector 3 Data Room item",
		type: ['location', 'specific']
	},
	{
		name: "Collect Pillar Highway item",
		types: ['location', 'specific']
	},
	{
		name: "Sector 4 Data Room item",
		types: ['location', 'specific']
	},
	{
		name: "Use every Save in Sector 2",
		types: ['save']
	},
];
bingoList[12] = [
	{
		name: "Wave Beam",
		types: ['beam', 'wave']
	},
	{
		name: "Collect all 4 missile upgrades",
		types: ['missilelauncher', 'super', 'icemissile', 'diffusion']
	},
	{
		name: "Have 40 power bombs",
		types: ['powerbomb']
	},
	{
		name: "Collect item above Nightmare",
		types: ['location', 'specific', 'nightmare']
	},
	{
		name: "Recharge Station at Nightmare",
		types: ['location', 'specific']
	},
	{
		name: "Use Save Room near Nightmare",
		types: ['save', 'nightmare']
	},
];
bingoList[13] = [
	{
		name: "Have 140 missiles",
		types: ['missiles']
	},
	{
		name: "Have 13 energy tanks",
		types: ['energy']
	},
	{
		name: "Have 60 missiles and 34 power bombs",
		types: ['missiles', 'powerbomb']
	},
	{
		name: "Have 100 missiles and 28 power bombs",
		types: ['missiles', 'powerbomb']
	},
	{
		name: "Defeat 2 bosses in Main Deck",
		types: ['boss', 'arachnus', 'yakuza']
	},
	{
		name: "Kill all Golden Crabs in Sector 4",
		types: ['specific']
	},
	{
		name: "Collect both Crumble City items",
		types: ['location', 'specific']
	},
];
bingoList[14] = [
	{
		name: "Use 16 save points",
		types: ['save']
	},
	{
		name: "Defeat Wide Core-X",
		types: ['boss', 'widecore']
	},
	{
		name: "Defeat any 3 Beam Core-X",
		types: ['boss', 'chargecore', 'widecore', 'nettori', 'box2']
	},
	{
		name: "Use the hidden Recharge Station in Sector 2",
		type: ['location', 'specific']
	},
	{
		name: "Defeat all bosses in Sector 3",
		types: ['boss', 'widecore', 'box']
	},
	{
		name: "Use every Save in Sector 5",
		types: ['save']
	},
	{
		name: "Collect every movement system",
		types: ['hijump', 'space', 'speed']
	}
];
bingoList[15] = [
	{
		name: "Collect any 3 beam upgrades",
		types: ['beam', 'icebeam', 'charge', 'wide', 'wave', 'plasma']
	},
	{
		name: "Finish in Sector 6 Data Room",
		types: ['location', 'finish']
	},
	{
		name: "Defeat all bosses in Sector 2",
		types: ['boss']
	},
	{
		name: "Defeat any 6 bosses",
		types: ['boss', 'arachnus', 'nettori', 'zazabi', 'yakuza', 'chargecore', 'widecore', 'serris', 'megacore', 'ridley', 'nightmare', 'box', 'box2']
	},
	{
		name: "Central Reactor Core Nav Station",
		types: ['location', 'specific']
	},
	{
		name: "Finish at Lava Spark",
		types: ['finish', 'location']
	},
	{
		name: "Finish in Sector 3 Lava Maze",
		types: ['finish', 'location']
	},
	{
		name: "Visit Auxiliary Power Nav Station",
		types: ['finish', 'location', 'yakuza']
	},
	{
		name: "Finish at Habitation Deck Terminal",
		types: ['finish', 'location']
	},
];
bingoList[16] = [
	{
		name: "Have 170 missiles",
		types: ['missiles'],
	},
	{
		name: "Have 16 energy tanks",
		types: ['energy']
	},
	{
		name: "Defeat SA-X in Main Deck",
		types: ['boss']
	},
	{
		name: "Use every Save in Sector 4",
		types: ['save']
	},

];
bingoList[17] = [
	{
        name: "Defeat Nightmare",
		types: ['boss', 'nightmare']
	},
	{
		name: "Have 48 power bombs",
		types: ['powerbomb']
	},
	{
		name: "Get every Data Room item",
		types: ['location', 'specific']
	},
	{
		name: "Use 29 save stations",
		types: ['save']
	},

];
bingoList[18] = [
	{
		name: "Defeat B.O.X. in Sector 6",
		types: ['boss', 'box2']
	},
	{
		name: "Completely fill in any Sector map",
		types: ['location']
	},
	{
		name: "Completely fill in the Main Deck map",
		types: ['location']
	},
	{
		name: "Use every Sector 1 Save",
		types: ['save']
	},

];
bingoList[19] = [
	{
		name: "Use 25 save points",
		types: ['save']
	},
	{
		name: "Visit Restricted Area Nav Station",
		types: ['location', 'specific']
	},
	{
		name: "Use Ridley-X save",
		types: ['save', 'ridley']
	},
	{
		name: "Visit every Sector Connector",
		types: ['location']
	}
];
bingoList[20] = [
	{
		name: "Collect any 4 beam upgrades",
		types: ['beam', 'charge', 'icebeam', 'wave', 'wide', 'plasma']
	},
	{
		name: "Defeat any 6 bosses",
		types: ['boss', 'arachnus', 'nettori', 'zazabi', 'yakuza', 'chargecore', 'widecore', 'serris', 'megacore', 'ridley', 'nightmare', 'box', 'box2']
	},
	{
		name: "Collect Lava Maze item",
		types: ['location', 'specific']
	},
	{
		name: "Finish at Golden Pirates room",
		types: ['finish', 'location']
	},
];
bingoList[21] = [
	{
		name: "Have 200 missiles",
		types: ['missiles']
	},
	{
		name: "Defeat BOTH B.O.X.",
		types: ['boss', 'box', 'box2']
	},
	{
		name: "Collect Restricted Area item",
		types: ['location', 'specific']
	},

];
bingoList[22] = [
	{
		name: "Have 50 power bombs",
		types: ['item', 'powerbomb']
	},
	{
		name: "Defeat every boss in Sector 1",
		types: ['boss', 'chargecore', 'ridley']
	},
	{
		name: "Collect both Space/Speed items in Sector 6",
		types: ['location', 'specific']
	},

];
bingoList[23] = [
	{
		name: "Defeat Ridley-X",
		types: ['boss', 'ridley']
	},
	{
		name: "Defeat Nightmare",
		types: ['boss', 'nightmare']
	},
	{
		name: "Collect the Restricted Area item",
		types: ['location', 'box2']
	},
	{
		name: "Use every Save in Sector 6",
		types: ['save']
	},
];
bingoList[24]= [
	{
		name: "Defeat X-B.O.X.",
		types: ['boss', 'box2']
	},
	{
		name: "Defeat every boss in Sector 6",
		types: ['boss', 'megacore', 'box2']
	},
	{
		name: "Collect the crumble item next to X-B.O.X.",
		types: ['location', 'specific']
	},
	{
		name: "Use the Save near X-B.O.X.",
		types: ['save']
	},
];
bingoList[25] = [
	{
		name: "Defeat any 9 bosses",
		types: ['boss', 'arachnus', 'nettori', 'zazabi', 'yakuza', 'chargecore', 'widecore', 'serris', 'megacore', 'ridley', 'nightmare', 'box', 'box2']
	},
	{
		name: "Collect all 5 beam upgrades",
		types: ['beam', 'charge', 'icebeam', 'wave', 'wide', 'plasma']
	},
	{
		name: "Finish at Sector 6 Security Camera",
		types: ['finish', 'location']
	},
	{
		name: "Kill all Golden Pirates in Sector 1",
		types: ['specific']
	},

];
