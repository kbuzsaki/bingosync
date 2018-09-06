bingoGenerator = require("./generators/generator_bases/srl_generator_v5.js");

var bingoList = [];
bingoList[1] = [
   { name: "5 fights with a bow", types: ["Weapons"]},
   { name: "5 fights with a knife", types: ["Weapons"]},
   { name: "5 fights with a sword", types: ["Weapons"]},
   { name: "5 fights with a 2H sword", types: ["Weapons"]},
   { name: "5 fights with an axe", types: ["Weapons"]},
   { name: "5 fights with a 2H axe", types: ["Weapons"]},
   { name: "5 fights with a hammer", types: ["Weapons"]},
   { name: "5 fights with a spear", types: ["Weapons"]},
   { name: "5 fights with a staff", types: ["Weapons"]},
   { name: "5 fights with gloves", types: ["Weapons"]},
   { name: "5 fights with a flail", types: ["Weapons"]},
   { name: "Have 1 pet", types: ["Pet"]},
   { name: "Beat a boss with Larc", types: ["Boss","Dragon"]}
];

bingoList[2] = [
   { name: "Beat a boss with a knife", types: ["Weapons","Boss"]},
   { name: "Beat a boss with a sword", types: ["Weapons","Boss"]},
   { name: "Beat a boss with a 2H sword", types: ["Weapons","Boss"]},
   { name: "Beat a boss with an axe", types: ["Weapons","Boss"]},
   { name: "Beat a boss with a 2H axe", types: ["Weapons","Boss"]},
   { name: "Beat a boss with a hammer", types: ["Weapons","Boss"]},
   { name: "Beat a boss with a spear", types: ["Weapons","Boss"]},
   { name: "Beat a boss with a staff", types: ["Weapons","Boss"]},
   { name: "Beat a boss with gloves", types: ["Weapons","Boss"]},
   { name: "Beat a boss with a flail", types: ["Weapons","Boss"]},
   { name: "Harvest in the orchard", types: ["Orchard"]},
   { name: "Complete 10 events", types: ["Events","EventsF","EventsD","EventsJ"]},
   { name: "Place 10 artifacts", types: ["Land"]},
   { name: "Have 2 pets", types: ["Pet"]},
   { name: "Reach level 15", types: ["Level"]},
   { name: "Complete 1 Dragon events (splashscreen)", types: ["EventsD","Dragon"]},
   { name: "5 entries in the cactus diary", types: ["Events","Cactus","EventsF","EventsD","EventsJ"]},
   { name: "Land with max Shade", types: ["Land","Shade"]}
];

bingoList[3] = [
   { name: "Reach level 20", types: ["Level"]},
   { name: "Learn 5 abilities", types: ["Ability"]},
   { name: "Land with max Salamander", types: ["Land"]},
   { name: "Obtain chobin hood demihuman", types: ["Pet"]},
   { name: "10 entries in the cactus diary", types: ["Events","Cactus","EventsF","EventsD","EventsJ"]},
   { name: "Harvest in the orchard 5 times", types: ["Orchard"]},
   { name: "10 fights with a bow", types: ["Weapons"]},
   { name: "10 fights with a knife", types: ["Weapons"]},
   { name: "10 fights with a sword", types: ["Weapons"]},
   { name: "10 fights with a 2H sword", types: ["Weapons"]},
   { name: "10 fights with an axe", types: ["Weapons"]},
   { name: "10 fights with a 2H axe", types: ["Weapons"]},
   { name: "10 fights with a hammer", types: ["Weapons"]},
   { name: "10 fights with a staff", types: ["Weapons"]},
   { name: "10 fights with a spear", types: ["Weapons"]},
   { name: "10 fights with gloves", types: ["Weapons"]},
   { name: "10 fights with a flail", types: ["Weapons"]}
];

bingoList[4] = [
   { name: "Learn 5 STs", types: ["ST"]},
   { name: "Complete 15 events", types: ["Events","EventsF","EventsD","EventsJ"]},
   { name: "Place 15 artifacts", types: ["Land"]},
   { name: "Have 3 pets", types: ["Pet"]},
   { name: "Have a level 10 pet", types: ["Level","Pet"]},
   { name: "Land with max Wisp", types: ["Land"]},
   { name: "Beat a boss with Bud", types: ["Boss"]},
   { name: "Beat a boss with Lisa", types: ["Boss"]},
   { name: "Complete 1 Jumi events (splashscreen)", types: ["EventsJ","Jumi"]},
   { name: "Complete 2 Dragon events (splashscreen)", types: ["EventsD","Dragon"]},
   { name: "Looking Glass Tower/Two Pearls with no teleport gem", types: ["TeleGem","Fairy"]}
];

bingoList[5] = [
   { name: "Craft a weapon", types: ["Crafting"]},
   { name: "5 fights with an instrument", types: ["Weapons"]},
   { name: "Obtain goblin demihuman", types: ["Pet"]},
   { name: "Obtain tomato man demihuman", types: ["Pet"]},
   { name: "Land with max Aura", types: ["Land"]},
   { name: "Have 5 pets", types: ["Pet"]},
   { name: "Reach level 25", types: ["Level"]},
   { name: "Land with max Undine", types: ["Land"]},
   { name: "15 entries in the cactus diary", types: ["Events","Cactus","EventsF","EventsD","EventsJ"]},
   { name: "Beat a boss with an instrument", types: ["Weapons","Boss"]},
   { name: "Harvest in the orchard 10 times", types: ["Orchard"]},
   { name: "Beat a boss with Elazul", types: ["Boss","Jumi"]},
   { name: "Crush 25 crabs", types: ["Crabs","Pirate"]}
];

bingoList[6] = [
   { name: "Craft an instrument", types: ["Crafting"]},
   { name: "Create a golem", types: ["Crafting"]},
   { name: "Have 20,000 Lucre", types: ["Lucre"]},
   { name: "Land with max Gnome", types: ["Land"]},
   { name: "Land with max Dryad", types: ["Land"]}
];

bingoList[7] = [
   { name: "Complete 2 Jumi events (splashscreen)", types: ["EventsJ","Jumi"]},
   { name: "Complete 3 Dragon events (splashscreen)", types: ["EventsD","Dragon"]},
   { name: "Beat a boss with Daena", types: ["Boss","Fairy"]},
   { name: "Complete 1 Fairy events (splashscreen)", types: ["EventsF","Fairy"]},
   { name: "Beat a boss with only counterstrike", types: ["Boss"]}
];

bingoList[8] = [
   { name: "Learn 10 abilities", types: ["Ability"]},
   { name: "Complete 20 events", types: ["Events","EventsF","EventsD","EventsJ"]},
   { name: "10 fights with an instrument", types: ["Weapons"]},
   { name: "Have 4 pets", types: ["Pet"]},
   { name: "Land with max Jinn", types: ["Land"]}
];

bingoList[9] = [
   { name: "Place 20 artifacts", types: ["Land"]},
   { name: "Fail 1 event", types: ["Special","Fail"]},
   { name: "Harvest in the orchard 15 times", types: ["Orchard"]},
   { name: "Complete 2 Fairy events (splashscreen)", types: ["EventsF","Fairy"]}
];

bingoList[10] = [
   { name: "Reach level 30", types: ["Level"]},
   { name: "Harvest in the orchard 20 times", types: ["Orchard"]},
   { name: "Complete 3 Jumi events (splashscreen)", types: ["EventsJ","Jumi"]}
];

bingoList[11] = [
   { name: "Obtain mad mallard demihuman", types: ["Pet"]},
   { name: "Reach level 10", types: ["Level"]},
   { name: "20 entries in the cactus diary", types: ["Events","Cactus","EventsF","EventsD","EventsJ"]},
   { name: "Complete 4 Dragon events (splashscreen)", types: ["EventsD","Dragon"]},
   { name: "Complete 3 Fairy events (splashscreen)", types: ["EventsF","Fairy"]}
];

bingoList[12] = [
   { name: "Have 50,000 Lucre", types: ["Lucre"]},
   { name: "Learn 10 STs", types: ["ST"]},
   { name: "Beat a boss with Sierra", types: ["Boss","Dragon"]}
];

bingoList[13] = [
   { name: "Complete 4 Fairy events (splashscreen)", types: ["EventsF","Fairy"]},
   { name: "Beat a boss with only counterattack", types: ["Boss"]},
   { name: "Have a level 15 pet", types: ["Level","Pet"]}
];

bingoList[14] = [
   { name: "Obtain sahagin demihuman", types: ["Pet"]},
   { name: "Obtain succubus demihuman", types: ["Pet"]},
   { name: "Obtain narcissos demihuman", types: ["Pet"]},
   { name: "Beat a boss with Pearl", types: ["Boss","Jumi"]},
   { name: "Complete 4 Jumi events (splashscreen)", types: ["EventsJ","Jumi"]}
];

bingoList[15] = [
   { name: "Complete 25 events", types: ["Events","EventsF","EventsD","EventsJ"]},
   { name: "Fail 3 events", types: ["Special","Fail"]},
   { name: "Have a level 20 pet", types: ["Level","Pet"]}
];

bingoList[16] = [
   { name: "Learn 15 abilities", types: ["Ability"]},
   { name: "Reach level 35", types: ["Level"]},
   { name: "Obtain 2 demihumans", types: ["Pet"]},
   { name: "Beat a boss with Escad", types: ["Boss","Fairy"]},
   { name: "Complete All Dragon events", types: ["EventsD","Dragon"]},
   { name: "Complete Seeing Double", types: ["Special","Events","Shade"]}
];

bingoList[17] = [
   { name: "Have 75,000 Lucre", types: ["Lucre"]},
   { name: "Complete All Fairy events", types: ["EventsF","Fairy"]},
   { name: "Kill 2 NPCs", types: ["Special","Kill"]}
];

bingoList[18] = [
   { name: "25 entries in the cactus diary", types: ["Events","Cactus","EventsF","EventsD","EventsJ"]},
   { name: "Complete All Jumi events", types: ["EventsJ","Jumi"]},
   { name: "Complete The Seven Wisdoms", types: ["Special","Events"]},
   { name: "Kill all bunnies", types: ["Special","Boss"]}
];

bingoList[19] = [
   { name: "Complete 30 events", types: ["Events","EventsF","EventsD","EventsJ"]},
   { name: "Legend of Mana", types: ["Events"]},
   { name: "Complete All Gilbert events", types: ["Special","Events","Gilbert"]}
];

bingoList[20] = [
   { name: "Reach level 40", types: ["Level"]},
   { name: "Have 100,000 Lucre", types: ["Lucre"]},
   { name: "Beat a boss with Blackpearl", types: ["Boss","Jumi"]},
   { name: "Complete All Niccolo events", types: ["Special","Events","Niccolo"]},
   { name: "Legend of Chumpy", types: ["Special","Jumi"]}
];

bingoList[21] = [
   { name: "Complete 35 events", types: ["Events","EventsF","EventsD","EventsJ"]},
   { name: "End with 0 Lucre", types: ["Lucre"]},
   { name: "30 entries in the cactus diary", types: ["Events","Cactus","EventsF","EventsD","EventsJ"]}
];

bingoList[22] = [
   { name: "Complete All pirate events", types: ["Special","Events","Pirate"]},
   { name: "Learn All STs for one weapon", types: ["ST"]},
   { name: "Fail 5 events", types: ["Special","Fail"]}
];

bingoList[23] = [
   { name: "Learn All STs for one weapon", types: ["ST"]},
   { name: "Fail 5 events", types: ["Special","Fail"]},
   { name: "Kill 3 NPCs", types: ["Special","Kill"]}
];

bingoList[24] = [
   { name: "Complete 40 events", types: ["Events","EventsF","EventsD","EventsJ"]},
   { name: "Get all encyclopedias", types: ["Encyclopedia"]},
   { name: "Complete All Diddle events", types: ["Special","Events","Diddle"]},
   { name: "Complete The Wimpy Thugling", types: ["Special","Events"]}
];

bingoList[25] = [
   { name: "Kill Peewee", types: ["Special"]},
   { name: "Kill all centaurs", types: ["Special","Boss","Dragon"]},
   { name: "Collect 2 AltenaAlloy", types: ["Special"]},
   { name: "Collect All 4 Mirror Pieces", types: ["Special"]}
];
