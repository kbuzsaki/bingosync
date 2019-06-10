bingoGenerator = require("./generators/generator_bases/srl_generator_v8.js");

var bingoList = [];
bingoList[1] = [
  { name: "Obtain a stack of 999 of any tile without duping", types: [] },
  { name: "Cook a marshmallow", types: [] },
  { name: "Drown AND suffocate to death", types: ["death"] },
  { name: "Craft a Legendary Wooden Sword", types: [] },
];
bingoList[2] = [
  { name: "Obtain a gold/platinum Pickaxe", types: [] },
  { name: "Catch and contain 10 critters", types: ["critter"] },
  { name: "Collect 100 granite AND marble tiles", types: [] },
  { name: "Kill a town NPC excluding the Guide", types: [] },
];
bingoList[3] = [
  { name: "Have a dye in every possible slot", types: [] },
  { name: "Kill an enemy with a minecart", types: [] },
  { name: "Wear an Umbrella Hat", types: ["hat"] },
  { name: "Find 3 Sky Islands", types: [] },
];
bingoList[4] = [
  { name: "Defeat Eye of Cthulhu", types: [] },
  { name: "Defeat King Slime", types: [] },
  { name: "Find a Sword Shrine", types: [] },
  { name: "Obtain 3 Blue Slime banners", types: ["banner"] },
];
bingoList[5] = [
  { name: "Defeat Skeletron", types: [] },
  { name: "Obtain 1 of each gem, excluding Amber", types: [] },
  { name: "Craft the Space Gun and Armor", types: [] },
  { name: "Defeat a boss using True Melee, no projectiles", types: [] },
];
bingoList[6] = [
  { name: "Find and defeat Tim", types: ["enemy"] },
  { name: "Create a surface Mushroom Biome", types: [] },
  { name: "Craft a Horseshoe Balloon", types: [] },
  { name: "Obtain 2 colors of counterweights", types: [] },
];
bingoList[7] = [
  { name: "Defeat EoW/BoC", types: [] },
  { name: "Obtain a full gold/platinum armor set", types: [] },
  { name: "Rescue the Tax Collector", types: ["npc"] },
  { name: "Record a boss track with a Music Box", types: [] },
];
bingoList[8] = [
  { name: "Complete a Pirate Invasion", types: ["event"] },
  { name: "Complete the Hardmode Goblin Army", types: ["event"] },
  { name: "Find and defeat Doctor Bones", types: ["enemy"] },
  { name: "Defeat Queen Bee", types: [] },
];
bingoList[9] = [
  { name: "Complete Old One's Army Tier 1", types: ["ooa","event"] },
  { name: "Find and rescue the stylist", types: ["npc"] },
  { name: "Obtain a Reaver Shark", types: ["fishing"] },
  { name: "Obtain all 4 Strange Plants at once", types: [] },
];
bingoList[10] = [
  { name: "Defeat All 3 Mech bosses", types: ["mech"] },
  { name: "Kill a Pinky", types: ["enemy"] },
  { name: "Obtain 3 Prehardmode Boss masks", types: ["mask"] },
  { name: "Die to a Medusa from fall damage", types: ["death"] },
];
bingoList[11] = [
  { name: "Obtain The Groom and Bride vanity", types: [] },
  { name: "Catch and contain a golden critter", types: ["critter"] },
  { name: "Craft the Grand Design", types: ["craft"] },
  { name: "Open 4 dungeon chests", types: [] },
];
bingoList[12] = [
  { name: "Complete Old One's Army Tier 2", types: ["ooa","event"] },
  { name: "Fish up 3 Golden Crates", types: ["fishing"] },
  { name: "Have 15 Buffs and/or Debuffs active at one time", types: ["buffs"] },
  { name: "Kill a Rainbow Slime", types: ["enemy"] },
];
bingoList[13] = [
  { name: "Obtain a Broken Hero Sword from Mothron", types: ["herosword"] },
  { name: "Reach 500 Health and 200 Mana", types: ["health"] },
  { name: "Place 5 Boss Trophies", types: [] },
  { name: "Obtain 10 different banners", types: ["banner"] },
];
bingoList[14] = [
  { name: "Find and defeat a Moth", types: ["enemy"] },
  { name: "Obtain 8 different hooks", types: [] },
  { name: "Obtain Forbidden or Frost Armor", types: [] },
  { name: "Never use buffs", types: ["buffs","restriction"] },
];
bingoList[15] = [
  { name: "Defeat Plantera", types: ["plantera"] },
  { name: "Obtain a Blessed Apple", types: ["luck"] },
  { name: "Remain upside-down for 10 minutes or more", types: ["meme"] },
  { name: "Consume 8 different foods", types: [] },
];
bingoList[16] = [
  { name: "Defeat Golem", types: ["golem"] },
  { name: "Obtain the Master Ninja Gear", types: [] },
  { name: "Drain both oceans into the Underworld", types: ["meme"] },
  { name: "Obtain 10 different vanity hats", types: ["hat"] },
];
bingoList[17] = [
  { name: "Defeat all 3 Mech Bosses at the Same Time", types: ["mech"] },
  { name: "Defeat Lunatic Cultist", types: [] },
  { name: "Obtain 3 Hardmode Boss masks", types: ["mask"] },
  { name: "Catch a Crystal Serpent, Toxikarp, or Bladetongue", types: ["fishing"] },
];
bingoList[18] = [
  { name: "Complete Old One's Army Tier 3", types: ["ooa","event"] },
  { name: "Complete Martian Madness", types: ["event"] },
  { name: "Obtain a full set of Shroomite Armor", types: [] },
  { name: "Obtain 8 different wings", types: [] },
];
bingoList[19] = [
  { name: "Defeat Duke Fishron", types: ["duke"] },
  { name: "Defeat, from maximum health, Enraged Plantera", types: ["plantera"] },
  { name: "Reach 125 or greater defense", types: [] },
  { name: "Obtain 2 Harpy banners", types: ["banner"] },
];
bingoList[20] = [
  { name: "Obtain 4 Light Pets", types: [] },
  { name: "Purchase a Magic Lantern", types: ["luck"] },
  { name: "Craft the Celestial Shell", types: ["craft"] },
  { name: "Obtain the 2 of the following: Spectre Staff, Inferno Fork, and Shadowbeam Staff", types: ["luck"] },
];
bingoList[21] = [
  { name: "Craft the Terra Blade", types: ["herosword"] },
  { name: "Accrue 8 platinum coins at once without duping", types: [] },
  { name: "Defeat the Dungeon Guardian", types: [] },
  { name: "Kill Golem without using wings", types: ["golem","meme"] },
];
bingoList[22] = [
  { name: "Reach Wave 15 of the Pumpkin Moon", types: ["event"] },
  { name: "Use only 1 class after defeating a boss", types: ["restriction","class"] },
  { name: "Purify your world until there is less than 5% world evil", types: [] },
  { name: "Keep 2 accessory slots unused/in vanity permanently", types: ["restriction"] },
];
bingoList[23] = [
  { name: "Reach Wave 15 of Frost Moon", types: ["event"] },
  { name: "Defeat the Lunatic Cultist after summoning 4 decoys", types: ["cultist","meme"] },
  { name: "Obtain a Unicorn on a Stick", types: ["luck","meme"] },
  { name: "Obtain a Lucky Coin or Coin Gun", types: ["luck"] },
];
bingoList[24] = [
  { name: "Craft the Ankh Shield", types: ["craft"] },
  { name: "Spread the world's Hallow to over 50%", types: ["craft"] },
  { name: "Defeat, from maximum health, Enraged Duke Fishron", types: ["duke"] },
  { name: "Never exceed 200 max health", types: ["health","restriction"] },
];
bingoList[25] = [
  { name: "Defeat the Moonlord", types: [] },
  { name: "Complete every Lunar Pillar with their respective class", types: ["class","event"] },
  { name: "Complete all 8 events: Goblins, Pirates, Martians, Pumpkin Moon, Frost Moon, Solar Eclipse, Old One's Army, and Celestial Pillars", types: ["event"] },
  { name: "Craft the Drill Containment Unit", types: ["craft"] },
];
