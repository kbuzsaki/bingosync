var bingoGenerator = require("./generators/generator_bases/srl_generator_v5.js");

var bingoList = [];
bingoList[1] = [
  { name: "Collect 5 Elements from Tier 1", types: ["e1"] },
  { name: "Collect 1 Nickel from Tier 1", types: ["n1"] },
  { name: "Read the third question in Colorful Hall", types: ["detour"] },
  { name: "Collect both tanks in Biplane Bay", types: ["detour"] },
];
bingoList[2] = [
  { name: "Collect 5 Nickels from 1 level (no skips)", types: ["5n"] },
  { name: "Defeat both Milks", types: ["tierboss"] },
  { name: "Clear the two secret levels", types: ["chtent"] },
];
bingoList[3] = [
  { name: "Collect 17 Nickels from Tier 3", types: ["n3"] },
  { name: "Collect 13 Nickels from Tier 4", types: ["n4"] },
  { name: "Unlock 2 Costumes", types: ["costume"] },
];
bingoList[4] = [
  { name: "Collect 6 Nickels from Tier 2", types: ["n2"] },
  { name: "Collect 7 Nickels from Tier 5", types: ["n5"] },
  { name: "Get The Dampening's locked Noble Nickel", types: ["detour"] },
];
bingoList[5] = [
  { name: "Clear 4 Challenges", types: ["chtotal"] },
  { name: "Complete 4 Jet Sled rides", types: ["sled"] },
  { name: "Cheat Man - Perfect Run", types: ["perfectrun"] },
];
bingoList[6] = [
  { name: "Collect 5 Nickels from 2 levels (no skips)", types: ["5n"] },
  { name: "Unlock 6 Key Barriers", types: ["doors"] },
  { name: "Taco Man - Buster Only", types: ["buster"] },
];
bingoList[7] = [
  { name: "Yggdrasil - Buster Only (no skips, any element)", types: ["buster"] },
  { name: "JaIL - No Hit OR Buster Only", types: ["choice"] },
  { name: "Defeat Spiked Wall Man", types: ["detour"] },
];
bingoList[8] = [
  { name: "Defeat 4 Tier Bosses", types: ["tierboss","tour"] },
  { name: "End with 600 Bolts", types: ["bolts"] },
  { name: "Snow Man - No Hit OR Buster Only (no skips)", types: ["choice"] },
  { name: "No Hit two levels in Tier 9", types: ["nohit"] },
];
bingoList[9] = [
  { name: "Collect 7 Elements from Tier 2", types: ["e2"] },
  { name: "Purchase 3 Shop Upgrades", types: ["shop"] },
  { name: "Purchase 3 Costumes", types: ["shop"] },
  { name: "Collect 3 Skippable Elements (no skips)", types: ["skipless"] },
];
bingoList[10] = [
  { name: "Collect 7 Elements from Tier 4", types: ["e4"] },
  { name: "Collect 11 Nickels from Tier 6", types: ["n6"] },
  { name: "No Hit two levels in Tier 10", types: ["nohit"] },
];
bingoList[11] = [
  { name: "Collect 9 Elements from Tier 3", types: ["e3"] },
  { name: "Collect 7 Elements from Tier 9", types: ["e9"] },
  { name: "Clear 7 Challenges", types: ["chtotal"] },
  { name: "BSaR - No Hit OR Buster Only", types: ["choice"] },
];
bingoList[12] = [
  { name: "Collect 5 Elements from Tier 5", types: ["e5"] },
  { name: "1 Element from every Least Favorite (no skips)", types: ["unfav"] },
  { name: "Fight and defeat 4 Excluded Bosses", types: ["exboss"] },
];
bingoList[13] = [
  { name: "Collect 3 Nickels from Tier 7", types: ["n7"] },
  { name: "Collect all SU6 Nickels (no skips)", types: ["su6","5n"] },
  { name: "Mega Man Can Airslide? - No Hit", types: ["nohit"] },
];
bingoList[14] = [
  { name: "Collect 25 Elements", types: ["etotal"] },
  { name: "Collect 30 Nickels", types: ["ntotal"] },
  { name: "Collect 7 Skippable Elements (no skips)", types: ["skipless"] },
];
bingoList[15] = [
  { name: "Poorly Named Level - No Hit OR Buster Only", types: ["choice"] },
  { name: "Gunpowder Cellar - No Hit", types: ["nohit"] },
  { name: "Clear the Arena", types: ["arena","chtent"] },
  { name: "Spiky Situation - Buster Only", types: ["buster"] },
];
bingoList[16] = [
  { name: "Collect 5 Nickels from 4 levels (no skips)", types: ["5n"] },
  { name: "Clear 10 Challenges", types: ["chtotal"] },
  { name: "End with 2000 Bolts", types: ["bolts","chtent"] },
];
bingoList[17] = [
  { name: "Collect 20 Nickels from Tier 9", types: ["n9"] },
  { name: "Collect 1 Element from every Judge Favorite", types: ["fav","e10"] },
  { name: "Unlock 5 Costumes", types: ["costume"] },
];
bingoList[18] = [
  { name: "Collect 7 Elements from Tier 6", types: ["e6"] },
  { name: "Collect 14 Nickels from Tier 8", types: ["n8"] },
  { name: "Defeat 8 Tier Bosses", types: ["tierboss","tour"] },
];
bingoList[19] = [
  { name: "Unlock 7 Costumes", types: ["costume"] },
  { name: "Fight and defeat 7 Excluded Bosses", types: ["exboss"] },
  { name: "Collect 50 Nickels", types: ["ntotal"] },
];
bingoList[20] = [
  { name: "Collect 2 Elements from each Tier", types: ["tour"] },
  { name: "Collect 9 Skippable Elements (no skips)", types: ["skipless"] },
  { name: "Escape Sequence - No Death", types: ["nodeath"] },
];
bingoList[21] = [
  { name: "Collect 35 Elements", types: ["etotal"] },
  { name: "Collect 5 Nickels from 7 levels (no skips)", types: ["5n"] },
  { name: "Clear 12 Challenges", types: ["chtotal"] },
];
bingoList[22] = [
  { name: "Collect 7 Elements from Tier 7", types: ["e7"] },
  { name: "Collect 20 Nickels from Tier 10", types: ["n10"] },
  { name: "Collect 4 Elements from 8 Tiers", types: ["tour"] },
];
bingoList[23] = [
  { name: "Collect 11 Skippable Elements (no skips)", types: ["skipless"] },
  { name: "Unlock 9 Costumes", types: ["costume"] },
  { name: "Collect 5 Elements from 7 Tiers", types: ["tour"] },
];
bingoList[24] = [
  { name: "Collect 7 Elements from Tier 10", types: ["e10"] },
  { name: "Collect 65 Nickels", types: ["ntotal"] },
  { name: "Clear 14 Challenges", types: ["chtotal"] },
];
bingoList[25] = [
  { name: "Collect 45 Elements", types: ["etotal"] },
  { name: "Collect 7 Elements from Tier 8", types: ["e8"] },
  { name: "Unlock 11 Costumes", types: ["costume"] },
];
