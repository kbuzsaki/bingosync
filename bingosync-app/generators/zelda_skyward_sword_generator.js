var bingoGenerator = require("./generators/generator_bases/srl_generator_v5.js");

var bingoListVersion = "2.4";
var bingoList = [];

bingoList[1] = [
  { name: "Bring Mia to Horwell", types: ["Skyloft"] },
  { name: "Four Skyloft Chests", types: ["Skyloft", "Chests"] },
  { name: "Glittering Spores", types: ["Bottles", "Faron"] },
  { name: "Revitalizing Potion", types: ["Bottles", "Potions"] },
  { name: "Bottled Water", types: ["Bottles"] },
  { name: "Practice Sword", types: ["Skyloft"] },
];
bingoList[2] = [
  { name: "Heart Potion", types: ["Potions"] },
  { name: "Chandelier Heart Piece", types: ["Hearts", "Pumpkin"] },
  { name: "Complete a ringer skydive", types: ["Sky"] },
  { name: "Mushroom Spores", types: ["Bottles", "Faron"] },
  { name: "100 Rupees before Faron", types: ["Skyloft", "Rupees"] },
  { name: "Sailcloth", types: ["Sailcloth", "Skyloft"] },
];
bingoList[3] = [
  { name: "Guardian Potion", types: ["Bottles", "Potions"] },
  { name: "Hot Pumpkin Soup", types: ["Bottles"] },
  { name: "Cold Pumpkin Soup", types: ["Bottles"] },
  { name: "Kill three guays in the sky", types: ["Sky"] },
  { name: "Beedle's Scattered Crystal", types: ["Crystals"] },
  { name: "10 Blessed Butterflies", types: ["Bugs"] },
];
bingoList[4] = [
  { name: "Heart Dowsing Target", types: ["Misc"] },
  { name: "Floria Waterfall Bird Statue", types: ["Faron", "Statues"] },
  { name: "Both Deep Woods Statues", types: ["Faron", "Statues"] },
  { name: "Finish the Sword Tutorial", types: ["Skyloft"] },
  { name: "Two Lumpy Pumpkin Scattered Crystals", types: ["Crystals", "Pumpkin"] },
  { name: "Skyview Temple Heart Piece", types: ["Skyview", "Hearts"] },
];
bingoList[5] = [
  { name: "3 Extra Wallets", types: ["Rupees"] },
  { name: "5 Skyloft Mantises", types: ["Bugs"] },
  { name: "5 Starry Fireflies", types: ["Bugs"] },
  { name: "Sleep in Zelda's Bed", types: ["Skyloft", "Sailcloth"] },
  { name: "Win the Wing Ceremony Twice", types: ["BiT", "Skyloft"] },
  { name: "Bring Hot Soup to Eagus", types: ["Bottles", "Pumpkin"] },
];
bingoList[6] = [
  { name: "3 Blue Bird Feathers", types: ["Treasures"] },
  { name: "5 Bird Feathers", types: ["Treasures"] },
  { name: "Banded Shield", types: ["Shields"] },
  { name: "10 Amber Relics", types: ["Treasures"] },
  { name: "50 Deku Hornets", types: ["Bugs"] },
  { name: "10 Woodland Rhino Beetles", types: ["Bugs"] },
];
bingoList[7] = [
  { name: "6 Pouch Slots", types: ["Pouch", "Rupees"] },
  { name: "4 Heart Pieces", types: ["Hearts"] },
  { name: "8 Faron Bird Statues", types: ["Statues", "Faron"] },
  { name: "5 Faron Goddess Cubes", types: ["Cubes", "Faron"] },
  { name: "5 Goddess Cubes", types: ["Cubes"] },
  { name: "500 Rupees", types: ["Rupees"] },
];
bingoList[8] = [
  { name: "10 Scattered Crystals", types: ["Crystals"] },
  { name: "3 Bottles", types: ["Bottles"] },
  { name: "Batreaux's Heart Piece", types: ["Hearts", "Crystals"] },
  { name: "Orielle's Gratitude Crystals", types: ["Crystals"] },
  { name: "15 Gratitude Crystals", types: ["Crystals"] },
  { name: "Parrow's Gratitude Crystals", types: ["Crystals"] },
];
bingoList[9] = [
  { name: "Skyview Dungeon Map", types: ["Map", "Skyview"] },
  { name: "Defeat Ghirahim with a dart", types: ["Skyview"] },
  { name: "Skyview Zero Dungeon Map", types: ["Map", "Skyview", "BiT"] },
  { name: "Open all Skyview Temple Chests", types: ["Chests", "Skyview"] },
  { name: "Two Unused Small Keys", types: ["BiT", "Skyview"] },
  { name: "Both Faron Heart Pieces", types: ["Faron", "Hearts"] },
];
bingoList[10] = [
  { name: "Sleep in every Knight Academy Bed", types: ["Misc", "Sailcloth"] },
  { name: "28+ cuts at Bamboo Island", types: ["Misc"] },
  { name: "4 Eldin Bird Statues", types: ["Statues", "Eldin"] },
  { name: "Eldin Heart Piece", types: ["Hearts", "Eldin"] },
  { name: "Farore's Courage", types: ["BiT"] },
  { name: "Enter Isle of Songs", types: ["BiT"] },
];
bingoList[11] = [
  { name: "10 Volcanic Ladybugs", types: ["Bugs"] },
  { name: "60 Deku Seed Capacity", types: ["Ammo"] },
  { name: "5 Eldin Ore", types: ["Treasures"] },
  { name: "3 Medals", types: ["Medals"] },
  { name: "Treasure Medal", types: ["Medals"] },
  { name: "3 Unique Shields", types: ["Shields"] },
];
bingoList[12] = [
  { name: "Fairy in a Bottle", types: ["Bottles"] },
  { name: "Heart Potion+", types: ["Potions"] },
  { name: "Guardian Potion+", types: ["Potions"] },
  { name: "Revitalizing Potion+", types: ["Potions"] },
  { name: "3 Unique Potion Upgrades", types: ["Potions", "Bottles"] },
  { name: "3 Unique Potions", types: ["Potions", "Bottles"] },
];
bingoList[13] = [
  { name: "Zelda's Heart Piece", types: ["End", "Hearts", "Sailcloth"] },
  { name: "25 Gratitude Crystals", types: ["Crystals"] },
  { name: "Zelda's Gratitude Crystal", types: ["End", "Crystals", "Sailcloth"] },
  { name: "Peatrice's Gratitude Crystals", types: ["Crystals"] },
  { name: "Clear a Thrill Digger Board", types: ["Eldin"] },
  { name: "6 Eldin Goddess Cubes", types: ["Cubes", "Eldin"] },
];
bingoList[14] = [
  { name: "Life Tree Seedling", types: ["BiT"] },
  { name: "Open all Earth Temple Chests", types: ["Chests", "Earth"] },
  { name: "Kina's Pumpkin Carrying Game", types: ["Pumpkin"] },
  { name: "Earth Temple Dungeon Map", types: ["Map", "Earth"] },
  { name: "5 Lizard Tails", types: ["Earth"] },
  { name: "Destroy all of Scaldera's Rocks", types: ["Earth"] },
];
bingoList[15] = [
  { name: "7 Pouch Slots", types: ["Pouch", "Rupees"] },
  { name: "1000 Rupees", types: ["Rupees"] },
  { name: "10 Goddess Cubes", types: ["Cubes"] },
  { name: "30 Bomb Capacity", types: ["Ammo"] },
  { name: "Bug Medal", types: ["Medals", "Rupees"] },
  { name: "Reinforced Shield", types: ["Shields"] },
];
bingoList[16] = [
  { name: "Obtain one of every treasure", types: ["Treasures"] },
  { name: "3 Unique Wooden Shields", types: ["Shields"] },
  { name: "Catch one of every bug", types: ["Bugs"] },
  { name: "Braced Shield", types: ["Shields"] },
  { name: "Big Bug Net", types: ["Upgrade"] },
  { name: "Quick Beetle", types: ["Upgrade"] },
];
bingoList[17] = [
  { name: "Updated Lanaryu Desert Map", types: ["Lanayru"] },
  { name: "Five map beacons", types: ["Lanayru"] },
  { name: "Duplicate an Ampilus Egg", types: ["Lanayru"] },
  { name: "Obtain a Recovery Heart", types: ["Misc"] },
  { name: "Both Life Medals", types: ["Medals"] },
  { name: "Lanayru Heart Piece", types: ["Hearts"] },
  { name: "5 Lanayru Goddess Cubes", types: ["Lanayru", "Cubes"] },
];
bingoList[18] = [
  { name: "Cursed Medal", types: ["Medals", "Crystals"] },
  { name: "15 Goddess Cubes", types: ["Cubes"] },
  { name: "4 Medals", types: ["Medals"] },
  { name: "12 Hearts", types: ["Hearts"] },
  { name: "1500 Rupees", types: ["Rupees"] },
  { name: "8 Heart Pieces", types: ["Hearts"] },
  { name: "All 15 Scattered Crystals", types: ["Crystals"] },
];
bingoList[19] = [
  { name: "Fortified Shield", types: ["Shields"] },
  { name: "Heart Potion++", types: ["Potions"] },
  { name: "Revitalizing Potion++", types: ["Potions"] },
  { name: "Large Slingshot Satchel", types: ["Ammo", "Upgrade"] },
  { name: "4 Unique Shields", types: ["Shields"] },
  { name: "Large Bomb Bag", types: ["Ammo", "Upgrade"] },
];
bingoList[20] = [
  { name: "Baby's Rattle", types: ["Misc"] },
  { name: "Mallara's Gratitude Crystals", types: ["Crystals"] },
  { name: "Turn a windmill", types: ["Misc"] },
  { name: "LMF Dungeon Map", types: ["Map", "LMF"] },
  { name: "3 Dungeon Maps", types: ["Map"] },
  { name: "3 Goddess Plumes", types: ["Treasures"] },
];
bingoList[21] = [
  { name: "16 Goddess Cubes", types: ["Cubes"] },
  { name: "11 Heart Pieces", types: ["Hearts"] },
  { name: "3 Unique Iron Shields", types: ["Shields"] },
  { name: "5 Unique Shields", types: ["Shields"] },
  { name: "Tough Beetle", types: ["Upgrade"] },
  { name: "Scattershot", types: ["Upgrade", "Harp", "BiT"] },
];
bingoList[22] = [
  { name: "20 Bird Statues", types: ["Statues", "Harp"] },
  { name: "Open all LMF Chests", types: ["LMF", "Chests"] },
  { name: "Goddess Harp", types: ["Harp"] },
  { name: "Stamina Potion", types: ["Potions"] },
  { name: "Temple of Time Bird Statue", types: ["Statues", "Harp"] },
  { name: "8 Lanayru Bird Statues", types: ["Statues", "Harp"] },
];
bingoList[23] = [
  { name: "8 Pouch Slots", types: ["Pouch", "Rupees"] },
  { name: "6 Medals", types: ["Medals"] },
  { name: "1900 Rupees", types: ["Rupees"] },
  { name: "Beedle's Heart Piece", types: ["Hearts", "Rupees"] },
  { name: "40 Gratitude Crystals", types: ["Crystals", "Imp"] },
  { name: "Open 40 Chests", types: ["Chests"] },
];
bingoList[24] = [
  { name: "Summon a Gossip Stone", types: ["Harp"] },
  { name: "Get Fairies from a Goddess Wall", types: ["BiT", "Harp"] },
  { name: "Stamina Potion+", types: ["Potions"] },
  { name: "Water Dragon's Scale", types: ["Harp", "BiT", "Scale"] },
  { name: "Reseal the Imprisoned", types: ["Harp", "Imp"] },
  { name: "Ballad of the Goddess", types: ["Harp"] },
];
bingoList[25] = [
  { name: "Talk to Yerbal", types: ["Harp", "BiT"] },
  { name: "Repair Scrapper", types: ["Harp", "Imp"] },
  { name: "Cawlin's Letter", types: ["Harp"] },
  { name: "Air Potion", types: ["Potions", "Scale", "BiT"] },
  { name: "Sacred Shield", types: ["Shields", "Imp", "Harp"] },
  { name: "Lake Floria Goddess Cube", types: ["Harp", "BiT", "Scale"] },
  { name: "All 10 Faron Bird Statues", types: ["Harp", "BiT", "Scale", "Statues"] },
];
