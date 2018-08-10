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
  { name: "Soulblast 1 card or more", types: ["soulblast"] },
  { name: "Use 2 Counterblast", types: ["counterblast"] },
  { name: "Declare a G Assist", types: ["g-assist"] },
  { name: "Use a Trigger as the Starting Vanguard", types: ["starter"] },
];
bingoList[2] = [
  { name: "Place a Sentinel only on GC and not using its effects", types: ["sentinel", "guard"] },
  { name: "Have 2 face-down cards in Damage Zone", types: ["counterblast"] },
  { name: "Reach Critical 2 with one unit", types: ["crit"] },
  { name: "Use 2 AUTO skills in one turn", types: ["auto"] },
];
bingoList[3] = [
  { name: "Reach 4 cards in Soul", types: ["soul"] },
  { name: "Soulblast 3 cards or more", types: ["soulblast"] },
  { name: "Use 4 Counterblasts", types: ["counterblast"] },
  { name: "Have cards in Exclusion Zone", types: ["exclusion", "g-assist", "ultimatestride"] },
];
bingoList[4] = [
  { name: "Check 5 Triggers", types: ["trigger"] },
  { name: "Soulblast 5 cards or more", types: ["soulblast"] },
  { name: "Use 6 Counterblasts", types: ["counterblast"] },
  { name: "Avoid misriding", types: ["misride"] },
];
bingoList[5] = [
  { name: "Reach 0 card in Soul after riding Grade 2", types: ["soul"] },
  { name: "Have 3 face-down cards in Damage Zone", types: ["counterblast"] },
  { name: "Use 2 ACT skills in one turn", types: ["act"] },
  { name: "Succeed a G Assist", types: ["g-assist"] },
  { name: "Do 4 Attacks or more before riding Grade 3", types: ["attack"] },
];
bingoList[6] = [
  { name: "Use 3 Skills in one turn", types: ["skill"] },
  { name: "Draw 2 cards in one turn", types: ["draw"] },
  { name: "Call 3 Rear-Guard in one turn", types: ["call"] },
  { name: "Have 3 cards face-up in the G-Zone", types: ["g-zone"] },
];
bingoList[7] = [
  { name: "Take 2 Damage in one turn (Rescue excluded)", types: ["takedamage"] },
  { name: "Deal 2 Damage to the opponent in one turn", types: ["dealdamage"] },
  { name: "Do 5 Attacks or more before riding Grade 3", types: ["attack"] },
  { name: "Declare two G Assist", types: ["g-assist"] },
];
bingoList[8] = [
  { name: "Place 5 cards from hand/G-Zone to GC to guard 1 attack", types: ["guard"] },
  { name: "Damage Check 4 Triggers (Rescue excluded)", types: ["damagecheck", "trigger"] },
  { name: "Use 2 G-Guardian", types: ["g-zone", "guard"] },
  { name: "Use 3 AUTO Skills with a Cost", types: ["auto"] },
];
bingoList[9] = [
  { name: "Have 4 face-down cards in Damage Zone", types: ["counterblast"] },
  { name: "Have 20 or less cards in the deck", types: ["deck"] },
  { name: "No call/superior call 2 turns in a row", types: ["no-call"] },
  { name: "Use 2 skills with unique keyword", types: ["skill", "keyword"] },
];
bingoList[10] = [
  { name: "Reach 5 cards in Soul", types: ["soul"] },
  { name: "Ride Grade 3 two times in one game", types: ["ride"] },
  { name: "Have 5 cards face-up in the G-Zone", types: ["g-zone"] },
  { name: "Use 3 Sentinel in one game", types: ["sentinel", "guard"] },
];
bingoList[11] = [
  { name: "Reach Critical 3 with one unit", types: ["crit"] },
  { name: "Use 4 Skills in one turn", types: ["skill"] },
  { name: "Call 4 Rear-Guard in one turn", types: ["call"] },
  { name: "Use 2 AUTO/ACT Generation Break skills", types: ["skill", "gb"] },
];
bingoList[12] = [
  { name: "Check 7 Triggers", types: ["trigger"] },
  { name: "Win a game on an Ultimate Stride turn", types: ["win", "ultimatestride"] },
  { name: "Use 5 AUTO Skills with a Cost", types: ["auto", "skill"] },
  { name: "Reach 40,000 Power with one unit", types: ["power"] },
];
bingoList[13] = [
  { name: "Use 2 Sentinel in one turn", types: ["sentinel", "guard"] },
  { name: "Win a game", types: ["win"] },
  { name: "Draw 4 cards in one turn", types: ["draw"] },
  { name: "Win a game with 5 cards in Damage Zone", types: ["win"] },
  { name: "Countercharge 3 times", types: ["countercharge"] },
];
bingoList[14] = [
  { name: "Have 15 or less cards in the deck", types: ["deck"] },
  { name: "Take 3 Damage or more before riding Grade 3", types: ["takedamage"] },
  { name: "Stand 3 Units with effect(s)", types: ["stand"] },
];
bingoList[15] = [
  { name: "Reach 50,000 Power with one unit", types: ["power"] },
  { name: "Have 3 Units with keyword", types: ["keyword"] },
  { name: "Damage Check 7 Triggers (Rescue excluded)", types: ["damagecheck", "trigger"] },
  { name: "Reach 25,000 Power with a Rear-Guard", types: ["power"] },
];
bingoList[16] = [
  { name: "Have 10 or less cards in the deck", types: ["deck"] },
  { name: "Use 5 Skills in one turn", types: ["skill"] },
  { name: "Win the game with 3 or less cards in hand", types: ["win"] },
  { name: "Take 0 damage during opponent’s turn", types: ["nodamage"] },
  { name: "Do 4 Attacks or more in one turn", types: ["attack"] },
];
bingoList[17] = [
  { name: "Reach 7 cards in Soul", types: ["soul"] },
  { name: "Deal 3 Damage to the opponent in one turn", types: ["dealdamage"] },
  { name: "Use 4 G-Guardian", types: ["g-zone", "guard"] },
  { name: "Use 5 AUTO/ACT Generation Break skills", types: ["skill", "gb"] },
  { name: "Reach 55,000 Power with one unit", types: ["power"] },
];
bingoList[18] = [
  { name: "Ride Grade 3 three times in one game", types: ["ride"] },
  { name: "Call 5 Rear-Guard in one turn", types: ["call"] },
  { name: "Have 4 Units with keyword", types: ["keyword"] },
  { name: "Use 4 Sentinel in one game", types: ["sentinel"] },
];
bingoList[19] = [
  { name: "Reach 60,000 Power with one unit", types: ["power"] },
  { name: "Heal 2 times in one game (Rescue excluded)", types: ["heal"] },
  { name: "Have 7 cards face-up in the G-Zone", types: ["g-zone"] },
];
bingoList[20] = [
  { name: "Check 10 Triggers", types: ["blkgate","ppgate"] },
  { name: "Take 3 Damage in one turn (Rescue excluded)", types: ["elecgate","ppgate"] },
  { name: "Stand 5 Units with effect(s)", types: ["stand"] },
];
bingoList[21] = [
  { name: "Get an unusable Heal Trigger", types: ["noheal"] },
  { name: "Use 7 G-Guardian", types: ["g-zone", "guard"] },
  { name: "Lose the G-Zone after an Ultimate Stride", types: ["ultimatestride"] },
  { name: "Win two games", types: ["win"] },
];
bingoList[22] = [
  { name: "Heal 3 times in one game (Rescue excluded)", types: ["heal"] },
  { name: "Win a game with an attack from a Vanguard", types: ["win"] },
  { name: "Countercharge 6 times", types: ["countercharge"] },
  { name: "Call more than 5 Rear-Guard in one turn", types: ["call"] },
];
bingoList[23] = [
  { name: "Use 3 Sentinel in one turn", types: ["sentinel", "guard"] },
  { name: "Have 9 cards face-up in the G-Zone", types: ["g-zone"] },
  { name: "Win a game with an attack from a Rear-Guard", types: ["win"] },
  { name: "Win a game without Striding the last turn", types: ["win"] },
];
bingoList[24] = [
  { name: "Deal 7 Damage or more to the opponent", types: ["overkill"] },
  { name: "Have 5 Units with keyword", types: ["keyword"] },
  { name: "Take 0 damage during two of your opponent’s turn in a row", types: ["nodamage"] },
  { name: "Check two unusable Heal Trigger", types: ["noheal"] },
];
bingoList[25] = [
  { name: "Heal 4 times in one game (Rescue excluded)", types: ["heal"] },
  { name: "Win a game with an attack from a Grade 0", types: ["win"] },
  { name: "Win a game without Striding the last 2 turns", types: ["win"] },
];
