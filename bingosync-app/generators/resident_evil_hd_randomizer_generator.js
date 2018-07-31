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
    {name: "RBG Herb Mix in Inventory", types: ["herbs", "inventory"]},
    {name: "Get Broken Shotgun", types: ["obtain", "shotgun"]},
    {name: "6 Ink Ribbons in Item Box", types: ["ink", "box"]},
    {name: "Save in Main Hall", types: ["save", "hall"]},
    {name: "Kill Dog in Main Hall", types: ["kill", "dogs", "mansion"]},
    {name: "Green Herb in Item Box", types: ["herbs", "box"]}
];
bingoList[2] = [
    {name: "7 Handgun Bullets in Handgun", types: ["handgun"]},
    {name: "Light Candle", types: ["objective"]},
    {name: "Save in East Wing Storeroom", types: ["save", "east"]},
    {name: "Save in West Wing Medical Storage", types: ["save", "west"]},
    {name: "Use Broken Shotgun", types: ["shotgun", "objective"]},
    {name: "Kill 3 Dogs with Knife", types: ["kill", "dogs", "knife"]}
];
bingoList[3] = [
    {name: "Get Assault Shotgun", types: ["obtain", "assault"]},
    {name: "Armor Key in Inventory", types: ["key", "inventory"]},
    {name: "Use Sun Crest", types: ["objective", "crest"]},
    {name: "Itchy Tasty Room Diary", types: ["file"]},
    {name: "Kill 3 Dogs with Handgun", types: ["kill", "dog", "handgun"]}
];
bingoList[4] = [
    {name: "Grab Slide Filter", types: ["obtain"]},
    {name: "Get 2 battery packs", types: ["obtain"]},
    {name: "Kill Dog Whistle Dogs with Handgun", types: ["kill", "dog", "handgun"]},
    {name: "Save in Lisa's Cabin", types: ["save", "cabin"]},
    {name: "Blue Herb in Item Box", types: ["herb", "box"]}
];
bingoList[5] = [
    {name: "30 Shotgun Shells in Item Box", types: ["shells", "box"]},
    {name: "2 Red Herb in Item Box", types: ["herbs", "box"]},
    {name: "Guardhouse 001 in Inventory", types: ["guardhouse", "inventory"]},
    {name: "Get Wooden Mount", types: ["obtain", "map"]},
    {name: "Weathervane Puzzle", types: ["puzzle", "cabin"]}
];
bingoList[6] = [
    {name: "Kill Spider with Knife", types: ["kill", "spider", "knife"]},
    {name: "Use Moon Crest", types: ["objective", "crest"]},
    {name: "Use Star Crest", types: ["objective", "crest"]},
    {name: "Use Wind Crest", types: ["objective", "crest"]},
    {name: "Do Bee Puzzle", types: ["puzzle"]}
];
bingoList[7] = [
    {name: "Get 1 Bottle", types: ["obtain", "bottle"]},
    {name: "Get Shotgun:", types: ["obtain", "shotgun"]},
    {name: "Assault Shotgun in Inventory", types: ["assault", "inventory"]},
    {name: "3 Green Herb in Item Box", types: ["herbs", "box"]},
    {name: "Wooden Mount Puzzle", types: ["puzzle", "maps", "objective"]}
];
bingoList[8] = [
    {name: "Red Herb in Item Box", types: ["herb", "box"]},
    {name: "Grab Arrow", types: ["obtain", "graveyard"]},
    {name: "Grab All Doom Masks", types: ["obtain", "graveyard"]},
    {name: "Do Chemical Room Puzzle", types: ["puzzle", "mansion"]},
    {name: "4 Daggers in Inventory", types: ["inventory"]}
];
bingoList[9] = [
    {name: "Save Order: Lisa's Cabin / 1F West Wing Medical Storage / Lab B3", types: ["save", "cabin", "lab", "west"]},
    {name: "Magnum in Inventory", types: ["magnum", "inventory"]},
    {name: "Cover the Tentacle with the Box in Guardhouse", types: ["objective", "guardhouse"]},
    {name: "Get 2 Bottles", types: ["obtain", "bottle"]},
    {name: "Emblem Key in inventory", types: ["key", "inventory"]}
];
bingoList[10] = [
    {name: "Guardhouse 001 in Inventory", types: ["key", "inventory", "guardhouse"]},
    {name: "Get Kenneth's Film", types: ["file"]},
    {name: "Use All Gems", types: ["objective", "gems"]},
    {name: "Make VJOLT", types: ["objective", "guardhouse"]},
    {name: "Save Order: East Wing Storeroom / Lisa's Cabin / Courtyard B1", types: ["save", "east", "cabin", "courtyard"]}
];
bingoList[11] = [
    {name: "Control Room Puzzle", types: ["puzzle", "guardhouse"]},
    {name: "Red Book Puzzle", types: ["puzzle", "guardhouse"]},
    {name: "All Mansion Key's in Item Box", types: ["key", "mansion", "box"]},
    {name: "All Guardhouse Keys in Item Box", types: ["key", "guardhouse", "box"]},
    {name: "Save Order: Guardhouse / Courtyard B1 / Main Hall", types: ["save", "guardhouse", "courtyard", "mansion"]}
];
bingoList[12] = [
    {name: "Get Moon Crest", types: ["obtain", "crest"]},
    {name: "Get Sun Crest", types: ["obtain", "crest"]},
    {name: "Get Star Crest", types: ["obtain", "crest"]},
    {name: "Get Wind Crest", types: ["obtain", "crest"]},
    {name: "Get Book of Curse", types: ["obtain", "graveyard"]}
];
bingoList[13] = [
    {name: "Have X-Ray of Gail in Item Box", types: ["xray", "box"]},
    {name: "2 FAS in Item Box", types: ["fas", "box"]},
    {name: "3 RGB Mix in Inventory", types: ["herbs", "inventory"]},
    {name: "12 Magnum Bullets in Inventory", types: ["magnum", "inventory"]},
    {name: "Get Both Cranks", types: ["crank"]}
];
bingoList[14] = [
    {name: "Kill 4 Dogs with Shotgun", types: ["kill", "dog", "shotgun"]},
    {name: "Square Crank in Inventory", types: ["crank"]},
    {name: "Get Helmet Key", types: ["obtain", "key", "mansion"]},
    {name: "Sword Key in Inventory", types: ["key", "mansion", "inventory"]},
    {name: "Get Shield Key", types: ["obtain", "key", "mansion"]}
];
bingoList[15] = [
    {name: "Kill All Dogs with Handgun", types: ["kill", "dog", "handgun"]},
    {name: "Guardhouse 003 in Inventory", types: ["key", "inventory", "guardhouse"]},
    {name: "Get Control Room Key", types: ["obtain", "key", "guardhouse"]},
    {name: "Get Gallery Key", types: ["obtain", "key", "guardhouse"]},
    {name: "Cylinder Puzzle", types: ["puzzle", "courtyard"]}
];
bingoList[16] = [
    {name: "Kill 4 Dogs with Knife", types: ["kill", "dogs", "knife"]},
    {name: "X-Ray of Clark in Item Box", types: ["xray", "box"]},
    {name: "Save in East Wing Storeroom/West Wing Medical Storage/Lab B3", types: ["save", "east", "west", "Lab"]},
    {name: "Get Magnum", types: ["obtain", "magnum"]},
    {name: "Get Fuel Capsule", types: ["obtain", "lab"]}
];
bingoList[17] = [
    {name: "Kill Plant 42", types: ["kill", "guardhouse"]},
    {name: "3 Green/Blue Mix in Item Box", types: ["herbs", "box"]},
    {name: "Read Observation Note", types: ["file"]},
    {name: "Get Poisoned", types: ["nothing"]},
    {name: "Grab Battery", types: ["obtain", "courtyard"]}
];
bingoList[18] = [
    {name: "Kill Black Tiger", types: ["kill", "courtyard"]},
    {name: "Get Cylinder", types: ["obtain"]},
    {name: "Kill Elder Crimson with Knife", types: ["kill", "crimson", "knife"]},
    {name: "Get Full Music Sheet", types: ["obtain", "mansion"]},
    {name: "Get Lighter", types: ["obtain", "mansion"]}
];
bingoList[19] = [
    {name: "Kill Hunter with Handgun", types: ["kill", "hunter", "handgun"]},
    {name: "Read Suicide Note", types: ["file"]},
    {name: "Grab Second Survival Knife", types: ["obtain"]},
    {name: "Get Self Defense Gun", types: ["obtain"]},
    {name: "Broken Flamethrower Puzzle", types: ["puzzle", "guardhouse"]}
];
bingoList[20] = [
    {name: "Kill 3 Crimson Heads", types: ["kill", "crimson"]},
    {name: "Protect Barry from Lisa/Rebecca from Hunter", types: ["nothing"]},
    {name: "Find Doom Book 1", types: ["obtain", "book"]},
    {name: "Find Doom Book 2", types: ["obtain", "book"]},
    {name: "Find All Ink Ribbons", types: ["obtain"]}
];
bingoList[21] = [
    {name: "Fight Yawn 1 with Knife", types: ["knife"]},
    {name: "Lab Key in Item Box", types: ["key", "box", "lab"]},
    {name: "Obtain All FAS ", types: ["obtain", "fas"]},
    {name: "Lab key in Inventory", types: ["key", "lab", "inventory"]},
    {name: "Hex Crank in Inventory", types: ["crank", "inventory"]}
];
bingoList[22] = [
    {name: "Kill All Dogs with Knife", types: ["kill", "dogs", "knife"]},
    {name: "All 3 MO Disks", types: ["obtain", "disks", "lab"]},
    {name: "Get 3 Bottles", types: ["obtain", "bottle"]},
    {name: "Pick Up All the Green Herbs", types: ["obtain", "herbs"]},
    {name: "Watch Kenneth Film", types: ["files"]},
    {name: "All FAS in item box", types: ["fas", "box"]}
];
bingoList[23] = [
    {name: "Kill both hunters in east wing stairway with Knife", types: ["kill", "hunter", "knife"]},
    {name: "Pick up all the X-Rays", types: ["obtain", "xrays"]},
    {name: "Kill Lisa", types: ["kill"]},
    {name: "Read Security Protocols", types: ["files"]},
    {name: "Get All Maps ", types: ["nothing"]}
];
bingoList[24] = [
    {name: "Kill All the Zombies in Murder Hall with Knife", types: ["kill", "Zombies", "Knife"]},
    {name: "Do X-Ray Puzzle", types: ["puzzle", "xray"]},
    {name: "Read Researcher's Will", types: ["files"]},
    {name: "Pick Up All the Health Boxes", types: ["obtain"]},
    {name: "Kill Chimera with Knife", types: ["kill", "chimera", "knife"]}
];
bingoList[25] = [
    {name: "All Keys in Item Box", types: ["keys", "box"]},
    {name: "Dont Heal", types: ["nothing"]},
    {name: "Use All 3 MO Disks", types: ["objective", "disks", "lab"]},
    {name: "Power Elevator", types: ["objective", "lab"]},
    {name: "Kill Lab Tyrant", types: ["Kill", "lab"]},
    {name: "Don't Use Any Green Herbs", types: ["nothing"]},
];
