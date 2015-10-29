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
{ name: "10 Blue Coins from Delfino Plaza", types: ["Plaza_Blues", "Plaza_M", "Fruit_Ladies", "Gelato_Shines"] },
{ name: "15 Blue Coins from Pianta Village", types: ["Pianta_Blues", "Goopy_Inferno", "Pianta_30", "Pianta_Shines"] },
{ name: "Three blue coins from fruit ladies", types: ["Fruit_Ladies"] },
{ name: "15 Blue Coins from Ricco Harbor", types: ["Ricco_Blues", "Ricco_M", "Fast_20", "Ricco_30", "Ricco_Shines"] }
];
bingoList[2] = [
{ name: "Collect Ricco 3 Shine from the top", types: ["Ricco_Top", "Ricco_Early", "Ricco_20", "Ricco_Rocket", "Ricco_Shines"] },
{ name: "5 Linked Blue Coin Pairs", types: ["Linked_Blues"] },
{ name: "Clear a Gelato Beach Episode of all Cataquacks", types: ["Gelato_Quacks", "Gelato_Early", "Wiggler", "Gelato_Shines"] },
{ name: "3 Red Coin Shines", types: ["Red_Shines", "Plaza_Shines", "Hidden_Shines"] },
{ name: "15 Blue Coins from Bianco Hills", types: ["Bianco_Blues", "Bianco_Early", "Bianco_30"] },
{ name: "Complete Episode 4 of Bianco Hills Entirely Fluddless", types: ["Bianco_20", "Bianco_Early", "Bianco_Shines"] }
];
bingoList[3] = [
{ name: "10 Blue Coins from Pinna Park", types: ["Pinna_Blues", "Pinna_Early", "Fast_20", "Pinna_Boss", "Pinna_30", "Pinna_Shines"] },
{ name: "30 Total Blue Coins", types: ["Ricco_Blues", "Pinna_Blues", "Bianco_Blues", "Pianta_Blues", "Noki_Blues", "Plaza_Blues", "Gelato_Blues", "Sirena_Blues", "XTotal_Blues", "Blue_30"] },
{ name: "Complete Episode 2 of Ricco Harbor Entirely Blooperless", types: ["Ricco_Top", "Ricco_Hidden", "Ricco_Early", "Ricco_Rocket", "Ricco_Shines"] },
{ name: "Collect 2 Hidden Shines in Gelato Beach", types: ["Gelato_Early", "Gelato_Hidden", "Gelato_Quacks", "Gelato_Shines", "9_S"] },
{ name: "Collect 1 Hidden Shine in Bianco Hills", types: ["Bianco_Early", "Bianco_Hidden", "Bianco_Shines"] }
];
bingoList[4] = [
{ name: "All (four) fruit lady blue coins", types: ["Fruit_Ladies"] },
{ name: "15 Blue Coins from Gelato Beach", types: ["Gelato_Blues", "Fast_20", "Gelato_Quacks", "Gelato_30", "Gelato_Shines"] },
{ name: "Goopy Inferno (Pianta 3) NO damage taken", types: ["Goopy_Inferno", "Paint_Race", "Pianta_Shines"] },
{ name: "20 Blue Coins from Ricco Harbor", types: ["Ricco_Blues", "Ricco_M", "Fast_20", "Ricco_Early", "Ricco_30", "Ricco_Shines"] },
{ name: "4 Shines from Bianco Hills", types: ["Bianco_Rocket", "Bianco_Boss", "Bianco_Secret", "Bianco_Hidden", "Bianco_Early", "Bianco_Late", "Bianco_Blues", "Bianco_Shines"] },
{ name: "Collect 1 Hidden Shine in Ricco Harbor", types: ["Ricco_Top", "Ricco_Hidden", "Ricco_Early", "Ricco_Rocket", "Ricco_Shines"] }
];
bingoList[5] = [
{ name: "20 Blue Coins from Gelato Beach", types: ["Gelato_20", "Gelato_Early", "Gelato_Blues", "Gelato_100s", "Wiggler", "Fast_20", "Gelato_30", "Gelato_Shines"] },
{ name: "35 Total Blue Coins", types: ["Ricco_Blues", "Pinna_Blues", "Bianco_Blues", "Pianta_Blues", "Noki_Blues", "Plaza_Blues", "Gelato_Blues", "Sirena_Blues", "XTotal_Blues", "Blue_30"] },
{ name: "Defeat Petey Strikes Back (Bianco 5)", types: ["Bianco_Boss", "Bianco_Early", "Unique_Boss", "XBoss_Shines", "Bianco_Shines"] },
{ name: "100 Coin Shine from Sirena Beach", types: ["Sirena_100s", "X100_Coins", "Sirena_Early"] },
{ name: "15 Blue Coins from Delfino Plaza", types: ["XBlue_Coins", "Ricco_Blues", "Gelato_Blues", "Bianco_Blues", "Pinna_Blues", "Pianta_Blues", "Sirena_Blues", "Noki_Blues", "Plaza_Shines"] },
{ name: "100 Coin Shine from Ricco Harbor", types: ["Ricco_100s", "Ricco_Early", "Ricco_Top", "Ricco_Rocket", "Ricco_Shines"] }
];
bingoList[6] = [
{ name: "6 Blue Bird Blue Coins", types: ["Blue_Bird", "Gelato_Hidden"] },
{ name: "100 Coin Shine from Bianco Hills", types: ["Bianco_100s", "Bianco_Early", "Bianco_Shines"] },
{ name: "15 Blue Coins from M Graffiti", types: ["M_Graffiti", "Plaza_M", "Ricco_M"] },
{ name: "Defeat Wiggler", types: ["Wiggler", "Gelato_Early"] },
{ name: "15 Blue Coins from Pinna Park", types: ["Pinna_Blues", "Fast_20", "Pinna_Early", "Pinna_30", "Pinna_Shines"] },
{ name: "5 Blue Coins from Enemies", types: ["Blue_Enemies", "Ricco_Top", "Ricco_Blues", "Ricco_Early", "XBoss_Shines", "M_Graffiti"] }
];
bingoList[7] = [
{ name: "4 Red Coin Shines", types: ["Red_Shines", "Plaza_Shines", "Hidden_Shines", "Bianco_Early", "Bianco_8"] },
{ name: "Collect 1 Hidden Shine in Pinna Park", types: ["Pinna_Early", "Pinna_Hidden", "Pinna_Yoshi", "Pinna_Shines"] },
{ name: "Collect 1 Hidden Shine in Noki Bay", types: ["Noki_Early", "Noki_Hidden", "Noki_Rocket"] },
{ name: "Collect a 100 Coin Shine from a Secret Level", types: ["Secret_100"] },
{ name: "4 Boss Shines", types: ["XBoss_Shines", "Unique_Boss", "Bianco_Boss", "Pinna_Boss", "Ricco_Boss", "Wiggler", "Sirena_Early", "Noki_Boss"] },
{ name: "40 Total Blue Coins", types: ["Ricco_Blues", "Pinna_Blues", "Bianco_Blues", "Pianta_Blues", "Noki_Blues", "Plaza_Blues", "Gelato_Blues", "Sirena_Blues", "XTotal_Blues", "Blue_30"] }
];
bingoList[8] = [
{ name: "Collect both gold bird shines", types: ["Plaza_Shines", "Noki_Hidden", "Noki_Early"] },
{ name: "20 Blue Coins from Bianco Hills", types: ["Bianco_20", "Bianco_30", "Bianco_Early", "Bianco_Blues", "Bianco_Shines"] },
{ name: "2 Rocket Nozzle Unlocks", types: ["Rocket_Nozzle", "Bianco_Rocket", "Ricco_Rocket", "Gelato_Rocket", "Noki_Rocket", "Pianta_Rocket", "Plaza_Rocket"] },
{ name: "Defeat Gooper Blooper Returns (Ricco 5)", types: ["Ricco_Top", "Ricco_Early", "Ricco_6", "Ricco_100", "Ricco_Shines"] },
{ name: "4 Hidden Shines", types: ["Hidden_Shines", "Ricco_Hidden", "Bianco_Hidden", "Pianta_Hidden", "Gelato_Hidden", "Sirena_Hidden", "Pinna_Hidden", "Noki_Hidden", "Secret_Shines"] },
{ name: "20 Blue Coins from Pinna Park", types: ["Pinna_Blues", "Fast_20", "Pinna_Early", "Pinna_30", "Pinna_Shines"] },
{ name: "45 Total Blue Coins", types: ["Ricco_Blues", "Pinna_Blues", "Bianco_Blues", "Pianta_Blues", "Noki_Blues", "Plaza_Blues", "Gelato_Blues", "Sirena_Blues", "XTotal_Blues", "Blue_30"] }
];
bingoList[9] = [
{ name: "100 Coin Shine from Gelato Beach", types: ["Gelato_100", "Gelato_Early", "Gelato_Shines"] },
{ name: "20 Lives", types: ["X_Lives"] },
{ name: "Collect the Sand Bird Shine", types: ["Wiggler", "Gelato_5", "Turbo_Nozzle", "Paint_Race", "Gelato_Shines"] },
{ name: "25 Blue Coins in Ricco Harbor", types: ["Ricco_Blues", "Blue_Enemies", "Ricco_Early", "Ricco_30", "Ricco_Shines"] },
{ name: "100 Coin Shine from Pinna Park", types: ["Pinna_100", "Pinna_Yoshi", "Pinna_Hoverless", "Pinna_Shines"] },
{ name: "4 Unique Boss Shines", types: ["XBoss_Shines", "Unique_Boss", "Bianco_Boss", "Pinna_Boss", "Ricco_Boss", "Wiggler", "Sirena_Early", "Noki_Boss"] }
];
bingoList[10] = [
{ name: "Pinna Park Episode 3 Hoverless", types: ["Pinna_Hoverless", "Pinna_Yoshi","Pinna_Shines"] },
{ name: "6 Shines from Ricco Harbor", types: ["Ricco_6", "Ricco_Late", "Ricco_Yoshi"] },
{ name: "50 Total Blue Coins", types: ["Ricco_Blues", "Pinna_Blues", "Bianco_Blues", "Pianta_Blues", "Noki_Blues", "Plaza_Blues", "Gelato_Blues", "Sirena_Blues", "XTotal_Blues", "Blue_30"] },
{ name: "5 Shines from Gelato Beach", types:  ["Gelato_5", "Wiggler", "Gelato_Early", "Gelato_Shines"] },
{ name: "7 Blue Coins from Enemies", types: ["Blue_Enemies", "XBoss_Shines", "M_Graffiti"] }
];
bingoList[11] = [
{ name: "Ride Yoshi in Pinna Park", types: ["Pinna_Yoshi", "Pinna_Hoverless", "Butterfly", "Pinna_Early", "Pinna_Shines"] },
{ name: "5 Boss Shines", types: ["XBoss_Shines", "Unique_Boss", "Bianco_Boss", "Pinna_Boss", "Ricco_Boss", "Wiggler", "Sirena_Early", "Noki_Boss"] },
{ name: "4 Secret Shines", types: ["Secret_Shines", "Hidden_Shines", "Bianco_Hidden", "Pinna_Hidden"] },
{ name: "8 Shines in Delfino Plaza", types: ["Plaza_M", "Fruit_Ladies", "Plaza_Shines"] },
{ name: "5 Red Coin Shines", types: ["Red_Shines", "Hidden_Shines", "Plaza_Shines"] }
];
bingoList[12] = [
{ name: "20 Blue Coins from M Graffiti", types: ["M_Graffiti", "Plaza_M", "Ricco_M"] },
{ name: "9 Shines in Delfino Plaza", types: ["Plaza_M", "Fruit_Ladies", "Plaza_Shines"] },
{ name: "5 Hidden Shines", types: ["Hidden_Shines", "Ricco_Hidden", "Bianco_Hidden", "Pianta_Hidden", "Gelato_Hidden", "Sirena_Hidden", "Pinna_Hidden", "Noki_Hidden", "Secret_Shines"] },
{ name: "55 Total Blue Coins", types: ["XTotal_Blues", "Blue_30"] },
{ name: "Collect 2 Hidden Shines in Ricco Harbor", types: ["Ricco_Hidden", "Ricco_Early"] },
{ name: "Runaway Ferris Wheel from the back Hoverless", types: ["Pinna_Hoverless", "Pinna_Early", "Butterfly", "Pinna_Shines"] }
];
bingoList[13] = [
{ name: "2 Piantissimo Races", types: ["Paint_Race", "Wiggler", "Rocket_Nozzle"] },
{ name: "25 Blue Coins from Pinna Park", types: ["Pinna_Blues", "Fast_20", "Pinna_Late", "Pinna_30", "Pinna_Yoshi", "Butterfly", "Pinna_Shines"] },
{ name: "10 Blue Coins from Sirena Beach", types: ["Sirena_Blues", "Sirena_Early"] },
{ name: "Defeat Shadow Mario in Bianco Hills", types: ["Bianco_Shadow", "Shadow_Mario", "Bianco_Late", "Bianco_Shines"] },
{ name: "Defeat Shadow Mario in Ricco Harbor", types: ["Ricco_Shadow", "Shadow_Mario", "Ricco_Late", "Ricco_Shines"] },
{ name: "6 Red Coin Shines", types: ["Red_Shines", "Hidden_Shines"] },
{ name: "25 Lives", types: ["X_Lives"] }
];
bingoList[14] = [
{ name: "25 Blue Coins from Gelato Beach", types: ["Gelato_Blues", "Blue_Enemies", "Wiggler", "Gelato_30", "Gelato_Yoshi", "Paint_Race", "Gelato_Early", "Gelato_Shines"] },
{ name: "Collect 1 Hidden Shine in Pianta Village", types: ["Pianta_Hidden", "X_Lives", "Pianta_Shines"] },
{ name: "Collect 1 Hidden Shine in Sirena Beach", types: ["Sirena_Hidden", "Sirena_Early"] },
{ name: "Collect 2 Hidden Shines in Bianco Hills", types: ["Bianco_Hidden", "Bianco_Late", "Turbo_Nozzle", "Bianco_Yoshi", "Bianco_Shines"] },
{ name: "60 Total Blue Coins", types: ["XTotal_Blues", "Blue_30"] },
{ name: "Bianco Hills Episode 8 Shine", types: ["Bianco_Shadow", "Bianco_Late", "Bianco_Yoshi", "Turbo_Nozzle", "Bianco_Shines"] }
];
bingoList[15] = [
{ name: "30 Lives", types: ["X_Lives"] },
{ name: "20 Blue Coins from Pianta Village", types: ["Pianta_Blues", "Pianta_Late", "Butterfly", "Pianta_Yoshi", "Pianta_30", "Pianta_Shines"] },
{ name: "10 Shines from Delfino Plaza", types: ["Plaza_M", "Fruit_Ladies", "Plaza_Shines"] },
{ name: "8 Linked Blue Coin Pairs", types: ["Linked_Blues"] },
{ name: "6 Shines from Pinna Park", types: ["Pinna_Boss", "Linked_Blues", "Pinna_Yoshi", "Butterfly", "Pinna_6", "Pinna_Hoverless", "Pinna_Shines"] },
{ name: "10 Blue Coins in Noki Bay", types: ["Noki_Blues", "Noki_Early"] },
{ name: "3 Rocket Nozzle Unlocks", types: ["Rocket_Nozzle", "Ricco_Rocket", "Bianco_Rocket", "Gelato_Rocket", "Noki_Rocket"] }
];
bingoList[16] = [
{ name: "5 Secret Shines", types: ["Secret_Shines", "Hidden_Shines", "Bianco_Hidden", "Sirena_Hidden", "Pinna_Hidden", "Pinna_5"] },
{ name: "65 Total Blue Coins", types: ["XTotal_Blues"] },
{ name: "6 Boss Shines", types: ["XBoss_Shines", "Unique_Boss", "Bianco_Boss", "Pinna_Boss", "Ricco_Boss", "Wiggler", "Sirena_Early", "Noki_Boss"] },
{ name: "6 Shines from Pianta Village", types: ["Pianta_Late", "Pianta_8", "X_Lives", "Pianta_6", "Pianta_Shines"] },
{ name: "Lily Pad Shine", types: ["Plaza_Shines"] },
{ name: "Both Bell Shines", types: ["Plaza_Shines"] },
{ name: "35 Lives", types: ["X_Lives"] },
{ name: "Defeat Shadow Mario in Pianta Village", types: ["Pianta_Late", "Pianta_Shadow", "Shadow_Mario", "Pianta_8", "X_Lives", "Pianta_Yoshi", "Pianta_6"] }
];
bingoList[17] = [
{ name: "5 Unique Boss Shines", types: ["XBoss_Shines", "Unique_Boss", "Bianco_Boss", "Pinna_Boss", "Ricco_Boss", "Wiggler", "Sirena_Early", "Noki_Boss"] },
{ name: "Defeat both Cannon Moles", types: ["Noki_Early", "Pinna_Shines"] },
{ name: "Defeat Shadow Mario in Gelato Beach", types: ["Gelato_Late", "Gelato_5", "Gelato_Shadow"] },
{ name: "40 Lives", types: ["X_Lives"] },
{ name: "Ride Yoshi in Bianco Hills", types: ["Bianco_Yoshi", "Bianco_8"] },
{ name: "Sirena 3 NO Clipping", types: ["Sirena_Late", "Pinna_Yoshi"] }
];
bingoList[18] = [
{ name: "6 Hidden Shines", types: ["Hidden_Shines", "Ricco_Hidden", "Bianco_Hidden", "Gelato_Hidden", "Sirena_Hidden", "Pinna_Hidden", "Noki_Hidden", "Pianta_Hidden", "Secret_Shines"] },
{ name: "7 Blue Bird Blue Coins", types: ["Linked_Blues", "Blue_Bird", "Butterfly"] },
{ name: "20 Blue Coins from Noki Bay", types: ["Noki_Blues", "Noki_Early", "Noki_20"] },
{ name: "70 Total Blue Coins", types: ["XTotal_Blues"] },
{ name: "2 Turbo Nozzle Unlocks", types: ["Gelato_Turbo", "Turbo_Nozzle", "Bianco_Turbo", "Ricco_Turbo"] },
{ name: "Gelato Beach Episode 8 Shine", types: ["Gelato_8", "Gelato_Shadow", "Gelato_5", "Gelato_Shines"] },
{ name: "Defeat Shadow Mario in Pinna Park", types: ["Pinna_Shadow", "Shadow_Mario", "Pinna_6", "Pinna_Shines"] }
];
bingoList[19] = [
{ name: "2 Shines from 5 Levels", types: ["Mix_Up"] },
{ name: "20 Blue Coins in Sirena", types: ["Sirena_Early","Sirena_Blues"] },
{ name: "5 Shines from 3 Levels", types: ["Mix_Up"] },
{ name: "Ride Yoshi in Gelato Beach", types: ["Gelato_5", "Gelato_Shines"] },
{ name: "Defeat Boss of Tricky Ruins (Noki 2)", types: ["Noki_Early"] },
{ name: "2 Shadow Marios", types: ["Shadow_Mario", "Bianco_Shadow", "Gelato_Shadow", "Ricco_Shadow", "Pianta_Shadow"] },
{ name: "4 Blue Coins from Butterflys", types: ["Butterfly"] }
];
bingoList[20] = [
{ name: "3 100 Coin Shines", types: ["Pianta_100", "X100_Coins", "Bianco_100", "Ricco_100", "Gelato_100", "Pinna_100", "Sirena_100", "Noki_100"] },
{ name: "1 Shine from each level", types: ["Mix_Up"] },
{ name: "25 Blue Coins from Pianta Village", types: ["Pianta_Blues", "Pianta_30", "Pianta_Shines"] },
{ name: "75 Total Blue coins", types: ["XTotal_Blues"] },
{ name: "Pianta Village Episode 8 Shine", types: ["Pianta_8", "Pianta_Shadow", "Pianta_6", "Pianta_Shines"] },
{ name: "4 Shines from 4 Levels", types: ["Mix_Up"] },
{ name: "6 Secret Shines", types: ["Secret_Shines", "Hidden_Shines", "Bianco_Hidden", "Sirena_Hidden", "Pinna_Hidden"] }
];
bingoList[21] = [
{ name: "80 Total Blue Coins", types: ["XTotal_Blues", "Fast_20"] },
{ name: "9 Blue Coins from Enemies", types: ["Blue_Enemies", "Ricco_Blues", "Gelato_Yoshi"] },
{ name: "9 Shines from any Level (not plaza)", types: ["Ricco_8", "Sirena_8", "Bianco_8", "Gelato_8", "Pinna_8", "Pianta_8", "Red_Shines", "9_S"] },
{ name: "All 30 blue coins from any level", types: ["Ricco_30", "Bianco_30", "Pinna_30", "Gelato_30", "Sirena_30", "Pianta_30", "Blue_30"] },
{ name: "7 Red Coin Shines", types: ["Red_Shines", "Hidden_Shines"] },
{ name: "11 Shines from Delfino Plaza", types: ["Plaza_Shines"] },
{ name: "Collect 2 Hidden Shines in Pinna Park", types: ["Pinna_Hidden", "Pinna_Late", "Pinna_Shines"] }
];
bingoList[22] = [
{ name: "7 Hidden Shines", types: ["Hidden_Shines", "Ricco_Hidden", "Bianco_Hidden", "Pianta_Hidden", "Gelato_Hidden", "Sirena_Hidden", "Pinna_Hidden", "Noki_Hidden", "Secret_Shines"] },
{ name: "5 Shines from Sirena Beach", types: ["Sirena_5", "Sirena_Late", "Sirena_8"] },
{ name: "10 Shines from any Level (not plaza)", types: ["Ricco_8", "Sirena_8", "Bianco_8", "Gelato_8", "Pinna_8", "Pianta_8", "Red_Shines", "9_S"] },
{ name: "Episode 8 of Ricco Harbor", types: ["Ricco_8", "Ricco_Late", "Ricco_Yoshi", "Ricco_Shines"] },
{ name: "Collect 2 Hidden Shines in Pianta Village", types: ["Pianta_Late", "Pianta_Hidden", "Pianta_8", "Pianta_Shines", "9_S"] }
];
bingoList[23] = [
{ name: "Episode 8 of Pinna Park", types: ["Pinna_8", "Pinna_Late", "Pinna_Shines"] },
{ name: "4 Shines from Noki Bay", types: ["Noki_Late", "Noki_Early"] },
{ name: "Collect 2 Hidden Shines in Sirena Beach", types: ["Sirena_Hidden", "Sirena_Late"] },
{ name: "Ride Yoshi in Pianta Village", types: ["Pianta_6", "Pianta_Yoshi", "Butterfly"] },
{ name: "25 Shines", types: ["Total_Shines", "Plaza_Shines"] }
];
bingoList[24] = [
{ name: "Defeat Shadow Mario in Sirena Beach", types: ["Shadow_Mario", "Sirena_Shadow", "Sirena_Late"] },
{ name: "Defeat the Eel of Noki Bay", types: ["Noki_Late", "Noki_Boss"] },
{ name: "100 Coin Shine from Noki Bay", types: ["Noki_Late", "Noki_Boss", "Noki_100", "Noki_20"] },
{ name: "4 100 Coin Shines", types: ["X100_Coins", "Bianco_100", "Ricco_100", "Gelato_100", "Pinna_100", "Sirena_100", "Noki_100", "Pianta_100"] },
{ name: "8 Red Coin Shines", types: ["Red_Shines", "Hidden_Shines"] }
];
bingoList[25] = [
{ name: "28 Shines", types: ["Total_Shines", "Plaza_Shines"] },
{ name: "Beat Piantissimo in Noki Bay Episode 5", types: ["Noki_Late", "Paint_Race"] },
{ name: "6 Unique Boss Shines", types: ["XBoss_Shines", "Unique_Boss", "Bianco_Boss", "Pinna_Boss", "Ricco_Boss", "Wiggler", "Sirena_Early", "Noki_Boss"] },
{ name: "Sirena Beach Episode 8 Shine", types: ["Sirena_8", "Sirena_Late"] },
{ name: "25 Blue Coins from Noki Bay", types: ["Noki_Late", "Noki_Blues", "Noki_30"] },
{ name: "3 Shadow Marios", types: ["Shadow_Mario"] }
];
