var bingoGenerator = require("./generators/generator_bases/srl_generator_v5_blackout.js");

var bingoList = [];
bingoList[1] = [
  { name: "Use a Poison Mushroom to override a status", types: ["Item"] },
  { name: "Catch a wild fused Poke", types: ["Catch"] },
  { name: "Heal a status with a held berry", types: ["Battle"] },
  { name: "Inflict an opposing Poke with poison", types: ["Battle"] },
  { name: "Inflict an opposing Poke with sleep", types: ["Battle"] },
  { name: "Inflict an opposing Poke with paralyze", types: ["Battle"] },
  { name: "Evolve a Poke before defeating Brock", types: ["Evolve"] },
];
bingoList[2] = [
  { name: "Defeat all Pewter Gym trainers (3)", types: ["Gym"] },
  { name: "Evolve a Poke to Stage 3", types: ["Evolve"] },
  { name: "Have 20 unfused Pokes", types: ["Catch"] },
  { name: "Have fused 10 Pokes", types: ["Fuse"] },
  { name: "Use DNA Reverser on 5 different Pokes", types: ["Fuse"] },
  { name: "Split exp 6 ways (no Exp Share/All)", types: ["Battle"] },
  { name: "Defeat all trainers on Route 3 (8)", types: ["Battle"] },
];
bingoList[3] = [
  { name: "Revive a fossil", types: ["Gift"] },
  { name: "Fully evolve 5 Pokes", types: ["Evolve"] },
  { name: "Fuse two diff pokes to make one with 1 type and one or no weakness", types: ["Fuse"] },
  { name: "Obtain a Moon Stone from the dancing Clefairy", types: ["Item","Time"] },
  { name: "Release your starting Poke before it's level 11", types: ["Deny"] },
  { name: "Use a Rare Candy to revive a fainted Poke", types: ["Item"] },
  { name: "Do Mt. Moon without using Repel items", types: ["Deny"] },
];
bingoList[4] = [
  { name: "Defeat a Gym Leader with only Poison Type Pokes", types: ["Type"] },
  { name: "Defeat a Gym Leader with only Flying Type Pokes", types: ["Type"] },
  { name: "Defeat a Gym Leader with only Normal Type Pokes", types: ["Type"] },
  { name: "Defeat a Gym Leader with only Water Type Pokes", types: ["Type"] },
  { name: "Defeat all Cerulean Gym trainers (3)", types: ["Gym"] },
  { name: "Defeat all trainers on Route 25 (8)", types: ["Battle"] },
  { name: "Hatch an egg", types: ["Gift"] },
];
bingoList[5] = [
  { name: "Get the $2000 item pickup on Route 11", types: ["Item"] },
  { name: "Learn 10 different moves from tutors", types: ["Move"] },
  { name: "Fuse two diff pokes to make one with 2 types and six or seven weaknesses", types: ["Fuse"] },
  { name: "Inflict an opposing Poke with burn", types: ["Battle"] },
  { name: "Use a 4x super effective damaging move", types: ["Battle"] },
  { name: "Use a stone to evolve a Poke", types: ["Evolve"] },
  { name: "Defeat all trainers on Route 11 (7)", types: ["Battle"] },
];
bingoList[6] = [
  { name: "Complete 5 Hotel Quests", types: ["Hotel"] },
  { name: "Defeat all Vermillion Gym trainers (4)", types: ["Gym"] },
  { name: "Have 20 berries in your inventory", types: ["Item"] },
  { name: "Catch a Poke with fishing", types: ["Catch"] },
  { name: "Revive two fossils", types: ["Gift"] },
  { name: "Obtain 10 hidden items on the overworld", types: ["Hidden"] },
  { name: "Hit 5 times with a multi-hit move", types: ["Move"] },
];
bingoList[7] = [
  { name: "Complete the Porygon Event", types: ["Gift"] },
  { name: "Hatch two eggs", types: ["Gift"] },
  { name: "Complete the Cerulean bike race", types: ["Item"] },
  { name: "Obtain the Honedge gift", types: ["Gift"] },
  { name: "Catch 10 Stage 1 Pokes", types: ["Catch"] },
  { name: "Do Rock Tunnel without using Repel items", types: ["Deny"] },
  { name: "Defeat all trainers on Route 9 (9)", types: ["Battle"] },
];
bingoList[8] = [
  { name: "Defeat a Gym Leader with only Fire Type Pokes", types: ["Type"] },
  { name: "Defeat a Gym Leader with only Grass Type Pokes", types: ["Type"] },
  { name: "Defeat a Gym Leader with only Bug Type Pokes", types: ["Type"] },
  { name: "Defeat a Gym Leader with only Ground Type Pokes", types: ["Type"] },
  { name: "Defeat a Gym Leader with only Psychic Type Pokes", types: ["Type"] },
  { name: "Defeat all Celedon Gym trainers (9)", types: ["Gym"] },
  { name: "Train a gift Poke to level 30 (no super splicer)", types: ["Battle"] },
];
bingoList[9] = [
  { name: "Defeat all trainers in Rocket Sewer (14)", types: ["Battle"] },
  { name: "Defeat all trainers on Route 8 (14)", types: ["Battle"] },
  { name: "Do Rocket Sewer without using Repel items", types: ["Deny"] },
  { name: "Obtain a Karate Dojo gift Poke", types: ["Gift"] },
  { name: "Catch or faint both Snorlax encounters", types: ["Overworld"] },
  { name: "Unlock Dark Pulse tutor", types: ["Move"] },
  { name: "Have 10 different Pokeball types in inventory", types: ["Item"] },
];
bingoList[10] = [
  { name: "Defeat all Fuscia Gym trainers (7)", types: ["Gym"] },
  { name: "Defeat Koga before Erika", types: ["Gym"] },
  { name: "Catch 2 Pokes from Safari Zone", types: ["Catch"] },
  { name: "Toss a Lucky Egg", types: ["Hotel","Item"] },
  { name: "Revive three fossils", types: ["Gift"] },
  { name: "Defeat all trainers on Route 17 (10)", types: ["Battle"] },
  { name: "Have your Poke become confused by their own move", types: ["Move"] },
];
bingoList[11] = [
  { name: "Capture overworld Volcarona encounter", types: ["Overworld"] },
  { name: "Inflict an opposing Poke with freeze", types: ["Battle"] },
  { name: "Have a Poke with 4 STAB damaging moves", types: ["Move"] },
  { name: "Defeat a Gym Leader using only HM Moves", types: ["Battle"] },
  { name: "Have your Poke faint due to its own move", types: ["Move"] },
  { name: "Collect all red items in Silph Co. (18)", types: ["Battle"] },
  { name: "Hit with a 70 or less damaging accuracy move", types: ["Move"] },
];
bingoList[12] = [
  { name: "Defeat a Gym Leader with only Dragon Type Pokes", types: ["Type"] },
  { name: "Defeat a Gym Leader with only Steel Type Pokes", types: ["Type"] },
  { name: "Defeat a Gym Leader with only Electric Type Pokes", types: ["Type"] },
  { name: "Defeat a Gym Leader with only Rock Type Pokes", types: ["Type"] },
  { name: "Defeat all Saffron Gym trainers (6)", types: ["Gym"] },
  { name: "Defeat Sabrina before Koga", types: ["Gym"] },
  { name: "Obtain 6 items with Flute in their name", types: ["Item"] },
];
bingoList[13] = [
  { name: "Complete 10 Hotel Quests", types: ["Hotel"] },
  { name: "Defeat Sabrina before Erika and Koga", types: ["Gym"] },
  { name: "Obtain 3 HM replacement items", types: ["Item"] },
  { name: "Catch or faint Absol encounter", types: ["Overworld"] },
  { name: "Have 3 Pokes at level 40 or higher", types: ["Catch"] },
  { name: "Rematch 15 different trainers", types: ["Battle"] },
  { name: "Complete 5 different trades (no wonder trade)", types: ["Trade"] },
];
bingoList[14] = [
  { name: "Win 10 Double Battles (no Option setting)", types: ["Battle"] },
  { name: "Obtain the Lapras gift Poke", types: ["Gift"] },
  { name: "Defeat all Cinnabar Gym trainers (7)", types: ["Gym"] },
  { name: "Obtain all 3 fishing rods", types: ["Item"] },
  { name: "Catch 10 Stage 2 Pokes", types: ["Catch"] },
  { name: "Defeat all Rockets in Mt. Ember (10)", types: ["Battle"] },
  { name: "Breed an egg and hatch it", types: ["Gift"] },
];
bingoList[15] = [
  { name: "Defeat a Trainer w/o Using Damaging Moves", types: ["Battle"] },
  { name: "Defeat Zapmolcuno", types: ["Zapmolcuno"] },
  { name: "Obtain 15 different TMs", types: ["TMs"] },
  { name: "Catch or faint Moltres encounter", types: ["Overworld"] },
  { name: "Catch a Poke using all three fishing rods", types: ["Catch"] },
  { name: "Have 6 different HM moves learned by your party Pokes", types: ["Move"] },
  { name: "Defeat a gym leader with a baby stage Poke", types: ["Deny"] },
];
bingoList[16] = [
  { name: "Defeat a Gym Leader with only Ice Type Pokes", types: ["Type"] },
  { name: "Defeat a Gym Leader with only Fighting Type Pokes", types: ["Type"] },
  { name: "Defeat a Gym Leader with only Dark Type Pokes", types: ["Type"] },
  { name: "Defeat a Gym Leader with only Fairy Type Pokes", types: ["Type"] },
  { name: "Defeat a Gym Leader with only Ghost Type Pokes", types: ["Type"] },
  { name: "Catch or faint Zapdos encounter", types: ["Overworld"] },
  { name: "Defeat all Viridian Gym trainers (9)", types: ["Gym"] },
];
bingoList[17] = [
  { name: "Catch or faint Articuno encounter", types: ["Overworld"] },
  { name: "Defeat a Poke using Struggle", types: ["Move"] },
  { name: "Have a Poke with 4 moves learned from TMs/Tutors", types: ["Move"] },
  { name: "Defeat all Trainers on Routes 26 and 27 (16)", types: ["Battle"] },
  { name: "Rematch 30 different Trainers", types: ["Battle"] },
  { name: "Fully evolve 10 different species of Pokes", types: ["Evolve"] },
  { name: "Reach Cinnabar Island from Seafoam Island", types: ["Deny"] },
];
bingoList[18] = [
  { name: "Defeat Zapmolcuno without multi-target moves", types: ["Zapmolcuno","Move"] },
  { name: "Have all 18 types among your caught Pokes", types: ["Type"] },
  { name: "Have 12 different types among your party Pokes", types: ["Types"] },
  { name: "Complete 10 different trades (no wonder trade)", types: ["Trade"] },
  { name: "Use a Master Ball to catch a Poke on Route 1", types: ["Catch"] },
  { name: "Defeat a trainer only using 2-turn moves", types: ["Move"] },
  { name: "Defeat a trainer only using Counter or Mirror Coat", types: ["Deny"] },
];
bingoList[19] = [
  { name: "Catch or faint Entei encounter", types: ["Overworld"] },
  { name: "See a successful 5th turn Rollout", types: ["Move"] },
  { name: "Defeat Zapmolcuno before Blaine", types: ["Zapmolcuno"] },
  { name: "Defeat all trainers in a gym with only 1 Poke in your party", types: ["Deny"] },
  { name: "Catch or faint Mimikyu encounter", types: ["Overworld"] },
  { name: "Buy and release three black market pokes", types: ["Deny"] },
  { name: "Obtain Tequila and use it on a level 21 or higher poke in battle", types: ["Item"] },
];
bingoList[20] = [
  { name: "Complete 15 Hotel Quests", types: ["Hotel"] },
  { name: "Get to Fuscia City without using a bike", types: ["Deny"] },
  { name: "Catch and/or faint 2 overworld legendary encounters", types: ["Overworld"] },
  { name: "Use level evolution at level 30+ for a trade/happy evolve Poke", types: ["Evolve"] },
  { name: "Catch 5 Pokes in Safari Zone", types: ["Catch"] },
  { name: "Have 6 non-egg gift Pokes in your party (fossils okay)", types: ["Gift"] },
  { name: "Catch 10 Stage 3 Pokes", types: ["Catch"] },
];
bingoList[21] = [
  { name: "Use stones to evolve 5 different Pokes", types: ["Evolve"] },
  { name: "Have a Poke with exactly 50 Hp", types: ["Stat"] },
  { name: "Have a Poke with exactly 50 Attack", types: ["Stat"] },
  { name: "Have a Poke with exactly 50 Defense", types: ["Stat"] },
  { name: "Have a Poke with exactly 50 Special", types: ["Stat"] },
  { name: "Have a Poke with exactly 50 Special Defense", types: ["Stat"] },
  { name: "Have a Poke with exactly 50 Speed", types: ["Stat"] },
];
bingoList[22] = [
  { name: "Obtain 30 different TMs", types: ["Item"] },
  { name: "Catch and/or faint 3 overworld legendary encounters", types: ["Overworld"] },
  { name: "Have 5 eggs in your party at one time", types: ["Egg"] },
  { name: "Fuse two different baby pokes together", types: ["Fuse"] },
  { name: "Have a Poke with 4 damaging moves its weak to", types: ["Move"] },
  { name: "Have a Poke with only the Flying type", types: ["Type"] },
  { name: "Do Victory Road without Repel items", types: ["Deny"] },
];
bingoList[23] = [
  { name: "Have a Poke with four maxed stat increases in a battle", types: ["Move"] },
  { name: "Complete 15 different trades (no wonder trade)", types: ["Trade"] },
  { name: "Use Baton Pass while the Poke has a maxed stat increase", types: ["Move"] },
  { name: "Defeat a Poke with Perish Song/Destiny Bond/OHKO Move", types: ["Move"] },
  { name: "Fuse two different legendary pokes together", types: ["Fuse"] },
  { name: "Defeat a trainer's last Poke while yours is asleep (1v1)", types: ["Status"] },
  { name: "Have at least $100,000", types: ["Money"] },
];
bingoList[24] = [
  { name: "Defeat Elite 4 Champion", types: ["Gym","Credits"] },
  { name: "Have a Poke with a stat value lower than its level", types: ["Stat"] },
  { name: "Defeat Robot R.E.D.", types: ["Credits"] },
  { name: "Release a level 60 or higher Poke (no super splicer)", types: ["Deny"] },
  { name: "Catch and/or faint 4 overworld legendary encounters", types: ["Overworld"] },
  { name: "Defeat an Elite 4 member without swapping your Poke", types: ["Deny"] },
  { name: "Defeat an Elite 4 member without one of your Pokes fainting", types: ["Deny"] },
];
bingoList[25] = [
  { name: "Have 50 Pokes with different type combos", types: ["Catch"] },
  { name: "Defeat Robot R.E.D. without statuses", types: ["Credits"] },
  { name: "See an opponent's Poke use Struggle", types: ["Deny"] },
  { name: "Have 100 unfused Pokes", types: ["Catch"] },
  { name: "Have 50 fused Pokes", types: ["Fuse"] },
  { name: "Fuse two diff pokes to make one with 2 types and one or no weakness", types: ["Fuse"] },
  { name: "Fuse two diff pokes to make one with 1 type and four or five weaknesses", types: ["Fuse"] },
];
