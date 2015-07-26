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
bingoList[1] = [{
    name: "Red Coin Star in WF",
    types: ["WF"]
}, {
    name: "100 Coin Star in WF",
    types: ["WF"]
}, {
    name: "Peach's Slide x 2",
    types: ["secrets"]
}, {
    name: "Reach the Castle Roof",
    types: ["lives"]
}, {
    name: "Lose Mario's Hat",
    types: ["losehat"]
}];
bingoList[2] = [{
    name: "5 Castle Secret Stars",
    types: ["secrets"]
}, {
    name: "Beat the King in BOB ",
    types: ["BOB"]
}, {
    name: "Two Bowser Stage Red Coin Stars",
    types: ["bowserreds"]
}, {
    name: "Collect 120 Coins in one stage",
    types: ["WF", "hundredcoin"]
}, {
    name: "100 Coin Star in CCM",
    types: ["CCM"]
}];
bingoList[3] = [{
    name: "Open 3 cannons",
    types: ["cannons"]
}, {
    name: "Secret Aquarium Star",
    types: ["aquarium"]
}, {
    name: "15 Lives",
    types: ["lives"]
}, {
    name: "Collect 130 Coins in one stage",
    types: ["hundredcoin"]
}];
bingoList[4] = [{
    name: "Mario Wings to the Sky BOB",
    types: ["BOB", "wingcap"]
}, {
    name: "Red Coin Star in HMC",
    types: ["HMC"]
}, {
    name: "All Stars in Whomps",
    types: ["WF"]
}, {
    name: "Three 100 Coin Stars",
    types: ["hundredcoin"]
}, {
    name: "BITS Red Coin Star",
    types: ["bowserreds"]
}];
bingoList[5] = [{
    name: "Red Coin Star in TTM",
    types: ["TTM"]
}, {
    name: "Cruiser Crossing the Rainbow RR",
    types: ["RR"]
}, {
    name: "Collect 140 Coins in one stage",
    types: ["hundredcoin"]
}, {
    name: "Secrets Star in THI",
    types: ["THI"]
}];
bingoList[6] = [{
    name: "Secrets Star in WDW",
    types: ["WDW"]
}, {
    name: "Red Coin Star in BOB",
    types: ["BOB"]
}, {
    name: "2 Cap Stage Stars",
    types: ["wingcap", "vanishcap", "metalcap", "secrets"]
}, {
    name: "Red Coin Star in BBH",
    types: ["BBH"]
}];
bingoList[7] = [{
    name: "7 Castle Secret Stars",
    types: ["secrets"]
}, {
    name: "100 Coin Star in LLL",
    types: ["LLL"]
}, {
    name: "20 lives",
    types: ["lives"]
}, {
    name: "Red Coin Star in SSL",
    types: ["SSL", "wingcap"]
}];
bingoList[8] = [{
    name: "All Stars in CCM",
    types: ["CCM"]
}, {
    name: "100 Coin Star in JRB",
    types: ["JRB"]
}, {
    name: "Red Coin Star in WDW",
    types: ["WDW"]
}];
bingoList[9] = [{
    name: "Eye in the Secret Room BBH",
    types: ["BBH", "vanishcap"]
}, {
    name: "Three Bowser Stage Red Coin Stars",
    types: ["bowserreds", "secrets"]
}, {
    name: "100 Coin Star in WDW",
    types: ["WDW"]
}, {
    name: "100 Coin Star in TTC",
    types: ["TTC"]
}];
bingoList[10] = [{
    name: "At least 1 star from 10 stages",
    types: ["starseach"]
}, {
    name: "100 Coin Star in SSL",
    types: ["SSL"]
}, {
    name: "Into the Igloo SL",
    types: ["SL", "vanishcap"]
}, {
    name: "25 Lives",
    types: ["lives"]
}, {
    name: "Open 5 Cannons",
    types: ["cannons"]
}];
bingoList[11] = [{
    name: "Red Coin Star in JRB",
    types: ["JRB"]
}, {
    name: "Mystery of the Monkey Cage TTM",
    types: ["TTM"]
}, {
    name: "Top Floor Cloud Stage Star",
    types: ["wingcap"]
}, {
    name: "Collect the Caps DDD",
    types: ["DDD", "vanishcap"]
}];
bingoList[12] = [{
    name: "3 Cap Stage Stars",
    types: ["wingcap", "vanishcap", "metalcap", "secrets"]
}, {
    name: "100 Coin Star in TTM",
    types: ["TTM"]
}, {
    name: "4 Stars each from SSL and HMC",
    types: ["SSL", "HMC"]
}, {
    name: "All Stars in LLL",
    types: ["LLL"]
}, {
    name: "Four 100 Coin Stars",
    types: ["hundredcoin"]
}];
bingoList[13] = [{
    name: "Race Through Downtown WDW",
    types: ["WDW", "vanishcap"]
}, {
    name: "100 Coin Star in HMC",
    types: ["HMC"]
}, {
    name: "100 Coin Star in THI",
    types: ["THI"]
}, {
    name: "100 Coin Star in DDD",
    types: ["DDD"]
}, {
    name: "4 Stars each from BOB and CCM",
    types: ["BOB", "CCM"]
}];
bingoList[14] = [{
    name: "100 Coin Star in RR",
    types: ["RR"]
}, {
    name: "100 Coin Star in BOB",
    types: ["BOB", "wingcap"]
}, {
    name: "30 Lives",
    types: ["lives"]
}, {
    name: "100 Coin Star in BBH",
    types: ["BBH"]
}, {
    name: "Open 7 Cannons",
    types: ["cannons"]
}];
bingoList[15] = [{
    name: "Defeat all 4 Mini-Bosses",
    types: ["SSL", "THI"]
}, {
    name: "3 Stars each from JRB and BBH",
    types: ["JRB", "BBH"]
}, {
    name: "30 Total Stars",
    types: ["manystar"]
}, {
    name: "100 Coin Star in SL",
    types: ["SL", "vanishcap"]
}, {
    name: "Rematch with Koopa the Quick THI",
    types: ["THI"]
}];
bingoList[16] = [{
    name: "10 Castle Secret Stars",
    types: ["secrets", "aquarium"]
}, {
    name: "At least 3 stars from 6 stages",
    types: ["starseach", "manystar"]
}, {
    name: "At least 2 stars from 10 stages",
    types: ["starseach", "manystar"]
}, {
    name: "All Stars in JRB",
    types: ["JRB"]
}, {
    name: "5 Stars in SL",
    types: ["SL"]
}];
bingoList[17] = [{
    name: "3 Stars each from TTC and RR",
    types: ["TTC", "RR"]
}, {
    name: "All Stars in HMC",
    types: ["HMC"]
}, {
    name: "Five 100 Coin Stars",
    types: ["hundredcoin", "starseach", "lives"]
}, {
    name: "Collect 140 Coins in two stages",
    types: ["hundredcoin"]
}, {
    name: "5 Stars in DDD",
    types: ["DDD"]
}];
bingoList[18] = [{
    name: "4 Stars each from JRB and DDD",
    types: ["JRB", "DDD"]
}, {
    name: "3 Stars each from THI and TTM",
    types: ["THI", "TTM"]
}, {
    name: "All Stars in BOB",
    types: ["BOB"]
}];
bingoList[19] = [{
    name: "All Stars in TTC",
    types: ["TTC"]
}, {
    name: "Six 100 Coin Stars",
    types: ["hundredcoin", "starseach", "lives"]
}, {
    name: "5 Stars in BBH",
    types: ["BBH"]
}, {
    name: "Open 9 Cannons",
    types: ["cannons"]
}];
bingoList[20] = [{
    name: "All Stars in SSL",
    types: ["SSL"]
}, {
    name: "6 Stars in WDW",
    types: ["WDW"]
}, {
    name: "6 Stars in SSL",
    types: ["SSL"]
}];
bingoList[21] = [{
    name: "At least 1 Star from each Stage",
    types: ["starseach", "manystar"]
}, {
    name: "Win All 3 Character Races",
    types: ["BOB", "CCM", "THI"]
}, {
    name: "At least 3 stars from 8 stages",
    types: ["starseach", "manystar"]
}, {
    name: "All Stars in TTM",
    types: ["TTM"]
}];
bingoList[22] = [{
    name: "12 Castle Secret Stars",
    types: ["secrets", "aquarium"]
}, {
    name: "35 Total Stars",
    types: ["manystar"]
}, {
    name: "6 Stars in RR",
    types: ["RR"]
}];
bingoList[23] = [{
    name: "Star #1 from each stage",
    types: ["starseach"]
}, {
    name: "Top Floor Toad Star",
    types: ["manystar"]
}, {
    name: "All Stars in Snowmans",
    types: ["SL", "vanishcap"]
}, {
    name: "6 Stars in BBH",
    types: ["BBH"]
}];
bingoList[24] = [{
    name: "6 Stars in DDD",
    types: ["DDD"]
}, {
    name: "All Stars in WDW",
    types: ["WDW", "vanishcap"]
}, {
    name: "All Stars in THI",
    types: ["THI"]
}];
bingoList[25] = [{
    name: "All Stars in BBH",
    types: ["BBH", "vanishcap"]
}, {
    name: "Open All 11 Cannons",
    types: ["cannons"]
}, {
    name: "All Stars in DDD",
    types: ["DDD", "vanishcap"]
}, {
    name: "All Stars in RR",
    types: ["RR"]
}];

