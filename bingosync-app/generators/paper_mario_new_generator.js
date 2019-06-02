bingoGenerator = require("./generators/generator_bases/srl_generator_v5.js");

var bingoList = [];
bingoList[1] = [
  { name: "Dolly", types: ["dolly"] },
  { name: "Koopa Legends", types: ["koopakoot"] },
  { name: "Dizzy Dial", types: ["dizzydial"] },
  { name: "Dried Shroom", types: ["driedshroom"] },
  { name: "Egg", types: ["egg"] },
  { name: "Fire Flower", types: ["fireflower"] },
  { name: "Fright Jar", types: ["frightjar"] },
  { name: "Honey Syrup", types: ["honeysyrup"] },
  { name: "Koopa Leaf", types: ["koopaleaf"] },
  { name: "Maple Syrup", types: ["maplesyrup"] },
  { name: "Mistake", types: ["mistake"] },
  { name: "Pow Block", types: ["powblock"] },
  { name: "Sleepy Sheep", types: ["sleepysheep"] },
  { name: "Snowman Doll", types: ["snowmandoll"] },
  { name: "Super Shroom", types: ["supershroom"] },
  { name: "Super Soda", types: ["supersoda"] },
  { name: "Tasty Tonic", types: ["tastytonic"] },
  { name: "Volt Shroom", types: ["voltshroom"] },
  { name: "Whacka's Bump", types: ["wakkabump"] },
  { name: "Attack FX B", types: ["attackfxb"] },
  { name: "Close Call", types: ["closecall"] },
  { name: "Damage Dodge", types: ["damagedodge"] },
  { name: "Dizzy Attack", types: ["dizzyattack"] },
  { name: "Hammer Throw", types: ["hammerthrow"] },
  { name: "HP Plus", types: ["hp"] },
  { name: "Quake Hammer", types: ["quakehammer"] }
];
bingoList[2] = [
  { name: "Attack FX A", types: ["starpiece"] },
  { name: "Odd Key", types: ["bhs"] },
  { name: "FP Plus", types: ["fp"] },
  { name: "Defeat a Cleft", types: ["cleft"] },
  { name: "Toy Train", types: ["toytrain"] },
  { name: "Fried Egg", types: ["friedegg"] },
  { name: "Fried Shroom", types: ["friedshroom"] },
  { name: "Koopa Tea", types: ["koopatea"] },
  { name: "Hot Shroom", types: ["hotshroom"] },
  { name: "Nutty Cake", types: ["nuttycake"] },
  { name: "Spicy Soup", types: ["spicysoup"] },
  { name: "Refund", types: ["refund"] },
  { name: "Thunder Bolt", types: ["thunderbolt"] }
];
bingoList[3] = [
  { name: "First Degree Card", types: ["dojo"] },
  { name: "Coconut", types: ["jungle"] },
  { name: "Jammin' Jelly", types: ["jamminjelly"] },
  { name: "Repel Gel", types: ["repelgel"] },
  { name: "Mystery?", types: ["mystery"] },
  { name: "Stop Watch", types: ["stopwatch"] },
  { name: "Stone Cap", types: ["stonecap"] },
  { name: "Thunder Rage", types: ["thunderrage"] },
  { name: "Chill Out (Badge)", types: ["starpiece"] }
];
bingoList[4] = [
  { name: "Sushie", types: ["sushie", "jungle"] },
  { name: "At Least 5 Letters", types: ["letters"] },
  { name: "Silver Credit", types: ["koopakoot"] },
  { name: "Lyrics", types: ["fxd"] },
  { name: "Defeat a Bandit", types: ["desert"] },
  { name: "Defeat a Jungle Fuzzy", types: ["jungle"] },
  { name: "Defeat a Groove Guy", types: ["toybox"] },
  { name: "Defeat a Hurt Plant", types: ["jungle"] },
  { name: "Defeat a Sky Guy", types: ["toybox"] },
  { name: "Life Shroom", types: ["rip", "desert", "volcano"] },
  { name: "D-Down Pound", types: ["rowf"] },
  { name: "Feelin' Fine", types: ["starpiece"] },
  { name: "First Attack", types: ["rowf"] },
  { name: "Pretty Lucky", types: ["starpiece"] },
  { name: "Multibounce", types: ["rowf"] },
  { name: "Smash Charge", types: ["smashcharge"] }
];
bingoList[5] = [
  { name: "Dried Pasta", types: ["desert"] },
  { name: "Defeat a Pyro Guy", types: ["toybox"] },
  { name: "Dusty Hammer", types: ["desert"] },
  { name: "Lemon", types: ["desert"] },
  { name: "Calculator", types: ["calculator"] },
  { name: "Lime", types: ["desert"] },
  { name: "Spaghetti", types: ["desert"] },
  { name: "Cake Mix", types: ["toybox"] },
  { name: "Runaway Pay", types: ["desert"] },
  { name: "Power Quake", types: ["jungle"] }
];
bingoList[6] = [
  { name: "Second Degree Card", types: ["dojo"] },
  { name: "Mailbag", types: ["toybox"] },
  { name: "Bump Attack", types: ["rip"] },
  { name: "Defend Plus", types: ["toybox"] },
  { name: "Spin Attack", types: ["desert"] },
  { name: "Cake", types: ["toybox"] },
  { name: "Dodge Master", types: ["calculator"] },
  { name: "Attack FX C", types: ["desert"] },
  { name: "Happy Heart", types: ["jungle"] },
  { name: "2x HP Plus", types: ["hp"] }
];
bingoList[7] = [
  { name: "Cookbook", types: ["cookbook", "toybox"] },
  { name: "Storeroom Key", types: ["toybox"] },
  { name: "Dried Fruit", types: ["desert"] },
  { name: "I Spy", types: ["calculator"] },
  { name: "Tape", types: ["koopakoot"] },
  { name: "Double Dip", types: ["calculator"] },
  { name: "Melody", types: ["fxd", "desert"] },
  { name: "Shooting Star", types: ["toybox", "flowerfields"] },
  { name: "Ice Power", types: ["toybox"] },
  { name: "Sleep Stomp", types: ["calculator"] }
];
bingoList[8] = [
  { name: "Bland Meal", types: ["cookbook"] },
  { name: "Group Focus", types: ["calculator"] },
  { name: "Egg Missile", types: ["cookbook"] },
  { name: "Ultra Stone", types: ["upgrades", "jungle"] },
  { name: "Spin Smash", types: ["calculator"] },
  { name: "Honey Shroom", types: ["cookbook"] },
  { name: "Frying Pan", types: ["toybox"] },
  { name: "Ultra Shroom", types: ["desert"] },
  { name: "Honey Super", types: ["cookbook"] },
  { name: "Attack FX D", types: ["fxd", "desert"] },
  { name: "Maple Shroom", types: ["cookbook"] },
  { name: "Happy Flower", types: ["starpiece", "flowerfields"] },
  { name: "Maple Super", types: ["cookbook"] },
  { name: "Deep Focus", types: ["toybox", "ch2", "ch3", "ch4", "ch5"] },
  { name: "Jump Charge", types: ["calculator"] },
  { name: "Yummy Meal", types: ["cookbook"] }
];
bingoList[9] = [
  { name: "Big Cookie", types: ["cookbook", "toybox"] },
  { name: "Special Shake", types: ["cookbook"] },
  { name: "Defeat Chapter 5 Jr. Troopa", types: ["jungle"] },
  { name: "Honey Candy", types: ["cookbook", "toybox"] },
  { name: "Electro Pop", types: ["cookbook", "toybox"] },
  { name: "Defeat a Lava Bubble", types: ["volcano"] },
  { name: "Fire Pop", types: ["cookbook", "toybox"] },
  { name: "Jelly Shroom", types: ["cookbook"] },
  { name: "Strange Leaf", types: ["mansion"] },
  { name: "Shroom Cake", types: ["cookbook", "toybox"] },
  { name: "Jelly Super", types: ["cookbook"] },
  { name: "All or Nothing", types: ["calculator"] },
  { name: "Kookie Cookie", types: ["cookbook", "toybox"] }
];
bingoList[10] = [
  { name: "Ultra-Rank Bombette", types: ["upgrades"] },
  { name: "Ultra-Rank Parakarry", types: ["upgrades"] },
  { name: "Coco Pop", types: ["cookbook", "toybox", "jungle"] },
  { name: "Defeat a Hyper Goomba", types: ["gulch"] },
  { name: "Defeat a Hyper Cleft", types: ["gulch"] },
  { name: "Defeat a Spike Top", types: ["volcano"] },
  { name: "Healthy Juice", types: ["cookbook"] },
  { name: "Pulse Stone", types: ["desert", "ruins"] },
  { name: "Record", types: ["mansion", "bow", "boots"] },
  { name: "Complete Chapter 1", types: ["ch1"] },
  { name: "Jelly Pop", types: ["cookbook", "toybox"] },
  { name: "2x FP Plus", types: ["fp"] },
  { name: "Peekaboo", types: ["starpiece"] },
  { name: "Zap Tap", types: ["starpiece"] },
  { name: "Fire Shield", types: ["volcano"] }
];
bingoList[11] = [
  { name: "Spike Shield", types: ["ruins"] },
  { name: "Ultra-Rank Goombario", types: ["upgrades"] },
  { name: "Defeat Electro Blooper", types: ["blooper"] },
  { name: "Ultra-Rank Kooper", types: ["upgrades"] },
  { name: "Defeat Buzzar", types: ["buzzar"] },
  { name: "Shrink Stomp", types: ["blooper"] },
  { name: "Ultra Hammer", types: ["volcano", "hammer", "ch5"] },
  { name: "Shroom Steak", types: ["cookbook"] },
  { name: "Ultra-Rank Sushie", types: ["upgrades", "sushie"] },
  { name: "Ruins Key", types: ["ruins"] },
  { name: "2x Happy Heart", types: ["starpiece", "jungle"] },
  { name: "Sweet Shroom", types: ["cookbook"] },
  { name: "Weight", types: ["mansion", "bow", "boots"] },
  { name: "Koopasta", types: ["cookbook", "desert"] }
];
bingoList[12] = [
  { name: "Defeat an Anti Guy", types: ["toybox"] },
  { name: "Super Boots", types: ["mansion", "boots"] },
  { name: "Power Plus", types: ["toybox", "starpiece"] },
  { name: "Luigi's Autograph", types: ["koopakoot"] },
  { name: "Lemon Candy", types: ["cookbook", "toybox", "desert"] },
  { name: "Dizzy Stomp", types: ["volcano"] },
  { name: "Lime Candy", types: ["cookbook", "toybox", "desert"] }
];
bingoList[13] = [
  { name: "Boo's Portrait", types: ["mansion", "bow", "boots"] },
  { name: "Honey Ultra", types: ["cookbook", "desert"] },
  { name: "Boiled Egg", types: ["cookbook", "mansion"] },
  { name: "Flower Finder", types: ["starpiece"] },
  { name: "Deluxe Feast", types: ["cookbook", "mansion"] },
  { name: "Jelly Ultra", types: ["cookbook", "desert"] },
  { name: "Heart Finder", types: ["starpiece"] },
  { name: "Apple", types: ["mansion"] },
  { name: "Maple Ultra", types: ["cookbook", "desert"] }
];
bingoList[14] = [
  { name: "Diamond Stone", types: ["ruins"] },
  { name: "Lunar Stone", types: ["ruins"] },
  { name: "Super Hammer", types: ["ruins", "hammer", "ch2"] },
  { name: "Quick Change", types: ["boots"] },
  { name: "Artifact", types: ["ruins"] },
  { name: "3x HP Plus", types: ["hp"] },
  { name: "Bow", types: ["mansion", "bow"] },
  { name: "Slow Go", types: ["ruins"] },
  { name: "Pyramid Stone", types: ["ruins"] }
];
bingoList[15] = [
  { name: "Ultra-Rank 2 Partners", types: ["upgrades"] },
  { name: "Third-Degree Card", types: ["dojo"] },
  { name: "Wallet", types: ["koopakoot"] },
  { name: "Strange Cake", types: ["cookbook", "mansion", "toybox"] },
  { name: "HP Drain", types: ["starpiece"] },
  { name: "D-Down Jump", types: ["gulch"] }
];
bingoList[16] = [
  { name: "Power Smash", types: ["blooper", "hammer"] },
  { name: "Watt", types: ["watt", "toybox", "ch4"] },
  { name: "Defeat Lava Piranha", types: ["volcano", "ch5"] },
  { name: "Defeat Latern Ghost", types: ["watt", "toybox", "ch4"] },
  { name: "At Least 8 Letters", types: ["letters"] },
  { name: "Tubba Bubba's Castle Key", types: ["gulch", "boots"] },
  { name: "3x FP Plus", types: ["hp", "calculator"] }
];
bingoList[17] = [
  { name: "At Least 25 FP", types: ["levels", "fp"] },
  { name: "At Least 25 HP", types: ["levels", "hp"] },
  { name: "Melon", types: ["ch5"] },
  { name: "Ultra-Rank Bow", types: ["bow", "upgrades", "mansion"] },
  { name: "Complete Chapter 5", types: ["volcano", "ch5"] },
  { name: "Defeat Tutankoopa", types: ["ruins", "ch2"] },
  { name: "Volcano Vase", types: ["ch5"] },
  { name: "Money Money", types: ["starpiece"] }
];
bingoList[18] = [
  { name: "Defeat Fuzzipede", types: ["toybox", "watt", "ch4"] },
  { name: "Ultra-Rank Watt", types: ["watt", "upgrades", "toybox", "ch4"] },
  { name: "Defeat a Chain Chomp", types: ["ruins"] },
  { name: "Defeat General Guy", types: ["toybox", "watt", "ch4"] },
  { name: "All 4 Magical Seeds", types: ["ch5"] },
  { name: "At Least 15 BP", types: ["levels"] },
  { name: "Last Stand", types: ["ch2", "ch3", "ch4", "ch5"] },
  { name: "Crystal Ball", types: ["koopakoot", "desert"] },
  { name: "Mystical Key", types: ["gulch", "boots"] },
  { name: "Mystery Note", types: ["bow", "toybox"] },
  { name: "Power Rush", types: ["ch2", "ch3", "ch4", "ch5"] }
];
bingoList[19] = [
  { name: "Fourth-Degree Card", types: ["dojo"] },
  { name: "Defeat Kent C. Koopa", types: ["ch5"] },
  { name: "Complete Chapter 2", types: ["ruins", "ch2"] },
  { name: "Stinky Herb", types: ["flowerfields", "ch5"] },
  { name: "Complete Chapter 4", types: ["toybox", "watt", "ch4"] },
  { name: "Red Berry", types: ["flowerfields", "ch5"] },
  { name: "Dictionary", types: ["bow", "toybox"] },
  { name: "Merluvlee's Autograph", types: ["koopakoot", "desert"] },
  { name: "2x Deep Focus", types: ["toybox", "ch2", "ch3", "ch4", "ch5"] },
  { name: "Flower Saver", types: ["flowerfields", "starpiece", "ch5"] },
  { name: "Apple Pie", types: ["cookbook", "mansion", "toybox", "fakupie"] },
  { name: "Yellow Berry", types: ["flowerfields", "ch5"] },
];
bingoList[20] = [
  { name: "Magical Bean", types: ["flowerfields", "ch5"] },
  { name: "Fertile Soil", types: ["flowerfields", "ch5"] },
  { name: "Defeat an Amazee Dazee", types: ["flowerfields", "ch5"] },
  { name: "Defeat Tubba Bubba", types: ["gulch", "boots", "ch3"] },
  { name: "Mega Quake", types: ["calculator", "ch5"] },
  { name: "Defeat Super Blooper", types: ["blooper", "hammer"] },
  { name: "S. Smash Charge", types: ["calculator", "ch5"] },
  { name: "2x Damage Dodge", types: ["calculator", "damagedodge", "ch5"] }
];
bingoList[21] = [
  { name: "Ultra-Rank 3 Partners", types: ["upgrades"] },
  { name: "2x Power Plus", types: ["toybox", "starpiece"] },
  { name: "2x Flower Saver", types: ["flowerfields", "starpiece", "ch5"] },
  { name: "Defeat Lakilester", types: ["flowerfields", "sushie", "ch5"] },
  { name: "Complete Chapter 3", types: ["gulch", "boots", "ch3"] },
  { name: "Gold Credit", types: ["koopakoot", "desert"] },
  { name: "Ultra Boots", types: ["flowerfields", "boots", "sushie", "ch5"] },
  { name: "Yoshi Cookie", types: ["cookbook", "toybox", "ch5"] }
];
bingoList[22] = [
  { name: "Water Stone", types: ["flowerfields", "ch5"] },
  { name: "Crystal Berry", types: ["flowerfields", "ch5"] },
  { name: "Bubble Berry", types: ["flowerfields", "sushie", "ch5"] },
  { name: "Ultra-Rank Lakilester", types: ["flowerfields", "upgrades", "sushie", "ch5"] },
  { name: "At Least 10 Letters", types: ["letters", "ch5", "flowerfields", "boots"] }
];
bingoList[23] = [
  { name: "Break the Puff-Puff Machine", types: ["flowerfields", "ch5"] },
  { name: "Old Photo", types: ["koopakoot", "desert", "mansion"] },
  { name: "S. Jump Charge", types: ["flowerfields", "sushie", "ch5"] },
  { name: "Complete 10 Chuck Quizmo Quizzes", types: ["starpiece"] }
];
bingoList[24] = [
  { name: "Jade Raven", types: ["jungle", "watt", "FigureFresh"] },
  { name: "Ultra-Rank 4 Partners", types: ["upgrades"] },
  { name: "Defeat Jr. Troopa 4 Times", types: ["jungle","ch1"] }
];
bingoList[25] = [
  { name: "Glasses", types: ["koopakoot", "desert", "mansion", "ch5"] },
  { name: "Diploma", types: ["dojo"] },
  { name: "Iced Potato", types: ["ch7", "flowerfields", "ch5"] },
  { name: "Attack FX E", types: ["ch7", "flowerfields", "ch5"] }
];
