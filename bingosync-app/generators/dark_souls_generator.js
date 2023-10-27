bingoGenerator = require("./generators/generator_bases/srl_generator_v5.js");

 var bingoList = [];
// Short is up to O&S Including tomb up to nito amd izalith lord vessel barriers
// Starting class and items
bingoList[1] = [
  { name: "Bandit Class", types: ["startingclass","restrict_axe"] },
  { name: "Knight Class", types: ["startingclass","restrict_sword"] },
  { name: "Hunter Class", types: ["startingclass","restrict_sword"] },
  { name: "Pyromancer Class", types: ["startingclass","restrict_axe"] },
  { name: "Deprived Class", types: ["startingclass"] },
  { name: "Wanderer Class", types: ["startingclass"] },
  { name: "Thief Class", types: ["startingclass","restrict_key"] },
  { name: "Warrior Class", types: ["startingclass","restrict_sword"] },
  { name: "Cleric Class", types: ["startingclass"] }
];
// Starting items
bingoList[2] = [
  { name: "No Master Key gift", types: ["startingitem","restrict_key"] },
  { name: "Take Pendant as gift", types: ["startingitem","restrict_key"] },
  { name: "Take Binoculars as gift", types: ["startingitem","restrict_key"] },
  { name: "Take Old Witch's Ring as gift", types: ["startingitem","restrict_key"] },
  { name: "Right hand wielding only", types: ["restriction","wielding"] },
  { name: "Left hand wielding only", types: ["restriction","wielding"] }
];
// Item Restrictions
bingoList[3] = [
  { name: "No Shields", types: ["restriction","restrict_weapons"] },
  { name: "No Swords", types: ["restriction","restrict_weapons"] },
  { name: "No Polearms", types: ["restriction","restrict_weapons"] },
  { name: "Daggers only", types: ["restriction","restrict_weapons"] },
  { name: "Axes only", types: ["restriction","restrict_weapons"] },
  { name: "No Rings", types: ["restriction","restrict_armour"] },
  { name: "Starting Armour only", types: ["restriction","restrict_armour"] },
  { name: "Starting Weapons only", types: ["restriction","restrict_weapons"] }
];
// Firelink
bingoList[4] = [
  { name: "Summon Lautrec for Gargoyles", types: ["npcs","parish"] },
  { name: "Obtain Fire Keeper Soul (Parish)", types: ["humanity","parish"] },
  { name: "Kill Armoured Boar (Parish)", types: ["enemies","parish"] },
  { name: "Join Warriors of Sunlight", types: ["covenant","parish"] },
  { name: "Cut Off a Gargoyle's Tail", types: ["bosses","parish","items"] },
  { name: "Obtain Crest of Artorias", types: ["items","parish"] },
  { name: "Obtain Bloodbite Ring", types: ["rings","parish"] },
  { name: "Obtain Poisonbite Ring", types: ["rings","parish"] },
  { name: "3 Purging Stones", types: ["items","parish"] }
];
// Depths and Darkroot
bingoList[5] = [
  { name: "Open Lower Burg / Depths to Firelink Gate", types: ["shortcut","lowerburg"] },
  { name: "Join Forest Hunters", types: ["covenant","darkroot","npcs"] },
  { name: "Obtain Divine Ember", types: ["darkroot","ember"] },
  { name: "Obtain Enchanted Ember", types: ["darkroot","ember"] },
  { name: "Kill Black Knight (Darkroot)", types: ["darkroot","ember"] },
  { name: "Kill Capra Demon", types: ["lowerburg","bosses"] },
  { name: "Obtain Grass Crest Shield", types: ["items","armour","darkroot"] },
  { name: "Obtain Soul of the Moonlight Butterfly", types: ["bosses","darkroot"] }
];
// Lower Burg and Depths
bingoList[6] = [
  { name: "Obtain Heavy Crossbow", types: ["weapons","depths","items"] },
  { name: "Obtain Ring of the Evil Eye", types: ["rings","depths","items"] },
  { name: "Defeat Kirk (Depths)", types: ["npcs","depths","enemies"] },
  { name: "Kill Gaping Dragon", types: ["bosses","depths"] },
  { name: "Kill 2 Butchers", types: ["enemies","depths"] },
  { name: "Obtain Large Ember", types: ["items","ember","depths"] },
  { name: "Rescue Laurentius", types: ["npcs","depths","pyromancy"] },
  { name: "Kill Sif", types: ["darkroot","bosses","sif"] },
  { name: "Obtain Hornet Ring", types: ["darkroot","bosses","sif"] }
];
bingoList[7] = [
// Blighttown
  { name: "Obtain Whip", types: ["weapons","blighttown"] },
  { name: "Obtain Server", types: ["weapons","blighttown"] },
  { name: "Obtain Iaito", types: ["weapons","blighttown"] },
  { name: "Obtain Power Within", types: ["items","spells","blighttown"] },
  { name: "Obtain Tin Banishment Catalyst", types: ["items","weapons"] },
  { name: "Obtain Remedy", types: ["items","spells"] },
  { name: "Obtain Fire Keeper Soul (Blighttown)", types: ["blighttown","items","humanity"] },
  { name: "Obtain Soul of Quelaag", types: ["bosses","depths","items"] },
  { name: "Defeat Maneater Mildred", types: ["bosses","depths"] }
];
// Valley of the Drakes and New Londo
bingoList[8] = [
  { name: "Obtain Fire Keeper Soul (New Londo)", types: ["drakeslondo","items","humanity"] },
  { name: "Obtain Astora's Straight Sword", types: ["weapons","drakeslondo","items"] },
  { name: "Obtain Very Large Ember", types: ["items","drakeslondo",] },
  { name: "Obtain Cursebite Ring", types: ["rings","drakeslondo"] },
  { name: "Obtain Composite Bow", types: ["weapons","drakeslondo","items"] },
  { name: "Obtain 10 Cracked Red Eye Orbs", types: ["items","drakeslondo"] },
  { name: "Defeat Four Kings", types: ["bosses","drakeslondo"] },
  { name: "Kill Undead Dragon (Valley of the Drakes)", types: ["bosses","drakeslondo"] }
];
// Catacombs
bingoList[9] = [
  { name: "Obtain Lucerne", types: ["weapons","catacombs"] },
  { name: "Obtain 6 Eyes of Death", types: ["items","catacombs","totg"] },
  { name: "Obtain Darkmoon Seance Ring", types: ["enemies","catacombs"] },
  { name: "Obtain Gravelord Greastword", types: ["covenant","catacombs"] },
  { name: "Obtain Great Scythe", types: ["catacombs"] },
  { name: "Obtain Tranquil Walk of Peace", types: ["items","spells","catacombs"] },
  { name: "Kill Black Knight (The Catacombs)", types: ["items","spells","catacombs"] },
  { name: "Kill Titanite Demon (The Catacombs)", types: ["enemies","catacombs"] },
  { name: "Kill Patches", types: ["npcs","catacombs"] },
  { name: "Summon Paladin Leeroy", types: ["covenant","catacombs"] },
  { name: "Craft a Fire Weapon", types: ["vamos","catacombs"] }
];
// Asylum
bingoList[10] = [
  { name: "Kill 2 Black Knights in the Asylum", types: ["asylum","enemies"] },
  { name: "Obtain Peculiar Doll", types: ["asylum","items"] },
  { name: "Obtain Rusted Iron Ring", types: ["asylum","items"] },
  { name: "Kill Stray Demon", types: ["asylum","bosses"] },
  { name: "Trade an item with Snuggly", types: ["asylum","items"] }
];
// Demon Ruins without lordvessel
bingoList[11] = [
  { name: "Obtain Chaos Ember", types: ["demonruins","items","ember"] },
  { name: "Obtain Large Flame Ember", types: ["demonruins","items","ember"] },
  { name: "Obtain Gold-Hemmed Black Set", types: ["demonruins","bosses"] },
  { name: "Kill Ceaseless Discharge", types: ["demonruins","bosses"] },
  { name: "Murder Chaos Covenant Leader", types: ["demonruins","npcs","covenant"] },
  { name: "Join Chaos Covenant", types: ["demonruins","npcs","covenant"] },
  { name: "Get the Egg Head Infection", types: ["demonruins","enemies","armour"] }
];
// Sen's Fortress
bingoList[12] = [
  { name: "Obtain a Spear upgraded with Lightning", types: ["items","weapons"] },
  { name: "Obtain Covetous Gold Serpent Ring", types: ["items","rings","sens"] },
  { name: "Obtain Ring of Steel Protection", types: ["items","rings","sens"] },
  { name: "Obtain Flame Stoneplate Ring", types: ["items","rings","sens"] },
  { name: "Obtain Sniper Crossbow", types: ["items","weapons","sens"] },
  { name: "Obtain Ricard's Rapier", types: ["items","weapons","sens","npcs"] },
  { name: "Obtain Hush", types: ["items","sens","spells"] },
  { name: "Obtain Core of an Iron Golem", types: ["sens","items","bosses"] },
  { name: "Kill All 3 Giants in Sens", types: ["enemies","sens"] }
];
// NPC Interactions
bingoList[13] = [
  { name: "Summon Iron Tarkus", types: ["npcs","lautrec"] },
  { name: "Summon Witch Beatrice", types: ["npcs","Beatrice"] },
  { name: "Murder Siegmeyer", types: ["npcs","lautrec"] },
  { name: "Murder Andre", types: ["parish","items"] },
  { name: "Murder Solaire", types: ["covenant","solaire"] }
];
bingoList[14] = [
  { name: "Kill Lady of the Darkling", types: ["npc","anorlondo"] },
  { name: "Murder Giant Blacksmith", types: ["anorlondo","npc","smithy"] },
  { name: "Join Darkmoon Covenant", types: ["npcs","bosses","anorlondo"] },
  { name: "Kill Dark Sun Gwyndolin", types: ["npcs","bosses","anorlondo"] },
  { name: "Obtain Silver Knight Set", types: ["anorlondo","armour"] }
];
bingoList[15] = [
  { name: "Summon Solaire in Anor Londo", types: ["covenant","solaire"] },
  { name: "Kill Crestfallen Merchant", types: ["sens","npc"] },
  { name: "Rescue Griggs in Lower Burg", types: ["lowerburg","npc"] },
  { name: "Rescue Logan in Sen's Fortress", types: ["sens","npc","spells"] },
  { name: "Cause Crestfallen Warrior to go Hollow", types: ["firelink","npc"] }
];
// More Restrictions
bingoList[16] = [
  { name: "Never use Sorcery", types: ["restriction","restrict_spell"] },
  { name: "Never use Miracles", types: ["restriction","restrict_spell"] },
  { name: "Never use Consumables", types: ["restriction", "restrict_consumable"] },
  { name: "Only heal with Humanities", types: ["restriction", "restrict_consumable"] },
  { name: "Never use Pyromancy", types: ["restriction","restrict_spell"] },
  { name: "Never wear Armour", types: ["restriction","restrict_armour"] }
];
// Anor Londo
bingoList[17] = [
  { name: "Obtain Tiny Being's Ring (Siegmeyer)", types: ["npcs","anorlondo2"] },
  { name: "Obtain Ring of the Sun's Firstborn", types: ["anorlondo"] },
  { name: "Obtain Hawk Ring", types: ["anorlondo"] },
  { name: "Kill 3 Mimics", types: ["anorlondo"] },
  { name: "Kill Titanite Demon (Anor Londo)", types: ["anorlondo","ornsmo"] },
  { name: "Obtain Havel's Set", types: ["anorlondo","armour"] }
];
bingoList[18] = [
  { name: "Obtain Soul of Ornstein", types: ["anorlondo","ornsmo"] },
  { name: "Obtain Leo Ring", types: ["anorlondo","ornsmo"] },
  { name: "Invade Lautrec at Anor Londo", types: ["anorlondo","lautrec"] },
  { name: "Join Princess Guard", types: ["anorlondo","tits","ornsmo"] },
  { name: "Obtain Soul of Smough", types: ["anorlondo","ornsmo"] },
  { name: "Kill Gwynevere", types: ["anorlondo","ornsmo"] }
];
// Painted World
bingoList[19] = [
  { name: "Obtain Black Iron Set", types: ["paintedworld","guardians"] },
  { name: "Obtain Dark Ember", types: ["paintedworld","ember"] },
  { name: "Obtain Red Sign Soapstone", types: ["paintedworld","guardians"] },
  { name: "Obtain Bloodshield", types: ["paintedworld","guardians"] },
  { name: "Defeat Undead Dragon (Painted World)", types: ["paintedworld","items"] }
];
bingoList[20] = [
  { name: "Defeat Jeremiah", types: ["paintedworld","enemies"] },
  { name: "Obtain Painting Guardian Set", types: ["paintedworld","armour"] },
  { name: "Obtain Velka's Rapier", types: ["paintedworld","weapons"] },
  { name: "Murder Priscilla", types: ["paintedworld","youmonster"] },
  { name: "Obtain a Gold Coin", types: ["paintedworld","items"] }
];
// Tomb of the Giants
bingoList[21] = [
  { name: "Kill Black Knight (Tomb of the Giants)", types: ["enemies","totg"] },
  { name: "Rescue Reah", types: ["npcs","totg","reah"] },
  { name: "Get pushed by Patches", types: ["npcs","totg"] },
  { name: "Obtain Skull Lantern", types: ["weapons","totg"] },
  { name: "Obtain Effigy Shield", types: ["weapons","totg"] },
  { name: "Obtain Large Divine Ember", types: ["ember","totg"] },
  { name: "Obtain Covetous Silver Serpent Ring", types: ["rings","totg"] }

];
// Long Darkroot
bingoList[22] = [
  { name: "Obtain Dusk Crown Ring", types: ["darkroothard","dusk"] },
  { name: "Obtain Chameleon", types: ["darkroothard","dusk","spells"] },
  { name: "Obtain Antiquated Set", types: ["darkroothard","dusk","spells"] },
  { name: "Never Light a bonfire", types: ["restriction"] },
  { name: "Fully kindle a bonfire", types: ["restriction"] },
  { name: "Never upgrade weapons", types: ["restriction"] }
];
// Ash Lake
bingoList[23] = [
  { name: "Join Path of the Dragon", types: ["covenant","ashlake"] },
  { name: "Obtain Great Magic Barrier", types: ["miracles","ashlake"] },
  { name: "Light Ash Lake Bonfire", types: ["ashlake"] },
  { name: "Obtain Cloranthy Ring", types: ["ashlake"] }
];
// Humanity souls and stats
bingoList[24] = [
  { name: "Obtain 2 Souls of a Hero", types: ["stats","humanity"] },
  { name: "20 Soft Humanity", types: ["stats","humanity"] },
  { name: "150000 souls", types: ["stats","souls"] },
  { name: "26 Resistance", types: ["stats","condition"] },
  { name: "36 Vitality", types: ["stats","condition"] },
  { name: "36 Endurance", types: ["stats","condition"] },
  { name: "No Endurance levelling", types: ["stats","restriction","condition"] },
  { name: "No Vitality levelling", types: ["stats","restriction","condition"] }
];
// Humanity souls and stats
bingoList[25] = [
  { name: "36 Dexterity", types: ["stats","attack"] },
  { name: "36 Strength", types: ["stats","attack"] },
  { name: "28 Attunement", types: ["stats","casting"] },
  { name: "36 Intelligence", types: ["stats","casting"] },
  { name: "36 Faith", types: ["stats","casting"] }
];
