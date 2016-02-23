(function(j, i, g, m, k, n, o) {
    function q(b) {
        var e, f, a = this,
            c = b.length,
            d = 0,
            h = a.i = a.j = a.m = 0;
        a.S = [];
        a.c = [];
        for (c || (b = [c++]); d < g;) a.S[d] = d++;
        for (d = 0; d < g; d++) e = a.S[d], h = h + e + b[d % c] & g - 1, f = a.S[h], a.S[d] = f, a.S[h] = e;
        a.g = function(b) {
            var c = a.S,
                d = a.i + 1 & g - 1,
                e = c[d],
                f = a.j + e & g - 1,
                h = c[f];
            c[d] = h;
            c[f] = e;
            for (var i = c[e + h & g - 1]; --b;) d = d + 1 & g - 1, e = c[d], f = f + e & g - 1, h = c[f], c[d] = h, c[f] = e, i = i * g + c[e + h & g - 1];
            a.i = d;
            a.j = f;
            return i
        };
        a.g(g)
    }

    function p(b, e, f, a, c) {
        f = [];
        c = typeof b;
        if (e && c == "object")
            for (a in b)
                if (a.indexOf("S") < 5) try {
                    f.push(p(b[a], e - 1))
                } catch (d) {}
                return f.length ? f : b + (c != "string" ? "\0" : "")
    }

    function l(b, e, f, a) {
        b += "";
        for (a = f = 0; a < b.length; a++) {
            var c = e,
                d = a & g - 1,
                h = (f ^= e[a & g - 1] * 19) + b.charCodeAt(a);
            c[d] = h & g - 1
        }
        b = "";
        for (a in e) b += String.fromCharCode(e[a]);
        return b
    }
    i.seedrandom = function(b, e) {
        var f = [],
            a;
        b = l(p(e ? [b, j] : arguments.length ? b : [(new Date).getTime(), j, window], 3), f);
        a = new q(f);
        l(a.S, j);
        i.random = function() {
            for (var c = a.g(m), d = o, b = 0; c < k;) c = (c + b) * g, d *= g, b = a.g(1);
            for (; c >= n;) c /= 2, d /= 2, b >>>= 1;
            return (c + b) / d
        };
        return b
    };
    o = i.pow(g, m);
    k = i.pow(2, k);
    n = k * 2;
    l(i.random(), j)
})([], Math, 256, 6, 52);

bingoGenerator = function(bingoList, opts) {
    var LANG = opts.lang || 'name';
    var MODE = opts.mode || "normal";
    var cardType = "Normal";
    var SEED = opts.seed || Math.ceil(999999 * Math.random()).toString();
    var size = 5;
    if (true) {
        Math.seedrandom(SEED);
        var MAX_SEED = 999999;

        var lineCheckList = [];
        if (size == 5) {
            lineCheckList[1] = [1, 2, 3, 4, 5, 10, 15, 20, 6, 12, 18, 24];
            lineCheckList[2] = [0, 2, 3, 4, 6, 11, 16, 21];
            lineCheckList[3] = [0, 1, 3, 4, 7, 12, 17, 22];
            lineCheckList[4] = [0, 1, 2, 4, 8, 13, 18, 23];
            lineCheckList[5] = [0, 1, 2, 3, 8, 12, 16, 20, 9, 14, 19, 24];
            lineCheckList[6] = [0, 10, 15, 20, 6, 7, 8, 9];
            lineCheckList[7] = [0, 12, 18, 24, 5, 7, 8, 9, 1, 11, 16, 21];
            lineCheckList[8] = [5, 6, 8, 9, 2, 12, 17, 22];
            lineCheckList[9] = [4, 12, 16, 20, 9, 7, 6, 5, 3, 13, 18, 23];
            lineCheckList[10] = [4, 14, 19, 24, 8, 7, 6, 5];
            lineCheckList[11] = [0, 5, 15, 20, 11, 12, 13, 14];
            lineCheckList[12] = [1, 6, 16, 21, 10, 12, 13, 14];
            lineCheckList[13] = [0, 6, 12, 18, 24, 20, 16, 8, 4, 2, 7, 17, 22, 10, 11, 13, 14];
            lineCheckList[14] = [3, 8, 18, 23, 10, 11, 12, 14];
            lineCheckList[15] = [4, 9, 19, 24, 10, 11, 12, 13];
            lineCheckList[16] = [0, 5, 10, 20, 16, 17, 18, 19];
            lineCheckList[17] = [15, 17, 18, 19, 1, 6, 11, 21, 20, 12, 8, 4];
            lineCheckList[18] = [15, 16, 18, 19, 2, 7, 12, 22];
            lineCheckList[19] = [15, 16, 17, 19, 23, 13, 8, 3, 24, 12, 6, 0];
            lineCheckList[20] = [4, 9, 14, 24, 15, 16, 17, 18];
            lineCheckList[21] = [0, 5, 10, 15, 16, 12, 8, 4, 21, 22, 23, 24];
            lineCheckList[22] = [20, 22, 23, 24, 1, 6, 11, 16];
            lineCheckList[23] = [2, 7, 12, 17, 20, 21, 23, 24];
            lineCheckList[24] = [20, 21, 22, 24, 3, 8, 13, 18];
            lineCheckList[25] = [0, 6, 12, 18, 20, 21, 22, 23, 19, 14, 9, 4];
        }

        function mirror(i) {
            if (i == 0) {
                i = 4;
            } else if (i == 1) {
                i = 3;
            } else if (i == 3) {
                i = 1;
            } else if (i == 4) {
                i = 0;
            }
            return i;
        }

        function difficulty(i) {
            var Num3 = SEED % 1000;
            var Rem8 = Num3 % 8;
            var Rem4 = Math.floor(Rem8 / 2);
            var Rem2 = Rem8 % 2;
            var Rem5 = Num3 % 5;
            var Rem3 = Num3 % 3;
            var RemT = Math.floor(Num3 / 120);
            var Table5 = [0];
            Table5.splice(Rem2, 0, 1);
            Table5.splice(Rem3, 0, 2);
            Table5.splice(Rem4, 0, 3);
            Table5.splice(Rem5, 0, 4);
            Num3 = Math.floor(SEED / 1000);
            Num3 = Num3 % 1000;
            Rem8 = Num3 % 8;
            Rem4 = Math.floor(Rem8 / 2);
            Rem2 = Rem8 % 2;
            Rem5 = Num3 % 5;
            Rem3 = Num3 % 3;
            RemT = RemT * 8 + Math.floor(Num3 / 120);
            var Table1 = [0];
            Table1.splice(Rem2, 0, 1);
            Table1.splice(Rem3, 0, 2);
            Table1.splice(Rem4, 0, 3);
            Table1.splice(Rem5, 0, 4);
            i--;
            RemT = RemT % 5;
            x = (i + RemT) % 5;
            y = Math.floor(i / 5);
            var e5 = Table5[(x + 3 * y) % 5];
            var e1 = Table1[(3 * x + y) % 5];
            value = 5 * e5 + e1;
            if (MODE == "short") {
                value = Math.floor(value / 2);
            } else if (MODE == "long") {
                value = Math.floor((value + 25) / 2);
            }
            value++;
            return value;
        }

        function checkLine(i, typesA) {
            var synergy = 0;
            for (var j = 0; j < lineCheckList[i].length; j++) {
                var typesB = bingoBoard[lineCheckList[i][j] + 1].types;
                if (typeof typesB != 'undefined') {
                    for (var k = 0; k < typesA.length; k++) {
                        for (var l = 0; l < typesB.length; l++) {
                            if (typesA[k] == typesB[l]) {
                                synergy++;
                                if (k == 0) {
                                    synergy++
                                };
                                if (l == 0) {
                                    synergy++
                                };
                            }
                        }
                    }
                }
            }
            return synergy;
        }
        var bingoBoard = [];
        for (var i = 1; i <= 25; i++) {
            bingoBoard[i] = {
                difficulty: difficulty(i)
            };
        }
        for (var i = 1; i <= 25; i++) {
            var getDifficulty = bingoBoard[i].difficulty;
            var RNG = Math.floor(bingoList[getDifficulty].length * Math.random());
            if (RNG == bingoList[getDifficulty].length) {
                RNG--;
            };
            var j = 0,
                synergy = 0,
                currentObj = null,
                minSynObj = null;
            do {
                currentObj = bingoList[getDifficulty][(j + RNG) % bingoList[getDifficulty].length];
                synergy = checkLine(i, currentObj.types);
                if (minSynObj == null || synergy < minSynObj.synergy) {
                    minSynObj = {
                        synergy: synergy,
                        value: currentObj
                    };
                }
                j++;
            } while ((synergy != 0) && (j < bingoList[getDifficulty].length));
            bingoBoard[i].types = minSynObj.value.types;
            bingoBoard[i].name = minSynObj.value[LANG] || minSynObj.value.name;
            bingoBoard[i].synergy = minSynObj.synergy;
        }
        return bingoBoard;
    }
};

var bingoList = [];
// it's "Panmagic" bingo, so it's DIV 5 and MOD 5. All rows will always add up to the same number
// the types are in to help make sure same goals or incompatible goals don't show up on the same row
// updated on February 16, 2016 at 1:17 pm central daylight time
// last edit by Lenophis

bingoList[1] = [
	{ name: "Get a first place prize in the ship 15-tile minigame", types: ["minigame", "megalixir"] },
	{ name: "Use exactly 2 Monks", types: ["party", "monk"] },
	{ name: "Get a third place prize in the ship 15-tile minigame", types: ["minigame"] },
	{ name: "Equip only a Thief's Armlet on the body slot", types: ["unique", "nowarrior", "nowhitemage"] },
	{ name: "Get the Flame Shield in Mt. Gulg", types: ["gulg"] },
	{ name: "Defeat at least two Ogres", types: ["defeat", "ogre"] },
	{ name: "Defeat at least 3 Goblin Guards", types: ["defeat", "goblin"] }
];

bingoList[2] = [
	{ name: "Get a second place prize in the ship 15-tile minigame", types: ["minigame", "elixir", "emergencyexit"] },
	{ name: "Cast Fira against a group of Bloodbones", types: ["situational"] },
	{ name: "Use zero White Mages", types: ["party", "nowhitemage"] },
	{ name: "Spend at least 14,051 gil in Pravoca", types: ["spending"] },
	{ name: "Use exactly 2 Thieves", types: ["party", "thief"] },
	{ name: "Equip only a Mythril Helmet on the head slot", types: ["unique", "nowarrior"] }
];

bingoList[3] = [
	{ name: "Get the Ribbon in the Flying Fortress", types: ["treasurehunt"] },
	{ name: "Learn exactly one curative spell", types: ["monk"] },
	{ name: "Use exactly 2 Warriors", types: ["party", "warrior"] },
	{ name: "Get all of the treasure in the Waterfall Cavern", types: ["treasurehunt"] },
	{ name: "Use at least 15 Ethers", types: ["itemrestriction"] },
	{ name: "Learn exactly two elemental damage spells", types: ["monk"] },
	{ name: "Win twice at the ship 15-tile minigame", types: ["minigame"] }
];

bingoList[4] = [
	{ name: "Use zero Thieves", types: ["party", "nothief"] },
	{ name: "Use no more than 10 Antidotes", types: ["itemrestriction"] },
	{ name: "Use exactly 2 White Mages", types: ["party", "whitemage"] },
	{ name: "Buy exactly 3 Knight's Armor in Melmond", types: ["spending"] },
	{ name: "Use zero Black Mages", types: ["party", "noblackmage"] },
	{ name: "Use exactly one Monk AND one Red Mage", types: ["party", "monk", "redmage"] }
];

bingoList[5] = [
	{ name: "Use zero Warriors", types: ["party", "nowarrior"] },
	{ name: "Cast Blizzara against a group of Ghosts", types: ["situational"] },
	{ name: "Get the Flame Mail in Mt. Gulg", types: ["gulg"] },
	{ name: "Cast Firaga at least twice", types: ["noredmage", "noblackmage"] },
	{ name: "Cast Thundaga at least twice", types: ["noredmage", "noblackmage"] },
	{ name: "Cast Blizzaga at least twice", types: ["noredmage", "noblackmage"] },
	{ name: "Do NOT cast Flare", types: ["default"] }
];

bingoList[6] = [
	{ name: "Get both Light Axes in the Sunken Shrine", types: ["treasurehunt"] },
	{ name: "Get the Giant's Gloves in the Sunken Shrine", types: ["treasurehunt"] },
	{ name: "Do NOT run from any battle in the Sunken Shrine", types: ["norun"] },
	{ name: "Get the Diamond Armor in the Sunken Shrine", types: ["treasurehunt"] },
	{ name: "Do NOT acquire Survival Vests", types: ["default"] },
	{ name: "Get the Mage's Staff in the Sunken Shrine", types: ["treasurehunt"] },
	{ name: "Equip only an Ice Shield on the shield slot", types: ["unique", "nowarrior", "nothief", "noclass"] }
];

bingoList[7] = [
	{ name: "Use no more than 10 Potions", types: ["itemrestriction"] },
	{ name: "Use zero Phoenix Downs", types: ["itemrestriction"] },
	{ name: "Learn exactly two curative spells", types: ["monk"] },
	{ name: "Use zero Sleeping Bags, Tents, or Cottages", types: ["itemrestriction"] },
	{ name: "Get the Adamantite, but do NOT get the Excalibur", types: ["treasurehunt", "excalibur"] },
	{ name: "Use at least 1 Elixir", types: ["itemrestriction"] }
];

bingoList[8] = [
	{ name: "Buy exactly 15 Mythril Axes in Crescent Lake", types: ["spending"] },
	{ name: "Get all of the treasure in present-day Chaos Shrine", types: ["treasurehunt"] },
	{ name: "Use exactly 2 Black Mages", types: ["party", "blackmage"] },
	{ name: "Get all of the treasure in the Marsh Cave", types: ["treasurehunt"] },
	{ name: "Use exactly 2 Red Mages", types: ["party", "redmage"] },
	{ name: "Spend at least 26,780 gil in Elfheim", types: ["spending"] },
	{ name: "Use at least 50 Potions", types: ["itemrestriction"] }
];

bingoList[9] = [
	{ name: "Get all of the treasure in Mt. Duergar, including Excalibur", types: ["treasurehunt", "duergar"] },
	{ name: "Use at least 2 Gold Needles", types: ["itemrestriction"] },
	{ name: "Get all of the treasure in the Western Keep", types: ["treasurehunt", "westernkeep"] },
	{ name: "Get Thor's Hammer in the Mirage Tower", types: ["treasurehunt"] },
	{ name: "Use zero Red Mages", types: ["party", "noredmage"] },
	{ name: "Get all of the treasure in Giant's Cave", types: ["treasurehunt"] },
	{ name: "But exactly 19 Silver Armlets in Melmond", types: ["spending"] },
];

bingoList[10] = [
	{ name: "Get all of the treasure in the Citadel of Trials", types: ["treasurehunt"] },
	{ name: "Defeat the mighty Blue Dragon at least 10 times", types: ["atleast"] },
	{ name: "Learn exactly one status buff spell", types: ["monk"] },
	{ name: "Do NOT run from any battle in the Cavern of Earth", types: ["norun"] },
	{ name: "Get all of the treasure in the Mermaids' room", types: ["treasurehunt"] },
	{ name: "Get the Dragon Mail in the Mirage Tower", types: ["treasurehunt"] },
	{ name: "Do NOT run from any battle in the Citadel of Trials", types: ["norun"] }
];

bingoList[11] = [
	{ name: "Get the Ice Armor in the Cavern of Ice", types: ["icecave"] },
	{ name: "Cast Thundara against a group of Earth Elementals", types: ["situational"] },
	{ name: "Do NOT run from any battle in the Flying Fortress", types: ["norun"] },
	{ name: "Learn exactly one elemental damage spell", types: ["monk"] },
	{ name: "Get the Ice Brand in Mt. Gulg", types: ["gulg"] },
	{ name: "Get the Flame Sword in the Cavern of Ice", types: ["icecave"] },
	{ name: "Put a Mindflayer to sleep", types: ["situational"] },
	{ name: "Blind the Evil Eye", types: ["situational"] },
];

bingoList[12] = [
	{ name: "Get the Aegis Shield in the Mirage Tower", types: ["treasurehunt"] },
	{ name: "Get the clothes in the Cavern of Ice", types: ["treasurehunt", "icecave"] },
	{ name: "Get the Rat's Tail from the Citadel of Trials, but do NOT class change", types: ["noclass"] },
	{ name: "Buy exactly 18 Mythril Swords in Crescent Lake", types: ["spending"] },
	{ name: "Get the Sunblade in the Mirage Tower", types: ["treasurehunt", "sunblade"] },
	{ name: "Defeat a Vampire Lord", types: ["fight"] },
	{ name: "Use Scourge to defeat Tiamat", types: ["situational"] },
];

bingoList[13] = [
	{ name: "Use at least 4 different Inns", types: ["inn"] },
	{ name: "Get the Razer in the Flying Fortress", types: ["treasurehunt"] },
	{ name: "Learn exactly two status buff spells", types: ["monk"] },
	{ name: "Defeat Hyenadon", types: ["fight"] },
	{ name: "Defeat at least two Rhyos", types: ["atleast"] },
	{ name: "Get the White Robe and Black Robe in the Flying Fortress", types: ["treasurehunt"] },
	{ name: "Use at least 75 Potions", types: ["itemrestriction"] }
];

bingoList[14] = [
	{ name: "Get the Masamune in the Chaos Shrine", types: ["treasurehunt"] },
	{ name: "Get the Protect Cloak in the Chaos Shrine", types: ["treasurehunt"] },
	{ name: "Get Sasuke's Blade in the Chaos Shrine", types: ["treasurehunt"] },
	{ name: "Obtain an Emergency Exit from Purple Worm", types: ["emergencyexit"] },
	{ name: "Defeat Red Pirahna", types: ["fight"] },
	{ name: "Obtain an Elixir from Death Eye", types: ["elixir"] },
	{ name: "Get both Healing Helms from treasure chests", types: ["treasurehunt"] }
];

bingoList[15] = [
	{ name: "Buy 99 Hi-Potions", types: ["spending"] },
	{ name: "Defeat White Crocodile", types: ["fight"] },
	{ name: "Obtain a Megalixir", types: ["megalixir", "deatheye"] },
	{ name: "Defeat Ankheg", types: ["fight"] },
	{ name: "Defeat Green Dragon", types: ["fight", "greendragon"] },
	{ name: "Put a Green Dragon to sleep", types: ["situational", "greendragon"] },
];

bingoList[16] = [
	{ name: "Defeat Death Eye at least 10 times", types: ["atleast", "deatheye"] },
	{ name: "Get all of the treasure in the Dragon Caves", types: ["treasurehunt"] },
	{ name: "Do NOT class change", types: ["noclass"] },
	{ name: "Get the Protect Cloak in the Flying Fortress", types: ["treasurehunt"] },
	{ name: "Defeat Tyrannosaurus", types: ["rare"] },
	{ name: "Get at least 2 Ribbons from treasure chests", types: ["treasurehunt"] },
	{ name: "Use the spell Exit to escape from Mt. Gulg", types: ["exit"] },
	{ name: "Defeat Sphinx in the Cavern of Earth", types: ["situational"] },
	{ name: "Defeat at least one Dark Fighter", types: ["atleast"] }
];

bingoList[17] = [
	{ name: "Defeat Sand Worm", types: ["fight"] },
	{ name: "Get only 1 of Sunblade or Diamond Armor from chests", types: ["sunblade", "diamondarmor"] },
	{ name: "Buy 99 Ethers", types: ["spending"] },
	{ name: "Do NOT equip Dragon Mail", types: ["unique"] },
	{ name: "Get at least 2 characters to level 35", types: ["grind"] },
	{ name: "Buy 99 Gold Needles", types: ["spending"] },
	{ name: "Get the Excalibur in Mt. Duergar", types: ["excalibur"] }
];

bingoList[18] = [
	{ name: "Defeat Typhon in Whisperwind Cove", types: ["whisperwind", "extra"] },
	{ name: "Get at least 3 shields from treasure chests", types: ["treasurehunt"] },
	{ name: "Buy 99 Phoenix Downs", types: ["spending"] },
	{ name: "Defeat Ochre Jelly", types: ["rare"] },
	{ name: "Get at least 3 characters to level 28", types: ["grind"] },
	{ name: "Equip one unique shield on every character, and don't remove them", types: ["unique"] },
	{ name: "Get the party at least level 25", types: ["grind"] }
];

bingoList[19] = [
	{ name: "Equip one unique sword on every character, and don't remove them", types: ["unique"] },
	{ name: "Get the party at least level 22", types: ["grind"] },
	{ name: "Defeat Iron Golem", types: ["rare"] },
	{ name: "Do NOT equip Barbarian's Sword or Ribbon", types: ["unique"] },
	{ name: "Buy 99 Tents", types: ["spending"] },
	{ name: "Do NOT equip Lordly Robes", types: ["unique"] },
	{ name: "Get Maximillian", types: ["westernkeep"] }
];

bingoList[20] = [
	{ name: "Learn at least one Level 7 spell for a character", types: ["grind"] },
	{ name: "Defeat Arhiman in Earthgift Shrine", types: ["earthgift", "extra"] },
	{ name: "Equip one unique glove on every character", types: ["unique"] },
	{ name: "Learn at least two Level 6 spells for a character", types: ["grind"] },
	{ name: "Defeat Red Dragon", types: ["rare"] },
	{ name: "Learn three Level 4 spells for at least two characters", types: ["grind"] },
];

bingoList[21] = [
	{ name: "Get Sasuke's Blade in the Flying Fortress", types: ["treasurehunt"] },
	{ name: "Use at least 5 different Inns", types: ["inn"] },
	{ name: "Buy 99 Mana Tonics at the Caravan", types: ["spending", "caravan"] },
	{ name: "Unlock one blue seal in the Labyrinth of Time", types: ["labyrinth"] },
	{ name: "Buy exactly 33 Prorings in Gaia", types: ["spending", "gaia"] },
	{ name: "Learn three Level 1, 2, and 3 spells for a character", types: ["grind"] }
];

bingoList[22] = [
	{ name: "Buy 99 Giant's Tonics at the Caravan", types: ["spending", "caravan"] },
	{ name: "Use at least 6 different Inns", types: ["inn"] },
	{ name: "Buy exactly 22 Cat Claws in Gaia", types: ["spending", "gaia"] },
	{ name: "Get at least 55,000 gil from treasure chests", types: ["treasurehunt"] },
	{ name: "Unlock one red seal in the Labyrinth of Time", types: ["labyrinth"] },
	{ name: "Get Red Jacket", types: ["nowarrior", "nothief", "duergar"] },
	{ name: "Use at least 25 Hi-Potions", types: ["itemrestriction"] }
];

bingoList[23] = [
	{ name: "Get at least 2 characters to level 29", types: ["grind"] },
	{ name: "Use the spell Exit to escape from Waterfall Cavern", types: ["exit"] },
	{ name: "Get at least 10 weapons from treasure chests", types: ["treasurehunt"] },
	{ name: "Use all 7 Inns", types: ["inn"] },
	{ name: "Kill four different enemies in one encounter", types: ["situational"] },
	{ name: "Defeat Echidna in Earthgift Shrine", types: ["earthgift", "extra"] }
];

bingoList[24] = [
	{ name: "Defeat Warmech", types: ["rare"] },
	{ name: "Get at least 3 characters to level 20", types: ["grind"] },
	{ name: "Equip one unique helmet on every character, and don't remove them", types: ["unique"] },
	{ name: "Defeat at least three Ice Gigas", types: ["atleast"] },
	{ name: "Defeat Two-headed Dragon in Earthgift Shrine", types: ["earthgift", "extra"] },
	{ name: "Unlock two blue seals in the Labyrinth of Time", types: ["labyrinth"] }
];

bingoList[25] = [
	{ name: "Buy 99 Cottages in Gaia", types: ["spending", "gaia"] },
	{ name: "Defeat Cerberus in Earthgift Shrine", types: ["earthgift", "extra"] },
	{ name: "Get at least 1 character to level 37", types: ["grind"] },
	{ name: "Learn three Level 5 spells for a character", types: ["grind"] },
	{ name: "Unlock two red seals in the Labyrinth of Time", types: ["labyrinth"] },
	{ name: "Defeat Gilgamesh and Atomos in Lifespring Grotto", types: ["whisperwind", "extra"] }
];

