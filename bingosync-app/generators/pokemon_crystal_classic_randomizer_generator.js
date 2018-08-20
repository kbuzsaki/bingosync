bingoGenerator = require("./generators/generator_bases/srl_generator_v5.js");

var bingoList = [];

bingoList[1] = [
 { name: "Map Card", types: ["map"] },
 { name: "Beedrill or Butterfree", types: ["bugs"] },
 { name: "Itemfinder", types: ["item"] },
 { name: "Radio Card", types: ["radio"] },
];
bingoList[2] = [
 { name: "Nidoking or Nidoqueen", types: ["stone"] },
 { name: "4 different types of Poké Ball", types: ["ball"] },
 { name: "Give a Pokémon a haircut", types: ["snip"] },
 { name: "Charcoal", types: ["coal"] }
];
bingoList[3] = [
 { name: "Call a Youngster", types: ["call"] },
 { name: "Starmie or Cloyster", types: ["stone"] },
 { name: "Win Bug Catching contest", types: ["place"] },
 { name: "Arcanine or Ninetails", types: ["stone"] },
];
bingoList[4] = [
 { name: "TM20 (Endure)", types: ["endure"] },
 { name: "Slowpoketail", types: ["money"] },
 { name: "Clefable or Wigglytuff", types: ["stone"] },
 { name: "10 Pokémon owned", types: ["pkmn"] }
];
bingoList[5] = [
 { name: "Battle a Legendary Pokémon", types: ["free"] },
 { name: "Bayleef, Quilava, or Croconaw", types: ["starters"] },
 { name: "Ivysaur, Charmeleon, or Wartortle", types: ["starters"] },
 { name: "Defeat all 4 trainers in National Park", types: ["park"] }
];
bingoList[6] = [
 { name: "Gyarados or Quagsire", types: ["20"] },
 { name: "Raticate or Fearow", types: ["20"] },
 { name: "A Pokémon with 4 STAB moves", types: ["tm"] },
 { name: "TM05 (Roar)", types: ["thirty"] },
 { name: "Gold Berry", types: ["place"] }
];
bingoList[7] = [
 { name: "Weepinbell or Gloom", types: ["21"] },
 { name: "No money on hand/mom", types: ["cash"] },
 { name: "Ariados or Ledian", types: ["bugs2"] },
 { name: "TM50 (Nightmare)", types: ["thirty"] }
];
bingoList[8] = [
 { name: "3 eggs", types: ["egg"] },
 { name: "Granbull or Furret", types: ["normals"] },
 { name: "Sandslash or Arbok", types: ["22"] },
 { name: "Complete 2 Ruins of Alph puzzles", types: ["unown"] },
 { name: "Everstone", types: ["place"] }
];
bingoList[9] = [
 { name: "Graveler or Haunter", types: ["trade"] },
 { name: "Defeat a Ponyta or Rapidash", types: ["thirty"] },
 { name: "Kadabra or Machoke", types: ["trade"] },
 { name: "Don't use Repels", types: ["repel", "instant"] },
 { name: "7 different types of Berry", types: ["berry"] }
];
bingoList[10] = [
 { name: "TM34 (Swagger)", types: ["sandwich"] },
 { name: "Slowpoke or Poliwag", types: ["split"] },
 { name: "Don't heal at Pokémon Centers", types: ["heal", "instant"] },
 { name: "Defeat all 8 trainers on Route 32", types: ["train"] }
];
bingoList[11] = [
 { name: "TM10 (Hidden Power)", types: ["rage"] },
 { name: "Status Sudowoodo", types: ["wtf"] },
 { name: "Noctowl or Xatu", types: ["birds"] },
 { name: "HM05 (Flash)", types: ["flash"] }
];
bingoList[12] = [
 { name: "A Ghost type Pokémon", types: ["ghost"] },
 { name: "A Pokémon with a Ghost type move", types: ["lick"] },
 { name: "A Pokémon with a Dragon type move", types: ["twister"] },
 { name: "A Dragon type Pokémon", types: ["dragon"] }
];
bingoList[13] = [
 { name: "Venonat or Paras", types: ["bugs3"] },
 { name: "Don't use TMs", types: ["tm", "instant"] },
 { name: "A shiny Pokémon", types: ["waters"] },
 { name: "Release starter before Lv11", types: ["starter"] }
];
bingoList[14] = [
 { name: "Cubone or Phanpy", types: ["ground"] },
 { name: "TM13 (Snore)", types: ["zzz"] },
 { name: "TM11 (Sunny Day)", types: ["rocket"] },
 { name: "A Pokémon with 4 non-TM status moves", types: ["status"] },
 { name: "Mystic Water", types: ["thirty"] }
];
bingoList[15] = [
 { name: "20 TMs", types: ["tm"] },
 { name: "King's Rock", types: ["slow"] },
 { name: "Soft Sand", types: ["pro"] },
 { name: "Exp. Share", types: ["whirl"] }
];
bingoList[16] = [
 { name: "20 Pokémon owned", types: ["pkmn"] },
 { name: "Marill or Teddiursa", types: ["cute"] },
 { name: "Mankey or Meowth", types: ["28"] },
 { name: "Evolve Eevee", types: ["stone"] }
];
bingoList[17] = [
 { name: "Stop starter evolving 3 times", types: ["starter"] },
 { name: "Onix or Scyther", types: ["metal"] },
 { name: "Koffing or Grimer", types: ["poison"] },
 { name: "Defeat Lapras", types: ["day"] },
 { name: "Own 10 different Water type Pokémon", types: ["pkmn"] }
];
bingoList[18] = [
 { name: "Gligar, Delibird, or Farfetch'd", types: ["birds2"] },
 { name: "Encounter Suicune on Route 42", types: ["cune"] },
 { name: "Heracross, Pinsir, or Shuckle", types: ["bugs4"] },
 { name: "Wobbuffet, Girafarig, or Stantler", types: ["tails"] }
];
bingoList[19] = [
 { name: "A Pokemon with Explosion or Selfdestruct", types: ["boom"] },
 { name: "A Pokemon with Minimize or Double Team", types: ["evasion"] },
 { name: "TM46 (Thief)", types: ["whirl"] },
 { name: "Dunsparce, Smeargle, or Aipom", types: ["weird"] }
];
bingoList[20] = [
 { name: "Articuno, Zapdos, or Moltres", types: ["gen1legends"] },
 { name: "Berry Juice", types: ["shuck"] },
 { name: "Max Phonebook", types: ["battles"] },
 { name: "HM02 (Fly)", types: ["whee"] }
];
bingoList[21] = [
 { name: "Mineral Badge", types: ["steel"] },
 { name: "90 Pokémon seen", types: ["pkmn"] },
 { name: "Defeat Electrode", types: ["elec"] },
 { name: "Suicune, Raikou, or Entei", types: ["gen2legends"] },
 { name: "3 baby Pokémon", types: ["egg"] }
];
bingoList[22] = [
 { name: "Ho-Oh or Lugia", types: ["gen2legends"] },
 { name: "TM21 (Frustration) or TM27 (Return)", types: ["day"] },
 { name: "Call a Black Belt", types: ["call"] },
 { name: "A Pokémon with Flame Wheel, Body Slam, or Scary Face", types: ["starter"] },
 { name: "Own 10 different Flying type Pokémon", types: ["pkmn"] }
];
bingoList[23] = [
 { name: "3 level 30 Pokémon", types: ["tin"] },
 { name: "Glacier Badge", types: ["whirl"] },
 { name: "Defeat Rival 4", types: ["whirl"] },
 { name: "Defeat 10 Pokémaniacs", types: ["harley"] },
 { name: "Miltank or Tauros", types: ["moo"] }
];
bingoList[24] = [
 { name: "$50,000", types: ["money", "cash"] },
 { name: "Evolve 4 different Pokémon", types: ["raise"] },
 { name: "Blackglasses", types: ["dark"] },
 { name: "Mantine or Skarmory", types: ["exclusives"] }
];
bingoList[25] = [
 { name: "Mewtwo or Mew", types: ["mew"] },
 { name: "Receive Elixer from Fishing Guru", types: ["karp"] },
 { name: "Defeat Clair", types: ["clair"] },
 { name: "6 Badges", types: ["whee"] }
];
