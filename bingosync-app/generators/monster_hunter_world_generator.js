var bingoGenerator = require("./generators/generator_bases/srl_generator_v5.js");

var bingoList = []
bingoList[1] = [
    {name: "Forge A Rarity 2 Armor Piece", types: ["armor"]},
    {name: "Complete 3 Bounties", types: ["bounty"]},
    {name: "Catch A Fish With The Fishing Rod", types: ["endemicLife"]},
    {name: "Catch A Flashfly", types: ["endemicLife"]},
    {name: "Catch A Gekko", types: ["endemicLife"]},
    {name: "Catch A Helmcrab", types: ["endemicLife"]},
    {name: "Catch A Shepherd Hare", types: ["endemicLife"]},
    {name: "Catch A Vigorwasp", types: ["endemicLife"]},
    {name: "Catch An Omenfly", types: ["endemicLife"]},
    {name: "Use An Environmental Trap In The Ancient Forest", types: ["environmental"]},
    {name: "Cook A Well-Done Steak", types: []},
    {name: "Complete 1 Optional Quest", types: ["quest"]},
    {name: "Mount 3 Different Monsters", types: ["skill"]}
];

bingoList[2] = [
    {name: "Complete 5 Bounties", types: ["bounty"]},
    {name: "Craft A Farcaster", types: ["crafting"]},
    {name: "Catch A Coral Bird", types: ["endemicLife"]},
    {name: "Catch A Flying Meduso", types: ["endemicLife"]},
    {name: "Catch A Giant Vigorwasp", types: ["endemicLife"]},
    {name: "Catch A Pilot Hare", types: ["endemicLife"]},
    {name: "Catch A Wiggler", types: ["endemicLife"]},
    {name: "Completely Fill In 1 Map", types:["expedition"]},
    {name: "Complete 1 Optional Gathering Quest", types:["quest"]}
];

bingoList[3] = [
    {name: "Craft 5 Energy Drink", types:["crafting"]},
    {name: "Use 3 Different Weapons", types:["multiweapon"]},
    {name: "Mount 5 Different Monsters", types:["skill"]}
];

bingoList[4] = [
    {name: "Completely Fill In The Wildspire Map", types:["expedition"]},
    {name: "Get A KO With A Kinsect", types:["skill", "ko"]},
    {name: "Sever A Pukei-Pukei's Tail", types:["tail"]}
];
bingoList[5] = [
    {name: "Forge A Rarity 4 Armor Piece", types:["armor"]},
    {name: "Complete 2 Camp Deliveries", types:["camp"]},
    {name: "Craft 5 Mega Bounce Bombs", types:["crafting"]},
    {name: "Use 5 Different Weapons", types:["multiweapon"]},
    {name: "Complete \"Learning The Clutch\"", types:["quest"]},
    {name: "Do A Special Arena Quest", types:["quest"]},
    {name: "Mount 7 Different Monsters", types:["skill"]},

    {name: "Complete A Hunt Using The Bow", types:["weapon"]},
    {name: "Complete A Hunt Using The Charge Blade", types:["weapon"]},
    {name: "Complete A Hunt Using The Dual Blades", types:["weapon"]},
    {name: "Complete A Hunt Using The Gunlance", types:["weapon"]},
    {name: "Complete A Hunt Using The Greatsword", types:["weapon"]},
    {name: "Complete A Hunt Using The Hammer", types:["weapon"]},
    {name: "Complete A Hunt Using The Heavy Bowgun", types:["weapon"]},
    {name: "Complete A Hunt Using The Hunting Horn", types:["weapon"]},
    {name: "Complete A Hunt Using The Insect Glaive", types:["weapon"]},
    {name: "Complete A Hunt Using The Lance", types:["weapon"]},
    {name: "Complete A Hunt Using The Light Bowgun", types:["weapon"]},
    {name: "Complete A Hunt Using The Longsword", types:["weapon"]},
    {name: "Complete A Hunt Using The Switch Axe", types:["weapon"]},
    {name: "Complete A Hunt Using The Sword and Shield", types:["weapon"]}
];
bingoList[6] = [
    {name: "Forge 3 Rarity 3 Armor Pieces", types:["armor"]},
    {name: "Unlock All Camps In The Ancient Forest", types:["camp"]},
    {name: "Completely Fill In The Coral Highlands Map", types:["expedition"]},
    {name: "Completely Fill In The Ancient Forest Map", types:["expedition"]},
    {name: "Sever An Anjanath's Tail", types:["tail"]},
    {name: "Sever A Barroth's Tail", types:["tail"]}
];
bingoList[7] = [
    {name: "Craft An Adamant Pill", types:["crafting"]},
    {name: "Craft 10 Drugged Meat", types:["crafting"]},
    {name: "Craft 10 Poisoned Meat", types:["crafting"]},
    {name: "Craft 10 Tinged Meat", types:["crafting"]},
    {name: "Craft A Might Pill", types:["crafting"]},
    {name: "Use 7 Different Weapons", types:["multiweapon"]},
    {name: "Complete 1 Optional Hunting Quest", types:["quest"]},
    {name: "Wallbang A Monster 3 Times In One Hunt", types:["skill", "wallbang"]},
    {name: "Wallbang A Monster Into Another Monster", types:["skill", "wallbang"]}

];
bingoList[8] = [
    {name: "Unlock All Camps In The Wildspire Waste", types:["camp"]},
    {name: "Craft A Max Potion", types:["crafting"]},
    {name: "Use An Environmental Trap In The Wildspire Waste", types:["environmental"]},
    {name: "Befriend The Bugtrappers", types:["expedition"]}
];
bingoList[9] = [
    {name: "Complete A Hunt Without Defender Gear", types:["armor"]},
    {name: "Complete All 2★ Optional Quests", types:["quest"]},
    {name: "Land A True Charged Slash On A Sleeping Monster", types:["skill"]}
];
bingoList[10] = [
    {name: "Forge 10 Armor Pieces", types:["armor"]},
    {name: "Complete 10 Bounties", types:["bounty"]},
    {name: "Unlock The Ropelift In The Coral Highlands", types:["delivery"]},
    {name: "Damage A Monster With A Cactuar", types:["environmental"]},
    {name: "Use An Environmental Trap On A Rathian", types:["environmental"]},
    {name: "Befriend The Plunderers", types:["expedition"]},
    {name: "Launch A Monster Off A Cliff", types:["skill", "wallbang"]}
];
bingoList[11] = [
    {name: "Sever A Radobaan's Tail", types:["tail"]},
    {name: "Sever An Odogaron's Tail", types:["tail"]},
    {name: "Craft An Ancient Potion", types:["crafting"]}
];
bingoList[12] = [
    {name: "Complete 5 Deliveries", types:["delivery"]},
    {name: "Befriend The Protectors", types:["expedition"]},
    {name: "Sever A Tail Using A Kinsect", types:["tail", "skill"]}
];
bingoList[13] = [
    {name: "Completely Fill In The Elder's Recess Map", types:["expedition"]},
    {name: "Completely Fill In The Rotten Vale Map", types:["expedition"]},
    {name: "Create 3 Full Armor And Weapon Sets For Your Palico", types:["armor"]}
];
bingoList[14] = [
    {name: "Sever A Diablos' Tail", types:["tail"]},
    {name: "Dye Your Armor", types:[]},
    {name: "Sever A Rathalos' Tail", types:["tail"]},
    {name: "Use An Environmental Trap On Great Girros", types:["environmental"]}
];
bingoList[15] = [
    {name: "Forge A Rarity 5 Armor Piece", types:["armor"]},
    {name: "Use An Environmental Trap In The Rotten Vale", types:["environmental"]},
    {name: "Buy The Armorcharm", types:["zenny"]}
];
bingoList[16] = [
    {name: "Complete 1 High Rank Hunt With No Defender Gear", types:["armor"]},
    {name: "Use An Environmental Trap In The Coral Highlands", types:["environmental"]},
    {name: "Complete All 3★ Quests", types:["quest"]}
];
bingoList[17] = [
    {name: "Forge 3 Rarity 5 Armor Pieces", types:["armor"]},
    {name: "Create 5 Weapons In Different Trees", types:["armor"]},
    {name: "Hunt A Dodogama", types:["quest"]}
];
bingoList[18] = [
    {name: "Sever A Tail With A Boomerang", types:["tail", "skill"]},
    {name: "Forge The Gastodon Helm", types:["armor"]},
    {name: "Complete 20 Bounties", types:["bounty"]}
];
bingoList[19] = [
    {name: "Hunt A Bazelgeuse", types:["quest"]},
    {name: "Hunt A Kirin", types:["quest"]},
    {name: "Egg Delivery With No Mantles", types:["skill", "challenge"]}
];
bingoList[20] = [
    {name: "Befriend The Troupers", types:["expedition"]},
    {name: "Complete A Hunt With Every Weapon", types:["multiweapon"]},
    {name: "Damage A Monster With The Lava Geyser In The Elder's Recess", types:["environmental"]}
];
bingoList[21] = [
    {name: "Hunt A Lavasioth", types:["quest"]},
    {name: "Hunt An Uragaan", types:["quest"]},
    {name: "Never Eat At The Canteen", types:[]}
];
bingoList[22] = [
    {name: "Possess 150,000 Zenny", types:["zenny", "armor"]},
    {name: "Hunt Every Monster In A High Rank Expedition", types:["quest"]},
    {name: "Use An Environmental Trap On Azure Rathalos", types:["environmental"]}
];
bingoList[23] = [
    {name: "Sever A Vaal Hazak's Tail", types:["tail"]},
    {name: "Sever A Kushala Daora's Tail", types:["tail"]},
    {name: "Sever A Teostra's Tail", types:["tail"]}
];
bingoList[24] = [
    {name: "Never Use Defender Gear", types:["armor"]},
    {name: "Use An Environmental Trap On Black Diablos", types:["environmental"]},
    {name: "Create 10 Weapons In Different Trees", types:["armor"]}
];
bingoList[25] = [
    {name: "Naked Hunt In 5★ Or Higher Quest", types:["skill", "quest"]},
    {name: "Befriend the Gajalakas", types:["expedition"]},
    {name: "Sever Xeno'Jiiva's Tail", types:["tail"]}
];
