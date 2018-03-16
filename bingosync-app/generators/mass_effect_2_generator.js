//Uses SRL Generator

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
                if (typeof typesB != 'undefined' && typeof typesA != 'undefined') {
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
  { "name": "Kill Batarian Bartender", types: ["Aomega"] },
  { "name": "Presidium Fish sidequest", types: ["Acitadel"] },
  { "name": "Visit the council"},
  { "name": "I am the very model of a scientist Salarian"},
  { "name": "Black out from drinking on the Citadel"},
];
bingoList[2] = [
  { "name": "N7 Lost Operative", types: ["n7"] },
  { "name": "N7 Eclipse Smuggling Depot", types: ["n7"] },
  { "name": "Save Daniel", types: ["Aomega"] },
  { "name": "Punch the reporter"},
];
bingoList[3] = [
  { "name": "Complete 1 firewalker mission", types: ["fw"] },
  { "name": "N7 MSV Estevanico", types: ["n7"] },
  { "name": "N7 Wrecked Merchant Freighter", types: ["n7", "n7a"] },
];
bingoList[4] = [
  { "name": "N7 Abandoned Research Station", types: ["n7", "n7a"] },
  { "name": "Complete 3 Omega Assignments", types: ["Aomega"] },
  { "name": "Buy a space hamster", types: ["shop"] },
  { "name": "Recover all normandy dog tags and Shepard's helmet", types: ["shop"] },
];
bingoList[5] = [
  { "name": "Complete 2 firewalker missions", types: ["fw"] },
  { "name": "Complete 3 Citadel Assignments", types: ["Acitadel"] },
  { "name": "2 +10% Shotgun damage upgrades", types: ["sg"] },
  { "name": "2 +10% Sniper Rifle Damage upgrades", types: ["sr"] },
  { "name": "Get discounts at every store on the citadel", types: ["shop"] },
   { "name": "Complete 3 Citadel Assignments", types: ["Acitadel"] },
];
bingoList[6] = [
  { "name": "Zaeed Loyalty", types: ["loyal"] },
  { "name": "N7 Hahne-Kedar Facility", types: ["n7", "n7a"] },
  { "name": "2 15% Heavy Weapon Ammo Upgrades", types: ["hwa"] },
  { "name": "2 +1 Medi-gel Upgrades", types: ["mg"] },
];
bingoList[7] = [
  { "name": "Complete Prothean Site firewalker mission", types: ["fw"] },
  { "name": "N7 Archaeological Dig Site", types: ["n7","n7c"] },
  { "name": "2 10% Assault Rifle Damage upgrades", types: ["ar"] },
  { "name": "2 10% SMG Damage upgrades", types: ["smg"] },
  { "name": "2 10% Health upgrades", types: ["hp"] },
  { "name": "2 10% Biotic Damage upgrades", types: ["bd"] },
  { "name": "Complete all crew member assignments", types: ["Anor"] },
  { "name": "Probe Uranus"},
];
bingoList[8] = [
  { "name": "N7 Captured Mining Facility", types: ["n7", "n7a"] },
  { "name": "N7 Anomalous Weather Detected", types: ["n7"] },
  { "name": "N7 Abandoned Mine", types: ["n7"] },
  { "name": "N7 Imminent Ship Crash", types: ["n7"] },
  { "name": "N7 Quarian Crash Site", types: ["n7"] },
  { "name": "2 10% Shield upgrades", types: ["shield"] },
  { "name": "Shoot Conrad Verner", types: ["Aillium"] },
  { "name": "Recruit Tali", types: ["recruit", "Tali"] },
  { "name": "Complete a recruit without guns", types: ["recruit"] },
  { "name": "Complete a recruit without powers", types: ["recruit"] },
];
bingoList[9] = [
  { "name": "Have sex with Jack", types: ["rom","jack"] },
  { "name": "N7 Blood Pack Relay", types: ["n7", "n7b"] },
  { "name": "N7 MSV Strontium Mule", types: ["n7", "n7c"] },
  { "name": "2 10% Tech Damage upgrades", types: ["td"] },
  { "name": "Complete Liara's sidequests", types: ["Aillium"] },
  { "name": "Buy all three types of fish", types: ["shop"] },
  { "name": "Recruit Thane", types: ["recruit", "Thane"] },
];
bingoList[10] = [
  { "name": "Jacob Loyalty", types: ["loyal","jacob"] },
  { "name": "Miranda Loyalty", types: ["loyal","miranda"] },
  { "name": "2 10% Pistol Damage upgrades", types: ["pistol"] },
  { "name": "4 10% SMG damage upgrades", types: ["smg"] },
  { "name": "4 10% Health upgrades", types: ["hp"] },
  { "name": "4 +1 Medi-gel Upgrades", types: ["mg"] },
  { "name": "Recruit Samara", types: ["recruit", "morinth"] },
  { "name": "Complete a recruit on Insanity", types: ["recruit"] },
  { "name": "Complete monkey shooting mini-game on Tuchanka", types: ["tuchanka"] },
  { "name": "Win a varren fight bet on Tuchanka", types: ["tuchanka"] },
];
bingoList[11] = [
  { "name": "N7 Blood Pack Base", types: ["n7", "n7b"] },
  { "name": "N7 Blue Suns Base", types: ["n7", "n7c"] },
  { "name": "N7 Endangered Research Station", types: ["n7"] },
];
bingoList[12] = [
  { "name": "Get kelly to feed fish", types: ["rom"] },
  { "name": "Jack Loyalty", types: ["jack", "loyal"] },
  { "name": "N7 Javelin Missiles Launched", types: ["n7", "n7c"] },
  { "name": "4 10% Biotic Damage upgrades", types: ["bd"] },
  { "name": "Complete 4 Illium Assignments", types: ["Aillium"] },

];
bingoList[13] = [
  { "name": "Mordin Loyalty", types: ["loyal"] },
  { "name": "Complete a Loyalty without guns (no Samara/Thane)", types: ["loyal"] },
  { "name": "Complete a Loyalty without powers (no Samara/Thane)", types: ["loyal"] },
  { "name": "N7 Mining the Canyon", types: ["n7"] },
  { "name": "4 10% Assault Rifle Damage upgrades", types: ["ar"] },
  { "name": "4 10% Pistol Damage upgrades", types: ["pistol"] },
  { "name": "4 15% Heavy Weapon Ammo Upgrades", types: ["hwa"] },
];
bingoList[14] = [
  { "name": "Kasumi Loyalty", types: ["loyal"] },
  { "name": "4 10% Shield upgrades", types: ["shield"] },
  { "name": "Complete a Loyalty on Insanity (no Samara/Thane)", types: ["loyal"] },
];
bingoList[15] = [
  { "name": "Garrus Loyalty", types: ["loyal", "garrus"] },
  { "name": "4 10% Tech Damage upgrades", types: ["td"] },
  { "name": "12 total upgrades", types: ["td", "sg", "ar", "pst", "sr", "smg", "shield", "hp", "hwa", "mg", "bd","td"] },
];
bingoList[16] = [
  { "name": "4 Sniper Rifle 10% damage upgrades", types: ["sr"] },
  { "name": "Complete 10 (non-N7) assignments", types: ["Acitadel","Aomega","Aillium","Anor"] },
  { "name": "Grunt Loyalty", types: ["loyal"] },
];
bingoList[17] = [
  { "name": "Samara Loyalty", types: ["loyal"] },
  { "name": "4 Shotgun 10% damage upgrades", types: ["sg"] },
  { "name": "Acquire Reaper IFF and activate Legion", types: ["recruit", "Legion"] },
];
bingoList[18] = [
  { "name": "Thane Loyalty", types: ["loyal", "thane"] },
  { "name": "Complete 6 N7 Missions", types: ["n7"] },
  { "name": "Complete 2 Loyalties on Veteran (no Samara/Thane)", types: ["loyal"] },
];
bingoList[19] = [
  { "name": "Kill the Reaper Core without using HW", types: ["recruit", "Legion"] },
  { "name": "Tali Loyalty", types: ["loyal", "tali"] },
  { "name": "Acquire 7 (non-ship) upgrades of a single type", types: ["td", "sg", "ar", "pst", "sr", "smg", "shield", "hp", "hwa", "mg", "bd","td"] },
];
bingoList[20] = [
  { "name": "Complete 3 Loyalty Missions", types: ["loyal"] },
  { "name": "In the Arrival DLC, complete Object Rho fight without dying on Veteran difficulty", types: ["dlc"] },
  { "name": "Legion Loyalty", types: ["loyal", "legion"] },
];
bingoList[21] = [
  { "name": "Acquire 10 model ships", types: ["shop"] },
  { "name": "Kill Tela Vasir (Shadow Broker DLC)", types: ["dlc"] },
  { "name": "Complete Vulcan Station (Overlord)", types: ["dlc"] },
];
bingoList[22] = [
  { "name": "Acquire 11 party members", types: ["recruit"] },
  { "name": "Acquire all ship upgrades", types: ["recruit"] },
  { "name": "Resolve legion-tali loyalty conflict", types: ["loyal", "tali", "legion"] },
];
bingoList[23] = [
  { "name": "Romance Miranda", types: ["rom", "miranda"] },
  { "name": "Romance Jacob", types: ["rom", "jacob"] },
  { "name": "Romance Jack", types: ["rom", "Jack"] },
  { "name": "Romance Garrus", types: ["rom", "garrus"] },
];
bingoList[24] = [
 { "name": "Acquire 12 party members", types: ["recruit"] },
 { "name": "Romance Thane", types: ["rom", "thane"] },
 { "name": "Romance Tali", types: ["rom", "tali"] },
 { "name": "Kill Jacob", types: ["rom", "tali"] },

];
bingoList[25] = [
  { "name": "Morinth Loyalty", types: ["loyal", "morinth"] },
  { "name": "Enable veteran difficulty at the start, and never reduce the difficulty below veteran" },
  { "name": "Kill the Human-Reaper" },
];
