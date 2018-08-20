bingoGenerator = require("./generators/generator_bases/srl_generator_v8.js");

var bingoList = [];
bingoList[1] = [
    {name: "City Escape M2", types: ["cityescape"]},
    {name: "2 Chao Boxes in City Escape and finish", types: ["cityescape"]},
    {name: "5 hidden Chao animals in City Escape and finish", types: ["cityescape"]},
    {name: "Rename a Chao after a person you're racing", types: ["chaogarden", "multistory"]},
    {name: "Iron Gate M2", types: ["irongate"]},
    {name: "Complete Iron Gate M1 with 100+ Rings", types: ["irongate"]},
    {name: "2 Chao Boxes in Iron Gate and finish", types: ["irongate"]},
    {name: "5 hidden Chao animals in Iron Gate and finish", types: ["irongate"]},
    {name: "Wild Canyon M1 Hintless", types: ["wildcanyon"]},
    {name: "Dry Lagoon M1 Hintless", types: ["drylagoon"]},
    {name: "City Escape M3", types: ["cityescape"]},
    {name: "Wild Canyon M2", types: ["wildcanyon"]},
    {name: "Complete Wild Canyon M1 with 100+ Rings", types: ["wildcanyon"]},
    {name: "2 Chao Boxes in Wild Canyon and finish", types: ["wildcanyon"]},
    {name: "5 hidden Chao animals in Wild Canyon and finish", types: ["wildcanyon"]},
    {name: "Wild Canyon M3", types: ["wildcanyon"]}
];
bingoList[2] = [
    {name: "Wild Canyon M3 B-Rank", types: ["wildcanyon", "brank"]},
    {name: "Dry Lagoon M2", types: ["drylagoon"]},
    {name: "Complete Dry Lagoon M1 with 100+ Rings", types: ["drylagoon"]},
    {name: "2 Chao Boxes in Dry Lagoon and finish", types: ["drylagoon"]},
    {name: "5 hidden Chao animals in Dry Lagoon and finish", types: ["drylagoon"]},
    {name: "Wild Canyon M4", types: ["wildcanyon"]},
    {name: "Dry Lagoon M3", types: ["drylagoon"]}
];
bingoList[3] = [
    {name: "Wild Canyon M4 A-Rank", types: ["wildcanyon", "arank"]},
    {name: "Dry Lagoon M3 B-Rank", types: ["drylagoon", "brank"]},
    {name: "City Escape M4", types: ["cityescape"]},
    {name: "Wild Canyon M5", types: ["wildcanyon"]},
    {name: "Defeat both Big Foot and Hot Shot", types: ["multistory"]},
    {name: "Unlock Chao Garden for all Hero Story characters", types: ["chaogarden"]}
];
bingoList[4] = [
    {name: "City Escape M4 A-Rank", types: ["cityescape", "arank"]},
    {name: "Wild Canyon M5 A-Rank", types: ["wildcanyon", "arank"]},
    {name: "Dry Lagoon M4", types: ["drylagoon"]},
    {name: "Prison Lane M2", types: ["prisonlane"]},
    {name: "Complete Prison Lane M1 with 100+ Rings", types: ["prisonlane"]},
    {name: "2 Chao Boxes in Prison Lane and finish", types: ["prisonlane"]},
    {name: "5 hidden Chao animals in Prison Lane and finish", types: ["prisonlane"]},
    {name: "Destroy the Gold Beetle in 3 Hero Story stages", types: ["goldbeetle"]}
];
bingoList[5] = [
    {name: "Wild Canyon All Missions A-Rank", types: ["wildcanyon", "arank", "allmissions"]},
    {name: "Dry Lagoon M4 A-Rank", types: ["drylagoon", "arank"]},
    {name: "Sand Ocean M2", types: ["sandocean"]},
    {name: "Complete Sand Ocean M1 with 100+ Rings", types: ["sandocean"]},
    {name: "2 Chao Boxes in Sand Ocean and finish", types: ["sandocean"]},
    {name: "5 hidden Chao animals in Sand Ocean and finish", types: ["sandocean"]},
    {name: "City Escape M5", types: ["cityescape"]},
    {name: "Beginner Chao Karate Emblem (with a new Chao)", types: ["multistory"]},
    {name: "Dry Lagoon M5", types: ["drylagoon"]}
];
bingoList[6] = [
    {name: "City Escape M5 A-Rank", types: ["cityescape", "arank"]},
    {name: "Dry Lagoon M5 A-Rank", types: ["drylagoon", "arank"]},
    {name: "Shadow's Flame Ring", types: ["radicalhighway"]},
    {name: "Metal Harbor M2", types: ["metalharbor"]},
    {name: "2 Chao Boxes in Metal Harbor and finish", types: ["metalharbor"]},
    {name: "5 hidden Chao animals in Metal Harbor and finish", types: ["metalharbor"]},
    {name: "Pacifist Metal Harbor M1", types: ["metalharbor"]},
    {name: "Unlock Chao Garden for all Dark Story characters", types: ["chaogarden"]},
    {name: "Metal Harbor M3", types: ["metalharbor"]}
];
bingoList[7] = [
    {name: "City Escape All Missions A-Rank", types: ["cityescape", "arank", "allmissions"]},
    {name: "Dry Lagoon All Missions A-Rank", types: ["drylagoon", "arank", "allmissions"]},
    {name: "Metal Harbor M3 B-Rank", types: ["metalharbor", "brank"]},
    {name: "Radical Highway M2", types: ["radicalhighway"]},
    {name: "Complete Radical Highway M1 with 100+ Rings", types: ["radicalhighway"]},
    {name: "2 Chao Boxes in Radical Highway and finish", types: ["radicalhighway"]},
    {name: "5 hidden Chao animals in Radical Highway and finish", types: ["radicalhighway"]},
    {name: "Destroy the Gold Beetle in 3 Dark Story stages", types: ["goldbeetle"]},
    {name: "Pacifist Radical Highway M1", types: ["radicalhighway"]}
];
bingoList[8] = [
    {name: "Egg Quarters M1 Hintless", types: ["eggquarters"]},
    {name: "Metal Harbor M4", types: ["metalharbor"]},
    {name: "Radical Highway M3", types: ["radicalhighway"]},
    {name: "Rouge's Mystic Melody", types: ["drylagoon"]},
    {name: "500 Total Rings", types: ["multistory"]},
    {name: "Sonic's Ancient Light", types: ["greenforest"]}
];
bingoList[9] = [
    {name: "Metal Harbor M4 A-Rank", types: ["metalharbor", "arank"]},
    {name: "Egg Quarters M2", types: ["eggquarters"]},
    {name: "Complete Egg Quarters M1 with 100+ Rings", types: ["eggquarters"]},
    {name: "2 Chao Boxes in Egg Quarters and finish", types: ["eggquarters"]},
    {name: "5 hidden Chao animals in Egg Quarters and finish", types: ["eggquarters"]},
    {name: "Green Forest M2", types: ["greenforest"]},
    {name: "Complete Green Forest M1 with 100+ Rings", types: ["greenforest"]},
    {name: "2 Chao Boxes in Green Forest and finish", types: ["greenforest"]},
    {name: "5 hidden Chao animals in Green Forest and finish", types: ["greenforest"]},
    {name: "Pacifist Green Forest M1", types: ["greenforest"]},
    {name: "Complete Green Forest M1 with a Magnetic Shield", types: ["greenforest"]},
    {name: "Complete Egg Quarters M1 with a Magnetic Shield", types: ["eggquarters"]},
    {name: "Metal Harbor M5", types: ["metalharbor"]}
];
bingoList[10] = [
    {name: "Metal Harbor M5 A-Rank", types: ["metalharbor", "arank"]},
    {name: "Egg Quarters M3", types: ["eggquarters"]},
    {name: "Pumpkin Hill M1 Hintless", types: ["pumpkinhill"]},
    {name: "Green Forest M3", types: ["greenforest"]},
    {name: "Radical Highway M4", types: ["radicalhighway"]},
    {name: "Knuckles' Mystic Melody", types: ["wildcanyon"]},
    {name: "Dr Eggman's Mystic Melody", types: ["lostcolony"]}
];
bingoList[11] = [
    {name: "Metal Harbor All Missions A-Rank", types: ["metalharbor", "arank", "allmissions"]},
    {name: "Radical Highway M4 A-Rank", types: ["radicalhighway", "arank"]},
    {name: "Pumpkin Hill M2", types: ["pumpkinhill"]},
    {name: "Complete Pumpkin Hill M1 with 100+ Rings", types: ["pumpkinhill"]},
    {name: "2 Chao Boxes in Pumpkin Hill and finish", types: ["pumpkinhill"]},
    {name: "5 hidden Chao animals in Pumpkin Hill and finish", types: ["pumpkinhill"]},
    {name: "Pumpkin Hill M3", types: ["pumpkinhill"]},
    {name: "Egg Quarters M4", types: ["eggquarters"]},
    {name: "Destroy the Gold Beetle in 5 different stages", types: ["goldbeetle",  "multistory"]}
];
bingoList[12] = [
    {name: "Egg Quarters M4 A-Rank", types: ["eggquarters", "arank"]},
    {name: "Lost Colony M2", types: ["lostcolony"]},
    {name: "Sand Ocean M3", types: ["sandocean"]},
    {name: "Complete Lost Colony M1 with 100+ Rings", types: ["lostcolony"]},
    {name: "2 Chao Boxes in Lost Colony and finish", types: ["lostcolony"]},
    {name: "5 hidden Chao animals in Lost Colony and finish", types: ["lostcolony"]},
    {name: "Radical Highway M5", types: ["radicalhighway"]},
    {name: "Pumpkin Hill M4", types: ["pumpkinhill"]},
    {name: "10 Emblems", types: ["emblems", "multistory"]}
];
bingoList[13] = [
    {name: "Radical Highway M5 A-Rank", types: ["radicalhighway", "arank"]},
    {name: "Pumpkin Hill M4 A-Rank", types: ["pumpkinhill", "arank"]},
    {name: "Green Forest M4", types: ["greenforest"]},
    {name: "Game Over during Mission Street M1", types: ["missionstreet",  "gameover"]},
    {name: "Iron Gate M3", types: ["irongate"]},
    {name: "Egg Quarters M5", types: ["eggquarters"]},
    {name: "Unlock Chao Garden for every character", types: ["chaogarden", "multistory"]},
    {name: "Pumpkin Hill M5", types: ["pumpkinhill"]},
    {name: "Game Over during Tails 1", types: ["gameover"]},
    {name: "Weapons Bed M2", types: ["weaponsbed"]},
    {name: "Complete Weapons Bed M1 with 100+ Rings", types: ["weaponsbed"]},
    {name: "2 Chao Boxes in Weapons Bed and finish", types: ["weaponsbed"]},
    {name: "5 hidden Chao animals in Weapons Bed and finish", types: ["weaponsbed"]},
    {name: "Pacifist Weapons Bed M1", types: ["weaponsbed"]},
    {name: "Sand Ocean M4", types: ["sandocean"]},
    {name: "Knuckles' Air Necklace", types: ["aquaticmine"]},
    {name: "Aquatic Mine M1 Hintless", types: ["aquaticmine"]}
];
bingoList[14] = [
    {name: "Radical Highway All Missions A-Rank", types: ["radicalhighway", "arank", "allmissions"]},
    {name: "Green Forest M4 A-Rank", types: ["greenforest", "arank"]},
    {name: "Egg Quarters M5 A-Rank", types: ["eggquarters", "arank"]},
    {name: "Pumpkin Hill M5 A-Rank", types: ["pumpkinhill", "arank"]},
    {name: "Sand Ocean M4 A-Rank", types: ["sandocean", "arank"]},
    {name: "Rouge's Treasure Scope", types: ["securityhall"]},
    {name: "Security Hall M1 Hintless", types: ["missionstreet"]},
    {name: "Mission Street M2", types: ["missionstreet"]},
    {name: "Iron Gate M4", types: ["irongate"]},
    {name: "Complete Mission Street M1 with 100+ Rings", types: ["missionstreet"]},
    {name: "2 Chao Boxes in Mission Street and finish", types: ["missionstreet"]},
    {name: "5 hidden Chao animals in Mission Street and finish", types: ["missionstreet"]},
    {name: "Destroy the Gold Beetle in 6 Hero Story stages", types: ["goldbeetle"]},
    {name: "Pacifist Mission Street M1", types: ["missionstreet"]},
    {name: "Lost Colony M3", types: ["lostcolony"]},
    {name: "Aquatic Mine M2", types: ["aquaticmine"]},
    {name: "Weapons Bed M3", types: ["weaponsbed"]},
    {name: "Dr Eggman's Laser Blaster", types: ["irongate"]},
    {name: "Complete Aquatic Mine M1 with 100+ Rings", types: ["aquaticmine"]},
    {name: "2 Chao Boxes in Aquatic Mine and finish", types: ["aquaticmine"]},
    {name: "5 hidden Chao animals in Aquatic Mine and finish", types: ["aquaticmine"]},
    {name: "Green Forest M5", types: ["greenforest"]},
    {name: "Aquatic Mine M3", types: ["aquaticmine"]},
    {name: "Game Over during Flying Dog", types: ["gameover"]},
    {name: "Security Hall M2", types: ["securityhall"]},
    {name: "Complete Security Hall M1 with 100+ Rings", types: ["securityhall"]},
    {name: "2 Chao Boxes in Security Hall and finish", types: ["securityhall"]},
    {name: "5 hidden Chao animals in Security Hall and finish", types: ["securityhall"]},
    {name: "Complete Security Hall M1 with a Magnetic Shield", types: ["securityhall"]},
    {name: "Destroy the Gold Beetle in 6 Dark Story stages", types: ["goldbeetle"]}
];
bingoList[15] = [
    {name: "Egg Quarters All Missions A-Rank", types: ["eggquarters", "arank", "allmissions"]},
    {name: "Iron Gate M4 A-Rank", types: ["irongate", "arank"]},
    {name: "Green Forest M5 A-Rank", types: ["greenforest", "arank"]},
    {name: "Iron Gate M5", types: ["irongate"]},
    {name: "Sand Ocean M5", types: ["sandocean"]},
    {name: "Game Over during Route 101 M1", types: ["route101",  "gameover"]},
    {name: "Aquatic Mine M4", types: ["aquaticmine"]},
    {name: "Security Hall M3", types: ["securityhall"]},
    {name: "Security Hall M3 B-Rank", types: ["securityhall", "brank"]},
    {name: "Weapons Bed M4", types: ["weaponsbed"]},
    {name: "Route 101 M2", types: ["route101"]},
    {name: "Defeat both Tails 1 and Dr Eggman 1", types: ["multistory"]},
    {name: "Security Hall M4", types: ["securityhall"]},
    {name: "Lost Colony M4", types: ["lostcolony"]}
];
bingoList[16] = [
    {name: "Green Forest All Missions A-Rank", types: ["greenforest", "arank", "allmissions"]},
    {name: "Iron Gate M5 A-Rank", types: ["irongate", "arank"]},
    {name: "Sand Ocean M5 A-Rank", types: ["sandocean", "arank"]},
    {name: "Aquatic Mine M4 A-Rank", types: ["aquaticmine", "arank"]},
    {name: "Weapons Bed M4 A-Rank", types: ["weaponsbed", "arank"]},
    {name: "Security Hall M4 A-Rank", types: ["securityhall", "arank"]},
    {name: "Lost Colony M4 A-Rank", types: ["lostcolony", "arank"]},
    {name: "White Jungle M2", types: ["whitejungle"]},
    {name: "Weapons Bed M5", types: ["weaponsbed"]},
    {name: "Complete White Jungle M1 with 100+ Rings", types: ["whitejungle"]},
    {name: "2 Chao Boxes in White Jungle and finish", types: ["whitejungle"]},
    {name: "5 hidden Chao animals in White Jungle and finish", types: ["whitejungle"]},
    {name: "Game Over during Sonic 1", types: ["gameover"]},
    {name: "Pacifist White Jungle M1", types: ["whitejungle"]},
    {name: "Beginner Kart Racing Emblem", types: ["multistory"]},
    {name: "Security Hall M5", types: ["securityhall"]},
    {name: "Route 101 M3", types: ["route101"]}
];
bingoList[17] = [
    {name: "Weapons Bed M5 A-Rank", types: ["weaponsbed", "arank"]},
    {name: "Security Hall M5 A-Rank", types: ["securityhall", "arank"]},
    {name: "Hidden Base M2", types: ["hiddenbase"]},
    {name: "Complete Hidden Base M1 with 100+ Rings", types: ["hiddenbase"]},
    {name: "2 Chao Boxes in Hidden Base and finish", types: ["hiddenbase"]},
    {name: "5 hidden Chao animals in Hidden Base and finish", types: ["hiddenbase"]},
    {name: "White Jungle M3", types: ["whitejungle"]},
    {name: "Game Over during Pyramid Cave M1", types: ["pyramidcave",  "gameover"]},
    {name: "Pyramid Cave M2", types: ["pyramidcave"]},
    {name: "Lost Colony M5", types: ["lostcolony"]},
    {name: "Complete Pyramid Cave M1 with 100+ Rings", types: ["pyramidcave"]},
    {name: "2 Chao Boxes in Pyramid Cave and finish", types: ["pyramidcave"]},
    {name: "5 hidden Chao animals in Pyramid Cave and finish", types: ["pyramidcave"]},
    {name: "Game Over during Route 280 M1", types: ["route280",  "gameover"]},
    {name: "Route 101 M4", types: ["route101"]}
];
bingoList[18] = [
    {name: "Lost Colony M5 A-Rank", types: ["lostcolony", "arank"]},
    {name: "Route 101 M4 A-Rank", types: ["route101", "arank"]},
    {name: "Hidden Base M3", types: ["hiddenbase"]},
    {name: "Death Chamber M1 Hintless", types: ["deathchamber"]},
    {name: "Route 280 M2", types: ["route280"]},
    {name: "Pyramid Cave M3", types: ["pyramidcave"]},
    {name: "White Jungle M4", types: ["whitejungle"]},
    {name: "Shadow's Ancient Light", types: ["skyrail"]},
    {name: "Game Over during King Boom Boo", types: ["gameover"]},
    {name: "Death Chamber M2", types: ["deathchamber"]},
    {name: "Complete Death Chamber M1 with 100+ Rings", types: ["deathchamber"]},
    {name: "2 Chao Boxes in Death Chamber and finish", types: ["deathchamber"]},
    {name: "5 hidden Chao animals in Death Chamber and finish", types: ["deathchamber"]}
];
bingoList[19] = [
    {name: "Lost Colony All Missions A-Rank", types: ["lostcolony", "arank", "allmissions"]},
    {name: "White Jungle M4 A-Rank", types: ["whitejungle", "arank"]},
    {name: "Hidden Base M4", types: ["hiddenbase"]},
    {name: "Route 101 M5", types: ["route101"]},
    {name: "Sky Rail M2", types: ["skyrail"]},
    {name: "Complete Sky Rail M1 with 100+ Rings", types: ["skyrail"]},
    {name: "2 Chao Boxes in Sky Rail and finish", types: ["skyrail"]},
    {name: "5 hidden Chao animals in Sky Rail and finish", types: ["skyrail"]},
    {name: "Death Chamber M3", types: ["deathchamber"]},
    {name: "Pyramid Cave M4", types: ["pyramidcave"]},
    {name: "Sky Rail M3", types: ["skyrail"]},
    {name: "White Jungle M5", types: ["whitejungle"]},
    {name: "All Kart Racing Emblems", types: ["multistory"]},
    {name: "Mad Space M1 Hintless", types: ["madspace"]},
    {name: "Death Chamber M4", types: ["deathchamber"]},
    {name: "Route 280 M3", types: ["route280"]},
    {name: "Finish any mission with 25+ Lives (No Underflow)", types: ["multistory"]}
];
bingoList[20] = [
    {name: "Hidden Base M4 A-Rank", types: ["hiddenbase", "arank"]},
    {name: "Route 101 M5 A-Rank", types: ["route101", "arank"]},
    {name: "Pyramid Cave M4 A-Rank", types: ["pyramidcave", "arank"]},
    {name: "White Jungle M5 A-Rank", types: ["whitejungle", "arank"]},
    {name: "Death Chamber M4 A-Rank", types: ["deathchamber", "arank"]},
    {name: "Hidden Base M5", types: ["hiddenbase"]},
    {name: "Mad Space M2", types: ["madspace"]},
    {name: "Complete Mad Space M1 with 100+ Rings", types: ["madspace"]},
    {name: "2 Chao Boxes in Mad Space and finish", types: ["madspace"]},
    {name: "5 hidden Chao animals in Mad Space and finish", types: ["madspace"]},
    {name: "Sky Rail M4", types: ["skyrail"]},
    {name: "Pyramid Cave M5", types: ["pyramidcave"]},
    {name: "Death Chamber M5", types: ["deathchamber"]},
    {name: "Defeat both Shadow 1 and Sonic 1", types: ["multistory"]}
];
bingoList[21] = [
    {name: "Hidden Base M5 A-Rank", types: ["hiddenbase", "arank"]},
    {name: "Sky Rail M4 A-Rank", types: ["skyrail", "arank"]},
    {name: "Pyramid Cave M5 A-Rank", types: ["pyramidcave", "arank"]},
    {name: "Death Chamber M5 A-Rank", types: ["deathchamber", "arank"]},
    {name: "Sky Rail M5", types: ["skyrail"]},
    {name: "Mad Space M3", types: ["madspace"]},
    {name: "Route 280 M4", types: ["route280"]},
    {name: "Eternal Engine M2", types: ["eternalengine"]},
    {name: "Mad Space M4", types: ["madspace"]},
    {name: "Dr Eggman's Protective Armor", types: ["cosmicwall"]},
    {name: "Complete Eternal Engine M1 with 100+ Rings", types: ["eternalengine"]},
    {name: "2 Chao Boxes in Eternal Engine and finish", types: ["eternalengine"]},
    {name: "5 hidden Chao animals in Eternal Engine and finish", types: ["eternalengine"]},
    {name: "Complete Eternal Engine M1 with a Green Shield", types: ["eternalengine"]},
    {name: "Meteor Herd M1 Hintless", types: ["meteorherd"]}
];
bingoList[22] = [
    {name: "Sky Rail M5 A-Rank", types: ["skyrail", "arank"]},
    {name: "Route 280 M4 A-Rank", types: ["route280", "arank"]},
    {name: "Mad Space M4 A-Rank", types: ["madspace", "arank"]},
    {name: "Knuckles' Sunglasses", types: ["meteorherd"]},
    {name: "Tails' Mystic Melody", types: ["eternalengine"]},
    {name: "Meteor Herd M2", types: ["meteorherd"]},
    {name: "Tails' Laser Blaster", types: ["eternalengine"]},
    {name: "Complete Meteor Herd M1 with 100+ Rings", types: ["meteorherd"]},
    {name: "2 Chao Boxes in Meteor Herd and finish", types: ["meteorherd"]},
    {name: "5 hidden Chao animals in Meteor Herd and finish", types: ["meteorherd"]},
    {name: "20 Emblems", types: ["emblems", "multistory"]},
    {name: "Destroy the Gold Beetle in 10 different stages", types: ["goldbeetle",  "multistory"]},
    {name: "Prison Lane M3", types: ["prisonlane"]},
    {name: "Mad Space M5", types: ["madspace"]},
    {name: "Meteor Herd M3", types: ["meteorherd"]},
    {name: "Route 280 M5", types: ["route280"]}
];
bingoList[23] = [
    {name: "Mad Space M5 A-Rank", types: ["madspace", "arank"]},
    {name: "Route 280 M5 A-Rank", types: ["route280", "arank"]},
    {name: "Mission Street M3", types: ["missionstreet"]},
    {name: "Eternal Engine M3", types: ["eternalengine"]},
    {name: "Aquatic Mine M5", types: ["aquaticmine"]},
    {name: "Meteor Herd M4", types: ["meteorherd"]},
    {name: "Sonic's Flame Ring", types: ["crazygadget"]},
    {name: "Prison Lane M4", types: ["prisonlane"]},
    {name: "Meteor Herd M5", types: ["meteorherd"]},
    {name: "Cosmic Wall M2", types: ["cosmicwall"]},
    {name: "Complete Cosmic Wall M1 with 100+ Rings", types: ["cosmicwall"]},
    {name: "5 hidden Chao animals in Cosmic Wall and finish", types: ["cosmicwall"]},
    {name: "Crazy Gadget M2", types: ["crazygadget"]},
    {name: "Complete Crazy Gadget M1 with 100+ Rings", types: ["crazygadget"]},
    {name: "2 Chao Boxes in Crazy Gadget and finish", types: ["crazygadget"]},
    {name: "5 hidden Chao animals in Crazy Gadget and finish", types: ["crazygadget"]}
];
bingoList[24] = [
    {name: "Aquatic Mine M5 A-Rank", types: ["aquaticmine", "arank"]},
    {name: "Meteor Herd M4 A-Rank", types: ["meteorherd", "arank"]},
    {name: "Prison Lane M4 A-Rank", types: ["prisonlane", "arank"]},
    {name: "Meteor Herd M5 A-Rank", types: ["meteorherd", "arank"]},
    {name: "Mission Street M4", types: ["missionstreet"]},
    {name: "Cosmic Wall M3", types: ["cosmicwall"]},
    {name: "Eternal Engine M4", types: ["eternalengine"]},
    {name: "Sonic's Mystic Melody", types: ["finalrush"]},
    {name: "Prison Lane M5", types: ["prisonlane"]},
    {name: "Sonic's Magic Gloves", types: ["crazygadget"]},
    {name: "Crazy Gadget M3", types: ["crazygadget"]},
    {name: "1500 Total Rings", types: ["multistory"]},
    {name: "Shadow's Mystic Melody", types: ["finalchase"]},
    {name: "Final Rush M2", types: ["finalrush"]},
    {name: "Complete Final Rush M1 with 100+ Rings", types: ["finalrush"]},
    {name: "2 Chao Boxes in Final Rush and finish", types: ["finalrush"]},
    {name: "5 hidden Chao animals in Final Rush and finish", types: ["finalrush"]},
    {name: "Mission Street M5", types: ["missionstreet"]},
    {name: "Crazy Gadget M4", types: ["crazygadget"]},
    {name: "Final Chase M2", types: ["finalchase"]},
    {name: "Complete Final Chase M1 with 100+ Rings", types: ["finalchase"]},
    {name: "2 Chao Boxes in Final Chase and finish", types: ["finalchase"]},
    {name: "5 hidden Chao animals in Final Chase and finish", types: ["finalchase"]},
    {name: "All Hero Story Character's Upgrades", types: ["finalrush"]},
    {name: "All Dark Story Character's Upgrades", types: ["finalchase"]}
];
bingoList[25] = [
    {name: "60 Emblems (Team Combined)", types: ["emblems"]}
];
