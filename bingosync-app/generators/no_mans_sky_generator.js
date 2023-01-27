var bingoGenerator = require("./generators/generator_bases/srl_generator_v5.js");

var bingoList = [];
bingoList[1] = [
	{ name: "Scan 10 Plants", types: ["scanning"] },
	{ name: "Scan 10 Minerals", types: ["scanning"] },
	{ name: "Gather or synthesize 250 Silicate Powder", types: ["elements"] },
	{ name: "Gather or synthesize 250 Carbon", types: ["elements"] },
	{ name: "Learn 5 words in any language", types: ["language"] }
];
bingoList[2] = [
    { name: "Scan 5 Land Animals", types: ["scanning"] },
	{ name: "Visit 5 planets and scan at least one creature there", types: ["scanning"] },
	{ name: "Install a C-Class Suit Upgrade", types: ["suit"] },
	{ name: "Gather or synthesize 250 Di-Hydrogen", types: ["elements"] },
	{ name: "Gather or synthesize 250 Tritium", types: ["elements"] },
	{ name: "Gather or synthesize 250 Oxygen", types: ["elements"] },
	{ name: "Gather or synthesize 250 Ferrite Dust", types: ["elements"] }
];
bingoList[3] = [
	{ name: "Tame 2 different animal species", types: ["taming"] },
	{ name: "Recruit a freighter flagship", types: ["freighters"] },
	{ name: "Build a base teleporter", types: ["base"] },
	{ name: "Install a C-Class Multitool Upgrade", types: ["upgrades", "multitool"] },
	{ name: "Gather or synthesize 250 Faecium", types: ["elements"] },
	{ name: "Gather or synthesize 250 Condensed Carbon", types: ["elements"] },
	{ name: "Gather or synthesize 250 Pure Ferrite", types: ["elements"] }
];
bingoList[4] = [
	{ name: "Visit 5 systems", types: ["exploration"] },
	{ name: "Scan 5 Air Animals", types: ["scanning"] },
	{ name: "Install a C-Class ship Upgrade", types: ["upgrades", "ship"] },
	{ name: "Gather or synthesize 250 Salt", types: ["elements"] },
	{ name: "Gather or synthesize 250 Cobalt", types: ["elements"] },
	{ name: "Gather or synthesize 250 Gold", types: ["elements"] },
	{ name: "Gather or synthesize 250 Copper", types: ["elements"] }
];
bingoList[5] = [
	{ name: "Visit a red star system", types: ["exploration"] },
	{ name: "Milk 15 animals", types: ["animals"] },
	{ name: "Install a C-Class vehicle Upgrade", types: ["upgrades", "vehicle"] },
	{ name: "Upgrade Suit Inventory 5 times", types: ["upgrades", "suit"] },
	{ name: "Gather or synthesize 250 Sodium", types: ["elements"] },
	{ name: "Gather or synthesize 250 Chlorine", types: ["elements"] },
	{ name: "Gather or synthesize 250 Magnetized Ferrite", types: ["elements"] }
];
bingoList[6] = [
	{ name: "Discover an interstellar anomaly", types: ["exploration"] },
	{ name: "Visit an atlas station", types: ["exploration"] },
	{ name: "Extend your freighter base by at least 5 base parts", types: ["freighter", "base"] },
	{ name: "Install a C-Class freighter Upgrade", types: ["upgrades", "freighter"] },
	{ name: "Gather or synthesize 250 Cyto Phosphate", types: ["elements"] },
	{ name: "Gather or synthesize 250 Silver", types: ["elements"] },
	{ name: "Gather or synthesize 250 Rusted Metal", types: ["junk"] },
	{ name: "Gather or synthesize 250 Cadmium", types: ["elements"] }
 ];
bingoList[7] = [
	{ name: "Scan 5 Underwater Animals", types: ["scanning"] },
	{ name: "Collect 10 poop piles", types: ["animals"] },
	{ name: "Discover a trading post", types: ["landmarks"] },
	{ name: "Install Survey Device in any Multitool", types: ["upgrades", "multitool"] },
	{ name: "Gather or synthesize 250 Mordite", types: ["elements"] },
	{ name: "Gather or synthesize 250 Paraffinum", types: ["elements"] },
	{ name: "Kill 10 creatures of any type", types: ["combat"] }
];
bingoList[8] = [
	{ name: "Visit a green star system", types: ["exploration"] },
	{ name: "Find 3 buried treasures", types: ["buried"] },
	{ name: "Install a B-Class Suit Upgrade", types: ["upgrades", "suit"] },
	{ name: "Gather or synthesize 250 Ionised Cobalt", types: ["elements"] },
	{ name: "Gather or synthesize 250 Ammonia", types: ["elements"] },
	{ name: "Gather or synthesize 250 Pyrite", types: ["elements"] },
	{ name: "Gather or synthesize 250 Platinum", types: ["elements"] },
	{ name: "Gather or synthesize 250 Marrow Bulb", types: ["plants"] },
	{ name: "Gather or synthesize 250 Activated Cadmium", types: ["elements"] }
];
bingoList[9] = [
	{ name: "Fly through a black hole", types: ["exploration"] },
	{ name: "Build a land base with at least 20 parts", types: ["base"] },
	{ name: "Get one Freighter room blueprint", types: ["freighters", "base", "upgrades"] },
	{ name: "Install a B-Class Multitool Upgrade", types: ["upgrades", "multitool"] },
	{ name: "Gather or synthesize 250 Dioxide", types: ["elements"] },
	{ name: "Gather or synthesize 250 Star Bulb", types: ["plants"] },
	{ name: "Gather or synthesize 250 Activated Copper", types: ["elements"] },
	{ name: "Gather or synthesize 250 Emeril", types: ["elements"] }
];
bingoList[10] = [
	{ name: "Scan 5 Underground Animals", types: ["scanning"] },
	{ name: "Get a exo-vehicle", types: ["vehicles"] },
	{ name: "Install a B-Class ship Upgrade", types: ["upgrades", "ship"] },
	{ name: "Upgrade Technology Inventory 5 times", types: ["upgrades", "suit"] },
	{ name: "Gather or synthesize 250 Phosphorous", types: ["elements"] },
	{ name: "Gather or synthesize 250 Cactus Flesh", types: ["plants"] },
	{ name: "Gather or synthesize 250 Pugneum", types: ["special"] }
];
bingoList[11] = [
	{ name: "Discover 15 landmarks", types: ["landmarks"] },
	{ name: "Find 10 buried Fossils", types: ["buried"] },
	{ name: "Install a B-Class vehicle Upgrade", types: ["upgrades", "vehicle"] },
	{ name: "Gather or synthesize 250 Sodium Nitrate", types: ["elements"] },
	{ name: "Gather or synthesize 250 Uranium", types: ["elements"] },
	{ name: "Gather or synthesize 250 Frost Crystal", types: ["plants"] },
	{ name: "Gather or synthesize 250 Activated Emeril", types: ["elements"] }
 ];
bingoList[12] = [
	{ name: "Visit a blue star system", types: ["exploration"] },
	{ name: "unlock 5 base blueprints", types: ["base", "upgrades"] },
	{ name: "Install a B-Class freighter Upgrade", types: ["upgrades", "freighter"] },
	{ name: "Gather or synthesize 250 Deuterium", types: ["elements"] },
	{ name: "Gather or synthesize 250 Gamma Root", types: ["plants"] },
	{ name: "Kill 10 sentinels of any class", types: ["combat"] },
	{ name: "Learn 10 words of Korvax", types: ["language"] },
	{ name: "Learn 10 words of Gek", types: ["language"] },
	{ name: "Learn 10 words of Vykeen", types: ["language"] }
];
bingoList[13] = [
	{ name: "Discover a ruin", types: ["landmarks"] },
	{ name: "Build an energy extractor", types: ["base"] },
	{ name: "Upgrade Multitool Inventory 2 times", types: ["upgrades", "multitool"] },
	{ name: "Gather or synthesize 250 Kelp Sac", types: ["plants"] },
	{ name: "Gather or synthesize 250 Chromatic Metal", types: ["elements"] },
	{ name: "Gather or synthesize 250 Indium", types: ["elements"] }
];
bingoList[14] = [
	{ name: "Discover a crashed ship", types: ["landmarks"] },
	{ name: "Become settlement overseer", types: ["settlement"] },
	{ name: "Install a A-Class Suit Upgrade", types: ["upgrades", "suit"] },
	{ name: "Gather or synthesize 250 Solanium", types: ["plants"] },
	{ name: "Defeat 5 space pirates", types: ["combat"] }
];
bingoList[15] = [
	{ name: "Tame a flying animal species", types: ["animals"] },
	{ name: "Discover a crashed ship or freighter under water", types: ["landmarks"] },
	{ name: "Install a A-Class Multitool Upgrade", types: ["upgrades", "multitool"] },
	{ name: "Gather or synthesize 250 Runaway Mold", types: ["junk"] },
	{ name: "Gather or synthesize 250 Activated Indium", types: ["elements"] }
];
bingoList[16] = [
	{ name: "Discover a factory", types: ["landmarks"] },
	{ name: "Fully explore (all rooms and goals) a derelict freighter", types: ["freighters"] },
	{ name: "Install a A-Class ship Upgrade", types: ["upgrades", "ship"] },
	{ name: "Kill 10 swarm abominations", types: ["combat"] },
	{ name: "Complete 5 Space station missions for any faction", types: ["missions"] }
];
bingoList[17] = [
	{ name: "Discover a crashed freighter", types: ["landmarks"] },
	{ name: "Build an underwater base with at least 20 parts", types: ["base"] },
	{ name: "Learn 15 new blueprints of any kind", types: ["upgrades"] },
	{ name: "Gather or synthesize 250 Living Slime", types: ["junk"] },
	{ name: "Complete 5 Korvax Missions", types: ["missions"] },	
	{ name: "Complete 5 Gek Missions", types: ["missions"] },	
	{ name: "Complete 5 Vykeen Missions", types: ["missions"] }
];
bingoList[18] = [
	{ name: "Discover an underwater ruin", types: ["landmarks"] },
	{ name: "Build a working gas extractor", types: ["base"] },
	{ name: "Build a working mineral extractor", types: ["base"] },
	{ name: "Install a A-Class vehicle Upgrade", types: ["upgrades", "vehicle"] },
	{ name: "Kill 10 creatures on board a derelict freighter", types: ["combat"] }
];
bingoList[19] = [
	{ name: "Discover a portal", types: ["landmarks"] },
	{ name: "Install a A-Class freighter Upgrade", types: ["upgrades", "freighter"] },
	{ name: "Buy an exotic ship", types: ["ship"] },
	{ name: "Gather or synthesize 250 Nitrogen", types: ["elements"] },
	{ name: "Gather or synthesize 250 Vicious Fluid", types: ["junk"] }
];
bingoList[20] = [
	{ name: "Discover an insterstellar archive", types: ["landmarks"] },
	{ name: "Find 5 buried minerals", types: ["buried"] },
	{ name: "Install a S-Class Suit Upgrade", types: ["upgrades", "suit"] },
	{ name: "Gather or synthesize 250 Radon", types: ["elements"] },
	{ name: "Get Rank 10 with any faction (alien or guilds)", types: ["missions"] }
];
bingoList[21] = [
	{ name: "Discover 15 landmarks", types: ["landmarks"] },
	{ name: "Install a S-Class Multitool Upgrade", types: ["upgrades", "multitool"] },
	{ name: "Gather or synthesize 250 Sulphurine", types: ["elements"] },
	{ name: "Meet an abysmal horror in space", types: ["Exploration"] },
	{ name: "Complete 5 Merchant Missions", types: ["missions"] },	
	{ name: "Complete 5 Mercenary Missions", types: ["missions"] },	
	{ name: "Complete 5 Explorer Missions", types: ["missions"] }
];
bingoList[22] = [
	{ name: "Visit an outlaw star system", types: ["exploration"] },
	{ name: "Recruit 5 Freighter fregates", types: ["freighters"] },
	{ name: "Install a S-Class ship Upgrade", types: ["upgrades", "ship"] },
	{ name: "Gather or synthesize 250 Residual Goop", types: ["junk"] },
	{ name: "Complete 5 Multiplayer Missions", types: ["missions"] }
];
bingoList[23] = [
	{ name: "Travel through a portal", types: ["exploration"] },
	{ name: "Gather or synthesize 250 Basalt", types: ["elements"] },
	{ name: "Gather or synthesize 250 Hexite", types: ["special"] },
	{ name: "complete 10 worm hives", types: ["combat"] }
];
bingoList[24] = [
	{ name: "Visit an uninhabited star system", types: ["exploration"] },
	{ name: "Install a S-Class vehicle Upgrade", types: ["upgrades", "vehicle"] },
	{ name: "Gather or synthesize 250 liquid sun", types: ["special"] },
	{ name: "Kill 10 predatory animals", types: ["combat"] },
	{ name: "Get Rank 10 in any guild", types: ["missions"] }
];
bingoList[25] = [
	{ name: "Fly to center of the galaxy (Without Anomaly Warp)", types: ["exploration"] },
	{ name: "Install a S-Class freighter Upgrade", types: ["upgrades", "freighter"] },
	{ name: "Get the living ship", types: ["ship"] },
	{ name: "Synthesize 1 Stasis Device", types: ["special"] }
];