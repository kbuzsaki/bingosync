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
{ name: "9 Moons (Cascade Kingdom)", types: ["Cascade_Moons"] },
{ name: "10 Moons (Cascade Kingdom)", types: ["Cascade_Moons"] },
{ name: "11 Moons (Cascade Kingdom)", types: ["Cascade_Moons"] },
{ name: "12 Moons (Cascade Kingdom)", types: ["Cascade_Moons"] },
{ name: "13 Moons (Cascade Kingdom)", types: ["Cascade_Moons"] },
{ name: "14 Moons (Cascade Kingdom)", types: ["Cascade_Moons"] },
{ name: "15 Moons (Cascade Kingdom)", types: ["Cascade_Moons"] },
{ name: "1 Timer Challenge (Cascade Kingdom)", types: ["Cascade_Timer"] },
{ name: "2 Moons from sub-areas (Cascade Kingdom)", types: ["Subarea", "Cascade_Subarea"] }
];
bingoList[2] = [
{ name: "20 Regional Coins (Cascade Kingdom)", types: ["Coins", "Cascade_Coins"] },
{ name: "25 Regional Coins (Cascade Kingdom)", types: ["Coins", "Cascade_Coins"] },
{ name: "30 Regional Coins (Cascade Kingdom)", types: ["Coins", "Cascade_Coins"] },
{ name: "2 Timer Challenges (Cascade Kingdom)", types: ["Cascade_Timer"] },
{ name: "2 Checkpoints (Cascade Kingdom)", types: ["Cascade_Checkpoints"] },
{ name: "3 Checkpoints (Cascade Kingdom)", types: ["Cascade_Checkpoints"] },
{ name: "Captain Toad in the Cascade Kingdom", types: ["Toad", "Cascade_Toad"] }
];
bingoList[3] = [
{ name: "20 Moons (Sand Kingdom)", types: ["Sand_Moons"] },
{ name: "21 Moons (Sand Kingdom)", types: ["Sand_Moons"] },
{ name: "22 Moons (Sand Kingdom)", types: ["Sand_Moons"] },
{ name: "23 Moons (Sand Kingdom)", types: ["Sand_Moons"] },
{ name: "24 Moons (Sand Kingdom)", types: ["Sand_Moons"] },
{ name: "25 Moons (Sand Kingdom)", types: ["Sand_Moons"] },
{ name: "26 Moons (Sand Kingdom)", types: ["Sand_Moons"] },
{ name: "27 Moons (Sand Kingdom)", types: ["Sand_Moons"] },
{ name: "20 Regional Coins (Sand Kingdom)", types: ["Coins", "Sand_Coins"] },
{ name: "Koopa Trace-Walking (Sand Kingdom)", types: ["Sand_TraceWalking"] },
{ name: "Sand Kingdom Slots", types: ["Slots", "Sand_Slots"] },
{ name: "Purchase a Moon (Sand Kingdom)", types: ["Shop", "Sand_Shop"] },
{ name: "2 Moons from sub-areas (Sand Kingdom)", types: ["Sand_Subarea"] },
{ name: "4 Checkpoints (Sand Kingdom)", types: ["Checkpoints", "Sand_Checkpoints"] },
{ name: "5 Checkpoints (Sand Kingdom)", types: ["Checkpoints", "Sand_Checkpoints"] },
{ name: "1 Moon from Slots", types: ["Slots"] }
];
bingoList[4] = [
{ name: "28 Moons (Sand Kingdom)", types: ["Sand_Moons"] },
{ name: "29 Moons (Sand Kingdom)", types: ["Sand_Moons"] },
{ name: "30 Moons (Sand Kingdom)", types: ["Sand_Moons"] },
{ name: "25 Regional Coins (Sand Kingdom)", types: ["Coins", "Sand_Coins"] },
{ name: "30 Regional Coins (Sand Kingdom)", types: ["Coins", "Sand_Coins"] },
{ name: "Moon atop the Tostarena Ruins Tower", types: ["Sand_Objective"] },
{ name: "A Locked Door in the Sand Kingdom!", types: ["Sand_LockedDoor"] },
{ name: "Call Jaxi from 2 Different Jaxi-Stands", types: ["Sand_Jaxi"] },
{ name: "Call Jaxi from 3 Different Jaxi-Stands", types: ["Sand_Jaxi"] },
{ name: "Purchase the Sand Kingdom Sticker", types: ["Sticker", "Sand_Sticker"] },
{ name: "4 Moons from sub-areas (Sand Kingdom)", types: ["Sand_Subarea"] },
{ name: "6 Checkpoints (Sand Kingdom)", types: ["Checkpoints", "Sand_Checkpoints"] }
];
bingoList[5] = [
{ name: "4 Moons (Cap Kingdom)", types: ["Cap_Moons"] },
{ name: "5 Moons (Cap Kingdom)", types: ["Cap_Moons"] },
{ name: "6 Moons (Cap Kingdom)", types: ["Cap_Moons"] },
{ name: "7 Moons (Cap Kingdom)", types: ["Cap_Moons"] },
{ name: "8 Moons (Cap Kingdom)", types: ["Cap_Moons"] },
{ name: "Purchase a Moon (Cap Kingdom)", types: ["Shop", "Cap_Shop"] },
{ name: "1 Timer Challenge (Cap Kingdom)", types: ["Cap_Timer"] },
{ name: "Captain Toad in the Cap Kingdom", types: ["Toad", "Cap_Toad"] },
{ name: "2 Checkpoints (Cap Kingdom)", types: ["Cap_Checkpoints"] },
{ name: "2 Moons from sub-areas (Cap Kingdom)", types: ["Subarea", "Cap_Subarea"] },
{ name: "Sandy Moon Shards in the Moe-Eye Habitat", types: ["Sand_Objective"] },
{ name: "Call Jaxi from 4 Different Jaxi-Stands", types: ["Sand_Jaxi"] }
];
bingoList[6] = [
{ name: "20 Regional Coins (Cap Kingdom)", types: ["Coins", "Cap_Coins"] },
{ name: "25 Regional Coins (Cap Kingdom)", types: ["Coins", "Cap_Coins"] },
{ name: "30 Regional Coins (Cap Kingdom)", types: ["Coins", "Cap_Coins"] },
{ name: "Purchase the Cap Kingdom Sticker", types: ["Sticker", "Cap_Sticker"] },
{ name: "Purchase a Moon (Cascade Kingdom)", types: ["Shop", "Cascade_Shop"] },
{ name: "Purchase the Cascade Kingdom Sticker", types: ["Sticker", "Cascade_Sticker"] },
{ name: "Broodal Battle atop the Inverted Pyramid!", types: ["Sand_Objective"] },
{ name: "Plant 3 Seeds", types: ["Seeds", "Sand_Seeds", "Lake_Seeds", "Metro_Seeds", "Seaside_Seeds", "Mushroom_Seeds"] },
{ name: "Purchase 2 Kingdom Stickers", types: ["Sticker"] }
];
bingoList[7] = [
{ name: "13 Moons (Lake Kingdom)", types: ["Lake_Moons"] },
{ name: "14 Moons (Lake Kingdom)", types: ["Lake_Moons"] },
{ name: "15 Moons (Lake Kingdom)", types: ["Lake_Moons"] },
{ name: "16 Moons (Lake Kingdom)", types: ["Lake_Moons"] },
{ name: "17 Moons (Lake Kingdom)", types: ["Lake_Moons"] },
{ name: "18 Moons (Lake Kingdom)", types: ["Lake_Moons"] },
{ name: "Purchase a Moon (Lake Kingdom)", types: ["Shop", "Lake_Shop"] },
{ name: "Captain Toad in the Lake Kingdom", types: ["Toad", "Lake_Toad"] },
{ name: "2 Moons from sub-areas (Lake Kingdom)", types: ["Subarea", "Lake_Subarea"] }
];
bingoList[8] = [
{ name: "20 Regional Coins (Lake Kingdom)", types: ["Coins", "Lake_Coins"] },
{ name: "25 Regional Coins (Lake Kingdom)", types: ["Coins", "Lake_Coins"] },
{ name: "30 Regional Coins (Lake Kingdom)", types: ["Coins", "Lake_Coins"] },
{ name: "A Locked Door in the Lake Kingdom!", types: ["Lake_LockedDoor"] },
{ name: "Lakitu-Fishing (Lake Kingdom)", types: ["Fishing", "Lake_Fishing"] },
{ name: "Purchase the Lake Kingdom Sticker", types: ["Sticker", "Lake_Sticker"] },
{ name: "3 Checkpoints (Lake Kingdom)", types: ["Lake_Checkpoints"] },
{ name: "4 Checkpoints (Lake Kingdom)", types: ["Lake_Checkpoints"] },
{ name: "1 Moon from Fishing", types: ["Fishing"] },
{ name: "100 Total Regional Coins", types: ["Coins"] },
{ name: "6 Moons from sub-areas", types: ["Subarea"] }
];
bingoList[9] = [
{ name: "20 Moons (Wooded Kingdom)", types: ["Wooded_Moons"] },
{ name: "21 Moons (Wooded Kingdom)", types: ["Wooded_Moons"] },
{ name: "22 Moons (Wooded Kingdom)", types: ["Wooded_Moons"] },
{ name: "23 Moons (Wooded Kingdom)", types: ["Wooded_Moons"] },
{ name: "24 Moons (Wooded Kingdom)", types: ["Wooded_Moons"] },
{ name: "25 Moons (Wooded Kingdom)", types: ["Wooded_Moons"] },
{ name: "26 Moons (Wooded Kingdom)", types: ["Wooded_Moons"] },
{ name: "7 Moons from Nuts (Wooded Kingdom)", types: ["Wooded_Moons", "Wooded_Nuts"] },
{ name: "8 Moons from Nuts (Wooded Kingdom)", types: ["Wooded_Moons", "Wooded_Nuts"] },
{ name: "4 Checkpoints (Wooded Kingdom)", types: ["Wooded_Checkpoints"] },
{ name: "5 Checkpoints (Wooded Kingdom)", types: ["Wooded_Checkpoints"] },
{ name: "2 Moons from sub-areas (Wooded Kingdom)", types: ["Subarea", "Wooded_Subarea"] },
{ name: "Purchase 3 Kingdom Stickers", types: ["Sticker"] }
];
bingoList[10] = [
{ name: "27 Moons (Wooded Kingdom)", types: ["Wooded_Moons"] },
{ name: "28 Moons (Wooded Kingdom)", types: ["Wooded_Moons"] },
{ name: "29 Moons (Wooded Kingdom)", types: ["Wooded_Moons"] },
{ name: "20 Regional Coins (Wooded Kingdom)", types: ["Coins", "Wooded_Coins"] },
{ name: "25 Regional Coins (Wooded Kingdom)", types: ["Coins", "Wooded_Coins"] },
{ name: "30 Regional Coins (Wooded Kingdom)", types: ["Coins", "Wooded_Coins"] },
{ name: "3 Moons from the Deep Woods", types: ["Wooded_Moons", "Wooded_Deep"] },
{ name: "4 Moons from the Deep Woods", types: ["Wooded_Moons", "Wooded_Deep"] },
{ name: "9 Moons from Nuts (Wooded Kingdom)", types: ["Wooded_Moons", "Wooded_Nuts"] },
{ name: "10 Moons from Nuts (Wooded Kingdom)", types: ["Wooded_Moons", "Wooded_Nuts"] },
{ name: "A Locked Door in the Wooded Kingdom!", types: ["Wooded_LockedDoor"] },
{ name: "Purchase the Wooded Kingdom Sticker", types: ["Sticker", "Wooded_Sticker"] },
{ name: "6 Checkpoints (Wooded Kingdom)", types: ["Wooded_Checkpoints"] },
{ name: "4 Moons from sub-areas (Wooded Kingdom)", types: ["Subarea", "Wooded_Subarea"] },
{ name: "125 Total Regional Coins", types: ["Coins"] }
];
bingoList[11] = [
{ name: "14 Moons (Lost Kingdom)", types: ["Lost_Moons"] },
{ name: "15 Moons (Lost Kingdom)", types: ["Lost_Moons"] },
{ name: "16 Moons (Lost Kingdom)", types: ["Lost_Moons"] },
{ name: "17 Moons (Lost Kingdom)", types: ["Lost_Moons"] },
{ name: "18 Moons (Lost Kingdom)", types: ["Lost_Moons"] },
{ name: "Purchase a Moon (Lost Kingdom)", types: ["Shop", "Lost_Shop"] },
{ name: "Captain Toad in the Lost Kingdom", types: ["Toad", "Lost_Toad"] },
{ name: "4 Moons from 8-bit Sections", types: ["8_Bit"] },
{ name: "3 Moons from Captain Toad", types: ["Toad"] },
{ name: "5 Moons from Timer Challenges", types: ["Timer"] },
{ name: "8 Moons from sub-areas", types: ["Subarea"] }
];
bingoList[12] = [
{ name: "20 Regional Coins (Lost Kingdom)", types: ["Coins", "Lost_Coins"] },
{ name: "25 Regional Coins (Lost Kingdom)", types: ["Coins", "Lost_Coins"] },
{ name: "30 Regional Coins (Lost Kingdom)", types: ["Coins", "Lost_Coins"] },
{ name: "Purchase the Lost Kingdom Sticker", types: ["Sticker", "Lost_Sticker"] },
{ name: "3 Checkpoints (Lost Kingdom)", types: ["Lost_Checkpoints"] },
{ name: "14 Total Checkpoints", types: ["Checkpoints"] },
{ name: "15 Total Checkpoints", types: ["Checkpoints"] },
{ name: "150 Total Regional Coins", types: ["Coins"] },
{ name: "4 Moons from Music Note Challenges", types: ["Music_Notes"] },
{ name: "Purchase 4 Kingdom Stickers", types: ["Sticker"] }
];
bingoList[13] = [
{ name: "24 Moons (Metro Kingdom)", types: ["Metro_Moons"] },
{ name: "25 Moons (Metro Kingdom)", types: ["Metro_Moons"] },
{ name: "26 Moons (Metro Kingdom)", types: ["Metro_Moons"] },
{ name: "27 Moons (Metro Kingdom)", types: ["Metro_Moons"] },
{ name: "28 Moons (Metro Kingdom)", types: ["Metro_Moons"] },
{ name: "29 Moons (Metro Kingdom)", types: ["Metro_Moons"] },
{ name: "30 Moons (Metro Kingdom)", types: ["Metro_Moons"] },
{ name: "31 Moons (Metro Kingdom)", types: ["Metro_Moons"] },
{ name: "20 Regional Coins (Metro Kingdom)", types: ["Coins", "Metro_Coins"] },
{ name: "Metro Kingdom Slots", types: ["Slots", "Metro_Slots"] },
{ name: "Purchase a Moon (Metro Kingdom)", types: ["Shop", "Metro_Shop"] },
{ name: "3 Musicians (Metro Kingdom)", types: ["Metro_Moons", "Metro_Musicians"] },
{ name: "Captain Toad in the Metro Kingdom", types: ["Toad", "Metro_Toad"] },
{ name: "2 Moons from sub-areas (Metro Kingdom)", types: ["Subarea", "Metro_Subarea"] },
{ name: "4 Moons from sub-areas (Metro Kingdom)", types: ["Subarea", "Metro_Subarea"] },
{ name: "4 Checkpoints (Metro Kingdom)", types: ["Metro_Checkpoints"] },
{ name: "5 Checkpoints (Metro Kingdom)", types: ["Metro_Checkpoints"] },
{ name: "Plant 4 Seeds", types: ["Seeds", "Sand_Seeds", "Lake_Seeds", "Metro_Seeds", "Seaside_Seeds", "Mushroom_Seeds"] }
];
bingoList[14] = [
{ name: "32 Moons (Metro Kingdom)", types: ["Metro_Moons"] },
{ name: "33 Moons (Metro Kingdom)", types: ["Metro_Moons"] },
{ name: "34 Moons (Metro Kingdom)", types: ["Metro_Moons"] },
{ name: "35 Moons (Metro Kingdom)", types: ["Metro_Moons"] },
{ name: "25 Regional Coins (Metro Kingdom)", types: ["Coins", "Metro_Coins"] },
{ name: "30 Regional Coins (Metro Kingdom)", types: ["Coins", "Metro_Coins"] },
{ name: "4 Musicians (Metro Kingdom)", types: ["Metro_Moons", "Metro_Musicians"] },
{ name: "A Locked Door in the Metro Kingdom!", types: ["Metro_LockedDoor"] },
{ name: "Purchase the Metro Kingdom Sticker", types: ["Sticker", "Metro_Sticker"] },
{ name: "6 Checkpoints (Metro Kingdom)", types: ["Metro_Checkpoints"] },
{ name: "16 Total Checkpoints", types: ["Checkpoints"] },
{ name: "17 Total Checkpoints", types: ["Checkpoints"] },
{ name: "5 Moons from 8-bit Sections", types: ["8_Bit"] },
{ name: "175 Total Regional Coins", types: ["Coins"] },
{ name: "10 Moons from sub-areas", types: ["Subarea"] }
];
bingoList[15] = [
{ name: "Goomba Picture-Match (Cloud Kingdom)", types: ["Cloud_Moons", "Cloud_PictureMatch"] },
{ name: "14 Moons (Snow Kingdom)", types: ["Snow_Moons"] },
{ name: "15 Moons (Snow Kingdom)", types: ["Snow_Moons"] },
{ name: "16 Moons (Snow Kingdom)", types: ["Snow_Moons"] },
{ name: "17 Moons (Snow Kingdom)", types: ["Snow_Moons"] },
{ name: "18 Moons (Snow Kingdom)", types: ["Snow_Moons"] },
{ name: "Purchase a Moon (Snow Kingdom)", types: ["Shop", "Snow_Shop"] },
{ name: "3 Barrier-Moons (Snow Kingdom)", types: ["Snow_Moons", "Snow_Barriers"] },
{ name: "Captain Toad in the Snow Kingdom", types: ["Toad", "Snow_Toad"] },
{ name: "5 Moons from Moon Shards", types: ["Moon_Shards"] },
{ name: "4 Moons from Captain Toad", types: ["Toad"] },
{ name: "5 Moons from Music Note Challenges", types: ["Music_Notes"] }
];
bingoList[16] = [
{ name: "20 Regional Coins (Snow Kingdom)", types: ["Coins", "Snow_Coins"] },
{ name: "25 Regional Coins (Snow Kingdom)", types: ["Coins", "Snow_Coins"] },
{ name: "30 Regional Coins (Snow Kingdom)", types: ["Coins", "Snow_Coins"] },
{ name: "A Locked Door in the Snow Kingdom!", types: ["Snow_LockedDoor"] },
{ name: "4 Barrier-Moons (Snow Kingdom)", types: ["Snow_Moons", "Snow_Barriers"] },
{ name: "Purchase the Snow Kingdom Sticker", types: ["Sticker", "Snow_Sticker"] },
{ name: "18 Total Checkpoints", types: ["Checkpoints"] },
{ name: "19 Total Checkpoints", types: ["Checkpoints"] },
{ name: "200 Total Regional Coins", types: ["Coins"] },
{ name: "2 Moons from Slots", types: ["Slots"] },
{ name: "6 Moons from Timer Challenges", types: ["Timer"] }
];
bingoList[17] = [
{ name: "14 Moons (Seaside Kingdom)", types: ["Seaside_Moons"] },
{ name: "15 Moons (Seaside Kingdom)", types: ["Seaside_Moons"] },
{ name: "16 Moons (Seaside Kingdom)", types: ["Seaside_Moons"] },
{ name: "17 Moons (Seaside Kingdom)", types: ["Seaside_Moons"] },
{ name: "20 Regional Coins (Seaside Kingdom)", types: ["Coins", "Seaside_Coins"] },
{ name: "2 Fountain-Moons (Seaside Kingdom)", types: ["Seaside_Moons", "Seaside_Fountains"] },
{ name: "Uncork 1 Fountain (Seaside Kingdom)", types: ["Seaside_Corks"] },
{ name: "Purchase a Moon (Seaside Kingdom)", types: ["Shop", "Seaside_Shop"] },
{ name: "Captain Toad in the Seaside Kingdom", types: ["Toad", "Seaside_Toad"] },
{ name: "3 Checkpoints (Seaside Kingdom)", types: ["Seaside_Checkpoints"] },
{ name: "4 Checkpoints (Seaside Kingdom)", types: ["Seaside_Checkpoints"] },
{ name: "6 Moons from 8-bit Sections", types: ["8_Bit"] },
{ name: "Plant 5 Seeds", types: ["Seeds", "Sand_Seeds", "Lake_Seeds", "Metro_Seeds", "Seaside_Seeds", "Mushroom_Seeds"] },
{ name: "5 Multi Moons", types: ["Multi_Moons"] }
];
bingoList[18] = [
{ name: "18 Moons (Seaside Kingdom)", types: ["Seaside_Moons"] },
{ name: "19 Moons (Seaside Kingdom)", types: ["Seaside_Moons"] },
{ name: "20 Moons (Seaside Kingdom)", types: ["Seaside_Moons"] },
{ name: "25 Regional Coins (Seaside Kingdom)", types: ["Coins", "Seaside_Coins"] },
{ name: "30 Regional Coins (Seaside Kingdom)", types: ["Coins", "Seaside_Coins"] },
{ name: "3 Fountain-Moons (Seaside Kingdom)", types: ["Seaside_Moons", "Seaside_Fountains"] },
{ name: "Uncork 2 Fountains (Seaside Kingdom)", types: ["Seaside_Corks"] },
{ name: "A Locked Door in the Seaside Kingdom!", types: ["Seaside_LockedDoor"] },
{ name: "Purchase the Seaside Kingdom Sticker", types: ["Sticker", "Seaside_Sticker"] },
{ name: "2 Moons from sub-areas (Seaside Kingdom)", types: ["Seaside_Subarea"] },
{ name: "20 Total Checkpoints", types: ["Checkpoints"] },
{ name: "21 Total Checkpoints", types: ["Checkpoints"] },
{ name: "22 Total Checkpoints", types: ["Checkpoints"] },
{ name: "6 Moons from Moon Shards", types: ["Moon_Shards"] },
{ name: "6 Moons from Music Note Challenges", types: ["Music_Notes"] }
];
bingoList[19] = [
{ name: "4 Fountain-Moons (Seaside Kingdom)", types: ["Seaside_Moons", "Seaside_Fountains"] },
{ name: "Uncork 3 Fountains (Seaside Kingdom)", types: ["Seaside_Corks"] },
{ name: "24 Moons (Luncheon Kingdom)", types: ["Luncheon_Moons"] },
{ name: "25 Moons (Luncheon Kingdom)", types: ["Luncheon_Moons"] },
{ name: "26 Moons (Luncheon Kingdom)", types: ["Luncheon_Moons"] },
{ name: "27 Moons (Luncheon Kingdom)", types: ["Luncheon_Moons"] },
{ name: "28 Moons (Luncheon Kingdom)", types: ["Luncheon_Moons"] },
{ name: "2 Golden Turnips (Luncheon Kingdom)", types: ["Luncheon_Moons", "Luncheon_Turnips"] },
{ name: "Luncheon Kingdom Slots", types: ["Slots", "Luncheon_Slots"] },
{ name: "Purchase a Moon (Luncheon Kingdom)", types: ["Shop", "Luncheon_Shop"] },
{ name: "2 Moons from sub-areas (Luncheon Kingdom)", types: ["Subarea", "Luncheon_Subarea"] },
{ name: "3 Checkpoints (Luncheon Kingdom)", types: ["Luncheon_Checkpoints"] },
{ name: "5 Moons from Captain Toad", types: ["Toad"] }
];
bingoList[20] = [
{ name: "29 Moons (Luncheon Kingdom)", types: ["Luncheon_Moons"] },
{ name: "30 Moons (Luncheon Kingdom)", types: ["Luncheon_Moons"] },
{ name: "20 Regional Coins (Luncheon Kingdom)", types: ["Coins", "Luncheon_Coins"] },
{ name: "25 Regional Coins (Luncheon Kingdom)", types: ["Coins", "Luncheon_Coins"] },
{ name: "30 Regional Coins (Luncheon Kingdom)", types: ["Coins", "Luncheon_Coins"] },
{ name: "A Locked Door in the Luncheon Kingdom!", types: ["Luncheon_LockedDoor"] },
{ name: "3 Golden Turnips (Luncheon Kingdom)", types: ["Luncheon_Moons", "Luncheon_Turnips"] },
{ name: "Purchase the Luncheon Kingdom Sticker", types: ["Sticker", "Luncheon_Sticker"] },
{ name: "4 Moons from sub-areas (Luncheon Kingdom)", types: ["Subarea", "Luncheon_Subarea"] },
{ name: "4 Checkpoints (Luncheon Kingdom)", types: ["Luncheon_Checkpoints"] }
];
bingoList[21] = [
{ name: "4 Moons (Ruined Kingdom)", types: ["Ruined_Moons"] },
{ name: "5 Moons (Ruined Kingdom)", types: ["Ruined_Moons"] },
{ name: "2 Moons from sub-areas (Ruined Kingdom)", types: ["Subarea", "Ruined_Subarea"] },
{ name: "7 Moons from Moon Shards", types: ["Moon_Shards"] },
{ name: "6 Multi Moons", types: ["Multi_Moons"] },
{ name: "7 Moons from Timer Challenges", types: ["Timer"] }
];
bingoList[22] = [
{ name: "13 Moons (Bowser's Kingdom)", types: ["Bowser_Moons"] },
{ name: "14 Moons (Bowser's Kingdom)", types: ["Bowser_Moons"] },
{ name: "15 Moons (Bowser's Kingdom)", types: ["Bowser_Moons"] },
{ name: "20 Regional Coins (Bowser's Kingdom)", types: ["Coins", "Bowser_Coins"] }
];
bingoList[23] = [
{ name: "16 Moons (Bowser's Kingdom)", types: ["Bowser_Moons"] },
{ name: "17 Moons (Bowser's Kingdom)", types: ["Bowser_Moons"] },
{ name: "18 Moons (Bowser's Kingdom)", types: ["Bowser_Moons"] },
{ name: "25 Regional Coins (Bowser's Kingdom)", types: ["Coins", "Bowser_Coins"] },
{ name: "Purchase a Moon (Bowser's Kingdom)", types: ["Shop", "Bowser_Shop"] }
];
bingoList[24] = [
{ name: "30 Regional Coins (Bowser's Kingdom)", types: ["Coins", "Bowser_Coins"] },
{ name: "A Locked Door in Bowser's Kingdom!", types: ["Bowser_LockedDoor"] },
{ name: "Captain Toad in Bowser's Kingdom", types: ["Toad", "Bowser_Toad"] },
{ name: "Purchase the Bowser's Kingdom Sticker", types: ["Sticker", "Bowser_Sticker"] },
{ name: "2 Moons from sub-areas (Bowser's Kingdom)", types: ["Subarea", "Bowser_Subarea"] }
];
bingoList[25] = [
{ name: "6 Checkpoints (Bowser's Kingdom)", types: ["Bowser_Checkpoints"] },
{ name: "7 Checkpoints (Bowser's Kingdom)", types: ["Bowser_Checkpoints"] },
{ name: "8 Checkpoints (Bowser's Kingdom)", types: ["Bowser_Checkpoints"] },
{ name: "9 Checkpoints (Bowser's Kingdom)", types: ["Bowser_Checkpoints"] }
];
