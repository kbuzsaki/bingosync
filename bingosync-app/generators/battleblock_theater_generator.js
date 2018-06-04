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
  { name: "1-Secret", types: ["ch1"] },
  { name: "2-Secret", types: ["ch2"] },
  { name: "3-Secret", types: ["ch3"] },
  { name: "4-Secret", types: ["ch4"] },
  { name: "5-Secret", types: ["ch5"] },
  { name: "6-Secret", types: ["ch6"] },
  { name: "7-Secret", types: ["ch7"] },
  { name: "8-Secret", types: ["ch8"] },
  { name: "1-Secret Weaponless", types: ["ch1"] },
  { name: "2-Secret Weaponless", types: ["ch2"] },
  { name: "3-Secret Weaponless", types: ["ch3"] },
  { name: "4-Secret Weaponless", types: ["ch4"] },
  { name: "5-Secret Weaponless", types: ["ch5"] },
  { name: "6-Secret Weaponless", types: ["ch6"] },
  { name: "7-Secret Weaponless", types: ["ch7"] },
  { name: "8-Secret Weaponless", types: ["ch8"] },
];
bingoList[2] = [
  { name: "1-Secret 100%", types: ["ch1"] },
  { name: "2-Secret 100%", types: ["ch2"] },
  { name: "3-Secret 100%", types: ["ch3"] },
  { name: "4-Secret 100%", types: ["ch4"] },
  { name: "5-Secret 100%", types: ["ch5"] },
  { name: "6-Secret 100%", types: ["ch6"] },
  { name: "7-Secret 100%", types: ["ch7"] },
  { name: "8-Secret 100%", types: ["ch8"] },
  { name: "1-Secret Weaponless 100%", types: ["ch1"] },
  { name: "2-Secret Weaponless 100%", types: ["ch2"] },
  { name: "3-Secret Weaponless 100%", types: ["ch3"] },
  { name: "4-Secret Weaponless 100%", types: ["ch4"] },
  { name: "5-Secret Weaponless 100%", types: ["ch5"] },
  { name: "6-Secret Weaponless 100%", types: ["ch6"] },
  { name: "7-Secret Weaponless 100%", types: ["ch7"] },
  { name: "8-Secret Weaponless 100%", types: ["ch8"] },
];
bingoList[3] = [
  { name: "1-1", types: ["ch1"] },
  { name: "1-2", types: ["ch1"] },
  { name: "1-3", types: ["ch1"] },
  { name: "1-4", types: ["ch1"] },
  { name: "1-5", types: ["ch1"] },
  { name: "1-6", types: ["ch1"] },
  { name: "1-7", types: ["ch1"] },
  { name: "1-8", types: ["ch1"] },
  { name: "1-9", types: ["ch1"] },
  { name: "1-Fin", types: ["ch1"] },
  { name: "1-E1", types: ["ch1"] },
  { name: "1-E2", types: ["ch1"] },
  { name: "1-E3", types: ["ch1"] },
  { name: "2-1", types: ["ch2"] },
  { name: "2-2", types: ["ch2"] },
  { name: "2-3", types: ["ch2"] },
  { name: "2-4", types: ["ch2"] },
  { name: "2-5", types: ["ch2"] },
  { name: "2-6", types: ["ch2"] },
  { name: "2-7", types: ["ch2"] },
  { name: "2-8", types: ["ch2"] },
  { name: "2-9", types: ["ch2"] },
  { name: "2-Fin", types: ["ch2"] },
  { name: "2-E1", types: ["ch2"] },
  { name: "2-E2", types: ["ch2"] },
  { name: "2-E3", types: ["ch2"] },
  { name: "3-1", types: ["ch3"] },
  { name: "3-2", types: ["ch3"] },
  { name: "3-3", types: ["ch3"] },
  { name: "3-4", types: ["ch3"] },
  { name: "3-5", types: ["ch3"] },
  { name: "3-6", types: ["ch3"] },
  { name: "3-7", types: ["ch3"] },
  { name: "3-8", types: ["ch3"] },
  { name: "3-9", types: ["ch3"] },
  { name: "3-Fin", types: ["ch3"] },
  { name: "3-E1", types: ["ch3"] },
  { name: "3-E2", types: ["ch3"] },
  { name: "3-E3", types: ["ch3"] },
  { name: "4-1", types: ["ch4"] },
  { name: "4-2", types: ["ch4"] },
  { name: "4-3", types: ["ch4"] },
  { name: "4-4", types: ["ch4"] },
  { name: "4-5", types: ["ch4"] },
  { name: "4-6", types: ["ch4"] },
  { name: "4-7", types: ["ch4"] },
  { name: "4-8", types: ["ch4"] },
  { name: "4-9", types: ["ch4"] },
  { name: "4-Fin", types: ["ch4"] },
  { name: "4-E1", types: ["ch4"] },
  { name: "4-E2", types: ["ch4"] },
  { name: "4-E3", types: ["ch4"] },
  { name: "5-1", types: ["ch5"] },
  { name: "5-2", types: ["ch5"] },
  { name: "5-3", types: ["ch5"] },
  { name: "5-4", types: ["ch5"] },
  { name: "5-5", types: ["ch5"] },
  { name: "5-6", types: ["ch5"] },
  { name: "5-7", types: ["ch5"] },
  { name: "5-8", types: ["ch5"] },
  { name: "5-9", types: ["ch5"] },
  { name: "5-Fin", types: ["ch5"] },
  { name: "5-E1", types: ["ch5"] },
  { name: "5-E2", types: ["ch5"] },
  { name: "5-E3", types: ["ch5"] },
  { name: "6-1", types: ["ch6"] },
  { name: "6-2", types: ["ch6"] },
  { name: "6-3", types: ["ch6"] },
  { name: "6-4", types: ["ch6"] },
  { name: "6-5", types: ["ch6"] },
  { name: "6-6", types: ["ch6"] },
  { name: "6-7", types: ["ch6"] },
  { name: "6-8", types: ["ch6"] },
  { name: "6-9", types: ["ch6"] },
  { name: "6-Fin", types: ["ch6"] },
  { name: "6-E1", types: ["ch6"] },
  { name: "6-E2", types: ["ch6"] },
  { name: "6-E3", types: ["ch6"] },
  { name: "7-1", types: ["ch7"] },
  { name: "7-2", types: ["ch7"] },
  { name: "7-3", types: ["ch7"] },
  { name: "7-4", types: ["ch7"] },
  { name: "7-5", types: ["ch7"] },
  { name: "7-6", types: ["ch7"] },
  { name: "7-7", types: ["ch7"] },
  { name: "7-8", types: ["ch7"] },
  { name: "7-9", types: ["ch7"] },
  { name: "7-Fin", types: ["ch7"] },
  { name: "7-E1", types: ["ch7"] },
  { name: "7-E2", types: ["ch7"] },
  { name: "7-E3", types: ["ch7"] },
  { name: "8-1", types: ["ch8"] },
  { name: "8-2", types: ["ch8"] },
  { name: "8-3", types: ["ch8"] },
  { name: "8-4", types: ["ch8"] },
  { name: "8-5", types: ["ch8"] },
  { name: "8-6", types: ["ch8"] },
  { name: "8-7", types: ["ch8"] },
  { name: "8-8", types: ["ch8"] },
  { name: "8-9", types: ["ch8"] },
  { name: "8-Fin", types: ["ch8"] },
  { name: "8-E1", types: ["ch8"] },
  { name: "8-E2", types: ["ch8"] },
  { name: "8-E3", types: ["ch8"] },
];
bingoList[4] = [
  { name: "1-1 Weaponless", types: ["ch1"] },
  { name: "1-2 Weaponless", types: ["ch1"] },
  { name: "1-3 Weaponless", types: ["ch1"] },
  { name: "1-4 Weaponless", types: ["ch1"] },
  { name: "1-5 Weaponless", types: ["ch1"] },
  { name: "1-6 Weaponless", types: ["ch1"] },
  { name: "1-7 Weaponless", types: ["ch1"] },
  { name: "1-8 Weaponless", types: ["ch1"] },
  { name: "1-9 Weaponless", types: ["ch1"] },
  { name: "1-Fin Weaponless", types: ["ch1"] },
  { name: "1-E1 Weaponless", types: ["ch1"] },
  { name: "1-E2 Weaponless", types: ["ch1"] },
  { name: "1-E3 Weaponless", types: ["ch1"] },
  { name: "2-1 Weaponless", types: ["ch2"] },
  { name: "2-2 Weaponless", types: ["ch2"] },
  { name: "2-3 Weaponless", types: ["ch2"] },
  { name: "2-4 Weaponless", types: ["ch2"] },
  { name: "2-5 Weaponless", types: ["ch2"] },
  { name: "2-6 Weaponless", types: ["ch2"] },
  { name: "2-7 Weaponless", types: ["ch2"] },
  { name: "2-8 Weaponless", types: ["ch2"] },
  { name: "2-9 Weaponless", types: ["ch2"] },
  { name: "2-Fin Weaponless", types: ["ch2"] },
  { name: "2-E1 Weaponless", types: ["ch2"] },
  { name: "2-E2 Weaponless", types: ["ch2"] },
  { name: "2-E3 Weaponless", types: ["ch2"] },
  { name: "3-1 Weaponless", types: ["ch3"] },
  { name: "3-2 Weaponless", types: ["ch3"] },
  { name: "3-3 Weaponless", types: ["ch3"] },
  { name: "3-4 Weaponless", types: ["ch3"] },
  { name: "3-5 Weaponless", types: ["ch3"] },
  { name: "3-6 Weaponless", types: ["ch3"] },
  { name: "3-7 Weaponless", types: ["ch3"] },
  { name: "3-8 Weaponless", types: ["ch3"] },
  { name: "3-9 Weaponless", types: ["ch3"] },
  { name: "3-Fin Weaponless", types: ["ch3"] },
  { name: "3-E1 Weaponless", types: ["ch3"] },
  { name: "3-E2 Weaponless", types: ["ch3"] },
  { name: "3-E3 Weaponless", types: ["ch3"] },
  { name: "4-1 Weaponless", types: ["ch4"] },
  { name: "4-2 Weaponless", types: ["ch4"] },
  { name: "4-3 Weaponless", types: ["ch4"] },
  { name: "4-4 Weaponless", types: ["ch4"] },
  { name: "4-5 Weaponless", types: ["ch4"] },
  { name: "4-6 Weaponless", types: ["ch4"] },
  { name: "4-7 Weaponless", types: ["ch4"] },
  { name: "4-8 Weaponless", types: ["ch4"] },
  { name: "4-9 Weaponless", types: ["ch4"] },
  { name: "4-Fin Weaponless", types: ["ch4"] },
  { name: "4-E1 Weaponless", types: ["ch4"] },
  { name: "4-E2 Weaponless", types: ["ch4"] },
  { name: "4-E3 Weaponless", types: ["ch4"] },
  { name: "5-1 Weaponless", types: ["ch5"] },
  { name: "5-2 Weaponless", types: ["ch5"] },
  { name: "5-3 Weaponless", types: ["ch5"] },
  { name: "5-4 Weaponless", types: ["ch5"] },
  { name: "5-5 Weaponless", types: ["ch5"] },
  { name: "5-6 Weaponless", types: ["ch5"] },
  { name: "5-7 Weaponless", types: ["ch5"] },
  { name: "5-8 Weaponless", types: ["ch5"] },
  { name: "5-9 Weaponless", types: ["ch5"] },
  { name: "5-Fin Weaponless", types: ["ch5"] },
  { name: "5-E1 Weaponless", types: ["ch5"] },
  { name: "5-E2 Weaponless", types: ["ch5"] },
  { name: "5-E3 Weaponless", types: ["ch5"] },
  { name: "6-1 Weaponless", types: ["ch6"] },
  { name: "6-2 Weaponless", types: ["ch6"] },
  { name: "6-3 Weaponless", types: ["ch6"] },
  { name: "6-4 Weaponless", types: ["ch6"] },
  { name: "6-5 Weaponless", types: ["ch6"] },
  { name: "6-6 Weaponless", types: ["ch6"] },
  { name: "6-7 Weaponless", types: ["ch6"] },
  { name: "6-8 Weaponless", types: ["ch6"] },
  { name: "6-9 Weaponless", types: ["ch6"] },
  { name: "6-Fin Weaponless", types: ["ch6"] },
  { name: "6-E1 Weaponless", types: ["ch6"] },
  { name: "6-E2 Weaponless", types: ["ch6"] },
  { name: "6-E3 Weaponless", types: ["ch6"] },
  { name: "7-1 Weaponless", types: ["ch7"] },
  { name: "7-2 Weaponless", types: ["ch7"] },
  { name: "7-3 Weaponless", types: ["ch7"] },
  { name: "7-4 Weaponless", types: ["ch7"] },
  { name: "7-5 Weaponless", types: ["ch7"] },
  { name: "7-6 Weaponless", types: ["ch7"] },
  { name: "7-7 Weaponless", types: ["ch7"] },
  { name: "7-8 Weaponless", types: ["ch7"] },
  { name: "7-9 Weaponless", types: ["ch7"] },
  { name: "7-Fin Weaponless", types: ["ch7"] },
  { name: "7-E1 Weaponless", types: ["ch7"] },
  { name: "7-E2 Weaponless", types: ["ch7"] },
  { name: "7-E3 Weaponless", types: ["ch7"] },
  { name: "8-1 Weaponless", types: ["ch8"] },
  { name: "8-2 Weaponless", types: ["ch8"] },
  { name: "8-3 Weaponless", types: ["ch8"] },
  { name: "8-4 Weaponless", types: ["ch8"] },
  { name: "8-5 Weaponless", types: ["ch8"] },
  { name: "8-6 Weaponless", types: ["ch8"] },
  { name: "8-7 Weaponless", types: ["ch8"] },
  { name: "8-8 Weaponless", types: ["ch8"] },
  { name: "8-9 Weaponless", types: ["ch8"] },
  { name: "8-Fin Weaponless", types: ["ch8"] },
  { name: "8-E1 Weaponless", types: ["ch8"] },
  { name: "8-E2 Weaponless", types: ["ch8"] },
  { name: "8-E3 Weaponless", types: ["ch8"] },
];
bingoList[5] = [
  { name: "1-1 100%", types: ["ch1"] },
  { name: "1-2 100%", types: ["ch1"] },
  { name: "1-3 100%", types: ["ch1"] },
  { name: "1-4 100%", types: ["ch1"] },
  { name: "1-5 100%", types: ["ch1"] },
  { name: "1-6 100%", types: ["ch1"] },
  { name: "1-7 100%", types: ["ch1"] },
  { name: "1-8 100%", types: ["ch1"] },
  { name: "1-9 100%", types: ["ch1"] },
  { name: "1-Fin 100%", types: ["ch1"] },
  { name: "1-E1 100%", types: ["ch1"] },
  { name: "1-E2 100%", types: ["ch1"] },
  { name: "1-E3 100%", types: ["ch1"] },
  { name: "2-1 100%", types: ["ch2"] },
  { name: "2-2 100%", types: ["ch2"] },
  { name: "2-3 100%", types: ["ch2"] },
  { name: "2-4 100%", types: ["ch2"] },
  { name: "2-5 100%", types: ["ch2"] },
  { name: "2-6 100%", types: ["ch2"] },
  { name: "2-7 100%", types: ["ch2"] },
  { name: "2-8 100%", types: ["ch2"] },
  { name: "2-9 100%", types: ["ch2"] },
  { name: "2-Fin 100%", types: ["ch2"] },
  { name: "2-E1 100%", types: ["ch2"] },
  { name: "2-E2 100%", types: ["ch2"] },
  { name: "2-E3 100%", types: ["ch2"] },
  { name: "3-1 100%", types: ["ch3"] },
  { name: "3-2 100%", types: ["ch3"] },
  { name: "3-3 100%", types: ["ch3"] },
  { name: "3-4 100%", types: ["ch3"] },
  { name: "3-5 100%", types: ["ch3"] },
  { name: "3-6 100%", types: ["ch3"] },
  { name: "3-7 100%", types: ["ch3"] },
  { name: "3-8 100%", types: ["ch3"] },
  { name: "3-9 100%", types: ["ch3"] },
  { name: "3-Fin 100%", types: ["ch3"] },
  { name: "3-E1 100%", types: ["ch3"] },
  { name: "3-E2 100%", types: ["ch3"] },
  { name: "3-E3 100%", types: ["ch3"] },
  { name: "4-1 100%", types: ["ch4"] },
  { name: "4-2 100%", types: ["ch4"] },
  { name: "4-3 100%", types: ["ch4"] },
  { name: "4-4 100%", types: ["ch4"] },
  { name: "4-5 100%", types: ["ch4"] },
  { name: "4-6 100%", types: ["ch4"] },
  { name: "4-7 100%", types: ["ch4"] },
  { name: "4-8 100%", types: ["ch4"] },
  { name: "4-9 100%", types: ["ch4"] },
  { name: "4-Fin 100%", types: ["ch4"] },
  { name: "4-E1 100%", types: ["ch4"] },
  { name: "4-E2 100%", types: ["ch4"] },
  { name: "4-E3 100%", types: ["ch4"] },
  { name: "5-1 100%", types: ["ch5"] },
  { name: "5-2 100%", types: ["ch5"] },
  { name: "5-3 100%", types: ["ch5"] },
  { name: "5-4 100%", types: ["ch5"] },
  { name: "5-5 100%", types: ["ch5"] },
  { name: "5-6 100%", types: ["ch5"] },
  { name: "5-7 100%", types: ["ch5"] },
  { name: "5-8 100%", types: ["ch5"] },
  { name: "5-9 100%", types: ["ch5"] },
  { name: "5-Fin 100%", types: ["ch5"] },
  { name: "5-E1 100%", types: ["ch5"] },
  { name: "5-E2 100%", types: ["ch5"] },
  { name: "5-E3 100%", types: ["ch5"] },
  { name: "6-1 100%", types: ["ch6"] },
  { name: "6-2 100%", types: ["ch6"] },
  { name: "6-3 100%", types: ["ch6"] },
  { name: "6-4 100%", types: ["ch6"] },
  { name: "6-5 100%", types: ["ch6"] },
  { name: "6-6 100%", types: ["ch6"] },
  { name: "6-7 100%", types: ["ch6"] },
  { name: "6-8 100%", types: ["ch6"] },
  { name: "6-9 100%", types: ["ch6"] },
  { name: "6-Fin 100%", types: ["ch6"] },
  { name: "6-E1 100%", types: ["ch6"] },
  { name: "6-E2 100%", types: ["ch6"] },
  { name: "6-E3 100%", types: ["ch6"] },
  { name: "7-1 100%", types: ["ch7"] },
  { name: "7-2 100%", types: ["ch7"] },
  { name: "7-3 100%", types: ["ch7"] },
  { name: "7-4 100%", types: ["ch7"] },
  { name: "7-5 100%", types: ["ch7"] },
  { name: "7-6 100%", types: ["ch7"] },
  { name: "7-7 100%", types: ["ch7"] },
  { name: "7-8 100%", types: ["ch7"] },
  { name: "7-9 100%", types: ["ch7"] },
  { name: "7-Fin 100%", types: ["ch7"] },
  { name: "7-E1 100%", types: ["ch7"] },
  { name: "7-E2 100%", types: ["ch7"] },
  { name: "7-E3 100%", types: ["ch7"] },
  { name: "8-1 100%", types: ["ch8"] },
  { name: "8-2 100%", types: ["ch8"] },
  { name: "8-3 100%", types: ["ch8"] },
  { name: "8-4 100%", types: ["ch8"] },
  { name: "8-5 100%", types: ["ch8"] },
  { name: "8-6 100%", types: ["ch8"] },
  { name: "8-7 100%", types: ["ch8"] },
  { name: "8-8 100%", types: ["ch8"] },
  { name: "8-9 100%", types: ["ch8"] },
  { name: "8-Fin 100%", types: ["ch8"] },
  { name: "8-E1 100%", types: ["ch8"] },
  { name: "8-E2 100%", types: ["ch8"] },
  { name: "8-E3 100%", types: ["ch8"] },
];
bingoList[6] = [
  { name: "1-1 Weaponless 100%", types: ["ch1"] },
  { name: "1-2 Weaponless 100%", types: ["ch1"] },
  { name: "1-3 Weaponless 100%", types: ["ch1"] },
  { name: "1-4 Weaponless 100%", types: ["ch1"] },
  { name: "1-5 Weaponless 100%", types: ["ch1"] },
  { name: "1-6 Weaponless 100%", types: ["ch1"] },
  { name: "1-7 Weaponless 100%", types: ["ch1"] },
  { name: "1-8 Weaponless 100%", types: ["ch1"] },
  { name: "1-9 Weaponless 100%", types: ["ch1"] },
  { name: "1-Fin Weaponless 100%", types: ["ch1"] },
  { name: "1-E1 Weaponless 100%", types: ["ch1"] },
  { name: "1-E2 Weaponless 100%", types: ["ch1"] },
  { name: "1-E3 Weaponless 100%", types: ["ch1"] },
  { name: "2-1 Weaponless 100%", types: ["ch2"] },
  { name: "2-2 Weaponless 100%", types: ["ch2"] },
  { name: "2-3 Weaponless 100%", types: ["ch2"] },
  { name: "2-4 Weaponless 100%", types: ["ch2"] },
  { name: "2-5 Weaponless 100%", types: ["ch2"] },
  { name: "2-6 Weaponless 100%", types: ["ch2"] },
  { name: "2-7 Weaponless 100%", types: ["ch2"] },
  { name: "2-8 Weaponless 100%", types: ["ch2"] },
  { name: "2-9 Weaponless 100%", types: ["ch2"] },
  { name: "2-Fin Weaponless 100%", types: ["ch2"] },
  { name: "2-E1 Weaponless 100%", types: ["ch2"] },
  { name: "2-E2 Weaponless 100%", types: ["ch2"] },
  { name: "2-E3 Weaponless 100%", types: ["ch2"] },
  { name: "3-1 Weaponless 100%", types: ["ch3"] },
  { name: "3-2 Weaponless 100%", types: ["ch3"] },
  { name: "3-3 Weaponless 100%", types: ["ch3"] },
  { name: "3-4 Weaponless 100%", types: ["ch3"] },
  { name: "3-5 Weaponless 100%", types: ["ch3"] },
  { name: "3-6 Weaponless 100%", types: ["ch3"] },
  { name: "3-7 Weaponless 100%", types: ["ch3"] },
  { name: "3-8 Weaponless 100%", types: ["ch3"] },
  { name: "3-9 Weaponless 100%", types: ["ch3"] },
  { name: "3-Fin Weaponless 100%", types: ["ch3"] },
  { name: "3-E1 Weaponless 100%", types: ["ch3"] },
  { name: "3-E2 Weaponless 100%", types: ["ch3"] },
  { name: "3-E3 Weaponless 100%", types: ["ch3"] },
  { name: "4-1 Weaponless 100%", types: ["ch4"] },
  { name: "4-2 Weaponless 100%", types: ["ch4"] },
  { name: "4-3 Weaponless 100%", types: ["ch4"] },
  { name: "4-4 Weaponless 100%", types: ["ch4"] },
  { name: "4-5 Weaponless 100%", types: ["ch4"] },
  { name: "4-6 Weaponless 100%", types: ["ch4"] },
  { name: "4-7 Weaponless 100%", types: ["ch4"] },
  { name: "4-8 Weaponless 100%", types: ["ch4"] },
  { name: "4-9 Weaponless 100%", types: ["ch4"] },
  { name: "4-Fin Weaponless 100%", types: ["ch4"] },
  { name: "4-E1 Weaponless 100%", types: ["ch4"] },
  { name: "4-E2 Weaponless 100%", types: ["ch4"] },
  { name: "4-E3 Weaponless 100%", types: ["ch4"] },
  { name: "5-1 Weaponless 100%", types: ["ch5"] },
  { name: "5-2 Weaponless 100%", types: ["ch5"] },
  { name: "5-3 Weaponless 100%", types: ["ch5"] },
  { name: "5-4 Weaponless 100%", types: ["ch5"] },
  { name: "5-5 Weaponless 100%", types: ["ch5"] },
  { name: "5-6 Weaponless 100%", types: ["ch5"] },
  { name: "5-7 Weaponless 100%", types: ["ch5"] },
  { name: "5-8 Weaponless 100%", types: ["ch5"] },
  { name: "5-9 Weaponless 100%", types: ["ch5"] },
  { name: "5-Fin Weaponless 100%", types: ["ch5"] },
  { name: "5-E1 Weaponless 100%", types: ["ch5"] },
  { name: "5-E2 Weaponless 100%", types: ["ch5"] },
  { name: "5-E3 Weaponless 100%", types: ["ch5"] },
  { name: "6-1 Weaponless 100%", types: ["ch6"] },
  { name: "6-2 Weaponless 100%", types: ["ch6"] },
  { name: "6-3 Weaponless 100%", types: ["ch6"] },
  { name: "6-4 Weaponless 100%", types: ["ch6"] },
  { name: "6-5 Weaponless 100%", types: ["ch6"] },
  { name: "6-6 Weaponless 100%", types: ["ch6"] },
  { name: "6-7 Weaponless 100%", types: ["ch6"] },
  { name: "6-8 Weaponless 100%", types: ["ch6"] },
  { name: "6-9 Weaponless 100%", types: ["ch6"] },
  { name: "6-Fin Weaponless 100%", types: ["ch6"] },
  { name: "6-E1 Weaponless 100%", types: ["ch6"] },
  { name: "6-E2 Weaponless 100%", types: ["ch6"] },
  { name: "6-E3 Weaponless 100%", types: ["ch6"] },
  { name: "7-1 Weaponless 100%", types: ["ch7"] },
  { name: "7-2 Weaponless 100%", types: ["ch7"] },
  { name: "7-3 Weaponless 100%", types: ["ch7"] },
  { name: "7-4 Weaponless 100%", types: ["ch7"] },
  { name: "7-5 Weaponless 100%", types: ["ch7"] },
  { name: "7-6 Weaponless 100%", types: ["ch7"] },
  { name: "7-7 Weaponless 100%", types: ["ch7"] },
  { name: "7-8 Weaponless 100%", types: ["ch7"] },
  { name: "7-9 Weaponless 100%", types: ["ch7"] },
  { name: "7-Fin Weaponless 100%", types: ["ch7"] },
  { name: "7-E1 Weaponless 100%", types: ["ch7"] },
  { name: "7-E2 Weaponless 100%", types: ["ch7"] },
  { name: "7-E3 Weaponless 100%", types: ["ch7"] },
  { name: "8-1 Weaponless 100%", types: ["ch8"] },
  { name: "8-2 Weaponless 100%", types: ["ch8"] },
  { name: "8-3 Weaponless 100%", types: ["ch8"] },
  { name: "8-4 Weaponless 100%", types: ["ch8"] },
  { name: "8-5 Weaponless 100%", types: ["ch8"] },
  { name: "8-6 Weaponless 100%", types: ["ch8"] },
  { name: "8-7 Weaponless 100%", types: ["ch8"] },
  { name: "8-8 Weaponless 100%", types: ["ch8"] },
  { name: "8-9 Weaponless 100%", types: ["ch8"] },
  { name: "8-Fin Weaponless 100%", types: ["ch8"] },
  { name: "8-E1 Weaponless 100%", types: ["ch8"] },
  { name: "8-E2 Weaponless 100%", types: ["ch8"] },
  { name: "8-E3 Weaponless 100%", types: ["ch8"] },
];
bingoList[7] = [
  { name: "Kill 5 unique cats", types: [] },
  { name: "Kill 10 unique cats", types: [] },
  { name: "Kill 5 pieces of toast", types: ["killenemy","toast"] },
  { name: "Kill 1 raccalope", types: ["raccalope"] },
  { name: "Kill 2 raccalopes", types: ["raccalope"] },
  { name: "Kill 3 ducksharks", types: ["duckshark"] },
  { name: "Kill the same duckshark 5 times", types: ["duckshark"] },
];
bingoList[8] = [
  { name: "Kill 2 unique fire cats", types: ["fire"] },
  { name: "Kill 2 unique boomerang cats", types: ["boomerang"] },
  { name: "Kill 2 unique paperplane cats", types: ["paperplane"] },
  { name: "Kill 4 unique big bonking cats", types: ["pushers"] },
  { name: "Kill 4 unique small cats", types: ["small"] },
  { name: "Kill 2 unique sucking cats", types: ["suction"] },
  { name: "Kill 2 unique blowing cats", types: ["blow"] },
  { name: "Kill 2 unique grenade cats", types: ["grenade"] },
  { name: "Kill 2 unique bubble cats", types: ["bubble"] },
  { name: "Kill 2 unique forceball cats", types: ["forceball"] },
  { name: "Kill 2 unique ice cats", types: ["ice"] },
  { name: "Drown 4 cats", types: ["water"] },
  { name: "Lure 2 cats into spikes", types: ["forceball"] },
];
bingoList[9] = [
  { name: "1-6 doing frog boat skip", types: ["frog"] },
  { name: "5-1 WITHOUT the treadmill boost", types: ["casual"] },
  { name: "3-1 WITHOUT any omega boosts", types: ["noob"] },
  { name: "Collect 4 gems in any 5 stages", types: ["runover"] },
  { name: "3-2 WITHOUT any of the yolo boosts", types: ["frog"] },
  { name: "7-2, 7-3, 7-5 or 7-8 without any checkpoint skips", types: ["badatruns"] },
  { name: "2-F2 without the frog clip", types: ["xenemy"] },
];
bingoList[10] = [
  { name: "2-5 first ferdinand skip", types: ["skips"] },
  { name: "6-4 yolo boost through all these lasers", types: ["yolo"] },
  { name: "7-F1 journey through the boulder portals", types: ["boulders"] },
  { name: "8-9 with that boost", types: ["plsno","why"] },
  { name: "8-3 duckshark skip", types: ["ohgod"] },
];
bingoList[11] = [
  { name: "Have 5 paperplanes on screen at once", types: ["dupe","paperplane"] },
  { name: "Jam a rock between two blocks", types: ["boulders"] },
  { name: "Stand infront of a fire cat without getting hit by its fire", types: ["touch"] },
];
bingoList[12] = [
  { name: "Clear 3 Chapter 1 scenes", types: [] },
  { name: "Clear 3 Chapter 2 scenes", types: [] },
  { name: "Clear 3 Chapter 3 scenes", types: [] },
  { name: "Clear 3 Chapter 4 scenes", types: [] },
  { name: "Clear 3 Chapter 5 scenes", types: [] },
  { name: "Clear 3 Chapter 6 scenes", types: [] },
  { name: "Clear 3 Chapter 7 scenes", types: [] },
  { name: "Clear 3 Chapter 8 scenes", types: [] },
];
bingoList[13] = [
  { name: "100% Clear 3 Chapter 1 scenes", types: [] },
  { name: "100% Clear 3 Chapter 2 scenes", types: [] },
  { name: "100% Clear 3 Chapter 3 scenes", types: [] },
  { name: "100% Clear 3 Chapter 4 scenes", types: [] },
  { name: "100% Clear 3 Chapter 5 scenes", types: [] },
  { name: "100% Clear 3 Chapter 6 scenes", types: [] },
  { name: "100% Clear 3 Chapter 7 scenes", types: [] },
  { name: "100% Clear 3 Chapter 8 scenes", types: [] },
];
bingoList[14] = [
  { name: "Clear 6 Chapter 1 scenes", types: [] },
  { name: "Clear 6 Chapter 2 scenes", types: [] },
  { name: "Clear 6 Chapter 3 scenes", types: [] },
  { name: "Clear 6 Chapter 4 scenes", types: [] },
  { name: "Clear 6 Chapter 5 scenes", types: [] },
  { name: "Clear 6 Chapter 6 scenes", types: [] },
  { name: "Clear 6 Chapter 7 scenes", types: [] },
  { name: "Clear 6 Chapter 8 scenes", types: [] },
];
bingoList[15] = [
  { name: "100% Clear 6 Chapter 1 scenes", types: [] },
  { name: "100% Clear 6 Chapter 2 scenes", types: [] },
  { name: "100% Clear 6 Chapter 3 scenes", types: [] },
  { name: "100% Clear 6 Chapter 4 scenes", types: [] },
  { name: "100% Clear 6 Chapter 5 scenes", types: [] },
  { name: "100% Clear 6 Chapter 6 scenes", types: [] },
  { name: "100% Clear 6 Chapter 7 scenes", types: [] },
  { name: "100% Clear 6 Chapter 8 scenes", types: [] },
];
bingoList[16] = [
  { name: "Clear all Chapter 1 scenes", types: [] },
  { name: "Clear all Chapter 2 scenes", types: [] },
  { name: "Clear all Chapter 3 scenes", types: [] },
  { name: "Clear all Chapter 4 scenes", types: [] },
  { name: "Clear all Chapter 5 scenes", types: [] },
  { name: "Clear all Chapter 6 scenes", types: [] },
  { name: "Clear all Chapter 7 scenes", types: [] },
  { name: "Clear all Chapter 8 scenes", types: [] },
];
bingoList[17] = [
  { name: "100% Clear all Chapter 1 scenes", types: [] },
  { name: "100% Clear all Chapter 2 scenes", types: [] },
  { name: "100% Clear all Chapter 3 scenes", types: [] },
  { name: "100% Clear all Chapter 4 scenes", types: [] },
  { name: "100% Clear all Chapter 5 scenes", types: [] },
  { name: "100% Clear all Chapter 6 scenes", types: [] },
  { name: "100% Clear all Chapter 7 scenes", types: [] },
  { name: "100% Clear all Chapter 8 scenes", types: [] },
];
bingoList[18] = [
  { name: "5 unique yarns in Chapter 1", types: [] },
  { name: "5 unique yarns in Chapter 2", types: [] },
  { name: "5 unique yarns in Chapter 3", types: [] },
  { name: "5 unique yarns in Chapter 4", types: [] },
  { name: "5 unique yarns in Chapter 5", types: [] },
  { name: "5 unique yarns in Chapter 6", types: [] },
  { name: "5 unique yarns in Chapter 7", types: [] },
  { name: "5 unique yarns in Chapter 8", types: [] },
];
bingoList[19] = [
  { name: "40 unique gems in Chapter 1", types: [] },
  { name: "40 unique gems in Chapter 2", types: [] },
  { name: "40 unique gems in Chapter 3", types: [] },
  { name: "40 unique gems in Chapter 4", types: [] },
  { name: "40 unique gems in Chapter 5", types: [] },
  { name: "40 unique gems in Chapter 6", types: [] },
  { name: "40 unique gems in Chapter 7", types: [] },
  { name: "40 unique gems in Chapter 8", types: [] },
];
bingoList[20] = [
  { name: "1 golden hat", types: ["goldhat","global"] },
  { name: "100 unique gems", types: ["xgems","global"] },
  { name: "20 unique stage clears", types: ["xstages","global"] },
  { name: "10 unique yarns", types: ["xyarns","global"] },
  { name: "20 NPC kills", types: ["killenemy","global"] },
];
bingoList[21] = [
  { name: "2 golden hats", types: ["goldhat","global"] },
  { name: "150 unique gems", types: ["xgems","global"] },
  { name: "30 unique stage clears", types: ["xstages","global"] },
  { name: "15 unique yarns", types: ["xyarns","global"] },
  { name: "25 NPC kills", types: ["killenemy","global"] },
];
bingoList[22] = [
  { name: "3 golden hats", types: ["goldhat","global"] },
  { name: "200 unique gems", types: ["xgems","global"] },
  { name: "40 unique stage clears", types: ["xstages","global"] },
  { name: "20 unique yarns", types: ["xyarns","global"] },
  { name: "30 NPC kills", types: ["killenemy","global"] },
];
bingoList[23] = [
  { name: "Get all checkpoints in 7-5", types: ["cpget"] },
  { name: "Skip all checkpoints in 7-3", types: ["cpskip"] },
  { name: "Get all checkpoints in 1-7", types: ["cpget"] },
  { name: "Get all checkpoints in 5-5", types: ["cpget"] },
  { name: "Get all checkpoints in 6-8", types: ["cpget"] },
  { name: "Skip all checkpoints in 8-2", types: ["cpskip"] },
  { name: "Skip all checkpoints in 3-2", types: ["cpskip"] },
  { name: "Skip all checkpoints in 2-5", types: ["cpskip"] },
];
bingoList[24] = [
  { name: "Vacuum a cat's grenade and die from it", types: ["grenade"] },
  { name: "Kill 5 cats with their own grenades", types: ["grenade"] },
  { name: "Lure 5 cats into raccalopes", types: ["raccalope"] },
  { name: "Set yourself on fire, then extinguish yourself", types: ["fire"] },
  { name: "Bounce on 5 toxic bubbles without touching the ground", types: ["bubble"] },
  { name: "Kill that one paperplane cat with its own paperplanes", types: ["paperplane"] },
  { name: "Have a cat set another cat on fire", types: ["fire"] },
  { name: "Push a cat to it's demise using only forceballs", types: ["forceball"] },
];
bingoList[25] = [
  { name: "Duckshark's Big Adventure", types: ["duckshark"] },
  { name: "Bring a rock to the end of 6-4", types: ["boulders"] },
  { name: "Watch two full cutscenes", types: ["cutscene"] },
  { name: "8-Secret cleared without ever standing still", types: ["clear"] },
  { name: "Finish a non-secret stage with 0 jumps", types: ["jumpless"] },
];
