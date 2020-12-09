bingoGenerator = require("./generators/generator_bases/srl_generator_v5.js");

var bingoList = [];
bingoList[1] = [
  { name: "Go to 5 Main Cities", types: ["location"] },
  { name: "Activate a Standing Stone that isn't the First 3", types: ["location"] },
  { name: "Get 3 Alteration and 3 Conjuration Spells", types: ["spell"] },
  { name: "Pickpocket 1 Thing Off of 10 People in Riverwood", types: ["simplecollect"] },
];
bingoList[2] = [
  { name: "Die 12 Times", types: ["death"] },
  { name: "Find 15 Caves", types: ["location"] },
  { name: "Get Arrested in 3 Different Holds", types: ["location"] },
  { name: "Collect 2 Amulets of Talos", types: ["simplecollect"] },
];
bingoList[3] = [
  { name: "Collect 15 Sweetrolls", types: ["simplecollect"] },
  { name: "Pay 5 Different Bards", types: ["money"] },
  { name: "Make a Leg of Goat Roast", types: ["cooking"] },
  { name: "Get the Perk Champions Stance", types: ["skill"] },
];
bingoList[4] = [
  { name: "Collect 5 Dragon Words", types: ["shout"] },
  { name: "Cure any disease", types: ["disease"] },
  { name: "Get Level 20 in Stealth", types: ["skill"] },
  { name: "Mine at 5 ore veins", types: ["simplecollect"] },
];
bingoList[5] = [
  { name: "Fall to your Death 12 Times", types: ["death"] },
  { name: "Join the Civil War", types: ["bigquest"] },
  { name: "Get Bone Break Fever", types: ["disease"] },
  { name: "Kill 6 Cultists", types: ["combat"] },
];
bingoList[6] = [
  { name: "Complete 5 Side Quests", types: ["sidequest"] },
  { name: "Go to Fort Dawnguard", types: ["location"] },
  { name: "Create Any 2 Stews", types: ["cooking"] },
  { name: "Kill 5 Civilians", types: ["combat"] },
];
bingoList[7] = [
  { name: "Run from Whiterun to Markarth", types: ["running","location"] },
  { name: "Join the Thieves Guild", types: ["bigquest"] },
  { name: "Make Steamed Mudcrab Legs", types: ["cooking"] },
  { name: "Eat 15 Different Types of Food", types: ["cooking","simplecollect"] },
];
bingoList[8] = [
  { name: "Kill 3 Dragons", types: ["dragons","combat"] },
  { name: "Have 15 Spells", types: ["spell"] },
  { name: "Go to Solstheim", types: ["bigquest","location"] },
  { name: "Create any 4 Poisons", types: ["potion"] },
];
bingoList[9] = [
  { name: "Collect any piece of Glass Armour", types: ["hardcollect"] },
  { name: "Collect and Sell 20 Cabbages to a Farmer", types: ["money"] },
  { name: "Create a Grindstone at a House", types: ["housing"] },
  { name: "Create Any 5 Different Potions", types: ["potion"] },
];
bingoList[10] = [
  { name: "Buy any House", types: ["housing"] },
  { name: "Complete the Initiation Civil War Quest", types: ["bigquest"] },
  { name: "Die to 5 different Giants", types: ["death"] },
  { name: "Discover 5 Dragon Lairs", types: ["dragon","location"] },
];
bingoList[11] = [
  { name: "Clear 5 Bandit Locations", types: ["combat","location"] },
  { name: "Join the Dark Brotherhood", types: ["bigquest"] },
  { name: "Create an Invisibility Potion", types: ["potion"] },
  { name: "Cook 3 Different Soups", types: ["cooking"] },
];
bingoList[12] = [
  { name: "Get Level 60 in any Skill", types: ["skill"] },
  { name: "Kill 5 Spriggans", types: ["combat"] },
  { name: "Get 10 Stones of Barenziah", types: ["hardcollect"] },
  { name: "Collect 4 Dragon Claws", types: ["hardcollect","dungeon"] },
];
bingoList[13] = [
  { name: "Go into Castle Volkihar", types: ["bigquest"] },
  { name: "Spend 5 Dragon Souls", types: ["shout","dragons"] },
  { name: "Get Married", types: ["sidequest"] },
  { name: "Clear Ragnvald", types: ["dungeon"] },
];
bingoList[14] = [
  { name: "Get the Horn of Jurgen Windcaller", types: ["mainquest"] },
  { name: "Get all 3 Words of Unrelenting Force", types: ["mainquest","shout"] },
  { name: "Get Level 50 in a Spell Skill", types: ["skill"] },
  { name: "Have 10 Adept Level Spells", types: ["spell"] },
];
bingoList[15] = [
  { name: "Get a Daedric Artifact", types: ["hardcollect"] },
  { name: "Get 10 Dragon Scales", types: ["hardcollect","dragon"] },
  { name: "Complete the Quest Tending the Flames", types: ["dungeon","sidequest"] },
  { name: "Discover 15 Tombs", types: ["location"] },
];
bingoList[16] = [
  { name: "Become a Vampire", types: ["disease"] },
  { name: "Have 15 Dragon Words", types: ["shout"] },
  { name: "Build a Main Hall", types: ["housing"] },
  { name: "Collect 50 Pieces of Cheese", types: ["simplecollect"] },
];
bingoList[17] = [
  { name: "Have 40 Spells", types: ["spell"] },
  { name: "Die by being Eaten by a Dragon", types: ["death"] },
  { name: "Build 3 Barrels in a Home", types: ["housing"] },
  { name: "Collect any Piece of Ebony Armour", types: ["hardcollect"] },
];
bingoList[18] = [
  { name: "Complete the Loud and Clear Quest", types: ["bigquest"] },
  { name: "Get all 3 Words of Whirlwind Sprint", types: ["shout"] },
  { name: "Collect 40 Tankards", types: ["simplecollect"] },
  { name: "Get an Elder Scroll", types: ["mainquest","hardcollect"] },
];
bingoList[19] = [
  { name: "Run from Markarth to Riften", types: ["running","location"] },
  { name: "Complete 20 Side Quests", types: ["sidequest"] },
  { name: "Complete Diplomatic Immunity", types: ["mainquest"] },
  { name: "Buy and Kill 5 Horses", types: ["money"] },
];
bingoList[20] = [
  { name: "Get 3 Daedric Artifacts", types: ["hardcollect"] },
  { name: "Clear 10 Tombs", types: ["dungeon"] },
  { name: "Get all 3 Words of Elemental Fury", types: ["shout"] },
  { name: "Get Level 55 in Any Weapon Skill", types: ["skill"] },
];
bingoList[21] = [
  { name: "Learn Dragonrend", types: ["mainquest","shout"] },
  { name: "Cast an Expert Level Spell", types: ["spell"] },
  { name: "Build an Arcane Enchanter in a Home", types: ["housing"] },
  { name: "Kill 4 Giants", types: ["combat"] },
];
bingoList[22] = [
  { name: "Summon Arvak", types: ["spell","bigquest"] },
  { name: "Create the Gauldur Amulet", types: ["hardcollect"] },
  { name: "Find 200 Locations", types: ["location"] },
  { name: "Eat 150 Pieces of Food", types: ["cooking","simplecollect"] },
];
bingoList[23] = [
  { name: "Become Thane in 3 Cities", types: ["sidequest"] },
  { name: "Get the Oghma Infinium", types: ["sidequest"] },
  { name: "Complete 15 Bounties", types: ["combat"] },
  { name: "Sleep 300 Hours", types: ["simplecollect"] },
];
bingoList[24] = [
  { name: "Run to 5 Major Cities", types: ["running","location"] },
  { name: "Build a Trophy Hall and 3 Trophies", types: ["housing"] },
  { name: "Find 250 Locations", types: ["location"] },
  { name: "Read 35 Skill Books", types: ["simplecollect"] },
];
bingoList[25] = [
  { name: "Get Level 80 in a Spell Skill", types: ["skill"] },
  { name: "Finish the Main Quest", types: ["mainquest"] },
  { name: "Kill 5 Dragon Priests", types: ["combat"] },
  { name: "Get any Dragon Armour", types: ["hardcollect"] },
];
