bingoGenerator = require("./generators/generator_bases/srl_generator_v5.js");

var bingoList = [];
bingoList[1] = [
  { name: "Get 200 caps", types: ["items"] },
  { name: "Disarm the Megaton Nuke", types: ["companion"] },
  { name: "Enter My House", types: ["companion"] },
  { name: "Complete the quest Wasteland Survival Guide", types: ["items"] },
  { name: "Tip a brahmin", types: ["items"] },
  { name: "Have sex", types: ["sex"] },
  { name: "Give water to a beggar", types: ["kill"] },
  { name: "Donate to the church of the children of atom", types: ["kill"] }
];
bingoList[2] = [
  { name: "Complete the unmarked quest 300 Pieces of SIlver", types: ["weapon"] },
  { name: "Buy 5 house upgrades", types: ["weapon"] },
  { name: "Kill someone by reverse pickpocketing a grenade", types: ["weapon"] },
  { name: "Acquire the office employee ID", types: ["kill"] },
  { name: "Complete the unmarked quest Treatment", types: ["items"] },
  { name: "Talk to Stockholm", types: ["items"] }
];
bingoList[3] = [
  { name: "Get 500 caps", types: ["money"] },
  { name: "Discover 5 locations", types: ["snow"] },
  { name: "Get a 2,5,8,10,13 and Cue ball", types: ["perk"] },
  { name: "Kill Gallo", types: ["crafting"] },
  { name: "Consume Strange Meat", types: ["weapon"] },
  { name: "Activate the Rube Goldberg machine at Gold Ribbon Grocers", types: ["items"] }
];
bingoList[4] = [
  { name: "Get 3 bobbleheads", types: ["location"] },
  { name: "Get power armour training", types: ["rep"] },
  { name: "Kill a chinese remnant soldier", types: ["sex"] },
  { name: "Collect 3 Nuka Cola trucks", types: ["crafting"] },
  { name: "Acquire a dirty Chinese jumpsuit", types: ["items"] },
  { name: "Acquire Danielle's book", types: ["items"] },
  { name: "Acquire Naughty Nightwear", types: ["items"] }
];
bingoList[5] = [
  { name: "Get a companion", types: ["rep"] },
  { name: "Collect 5 pieces of Unique Apparel", types: ["quest"] },
  { name: "Fix the door at Anchorage Memorial", types: ["kill"] },
  { name: "Complete the unmarked quest The Lost Initiate", types: ["kill"] },
  { name: "Put a 2nd party hat on the brahmin ornament in Dukov's Place ", types: ["notes"] },
  { name: "Fist someone using fisto!", types: ["meme"] },
  { name: "Eat Bill Wilson", types: ["weapon"] },
  { name: "Acquire Ultrajet", types: ["items"] }
];
bingoList[6] = [
  { name: "Collect 5 skill books", types: ["kill"] },
  { name: "Get 1000 caps", types: ["kill"] },
  { name: "Kill the preacher", types: ["kill"] },
  { name: "Complete the quest Those!", types: ["quest"] },
  { name: "Have Mei Wong commit suicide", types: ["quest"] },
  { name: "Get the Nuka Cola Clear formula", types: ["weapon"] },
  { name: "Acquire Nukalurk meat", types: ["weapon"] },
  { name: "Escort Cherry to Rivet City", types: ["weapon"] },
  { name: "Complete Big Trouble in Big Town", types: ["crafting"] },
  { name: "Make Bannon part of the council", types: ["items"] },
  { name: "Acquire Vengeance", types: ["items"] }
];
bingoList[7] = [
  { name: "Detonate the Megaton Nuke", types: ["game"] },
  { name: "Build the rock-it launcher", types: ["items"] },
  { name: "Build the shishkebab", types: ["skill"] },
  { name: "Get 10 pieces of Unique Apparel", types: ["kill"] },
  { name: "Acquire the alien blaster", types: ["weapon"] },
  { name: "Acquire the experimental MIRV", types: ["notes"] },
  { name: "Complete the quest The Replicated Man", types: ["quest"] },
  { name: "Eat a strange meat pie", types: ["perk, novac"] }
];
bingoList[8] = [
  { name: "Get Agatha's Violin", types: ["quest"] },
  { name: "Complete the quest Blood Ties", types: ["quest"] },
  { name: "Kill a behemoth", types: ["kill"] },
  { name: "Complete the quest Tenpenny Tower", types: ["kill"] },
  { name: "Get the A3-21 Plasma Rifle", types: ["crafting"] },
  { name: "Kill Moira with the Repellent Stick", types: ["items, sloan"] },
  { name: "Win a Archives prize voucher from the National Archives Guess and Win! terminal", types: ["notes"] },
  { name: "Acquire Smuggler's End", types: ["quest"] },
  { name: "Become the Roach King", types: ["items"] }
];
bingoList[9] = [
  { name: "Get the GECK", types: ["rep"] },
  { name: "Acquire the Wazer Wifle", types: ["quest"] },
  { name: "Complete Tranquility Lane", types: ["game"] },
  { name: "Acquire the Lucky 8-Ball", types: ["perk"] },
  { name: "Get the Blackhawk", types: ["kill"] },
  { name: "Kill Samuel", types: ["kill"] },
  { name: "Make Paulie Cantelli overdose", types: ["kill"] },
  { name: "Activate the failsafe at Red Racer Factory", types: ["items"] },
  { name: "Acquire the Experimental Rho ID", types: ["location"] },
  { name: "Craft a bottlecap mine", types: ["quest"] }
];
bingoList[10] = [
  { name: "Kill Harold", types: ["location"] },
  { name: "Craft a dart gun", types: ["location"] },
  { name: "Acquire the MP-47/A prototype medic power armor", types: ["game"] },
  { name: "Release the captive deathclaw in Raven Rock", types: ["game"] },
  { name: "Complete The Nuka Cola Challenge", types: ["perk"] },
  { name: "Discover 20 locations", types: ["notes"] },
  { name: "Consume cave fungus", types: ["items"] },
  { name: "Witness a wedding", types: ["companion"] },
  { name: "Acquire the AntAgonizer costume", types: ["items"] },
  { name: "Acquire the Mechanist costume", types: ["items"] }
];
bingoList[11] = [
  { name: "Complete Tranquility Lane without using the failsafe", types: ["money"] },
  { name: "Consume Mole Rat Wonder Meat", types: ["quest"] },
  { name: "Complete Rescue from Paradise", types: ["items"] },
  { name: "Get the Protectron's Gaze", types: ["items"] },
  { name: "Craft a deathclaw gauntlet", types: ["items"] },
  { name: "Craft a Nuka Grenade", types: ["items"] },
  { name: "Complete the The Superhuman Gambit", types: ["quest"] },
  { name: "Acquire Ol' Painless", types: ["kill"] },
  { name: "Inform Dashwood that his manservant is dead", types: ["quest"] }
];
bingoList[12] = [
  { name: "Get 2 companions", types: ["star"] },
  { name: "Sell Bryan Wilks into slavery", types: ["quest"] },
  { name: "Complete the unmarked quest Merchant Empire", types: ["game"] },
  { name: "Cripple Mad Johnny Wes with the Dart Gun", types: ["game"] },
  { name: "Enslave Bill Seward", types: ["game"] },
  { name: "Enslave Fantasia and Cherry", types: ["game"] },
  { name: "Rig the Republic of Dave's election in Bob's favour", types: ["quest"] },
  { name: "Turn in 10 pre war books", types: ["weapon, novac"] },
  { name: "Kill Sierra Petrovita with a Nuka Grenade", types: ["weapon, novac"] },
  { name: "Acquire Yew's Bear Charm", types: ["items"] }
];
bingoList[13] = [
  { name: "Complete the quest Galaxy News Radio", types: ["items"] },
  { name: "Acquire Lincoln's Repeater", types: ["items"] },
  { name: "Acquire Crow's eyebot helmet", types: ["items"] },
  { name: "Give the Forged Declaration to Abraham Washington", types: ["weapon"] },
  { name: "Collect all 9 of Jaime's tapes and kill him", types: ["location"] },
  { name: "Kill Shawna with the Board of Education", types: ["quest"] },
  { name: "Kill Arkansas with a bottlecap mine", types: ["quest"] },
  { name: "Kill 3 behemoths", types: ["kill"] }
];
bingoList[14] = [
  { name: "Get the Boogeyman's Hood", types: ["quest"] },
  { name: "Acquire the Xuanlong assualt rifle", types: ["items"] },
  { name: "Complete the unmarked quest Jiggs' Loot", types: ["crafting"] },
  { name: "Destroy Lincoln's Repeater", types: ["meme"] },
  { name: "Craft the Mississippi Quantum Pie", types: ["quest"] },
  { name: "Kill a deathclaw with the deathclaw gauntlet", types: ["items"] },
  { name: "Acquire all 5 types of mutilated body part", types: ["notes"] }
];
bingoList[15] = [
  { name: "Collect 15 skill books", types: ["items"] },
  { name: "Get the Declaration of Independence", types: ["perk"] },
  { name: "Complete the quest Waters of Life", types: ["quest"] },
  { name: "Complete the quest Reilly's Rangers", types: ["quest"] },
  { name: "Kill ghoul Moira with the Experimental MIRV", types: ["items"] }
];
bingoList[16] = [
  { name: "Acquire Junders Plunkett's finger", types: ["quest"] },
  { name: "Acquire 3 ears", types: ["crafting"] },
  { name: "Acquire Donovan's Wrench", types: ["items"] },
  { name: "Acquire the geomapper module", types: ["items"] },
  { name: "Collect all Cheryl search logs", types: ["items"] },
  { name: "Get all love letters from Burke", types: ["items"] }
];
bingoList[17] = [
  { name: "Complete the game", types: ["quest"] },
  { name: "Complete the quest Trouble on the Homefront without destroying the vault", types: ["skill"] },
  { name: "Destroy Vault 101", types: ["crafting"] },
  { name: "Complete the quest Project Impurity", types: ["meme"] },
  { name: "Craft the Railway Rifle", types: ["quest"] }
];
bingoList[18] = [
  { name: "Discover 35 locations", types: ["quest"] },
  { name: "Turn in 10 holotags to Scribe Jameson", types: ["snow"] },
  { name: "Kill Ethyl and Meat", types: ["kill"] },
  { name: "Eat the sweetroll in view of Butch during Trouble on the Homefront", types: ["weapon"] }
];
bingoList[19] = [
  { name: "Collect 15 pieces of unique apparel", types: ["safehouse"] },
  { name: "Complete the quest Strictly Business", types: ["challenge"] },
  { name: "Place the giant teddybear in your room in vault 101", types: ["quest"] }
];
bingoList[20] = [
  { name: "Acquire the Robco processor widget", types: ["quest"] },
  { name: "Listen to the reading of the Children's Bedtime Poem ", types: ["challenge"] },
  { name: "Find 5 Replicated Man tapes", types: ["crafting"] },
  { name: "Lead Sticky to Big Town", types: ["quest"] }
];
bingoList[21] = [
  { name: "Collect all 9 Lincoln artifacts", types: ["safehouse"] },
  { name: "Kill Seagrave Holmes with the Railway Rifle", types: ["rep"] },
  { name: "Collect 3 big spoons", types: ["sex"] }
];
bingoList[22] = [
  { name: "Discover 50 locations", types: ["game"] },
  { name: "collect 3 sheet music books", types: ["challenge"] },
  { name: "Pick up 4 whet stones", types: ["challenge"] },
  { name: "Pick up 3 wood chippers", types: ["items"] }
];
bingoList[23] = [
  { name: "Acquire the T-51b power armour", types: ["challenge"] },
  { name: "Turn in 20 pre war books", types: ["quest"] },
  { name: "Place an intact garden gnome at each corner of the map", types: ["weapon"] }
];
bingoList[24] = [
  { name: "Complete the quest Wasteland Survival Guide without using Speech", types: ["quest"] },
  { name: "Collect all Keller family transcripts", types: ["quest"] },
  { name: "Kill 4 companions", types: ["companion, kill"] },
  { name: "Collect 6 sheet music book", types: ["items"] },
  { name: "Collect 5 uniquely numbered vault suits", types: ["weapon", "ending"] }
];
bingoList[25] = [
  { name: "Get 15 Bobbleheads", types: ["challenge"] },
  { name: "Get 15 Unique Weapons", types: ["location"] },
  { name: "Kill 5 behemoths", types: ["challenge"] },
  { name: "Collect 25 skill books", types: ["challenge"] },
  { name: "Collect 20 pieces of Unique Apparel", types: ["quest"] },
  { name: "Acquire all weapon schematics", types: ["challenge"] }
];
