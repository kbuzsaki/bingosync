bingoGenerator = require("./generators/generator_bases/srl_generator_v8.js");

var bingoList = [];
bingoList[1] = [
    {name: "Rename a Chao after a person you're racing", types: ["chaogarden", "multistory"]},
    {name: "Iron Gate M2", types: ["irongate"]},
    {name: "Complete Iron Gate M1 with 100+ Rings", types: ["irongate"]},
    {name: "2 Chao Boxes in Iron Gate and finish", types: ["irongate"]},
    {name: "5 hidden Chao animals in Iron Gate and finish", types: ["irongate"]},
    {name: "Dry Lagoon M1 Hintless", types: ["drylagoon"]}
];
bingoList[2] = [
    {name: "Dry Lagoon M2", types: ["drylagoon"]},
    {name: "Complete Dry Lagoon M1 with 100+ Rings", types: ["drylagoon"]},
    {name: "2 Chao Boxes in Dry Lagoon and finish", types: ["drylagoon"]},
    {name: "5 hidden Chao animals in Dry Lagoon and finish", types: ["drylagoon"]},
    {name: "Dry Lagoon M3", types: ["drylagoon"]},
    {name: "Dry Lagoon M3 B-Rank", types: ["drylagoon", "brank"]}
];
bingoList[3] = [
    {name: "Complete Sand Ocean M1 with 100+ Rings", types: ["sandocean"]},
    {name: "2 Chao Boxes in Sand Ocean and finish", types: ["sandocean"]},
    {name: "Beginner Chao Karate Emblem (with a new Chao)", types: ["multistory"]},
    {name: "Dry Lagoon M4", types: ["drylagoon"]},
    {name: "Dry Lagoon M5", types: ["drylagoon"]},
    {name: "5 hidden Chao animals in Sand Ocean and finish", types: ["sandocean"]}
];
bingoList[4] = [
    {name: "Sand Ocean M2", types: ["sandocean"]},
    {name: "Dry Lagoon M5 A-Rank", types: ["drylagoon", "arank"]},
    {name: "Shadow's Flame Ring", types: ["radicalhighway"]},
    {name: "Dry Lagoon M4 A-Rank", types: ["drylagoon", "arank"]},
    {name: "Destroy the Gold Beetle in 3 different stages", types: ["goldbeetle"]},
    {name: "Pacifist Radical Highway M1", types: ["radicalhighway"]}
];
bingoList[5] = [
    {name: "Dry Lagoon All Missions A-Rank", types: ["drylagoon", "arank", "allmissions"]},
    {name: "Unlock Chao Garden for all characters", types: ["chaogarden"]},
    {name: "Complete Radical Highway M1 with 100+ Rings", types: ["radicalhighway"]},
    {name: "2 Chao Boxes in Radical Highway and finish", types: ["radicalhighway"]},
    {name: "5 hidden Chao animals in Radical Highway and finish", types: ["radicalhighway"]}
];
bingoList[6] = [
    {name: "Egg Quarters M1 Hintless", types: ["eggquarters"]},
    {name: "Radical Highway M2", types: ["radicalhighway"]},
    {name: "2 Chao Boxes in Egg Quarters and finish", types: ["eggquarters"]},
    {name: "Rouge's Mystic Melody", types: ["drylagoon"]},
    {name: "500 Total Rings", types: ["multistory"]}
];
bingoList[7] = [
    {name: "Egg Quarters M2", types: ["eggquarters"]},
    {name: "Complete Egg Quarters M1 with 100+ Rings", types: ["eggquarters"]},
    {name: "Radical Highway M3", types: ["radicalhighway"]},
    {name: "5 hidden Chao animals in Egg Quarters and finish", types: ["eggquarters"]},
    {name: "Complete Egg Quarters M1 with a Magnetic Shield", types: ["eggquarters"]}
];
bingoList[8] = [
    {name: "Egg Quarters M3", types: ["eggquarters"]},
    {name: "Radical Highway M4", types: ["radicalhighway"]},
    {name: "Dr Eggman's Mystic Melody", types: ["lostcolony"]},
    {name: "Radical Highway M4 A-Rank", types: ["radicalhighway", "arank"]},
    {name: "Egg Quarters M4", types: ["eggquarters"]},
    {name: "Destroy the Gold Beetle in 5 different stages", types: ["goldbeetle",  "multistory"]}
];
bingoList[9] = [
    {name: "Egg Quarters M4 A-Rank", types: ["eggquarters", "arank"]},
    {name: "Lost Colony M2", types: ["lostcolony"]},
    {name: "Sand Ocean M3", types: ["sandocean"]},
    {name: "Complete Lost Colony M1 with 100+ Rings", types: ["lostcolony"]},
    {name: "2 Chao Boxes in Lost Colony and finish", types: ["lostcolony"]},
    {name: "5 hidden Chao animals in Lost Colony and finish", types: ["lostcolony"]},
    {name: "Radical Highway M5", types: ["radicalhighway"]},
    {name: "10 Emblems", types: ["emblems", "multistory"]}
];
bingoList[10] = [
    {name: "Radical Highway M5 A-Rank", types: ["radicalhighway", "arank"]},
    {name: "Iron Gate M3", types: ["irongate"]},
    {name: "Egg Quarters M5", types: ["eggquarters"]},
    {name: "Game Over during Tails 1", types: ["gameover"]},
    {name: "Weapons Bed M2", types: ["weaponsbed"]},
    {name: "Complete Weapons Bed M1 with 100+ Rings", types: ["weaponsbed"]},
    {name: "2 Chao Boxes in Weapons Bed and finish", types: ["weaponsbed"]},
    {name: "5 hidden Chao animals in Weapons Bed and finish", types: ["weaponsbed"]},
    {name: "Pacifist Weapons Bed M1", types: ["weaponsbed"]},
    {name: "Sand Ocean M4", types: ["sandocean"]}
];
bingoList[11] = [
    {name: "Radical Highway All Missions A-Rank", types: ["radicalhighway", "arank", "allmissions"]},
    {name: "Egg Quarters M5 A-Rank", types: ["eggquarters", "arank"]},
    {name: "Sand Ocean M4 A-Rank", types: ["sandocean", "arank"]},
    {name: "Rouge's Treasure Scope", types: ["securityhall"]},
    {name: "Security Hall M1 Hintless", types: ["securityhall"]},
    {name: "Iron Gate M4", types: ["irongate"]},
    {name: "Lost Colony M3", types: ["lostcolony"]},
    {name: "Weapons Bed M3", types: ["weaponsbed"]},
    {name: "Dr Eggman's Laser Blaster", types: ["irongate"]}
];
bingoList[12] = [
    {name: "Game Over during Flying Dog", types: ["gameover"]},
    {name: "Security Hall M2", types: ["securityhall"]},
    {name: "Complete Security Hall M1 with 100+ Rings", types: ["securityhall"]},
    {name: "2 Chao Boxes in Security Hall and finish", types: ["securityhall"]},
    {name: "5 hidden Chao animals in Security Hall and finish", types: ["securityhall"]},
    {name: "Complete Security Hall M1 with a Magnetic Shield", types: ["securityhall"]}
];
bingoList[13] = [
    {name: "Egg Quarters All Missions A-Rank", types: ["eggquarters", "arank", "allmissions"]},
    {name: "Iron Gate M4 A-Rank", types: ["irongate", "arank"]},
    {name: "Iron Gate M5", types: ["irongate"]},
    {name: "Sand Ocean M5", types: ["sandocean"]},
    {name: "Security Hall M3", types: ["securityhall"]},
    {name: "Security Hall M3 B-Rank", types: ["securityhall", "brank"]},
    {name: "Weapons Bed M4", types: ["weaponsbed"]},
    {name: "Security Hall M4", types: ["securityhall"]},
    {name: "Lost Colony M4", types: ["lostcolony"]}
];
bingoList[14] = [
    {name: "Iron Gate M5 A-Rank", types: ["irongate", "arank"]},
    {name: "Sand Ocean M5 A-Rank", types: ["sandocean", "arank"]},
    {name: "Weapons Bed M4 A-Rank", types: ["weaponsbed", "arank"]},
    {name: "Security Hall M4 A-Rank", types: ["securityhall", "arank"]},
    {name: "Lost Colony M4 A-Rank", types: ["lostcolony", "arank"]},
    {name: "White Jungle M2", types: ["whitejungle"]},
    {name: "Weapons Bed M5", types: ["weaponsbed"]},
    {name: "Complete White Jungle M1 with 100+ Rings", types: ["whitejungle"]}
];
bingoList[15] = [
    {name: "2 Chao Boxes in White Jungle and finish", types: ["whitejungle"]},
    {name: "5 hidden Chao animals in White Jungle and finish", types: ["whitejungle"]},
    {name: "Game Over during Sonic 1", types: ["gameover"]},
    {name: "Pacifist White Jungle M1", types: ["whitejungle"]},
    {name: "Beginner Kart Racing Emblem", types: ["multistory"]},
    {name: "Security Hall M5", types: ["securityhall"]}
];
bingoList[16] = [
    {name: "Weapons Bed M5 A-Rank", types: ["weaponsbed", "arank"]},
    {name: "Security Hall M5 A-Rank", types: ["securityhall", "arank"]},
    {name: "White Jungle M3", types: ["whitejungle"]},
    {name: "Lost Colony M5", types: ["lostcolony"]},
    {name: "Game Over during Route 280 M1", types: ["route280",  "gameover"]}
];
bingoList[17] = [
    {name: "Lost Colony M5 A-Rank", types: ["lostcolony", "arank"]},
    {name: "Route 280 M2", types: ["route280"]},
    {name: "White Jungle M4", types: ["whitejungle"]},
    {name: "Complete Sky Rail M1 with 100+ Rings", types: ["skyrail"]},
    {name: "Shadow's Ancient Light", types: ["skyrail"]}
];
bingoList[18] = [
    {name: "Lost Colony All Missions A-Rank", types: ["lostcolony", "arank", "allmissions"]},
    {name: "Sky Rail M2", types: ["skyrail"]},
    {name: "2 Chao Boxes in Sky Rail and finish", types: ["skyrail"]},
    {name: "Route 280 M3", types: ["route280"]},
    {name: "White Jungle M5", types: ["whitejungle"]}
];
bingoList[19] = [
    {name: "All Kart Racing Emblems", types: ["multistory"]},
    {name: "5 hidden Chao animals in Sky Rail and finish", types: ["skyrail"]},
    {name: "Sky Rail M3", types: ["skyrail"]},
    {name: "Mad Space M1 Hintless", types: ["madspace"]},
    {name: "Finish any mission with 25+ Lives (No Underflow)", types: ["multistory"]}
];
bingoList[20] = [
    {name: "White Jungle M5 A-Rank", types: ["whitejungle", "arank"]},
    {name: "Mad Space M2", types: ["madspace"]},
    {name: "Complete Mad Space M1 with 100+ Rings", types: ["madspace"]},
    {name: "2 Chao Boxes in Mad Space and finish", types: ["madspace"]},
    {name: "5 hidden Chao animals in Mad Space and finish", types: ["madspace"]},
    {name: "Sky Rail M4", types: ["skyrail"]}
];
bingoList[21] = [
    {name: "Sky Rail M4 A-Rank", types: ["skyrail", "arank"]},
    {name: "Sky Rail M5", types: ["skyrail"]},
    {name: "Mad Space M3", types: ["madspace"]},
    {name: "Route 280 M4", types: ["route280"]},
    {name: "Mad Space M4", types: ["madspace"]},
    {name: "Dr Eggman's Protective Armor", types: ["cosmicwall"]}
];
bingoList[22] = [
    {name: "Sky Rail M5 A-Rank", types: ["skyrail", "arank"]},
    {name: "Route 280 M4 A-Rank", types: ["route280", "arank"]},
    {name: "Mad Space M4 A-Rank", types: ["madspace", "arank"]},
    {name: "20 Emblems", types: ["emblems", "multistory"]},
    {name: "Destroy the Gold Beetle in 9 different stages", types: ["goldbeetle",  "multistory"]},
    {name: "Mad Space M5", types: ["madspace"]},
    {name: "Route 280 M5", types: ["route280"]}
];
bingoList[23] = [
    {name: "Mad Space M5 A-Rank", types: ["madspace", "arank"]},
    {name: "Route 280 M5 A-Rank", types: ["route280", "arank"]},
    {name: "Cosmic Wall M2", types: ["cosmicwall"]},
    {name: "Complete Cosmic Wall M1 with 100+ Rings", types: ["cosmicwall"]},
    {name: "5 hidden Chao animals in Cosmic Wall and finish", types: ["cosmicwall"]}
];
bingoList[24] = [
    {name: "Cosmic Wall M3", types: ["cosmicwall"]},
    {name: "1500 Total Rings", types: ["multistory"]},
    {name: "Complete Final Chase M1 with 100+ Rings", types: ["finalchase"]},
    {name: "Shadow's Mystic Melody", types: ["finalchase"]}
];
bingoList[25] = [
    {name: "Final Chase M2", types: ["finalchase"]},
    {name: "2 Chao Boxes in Final Chase and finish", types: ["finalchase"]},
    {name: "5 hidden Chao animals in Final Chase and finish", types: ["finalchase"]},
    {name: "All Dark Story Character's Upgrades", types: ["finalchase"]}
];
