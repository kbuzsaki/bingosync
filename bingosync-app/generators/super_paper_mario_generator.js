bingoGenerator = require("./generators/generator_bases/srl_generator_v5.js");

var bingoList = [];
bingoList[1] = [
  { name: "Score at least 75k points in Mansion Patrol", types: ["arcade"] },
  { name: "Obtain any 10 unique recipes", types: ["recipe"] },
  { name: "Defeat the 30th Sammer Guy", types: ["pit"] },
  { name: "Score at least 150k points in Forget Me Not", types: ["arcade"] },
  { name: "Complete Map 8", types: ["map"] },
];
bingoList[2] = [
  { name: "Score at least 50k points in Mansion Patrol", types: ["arcade"] },
  { name: "Put 3 Cooking Disks in the Cooking Specializer", types: ["disk"] },
  { name: "Get hit by 5 Different Types of Cursya’s", types: ["cursya"] },
  { name: "Reach level 10 of the Flipside Pit", types: ["pit"] },
  { name: "Purchase 10 Unique Items", types: ["item"] },
];
bingoList[3] = [
  { name: "Reach level 10 of the Flopside Pit", types: ["pit"] },
  { name: "Catch 10 unique enemies", types: ["catch"] },
  { name: "Make a Mistake", types: ["recipe"] },
  { name: "Talk to 15 Flipside residents", types: ["talk"] },
  { name: "Obtain 300 tokens", types: ["arcade"] },
];
bingoList[4] = [
  { name: "Use an HP Plus", types: ["item"] },
  { name: "Obtain all 5 Apples in 7-3", types: ["misc"] },
  { name: "Score at least 200k points in Hammer Whacker", types: ["arcade"] },
  { name: "Catch a Clubba", types: ["catch"] },
  { name: "Use emergency rations in the pit", types: ["item"] },
];
bingoList[5] = [
  { name: "Complete All Chapter 1 Maps", types: ["map"] },
  { name: "Complete Map 6", types: ["map"] },
  { name: "Buy something from Flimm", types: ["misc"] },
  { name: "Talk to all of Count Bleck’s Minions", types: ["talk"] },
  { name: "Make a Dyllis Deluxe", types: ["recipe"] },
];
bingoList[6] = [
  { name: "Hit the Star Block in 4-4", types: ["starb"] },
  { name: "Use a Power Plus", types: ["item"] },
  { name: "Complete 10 unique maps", types: ["map"] },
  { name: "Make a Miracle Dinner", types: ["recipe"] },
  { name: "Reach level 10", types: ["level"] },
];
bingoList[7] = [
  { name: "Hit the Star Block in 1-4", types: ["starb"] },
  { name: "Purchase all items from the itty bits in 3-3", types: ["itty"] },
  { name: "Make a Gingerbread House", types: ["recipe"] },
  { name: "Make a Slimy Extract", types: ["recipe"] },
  { name: "Reach level 20 of the Flopside Pit", types: ["pit"] },
];
bingoList[8] = [
  { name: "Roast Whacka Bump", types: ["recipe"] },
  { name: "Obtain 25 shop points", types: ["shop"] },
  { name: "Get hit by 2 Different Types of Cursya’s", types: ["cursya"] },
  { name: "Give Peach a haircut", types: ["misc"] },
  { name: "Obtain 10 unique cards", types: ["catch"] },
];
bingoList[9] = [
  { name: "Reach level 30 of the Flopside Pit", types: ["pit"] },
  { name: "Complete Map 10", types: ["map"] },
  { name: "Open 7 chests", types: ["misc"] },
  { name: "Receive Negative points", types: ["misc"] },
  { name: "Catch 5 unique enemies", types: ["catch"] },
];
bingoList[10] = [
  { name: "Obtain 20 unique cards", types: ["catch"] },
  { name: "Kill 5 Mega Muths", types: ["kill"] },
  { name: "Catch a Crazee Dayzee", types: ["catch"] },
  { name: "Obtain any 15 unique recipes", types: ["recipe"] },
  { name: "Kill an Amazy Dayzee", types: ["kill"] },
];
bingoList[11] = [
  { name: "Catch an Amazee Dayzee", types: ["catch"] },
  { name: "Obtain Barry & Tiptron", types: ["pixl"] },
  { name: "Purchase all 3 Choco-Bars at the Twinkle Mart", types: ["shop"] },
  { name: "Reach level 20 of the Flipside Pit", types: ["pit"] },
  { name: "Reach level 30 of the Flipside Pit", types: ["pit"] },
];
bingoList[12] = [
  { name: "Use a Trial Stew", types: ["item","recipe"] },
  { name: "Purchase all items from the itty bits in 7-4", types: ["shop"] },
  { name: "Obtain 750 coins", types: ["misc"] },
  { name: "Use 3 Unique Mega Stars", types: ["mega"] },
  { name: "Collect 5 Unique Super Mushrooms", types: ["misc"] },
];
bingoList[13] = [
  { name: "Buy Advised Package from Merlee", types: ["pack"] },
  { name: "Get hit by 4 Different Types of Cursya’s", types: ["cursya"] },
  { name: "Obtain any 5 unique recipes", types: ["recipe"] },
  { name: "Score at least 100k points in Forget Me Not", types: ["arcade"] },
  { name: "Hit all Chapter 5 Star Blocks", types: ["starb"] },
];
bingoList[14] = [
  { name: "Score at least 100k points in Hammer Whacker", types: ["arcade"] },
  { name: "Catch a Blooper", types: ["catch"] },
  { name: "Obtain Piccolo", types: ["pixl"] },
  { name: "Collect 3 Unique Ultra Mushrooms", types: ["misc"] },
  { name: "Obtain 10 shop points", types: ["shop"] },
];
bingoList[15] = [
  { name: "Purchase all items from 3 Unique itty bits", types: ["shop"] },
  { name: "Score at least 100k points in Mansion Patrol", types: ["arcade"] },
  { name: "Buy Trial Package from Merlee", types: ["pack"] },
  { name: "Get hit by 3 Different Types of Cursya’s", types: ["cursya"] },
  { name: "Hit all Chapter 7 Star Blocks", types: ["starb"] },
];
bingoList[16] = [
  { name: "Complete Map 2", types: ["map"] },
  { name: "Defeat the 10th Sammer Guy", types: ["pit"] },
  { name: "Use space food in space", types: ["item"] },
  { name: "Kill 5 Pigarithm", types: ["kill"] },
  { name: "Buy all 4 Inn packages (1 Flipside, 3 Flopside)", types: ["pack"] },
];
bingoList[17] = [
  { name: "Talk to all Howzit shop owners", types: ["talk"] },
  { name: "Hit all Chapter 8 Star Blocks", types: ["starb"] },
  { name: "Score at least 100k points in Tilt Island", types: ["arcade"] },
  { name: "Score at least 150k points in Hammer Whacker", types: ["arcade"] },
  { name: "Kill 5 Muths", types: ["kill"] },
];
bingoList[18] = [
  { name: "Score at least 200k points in Tilt Island", types: ["arcade"] },
  { name: "Reach level 5", types: ["level"] },
  { name: "Complete Map 12", types: ["map"] },
  { name: "Buy Special Package from Merlee", types: ["pack"] },
  { name: "Use 1 Mega Star", types: ["mega"] },
];
bingoList[19] = [
  { name: "Kill a Chain Chomp (3-3)", types: ["kill"] },
  { name: "Use a turtley leaf", types: ["item"] },
  { name: "Make a Couples Cake", types: ["recipe"] },
  { name: "Hit 10 Unique Star Blocks", types: ["starb"] },
  { name: "Go through the scanner with the floro sprout", types: ["misc"] },
];
bingoList[20] = [
  { name: "Score 25k amount of points in all 4 minigames", types: ["arcade"] },
  { name: "Purchase all items from the itty bits in 5-1", types: ["store"] },
  { name: "Talk to 15 Flopside residents", types: ["talk"] },
  { name: "Hit the Star Block in 2-4", types: ["starb"] },
  { name: "Catch a Toopa Striker", types: ["catch"] },
];
bingoList[21] = [
  { name: "Ride a minecart", types: ["misc"] },
  { name: "Score at least 200k points in Forget Me Not", types: ["arcade"] },
  { name: "Use 2 Unique Mega Stars", types: ["mega"] },
  { name: "Kill 3 Hogarithm", types: ["kill"] },
  { name: "Defeat the 20th Sammer Guy", types: ["pit"] },
];
bingoList[22] = [
  { name: "Use a Sap Soup", types: ["item"] },
  { name: "Kill a Megabite", types: ["kill"] },
  { name: "Obtain 100 tokens", types: ["arcade"] },
  { name: "Reach level 15", types: ["level"] },
  { name: "Unlock All 3 Blue Pipes from Welderberg", types: ["misc"] },
];
bingoList[23] = [
  { name: "Put 4 Cooking Disks in the Cooking Specializer", types: ["disk"] },
  { name: "Purchase all items from the itty bits in Flipside", types: ["shop"] },
  { name: "Purchase all items from the itty bits in Flopside", types: ["shop"] },
  { name: "Complete All Chapter 2 Maps", types: ["map"] },
  { name: "Put 2 Cooking Disks in the Cooking Specializer", types: ["disk"] },
];
bingoList[24] = [
  { name: "Unlock Hammer Whacker (the gold card)", types: ["arcade"] },
  { name: "Complete Map 4", types: ["map"] },
  { name: "Obtain 999 coins", types: ["coin"] },
  { name: "Score at least 150k points in Tilt Island", types: ["arcade"] },
  { name: "Complete 5 unique maps", types: ["map"] },
];
bingoList[25] = [
  { name: "Obtain 30 unique cards", types: ["catch"] },
  { name: "Collect a Fast Flower and Slow Flower", types: ["misc"] },
  { name: "Collect 5 Unique Mushrooms", types: ["misc"] },
  { name: "Obtain 200 tokens", types: ["arcade"] },
  { name: "Talk to Blappy (belly button man 4-2)", types: ["talk"] },
  { name: "Obtain 50 shop points", types: ["shop"] },
];
