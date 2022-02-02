var bingoGenerator = require("./generators/generator_bases/srl_generator_v5.js");

var bingoList = [];
bingoList[1] = [
	{
		name: "Have 1 Translator",
		types: ['item', 'translator']
	},
	{
		name: "Morph Ball Bomb",
		types: ['ball-upgrade', 'item']
	},
	{
		name: "Space Jump Boots",
		types: ['movement-system', 'item']
	},
	{
		name: "1 Agon Save Stations",
		types: ['save-station', 'agon']
	},
	{
		name: "1 Torvus Save Stations",
		types: ['save-station', 'torvus']
	},
	{
		name: "Use 3 Grapple Points",
		types: ['event', 'grapple-beam']
	},
	{
		name: "Encounter Dark Samus 1 time",
		types: ['event', 'minor-boss']
	},
];
bingoList[2] = [
	{
		name: "Defeat 2 Sub-Guardians",
		types: ['minor-boss']
	},
	{
		name: "Have 3 Energy Tanks",
		types: ['item', 'energy-tank']
	},
	{
		name: "Missile Launcher",
		types: ['missile', 'item']
	},
	{
		name: "Dark Beam",
		types: ['beam', 'item']
	},
	{
		name: "Light Beam",
		types: ['beam', 'item']
	},
	{
		name: "Enter 1 Generator Portals",
		types: ['event']
	},
	{
		name: "Unlock a Translator Gate in 1 Region",
		types: ['event', 'translator']
	},
];
bingoList[3] = [
	{
		name: "Defeat both Sandiggers in Mining Plaza",
		types: ['enemy', 'agon']
	},
	{
		name: "Collect 1 Dark Agon Keys",
		types: ['item', 'key']
	},
	{
		name: "Have 30 Missiles",
		types: ['item', 'missile']
	},
	{
		name: "Have 1 Beam Combo",
		types: ['item', 'beam-combo']
	},
	{
		name: "Unlock 4 Missile Doors",
		types: ['break', 'missile']
	},
	{
		name: "Move 2 Light Blocks",
		types: ['event', 'temple-grounds']
	},
];
bingoList[4] = [
	{
		name: "Defeat 2 Minor Bosses",
		types: ['minor-boss']
	},
	{
		name: "Collect 1 Dark Torvus Keys",
		types: ['item', 'key']
	},
	{
		name: "Violet Translator",
		types: ['item']
	},
	{
		name: "2 Agon Save Stations",
		types: ['save-station', 'agon']
	},
	{
		name: "2 Torvus Save Stations",
		types: ['save-station', 'torvus']
	},
	{
		name: "1 Sanctuary Save Stations",
		types: ['save-station', 'sanctuary']
	},
	{
		name: "Unlock a Translator Gate in 2 Regions",
		types: ['event', 'translator']
	},
	{
		name: "Use 6 Grapple Points",
		types: ['event', 'grapple-beam']
	},
	{
		name: "Encounter Dark Samus 2 times",
		types: ['event', 'minor-boss']
	},
];
bingoList[5] = [
	{
		name: "Collect 1 Ing Hive Keys",
		types: ['item', 'key']
	},
	{
		name: "Have 100 Light Ammo",
		types: ['item', 'ammo']
	},
	{
		name: "Have 100 Dark Ammo",
		types: ['item', 'ammo']
	},
	{
		name: "Screw Attack",
		types: ['movement-system', 'item']
	},
	{
		name: "Dark Suit",
		types: ['suit', 'item']
	},
	{
		name: "Defeat the Warrior Ing in Duelling Range",
		types: ['event', 'agon']
	},
	{
		name: "Move 3 Light Blocks",
		types: ['event', 'temple-grounds']
	},
	{
		name: "Destroy a Lightbringer",
		types: ['enemy', 'agon']
	},
];
bingoList[6] = [
	{
		name: "Defeat 3 Minor Bosses",
		types: ['minor-boss']
	},
	{
		name: "Seeker Launcher",
		types: ['missile', 'item']
	},
	{
		name: "Super Missile",
		types: ['beam-combo', 'item']
	},
	{
		name: "Hive Chamber A Item",
		types: ['location', 'temple-grounds']
	},
	{
		name: "GFMC Compound (Ship) Item",
		types: ['location', 'temple-grounds']
	},
	{
		name: "Enter 2 Generator Portals",
		types: ['event']
	},
	{
		name: "Unlock 3 Super Missile Doors",
		types: ['break', 'super-missile']
	},
	{
		name: "Unlock 2 Seeker Missile Doors",
		types: ['break', 'seeker-missile']
	},
	{
		name: "Reboot the Power Suit",
		types: ['event', 'sanctuary']
	},
];
bingoList[7] = [
	{
		name: "Defeat 3 Sub-Guardians",
		types: ['minor-boss']
	},
	{
		name: "Collect 2 Dark Agon Keys",
		types: ['item', 'key']
	},
	{
		name: "Have 2 Translators",
		types: ['item', 'translator']
	},
	{
		name: "Boost Ball",
		types: ['ball-upgrade', 'item']
	},
	{
		name: "Spider Ball",
		types: ['ball-upgrade', 'item']
	},
	{
		name: "Junction Site Item",
		types: ['location', 'agon']
	},
	{
		name: "Culling Chamber Item",
		types: ['location', 'sanctuary']
	},
	{
		name: "3 Agon Save Stations",
		types: ['save-station', 'agon']
	},
	{
		name: "3 Torvus Save Stations",
		types: ['save-station', 'torvus']
	},
	{
		name: "2 Sanctuary Save Stations",
		types: ['save-station', 'sanctuary']
	},
	{
		name: "Unlock 8 Missile Doors",
		types: ['break', 'missile']
	},
	{
		name: "Use 9 Grapple Points",
		types: ['event', 'grapple-beam']
	},
];
bingoList[8] = [
	{
		name: "Defeat both Mechlops in Dynamo Works Access",
		types: ['enemy', 'sanctuary']
	},
	{
		name: "Defeat both Krocusses",
		types: ['enemy', 'torvus']
	},
	{
		name: "Have 2 Power Bombs",
		types: ['item', 'power-bomb']
	},
	{
		name: "Have 2 Beam Combos",
		types: ['item', 'beam-combo']
	},
	{
		name: "Main Power Bomb",
		types: ['ball-upgrade', 'item']
	},
	{
		name: "Main Reactor Item",
		types: ['location', 'agon']
	},
	{
		name: "Enter 3 Generator Portals",
		types: ['event']
	},
	{
		name: "Flip Over a Dark Phlogus",
		types: ['event', 'torvus']
	},
	{
		name: "Use 10 Kinetic Orb Cannons",
		types: ['event', 'cannon']
	},
	{
		name: "Move the Forgotten Bridge",
		types: ['event', 'torvus']
	},
];
bingoList[9] = [
	{
		name: "Defeat the Dark Ingsmasher in Hive Portal Chamber",
		types: ['enemy', 'sanc-enemy']
	},
	{
		name: "Defeat all Dark Metroids in Phazon Site",
		types: ['enemy', 'agon']
	},
	{
		name: "Collect 2 Dark Torvus Keys",
		types: ['item', 'key']
	},
	{
		name: "Amber Translator",
		types: ['item']
	},
	{
		name: "Emerald Translator",
		types: ['item']
	},
	{
		name: "Hall of Honored Dead Item",
		types: ['location', 'temple-grounds']
	},
	{
		name: "Watch Station Item",
		types: ['location', 'sanctuary']
	},
	{
		name: "Move 8 Light Blocks",
		types: ['event', 'temple-grounds']
	},
];
bingoList[10] = [
	{
		name: "Defeat the Flying Pirates in Mining Station B",
		types: ['enemy', 'agon']
	},
	{
		name: "Defeat both Mekenobites in Sanctuary Temple",
		types: ['enemy', 'sanctuary']
	},
	{
		name: "Have 6 Energy Tanks",
		types: ['item', 'energy-tank']
	},
	{
		name: "Annihilator Beam",
		types: ['beam', 'item']
	},
	{
		name: "Dark Visor",
		types: ['visor', 'item']
	},
	{
		name: "Torvus Plaza Item",
		types: ['location', 'torvus']
	},
	{
		name: "Meditation Vista Item",
		types: ['location', 'torvus']
	},
	{
		name: "Vault Item",
		types: ['location', 'sanctuary']
	},
	{
		name: "4 Agon Save Stations",
		types: ['save-station', 'agon']
	},
	{
		name: "3 Sanctuary Save Stations",
		types: ['save-station', 'sanctuary']
	},
	{
		name: "Use 12 Grapple Points",
		types: ['event', 'grapple-beam']
	},
	{
		name: "Lower the bridge in Vault",
		types: ['event', 'sanctuary']
	},
];
bingoList[11] = [
	{
		name: "Destroy 1 Flying Ing Cache in 1 areas",
		types: ['enemy']
	},
	{
		name: "Have 60 Missiles",
		types: ['item', 'missile']
	},
	{
		name: "Have 4 Power Bombs",
		types: ['item', 'power-bomb']
	},
	{
		name: "Gravity Boost",
		types: ['movement-system', 'item']
	},
	{
		name: "Echo Visor",
		types: ['visor', 'item']
	},
	{
		name: "Grand Windchamber Item",
		types: ['location', 'temple-grounds']
	},
	{
		name: "War Ritual Grounds Item",
		types: ['location', 'temple-grounds']
	},
	{
		name: "Enter 4 Generator Portals",
		types: ['event']
	},
	{
		name: "Unlock 6 Super Missile Doors",
		types: ['break', 'super-missile']
	},
	{
		name: "Unlock 5 Seeker Missile Doors",
		types: ['break', 'seeker-missile']
	},
	{
		name: "Unlock 3 Power Bomb Doors",
		types: ['break', 'power-bomb']
	},
	{
		name: "Unlock a Translator Gate in 3 Regions",
		types: ['event', 'translator']
	},
	{
		name: "Visit Sky Temple Gateway",
		types: ['location']
	},
	{
		name: "Scan all Amber hints",
		types: ['hints', 'translator']
	},
	{
		name: "Encounter Dark Samus 3 times",
		types: ['event', 'minor-boss']
	},
];
bingoList[12] = [
	{
		name: "Defeat 1 Guardian",
		types: ['major-boss']
	},
	{
		name: "Defeat all 5 Sporbs",
		types: ['enemy', 'torvus']
	},
	{
		name: "Collect 2 Ing Hive Keys",
		types: ['item', 'key']
	},
	{
		name: "Have 3 Translators",
		types: ['item', 'translator']
	},
	{
		name: "Have 150 Light Ammo",
		types: ['item', 'ammo']
	},
	{
		name: "Have 150 Dark Ammo",
		types: ['item', 'ammo']
	},
	{
		name: "Cobalt Translator",
		types: ['item']
	},
	{
		name: "Undertemple (SA Wall) Item",
		types: ['location', 'torvus']
	},
	{
		name: "Gathering Hall Item",
		types: ['location', 'torvus']
	},
	{
		name: "Use a Save Station in 3 Regions",
		types: ['save-station']
	},
	{
		name: "Unlock 1 Sonic System Echo Gate",
		types: ['event', 'echo']
	},
	{
		name: "Deactivate the Crypt Force Field",
		types: ['event', 'torvus']
	},
];
bingoList[13] = [
	{
		name: "Defeat 4 Minor Bosses",
		types: ['minor-boss']
	},
	{
		name: "Grapple Beam",
		types: ['movement-system', 'item']
	},
	{
		name: "Darkburst",
		types: ['beam-combo', 'item']
	},
	{
		name: "Sonic Boom",
		types: ['beam-combo', 'item']
	},
	{
		name: "Ing Cache 2 Item",
		types: ['location', 'agon']
	},
	{
		name: "Storage A Item",
		types: ['location', 'agon']
	},
	{
		name: "Storage C Item",
		types: ['location', 'agon']
	},
	{
		name: "5 Agon Save Stations",
		types: ['save-station', 'agon']
	},
	{
		name: "4 Torvus Save Stations",
		types: ['save-station', 'torvus']
	},
	{
		name: "Unlock 2 Sonic System Echo Gates",
		types: ['event', 'echo']
	},
	{
		name: "Use 15 Grapple Points",
		types: ['event', 'grapple-beam']
	},
	{
		name: "Encounter Dark Samus 4 times",
		types: ['event', 'minor-boss']
	},
];
bingoList[14] = [
	{
		name: "Defeat 4 Sub-Guardians",
		types: ['minor-boss']
	},
	{
		name: "Destroy 1 Flying Ing Cache in 2 areas",
		types: ['enemy']
	},
	{
		name: "Collect 3 Dark Agon Keys",
		types: ['item', 'key']
	},
	{
		name: "Transit Tunnel East Item",
		types: ['location', 'torvus']
	},
	{
		name: "Main Gyro Chamber Item",
		types: ['location', 'sanctuary']
	},
	{
		name: "Unlock 3 Sonic System Echo Gates",
		types: ['event', 'echo']
	},
	{
		name: "Unlock 1 Echo Key Beam Gate",
		types: ['event', 'echo']
	},
	{
		name: "Unlock 6 Power Bomb Doors",
		types: ['break', 'power-bomb']
	},
	{
		name: "Scan all Violet hints",
		types: ['hints', 'translator']
	},
	{
		name: "Scan all Emerald hints",
		types: ['hints', 'translator']
	},
];
bingoList[15] = [
	{
		name: "Have 6 Power Bombs",
		types: ['item', 'power-bomb']
	},
	{
		name: "Energy Transfer Module",
		types: ['item']
	},
	{
		name: "Light Suit",
		types: ['suit', 'item']
	},
	{
		name: "Sunburst",
		types: ['beam-combo', 'item']
	},
	{
		name: "Transit Tunnel South Item",
		types: ['location', 'torvus']
	},
	{
		name: "Aerie Item",
		types: ['location', 'sanctuary']
	},
	{
		name: "Hive Gyro Chamber Item",
		types: ['location', 'sanctuary']
	},
	{
		name: "Sanctuary Entrance Item",
		types: ['location', 'sanctuary']
	},
	{
		name: "Return Sanctuary Energy",
		types: ['major-boss', 'event']
	},
	{
		name: "Unlock 2 Echo Key Beam Gates",
		types: ['event', 'echo']
	},
	{
		name: "Unlock 12 Missile Doors",
		types: ['break', 'missile']
	},
];
bingoList[16] = [
	{
		name: "Have 90 Missiles",
		types: ['item', 'missile']
	},
	{
		name: "Have 3 Beam Combos",
		types: ['item', 'beam-combo']
	},
	{
		name: "Profane Path Item",
		types: ['location', 'temple-grounds']
	},
	{
		name: "Feeding Pit Item",
		types: ['location', 'agon']
	},
	{
		name: "Use a Save Station in 4 Regions",
		types: ['save-station']
	},
	{
		name: "5 Torvus Save Stations",
		types: ['save-station', 'torvus']
	},
	{
		name: "4 Sanctuary Save Stations",
		types: ['save-station', 'sanctuary']
	},
	{
		name: "Unlock 3 Echo Key Beam Gates",
		types: ['event', 'echo']
	},
];
bingoList[17] = [
	{
		name: "Have 9 Energy Tanks",
		types: ['item', 'energy-tank']
	},
	{
		name: "Poisoned Bog Item",
		types: ['location', 'torvus']
	},
	{
		name: "Dungeon Item",
		types: ['location', 'torvus']
	},
	{
		name: "Ride the Gondola in Abandoned Base",
		types: ['event', 'temple-grounds']
	},
	{
		name: "Return Agon Energy",
		types: ['major-boss', 'event']
	},
	{
		name: "Unlock 9 Super Missile Doors",
		types: ['break', 'super-missile']
	},
	{
		name: "Unlock 9 Power Bomb Doors",
		types: ['break', 'power-bomb']
	},
	{
		name: "Scan all Cobalt hints",
		types: ['hints', 'translator']
	},
];
bingoList[18] = [
	{
		name: "Collect 3 Dark Torvus Keys",
		types: ['item', 'key']
	},
	{
		name: "Have 4 Translators",
		types: ['item', 'translator']
	},
	{
		name: "Mining Plaza Item",
		types: ['location', 'agon']
	},
	{
		name: "Sanctuary Map Station Item",
		types: ['location', 'sanctuary']
	},
	{
		name: "Complete the Grand Windchamber Puzzle",
		types: ['event', 'temple-grounds']
	},
	{
		name: "Unlock 8 Seeker Missile Doors",
		types: ['break', 'seeker-missile']
	},
	{
		name: "Unlock a Translator Gate in 4 Regions",
		types: ['event', 'translator']
	},
	{
		name: "Encounter Dark Samus 5 times",
		types: ['event', 'minor-boss']
	},
];
bingoList[19] = [
	{
		name: "Defeat 5 Sub-Guardians",
		types: ['minor-boss']
	},
	{
		name: "Main Energy Controller (Light Suit) Item",
		types: ['location', 'great-temple']
	},
	{
		name: "Hive Entrance Item",
		types: ['location', 'sanctuary']
	},
	{
		name: "Use 20 Kinetic Orb Cannons",
		types: ['event', 'cannon']
	},
	{
		name: "Defeat both Ingsmashers in Reactor Access",
		types: ['event', 'sanctuary', 'torvus']
	},
];
bingoList[20] = [
	{
		name: "Defeat 5 Minor Bosses",
		types: ['minor-boss']
	},
	{
		name: "Destroy 1 Flying Ing Cache in 3 areas",
		types: ['enemy']
	},
	{
		name: "Collect 3 Ing Hive Keys",
		types: ['item', 'key']
	},
	{
		name: "Have 200 Light Ammo",
		types: ['item', 'ammo']
	},
	{
		name: "Have 200 Dark Ammo",
		types: ['item', 'ammo']
	},
	{
		name: "Return Torvus Energy",
		types: ['major-boss', 'event']
	},
];
bingoList[21] = [
	{
		name: "Defeat 2 Guardians",
		types: ['major-boss']
	},
	{
		name: "Have 12 Energy Tanks",
		types: ['item', 'energy-tank']
	},
	{
		name: "Have 8 Power Bombs",
		types: ['item', 'power-bomb']
	},
	{
		name: "Dark Oasis Item",
		types: ['location', 'agon']
	},
	{
		name: "Use a Save Station in 5 Regions",
		types: ['save-station']
	},
];
bingoList[22] = [
	{
		name: "Have 120 Missiles",
		types: ['item', 'missile']
	},
	{
		name: "Collect all Dark upgrades (Beam, Suit, Visor)",
		types: ['item']
	},
	{
		name: "Collect all Light upgrades (Beam, Suit)",
		types: ['item']
	},
	{
		name: "Ing Reliquary Item",
		types: ['location', 'temple-grounds']
	},
	{
		name: "Unlock 16 Missile Doors",
		types: ['break', 'missile']
	},
];
bingoList[23] = [
	{
		name: "Defeat 6 Sub-Guardians",
		types: ['minor-boss']
	},
	{
		name: "Destroy 1 Flying Ing Cache in 4 areas",
		types: ['enemy']
	},
	{
		name: "Use 30 Kinetic Orb Cannons",
		types: ['event', 'cannon']
	},
];
bingoList[24] = [
	{
		name: "Defeat 6 Minor Bosses",
		types: ['minor-boss']
	},
	{
		name: "Have 4 Beam Combos",
		types: ['item', 'beam-combo']
	},
	{
		name: "Unlock a Translator Gate in 5 Regions",
		types: ['event', 'translator']
	},
];
bingoList[25] = [
	{
		name: "Defeat 3 Guardians",
		types: ['major-boss']
	},
	{
		name: "Encounter Dark Samus 6 times",
		types: ['event', 'minor-boss']
	},
];
