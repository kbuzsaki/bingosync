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
{ name: "Captain Toad (Cascade)", types: ["Cascade", "Captain_Toad"] },
{ name: "Purchase 2 Hats", types: ["Hats"] },
{ name: "Atop the Highest Tower (Sand)", types: ["Sand_Story", "Story"] },
{ name: "Call Jaxi from 2 Stands", types: ["Jaxi"] },
{ name: "Plant 2 Seeds (Sand)", types: ["Sand", "Seeds"] }
];
bingoList[2] = [
{ name: "3 Checkpoints (Lake)", types: ["Late_Game", "Lake"] },
{ name: "20 Regional Coins (Cascade)", types: ["Cascade_Regional"] },
{ name: "2 Moons from sub-areas (Lake)", types: ["Late_Game", "Lake", "Sub_Areas"] },
{ name: "1 Moon from Keys", types: ["Keys"] },
{ name: "Secret Path to Tostarena!", types: ["Warp_Painting"] }
];
bingoList[3] = [
{ name: "Among the Five Cactuses (Sand)", types: ["Sand"] },
{ name: "Ice Cave Treasure-Moon (Sand)", types: ["Sand"] },
{ name: "Secret Path to Mount Volbono!", types: ["Warp_Painting"] },
{ name: "2 Timer Challenges (Cascade)", types: ["Timer"] },
{ name: "Sand Kingdom: Sphynx Quiz Complete!", types: ["Sphynx", "Sand"] }
];
bingoList[4] = [
{ name: "4 Moons from Nuts", types: ["Nuts"] },
{ name: "5 Checkpoints (Sand)", types: ["Sand"] },
{ name: "25 Regional Coins (Cascade)", types: ["Cascade_Regional"] },
{ name: "Captain Toad (Cap)", types: ["Cap", "Captain_Toad"] },
{ name: "Plant 1 Seed (Lake)", types: ["Late_Game", "Lake", "Seeds"] }
];
bingoList[5] = [
{ name: "1 Moon from Slots", types: ["Slots"] },
{ name: "Look at 1 Hint Art", types: ["Hint_View"] },
{ name: "2 Moons from sub-areas (Sand)", types: ["Sand", "Sub_Areas"] },
{ name: "6 Checkpoints (Sand)", types: ["Sand"] },
{ name: "1 Sticker", types: ["Stickers"] },
];
bingoList[6] = [
{ name: "20 Moons (Sand)", types: ["Sand_Moons"] },
{ name: "3 Checkpoints (Wooded)", types: ["Late_Game", "Wooded"] },
{ name: "Purchase 2 Souvenirs", types: ["Souvenirs"] },
{ name: "30 Regional Coins (Cascade)", types: ["Cascade_Regional"] },
{ name: "Puzzle Room Solved! (Lake)", types: ["Late_Game", "Lake"] }
];
bingoList[7] = [
{ name: "Purchase 3 Hats", types: ["Hats"] },
{ name: "2 Checkpoints (Cap)", types: ["Cap"] },
{ name: "Call Jaxi from 3 Stands", types: ["Jaxi"] },
{ name: "8 Moons (Cascade)", types: ["Cascade_Moons"] },
{ name: "Purchase 1 Full Costume Set", types: ["Outfits"] },
];
bingoList[8] = [
{ name: "12 Moons (Wooded)", types: ["Late_Game", "Wooded_Moons"] },
{ name: "Captain Toad (Lake)", types: ["Late_Game", "Lake", "Captain_Toad"] },
{ name: "Moon Shards in the Sand (Sand)", types: ["Sand_Story", "Story"] },
{ name: "10 Moons (Lake)", types: ["Late_Game", "Lake_Moons"] },
{ name: "30 Regional Coins (Sand)", types: ["Sand_Regional"] }
];
bingoList[9] = [
{ name: "10 Regional Coins (Lake)", types: ["Late_Game", "Lake_Regional"] },
{ name: "20 Regional Coins (Wooded)", types: ["Late_Game", "Wooded_Regional"] },
{ name: "2 Moons (Cap)", types: ["Cap_Moons"] },
{ name: "2 Moons from Music Notes", types: ["Music_Notes"] },
{ name: "35 Regional Coins (Cascade)", types: ["Cascade_Regional"] }
];
bingoList[10] = [
{ name: "10 Regional Coins (Cap)", types: ["Cap_Regional"] },
{ name: "Koopa Trace-Walking (Sand)", types: ["Sand"] },
{ name: "2 Moons (Deep Woods)", types: ["Deep_Woods"] },
{ name: "35 Regional Coins (Sand)", types: ["Sand_Regional"] },
{ name: "2 Unique Life-Up Hearts (excl. Shops)", types: ["LifeUp"] }
];
bingoList[11] = [
{ name: "3 Treasure Chest Moons", types: ["Treasure_Chest"] },
{ name: "22 Moons (Sand)", types: ["Sand_Moons"] },
{ name: "2 Moons from sub-areas (Cascade)", types: ["Cascade", "Sub_Areas"] },
{ name: "1 Moon from Wooden Crates", types: ["Crates"] },
{ name: "Purchase 2 Full Costume Sets", types: ["Outfits"] },
{ name: "15 Regional Coins (Lake)", types: ["Late_Game", "Lake_Regional"] }
];
bingoList[12] = [
{ name: "15 Regional Coins (Cap)", types: ["Cap_Regional"] },
{ name: "2 Moons from sub-areas (Cap)", types: ["Cap", "Sub_Areas"] },
{ name: "10 Moons (Cascade)", types: ["Cascade_Moons"] },
{ name: "2 Stickers", types: ["Stickers"] },
{ name: "1 Moon from Hint Art", types: ["Hint_Moons"] }
];
bingoList[13] = [
{ name: "5 Moons from Nuts", types: ["Nuts"] },
{ name: "12 Moons (Lake)", types: ["Late_Game", "Lake_Moons"] },
{ name: "14 Moons (Wooded)", types: ["Late_Game", "Wooded_Moons"] },
{ name: "20 Regional Coins (Lake)", types: ["Late_Game", "Lake_Regional"] },
{ name: "4 Moons from sub-areas (Sand)", types: ["Sand", "Sub_Areas"] },
];
bingoList[14] = [
{ name: "3 Moons from 8-bit Sections", types: ["8bit"] },
{ name: "20 Regional Coins (Cap)", types: ["Cap_Regional"] },
{ name: "Capture both the Cactus and the Tree", types: ["Capture_Both"] },
{ name: "3 Moons (Deep Woods)", types: ["Deep_Woods"] },
{ name: "12 Unique Captures", types: ["Unique_Captures"] },
];
bingoList[15] = [
{ name: "3 Stickers", types: ["Stickers"] },
{ name: "Showdown on the Inverted Pyramid (Sand)", types: ["Sand_Story", "Story"] },
{ name: "Purchase 3 Full Costume Sets", types: ["Outfits"] },
{ name: "25 Regional Coins (Lake)", types: ["Late_Game", "Lake_Regional"] },
{ name: "40 Regional Coins (Sand)", types: ["Sand_Regional"] }
];
bingoList[16] = [
{ name: "Outfit-Door (Wooded)", types: ["Locked_Door"] },
{ name: "2 Moons from sub-areas (Wooded)", types: ["Late_Game", "Wooded", "Sub_Areas"] },
{ name: "4 Moons (Cap)", types: ["Cap_Moons"] },
{ name: "25 Regional Coins (Wooded)", types: ["Late_Game", "Wooded_Regional"] },
{ name: "4 Unique Life-Up Hearts (excl. Shops)", types: ["LifeUp"] }
];
bingoList[17] = [
{ name: "24 Moons (Sand)", types: ["Sand_Moons"] },
{ name: "6 Moons from sub-areas (Sand)", types: ["Sand", "Sub_Areas"] },
{ name: "Call Jaxi from 4 Stands", types: ["Jaxi"] },
{ name: "Outfit-Door (Sand)", types: ["Locked_Door"] },
{ name: "20 Regional Coins (Lost)", types: ["Lost_Regional"] }
];
bingoList[18] = [
{ name: "40 Moons (Total)", types: ["Total_Moons"] },
{ name: "Purchase 4 Souvenirs", types: ["Souvenirs"] },
{ name: "6 Moons from Nuts", types: ["Nuts"] },
{ name: "14 Unique Captures", types: ["Unique_Captures"] },
{ name: "Herding Sheep in the Dunes (Sand)", types: ["Sand", "Sheep"] }
];
bingoList[19] = [
{ name: "30 Regional Coins (Wooded)", types: ["Late_Game", "Wooded_Regional"] },
{ name: "4 Moons from sub-areas (Cascade)", types: ["Cascade", "Sub_Areas"] },
{ name: "16 Moons (Wooded)", types: ["Late_Game", "Wooded_Moons"] },
{ name: "100 Total Regional Coins", types: ["Regional_Coins"] },
{ name: "4 Moons (Deep Woods)", types: ["Deep_Woods"] }
];
bingoList[20] = [
{ name: "4 Checkpoints (Wooded)", types: ["Late_Game", "Wooded"] },
{ name: "16 Unique Captures", types: ["Unique_Captures"] },
{ name: "Purchase 4 Full Costume Sets", types: ["Outfits"] },
{ name: "12 Moons (Cascade)", types: ["Cascade_Moons"] },
{ name: "1 Moon from Goombas", types: ["Goomba"] }
];
bingoList[21] = [
{ name: "3 Moons from Music Notes", types: ["Music_Notes"] },
{ name: "125 Total Regional Coins", types: ["Regional_Coins"] },
{ name: "4 Moons from sub-areas (Wooded)", types: ["Late_Game", "Wooded", "Sub_Areas"] },
{ name: "4 Moons from sub-areas (Cap)", types: ["Cap", "Sub_Areas"] },
{ name: "35 Regional Coins (Wooded)", types: ["Late_Game", "Wooded_Regional"] },
];
bingoList[22] = [
{ name: "150 Total Regional Coins", types: ["Regional_Coins"] },
{ name: "5 Treasure Chest Moons", types: ["Treasure_Chest"] },
{ name: "26 Moons (Sand)", types: ["Sand_Moons"] },
{ name: "7 Moons from Nuts", types: ["Nuts"] },
{ name: "1 Ground-Pound Moon (Wooded)", types: ["Late_Game", "Wooded"] }
];
bingoList[23] = [
{ name: "6 Moons (Cap)", types: ["Cap_Moons"] },
{ name: "55 Moons (Total)", types: ["Total_Moons"] },
{ name: "18 Unique Captures", types: ["Unique_Captures"] },
{ name: "6 Unique Life-Up Hearts (excl. Shops)", types: ["LifeUp"] },
{ name: "Capture 2 Fire Bros. (Wooded)", types: ["Late_Game", "Capture_Both"] }
];
bingoList[24] = [
{ name: "14 Moons (Lake)", types: ["Late_Game", "Lake_Moons"] },
{ name: "Flower Thieves of Sky Garden", types: ["Late_Game", "Wooded_Story", "Story"] },
{ name: "20 Unique Captures", types: ["Unique_Captures"] },
{ name: "14 Moons (Cascade)", types: ["Cascade_Moons"] },
{ name: "7 Checkpoints (Sand)", types: ["Sand"] }
];
bingoList[25] = [
{ name: "4 Moons from Music Notes", types: ["Music_Notes"] },
{ name: "4 Moons from 8-bit Sections", types: ["8bit"] },
{ name: "60 Moons (Total)", types: ["Total_Moons"] },
{ name: "7 Treasure Chest Moons", types: ["Treasure_Chest"] },
{ name: "World Peace Restored! (Sand)", types: ["Late_Game", "World_Peace"] }
];
