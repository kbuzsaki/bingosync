bingoGenerator = require("./generators/generator_bases/srl_generator_v5.js");

var bingoList = [];
bingoList[1] = [
  { name: "Beat O’Chunks (Chapter 1)", types: ["boss"] },
  { name: "Get Luigi", types: ["progress","hard"] },
  { name: "Get 2 Cooking Disks", types: ["collection","rare"] },
  { name: "Get hurt by a Back Cursya (grey)", types: ["selfharm","enemy"] },
];
bingoList[2] = [
  { name: "Beat Francis without Bowser", types: ["boss","skip"] },
  { name: "Find a coin room", types: ["easy","money"] },
  { name: "Find a Megabite", types: ["enemy","rare"] },
  { name: "Use a Speed Flower", types: ["item","easy"] },
  { name: "Beat 2 Mega Muths", types: ["enemy","hard"] },
];
bingoList[3] = [
  { name: "Unlock the door to Chapter 4", types: ["progress"] },
  { name: "Beat Mimi (Chapter 2) without Slim", types: ["boss","skip"] },
  { name: "Get Barry", types: ["progress","easy"] },
  { name: "Get 400 coins", types: ["money"] },
  { name: "Get a score of 500.000 points", types: ["exp","hard"] },
];
bingoList[4] = [
  { name: "Buy a booster", types: ["buy","collection"] },
  { name: "Use a Shell Shock in Chapter 3-1", types: ["item","weird"] },
  { name: "Skip a Pal Pill", types: ["item","skip","easy"] },
  { name: "Cook 5 different dishes", types: ["cooking","rare"] },
];
bingoList[5] = [
  { name: "Visit Itty Bits in Flipside", types: ["mini"] },
  { name: "Find an Amazy Dayzee", types: ["enemy","luck","hard"] },
  { name: "Beat 10 floors of the Flopside Pit", types: ["challenge"] },
  { name: "Beat Fracktail without falling off", types: ["boss","challenge"] },
  { name: "Beat Count Bleck", types: ["boss","hard"] },
];
bingoList[6] = [
  { name: "Unlock the door to Chapter 3", types: ["progress"] },
  { name: "Beat 5 floors of each Pits", types: ["challenge"] },
  { name: "Get Peach", types: ["progress","cooking"] },
  { name: "Get 50 Enemy Cards", types: ["collection","hard"] },
  { name: "Buy an Ultra Shroom Shake and toss it", types: ["buy","hard","item","skip"] },
];
bingoList[7] = [
  { name: "Get the Golden Card", types: ["item","rare"] },
  { name: "Use a Hot Sauce in Chapter 2-2", types: ["item","weird","luck","mini"] },
  { name: "Cook a Block Block", types: ["cooking","weird"] },
  { name: "Beat Fracktail", types: ["boss"] },
];
bingoList[8] = [
  { name: "Beat the Big Blooper", types: ["boss"] },
  { name: "Get on the Balcony of Merlee’s Mansion", types: ["challenge"] },
  { name: "Get hurt by staying in 3D too long", types: ["selfharm","easy"] },
  { name: "Eat Cake Mix", types: ["item","weird"] },
  { name: "Get to level 10", types: ["exp","hard"] },
];
bingoList[9] = [
  { name: "Get an “Excellent” from the audience", types: ["challenge","enemy","exp"] },
  { name: "Skip a Mega Star", types: ["item","skip"] },
  { name: "Use a Peachy Peach in Chapter 6", types: ["item","weird","hard"] },
  { name: "Get 10 Enemy Cards", types: ["collection"] },
  { name: "Get a Game Over in the River Twygz", types: ["selfharm","hard"] },
];
bingoList[10] = [
  { name: "Capture an enemy with a Catch Card", types: ["enemy","collection"] },
  { name: "Beat Mimi (Chapter 6) without Peach", types: ["boss","skip","hard"] },
  { name: "Beat 20 floors of the Flipside Pit", types: ["challenge"] },
  { name: "Get a Cooking Disk", types: ["collection","rare"] },
  { name: "Visit Itty Bits in the Cragnon village", types: ["mini"] },
];
bingoList[11] = [
  { name: "Get 200 coins", types: ["money","easy"] },
  { name: "Use a Thunder Rage in Chapter 7-3", types: ["item","weird","hard"] },
  { name: "Buy a Gold Medal", types: ["item","buy","hard","money"] },
  { name: "Wear the Floro Sprout during the Bonechill battle", types: ["boss","weird","hard"] },
  { name: "Get a Game Over", types: ["selfharm","easy"] },
];
bingoList[12] = [
  { name: "Use a Power Plus", types: ["item","rare"] },
  { name: "Buy 5 boosters", types: ["buy","collection"] },
  { name: "Cook 2 different dishes", types: ["cooking"] },
  { name: "Beat Mr. L (Chapter 4)", types: ["boss"] },
  { name: "Unlock the door to Chapter 7", types: ["hard","progress"] },
];
bingoList[13] = [
  { name: "Unlock the door to Chapter 6", types: ["progress","hard"] },
  { name: "Beat O’Chunks (Chapter 1) without using anything but items", types: ["boss","skip"] },
  { name: "Beat 10 floors of the Flipside Pit", types: ["challenge"] },
  { name: "Find 5 coin rooms", types: ["money","luck"] },
  { name: "Get Bowser", types: ["progress"] },
];
bingoList[14] = [
  { name: "Get 25 Enemy Cards", types: ["collection","luck"] },
  { name: "Get a Whacka Bump", types: ["item","rare"] },
  { name: "Cook a Gold Bar", types: ["cooking","item","weird"] },
  { name: "Die in Flipside/Flopside", types: ["selfharm"] },
  { name: "Beat Bonechill", types: ["boss","hard"] },
];
bingoList[15] = [
  { name: "Beat the Underchomp without Piccolo", types: ["boss","skip","hard"] },
  { name: "Get Piccolo", types: ["progress","hard"] },
  { name: "Beat O’Chunks (Chapter 5)", types: ["boss"] },
  { name: "Use a Shooting Star in Chapter 4", types: ["item","weird"] },
  { name: "Cook a Black Apple", types: ["cooking","hard"] },
];
bingoList[16] = [
  { name: "Use a Stop Watch in Chapter 4-4", types: ["item","weird"] },
  { name: "Use a Slow Flower", types: ["easy","item"] },
  { name: "Unlock the door to Chapter 2", types: ["progress"] },
  { name: "Visit Itty Bits in Flopside", types: ["mini"] },
  { name: "Beat the Underchomp", types: ["boss","hard"] },
];
bingoList[17] = [
  { name: "Buy a Golden Choco-Bar in Space", types: ["buy","money"] },
  { name: "Use a Primordial Fruit in Chapter 7-4", types: ["item","weird","hard"] },
  { name: "Cook a Life Shroom", types: ["cooking","selfharm"] },
  { name: "Unlock the door to Chapter 5", types: ["progress"] },
];
bingoList[18] = [
  { name: "Beat the Big Blooper", types: ["boss"] },
  { name: "Beat Bowser (Chapter 7)", types: ["boss","hard"] },
  { name: "Get 3 Enemy Cards", types: ["collection","easy"] },
  { name: "Skip a Happy Flower", types: ["skip","item"] },
];
bingoList[19] = [
  { name: "Talk to Lock in Chapter 2-1 as Mario", types: ["weird","easy"] },
  { name: "Beat a Mister I", types: ["enemy"] },
  { name: "Eat a Mistake", types: ["cooking","weird"] },
  { name: "Beat 40 opponents in the Duel of 100", types: ["challenge","hard"] },
  { name: "Use a POW Block against Mimi in Chapter 2", types: ["boss","item","weird"] },
];
bingoList[20] = [
  { name: "Use a Mystery Box against Super Dimentio", types: ["boss","item","weird","hard"] },
  { name: "Use an Inky Sauce in Chapter 3-2", types: ["item","weird"] },
  { name: "Cook a Whacka Bump", types: ["cooking","rare"] },
  { name: "Beat Bowser (Chapter 3)", types: ["boss"] },
];
bingoList[21] = [
  { name: "Beat Francis", types: ["boss"] },
  { name: "Eat a Poison Shroom", types: ["item","selfharm"] },
  { name: "Beat Brobot L-type (Chapter 6)", types: ["boss","hard"] },
  { name: "Visit Itty Bits in the Overthere", types: ["mini","hard"] },
  { name: "Use a Turtley Leaf in Chapter 3-3", types: ["item","weird"] },
];
bingoList[22] = [
  { name: "Beat 20 opponents in the Duel of 100", types: ["challenge"] },
  { name: "Use a HP Plus", types: ["item","rare"] },
  { name: "Beat a Red I", types: ["enemy","hard","luck"] },
  { name: "Beat 3 Muths", types: ["enemy"] },
];
bingoList[23] = [
  { name: "Get to level 5", types: ["exp"] },
  { name: "Use a Horsetail in Chapter 5", types: ["item","weird"] },
  { name: "Beat King Croacus", types: ["boss"] },
  { name: "Beat Mimi (Chapter 6)", types: ["boss","hard"] },
];
bingoList[24] = [
  { name: "Get a score of 200.000 points", types: ["exp"] },
  { name: "Beat 20 floors of the Flopside Pit", types: ["challenge"] },
  { name: "Beat Super Dimentio", types: ["boss","hard"] },
  { name: "Beat 50 opponents in the Duel of 100", types: ["challenge","hard"] },
  { name: "Have 5 Dried Mushrooms at once", types: ["item","weird","luck"] },
];
bingoList[25] = [
  { name: "Buy a Hot Dog", types: ["mini","buy","hard"] },
  { name: "Cook and eat a Dangerous Delight", types: ["cooking","selfharm"] },
  { name: "Miss catching an enemy with a Catch Card SP", types: ["enemy","weird","collection","luck"] },
  { name: "Unlock the door to Chapter 8", types: ["progress","hard"] },
];
