var bingoGenerator = require("./generators/generator_bases/srl_generator_v5.js");

var bingoList = [];
bingoList[1] = [
  { "name": "Kill Batarian Bartender", types: ["Aomega"] },
  { "name": "Presidium Fish sidequest", types: ["Acitadel"] },
  { "name": "Visit the council"},
  { "name": "I am the very model of a scientist Salarian"},
  { "name": "Black out from drinking on the Citadel"},
];
bingoList[2] = [
  { "name": "N7 Lost Operative", types: ["n7"] },
  { "name": "N7 Eclipse Smuggling Depot", types: ["n7"] },
  { "name": "Save Daniel", types: ["Aomega"] },
  { "name": "Punch the reporter"},
];
bingoList[3] = [
  { "name": "Complete 1 firewalker mission", types: ["fw"] },
  { "name": "N7 MSV Estevanico", types: ["n7"] },
  { "name": "N7 Wrecked Merchant Freighter", types: ["n7", "n7a"] },
  { "name": "Dance in all nightclubs" },
];
bingoList[4] = [
  { "name": "N7 Abandoned Research Station", types: ["n7", "n7a"] },
  { "name": "Complete 3 Omega Assignments", types: ["Aomega"] },
  { "name": "Buy a space hamster", types: ["shop"] },
  { "name": "Recover all normandy dog tags and Shepard's helmet", types: ["shop"] },
];
bingoList[5] = [
  { "name": "Complete 2 firewalker missions", types: ["fw"] },
  { "name": "Complete 3 Citadel Assignments", types: ["Acitadel"] },
  { "name": "2 +10% Shotgun damage upgrades", types: ["sg"] },
  { "name": "2 +10% Sniper Rifle Damage upgrades", types: ["sr"] },
  { "name": "Get discounts at every store on the citadel", types: ["shop"] },
  { "name": "Complete 3 Citadel Assignments", types: ["Acitadel"] },
];
bingoList[6] = [
  { "name": "Zaeed Loyalty", types: ["loyal"] },
  { "name": "N7 Hahne-Kedar Facility", types: ["n7", "n7a"] },
  { "name": "2 15% Heavy Weapon Ammo Upgrades", types: ["hwa"] },
  { "name": "2 +1 Medi-gel Upgrades", types: ["mg"] },
];
bingoList[7] = [
  { "name": "Complete Prothean Site firewalker mission", types: ["fw"] },
  { "name": "N7 Archaeological Dig Site", types: ["n7","n7c"] },
  { "name": "2 10% Assault Rifle Damage upgrades", types: ["ar"] },
  { "name": "2 10% SMG Damage upgrades", types: ["smg"] },
  { "name": "2 10% Health upgrades", types: ["hp"] },
  { "name": "2 10% Biotic Damage upgrades", types: ["bd"] },
  { "name": "Complete all crew member assignments", types: ["Anor"] },
  { "name": "Probe Uranus"},
];
bingoList[8] = [
  { "name": "N7 Captured Mining Facility", types: ["n7", "n7a"] },
  { "name": "N7 Anomalous Weather Detected", types: ["n7"] },
  { "name": "N7 Abandoned Mine", types: ["n7"] },
  { "name": "N7 Imminent Ship Crash", types: ["n7"] },
  { "name": "N7 Quarian Crash Site", types: ["n7"] },
  { "name": "2 10% Shield upgrades", types: ["shield"] },
  { "name": "Shoot Conrad Verner", types: ["Aillium"] },
  { "name": "Make a Krogan and an Asari fall in love", types: ["Aillium"] },
  { "name": "Recruit Tali", types: ["recruit", "Tali"] },
  { "name": "Complete a recruit without guns", types: ["recruit"] },
  { "name": "Complete a recruit without powers", types: ["recruit"] },
];
bingoList[9] = [
  { "name": "Have sex with Jack", types: ["rom","jack"] },
  { "name": "N7 Blood Pack Relay", types: ["n7", "n7b"] },
  { "name": "N7 MSV Strontium Mule", types: ["n7", "n7c"] },
  { "name": "2 10% Tech Damage upgrades", types: ["td"] },
  { "name": "Complete Liara's sidequests", types: ["Aillium"] },
  { "name": "Buy all three types of fish", types: ["shop"] },
  { "name": "Recruit Thane", types: ["recruit", "Thane"] },
];
bingoList[10] = [
  { "name": "Jacob Loyalty", types: ["loyal","jacob"] },
  { "name": "Miranda Loyalty", types: ["loyal","miranda"] },
  { "name": "2 10% Pistol Damage upgrades", types: ["pistol"] },
  { "name": "4 10% SMG damage upgrades", types: ["smg"] },
  { "name": "4 10% Health upgrades", types: ["hp"] },
  { "name": "4 +1 Medi-gel Upgrades", types: ["mg"] },
  { "name": "Recruit Samara", types: ["recruit", "morinth"] },
  { "name": "Complete a recruit on Insanity", types: ["recruit"] },
  { "name": "Complete monkey shooting mini-game on Tuchanka", types: ["tuchanka"] },
  { "name": "Win a varren fight bet on Tuchanka", types: ["tuchanka"] },
];
bingoList[11] = [
  { "name": "N7 Blood Pack Base", types: ["n7", "n7b"] },
  { "name": "N7 Blue Suns Base", types: ["n7", "n7c"] },
  { "name": "N7 Endangered Research Station", types: ["n7"] },
];
bingoList[12] = [
  { "name": "Get kelly to feed fish", types: ["rom"] },
  { "name": "Jack Loyalty", types: ["jack", "loyal"] },
  { "name": "N7 Javelin Missiles Launched", types: ["n7", "n7c"] },
  { "name": "4 10% Biotic Damage upgrades", types: ["bd"] },
  { "name": "Complete 4 Illium Assignments", types: ["Aillium"] },

];
bingoList[13] = [
  { "name": "Mordin Loyalty", types: ["loyal"] },
  { "name": "Complete a Loyalty without guns (no Samara/Thane)", types: ["loyal"] },
  { "name": "Complete a Loyalty without powers (no Samara/Thane)", types: ["loyal"] },
  { "name": "N7 Mining the Canyon", types: ["n7"] },
  { "name": "4 10% Assault Rifle Damage upgrades", types: ["ar"] },
  { "name": "4 10% Pistol Damage upgrades", types: ["pistol"] },
  { "name": "4 15% Heavy Weapon Ammo Upgrades", types: ["hwa"] },
];
bingoList[14] = [
  { "name": "Kasumi Loyalty", types: ["loyal"] },
  { "name": "4 10% Shield upgrades", types: ["shield"] },
  { "name": "Complete a Loyalty on Insanity (no Samara/Thane)", types: ["loyal"] },
];
bingoList[15] = [
  { "name": "Garrus Loyalty", types: ["loyal", "garrus"] },
  { "name": "4 10% Tech Damage upgrades", types: ["td"] },
  { "name": "12 total upgrades", types: ["td", "sg", "ar", "pst", "sr", "smg", "shield", "hp", "hwa", "mg", "bd","td"] }, 
];
bingoList[16] = [
  { "name": "4 Sniper Rifle 10% damage upgrades", types: ["sr"] },
  { "name": "Complete 10 (non-N7) assignments", types: ["Acitadel","Aomega","Aillium","Anor"] },
  { "name": "Grunt Loyalty", types: ["loyal"] },
];
bingoList[17] = [
  { "name": "Samara Loyalty", types: ["loyal"] },
  { "name": "4 Shotgun 10% damage upgrades", types: ["sg"] },
  { "name": "Acquire Reaper IFF and activate Legion", types: ["recruit", "Legion"] },	
];
bingoList[18] = [
  { "name": "Thane Loyalty", types: ["loyal", "thane"] },
  { "name": "Complete 6 N7 Missions", types: ["n7"] },
  { "name": "Complete 2 Loyalties on Veteran (no Samara/Thane)", types: ["loyal"] },
];
bingoList[19] = [
  { "name": "Kill the Reaper Core without using HW", types: ["recruit", "Legion"] },
  { "name": "Tali Loyalty", types: ["loyal", "tali"] },
  { "name": "Acquire 6 (non-ship) upgrades of a single type", types: ["td", "sg", "ar", "pst", "sr", "smg", "shield", "hp", "hwa", "mg", "bd","td"] }, 
];
bingoList[20] = [
  { "name": "Complete 3 Loyalty Missions", types: ["loyal"] },
  { "name": "In the Arrival DLC, complete Object Rho fight without dying on Veteran difficulty", types: ["dlc"] },
  { "name": "Legion Loyalty", types: ["loyal", "legion"] },  
  { "name": "Complete Vulcan Station (Overlord)", types: ["dlc"] },
];
bingoList[21] = [
  { "name": "Acquire 10 model ships", types: ["shop"] },
  { "name": "Kill Tela Vasir (Shadow Broker DLC)", types: ["dlc"] },  
  { "name": "Complete Prometheus Station (Overlord)", types: ["dlc"] },  
];
bingoList[22] = [
  { "name": "Acquire 11 party members", types: ["recruit"] },	
  { "name": "Acquire all ship upgrades", types: ["recruit"] },
  { "name": "Resolve legion-tali loyalty conflict", types: ["loyal", "tali", "legion"] },  
  { "name": "Resolve miranda-jack loyalty conflict", types: ["loyal", "miranda", "jack"] }, 
];
bingoList[23] = [
  { "name": "Romance Miranda", types: ["rom", "miranda"] },
  { "name": "Romance Jacob", types: ["rom", "jacob"] },
  { "name": "Romance Jack", types: ["rom", "Jack"] },
  { "name": "Romance Garrus", types: ["rom", "garrus"] },
];
bingoList[24] = [
 { "name": "Acquire 12 party members", types: ["recruit"] },
 { "name": "Romance Thane", types: ["rom", "thane"] },
 { "name": "Romance Tali", types: ["rom", "tali"] },
 { "name": "Kill Jacob" },
 { “name”: “Complete 4 loyalties”},
 
];
bingoList[25] = [
  { "name": "Morinth Gameover", types: ["loyal", "morinth"] },
  { "name": "Enable veteran difficulty at the start, and never reduce the difficulty below veteran" },
  { "name": "Kill the Human-Reaper" },
  { "name": "Complete the run glitchless" },
  { “name”: “Finish Arrival”, types: [“dlc”] },

];
