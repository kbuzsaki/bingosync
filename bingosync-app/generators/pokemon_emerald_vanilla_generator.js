bingoGenerator = require("./generators/generator_bases/srl_generator_v5.js");

var bingoList = [];

bingoList[1] = [
	{ name: "TM41 (Torment)"},
	{ name: "10 Oran Berries"},
	{ name: "Premier Ball"},
];
bingoList[2] = [
	{ name: "Antidote, Awakening, ParaHeal, IceHeal & BurnHeal"},
	{ name: "3 Different Mail"},
	{ name: "Oddish"},
	{ name: "Watch a TV Program about Yourself"},
];
bingoList[3] = [
	{ name: "Play at the Game Corner"},
	{ name: "A Gound, a Flying, and a Fire Type"},
	{ name: "Aron"},
	{ name: "1 of Each X-Item"},
];
bingoList[4] = [
	{ name: "Lotad Doll"},
	{ name: "Pokemon with Levitate"},
	{ name: "Slugma"},
	{ name: "Use Splash"},
];
bingoList[5] = [
	{ name: "Don't Pay for your Museum trip"},
	{ name: "x99 of an Item"},
	{ name: "Soothe Bell"},
	{ name: "Acro Bike Up Jagged Pass"},
];
bingoList[6] = [
	{ name: "5 Great Balls without purchasing any"},
	{ name: "Escape from Battle without Running, Fainting, or Winning"},
	{ name: "Battle a Beauty on Mt.Chimney"},
	{ name: "Pokemon with a Multi-hit Move"},
];
bingoList[7] = [
	{ name: "Machop"},
	{ name: "Illumise"},
	{ name: "Stop an Evolution with Everstone"},
	{ name: "Blue Flute"},
	{ name: "Teach Surf to a non-Water Type"},
];
bingoList[8] = [
	{ name: "Use Struggle"},
	{ name: "Good Rod"},
	{ name: "Make a Secret base with at least 3 items in it", types: ["HM"] },
	{ name: "Pelipper"},
	{ name: "Amulet Coin"},
	{ name: "Catch a Pokemon Holding an Item"},
	{ name: "Bonk the invisible rock in Mirage Tower"},
];
bingoList[9] = [
	{ name: "Party of 6 different pokemon with no type overlap"},
	{ name: "Cacnea"},
	{ name: "Steal an Opponent's item"},
	{ name: "6 Soda Pops"},
	{ name: "4 Type-Boosting Items"},
	{ name: "Evolve starter pokemon before beating Roxanne"},
];
bingoList[10] = [
	{ name: "Beat a Psychic with a Psychic Type"},
	{ name: "8 Key Items"},
	{ name: "Beat the entire Wurmple Family"},
	{ name: "Complete Cycling road in under 10 seconds"},
	{ name: "Pokemon with Selfdestruct or Explosion"},
	{ name: "Teach Dig to Trapinch"},
	{ name: "TM06 (Toxic)"},
];
bingoList[11] = [
	{ name: "Beat a Young Couple"},
	{ name: "Get 3 items from Pickup"},
	{ name: "Ralts"},
	{ name: "4 Different Vitamins"},
	{ name: "6 Different Pokeball Types"},
	{ name: "Spelon Berry"},
	{ name: "Use No TMs (HMs Allowed)", types: ["HM"] },
];
bingoList[12] = [
	{ name: "Pokemon with 4 HM moves", types: ["HMPer"] },
	{ name: "Cancel an Evolution 3 Times"},
	{ name: "Mightyena"},
	{ name: "TM27 (Return)"},
	{ name: "Beat All 6 Trainers on Jagged Pass"},
	{ name: "Pokemon with 4 Non-Attacking Moves"},
	{ name: "Wynaut"},
];
bingoList[13] = [
	{ name: "Azumaril"},
	{ name: "6 HMs"},
	{ name: "Big Pearl"},
	{ name: "Kelpsey Berry"},
	{ name: "Jigglypuff"},
	{ name: "3 Pokemon with multiple Sound-Based moves"},
	{ name: "Beautifly and Dustox"},
	{ name: "3 Elixers", types: ["PP"] },
];
bingoList[14] = [
	{ name: "Corphish or Barboach"},
	{ name: "Beat All 8 Trainers on Route 103"},
	{ name: "Beat your Rival 4 times"},
	{ name: "Gyarados"},
	{ name: "TM13 (Ice Beam)"},
	{ name: "Party of 6 different pokemon with a common type"},
];
bingoList[15] = [
	{ name: "TM 24 (Thunderbolt)"},
	{ name: "Macho Brace"},
	{ name: "Anortih or Lileep"},
	{ name: "Skarmory"},
	{ name: "Hatch an Egg from the Daycare"},
	{ name: "Beat 6 Double Battles"},
	{ name: "Beat 4 Kecleons"},
];
bingoList[16] = [
	{ name: "Visit the Hotel"},
	{ name: "Beat All 10 Trainers on Route 116"},
	{ name: "18 Different Berries"},
	{ name: "Beat Gabby and Ty 3 times"},
	{ name: "6 Heart Scales"},
	{ name: "Only teach 1 HM Per Pokemon", types: ["HMPer"] },
];
bingoList[17] = [
	{ name: "Shuppet"},
	{ name: "Kadabra"},
	{ name: "Delete an HM"},
	{ name: "Beat 2 Tropius"},
	{ name: "Catch With Safari Ball"},
	{ name: "TM30 (Shadow Ball)"},
	{ name: "Electrode or Magneton"},
];
bingoList[18] = [
	{ name: "Stone Evolution"},
	{ name: "Evolve 6 Different Pokemon"},
	{ name: "Make 3 different PokéBlock"},
	{ name: "FeatherBadge"},
	{ name: "4 Moves Taught by Tutors"},
	{ name: "Use 10 TMs"},
	{ name: "Psyduck"},
];
bingoList[19] = [
	{ name: "Beat a Battle Tent"},
	{ name: "Absol"},
	{ name: "TM22 (SolarBeam)"},
	{ name: "TM19 (Giga Drain) "},
	{ name: "15 Unused TMs"},
	{ name: "Register 15 Pokemon in Dex "},
	{ name: "Doduo or Natu"},
];
bingoList[20] = [
	{ name: "5 Rare Candies"},
	{ name: "No Healing Using Centers/PCs (Deposit allowed)", types: ["PP"] },
	{ name: "$0"},
	{ name: "Complete 3 Trick House Rooms"},
	{ name: "Delcatty"},
	{ name: "Catch 6 different Generation 1 Pokemon"},
];
bingoList[21] = [
	{ name: "3 Different LVL 30 Pokemon"},
	{ name: "Combusken", types: ["Starter"] },
	{ name: "Party of 6 different pokemon with no STAB moves"},
	{ name: "Crobat"},
	{ name: "Beat Aqua Admin with Carvanha/Sharpedo"},
];
bingoList[22] = [
	{ name: "Make an In-Game Trade"},
	{ name: "Shedinja"},
	{ name: "3 Starter Dolls"},
	{ name: "Collect 20 PokeNav Names"},
];
bingoList[23] = [
	{ name: "Battle every trainer in each Gym you enter"},
	{ name: "Beat Magma Admin with Numel/Camerupt"},
	{ name: "A pokemon with a 60 PP Move"},
];
bingoList[24] = [
	{ name: "Plusle", types: ["Catch"] },
	{ name: "Nuzleaf"},
	{ name: "Volbeat", types: ["Catch"] },
];
bingoList[25] = [
	{ name: "Don't Evolve your Starter Pokemon", types: ["Starter"] },
	{ name: "3 Max Revives"},
	{ name: "Win a Contest"},
	{ name: "Grovyle", types: ["Starter"] },
];
