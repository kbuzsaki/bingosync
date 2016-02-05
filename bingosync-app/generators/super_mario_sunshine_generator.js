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
{ name: "10 Blue Coins from Delfino Plaza", jp: "ドルピックタウンの青コイン10枚", types: ["Plaza_Blues", "Plaza_M", "Fruit_Ladies", "Gelato_Shines"] },
{ name: "15 Blue Coins from Pianta Village", jp: "モンテのむらの青コイン15枚", types: ["Pianta_Blues", "Goopy_Inferno", "Pianta_30", "Pianta_Shines"] },
{ name: "3 Fruit Lady Blue Coins", jp: "アルバイトの青コイン3枚", types: ["Fruit_Ladies"] },
{ name: "15 Blue Coins from Ricco Harbor", jp: "リコハーバーの青コイン15枚", types: ["Ricco_Blues", "Ricco_M", "Fast_20", "Ricco_30", "Ricco_Shines"] }
];
bingoList[2] = [
{ name: "Collect Ricco 3 Shine from the top", jp: "リコ3のシャインを籠の上から入って取得", types: ["Ricco_Top", "Ricco_Early", "Ricco_20", "Ricco_Rocket", "Ricco_Shines"] },
{ name: "5 Linked Blue Coin Pairs", jp: "双子ラクガキの青コイン5ペア", types: ["Linked_Blues"] },
{ name: "Defeat all Cataquacks in a single episode of Gelato Beach", jp: "マンマビーチの1つのストーリーにいるポイハナを全て倒す", types: ["Gelato_Quacks", "Gelato_Early", "Wiggler", "Gelato_Shines"] },
{ name: "3 Red Coin Shines", jp: "赤コインのシャイン3枚", types: ["Red_Shines", "Plaza_Shines", "Hidden_Shines"] },
{ name: "15 Blue Coins from Bianco Hills", jp: "ビアンコヒルズの青コイン15枚", types: ["Bianco_Blues", "Bianco_Early", "Bianco_30"] },
{ name: "Red Coins of Windmill Village (Bianco 4) Entirely Fluddless", jp: "ビアンコ4ポンプ禁止", types: ["Bianco_20", "Bianco_Early", "Bianco_Shines"] }
];
bingoList[3] = [
{ name: "10 Blue Coins from Pinna Park", jp: "ピンナパークの青コイン10枚", types: ["Pinna_Blues", "Pinna_Early", "Fast_20", "Pinna_Boss", "Pinna_30", "Pinna_Shines"] },
{ name: "30 Total Blue Coins", jp: "青コイン合計30枚", types: ["Ricco_Blues", "Pinna_Blues", "Bianco_Blues", "Pianta_Blues", "Noki_Blues", "Plaza_Blues", "Gelato_Blues", "Sirena_Blues", "XTotal_Blues", "Blue_30"] },
{ name: "Complete Episode 2 of Ricco Harbor Entirely Blooperless", jp: "リコ2をイカ乗らずにクリア", types: ["Ricco_Top", "Ricco_Hidden", "Ricco_Early", "Ricco_Rocket", "Ricco_Shines"] },
{ name: "Collect 2 Hidden Shines in Gelato Beach", jp: "マンマビーチの隠しシャイン2枚", types: ["Gelato_Early", "Gelato_Hidden", "Gelato_Quacks", "Gelato_Shines", "9_S"] },
{ name: "Collect 1 Hidden Shine in Bianco Hills", jp: "ビアンコヒルズの隠しシャイン1枚", types: ["Bianco_Early", "Bianco_Hidden", "Bianco_Shines"] }
];
bingoList[4] = [
{ name: "4 Fruit Lady Blue Coins", jp: "アルバイトの青コイン4枚", types: ["Fruit_Ladies"] },
{ name: "15 Blue Coins from Gelato Beach", jp: "マンマビーチの青コイン15枚", types: ["Gelato_Blues", "Fast_20", "Gelato_Quacks", "Gelato_30", "Gelato_Shines"] },
{ name: "Goopy Inferno (Pianta 3) NO damage taken", jp: "モンテ3をノーダメージでクリア", types: ["Goopy_Inferno", "Paint_Race", "Pianta_Shines"] },
{ name: "20 Blue Coins from Ricco Harbor", jp: "リコハーバーの青コイン20枚", types: ["Ricco_Blues", "Ricco_M", "Fast_20", "Ricco_Early", "Ricco_30", "Ricco_Shines"] },
{ name: "4 Shines from Bianco Hills", jp: "ビアンコヒルズのシャイン4枚", types: ["Bianco_Rocket", "Bianco_Boss", "Bianco_Secret", "Bianco_Hidden", "Bianco_Early", "Bianco_Late", "Bianco_Blues", "Bianco_Shines"] },
{ name: "Collect 1 Hidden Shine in Ricco Harbor", jp: "リコハーバーの隠しシャイン1枚", types: ["Ricco_Top", "Ricco_Hidden", "Ricco_Early", "Ricco_Rocket", "Ricco_Shines"] }
];
bingoList[5] = [
{ name: "20 Blue Coins from Gelato Beach", jp: "マンマビーチの青コイン20枚", types: ["Gelato_20", "Gelato_Early", "Gelato_Blues", "Gelato_100s", "Wiggler", "Fast_20", "Gelato_30", "Gelato_Shines"] },
{ name: "35 Total Blue Coins", jp: "青コイン合計35枚", types: ["Ricco_Blues", "Pinna_Blues", "Bianco_Blues", "Pianta_Blues", "Noki_Blues", "Plaza_Blues", "Gelato_Blues", "Sirena_Blues", "XTotal_Blues", "Blue_30"] },
{ name: "Defeat Petey Strikes Back (Bianco 5)", jp: "ボスパックン撃破（ビアンコ5）", types: ["Bianco_Boss", "Bianco_Early", "Unique_Boss", "XBoss_Shines", "Bianco_Shines"] },
{ name: "100 Coin Shine from Sirena Beach", jp: "シレナビーチの100枚コイ���", types: ["Sirena_100s", "X100_Coins", "Sirena_Early"] },
{ name: "15 Blue Coins from Delfino Plaza", jp: "ドルピックタウンの青コイン15枚", types: ["XBlue_Coins", "Ricco_Blues", "Gelato_Blues", "Bianco_Blues", "Pinna_Blues", "Pianta_Blues", "Sirena_Blues", "Noki_Blues", "Plaza_Shines"] },
{ name: "100 Coin Shine from Ricco Harbor", jp: "リコハーバーの100枚コイン", types: ["Ricco_100s", "Ricco_Early", "Ricco_Top", "Ricco_Rocket", "Ricco_Shines"] }
];
bingoList[6] = [
{ name: "6 Blue Bird Blue Coins", jp: "青い鳥の青コイン6枚", types: ["Blue_Bird", "Gelato_Hidden"] },
{ name: "100 Coin Shine from Bianco Hills", jp: "ビアンコヒルズの100枚コイン", types: ["Bianco_100s", "Bianco_Early", "Bianco_Shines"] },
{ name: "15 Blue Coins from M Graffiti", jp: "M字から青コイン15枚", types: ["M_Graffiti", "Plaza_M", "Ricco_M"] },
{ name: "Defeat Wiggler", jp: "ボスハナチャン撃破（マンマ3）", types: ["Wiggler", "Gelato_Early"] },
{ name: "15 Blue Coins from Pinna Park", jp: "ピンナパークの青コイン15枚", types: ["Pinna_Blues", "Fast_20", "Pinna_Early", "Pinna_30", "Pinna_Shines"] },
{ name: "5 Blue Coins from Enemies", jp: "敵から青コイン5枚", types: ["Blue_Enemies", "Ricco_Top", "Ricco_Blues", "Ricco_Early", "XBoss_Shines", "M_Graffiti"] }
];
bingoList[7] = [
{ name: "4 Red Coin Shines", jp: "赤コインのシャイン4枚", types: ["Red_Shines", "Plaza_Shines", "Hidden_Shines", "Bianco_Early", "Bianco_8"] },
{ name: "Collect 1 Hidden Shine in Pinna Park", jp: "ピンナパークの隠しシャイン1枚", types: ["Pinna_Early", "Pinna_Hidden", "Pinna_Yoshi", "Pinna_Shines"] },
{ name: "Collect 1 Hidden Shine in Noki Bay", jp: "マーレのいりえの隠しシャイン1枚", types: ["Noki_Early", "Noki_Hidden", "Noki_Rocket"] },
{ name: "Collect a 100 Coin Shine from a Secret Level", jp: "ヒミツ内部で100枚コインのシャイン取得", types: ["Secret_100"] },
{ name: "4 Boss Shines", jp: "ボス4体撃破", types: ["XBoss_Shines", "Unique_Boss", "Bianco_Boss", "Pinna_Boss", "Ricco_Boss", "Wiggler", "Sirena_Early", "Noki_Boss"] },
{ name: "40 Total Blue Coins", jp: "青コイン合計40枚", types: ["Ricco_Blues", "Pinna_Blues", "Bianco_Blues", "Pianta_Blues", "Noki_Blues", "Plaza_Blues", "Gelato_Blues", "Sirena_Blues", "XTotal_Blues", "Blue_30"] }
];
bingoList[8] = [
{ name: "Collect both gold bird shines", jp: "金の鳥のシャインを2枚取得", types: ["Plaza_Shines", "Noki_Hidden", "Noki_Early"] },
{ name: "20 Blue Coins from Bianco Hills", jp: "ビアンコヒルズの青コイン20枚", types: ["Bianco_20", "Bianco_30", "Bianco_Early", "Bianco_Blues", "Bianco_Shines"] },
{ name: "2 Rocket Nozzle Unlocks", jp: "ロケットノズル2つ解放", types: ["Rocket_Nozzle", "Bianco_Rocket", "Ricco_Rocket", "Gelato_Rocket", "Noki_Rocket", "Pianta_Rocket", "Plaza_Rocket"] },
{ name: "Defeat Gooper Blooper Returns (Ricco 5)", jp: "ボスゲッソー撃破（リコ5）", types: ["Ricco_Top", "Ricco_Early", "Ricco_6", "Ricco_100", "Ricco_Shines"] },
{ name: "4 Hidden Shines", jp: "隠しシャイン4枚", types: ["Hidden_Shines", "Ricco_Hidden", "Bianco_Hidden", "Pianta_Hidden", "Gelato_Hidden", "Sirena_Hidden", "Pinna_Hidden", "Noki_Hidden", "Secret_Shines"] },
{ name: "20 Blue Coins from Pinna Park", jp: "ピンナパークの青コイン20枚", types: ["Pinna_Blues", "Fast_20", "Pinna_Early", "Pinna_30", "Pinna_Shines"] },
{ name: "45 Total Blue Coins", jp: "青コイン合計45枚", types: ["Ricco_Blues", "Pinna_Blues", "Bianco_Blues", "Pianta_Blues", "Noki_Blues", "Plaza_Blues", "Gelato_Blues", "Sirena_Blues", "XTotal_Blues", "Blue_30"] }
];
bingoList[9] = [
{ name: "100 Coin Shine from Gelato Beach", jp: "マンマビーチの100枚コイン", types: ["Gelato_100", "Gelato_Early", "Gelato_Shines"] },
{ name: "20 Lives", jp: "残機20", types: ["X_Lives"] },
{ name: "Collect the Sand Bird Shine", jp: "大砂鳥のシャインを取得", types: ["Wiggler", "Gelato_5", "Turbo_Nozzle", "Paint_Race", "Gelato_Shines"] },
{ name: "25 Blue Coins from Ricco Harbor", jp: "リコハーバーの青コイン25枚", types: ["Ricco_Blues", "Blue_Enemies", "Ricco_Early", "Ricco_30", "Ricco_Shines"] },
{ name: "100 Coin Shine from Pinna Park", jp: "ピンナパークの100枚コイン", types: ["Pinna_100", "Pinna_Yoshi", "Pinna_Hoverless", "Pinna_Shines"] },
{ name: "4 Unique Boss Shines", jp: "ボス4種類撃破", types: ["XBoss_Shines", "Unique_Boss", "Bianco_Boss", "Pinna_Boss", "Ricco_Boss", "Wiggler", "Sirena_Early", "Noki_Boss"] }
];
bingoList[10] = [
{ name: "Red Coins of the Pirate Ships (Pinna 3) Hoverless", jp: "ピンナ3ホバー禁止", types: ["Pinna_Hoverless", "Pinna_Yoshi","Pinna_Shines"] },
{ name: "6 Shines from Ricco Harbor", jp: "リコハーバーのシャイン6枚", types: ["Ricco_6", "Ricco_Late", "Ricco_Yoshi"] },
{ name: "50 Total Blue Coins", jp: "青コイン合計50枚", types: ["Ricco_Blues", "Pinna_Blues", "Bianco_Blues", "Pianta_Blues", "Noki_Blues", "Plaza_Blues", "Gelato_Blues", "Sirena_Blues", "XTotal_Blues", "Blue_30"] },
{ name: "5 Shines from Gelato Beach", jp: "マンマビーチのシャイン5枚", types:  ["Gelato_5", "Wiggler", "Gelato_Early", "Gelato_Shines"] },
{ name: "7 Blue Coins from Enemies", jp: "敵から青コイン7枚", types: ["Blue_Enemies", "XBoss_Shines", "M_Graffiti"] }
];
bingoList[11] = [
{ name: "Ride Yoshi in Pinna Park", jp: "ピンナパークのヨッシーに乗る", types: ["Pinna_Yoshi", "Pinna_Hoverless", "Butterfly", "Pinna_Early", "Pinna_Shines"] },
{ name: "5 Boss Shines", jp: "ボス5体撃破", types: ["XBoss_Shines", "Unique_Boss", "Bianco_Boss", "Pinna_Boss", "Ricco_Boss", "Wiggler", "Sirena_Early", "Noki_Boss"] },
{ name: "4 Secret Shines", jp: "ヒミツステージのシャイン4枚", types: ["Secret_Shines", "Hidden_Shines", "Bianco_Hidden", "Pinna_Hidden"] },
{ name: "8 Shines from Delfino Plaza", jp: "ドルピックタウンのシャイン8枚", types: ["Plaza_M", "Fruit_Ladies", "Plaza_Shines"] },
{ name: "5 Red Coin Shines", jp: "赤コインのシャイン5枚", types: ["Red_Shines", "Hidden_Shines", "Plaza_Shines"] }
];
bingoList[12] = [
{ name: "20 Blue Coins from M Graffiti", jp: "M字から青コイン20枚", types: ["M_Graffiti", "Plaza_M", "Ricco_M"] },
{ name: "9 Shines from Delfino Plaza", jp: "ドルピックタウンのシャイン9枚", types: ["Plaza_M", "Fruit_Ladies", "Plaza_Shines"] },
{ name: "5 Hidden Shines", jp: "隠しシャイン5枚", types: ["Hidden_Shines", "Ricco_Hidden", "Bianco_Hidden", "Pianta_Hidden", "Gelato_Hidden", "Sirena_Hidden", "Pinna_Hidden", "Noki_Hidden", "Secret_Shines"] },
{ name: "55 Total Blue Coins", jp: "青コイン合計55枚", types: ["XTotal_Blues", "Blue_30"] },
{ name: "Collect 2 Hidden Shines in Ricco Harbor", jp: "リコハーバーの隠しシャイン2枚", types: ["Ricco_Hidden", "Ricco_Early"] },
{ name: "Runaway Ferris Wheel (Pinna 5) from the back Hoverless", jp: "ピンナ5を裏側からホバー禁止でクリア", types: ["Pinna_Hoverless", "Pinna_Early", "Butterfly", "Pinna_Shines"] }
];
bingoList[13] = [
{ name: "2 Piantissimo Races", jp: "モンテマンレース2つ", types: ["Paint_Race", "Wiggler", "Rocket_Nozzle"] },
{ name: "25 Blue Coins from Pinna Park", jp: "ピンナパークの青コイン25枚", types: ["Pinna_Blues", "Fast_20", "Pinna_Late", "Pinna_30", "Pinna_Yoshi", "Butterfly", "Pinna_Shines"] },
{ name: "10 Blue Coins from Sirena Beach", jp: "シレナビーチの青コイン10枚", types: ["Sirena_Blues", "Sirena_Early"] },
{ name: "Defeat Shadow Mario in Bianco Hills", jp: "ビアンコヒルズのニセマリオ撃破", types: ["Bianco_Shadow", "Shadow_Mario", "Bianco_Late", "Bianco_Shines"] },
{ name: "Defeat Shadow Mario in Ricco Harbor", jp: "リコハーバーのニセマリオ撃破", types: ["Ricco_Shadow", "Shadow_Mario", "Ricco_Late", "Ricco_Shines"] },
{ name: "6 Red Coin Shines", jp: "赤コインのシャイン6枚", types: ["Red_Shines", "Hidden_Shines"] },
{ name: "25 Lives", jp: "残機25", types: ["X_Lives"] }
];
bingoList[14] = [
{ name: "25 Blue Coins from Gelato Beach", jp: "マンマビーチの青コイン25枚", types: ["Gelato_Blues", "Blue_Enemies", "Wiggler", "Gelato_30", "Gelato_Yoshi", "Paint_Race", "Gelato_Early", "Gelato_Shines"] },
{ name: "Collect 1 Hidden Shine in Pianta Village", jp: "モンテのむらの隠しシャイン1枚", types: ["Pianta_Hidden", "X_Lives", "Pianta_Shines"] },
{ name: "Collect 1 Hidden Shine in Sirena Beach", jp: "シレナビーチの隠しシャイン1枚", types: ["Sirena_Hidden", "Sirena_Early"] },
{ name: "Collect 2 Hidden Shines in Bianco Hills", jp: "ビアンコヒルズの隠しシャイン2枚", types: ["Bianco_Hidden", "Bianco_Late", "Turbo_Nozzle", "Bianco_Yoshi", "Bianco_Shines"] },
{ name: "60 Total Blue Coins", jp: "青コイン合計60枚", types: ["XTotal_Blues", "Blue_30"] },
{ name: "Bianco Hills Episode 8 Shine", jp: "ビアンコヒルズストーリー8", types: ["Bianco_Shadow", "Bianco_Late", "Bianco_Yoshi", "Turbo_Nozzle", "Bianco_Shines"] }
];
bingoList[15] = [
{ name: "30 Lives", jp: "残機30", types: ["X_Lives"] },
{ name: "20 Blue Coins from Pianta Village", jp: "モンテのむらの青コイン20枚", types: ["Pianta_Blues", "Pianta_Late", "Butterfly", "Pianta_Yoshi", "Pianta_30", "Pianta_Shines"] },
{ name: "10 Shines from Delfino Plaza", jp: "ドルピックタウンのシャイン10枚", types: ["Plaza_M", "Fruit_Ladies", "Plaza_Shines"] },
{ name: "8 Linked Blue Coin Pairs", jp: "双子ラクガキの青コイン8ペア", types: ["Linked_Blues"] },
{ name: "6 Shines from Pinna Park", jp: "ピンナパークのシャイン6枚", types: ["Pinna_Boss", "Linked_Blues", "Pinna_Yoshi", "Butterfly", "Pinna_6", "Pinna_Hoverless", "Pinna_Shines"] },
{ name: "10 Blue Coins from Noki Bay", jp: "マーレのいりえの青コイン10枚", types: ["Noki_Blues", "Noki_Early"] },
{ name: "3 Rocket Nozzle Unlocks", jp: "ロケットノズル3つ解放", types: ["Rocket_Nozzle", "Ricco_Rocket", "Bianco_Rocket", "Gelato_Rocket", "Noki_Rocket"] }
];
bingoList[16] = [
{ name: "5 Secret Shines", jp: "ヒミ���ステージのシャイン5枚", types: ["Secret_Shines", "Hidden_Shines", "Bianco_Hidden", "Sirena_Hidden", "Pinna_Hidden", "Pinna_5"] },
{ name: "65 Total Blue Coins", jp: "青コイン合計65枚", types: ["XTotal_Blues"] },
{ name: "6 Boss Shines", jp: "ボス6体撃破", types: ["XBoss_Shines", "Unique_Boss", "Bianco_Boss", "Pinna_Boss", "Ricco_Boss", "Wiggler", "Sirena_Early", "Noki_Boss"] },
{ name: "6 Shines from Pianta Village", jp: "モンテのむらのシャイン6枚", types: ["Pianta_Late", "Pianta_8", "X_Lives", "Pianta_6", "Pianta_Shines"] },
{ name: "Lily Pad Shine", jp: "急流下りのシャイン取得", types: ["Plaza_Shines"] },
{ name: "Both Bell Shines", jp: "ベルのシャインを2枚取得", types: ["Plaza_Shines"] },
{ name: "35 Lives", jp: "残機35", types: ["X_Lives"] },
{ name: "Defeat Shadow Mario in Pianta Village", jp: "モンテのむらのニセマリオ撃破", types: ["Pianta_Late", "Pianta_Shadow", "Shadow_Mario", "Pianta_8", "X_Lives", "Pianta_Yoshi", "Pianta_6"] }
];
bingoList[17] = [
{ name: "5 Unique Boss Shines", jp: "ボス5種類撃破", types: ["XBoss_Shines", "Unique_Boss", "Bianco_Boss", "Pinna_Boss", "Ricco_Boss", "Wiggler", "Sirena_Early", "Noki_Boss"] },
{ name: "Defeat both Cannon Moles", jp: "チョロプーを2匹とも倒す", types: ["Noki_Early", "Pinna_Shines"] },
{ name: "Defeat Shadow Mario in Gelato Beach", jp: "マンマビーチのニセマリオ撃破", types: ["Gelato_Late", "Gelato_5", "Gelato_Shadow"] },
{ name: "40 Lives", jp: "残機40", types: ["X_Lives"] },
{ name: "Ride Yoshi in Bianco Hills", jp: "ビアンコヒルズのヨッシーに乗る", types: ["Bianco_Yoshi", "Bianco_8"] },
{ name: "Sirena 3 NO Clipping", jp: "シレナ3すり抜けバグ禁止", types: ["Sirena_Late", "Pinna_Yoshi"] }
];
bingoList[18] = [
{ name: "6 Hidden Shines", jp: "隠しシャイン6枚", types: ["Hidden_Shines", "Ricco_Hidden", "Bianco_Hidden", "Gelato_Hidden", "Sirena_Hidden", "Pinna_Hidden", "Noki_Hidden", "Pianta_Hidden", "Secret_Shines"] },
{ name: "7 Blue Bird Blue Coins", jp: "青い鳥の青コイン7枚", types: ["Linked_Blues", "Blue_Bird", "Butterfly"] },
{ name: "20 Blue Coins from Noki Bay", jp: "マーレのいりえの青コイン20枚", types: ["Noki_Blues", "Noki_Early", "Noki_20"] },
{ name: "70 Total Blue Coins", jp: "青コイン合計70枚", types: ["XTotal_Blues"] },
{ name: "2 Turbo Nozzle Unlocks", jp: "ターボノズル2つ解放", types: ["Gelato_Turbo", "Turbo_Nozzle", "Bianco_Turbo", "Ricco_Turbo"] },
{ name: "Gelato Beach Episode 8 Shine", jp: "マンマビーチストーリー8", types: ["Gelato_8", "Gelato_Shadow", "Gelato_5", "Gelato_Shines"] },
{ name: "Defeat Shadow Mario in Pinna Park", jp: "ピンナパークのニセマリオ撃破", types: ["Pinna_Shadow", "Shadow_Mario", "Pinna_6", "Pinna_Shines"] }
];
bingoList[19] = [
{ name: "2 Shines from 5 Levels", jp: "5つのステージからシャイン2枚ずつ取得", types: ["Mix_Up"] },
{ name: "20 Blue Coins from Sirena Beach", jp: "シレナビーチの青コイン20枚", types: ["Sirena_Early","Sirena_Blues"] },
{ name: "5 Shines from 3 Levels", jp: "3つのステージからシャイン5枚ずつ取得", types: ["Mix_Up"] },
{ name: "Ride Yoshi in Gelato Beach", jp: "マンマビーチのヨッシーに乗る", types: ["Gelato_5", "Gelato_Shines"] },
{ name: "Defeat Boss of Tricky Ruins (Noki 2)", jp: "ボスゲッソー撃破（マーレ2）", types: ["Noki_Early"] },
{ name: "2 Shadow Marios", jp: "ニセマリオ2体撃破", types: ["Shadow_Mario", "Bianco_Shadow", "Gelato_Shadow", "Ricco_Shadow", "Pianta_Shadow"] },
{ name: "4 Blue Coins from Butterflies", jp: "蝶の青コイン4枚", types: ["Butterfly"] }
];
bingoList[20] = [
{ name: "Three 100 Coin Shines", jp: "100枚コインのシャイン3枚", types: ["Pianta_100", "X100_Coins", "Bianco_100", "Ricco_100", "Gelato_100", "Pinna_100", "Sirena_100", "Noki_100"] },
{ name: "1 Shine from each level", jp: "各ステージからシャインを1枚ずつ取得", types: ["Mix_Up"] },
{ name: "25 Blue Coins from Pianta Village", jp: "モンテのむらの青コイン25枚", types: ["Pianta_Blues", "Pianta_30", "Pianta_Shines"] },
{ name: "75 Total Blue coins", jp: "青コイン合計75枚", types: ["XTotal_Blues"] },
{ name: "Pianta Village Episode 8 Shine", jp: "モンテ���むらストーリー8", types: ["Pianta_8", "Pianta_Shadow", "Pianta_6", "Pianta_Shines"] },
{ name: "4 Shines from 4 Levels", jp: "4つのステージからシャイン4枚ずつ取得", types: ["Mix_Up"] },
{ name: "6 Secret Shines", jp: "ヒミツステージのシャイン6枚", types: ["Secret_Shines", "Hidden_Shines", "Bianco_Hidden", "Sirena_Hidden", "Pinna_Hidden"] }
];
bingoList[21] = [
{ name: "80 Total Blue Coins", jp: "青コイン合計80枚", types: ["XTotal_Blues", "Fast_20"] },
{ name: "9 Blue Coins from Enemies", jp: "敵から青コイン9枚", types: ["Blue_Enemies", "Ricco_Blues", "Gelato_Yoshi"] },
{ name: "9 Shines from a single level (not plaza)", jp: "任意の1ステージからシャイン9枚取得（ドルピックタウン以外）", types: ["Ricco_8", "Sirena_8", "Bianco_8", "Gelato_8", "Pinna_8", "Pianta_8", "Red_Shines", "9_S"] },
{ name: "All 30 blue coins from a single level", jp: "1ステージから青コイン30枚取得", types: ["Ricco_30", "Bianco_30", "Pinna_30", "Gelato_30", "Sirena_30", "Pianta_30", "Blue_30"] },
{ name: "7 Red Coin Shines", jp: "赤コインのシャイン7枚", types: ["Red_Shines", "Hidden_Shines"] },
{ name: "11 Shines from Delfino Plaza", jp: "ドルピックタウンのシャイン11枚", types: ["Plaza_Shines"] },
{ name: "Collect 2 Hidden Shines in Pinna Park", jp: "ピンナパークの隠しシャイン2枚", types: ["Pinna_Hidden", "Pinna_Late", "Pinna_Shines"] }
];
bingoList[22] = [
{ name: "7 Hidden Shines", jp: "隠しシャイン7枚", types: ["Hidden_Shines", "Ricco_Hidden", "Bianco_Hidden", "Pianta_Hidden", "Gelato_Hidden", "Sirena_Hidden", "Pinna_Hidden", "Noki_Hidden", "Secret_Shines"] },
{ name: "5 Shines from Sirena Beach", jp: "シレナビーチのシャイン5枚", types: ["Sirena_5", "Sirena_Late", "Sirena_8"] },
{ name: "10 Shines from a single level (not plaza)", jp: "任意の1ステージからシャイン10枚取得（ドルピックタウン以外）", types: ["Ricco_8", "Sirena_8", "Bianco_8", "Gelato_8", "Pinna_8", "Pianta_8", "Red_Shines", "9_S"] },
{ name: "Ricco Harbor Episode 8 Shine", jp: "リコハーバーストーリー8", types: ["Ricco_8", "Ricco_Late", "Ricco_Yoshi", "Ricco_Shines"] },
{ name: "Collect 2 Hidden Shines in Pianta Village", jp: "モンテのむらの隠しシャイン2枚", types: ["Pianta_Late", "Pianta_Hidden", "Pianta_8", "Pianta_Shines", "9_S"] }
];
bingoList[23] = [
{ name: "Pinna Park Episode 8 Shine", jp: "ピンナパークストーリー8", types: ["Pinna_8", "Pinna_Late", "Pinna_Shines"] },
{ name: "4 Shines from Noki Bay", jp: "マーレのいりえのシャイン4枚", types: ["Noki_Late", "Noki_Early"] },
{ name: "Collect 2 Hidden Shines in Sirena Beach", jp: "シレナビーチの隠しシャイン2枚", types: ["Sirena_Hidden", "Sirena_Late"] },
{ name: "Ride Yoshi in Pianta Village", jp: "モンテのむらのヨッシーに乗る", types: ["Pianta_6", "Pianta_Yoshi", "Butterfly"] },
{ name: "Collect 25 Shines", jp: "シャイン25枚", types: ["Total_Shines", "Plaza_Shines"] }
];
bingoList[24] = [
{ name: "Defeat Shadow Mario in Sirena Beach", jp: "シレナビーチのニセマリオ撃破", types: ["Shadow_Mario", "Sirena_Shadow", "Sirena_Late"] },
{ name: "Defeat the Eel of Noki Bay", jp: "ウナギ撃破（マーレ4）", types: ["Noki_Late", "Noki_Boss"] },
{ name: "100 Coin Shine from Noki Bay", jp: "マーレのいりえの100枚コイン", types: ["Noki_Late", "Noki_Boss", "Noki_100", "Noki_20"] },
{ name: "Four 100 Coin Shines", jp: "100枚コインのシャイン4枚", types: ["X100_Coins", "Bianco_100", "Ricco_100", "Gelato_100", "Pinna_100", "Sirena_100", "Noki_100", "Pianta_100"] },
{ name: "8 Red Coin Shines", jp: "赤コインのシャイン8枚", types: ["Red_Shines", "Hidden_Shines"] }
];
bingoList[25] = [
{ name: "Collect 28 Shines", jp: "シャイン28枚", types: ["Total_Shines", "Plaza_Shines"] },
{ name: "Beat Piantissimo in Noki Bay Episode 5", jp: "マーレのいりえのモンテマンに勝利", types: ["Noki_Late", "Paint_Race"] },
{ name: "6 Unique Boss Shines", jp: "ボス6種類撃破", types: ["XBoss_Shines", "Unique_Boss", "Bianco_Boss", "Pinna_Boss", "Ricco_Boss", "Wiggler", "Sirena_Early", "Noki_Boss"] },
{ name: "Sirena Beach Episode 8 Shine", jp: "シレナビーチストーリー8", types: ["Sirena_8", "Sirena_Late"] },
{ name: "25 Blue Coins from Noki Bay", jp: "マーレのいりえの青コイン25枚", types: ["Noki_Late", "Noki_Blues", "Noki_30"] },
{ name: "3 Shadow Marios", jp: "ニセマリオ3体撃破", types: ["Shadow_Mario"] }
];
