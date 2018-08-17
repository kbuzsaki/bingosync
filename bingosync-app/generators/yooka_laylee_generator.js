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
}

var bingoList = [];

bingoList[1] = [
	{ name: "2 Health Extenders", types: ["extender"] },
	{ name: "Shipwreck Pagies", types: ["pagie"] },
	{ name: "Shipwreck Quills", types:["quill"] }
];
bingoList[2] = [
	{ name: "Kartos Karting", types: ["rextro", "tribal"] },
	{ name: "2 Rextro Pagies", types: ["rextro"] },
	{ name: "5 Ghost Writers", types: ["ghostwriter"] },
	{ name: "5 Hub Pagies", types:["pagie"] }
];
bingoList[3] = [
	{ name: "Tribal Kartos", types: ["kartos", "tribal"] },
	{ name: "2 Energy Extenders", types: ["extender"] },
	{ name: "50 Quills in 2 Worlds", types: ["quill"] },
	{ name: "Defeat Rampo", types: ["boss", "tribal"] }
];
bingoList[4] = [
	{ name: "Expand Glitter", types: ["tome", "glitter"] },
	{ name: "Expand 2 Tomes", types: ["tome"] },
	{ name: "Learn all Tribal Moves", types: ["trowzer","tribal"] },
	{ name: "Glitter Kartos", types: ["kartos", "glitter"] }
];
bingoList[5] = [
	{ name: "Help Clara 2 Times", types: ["pagie"] },
	{ name: "Learn 8 Trowzer moves", types: ["trowzer"] },
	{ name: "Tribal Ghost Writers", types: ["ghostwriter", "tribal"] }
];
bingoList[6] = [
	{ name: "Unlock Moody", types: ["tome", "moody"] },
	{ name: "Freezing Room - Intended Way", types: ["pagie", "glitter", "challenge"] },
	{ name: "Glaciators", types: ["rextro", "glitter"] }
];
bingoList[7] = [
	{ name: "Defeat Brrreeze", types: ["boss", "glitter"] },
	{ name: "Glitter Ghost Writers", types: ["ghostwriter", "glitter"] },
	{ name: "Help Planker 2 Times", types: ["pagie"] }
];
bingoList[8] = [
	{ name: "Learn all Glitter Moves", types: ["trowzer", "glitter"] },
	{ name: "10 Hub Pagies", types:["pagie"] },
	{ name: "2 Transformation Pagies", types: ["pagie"] },
	{ name: "Brrreeze - No Skip", types:["pagie", "glitter", "challenge"] }
];
bingoList[9] = [
	{ name: "Quiz 1", types:["challenge"] },
	{ name: "10 Sub-Area Pagies", types:["pagie"] },
	{ name: "Bee Bop", types: ["rextro", "moody"] },
	{ name: "Tribal Planker - Flightless", types: ["pagie", "tribal", "challenge"] }
];
bingoList[10] = [
	{ name: "Unlock Cashino", types: ["tome", "cashino"] },
	{ name: "Expand Moody ", types: ["tome", "moody"] },
	{ name: "Moody Kartos", types: ["kartos", "moody"] },
	{ name: "Defeat 2 Bosses", types:["boss"] }
];
bingoList[11] = [
	{ name: "4 Health Extenders", types: ["extender"] },
	{ name: "Defeat Trev", types: ["boss", "moody"] },
	{ name: "Hurdle Hijinx", types: ["rextro", "cashino"] },
	{ name: "Help 2 Trolleys", types: ["pagie", "moody"] }
];
bingoList[12] = [
	{ name: "2 Pirate Treasures", types: ["pirate"] },
	{ name: "100 Quills in 2 Worlds", types: [ "quill"] },
	{ name: "Race Nimble 2 Times", types: ["pagie"] },
	{ name: "200 Quills", types: ["quill"] }
];
bingoList[13] = [
	{ name: "Learn all Moody Moves", types: ["trowzer", "moody"] },
	{ name: "Moody Ghost Writers", types: ["ghostwriter", "moody"] },
	{ name: "Toxic Pipe Pagie, No Sonar Sheild/Reptile Rush", types: ["pagie", "challenge"] }
];
bingoList[14] = [
	{ name: "Cashino Kartos", types: ["kartos", "cashino"] },
	{ name: "Open Moody First", types:["challenge", "tome", "moody"] },
	{ name: "Unlock Galleon", types: ["tome", "galleon"] }
];
bingoList[15] = [
	{ name: "Expand 3 Tomes", types: ["tome"] },
	{ name: "Defeat I.N.E.P.T.", types: ["boss", "cashino", "kartos"] },
	{ name: "2 Kartos Pagies", types: ["kartos"] },
	{ name: "4 Transformation Pagies", types: ["pagie"] }
];
bingoList[16] = [
	{ name: "4 Energy Extenders", types: ["extender"] },
	{ name: "Save 10 Ghost Writers", types: ["ghostwriter"] },
	{ name: "Up 'n' Nova", types: ["rextro", "galleon"] }
];
bingoList[17] = [
	{ name: "15 Hub Pagies", types:["pagie"] },
	{ name: "Learn 12 Trowzer moves", types: ["trowzer"] },
	{ name: "30 Tokens from broken slot machines", types: ["pagie", "cashino"] },
	{ name: "Expand Cashino", types: ["tome", "cashino"] }
];
bingoList[18] = [
	{ name: "200 Quill Pagie", types: ["quill"] },
	{ name: "400 Quills", types: ["quill"] },
	{ name: "4 Rextro Pagies", types: ["rextro"] }
];
bingoList[19] = [
	{ name: "3 Pirate Treasures", types: ["pirate"] },
	{ name: "15 Sub-Area Pagies", types:["pagie"] },
	{ name: "Expand Galleon", types: ["tome", "galleon"] }
];
bingoList[20] = [
	{ name: "Cashino Ghost Writers", types: ["ghostwriter", "cashino"] },
	{ name: "Unlock All Grand Tomes", types: ["tome", "completionist"] },
	{ name: "Help 2 Space Frogs", types: ["pagie", "galleon"] }
];
bingoList[21] = [
	{ name: "Galleon Ghost Writers", types: ["ghostwriter", "galleon"] },
	{ name: "4 Pirate Treasures", types: ["pirate"] },
	{ name: "Deal with 8 Knights of Hamalot", types: ["pagie"] },
	{ name: "Defeat Planette", types: ["boss", "galleon"] }
];
bingoList[22] = [
	{ name: "3 Kartos Pagies", types: ["kartos"] },
	{ name: "Galleon Kartos", types: ["kartos", "galleon"] },
	{ name: "Play 2 Rounds of Golf", types: ["pagie"] },
	{ name: "All Playcoins", types: ["completionist"] }
];
bingoList[23] = [
	{ name: "Save 15 Ghost Writers", types: ["ghostwriter"] },
	{ name: "6 Transformation Pagies", types: ["pagie"] },
	{ name: "All Mollycools", types: ["completionist"] },
	{ name: "Windtunnel Pagie, No Reptile Rush", types: ["pagie", "challenge"] }
];
bingoList[24] = [
	{ name: "6 Rextro Pagies", types: ["rextro"] },
	{ name: "Learn all 15 Trowzer moves", types: ["trowzer","completionist"] },
	{ name: "600 Quills", types: ["quill"] },
	{ name: "20 Sub-Area Pagies", types:["pagie"] }
];
bingoList[25] = [
	{ name: "Defeat 4 Bosses", types:["boss"] },
	{ name: "Defeat Cap B w/ Missle Riding", types:["boss", "challenge"] },
	{ name: "Complete All Kartos Tracks", types: ["kartos", "completionist"] },
	{ name: "Defeat Cap B w/ Butterthree", types:["boss", "challenge"] }
];
