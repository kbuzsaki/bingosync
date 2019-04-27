bingoGenerator = require("./generators/generator_bases/srl_generator_v5.js");

var bingoList = [];
bingoList[1] = [
{ name: "Cook ability", types: ["ability"] },
{ name: "Crash ability", types: ["ability"] },
{ name: "Sleep ability", types: ["ability"] },
];
bingoList[2] = [
{ name: "Throw ability", types: ["ability"] },
{ name: "Hammer ability", types: ["ability"] },
];
bingoList[3] = [
{ name: "Defeat Batafire", types: ["midboss", "rainbow", "moonlight", "cabbage", "mustard"] },
{ name: "Defeat Box Boxer", types: ["midboss", "rainbow", "cabbage", "mustard", "peppermint", "candy"] },
{ name: "Defeat Boxy", types: ["midboss", "moonlight", "mustard", "olive", "radish"] },
];
bingoList[4] = [
{ name: "Defeat Bonkers", types: ["midboss", "moonlight", "cabbage", "olive", "peppermint", "radish", "candy"] },
{ name: "Defeat Mr. Frosty", types: ["midboss", "moonlight", "olive", "peppermint"] },
{ name: "Defeat King Golem", types: ["boss", "moonlight"] },
];
bingoList[5] = [
{ name: "Kirby's Sounds", types: ["notes", "candy"] },
{ name: "Battle Notes", types: ["notes", "radish"] },
{ name: "Spunky Notes", types: ["notes", "cabbage"] },
];
bingoList[6] = [
{ name: "Sound Effects", types: ["notes", "olive"] },
{ name: "Secret Sounds", types: ["notes", "cabbage"] },
{ name: "Secret Notes", types: ["notes", "carrot"] },
];
bingoList[7] = [
{ name: "Dream Notes", types: ["notes", "peppermint"] },
{ name: "Enemy Sounds", types: ["notes", "moonlight"] },
];
bingoList[8] = [
{ name: "Pink Spray", types: ["spray", "peppermint"] },
{ name: "Red Spray", types: ["spray", "carrot"] },
{ name: "Green Spray", types: ["spray", "rainbow"] },
];
bingoList[9] = [
{ name: "Cherry Spray", types: ["spray", "mustard"] },
{ name: "Carbon Spray", types: ["spray", "candy"] },
{ name: "Chalk Spray", types: ["spray", "moonlight"] },
{ name: "Chocolate Spray", types: ["spray", "cabbage"] },
];
bingoList[10] = [
{ name: "Emerald Spray", types: ["spray", "radish"] },
{ name: "Grape Spray", types: ["spray", "peppermint"] },
{ name: "Orange Spray", types: ["spray", "moonlight"] },
{ name: "Snow Spray", types: ["spray", "peppermint"] }
];
bingoList[11] = [
{ name: "Magic ability", types: ["ability"] },
{ name: "Mini ability", types: ["ability"] },
{ name: "Smash ability", types: ["ability"] },
{ name: "Ufo ability", types: ["ability"] },
];
bingoList[12] = [
{ name: "Defeat Bombar", types: ["midboss", "mustard", "peppermint"] },
{ name: "Defeat Phan Phan", types: ["midboss", "mustard", "carrot", "peppermint", "candy"] },
{ name: "Defeat Master Hand", types: ["midboss", "rainbow", "radish", "candy"] },
];
bingoList[13] = [
{ name: "Defeat Moley", types: ["boss", "cabbage"] },
{ name: "Defeat Kracko", types: ["boss", "mustard"] },
{ name: "Defeat Mega Titan", types: ["boss", "carrot"] },
];
bingoList[14] = [
{ name: "Defeat Gobbler", types: ["boss", "olive"] },
{ name: "Defeat Wiz", types: ["boss", "peppermint"] },
];
bingoList[15] = [
{ name: "Cabbage Cavern Map", types: ["map", "cabbage"] },
{ name: "Mustard Mountain Map", types: ["map", "mustard"] },
{ name: "Carrot Castle Map", types: ["map", "carrot"] },
];
bingoList[16] = [
{ name: "Olive Ocean Map", types: ["map", "olive"] },
{ name: "Peppermint Palace Map", types: ["map", "peppermint"] },
{ name: "Radish Ruins Map", types: ["map", "radish"] },
{ name: "Candy Constellation Map", types: ["map", "candy"] },
];
bingoList[17] = [
{ name: "Happy Notes", types: ["notes", "peppermint"] },
{ name: "Beginning Notes", types: ["notes", "rainbow"] },
];
bingoList[18] = [
{ name: "Yellow Spray", types: ["spray", "carrot"] },
{ name: "Ocean Spray", types: ["spray", "olive"] },
{ name: "Saphire Spray", types: ["spray", "cabbage"] },
];
bingoList[19] = [
{ name: "Vitality Heart in Carrot Castle", types: ["heart", "carrot"] },
{ name: "Vitality Heart in Olive Ocean", types: ["heart", "olive"] },
{ name: "Vitality Heart in Radish Ruins", types: ["heart", "radish"] },
{ name: "Vitality Heart in Candy Constellation", types: ["heart", "candy"] },
];
bingoList[20] = [
{ name: "Have 20 extra lives", types: ["extra"] },
{ name: "Sound Player", types: ["candy"] },
{ name: "6 Spray Paints", types: ["spray"] },
{ name: "5 Notes", types: ["notes"] },
];
bingoList[21] = [
{ name: "Defeat ??? (Dark Meta Knight)", types: ["boss", "radish"] },
{ name: "Defeat Master Hand & Crazy Hand", types: ["boss", "candy"] },
];
bingoList[22] = [
{ name: "Defeat 5 different Mid-Bosses", types: ["midboss"] },
{ name: "Collect 3 Shards", types: ["boss"] },
{ name: "All VItality Hearts", types: ["midboss"] },
];
bingoList[23] = [
{ name: "All Treasures in Rainbow Route", types: ["rainbow"] },
{ name: "All Treasures in Moonlight Mansion", types: ["moonlight"] },
{ name: "All Treasures in Cabbage Cavern", types: ["cabbage"] },
];
bingoList[24] = [
{ name: "All Treasures in Mustard Mountain", types: ["mustard"] },
{ name: "All Treasures in Carrot Castle", types: ["carrot"] },
{ name: "All Treasures in Olive Ocean", types: ["olive"] },
];
bingoList[25] = [
{ name: "All Treasures in Peppermint Palace", types: ["peppermint"] },
{ name: "All Treasures in Radish Ruins", types: ["radish"] },
{ name: "All Treasures in Candy Constellation", types: ["candy"] },
];
