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
{ name: "4 Checkpoints (Cascade)", types: ["Cascade"] },
{ name: "Purchase 7 Hats", types: ["Hats"] },
{ name: "Call Jaxi from 5 Stands", types: ["Jaxi"] },
{ name: "5 Checkpoints (Lake)", types: ["Lake"] },
{ name: "30 Regional Coins (Cascade)", types: ["Cascade_Regional"] },
{ name: "3 Checkpoints (Lost)", types: ["Lost"] },
{ name: "2 Moons from Slots", types: ["Slots"] },
{ name: "1 Moon from Lakitu-Fishing", types: ["Fishing"] },
{ name: "2 Checkpoints (Cap)", types: ["Cap"] }
];
bingoList[2] = [
{ name: "8 Moons from Nuts", types: ["Nuts"] },
{ name: "6 Checkpoints (Metro)", types: ["Metro"] },
{ name: "Captain Toad (Lost)", types: ["Lost"] },
{ name: "7 Checkpoints (Sand)", types: ["Sand"] },
{ name: "35 Regional Coins (Cascade)", types: ["Cascade_Regional"] },
{ name: "16 Moons from sub-areas (Total)", types: ["Sub_Areas"] },
{ name: "Moon Shards in the Sand (Sand)", types: ["Sand_Story"] },
{ name: "16 Non-Ground-Pound Moons (Sand)", types: ["No_Moons", "Sand_Condition"] },
{ name: "Capture both the Cactus and the Tree", types: ["Capture_Both"] }
];
bingoList[3] = [
{ name: "Look at 3 Hint Arts", types: ["Hint_View"] },
{ name: "4 Moons from sub-areas (Sand)", types: ["Sand"] },
{ name: "8 Checkpoints (Sand)", types: ["Sand"] },
{ name: "4 Stickers", types: ["Stickers"] },
{ name: "2 Warp-Painting Moons", types: ["Warp_Painting"] },
{ name: "Purchase 8 Souvenirs", types: ["Souvenirs"] },
{ name: "40 Regional Coins (Cascade)", types: ["Cascade_Regional"] },
{ name: "Koopa Trace-Walking (Sand)", types: ["Sand"] },
{ name: "Wear the Boxer Shorts", types: ["Coins"] }
];
bingoList[4] = [
{ name: "30 Moons (Sand)", types: ["Sand_Moons", "Sand_Condition"] },
{ name: "6 Checkpoints (Wooded)", types: ["Wooded"] },
{ name: "5 Timer Challenges", types: ["Timer"] },
{ name: "Purchase 8 Hats", types: ["Hats"] },
{ name: "Call Jaxi from 6 Stands", types: ["Jaxi"] },
{ name: "34 Moons (Metro)", types: ["Metro_Moons"] },
{ name: "14 Moons (Lost)", types: ["Lost_Moons"] },
{ name: "12 Moons (Cascade)", types: ["Cascade_Moons"] },
{ name: "Purchase 5 Full Costume Sets", types: ["Outfits"] },
{ name: "40 Regional Coins (Sand)", types: ["Sand_Regional"] }
];
bingoList[5] = [
{ name: "5 Captain Toad Moons", types: ["Captain_Toad"] },
{ name: "5 Moons from 8-bit Sections", types: ["8bit"] },
{ name: "30 Moons (Wooded)", types: ["Wooded_Moons", "Wooded_Condition"] },
{ name: "4 Moons from Moon Shards", types: ["Moon_Shards"] },
{ name: "16 Moons (Lake)", types: ["Lake_Moons"] },
{ name: "6 Moons (Cap)", types: ["Cap_Moons"] },
{ name: "5 Moons from Music Notes", types: ["Music_Notes"] },
{ name: "3 Moons from Shiny Rocks", types: ["Shiny_Rocks"] },
{ name: "45 Regional Coins (Cascade)", types: ["Cascade_Regional"] }
];
bingoList[6] = [
{ name: "20 Regional Coins (Lake)", types: ["Lake_Regional"] },
{ name: "40 Regional Coins (Metro)", types: ["Metro_Regional"] },
{ name: "35 Regional Coins (Wooded)", types: ["Wooded_Regional"] },
{ name: "20 Regional Coins (Lost)", types: ["Lost_Regional"] },
{ name: "30 Regional Coins (Cap)", types: ["Cap_Regional"] },
{ name: "5 Moons (Deep Woods)", types: ["Deep_Woods"] },
{ name: "45 Regional Coins (Sand)", types: ["Sand_Regional"] }
];
bingoList[7] = [
{ name: "Purchase 6 Moons", types: ["Shop_Moons"] },
{ name: "7 Treasure Chest Moons", types: ["Treasure_Chest"] },
{ name: "32 Moons (Sand)", types: ["Sand_Moons", "Sand_Condition"] },
{ name: "16 Moons (Lost)", types: ["Lost_Moons"] },
{ name: "8 Moons from sub-areas (Metro)", types: ["Metro"] },
{ name: "4 Moons from sub-areas (Cascade)", types: ["Cascade"] },
{ name: "3 Moons from Wooden Crates", types: ["Crates"] },
{ name: "18 Moons from sub-areas (Total)", types: ["Sub_Areas"] },
{ name: "20 Unique Captures", types: ["Unique_Captures"] },
{ name: "Purchase 6 Full Costume Sets", types: ["Outfits"] },
{ name: "25 Regional Coins (Lake)", types: ["Lake_Regional"] }
];
bingoList[8] = [
{ name: "35 Regional Coins (Cap)", types: ["Cap_Regional"] },
{ name: "4 Moons from sub-areas (Cap)", types: ["Cap"] },
{ name: "14 Moons (Cascade)", types: ["Cascade_Moons"] },
{ name: "5 Moons from Moon Shards", types: ["Moon_Shards"] },
{ name: "6 Timer Challenges", types: ["Timer"] },
{ name: "5 Stickers", types: ["Stickers"] },
{ name: "2 Moons from Hint Art", types: ["Hint_Moons"] },
{ name: "36 Moons (Metro)", types: ["Metro_Moons"] },
{ name: "6 Moons from sub-areas (Sand)", types: ["Sand"] },
{ name: "30 Regional Coins (Lake)", types: ["Lake_Regional"] },
{ name: "45 Regional Coins (Metro)", types: ["Metro_Regional"] }
];
bingoList[9] = [
{ name: "9 Moons from Nuts", types: ["Nuts"] },
{ name: "18 Moons (Lake)", types: ["Lake_Moons"] },
{ name: "25 Regional Coins (Lost)", types: ["Lost_Regional"] },
{ name: "32 Moons (Wooded)", types: ["Wooded_Moons", "Wooded_Condition"] },
{ name: "35 Regional Coins (Lake)", types: ["Lake_Regional"] },
{ name: "40 Regional Coins (Cap)", types: ["Cap_Regional"] },
{ name: "6 Moons (Deep Woods)", types: ["Deep_Woods"] },
{ name: "22 Unique Captures", types: ["Unique_Captures"] },
{ name: "50 Regional Coins (Sand)", types: ["Sand_Regional"] }
];
bingoList[10] = [
{ name: "Plant 6 Seeds", types: ["Seeds"] },
{ name: "7 Moons from 8-bit Sections", types: ["8bit"] },
{ name: "6 Stickers", types: ["Stickers"] },
{ name: "7 Timer Challenges", types: ["Timer"] },
{ name: "50 Regional Coins (Metro)", types: ["Metro_Regional"] },
{ name: "Purchase 7 Full Costume Sets", types: ["Outfits"] },
{ name: "40 Regional Coins (Lake)", types: ["Lake_Regional"] },
{ name: "40 Regional Coins (Wooded)", types: ["Wooded_Regional"] },
{ name: "16 Non-Nut Moons (Wooded)", types: ["No_Moons", "Wooded_Condition"] }
];
bingoList[11] = [
{ name: "6 Moons from sub-areas (Wooded)", types: ["Wooded"] },
{ name: "38 Moons (Metro)", types: ["Metro_Moons"] },
{ name: "8 Moons (Cap)", types: ["Cap_Moons"] },
{ name: "6 Captain Toad Moons", types: ["Captain_Toad"] },
{ name: "Call Jaxi from 7 Stands", types: ["Jaxi"] },
{ name: "125 Total Regional Coins", types: ["Regional_Coins"] },
{ name: "30 Regional Coins (Lost)", types: ["Lost_Regional"] },
{ name: "10 Moons from Nuts", types: ["Nuts"] },
{ name: "24 Unique Captures", types: ["Unique_Captures"] },
{ name: "55 Regional Coins (Sand)", types: ["Sand_Regional"] }
];
bingoList[12] = [
{ name: "34 Moons (Sand)", types: ["Sand_Moons", "Sand_Condition"] },
{ name: "8 Moons from sub-areas (Sand)", types: ["Sand"] },
{ name: "Purchase 10 Souvenirs", types: ["Souvenirs"] },
{ name: "45 Regional Coins (Cap)", types: ["Cap_Regional"] },
{ name: "100 Moons (Total)", types: ["Total_Moons"] },
{ name: "Look at 4 Hint Arts", types: ["Hint_View"] },
{ name: "20 Moons from sub-areas (Total)", types: ["Sub_Areas"] },
{ name: "7 Moons (Deep Woods)", types: ["Deep_Woods"] },
{ name: "3 Moons from Hint Art", types: ["Hint_Moons"] },
{ name: "45 Regional Coins (Lake)", types: ["Lake_Regional"] },
{ name: "45 Regional Coins (Wooded)", types: ["Wooded_Regional"] },
{ name: "55 Regional Coins (Metro)", types: ["Metro_Regional"] }
];
bingoList[13] = [
{ name: "6 Moons from sub-areas (Cascade)", types: ["Cascade"] },
{ name: "34 Moons (Wooded)", types: ["Wooded_Moons", "Wooded_Condition"] },
{ name: "Plant 7 Seeds", types: ["Seeds"] },
{ name: "150 Total Regional Coins", types: ["Regional_Coins"] },
{ name: "2 Moons from Goombas", types: ["Goomba"] },
{ name: "6 Multi Moons", types: ["Multi_Moons"] },
{ name: "7 Checkpoints (Wooded)", types: ["Wooded"] },
{ name: "26 Unique Captures", types: ["Unique_Captures"] },
{ name: "Purchase 8 Full Costume Sets", types: ["Outfits"] },
{ name: "16 Moons (Cascade)", types: ["Cascade_Moons"] },
{ name: "35 Regional Coins (Lost)", types: ["Lost_Regional"] },
{ name: "World Peace Restored! (Wooded)", types: ["World_Peace"] }
];
bingoList[14] = [
{ name: "10 Moons from sub-areas (Metro)", types: ["Metro"] },
{ name: "Purchase 7 Moons", types: ["Shop_Moons"] },
{ name: "3 Warp-Painting Moons", types: ["Warp_Painting"] },
{ name: "175 Total Regional Coins", types: ["Regional_Coins"] },
{ name: "8 Moons from sub-areas (Wooded)", types: ["Wooded"] },
{ name: "6 Moons from sub-areas (Cap)", types: ["Cap"] },
{ name: "50 Regional Coins (Wooded)", types: ["Wooded_Regional"] },
{ name: "60 Regional Coins (Sand)", types: ["Sand_Regional"] },
{ name: "60 Regional Coins (Metro)", types: ["Metro_Regional"] }
];
bingoList[15] = [
{ name: "18 Moons (Lost)", types: ["Lost_Moons"] },
{ name: "8 Checkpoints (Metro)", types: ["Metro"] },
{ name: "6 Moons from Music Notes", types: ["Music_Notes"] },
{ name: "6 Moons from Moon Shards", types: ["Moon_Shards"] },
{ name: "36 Moons (Sand)", types: ["Sand_Moons", "Sand_Condition"] },
{ name: "11 Moons from Nuts", types: ["Nuts"] },
{ name: "22 Moons from sub-areas (Total)", types: ["Sub_Areas"] },
{ name: "2 Ground-Pound Moons (Wooded)", types: ["Wooded", "Deep_Woods"] },
{ name: "3 Ground-Pound Moons (Wooded)", types: ["Wooded", "Deep_Woods"] },
{ name: "28 Unique Captures", types: ["Unique_Captures"] }
];
bingoList[16] = [
{ name: "200 Total Regional Coins", types: ["Regional_Coins"] },
{ name: "8 Timer Challenges", types: ["Timer"] },
{ name: "9 Treasure Chest Moons", types: ["Treasure_Chest"] },
{ name: "6 Checkpoints (Seaside)", types: ["Seaside"] },
{ name: "110 Moons (Total)", types: ["Total_Moons"] },
{ name: "Purchase 9 Full Costume Sets", types: ["Outfits"] },
{ name: "50 Regional Coins (Cascade)", types: ["Cascade_Regional"] },
{ name: "World Peace in 4 Kingdoms (excl. Cap, Cloud, Lost)", types: ["World_Peace"] },
{ name: "40 Regional Coins (Lost)", types: ["Lost_Regional"] },
{ name: "20 Regional Coins (Snow)", types: ["Snow_Regional"] }
];
bingoList[17] = [
{ name: "10 Moons (Cap)", types: ["Cap_Moons"] },
{ name: "Purchase 8 Moons", types: ["Shop_Moons"] },
{ name: "18 Moons (Cascade)", types: ["Cascade_Moons"] },
{ name: "9 Checkpoints (Sand)", types: ["Sand"] },
{ name: "Uncork 3 Fountains (Seaside)", types: ["Uncork"] },
{ name: "60 Regional Coins (Wooded)", types: ["Wooded_Regional"] },
{ name: "30 Unique Captures", types: ["Unique_Captures"] },
{ name: "40 Moons (Metro)", types: ["Metro_Moons"] },
{ name: "Goomba Picture-Match (Cloud)", types: ["Cloud"] }
];
bingoList[18] = [
{ name: "20 Moons (Lake)", types: ["Lake_Moons"] },
{ name: "12 Moons from sub-areas (Metro)", types: ["Metro"] },
{ name: "225 Total Regional Coins", types: ["Regional_Coins"] },
{ name: "7 Checkpoints (Seaside)", types: ["Seaside"] },
{ name: "Uncork 4 Fountains (Seaside)", types: ["Uncork"] },
{ name: "10 Moons (Snow)", types: ["Snow_Moons"] },
{ name: "25 Regional Coins (Snow)", types: ["Snow_Regional"] },
{ name: "World Peace Restored! (Sand)", types: ["World_Peace"] }
];
bingoList[19] = [
{ name: "4 Warp-Painting Moons", types: ["Warp_Painting"] },
{ name: "38 Moons (Sand)", types: ["Sand_Moons", "Sand_Condition"] },
{ name: "7 Captain Toad Moons", types: ["Captain_Toad"] },
{ name: "9 Timer Challenges", types: ["Timer"] },
{ name: "45 Regional Coins (Seaside)", types: ["Seaside_Regional"] },
{ name: "Purchase 10 Full Costume Sets", types: ["Outfits"] },
{ name: "10 Moons (Seaside)", types: ["Seaside_Moons", "Seaside_ConditionA"] },
{ name: "2 Barrier-Moons (Snow)", types: ["Snow"] }
];
bingoList[20] = [
{ name: "250 Total Regional Coins", types: ["Regional_Coins"] },
{ name: "3 Moons from Goombas", types: ["Goomba"] },
{ name: "7 Multi Moons", types: ["Multi_Moons"] },
{ name: "50 Regional Coins (Seaside)", types: ["Seaside_Regional"] },
{ name: "30 Regional Coins (Snow)", types: ["Snow_Regional"] },
{ name: "24 Moons from sub-areas (Total)", types: ["Sub_Areas"] },
{ name: "12 Moons (Seaside)", types: ["Seaside_Moons", "Seaside_ConditionA"] },
{ name: "12 Moons (Snow)", types: ["Snow_Moons"] },
];
bingoList[21] = [
{ name: "7 Stickers", types: ["Stickers"] },
{ name: "11 Treasure Chest Moons", types: ["Treasure_Chest"] },
{ name: "20 Moons (Cascade)", types: ["Cascade_Moons"] },
{ name: "55 Regional Coins (Seaside)", types: ["Seaside_Regional"] },
{ name: "14 Moons (Seaside)", types: ["Seaside_Moons", "Seaside_ConditionA"] },
{ name: "14 Moons (Snow)", types: ["Snow_Moons"] },
{ name: "3 Barrier-Moons (Snow)", types: ["Snow"] },
{ name: "Look at 5 Hint Arts", types: ["Hint_View"] },
{ name: "70 Regional Coins (Wooded)", types: ["Wooded_Regional"] }
];
bingoList[22] = [
{ name: "7 Moons from Moon Shards", types: ["Moon_Shards"] },
{ name: "36 Moons (Wooded)", types: ["Wooded_Moons", "Wooded_Condition"] },
{ name: "4 Moons from sub-areas (Seaside)", types: ["Seaside"] },
{ name: "60 Regional Coins (Seaside)", types: ["Seaside_Regional"] },
{ name: "120 Moons (Total)", types: ["Total_Moons"] },
{ name: "5 Ground-Pound Moons (Seaside)", types: ["Seaside", "Seaside_ConditionB"] }
];
bingoList[23] = [
{ name: "35 Regional Coins (Snow)", types: ["Snow_Regional"] },
{ name: "World Peace Restored! (Metro)", types: ["World_Peace"] },
{ name: "6 Ground-Pound Moons (Seaside)", types: ["Seaside", "Seaside_ConditionB"] },
{ name: "20 Moons (Lost)", types: ["Lost_Moons"] },
{ name: "4 Barrier-Moons (Snow)", types: ["Snow"] }
];
bingoList[24] = [
{ name: "7 Moons from Music Notes", types: ["Music_Notes"] },
{ name: "9 Moons from 8-bit Sections", types: ["8bit"] },
{ name: "42 Moons (Metro)", types: ["Metro_Moons"] },
{ name: "275 Total Regional Coins", types: ["Regional_Coins"] },
{ name: "26 Moons from sub-areas (Total)", types: ["Sub_Areas"] },
{ name: "40 Moons (Sand)", types: ["Sand_Moons", "Sand_Condition"] }
];
bingoList[25] = [
{ name: "World Peace Restored! (Seaside)", types: ["World_Peace"] },
{ name: "24 Moons (Lake)", types: ["Lake_Moons"] },
{ name: "10 Non-Underwater Moons (Seaside)", types: ["No_Moons", "Seaside_ConditionA", "Seaside_ConditionB"] },
{ name: "World Peace Restored! (Snow)", types: ["World_Peace"] },
{ name: "16 Moons (Seaside)", types: ["Seaside_Moons", "Seaside_ConditionA"] }
];
