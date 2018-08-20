bingoGenerator = require("./generators/generator_bases/srl_generator_v5.js");

var bingoList = [];
bingoList[1] = [
    { name: "Have Dragon Sword", types: ["weapon"] },
    { name: "Have Giant Sword", types: ["weapon"] },
    { name: "Have Were Sword", types: ["weapon"] },
    { name: "Have Rune Sword", types: ["weapon"] },
    { name: "Have Coral Sword", types: ["weapon"] }
];
bingoList[2] = [
    { name: "Have Thor Hammer", types: ["weapon"] },
    { name: "Have Bane Sword", types: ["weapon"] },
    { name: "Have Defense", types: ["weapon"] },
    { name: "Have Flame Sword", types: ["weapon"] },
    { name: "Have Ice Sword", types: ["weapon"] }
];
bingoList[3] = [
    { name: "Have Light Axe", types: ["weapon"] },
    { name: "Have Mage Staff", types: ["weapon"] },
    { name: "Have Heal Staff", types: ["weapon"] },
    { name: "Have Power Staff", types: ["weapon"] },
    { name: "Have Wizard Staff", types: ["weapon"] }
];
bingoList[4] = [
    { name: "Have Masmune", types: ["weapon"] },
    { name: "Have Xcalber", types: ["weapon", "xcalber"] },
    { name: "Have Katana", types: ["weapon"] },
    { name: "Have Vorpal", types: ["weapon"] },
    { name: "Have Sun Sword", types: ["weapon"] }
];
bingoList[5] = [
    { name: "Defeat LICH", types: ["quest"] },
    { name: "Defeat KARY", types: ["quest"] },
    { name: "Defeat KRAKEN", types: ["quest"] },
    { name: "Defeat TIAMAT", types: ["quest"] }
];
bingoList[6] = [
    { name: "Have Opal Shield", types: ["armor"] },
    { name: "Have Aegis Shield", types: ["armor"] },
    { name: "Have Flame Shield", types: ["armor"] },
    { name: "Have Ice Shield", types: ["armor"] }
];
bingoList[7] = [
    { name: "Have ProCape", types: ["armor"] },
    { name: "Have White Shirt", types: ["armor"] },
    { name: "Have Black Shirt", types: ["armor"] },
    { name: "Have Opal Bracelet", types: ["armor"] },
    { name: "Have Ribbon", types: ["armor"] }
];
bingoList[8] = [
    { name: "Have Opal Armor", types: ["armor"] },
    { name: "Have Dragon Armor", types: ["armor"] },
    { name: "Have Flame Armor", types: ["armor"] },
    { name: "Have Ice Armor", types: ["armor"] }
];
bingoList[9] = [
    { name: "Have Heal Helm", types: ["armor"] },
    { name: "Have Zeus Gauntlet", types: ["armor"] },
    { name: "Have Power Gauntlet", types: ["armor"] },
    { name: "Have Opal Gauntlet", types: ["armor"] }
];
bingoList[10] = [
    { name: "Find CROWN", types: ["quest"] },
    { name: "Find SLAB", types: ["quest"] },
    { name: "Find FLOATER", types: ["quest"] }
];
bingoList[11] = [
    { name: "Light AIR orb second", types: ["quest"] },
    { name: "Light FIRE orb last", types: ["quest"] },
    { name: "Light WATER orb second", types: ["quest"] },
    { name: "Light WATER orb last", types: ["quest"] }
];
bingoList[12] = [
    { name: "Never buy a ProRing", types: ["armor", "restrict"] },
    { name: "Never buy a Gold Bracelet", types: ["armor", "restrict"] }
];
bingoList[13] = [
    { name: "Find TAIL", types: ["bahamut", "quest"] },
    { name: "Find ADAMANT", types: ["quest", "xcalber"] },
    { name: "Find RUBY", types: ["quest"] }
];
bingoList[14] = [
    { name: "Kill a WarMECH", types: ["monster", "restrict"] },
    { name: "Never kill AGAMAs", types: ["monster", "restrict"] }
];
bingoList[15] = [
    { name: "Kill a TYRO", types: ["monster", "restrict"] },
    { name: "Never kill TYROs", types: ["monster", "restrict"] }
];
bingoList[16] = [
    { name: "Have no L3 White Magic", types: ["magic", "restrict"] },
    { name: "Have no L4 White Magic", types: ["magic", "restrict"] },
    { name: "Have no L5 White Magic", types: ["magic", "restrict"] }
];
bingoList[17] = [
    { name: "Have no L3 Black Magic", types: ["magic", "restrict"] },
    { name: "Have no L4 Black Magic", types: ["magic", "restrict"] },
    { name: "Have no L5 Black Magic", types: ["magic", "restrict"] }
];
bingoList[18] = [
    { name: "Start without Black Belts", types: ["class"] },
    { name: "Start with 2 Red Mages", types: ["class"] },
    { name: "Start without Black Mages", types: ["class"] },
    { name: "Start without White Mages", types: ["class"] }
];
bingoList[19] = [
    { name: "Start with Thief", types: ["class"] },
    { name: "Start with 2 Thieves", types: ["class"] },
    { name: "Start with Fighter and Thief", types: ["class"] },
    { name: "Start with 2 Fighters", types: ["class"] }
];
bingoList[20] = [
    { name: "Get Class Change", types: ["bahamut", "quest", "restrict"] },
    { name: "Never Class Change", types: ["bahamut", "quest", "restrict"] }
];
bingoList[21] = [
    { name: "Check all items in Marsh Cave", types: ["dungeon"] },
    { name: "Check all items in Sea Shrine", types: ["dungeon"] },
    { name: "Check all items in Earth Cave", types: ["dungeon"] }
];
bingoList[22] = [
    { name: "See GLANCE or SQUINT", types: ["skill"] },
    { name: "See GLANCE or CRACK", types: ["skill"] },
    { name: "See SQUINT or TOXIC", types: ["skill"] },
    { name: "See CRACK or STINGER", types: ["skill"] },
    { name: "See TOXIC or STINGER", types: ["skill"] },
    { name: "See CRACK or TOXIC", types: ["skill"] }
];
bingoList[23] = [
    { name: "See SCORCH or CREMATE", types: ["skill"] },
    { name: "See BLAZE or HEAT", types: ["skill"] },
    { name: "See SCORCH or HEAT", types: ["skill"] },
    { name: "See BLAZE or CREMATE", types: ["skill"] },
    { name: "See SCORCH or BLAZE", types: ["skill"] },
    { name: "See HEAT or CREMATE", types: ["skill"] }
];
bingoList[24] = [
    { name: "See STARE or THUNDER", types: ["skill"] },
    { name: "See STARE or FROST", types: ["skill"] },
    { name: "See STARE or BLIZZARD", types: ["skill"] },
    { name: "See FROST or BLIZZARD", types: ["skill"] },
    { name: "See FROST or THUNDER", types: ["skill"] },
    { name: "See POISON or POISON", types: ["skill"] }
];
bingoList[25] = [
    { name: "See GAZE or DAZZLE", types: ["skill"] },
    { name: "See GAZE or TRANCE", types: ["skill"] },
    { name: "See SNORTING or DAZZLE", types: ["skill"] },
    { name: "See FLASH or SNORTING", types: ["skill"] },
    { name: "See FLASH or TRANCE", types: ["skill"] },
    { name: "See SNORTING or TRANCE", types: ["skill"] }
];
