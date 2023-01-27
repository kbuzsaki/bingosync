var bingoGenerator = require("./generators/generator_bases/srl_generator_v5.js");

var bingoList = [];
bingoList[1] = [
  { name: "Unlock police suit", types: ["c1"] },
  { name: "Catch 3 clown robbers", types: ["c1"] },
  { name: "1st Superbuild", types: ["c2"] },
  { name: "Obtain grapple gun", types: ["c2"] },
];
bingoList[2] = [
  { name: "SA", types: ["c2"] },
  { name: "TiS", types: ["c3"] },
  { name: "Unlock miner outfit", types: ["c3"] },
  { name: "Learn 3 Kung Fu abilities", types: ["c4"] },
];
bingoList[3] = [
  { name: "MOV mission", types: ["c4"] },
  { name: "MOV mission Without taking damage", types: ["c4"] },
  { name: "Unlock farmer unintended way", types: ["farmer"] },
  { name: "Unlock astronaut before C7", types: ["astro"] },
];
bingoList[4] = [
  { name: "20 Triple jumps", types: ["jump"] },
  { name: "50 Triple jumps", types: ["jump"] },
  { name: "10 Vehicle launches", types: ["vehicle"] },
  { name: "20 Vehicle launches", types: ["vehicle"] },
];
bingoList[5] = [
  { name: "Hit the Liberty door", types: ["door"] },
  { name: "Hit any midlevel door early", types: ["door"] },
  { name: "Hit 3 final level doors early", types: ["door"] },
  { name: "KF without learning Kung Fu", types: ["door"] },
];
bingoList[6] = [
  { name: "Clip through 12 diff. walls", types: ["clip"] },
  { name: "Clip through 30 diff. walls", types: ["clip"] },
  { name: "Preform the swimming glitch ", types: ["time"] },
  { name: "Swim to all 4 mini islands", types: ["time"] },
];
bingoList[7] = [
  { name: "Hankerlaunch from pool", types: ["hanker"] },
  { name: "Hankerlaunch from pont", types: ["hanker"] },
  { name: "Hankerlaunch from Auburn Beach", types: ["hanker"] },
  { name: "Glide from Auburn Bay Bridge to Liberty Island", types: ["farmer"] },
];
bingoList[8] = [
  { name: "Glide from Blackwell Bridge to main island", types: ["farmer"] },
  { name: "5 City challenges", types: ["random"] },
  { name: "8 City challenges", types: ["random"] },
  { name: "Any city challenge for 3 diff. suits", types: ["random"] },
];
bingoList[9] = [
  { name: "2 Police city challenges", types: ["police"] },
  { name: "5 Police city challenges", types: ["police"] },
  { name: "3 Farmer city challenges", types: ["farmer"] },
  { name: "6 Farmer city challenges", types: ["farmer"] },
];
bingoList[10] = [
  { name: "3 Vehicle City challenge", types: ["vehicle"] },
  { name: "1 Vehicle City challenge", types: ["vehicle"] },
  { name: "5 Superbuilds", types: ["superbuild"] },
  { name: "10 Superbuilds", types: ["superbuild"] },
];
bingoList[11] = [
  { name: "1 Free run", types: ["freerun"] },
  { name: "3 Free runs", types: ["freerun"] },
  { name: "5 Disguise booths", types: ["booth"] },
  { name: "12 Disguise booths", types: ["booth"] },
];
bingoList[12] = [
  { name: "Get to 5 trainstations", types: ["trainz"] },
  { name: "Get to 13 Trainstations", types: ["trainz"] },
  { name: "Smash 3 boulders", types: ["miner"] },
  { name: "Smash 5 boulders", types: ["miner"] },
];
bingoList[13] = [
  { name: "Collect 3 red bricks", types: ["red"] },
  { name: "Get to 12 red bricks", types: ["red"] },
  { name: "Get to 10 char.", types: ["char"] },
  { name: "Get to 30 char.", types: ["char"] },
];
bingoList[14] = [
  { name: "Unlock 5 police char.", types: ["char"] },
  { name: "Unlock 3 miners", types: ["char"] },
  { name: "unlock 5 robbers", types: ["char"] },
  { name: "Get 10 diff. purple studs", types: ["stud"] },
];
bingoList[15] = [
  { name: "Get 100k studs", types: ["stud"] },
  { name: "Get 200k studs", types: ["stud"] },
  { name: "Get 75k superbricks", types: ["stud"] },
  { name: "Get 50k superbricks", types: ["stud"] },
];
bingoList[16] = [
  { name: "10 gold bricks", types: ["gold"] },
  { name: "25 gold bricks", types: ["gold"] },
  { name: "30 gold bricks", types: ["gold"] },
  { name: "Unlock the masterminds (Rex and Blackwell)", types: ["char"] },
];
bingoList[17] = [
  { name: "Unlock 5 vehicles", types: ["vehicles"] },
  { name: "Unlock 12 vehicles", types: ["vehicles"] },
  { name: "Unlock 2 clown robbers", types: ["char"] },
  { name: "TRANSTER POG!", types: ["pog"] },
];
bingoList[18] = [
  { name: "All police shields / super stars", types: ["shield"] },
  { name: "All Rex's sculptures / ?-blocks", types: ["shield"] },
  { name: "Get to 3 courts (court, basketball, tennis)", types: ["roam"] },
  { name: "All 10 stone statues", types: ["roam"] },
];
bingoList[19] = [
  { name: "10 Taxi stunts with passenger", types: ["roam"] },
  { name: "Any LEGO city hero", types: ["stud"] },
  { name: "Glide the entirety of Fusileani-tower", types: ["roam"] },
  { name: "Build all 3 LEGO store builds", types: ["roam"] },
];
bingoList[20] = [
  { name: "Any police shield piece", types: ["gold"] },
  { name: "Carsurf for 30 seconds on any driving car", types: ["roam"] },
  { name: "Jump from a helicopter into any car", types: ["pog"] },
  { name: "5x Superbricks (Supercar)", types: ["stud"] },
];
bingoList[21] = [
  { name: "3 nets in a row", types: ["pog"] },
  { name: "Ride the rodeo", types: ["pog"] },
  { name: "Get a 3 enemies with 1 throw", types: ["pog"] },
  { name: "Get all police station gold bricks", types: ["gold"] },
];
bingoList[22] = [
  { name: "Complete SA 1p", types: ["c2"] },
  { name: "Complete MA 1p", types: ["c3"] },
  { name: "Complete TiS 1p", types: ["c3"] },
  { name: "Complete KF 1p (no brickbank)", types: ["c4"] },
];
bingoList[23] = [
  { name: "Butch Patterson", types: ["char"] },
  { name: "Sarah Horner", types: ["char"] },
  { name: "Trouserless Barry", types: ["char"] },
  { name: "Any char. from locked costume", types: ["char"] },
];
bingoList[24] = [
  { name: "Smash 5 atms", types: ["robber"] },
  { name: "Smash 12 atms", types: ["robber"] },
  { name: "Create a Stau of 10 cars (traffic jam)", types: ["random"] },
  { name: "Create a Stau of 15 cars (traffic jam)", types: ["random"] },
];
bingoList[25] = [
  { name: "Debunk / grow pirahna plant at dojo", types: ["roam"] },
  { name: "Debunk / show giant cheep cheep", types: ["roam"] },
  { name: "Do the minigames at Apollo", types: ["pog"] },
  { name: "Eat from 3 diff. stands in Festival Square", types: ["random"] },
];
