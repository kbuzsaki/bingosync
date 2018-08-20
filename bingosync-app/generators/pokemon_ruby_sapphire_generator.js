bingoGenerator = require("./generators/generator_bases/srl_generator_v5.js");

var bingoList = [];
bingoList[1] = [
{ name: "Poochyena", types: ["pkmn"] },
{ name: "TM05 (Roar)", types: ["tm"] },
{ name: "HM05 (Flash)", types: ["hm"] },
{ name: "Coin Case", types: ["item"] }
];
bingoList[2] = [
{ name: "Tentacool", types: ["pkmn"] },
{ name: "A Pokemon with a stat related ability", types: ["ability"] },
{ name: "Soot Sack", types: ["item"] },
{ name: "TM36 (Sludge Bomb)", types: ["tm"] }
];
bingoList[3] = [
{ name: "Slakoth", types: ["pkmn"] },
{ name: "7 Different Berries", types: ["multiitem"] },
{ name: "Numel", types: ["pkmn"] },
{ name: "Lava Cookie", types: ["item"] }
];
bingoList[4] = [
{ name: "10 pokemon owned", types: ["dex"] },
{ name: "Zangoose or Seviper", types: ["pkmnpair"] },
{ name: "6 different water type Pokemon", types: ["dex"] },
{ name: "A Pokemon with Double Kick or Mud Shot", types: ["starter"] }
];
bingoList[5] = [
{ name: "Plusle or Minun", types: ["pkmnpair"] },
{ name: "Defeat Winstrate Family", types: ["trainer"] },
{ name: "Participate in a Contest", types: ["contest"] },
{ name: "Mawile or Sableye", types: ["pkmnpair"] }
];
bingoList[6] = [
{ name: "10 TMs", types: ["tm"] },
{ name: "Ether", types: ["item"] },
{ name: "Magikarp", types: ["pkmn", "karp"] },
{ name: "Full Daycare", types: ["egg"] }
];
bingoList[7] = [
{ name: "A powder item", types: ["itempair"] },
{ name: "No money on hand", types: ["cash"] },
{ name: "Do not catch a Legendary Pokemon", types: ["instant"] },
{ name: "Trade with an NPC", types: ["trade"] }
];
bingoList[8] = [
{ name: "6 different flying type Pokemon", types: ["dex"] },
{ name: "Feed a Pokemon a Pokeblock", types: ["pokeblock"] },
{ name: "A Pokemon with a status related ability", types: ["ability"] },
{ name: "Volbeat or Illumise", types: ["pkmnpair"] }
];
bingoList[9] = [
{ name: "Defeat a Slugma", types: ["pkmn"] },
{ name: "A Pokemon with a weather related ability", types: ["ability"] },
{ name: "Defeat all 5 cyclists on Cycling Road", types: ["trainer"] },
{ name: "Complete a Trick House maze", types: ["trickmaster"] }
];
bingoList[10] = [
{ name: "Dustox or Beautifly", types: ["pkmnpair"] },
{ name: "Do not heal at any Pokemon Centers", types: ["heal", "instant"] },
{ name: "Sell a Rare Candy", types: ["item"] },
{ name: "Make a secret base", types: ["tm"] }
];
bingoList[11] = [
{ name: "Gloom", types: ["pkmn"] },
{ name: "A Pokemon with 4 moves with STAB", types: ["tm"] },
{ name: "Exp Share", types: ["item"] },
{ name: "TM44 (Rest)", types: ["tm"] }
];
bingoList[12] = [
{ name: "Pearl or Big Pearl", types: ["itempair"] },
{ name: "Spoink", types: ["pkmn"] },
{ name: "Hatch an egg", types: ["egg"] },
{ name: "Make a Pokémon relearn a move", types: ["item"] }
];
bingoList[13] = [
{ name: "Swablu", types: ["pkmn"] },
{ name: "Do not use any TMs", types: ["tm", "instant"] },
{ name: "Ninjask or Shedinja", types: ["pkmn"] },
{ name: "Three type-boosting items", types: ["multiitem"] }
];
bingoList[14] = [
{ name: "Golbat", types: ["pkmn"] },
{ name: "Solrock or Lunatone", types: ["pkmnpair"] },
{ name: "A Pokemon with 4 non-TM status moves", types: ["move"] },
{ name: "Pokemon with an evasion boosting move", types: ["move"] }
];
bingoList[15] = [
{ name: "7 different types of Poke Ball", types: ["multiitem"] },
{ name: "Barboach", types: ["pkmn"] },
{ name: "Evolve 5 different Pokémon", types: ["hm", "instant"] },
{ name: "A baby Pokemon", types: ["egg", "pkmn"] }
];
bingoList[16] = [
{ name: "20 Pokemon owned", types: ["dex"] },
{ name: "Stop starter evolving 6 times", types: ["starter"] },
{ name: "Lileep or Anorith", types: ["pkmnpair"] },
{ name: "Pelipper", types: ["pkmn"] }
];
bingoList[17] = [
{ name: "TM19 (Giga Drain)", types: ["tm"] },
{ name: "Use a stone to evolve a Pokemon", types: ["multiitem"] },
{ name: "Shuppet or Duskull", types: ["pkmn"]},
{ name: "50 pokemon seen", types: ["dex"] }
];
bingoList[18] = [
{ name: "Defeat 4 Kecleons", types: ["kecleon"] },
{ name: "Gyarados", types: ["pkmn", "karp"] },
{ name: "Defeat all 7 trainers on Route 123", types: ["trainer"] },
{ name: "Breloom", types: ["pkmn"] }
];
bingoList[19] = [
{ name: "Vulpix", types: ["pkmn"] },
{ name: "Defeat 10 Swimmers", types: ["trainer"] },
{ name: "Catch something from Safari Zone", types: ["safari"] },
{ name: "5 Valuable Items", types: ["multiitem"] }
];
bingoList[20] = [
{ name: "Burn a Kecleon", types: ["move"] },
{ name: "20 TMs", types: ["item"] },
{ name: "HM02 (Fly)", types: ["hm"] },
{ name: "Sea or Lax Incense", types: ["item"] }
];
bingoList[21] = [
{ name: "Featherbadge", types: ["badge"] },
{ name: "Magneton", types: ["pkmn"] },
{ name: "$50,000", types: ["cash"] },
{ name: "Put a Pokeblock into a Safari Zone Container", types: ["pokeblock"] }
];
bingoList[22] = [
{ name: "Two different non-key exchangeable items", types: ["multiitem"] },
{ name: "A Trade Evolution Item", types: ["multiitem"] },
{ name: "Wobbuffet", types: ["pkmn"] },
{ name: "3 different level 30 Pokemon", types: ["dex"] }
];
bingoList[23] = [
{ name: "TM21 (Frustration) or TM27 (Return)", types: ["tm"] },
{ name: "All rods", types: ["rods"] },
{ name: "Defeat 5 Ninja Boys", types: ["trainer"] },
{ name: "HM08 (Dive)", types: ["hm"] }
];
bingoList[24] = [
{ name: "Seadra", types: ["pkmn"] },
{ name: "Grovyle", types: ["starter", "pkmn"] },
{ name: "TM04 (Calm Mind)", types: ["tm"] },
{ name: "Relicanth or Wailord", types: ["pkmnpair"] }
];
bingoList[25] = [
{ name: "Defeat all 6 Trainers on Route 125", types: ["trainer"] },
{ name: "Catch a Dragon-type Pokemon", types: ["pkmn"] },
{ name: "All badges", types: ["badge"] },
{ name: "Heracross or Pinsir", types: ["pkmnpair"] }
];
