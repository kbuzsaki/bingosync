bingoGenerator = require("./generators/generator_bases/srl_generator_v5_blackout.js");

var bingoList = [];

bingoList[1] = [
    { name: "Charcoal", types: []},
    { name: "Itemfinder", types: []},
    { name: "Poison Barb", types: []},
    { name: "Radio Card", types: []},
    { name: "TM05 (Roar)", types: []}
];
bingoList[2] = [
    { name: "Exp. Share", types: []},
    { name: "Good Rod", types: []},
    { name: "Mystic Water", types: []},
    { name: "Mysteryberry", types: []},
    { name: "TM10 (Hidden Power)", types: []},
    { name: "TM11 (Sunny Day)", types: []}
];
bingoList[3] = [
    { name: "A Pokémon with 4 Moves Sharing its Type", types: []},
    { name: "Give a Pokémon a Haircut", types: []},
    { name: "King's Rock", types: []},
    { name: "Slowpoketail", types: ["money"]},
    { name: "TM50 (Nightmare)", types: []}
];
bingoList[4] = [
    { name: "90 Different Pokémon Seen", types: []},
    { name: "A Shiny Pokémon", types: []},
    { name: "Defeat a Legendary Pokémon", types: []},
    { name: "HM05 (Flash)", types: []},
    { name: "TM21 (Frustration) or TM27 (Return)", types: []},
    { name: "Release Starter Before lvl 11", types: []}
];
bingoList[5] = [
    { name: "$0 on Hand or Mom", types: []},
    { name: "7 Different Types of Berries", types: []},
    { name: "Call a Lass", types: []},
    { name: "Call a Sailor", types: []},
    { name: "Defeat 1 Super Nerd in Mt. Mortar", types: []},
    { name: "TM13 (Snore)", types: []}
];
bingoList[6] = [
    { name: "Call a Blackbelt", types: []},
    { name: "Defeat 2 Electrodes", types: []},
    { name: "Defeat 8 Trainers on Route 35", types: ["trainers"]},
    { name: "Defeat 10 Pokémaniacs", types: ["trainers"]},
    { name: "Defeat all 4 Trainers in National Park"},
    { name: "Defeat all 8 Trainers on Route 32", types: ["trainers"]},
    { name: "Soft Sand", types: []}
];
bingoList[7] = [
    { name: "A Pokémon with a non-HM Accuracy Reducing Move", types: []},
    { name: "A Pokémon with a Recoil Move", types: []},
    { name: "A Pokémon with a Rock-Type Move", types: []},
    { name: "A Pokémon with a Sleep-Inducing Move", types: []},
    { name: "A Pokémon with a Speed-Reducing Move", types: []},
    { name: "A Pokémon with an Enhanced Crit-Rate Move", types: []},
    { name: "A Pokémon with Protect, Detect, or Endure", types: []}
];
bingoList[8] = [
    { name: "5 Different Types of Pokéballs", types: []},
    { name: "Catch a Pokémon in Tohjo Falls", types: []},
    { name: "Encounter Suicune on Route 42", types: []},
    { name: "HM02 (Fly)", types: []},
    { name: "TM36 (Sludge Bomb)", types: []}
];
bingoList[9] = [
    { name: "Blackglasses", types: []},
    { name: "Defeat a Lapras", types: []},
    { name: "Open 2 Hidden Chambers in the Ruins of Alph", types: []},
    { name: "Max Phonebook", types: ["trainers"], types: []}
];
bingoList[10] = [
    { name: "Defeat 6 Swimmers", types: ["trainers"]},
    { name: "Defeat 8 Trainers in Lighthouse", types: ["trainers"]},
    { name: "Defeat a Lv40+ Pokémon", types: []},
    { name: "Defeat all 7 Trainers on Route 44", types: ["trainers"]},
    { name: "Defeat Rival 4", types: []}
];
bingoList[11] = [
    { name: "20+ Different TM's", types: []},
    { name: "6 Badges", types: []},
    { name: "Buy all 3 Game Corner Pokémon", types: ["money"]},
    { name: "Evolve 4 Different Pokémon", types: []},
    { name: "Glacier Badge", types: []}
];
bingoList[12] = [
    { name: "25+ Different Pokémon Owned", types: []},
    { name: "Everstone or Gold Berry", types: []},
    { name: "Stop the Same Pokémon Evolving 4 Times", types: []},
    { name: "Win Bug Catching Contest", types: []}
];
bingoList[13] = [
    { name: "A Pokémon with 4 Non-HM Field Moves", types: []},
    { name: "A Pokémon with 4 Non-TM Non-Damaging Moves", types: []},
    { name: "Berry Juice or Elixer", types: []},
    { name: "Inflict a non-volatile status to Sudowoodo", types: []},
    { name: "Trade a Pokémon", types: []}
];
bingoList[14] = [
    { name: "2 Different Baby Pokémon", types: []},
    { name: "2 Different Eeveelutions", types: []},
    { name: "A Dark-Type Pokémon", types: []},
    { name: "A Dragon-Type Pokémon", types: []},
    { name: "A Ghost-Type Pokémon", types: []},
    { name: "A Steel-Type Pokémon", types: []}
];
bingoList[15] = [
    { name: "3 Different Genderless Pokémon", types: []},
    { name: "Own 6 Different Flying Types", types: []},
    { name: "Own 7 Different Normal Types", types: []},
    { name: "Own 7 Different Poison Types", types: []},
    { name: "Own 8 Different Water Types", types: []}
];
bingoList[16] = [
    { name: "Arcanine or Ninetales", types: []},
    { name: "Clefable or Wigglytuff", types: []},
    { name: "Cloyster or Starmie", types: []},
    { name: "Exeggutor or Sunflora", types: []},
    { name: "Poliwrath or Slowking", types: []}
];
bingoList[17] = [
    { name: "Bayleef, Croconaw, or Quilava", types: []},
    { name: "Beedrill or Butterfree", types: []},
    { name: "Charmeleon, Ivysaur, or Wartortle", types: []},
    { name: "Nidoking or Nidoqueen", types: []},
    { name: "Victreebel or Vileplume", types: []}
];
bingoList[18] = [
    { name: "Entei, Raikou, or Suicune", types: []},
    { name: "Ho-oh or Lugia", types: []},
    { name: "TM04 (Rollout) or TM20 (Endure)", types: []},
    { name: "TM34 (Swagger) or TM46 (Thief)", types: []}
];
bingoList[19] = [
    { name: "Arbok or Sandslash", types: []},
    { name: "Ariados or Ledian", types: []},
    { name: "Flaaffy or Skiploom", types: []},
    { name: "Furret or Kadabra", types: []},
    { name: "Fearow or Noctowl", types: []},
    { name: "Pidgeotto or Raticate", types: []}
];
bingoList[20] = [
    { name: "Aipom, Heracross, or Pinsir", types: []},
    { name: "Articuno, Moltres, or Zapdos", types: []},
    { name: "Celebi, Mew, or Mewtwo", types: []},
    { name: "Dunsparce, Girafarig, or Wobbuffet", types: []},
    { name: "Delibird, Gligar, or Sneasel", types: []}
];
bingoList[21] = [
    { name: "Corsola or Qwilfish", types: []},
    { name: "Ditto or Smeargle", types: []},
    { name: "Mantine or Skarmory", types: []},
    { name: "Miltank or Tauros", types: []},
    { name: "Misdreavus or Murkrow", types: []}
];
bingoList[22] = [
    { name: "Cubone or Diglett", types: []},
    { name: "Horsea or Ponyta", types: []},
    { name: "Houndour or Snubbull", types: []},
    { name: "Mankey or Meowth", types: []},
    { name: "Paras or Venonat", types: []},
    { name: "Phanpy or Teddiursa", types: []}
];
bingoList[23] = [
    { name: "Aerodactyl, Kabuto, or Omanyte", types: []},
    { name: "Electabuzz, Jynx, or Magmar", types: []},
    { name: "Graveler, Haunter, or Machoke", types: []},
    { name: "Hitmonchan, Hitmonlee, or Hitmontop", types: []},
    { name: "Koffing, Grimer, or Zubat", types: []}
];
bingoList[24] = [
    { name: "Forretress or Octillery", types: []},
    { name: "Golem or Rhydon", types: []}, 
    { name: "Magcargo or Magneton", types: []},
    { name: "Onix or Scyther", types: []},
    { name: "Piloswine or Yanma", types: []}
];
bingoList[25] = [
    { name: "Catch a Pokémon in Lugia's Room", types: []},
    { name: "Catch a Pokémon on the 9th Floor of Tin Tower", types: []},
    { name: "Complete all 4 Ruins of Alph Puzzles", types: []},
    { name: "Mineral Badge", types: []},
    { name: "Rising Badge", types: []}
];
