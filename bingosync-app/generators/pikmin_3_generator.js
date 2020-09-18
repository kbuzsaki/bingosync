var bingoGenerator = require("./generators/generator_bases/srl_generator_v5.js");

var bingoList = [];
bingoList[1] = [
  { name: "2 fruits in GoH", types: [] },
  { name: "Grow 100 reds", types: [] },
  { name: "Kill a Dwarf Bulborb without thowing", types: [] },
  { name: "Collect 5 1 pellets in GoH", types: [] },
  { name: "Fall out of bounds in GoH", types: [] },
];
bingoList[2] = [
  { name: "Kill 2 Skutterchucks without any pikmin", types: [] },
  { name: "Day 1: Kill all your pikmin before going to Alph's tutorial", types: ["dayone"] },
  { name: "Grow 100 rocks", types: [] },
  { name: "Kill 2 Firey Blowhogs without red Pikmin", types: [] },
];
bingoList[3] = [
  { name: "DT Sunseed Berry", types: [] },
  { name: "Build the bridge to Mawdad swapless", types: [] },
  { name: "Collect 2 Wollywog corpses", types: [] },
  { name: "Collect an Arctic Cannon Larva corpse", types: [] },
];
bingoList[4] = [
  { name: "Start the day timer in DT before activating the Yellow Onion", types: [] },
  { name: "Collect the Armored Mawdad corpse", types: [] },
  { name: "Raise all(5) Climbing Sticks in the game", types: [] },
  { name: "Kill 8 Swarming Sheargrubs", types: [] },
];
bingoList[5] = [
  { name: "Activate the light in DT Bulbear cave", types: [] },
  { name: "Collect the Meerslug's corpse", types: [] },
  { name: "Metal Suit Z", types: ["upgrade"] },
];
bingoList[6] = [
  { name: "Heroine's Tear", types: [] },
  { name: "Grow 100 yellows", types: [] },
  { name: "Get to Meerslug swapless", types: [] },
  { name: "Kill all GoH enemies accessible on the first visit", types: [] },
];
bingoList[7] = [
  { name: "Defeat Mawdad without rocks", types: [] },
  { name: "Light the bulb in TR cave", types: [] },
  { name: "Scorch Guard", types: ["upgrade"] },
];
bingoList[8] = [
  { name: "Blue Juice: Make juice with Juicy Gaggle and Zest Bomb", types: [] },
  { name: "Anti-Electrifier", types: ["upgrade"] },
  { name: "Get Blonde imposter with 1 captain", types: [] },
  { name: "Hay pile in DT swapless", types: [] },
];
bingoList[9] = [
  { name: "Obtain 5 Spicy Sprays from berries", types: [] },
  { name: "5 fruits in Tropical Wilds", types: [] },
  { name: "Fall out of bounds in TR cave", types: [] },
  { name: "Defeat the 3 TR Orange Bulborbs without bombs", types: [] },
];
bingoList[10] = [
  { name: "Collect an Armored Cannon Larva corpse", types: [] },
  { name: "Use the Koppad camera to view 10 Pikmin drawings", types: [] },
  { name: "Skip the 2nd TR bridge without taking damage", types: ["trbridge"] },
  { name: "Have 19 Bomb Rocks at once", types: [] },
];
bingoList[11] = [
  { name: "Tremendous Sniffer", types: [] },
  { name: "Collect a citrus fruit in each area", types: [] },
  { name: "Get GoH Dusk Pustules without destroying the Electric Gates in the way", types: [] },
  { name: "Build the pot in GoH", types: [] },
];
bingoList[12] = [
  { name: "Build 2 bridges in TR", types: ["trbridge"] },
  { name: "Grow 100 wings", types: [] },
  { name: "5 Secret Files", types: ["secretfile"] },
  { name: "All 4 suit upgrades", types: ["upgrade"] },
];
bingoList[13] = [
  { name: "All GoH Sunseed Berries", types: [] },
  { name: "Collect all Scornet corpses dropped by the boss", types: [] },
  { name: "GoH Astringent Clump no wings", types: [] },
];
bingoList[14] = [
  { name: "Collect 4 fruits dropped by bosses or minibosses", types: [] },
  { name: "10 unique fruits", types: ["uniquefruit"] },
  { name: "Destroy 3 Dirt Walls in Distant Tundra", types: [] },
  { name: "Defeat Bulbear pre-Wing Onion in DT", types: [] },
];
bingoList[15] = [
  { name: "Defeat the DT Spotty Bulbear without bombs or Spicy Sprays", types: [] },
  { name: "Grow 100 blues", types: [] },
  { name: "Push 6 Paper Bags", types: ["paperbag"] },
  { name: "Kill one of each Bulborb type creature", types: [] },
];
bingoList[16] = [
  { name: "Kill both Shaggy Long Legs", types: [] },
  { name: "Kill Calcified Crushblat without bombs", types: [] },
  { name: "Push every box and bag in the game", types: ["paperbag"] },
  { name: "Defeat Burrowing Snagret without wings or bombs", types: [] },
  { name: "Collect two Peckish Aristocrab ", types: [] },
];
bingoList[17] = [
  { name: "Early Blues Impossible: Go to Blue Onion before rescuing Louie", types: [] },
  { name: "Collect Slapstick Crescent without bombs", types: [] },
  { name: "Kill a Shearwig", types: [] },
];
bingoList[18] = [
  { name: "Kill DT Shaggy Long Legs before exiting Brittany's cave normally", types: [] },
  { name: "Have 100 sprouts out at once", types: [] },
  { name: "Defeat Quaggled Mireclops without using wings", types: ["mireclops"] },
  { name: "Collect every pellet in TW", types: [] },
];
bingoList[19] = [
  { name: "Kill Mireclops rocks only", types: ["mireclops"] },
  { name: "End a day in FO with at least 6 more Pikmin than you started with", types: [] },
  { name: "Defeat Phosbat before using any wires", types: [] },
];
bingoList[20] = [
  { name: "Defeat Plasm Wraith", types: ["finalboss"] },
  { name: "Destroy all(6) Reinforced Walls in the game", types: [] },
  { name: "All Pikminology data files", types: [] },
];
bingoList[21] = [
  { name: "Destroy all(5) Dirt Walls in FO", types: [] },
  { name: "Build 10 bridges", types: [] },
  { name: "Collect 30 total fruits", types: [] },
];
bingoList[22] = [
  { name: "All GoH fruits", types: [] },
  { name: "All TR fruits", types: [] },
  { name: "Activate all Wires", types: [] },
];
bingoList[23] = [
  { name: "All Secret Files", types: ["secretfile"] },
  { name: "All fruits in DT", types: [] },
  { name: "1000 total Pikmin", types: [] },
];
bingoList[24] = [
  { name: "Day 1: Plant the 30 Pikmin Charlie starts with using Candypop buds", types: ["dayone"] },
  { name: "Defeat Plasm Wraith without destroying a hazard", types: ["FinalBoss"] },
  { name: "Finish the Plasm Wraith chase without winged Pikmin", types: [] },
];
bingoList[25] = [
  { name: "All fruits in TW", types: [] },
  { name: "Kill all enemies in FO (except Plasm Wraith)", types: [] },
  { name: "Build 15 bridges", types: [] },
  { name: "25 unique fruits", types: ["uniquefruit"] },
];
