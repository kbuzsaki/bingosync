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
    {name: "A05 w/ splat bombs", types: ["A", "early"]},
    {name: "A08 w/ squiffer", types: ["A", "early"]},
    {name: "Beat 2 8ball levels", types: ["8ball", "early"]},
    {name: "Beat 1 level with blaster", types: ["blaster"]},
    {name: "Beat 1 level with charger", types: ["charger"]}
];

bingoList[2] = [
    {name: "Unlock I (green) line", types: ["enemy"]},
    {name: "Complete 6 connector (square) stations", types: ["lines"]},
    {name: "Get 5000 credits", types: ["credits"]},
    {name: "Get a loan from Marina and pay it back", types: ["credits"]},
    {name: "Beat 1 level with brella", types: ["brella"]}
];

bingoList[3] = [
    {name: "All levels on yellow line", types: ["A"]},
    {name: "Beat 3 8ball levels", types: ["8ball"]},
    {name: "1 Thang", types: ["thang"]},
    {name: "Beat 1 level with splatling", types: ["splatling"]},
    {name: "Beat 2 levels using Baller", types: ["baller"]}
];

bingoList[4] = [
    {name: "Beat 1 boss", types: ["boss"]},
    {name: "C02 w/o goal Balloon Fish", types: ["ink"]},
    {name: "Beat a station using all 3 supplied weapons", types: ["misc"]},
    {name: "J03/D08 with the Splat Charger", types: ["J", "D"]}
];

bingoList[5] = [
    {name: "I05/B08 w/ the Bamboozler", types: ["I", "B"]},
    {name: "Beat 2 levels using inkjet", types: ["inkjet"]},
    {name: "J04 w/ the inkbrush", types: ["J", "inkbrush"]},
    {name: "8ball OOB in E06", types: ["8ball"]}
];

bingoList[6] = [
    {name: "Beat 4 8-ball levels", types: ["8ball"]},
    {name: "Beat 2 “Balloon Pop” levels", types: ["balloon"]},
    {name: "Collect 5 armor upgrades", types: ["armor"]},
    {name: "Beat 3 levels using a roller", types: [""]},
    {name: "I02 without grabbing ink refills", types: ["I", "ink"]}
];

bingoList[7] = [
    {name: "F02 w/ burst bombs only", types: ["F"]},
    {name: "Beat 2 stations using all 3 supplied weapons", types: ["misc"]},
    {name: "Unlock 6 lines", types: ["lines"]},
    {name: "Beat 3 levels using a brush", types: ["brush"]},
    {name: "Complete 10 connector (square) stations", types: ["lines"]}
];

bingoList[8] = [
    {name: "Beat 3 levels using dualies", types: ["dual"]},
    {name: "Beat 3 levels using a slosher", types: ["slosher"]},
    {name: "Collect 2 thangs", types: ["thang"]},
    {name: "Beat all levels on 2 lines", types: ["lines"]},
    {name: "Beat 3 levels using a brella", types: ["brella"]},
    {name: "Collect 15 power egg containers", types: ["credits"]},
    {name: "J02 w/ splat charger ", types: ["J", "charger"]}
];

bingoList[9] = [
    {name: "Beat all levels on lime line [I]", types: ["I", "lines"]},
    {name: "Complete E10 with splat charger", types: ["E", "charger"]},
    {name: "Beat 3 levels using a splatling", types: ["splatling"]},
    {name: "Get 10000 credits", types: ["credits"]},
    {name: "Fly through every ring in G10/E07", types: ["G", "E", "inkjet"]}
];

bingoList[10] = [
    {name: "Beat both match the shape stations", types: ["F", "J"]},
    {name: "Beat 3 levels using a charger", types: ["charger"]},
    {name: "Complete 12 connector (square) stations", types: ["lines"]},
    {name: "Beat 3 levels using blaster", types: ["blaster"]},
    {name: "Beat all levels on blue line [H]", types: ["H", "lines"]}
];

bingoList[11] = [
    {name: "Beat 5 levels using a roller", types: ["roller"]},
    {name: "Collect 20 power egg containers", types: ["credits"]},
    {name: "Beat all levels on purple line (G)", types: ["G", "lines"]},
    {name: "G02 w/ the Dynamo Roller", types: ["G", "roller"]},
    {name: "Beat 3 stages using all 3 supplied weapons", types: ["misc"]}
];

bingoList[12] = [
    {name: "Beat both data point stages", types: ["E", "F"]},
    {name: "E09 w/ only Burst Bombs", types: ["E"]},
    {name: "Get at least 15000 credits", types: ["credits"]},
    {name: "Beat 3 “Balloon Pop” levels", types: ["balloon"]},
    {name: "Beat 3 levels using inkjet", types: ["inkjet"]},
    {name: "Beat 5 levels using a charger", types: ["charger"]},
    {name: "Complete 12 connector (square) stations", types: ["lines"]}
];

bingoList[13] = [
    {name: "Beat all levels on gray line (D)", types: ["D", "lines"]},
    {name: "Beat all levels on pink line (J)", types: ["J", "lines"]},
    {name: "Collect 10 armor upgrades", types: ["armor"]},
    {name: "Beat 5 levels using a brush", types: ["brush"]},
    {name: "Beat all levels on 3 lines", types: ["lines"]},
    {name: "Beat both rainmaker levels", types: ["A", "F"]}
];

bingoList[14] = [
    {name: "Unlock 8 lines", types: ["lines"]},
    {name: "Beat 2 boss fights", types: ["boss"]},
    {name: "Beat 5 levels using a slosher", types: ["slosher"]},
    {name: "I01/G01 with the Octobrush", types: ["boss", "brush"]},
    {name: "Beat all levels on black line (F)", types: ["F", "lines"]},
    {name: "Beat both tower control levels", types: ["H", "B"]}
];

bingoList[15] = [
    {name: "Beat all levels on green line (C)", types: ["C", "lines"]},
    {name: "Beat 7 levels using a roller", types: ["roller"]},
    {name: "Beat both “defend the orb” levels", types: ["J", "D", "I", "E"]},
    {name: "Beat 5 levels using a brella", types: ["brella"]},
    {name: "Collect 30 power egg containers", types: ["credits"]},
    {name: "Get 20000 credits", types: ["credits"]},
    {name: "Beat 7 levels using a charger", types: ["charger"]}
];

bingoList[16] = [
    {name: "Beat 5 levels using a splatling", types: ["splatling"]},
    {name: "Beat 6 8-Ball levels", types: ["8ball"]},
    {name: "Beat all 4 limited ink stages", types: ["ink"]},
    {name: "Complete 16 connector (square) stations", types: ["lines"]},
    {name: "Beat 3 levels using baller", types: ["baller"]},
    {name: "Beat 4 stages using all 3 supplied weapons", types: ["misc"]}
];

bingoList[17] = [
    {name: "Beat all levels on teal line (B)", types: ["B", "lines"]},
    {name: "Beat 5 levels using inkjet", types: ["inkjet"]},
    {name: "Beat 4 “Balloon Pop” levels", types: ["balloon"]},
    {name: "Collect 3 thangs", types: ["thang"]},
    {name: "Unlock all 10 lines", types: ["lines"]},
    {name: "Collect 15 armor upgrades", types: ["armor"]}
];

bingoList[18] = [
    {name: "Beat 3 boss fights", types: ["boss"]},
    {name: "Beat all levels on magenta line (E)", types: ["E", "lines"]},
    {name: "Beat 7 levels using a blaster", types: ["blaster"]},
    {name: "Get at least 25000 credits", types: ["credits"]},
    {name: "Beat 9 levels using charger", types: ["charger"]}
];

bingoList[19] = [
    {name: "Beat 7 levels using a slosher", types: ["slosher"]},
    {name: "Beat 7 levels using a brella", types: ["brella"]},
    {name: "Beat 8 8-Ball levels", types: ["8ball"]},
    {name: "Beat 9 levels using blaster", types: ["blaster"]},
    {name: "Collect 40 power egg containers", types: ["credits"]}
];

bingoList[20] = [
    {name: "Beat all levels on 4 lines", types: ["lines"]},
    {name: "Beat 7 levels using a splatling", types: ["splatling"]},
    {name: "Beat 9 levels using a roller", types: ["roller"]},
    {name: "Complete all 20 connector (square) stations", types: ["lines"]},
    {name: "Get at least 30000 credits", types: ["credits"]}
];

bingoList[21] = [
    {name: "Beat all 4 boss fights", types: ["boss"]},
    {name: "Beat 12 levels using a charger", types: ["charger"]},
    {name: "Collect 20 armor upgrades", types: ["armor"]},
    {name: "Beat 5 levels using all 3 supplied weapons", types: ["misc"]},
    {name: "Beat 5 levels using dualies", types: ["dual"]}
];

bingoList[22] = [
    {name: "Beat 12 levels using a blaster", types: ["blaster"]},
    {name: "Collect all 4 thangs", types: ["thang"]},
    {name: "Beat 7 levels using a brush", types: ["brush"]},
    {name: "Get at least 35000 credits", types: ["credits"]}
];

bingoList[23] = [
    {name: "Beat 9 levels using a brush", types: ["brush"]},
    {name: "Collect 50 power egg containers", types: ["credits"]},
    {name: "Beat 9 levels using a roller", types: ["roller"]}
];

bingoList[24] = [
    {name: "Beat all 10 8 Ball levels", types: ["8ball"]},
    {name: "Beat 14 levels using blaster", types: ["blaster"]},
];

bingoList[25] = [
    {name: "Get at least 40000 credits", types: ["credits", "long"]},
    {name: "Beat 16 levels using a charger", types: ["charger", "long"]},
    {name: "Beat 6 levels using all 3 supplied weapons", types: ["misc", "long"]},
    {name: "Beat all levels on 5 lines", types: ["lines", "long"]}
];
