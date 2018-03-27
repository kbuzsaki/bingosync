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
                if (typeof typesA != 'undefined' && typeof typesB != 'undefined') {
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
{ name: "Banned tr. action: wake from sleep", types: ["basic_trigger_tools", "fixing_type"] },
{ name: "Max. art shape w/h: 250", types: ["basic_art", "width_height"] },
{ name: "Max. editor space: height: 5000", types: ["width_height", "editor_limits"] },
{ name: "Max. tr. w/h: 50", types: ["width_height"] },
{ name: "Max. vehicle acceleration: 5", types: ["vehicles", "vehicle_condition"] },
{ name: "Min. art left: 5000", types: ["basic_art", "editor_limits"] },
{ name: "No checkpoints" },
{ name: "No customized font", types: ["fonts", "unmatching22"] },
{ name: "No tr. rotation", types: ["rotation"] },
{ name: "No triggered by 1", types: ["basic_trigger_tools"] },
{ name: "No triggered by 2", types: ["basic_trigger_tools"] },
{ name: "No triggered by 5", types: ["basic_trigger_tools"] },
{ name: "No use of outlines", types: ["basic_art"] }
];
bingoList[2] = [
{ name: "Alignment 1 only", types: ["texts"] },
{ name: "ch. op. time: 0 sec.", types: ["opacity"] },
{ name: "Falling obstacles incl.", types: ["unmatching1", "unmatching2", "unmatching31"] },
{ name: "Forced char.: Irresponsible dad", types: ["character", "unmatching32"] },
{ name: "Forced char.: Segway guy", types: ["character", "unmatching32"] },
{ name: "Hide vehicle: false", types: ["vehicles", "character", "unmatching13"] },
{ name: "Min. font size: 15", types: ["width_height", "texts"] },
{ name: "No low-op. shapes", types: ["opacity"] },
{ name: "No pinkish colors", types: ["basic_art", "colors"] },
{ name: "No rectangle interactives", types: ["basic_interactives"] },
{ name: "Polygon interactives only", types: ["basic_interactives"] }
];
bingoList[3] = [
{ name: "Alignment 2 only", types: ["texts"] },
{ name: "Banned col.: 5", types: ["basic_interactives", "collision"] },
{ name: "Banned col.: 6", types: ["basic_interactives", "collision"] },
{ name: "Banned tr. action: apply impulse", types: ["basic_trigger_tools", "unmatching3"] },
{ name: "Coin victory", types: ["victory"] },
{ name: "Font 2 only", types: ["fonts"] },
{ name: "Font 3 only", types: ["fonts"] },
{ name: "Font 4 only", types: ["fonts"] },
{ name: "Font 5 only", types: ["fonts"] },
{ name: "Max. interactives den.: 10", types: ["unmatching2", "basic_interactives", "density"] },
{ name: "Max. interactives w/h: 1000", types: ["width_height", "basic_interactives"] },
{ name: "Max. text tools: 10 (no customized fonts)", types: ["texts", "fonts"] },
{ name: "No 'limit rotation/range'", types: ["joints"] },
{ name: "No jets attached to vehicles", types: ["vehicles", "vehicle_condition", "joints", "unmatching5"] },
{ name: "No repeat type 4", types: ["basic_trigger_tools"] },
{ name: "No text rotation", types: ["rotation", "texts"] },
{ name: "No triggered by 3", types: ["basic_trigger_tools", "unmatching3"] },
{ name: "Vehicle acceleration: 1", types: ["vehicles", "vehicle_condition"] },
];
bingoList[4] = [
{ name: "20 colors only", types: ["basic_art", "colors"] },
{ name: "Banned col.: 4", types: ["basic_interactives", "collision"] },
{ name: "Banned tr. action: ch. col.", types: ["basic_trigger_tools", "collision"] },
{ name: "Banned tr. action: set to non fixed", types: ["basic_trigger_tools", "fixing_type"] },
{ name: "Font 1 only", types: ["fonts"] },
{ name: "Main movement: right", types: ["movement"] },
{ name: "Max. editor space: width: 10000", types: ["width_height", "editor_limits"] },
{ name: "Max. motor speed amount: 5", types: ["vehicles", "joints"] },
{ name: "Max. targets per tr.: 10", types: ["basic_trigger_tools"] },
{ name: "Max. tr. w/h: 10", types: ["width_height"] },
{ name: "Min. interactives w/h: 50", types: ["width_height", "basic_interactives"] },
{ name: "No purplish colors", types: ["basic_art", "colors"] },
{ name: "No vehicle linking", types: ["vehicles", "vehicle_condition", "joints"] },
{ name: "No wheel vehicles", types: ["vehicles", "vehicle_condition", "joints"] },
{ name: "Piston incl.", types: ["joints", "unmatching6"] },
{ name: "Text op. 100 only", types: ["texts", "opacity"] }
];
bingoList[5] = [
{ name: "Banned tr. action: ch. motor speed", types: ["basic_trigger_tools", "joints"] },
{ name: "Banned tr. action: delete self", types: ["basic_trigger_tools"] },
{ name: "Banned tr. action: set to fixed", types: ["basic_trigger_tools", "fixing_type", "unmatching7"] },
{ name: "ch. op. time: 3 sec.", types: ["opacity"] },
{ name: "Forced char.: Pogostick man", types: ["character", "unmatching25"] },
{ name: "Forced char.: Wheelchair guy", types: ["character", "unmatching25", "unmatching32"] },
{ name: "Freezing game incl.", types: ["fixing_type", "unmatching7"] },
{ name: "Min. art left: 7500", types: ["basic_art", "editor_limits"] },
{ name: "Min. motor torque: 1000", types: ["vehicles", "joints"] },
{ name: "Min. shapes left: 300", types: ["editor_limits", "basic_interactives"] },
{ name: "No black holes", types: ["density", "unmatching4"] },
{ name: "No cyanish colors", types: ["basic_art", "colors"] },
{ name: "No repeat type 3", types: ["basic_trigger_tools"] },
{ name: "No shading", types: ["basic_art"] },
{ name: "No start disabled", types: ["basic_trigger_tools"] },
{ name: "No triggered by 6", types: ["basic_trigger_tools"] },
{ name: "Playable char.: Irresponsible dad", types: ["character", "unmatching32"] },
{ name: "Playable char.: Segway guy", types: ["character", "unmatching32"] },
{ name: "Slow part incl.", types: ["unmatching29"] },
{ name: "Spikefall incl.", types: ["unmatching8", "unmatching27", "unmatching28"] },
{ name: "Vertical sliding joints only", types: ["vehicles", "joints"] }
];
bingoList[6] = [
{ name: "Activate object tr. only", types: ["basic_trigger_tools"] },
{ name: "Ballfall incl.", types: ["unmatching9"] },
{ name: "Banned col.: 2", types: ["basic_interactives", "collision"] },
{ name: "Banned col.: 3", types: ["basic_interactives", "collision"] },
{ name: "Black text only", types: ["texts", "colors"] },
{ name: "'Collide connected' joints only", types: ["vehicles", "collision", "joints"] },
{ name: "Elevator part incl.", types: ["joints", "unmatching26"] },
{ name: "End screen incl." },
{ name: "Max. tr.: 100", types: ["basic_trigger_tools", "editor_limits"] },
{ name: "Min. interactives den.: 10", types: ["basic_interactives", "density"] },
{ name: "Min. motor speed amount: 3", types: ["vehicles", "joints"] },
{ name: "Negative motor speed only", types: ["vehicles", "joints"] },
{ name: "No polygons", types: ["basic_interactives"] },
{ name: "No triggered by 4", types: ["basic_trigger_tools", "unmatching3"] },
{ name: "Positive motor speed only", types: ["vehicles", "joints"] },
{ name: "Rectangle interactives only", types: ["basic_interactives"] },
{ name: "Sleeping banned", types: ["basic_interactives", "fixing_type"] }
];
bingoList[7] = [
{ name: "Alignment 3 only", types: ["texts"] },
{ name: "Banned col.: 7", types: ["basic_interactives", "collision"] },
{ name: "Banned tr. action: enable", types: ["basic_trigger_tools"] },
{ name: "Bottlerun incl.", types: ["fixing_type", "unmatching25"] },
{ name: "Forced char.: Irresponsible mum", types: ["character", "unmatching32"] },
{ name: "Hide'n'seek part incl.", types: ["unmatching10"] },
{ name: "Light sources incl.", types: ["unmatching11"] },
{ name: "Max. font size: 20", types: ["width_height", "texts"] },
{ name: "Max. text tools: 5 (no customized fonts)", types: ["texts", "fonts"] },
{ name: "Min. art shape w/h: 25", types: ["basic_art", "width_height"] },
{ name: "No 'collide connected'", types: ["vehicles", "collision", "joints"] },
{ name: "No 'set to vehicle'", types: ["vehicles", "vehicle_condition"] },
{ name: "No orangish colors", types: ["basic_art", "colors"] },
{ name: "No vehicle space/shift/ctrl actions", types: ["vehicles", "vehicle_condition"] },
{ name: "No yellowish colors", types: ["basic_art", "colors"] },
{ name: "One word per line only (texts)", types: ["texts"] },
{ name: "White text only", types: ["texts", "colors"] }
];
bingoList[8] = [
{ name: "Art style: Minimalistic", types: ["basic_art", "colors"] },
{ name: "Banned col.: 1", types: ["basic_interactives", "collision"] },
{ name: "Banned tr. action: ch. op.", types: ["basic_trigger_tools", "opacity"] },
{ name: "Banned tr. action: disable", types: ["basic_trigger_tools"] },
{ name: "Colorful text only", types: ["texts", "colors"] },
{ name: "Customized font", types: ["fonts", "unmatching22"] },
{ name: "Horizontal sliding joints only", types: ["vehicles", "joints"] },
{ name: "Interactives den.: 0.1", types: ["basic_interactives", "unmatching2", "density"] },
{ name: "Intro incl.", types: ["texts"] },
{ name: "Max. editor space: height: 2000", types: ["width_height", "editor_limits"] },
{ name: "Max. motor torque: 100", types: ["vehicles", "joints"] },
{ name: "Music/beat incl.", types: ["basic_trigger_tools", "unmatching3"] },
{ name: "No bluish colors", types: ["basic_art", "colors"] },
{ name: "No greenish colors", types: ["basic_art", "colors"] },
{ name: "No groups with fixed angle", types: ["fixing_type", "groups"] },
{ name: "No reddish colors", types: ["basic_art", "colors"] },
{ name: "Playable char.: Pogostick man", types: ["character", "unmatching25"] },
{ name: "Playable char.: Wheelchair guy", types: ["character", "unmatching25", "unmatching32"] },
{ name: "Throwing game incl.", types: ["unmatching12", "unmatching13", "unmatching14"] }
];
bingoList[9] = [
{ name: "10 colors only", types: ["basic_art", "colors"] },
{ name: "All movement special items", types: ["special_items"] },
{ name: "Boss battle incl. (2 attacks min.)", types: ["unmatching15", "unmatching30"] },
{ name: "Green hills background", types: ["basic_art", "environment"] },
{ name: "Max. art shape w/h: 100", types: ["basic_art", "width_height"] },
{ name: "Max. interactives w/h: 200", types: ["width_height", "basic_interactives"] },
{ name: "Max. motor speed amount: 1", types: ["vehicles", "joints"] },
{ name: "Max. targets per tr.: 5", types: ["basic_trigger_tools"] },
{ name: "Min. 5 coins victory", types: ["victory", "unmatching20"] },
{ name: "Min. art left: 9000", types: ["basic_art", "editor_limits"] },
{ name: "Min. font size: 30", types: ["width_height", "texts"] },
{ name: "No foreground groups", types: ["groups", "unmatching16"] },
{ name: "No numbers (texts)", types: ["texts"] },
{ name: "No punctuation marks (texts)", types: ["texts"] },
{ name: "No repeat type 2", types: ["basic_trigger_tools"] },
{ name: "Playable char.: Irresponsible mum", types: ["character", "unmatching32"] },
{ name: "Randomized event incl.", types: ["unmatching17"] },
{ name: "Secret victory incl.", types: ["victory"] },
{ name: "Triggered by 3 only", types: ["basic_trigger_tools", "unmatching3"] }
];
bingoList[10] = [
{ name: "All blade weapons", types: ["special_items"] },
{ name: "Art style: 'Badland'", types: ["basic_art", "colors"] },
{ name: "Art style: Comic", types: ["basic_art", "colors"] },
{ name: "Art style: Realistic", types: ["basic_art", "colors"] },
{ name: "Art style: Three-dimensional", types: ["basic_art", "colors"] },
{ name: "City background", types: ["basic_art", "environment"] },
{ name: "Forced char.: Helicopter man", types: ["character", "unmatching25", "unmatching27"] },
{ name: "Forced char.: Moped couple", types: ["character", "unmatching32"] },
{ name: "Main movement: down", types: ["movement"] },
{ name: "Max. motor torque: 5", types: ["vehicles", "joints"] },
{ name: "Min. motor speed amount: 20", types: ["vehicles", "joints"] },
{ name: "Triggered by 4 only", types: ["basic_trigger_tools", "unmatching3"] }
];
bingoList[11] = [
{ name: "All hazards", types: ["unmatching8", "special_items", "unmatching18"] },
{ name: "Art style: Pixels", types: ["basic_art", "colors"] },
{ name: "Art style: Scribbled", types: ["basic_art", "colors"] },
{ name: "Building time: 5 days", types: ["building_time"] },
{ name: "Col. 1 only", types: ["basic_interactives", "collision"] },
{ name: "Forced char.: Lawnmower man", types: ["character", "unmatching32"] },
{ name: "Level mood: dark", types: ["colors"] },
{ name: "Level mood: happy", types: ["colors", "unmatching19"] },
{ name: "Main environment: inside a building", types: ["environment"] },
{ name: "Main environment: nature", types: ["environment"] },
{ name: "Min. interactives den.: 100", types: ["basic_interactives", "density", "unmatching12"] },
{ name: "No repeat type 1", types: ["basic_trigger_tools"] },
{ name: "No sliding joints", types: ["vehicles", "joints"] },
{ name: "No special items", types: ["unmatching5", "unmatching8", "special_items", "unmatching20"] },
{ name: "No text tool", types: ["texts", "fonts"] },
{ name: "No tr. clocks", types: ["basic_trigger_tools", "unmatching3"] },
{ name: "No vocals (a, e, i, o, u)", types: ["texts"] },
{ name: "Triggered by 2 only", types: ["basic_trigger_tools", "unmatching3"] }
];
bingoList[12] = [
{ name: "All miscellaneous special items", types: ["special_items"] },
{ name: "Art style: Colorful", types: ["basic_art", "colors"] },
{ name: "Color bar left half only (red-cyan)", types: ["basic_art", "colors"] },
{ name: "Main environment: city", types: ["environment"] },
{ name: "Max. text tools: 1 (no customized fonts)", types: ["texts", "fonts"] },
{ name: "Max. tr.: 50", types: ["basic_trigger_tools", "editor_limits"] },
{ name: "Min. shapes left: 450", types: ["editor_limits", "basic_interactives"] },
{ name: "No motors", types: ["vehicles", "joints"] },
{ name: "No tr. delay", types: ["basic_trigger_tools"] },
{ name: "Playable char.: Moped couple", types: ["character", "unmatching32"] },
{ name: "Text rotation: 90 and -90 degrees.", types: ["rotation", "texts"] }
];
bingoList[13] = [
{ name: "All 16 NPCs", types: ["special_items"] },
{ name: "Art style: Outlines only", types: ["basic_art", "colors"] },
{ name: "Banned tr. action: activate", types: ["basic_trigger_tools"] },
{ name: "Bluish colors only", types: ["basic_art", "colors"] },
{ name: "Color bar right half only (cyan-red)", types: ["basic_art", "colors"] },
{ name: "Dark colors only", types: ["basic_art", "colors"] },
{ name: "Forced char.: Effective shopper", types: ["character", "unmatching32"] },
{ name: "Forced char.: Indiana Jones", types: ["character", "unmatching32"] },
{ name: "Greenish colors only", types: ["basic_art", "colors"] },
{ name: "Hide vehicle: true", types: ["vehicles", "character", "unmatching25", "unmatching32"] },
{ name: "Level mood: sad", types: ["colors"] },
{ name: "Main environment: forest", types: ["environment"] },
{ name: "Main movement: left", types: ["movement"] },
{ name: "Min. art left: 9500", types: ["basic_art", "editor_limits"] },
{ name: "No overlapping art shapes", types: ["basic_art"] },
{ name: "No pin joints", types: ["vehicles", "joints"] },
{ name: "Playable char.: Lawnmower man", types: ["character", "unmatching32"] },
{ name: "Reddish colors only", types: ["basic_art", "colors"] },
{ name: "Repeat type 2 only", types: ["basic_trigger_tools"] },
{ name: "Slightly saturated colors only", types: ["basic_art", "colors"] },
{ name: "Standard colors only", types: ["basic_art", "colors"] },
{ name: "Triangle interactives only", types: ["basic_interactives"] },
{ name: "Triggered by 1 only", types: ["basic_trigger_tools", "unmatching3"] }
];
bingoList[14] = [
{ name: "Animated font", types: ["fonts", "unmatching21", "unmatching22"] },
{ name: "Art style: 'Badland' (inverted)", types: ["basic_art", "colors"] },
{ name: "Art style: Abstract", types: ["basic_art", "colors"] },
{ name: "Bright colors only", types: ["basic_art", "colors"] },
{ name: "Customized char.", types: ["vehicles", "vehicle_condition", "character", "unmatching13", "unmatching16", "unmatching25", "unmatching27", "unmatching32"] },
{ name: "Forced char.: Santa Claus", types: ["character", "unmatching25", "unmatching26", "unmatching27", "unmatching32"] },
{ name: "Horizontal and vertical interactive edges only", types: ["basic_interactives", "movement"] },
{ name: "Main environment: cave", types: ["environment", "unmatching19", "unmatching23"] },
{ name: "Main environment: under water", types: ["environment"] },
{ name: "Main movement: up", types: ["movement", "unmatching9", "unmatching28", "unmatching32"] },
{ name: "Max. art shape w/h: 50", types: ["basic_art", "width_height"] },
{ name: "Max. editor space: width: 5000", types: ["width_height", "editor_limits"] },
{ name: "Max. font size: 10", types: ["width_height", "texts"] },
{ name: "Max. targets per tr.: 3", types: ["basic_trigger_tools"] },
{ name: "Min. font size: 50", types: ["width_height", "texts"] },
{ name: "No rotation (interactives)", types: ["rotation", "basic_interactives"] },
{ name: "No touching interactives", types: ["basic_interactives"] },
{ name: "Numbers only (texts)", types: ["texts"] },
{ name: "Orangish colors only", types: ["basic_art", "colors"] },
{ name: "Playable char.: Effective shopper", types: ["character", "unmatching32"] },
{ name: "Repeat type 3 only", types: ["basic_trigger_tools"] },
{ name: "Vehicle ch. during level", types: ["vehicles", "vehicle_condition", "character"] },
];
bingoList[15] = [
{ name: "4-corners art shapes", types: ["basic_art"] },
{ name: "5 colors only", types: ["basic_art", "colors"] },
{ name: "Cyanish colors only", types: ["basic_art", "colors"] },
{ name: "Level mood: dramatic", types: ["colors"] },
{ name: "Main environment: not on earth", types: ["environment", "unmatching23"] },
{ name: "Min. 20 coins victory", types: ["victory", "unmatching20"] },
{ name: "Min. art shape w/h: 50", types: ["basic_art", "width_height", "unmatching22"] },
{ name: "No saturation (B'n'W)", types: ["basic_art", "colors"] },
{ name: "Playable char.: Helicopter man", types: ["character", "unmatching25", "unmatching27"] },
{ name: "Playable char.: Indiana Jones", types: ["character", "unmatching32"] },
{ name: "Purplish colors only", types: ["basic_art", "colors"] },
{ name: "Repeat type 4 only", types: ["basic_trigger_tools"] },
{ name: "Yellowish colors only", types: ["basic_art", "colors"] }
];
bingoList[16] = [
{ name: "Art style: Minimalistic (inverted)", types: ["basic_art", "colors"] },
{ name: "Black outlines forced", types: ["basic_art", "colors"] },
{ name: "Char. moving backwards", types: ["character", "movement"] },
{ name: "Col. 4 only", types: ["basic_interactives", "collision"] },
{ name: "Col. 7 only", types: ["basic_interactives", "collision"] },
{ name: "Level mood: romantic", types: ["colors", "unmatching23"] },
{ name: "Max. editor space: height: 1000", types: ["width_height", "editor_limits"] },
{ name: "No art shapes in groups", types: ["basic_art"] },
{ name: "No texts", types: ["texts", "fonts"] },
{ name: "Pinkish colors only", types: ["basic_art", "colors"] },
{ name: "Repeat type 1 only", types: ["basic_trigger_tools"] }
];
bingoList[17] = [
{ name: "Customized vehicle char.", types: ["vehicles", "vehicle_condition", "character", "unmatching13", "unmatching16", "unmatching27", "unmatching32"] },
{ name: "Highly saturated colors only", types: ["basic_art", "colors"] },
{ name: "Max. targets per tr.: 2", types: ["basic_trigger_tools"] },
{ name: "Max. tr.: 20", types: ["basic_trigger_tools", "editor_limits"] },
{ name: "No joints", types: ["vehicles", "joints"] },
{ name: "Playable char.: Santa Claus", types: ["character", "unmatching25", "unmatching26", "unmatching27", "unmatching32"] }
];
bingoList[18] = [
{ name: "Art style: Realistic (inverted)", types: ["basic_art", "colors"] },
{ name: "Max. interactives w/h: 50", types: ["width_height", "basic_interactives"] },
{ name: "Min. interactives w/h: 200", types: ["width_height", "basic_interactives"] },
{ name: "No background art", types: ["basic_art"] },
{ name: "No interactive groups", types: ["vehicle_condition", "basic_interactives", "groups"] },
{ name: "Triggered by 6 only", types: ["basic_trigger_tools"] }
];
bingoList[19] = [
{ name: "3 colors only", types: ["basic_art", "colors"] },
{ name: "Building time: 2 days", types: ["building_time"] },
{ name: "Min. art left: 9900", types: ["basic_art", "editor_limits", "unmatching11"] },
{ name: "Tr. not connectable to tr.", types: ["basic_trigger_tools"] },
{ name: "White outlines forced", types: ["basic_art", "colors"] }
];
bingoList[20] = [
{ name: "Blank white background", types: ["basic_art", "colors"] },
{ name: "Customized walking char.", types: ["vehicles", "vehicle_condition", "character", "unmatching13", "unmatching16", "unmatching25", "unmatching27", "unmatching32"] },
{ name: "No touching art shapes", types: ["basic_art"] },
{ name: "Only rect. shapes as art", types: ["basic_art"] },
{ name: "Triggered by 5 only (single triggering)", types: ["basic_trigger_tools", "unmatching6", "unmatching7", "unmatching10", "unmatching15", "unmatching17", "unmatching21"] }
];
bingoList[21] = [
{ name: "2 colors only", types: ["basic_art", "colors"] },
{ name: "Force char.: false", types: ["character", "unmatching25", "unmatching26", "unmatching27", "unmatching32"] },
{ name: "Max. editor space: height: 500", types: ["width_height", "editor_limits"] },
{ name: "No fixed interactives", types: ["basic_interactives", "fixing_type"] },
{ name: "No groups", types: ["basic_art", "vehicle_condition", "groups"] },
];
bingoList[22] = [
{ name: "3 colors only (+op. banned)", types: ["basic_art", "opacity", "colors", "unmatching11"] },
{ name: "Complement outlines forced", types: ["basic_art", "colors"] },
{ name: "Customized flying char.", types: ["vehicles", "vehicle_condition", "character", "unmatching13", "unmatching16", "unmatching25", "unmatching27"] },
{ name: "Max. editor space: width: 1000", types: ["width_height", "editor_limits"] },
{ name: "Min. art left: 9980", types: ["basic_art", "editor_limits", "unmatching11"] },
{ name: "Min. art shape w/h: 100", types: ["basic_art", "width_height", "unmatching22"] },
{ name: "Pure black/white only", types: ["basic_art", "colors"] }
];
bingoList[23] = [
{ name: "3-corners art shapes", types: ["basic_art"] },
{ name: "Col. 2 only", types: ["basic_interactives", "collision"] },
{ name: "Max. tr.: 5", types: ["basic_trigger_tools", "editor_limits", "unmatching6", "unmatching10"] },
{ name: "Min. shapes left: 700", types: ["editor_limits", "basic_interactives"] },
{ name: "Tr. only connectable to tr.", types: ["basic_trigger_tools", "unmatching6", "unmatching7", "unmatching10", "unmatching15", "unmatching17", "unmatching21"] }
];
bingoList[24] = [
{ name: "2 colors only (+op. banned)", types: ["basic_art", "opacity", "colors", "unmatching11"] },
{ name: "No activate object tr.", types: ["basic_trigger_tools"] },
{ name: "No art shapes", types: ["basic_art", "editor_limits", "unmatching11"] },
{ name: "No main char.", types: ["character", "unmatching13", "unmatching16", "unmatching25", "unmatching26", "unmatching27", "unmatching29", "unmatching30", "movement", "unmatching31"] }
];
bingoList[25] = [
{ name: "Building time: 12 hours", types: ["building_time"] },
{ name: "Fixed interactives only", types: ["vehicle_condition", "unmatching1", "basic_interactives", "fixing_type", "unmatching3", "unmatching4", "joints", "unmatching14", "unmatching18"] },
{ name: "No tr.", types: ["basic_trigger_tools", "editor_limits", "unmatching6", "unmatching7", "unmatching10", "unmatching15", "unmatching17", "unmatching21"] },
{ name: "Pure black/white only (+op. banned)", types: ["basic_art", "opacity", "colors", "unmatching11"] }
];
