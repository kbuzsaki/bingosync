
// Groupings
// ["legendary"] - Collection of the 12 tablet items (not checks, weapons)
// ["equipment"] - Find any of the listed equiment items
// ["jobs"] - Find certain jobs
// ["jobs-crystal"] - Find jobs within the crystals themselves
// ["key-items"] - Key item Collection
// ["boss"] - Defeat certain bosses
// ["boss-ex"] - Unique boss groupings
// ["hint"] - Use the hint system
// ["location"] - Clear a location 
// ["greg"] - Greg. Need I say more?
// ["boss-special"] - Kill bosses with special abilities
// ["skills"] - Collect skills/spells

bingoGenerator = require("./generators/generator_bases/srl_generator_v5.js");

var bingoList = [];
bingoList[1] = [
    { name: "Get the Chicken Knife", types: ["equipment"] },
    { name: "Get Excalibur", types: ["equipment"] },
    { name: "Beat the book fight on top of library", types: ["location"] },
    { name: "Defeat Antlion", types: ["boss"] },
    { name: "Defeat Wing Raptor", types: ["boss"] },
    { name: "Obtain the Knight job", types: ["jobs"] },
    { name: "Obtain the Adamantite", types: ["key-items"] },
  ];

bingoList[2] = [
    { name: "Get the Brave Blade", types: ["equipment"] },
    { name: "Get Artemis Bow", types: ["equipment"] },
    { name: "Defeat T-Rex with Phoenix Down/Life/Life 2", types: ["boss-special"] },
    { name: "Defeat Atmos", types: ["boss"] },
    { name: "Defeat T-Rex", types: ["boss"] },
    { name: "Obtain the Monk job", types: ["jobs"] },
    { name: "Obtain the Anti-Barrier", types: ["key-items"] },
];

bingoList[3] = [
    { name: "Get any 3 key items (Exc. Anti-barrier, Bracelet, Adamantite)", types: ["key-items"] },
    { name: "Get Tinkerbell", types: ["equipment"] },
    { name: "Get the Apollo Harp", types: ["equipment"] },
    { name: "Check all 5 World 2 hints", types: ["hint"] },
    { name: "Defeat Carbunkle", types: ["boss"] },
    { name: "Defeat Siren", types: ["boss"] },
    { name: "Obtain the Thief job", types: ["jobs"] },
    { name: "Get 5 Equip skills", types: ["skills"] },
];

bingoList[4] = [
    { name: "Get Ragnarok", types: ["equipment"] },
    { name: "Get the Masamune", types: ["equipment"] },
    { name: "Check all 5 World 1 hints", types: ["hint"] },
    { name: "Defeat Gargoyles", types: ["boss"] },
    { name: "Defeat Ramuh", types: ["boss"] },
    { name: "Obtain the Black Mage job", types: ["jobs"] },
    { name: "Obtain the Bracelet", types: ["key-items"] },

];

bingoList[5] = [
    { name: "Get Thor's Hammer", types: ["equipment"] },
    { name: "Get the Dragoon Spear", types: ["equipment"] },
    { name: "Get 3 items from Kuza Castle", types: ["legendary"] },
    { name: "Defeat Leviathan", types: ["boss"] },
    { name: "Defeat Abductor", types: ["boss"] },
    { name: "Obtain the White Mage job", types: ["jobs"] },
    { name: "Obtain the Hiryuu Call", types: ["key-items"] },
    { name: "Get 10 Support skills", types: ["skills"] },

];

bingoList[6] = [
    { name: "Get the Judgement Staff", types: ["equipment"] },
    { name: "Get the Dragon Whisker", types: ["equipment"] },
    { name: "Get 6 items from Kuza Castle", types: ["legendary"] },
    { name: "Defeat Puroboros", types: ["boss"] },
    { name: "Defeat Omniscient", types: ["boss"] },
    { name: "Obtain the Blue Mage job", types: ["jobs"] },
    { name: "Obtain the Elder Branch", types: ["key-items"] },
];

bingoList[7] = [
    { name: "Get 9 items from Kuza Castle", types: ["legendary"] },
    { name: "Get 3 Wind Jobs (KNT | MON | THF | BLM | WHM | BLU)", types: ["jobs-crystal"] },
    { name: "Defeat Minotauros by throwing the Assassin Dagger", types: ["boss-special"] },
	{ name: "Defeat Shiva", types: ["boss"] },
    { name: "Defeat Triplets", types: ["boss"] },
    { name: "Obtain the Red Mage job", types: ["jobs"] },
    { name: "Obtain the Submarine Key", types: ["key-items"] },
];

bingoList[8] = [
    { name: "Get 3 Water Jobs (RED | TIM | SUM | BRS | MYS)", types: ["jobs-crystal"] },
    { name: "Loot all of Karnak Escape (15 items)", types: ["location"] },
    { name: "Kill Magisa by Confusing Forza", types: ["boss-special"] },
    { name: "Defeat Titan", types: ["boss"] },
    { name: "Defeat Minotauros", types: ["boss"] },
    { name: "Obtain the Time Mage job", types: ["jobs"] },
    { name: "Obtain the Big Bridge Key", types: ["key-items"] },
];

bingoList[9] = [
    { name: "Get 3 Fire Jobs (BST | GEO | NIN | HUN | BRD)", types: ["jobs-crystal"] },
    { name: "Speak to the dwarf that hints Mirage Village in the great trench", types: ["hint"] },
    { name: "Defeat Karlabos", types: ["boss"] },
    { name: "Defeat Merugene", types: ["boss"] },
    { name: "Obtain the Summoner job", types: ["jobs"] },
    { name: "Obtain the Steamship Key", types: ["key-items"] },
];

bingoList[10] = [
    { name: "Get 2 Earth Jobs (DRG | DNC | SAM | CHM)", types: ["jobs-crystal"] },
    { name: "See at least 3 Gilgamesh encounters", types: ["greg"] },
    { name: "Defeat Apanda", types: ["boss"] },
    { name: "Defeat Chimera", types: ["boss"] },
    { name: "Obtain the Berserker job", types: ["jobs"] },
    { name: "Obtain the Mirage Radar", types: ["key-items"] },
    { name: "Obtain GilToss", types: ["skills"] },
];

bingoList[11] = [
    { name: "Clear Fork Tower", types: ["location"] },
    { name: "Defeat Triplets with Requiem", types: ["boss-special"] },
    { name: "Let Merugene change elemental weakness", types: ["boss-ex"] },
    { name: "Defeat Bahamut", types: ["boss"] },
    { name: "Defeat Liquid Flame", types: ["boss"] },
    { name: "Obtain the Mystic Knight job", types: ["jobs"] },
    { name: "Obtain the Moogle Suit", types: ["key-items"] },
];

bingoList[12] = [
    { name: "Get the Freelancer crystal", types: ["jobs"] },
    { name: "Defeat all Water bosses (Triplets | Levi | Gogo)", types: ["boss-ex"] },
    { name: "Defeat Necrofobia", types: ["boss"] },
    { name: "Defeat Ifrit", types: ["boss"] },
    { name: "Obtain the Walse Tower Key", types: ["key-items"] },
    { name: "Complete the Underwater Walse Tower check", types: ["location"] },
    { name: "Obtain Summon Lv.5", types: ["skills"] },
];

bingoList[13] = [
    { name: "Get the Mime crystal", types: ["jobs"] },
    { name: "Mua Forest", types: ["location"] },
    { name: "Defeat all Bridge bosses (Gilga-2 | Stalker)", types: ["boss-ex"] },
    {name: "Defeat Byblos", types: ["boss"] },
    { name: "Defeat Sandworm", types: ["boss"] },
    { name: "Obtain the Shrine Page", types: ["key-items"] },
];

bingoList[14] = [
    { name: "Get any 5 key items (Exc. Anti-barrier, Bracelet, Adamantite)", types: ["key-items"] },
    { name: "Defeat 2 Cave bosses (T-Rex | Antlion | Odin)", types: ["boss-ex"] },
    { name: "Defeat Magisa", types: ["boss"] },
    { name: "Defeat Halicarnassus", types: ["boss"] },
    { name: "Obtain the Beastmaster job", types: ["jobs"] },
    { name: "Visit Phoenix Tower (Kill at least one door)", types: ["location"]},
];

bingoList[15] = [
    { name: "Kill Sekmet", types: ["boss-ex"] },
    { name: "Defeat all Burning bosses (Iron Claw | Guardian)", types: ["boss-ex"] },
    { name: "Have 200,000 Gil at one time", types: ["equipment"] },
    { name: "Defeat Stalker", types: ["boss"] },
    { name: "Defeat Hiryuu Plant", types: ["boss"] },
    { name: "Obtain the Geomancer job", types: ["jobs"] },
    { name: "Obtain the Trench Page", types: ["key-items"] },
];

bingoList[16] = [
    { name: "Clear Shrine Page (Chests & Boss)", types: ["location"] },
    { name: "Defeat all Desert bosses (Sandworm | Merugene)", types: ["boss-ex"] },
    { name: "Defeat Shoat", types: ["boss"] },
    { name: "Defeat Cray Claw", types: ["boss"] },
    { name: "Obtain the Ninja job", types: ["jobs"] },
    { name: "Obtain the Pyramid Page", types: ["key-items"] },
];

bingoList[17] = [
    { name: "Get any 8 key items (Exc. Anti-barrier, Bracelet, Adamantite)", types: ["key-items"] },
    { name: "Defeat 3 Meteor bosses (Timi | Chimera | Puroboros | Titan)", types: ["boss-ex"] },
    { name: "Defeat Twin Tania", types: ["boss"] },
    { name: "Defeat Catastrophe", types: ["boss"] },
    { name: "Obtain the Hunter job", types: ["jobs"] },
    { name: "Ride Boco to the Antlion lair", types: ["location"] },
    
];

bingoList[18] = [
    { name: "Clear Falls Page (Chests & Boss)", types: ["location"] },
    { name: "Defeat 2 Aerial bosses (Cray Claw | Sol Cannon | Archaevoaevis)", types: ["boss-ex"] },
    { name: "Defeat Omniscient without muting him", types: ["boss-special"] },
    { name: "Defeat Odin", types: ["boss"] },
    { name: "Defeat Archeoaevis", types: ["boss"] },
    { name: "Obtain the Bard job", types: ["jobs"] },
    { name: "Obtain the Falls Page", types: ["key-items"] },
];

bingoList[19] = [
    { name: "Defeat all Library bosses (Ifrit | Byblos)", types: ["boss-ex"] },
    { name: "Defeat 5 bosses with Break effects", types: ["boss-special"] },
    { name: "Defeat Sol Cannon", types: ["boss"] },
    { name: "Defeat Atomos", types: ["boss"] },
    { name: "Obtain the Dragoon job", types: ["jobs"] },
    { name: "Obtain Ifrit's Fire", types: ["key-items"] },
    { name: "Obtain 10 Blue magic spells", types: ["skills"] },
];

bingoList[20] = [
    { name: "Get any 11 key items (Exc. Anti-barrier, Bracelet, Adamantite)", types: ["key-items"] },
    { name: "Defeat 3 Castle bosses (Shiva | Abductor | Gilga-1 | Carbuncle | Gilga-4)", types: ["boss-ex"] },
    { name: "Defeat Calofisteri", types: ["boss"] },
    { name: "Defeat Apocalypse", types: ["boss"] },
    { name: "Obtain the Dancer job", types: ["jobs"] },
    { name: "Clear Castle ExDeath (14 Chests & 3 Bosses)", types: ["location"] },
];

bingoList[21] = [
    { name: "Defeat any 5 summon bosses", types: ["boss-ex"] },
    { name: "Kill Apocalypse with Self-Destruct", types: ["boss-special"] },
    { name: "Defeat Galura", types: ["boss"] },
    { name: "Defeat Stalker", types: ["boss"] },
    { name: "Obtain the Samurai job", types: ["jobs"] },
    { name: "Obtain the Sandworm Bait", types: ["key-items"] },
    { name: "Obtain 10 Sword Magic spells", types: ["skills"] },
];

bingoList[22] = [
    { name: "Clear Pyramid Page (Chests & Boss)", types: ["location"] },
    { name: "Defeat 2 Tower bosses (Galura | Atomos | Minotauros | Omniscient)", types: ["boss-ex"] },
    { name: "Defeat Guardian Crystals", types: ["boss"] },
    { name: "Defeat Gilgamesh-1", types: ["boss"] },
    { name: "Obtain the Chemist job", types: ["jobs"] },
    { name: "Obtain the Adamantite", types: ["key-items"] },
    { name: "Obtain 10 Black magic spells", types: ["skills"] },
];

bingoList[23] = [
    { name: "Clear Trench Page (Chests & Boss)", types: ["location"] },
    { name: "Defeat 2 Mountain bosses (Magisa | Hiryuu Plant | Bahamut)", types: ["boss-ex"] },
    { name: "Defeat Iron Claw", types: ["boss"] },
    { name: "Defeat Gilgamesh-2", types: ["boss"] },
    { name: "Obtain the Mystic Knight job", types: ["jobs"] },
    { name: "Obtain the Anti-Barrier", types: ["key-items"] },
];

bingoList[24] = [
    { name: "Collect all 17 non-required Key Items", types: ["key-items"] },
    { name: "Defeat 3 Void bosses (Calo | Apoc | Apanda | Cata | Hali | Twin Tania | Necro)", types: ["boss-ex"] },
    { name: "Defeat AdamanTiMi (TIMI)", types: ["boss"] },
    { name: "Defeat Gilgamesh-3", types: ["boss"] },
    { name: "Obtain the Samurai job", types: ["jobs"] },
    { name: "Clear the Library (Chests & Bosses)", types: ["location"] },
    { name: "Obtain 10 White magic spells", types: ["skills"] },
];

bingoList[25] = [
    { name: "Collect All Jobs", types: ["jobs"] },
    { name: "Defeat 2 Ship bosses (Karlabos | Siren | Liquid Flame | Gilga-3)", types: ["boss-ex"] },
	{ name: "Defeat Golem", types: ["boss"] },
    { name: "Defeat Gilgamesh-4", types: ["boss"] },
    { name: "Obtain the Knight job", types: ["jobs"] },
    { name: "Obtain the Bracelet", types: ["key-items"] },
    { name: "Clear the Lonka Ruins (15 Chests & 3 Bosses) "},
];