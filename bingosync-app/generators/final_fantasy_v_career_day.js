bingoGenerator = require("./generators/generator_bases/srl_generator_v5.js");

var bingoList = [];
bingoList[1] = [
    { name: "Get the Chicken Blade", types: ["equipment"] },
    { name: "Get Excalibur", types: ["equipment"] },
  ];

bingoList[2] = [
    { name: "Get the Brave Blade", types: ["equipment"] },
    { name: "Get Artemis Bow", types: ["equipment"] },
];

bingoList[3] = [
    { name: "Get any 3 key items (Excluding Anti-barrier, Bracelet, Adamantite)", types: ["key-items"] },
    { name: "Get Tinkerbell", types: ["equipment"] },
    { name: "Get the Apollo Harp", types: ["equipment"] },
    { name: "Check all W2 hints (Surgate|Kelb|Bal|Moore|Rugor)", "types": ["hint"] },
];

bingoList[4] = [
    { name: "Get Ragnarok", types: ["equipment"] },
    { name: "Get the Masamune", types: ["equipment"] },
    { name: "Check all W1 hints (Tycoon|Tule|Karnak|Walse|Library)", "types": ["hint"] },
];

bingoList[5] = [
    { name: "Get Thor's Hammer", types: ["equipment"] },
    { name: "Get the Dragoon Spear", types: ["equipment"] },
    { name: "Get 3 legendary weapons", types: ["legendary"] },
];

bingoList[6] = [
    { name: "Get the Judgement Staff", types: ["equipment"] },
    { name: "Get the Dragon Whisker", types: ["equipment"] },
    { name: "Get 6 legendary weapons", types: ["legendary"] },
];

bingoList[7] = [
    { name: "Get 9 legendary weapons", types: ["legendary"] },
    { name: "Get 3 of the Wind Jobs (KNT|MON|THF|BLM|WHM|BLU)", types: ["jobs-crystal"]},
];

bingoList[8] = [
    { name: "Get 3 of the Water Jobs (RED|TIM|SUM|BRS|MYS)", types: ["jobs-crystal"]},
];

bingoList[9] = [
    { name: "Get 3 of the Fire Jobs (BST|GEO|NIN|HUN|BRD)", types: ["jobs-crystal"] },

];

bingoList[10] = [
    { name: "Get 2 of the Earth Jobs (DRG|DNC|SAM|CHM)", types: ["jobs-crystal"] },
    { name: "See at least 3 Gilgamesh encounters", types: ["greg"] },
];

bingoList[11] = [
    { name: "Clear Fork Tower", types: ["location"] },
];

bingoList[12] = [
    { name: "Get the Freelancer crystal", types: ["jobs"] },
    { name: "Defeat all of the Water bosses (Triplets|Leviathan|Gogo)", types: ["bosses-ex"] },
];

bingoList[13] = [
    { name: "Get the Mime crystal", types: ["jobs"] },
    { name: "Mua Forest", types: ["location"] },
    { name: "Defeat all of the Bridge bosses (Gilga-2|Stalker)", types: ["bosses-ex"] },
];

bingoList[14] = [
    { name: "Get any 5 key items (Excluding Anti-barrier, Bracelet, Adamantite)", types: ["key-items"] },
    { name: "Defeat any 2 of the Cave bosses (Tyrosaur|Antlion|Odin)", types: ["bosses-ex"] },
];

bingoList[15] = [
    { name: "Kill Sekmet", types: ["bosses-ex"] },
    { name: "Defeat all of the Burning bosses (Iron Claw|Guardian)", types: ["bosses-ex"] },
];

bingoList[16] = [
    { name: "Clear Shrine Page (Chests & Boss)", types: ["location"] },
    { name: "Defeat all of the Desert bosses (Sandworm|Merugene)", types: ["bosses-ex"] },
];

bingoList[17] = [
    { name: "Get any 8 key items (Excluding Anti-barrier, Bracelet, Adamantite)", types: ["key-items"] },
    { name: "Defeat any 3 of the Meteor bosses (AdamanTimi|Chimera|Puroboros|Titan)", types: ["bosses-ex"] },
];

bingoList[18] = [
    { name: "Clear Falls Page (Chests & Boss)", types: ["location"] },
    { name: "Defeat any 2 of the Aerial bosses (Cray Claw|Sol Cannon|Archaevoaevis)", types: ["bosses-ex"] },
];

bingoList[19] = [
    { name: "Defeat all of the Library bosses (Ifrit|Byblos)", types: ["bosses-ex"] },
];

bingoList[20] = [
    { name: "Get any 11 key items (Excluding Anti-barrier, Bracelet, Adamantite)", types: ["key-items"] },
    { name: "Defeat any 3 of the Castle bosses (Shiva|Abductor|Gilga-1|Carbuncle|Gilga-4)", types: ["bosses-ex"] },
];

bingoList[21] = [
    { name: "Defeat any 5 summon bosses (Shiva|Ifrit|Ramuh|Shoat|Carbuncle|Golem|Odin|Bahamut|Leviathan|Titan)", types: ["bosses-ex"] },
    { name: "Kill Apocalypse with Self-Destruct", types: ["???"] },
];

bingoList[22] = [
    { name: "Clear Pyramid Page (Chests & Boss)", types: ["location"] },
    { name: "Defeat any 2 of the Tower bosses (Galura|Atomos|Minotauros|Omniscient)", types: ["bosses-ex"] },
];

bingoList[23] = [
    { name: "Clear Trench Page (Chests & Boss)", types: ["location"] },
    { name: "Defeat any 2 of the Mountain bosses (Magisa|Hiryuu Plant|Bahamut)", types: ["bosses-ex"] },
];

bingoList[24] = [
    { name: "Collect all 17 non-required Key Items", types: ["completion"]},
    { name: "Defeat any 3 of the Void bosses (Calofisteri|Apocalypse|Apanda|Catastrophe|Halicarnassus|Twin Tania|Necrofobia)", types: ["bosses-ex"] },
];

bingoList[25] = [
    { name: "Collect All Jobs", types: ["completion"]},
    { name: "Defeat any 2 of the Ship bosses (Karlabos|Siren|Liquid Flame|Gilga-3)", types: ["bosses-ex"] },
];








Groupings
["legendary"] - Collection of the 12 tablet items (not checks, weapons)
["equipment"] - Find any of the listed equiment items
["jobs"] - Find certain jobs
["jobs-crystal"] - Find jobs within the crystals themselves
["key-items"] - Key item Collection
["bosses"] - Defeat certain bosses
["bosses-ex"] - Unique boss groupings
["hint"] - Use the hint system
["location"] - Clear a location 
["greg"] - Greg. Need I say more?
UNASSIGNED











