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
 { name: "5 lives in world 1", types: ["lives","world1"] },
 { name: "10 Total Lives", types: ["lives"] },
 { name: "Mount 2 Yoshis", types: ["yoshis"] },
 { name: "4 Message Blocks", types: ["message_blocks"] },
 { name: "100.000 Points", types: ["points"] },
 { name: "1 Castle", types: ["structures","world1"] },
 { name: "Kill a Pokey", types: ["kill"] },
 { name: "Kill 2 different types of chucks", types: ["chucks"] },
];
bingoList[2] = [
 { name: "1 Switch Palace", types: ["structures","world1"] },
 { name: "Yellow Switch Palace", types: ["structures","world1"] },
 { name: "5 Exits", types: ["exit"] },
 { name: "200 coins", types: ["coins"] },
 { name: "2 levels without coins ", types: ["no_coins"] },
 { name: "4 Sublevels", types: ["sublevels"] },
 { name: "Collect a 50 coins in 2 different levels", types: ["coins"] },
 { name: "2 lives in 3 levels (6)", types: ["lives"] },
];
bingoList[3] = [
 { name: "1 Ghost House", types: ["structures"] },
 { name: "2 Structures", types: ["structures"] },
 { name: "2 levels all yoshi coins", types: ["yoshi_coins"] },
 { name: "2 Sublevels in 2 worlds (4)", types: ["sublevels"] },
 { name: "5 lives in world 2 ", types: ["lives","world2"] },
 { name: "1 Moon", types: ["moon"] },
 { name: "Diagonal mario", types: ["task"] },
 { name: "6 Message Blocks", types: ["message_blocks"] },
];
bingoList[4] = [
 { name: "World 1 All Exits (5)", types: ["world1"] },
 { name: "1 Live from a Bonus Block", types: ["bonus_blocks"] },
 { name: "All berries in world 1 (22) ", types: ["berries"] },
 { name: "1 Yump", types: ["task"] },
 { name: "8 Message Blocks", types: ["message_blocks"] },
 { name: "3 vines", types: ["vines"] },
 { name: "Mount 4 Yoshis", types: ["yoshis"] },
 { name: "All yoshi coins of 1 level in 2 worlds (2)", types: ["yoshi_coins"] },
];
bingoList[5] = [
 { name: "Complete both exits of a level", types: ["secret"] },
 { name: "400 coins", types: ["coins"] },
 { name: "600 coins", types: ["coins"] },
 { name: "200.000 Points", types: ["points"] },
 { name: "1 Starworld entrance", types: ["world2"] },
 { name: "All sublevels in World 1 (4)", types: ["world1","sublevels"] },
 { name: "Kill 3 different types of chucks", types: ["chucks"] },
 { name: "1 Bonus Game", types: ["bonus"] },
];
bingoList[6] = [
 { name: "Top Secret Area", types: ["world2","task"] },
 { name: "25 Total Lives", types: ["lives"] },
 { name: "10 Exits", types: ["exit"] },
 { name: "1 Star in 2 worlds (Power-up)", types: ["stars"] },
 { name: "Kill a Swoop (bat)", types: ["kill"] },
 { name: "3 lives in 3 levels (9)", types: ["lives"] },
 { name: "Kill a chuck in 4 levels ", types: ["chucks"] },
 { name: "4 levels all yoshi coins", types: ["yoshi_coins"] },
];
bingoList[7] = [
 { name: "2 Ghost Houses", types: ["structures"] },
 { name: "Eat a disco shell", types: ["task"] },
 { name: "3 Secret Exits", types: ["secret"] },
 { name: "10 Message Blocks", types: ["message_blocks"] },
 { name: "1 P-Balloon in 2 levels", types: ["task"] },
 { name: "3 levels without coins", types: ["no_coins"] },
 { name: "Complete Donut secret 2", types: ["world2"] },
 { name: "Kill a Hammer Brother", types: ["kill"] },
];
bingoList[8] = [
 { name: "2 Castles", types: ["structures"] },
 { name: "4 Structures", types: ["structures"] },
 { name: "Collect a 50 coins in 3 different levels", types: ["coins"] },
 { name: "5 lives in star world", types: ["lives","starworld"] },
 { name: "All berries in world 2 (5)", types: ["berries"] },
 { name: "1 star at Goal point", types: ["bonus"] },
 { name: "50 stars at Goal point", types: ["bonus"] },
 { name: "2 Springs ", types: ["springs"] },
];
bingoList[9] = [
 { name: "300.000 Points", types: ["points"] },
 { name: "15 Exits", types: ["exit"] },
 { name: "Complete both exits of 3 levels", types: ["secret"] },
 { name: "All yoshi coins in world 1", types: ["world1","yoshi_coins"] },
 { name: "50 Total Lives", types: ["lives"] },
 { name: "800 coins", types: ["coins"] },
 { name: "2 levels all yoshi coins in world 2", types: ["world2","yoshi_coins"] },
 { name: "Hit a gray P switch ", types: ["task"] },
];
bingoList[10] = [
 { name: "Collect a 50 coins in 4 different levels", types: ["coins"] },
 { name: "0 Lives in Bonus game", types: ["bonus"] },
 { name: "2 Bonus Games", types: ["bonus"] },
 { name: "2 Moons", types: ["moon"] },
 { name: "Green Switch Palace", types: ["structures","world2"] },
 { name: "5 vines", types: ["vines"] },
 { name: "6 Sublevels", types: ["sublevels"] },
 { name: "4 vines in a world", types: ["vines"] },
];
bingoList[11] = [
 { name: "Kill 4 different types of chucks", types: ["chucks"] },
 { name: "Mount 6 Yoshis", types: ["yoshis"] },
 { name: "Mount a Blue Yoshi", types: ["yoshis"] },
 { name: "Feed Blue Yoshi", types: ["yoshis"] },
 { name: "2 Switch Palaces", types: ["structures"] },
 { name: "4 levels without coins", types: ["no_coins"] },
 { name: "12 Message Blocks", types: ["message_blocks"] },
 { name: "Kill a non-boss Big Boo", types: ["kill"] },
];
bingoList[12] = [
 { name: "Feed Red Yoshi", types: ["yoshis","starworld"] },
 { name: "Feed Yellow Yoshi", types: ["yoshis","starworld"] },
 { name: "3 lives in 4 levels (12)", types: ["lives"] },
 { name: "500.000 Points", types: ["points"] },
 { name: "All yoshi coins of 2 levels in 2 worlds (4)", types: ["yoshi_coins"] },
 { name: "2 Lives from Bonus blocks ", types: ["bonus_blocks"] },
 { name: "6 Secret Exits", types: ["secret"] },
 { name: "5 lives in world 3", types: ["lives","world3"] },
];
bingoList[13] = [
 { name: "Unlock Special World", types: ["specialworld"] },
 { name: "15 Message Blocks", types: ["message_blocks"] },
 { name: "All Message Blocks in world 2 (5)", types: ["message_blocks","world2"] },
 { name: "3 Springs", types: ["springs"] },
 { name: "Both exits of 2 levels in 2 worlds (4)", types: ["secret"] },
 { name: "Hit all 3 types of P’s", types: ["task"] },
 { name: "1000 coins", types: ["coins"] },
 { name: "All vines in starworld (1)", types: ["vines","starworld"] }
];
bingoList[14] = [
 { name: "Bowser Castle door 1 and 5", types: ["bowser"] },
 { name: "Bowser Castle doors 2 and 6", types: ["bowser"] },
 { name: "20 Exits", types: ["exit"] },
 { name: "All Message Blocks in Special World (1)", types: ["message_blocks","specialworld"] },
 { name: "1 Star in 3 worlds (Power-up)", types: ["stars"] },
 { name: "8 vines ", types: ["vines"] },
 { name: "All vines on special world (6) ", types: ["vines","specialworld"] },
 { name: "3 Ghost Houses", types: ["structures"] },
];
bingoList[15] = [
 { name: "10 vines", types: ["vines"] },
 { name: "4 Springs", types: ["springs"] },
 { name: "Bowser Castle doors 3 and 7", types: ["bowser"] },
 { name: "Bowser Castle doors 4 and 8", types: ["bowser"] },
 { name: "5 levels without coins", types: ["no_coins"] },
 { name: "6 levels all yoshi coins", types: ["yoshi_coins"] },
 { name: "5 lives in special world", types: ["specialworld","lives"] },
 { name: "2 Castles and 2 Switch Palaces", types: ["structures"] },
];
bingoList[16] = [
 { name: "Kill a splitting chuck ", types: ["chucks"] },
 { name: "Kill a bouncing chuck", types: ["chucks"] },
 { name: "2 Ghost houses and 2 Switch palaces", types: ["structures"] },
 { name: "99 Total Lives", types: ["lives"] },
 { name: "Eat a Blargg (Lava enemy)", types: ["kill"] },
 { name: "3 vines in 2 worlds (6)", types: ["vines"] },
 { name: "In the Six", types: ["bowser"] },
 { name: "3 Castles", types: ["structures"] },
];
bingoList[17] = [
 { name: "All structures in World 2 (4)", types: ["world2","structures"] },
 { name: "3 Sublevels in 2 worlds (6)", types: ["sublevels"] },
 { name: "All springs in world 3 (2)", types: ["springs","world3"] },
 { name: "6 Structures", types: ["structures"] },
 { name: "Hit a note block", types: ["task"] },
 { name: "Kill 2 chucks in 3 worlds", types: ["chucks"] },
 { name: "3 Bonus Games", types: ["bonus"] },
 { name: "Complete both exits of 5 levels", types: ["secret"] },
];
bingoList[18] = [
 { name: "Red Switch Palace", types: ["structures"] },
 { name: "1 Fort", types: ["structures"] },
 { name: "Kill a Pufferfish", types: ["kill"] },
 { name: "Kill a Lakitu in a pipe", types: ["kill"] },
 { name: "All vines in world 3 (5)", types: ["vines","world3"] },
 { name: "Hit 2 grays P switches", types: ["task"] },
 { name: "Yoshi wings on Way Cool", types: ["specialworld"] },
 { name: "2 Starworld entrances", types: ["starworld"] },
];
bingoList[19] = [
 { name: "25 Exits", types: ["exit"] },
 { name: "All Secret Exits on world 2", types: ["secret","world2"] },
 { name: "Starworld All Exits (10)", types: ["starworld"] },
 { name: "2 Sublevels in 3 worlds (6) ", types: ["sublevels"] },
 { name: "All yoshi coins of 3 levels in 2 worlds (6)", types: ["yoshi_coins"] },
 { name: "8 Secret Exits", types: ["secret"] },
 { name: "1 Sublevel in 4 worlds (4)", types: ["sublevels"] },
 { name: "Kill a chuck in 2 levels of world 3 ", types: ["chucks"] },
];
bingoList[20] = [
 { name: "14 vines", types: ["vines"] },
 { name: "Both exits of 1 level in 3 worlds (3)", types: ["secret"] },
 { name: "5 lives in world 4 ", types: ["world4","lives"] },
 { name: "All vines in world 4 (1)", types: ["vines","world4"] },
 { name: "3 Moons", types: ["moon"] },
 { name: "Kill a chuck in 2 levels of special world", types: ["chucks","specialworld"] },
 { name: "Mount 8 Yoshis", types: ["yoshis"] },
 { name: "3 Moons", types: ["yoshi_coins"] },
];
bingoList[21] = [
 { name: "Reach Castle 4 from Butterbridge", types: ["world4"] },
 { name: "Reach Castle 4 from Cookie Mountain", types: ["world4"] },
 { name: "Yoshi wings on Cheese Bridge Area", types: ["world4"] },
 { name: "Both exits of 2 levels in 3 worlds (6)", types: ["secret"] },
 { name: "Both exits of 3 levels in 2 worlds (6)", types: ["secret"] },
 { name: "All sublevels in World 3 (4)", types: ["world3","sublevels"] },
 { name: "Game over", types: ["task"] },
 { name: "1 star in 4 worlds (Power-up)", types: ["stars"] },
];
bingoList[22] = [
 { name: "All berries in world 4 (2)", types: ["world4","berries"] },
 { name: "All berries in one level of the special world ", types: ["specialworld","berries"] },
 { name: "3 Switch Palaces", types: ["structures"] },
 { name: "8 levels all yoshi coins", types: ["yoshi_coins"] },
 { name: "8 Sublevels", types: ["sublevels"] },
 { name: "Complete both exits of 7 levels", types: ["secret"] },
 { name: "Mount 10 Yoshis", types: ["yoshis"] },
 { name: "All springs in special world (3) ", types: ["specialworld","springs"] },
];
bingoList[23] = [
 { name: "Kill a Pokey in 2 different levels", types: ["kill"] },
 { name: "Kill a Sumo Bro", types: ["kill"] },
 { name: "8 Structures", types: ["structures"] },
 { name: "Feed all yoshis", types: ["yoshis","starworld"] },
 { name: "3 Starworld entrances", types: ["starworld"] },
 { name: "All yoshi coins of 2 levels in 4 worlds (8)", types: ["yoshi_coins"] },
 { name: "All sublevels in special world (2)", types: ["specialworld","sublevels"] },
 { name: "4 Castles", types: ["castle"] },
];
bingoList[24] = [
 { name: "Beat the game", types: ["bowser"] },
 { name: "30 Exits", types: ["exit"] },
 { name: "10 Secret Exits", types: ["secret"] },
 { name: "Bowser Castle all doors", types: ["bowser"] },
 { name: "All Structures in World 3 (4)", types: ["world3","structures"] },
 { name: "10 Sublevels", types: ["sublevels"] },
 { name: "3 Lives from Bonus blocks", types: ["bonus_blocks"] },
 { name: "Kill a whistling Chuck", types: ["chucks","specialworld"] },
];
bingoList[25] = [
 { name: "9 Structures", types: ["structures"] },
 { name: "Complete both exits of 8 levels", types: ["secret"] },
 { name: "World 3 All Exits (14)", types: ["world3"] },
 { name: "Special World All Exits (8)", types: ["specialworld"] },
 { name: "All yoshi coins of 3 levels in 3 worlds (9)", types: ["yoshi_coins"] },
 { name: "10 levels all yoshi coins", types: ["yoshi_coins"] },
 { name: "4 Moons ", types: ["moon"] },
 { name: "World 2 All Exits (15)", types: ["world2"] },
];
