var bingoGenerator = require("./generators/generator_bases/srl_generator_v5.js");

var bingoList = [];

bingoList[1] = [
  { name: "Fully upgrade a Grass Wall", types: ["walls"] },
  { name: "Fully upgrade a Wood Wall", types: ["walls"] },
  { name: "Fully upgrade a Stone Wall", types: ["walls"] },
  { name: "Shave a Beefalo", types: ["razor"] },
  { name: "Trade Pig King a Pig Skin", types: ["PK"] },
  { name: "Make a Cookbook", types: ["cookbook"] },
  { name: "Launch A Flare", types: ["misc"] },
];

bingoList[2] = [
  { name: "Befriend a Pigman", types: ["friendship"] },
  { name: "Befriend a Catcoon", types: ["friendship", "cattoy"] },
  { name: "Give a Catcoon a Trinket", types: ["cattoy"] },
  { name: "Catch a Butterfly", types: ["bugcatcher"] },
  { name: "Catch a Bee", types: ["bugcatcher"] },
  { name: "Catch a Firefly", types: ["bugcatcher"] },
  { name: "Mine Glommer’s Statue", types: ["statues"] },
  { name: "Mine Maxwell’s Statue", types: ["statues"] },
  { name: "Get the End Table Blueprint", types: ["blueprint"] },
  { name: "Catch a Pond Fish", types: ["fishing"] },
  { name: "Trap a Spider", types: ["spooder"] },
];

bingoList[3] = [
  { name: "Befriend a Beefalo with the Beefalo Bell", types: ["friendship"] },
  { name: "Give a Top Hat to a Pigman", types: ["tophat"] },
  { name: "Give a Top Hat to a Spider", types: ["tophat"] },
  { name: "Wear a Bush Hat", types: ["sillyhat"] },
  { name: "Wear a Rabbit Earmuff", types: ["sillyhat"] },
  { name: "Adopt a KittyKat", types: ["pets"] },
  { name: "Adopt a Vargling", types: ["pets"] },
  { name: "Socket a moonlens with a Red Gem", types: ["moonlens"] },
  { name: "Socket a moonlens with a Blue Gem", types: ["moonlens"] },
  { name: "Place a fish in the Fish Scale-O-Matic", types: ["fishing"] },
  { name: "Trap a Spider Warrior", types: ["spooder"] },
  { name: "Trade Pig King an Eel", types: ["PK"] },
];

bingoList[4] = [
  { name: "Get A Piece of Compost ", types: ["farming"] },
  { name: "Befriend a Bunnyman", types: ["friendship"] },
  { name: "Give a Top Hat to a Bunnyman", types: ["tophat"] },
  { name: "Wear a Gardeneer Hat", types: ["sillyhat"] },
  { name: "Wear a Winter Hat", types: ["sillyhat"] },
  { name: "Wear a Cat Cap", types: ["sillyhat"] },
  { name: "Give a Catcoon an Egg", types: ["cattoy", "bugcatcher"] },
  { name: "Give a Catcoon a Bee", types: ["cattoy", "bugcatcher"] },
  { name: "Give a Catcoon a Mosquito", types: ["cattoy", "bugcatcher"] },
  { name: "Give a Catcoon a Firefly", types: ["cattoy", "bugcatcher"] },
  { name: "Give a Catcoon a Firefly", types: ["cattoy"] },
  { name: "Socket a moonlens with a Purple Gem", types: ["moonlens"] },
  { name: "Catch a Lobster", types: ["fishing"] },
  { name: "Trade Pig King a Bunny Puff", types: ["PK"] },
];

bingoList[5] = [
  { name: "Get a Crop Seed From a Catcoon", types: ["cattoy"] },
  { name: "Put a Lightbulb in an End Table", types: ["endtable"] },
  { name: "Put a Petal in an End Table", types: ["endtable"] },
  { name: "Fully upgrade a Moon Rock Wall", types: ["walls"] },
  { name: "Walk the Plank On A Boat & Abandon Ship!", types: ["sailing"] },
  { name: "Trap a Cave Hider", types: ["spooder"] },
  { name: "Trap a Cave Spitter", types: ["spooder"] },
  { name: "Trap a Depth Dweller", types: ["spooder"] },
  { name: "Place a Tent", types: ["sleep"] },
  { name: "Place a Siesta Lien-to", types: ["sleep"] },
];

bingoList[6] = [
  { name: "Befriend a Rock Lobster ", types: ["friendship"] },
  { name: "Catch an Eel", types: ["fishing"] },
  { name: "Cook a Guacamole", types: ["cookbook"] },
  { name: "Cook Bacon N Eggs", types: ["cookbook"] },
  { name: "Craft a Fur Roll", types: ["sleep"] },
  { name: "Get a Snurtle Shell", types: ["misc"] },
];

bingoList[7] = [
  { name: "Grow a Giant Carrot ", types: ["farming"] },
  { name: "Grow a Giant Tomato ", types: ["farming"] },
  { name: "Grow a Giant Potato  ", types: ["farming"] },
  { name: "Grow a Giant Corn ", types: ["farming"] },
  { name: "Place a giant crop in a Produce Scale ", types: ["farming"] },
  { name: "Plant a Mushroom in a Mushroom Planter ", types: ["farming"] },
  { name: "Get an Electrical Doodad from a Catcoon", types: ["cattoy"] },
  { name: "Put a Forget-Me-Lot in an End Table", types: ["endtable"] },
  { name: "Repair a Hole In Your Boat", types: ["sailing"] },
  { name: "Make a Healing Salve", types: ["medic"] },
];

bingoList[8] = [
  { name: "Grow a Giant Eggplant ", types: ["farming"] },
  { name: "Grow a Giant Pumpkin ", types: ["farming"] },
  { name: "Wear an Ice Cube", types: ["sillyhat"] },
  { name: "Adopt a Giblet", types: ["pets"] },
  { name: "Get a Piece of Jerky", types: ["dryingrack"] },
  { name: "Get a Piece of Small Jerky", types: ["dryingrack"] },
  { name: "Get Dried Monster Meat", types: ["dryingrack"] },
  { name: "Place a Prestihatitator", types: ["magic"] },
];

bingoList[9] = [
  { name: "Wear a Feather Hat", types: ["sillyhat"] },
  { name: "Adopt an Ewelet", types: ["pets"] },
  { name: "Get Dried Kelp", types: ["dryingrack"] },
  { name: "Make a Honey Poultice", types: ["medic"] },
];

bingoList[10] = [
  { name: "Wear a Seawreath", types: ["sillyhat", "sailing"] },
  { name: "Mine the Queen/Comedy Statue", types: ["statues"] },
  { name: "Mine the Pawn Statue", types: ["statues"] },
  { name: "Trap a Sea Strider", types: ["spooder"] },
];

bingoList[11] = [
  { name: "Kill a Dust Moth", types: ["murder"] },
  { name: "Place a Night Light", types: ["magic"] },
  { name: "Craft a Rain Coat", types: ["insulated"] },
  { name: "Craft a Rain Hat", types: ["insulated", "sillyhat"] },
];

bingoList[12] = [
  { name: "Give a Catcoon a Carrat (the animal)", types: ["cattoy"] },
  { name: "Feed a Dust Moth A Piece of Amberosia", types: ["ruins"] },
  { name: "Cook a Fish Taco", types: ["cookbook"] },
  { name: "Make a One-Man Band", types: ["magic"] },
  { name: "Make a Chilled Amulet", types: ["magic"] },
  { name: "Find Pearl's island on the map ", types: ["pearl"] },
  { name: "Make a Seed Pack It", types: ["farming"] },
];

bingoList[13] = [
  { name: "Put a Lesser or Big Glowberry in an End Table", types: ["endtable"] },
  { name: "Catch a Small Ocean Fish", types: ["fishing"] },
  { name: "Cook a Fruit Medley", types: ["cookbook"] },
  { name: "Place a Shadow Manipulator", types: ["magic"] },
  { name: "Place a Shadow Manipulator", types: ["magic"] },
  { name: "Get a Snurtle Shell", types: ["misc"] },
];

bingoList[14] = [
  { name: "Socket a moonlens with a Yellow Gem", types: ["moonlens"] },
  { name: "Socket a moonlens with a Yellow Gem", types: ["moonlens"] },
  { name: "Socket a moonlens with a Orange Gem", types: ["moonlens"] },
  { name: "Repair the Rook Statue", types: ["statues"] },
  { name: "Repair the Bishop Statue", types: ["statues"] },
  { name: "Repair the Knight Statue", types: ["statues"] },
  { name: "Catch a Large Ocean Fish ", types: ["fishing"] },
  { name: "Hammer a Broken Ancient Pseudoscience Station", types: ["ruins"] },
  { name: "Make a Clean Sweeper", types: ["magic"] },
];

bingoList[15] = [
  { name: "Befriend a Broken Bishop ", types: ["friendship", "ruins"] },
  { name: "Befriend a Broken Rook ", types: ["friendship", "ruins"] },
  { name: "Befriend a Broken Bishop ", types: ["friendship", "ruins"] },
  { name: "Wear a Premier Gardeneer Hat ", types: ["sillyhat", "ruins"] },
  { name: "Wear a Slurper On Your Head", types: ["ruins", "sillyhat"] },
  { name: "Catch a Moon Lobster", types: ["fishing"] },
  { name: "Make a Bat Bat", types: ["magic"] },
  { name: "Make a Belt of Hunger", types: ["magic", "ruins"] },
];

bingoList[16] = [
  { name: " Get Super Growth Formula ", types: ["farming"] },
  { name: "Put a Lune Tree Blossom in an End Table", types: ["endtable"] },
  { name: "Shave a Sea Weed", types: ["razor"] },
  { name: "Cook a Jelly Salad", types: ["cookbook"] },
  { name: "Cook a Leafy Meatloaf", types: ["cookbook"] },
  { name: "Cook Beefy Greens", types: ["cookbook"] },
];

bingoList[17] = [
  { name: "Fully Repair a Broken Ancient Pseudoscience Station ", types: ["ruins"] },
  { name: "Get the Ruins Vase Blueprint", types: ["blueprint", "ruins"] },
  { name: "Get the Ruins Plate Blueprint", types: ["blueprint", "ruins"] },
  { name: "Get the Ruins Bowl Blueprint", types: ["blueprint", "ruins"] },
  { name: "Get the Ruins Dish Blueprint", types: ["blueprint", "ruins"] },
  { name: "Make a Saltbox", types: ["sailing"] },
  { name: "Make a Cookie Cutter Hat", types: ["sailing"] },
  { name: "Kill a Grass Gator", types: ["waterlogged", "sailing"] },
  { name: "Bath Bomb a Hot Spring", types: ["lunar"] },
  { name: "Turn a Saladmander into a Dragon Fruit", types: ["lunar"] },

];

bingoList[18] = [
  { name: "Befriend a Gnarwhail", types: ["friendship"] },
  { name: "Catch a Moon Moth", types: ["bugcatcher"] },
  { name: "Get the Ruins Table Blueprint", types: ["blueprint"] },
  { name: "Get the Ruins Chair Blueprint", types: ["blueprint"] },
  { name: "Dig a Grave near Ancient Guardian", types: ["ruins"] },
  { name: "Trigger a Labyrinth Chest Trap", types: ["ruins"] },
];

bingoList[19] = [
  { name: "Get the Anchor Blueprint", types: ["blueprint"] },
  { name: "Get An Item From a Ruins Sinkhole", types: ["ruins"] },
  { name: "Get a Giant Nut", types: ["waterlogged", "sailing"] },
  { name: "Dry 6 items on Pearl’s Drying Racks", types: ["pearl"] },
  { name: "Dry 6 items on Pearl’s Drying Racks", types: ["pearl"] },
  { name: "Cook Barnacle Linguine", types: ["cookbook", "sailing"] },
  { name: "Cook Barnacle Nigiri", types: ["cookbook", "sailing"] },
  { name: "Cook Stuffed Fish Heads", types: ["cookbook", "sailing"] },
  { name: "Cook Barnacle Pita", types: ["cookbook", "sailing"] },
];

bingoList[20] = [
  { name: "Get the Shell Bell Blueprint", types: ["blueprint"] },
  { name: "Go Through the Atrium Tentapillar", types: ["atrium", "ruins"] },
  { name: "Cook Waffles", types: ["cooking"] },
  { name: "Cook Lobster Dinner", types: ["cooking"] },
];

bingoList[21] = [
  { name: "Kill A Krampus", types: ["murder"] },
];

bingoList[22] = [
  { name: "Start the Pig King event", types: ["PK"] },
  { name: "Kill a Rock Lobster", types: ["murder"] },
];

bingoList[23] = [
  { name: "Kill Ancient Guardian", types: ["murder"] },
  { name: "Kill Dragonfly", types: ["murder"] },
];

bingoList[24] = [
  { name: "Kill Bee Queen", types: ["murder"] },
  { name: "Kill Malbatross", types: ["murder"] },
];

bingoList[25] = [
  { name: "Kill Crab King", types: ["murder"] },
  { name: "Kill Toadstool", types: ["murder"] },
];
