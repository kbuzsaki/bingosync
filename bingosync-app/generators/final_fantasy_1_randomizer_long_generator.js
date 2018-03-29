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
bingoList[1] = [
    { name: "Have Dragon Sword", types: ["weapon"] },
    { name: "Have Giant Sword", types: ["weapon"] },
    { name: "Have Were Sword", types: ["weapon"] },
    { name: "Have Rune Sword", types: ["weapon"] },
    { name: "Have Coral Sword", types: ["weapon"] }
];
bingoList[2] = [
    { name: "Have Mage Staff", types: ["weapon"] },
    { name: "Have Thor Hammer", types: ["weapon"] },
    { name: "Have Flame Sword", types: ["weapon"] },
    { name: "Have Ice Sword", types: ["weapon"] },
    { name: "Have 2 Ice Swords", types: ["weapon"] }
];
bingoList[3] = [
    { name: "Have Light Axe", types: ["weapon"] },
    { name: "Have 2 Light Axes", types: ["weapon"] },
    { name: "Have Heal Staff", types: ["weapon"] },
    { name: "Have Power Staff", types: ["weapon"] },
    { name: "Have Wizard Staff", types: ["weapon"] }
];
bingoList[4] = [
    { name: "Have Bane Sword", types: ["weapon"] },
    { name: "Have Defense", types: ["weapon"] },
    { name: "Have Vorpal", types: ["weapon"] },
    { name: "Have Sun Sword", types: ["weapon"] }
];
bingoList[5] = [
    { name: "Have Masmune", types: ["weapon"] },
    { name: "Have Xcalber", types: ["weapon", "xcalber"] },
    { name: "Have Katana", types: ["weapon"] },
    { name: "Have 2 Katanas", types: ["weapon"] }
];
bingoList[6] = [
    { name: "Have Opal Shield", types: ["armor"] },
    { name: "Have 2 Opal Shields", types: ["armor"] },
    { name: "Have Aegis Shield", types: ["armor"] },
    { name: "Have Flame Shield", types: ["armor"] },
    { name: "Have Ice Shield", types: ["armor"] }
];
bingoList[7] = [
    { name: "Have ProCape", types: ["armor"] },
    { name: "Have 2 ProCapes", types: ["armor"] },
    { name: "Have White Shirt", types: ["armor"] },
    { name: "Have Black Shirt", types: ["armor"] },
    { name: "Have Opal Bracelet", types: ["armor"] }
];
bingoList[8] = [
    { name: "Have Heal Helm", types: ["armor"] },
    { name: "Have 2 Heal Helms", types: ["armor"] },
    { name: "Have Ribbon", types: ["armor"] },
    { name: "Have 2 Ribbons", types: ["armor"] },
    { name: "Have 3 Ribbons", types: ["armor"] }
];
bingoList[9] = [
    { name: "Have Zeus Gauntlet", types: ["armor"] },
    { name: "Have Power Gauntlet", types: ["armor"] },
    { name: "Have Opal Gauntlet", types: ["armor"] },
    { name: "Have 2 Opal Gauntlets", types: ["armor"] }
];
bingoList[10] = [
    { name: "Have Opal Armor", types: ["armor"] },
    { name: "Have Dragon Armor", types: ["armor"] },
    { name: "Have Flame Armor", types: ["armor"] },
    { name: "Have Ice Armor", types: ["armor"] }
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
    { name: "Check all items in Temple of Fiends", types: ["dungeon"] }
];
bingoList[22] = [
    { name: "See STINGER", types: ["skill"] },
    { name: "See GLANCE", types: ["skill"] },
    { name: "See SQUINT", types: ["skill"] },
    { name: "See TOXIC", types: ["skill"] },
    { name: "See CRACK", types: ["skill"] },
    { name: "See CRACK or STINGER", types: ["skill"] },
    { name: "See TOXIC or STINGER", types: ["skill"] },
    { name: "See CRACK or TOXIC", types: ["skill"] }
];
bingoList[23] = [
    { name: "See SCORCH", types: ["skill"] },
    { name: "See HEAT", types: ["skill"] },
    { name: "See CREMATE", types: ["skill"] },
    { name: "See BLAZE", types: ["skill"] },
    { name: "See SCORCH or BLAZE", types: ["skill"] },
    { name: "See HEAT or CREMATE", types: ["skill"] }
];
bingoList[24] = [
    { name: "See STARE", types: ["skill"] },
    { name: "See THUNDER", types: ["skill"] },
    { name: "See FROST", types: ["skill"] },
    { name: "See BLIZZARD", types: ["skill"] },
    { name: "See FROST or BLIZZARD", types: ["skill"] },
    { name: "See POISON or POISON", types: ["skill"] }
];
bingoList[25] = [
    { name: "See FLASH", types: ["skill"] },
    { name: "See SNORTING", types: ["skill"] },
    { name: "See DAZZLE", types: ["skill"] },
    { name: "See GAZE", types: ["skill"] },
    { name: "See TRANCE", types: ["skill"] },
    { name: "See FLASH or SNORTING", types: ["skill"] },
    { name: "See FLASH or TRANCE", types: ["skill"] },
    { name: "See SNORTING or TRANCE", types: ["skill"] }
];