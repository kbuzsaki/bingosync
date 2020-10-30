var bingoGenerator = require("./generators/generator_bases/srl_generator_v5.js");

var bingoList = [];
bingoList[1] = [
  { name: "Cut a tree in 5 locations", types: ["Static"] },
  { name: "Make a Pokéblock", types: ["Static"] },
  { name: "Sit at the TV Mauville desk and say “Hi mom!”", types: ["Static"] },
  { name: "Sit in 10 different chairs", types: ["Static"] },
  { name: "Water a berry", types: ["Static"] },
  { name: "Relax in the Hot Springs", types: ["Static"] },
  { name: "Obtain 4 different drink items", types: ["Items"] },
];
bingoList[2] = [
  { name: "Hop 69 Times", types: ["Static"] },
  { name: "Talk to the Mossy Rock", types: ["Static"] },
  { name: "4 Stars in Berry Picker", types: ["Static"] },
  { name: "Super Train A Pokemon", types: ["Static"] },
  { name: "Talk to 10 overworld Pokémon", types: ["Static"] },
  { name: "Read a sign in 10 different locations", types: ["Static"] },
];
bingoList[3] = [
  { name: "Obtain a Ribbon", types: ["Static"] },
  { name: "Smash 10 rocks", types: ["Static"] },
  { name: "Get the Contest Costume", types: ["Static"] },
  { name: "Catch 2 Pokémon with Different Rods", types: ["Catching"] },
  { name: "Obtain 3 Mega Stones", types: ["Items"] },
  { name: "Obtain 5 different Poké Balls", types: ["Items"] },
  { name: "Buy 3 TMs", types: ["Items"] },
  { name: "Do an Inverse Battle", types: ["Battling"] },
  { name: "Activate 3 Different Berries in Battle", types: ["Battling"] },
  { name: "Inflict a status on a Pokémon", types: ["Moves"] },
  { name: "Have your team read ‘B’ ‘I’ ‘N’ ‘G’ ‘O’ ‘!’", types: ["Static"] },
  { name: "Talk to Lanette at her House", types: ["Static"] },
  { name: "Get 2 different items that contain the word “Max”", types: ["Items"] },
];
bingoList[4] = [
  { name: "Release your Starter before Lv13", types: ["Static"] },
  { name: "Sell $30,000 worth of goods in one exchange", types: ["Items"] },
  { name: "Break all 9 ash piles on Route 113", types: ["Battling"] },
  { name: "Win a Horde Battle", types: ["Battling"] },
  { name: "Make a Secret Base with 3 Objects", types: ["Static"] },
  { name: "Obtain 6 Soda Pops from the Seashore House", types: ["Battling"] },
  { name: "Boost a stat to +6 in battle”", types: ["Battling"] },
];
bingoList[5] = [
  { name: "Cancel an Evolution", types: ["Static"] },
  { name: "Cycling Road in under 15 sec", types: ["Static"] },
  { name: "First Room of Trick House", types: ["Static"] },
  { name: "Complete the Winstrates House", types: ["Battling"] },
  { name: "Obtain 2 Dolls that share a type", types: ["Static"] },
  { name: "Navigate terrains exclusive to each bike", types: ["Static"] },
  { name: "Make a Secret Base in 3 different terrains", types: ["Static"] },
  { name: "Catch a Pokémon in 3 different caves", types: ["Catching"] },
  { name: "Sneak up on a Pokémon in 3 unique environments", types: ["Catching"] },
  { name: "Obtain the Yellow Flute", types: ["Items"] },
  { name: "Outspeed a Pokémon using a Quick Claw", types: ["Items"] },
  { name: "Obtain 3 type-boosting items", types: ["Items"] },
  { name: "Pick up 15 hidden items", types: ["Items"] },
  { name: "KO a Pokémon with weather", types: ["Moves"] },
  { name: "Teach 1 Move by Move Tutor", types: ["Moves"] },
];
bingoList[6] = [
  { name: "Complete a Contest", types: ["Static"] },
  { name: "Get a Pokémon with 200+ Happiness", types: ["Battling"] },
  { name: "Read 10 different Trainer Tips", types: ["Static"] },
  { name: "Buy an item with Poké Miles", types: ["Grinding"] },
  { name: "Obtain 15 TMs", types: ["Items"] },
];
bingoList[7] = [
  { name: "Appear on BuzzNav", types: ["Static"] },
  { name: "Battle 4 trainers in the Mimic Circle", types: ["Battling"] },
  { name: "Catch 5 different Pokémon with a held item", types: ["Catching"] },
  { name: "Obtain 10 different berries", types: ["Items"] },
  { name: "Teach 1 Move via Move Maniac", types: ["Moves"] },
  { name: "Hit a multi-hit move 5 times", types: ["Battling"] },
  { name: "Get Interviewed by Gabby and Ty", types: ["Battling"] },
  { name: "Boost your evasion", types: ["Battling"] },
  { name: "No Damage Dealing moves on a Pokémon", types: ["Moves"] },
  { name: "Battle all trainers on Route 103", types: ["Battling"] },
  { name: "Obtain 5 Mega Stones", types: ["Items"] },
];
bingoList[8] = [
  { name: "Catch a Pokemon with 1+ Stars of Potential from Dexnav", types: ["Static"] },
  { name: "Full Party No Duplicate Types", types: ["Catching"] },
  { name: "Use an attack with the Metronome at max power", types: ["Battling"] },
  { name: "Fight both breeders on Route 117", types: ["Battling"] },
  { name: "Obtain a Pokémon in 5 different towns", types: ["Catching"] },
  { name: "Complete the Village Sub Combo in 1 Battle", types: ["Battling"] },
  { name: "Battle 5 trainers while surfing", types: ["Battling"] },
  { name: "Have 2 Pokémon with a status condition", types: ["Moves"] },
];
bingoList[9] = [
  { name: "Back-to-back Critical Hits", types: ["Battling"] },
  { name: "Catch a Pokémon from each generation", types: ["Catching"] },
  { name: "Revive a Fossil", types: ["Static"] },
  { name: "Battle 5 fishermen", types: ["Battling"] },
  { name: "Have 5 Different NPCs Heal your Party (No Centers)", types: ["Static"] },
  { name: "Collect all the berries in the Berry Master’s Garden", types: ["Items"] },
];
bingoList[10] = [
  { name: "Fight 3 Ruin Maniacs", types: ["Battling"] },
  { name: "No Pokémon in PC", types: ["Catching"] },
  { name: "Catch a Pokémon that has a unique form (megas don't count)", types: ["Catching"] },
  { name: "Own a Pokemon of each type", types: ["Catching"] },
  { name: "Catch 5 different Pokémon with dual typing", types: ["Catching"] },
  { name: "Obtain TM65 (Shadow Claw)", types: ["Items"] },
  { name: "Obtain TM06 (Toxic)", types: ["Items"] },
  { name: "Get a Pokémon with 0 Happiness", types: ["Battling"] },
  { name: "Do 5 Double Battles", types: ["Battling"] },
  { name: "Defeat a Gym Leader with a Pokémon of their type", types: ["Battling"] },
  { name: "Use Struggle", types: ["Moves"] },
];
bingoList[11] = [
  { name: "Catch a Relaxed Pokémon", types: ["Catching"] },
  { name: "Evolve a Pokemon that Normally Evolves Via Trade", types: ["Catching"] },
  { name: "See 2 Weather Effects in One Battle", types: ["Moves"] },
  { name: "Collect 3 Eggs", types: ["Static"] },
];
bingoList[12] = [
  { name: "Obtain 4 Gen 4 Pokémon", types: ["Catching"] },
  { name: "Catch 5 different Water-type Pokémon", types: ["Catching"] },
  { name: "Catch 3 different Pokémon that start with a vowel", types: ["Catching"] },
  { name: "Catch a Fairy-type Pokémon", types: ["Catching"] },
  { name: "Turn in the Intriguing Stone to Mr. Stone", types: ["Items"] },
  { name: "KO Yourself", types: ["Moves"] },
  { name: "End with $0", types: ["Grinding"] },
  { name: "Refuse to travel with Rival", types: ["Grinding"] },
];
bingoList[13] = [
  { name: "Catch a Pokémon in the Scorched Slab", types: ["Catching"] },
  { name: "Battle a trainer in Sea Mauville", types: ["Battling"] },
  { name: "Evolve a Pokémon across a generation", types: ["Grinding"] },
];
bingoList[14] = [
  { name: "Sell no items", types: ["Static"] },
  { name: "Obtain 6 Kelpsy Berries", types: ["Items"] },
  { name: "Catch an ORAS Gym Leader’s Pokémon", types: ["Catching"] },
];
bingoList[15] = [
  { name: "Catch a Pokémon in the Safari Zone", types: ["Catching"] },
  { name: "Catch 5 Normal Type Pokemon", types: ["Catching"] },
  { name: "Catch a Dragon-type Pokémon", types: ["Catching"] },
  { name: "Catch 2 different Pokémon with regional forms", types: ["Catching"] },
  { name: "Sleep in your Secret Base", types: ["Items"] },
  { name: "Use a super-effective Hidden Power", types: ["Battling"] },
  { name: "4 STAB Moves on 1 Pokémon", types: ["Moves"] },
];
bingoList[16] = [
  { name: "Catch 1 Pokémon with 1 Syllable", types: ["Catching"] },
  { name: "Finish on the crane on top of Sea Mauville", types: ["Static"] },
  { name: "Catch a Fossil Pokémon", types: ["Catching"] },
  { name: "Obtain a Pokémon with a Gigantamax Form", types: ["Catching"] },
];
bingoList[17] = [
  { name: "20 Pokémon Owned", types: ["Catching"] },
];
bingoList[18] = [
  { name: "Buy no items outside of specialty shops", types: ["Items"] },
  { name: "Catch a Baby Pokemon Introduced In Gen 2", types: ["Catching"] },
  { name: "Obtain an Eviolite", types: ["Items"] },
];
bingoList[19] = [
  { name: "Have $42069 at any point", types: ["Items"] },
];
bingoList[20] = [
  { name: "Use No Items In Battle", types: ["Items"] },
  { name: "Catch Any Box Cover Legendary", types: ["Catching"] },
  { name: "Catch A Pokémon owned by Steven Stone in any game", types: ["Catching"] },
  { name: "Evolve a Pokémon with a Stone", types: ["Items"] },
  { name: "Evolve 3 Pokémon", types: ["Grinding"] },
];
bingoList[21] = [
  { name: "Play the Lottery", types: ["Static"] },
];
bingoList[22] = [
  { name: "Use a Mega Stone in battle", types: ["Battling"] },
  { name: "Obtain an Eeveelution", types: ["Catching"] },
];
bingoList[23] = [
  { name: "Obtain a Gold Crown in an area", types: ["Catching"] },
];
bingoList[24] = [
  { name: "Don’t jump off any ledges", types: ["Static"] },
];
bingoList[25] = [
  { name: "Surf on Wailmer, Kyogre, or Sharpedo", types: ["Catching"] },
];
