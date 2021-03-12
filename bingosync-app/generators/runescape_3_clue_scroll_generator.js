var bingoGenerator = require("./generators/generator_bases/srl_generator_v5.js");

var bingoList = [];
bingoList[1] = [
  { name: "Obtain 10 Fortunates", types: ["fortunate"] },
  { name: "Have 2 Fortunates in the same casket", types: [""] },
  { name: "Fight Uri 5 times", types: [] },
  { name: "Complete 10 steps with a spade", types: [] },
  { name: "Obtain 3 drops from fighting Wizards" , types: ["wizard"]}
];
bingoList[2] = [
  { name: "Find 3 god pages from the same casket", types: ["rng"] },
  { name: "Obtain 5 Comp Bows ", types: ["search"] },
  { name: "See Uri 5 times", types: ["uri"] },
  { name: "Obtain and use any skipping ticket.", types: ["tickets"] },
];
bingoList[3] = [
  { name: "Complete 5 steps by searching drawers", types: ["drawers"] },
  { name: "Complete a Uri step without needing to fight Uri", types: ["uri"]},
  { name: "Obtain 3 reroll tokens from caskets", types: ["reroll"] },
  { name: "Obtain a piece of elegant clothing", types: [""] },
];
bingoList[4] = [
  { name: "Obtain a casket worth at least 2mil gp", types: ["value"] },
  { name: "Complete 5 clue scrolls", types: ["completion"] },
  { name: "Complete 5 clue steps using 'fetch casket'.", types: [""] },
  { name: "Obtain Soul runes from a Wizard", types: [""] },
];
bingoList[5] = [
  { name: "Complete 5 steps by talking to an NPC", types: [""] },
  { name: "complete 3 master clues", types: ["completion"] },
  { name: "Obtain 50 biscuits or sweets from caskets", types: ["biscuits"] },
  { name: "Complete any clue in under 1 minute IGT", types: ["time"] },
];
bingoList[6] = [
  { name: "Complete 10 Hard clues", types: ["completion"] },
  { name: "Complete 3 Slider puzzles in the same Clue", types: ["slider"] },
  { name: "Complete 5 clue steps by using fairy rings", types: [""] },
  { name: "Obtain 3 unique teleport scrolls from caskets", types: ["scrolls"] },
];
bingoList[7] = [
  { name: "Complete 10 Slide Puzzle steps", types: ["steps"] },
  { name: "Complete a clue step using the desert amulet", types: [""] },
  { name: "Obtain 25 meercat scrolls from caskets", types: [""] },
  { name: "Obtain any bob shirt from a casket", types: [] },
];
bingoList[8] = [
  { name: "Obtain 7 meercat pouches from caskets", types: [""] },
  { name: "Obtain 5 Master clues from caskets", types: ["rng", "master"] },
  { name: "Complete 5 tower steps", types: [""] },
  { name: "Obtain a weapon from a casket.", types: [""] },
];
bingoList[9] = [
  { name: "Complete 20 easy clues", types: ["completion"] },
  { name: "Complete a clue step off not on the main continent", types: [""] },
  { name: "complete 10 lockbox steps", types: [""] },
  { name:  "complete steps by talking to 20 npcs", types: [""] },
];
bingoList[10] = [
  { name: "Complete a clue step on Crandor", types: ["location"] },
  { name: "Obtain a casket on the Arc", types: ["location"] },
  { name: "Obtain Guthix, Zamorack, and Saradomin arrows.", types: [] },
  { name: "Complete 10 steps by searching drawers", types: ["drawers"] },
  { name: "Obtain an animal staff", types: [] },
];
bingoList[11] = [
  { name: "Obtain a dragon mask from a casket.", types: ["search"] },
  { name: "Obtain a casket from Morytania, Misthalin, and Kandarin", types: [""] },
  { name: "Complete a clue step on Daemonheim ", types: ["location"] },
  { name: "Complete 2 emote clues requiring nothing equip.", types: [""] },
  { name: "Complete an easy, medium, hard, elite, and master clue in order.", types: [""] },
];
bingoList[12] = [
  { name: "obtain 3 Heraldic Shields", types: ["search"] },
  { name: "See Uri 15 times", types: ["uri"] },
  { name: "Complete 3 of any clue in under 3 minutes igt", types: ["time"] },
  { name: "obtain 6 teleport scrolls from caskets", types: ["scrolls"] },
  { name: "Complete 5 slider puzzles given by NPCs", types: ["slider"] },
];
bingoList[13] = [
  { name: "Obtain 2 different God pages in the same Casket", types: ["pages"] },
  { name: "Complete a compass step without any teleports", types: [] },
  { name: "Obtain a casket worth at least 3mil gp", types: ["value"] },
  { name: "Obtain 2 unique animal masks", types: [""] },
  { name: "Obtain 20 firelighters", types: ["fire"] },
];
bingoList[14] = [
  { name: "Recieve a scav proc while killing a Wizard", types: ["wizard"] },
  { name: "obtain 5 Heraldic shields", types: ["search"] },
  { name: "Use an ornament kit from your casket on an item.", types: [""] },
  { name: "Obtain 3 unique god pages", types: ["pages"] },
  { name: "Fight all factions of Wizards", types: ["completion"] },
];
bingoList[15] = [
  { name: "Obtain 10 Heraldic Items", types: ["search" , "rng"] },
  { name: "Complete 5 clues step on the Arc", types: ["location"] },
  { name: "Obtain 5 reroll tokens from caskets.", types: ["reroll"] },
  { name: "Obtain 15 Master clues from Caskets", types: ["rng", "master"] },
];
bingoList[16] = [
  { name: "Complete the same slider image twice", types: ["steps", "slider"] },
  { name: "Obtain a God Bow", types: ["search", "rng"] },
  { name: "Complete 20 costume steps", types: ["steps"] },
  { name: "Obtain 2 rewards from the same costume Set", types: ["rng"] },
];
bingoList[17] = [
  { name: "Obtain a puzzle, knot, and costume skipping ticket from Caskets", types: ["search", "tickets"] },
  { name: "Complete the clue step next to ED2", types: ["location"] },
  { name: "Complete 50 Easies", types: ["completion"] },
  { name: "Complete 25 Mediums", types: ["completion"] },
];
bingoList[18] = [
  { name: "Complete 20 costume steps", types: ["steps"] },
  { name: "See Uri 30 times", types: ["uri", "long"] },
  { name: "Complete a Wildy step", types: ["wildy"] },
  { name: "Complete 25 Hards", types: ["completion"] },
];
bingoList[19] = [
  { name: "Gain bxp from a casket. (empty slot in inv req)", types: ["rng"] },
  { name: "Obtain 10 Comp Bows", types: ["search"] },
  { name: "Obtain 3 Fortunates from the same casket", types: ["rng"] },
  { name: "Complete 25 elites", types: ["completion", "long"] },
];
bingoList[20] = [
  { name: "Obtain 100 biscuits or sweets form caskets", types: ["biscuits"] },
  { name: "Wear 1 clue reward on each equipment slot", types: ["rng"] },
  { name: "Obtain 25 Fortunates", types: ["fortunate"] },
  { name: "complete 25 masters", types: ["completion", "Long"] },
];
bingoList[21] = [
  { name: "Obtain a casket with minimum steps", types: ["stepcount"] },
  { name: "Obtain a casket with maximum steps", types: ["stepcount"] },
  { name: "Obtain 2 different colors of a Cavalier hat", types: ["search"] },
  { name: "Obtain 2 pairs of shoes from casksets", types: [""] },
];
bingoList[22] = [
  { name: "Obtain a god page from each faction", types: ["rng", "pages"] },
  { name: "Obtain knot, costume, puzzle, tower, and lockbox tickets from Caskets", types: ["search" , "tickets"] },
  { name: "Obtain all 5 colors of firelighter", types: ["fire", "rng"] },
  { name: "Complete an elite clue in under 3 minutes igt", types: ["time"] },
];
bingoList[23] = [
  { name: "Complete a clue step on Karamja, Entrana, and Mos le harmless/Braindeath Island.", types: [""] },
  { name: "Complete 1 of each type of clue step. (15 total)", types: ["long"] },
  { name: "Obtain flared trousers from a casket", types: ["rng"] },
  { name: "Obtain 3 rewards from the same costume set.", types: ["rng"] },
];
bingoList[24] = [
  { name: "Complete 15 of each clue tier", types: ["completion"] },
  { name: "Obtain 15 Master clues from caskets", types: ["search", "rng"] },
  { name: "Receive the same step back to back.", types: ["rng"] },
  { name: "Obtain a heated tea flask", types: ["search"] },
];
bingoList[25] = [
  { name: "Obtain a golden thread and 1 piece of Robin Hood gear", types: ["search", "rng"] },
  { name: "Obtain 50 Fortunates", types: ["fortunate", "completion", "long"] },
  { name: "Complete a set of Heraldic gear", types: ["Long", "rng"] },
  { name: "Obtain a broadcast from a casket", types: ["Long"] },
  { name: "Obtain a matching mask and staff from caskets", types: ["Long", "rng"] },
];
