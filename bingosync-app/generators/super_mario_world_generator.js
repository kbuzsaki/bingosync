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
  { name: "5 exits", types: ["exit"] },
  { name: "200 coins", types: ["coin"] },
  { name: "3 Message Blocks", types: ["message_blocks"] },
  { name: "10 lives", types: ["lives"] },
  { name: "Get 5 lives in world 1", types: ["lives","world1"] },
  { name: "Mount 2 yoshis", types: ["yoshi"] }
];
bingoList[2] = [
  { name: "1 Castle", types: ["structures"] },
  { name: "1 Ghost house", types: ["structures"] },
  { name: "6 message blocks", types: ["message_blocks"] },
  { name: "2 levels all yoshi coins", types: ["yoshi_coins"] },
  { name: "Mount 4 yoshis", types: ["yoshi"] },
  { name: "1 star (Power-up)", types: ["task"] },
];
bingoList[3] = [
  { name: "1 Switch Palace", types: ["structures"] },
  { name: "5 lives in world 2", types: ["lives"] },
  { name: "Diagonal mario", types: ["task"] },
  { name: "9 message blocks", types: ["message_blocks"] },
  { name: "Kill a non-boss Big Boo", types: ["task"] },
  { name: "2 structures", types: ["structures"] },
];
bingoList[4] = [
  { name: "All yoshi coins of 1 level in 2 worlds (2)", types: ["yoshi_coins"] },
  { name: "400 coins", types: ["coin"] },
  { name: "Complete both exits of a level", types: ["secret"] },
  { name: "1 Starworld entrance", types: ["starworld"] },
  { name: "2 Ghost Houses", types: ["structures"] },
  { name: "Yellow Switch", types: ["structures"] },
];
bingoList[5] = [
  { name: "2 lives in 3 levels (6)", types: ["lives"] },
  { name: "4 levels all yoshi coins", types: ["yoshi_coins"] },
  { name: "1 Moon", types: ["moon"] },
  { name: "12 Message Blocks", types: ["message_blocks"] },
  { name: "Top Secret Area", types: ["world2","task"] },
  { name: "World 1 All Exits", types: ["world1","exit"] },
];
bingoList[6] = [
  { name: "2 Castles", types: ["structures"] },
  { name: "3 lives in 3 levels (9)", types: ["lives"] },
  { name: "All Message Blocks in world 1 (11)", types: ["message_blocks","world1"] },
  { name: "Feed Blue Yoshi", types: ["yoshi"] },
  { name: "Mount a Blue Yoshi", types: ["yoshi"] },
  { name: "10 Exits", types: ["exit"] },
];
bingoList[7] = [
  { name: "3 Secret Exits", types: ["secret"] },
  { name: "2 levels all yoshi coins in world 2", types: ["world2","yoshi_coins"] },
  { name: "Feed Red Yoshi", types: ["yoshi"] },
  { name: "2 Moons", types: ["moon"] },
  { name: "Mount a Red Yoshi", types: ["task"] },
  { name: "Eat a disco shell", types: ["task"] },
];
bingoList[8] = [
  { name: "4 Structures", types: ["structures"] },
  { name: "Feed Yellow Yoshi", types: ["yoshi"] },
  { name: "Mount a Yellow Yoshi", types: ["yoshi"] },
  { name: "All yoshi coins in world 1", types: ["yoshi_coins"] },
  { name: "600 coins", types: ["coin"] },
  { name: "1 Bonus Game", types: ["task"] },
];
bingoList[9] = [
  { name: "3 Stars (Power-up)", types: ["task"] },
  { name: "Complete both exits of 3 levels", types: ["secret"] },
  { name: "5 lives in starworld", types: ["lives","starworld"] },
  { name: "25 Lives", types: ["lives"] },
  { name: "Complete Donut secret 2", types: ["world2"] },
  { name: "All yoshi coins of 2 levels in 2 worlds (4)", types: ["yoshi_coins"] },
];
bingoList[10] = [
  { name: "15 Message Blocks", types: ["message_blocks"] },
  { name: "15 Exits", types: ["exit"] },
  { name: "Both exits of 2 levels in 2 worlds (4)", types: ["secret"] },
  { name: "Green Switch Palace", types: ["structure"] },
  { name: "Mount 6 Yoshis", types: ["yoshi"] },
  { name: "2 P-Balloons in World 2", types: ["task","world2"] },
];
bingoList[11] = [
  { name: "2 Castles and 2 Switch Palaces", types: ["structures"] },
  { name: "2 Switch Palaces", types: ["structures"] },
  { name: "Unlock Special World", types: ["starworld"] },
  { name: "All Message Blocks in Special World (1)", types: ["message_blocks","starworld"] },
  { name: "3 lives in 4 levels (12)", types: ["lives"] },
  { name: "99 Lives", types: ["lives"] },
];
bingoList[12] = [
  { name: "800 coins", types: ["coin"] },
  { name: "Complete both exits of 5 levels", types: ["secret"] },
  { name: "5 lives in world 3", types: ["lives","world3"] },
  { name: "3 Ghost Houses", types: ["structures"] },
  { name: "6 Structures", types: ["structures"] },
  { name: "2 Ghost houses and 2 Switch palaces", types: ["structures"] },
];
bingoList[13] = [
  { name: "All structures in World 2 (4)", types: ["structures","world2"] },
  { name: "6 Secret Exits", types: ["secret"] },
  { name: "2 Moons", types: ["moon"] },
  { name: "Eat a Blargg (Lava enemy)", types: ["task"] },
  { name: "6 levels all yoshi coins", types: ["yoshi_coins"] },
  { name: "3 Castles", types: ["structures"] },
];
bingoList[14] = [
  { name: "20 Exits", types: ["exit"] },
  { name: "Red Switch Palace", types: ["structures"] },
  { name: "5 Stars (Power-up)", types: ["task"] },
  { name: "All yoshi coins of 3 levels in 2 worlds (6)", types: ["yoshi_coins"] },
  { name: "1000 coins", types: ["coin"] },
  { name: "All power ups in bonus ", types: ["task"] },
];
bingoList[15] = [
  { name: "Bowser Castle door 1 and 5", types: ["bowser"] },
  { name: "Bowser Castle doors 2 and 6", types: ["bowser"] },
  { name: "Both exits of 1 level in 3 worlds (3)", types: ["secret"] },
  { name: "2 Bonus Games", types: ["task"] },
  { name: "Kill a lakitu in a pipe", types: ["task"] },
  { name: "Spin on a Magikoopa’s attack", types: ["taski"] },
];
bingoList[16] = [
  { name: "25 Exits", types: ["exit"] },
  { name: "1 Fort", types: ["structures"] },
  { name: "Bowser Castle doors 3 and 7", types: ["bowser"] },
  { name: "Bowser Castle doors 4 and 8", types: ["bowser"] },
  { name: "1 star at Goal point", types: ["task"] },
  { name: "50 stars at Goal point", types: ["task"] },
];
bingoList[17] = [
  { name: "5 lives in world 4", types: ["lives","world4"] },
  { name: "Starworld All Exits (10)", types: ["starworld"] },
  { name: "8 Structures", types: ["structures"] },
  { name: "2 levels all yoshi coins in world 3", types: ["yoshi_coins","world3"] },
  { name: "Mount 8 Yoshis", types: ["yoshi"] },
  { name: "Both exits of 3 levels in 2 worlds (6)", types: ["secret"] },
];
bingoList[18] = [
  { name: "4 Castles", types: ["structures"] },
  { name: "8 Secret Exits", types: ["secret"] },
  { name: "Kill a Pufferfish", types: ["task"] },
  { name: "3 Moons", types: ["moon"] },
  { name: "2 Starworld entrances", types: ["starworld"] },
  { name: "17 Message Blocks", types: ["message_blocks"] },
];
bingoList[19] = [
  { name: "Yoshi wings on Cheese Bridge Area", types: ["world4"] },
  { name: "Reach Castle 4 from Butterbridge", types: ["world4"] },
  { name: "Reach Castle 4 from Cookie Mountain", types: ["world4"] },
  { name: "All Secret Exits on world 2", types: ["secret","world2"] },
  { name: "3 Bonus Games", types: ["task"] },
  { name: "8 levels all yoshi coins", types: ["yoshi_coins"] },
];
bingoList[20] = [
  { name: "3 Switch Palaces", types: ["structures"] },
  { name: "Yoshi wings on Way Cool", types: ["starworld"] },
  { name: "4 Exits in Special World", types: ["starworld"] },
  { name: "Feed all yoshis", types: ["yoshi","starworld"] },
  { name: "30 Exits", types: ["exit"] },
  { name: "Both exits of 2 levels in 3 worlds (6)", types: ["secret"] },
];
bingoList[21] = [
  { name: "All Structures in World 3 (4)", types: ["world3","structures"] },
  { name: "Complete both exits of 7 levels", types: ["secret"] },
  { name: "10 Secret Exits", types: ["secret"] },
  { name: "1 Perfect Bonus Game", types: ["task"] },
  { name: "10 levels all yoshi coins", types: ["yoshi_coins"] },
  { name: "Mount 10 Yoshis", types: ["yoshi"] },
];
bingoList[22] = [
  { name: "Forest of illusion Useless Exit", types: ["world5"] },
  { name: "Blue Switch Palace", types: ["structures"] },
  { name: "10 Structures", types: ["structures"] },
  { name: "4 Moons", types: ["moon"] },
  { name: "World 2 All Exits (15)", types: ["world2"] },
  { name: "Game over", types: ["task"] },
];
bingoList[23] = [
  { name: "Complete both exits of 9 levels", types: ["secret"] },
  { name: "Bowser Castle all doors", types: ["bowser"] },
  { name: "P-Balloon in Forest of illusion", types: ["structures","lategame"] },
  { name: "35 Exits", types: ["exit"] },
  { name: "4 Ghost Houses", types: ["structures"] },
  { name: "All yoshi coins of 2 levels in 4 worlds (8)", types: ["yoshi_coins"] },
];
bingoList[24] = [
  { name: "Beat the game", types: ["bowser"] },
  { name: "Complete Special World", types: ["starworld"] },
  { name: "World 4 All Exits (7)", types: ["world4"] },
  { name: "5 Castles", types: ["structures"] },
  { name: "3 StarWorld entrances", types: ["starworld"] },
  { name: "Max Score", types: ["task"] },
];
bingoList[25] = [
  { name: "4 Switch Palaces", types: ["structures"] },
  { name: "All yoshi coins of 3 levels in 3 worlds (9)", types: ["yoshi_coins"] },
  { name: "40 Exits", types: ["exit"] },
  { name: "2 Forts", types: ["structures"] },
  { name: "5 Moons", types: ["moon"] },
  { name: "World 3 All Exits (14)", types: ["world3"] },
];

