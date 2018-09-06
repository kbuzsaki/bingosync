bingoGenerator = require("./generators/generator_bases/srl_generator_v5.js");

var bingoList = [];
// it's "Panmagic" bingo, so it's DIV 5 and MOD 5. All rows will always add up to the same number

bingoList[1] = [
	{ name: "Get a first place prize in 15-tile", types: ["minigame", "megalixir"] },
	{ name: "Use exactly 2 Monks", types: ["party", "monk"] },
	{ name: "Get a third place prize in the ship 15-tile minigame", types: ["minigame"] },
	{ name: "Equip only a Thief's Armlet on the body slot", types: ["unique", "nowarrior", "nowhitemage"] },
	{ name: "Get the Flame Shield in Mt. Gulg", types: ["gulg"] },
	{ name: "Defeat at least two Ogres", types: ["defeat", "ogre"] },
	{ name: "Defeat at least 3 Goblin Guards", types: ["defeat", "goblin"] }
];

bingoList[2] = [
	{ name: "Get a second place prize in 15-tile", types: ["minigame", "elixir", "emergencyexit"] },
	{ name: "Cast Fira against a group of Bloodbones", types: ["situational"] },
	{ name: "Use zero White Mages", types: ["party", "nowhitemage"] },
	{ name: "Spend at least 14,051 gil in Pravoca", types: ["spending"] },
	{ name: "Use exactly 2 Thieves", types: ["party", "thief"] },
	{ name: "Equip only a Mythril Helmet on the head slot", types: ["unique", "nowarrior"] }
];

bingoList[3] = [
	{ name: "Get the Ribbon in the Flying Fortress", types: ["treasurehunt"] },
	{ name: "Learn exactly one curative spell", types: ["monk"] },
	{ name: "Use exactly 2 Warriors", types: ["party", "warrior"] },
	{ name: "Get all of the treasure in the Waterfall Cavern", types: ["treasurehunt"] },
	{ name: "Use at least 15 Ethers", types: ["itemrestriction"] },
	{ name: "Learn exactly two elemental damage spells", types: ["monk"] },
	{ name: "Win twice at the ship 15-tile minigame", types: ["minigame"] }
];

bingoList[4] = [
	{ name: "Use zero Thieves", types: ["party", "nothief"] },
	{ name: "Use no more than 10 Antidotes", types: ["itemrestriction"] },
	{ name: "Use exactly 2 White Mages", types: ["party", "whitemage"] },
	{ name: "Buy exactly 3 Knight's Armor in Melmond", types: ["spending"] },
	{ name: "Use zero Black Mages", types: ["party", "noblackmage"] },
	{ name: "Use exactly one Monk AND one Red Mage", types: ["party", "monk", "redmage"] }
];

bingoList[5] = [
	{ name: "Use zero Warriors", types: ["party", "nowarrior"] },
	{ name: "Cast Blizzara against a group of Ghosts", types: ["situational"] },
	{ name: "Get the Flame Mail in Mt. Gulg", types: ["gulg"] },
	{ name: "Cast Firaga at least twice", types: ["noredmage", "noblackmage"] },
	{ name: "Cast Thundaga at least twice", types: ["noredmage", "noblackmage"] },
	{ name: "Cast Blizzaga at least twice", types: ["noredmage", "noblackmage"] },
	{ name: "Do NOT cast Flare", types: ["default"] }
];

bingoList[6] = [
	{ name: "Get both Light Axes in the Sunken Shrine", types: ["treasurehunt"] },
	{ name: "Get the Giant's Gloves in the Sunken Shrine", types: ["treasurehunt"] },
	{ name: "Complete the Sunken Shrine without escaping combat", types: ["norun"] },
	{ name: "Get the Diamond Armor in the Sunken Shrine", types: ["treasurehunt"] },
	{ name: "Do NOT acquire Survival Vests", types: ["default"] },
	{ name: "Get the Mage's Staff in the Sunken Shrine", types: ["treasurehunt"] },
	{ name: "Equip only an Ice Shield on the shield slot", types: ["unique", "nowarrior", "nothief", "noclass"] }
];

bingoList[7] = [
	{ name: "Use no more than 10 Potions", types: ["itemrestriction"] },
	{ name: "Use zero Phoenix Downs", types: ["itemrestriction"] },
	{ name: "Learn exactly two curative spells", types: ["monk"] },
	{ name: "Use zero Sleeping Bags, Tents, or Cottages", types: ["itemrestriction"] },
	{ name: "Get the Adamantite, but do NOT get the Excalibur", types: ["treasurehunt", "excalibur"] },
	{ name: "Defeat a group with 4 different monsters", types: ["situational"] },
	{ name: "Use at least 1 Elixir", types: ["itemrestriction"] }
];

bingoList[8] = [
	{ name: "Buy exactly 15 Mythril Axes in Crescent Lake", types: ["spending"] },
	{ name: "Get all of the treasure in present-day Chaos Shrine", types: ["treasurehunt"] },
	{ name: "Use exactly 2 Black Mages", types: ["party", "blackmage"] },
	{ name: "Get all of the treasure in the Marsh Cave", types: ["treasurehunt"] },
	{ name: "Use exactly 2 Red Mages", types: ["party", "redmage"] },
	{ name: "Spend at least 26,780 gil in Elfheim", types: ["spending"] },
	{ name: "Use at least 50 Potions", types: ["itemrestriction"] }
];

bingoList[9] = [
	{ name: "Get all of the treasure in Mt. Duergar, including Excalibur", types: ["treasurehunt", "duergar"] },
	{ name: "Use at least 2 Gold Needles", types: ["itemrestriction"] },
	{ name: "Get all of the treasure in the Western Keep", types: ["treasurehunt", "westernkeep"] },
	{ name: "Get Thor's Hammer in the Mirage Tower", types: ["treasurehunt"] },
	{ name: "Use zero Red Mages", types: ["party", "noredmage"] },
	{ name: "Get all of the treasure in Giant's Cave", types: ["treasurehunt"] },
	{ name: "Buy exactly 19 Silver Armlets in Melmond", types: ["spending"] },
];

bingoList[10] = [
	{ name: "Get all of the treasure in the Citadel of Trials", types: ["treasurehunt"] },
	{ name: "Defeat the mighty Blue Dragon at least 10 times", types: ["atleast"] },
	{ name: "Learn exactly one status buff spell", types: ["monk", "noblackmage", "noredmage", "nowhitemage"] },
	{ name: "Do NOT run from any battle in the Cavern of Earth", types: ["norun"] },
	{ name: "Get all of the treasure in the Mermaids' room", types: ["treasurehunt"] },
	{ name: "Get the Dragon Mail in the Mirage Tower", types: ["treasurehunt"] },
	{ name: "Do NOT run from any battle in the Citadel of Trials", types: ["norun"] }
];

bingoList[11] = [
	{ name: "Get the Ice Armor in the Cavern of Ice", types: ["treasurehunt", "icecave"] },
	{ name: "Cast Thundara against a group of Earth Elementals", types: ["situational"] },
	{ name: "Do NOT run from any battle in the Flying Fortress", types: ["norun", "mirage"] },
	{ name: "Learn exactly one elemental damage spell", types: ["monk", "noredmage", "noblackmage"] },
	{ name: "Get the Ice Brand in Mt. Gulg", types: ["gulg"] },
	{ name: "Get the Flame Sword in the Cavern of Ice", types: ["treasurehunt", "icecave"] },
	{ name: "Put a Mindflayer to sleep", types: ["situational"] },
	{ name: "Blind the Evil Eye", types: ["situational", "noblackmage"] },
];

bingoList[12] = [
	{ name: "Get the Aegis Shield in the Mirage Tower", types: ["treasurehunt", "mirage"] },
	{ name: "Get the clothes in the Cavern of Ice", types: ["treasurehunt", "icecave"] },
	{ name: "Get the Rat's Tail, but do NOT class change", types: ["noclass"] },
	{ name: "Buy exactly 18 Mythril Swords in Crescent Lake", types: ["spending"] },
	{ name: "Get the Sunblade in the Mirage Tower", types: ["treasurehunt", "sunblade"] },
	{ name: "Defeat a Vampire Lord", types: ["fight"] },
	{ name: "Use Scourge to defeat Tiamat", types: ["situational"] },
];

bingoList[13] = [
	{ name: "Use at least 4 different Inns", types: ["inn"] },
	{ name: "Get the Razer in the Flying Fortress", types: ["treasurehunt"] },
	{ name: "Learn exactly two status buff spells", types: ["monk"] },
	{ name: "Defeat a Goblin at the Cavern of Earth", types: ["situational"] },
	{ name: "Defeat Hyenadon", types: ["fight"] },
	{ name: "Defeat at least two Rhyos", types: ["atleast"] },
	{ name: "Get the White Robe and Black Robe in the Flying Fortress", types: ["treasurehunt"] },
	{ name: "Use at least 75 Potions", types: ["itemrestriction"] }
];

bingoList[14] = [
	{ name: "Get the Masamune in the Chaos Shrine", types: ["treasurehunt"] },
	{ name: "Get the Protect Cloak in the Chaos Shrine", types: ["treasurehunt"] },
	{ name: "Defeat Goblins at the Cavern of Earth", types: ["situational"] },
	{ name: "Get Sasuke's Blade in the Chaos Shrine", types: ["treasurehunt"] },
	{ name: "Obtain an Emergency Exit from Purple Worm", types: ["emergencyexit"] },
	{ name: "Defeat Red Pirahna", types: ["fight"] },
	{ name: "Obtain an Elixir from Death Eye", types: ["elixir"] },
	{ name: "Get both Healing Helms from treasure chests", types: ["treasurehunt"] }
];

bingoList[15] = [
	{ name: "Buy 99 Hi-Potions", types: ["spending"] },
	{ name: "Defeat White Crocodile", types: ["fight"] },
	{ name: "Obtain a Megalixir, but not from 15-tile puzzle", types: ["megalixir", "deatheye"] },
	{ name: "Defeat Ankheg", types: ["fight"] },
	{ name: "Defeat Green Dragon", types: ["fight", "greendragon"] },
	{ name: "Put a Green Dragon to sleep", types: ["situational", "greendragon"] },
];

bingoList[16] = [
	{ name: "Defeat Death Eye at least 10 times", types: ["atleast", "deatheye"] },
	{ name: "Get all of the treasure in the Dragon Caves", types: ["treasurehunt"] },
	{ name: "Do NOT class change", types: ["noclass"] },
	{ name: "Get the Protect Cloak in Flying Fortress", types: ["treasurehunt"] },
	{ name: "Defeat Tyrannosaurus", types: ["rare"] },
	{ name: "Get at least 2 Ribbons from treasure chests", types: ["treasurehunt"] },
	{ name: "Use the spell Exit to escape from Mt. Gulg", types: ["noclass", "exit"] },
	{ name: "Defeat Sphinx in the Cavern of Earth", types: ["situational"] },
	{ name: "Defeat at least one Dark Fighter", types: ["atleast"] }
];

bingoList[17] = [
	{ name: "Defeat Sand Worm", types: ["fight"] },
	{ name: "Get only 1 of Sunblade or Diamond Armor from chests", types: ["sunblade", "diamondarmor"] },
	{ name: "Buy 99 Ethers", types: ["spending"] },
	{ name: "Clean out Giant's Cave", types: ["treasurehunt"] },
	{ name: "Defeat 2 groups with 4 different monsters", types: ["situational"] },
	{ name: "Get at least 2 characters to level 35", types: ["grind"] },
	{ name: "Buy 99 Gold Needles", types: ["spending"] },
	{ name: "Get the Excalibur in Mt. Duergar", types: ["excalibur"] }
];

bingoList[18] = [
	{ name: "Defeat Typhon", types: ["whisperwind", "extra"] },
	{ name: "Get at least 3 shields from treasure chests", types: ["treasurehunt"] },
	{ name: "Buy 99 Phoenix Downs", types: ["spending"] },
	{ name: "Defeat Ochre Jelly", types: ["rare"] },
	{ name: "Get at least 3 characters to level 28", types: ["grind"] },
	{ name: "No duplicate shields equipped", types: ["unique"] },
	{ name: "Get the party to at least level 25", types: ["grind"] }
];

bingoList[19] = [
	{ name: "No duplicate weapons equipped", types: ["unique"] },
	{ name: "Get the party to at least level 22", types: ["grind"] },
	{ name: "Defeat Iron Golem", types: ["rare"] },
	{ name: "Do NOT equip Barbarian's Sword or Ribbon", types: ["unique"] },
	{ name: "Buy 99 Tents", types: ["spending"] },
	{ name: "Do NOT equip Lordly Robes", types: ["unique"] },
	{ name: "Get Maximillian", types: ["westernkeep"] }
];

bingoList[20] = [
	{ name: "Learn at least one Level 7 spell for a character", types: ["grind"] },
	{ name: "Defeat Ahriman", types: ["earthgift", "extra"] },
	{ name: "No duplicate gloves equipped", types: ["unique"] },
	{ name: "Learn at least two Level 6 spells for a character", types: ["grind"] },
	{ name: "Defeat Red Dragon", types: ["rare"] },
	{ name: "Learn three Level 4 spells for at least two characters", types: ["grind"] },
];

bingoList[21] = [
	{ name: "Get Sasuke's Blade in the Flying Fortress", types: ["treasurehunt"] },
	{ name: "Use at least 5 different Inns", types: ["inn"] },
	{ name: "Buy 99 Faerie Tonics at the Caravan", types: ["spending", "caravan"] },
	{ name: "Unlock one blue seal in the Labyrinth of Time", types: ["labyrinth"] },
	{ name: "Buy exactly 33 Prorings in Gaia", types: ["spending", "gaia"] },
	{ name: "Learn three Level 1, 2, and 3 spells for a character", types: ["grind"] }
];

bingoList[22] = [
	{ name: "Buy 99 Giant's Tonics at the Caravan", types: ["spending", "caravan"] },
	{ name: "Use at least 6 different Inns", types: ["inn"] },
	{ name: "Learn NulDeath", types: ["grind", "nowhitemage", "noredmage"] },
	{ name: "Defeat 3 groups with 4 different monsters", types: ["situational"] },
	{ name: "Get at least 55,000 gil from treasure chests", types: ["treasurehunt"] },
	{ name: "Unlock one red seal in the Labyrinth of Time", types: ["labyrinth"] },
	{ name: "Get Red Jacket", types: ["nowarrior", "nothief", "duergar"] },
	{ name: "Use at least 25 Hi-Potions", types: ["itemrestriction"] }
];

bingoList[23] = [
	{ name: "Get at least 2 characters to level 29", types: ["grind"] },
	{ name: "Use the spell Exit to escape from Waterfall Cavern", types: ["exit", "noclass"] },
	{ name: "Get at least 10 weapons from treasure chests", types: ["treasurehunt"] },
	{ name: "Use all 7 Inns", types: ["inn"] },
	{ name: "Buy exactly 22 Cat Claws in Gaia", types: ["spending", "gaia"] },
	{ name: "Kill four different enemies in one encounter", types: ["situational"] },
	{ name: "Defeat Echidna in Earthgift Shrine", types: ["earthgift", "extra"] }
];

bingoList[24] = [
	{ name: "Defeat Warmech in the Flying Fortress", types: ["rare"] },
	{ name: "Get at least 3 characters to level 20", types: ["grind"] },
	{ name: "No duplicate helmets equipped", types: ["unique"] },
	{ name: "Defeat at least three Ice Gigas", types: ["atleast"] },
	{ name: "Defeat Two-headed Dragon in Earthgift Shrine", types: ["earthgift", "extra"] },
	{ name: "Unlock two blue seals in the Labyrinth of Time", types: ["labyrinth"] }
];

bingoList[25] = [
	{ name: "Buy 99 Cottages in Gaia", types: ["spending", "gaia"] },
	{ name: "Defeat Cerberus in Earthgift Shrine", types: ["earthgift", "extra"] },
	{ name: "Get at least 1 character to level 37", types: ["grind"] },
	{ name: "Learn three Level 5 spells for a character", types: ["grind"] },
	{ name: "Unlock two red seals in the Labyrinth of Time", types: ["labyrinth"] },
	{ name: "Defeat Gilgamesh and Atomos in Lifespring Grotto", types: ["whisperwind", "extra"] }
];


// Suggestions
// Learn NulDeath - in!
// Blind an enemy
// Confuse an enemy
// Defeat a Hydra at Western Keep
// Defeat some Goblins at Cavern of Earth - in!
// Walk through the hall of giants
