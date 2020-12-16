bingoGenerator = require("./generators/generator_bases/srl_generator_v5.js");

var bingoList = [];
bingoList[1] = [
  { name: "Defeat Eye of Cthulhu", types: ["ME.5.1","ME.5.2"] },
  { name: "Defeat King Slime", types: ["ME.3.1","ME.3.2"] },
  { name: "Obtain an Unreal Wooden Bow", types: [] },
  { name: "Obtain a stack of 999 of any tile", types: [] },
  { name: "Fill the inventory of a Piggy Bank", types: [] },
  { name: "Consume Cooked Fish", types: [] },
  { name: "Have the suffocation debuff for 7 seconds", types: [] },
  { name: "Get thorned to death", types: [] },
];
bingoList[2] = [
  { name: "Obtain 2 different Spears", types: [] },
  { name: "Obtain 2 Platinum Coins", types: [] },
  { name: "Hammer an Altar until you die", types: [] },
  { name: "Equip 5 different Accessories", types: ["ME.15"] },
  { name: "Obtain a Legendary Wooden Sword", types: [] },
  { name: "Have 2 \"Unpleasant\" Tools/Weapons", types: [] },
  { name: "Have an Eater of Souls or Crimera spawn from hitting a tree", types: [] },
  { name: "Never use an axe", types: ["ME.1"] },
];
bingoList[3] = [
  { name: "Complete a Fishing Quest", types: ["ME.11"] },
  { name: "Make 3 Sauteed Frog Legs", types: [] },
  { name: "Obtain a Rock Lobster", types: [] },
  { name: "Kill a critter that has become corrupted", types: [] },
  { name: "Obtain a Cooked Marshmallow", types: [] },
  { name: "Craft Potions: Titan", types: [] },
  { name: "Have 12 different Buffs/Debuffs at the same time", types: [] },
  { name: "Throw a Stink Potion on yourself", types: [] },
];
bingoList[4] = [
  { name: "Make the Angler \"leave the world\" with a boulder", types: [] },
  { name: "Never activate a trap", types: ["ME.9","ME.10","ME.1"] },
  { name: "Drown with a breathing reed in hand", types: [] },
  { name: "Wear a full set of Cactus armor", types: [] },
  { name: "Plant a Gemcorn and confirm that a gem tree has grown", types: [] },
  { name: "Drown a Town NPC in honey", types: [] },
  { name: "Fill an NPC house with bars", types: [] },
  { name: "Place all Pre-HM biome campfires (no Bone, Ultrabright) on the same screen", types: [] },
];
bingoList[5] = [
  { name: "Defeat Eater of Worlds or Brain of Cthulhu", types: ["ME.4.1","ME.4.2"] },
  { name: "Wear a full set of Shadow/Crimson armor", types: ["ME.14"] },
  { name: "Wear a full set of Necro armor", types: ["ME.14"] },
  { name: "Find a Floating Island House, and a Floating Island Lake", types: [] },
  { name: "Never place or actively Auto-Select torches", types: ["ME.1"] },
  { name: "Create the following biome: Surface Mushroom Biome", types: [] },
  { name: "Obtain Torch God's Favor", types: [] },
  { name: "Place all 4 different sandcastles", types: [] },
];
bingoList[6] = [
  { name: "Fall victim to a Dead Man's Chest", types: ["ME.9"] },
  { name: "Collect all 5 unique Pre-HM Wooden Armor Sets", types: ["ME.14"] },
  { name: "Wear a full set of Pumpkin armor", types: [] },
  { name: "Wear a full set of Fossil armor", types: [] },
  { name: "Get 2 Summon Staves", types: [] },
  { name: "Obtain 8 unique hooks", types: [] },
  { name: "Defeat the Goblin Army", types: [] },
  { name: "Sell a Flaming Mace", types: [] },
];
bingoList[7] = [
  { name: "Craft Potions: Magic Power, Mana Regeneration", types: [] },
  { name: "Craft Potions: Mining, Shine, Night Owl", types: [] },
  { name: "Craft Potions: Water Walking, Flipper", types: [] },
  { name: "Craft Potions: Gender Change", types: [] },
  { name: "Create the following biome: Jungle Ocean", types: [] },
  { name: "Create the following biome: Evil Ocean", types: [] },
  { name: "Create the following biome: Evil Desert", types: [] },
  { name: "Create the following biome: Evil Jungle", types: [] },
];
bingoList[8] = [
  { name: "Place a food item on a plate", types: [] },
  { name: "Consume Grub Soup", types: [] },
  { name: "Catch and contain 4 unique critters", types: [] },
  { name: "Make Lemonade or Apple Juice", types: [] },
  { name: "Wear one of the Vanity Contest winner sets", types: [] },
  { name: "Obtain 3 unique types of grass seeds", types: [] },
  { name: "Obtain 3 different Watches", types: [] },
  { name: "Survive a Blood Moon (Stay alive)", types: [] },
];
bingoList[9] = [
  { name: "Catch and contain a gem critter", types: [] },
  { name: "Obtain 99 \"Ammo\" Seeds", types: [] },
  { name: "Obtain any kind of glowing moss", types: [] },
  { name: "Obtain 6 unique types of arrows", types: [] },
  { name: "Obtain a Silver Bullet and a Tungsten Bullet", types: [] },
  { name: "Have 100 Gel in your inventory", types: [] },
  { name: "Obtain 3 different Boss Masks", types: [] },
  { name: "Place 3 Boss Trophies", types: [] },
];
bingoList[10] = [
  { name: "Attain 400 health", types: [] },
  { name: "Attain 200 mana", types: [] },
  { name: "Catch a fairy and use it underground", types: [] },
  { name: "Combine an accessory with the Obsidian Skull", types: [] },
  { name: "Submerge and stay in lava for 10 seconds", types: [] },
  { name: "Obtain 5 different minecarts", types: [] },
  { name: "Defeat King Slime using only Swords and/or Spears", types: ["ME.3.2"] },
  { name: "Obtain a Mana Flower", types: [] },
];
bingoList[11] = [
  { name: "Craft a piano", types: [] },
  { name: "Throw 35 bones at a Target Dummy", types: [] },
  { name: "Defeat Skeletron", types: ["ME.7.1","ME.7.2"] },
  { name: "Never equip Accessories", types: ["ME.1","ME.15"] },
  { name: "Never use platforms", types: ["ME.1"] },
  { name: "Have \"BINGO\" appear in chat using an announcement box", types: [] },
  { name: "Trash a dungeon weapon", types: [] },
  { name: "Trash a Water Bolt", types: [] },
];
bingoList[12] = [
  { name: "Reach the very bottom of the underworld", types: [] },
  { name: "Wear the Hero's Hat", types: [] },
  { name: "Reach the very top of space", types: [] },
  { name: "Defeat King Slime on a Floating Island or Floating Island Lake", types: ["ME.3.1"] },
  { name: "Have 3 Blazing Wheels on screen at once", types: [] },
  { name: "Touch the left and right edges of the world", types: [] },
  { name: "Sell 40 hellstone", types: [] },
  { name: "Trash Shark Bait item", types: [] },
];
bingoList[13] = [
  { name: "Rescue the Stylist", types: [] },
  { name: "Consume a flask", types: [] },
  { name: "Shoot a monster with a poison dart from a blowpipe", types: [] },
  { name: "Defeat Queen Bee with no more than 200 health", types: ["ME.6.1"] },
  { name: "Go to the entrance of the Lihzahrd Temple", types: [] },
  { name: "Purchase a painting and place it", types: [] },
  { name: "Defeat Queen Bee", types: ["ME.6.1","ME.6.2"] },
  { name: "Defeat Eye of Cthulhu using only Swords and/or Spears", types: ["ME.5.2"] },
];
bingoList[14] = [
  { name: "Fish up 2 unique crates", types: [] },
  { name: "Craft Potions: Featherfall, Calming", types: [] },
  { name: "Open 7 Golden Chests", types: [] },
  { name: "Obtain a Golden Lock Box", types: [] },
  { name: "Complete 2 Fishing Quests", types: ["ME.11"] },
  { name: "Get killed by the Dungeon Guardian", types: [] },
  { name: "Kill a Town NPC with the Dungeon Guardian", types: [] },
  { name: "Craft The Grand Design", types: [] },
];
bingoList[15] = [
  { name: "Have 2 Pylons in the world", types: ["ME.12"] },
  { name: "Have 10 Town NPCs in your world", types: ["ME.2"] },
  { name: "Kill the Clothier", types: [] },
  { name: "Obtain an Obsidian Lock Box", types: [] },
  { name: "Obtain 2 different Mounts", types: [] },
  { name: "Obtain a Garden Gnome and keep it in your inventory forever", types: [] },
  { name: "Purchase a Water Fountain", types: [] },
  { name: "Never craft walls", types: ["ME.1"] },
];
bingoList[16] = [
  { name: "Purchase the Tragic Umbrella", types: [] },
  { name: "Purchase the Quad-Barrel Shotgun", types: [] },
  { name: "Equip Fogbound Dye", types: [] },
  { name: "Obtain 5 unique types of golden Tombstones", types: [] },
  { name: "Kill a monster with the Coffin Minecart", types: [] },
  { name: "Craft a Gravedigger's shovel and destroy 500 blocks with it", types: [] },
  { name: "Craft a Band of Starpower or Panic Necklace", types: [] },
  { name: "Kill a Maggot Zombie, Hoppin' Jack, and Raven", types: [] },
];
bingoList[17] = [
  { name: "Get Gnomed (die)", types: [] },
  { name: "Place 5 different types of toilets", types: [] },
  { name: "Spell out \"BINGO\" with text statues", types: [] },
  { name: "Put 3 accessories on a mannequin or a womannequin", types: [] },
  { name: "Kill a monster using a Sandgun", types: [] },
  { name: "Place Evil Bar, Meteor Bar, Hellstone Bar on top of each other in the snow biome", types: [] },
  { name: "Launch into space from top of underground layer using an Inner Tube", types: [] },
  { name: "Never use a grapple", types: ["ME.1"] },
];
bingoList[18] = [
  { name: "Rescue the Golfer", types: [] },
  { name: "Obtain Golf Cart Keys", types: [] },
  { name: "Obtain any type of golf trophy", types: [] },
  { name: "Wear a Cape", types: [] },
  { name: "Never have more than 4 Town NPCs move in", types: ["ME.2"] },
  { name: "Sell a pair of running boots (1)", types: [] },
  { name: "Craft Potions: Luck (any type)", types: [] },
  { name: "Obtain 5 different Yo-Yos", types: [] },
];
bingoList[19] = [
  { name: "Defeat a Hardmode enemy without entering Hardmode", types: ["ME.10"] },
  { name: "Defeat Eye of Cthulhu in the underworld", types: ["ME.5.1"] },
  { name: "Gain access to a Shadow Orb or Demon Heart using Purification Powder", types: [] },
  { name: "Kill 2 monsters with a single rolling cactus", types: [] },
  { name: "Have 5 minions (not sentrys) summoned at once", types: ["ME.6.1"] },
  { name: "Craft any kind of Phaseblade", types: ["ME.13"] },
  { name: "Craft the Phoenix Blaster", types: [] },
  { name: "Open 3 Shadow Chests", types: [] },
];
bingoList[20] = [
  { name: "Make all the Gem Staves", types: [] },
  { name: "Complete 3 Fishing Quests", types: ["ME.11"] },
  { name: "Create a Void Vault or a Void Bag", types: [] },
  { name: "Purify your world until there is less than 3% world evil", types: [] },
  { name: "Craft the Star Cannon", types: ["ME.13"] },
  { name: "Obtain 2 Zombie Banners", types: [] },
  { name: "Craft Potions: Builder, Endurance", types: [] },
  { name: "Craft Potions: Gills, Hunter", types: [] },
];
bingoList[21] = [
  { name: "Obtain a weapon from a killed Town NPC", types: [] },
  { name: "Obtain a Counterweight", types: [] },
  { name: "Fly a Kite during a windy day", types: [] },
  { name: "Craft Potions: Potion of Return", types: [] },
  { name: "Kill a Blood Moon enemy from fishing", types: [] },
  { name: "Obtain an Enchanted Sword or Terragrim", types: [] },
  { name: "Have 3 Pylons in the world", types: ["ME.12"] },
  { name: "Obtain 8 unique banners", types: [] },
];
bingoList[22] = [
  { name: "Defeat Wall of Flesh", types: ["ME.8.1","ME.8.2"] },
  { name: "Mine an entire Floating Island", types: [] },
  { name: "Drain both Oceans completely", types: [] },
  { name: "Destroy all the leaf blocks from a living tree", types: [] },
  { name: "Fish up a Reaver Shark, Sawtooth Shark, or a Rock Fish", types: [] },
  { name: "Completely destroy a bee hive without dying in the process", types: [] },
  { name: "Fall from the surface all the way to the underworld without breaking your fall", types: [] },
  { name: "Cap spawns using beehives", types: [] },
];
bingoList[23] = [
  { name: "Craft the Night's Edge", types: [] },
  { name: "Defeat a boss using only traps, boulders and/or NPCs", types: [] },
  { name: "Get The Tounge debuff", types: ["ME.8.1"] },
  { name: "Have 3 different Flails", types: [] },
  { name: "Defeat Tier 1 of Old One's Army", types: [] },
  { name: "Deal 100% of all damage to EoW/BoC while upside down and defeat it", types: ["ME.4.1"] },
  { name: "Defeat Eye of Cthulhu using \"throwing weapons\" without explosives", types: ["ME.5.2"] },
  { name: "Deal 100% of all damage to any boss while on a minecart", types: [] },
];
bingoList[24] = [
  { name: "Deal 100% of all damage to enraged Queen Bee and defeat it", types: ["ME.6.1"] },
  { name: "Defeat Skeletron in the jungle", types: ["ME.7.1"] },
  { name: "Summon EoC and Queen Bee at the same time and defeat them both", types: ["ME.5.1","ME.6.1"] },
  { name: "Defeat EoW/BoC with only the Musket or The Undertaker", types: ["ME.4.2"] },
  { name: "Defeat Skeletron using only a magic weapon", types: ["ME.7.2"] },
  { name: "Defeat unique bosses using only each of the following classes: Ranger, Summoner", types: ["ME.3.2","ME.4.2","ME.5.2","ME.6.2","ME.7.2","ME.8.2"] },
  { name: "Defeat unique bosses using only each of the following classes: Melee, Mage", types: ["ME.3.2","ME.4.2","ME.5.2","ME.6.2","ME.7.2","ME.8.2"] },
  { name: "Defeat Queen Bee using only whips", types: ["ME.6.2"] },
];
bingoList[25] = [
  { name: "Deal 100% of all damage to Wall of Flesh with 0 Defense", types: ["ME.8.1"] },
  { name: "Obtain a Demon Scythe", types: [] },
  { name: "Obtain 2 Guide Voodoo Dolls", types: [] },
  { name: "Obtain 3 different Sentry Rods", types: [] },
  { name: "Defeat Skeletron during the day", types: ["ME.7.1"] },
  { name: "Defeat King Slime using only a Flare Gun", types: ["ME.3.1"] },
  { name: "Defeat Wall of Flesh without preparing a bridge/arena", types: ["ME.8.1"] },
  { name: "Have 2 EoW/BoC bosses on screen at once and defeat them both", types: ["ME.4.1"] },
];
