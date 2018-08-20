bingoGenerator = require("./generators/generator_bases/srl_generator_v8.js");

//Version 1.4 of Pikmin Bingo

//Changes from 1.3
//Swapped Pilot's Seat and Zirconium Rotor because Zirconium Rotor is harder but was placed lower
//Puffy Blowhogs decreased from 3 to 2 because 3 seems a bit much for level 16
//Added defeat 6 Shearwigs
//Added build 3 bridges in Distant Spring
//Added collect an Armored Cannon Beetle corpse
//Added make Olimar lose all his health
//Moved a few goals around by 1 or 2 values to guarantee certain types of tasks
//Changed Puffstool with bomb rocks to hit Puffstool with a bomb rock
//Moved Beady Long Legs without yellows from 21 to 13 because it's the standard strategy these days
//Moved Mamuta and Goolix from 13 to 21 because resetting days adds a ton of time
//Moved 3 Burrowing Snagrets from 17 to 23 because it's more fitting there; might move it again because it's in FoH
//Changed all 5 stone walls in FN to 3 walls and moved it from 23 to 17 because it takes 2 days otherwise
//Water Dumples decreased from 8 to 7 because there are only 7 in front
//Wollywogs decreased from 6 to 4 because there are only 4 in FN and it's a level 2 task, also changed to regular Wollywogs
//Added defeat 3 Yellow Wollywogs
//Added lifeguarding task because it's a cool mechanic few people ever use

//Changes from 1.2
//Fixed a glitch that could cause two of a goal to appear in the same row on the same card
//Added getting a 20-pellet of each color
//Added maximum of 100 total pikmin alive task
//Decreased the counts required for certain "Have X Pikmin" tasks because they took overwhelmingly long
//Moved stuff for general balance

//Changes from 1.1
//Moved Puffstool with bomb rocks from 14 to 23 because it's ridiculous

//Changes from 1.0
//Added Pellet Posies task
//Added picking a flowered Pikmin
//Added Bulbear with bomb rocks
//Added Puffstool with bomb rocks
//Added grubdogs task
//Added Swooping Snitchbug task
//Moved stuff for general balance

var bingoList = [];
bingoList[1] = [
  { name: "Eternal Fuel Dynamo", types: ["dynamo"], child: "no" },
  { name: "Whimsical Radar", types: ["radar"], child: "no" },
];
bingoList[2] = [
  { name: "Defeat 5 Fiery Blowhogs", types: ["fiery"], child: "no" },
  { name: "Defeat 4 regular Wollywogs", types: ["wolly"], child: "no" },
  { name: "Defeat all 24 Pellet Posies in the Impact Site (after Day 1)", types: ["is"], child: "no" },
];
bingoList[3] = [
  { name: "Defeat 6 Spotty Bulborbs", types: ["grubdog"], child: "no" },
  { name: "Defeat a Spotty Bulborb using bomb rocks", types: ["grubdog", "bomb"], child: "no" },
  { name: "Defeat the Wogpoles in Forest of Hope", types: ["wogpole"], child: "no" },
  { name: "Defeat 6 Shearwigs", types: ["shear"], child: "no" },
];
bingoList[4] = [
  { name: "Extraordinary Bolt", types: ["extraordinary"], child: "no" },
  { name: "Hit 3 Honeywisps", types: ["nectar"], child: "no" },
  { name: "Hit an Iridescent Flint Beetle", types: ["beetle"], child: "no" },
  { name: "Have a Blue Pikmin 'lifeguard' a drowning Pikmin", types: ["lifeguard"], child: "no" },
  { name: "Pluck a flowered Pikmin", types: ["is"], child: "no" },
];
bingoList[5] = [
  { name: "Shock Absorber", types: ["absorber"], child: "no" },
  { name: "Shock Absorber without defeating the Spotty Bulborb", types: [], child: "no" },
  { name: "Sagittarius", types: ["sagi"], child: "no" },
  { name: "Sagittarius without Blue Pikmin", types: ["sagi"], child: "no" },
];
bingoList[6] = [
  { name: "Leave 30 Pikmin behind in one night", types: ["night"], child: "no" },
  { name: "Automatic Gear", types: ["gear"], child: "no"},
  { name: "Space Float", types: ["un"], child: "no" },
  { name: "Nova Blaster", types: ["un"], child: "no" },
  { name: "Build 4 Geysers", types: ["geysers"], child: "no"},
];
bingoList[7] = [
  { name: "Omega Stabilizer", types: ["puffstool"], child: "no" },
  { name: "Guard Satellite", types: ["bll"], child: "no" },
];
bingoList[8] = [
  { name: "Positron Generator", types: ["is"], child: "no" },
  { name: "Defeat a Pearly Clam-Clamp in one cycle", types: ["is"], child: "no" },
];
bingoList[9] = [
  { name: "Gravity Jumper", types: ["jumper"], child: "no" },
  { name: "Kill a mushroom Pikmin", types: ["puffstool"], child: "no" },
  { name: "Defeat 7 Water Dumples", types: ["grubdog"], child: "no" },
  { name: "Radiation Canopy", types: ["acb"] , child: "no"},
  { name: "Collect an Armored Cannon Beetle corpse", types: ["acb"] , child: "no"},
  { name: "Hit Puffstool with a bomb rock", types: ["puffstool"] , child: "no"},
];
bingoList[10] = [
  { name: "Libra", types: ["libra"], child: "no" },
  { name: "Analog Computer", types: ["analog"], child: "no" },
];
bingoList[11] = [
  { name: "Gluon Drive", types: ["gluon"], child: "no" },
  { name: "#1 Ionium Jet", types: ["ionium1"], child: "no" },
];
bingoList[12] = [
  { name: "Build 3 climbable sticks in Forest Navel in one day", types: ["sticks"], child: "no" },
  { name: "Repair-type Bolt", types: ["repair"], child: "no" },
  { name: "Collect a 5-pellet of each color", types: ["pellet"], child: "no" },
  { name: "Collect a 20-pellet of each color", types: ["pellet"], child: "no" },
];
bingoList[13] = [
  { name: "Break 3 stone gates in Forest Navel", types: ["obstacle"], child: "no" },
  { name: "Build all 5 bridges in Forest Navel", types: ["obstacle"], child: "no" },
  { name: "Break all gates in Forest of Hope", types: ["obstacle"], child: "no" },
  { name: "Build 3 bridges in Distant Spring", types: ["obstacle"], child: "no" },
];
bingoList[14] = [
  { name: "Defeat any Wollywog without Pikmin", types: ["hands", "wolly"], child: "no" },
  { name: "Defeat a Fiery Blowhog without Pikmin", types: ["hands", "fiery"], child: "no" },
  { name: "Defeat a Spotty Bulbear using bomb rocks", types: ["bear", "grubdog", "bomb"], child: "no" },
  { name: "Defeat Beady Long Legs without Yellow Pikmin", types: ["bll"], child: "no" },
];
bingoList[15] = [
  { name: "Have 200 Red Pikmin", types: ["count"], child: "no" },
  { name: "Have 150 Blue Pikmin", types: ["count"], child: "no" },
  { name: "Have 150 Yellow Pikmin", types: ["count"], child: "no" },
  { name: "Have 75 of each type of Pikmin", types: ["count"], child: "no"},
];
bingoList[16] = [
  { name: "Defeat 3 Yellow Wollywogs", types: ["wolly"], child: "no"},
  { name: "Defeat 2 Puffy Blowhogs", types: ["puffy"], child: "no"},
  { name: "Interstellar Radio", types: ["puffy"], child: "no" },
];
bingoList[17] = [
  { name: "Throw 20 Pikmin in a Candypop Bud", types: ["candypop"], child: "no" },
  { name: "Never exceed 100 total Pikmin alive", types: ["count"], child: "no" },
  { name: "Have Olimar lose all of his health", types: ["health"], child: "no" },
];
bingoList[18] = [
  { name: "All parts in Forest of Hope", types: ["all_parts"], child: "no" },
  { name: "Geiger Counter", types: ["snagret"], child: "no"},
  { name: "Anti-Dioxin Filter", types: ["dioxin"], child: "no" },
];
bingoList[19] = [
  { name: "Pilot’s Seat", types: ["pilot"], child: "no" },
  { name: "Defeat 3 different species of grubdog", types: ["grubdog"] , child: "no"},
  { name: "Defeat Mamuta", types: ["is"], child: "no" },
  { name: "Defeat Goolix", types: ["is"], child: "no" },
];
bingoList[20] = [
  { name: "3 'Unnecessary' Parts", types: ["un"], child: "no" },
  { name: "Massage Machine", types: ["un"], child: "no" },
  { name: "UV Lamp", types: ["un"], child: "no" },
];
bingoList[21] = [
  { name: "Never use nectar", types: ["nectar"], child: "no" },
  { name: "Defeat 4 Spotty Bulbears", types: ["bear", "grubdog"], child: "no"},
  { name: "Have a Swooping Snitchbug plant a Pikmin of each color", types: ["snitchbug"], child: "no"},
];
bingoList[22] = [
  { name: "Zirconium Rotor", types: ["zirconium"], child: "no" },
  { name: "#2 Ionium Jet", types: ["ionium2"], child: "no" },
];
bingoList[23] = [
  { name: "Defeat both Armored Cannon Beetles", types: ["acb"], child: "no"},
  { name: "Defeat 3 Burrowing Snagrets", types: ["snagret"], child: "no" },
];
bingoList[24] = [
  { name: "Get 15 parts", types: ["all_parts"], child: "no" },
  { name: "All parts in Forest Navel", types: ["all_parts"], child: "no" },
];
bingoList[25] = [
  { name: "Defeat Smoky Progg", types: ["smoky"], child: "no" },
  { name: "Chronos Reactor", types: ["chronos"], child: "no" },
  { name: "Bowsprit", types: ["acb"] , child: "no"},
];
