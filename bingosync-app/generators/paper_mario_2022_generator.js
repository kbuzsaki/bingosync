var bingoGenerator = require("./generators/generator_bases/srl_generator_v5.js");

var bingoList = [];
bingoList[1] = [
  { name: "Dolly", types: ["dolly"] }, 
  { name: "Dried Shroom", types: ["driedshroom"] },
  { name: "Egg", types: ["egg"] },
  { name: "Fire Flower", types: ["fireflower"] },
  { name: "Fright Jar", types: ["frightjar"] },
  { name: "Honey Syrup", types: ["honeysyrup"] },
  { name: "Koopa Leaf", types: ["koopaleaf"] },
  { name: "Pow Block", types: ["powblock"] },
  { name: "Sleepy Sheep", types: ["sleepysheep"] },
  { name: "Super Shroom", types: ["supershroom"] },
  { name: "Tasty Tonic", types: ["tastytonic"] },
  { name: "Volt Shroom", types: ["voltshroom"] },
  { name: "Whacka's Bump", types: ["wakkabump"] },
  { name: "Attack FX B", types: ["attackfxb"] },
  { name: "Close Call", types: ["closecall"] },
  { name: "Damage Dodge", types: ["damagedodge"] },
  { name: "Dizzy Attack", types: ["dizzyattack"] },
  { name: "Hammer Throw", types: ["hammerthrow"] },
  { name: "Snowman Doll", types: ["snowmandoll"] },
  { name: "Dizzy Dial", types: ["dizzydial"] },
  { name: "Coconut", types: ["jungle"] },
  { name: "HP Plus", types: ["hp"] }
];
bingoList[2] = [
  { name: "Quake Hammer", types: ["quakehammer"] },
  { name: "Super Soda", types: ["supersoda"] },
  { name: "Mistake", types: ["mistake"] },
  { name: "Maple Syrup", types: ["maplesyrup"] },
  { name: "Koopa Legends", types: ["koopakoot"] },
  { name: "FP Plus", types: ["fp"] },
  { name: "Defeat a Cleft", types: ["cleft"] },
  { name: "Toy Train", types: ["toytrain"] },
  { name: "Fried Egg", types: ["friedegg"] },
  { name: "Fried Shroom", types: ["friedshroom"] },
  { name: "Koopa Tea", types: ["koopatea"] },
  { name: "Hot Shroom", types: ["hotshroom"] },
  { name: "Nutty Cake", types: ["nuttycake"] },
  { name: "Spicy Soup", types: ["spicysoup"] },
  { name: "Lyrics", types: ["fxd"] },
  { name: "Fire Shield", types: ["volcano"] },
  { name: "Thunder Bolt", types: ["thunderbolt"] }
];
bingoList[3] = [
  { name: "Refund", types: ["refund"] },
  { name: "Attack FX A", types: ["starpiece"] },
  { name: "Pay-Off", types: ["starpiece"] },
  { name: "Odd Key", types: ["bhs"] },
  { name: "First Degree Card", types: ["dojo"] },
  { name: "Jammin' Jelly", types: ["jamminjelly"] },
  { name: "Repel Gel", types: ["repelgel"] },
  { name: "Mystery?", types: ["mystery"] },
  { name: "Stop Watch", types: ["stopwatch"] },
  { name: "Stone Cap", types: ["stonecap"] },
  { name: "Thunder Rage", types: ["thunderrage"] },
  { name: "Silver Credit", types: ["koopakoot"] },
  { name: "Chill Out (Badge)", types: ["starpiece"] },
  { name: "Dizzy Stomp", types: ["volcano"] },
  { name: "1 Quizmo", types: ["starpiece"] },
  { name: "Yummy Meal", types: ["cookbook"] }
];
bingoList[4] = [
  { name: "At Least 5 Letters", types: ["letters"] },
  { name: "Defeat a Jungle Fuzzy", types: ["jungle"] },
  { name: "Defeat a Hurt Plant", types: ["jungle"] },
  { name: "Defeat a Spike Top", types: ["spiketop"] },
  { name: "Life Shroom", types: ["rip", "desert", "volcano"] },
  { name: "D-Down Pound", types: ["rowf"] },
  { name: "Feelin' Fine", types: ["starpiece"] },
  { name: "First Attack", types: ["rowf"] },
  { name: "Pretty Lucky", types: ["starpiece"] },
  { name: "Kill Whacka", types: ["wakkabump"] },
  { name: "Multibounce", types: ["rowf"] }
];
bingoList[5] = [
  { name: "Dried Pasta", types: ["desert"] },
  { name: "Shooting Star", types: ["shootingstar"] },
  { name: "Defeat a Bandit", types: ["desert"] },
  { name: "Defeat a Groove Guy", types: ["toybox"] },
  { name: "Defeat a Sky Guy", types: ["toybox"] },
  { name: "Dusty Hammer", types: ["desert"] },
  { name: "Lemon", types: ["desert"] },
  { name: "Calculator", types: ["calculator"] },
  { name: "Mailbag", types: ["toybox"] },
  { name: "Lime", types: ["desert"] },
  { name: "Cake Mix", types: ["toybox"] },
  { name: "Cookbook", types: ["cookbook", "toybox"] },
  { name: "Runaway Pay", types: ["desert"] },
  { name: "Defend Plus", types: ["toybox"] },
  { name: "Happy Heart", types: ["jungle"] },
  { name: "3 Quizmos", types: ["starpiece"] },
  { name: "Power Quake", types: ["jungle"] }
];
bingoList[6] = [
  { name: "Second Degree Card", types: ["dojo"] },
  { name: "Defeat a Pyro Guy", types: ["toybox"] },
  { name: "Deep Focus", types: ["toybox", "ch2", "ch3", "ch4", "ch5"] },
  { name: "Storeroom Key", types: ["toybox"] },
  { name: "Bump Attack", types: ["rip"] },
  { name: "Spin Attack", types: ["desert"] },
  { name: "Spaghetti", types: ["desert"] },
  { name: "Cake", types: ["toybox"] },
  { name: "I Spy", types: ["calculator"] },
  { name: "Ice Power", types: ["toybox"] },
  { name: "Spike Shield", types: ["ruins"] },
  { name: "Ruins Key", types: ["ruins"] },
  { name: "Attack FX C", types: ["desert"] },
  { name: "Power Smash", types: ["blooper", "hammer"] },
  { name: "2x HP Plus", types: ["hp"] }
];
bingoList[7] = [
  { name: "Dodge Master", types: ["calculator"] },
  { name: "Tape", types: ["koopakoot"] },
  { name: "Double Dip", types: ["calculator"] },
  { name: "Melody", types: ["fxd", "desert"] },
  { name: "Sleep Stomp", types: ["calculator"] },
  { name: "Defeat a Lava Bubble", types: ["volcano"] },
  { name: "Strange Leaf", types: ["mansion"] },
  { name: "Frying Pan", types: ["toybox"] }
];
bingoList[8] = [
  { name: "Bland Meal", types: ["cookbook"] },
  { name: "Group Focus", types: ["calculator"] },
  { name: "Egg Missile", types: ["cookbook"] },
  { name: "Ultra Stone", types: ["upgrades", "jungle"] },
  { name: "Spin Smash", types: ["calculator"] },
  { name: "Honey Shroom", types: ["cookbook"] },
  { name: "Ultra Shroom", types: ["desert"] },
  { name: "Honey Super", types: ["cookbook"] },
  { name: "Maple Shroom", types: ["cookbook"] },
  { name: "Happy Flower", types: ["starpiece", "flowerfields"] },
  { name: "Maple Super", types: ["cookbook"] },
  { name: "Jump Charge", types: ["calculator"] }
];
bingoList[9] = [
  { name: "Big Cookie", types: ["cookbook", "toybox"] },
  { name: "Defeat Chapter 5 Jr. Troopa", types: ["jungle"] },
  { name: "Honey Candy", types: ["cookbook", "toybox"] },
  { name: "Electro Pop", types: ["cookbook", "toybox"] },
  { name: "Fire Pop", types: ["cookbook", "toybox"] },
  { name: "Shroom Steak", types: ["cookbook"] },
  { name: "Jelly Shroom", types: ["cookbook", "jamminjelly"] },
  { name: "Shroom Cake", types: ["cookbook", "toybox"] },
  { name: "Jelly Super", types: ["cookbook", "jamminjelly"] },
  { name: "All or Nothing", types: ["calculator"] },
  { name: "Attack FX D", types: ["fxd", "desert"] },
  { name: "Dried Fruit", types: ["desert"] },
  { name: "Smash Charge", types: ["ch1"] },
  { name: "Defeat a Hyper Goomba", types: ["gulch"] },
  { name: "Defeat a Hyper Cleft", types: ["gulch"] },
  { name: "Coco Pop", types: ["cookbook", "toybox", "jungle"] },
  { name: "Record", types: ["mansion", "bow", "boots"] },
  { name: "Weight", types: ["mansion", "bow", "boots"] },
  { name: "Kookie Cookie", types: ["cookbook", "toybox"] }
];
bingoList[10] = [
  { name: "Ultra-Rank Bombette", types: ["upgrades"] },
  { name: "Ultra-Rank Parakarry", types: ["upgrades"] },
  { name: "Pulse Stone", types: ["desert", "ruins"] },
  { name: "Jelly Pop", types: ["cookbook", "toybox", "jamminjelly"] },
  { name: "Sweet Shroom", types: ["cookbook"] },
  { name: "2x FP Plus", types: ["fp"] },
  { name: "Peekaboo", types: ["starpiece"] },
  { name: "Zap Tap", types: ["starpiece"] }
];
bingoList[11] = [
  { name: "Ultra-Rank Goombario", types: ["upgrades"] },
  { name: "Ultra-Rank Kooper", types: ["upgrades"] },
  { name: "Ultra-Rank Sushie", types: ["upgrades", "sushie"] },
  { name: "2x Happy Heart", types: ["starpiece", "jungle"] },
  { name: "Super Boots", types: ["mansion", "boots"] },
  { name: "Apple", types: ["mansion"] },
  { name: "Volcano Vase", types: ["ch5"] },
  { name: "Koopasta", types: ["cookbook", "desert"] },
  { name: "3 Repel Gels", types: ["gulch"] }
];
bingoList[12] = [
  { name: "Defeat Buzzar", types: ["buzzar"] },
  { name: "Lemon Candy", types: ["cookbook", "toybox", "desert"] },
  { name: "Luigi's Autograph", types: ["koopakoot"] },
  { name: "Boo's Portrait", types: ["mansion", "bow", "boots"] },
  { name: "Honey Ultra", types: ["cookbook", "desert"] },
  { name: "Lime Candy", types: ["cookbook", "toybox", "desert"] },
  { name: "Boiled Egg", types: ["cookbook", "mansion"] },
  { name: "Flower Finder", types: ["starpiece"] },
  { name: "Heart Finder", types: ["starpiece"] },
  { name: "Pyramid Stone", types: ["ruins"] },
  { name: "Artifact", types: ["ruins"] },
  { name: "Melon", types: ["ch5"] },
  { name: "Maple Ultra", types: ["cookbook", "desert"] }
];
bingoList[13] = [
  { name: "Defeat an Anti Guy", types: ["toybox"] },
  { name: "Power Plus", types: ["toybox", "starpiece"] },
  { name: "Deluxe Feast", types: ["cookbook", "mansion"] },
  { name: "Jelly Ultra", types: ["cookbook", "desert", "jamminjelly"] },
  { name: "Diamond Stone", types: ["ruins"] },
  { name: "Slow Go", types: ["ruins"] },
  { name: "Bow", types: ["mansion", "bow"] },
  { name: "Special Shake", types: ["cookbook"] },
  { name: "Healthy Juice", types: ["cookbook"] },
  { name: "Lunar Stone", types: ["ruins"] }
];
bingoList[14] = [
  { name: "Super Hammer", types: ["ruins", "hammer", "ch2"] },
  { name: "Quick Change", types: ["boots"] },
  { name: "Ultra-Rank 2 Partners", types: ["upgrades"] },
  { name: "Third-Degree Card", types: ["dojo"] },
  { name: "Wallet", types: ["koopakoot"] },
  { name: "All 4 Magical Seeds", types: ["ch5"] },
  { name: "Defeat Kent C. Koopa", types: ["ch5"] },
  { name: "3x HP Plus", types: ["hp"] }
];
bingoList[15] = [
  { name: "Strange Cake", types: ["cookbook", "mansion", "toybox"] },
  { name: "HP Drain", types: ["starpiece"] },
  { name: "Tubba Bubba's Castle Key", types: ["gulch", "boots"] },
  { name: "D-Down Jump", types: ["gulch", "boots"] },
  { name: "At Least 25 HP", types: ["levels", "hp"] },
  { name: "At Least 25 FP", types: ["levels", "fp"] }
];
bingoList[16] = [
  { name: "Defeat Lava Piranha", types: ["volcano", "ch5"] },
  { name: "At Least 8 Letters", types: ["desert", "letters"] },
  { name: "3x FP Plus", types: ["fp", "calculator"] },
  { name: "Stinky Herb", types: ["flowerfields", "ch5"] },
  { name: "Red Berry", types: ["flowerfields", "ch5"] },
  { name: "Defeat Super Blooper", types: ["blooper", "hammer"] },
  { name: "At Least 15 BP", types: ["levels"] }
];
bingoList[17] = [
  { name: "Complete Chapter 5", types: ["volcano", "ch5"] },
  { name: "Watt", types: ["watt", "toybox", "ch4"] },
  { name: "Defeat Lantern Ghost", types: ["watt", "toybox", "ch4"] },
  { name: "Last Stand", types: ["ch2", "ch3", "ch4", "ch5"] },
  { name: "Power Rush", types: ["ch2", "ch3", "ch4", "ch5"] },
  { name: "Crystal Ball", types: ["koopakoot", "desert"] },
  { name: "2 Jammin’ Jellies", types: ["jamminjelly", "flowerfields", "ch5"]},
  { name: "Money Money", types: ["starpiece"] }
];
bingoList[18] = [
  { name: "Defeat a Chain Chomp", types: ["ruins"] }, 
  { name: "Mystical Key", types: ["gulch", "boots"] },
  { name: "Ultra-Rank Bow", types: ["bow", "upgrades", "mansion"] },
  { name: "Mystery Note", types: ["bow", "toybox"] },
  { name: "Fourth-Degree Card", types: ["dojo"] },
  { name: "Ultra-Rank 3 Partners", types: ["upgrades"] },
  { name: "Defeat Tutankoopa", types: ["ruins", "ch2"] }
];
bingoList[19] = [
  { name: "Complete Chapter 2", types: ["ruins", "ch2"] },
  { name: "Dictionary", types: ["bow", "toybox"] },
  { name: "Merluvlee's Autograph", types: ["koopakoot", "desert"] },
  { name: "2x Deep Focus", types: ["toybox", "ch2", "ch3", "ch4", "ch5"] },
  { name: "Flower Saver", types: ["flowerfields", "starpiece", "ch5"] },
  { name: "Apple Pie", types: ["cookbook", "mansion", "toybox", "fakupie"] },
  { name: "Defeat Fuzzipede", types: ["toybox", "watt", "ch4"] },
  { name: "Ultra-Rank Watt", types: ["watt", "upgrades", "toybox", "ch4"] },
  { name: "Defeat General Guy", types: ["toybox", "watt", "ch4"] },
  { name: "Yellow Berry", types: ["flowerfields", "ch5"] },
];
bingoList[20] = [
  { name: "Magical Bean", types: ["flowerfields", "ch5"] },
  { name: "Complete Chapter 4", types: ["toybox", "watt", "ch4"] },
  { name: "Fertile Soil", types: ["flowerfields", "ch5"] },
  { name: "Defeat an Amazee Dazee", types: ["flowerfields", "ch5"] },
  { name: "Mega Quake", types: ["calculator", "ch5"] },
  { name: "S. Smash Charge", types: ["calculator", "ch5"] },
  { name: "2x Damage Dodge", types: ["calculator", "damagedodge", "ch5"] },
  { name: "Yoshi Cookie", types: ["cookbook", "toybox", "ch5"] }
];
bingoList[21] = [
  { name: "Defeat Lakilester", types: ["flowerfields", "ch5"] },
  { name: "Gold Credit", types: ["koopakoot", "desert"] },
  { name: "Defeat Tubba Blubba", types: ["gulch", "boots", "ch3"] },
  { name: "Ultra-Rank 4 Partners", types: ["upgrades"] },
  { name: "Complete Chapter 1", types: ["ch1"] }
];
bingoList[22] = [
  { name: "Crystal Berry", types: ["flowerfields", "ch5"] },
  { name: "2x Power Plus", types: ["toybox", "starpiece"] },
  { name: "2x Flower Saver", types: ["flowerfields", "starpiece", "ch5"] },
  { name: "Complete Chapter 3", types: ["gulch", "boots", "ch3"] },
  { name: "Ultra Boots", types: ["flowerfields", "boots", "sushie", "ch5"] },
  { name: "Ultra-Rank Lakilester", types: ["flowerfields", "upgrades", "sushie", "ch5"] }
];
bingoList[23] = [
  { name: "Bubble Berry", types: ["flowerfields", "sushie", "ch5"] },
  { name: "Water Stone", types: ["flowerfields", "ch5"] },
  { name: "Old Photo", types: ["koopakoot", "desert", "mansion"] },
  { name: "Defeat Jr. Troopa 4 Times", types: ["jungle","ch1"] },
  { name: "S. Jump Charge", types: ["flowerfields", "sushie", "ch5"] }
];
bingoList[24] = [
  { name: "Break the Puff-Puff Machine", types: ["boots", "flowerfields", "ch5"] },
  { name: "Defeat 2 Different Chapter Bosses", types: ["ch1", "ch2", "ch3", "ch4", "ch5"] },
  { name: "Obtain a Letter for Frost T.", types: ["mansion", "desert"] },
  { name: "Obtain All Partners", types: ["bow", "watt", "ch5", "flowerfields"] },
  { name: "Defeat a Koopatrol", types: ["boots", "toybox", "ch3"] }
];
bingoList[25] = [
  { name: "Jade Raven", types: ["jungle", "watt", "FigureFresh"] },
  { name: "Diploma", types: ["dojo"] },
  { name: "Glasses", types: ["koopakoot", "desert", "mansion", "ch5"] },
  { name: "At Least 10 Letters", types: ["letters", "ch5", "flowerfields", "boots"] },
  { name: "Iced Potato", types: ["ch5"] }
];
