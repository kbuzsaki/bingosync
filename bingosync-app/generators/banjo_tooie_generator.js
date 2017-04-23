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

bingoList[1] = [
    {name: "All Honeycombs in IoH", types: ["Honeycombs", "IoH"]},
    {name: "6-Health BK", types: ["Honeycombs", "IoH"]},
    {name: "Bovina Jiggy", types: ["MT", "Jiggies"]},
    {name: "Purchase Blubberâ€™s Last Possession", types: ["JRL"]}
];

bingoList[2] = [
    {name: "All Warppads in GGM", types: ["GGM"]},
    {name: "All Notes in GGM", types: ["Notes", "Trebleclef", "GGM"]},
    {name: "Free Gobi", types: ["WW"]},
    {name: "All Warppads in CCL", types: ["CCL"]},
    {name: "All Honeycombs in GGM", types: ["Honeycombs", "GGM"]},
    {name: "Get Double Air", types: ["Moves", "IoH"]},
    {name: "Dilberta Jiggy", types: ["Jiggies", "MT", "GGM"]},
    {name: "Pillars Jiggy", types: ["MT", "Jiggies"]}
];

bingoList[3] = [
    {name: "Stub Biggafoots Toe", types: ["HFP"]},
    {name: "Oxygenate JRL Water", types: ["JRL"]},
    {name: "All Jinjos in MT", types: ["Jinjos", "MT"]},
    {name: "Relic Jiggy", types: ["Jiggies", "MT"]},
    {name: "4 Cheato Pages", types: ["Cheatos"]},
    {name: "4 Jiggies in MT", types: ["Jiggies", "MT"]},
    {name: "All Cheato Pages in MT", types: ["Cheatos", "MT"]}
];

bingoList[4] = [
    {name: "All Honeycombs in MT", types: ["Honeycombs", "MT"]},
    {name: "All Warppads in WW", types: ["WW"]},
    {name: "4 Trebleclefs", types: ["Trebleclef"]},
    {name: "30 Doubloons", types: ["JRL"]},
    {name: "Smugglers Cove Jiggy", types: ["Jiggies", "JRL"]},
    {name: "7-Health BK", types: ["Honeycombs", "IoH"]}
];

bingoList[5] = [
    {name: "All Notes in JRL", types: ["Notes", "JRL", "Trebleclef"]},
    {name: "All Warppads in JRL", types: ["JRL"]},
    {name: "All Honeycombs in WW", types: ["Honeycombs", "WW"]},
    {name: "All Notes in WW", types: ["Notes", "Trebleclef", "WW"]},
    {name: "All Warppads in MT", types: ["MT"]},
    {name: "All Honeycombs in HFP", types: ["Honeycombs", "HFP", "JRL"]},
    {name: "Learn Breegull Bash", types: ["Moves", "SoS", "IoH"]},
    {name: "5 Jiggies in MT", types: ["Jiggies", "MT"]}
];

bingoList[6] = [
    {name: "4 Jiggies in GGM", types: ["Jiggies", "GGM"]},
    {name: "All Honeycombs in JRL", types: ["Honeycombs", "JRL"]},
    {name: "All Cheato Pages in TDL", types: ["Cheatos", "TDL"]},
    {name: "Mingy Jongo Jiggy", types: ["Bosses", "CCL", "Jiggies"]},
    {name: "All Honeycombs in CCL", types: ["Honeycombs", "CCL"]},
    {name: "Targitzan Jiggy", types: ["Bosses", "Jiggies", "MT"]},
    {name: "6 Jiggies in MT", types: ["Jiggies", "MT"]}
];

bingoList[7] = [
    {name: "7 Glowbos", types: ["Glowbo"]},
    {name: "Mayan Kickball Jiggy", types: ["Jiggies", "MT"]},
    {name: "Chompasaurus Jiggy", types: ["Jiggies", "TDL"]},
    {name: "All Warppads in HFP", types: ["HFP"]},
    {name: "Volcano Jiggy", types: ["Jiggies", "HFP"]},
    {name: "All Notes in HFP", types: ["Notes", "Trebleclef", "HFP"]},
    {name: "5 Trebleclefs", types: ["Trebleclef"]},
    {name: "Ice Wall Jiggy", types: ["Jiggies", "HFP"]},
    {name: "All Honeycombs in TDL", types: ["Honeycombs", "TDL"]}
];

bingoList[8] = [
    {name: "Terry Jiggy", types: ["Bosses", "TDL", "Jiggies"]},
    {name: "All Notes in IoH", types: ["Notes", "Trebleclef", "IoH"]},
    {name: "All Notes in TDL", types: ["Notes", "Trebleclef", "TDL"]},
    {name: "Roar Cage Jiggy as T-Rex", types: ["Jiggies", "TDL"]},
    {name: "Merry Maggie Jiggy", types: ["Jiggies", "JRL"]},
    {name: "Mr. Patch Jiggy", types: ["Bosses", "Jiggies", "WW"]},
    {name: "Eyeball Plant Jiggy", types: ["Jiggies", "CCL"]},
    {name: "Mountain CP as T-Rex", types: ["Cheatos", "TDL"]},
    {name: "Rocknuts Jiggy", types: ["Jiggies", "TDL"]},
    {name: "All Cheato Pages in HFP", types: ["Cheatos", "HFP"]},
    {name: "6 Cheato Pages", types: ["Cheatos"]}
];

bingoList[9] = [
    {name: "All Cheato Pages in JRL", types: ["Cheatos", "JRL"]},
    {name: "All Jinjos in WW", types: ["Jinjos", "WW"]},
    {name: "Ice Train Jiggy", types: ["Jiggies", "HFP"]},
    {name: "All Jinjos in JRL", types: ["Jinjos", "JRL"]},
    {name: "Weldar Jiggy", types: ["GI", "Jiggies"]},
    {name: "Zubba's Minigame Jiggy", types: ["Jiggies", "CCL"]},
    {name: "Oogle Boogle Jiggy", types: ["Jiggies", "TDL"]},
    {name: "All Warppads in TDL", types: ["TDL"]},
    {name: "4 Train Switches", types: ["Train"]}
];

bingoList[10] = [
    {name: "Trash Can Jiggy", types: ["Jiggies", "CCL"]},
    {name: "4 Jiggies in CCL", types: ["Jiggies", "CCL"]},
    {name: "Jiggy & CP in Pot O' Gold", types: ["Jiggies", "Cheatos", "CCL"]},
    {name: "5 Jiggies in GGM", types: ["Jiggies", "GGM"]},
    {name: "Both Crazy Castle Jiggies", types: ["Jiggies", "WW"]},
    {name: "Kill George and Mildred", types: ["CCL", "HFP"]},
    {name: "Chris P. Bacon Jiggy", types: ["Jiggies", "JRL"]},
    {name: "Dippy Jiggy", types: ["Jiggies", "TDL", "CCL"]},
    {name: "All Jinjos in TDL", types: ["Jinjos", "TDL"]},
    {name: "7 Jiggies in MT", types: ["Jiggies", "MT"]}
];

bingoList[11] = [
    {name: "All Jinjos in CCL", types: ["Jinjos", "CCL"]},
    {name: "9 Glowbos", types: ["Glowbo"]},
    {name: "All Cheato Pages in GGM", types: ["Cheatos", "GGM"]},
    {name: "6 Trebleclefs", types: ["Trebleclef"]},
    {name: "Open all Elevator Doors", types: ["Doors", "GI"]},
    {name: "4 Jiggies in HFP", types: ["Jiggies", "HFP"]},
    {name: "Sub Game Jiggy", types: ["Jiggies", "JRL"]},
    {name: "Woo Fak Fak Jiggy", types: ["Bosses", "Jiggies", "JRL"]},
    {name: "Colosseum Kickball Jiggy", types: ["Jiggies", "HFP", "MT"]},
    {name: "Old King Coal Jiggy", types: ["Bosses", "Train", "jiggies", "GGM"]},
    {name: "8 Jiggies in MT", types: ["Jiggies", "MT"]}
];

bingoList[12] = [
    {name: "All Honeycombs in GI", types: ["Honeycombs", "GI"]},
    {name: "Cheese Wedge Jiggy", types: ["Jiggies", "CCL"]},
    {name: "Toxic Waste Jinjo from JRL", types: ["Jinjos", "JRL", "Route"]},
    {name: "All Jinjos in HFP", types: ["Jinjos", "HFP"]},
    {name: "Canary Mary Jiggy & CP in GGM", types: ["Jiggies", "Cheatos", "GGM"]},
    {name: "All Notes in CCL", types: ["Notes", "Trebleclef", "CCL"]},
    {name: "4 Jiggies in TDL", types: ["Jiggies", "TDL"]},
    {name: "Aliens Jiggy in JRL", types: ["Jiggies", "JRL"]},
    {name: "All Jinjos in GGM", types: ["Jinjos", "GGM"]},
    {name: "8-Health BK", types: ["Honeycombs", "IoH"]}
];

bingoList[13] = [
    {name: "Grow Both Beanstalks", types: ["CCL"]},
    {name: "Call Train to HFP Fire Side", types: ["Train", "HFP", "GGM"]},
    {name: "8 Cheato Pages", types: ["Cheatos"]},
    {name: "4 Jiggies in WW", types: ["Jiggies", "WW"]},
    {name: "5 Jiggies in CCL", types: ["Jiggies", "CCL"]},
    {name: "All Cheato Pages in GI", types: ["Cheatos", "GI", "Bosses"]},
    {name: "Crushing Shed Jiggy", types: ["Jiggies", "GGM"]}
];

bingoList[14] = [
    {name: "Dragon Brothers Jiggy", types: ["Bosses", "Jiggies", "HFP"]},
    {name: "All Warppads in GI", types: ["Warppads", "GI"]},
    {name: "Unscrew All 3 Platforms in GI", types: ["Doors", "GI"]},
    {name: "5 Jiggies in TDL", types: ["Jiggies", "TDL"]},
    {name: "Learn Claw Clamber Boots", types: ["Moves", "GI"]},
    {name: "5 Jiggies in HFP", types: ["Jiggies", "HFP"]},
    {name: "Defeat 3 Bosses (Except Klungos/Hag1)", types: ["Bosses"]},
    {name: "6 Jiggies in GGM", types: ["Jiggies", "GGM"]},
    {name: "All Jinjos in IoH & SM", types: ["Jinjos", "IoH", "JRL"]}
];

bingoList[15] = [
    {name: "11 Glowbos", types: ["Glowbo"]},
    {name: "7 Trebleclefs", types: ["Trebleclef"]},
    {name: "All Notes in GI", types: ["Notes", "Trebleclef", "GI"]},
    {name: "Tiptup Jiggy", types: ["Jiggies", "JRL", "TDL"]},
    {name: "Targitzan Jiggy w/o FPS", types: ["Jiggies", "MT"]},
    {name: "5 Jiggies in GI", types: ["Jiggies", "GI"]}
];

bingoList[16] = [
    {name: "Hatch all Eggs in CCL", types: ["CCL", "TDL"]},
    {name: "All Jinjos in GI", types: ["Jinjos", "GI"]},
    {name: "Open Superstash Deluxe Safe", types: ["Jiggies", "CCL"]},
    {name: "Learn Leg Spring", types: ["Moves", "GI"]},
    {name: "Call Train to GI", types: ["GI", "Train"]},
    {name: "Call Train to TDL", types: ["Train", "TDL"]},
    {name: "Star Spinner Jiggy", types: ["Jiggies", "WW"]}
];

bingoList[17] = [
    {name: "Mayan and Colosseum Kickball Jiggies", types: ["Jiggies", "HFP", "MT"]},
    {name: "10 Cheato Pages", types: ["Cheatos"]},
    {name: "4 Jiggies in JRL", types: ["Jiggies", "JRL"]},
    {name: "6 Jiggies in TDL", types: ["Jiggies", "TDL"]},
    {name: "Clinkers Cavern Jiggy", types: ["Jiggies", "GI"]},
    {name: "Quality Control Jiggy", types: ["Jiggies", "GI"]},
    {name: "7 Jiggies in GGM", types: ["Jiggies", "GGM"]}
];

bingoList[18] = [
    {name: "6 Jiggies in CCL", types: ["Jiggies", "CCL"]},
    {name: "Learn Snooze Pack", types: ["Moves", "GI"]},
    {name: "Woo Fak Fak Jiggy as BK", types: ["Bosses", "Jiggies", "JRL"]},
    {name: "Oil Drill Jiggy", types: ["Jiggies", "HFP"]},
    {name: "Boggyâ€™s Kids Jiggy", types: ["Jiggies", "WW", "TDL"]},
    {name: "All Train Switches", types: ["Train"]},
    {name: "Hatch Heggyâ€™s 3 Eggs", types: ["SoS"]}
];

bingoList[19] = [
    {name: "Learn Shack Pack", types: ["Moves", "HFP"]},
    {name: "Twinkly Packaging Jiggy", types: ["Jiggies", "GI"]},
    {name: "5 Jiggies in WW", types: ["Jiggies", "WW"]},
    {name: "Defeat Klungo 3", types: ["Bosses", "IoH", "CK"]},
    {name: "All Cheato Pages in WW", types: ["Cheatos", "WW"]},
    {name: "13 Glowbos", types: ["Glowbo"]}
];

bingoList[20] = [
    {name: "7 Jiggies in CCL", types: ["Jiggies", "CCL"]},
    {name: "6 Jiggies in GI", types: ["Jiggies", "GI"]},
    {name: "Dragon Kazooie", types: ["SoS", "IoH", "GGM", "MT"]},
    {name: "Defeat 4 Bosses (Except Klungos/Hag1)", types: ["Bosses"]},
    {name: "Learn Glide", types: ["Moves", "HFP"]},
    {name: "Defeat Hag 1", types: ["CK"]},
    {name: "Worker Jiggy in GI", types: ["Jiggies", "GI"]},
    {name: "8 Jiggies in GGM", types: ["Jiggies", "GGM"]}
];

bingoList[21] = [
    {name: "12 Cheato Pages", types: ["Cheatos"]},
    {name: "8 Trebleclefs", types: ["Trebleclef"]},
    {name: "Jelly Castle Jiggy as Banjo", types: ["Jiggies", "CCL", "HFP"]},
    {name: "Canary Mary Jiggy & CP in CCL", types: ["GGM", "CCL", "Jiggies", "Cheatos"]},
    {name: "6 Jiggies in HFP", types: ["Jiggies", "HFP"]},
    {name: "Dodgem Dome Jiggy", types: ["Jiggies", "WW"]},
    {name: "Sabreman Jiggy", types: ["Jiggies", "HFP", "WW", "TDL"]}
];

bingoList[22] = [
    {name: "Ride Train to Icy Side", types: ["HFP", "Train"]},
    {name: "Terryâ€™s Kids Jiggy", types: ["Jiggies", "TDL", "Bosses"]},
    {name: "6 Jiggies in WW", types: ["Jiggies", "WW"]},
    {name: "8 Jiggies in CCL", types: ["Jiggies", "CCL"]},
    {name: "5 Jiggies in JRL", types: ["Jiggies", "JRL"]},
    {name: "Heal The Sick Styracosaurus", types: ["TDL", "Train", "Bosses"]}
];

bingoList[23] = [
    {name: "7 Jiggies in GI", types: ["Jiggies", "GI"]},
    {name: "All Cheato Pages in CCL", types: ["Cheatos", "CCL"]},
    {name: "9-Health BK", types: ["Honeycombs", "IoH"]},
    {name: "Hatch 7 Eggs", types: ["TDL", "JRL", "Bosses", "SoS", "CCL"]}
];

bingoList[24] = [
    {name: "6 Jiggies in JRL", types: ["Jiggies", "JRL"]},
    {name: "Open all 4 Battery Doors in GI", types: ["Doors", "GI", "WW"]},
    {name: "7 Jiggies in TDL", types: ["Jiggies", "TDL"]},
    {name: "7 Jiggies in WW", types: ["Jiggies", "WW"]}
];

bingoList[25] = [
    {name: "Learn Sack Pack", types: ["Moves", "HFP", "CCL"]},
    {name: "Alienâ€™s Kids Jiggy", types: ["HFP", "TDL"]},
    {name: "7 Jiggies in JRL", types: ["Jiggies", "JRL"]},
    {name: "7 Jiggies in HFP", types: ["Jiggies", "HFP"]},
    {name: "Defeat 5 Bosses (Except Klungos/Hag1)", types: ["Bosses"]},
    {name: "9 Trebleclefs", types: ["Trebleclef"]}
];
