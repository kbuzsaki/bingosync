bingoGenerator = require("./generators/generator_bases/srl_generator_v5.js");

var bingoList = [];

bingoList[1] = [
	{ name: "TM41 (Torment)"},
	{ name: "Play at the Game Corner"},
	{ name: "10 Oran Berries"},
	{ name: "A Gound, a Flying, and a Fire Type"},
	{ name: "Premier Ball"},
];
bingoList[2] = [
	{ name: "3 Different Mail"},
	{name: "Aron"},
	{ name: "Oddish"},
	{ name: "Lotad Doll"},
	{ name: "Watch a TV Program about Yourself"},
];
bingoList[3] = [
	{ name: "Antidote, Awakening, ParaHeal, Ice Heal & Burn Heal"},
	{ name: "Pokemon with Levitate"},
	{ name: "1 of Each X-Item"},
	{ name: "Escape from Battle without Running, Fainting, or Winning"},
	{ name: "Acro Bike Up Jagged Pass"},
];
bingoList[4] = [
	{ name: "5 Great Balls without purchasing any"},
	{ name: "Machop"},
	{ name: "Slugma"},
	{ name: "Use Splash in a battle"},
	{ name: "Don't Pay for your Museum trip"},
];
bingoList[5] = [
	{ name: "Any Pokemon with a Multi-hit Move"},
	{ name: "Illumise"},
	{ name: "Teach Surf to a non-Water Type"},
	{ name: "x99 of an Item"},
	{ name: "Soothe Bell"},
];
bingoList[6] = [
	{ name: "Good Rod"},
	{ name: "Battle a Beauty on Mt.Chimney"},
	{ name: "Pokemon with 4 HM moves", types: ["HMs"] },
	{ name: "Make a Secret base with at least 3 items in it"},
];
bingoList[7] = [
	{ name: "Get 3 items from Pickup"},
	{ name: "Party of 6 different pokemon has no type overlap"},
	{ name: "Pelipper"},
	{ name: "Stop an Evolution with Everstone"},
	{ name: "Blue Flute"},
];
bingoList[8] = [
	{ name: "Beat a Psychic with a Psychic Type"},
	{ name: "6 Soda Pops"},
	{ name: "Use Struggle"},
	{ name: "Ralts"},
	{ name: "Amulet Coin"},
	{ name: "Cancel Starter Evolution 3 Times"},
];
bingoList[9] = [
	{ name: "Beat a Young Couple"},
	{ name: "Defeat the entire Wurmple Family"},
	{ name: "Cacnea"},
	{ name: "Have 4 Different Vitamins"},
	{ name: "Have 8 Key Items"},
];
bingoList[10] = [
	{ name: "Complete the Cycling road in under 10 seconds"},
	{ name: "Kadabra"},
	{ name: "TM13 (Ice Beam)"},
	{ name: "TM27 (Return)"},
	{ name: "4 Type-Boosting Items"},
	{ name: "Catch a Pokemon Holding an Item"},
];
bingoList[11] = [
	{ name: "Mightyena"},
	{ name: "Kelpsey Berry"},
	{ name: "TM 24 (Thunderbolt)"},
	{ name: "Evolve starter pokemon before beating Roxanne"},
	{ name: "Beat All 8 Trainers on Route 103"},
	{ name: "6 Different Types of Pokeball"},
];
bingoList[12] = [
	{ name: "Wynaut"},
	{ name: "Defeat All 6 Trainers on Jagged Pass"},
	{ name: "Teach Dig to Trapinch"},
	{ name: "Macho Brace"},
	{ name: "Steal an Opponent's item"},
	{ name: "Pokemon with 4 Non-Attacking Moves"},
];
bingoList[13] = [
	{ name: "Defeat All 10 Trainers on Route 116"},
	{ name: "Anortih or Lileep"},
	{ name: "TM06 (Toxic)"},
	{ name: "Beat your Rival 4 times"},
	{ name: "Jigglypuff"},
	{ name: "2 Pokemon with multiple Sound based moves"},
];
bingoList[14] = [
	{ name: "Skarmory"},
	{ name: "Big Pearl"},
	{ name: "Pokemon with Selfdestruct or Explosion"},
	{ name: "Spelon Berry"},
	{ name: "Use No TMs (HMs Allowed)", types: ["TMs"] },
];
bingoList[15] = [
	{ name: "Beautifly and Dustox"},
	{ name: "Corphish"},
	{ name: "Evolve 6 Different Pokemon"},
	{ name: "Hatch an Egg from the Daycare"},
];
bingoList[16] = [
	{ name: "Gyarados"},
	{ name: "18 Different Berries"},
	{ name: "Beat a Battle Tent"},
	{ name: "Beat Gabby and Ty 3 times"},
	{ name: "Party of 6 different pokemon with a common type"},
];
bingoList[17] = [
	{ name: "Shuppet"},
	{ name: "Delete an HM"},
	{ name: "Meet The Developer"},
	{ name: "Complete 3 Trick House Rooms"},
	{ name: "Defeat 2 Tropius"},
	{ name: "Absol"},
];
bingoList[18] = [
	{ name: "3 Different LVL 30 Pokemon"},
	{ name: "Catch in Safari Ball"},
	{ name: "TM22 (SolarBeam)"},
	{ name: "TM30 (Shadow Ball)"},
	{ name: "Make 3 different PokéBlock"},
	{ name: "FeatherBadge"},
];
bingoList[19] = [
	{ name: "Electrode or Magneton"},
	{ name: "Fight 10 Double Battles"},
	{ name: "Stone Evolution"},
	{ name: "Have 4 Moves Taught by Move Tutors (No Relearner)"},
	{ name: "Combusken", types: ["Starter"] },
	{ name: "Beat 4 Kecleons"},
];
bingoList[20] = [
	{ name: "6 Heart Scales"},
	{ name: "TM19 (Giga Drain)"},
	{ name: "Only Use 1 HM Per Poke", types: ["HMs"] },
	{ name: "Have 20 Unused TMs", types: ["TMs"] },
	{ name: "Use 12 TMs", types: ["TMs"] },
];
bingoList[21] = [
	{ name: "5 Rare Candies"},
	{ name: "Make an In-Game Trade"},
	{ name: "No Healing Using Centers or PCs"},
	{ name: "Register 25 Pokemon in Dex"},
	{ name: "Party of 6 different pokemon with no STAB moves"},
];
bingoList[22] = [
	{ name: "Catch at least 6 Gen 1 Pokemon"},
	{ name: "Shedinja"},
	{ name: "Crobat"},
	{ name: "Finish with $0"},
	{ name: "3 Starter Dolls"},
];
bingoList[23] = [
	{ name: "Plusle"},
	{ name: "Defeat a Magma Admin with Numel/Camerupt"},
	{ name: "Defeat an Aqua Admin with Carvanha/Sharpedo"},
	{ name: "Delcatty"},
	{ name: "Collect 20 PokeNav Names"},
];
bingoList[24] = [
	{ name: "Pokemon with Minimize"},
	{ name: "Nuzleaf"},
	{ name: "Volbeat"},
	{ name: "Battle every trainer in each Gym you enter"},
	{ name: "A pokemon with a 60 PP Move"},
];
bingoList[25] = [
	{ name: "3 Max Revives"},
	{ name: "Masterball"},
	{ name: "Win a Contest"},
	{ name: "Grovyle", types: ["Starter"] },
	{ name: "Don't Evolve your Starter Pokemon", types: ["Starter"] },
];

