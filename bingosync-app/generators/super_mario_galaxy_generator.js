bingoGenerator = require("./generators/generator_bases/srl_generator_v5.js");

var bingoList = [];

bingoList[1] = [
{ name: "2 Stars from Honeyhive", types: ["Honeyhive", "W1", "SFG"] },
{ name: "3 Stars from Honeyhive", types: ["Honeyhive", "W1", "SFG"] },
{ name: "Loopdeeloop", types: ["W1", "Race", "Trial"] },
{ name: "2 Unique Sets of Star Chips", types: ["Star_Chips"] },
{ name: "3 Unique Sets of Star Chips", types: ["Star_Chips"] }
];
bingoList[2] = [
{ name: "2 Stars from Good Egg", types: ["GoodEgg", "W1", "SFG"] },
{ name: "3 Stars from Good Egg", types: ["GoodEgg", "W1", "SFG"] },
{ name: "3 Unique Boss Stars", types: ["Boss"] },
{ name: "10 Lives (No Mailtoad)", types: ["1UP"] },
{ name: "4 Unique Sets of Star Chips", types: ["Star_Chips"] },
{ name: "3 Unique ?-Coins", types: ["?_Coin"] }
];
bingoList[3] = [
{ name: "2 Stars from Space Junk", types: ["SpaceJunk", "W2", "SFG"] },
{ name: "3 Stars from Space Junk", types: ["SpaceJunk", "W2", "SFG"] },
{ name: "2 Unique Sets of Rainbow Notes", types: ["Notes"] },
{ name: "2 Unique Sets of Blue Star Chips", types: ["Star_Chips"] },
{ name: "3 Stars from ?-Block Galaxies", types: ["?_Block"] },
{ name: "1 Secret Star", types: ["Secret"] }
];
bingoList[4] = [
{ name: "Feed 2 Hungry Lumas", types: ["Star_Bits"] },
{ name: "5 Unique Sets of Star Chips", types: ["Star_Chips"] },
{ name: "5 Unique 1-Up Mushrooms", types: ["1UP"] },
{ name: "6 Unique 1-Up Mushrooms", types: ["1UP"] },
{ name: "6 Stars from Terrace", types: ["W1"] },
{ name: "8 Stars from Terrace", types: ["W1"] }
];
bingoList[5] = [
{ name: "2 Stars from Battlerock", "types": ["Battlerock", "W2", "SFG"] },
{ name: "3 Stars from Battlerock", "types": ["Battlerock", "W2", "SFG"] },
{ name: "8 Unique ?-Coins", "types": ["?_Coin"] },
{ name: "10 Unique ?-Coins", "types": ["?_Coin"] },
{ name: "3 Unique Life Mushrooms", "types": ["Life_Mushroom"] },
{ name: "4 Unique Life Mushrooms", "types": ["Life_Mushroom"] }
];
bingoList[6] = [
{ name: "2 Stars from Beach Bowl", types: ["BeachBowl", "W3", "SFG"] },
{ name: "3 Stars from Beach Bowl", types: ["BeachBowl", "W3", "SFG"] },
{ name: "2 Secret Stars", types: ["Secret"] },
{ name: "3 Secret Stars", types: ["Secret"] },
{ name: "20 Lives (No Mailtoad)", types: ["1UP"] },
{ name: "2 Mushroom Power-Ups", types: ["Ghostly", "PowerUp"] },
{ name: "4 Stars from Good Egg", types: ["GoodEgg", "W1", "SFG"] }
];
bingoList[7] = [
{ name: "2 Stars from Ghostly", types: ["Ghostly", "W3", "SFG"] },
{ name: "3 Stars from Ghostly", types: ["Ghostly", "W3", "SFG"] },
{ name: "5 Unique Boss Stars", types: ["Boss"] },
{ name: "5 Stars from NPCs", types: ["NPC"] },
{ name: "6 Stars from NPCs", types: ["NPC"] },
{ name: "3 Unique Sets of Rainbow Notes", types: ["Notes"] },
{ name: "2 Stars from 3 Galaxies", types: ["Galaxy"] }
];
bingoList[8] = [
{ name: "1 Comet", types: ["Comet"] },
{ name: "2 Comets", types: ["Comet"] },
{ name: "Feed 3 Hungry Lumas", types: ["Star_Bits"] },
{ name: "8 Unique 1-Up Mushrooms", types: ["1UP"] },
{ name: "10 Unique 1-Up Mushrooms", types: ["1UP"] },
{ name: "Sling Pod", types: ["SpaceJunk", "W2", "Star_Bits"] },
{ name: "Sweet Sweet", types: ["W1", "Star_Bits"] },
{ name: "1 Luma Shop", types: ["Star_Bits"] }
];
bingoList[9] = [
{ name: "4 Stars from Honeyhive", "types": ["SpaceJunk", "W2", "SFG"] },
{ name: "Complete a Flipswitch Panel Set in 3 Stars", "types": ["GoodEgg"] },
{ name: "5 Unique Life Mushrooms", "types": ["Life_Mushroom"] },
{ name: "6 Unique Life Mushrooms", "types": ["Life_Mushroom"] },
{ name: "3 Unique Power-Ups", "types": ["PowerUp"] },
{ name: "Get 6 Stars Using a Power-Up", "types": ["PowerUp"] },
{ name: "Get 7 Stars Using a Power-Up", "types": ["PowerUp"] },
{ name: "30 Lives (No Mailtoad)", "types": ["1UP"] },
{ name: "1 Daredevil Comet", "types": ["Comet"] },
{ name: "Good Egg Comet and Honeyhive Comet", "types": ["Comet", "W1"] }
];
bingoList[10] = [
{ name: "2 Speedy Comets", types: ["Comet"] },
{ name: "8 Stars from NPCs", types: ["NPC"] },
{ name: "10 Stars from NPCs", types: ["NPC"] },
{ name: "5 Stars from 1 Main Galaxy", types: ["Battlerock", "DustyDune"] },
{ name: "3 Motion Control Mini-Game Stars", types: ["Trial"] },
{ name: "3 Unique Sets of Blue Star Chips", types: ["Star_Chips"] },
{ name: "2 Stars from Buoy Base", types: ["W3", "?_Block", "SFG"] },
{ name: "Beach Bowl Comet and Ghostly Comet", types: ["Comet", "W3"] },
{ name: "All 3 Shell Colors (Green, Red, Gold)", types: ["Shell"] }
];
bingoList[11] = [
{ name: "5 Stars from ?-Block Galaxies", types: ["?_Block"] },
{ name: "2 Luma Shops", types: ["Star_Bits"] },
{ name: "6 Stars in Fountain", types: ["W2"] },
{ name: "8 Stars in Fountain", types: ["W2"] },
{ name: "4 Stars from Space Junk", types: ["SpaceJunk", "W2", "SFG"] },
{ name: "3 Stars from Cages", types: ["Cages"] },
{ name: "4 Stars from Cages", types: ["Cages"] },
{ name: "Both Flower Power-Ups", types: ["PowerUp"] },
{ name: "Beach Bowl S, Ghostly S and Buoy Base S", types: ["Secret", "W3"] },
{ name: "3 Types of Comet", types: ["Comet"] }
];
bingoList[12] = [
{ name: "4 Stars from Battlerock", types: ["Battlerock", "W2", "SFG"] },
{ name: "5 Stars from Battlerock", types: ["Battlerock", "W2", "SFG"] },
{ name: "2 Stars from Freezeflame", types: ["Freezeflame", "W4", "SFG"] },
{ name: "3 Stars from Freezeflame", types: ["Freezeflame", "W4", "SFG"] },
{ name: "5 Comets", types: ["Comet"] },
{ name: "6 Comets", types: ["Comet"] },
{ name: "6 Stars from ?-Block Galaxies", types: ["?_Block"] },
{ name: "Drip Drop", types: ["W3", "Star_Bits"] },
{ name: "Space Junk S and Battlerock S", types: ["Secret", "W2"] },
{ name: "4 Types of Comet", types: ["Comet"] }
];
bingoList[13] = [
{ name: "4 Stars from Beach Bowl", types: ["BeachBowl", "W3", "SFG"] },
{ name: "3 Stars from Gusty Garden", types: ["GustyGarden", "W4", "SFG"] },
{ name: "2 Cosmic Comets", types: ["Comet", "Race"] },
{ name: "7 Unique Boss Stars", types: ["Boss"] },
{ name: "8 Unique Boss Stars", types: ["Boss"] },
{ name: "1 Star from 7 Main Galaxies", types: ["Galaxy"] },
{ name: "4 Stars from 2 Galaxies", types: ["Galaxy"] },
{ name: "3 Stars from 3 Galaxies", types: ["Galaxy"] },
{ name: "3 Speedy Comets", types: ["Comet"] }
];
bingoList[14] = [
{ name: "4 Stars from Ghostly", types: ["Ghostly", "W3", "SFG"] },
{ name: "2 Stars from Dusty Dune", types: ["DustyDune", "W4", "SFG"] },
{ name: "3 Stars from Dusty Dune", types: ["DustyDune", "W4", "SFG"] },
{ name: "4 Unique Power-Ups", types: ["PowerUp"] },
{ name: "5 Unique Power-Ups", types: ["PowerUp"] },
{ name: "2 Green Stars", types: ["Trial"] },
{ name: "3 Green Stars", types: ["Trial"] },
{ name: "1 Star each from Gusty Garden, Freezeflame and Dusty Dune", types: ["W4"] },
{ name: "5 Unique Sets of Rainbow Notes", types: ["Notes"] }
];
bingoList[15] = [
{ name: "4 Stars from Freezeflame", types: ["Freezeflame", "W4", "SFG"] },
{ name: "Complete a Flipswitch Panel Set in 5 Stars", types: [] },
{ name: "6 Stars in Kitchen", types: ["W3"] },
{ name: "8 Stars in Kitchen", types: ["W3"] },
{ name: "5 Secret Stars", types: ["Secret"] },
{ name: "6 Secret Stars", types: ["Secret"] },
{ name: "8 Unique Life Mushrooms", types: ["Life_Mushroom"] },
{ name: "12 Unique Life Mushrooms", types: ["Life_Mushroom"] },
{ name: "Space Junk Comet and Battlerock Comet", types: ["Comet", "W2"] }
];
bingoList[16] = [
{ "name": "2 Stars from Gold Leaf", types: ["GoldLeaf", "W5", "SFG"] },
{ "name": "3 Stars from Gold Leaf", types: ["GoldLeaf", "W5", "SFG"] },
{ "name": "5 Stars from Races", types: ["Race"] },
{ "name": "6 Stars from Races", types: ["Race"] },
{ "name": "7 Stars from ?-Block Galaxies", types: ["?_Block"] },
{ "name": "7 Comets", types: ["Comet"] },
{ "name": "8 Comets", types: ["Comet"] },
{ "name": "Honeyhive Luigi", types: ["Honeyhive", "W1"] },
{ "name": "2 Daredevil Comets", types: ["Comet"] }
];
bingoList[17] = [
{ name: "4 Stars from Gusty Garden", types: ["GustyGarden", "W4", "SFG"] },
{ name: "8 Secret Stars", types: ["Secret"] },
{ name: "9 Secret Stars", types: ["Secret"] },
{ name: "2 Stars from Star Bunnies", types: ["Bunny"] },
{ name: "3 Stars from Silver Stars", types: ["Silver"] },
{ name: "4 Stars from Silver Stars", types: ["Silver"] },
{ name: "8 Unique Sets of Star Chips", types: ["Star_Chips"] },
{ name: "1 Star each from Gold Leaf, Sea Slide and Toy Time", types: ["W5"] },
{ name: "Bigmouth", types: ["W4", "Star_Bits"] },
{ name: "3 Secret Stars in Bedroom", types: ["Secret", "W4"] },
{ name: "Toy Time 1 Spinless", types: ["ToyTime"] }
];
bingoList[18] = [
{ name: "4 Stars from Dusty Dune", types: ["DustyDune", "W4", "SFG"] },
{ name: "5 Stars from Dusty Dune", types: ["DustyDune", "W4", "SFG"] },
{ name: "2 Stars from Sea Slide", types: ["SeaSlide", "W5", "SFG"] },
{ name: "3 Stars from Sea Slide", types: ["SeaSlide", "W5", "SFG"] },
{ name: "4 Stars from Gold Leaf", types: ["GoldLeaf", "W5", "SFG"] },
{ name: "6 Unique Power-Ups", types: ["PowerUp"] },
{ name: "7 Unique Power-Ups", types: ["PowerUp", "W6"] },
{ name: "2 Kamella Fights", types: ["SpaceJunk", "W6", "Boss"] },
{ name: "All 3 Mushroom Power-Ups", types: ["PowerUp", "ToyTime"] },
{ name: "6 Stars from 1 Galaxy", types: ["Battlerock", "DustyDune", "Trial"] },
{ name: "Gateway's Purple Coins", types: ["W6"] }
];
bingoList[19] = [
{ name: "4 Stars from Sea Slide", types: ["SeaSlide", "W5", "SFG"] },
{ name: "2 Stars from Toy Time", types: ["ToyTime", "W5", "SFG"] },
{ name: "3 Stars from Toy Time", types: ["ToyTime", "W5", "SFG"] },
{ name: "Spooky Speedster and Penguin Race", types: ["Race"] },
{ name: "Feed 6 Hungry Lumas", types: ["Star_Bits"] },
{ name: "Feed 8 Hungry Lumas", types: ["Star_Bits"] },
{ name: "6 Stars in Bedroom", types: ["W4"] },
{ name: "8 Stars in Bedroom", types: ["W4"] },
{ name: "Defeat Both Giant Pokeys", types: ["GoodEgg", "DustyDune"] },
{ name: "3 Luma Shops", types: ["Star_Bits", "Boss"] },
{ name: "2 Stars in Garden", types: ["W6"] }
];
bingoList[20] = [
{ name: "2 Stars from Deep Dark", types: ["DeepDark", "W6", "SFG"] },
{ name: "3 Stars from Deep Dark", types: ["DeepDark", "W6", "SFG"] },
{ name: "4 Stars from Toy Time", types: ["ToyTime", "W5", "SFG"] },
{ name: "3 Cosmic Comets", types: ["Comet", "Race"] },
{ name: "6 Stars in Engine", types: ["W5"] },
{ name: "8 Stars in Engine", types: ["W5"] },
{ name: "Both King Kaliente Fights", types: ["Boss", "W6"] },
{ name: "2 Fast-Foe Comets", types: ["Comet"] },
{ name: "Sand Spiral", types: ["Star_Bits", "W5"] },
{ name: "Bonefin", types: ["Star_Bits", "W5"] },
{ name: "Gusty Garden Comet, Freezeflame Comet and Dusty Dune Comet", types: ["Comet", "W4"] }
];
bingoList[21] = [
{ name: "2 Stars from Dreadnought", types: ["Dreadnought", "W6", "SFG"] },
{ name: "3 Stars from Dreadnought", types: ["Dreadnought", "W6", "SFG"] },
{ name: "2 Stars from Guppy", types: ["DeepDark", "W6"] },
{ name: "Collect 4 Stars Using a Cannon", types: [] },
{ name: "Collect 5 Stars Using a Cannon", types: [] },
{ name: "Matter Splatter", types: ["W6"] },
{ name: "2 Stars from Star Balls", types: ["Trial"] },
{ name: "4 Cosmic Comets", types: ["Comet", "Race"] },
{ name: "All 4 Race Types", types: ["Race"] }
];
bingoList[22] = [
{ name: "2 Stars from Melty Molten", types: ["MeltyMolten", "W6", "SFG"] },
{ name: "3 Stars from Melty Molten", types: ["MeltyMolten", "W6", "SFG"] },
{ name: "4 Stars from Deep Dark", types: ["DeepDark", "W6"] },
{ name: "All 3 Trial Galaxies", types: ["Trial"] },
{ name: "4 Stars from Deep Dark", types: ["DeepDark", "W6"] },
{ name: "1 Star each from Deep Dark, Dreadnought and Melty Molten", types: ["W6"] },
{ name: "8 Unique Boss Stars", types: ["Boss"] },
{ name: "10 Unique Boss Stars", types: ["Boss"] },
{ name: "30 Stars", types: ["Star_Total"] },
{ name: "5 Motion Control Mini-Game Stars", types: ["Trial"] },
{ name: "Feed a Hungry Luma in each dome", types: ["Star_Bits", "W6"] }
];
bingoList[23] = [
{ name: "4 Stars from Dreadnought", "types": ["Dreadnought", "W6", "SFG"] },
{ name: "3 Stars from Star Bunnies", "types": ["W6"] },
{ name: "Snow Cap", "types": ["W6"] },
{ name: "Both Spooky Speedster Races", "types": ["Race", "W6"] },
{ name: "Both Garbage Mini-Game Stars", "types": ["Battlerock", "Dreadnought", "Secret", "W6"] },
{ name: "10 Sets of Star Chips", "types": ["Star_Chips"] },
{ name: "12 Sets of Star Chips", "types": ["Star_Chips"] },
{ name: "All 4 Stars from Penguins", "types": ["NPC"] },
{ name: "Gold Leaf Comet, Sea Slide Comet and Toy Time Comet", "types": ["Comet", "W5"] },
{ name: "Deep Dark S, Dreadnought S and Melty Molten S", "types": ["Secret", "W6"] }
];
bingoList[24] = [
{ name: "4 Stars from Melty Molten", types: ["MeltyMolten", "W6", "SFG"] },
{ name: "All 3 Stars from Star Balls", types: ["Trial", "W6"] },
{ name: "Defeat Dino Piranha and Fiery Dino Piranha", types: ["Boss", "MeltyMolten", "W6"] },
{ name: "All 3 Undergrunt Gunner Fights", types: ["Boss", "W6"] },
{ name: "Defeat Topmaniac in both Battlerock and Dreadnought", types: ["Boss", "W6", "Dreadnought"] },
{ name: "36 Stars (Total)", types: ["Star_Total"] },
{ name: "3 Stars from 6 Galaxies", types: ["Galaxy"] },
{ name: "4 Stars from 5 Galaxies", types: ["Galaxy"] },
{ name: "6 Stars in Garden", types: ["W6"] },
{ name: "8 Stars in Garden", types: ["W6"] },
{ name: "2 Comets in Garden", types: ["W6", "Comet"] },
{ name: "Gold Leaf S, Sea Slide S and Toy Time S", types: ["Secret", "W5"] }
];
bingoList[25] = [
{ name: "9 Comets", types: ["Comet"] },
{ name: "10 Secret Stars", types: ["Secret"] },
{ name: "10 Stars from ?-Block Galaxies", types: ["?_Block", "W6"] },
{ name: "40 Stars (Total)", types: ["Star_Total"] },
{ name: "1 Star from All Main Galaxies", types: ["W6", "Galaxy"] },
{ name: "2 Stars from 8 Galaxies", types: ["Galaxy"] },
{ name: "4 Daredevil Comets", types: ["Comet", "W6"] },
{ name: "4 Speedy Comets", types: ["Comet", "W6"] },
{ name: "4 Luma Shops", types: ["Boss", "Star_Bits"] },
{ name: "5 Stars from Silver Stars", types: ["Silver"] },
{ name: "All 8 Motion Control Mini-Game Stars", types: ["Trial", "W6"] },
{ name: "12 Unique Boss Stars", types: ["Boss"] }
];
