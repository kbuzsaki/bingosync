bingoGenerator = require("./generators/generator_bases/srl_generator_v8.js");

var bingoList = [];
bingoList[1] = [
    {name: "City Escape M2", types: ["cityescape"]},
    {name: "2 Chao Boxes in City Escape and finish", types: ["cityescape"]},
    {name: "5 hidden Chao animals in City Escape and finish", types: ["cityescape"]},
    {name: "Rename a Chao after a person you're racing", types: ["chaogarden"]},
    {name: "Wild Canyon M1 Hintless", types: ["wildcanyon"]},
    {name: "City Escape M3", types: ["cityescape"]},
    {name: "Complete City Escape M1 with a Magnetic Shield", types: ["cityescape"]},
    {name: "Wild Canyon M2", types: ["wildcanyon"]},
    {name: "Complete Wild Canyon M1 with 100+ Rings", types: ["wildcanyon"]},
    {name: "2 Chao Boxes in Wild Canyon and finish", types: ["wildcanyon"]},
    {name: "5 hidden Chao animals in Wild Canyon and finish", types: ["wildcanyon"]},
    {name: "Wild Canyon M3", types: ["wildcanyon"]}
];
bingoList[2] = [
    {name: "Wild Canyon M3 B-Rank", types: ["wildcanyon", "brank"]},
    {name: "Wild Canyon M4", types: ["wildcanyon"]}
];
bingoList[3] = [
    {name: "Wild Canyon M4 A-Rank", types: ["wildcanyon", "arank"]},
    {name: "City Escape M4", types: ["cityescape"]},
    {name: "Wild Canyon M5", types: ["wildcanyon"]},
    {name: "Unlock Chao Garden for all Hero Story characters", types: ["chaogarden"]}
];
bingoList[4] = [
    {name: "City Escape M4 A-Rank", types: ["cityescape", "arank"]},
    {name: "Wild Canyon M5 A-Rank", types: ["wildcanyon", "arank"]},
    {name: "Prison Lane M2", types: ["prisonlane"]},
    {name: "Complete Prison Lane M1 with 100+ Rings", types: ["prisonlane"]},
    {name: "2 Chao Boxes in Prison Lane and finish", types: ["prisonlane"]},
    {name: "5 hidden Chao animals in Prison Lane and finish", types: ["prisonlane"]},
    {name: "Complete Prison Lane M1 with a Green Shield", types: ["prisonlane"]},
    {name: "Destroy the Gold Beetle in 3 different stages", types: ["goldbeetle"]}
];
bingoList[5] = [
    {name: "Wild Canyon All Missions A-Rank", types: ["wildcanyon", "arank", "allmissions"]},
    {name: "City Escape M5", types: ["cityescape"]},
    {name: "Beginner Chao Karate Emblem (with a new Chao)", types: ["chaogarden"]}
];
bingoList[6] = [
    {name: "City Escape M5 A-Rank", types: ["cityescape", "arank"]},
    {name: "Metal Harbor M2", types: ["metalharbor"]},
    {name: "2 Chao Boxes in Metal Harbor and finish", types: ["metalharbor"]},
    {name: "5 hidden Chao animals in Metal Harbor and finish", types: ["metalharbor"]},
    {name: "Pacifist Metal Harbor M1", types: ["metalharbor"]},
    {name: "Metal Harbor M3", types: ["metalharbor"]}
];
bingoList[7] = [
    {name: "City Escape All Missions A-Rank", types: ["cityescape", "arank", "allmissions"]},
    {name: "Metal Harbor M3 B-Rank", types: ["metalharbor", "brank"]}
];
bingoList[8] = [
    {name: "Metal Harbor M4", types: ["metalharbor"]},
    {name: "500 Total Rings", types: ["rings"]},
    {name: "Sonic's Ancient Light", types: ["greenforest"]}
];
bingoList[9] = [
    {name: "Metal Harbor M4 A-Rank", types: ["metalharbor", "arank"]},
    {name: "Green Forest M2", types: ["greenforest"]},
    {name: "Complete Green Forest M1 with 100+ Rings", types: ["greenforest"]},
    {name: "2 Chao Boxes in Green Forest and finish", types: ["greenforest"]},
    {name: "5 hidden Chao animals in Green Forest and finish", types: ["greenforest"]},
    {name: "Pacifist Green Forest M1", types: ["greenforest"]},
    {name: "Complete Green Forest M1 with a Magnetic Shield", types: ["greenforest"]},
    {name: "Metal Harbor M5", types: ["metalharbor"]}
];
bingoList[10] = [
    {name: "Metal Harbor M5 A-Rank", types: ["metalharbor", "arank"]},
    {name: "Pumpkin Hill M1 Hintless", types: ["pumpkinhill"]},
    {name: "Green Forest M3", types: ["greenforest"]},
    {name: "Knuckles' Mystic Melody", types: ["wildcanyon"]}
];
bingoList[11] = [
    {name: "Metal Harbor All Missions A-Rank", types: ["metalharbor", "arank", "allmissions"]},
    {name: "Pumpkin Hill M2", types: ["pumpkinhill"]},
    {name: "Complete Pumpkin Hill M1 with 100+ Rings", types: ["pumpkinhill"]},
    {name: "2 Chao Boxes in Pumpkin Hill and finish", types: ["pumpkinhill"]},
    {name: "5 hidden Chao animals in Pumpkin Hill and finish", types: ["pumpkinhill"]},
    {name: "Pumpkin Hill M3", types: ["pumpkinhill"]}
];
bingoList[12] = [
    {name: "Pumpkin Hill M4", types: ["pumpkinhill"]},
    {name: "10 Emblems", types: ["emblems"]}
];
bingoList[13] = [
    {name: "Pumpkin Hill M4 A-Rank", types: ["pumpkinhill", "arank"]},
    {name: "Green Forest M4", types: ["greenforest"]},
    {name: "Game Over during Mission Street M1", types: ["missionstreet",  "gameover"]},
    {name: "Pumpkin Hill M5", types: ["pumpkinhill"]},
    {name: "Knuckles' Air Necklace", types: ["aquaticmine"]},
    {name: "Aquatic Mine M1 Hintless", types: ["aquaticmine"]}
];
bingoList[14] = [
    {name: "Green Forest M4 A-Rank", types: ["greenforest", "arank"]},
    {name: "Pumpkin Hill M5 A-Rank", types: ["pumpkinhill", "arank"]},
    {name: "Mission Street M2", types: ["missionstreet"]},
    {name: "Complete Mission Street M1 with 100+ Rings", types: ["missionstreet"]},
    {name: "2 Chao Boxes in Mission Street and finish", types: ["missionstreet"]},
    {name: "5 hidden Chao animals in Mission Street and finish", types: ["missionstreet"]},
    {name: "Destroy the Gold Beetle in 6 different stages", types: ["goldbeetle"]},
    {name: "Pacifist Mission Street M1", types: ["missionstreet"]},
    {name: "Aquatic Mine M2", types: ["aquaticmine"]},
    {name: "Complete Aquatic Mine M1 with 100+ Rings", types: ["aquaticmine"]},
    {name: "2 Chao Boxes in Aquatic Mine and finish", types: ["aquaticmine"]},
    {name: "5 hidden Chao animals in Aquatic Mine and finish", types: ["aquaticmine"]},
    {name: "Green Forest M5", types: ["greenforest"]},
    {name: "Aquatic Mine M3", types: ["aquaticmine"]}
];
bingoList[15] = [
    {name: "Green Forest M5 A-Rank", types: ["greenforest", "arank"]},
    {name: "Game Over during Route 101 M1", types: ["route101",  "gameover"]},
    {name: "Aquatic Mine M4", types: ["aquaticmine"]},
    {name: "Route 101 M2", types: ["route101"]}
];
bingoList[16] = [
    {name: "Green Forest All Missions A-Rank", types: ["greenforest", "arank", "allmissions"]},
    {name: "Aquatic Mine M4 A-Rank", types: ["aquaticmine", "arank"]},
    {name: "Route 101 M3", types: ["route101"]}
];
bingoList[17] = [
    {name: "Hidden Base M2", types: ["hiddenbase"]},
    {name: "Complete Hidden Base M1 with 100+ Rings", types: ["hiddenbase"]},
    {name: "2 Chao Boxes in Hidden Base and finish", types: ["hiddenbase"]},
    {name: "5 hidden Chao animals in Hidden Base and finish", types: ["hiddenbase"]},
    {name: "Game Over during Pyramid Cave M1", types: ["pyramidcave", "gameover"]},
    {name: "Pyramid Cave M2", types: ["pyramidcave"]},
    {name: "Complete Pyramid Cave M1 with 100+ Rings", types: ["pyramidcave"]},
    {name: "2 Chao Boxes in Pyramid Cave and finish", types: ["pyramidcave"]},
    {name: "5 hidden Chao animals in Pyramid Cave and finish", types: ["pyramidcave"]},
    {name: "Route 101 M4", types: ["route101"]}
];
bingoList[18] = [
    {name: "Route 101 M4 A-Rank", types: ["route101", "arank"]},
    {name: "Hidden Base M3", types: ["hiddenbase"]},
    {name: "Death Chamber M1 Hintless", types: ["deathchamber"]},
    {name: "Pyramid Cave M3", types: ["pyramidcave"]},
    {name: "Game Over during King Boom Boo", types: ["gameover"]},
    {name: "Death Chamber M2", types: ["deathchamber"]},
    {name: "Complete Death Chamber M1 with 100+ Rings", types: ["deathchamber"]},
    {name: "2 Chao Boxes in Death Chamber and finish", types: ["deathchamber"]},
    {name: "5 hidden Chao animals in Death Chamber and finish", types: ["deathchamber"]}
];
bingoList[19] = [
    {name: "Hidden Base M4", types: ["hiddenbase"]},
    {name: "Route 101 M5", types: ["route101"]},
    {name: "Death Chamber M3", types: ["deathchamber"]},
    {name: "Pyramid Cave M4", types: ["pyramidcave"]},
    {name: "Death Chamber M4", types: ["deathchamber"]},
    {name: "Finish any mission with 25+ Lives (No Underflow)", types: ["gameover"]}
];
bingoList[20] = [
    {name: "Hidden Base M4 A-Rank", types: ["hiddenbase", "arank"]},
    {name: "Route 101 M5 A-Rank", types: ["route101", "arank"]},
    {name: "Pyramid Cave M4 A-Rank", types: ["pyramidcave", "arank"]},
    {name: "Death Chamber M4 A-Rank", types: ["deathchamber", "arank"]},
    {name: "Hidden Base M5", types: ["hiddenbase"]},
    {name: "Pyramid Cave M5", types: ["pyramidcave"]},
    {name: "Death Chamber M5", types: ["deathchamber"]}
];
bingoList[21] = [
    {name: "Hidden Base M5 A-Rank", types: ["hiddenbase", "arank"]},
    {name: "Pyramid Cave M5 A-Rank", types: ["pyramidcave", "arank"]},
    {name: "Death Chamber M5 A-Rank", types: ["deathchamber", "arank"]},
    {name: "Eternal Engine M2", types: ["eternalengine"]},
    {name: "Complete Eternal Engine M1 with 100+ Rings", types: ["eternalengine"]},
    {name: "2 Chao Boxes in Eternal Engine and finish", types: ["eternalengine"]},
    {name: "5 hidden Chao animals in Eternal Engine and finish", types: ["eternalengine"]},
    {name: "Complete Eternal Engine M1 with a Magnetic Shield", types: ["eternalengine"]},
    {name: "Meteor Herd M1 Hintless", types: ["meteorherd"]}
];
bingoList[22] = [
    {name: "Knuckles' Sunglasses", types: ["meteorherd"]},
    {name: "Tails' Mystic Melody", types: ["eternalengine"]},
    {name: "Meteor Herd M2", types: ["meteorherd"]},
    {name: "Tails' Laser Blaster", types: ["eternalengine"]},
    {name: "Complete Meteor Herd M1 with 100+ Rings", types: ["meteorherd"]},
    {name: "2 Chao Boxes in Meteor Herd and finish", types: ["meteorherd"]},
    {name: "5 hidden Chao animals in Meteor Herd and finish", types: ["meteorherd"]},
    {name: "20 Emblems", types: ["emblems"]},
    {name: "Destroy the Gold Beetle in 9 different stages", types: ["goldbeetle"]},
    {name: "Prison Lane M3", types: ["prisonlane"]},
    {name: "Meteor Herd M3", types: ["meteorherd"]}
];
bingoList[23] = [
    {name: "Mission Street M3", types: ["missionstreet"]},
    {name: "Eternal Engine M3", types: ["eternalengine"]},
    {name: "Aquatic Mine M5", types: ["aquaticmine"]},
    {name: "Meteor Herd M4", types: ["meteorherd"]},
    {name: "Sonic's Flame Ring", types: ["crazygadget"]},
    {name: "Prison Lane M4", types: ["prisonlane"]},
    {name: "Meteor Herd M5", types: ["meteorherd"]},
    {name: "Crazy Gadget M2", types: ["crazygadget"]},
    {name: "Complete Crazy Gadget M1 with 100+ Rings", types: ["crazygadget"]},
    {name: "2 Chao Boxes in Crazy Gadget and finish", types: ["crazygadget"]},
    {name: "5 hidden Chao animals in Crazy Gadget and finish", types: ["crazygadget"]},
    {name: "Complete Crazy Gadget M1 with a Magnetic Shield", types: ["crazygadget"]}
];
bingoList[24] = [
    {name: "Aquatic Mine M5 A-Rank", types: ["aquaticmine", "arank"]},
    {name: "Meteor Herd M4 A-Rank", types: ["meteorherd", "arank"]},
    {name: "Prison Lane M4 A-Rank", types: ["prisonlane", "arank"]},
    {name: "Meteor Herd M5 A-Rank", types: ["meteorherd", "arank"]},
    {name: "Mission Street M4", types: ["missionstreet"]},
    {name: "Eternal Engine M4", types: ["eternalengine"]},
    {name: "Sonic's Mystic Melody", types: ["finalrush"]},
    {name: "Prison Lane M5", types: ["prisonlane"]},
    {name: "Sonic's Magic Gloves", types: ["crazygadget"]},
    {name: "Crazy Gadget M3", types: ["crazygadget"]},
    {name: "2500 Total Rings", types: ["rings"]}
];
bingoList[25] = [
    {name: "Final Rush M2", types: ["finalrush"]},
    {name: "Complete Final Rush M1 with 100+ Rings", types: ["finalrush"]},
    {name: "2 Chao Boxes in Final Rush and finish", types: ["finalrush"]},
    {name: "5 hidden Chao animals in Final Rush and finish", types: ["finalrush"]},
    {name: "Mission Street M5", types: ["missionstreet"]},
    {name: "Complete Final Rush M1 with a Magnetic Shield", types: ["finalrush"]},
    {name: "Crazy Gadget M4", types: ["crazygadget"]},
    {name: "Mission Street M4 A-Rank", types: ["missionstreet", "arank"]},
    {name: "Eternal Engine M4 A-Rank", types: ["eternalengine", "arank"]},
    {name: "Prison Lane M5 A-Rank", types: ["prisonlane", "arank"]},
    {name: "All Hero Story Character's Upgrades", types: ["finalrush"]}
];
