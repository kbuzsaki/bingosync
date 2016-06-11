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

var bingoList = [ ] ;
bingoList[1] = [
  { name: "Beat Darth Maul in Story Mode ", types: ["dm","sm"] },
  { name: "Beat Count Dooku in Story Mode", types: ["cd","sm"] },
  { name: "Beat Darth Vader in Story Mode", types: ["dv","sm"] }

];
bingoList[2] = [
  { name: "Beat Darth Maul in Free Play", types: ["dm","fp"] },
  { name: "Beat Count Dooku in Free Play", types: ["cd","fp"] },
  { name: "Beat Darth Vader in Free Play", types: ["dv","fp"] },

];
bingoList[3] = [
  { name: "True Jedi in Darth Vader", types: ["dv","tj"] },
  { name: "Collect 1,000,000 studs", types: ["studs","collect"] },
  { name: "Buy 7 Extras", types: ["buy","extras"] },
  { name: "Buy Invincibility", types: ["buy","extras"] },

];
bingoList[4] = [
  { name: "Collect 100,000 studs", types: ["studs","collect"] },
  { name: "Buy 5 Extras", types: ["buy","extras"] },
  { name: "Buy 10 Characters", types: ["buy","character"] },
  { name: "Buy All 5 Jedis", types: ["buy","character"] },
  { name: "Buy All 6 Clones", types: ["buy","character"] },
  { name: "Buy All 9 Droids", types: ["buy","character"] },
  { name: "Buy Moustaches", types: ["buy","extras"] },
];
bingoList[5] = [
  { name: "Buy Gonk Droid", types: ["buy","character"] },
  { name: "Buy PK Droid", types: ["buy","character"] },
  { name: "Buy Battle Droid (Security)", types: ["buy","character"] },
  { name: "Buy Battle Droid", types: ["buy","character"] },
  { name: "Buy Battle Droid (Commander)", types: ["buy","character"] },
  { name: "Buy Droideka", types: ["buy","character"] },

];
bingoList[6] = [
  { name: "Buy Royal Guard", types: ["buy","character"] },
  { name: "Buy Padmé", types: ["buy","character"] },
  { name: "Buy Darth Maul", types: ["buy","character"] },
  { name: "Buy Clone", types: ["buy","character"] },
  { name: "Buy Geonosian", types: ["buy","character"] },
  { name: "Buy Battle Droid (Geonosis)", types: ["buy","character"] },

];
bingoList[7] = [
  { name: "Buy All 3 Siths", types: ["buy","character"] },
  { name: "Buy Tea cups", types: ["buy","extras"] },
  { name: "Buy Brushes", types: ["buy","extras"] },
  { name: "Collect 250,000 studs", types: ["studs","collect"] },

];
bingoList[8] = [
  { name: "Buy Luminara", types: ["buy","character"] },
  { name: "Buy Ki-Adi Mundi", types: ["buy","character"] },
  { name: "Buy Kit Fisto", types: ["buy","character"] },
  { name: "Buy Shaak Ti", types: ["buy","character"] },
  { name: "Buy Count Dooku", types: ["buy","character"] },
  { name: "Buy Grievous’ Bodyguard", types: ["buy","character"] },
  { name: "Buy Mace Windu (Episode III)", types: ["buy","character"] },

];
bingoList[9] = [
  { name: "Buy General Grievous", types: ["buy","character"] },
  { name: "Buy 20 Characters", types: ["buy","character"] },
  { name: "Collect 500,000 studs", types: ["studs","collect"] }

];
bingoList[10] = [
  { name: "Buy Darth Sidious", types: ["buy","character"] },
  { name: "Buy Silly Blasters", types: ["buy","extras"] },
];
bingoList[11] = [
  { name: "Buy Clone (Episode III)", types: ["buy","character"] },
  { name: "Buy Clone (Episode III, Pilot)", types: ["buy","character"] },
  { name: "Buy Clone (Episode III, Swamp)", types: ["buy","character"] },
  { name: "Buy Clone (Episode III, Walker)", types: ["buy","character"] },
  { name: "Buy Disguised Clone", types: ["buy","character"] },


];
bingoList[12] = [
 { name: "Buy Darth Sidious", types: ["buy","character"] },
 { name: "Collect 250,000 studs", types: ["studs","collect"] },
 { name: "Buy Silhouettes", types: ["buy","extras"] },
 { name: "Buy Purple", types: ["buy","extras"] },
  { name: "Buy Big Blasters", types: ["buy","extras"] },
  { name: "Buy Classic Blasters", types: ["buy","extras"] },
];
bingoList[13] = [
  { name: "Collect all Minikits in Negotiations", types: ["negotiations","amk","collect"] },
  { name: "Collect all Minikits in Invasion of Naboo", types: ["ion","amk","collect"] },
  { name: "Collect all Minikits in Escape From Naboo", types: ["efn","amk","collect"] },
  { name: "Collect all Minikits in Mos Espa Podrace", types: ["pr","amk","collect"] },
  { name: "Collect all Minikits in Retake Theed Palace", types: ["rtp","amk","collect"] },
  { name: "Collect 50 Minikits", types: ["mk","collect"] },
  { name: "Collect 60 Minikits", types: ["mk","collect"] }

];
bingoList[14] = [
  { name: "Collect all Minikits in Discovery on Kamino", types: ["dk","amk","collect"] },
  { name: "Collect all Minikits in Droid Factory", types: ["df","amk","collect"] },
  { name: "Collect all Minikits in Jedi Battle", types: ["jb","amk","collect"] },
  { name: "Collect all Minikits in Gunship Cavalry", types: ["gc","amk","collect"] },
  { name: "Collect 30 Minikits", types: ["mk","collect"] },
  { name: "Collect 40 Minikits", types: ["mk","collect"] },

];
bingoList[15] = [
  { name: "Collect all Minikits in Battle Over Coruscant", types: ["boc","amk","collect"] },
  { name: "Collect all Minikits in General Grievous", types: ["gg","amk","collect"] },
  { name: "Collect all Minikits in Defense of Kashyyyk", types: ["dok","amk","collect"] },
  { name: "Collect all Minikits in Ruin of the Jedi", types: ["rotj","amk","collect"] },
  { name: "Collect 70 Minikits", types: ["mk","collect"] },


];
bingoList[16] = [
  { name: "Collect all Minikits in Count Dooku", types: ["cd","amk","collect"] },
  { name: "Collect all Minikits in Darth Vader", types: ["dv","amk","collect"] },
  { name: "Collect all Minikits in Darth Maul", types: ["dm","amk","collect"] },
  { name: "Collect 90 Minikits", types: ["mk","collect"] },
];
bingoList[17] = [
  { name: "Collect at Least 3 Minikits in Negotiations", types: ["negotiations","collect","3mk"] },
  { name: "Collect at Least 3 Minikits in Invasion of Naboo", types: ["ion","collect", "3mk"] },
  { name: "Collect at Least 3 Minikits in Escape from Naboo", types: ["efn","collect", "3mk"] },
  { name: "Collect at Least 3 Minikits in Podrace", types: ["pr","collect","3mk"] },
  { name: "Collect at Least 3 Minikits in Retake Theed Palace", types: ["rtp","collect","3mk"] },

];
bingoList[18] = [
  { name: "Collect at Least 3 Minikits in Discovery on Kamino", types: ["dk","collect","3mk"] },
  { name: "Collect at Least 3 Minikits in Droid Factory", types: ["df","collect", "3mk"] },
  { name: "Collect at Least 3 Minikits in Jedi Battle", types: ["jb","collect", "3mk"] },
  { name: "Collect at Least 3 Minikits in Gunship Cavalry", types: ["gc","collect","3mk"] },

];
bingoList[19] = [
  { name: "Collect at Least 3 Minikits in Battle Over Coruscant", types: ["boc","collect","3mk"] },
  { name: "Collect at Least 3 Minikits in Chancellor in Peril", types: ["cip","collect","3mk"] },
  { name: "Collect at Least 3 Minikits in General Grievous", types: ["gg","collect", "3mk"] },
  { name: "Collect at Least 3 Minikits in Defense of Kashyyyk", types: ["dok","collect", "3mk"] },
  { name: "Collect at Least 3 Minikits in Ruin of the Jedi", types: ["rotj","collect","3mk"] },


];
bingoList[20] = [
  { name: "Collect at Least 3 Minikits in Darth Maul", types: ["dm","collect","3mk"] },
  { name: "Collect at Least 3 Minikits in Count Dooku", types: ["cd","collect", "3mk"] },
  { name: "Collect at Least 3 Minikits in Darth Vader", types: ["dv","collect", "3mk"] },
  { name: "Collect 80 Minikits", types: ["mk","collect"] },

];
bingoList[21] = [
  { name: "Collect 750,000 studs", types: ["studs","collect"] },
  { name: "Buy Minikit detector", types: ["buy","extras"] },
  { name: "True Jedi in 5 Levels", types: ["tj"] }

];
bingoList[22] = [
  { name: "True Jedi in Negotiations", types: ["negotiations","tj"] },
  { name: "True Jedi in Invasion of Naboo", types: ["ion","tj"] },
  { name: "True Jedi in Escape from Naboo", types: ["efn","tj"] },
  { name: "True Jedi in Podrace ", types: ["pr","tj"] },
  { name: "True Jedi in Retake Theed Palace", types: ["rtp","tj"] },

];
bingoList[23] = [
  { name: "True Jedi in Discovery on Kamino", types: ["dk","tj"] },
  { name: "True Jedi in Droid Factory", types: ["df","tj"] },
  { name: "True Jedi in Jedi Battle", types: ["jb","tj"] },
  { name: "True Jedi in Gunship Cavalry ", types: ["gc","tj"] },

];
bingoList[24] = [
  { name: "True Jedi in Battle Over Coruscant", types: ["boc","tj"] },
  { name: "True Jedi in Chancellor in Peril", types: ["cip","tj"] },
  { name: "True Jedi in General Grievous", types: ["gg","tj"] },
  { name: "True Jedi in Defense of Kashyyyk", types: ["dok","tj"] },
  { name: "True Jedi in Ruin of the Jedi", types: ["rotj","tj"] },

];
bingoList[25] = [
  { name: "True Jedi in Darth Vader", types: ["dv","tj"] },
  { name: "True Jedi in Count Dooku", types: ["cd","tj"] },
  { name: "True Jedi in Darth Maul", types: ["dm","tj"] }

];
