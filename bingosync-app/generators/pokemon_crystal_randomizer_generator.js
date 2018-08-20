bingoGenerator = require("./generators/generator_bases/srl_generator_v5.js");

var bingoList = [];

bingoList[1] = [
 { name: "Itemfinder", types: ["progress"] },
 { name: "Radio Card", types: ["progress"] },
 { name: "Poison Barb", types: ["day"] },
 { name: "Defeat a Legendary Pokémon", types: ["legendary"] }
];
bingoList[2] = [
 { name: "Call a Lass", types: ["call"] },
 { name: "Give a Pokémon a haircut", types: ["snip"] },
 { name: "5 different types of PokéBall", types: ["ball"] },
 { name: "Slowpoketail", types: ["progress"] }
];
bingoList[3] = [
 { name: "Mystic Water", types: ["violet"] },
 { name: "TM05 (Roar)", types: ["violet"] },
 { name: "TM50 (Nightmare)", types: ["violet"] },
 { name: "Defeat all 4 trainers in National Park", types: ["trainers"] }
];
bingoList[4] = [
 { name: "Don't use more than one TM", types: ["tms", "instant"] },
 { name: "A Pokémon with 4 moves sharing its type(s)", types: ["movetype"] },
 { name: "Charcoal", types: ["azalea"] },
 { name: "King's Rock", types: ["azalea"] }
];
bingoList[5] = [
 { name: "Poliwrath or Slowking", types: ["stone"] },
 { name: "Clefable or Wigglytuff", types: ["stone"] },
 { name: "Arcanine or Ninetales", types: ["stone"] },
 { name: "Sunflora or Exeggutor", types: ["stone"] },
 { name: "Starmie or Cloyster", types: ["stone"] }
];
bingoList[6] = [
 { name: "Beedrill or Butterfree", types: ["bugs"] },
 { name: "Nidoking or Nidoqueen", types: ["nido"] },
 { name: "TM20 (Endure)", types: ["tms", "randomtm"] },
 { name: "Burn, Paralyze, or Poison Sudowoodo", types: ["tree"] }
];
bingoList[7] = [
 { name: "3 eggs", types: ["egg"] },
 { name: "Win Bug Catching Contest", types: ["place"] },
 { name: "Everstone or Gold Berry", types: ["place"] },
 { name: "$0 on hand & mom", types: ["money"] }
];
bingoList[8] = [
 { name: "Furret or Kadabra", types: ["15/16"] },
 { name: "Flaaffy or Skiploom", types: ["15/18"] },
 { name: "Bayleef, Quilava, or Croconaw", types: ["starters"] },
 { name: "Ivysaur, Charmeleon, or Wartortle", types: ["starters"] }
];
bingoList[9] = [
 { name: "7 different types of Berry", types: ["berry"] },
 { name: "Release starter before Lv11", types: ["release"] },
 { name: "Defeat all 8 trainers on Route 32", types: ["trainers"] },
 { name: "Defeat 8 trainers on Route 35", types: ["trainers"] },
 { name: "HM05 (Flash)", types: ["flash"] }
];
bingoList[10] = [
 { name: "Pidgeotto or Raticate", types: ["20/18"] },
 { name: "Noctowl or Fearow", types: ["18/20"] },
 { name: "Azumarill or Quagsire", types: ["18/20"] },
 { name: "Weepinbell or Gloom", types: ["21"] },
 { name: "Sandslash or Arbok", types: ["22"] },
 { name: "Ariados or Ledian", types: ["22/18"] }
];
bingoList[11] = [
 { name: "Trade a Pokémon", types: ["trade"] },
 { name: "A Dragon type Pokémon", types: ["dragon"] },
 { name: "A Ghost type Pokémon", types: ["ghost"] },
 { name: "Golbat, Koffing, or Grimer", types: ["rocket"] },
 { name: "Hitmonlee, Hitmonchan, or Hitmontop", types: ["tyrogue"] }
];
bingoList[12] = [
 { name: "Evolve 4 different Pokémon", types: ["raise"] },
 { name: "2 different baby Pokémon", types: ["baby"] },
 { name: "2 different Eevee evolutions", types: ["eevee"] },
 { name: "A Pokémon with a Sleep inducing move", types: ["move"] },
 { name: "A Pokémon with a non-HM Accuracy reducing move", types: ["move"] }
];
bingoList[13] = [
 { name: "A shiny Pokémon", types: ["lake"] },
 { name: "TM10 (Hidden Power)", types: ["tms", "lake"] },
 { name: "TM13 (Snore)", types: ["berry", "tms"] },
 { name: "Exp. Share", types: ["whirl", "violet"] },
 { name: "Catch a Pokémon in Tohjo Falls", types: ["kanto"] }
];
bingoList[14] = [
 { name: "Omanyte, Kabuto, or Aerodactyl", types: ["trio"] },
 { name: "Gligar, Delibird, or Sneasel", types: ["trio"] },
 { name: "Heracross, Pinsir, or Aipom", types: ["trio"] },
 { name: "Dunsparce, Wobbuffet, or Girafarig", types: ["trio"] },
 { name: "Machoke, Graveler, or Haunter", types: ["trio"] },
 { name: "Electabuzz, Jynx, or Magmar", types: ["blessed"] }
];
bingoList[15] = [
 { name: "Don't use Repels", types: ["instant"] },
 { name: "Soft Sand", types: ["goldenrod", "trainers"] },
 { name: "TM21 (Frustration) or TM27 (Return)", types: ["goldenrod", "tms"] },
 { name: "TM34 (Swagger)", types: ["tms", "randomtm"] },
 { name: "A Pokémon with 4 non-TM non-damaging moves", types: ["flash"] }
];
bingoList[16] = [
 { name: "Houndour or Snubbull", types: ["nfe"] },
 { name: "Venonat or Paras", types: ["nfe"] },
 { name: "Mankey or Meowth", types: ["nfe"] },
 { name: "Phanpy or Teddiursa", types: ["nfe"] },
 { name: "Cubone or Diglett", types: ["nfe"] }
];
bingoList[17] = [
 { name: "Defeat Lapras", types: ["day", "union"] },
 { name: "Defeat 2 Electrodes", types: ["hideout"] },
 { name: "20+ Pokémon owned", types: ["pkmn"] },
 { name: "Encounter Suicune on Route 42", types: ["cianwood"] },
 { name: "HM02 (Fly)", types: ["cianwood"] }
];
bingoList[18] = [
 { name: "Articuno, Zapdos, or Moltres", types: ["trio"] },
 { name: "Mewtwo, Mew, or Celebi", types: ["trio"] },
 { name: "Own 6 different Normal type Pokémon", types: ["pkmn"] },
 { name: "Own 7 different Flying type Pokémon", types: ["pkmn"] },
 { name: "Own 8 different Water type Pokémon", types: ["pkmn"] }
];
bingoList[19] = [
 { name: "Yanma or Piloswine", types: ["duo"] },
 { name: "Tangela or Lickitung", types: ["duo"] },
 { name: "Murkrow or Misdreavus", types: ["duo"] },
 { name: "TM46 (Thief)", types: ["tms", "randomtm"] },
 { name: "A Pokémon with a Rock type move", types: ["move"] }
];
bingoList[20] = [
 { name: "Onix or Scyther", types: ["duo"] },
 { name: "Mantine or Skarmory", types: ["duo"] },
 { name: "Miltank or Tauros", types: ["duo"] },
 { name: "Ho-Oh or Lugia", types: ["duo"] },
 { name: "A Pokémon with Protect, Detect, or Endure", types: ["move"] }
];
bingoList[21] = [
 { name: "Max Phonebook", types: ["call"] },
 { name: "90 Pokémon seen", types: ["pkmn"] },
 { name: "Defeat 10 PokéManiacs", types: ["day", "union"] },
 { name: "Call a Black Belt", types: ["blackthorn"] }
];
bingoList[22] = [
 { name: "20+ different TMs", types: ["tm"] },
 { name: "Stop the same Pokémon evolving 4 times", types: ["raise"] },
 { name: "Glacier Badge", types: ["glacier"] },
 { name: "6 Badges", types: ["glacier"] }
];
bingoList[23] = [
 { name: "3 Lv30+ Pokémon", types: ["30"] },
 { name: "Suicune, Raikou, or Entei", types: ["beasts"] },
 { name: "Blackglasses", types: ["blackthorn"] },
 { name: "Defeat Rival 4", types: ["goldenrod"] }
];
bingoList[24] = [
 { name: "Buy all 3 Game Corner Pokémon", types: ["goldenrod", "money", "coin"] },
 { name: "30+ Pokémon owned", types: ["pkmn"] },
 { name: "Defeat a Lv40+ Pokémon", types: ["40"] },
 { name: "Berry Juice or Elixer", types: ["shuck"] }
];
bingoList[25] = [
 { name: "Rising Badge", types: ["clair"] },
 { name: "Mineral Badge", types: ["steel"] },
 { name: "Complete all 4 Ruins of Alph puzzles", types: ["violet", "alph"] },
 { name: "Catch a Pokémon in Lugia's room", types: ["lugia"] }
];
