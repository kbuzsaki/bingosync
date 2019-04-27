bingoGenerator = require("./generators/generator_bases/srl_generator_v5.js");

var bingoList = [];
bingoList[1] = [
  { name: "Kill Yoric", types: ["Enemy"] },
  { name: "3 Different Use Weapons", types: ["Item"] },
  { name: "Soul of Wolf", types: ["Relic"] },
  { name: "250 HP", types: ["Stats"] },
  { name: "Bandanna Room", types: ["Stats"] },
];
bingoList[2] = [
  { name: "Defeat Hippogriff", types: ["Boss"] },
  { name: "Any 5 Different Foods", types: ["Item"] },
  { name: "Open Olrox > Chapel Path", types: ["Location"] },
  { name: "Twilight Cloak Location", types: ["Location"] },
];
bingoList[3] = [
  { name: "Cast a Spell on Dracula", types: ["Boss","Strat"] },
  { name: "Kill Owl Knight", types: ["Enemy"] },
  { name: "Dragon Helm Location", types: ["Location"] },
  { name: "300 HP", types: ["Stats"] },
];
bingoList[4] = [
  { name: "Defeat Karasuman", types: ["Boss"] },
  { name: "2 Weapons with Unique Skill", types: ["Item"] },
  { name: "Open Cavern > Entrance Path", types: ["Location"] },
  { name: "45 LCK", types: ["Stats"] },
];
bingoList[5] = [
  { name: "Defeat werewolf & minotaur", types: ["Boss"] },
  { name: "Defeat Scylla", types: ["Boss"] },
  { name: "Alucard Mail Location", types: ["Location"] },
  { name: "45 CON", types: ["Stats"] },
  { name: "Dopple No Subweapons", types: ["Boss","Strat"] },
];
bingoList[6] = [
  { name: "Use Tetra Spirit on Darkwing Bat", types: ["Boss","Strat"] },
  { name: "Kill Schmoo", types: ["Enemy"] },
  { name: "Any 5 Swords", types: ["Item"] },
  { name: "Open Arena > Chapel Path", types: ["Location"] },
];
bingoList[7] = [
  { name: "Enter Holy Rod Room", types: ["Location"] },
  { name: "All 1st Castle Teleporters", types: ["Location"] },
  { name: "Use a Subweapon", types: ["Relic"] },
  { name: "350 HP", types: ["Stats"] },
];
bingoList[8] = [
  { name: "Get 10 Peanuts", types: ["Location","Item"] },
  { name: "Kill Blade", types: ["Enemy"] },
  { name: "Power of Wolf", types: ["Relic"] },
  { name: "Holy Symbol", types: ["Relic"] },
];
bingoList[9] = [
  { name: "Accessory with Stat Bonus", types: ["Item","Stats"] },
  { name: "2 Cards", types: ["Relic"] },
  { name: "Gas Cloud", types: ["Relic"] },
  { name: "150 Max Hearts", types: ["Stats"] },
];
bingoList[10] = [
  { name: "Spirit Orb", types: ["Relic"] },
  { name: "Skill of Wolf", types: ["Relic"] },
  { name: "900 Rooms", types: ["Stats"] },
  { name: "420 Kills", types: ["Stats"] },
];
bingoList[11] = [
  { name: "Summon Spirit on Hippogriff", types: ["Boss","Strat"] },
  { name: "Force of Echo", types: ["Relic"] },
  { name: "Cube of Zoe", types: ["Relic"] },
  { name: "45 DEF", types: ["Stats","Item"] },
  { name: "Holy Mail Room", types: ["Location"] },
];
bingoList[12] = [
  { name: "Death No Transforming", types: ["Boss","Strat"] },
  { name: "5 Different Armors", types: ["Item"] },
  { name: "Kill Discus Lord", types: ["Enemy","Location"] },
  { name: "2 Different Cloaks", types: ["Item"] },
];
bingoList[13] = [
  { name: "Cloaked Knight Room in 1st Castle", types: ["Location"] },
  { name: "Divekick a Medusa Head", types: ["Enemy","Relic","Strat"] },
  { name: "Fire of Bat", types: ["Relic"] },
  { name: "Jewel Knuckles Room", types: ["Location","Relic"] },
];
bingoList[14] = [
  { name: "Eat Food during The Creature fight", types: ["Boss","Strat","Item"] },
  { name: "Kill Malachi", types: ["Boss"] },
  { name: "3 Cards", types: ["Relic"] },
  { name: "All First Castle Relics", types: ["Relic"] },
];
bingoList[15] = [
  { name: "Kill Grave Keeper Naked Unarmed Only", types: ["Enemy","Strat"] },
  { name: "Get Berserked By Imp", types: ["Enemy","Strat"] },
  { name: "Any 6 Potions", types: ["Item"] },
  { name: "100 ATT", types: ["Stats","Item"] },
  { name: "Holy Sword Room", types: ["Location"] },
];
bingoList[16] = [

  { name: "Olrox No Spells", types: ["Boss","Strat"] },
  { name: "4 Different Shields", types: ["Item"] },
  { name: "Get Item in Shield Rod Room", types: ["Item"] },
  { name: "50 INT", types: ["Stats"] },
  { name: "Divekick Medusa", types: ["Boss","Strat"] },
];
bingoList[17] = [
  { name: "Kick or Bite Cereberus", types: ["Boss","Strat"] },
  { name: "Kill Lion, Scarecrow, and Tin Man", types: ["Enemy","Location"] },
  { name: "2 different 2-Handed Weapons", types: ["Item"] },
  { name: "Check Holy Symbol Location", types: ["Location","Relic"] },
  { name: "Slogra & Gaibon Boss No Spells", types: ["Boss","Strat"] },
];
bingoList[18] = [
  { name: "Kill Blue Venus Weed", types: ["Enemy"] },
  { name: "All 2nd Castle Teleporters", types: ["Location"] },
  { name: "50 STR", types: ["Stats","Item"] },
  { name: "Badelaire Location", types: ["Location"] },
  { name: "Kill Azaghal", types: ["Enemy"] },
];
bingoList[19] = [
  { name: "Defeat Dopple40", types: ["Boss"] },
  { name: "Fury Plate Location", types: ["Location"] },
  { name: "Kill 5 Angel of Goths", types: ["Enemy"] },
  { name: "Jewel Sword Room", types: ["Location","Relic"] },
];
bingoList[20] = [
  { name: "Defeat Granfaloon", types: ["Boss"] },
  { name: "Kill Fire Demon", types: ["Enemy","Location"] },
  { name: "1000 Rooms", types: ["Stats"] },
  { name: "500 Kills", types: ["Stats"] },
];
bingoList[21] = [
  { name: "Subweapon & Spells Only on Akmodan", types: ["Boss","Strat"] },
  { name: "Kill Dragon Rider", types: ["Enemy","Location"] },
  { name: "Any Circlet", types: ["Item"] },
  { name: "180 Max Hearts", types: ["Stats"] },
];
bingoList[22] = [
  { name: "Get Confession Item", types: ["Location","Strat"] },
  { name: "Demon Open Path in Cave", types: ["Location","Relic"] },
  { name: "Go To Gate in Reverse Entrance", types: ["Location"] },
  { name: "Necklace of J Location", types: ["Location"] },
  { name: "Defeat Fake Heroes", types: ["Boss"] },
];
bingoList[23] = [
  { name: "Defeat Galamoth", types: ["Boss"] },
  { name: "Kill Cloaked Knight in 1st Castle", types: ["Boss"] },
  { name: "Any Fist Weapon", types: ["Item"] },
  { name: "Alucard Shield Location", types: ["Location"] },
  { name: "All Cards", types: ["Relic"] },
];
bingoList[24] = [
  { name: "Kill 5 Cloaked Knights", types: ["Enemy"] },
  { name: "Any Rod", types: ["Item"] },
  { name: "Demon Open Path in Mine", types: ["Location","Relic"] },
  { name: "60 LCK", types: ["Stats","Item"] },
  { name: "Kill Guardian", types: ["Enemy"] },
];
bingoList[25] = [
  { name: "Any Elemental Weapon", types: ["Item"] },
  { name: "Go Up Stairs in Anti-Chapel", types: ["Location"] },
  { name: "Defeat Beelzebub", types: ["Location"] },
  { name: "All Second Castle Relics", types: ["Relic"] },
  { name: "1100 Rooms", types: ["Stats"] },
];
