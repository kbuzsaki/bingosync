bingoGenerator = require("./generators/generator_bases/srl_generator_v5.js");

var bingoList = [];

bingoList[1] = [
  { name:"Don’t heal with herbal items", types: ["instant"] },
  { name:"Odd Keystone", types: ["keystone"] },
  { name:"TM88 (Pluck)", types: ["floaroma1"] },
  { name:"Quick Claw", types: ["jubilife"] },
  { name:"Evolve a Pokémon", types: ["evolve"] },
  { name:"Wormadam, Mothim, or Vespiquen", types: ["pokemon"] }
];
bingoList[2] = [
  { name:"Give a Pokémon a massage", types: ["massage"] },
  { name:"Catch a Pokémon with the Old Rod", types: ["fishing"] },
  { name:"Sprayduck", types: ["keyitem"] },
  { name:"Poffin Case", types: ["keyitem"] },
  { name:"Beautifly or Dustox", types: ["pokemon"] }
];
bingoList[3] = [
  { name:"Don’t heal at Pokémon Centers", types: ["instant"] },
  { name:"Defeat a Gym Leader with animations on", types: ["leader"] },
  { name:"TM67 (Recycle)", types: ["eterna"] },
  { name:"Slather honey on 10 different trees", types: ["honey"] },
  { name:"Haunter, Kadabra, Machoke, or Graveler", types: ["pokemon"] }
];
bingoList[4] = [
  { name:"Use a 4x super-effective move", types: ["parasect"] },
  { name:"10 different berries", types: ["berries"] },
  { name:"8 Pokétch Apps", types: ["poketch"] },
  { name:"Apply a Ball Seal to a Pokémon", types: ["seals"] },
  { name:"Kricketune, Bibarel, or Staravia", types: ["pokemon"] }
];
bingoList[5] = [
  { name:"5 different type-boosting items", types: ["typeitems"] },
  { name:"Protector, Reaper Cloth, Magmarizer, or Electrizer", types: ["tradeitems"] },
  { name:"Defeat a doubles partner", types: ["doubles"] },
  { name:"TM51 (Roost)", types: ["abovesolaceon"] },
  { name:"Tangela, Yanma, or Piloswine", types: ["pokemon"] }
];
bingoList[6] = [
  { name:"Release starter before level 11", types: ["starter"] },
  { name:"7 Different types of Poké Ball", types: ["balls"] },
  { name:"10 different Pokémon owned", types: ["pkmn"] },
  { name:"Defeat all 8 trainers in Eterna Forest", types: ["trainers"] },
  { name:"Roselia, Togetic, Kirlia, or Snorunt", types: ["pokemon"] }
];
bingoList[7] = [
  { name:"3 Pokémon that start with the same letter", types: ["letter"] },
  { name:"A Pokémon with a stat-boosting move", types: ["move"] },
  { name:"Return the Suite Key", types: ["hotel"] },
  { name:"TM92 (Trick Room)", types: ["hotel"] },
  { name:"Electabuzz, Magmar, or Jynx", types: ["pokemon"] }
];
bingoList[8] = [
  { name:"A Pokémon with a non-TM move with 5 PP", types: ["move"] },
  { name:"Battle Rotom (TV Pokémon)", types: ["clock"] },
  { name:"15 TMs", types: ["tms"] },
  { name:"Defeat all 11 trainers on Route 205", types: ["trainers"] },
  { name:"3 eggs", types: ["egg"] },
  { name:"Magnezone or Probopass", types: ["pokemon"] }
];
bingoList[9] = [
  { name:"6 different Water-type Pokémon", types: ["catch6"] },
  { name:"Defeat Drifloon", types: ["date"] },
  { name:"TM78 (Captivate)", types: ["floaroma2"] },
  { name:"Catch a Pokémon with the Good Rod", types: ["fishing"] },
  { name:"Luxio, Mightyena, or Houndoom", types: ["pokemon"] }
];
bingoList[10] = [
  { name:"6 different Normal-type Pokémon", types: ["catch6"] },
  { name:"Defeat 8 spinners", types: ["trainers"] },
  { name:"HM05 (Defog)", types: ["hms"] },
  { name:"Evolve 3 different Pokémon", types: ["evolve"] },
  { name:"Shellos, Floatzel, Quagsire, or Pelipper", types: ["pokemon"] }
];
bingoList[11] = [
  { name:"6 different Flying-type Pokémon", types: ["catch6"] },
  { name:"Revive a Fossil", types: ["fossil"] },
  { name:"BlackGlasses, Wise Glasses, or Choice Specs", types: ["celestic"] },
  { name:"TM77 (Psych Up)", types: ["celestic"] },
  { name:"Duskull, Aron, or Spheal", types: ["pokemon"] }
];
bingoList[12] = [
  { name:"Defeat all 7 trainers in Galactic Eterna Building", types: ["missable"] },
  { name:"Defeat 8 Hikers", types: ["class"] },
  { name:"Defeat all 6 trainers in Fantina’s gym", types: ["missable"] },
  { name:"Enter Amity Square", types: ["amity"] },
  { name:"Azumarill, Seel, or Slowpoke", types: ["pokemon"] }
];
bingoList[13] = [
  { name:"15 different Pokémon owned", types: ["pkmn"] },
  { name:"A Pokémon with 4 non-TM status moves", types: ["hms"] },
  { name:"Matchup Checker App", types: ["marsh"] },
  { name:"5 rematches with trainers", types: ["rematch"] },
  { name:"Larvitar, Gible, or Bagon", types: ["pokemon"] }
];
bingoList[14] = [
  { name:"Hatch a Pokémon from an egg", types: ["hatch"] },
  { name:"A Pokémon with a stat-related ability", types: ["ability"] },
  { name:"Defeat all 8 trainers on Cycling Road", types: ["trainers"] },
  { name:"3 battles inside Pokémon Centers", types: ["center"] },
  { name:"Absol, Stunky, or Glameow", types: ["pokemon"] }
];
bingoList[15] = [
  { name:"A Pokémon with 4 STAB moves", types: ["stab"] },
  { name:"A Pokémon with red HP", types: ["endgame"] },
  { name:"Defeat all 9 trainers on Route 214", types: ["trainers"] },
  { name:"A Pokémon with a weather-related ability", types: ["ability"] },
  { name:"Battle a Legendary Pokémon", types: ["legend"] },
  { name:"Snover, Sneasel, or Gligar", types: ["pokemon"] }
];
bingoList[16] = [
  { name:"A Pokémon weighing at least 300 lbs", types: ["heavy"] },
  { name:"A Pokémon with a non-HM 2-turn move", types: ["two"] },
  { name:"Defeat all 8 trainers in Lost Tower", types: ["trainers"] },
  { name:"Defeat the maids at Mr. Backlot’s Mansion", types: ["mansion"] },
  { name:"Buneary, Aipom, or Lickitung", types: ["pokemon"] }
];
bingoList[17] = [
  { name:"3 baby Pokémon", types: ["baby"] },
  { name:"Use a stone to evolve a Pokémon", types: ["evolve"] },
  { name:"12 Pokétch Apps", types: ["poketch"] },
  { name:"A Pokémon with a status-related ability", types: ["ability"] },
  { name:"Haunter, Murkrow, or Misdreavus", types: ["pokemon"] }
];
bingoList[18] = [
  { name:"Land a move with at most 70% accuracy", types: ["miss"] },
  { name:"Train a Pokémon to Level 45", types: ["raise"] },
  { name:"Participate in a Contest", types: ["contest"] },
  { name:"Earn a reward from the Pokémon News Press", types: ["news"] },
  { name:"Meditite, Bronzor, or Girafarig", types: ["pokemon"] }
];
bingoList[19] = [
  { name:"Teach 4 TMs to the same Pokémon", types: ["tms"] },
  { name:"$50,000", types: ["money"] },
  { name:"No money on hand", types: ["money"] },
  { name:"Don’t use X items", types: ["instant"] },
  { name:"Finneon, Remoraid, Goldeen, or Barboach", types: ["pokemon"] }
];
bingoList[20] = [
  { name:"A Pokémon with an item-related ability", types: ["ability"] },
  { name:"All Pokémon of only one gender", types: ["instant"] },
  { name:"Fen Badge", types: ["surf"] },
  { name:"Footprint Ribbon", types: ["footprint"] },
  { name:"Carnivine, Skorupi, or Croagunk", types: ["pokemon"] }
];
bingoList[21] = [
  { name:"10 rematches with trainers", types: ["rematch"] },
  { name:"25 TMs", types: ["tms"] },
  { name:"HM03 (Surf)", types: ["surf"] },
  { name:"A Pokemon with an evasion boosting move", types: ["move"] },
  { name:"Onix, Scyther, or Feebas", types: ["pokemon"] }
];
bingoList[22] = [
  { name:"A Pokémon with each different type", types: ["types"] },
  { name:"Stop starter evolving 3 times", types: ["raise"] },
  { name:"20 different Pokémon owned", types: ["pkmn"] },
  { name:"Evolve 5 different Pokémon", types: ["evolve"] },
  { name:"Togepi, Riolu, Porygon, or Eevee", types: ["pokemon"] }
];
bingoList[23] = [
  { name:"Use Struggle", types: ["pp"] },
  { name:"4 Pokémon with adjacent National Dex numbers", types: ["dex"] },
  { name:"Catch a Pokémon while Surfing", types: ["surf"] },
  { name:"TM48 (Skill Swap)", types: ["canalavetm"] },
  { name:"Dialga, Palkia, or Giratina", types: ["pokemon"] }
];
bingoList[24] = [
  { name:"Hit 5 times with a multi-hit move", types: ["skilllink"] },
  { name:"Defeat all 9 trainers on Route 213", types: ["surf"] },
  { name:"3 Pokémon in the same evolution chain", types: ["evolve"] },
  { name:"Get all 3 TMs in Oreburgh Gate", types: ["surf"] },
  { name:"Black Belt, Expert Belt, or Focus Sash", types: ["belts"] }
];
bingoList[25] = [
  { name:"Defeat all 11 trainers in Route 210’s fog", types: ["fog"] },
  { name:"Digger Drill", types: ["underground"] },
  { name:"Don’t use Repels", types: ["instant"] },
  { name:"Defeat all 3 trainers in Fuego Ironworks", types: ["surf"] },
  { name:"Complete Mira’s sidequest", types: ["sidequest"] }
];
