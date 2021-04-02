(function(j, i, g, m, k, n, o) { function q(b) { var e, f, a = this, c = b.length, d = 0, h = a.i = a.j = a.m = 0; a.S = []; a.c = []; for (c || (b = [c++]); d < g;) a.S[d] = d++; for (d = 0; d < g; d++) e = a.S[d], h = h + e + b[d % c] & g - 1, f = a.S[h], a.S[d] = f, a.S[h] = e; a.g = function(b) { var c = a.S, d = a.i + 1 & g - 1, e = c[d], f = a.j + e & g - 1, h = c[f]; c[d] = h; c[f] = e; for (var i = c[e + h & g - 1]; --b;) d = d + 1 & g - 1, e = c[d], f = f + e & g - 1, h = c[f], c[d] = h, c[f] = e, i = i * g + c[e + h & g - 1]; a.i = d; a.j = f; return i }; a.g(g) } function p(b, e, f, a, c) { f = []; c = typeof b; if (e && c == "object") for (a in b) if (a.indexOf("S") < 5) try { f.push(p(b[a], e - 1)) } catch (d) {} return f.length ? f : b + (c != "string" ? "\0" : "") } function l(b, e, f, a) { b += ""; for (a = f = 0; a < b.length; a++) { var c = e, d = a & g - 1, h = (f ^= e[a & g - 1] * 19) + b.charCodeAt(a); c[d] = h & g - 1 } b = ""; for (a in e) b += String.fromCharCode(e[a]); return b } i.seedrandom = function(b, e) { var f = [], a; b = l(p(e ? [b, j] : arguments.length ? b : [(new Date).getTime(), j, window], 3), f); a = new q(f); l(a.S, j); i.random = function() { for (var c = a.g(m), d = o, b = 0; c < k;) c = (c + b) * g, d *= g, b = a.g(1); for (; c >= n;) c /= 2, d /= 2, b >>>= 1; return (c + b) / d }; return b }; o = i.pow(g, m); k = i.pow(2, k); n = k * 2; l(i.random(), j) })([], Math, 256, 6, 52);
// I don't know what the line above does, just copied and pasted it
isATypeAlreadyUsed = function (goal, typesList) { // takes a goal and returns if one of his types is already in usedTypes
    var currentTypes = goal.types || [];
    var test = false;
    for (var j=0;j< currentTypes.length;j++) {
        if (typesList.indexOf(currentTypes[j]) > -1) {
            test = true;
        }
    return test;
    }
};

bingoGenerator = function (bingoList, opts) {
    var LANG = opts.lang || 'name';
    var MODE = opts.mode || "normal";
    var cardType = "Normal";
    var SEED = opts.seed || Math.ceil(999999 * Math.random()).toString();
    var size = 5;

    Math.seedrandom(SEED);
    var bingoBoard = [];
    var easyTiles = [3,4,7,10,11,15,17,19,21,23];//shaping the grid
    var mediumTiles = [1,5,8,9,12,14,16,18,22,25];
    var hardTiles = [2,6,20,24];
    var extraHardTiles = [13];

    var usedTypes = [];
    var k = 0;// where to add the new types in usedTypes
    var randIndex = 0;

    for (var i = 1; i <= 25; i++) {
        if (easyTiles.indexOf(i) > -1) {
            randIndex = Math.floor(Math.random() * bingoList[1].length);
            while (isATypeAlreadyUsed(bingoList[1][randIndex],usedTypes)) { //reroll until no type is in common
                randIndex = Math.floor(Math.random() * bingoList[1].length);
            }
            for (var l = 0;l < (bingoList[1][randIndex].types || []).length;l++) {
                usedTypes[k+l] = (bingoList[1][randIndex].types || [])[l];
            }
            k = k + (bingoList[1][randIndex].types || []).length; // moves where to add the new types
            bingoBoard[i] = bingoList[1][randIndex];
        } else if (mediumTiles.indexOf(i) > -1) {
            randIndex = Math.floor(Math.random() * bingoList[2].length);
            while (isATypeAlreadyUsed(bingoList[2][randIndex],usedTypes)) { //reroll until no type is in common
                randIndex = Math.floor(Math.random() * bingoList[2].length);
            }
            for (var le = 0;le < (bingoList[2][randIndex].types || []).length;le++) {
                usedTypes[k+le] = (bingoList[2][randIndex].types || [])[le];
            }
            k = k + (bingoList[2][randIndex].types || []).length; // moves where to add the new types
            bingoBoard[i] = bingoList[2][randIndex];
        } else if (hardTiles.indexOf(i) > -1) {
            randIndex = Math.floor(Math.random() * bingoList[3].length);
            while (isATypeAlreadyUsed(bingoList[3][randIndex],usedTypes)) { //reroll until no type is in common
                randIndex = Math.floor(Math.random() * bingoList[3].length);
            }
            for (var la = 0;la < (bingoList[3][randIndex].types || []).length;la++) {
                usedTypes[k+la] = (bingoList[3][randIndex].types || [])[la];
            }
            k = k + (bingoList[3][randIndex].types || []).length; // moves where to add the new types
            bingoBoard[i] = bingoList[3][randIndex];
        } else {
            randIndex = Math.floor(Math.random() * bingoList[4].length);
            while (isATypeAlreadyUsed(bingoList[4][randIndex],usedTypes)) { //reroll until no type is in common
                randIndex = Math.floor(Math.random() * bingoList[4].length);
            }
            for (var lo = 0;lo < (bingoList[4][randIndex].types || []).length;lo++) {
                usedTypes[k+lo] = (bingoList[4][randIndex].types || [])[lo];
            }
            k = k + (bingoList[4][randIndex].types || []).length; // moves where to add the new types
            bingoBoard[i] = bingoList[4][randIndex];
        }
    }
    return { "board": bingoBoard } ;
};

module.exports = bingoGenerator;
