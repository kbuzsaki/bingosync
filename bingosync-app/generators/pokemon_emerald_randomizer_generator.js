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

/*
Update notes:
- "Evolve a Pokémon with a stone" has been removed until stones are purchasable with the speedchoice.
- "Nidoking or Nidoqueen" and "Shiftry or Ludicolo" have been changed to "Nidorino or Nidorina" and "Nuzleaf and Lombre" until stones are purchasable with the speedchoice.
- "Soot Sack" has been changed to "White Flute" and has been re-weighted appropriately.
- "7 different types of Berry" has been changed to "Kelpsy Berry".
- "3 Lv30+ Pokémon" has been changed to "5 different Lv30+ Pokémon".
- "Defeat 5 Ninja Boys" has been changed to " Defeat 8 Ninja Boys".
- "2 eggs" has been changed to "Hatch an egg".
- "Don't use more than one TM" has been removed.
- "Defeat a Lv40+ Pokémon" has been removed.
- "$50,000" has been removed.
- "Teach 8 moves via Move Tutor" has been added.
- "Complete Trainer Hill" has been added.
- "TM26 (Earthquake)" has been added.
- "TM45 (Attract)" has been added.
- "Complete 3 Battle Tents" has been added.
- "Defeat Gabby & Ty 6 times" has been added.
- "Defeat 6 trainers on Route 113" has been added.
- "Defeat all 6 trainers on Route 125" has been changed to "Defeat all 8 trainers on Route 125".
- "Defeat all 7 trainers on Route 123" has been changed to "Defeat 9 trainers on Route 123".
- Various Pokémon goals have been adjusted.
- Various goals have had their weights adjusted.
*/

var bingoList = [];

bingoList[1] = [
 { name: "TM05 (Roar)", types: ["114", "tm"] },
 { name: "HM01 (Cut)", types: ["rustboro", "hm"] },
 { name: "TM45 (Attract)", types: ["verdanturf", "tm"] },
 { name: "Quick Claw", types: ["school"] }
];
bingoList[2] = [
 { name: "Coin Case", types: ["mail"] },
 { name: "7 different types of PokéBall", types: ["balls"] },
 { name: "TM36 (Sludge Bomb)", types: ["dewford", "tm"] },
 { name: "A Pokémon with 4 moves sharing its type(s)", types: ["move"] }
];
bingoList[3] = [
 { name: "Defeat a Legendary Pokémon", types: ["legendary"] },
 { name: "Rematch a trainer with Match Call", types: ["pokenav"] },
 { name: "A Pokémon with a status-related ability", types: ["ability"] },
 { name: "A Pokémon with a stat-related ability", types: ["ability"] }
];
bingoList[4] = [
 { name: "Sell a Rare Candy", types: ["candy"] },
 { name: "Defeat the Winstrate Family", types: ["trainer"] },
 { name: "Defeat 6 trainers on Route 113", types: ["trainer"] },
 { name: "A Pokémon with 4 non-TM non-damaging moves", types: ["move"] }
];
bingoList[5] = [
 { name: "Clefable, Wigglytuff, or Delcatty", types: ["stone"] },
 { name: "Raichu, Arcanine, or Ninetales", types: ["stone"] },
 { name: "Vileplume, Victreebel, or Exeggutor", types: ["stone"] },
 { name: "Poliwrath, Starmie, or Cloyster", types: ["stone"] }
];
bingoList[6] = [
 { name: "Beedrill, Butterfree, Dustox or Beautifly", types: ["bugs"] },
 { name: "Nidorino or Nidorina", types: ["nido"] },
 { name: "Lombre or Nuzleaf", types: ["leaves"] },
 { name: "A Pokémon with a weather-related ability", types: ["ability"] }
];
bingoList[7] = [
 { name: "Hatch an egg", types: ["egg"] },
 { name: "Defeat both Pokémon Breeders on Route 117", types: ["trainer"] },
 { name: "Defeat all 5 Triathletes on Cycling Road", types: ["trainer"] },
 { name: "$0 on hand", types: ["money"] }
];
bingoList[8] = [
 { name: "Wobbuffet, Flaaffy, or Furret", types: ["15"] },
 { name: "Ivysaur, Bayleef, or Grovyle", types: ["starters"] },
 { name: "Wartortle, Croconaw, or Marshtomp", types: ["starters"] },
 { name: "Charmeleon, Quilava, or Combusken", types: ["starters"] }
];
bingoList[9] = [
 { name: "Kelpsy Berry", types: ["berry"] },
 { name: "Release starter before Lv11", types: ["release"] },
 { name: "TM19 (Giga Drain)", types: ["grass", "tm"] },
 { name: "Catch a Pokémon in the Safari Zone", types: ["lilycove"] }
];
bingoList[10] = [
 { name: "Mightyena, Linoone, or Raticate", types: ["18/20"] },
 { name: "Azumarill, Gyarados, or Quagsire", types: ["18/20"] },
 { name: "Kirlia, Loudred, or Kadabra", types: ["20/16"] },
 { name: "Masquerain, Ninjask, or Shedinja", types: ["22/20/18"] }
];
bingoList[11] = [
 { name: "Burn, Paralyze, or Poison Kecleon", types: ["status"] },
 { name: "Revive a fossil", types: ["fossil"] },
 { name: "Complete all 3 Battle Tents", types: ["trainer"] },
 { name: "Lileep, Anorith, Kabuto, or Omanyte", types: ["fossil"] }
];
bingoList[12] = [
 { name: "Evolve 4 different Pokémon", types: ["raise"] },
 { name: "Complete Trainer Hill", types: ["trainer"] },
 { name: "2 different baby Pokémon", types: ["baby"] },
 { name: "2 different Eevee evolutions", types: ["eevee"] }
];
bingoList[13] = [
 { name: "TM27 (Return)", types: ["tm"] },
 { name: "White Flute", types: ["113"] },
 { name: "Exp. Share", types: ["rustboro"] },
 { name: "TM44 (Rest)", types: ["lilycove"] }
];
bingoList[14] = [
 { name: "Manectric, Houndoom, or Grumpig", types: ["trio"] },
 { name: "Swellow, Pelipper, or Pidgeotto", types: ["trio"] },
 { name: "Breloom, Hariyama, or Vigoroth", types: ["trio"] },
 { name: "Slugma, Numel, or Torkoal", types: ["trio"] },
 { name: "Barboach, Corphish, or Luvdisc", types: ["trio"] }
];
bingoList[15] = [
 { name: "Trade a Pokémon", types: ["trade"] },
 { name: "Don't use Repels", types: ["instant"] },
 { name: "TM10 (Hidden Power)", types: ["tm", "fortree"] },
 { name: "HM08 (Dive)", types: ["mossdeep", "hm"] }
];
bingoList[16] = [
 { name: "Pikachu, Plusle, or Minun", types: ["trio"] },
 { name: "Swablu, Zangoose, or Seviper", types: ["trio"] },
 { name: "Roselia, Volbeat, or Illumise", types: ["trio"] },
 { name: "Flygon, Claydol, or Cacturne", types: ["trio"] },
 { name: "Skarmory, Spinda, or Sandshrew", types: ["trio"] }
];
bingoList[17] = [
 { name: "Defeat 4 Kecleons", types: ["scope"] },
 { name: "20+ Pokémon owned", types: ["pkmn"] },
 { name: "All fishing rods", types: ["mossdeep"] },
 { name: "Defeat 8 Ninja Boys", types: ["trainer"] }
];
bingoList[18] = [
 { name: "Own 5 different Bug type Pokémon", types: ["pkmn"] },
 { name: "Own 6 different Flying type Pokémon", types: ["pkmn"] },
 { name: "Own 7 different Normal type Pokémon", types: ["pkmn"] },
 { name: "Own 8 different Water type Pokémon", types: ["pkmn"] }
];
bingoList[19] = [
 { name: "Nosepass, Sableye, or Mawile", types: ["trio"] },
 { name: "Glalie, Sharpedo, or Walrein", types: ["trio"] },
 { name: "Chimecho, Banette, or Dusclops", types: ["trio"] },
 { name: "Aggron, Salamence, or Metagross", types: ["trio"] },
 { name: "Regirock, Regice, or Registeel", types: ["trio"] }
];
bingoList[20] = [
 { name: "Catch a Pokémon on Mt. Pyre summit", types: ["pyre"] },
 { name: "Catch Deoxys at Birth Island", types: ["deoxys"] },
 { name: "Catch Latias or Latios at Southern Island", types: ["eon"] },
 { name: "Catch a Pokémon on Mirage Island", types: ["50"] }
];
bingoList[21] = [
 { name: "Defeat 10 Swimmers", types: ["water", "trainer"] },
 { name: "Complete 3 Trick House mazes", types: ["candy", "trainer"] },
 { name: "Defeat all 8 trainers on Route 125", types: ["trainer"] },
 { name: "Defeat 9 trainers on Route 123", types: ["trainer"] }
];
bingoList[22] = [
 { name: "90 Pokémon seen", types: ["pkmn"] },
 { name: "Teach 8 moves via Move Tutor", types: ["tutor"] },
 { name: "Stop the same Pokémon evolving 4 times", types: ["raise"] },
 { name: "Mental Herb", types: ["fortree"] }
];
bingoList[23] = [
 { name: "5 different Lv30+ Pokémon", types: ["30"] },
 { name: "Kyogre, Groudon, or Rayquaza", types: ["covers"] },
 { name: "TM24 (Thunderbolt)", types: ["mauville", "tm"] },
 { name: "Defeat Rival 4", types: ["lilycove"] }
];
bingoList[24] = [
 { name: "Feather Badge", types: ["feather"] },
 { name: "Mind Badge", types: ["mind"] },
 { name: "Defeat Gabby & Ty 6 times", types: ["trainer", "tv"] },
 { name: "30+ Pokémon owned", types: ["pkmn"] }
];
bingoList[25] = [
 { name: "7 badges", types: ["badges"] },
 { name: "TM26 (Earthquake)", types: ["tm", "seafloor"] },
 { name: "Participate in a Contest", types: ["contest"] }
];
