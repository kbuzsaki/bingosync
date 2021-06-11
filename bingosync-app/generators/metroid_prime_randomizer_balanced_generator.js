var bingoGenerator = require("./generators/generator_bases/srl_generator_v5.js");

var bingoList = [];
bingoList[1] = [
    {
        name: "1 Plated Beetle",
        types: ['minor-boss', 'chozo', 'plated-beetle']
    },
    {
        name: "Hive Mecha",
        types: ['chozo', 'minor-boss']
    },
    {
        name: "1 Chozo Save Station",
        types: ['save-station', 'chozo']
    },
    {
        name: "1 Map Station",
        types: ['map-station']
    },
];
bingoList[2] = [
    {
        name: "2 Minor Bosses",
        types: ['minor-boss']
    },
    {
        name: "Space Jump Boots",
        types: ['item']
    },
    {
        name: "Have 40 Missiles (Capacity)",
        types: ['item', 'missile']
    },
];
bingoList[3] = [
    {
        name: "1 Major Boss",
        types: ['major-boss']
    },
    {
        name: "Varia Suit",
        types: ['suit', 'item']
    },
    {
        name: "Have 3 E-Tanks",
        types: ['item', 'etank']
    },
    {
        name: "Have 1 Beam Combo",
        types: ['item', 'beam-combo']
    },
    {
        name: "1 Magmoor Save Station",
        types: ['save-station', 'magmoor']
    },
];
bingoList[4] = [
    {
        name: "1 Adult Sheegoth",
        types: ['minor-boss', 'phendrana']
    },
    {
        name: "Incinerator Drone",
        types: ['chozo', 'minor-boss']
    },
    {
        name: "Morph Ball Bombs",
        types: ['ball-upgrade', 'item']
    },
    {
        name: "Have 1 Power Bomb Expansion",
        types: ['item', 'power-bomb']
    },
    {
        name: "Have 1 Suit",
        types: ['item', 'suit']
    },
    {
        name: "2 Chozo Save Stations",
        types: ['save-station', 'chozo']
    },
];
bingoList[5] = [
    {
        name: "2 Plated Beetles",
        types: ['minor-boss', 'chozo', 'plated-beetle']
    },
    {
        name: "Flaahgra",
        types: ['chozo', 'major-boss']
    },
    {
        name: "Clear Ghosts in 2 Rooms",
        types: ['ghost']
    },
    {
        name: "Break 2 Bendenzium Objects",
        types: ['break']
    },
    {
        name: "Wave Beam",
        types: ['beam', 'item']
    },
];
bingoList[6] = [
    {
        name: "3 Minor Bosses",
        types: ['minor-boss']
    },
    {
        name: "Ruined Gallery (Tunnel) Item",
        types: ['chozo', 'location']
    },
    {
        name: "Magmoor Workstation Item",
        types: ['magmoor', 'location']
    },
    {
        name: "1 Phendrana Save Station",
        types: ['save-station', 'phendrana']
    },
    {
        name: "1 Missile Station",
        types: ['missile-station']
    },
];
bingoList[7] = [
    {
        name: "Clear Shadow Pirates in 2 Rooms",
        types: ['shadow-pirate']
    },
    {
        name: "Ruined Courtyard Item",
        types: ['chozo', 'location']
    },
    {
        name: "Ice Beam",
        types: ['beam', 'item']
    },
    {
        name: "Duplicate/Nothing Item",
        types: ['item']
    },
];
bingoList[8] = [
    {
        name: "2 Major Bosses",
        types: ['major-boss']
    },
    {
        name: "Clear Normal Metroids in 1 Room",
        types: ['metroid']
    },
    {
        name: "All Hall of the Elders Bomb Slots",
        types: ['chozo']
    },
    {
        name: "Thermal Visor",
        types: ['visor', 'item']
    },
    {
        name: "Have 2 Beam Combos",
        types: ['item', 'beam-combo']
    },
];
bingoList[9] = [
    {
        name: "1 Elite Pirate",
        types: ['minor-boss', 'mines']
    },
    {
        name: "Thardus",
        types: ['phendrana', 'major-boss']
    },
    {
        name: "Clear Flying Pirates in 3 Rooms",
        types: ['flying-pirate']
    },
    {
        name: "Arbor Chamber Item",
        types: ['tallon', 'location']
    },
    {
        name: "Tower of Light Item",
        types: ['chozo', 'location']
    },
    {
        name: "Super Missiles",
        types: ['beam-combo', 'item']
    },
];
bingoList[10] = [
    {
        name: "Break 4 Bendenzium Objects",
        types: ['break']
    },
    {
        name: "Elder Chamber Item",
        types: ['chozo', 'location']
    },
    {
        name: "Quarantine Monitor Item",
        types: ['phendrana', 'location']
    },
    {
        name: "Wavebuster",
        types: ['beam-combo', 'item']
    },
    {
        name: "Ice Spreader",
        types: ['beam-combo', 'item']
    },
    {
        name: "Flamethrower",
        types: ['beam-combo', 'item']
    },
    {
        name: "Have 2 Power Bomb Expansions",
        types: ['item', 'power-bomb']
    },
];
bingoList[11] = [
    {
        name: "Boost in 5 Spinners",
        types: ['spinner']
    },
    {
        name: "Boost Ball",
        types: ['ball-upgrade', 'item']
    },
    {
        name: "Spider Ball",
        types: ['ball-upgrade', 'item']
    },
    {
        name: "Have 70 Missiles (Capacity)",
        types: ['item', 'missile']
    },
    {
        name: "Have 6 E-Tanks",
        types: ['item', 'etank']
    },
    {
        name: "2 Magmoor Save Stations",
        types: ['save-station', 'magmoor']
    },
];
bingoList[12] = [
    {
        name: "2 Adult Sheegoth",
        types: ['minor-boss', 'phendrana']
    },
    {
        name: "Defeat 3 Power Pirates using Super Missiles",
        types: ['mines', 'beam-combo']
    },
    {
        name: "Break 2 Cordite Objects",
        types: ['break']
    },
    {
        name: "Research Core Item",
        types: ['phendrana', 'location']
    },
    {
        name: "Gravity Suit",
        types: ['suit', 'item']
    },
    {
        name: "X-Ray Visor",
        types: ['visor', 'item']
    },
];
bingoList[13] = [
    {
        name: "4 Minor Bosses",
        types: ['minor-boss']
    },
    {
        name: "Phazon Elite",
        types: ['mines', 'minor-boss']
    },
    {
        name: "Clear Normal Metroids in 3 Rooms",
        types: ['metroid']
    },
    {
        name: "Gravity Chamber (Lower) Item",
        types: ['phendrana', 'location']
    },
    {
        name: "Have 2 Suits",
        types: ['item', 'suit']
    },
    {
        name: "2 Phendrana Save Stations",
        types: ['save-station', 'phendrana']
    },
];
bingoList[14] = [
    {
        name: "Defeat 3 Wave Pirates using Wavebuster",
        types: ['mines', 'beam-combo']
    },
    {
        name: "Defeat 3 Ice Pirates using Ice Spreader",
        types: ['mines', 'beam-combo']
    },
    {
        name: "Clear Ghosts in 4 Rooms",
        types: ['ghost']
    },
    {
        name: "Main Plaza (Tree) Item",
        types: ['chozo', 'location']
    },
    {
        name: "1 Mines Save Station",
        types: ['save-station', 'mines']
    },
    {
        name: "2 Map Stations",
        types: ['map-station']
    },
];
bingoList[15] = [
    {
        name: "2 Elite Pirates",
        types: ['minor-boss', 'mines']
    },
    {
        name: "Clear Shadow Pirates in 4 Rooms",
        types: ['shadow-pirate']
    },
    {
        name: "Clear Hunter Metroids in Fungal Hall A",
        types: ['metroid', 'mines']
    },
    {
        name: "Biohazard Containment Item",
        types: ['tallon', 'location']
    },
    {
        name: "Life Grove Tunnel Item",
        types: ['tallon', 'location']
    },
    {
        name: "Plasma Beam",
        types: ['beam', 'item']
    },
    {
        name: "3 Phendrana Save Stations",
        types: ['save-station', 'phendrana']
    },
];
bingoList[16] = [
    {
        name: "Clear Flying Pirates in 6 Rooms",
        types: ['flying-pirate']
    },
    {
        name: "Boost in 7 Spinners",
        types: ['spinner']
    },
    {
        name: "Dynamo (Upper) Item",
        types: ['chozo', 'location']
    },
    {
        name: "Research Lab Hydra Item",
        types: ['phendrana', 'location']
    },
    {
        name: "Main Power Bombs",
        types: ['ball-upgrade', 'power-bomb', 'item']
    },
    {
        name: "Grapple Beam",
        types: ['item']
    },
    {
        name: "Have 3 Beam Combos",
        types: ['item', 'beam-combo']
    },
];
bingoList[17] = [
    {
        name: "Phendrana Shorelines (Spider Track) Item",
        types: ['phendrana', 'location']
    },
    {
        name: "Storage Cave Item",
        types: ['phendrana', 'location']
    },
    {
        name: "Have 100 Missiles (Capacity)",
        types: ['item', 'missile']
    },
    {
        name: "Have 4 Beams",
        types: ['item', 'beam']
    },
    {
        name: "Have 3 Power Bomb Expansions",
        types: ['item', 'power-bomb']
    },
];
bingoList[18] = [
    {
        name: "3 Adult Sheegoth",
        types: ['minor-boss', 'phendrana']
    },
    {
        name: "Cloaked Drone",
        types: ['mines', 'minor-boss']
    },
    {
        name: "Activate the Observatory",
        types: ['phendrana', 'spinner']
    },
    {
        name: "Training Chamber Item",
        types: ['chozo', 'location']
    },
    {
        name: "Sunchamber (Ghosts) Item",
        types: ['chozo', 'location']
    },
    {
        name: "All 3 Vanilla Beam Location Items",
        types: ['location']
    },
    {
        name: "1 Tallon Save Station",
        types: ['save-station', 'tallon']
    },
];
bingoList[19] = [
    {
        name: "Clear Ghosts in 6 Rooms",
        types: ['ghost']
    },
    {
        name: "Break 4 Cordite Objects",
        types: ['break']
    },
    {
        name: "Furnace (Upper) Item",
        types: ['chozo', 'location']
    },
    {
        name: "Plasma Processing Item",
        types: ['magmoor', 'location']
    },
    {
        name: "Gravity Chamber (Upper) Item",
        types: ['phendrana', 'location']
    },
    {
        name: "Storage Depot A Item",
        types: ['mines', 'location']
    },
    {
        name: "4 Phendrana Save Stations",
        types: ['save-station', 'phendrana']
    },
];
bingoList[20] = [
    {
        name: "3 Elite Pirates",
        types: ['minor-boss', 'mines']
    },
    {
        name: "1 Large Enemy using Flamethrower (Magmoor+)",
        types: ['beam-combo']
    },
    {
        name: "Clear Shadow Pirates in 6 Rooms",
        types: ['shadow-pirate']
    },
    {
        name: "Break 8 Bendenzium Objects",
        types: ['break']
    },
    {
        name: "Have 9 E-Tanks",
        types: ['item', 'etank']
    },
    {
        name: "Have 4 Visors",
        types: ['item', 'visor']
    },
    {
        name: "Use a Save Station in 3 Regions",
        types: ['save-station']
    },
    {
        name: "3 Map Stations",
        types: ['map-station']
    },
];
bingoList[21] = [
    {
        name: "4 Adult Sheegoth",
        types: ['minor-boss', 'phendrana']
    },
    {
        name: "Life Grove Ghosts",
        types: ['tallon', 'minor-boss']
    },
    {
        name: "3 Major Bosses",
        types: ['major-boss']
    },
    {
        name: "Defeat 3 Plasma Pirates using Flamethrower",
        types: ['mines', 'beam-combo']
    },
    {
        name: "Boost in 10 Spinners",
        types: ['spinner']
    },
    {
        name: "Phazon Suit",
        types: ['suit', 'item']
    },
];
bingoList[22] = [
    {
        name: "5 Minor Bosses",
        types: ['minor-boss']
    },
    {
        name: "Omega Pirate",
        types: ['mines', 'major-boss']
    },
    {
        name: "Clear Flying Pirates in 9 Rooms",
        types: ['flying-pirate']
    },
    {
        name: "Clear Normal Metroids in 5 Rooms",
        types: ['metroid']
    },
    {
        name: "Have Morph Ball + 4 Ball Upgrades",
        types: ['item', 'ball-upgrade']
    },
    {
        name: "Have 3 Suits",
        types: ['item', 'suit']
    },
    {
        name: "2 Missile Stations",
        types: ['missile-station']
    },
    {
        name: "1 lap around the Geothermal Core Spider Track",
        types: ['magmoor']
    },
];
bingoList[23] = [
    {
        name: "Meta Ridley",
        types: ['tallon', 'major-boss']
    },
    {
        name: "Metroid Quarantine B Item",
        types: ['mines', 'location']
    },
    {
        name: "Processing Center Access Item",
        types: ['mines', 'location']
    },
    {
        name: "Phazon Mining Tunnel Item",
        types: ['mines', 'location']
    },
    {
        name: "Have 130 Missiles (Capacity)",
        types: ['item', 'missile']
    },
    {
        name: "Have 4 Beam Combos",
        types: ['item', 'beam-combo']
    },
    {
        name: "Have 4 Power Bomb Expansions",
        types: ['item', 'power-bomb']
    },
    {
        name: "2 Mines Save Stations",
        types: ['save-station', 'mines']
    },
];
bingoList[24] = [
    {
        name: "Finish in Artifact Temple",
        types: ['tallon', 'finish-in']
    },
    {
        name: "Finish in Gully",
        types: ['tallon', 'finish-in']
    },
    {
        name: "Finish in Biotech Research Area 1",
        types: ['tallon', 'finish-in']
    },
    {
        name: "Finish in Arbor Chamber",
        types: ['tallon', 'finish-in']
    },
    {
        name: "Finish in Life Grove",
        types: ['tallon', 'finish-in']
    },
    {
        name: "Finish in Piston Tunnel",
        types: ['chozo', 'finish-in']
    },
    {
        name: "Finish in Tower Chamber",
        types: ['chozo', 'finish-in']
    },
    {
        name: "Finish in Sunchamber",
        types: ['chozo', 'finish-in']
    },
    {
        name: "Finish in Crossway Acces South (Morph Tunnel)",
        types: ['chozo', 'finish-in']
    },
    {
        name: "Finish in Warrior Shrine",
        types: ['magmoor', 'finish-in']
    },
    {
        name: "Finish in Plasma Processing",
        types: ['magmoor', 'finish-in']
    },
    {
        name: "Finish in Chapel of the Elders",
        types: ['phendrana', 'finish-in']
    },
    {
        name: "Finish in Quarantine Monitor",
        types: ['phendrana', 'finish-in']
    },
    {
        name: "Finish in Hunter Cave Access",
        types: ['phendrana', 'finish-in']
    },
    {
        name: "Finish in Waste Disposal",
        types: ['mines', 'finish-in']
    },
    {
        name: "Finish in Ventillation Shaft",
        types: ['mines', 'finish-in']
    },
    {
        name: "Finish in Phazon Mining Tunnel (By Item)",
        types: ['mines', 'finish-in']
    },
];
bingoList[25] = [
    {
        name: "4 Major Bosses",
        types: ['major-boss']
    },
    {
        name: "Have 12 E-Tanks",
        types: ['item', 'etank']
    },
    {
        name: "Use a Save Station in 4 Regions",
        types: ['save-station']
    },
];
