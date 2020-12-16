bingoGenerator = require("./generators/generator_bases/srl_generator_v5.js");

var bingoList = [];
bingoList[1] = [
  { name: "Visit Every Room on Lich 1 Floor", types: ["walk"] },
  { name: "Talk to Hurray Dwarf", types: ["npc"] },
  { name: "Visit Bahamut", types: ["npc"] },

];
bingoList[2] = [
  { name: "Garland Boxing", types: ["garland"] },
  { name: "Kill 3 Different Wolves", types: ["hunt"] },
  { name: "Visit the Bat Party Room", types: ["walk"] },
  { name: "Inspect All of Sarda's Furniture", types: ["walk"] },

];
bingoList[3] = [
  { name: "Talk to a Lefeinish without translating the SLAB", types: ["npc"] },
  { name: "Talk to 5 Cardia Dragons", types: ["talk"] },
  { name: "Talk to 5 Bats in Marsh", types: ["talk"] },
  { name: "Do a Full Lap of Ice Floor 2", types: ["walk"] },
  { name: "Buy One of Everything at the Caravan", types: ["shop"] },

];
bingoList[4] = [
  { name: "Collect and Keep A Copper, Silver, and Gold Bracelet", types: ["shop"] },
  { name: "Talk to 5 Mermaids", types: ["talk"] },
  { name: "Kill 4 Different Zombies", types: ["hunt"] },
  { name: "Save in the Lake North of Waterfall", types: ["walk"] },
];
bingoList[5] = [
  { name: "Melee the Pirates", types: ["garland"] },
  { name: "Kill 3 Different Ogres", types: ["hunt"] },
  { name: "Use No Caster Items", types: ["caster"] },
  { name: "Visit Every Room on Kraken 1 Floor", types: ["walk"] },

];
bingoList[6] = [
  { name: "Collect and Keep a Wood, Iron, and Steel Armor", types: ["shop"] },
  { name: "Do Not Use CUR4", types: ["spell"] },
  { name: "Collect and Keep Gloves, Cap, Buckler, and Cloth", types: ["shop"] },
  { name: "Visit Every Room on Kary 1 Floor", types: ["walk"] },

];
bingoList[7] = [
  { name: "Defeat Lich 1", types: ["lich"] },
  { name: "Kill 3 Different Ghosts", types: ["hunt"] },
  { name: "Talk to 10 Bats in Earth Cave", types: ["talk"] },
  { name: "Kill 3 Different Slimes", types: ["hunt"] },
  { name: "Talk to 3 Robots in Mirage/Sky", types: ["talk"] },

];
bingoList[8] = [
  { name: "Walk the Hall of Giants", types: ["hog"] },
  { name: "Kill 3 Different Sahags", types: ["hunt"] },
  { name: "Do Not Use FAST", types: ["spell"] },
  { name: "Do Not Use TMPR", types: ["spell"] },
  { name: "Examine All Computers in Sky 3", types: ["walk"] },

];
bingoList[9] = [
  { name: "Defeat Kary 1", types: ["kary"] },
  { name: "Throw Masmune into Space (3F Window)", types: ["masa"] },
  { name: "Gain 40,000G in One Shop", types: ["sale"] },
  { name: "Kill 3 Different Dinosaurs", types: ["hunt"] },
  { name: "Do Not Talk to Hint NPCs", types: ["hint"] },

];
bingoList[10] = [
  { name: "Do Not Use FADE", types: ["spell"] },
  { name: "Kill 3 Different Lizards", types: ["hunt"] },
  { name: "Spend 100,000G in One Shop", types: ["sale"] },
  { name: "Visit Every Room in Marsh 3", types: ["walk"] },

];
bingoList[11] = [
  { name: "Do Not Use NUKE", types: ["spell"] },
  { name: "Defeat Kraken 1", types: ["kraken"] },
  { name: "Do Not Use WARP", types: ["spell"] },
  { name: "Defeat Every Trap Tile in Ice Cave", types: ["trap"] },

];
bingoList[12] = [
  { name: "Purchase a spell from levels 1-7", types: ["spell"] },
  { name: "Promote As Soon As Possible", types: ["promote"] },
  { name: "Never Promote", types: ["promote"] },
  { name: "Do Not Use EXIT", types: ["spell"] },

];
bingoList[13] = [
  { name: "See a Fire-elemental Skill or Spell", types: ["skill"] },
  { name: "Defeat Tiamat 1", types: ["tiamat"] },
  { name: "Talk to 5 Different Hint NPCs", types: ["hint"] },

];
bingoList[14] = [
  { name: "Kill 2 Different Worms", types: ["hunt"] },
  { name: "Use Only Blessed Equipment", types: ["blurse"] },

];
bingoList[15] = [
  { name: "Take 0 or 3 Black Belts", types: ["class"] },
  { name: "Kill 3 Different Giants", types: ["hunt"] },
  { name: "Hit Level 30 on at Least One Character", types: ["level"] },

];
bingoList[16] = [
  { name: "Take 2 Black Mages", types: ["class"] },
  { name: "Canoe from Elfland to Ice Cave", types: ["walk"] },

];
bingoList[17] = [
  { name: "Defeat Lich with QAKE", types: ["lich"] },

];
bingoList[18] = [
  { name: "Take 0 or 3 Fighters", types: ["class"] },
  { name: "Successfully Confuse Kary", types: ["kary"] },

];
bingoList[19] = [
  { name: "Hit Level 40 on at Least One Character", types: ["level"] },
  { name: "Use Only Cursed Weapons", types: ["blurse"] },

];
bingoList[20] = [
  { name: "Kill 3 Different Dragons", types: ["hunt"] },
  { name: "Use Only Cursed Armor", types: ["blurse"] },

];
bingoList[21] = [
  { name: "Take 1 None", types: ["class"] },
  { name: "Defeat Kraken with BRAK", types: ["kraken"] },

];
bingoList[22] = [
  { name: "Take 0 or 4 Red Mages", types: ["class"] },
  { name: "Defeat WarMECH", types: ["hunt"] },
  { name: "Use No CABINs or HOUSEs", types: ["save"]}
];
bingoList[23] = [
  { name: "Take Two White Mages", types: ["class"] },
  { name: "Defeat Tiamat with BANE", types: ["tiamat"]}
];
bingoList[24] = [
  { name: "See a Status-elemental Skill or Spell", types: ["skill"] },
  { name: "Equip No Swords", types: ["swords"] },
  { name: "Hit Level 50 on at Least One Character", types: ["level"] },

];
bingoList[25] = [
  { name: "Take Two Thieves", types: ["class"] },
  { name: "See a Poison-elemental Skill or Spell", types: ["skill"] },
  { name: "Successfully Cure a Status Ailment in Battle with White Magic", types: ["spell"] },
  { name: "Cast a Spell of Every Element in Battle", types: ["spell"] },

];
