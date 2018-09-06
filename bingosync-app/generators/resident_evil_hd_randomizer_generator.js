bingoGenerator = require("./generators/generator_bases/srl_generator_v5.js");

var bingoList = [];
bingoList[1] = [
    {name: "RBG Herb Mix in Inventory", types: ["herbs", "inventory"]},
    {name: "Get Broken Shotgun", types: ["obtain", "shotgun"]},
    {name: "6 Ink Ribbons in Item Box", types: ["ink", "box"]},
    {name: "Save in Main Hall", types: ["save", "hall"]},
    {name: "Kill Dog in Main Hall", types: ["kill", "dogs", "mansion"]},
    {name: "Green Herb in Item Box", types: ["herbs", "box"]}
];
bingoList[2] = [
    {name: "7 Handgun Bullets in Handgun", types: ["handgun"]},
    {name: "Light Candle", types: ["objective"]},
    {name: "Save in East Wing Storeroom", types: ["save", "east"]},
    {name: "Save in West Wing Medical Storage", types: ["save", "west"]},
    {name: "Use Broken Shotgun", types: ["shotgun", "objective"]},
    {name: "Kill 3 Dogs with Knife", types: ["kill", "dogs", "knife"]}
];
bingoList[3] = [
    {name: "Get Assault Shotgun", types: ["obtain", "assault"]},
    {name: "Armor Key in Inventory", types: ["key", "inventory"]},
    {name: "Use Sun Crest", types: ["objective", "crest"]},
    {name: "Itchy Tasty Room Diary", types: ["file"]},
    {name: "Kill 3 Dogs with Handgun", types: ["kill", "dog", "handgun"]}
];
bingoList[4] = [
    {name: "Grab Slide Filter", types: ["obtain"]},
    {name: "Get 2 battery packs", types: ["obtain"]},
    {name: "Kill Dog Whistle Dogs with Handgun", types: ["kill", "dog", "handgun"]},
    {name: "Save in Lisa's Cabin", types: ["save", "cabin"]},
    {name: "Blue Herb in Item Box", types: ["herb", "box"]}
];
bingoList[5] = [
    {name: "30 Shotgun Shells in Item Box", types: ["shells", "box"]},
    {name: "2 Red Herb in Item Box", types: ["herbs", "box"]},
    {name: "Guardhouse 001 in Inventory", types: ["guardhouse", "inventory"]},
    {name: "Get Wooden Mount", types: ["obtain", "map"]},
    {name: "Weathervane Puzzle", types: ["puzzle", "cabin"]}
];
bingoList[6] = [
    {name: "Kill Spider with Knife", types: ["kill", "spider", "knife"]},
    {name: "Use Moon Crest", types: ["objective", "crest"]},
    {name: "Use Star Crest", types: ["objective", "crest"]},
    {name: "Use Wind Crest", types: ["objective", "crest"]},
    {name: "Do Bee Puzzle", types: ["puzzle"]}
];
bingoList[7] = [
    {name: "Get 1 Bottle", types: ["obtain", "bottle"]},
    {name: "Get Shotgun:", types: ["obtain", "shotgun"]},
    {name: "Assault Shotgun in Inventory", types: ["assault", "inventory"]},
    {name: "3 Green Herb in Item Box", types: ["herbs", "box"]},
    {name: "Wooden Mount Puzzle", types: ["puzzle", "maps", "objective"]}
];
bingoList[8] = [
    {name: "Red Herb in Item Box", types: ["herb", "box"]},
    {name: "Grab Arrow", types: ["obtain", "graveyard"]},
    {name: "Grab All Doom Masks", types: ["obtain", "graveyard"]},
    {name: "Do Chemical Room Puzzle", types: ["puzzle", "mansion"]},
    {name: "4 Daggers in Inventory", types: ["inventory"]}
];
bingoList[9] = [
    {name: "Save Order: Lisa's Cabin / 1F West Wing Medical Storage / Lab B3", types: ["save", "cabin", "lab", "west"]},
    {name: "Magnum in Inventory", types: ["magnum", "inventory"]},
    {name: "Cover the Tentacle with the Box in Guardhouse", types: ["objective", "guardhouse"]},
    {name: "Get 2 Bottles", types: ["obtain", "bottle"]},
    {name: "Emblem Key in inventory", types: ["key", "inventory"]}
];
bingoList[10] = [
    {name: "Guardhouse 001 in Inventory", types: ["key", "inventory", "guardhouse"]},
    {name: "Get Kenneth's Film", types: ["file"]},
    {name: "Use All Gems", types: ["objective", "gems"]},
    {name: "Make VJOLT", types: ["objective", "guardhouse"]},
    {name: "Save Order: East Wing Storeroom / Lisa's Cabin / Courtyard B1", types: ["save", "east", "cabin", "courtyard"]}
];
bingoList[11] = [
    {name: "Control Room Puzzle", types: ["puzzle", "guardhouse"]},
    {name: "Red Book Puzzle", types: ["puzzle", "guardhouse"]},
    {name: "All Mansion Key's in Item Box", types: ["key", "mansion", "box"]},
    {name: "All Guardhouse Keys in Item Box", types: ["key", "guardhouse", "box"]},
    {name: "Save Order: Guardhouse / Courtyard B1 / Main Hall", types: ["save", "guardhouse", "courtyard", "mansion"]}
];
bingoList[12] = [
    {name: "Get Moon Crest", types: ["obtain", "crest"]},
    {name: "Get Sun Crest", types: ["obtain", "crest"]},
    {name: "Get Star Crest", types: ["obtain", "crest"]},
    {name: "Get Wind Crest", types: ["obtain", "crest"]},
    {name: "Get Book of Curse", types: ["obtain", "graveyard"]}
];
bingoList[13] = [
    {name: "Have X-Ray of Gail in Item Box", types: ["xray", "box"]},
    {name: "2 FAS in Item Box", types: ["fas", "box"]},
    {name: "3 RGB Mix in Inventory", types: ["herbs", "inventory"]},
    {name: "12 Magnum Bullets in Inventory", types: ["magnum", "inventory"]},
    {name: "Get Both Cranks", types: ["crank"]}
];
bingoList[14] = [
    {name: "Kill 4 Dogs with Shotgun", types: ["kill", "dog", "shotgun"]},
    {name: "Square Crank in Inventory", types: ["crank"]},
    {name: "Get Helmet Key", types: ["obtain", "key", "mansion"]},
    {name: "Sword Key in Inventory", types: ["key", "mansion", "inventory"]},
    {name: "Get Shield Key", types: ["obtain", "key", "mansion"]}
];
bingoList[15] = [
    {name: "Kill All Dogs with Handgun", types: ["kill", "dog", "handgun"]},
    {name: "Guardhouse 003 in Inventory", types: ["key", "inventory", "guardhouse"]},
    {name: "Get Control Room Key", types: ["obtain", "key", "guardhouse"]},
    {name: "Get Gallery Key", types: ["obtain", "key", "guardhouse"]},
    {name: "Cylinder Puzzle", types: ["puzzle", "courtyard"]}
];
bingoList[16] = [
    {name: "Kill 4 Dogs with Knife", types: ["kill", "dogs", "knife"]},
    {name: "X-Ray of Clark in Item Box", types: ["xray", "box"]},
    {name: "Save in East Wing Storeroom/West Wing Medical Storage/Lab B3", types: ["save", "east", "west", "Lab"]},
    {name: "Get Magnum", types: ["obtain", "magnum"]},
    {name: "Get Fuel Capsule", types: ["obtain", "lab"]}
];
bingoList[17] = [
    {name: "Kill Plant 42", types: ["kill", "guardhouse"]},
    {name: "3 Green/Blue Mix in Item Box", types: ["herbs", "box"]},
    {name: "Read Observation Note", types: ["file"]},
    {name: "Get Poisoned", types: ["nothing"]},
    {name: "Grab Battery", types: ["obtain", "courtyard"]}
];
bingoList[18] = [
    {name: "Kill Black Tiger", types: ["kill", "courtyard"]},
    {name: "Get Cylinder", types: ["obtain"]},
    {name: "Kill Elder Crimson with Knife", types: ["kill", "crimson", "knife"]},
    {name: "Get Full Music Sheet", types: ["obtain", "mansion"]},
    {name: "Get Lighter", types: ["obtain", "mansion"]}
];
bingoList[19] = [
    {name: "Kill Hunter with Handgun", types: ["kill", "hunter", "handgun"]},
    {name: "Read Suicide Note", types: ["file"]},
    {name: "Grab Second Survival Knife", types: ["obtain"]},
    {name: "Get Self Defense Gun", types: ["obtain"]},
    {name: "Broken Flamethrower Puzzle", types: ["puzzle", "guardhouse"]}
];
bingoList[20] = [
    {name: "Kill 3 Crimson Heads", types: ["kill", "crimson"]},
    {name: "Protect Barry from Lisa/Rebecca from Hunter", types: ["nothing"]},
    {name: "Find Doom Book 1", types: ["obtain", "book"]},
    {name: "Find Doom Book 2", types: ["obtain", "book"]},
    {name: "Find All Ink Ribbons", types: ["obtain"]}
];
bingoList[21] = [
    {name: "Fight Yawn 1 with Knife", types: ["knife"]},
    {name: "Lab Key in Item Box", types: ["key", "box", "lab"]},
    {name: "Obtain All FAS ", types: ["obtain", "fas"]},
    {name: "Lab key in Inventory", types: ["key", "lab", "inventory"]},
    {name: "Hex Crank in Inventory", types: ["crank", "inventory"]}
];
bingoList[22] = [
    {name: "Kill All Dogs with Knife", types: ["kill", "dogs", "knife"]},
    {name: "All 3 MO Disks", types: ["obtain", "disks", "lab"]},
    {name: "Get 3 Bottles", types: ["obtain", "bottle"]},
    {name: "Pick Up All the Green Herbs", types: ["obtain", "herbs"]},
    {name: "Watch Kenneth Film", types: ["files"]},
    {name: "All FAS in item box", types: ["fas", "box"]}
];
bingoList[23] = [
    {name: "Kill both hunters in east wing stairway with Knife", types: ["kill", "hunter", "knife"]},
    {name: "Pick up all the X-Rays", types: ["obtain", "xrays"]},
    {name: "Kill Lisa", types: ["kill"]},
    {name: "Read Security Protocols", types: ["files"]},
    {name: "Get All Maps ", types: ["nothing"]}
];
bingoList[24] = [
    {name: "Kill All the Zombies in Murder Hall with Knife", types: ["kill", "Zombies", "Knife"]},
    {name: "Do X-Ray Puzzle", types: ["puzzle", "xray"]},
    {name: "Read Researcher's Will", types: ["files"]},
    {name: "Pick Up All the Health Boxes", types: ["obtain"]},
    {name: "Kill Chimera with Knife", types: ["kill", "chimera", "knife"]}
];
bingoList[25] = [
    {name: "All Keys in Item Box", types: ["keys", "box"]},
    {name: "Dont Heal", types: ["nothing"]},
    {name: "Use All 3 MO Disks", types: ["objective", "disks", "lab"]},
    {name: "Power Elevator", types: ["objective", "lab"]},
    {name: "Kill Lab Tyrant", types: ["Kill", "lab"]},
    {name: "Don't Use Any Green Herbs", types: ["nothing"]},
];
