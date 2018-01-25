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
{ name: "2 Checkpoints (Cascade)", types: ["Cascade"] },
{ name: "Captain Toad (Cascade)", types: ["Cascade"] },
{ name: "Have 0 Coins", types: ["Coins"] },
{ name: "Purchase 2 Yellow Coin Outfits", types: ["Yellow_Outfits"] },
{ name: "Purchase 4 Hats", types: ["Hats"] },
{ name: "Moon atop the Tostarena Ruins Tower", types: ["Sand_Story"] },
{ name: "Call Jaxi from 2 Stands", types: ["Jaxi"] },
{ name: "3 Checkpoints (Lake)", types: ["Lake"] },
{ name: "5 Checkpoints (Sand)", types: ["Sand"] },
{ name: "20 Regional Coins (Cascade)", types: ["Cascade_Regional"] }
];
bingoList[2] = [
{ name: "7 Moons from Nuts", types: ["Nuts"] },
{ name: "3 Checkpoints (Lost)", types: ["Lost"] },
{ name: "Captain Toad (Metro)", types: ["Metro"] },
{ name: "4 Checkpoints (Metro)", types: ["Metro"] },
{ name: "2 Moons from sub-areas (Metro)", types: ["Metro"] },
{ name: "Captain Toad (Lost)", types: ["Lost"] },
{ name: "6 Checkpoints (Sand)", types: ["Sand"] },
{ name: "25 Regional Coins (Cascade)", types: ["Cascade_Regional"] },
{ name: "30 Regional Coins (Cascade)", types: ["Cascade_Regional"] },
{ name: "10 Moons from sub-areas (Total)", types: ["Sub_Areas"] }
];
bingoList[3] = [
{ name: "2 Moons from Slots", types: ["Slots"] },
{ name: "Look at 2 Hint Arts", types: ["Hint_View"] },
{ name: "2 Moons from sub-areas (Sand)", types: ["Sand"] },
{ name: "7 Checkpoints (Sand)", types: ["Sand"] },
{ name: "Lakitu-Fishing (Lake)", types: ["Lake"] },
{ name: "2 Stickers", types: ["Stickers"] },
{ name: "1 Warp-Painting Moon", types: ["Warp_Painting"] },
{ name: "Answer 6 Sphynx Questions Correctly", types: ["Sphynx"] },
{ name: "Purchase 4 Souvenirs", types: ["Souvenirs"] },
{ name: "12 Unique Captures", types: ["Unique_Captures"] }
];
bingoList[4] = [
{ name: "80 Moons (Total)", types: ["Total_Moons"] },
{ name: "20 Moons (Sand)", types: ["Sand_Moons"] },
{ name: "4 Checkpoints (Wooded)", types: ["Wooded"] },
{ name: "3 Timer Challenges", types: ["Timer"] },
{ name: "Purchase 5 Hats", types: ["Hats"] },
{ name: "2 Checkpoints (Cap)", types: ["Cap"] },
{ name: "Call Jaxi from 3 Stands", types: ["Jaxi"] },
{ name: "24 Moons (Metro)", types: ["Metro_Moons"] },
{ name: "12 Moons (Lost)", types: ["Lost_Moons"] },
{ name: "10 Moons (Cascade)", types: ["Cascade_Moons"] },
{ name: "Finish Wooded without Multi Moon", types: ["No_Multi"] }
];
bingoList[5] = [
{ name: "3 Captain Toad Moons", types: ["Captain_Toad"] },
{ name: "3 Moons from 8-bit Sections", types: ["8bit"] },
{ name: "20 Moons (Wooded)", types: ["Wooded_Moons"] },
{ name: "Captain Toad (Lake)", types: ["Lake"] },
{ name: "3 Moons from Moon Shards", types: ["Moon_Shards"] },
{ name: "Sandy Moon Shards in the Moe-Eye Habitat", types: ["Sand_Story"] },
{ name: "12 Moons (Lake)", types: ["Lake_Moons"] },
{ name: "4 Moons (Cap)", types: ["Cap_Moons"] },
{ name: "4 Moons from Music Notes", types: ["Music_Notes"] },
{ name: "2 Moons from Shiny Rocks", types: ["Shiny_Rocks"] }
];
bingoList[6] = [
{ name: "10 Regional Coins (Lake)", types: ["Lake_Regional"] },
{ name: "20 Regional Coins (Metro)", types: ["Metro_Regional"] },
{ name: "25 Regional Coins (Wooded)", types: ["Wooded_Regional"] },
{ name: "10 Regional Coins (Lost)", types: ["Lost_Regional"] },
{ name: "3 Musicians (Metro)", types: ["Musicians"] },
{ name: "10 Regional Coins (Cap)", types: ["Cap_Regional"] },
{ name: "50 Total Regional Coins", types: ["Regional_Coins"] },
{ name: "Koopa Trace-Walking (Sand)", types: ["Sand"] },
{ name: "2 Moons (Deep Woods)", types: ["Deep_Woods"] },
{ name: "Purchase 3 Yellow Coin Outfits", types: ["Yellow_Outfits"] }
];
bingoList[7] = [
{ name: "Have 500 Coins", types: ["Coins"] },
{ name: "Purchase 4 Moons", types: ["Shop_Moons"] },
{ name: "Purchase 3 Regional Coin Outfits", types: ["Regional_Outfits"] },
{ name: "5 Treasure Chest Moons", types: ["Treasure_Chest"] },
{ name: "22 Moons (Sand)", types: ["Sand_Moons"] },
{ name: "14 Moons (Lost)", types: ["Lost_Moons"] },
{ name: "4 Moons from sub-areas (Metro)", types: ["Metro"] },
{ name: "4 Moons from sub-areas (Cascade)", types: ["Cascade"] },
{ name: "2 Moons from Wooden Crates", types: ["Crates"] },
{ name: "12 Moons from sub-areas (Total)", types: ["Sub_Areas"] }
];
bingoList[8] = [
{ name: "Outfit-Door (Metro)", types: ["Locked_Door"] },
{ name: "15 Regional Coins (Cap)", types: ["Cap_Regional"] },
{ name: "2 Moons from sub-areas (Cap)", types: ["Cap"] },
{ name: "12 Moons (Cascade)", types: ["Cascade_Moons"] },
{ name: "4 Moons from Moon Shards", types: ["Moon_Shards"] },
{ name: "4 Timer Challenges", types: ["Timer"] },
{ name: "3 Stickers", types: ["Stickers"] },
{ name: "1 Moon from Hint Art", types: ["Hint_Moons"] },
{ name: "26 Moons (Metro)", types: ["Metro_Moons"] },
{ name: "4 Moons from sub-areas (Sand)", types: ["Sand"] },
{ name: "20 Regional Coins (Lake)", types: ["Lake_Regional"] },
{ name: "Finish Sand with No Ground-Pound Moons", types: ["No_Moons"] }
];
bingoList[9] = [
{ name: "Have 750 Coins", types: ["Coins"] },
{ name: "15 Regional Coins (Lake)", types: ["Lake_Regional"] },
{ name: "8 Moons from Nuts", types: ["Nuts"] },
{ name: "14 Moons (Lake)", types: ["Lake_Moons"] },
{ name: "15 Regional Coins (Lost)", types: ["Lost_Regional"] },
{ name: "22 Moons (Wooded)", types: ["Wooded_Moons"] },
{ name: "25 Regional Coins (Lake)", types: ["Lake_Regional"] },
{ name: "20 Regional Coins (Cap)", types: ["Cap_Regional"] },
{ name: "30 Regional Coins (Lake)", types: ["Lake_Regional"] },
{ name: "Capture both the Cactus and the Tree", types: ["Capture_Both"] },
{ name: "3 Moons (Deep Woods)", types: ["Deep_Woods"] }
];
bingoList[10] = [
{ name: "Plant 4 Seeds", types: ["Seeds"] },
{ name: "5 Moons from 8-bit Sections", types: ["8bit"] },
{ name: "14 Unique Captures", types: ["Unique_Captures"] },
{ name: "4 Stickers", types: ["Stickers"] },
{ name: "5 Timer Challenges", types: ["Timer"] },
{ name: "30 Regional Coins (Metro)", types: ["Metro_Regional"] },
{ name: "Finish Lake without Multi Moon", types: ["No_Multi"] },
{ name: "35 Regional Coins (Lake)", types: ["Lake_Regional"] },
{ name: "Broodal Battle on the Inverted Pyramid!", types: ["Sand_Story"] }
];
bingoList[11] = [
{ name: "Outfit-Door (Wooded)", types: ["Locked_Door"] },
{ name: "4 Moons from sub-areas (Wooded)", types: ["Wooded"] },
{ name: "28 Moons (Metro)", types: ["Metro_Moons"] },
{ name: "6 Moons (Cap)", types: ["Cap_Moons"] },
{ name: "4 Captain Toad Moons", types: ["Captain_Toad"] },
{ name: "Call Jaxi from 4 Stands", types: ["Jaxi"] },
{ name: "Have 1000 Coins", types: ["Coins"] },
{ name: "75 Total Regional Coins", types: ["Regional_Coins"] },
{ name: "Outfit-Door (Sand)", types: ["Locked_Door"] },
{ name: "20 Regional Coins (Lost)", types: ["Lost_Regional"] },
{ name: "Wear the Boxer Shorts", types: ["Coins"] }
];
bingoList[12] = [
{ name: "24 Moons (Sand)", types: ["Sand_Moons"] },
{ name: "6 Moons from sub-areas (Sand)", types: ["Sand"] },
{ name: "Purchase 6 Souvenirs", types: ["Souvenirs"] },
{ name: "25 Regional Coins (Cap)", types: ["Cap_Regional"] },
{ name: "25 Regional Coins (Lost)", types: ["Lost_Regional"] },
{ name: "14 Moons (Snow)", types: ["Late_Game", "Snow_Moons"] },
{ name: "10 Regional Coins (Snow)", types: ["Late_Game", "Snow_Regional"] },
{ name: "90 Moons (Total)", types: ["Total_Moons"] },
{ name: "Look at 3 Hint Arts", types: ["Hint_View"] },
{ name: "3 Moons from Wooden Crates", types: ["Crates"] },
{ name: "14 Moons from sub-areas (Total)", types: ["Sub_Areas"] },
{ name: "4 Moons (Deep Woods)", types: ["Deep_Woods"] }
];
bingoList[13] = [
{ name: "2 Moons from sub-areas (Cascade)", types: ["Cascade"] },
{ name: "24 Moons (Wooded)", types: ["Wooded_Moons"] },
{ name: "Plant 5 Seeds", types: ["Seeds"] },
{ name: "100 Total Regional Coins", types: ["Regional_Coins"] },
{ name: "Have 1250 Coins", types: ["Coins"] },
{ name: "1 Moon from Goombas", types: ["Goomba"] },
{ name: "5 Multi Moons", types: ["Multi_Moons"] },
{ name: "30 Regional Coins (Wooded)", types: ["Wooded_Regional"] },
{ name: "5 Checkpoints (Wooded)", types: ["Wooded"] }
];
bingoList[14] = [
{ name: "6 Moons from sub-areas (Metro)", types: ["Metro"] },
{ name: "Purchase 5 Moons", types: ["Shop_Moons"] },
{ name: "Purchase 4 Regional Coin Outfits", types: ["Regional_Outfits"] },
{ name: "2 Warp-Painting Moons", types: ["Warp_Painting"] },
{ name: "125 Total Regional Coins", types: ["Regional_Coins"] },
{ name: "6 Moons from sub-areas (Wooded)", types: ["Wooded"] },
{ name: "3 Moons from Shiny Rocks", types: ["Shiny_Rocks"] },
{ name: "4 Moons from sub-areas (Cap)", types: ["Cap"] },
{ name: "40 Regional Coins (Wooded)", types: ["Wooded_Regional"] },
{ name: "Purchase 4 Yellow Coin Outfits", types: ["Yellow_Outfits"] },
{ name: "70 Regional Coins (Sand)", types: ["Sand_Regional"] }
];
bingoList[15] = [
{ name: "16 Moons (Lost)", types: ["Lost_Moons"] },
{ name: "6 Checkpoints (Metro)", types: ["Metro"] },
{ name: "5 Moons from Music Notes", types: ["Music_Notes"] },
{ name: "5 Moons from Moon Shards", types: ["Moon_Shards"] },
{ name: "24 Moons (Sand)", types: ["Sand_Moons"] },
{ name: "10 Moons from Nuts", types: ["Nuts"] },
{ name: "8 Moons from sub-areas (Wooded)", types: ["Wooded"] },
{ name: "16 Moons from sub-areas (Total)", types: ["Sub_Areas"] },
{ name: "2 Ground-Pound Moons (Wooded)", types: ["Wooded", "Deep_Woods"] },
{ name: "3 Ground-Pound Moons (Wooded)", types: ["Wooded", "Deep_Woods"] }
];
bingoList[16] = [
{ name: "150 Total Regional Coins", types: ["Regional_Coins"] },
{ name: "6 Timer Challenges", types: ["Timer"] },
{ name: "16 Unique Captures", types: ["Unique_Captures"] },
{ name: "7 Treasure Chest Moons", types: ["Treasure_Chest"] },
{ name: "9 Moons from Nuts", types: ["Nuts"] },
{ name: "35 Regional Coins (Metro)", types: ["Metro_Regional"] },
{ name: "3 Checkpoints (Seaside)", types: ["Late_Game", "Seaside"] },
{ name: "100 Moons (Total)", types: ["Total_Moons"] }
];
bingoList[17] = [
{ name: "10 Moons (Cap)", types: ["Cap_Moons"] },
{ name: "Purchase 6 Moons", types: ["Shop_Moons"] },
{ name: "14 Moons (Cascade)", types: ["Cascade_Moons"] },
{ name: "8 Checkpoints (Sand)", types: ["Sand"] },
{ name: "Uncork 1 Fountain (Seaside)", types: ["Late_Game", "Uncork"] },
{ name: "Outfit-Door (Seaside)", types: ["Late_Game", "Locked_Door"] },
{ name: "Captain Toad (Seaside)", types: ["Late_Game", "Seaside"] },
{ name: "Outfit-Door (Snow)", types: ["Late_Game", "Locked_Door"] },
{ name: "60 Regional Coins (Wooded)", types: ["Wooded_Regional"] }
];
bingoList[18] = [
{ name: "16 Moons (Lake)", types: ["Lake_Moons"] },
{ name: "8 Moons from sub-areas (Metro)", types: ["Metro"] },
{ name: "175 Total Regional Coins", types: ["Regional_Coins"] },
{ name: "Have 1500 Coins", types: ["Coins"] },
{ name: "Purchase 5 Regional Coin Outfits", types: ["Regional_Outfits"] },
{ name: "Finish Wooded with No Nut Moons", types: ["No_Moons"] },
{ name: "5 Checkpoints (Seaside)", types: ["Late_Game", "Seaside"] },
{ name: "Uncork 2 Fountains (Seaside)", types: ["Late_Game", "Uncork"] }
];
bingoList[19] = [
{ name: "3 Warp-Painting Moons", types: ["Warp_Painting"] },
{ name: "18 Unique Captures", types: ["Unique_Captures"] },
{ name: "8 Moons (Cap)", types: ["Cap_Moons"] },
{ name: "28 Moons (Sand)", types: ["Sand_Moons"] },
{ name: "5 Captain Toad Moons", types: ["Captain_Toad"] },
{ name: "7 Timer Challenges", types: ["Timer"] },
{ name: "Uncork 3 Fountains (Seaside)", types: ["Late_Game", "Uncork"] },
{ name: "25 Regional Coins (Seaside)", types: ["Late_Game", "Seaside_Regional"] }
];
bingoList[20] = [
{ name: "200 Total Regional Coins", types: ["Regional_Coins"] },
{ name: "Have 1750 Coins", types: ["Coins"] },
{ name: "2 Moons from Goombas", types: ["Goomba"] },
{ name: "6 Multi Moons", types: ["Multi_Moons"] },
{ name: "30 Regional Coins (Seaside)", types: ["Late_Game", "Seaside_Regional"] },
{ name: "20 Regional Coins (Snow)", types: ["Late_Game", "Snow_Regional"] },
{ name: "18 Moons from sub-areas (Total)", types: ["Sub_Areas"] }
];
bingoList[21] = [
{ name: "5 Stickers", types: ["Stickers"] },
{ name: "9 Treasure Chest Moons", types: ["Treasure_Chest"] },
{ name: "18 Moons (Cascade)", types: ["Cascade_Moons"] },
{ name: "35 Regional Coins (Seaside)", types: ["Late_Game", "Seaside_Regional"] },
{ name: "16 Moons (Seaside)", types: ["Late_Game", "Seaside_Moons"] },
{ name: "16 Moons (Snow)", types: ["Late_Game", "Snow_Moons"] },
{ name: "3 Barrier-Moons (Snow)", types: ["Late_Game", "Snow"] },
{ name: "Look at 4 Hint Arts", types: ["Late_Game", "Hint_View"] },
{ name: "4 Ground-Pound Moons (Seaside)", types: ["Late_Game", "Seaside"] },
{ name: "14 Moons (Seaside)", types: ["Late_Game", "Seaside_Moons"] }
];
bingoList[22] = [
{ name: "6 Moons from Moon Shards", types: ["Moon_Shards"] },
{ name: "Answer 8 Sphynx Questions Correctly", types: ["Late_Game", "Sphynx"] },
{ name: "26 Moons (Wooded)", types: ["Wooded_Moons"] },
{ name: "4 Moons from sub-areas (Seaside)", types: ["Late_Game", "Seaside"] },
{ name: "40 Regional Coins (Seaside)", types: ["Late_Game", "Seaside_Regional"] },
{ name: "110 Moons (Total)", types: ["Total_Moons"] },
{ name: "5 Ground-Pound Moons (Seaside)", types: ["Late_Game", "Seaside"] }
];
bingoList[23] = [
{ name: "45 Regional Coins (Lost)", types: ["Lost_Regional"] },
{ name: "30 Regional Coins (Snow)", types: ["Late_Game", "Snow_Regional"] },
{ name: "World Peace Restored! (Wooded)", types: ["World_Peace"] },
{ name: "Have 2000 Coins", types: ["Coins"] },
{ name: "2 Moons from Hint Art", types: ["Hint_Moons"] },
{ name: "7 Multi Moons", types: ["Multi_Moons"] },
{ name: "Goomba Picture-Match (Cloud)", types: ["Cloud"] },
{ name: "World Peace Restored! (Sand)", types: ["World_Peace"] }
];
bingoList[24] = [
{ name: "6 Moons from Music Notes", types: ["Music_Notes"] },
{ name: "7 Moons from 8-bit Sections", types: ["8bit"] },
{ name: "45 Regional Coins (Cascade)", types: ["Cascade_Regional"] },
{ name: "38 Moons (Metro)", types: ["Metro_Moons"] },
{ name: "Finish Metro with No NPC Moons", types: ["No_Moons"] },
{ name: "225 Total Regional Coins", types: ["Regional_Coins"] },
{ name: "20 Moons from sub-areas (Total)", types: ["Sub_Areas"] },
{ name: "20 Unique Captures", types: ["Unique_Captures"] }
];
bingoList[25] = [
{ name: "World Peace Restored! (Metro)", types: ["World_Peace"] },
{ name: "24 Moons (Snow)", types: ["Late_Game", "Snow_Moons"] },
{ name: "24 Moons (Lake)", types: ["Lake_Moons"] },
{ name: "World Peace Restored! (Seaside)", types: ["Late_Game", "World_Peace"] },
{ name: "Finish Seaside with No Underwater Moons", types: ["Late_Game", "No_Moons"] },
{ name: "4 Barrier-Moons (Snow)", types: ["Late_Game", "Snow"] },
{ name: "18 Moons (Seaside)", types: ["Late_Game", "Seaside_Moons"] }
];
