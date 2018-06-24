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
   { name: "5 fights with a bow", types: ["Weapons"]},
   { name: "5 fights with a knife", types: ["Weapons"]},
   { name: "5 fights with a sword", types: ["Weapons"]},
   { name: "5 fights with a 2H sword", types: ["Weapons"]},
   { name: "5 fights with an axe", types: ["Weapons"]},
   { name: "5 fights with a 2H axe", types: ["Weapons"]},
   { name: "5 fights with a hammer", types: ["Weapons"]},
   { name: "5 fights with a spear", types: ["Weapons"]},
   { name: "5 fights with a staff", types: ["Weapons"]},
   { name: "5 fights with gloves", types: ["Weapons"]},
   { name: "5 fights with a flail", types: ["Weapons"]},
   { name: "Have 1 pet", types: ["Pet"]},
   { name: "Beat a boss with Larc", types: ["Boss","Dragon"]}
];

bingoList[2] = [
   { name: "Beat a boss with a knife", types: ["Weapons","Boss"]},
   { name: "Beat a boss with a sword", types: ["Weapons","Boss"]},
   { name: "Beat a boss with a 2H sword", types: ["Weapons","Boss"]},
   { name: "Beat a boss with an axe", types: ["Weapons","Boss"]},
   { name: "Beat a boss with a 2H axe", types: ["Weapons","Boss"]},
   { name: "Beat a boss with a hammer", types: ["Weapons","Boss"]},
   { name: "Beat a boss with a spear", types: ["Weapons","Boss"]},
   { name: "Beat a boss with a staff", types: ["Weapons","Boss"]},
   { name: "Beat a boss with gloves", types: ["Weapons","Boss"]},
   { name: "Beat a boss with a flail", types: ["Weapons","Boss"]},
   { name: "Harvest in the orchard", types: ["Orchard"]},
   { name: "Complete 10 events", types: ["Events","EventsF","EventsD","EventsJ"]},
   { name: "Place 10 artifacts", types: ["Land"]},
   { name: "Have 2 pets", types: ["Pet"]},
   { name: "Reach level 15", types: ["Level"]},
   { name: "Complete 1 Dragon events (splashscreen)", types: ["EventsD","Dragon"]},
   { name: "5 entries in the cactus diary", types: ["Events","Cactus","EventsF","EventsD","EventsJ"]},
   { name: "Land with max Shade", types: ["Land","Shade"]}
];

bingoList[3] = [
   { name: "Reach level 20", types: ["Level"]},
   { name: "Learn 5 abilities", types: ["Ability"]},
   { name: "Land with max Salamander", types: ["Land"]},
   { name: "Obtain chobin hood demihuman", types: ["Pet"]},
   { name: "10 entries in the cactus diary", types: ["Events","Cactus","EventsF","EventsD","EventsJ"]},
   { name: "Harvest in the orchard 5 times", types: ["Orchard"]},
   { name: "10 fights with a bow", types: ["Weapons"]},
   { name: "10 fights with a knife", types: ["Weapons"]},
   { name: "10 fights with a sword", types: ["Weapons"]},
   { name: "10 fights with a 2H sword", types: ["Weapons"]},
   { name: "10 fights with an axe", types: ["Weapons"]},
   { name: "10 fights with a 2H axe", types: ["Weapons"]},
   { name: "10 fights with a hammer", types: ["Weapons"]},
   { name: "10 fights with a staff", types: ["Weapons"]},
   { name: "10 fights with a spear", types: ["Weapons"]},
   { name: "10 fights with gloves", types: ["Weapons"]},
   { name: "10 fights with a flail", types: ["Weapons"]}
];

bingoList[4] = [
   { name: "Learn 5 STs", types: ["ST"]},
   { name: "Complete 15 events", types: ["Events","EventsF","EventsD","EventsJ"]},
   { name: "Place 15 artifacts", types: ["Land"]},
   { name: "Have 3 pets", types: ["Pet"]},
   { name: "Have a level 10 pet", types: ["Level","Pet"]},
   { name: "Land with max Wisp", types: ["Land"]},
   { name: "Beat a boss with Bud", types: ["Boss"]},
   { name: "Beat a boss with Lisa", types: ["Boss"]},
   { name: "Complete 1 Jumi events (splashscreen)", types: ["EventsJ","Jumi"]},
   { name: "Complete 2 Dragon events (splashscreen)", types: ["EventsD","Dragon"]},
   { name: "Looking Glass Tower/Two Pearls with no teleport gem", types: ["TeleGem","Fairy"]}
];

bingoList[5] = [
   { name: "Craft a weapon", types: ["Crafting"]},
   { name: "5 fights with an instrument", types: ["Weapons"]},
   { name: "Obtain goblin demihuman", types: ["Pet"]},
   { name: "Obtain tomato man demihuman", types: ["Pet"]},
   { name: "Land with max Aura", types: ["Land"]},
   { name: "Have 5 pets", types: ["Pet"]},
   { name: "Reach level 25", types: ["Level"]},
   { name: "Land with max Undine", types: ["Land"]},
   { name: "15 entries in the cactus diary", types: ["Events","Cactus","EventsF","EventsD","EventsJ"]},
   { name: "Beat a boss with an instrument", types: ["Weapons","Boss"]},
   { name: "Harvest in the orchard 10 times", types: ["Orchard"]},
   { name: "Beat a boss with Elazul", types: ["Boss","Jumi"]},
   { name: "Crush 25 crabs", types: ["Crabs","Pirate"]}
];

bingoList[6] = [
   { name: "Craft an instrument", types: ["Crafting"]},
   { name: "Create a golem", types: ["Crafting"]},
   { name: "Have 20,000 Lucre", types: ["Lucre"]},
   { name: "Land with max Gnome", types: ["Land"]},
   { name: "Land with max Dryad", types: ["Land"]}
];

bingoList[7] = [
   { name: "Complete 2 Jumi events (splashscreen)", types: ["EventsJ","Jumi"]},
   { name: "Complete 3 Dragon events (splashscreen)", types: ["EventsD","Dragon"]},
   { name: "Beat a boss with Daena", types: ["Boss","Fairy"]},
   { name: "Complete 1 Fairy events (splashscreen)", types: ["EventsF","Fairy"]},
   { name: "Beat a boss with only counterstrike", types: ["Boss"]}
];

bingoList[8] = [
   { name: "Learn 10 abilities", types: ["Ability"]},
   { name: "Complete 20 events", types: ["Events","EventsF","EventsD","EventsJ"]},
   { name: "10 fights with an instrument", types: ["Weapons"]},
   { name: "Have 4 pets", types: ["Pet"]},
   { name: "Land with max Jinn", types: ["Land"]}
];

bingoList[9] = [
   { name: "Place 20 artifacts", types: ["Land"]},
   { name: "Fail 1 event", types: ["Special","Fail"]},
   { name: "Harvest in the orchard 15 times", types: ["Orchard"]},
   { name: "Complete 2 Fairy events (splashscreen)", types: ["EventsF","Fairy"]}
];

bingoList[10] = [
   { name: "Reach level 30", types: ["Level"]},
   { name: "Harvest in the orchard 20 times", types: ["Orchard"]},
   { name: "Complete 3 Jumi events (splashscreen)", types: ["EventsJ","Jumi"]}
];

bingoList[11] = [
   { name: "Obtain mad mallard demihuman", types: ["Pet"]},
   { name: "Reach level 10", types: ["Level"]},
   { name: "20 entries in the cactus diary", types: ["Events","Cactus","EventsF","EventsD","EventsJ"]},
   { name: "Complete 4 Dragon events (splashscreen)", types: ["EventsD","Dragon"]},
   { name: "Complete 3 Fairy events (splashscreen)", types: ["EventsF","Fairy"]}
];

bingoList[12] = [
   { name: "Have 50,000 Lucre", types: ["Lucre"]},
   { name: "Learn 10 STs", types: ["ST"]},
   { name: "Beat a boss with Sierra", types: ["Boss","Dragon"]}
];

bingoList[13] = [
   { name: "Complete 4 Fairy events (splashscreen)", types: ["EventsF","Fairy"]},
   { name: "Beat a boss with only counterattack", types: ["Boss"]},
   { name: "Have a level 15 pet", types: ["Level","Pet"]}
];

bingoList[14] = [
   { name: "Obtain sahagin demihuman", types: ["Pet"]},
   { name: "Obtain succubus demihuman", types: ["Pet"]},
   { name: "Obtain narcissos demihuman", types: ["Pet"]},
   { name: "Beat a boss with Pearl", types: ["Boss","Jumi"]},
   { name: "Complete 4 Jumi events (splashscreen)", types: ["EventsJ","Jumi"]}
];

bingoList[15] = [
   { name: "Complete 25 events", types: ["Events","EventsF","EventsD","EventsJ"]},
   { name: "Fail 3 events", types: ["Special","Fail"]},
   { name: "Have a level 20 pet", types: ["Level","Pet"]}
];

bingoList[16] = [
   { name: "Learn 15 abilities", types: ["Ability"]},
   { name: "Reach level 35", types: ["Level"]},
   { name: "Obtain 2 demihumans", types: ["Pet"]},
   { name: "Beat a boss with Escad", types: ["Boss","Fairy"]},
   { name: "Complete All Dragon events", types: ["EventsD","Dragon"]},
   { name: "Complete Seeing Double", types: ["Special","Events","Shade"]}
];

bingoList[17] = [
   { name: "Have 75,000 Lucre", types: ["Lucre"]},
   { name: "Complete All Fairy events", types: ["EventsF","Fairy"]},
   { name: "Kill 2 NPCs", types: ["Special","Kill"]}
];

bingoList[18] = [
   { name: "25 entries in the cactus diary", types: ["Events","Cactus","EventsF","EventsD","EventsJ"]},
   { name: "Complete All Jumi events", types: ["EventsJ","Jumi"]},
   { name: "Complete The Seven Wisdoms", types: ["Special","Events"]},
   { name: "Kill all bunnies", types: ["Special","Boss"]}
];

bingoList[19] = [
   { name: "Complete 30 events", types: ["Events","EventsF","EventsD","EventsJ"]},
   { name: "Legend of Mana", types: ["Events"]},
   { name: "Complete All Gilbert events", types: ["Special","Events","Gilbert"]}
];

bingoList[20] = [
   { name: "Reach level 40", types: ["Level"]},
   { name: "Have 100,000 Lucre", types: ["Lucre"]},
   { name: "Beat a boss with Blackpearl", types: ["Boss","Jumi"]},
   { name: "Complete All Niccolo events", types: ["Special","Events","Niccolo"]},
   { name: "Legend of Chumpy", types: ["Special","Jumi"]}
];

bingoList[21] = [
   { name: "Complete 35 events", types: ["Events","EventsF","EventsD","EventsJ"]},
   { name: "End with 0 Lucre", types: ["Lucre"]},
   { name: "30 entries in the cactus diary", types: ["Events","Cactus","EventsF","EventsD","EventsJ"]}
];

bingoList[22] = [
   { name: "Complete All pirate events", types: ["Special","Events","Pirate"]},
   { name: "Learn All STs for one weapon", types: ["ST"]},
   { name: "Fail 5 events", types: ["Special","Fail"]}
];

bingoList[23] = [
   { name: "Learn All STs for one weapon", types: ["ST"]},
   { name: "Fail 5 events", types: ["Special","Fail"]},
   { name: "Kill 3 NPCs", types: ["Special","Kill"]}
];

bingoList[24] = [
   { name: "Complete 40 events", types: ["Events","EventsF","EventsD","EventsJ"]},
   { name: "Get all encyclopedias", types: ["Encyclopedia"]},
   { name: "Complete All Diddle events", types: ["Special","Events","Diddle"]},
   { name: "Complete The Wimpy Thugling", types: ["Special","Events"]}
];

bingoList[25] = [
   { name: "Kill Peewee", types: ["Special"]},
   { name: "Kill all centaurs", types: ["Special","Boss","Dragon"]},
   { name: "Collect 2 AltenaAlloy", types: ["Special"]},
   { name: "Collect All 4 Mirror Pieces", types: ["Special"]}
];
