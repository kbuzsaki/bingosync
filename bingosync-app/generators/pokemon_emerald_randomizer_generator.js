var bingoGenerator = require("./generators/generator_bases/srl_generator_v5.js");

/*
Update notes:
- "Evolve a Pokémon with a stone" has been removed until stones are purchasable with the speedchoice.
- "Nidoking or Nidoqueen" and "Shiftry or Ludicolo" have been changed to "Nidorino or Nidorina" and "Nuzleaf and Lombre" until stones are purchasable with the speedchoice.
- "Soot Sack" has been changed to "White Flute" and has been re-weighted appropriately.
- "7 different types of Berry" has been changed to "Kelpsy Berry".
- "3 Lv30+ Pokémon" has been changed to "5 different Lv30+ Pokémon".
- "Defeat 5 Ninja Boys" has been changed to " Defeat 8 Ninja Boys".
- "2 eggs" has been changed to "Hatch an egg".
- "Don't use more than one TM" has been removed.
- "Defeat a Lv40+ Pokémon" has been removed.
- "$50,000" has been removed.
- "Teach 8 moves via Move Tutor" has been added.
- "Complete Trainer Hill" has been added.
- "TM26 (Earthquake)" has been added.
- "TM45 (Attract)" has been added.
- "Complete 3 Battle Tents" has been added.
- "Defeat Gabby & Ty 6 times" has been added.
- "Defeat 6 trainers on Route 113" has been added.
- "Defeat all 6 trainers on Route 125" has been changed to "Defeat all 8 trainers on Route 125".
- "Defeat all 7 trainers on Route 123" has been changed to "Defeat 9 trainers on Route 123".
- Various Pokémon goals have been adjusted.
- Various goals have had their weights adjusted.
*/

var bingoList = [];

bingoList[1] = [
 { name: "TM05 (Roar)", types: ["114", "tm"] },
 { name: "HM01 (Cut)", types: ["rustboro", "hm"] },
 { name: "TM45 (Attract)", types: ["verdanturf", "tm"] },
 { name: "Quick Claw", types: ["school"] }
];
bingoList[2] = [
 { name: "Coin Case", types: ["mail"] },
 { name: "7 different types of PokéBall", types: ["balls"] },
 { name: "TM36 (Sludge Bomb)", types: ["dewford", "tm"] },
 { name: "A Pokémon with 4 moves sharing its type(s)", types: ["move"] }
];
bingoList[3] = [
 { name: "Defeat a Legendary Pokémon", types: ["legendary"] },
 { name: "Rematch a trainer with Match Call", types: ["pokenav"] },
 { name: "A Pokémon with a status-related ability", types: ["ability"] },
 { name: "A Pokémon with a stat-related ability", types: ["ability"] }
];
bingoList[4] = [
 { name: "Sell a Rare Candy", types: ["candy"] },
 { name: "Defeat the Winstrate Family", types: ["trainer"] },
 { name: "Defeat 6 trainers on Route 113", types: ["trainer"] },
 { name: "A Pokémon with 4 non-TM non-damaging moves", types: ["move"] }
];
bingoList[5] = [
 { name: "Clefable, Wigglytuff, or Delcatty", types: ["stone"] },
 { name: "Raichu, Arcanine, or Ninetales", types: ["stone"] },
 { name: "Vileplume, Victreebel, or Exeggutor", types: ["stone"] },
 { name: "Poliwrath, Starmie, or Cloyster", types: ["stone"] }
];
bingoList[6] = [
 { name: "Beedrill, Butterfree, Dustox or Beautifly", types: ["bugs"] },
 { name: "Nidorino or Nidorina", types: ["nido"] },
 { name: "Lombre or Nuzleaf", types: ["leaves"] },
 { name: "A Pokémon with a weather-related ability", types: ["ability"] }
];
bingoList[7] = [
 { name: "Hatch an egg", types: ["egg"] },
 { name: "Defeat both Pokémon Breeders on Route 117", types: ["trainer"] },
 { name: "Defeat all 5 Triathletes on Cycling Road", types: ["trainer"] },
 { name: "$0 on hand", types: ["money"] }
];
bingoList[8] = [
 { name: "Wobbuffet, Flaaffy, or Furret", types: ["15"] },
 { name: "Ivysaur, Bayleef, or Grovyle", types: ["starters"] },
 { name: "Wartortle, Croconaw, or Marshtomp", types: ["starters"] },
 { name: "Charmeleon, Quilava, or Combusken", types: ["starters"] }
];
bingoList[9] = [
 { name: "Kelpsy Berry", types: ["berry"] },
 { name: "Release starter before Lv11", types: ["release"] },
 { name: "TM19 (Giga Drain)", types: ["grass", "tm"] },
 { name: "Catch a Pokémon in the Safari Zone", types: ["lilycove"] }
];
bingoList[10] = [
 { name: "Mightyena, Linoone, or Raticate", types: ["18/20"] },
 { name: "Azumarill, Gyarados, or Quagsire", types: ["18/20"] },
 { name: "Kirlia, Loudred, or Kadabra", types: ["20/16"] },
 { name: "Masquerain, Ninjask, or Shedinja", types: ["22/20/18"] }
];
bingoList[11] = [
 { name: "Burn, Paralyze, or Poison Kecleon", types: ["status"] },
 { name: "Revive a fossil", types: ["fossil"] },
 { name: "Complete all 3 Battle Tents", types: ["trainer"] },
 { name: "Lileep, Anorith, Kabuto, or Omanyte", types: ["fossil"] }
];
bingoList[12] = [
 { name: "Evolve 4 different Pokémon", types: ["raise"] },
 { name: "Complete Trainer Hill", types: ["trainer"] },
 { name: "2 different baby Pokémon", types: ["baby"] },
 { name: "2 different Eevee evolutions", types: ["eevee"] }
];
bingoList[13] = [
 { name: "TM27 (Return)", types: ["tm"] },
 { name: "White Flute", types: ["113"] },
 { name: "Exp. Share", types: ["rustboro"] },
 { name: "TM44 (Rest)", types: ["lilycove"] }
];
bingoList[14] = [
 { name: "Manectric, Houndoom, or Grumpig", types: ["trio"] },
 { name: "Swellow, Pelipper, or Pidgeotto", types: ["trio"] },
 { name: "Breloom, Hariyama, or Vigoroth", types: ["trio"] },
 { name: "Slugma, Numel, or Torkoal", types: ["trio"] },
 { name: "Barboach, Corphish, or Luvdisc", types: ["trio"] }
];
bingoList[15] = [
 { name: "Trade a Pokémon", types: ["trade"] },
 { name: "Don't use Repels", types: ["instant"] },
 { name: "TM10 (Hidden Power)", types: ["tm", "fortree"] },
 { name: "HM08 (Dive)", types: ["mossdeep", "hm"] }
];
bingoList[16] = [
 { name: "Pikachu, Plusle, or Minun", types: ["trio"] },
 { name: "Swablu, Zangoose, or Seviper", types: ["trio"] },
 { name: "Roselia, Volbeat, or Illumise", types: ["trio"] },
 { name: "Flygon, Claydol, or Cacturne", types: ["trio"] },
 { name: "Skarmory, Spinda, or Sandshrew", types: ["trio"] }
];
bingoList[17] = [
 { name: "Defeat 4 Kecleons", types: ["scope"] },
 { name: "20+ Pokémon owned", types: ["pkmn"] },
 { name: "All fishing rods", types: ["mossdeep"] },
 { name: "Defeat 8 Ninja Boys", types: ["trainer"] }
];
bingoList[18] = [
 { name: "Own 5 different Bug type Pokémon", types: ["pkmn"] },
 { name: "Own 6 different Flying type Pokémon", types: ["pkmn"] },
 { name: "Own 7 different Normal type Pokémon", types: ["pkmn"] },
 { name: "Own 8 different Water type Pokémon", types: ["pkmn"] }
];
bingoList[19] = [
 { name: "Nosepass, Sableye, or Mawile", types: ["trio"] },
 { name: "Glalie, Sharpedo, or Walrein", types: ["trio"] },
 { name: "Chimecho, Banette, or Dusclops", types: ["trio"] },
 { name: "Aggron, Salamence, or Metagross", types: ["trio"] },
 { name: "Regirock, Regice, or Registeel", types: ["trio"] }
];
bingoList[20] = [
 { name: "Catch a Pokémon on Mt. Pyre summit", types: ["pyre"] },
 { name: "Catch Deoxys at Birth Island", types: ["deoxys"] },
 { name: "Catch Latias or Latios at Southern Island", types: ["eon"] },
 { name: "Catch a Pokémon on Mirage Island", types: ["50"] }
];
bingoList[21] = [
 { name: "Defeat 10 Swimmers", types: ["water", "trainer"] },
 { name: "Complete 3 Trick House mazes", types: ["candy", "trainer"] },
 { name: "Defeat all 8 trainers on Route 125", types: ["trainer"] },
 { name: "Defeat 9 trainers on Route 123", types: ["trainer"] }
];
bingoList[22] = [
 { name: "90 Pokémon seen", types: ["pkmn"] },
 { name: "Teach 8 moves via Move Tutor", types: ["tutor"] },
 { name: "Stop the same Pokémon evolving 4 times", types: ["raise"] },
 { name: "Mental Herb", types: ["fortree"] }
];
bingoList[23] = [
 { name: "5 different Lv30+ Pokémon", types: ["30"] },
 { name: "Kyogre, Groudon, or Rayquaza", types: ["covers"] },
 { name: "TM24 (Thunderbolt)", types: ["mauville", "tm"] },
 { name: "Defeat Rival 4", types: ["lilycove"] }
];
bingoList[24] = [
 { name: "Feather Badge", types: ["feather"] },
 { name: "Mind Badge", types: ["mind"] },
 { name: "Defeat Gabby & Ty 6 times", types: ["trainer", "tv"] },
 { name: "30+ Pokémon owned", types: ["pkmn"] }
];
bingoList[25] = [
 { name: "7 badges", types: ["badges"] },
 { name: "TM26 (Earthquake)", types: ["tm", "seafloor"] },
 { name: "Participate in a Contest", types: ["contest"] }
];
