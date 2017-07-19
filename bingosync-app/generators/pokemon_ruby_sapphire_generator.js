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
{ name: "Poochyena", types: ["pkmn"] },
{ name: "TM05 (Roar)", types: ["tm"] },
{ name: "HM05 (Flash)", types: ["hm"] },
{ name: "Coin Case", types: ["item"] }
];
bingoList[2] = [
{ name: "Tentacool", types: ["pkmn"] },
{ name: "A Pokemon with a stat related ability", types: ["ability"] },
{ name: "Soot Sack", types: ["item"] },
{ name: "TM36 (Sludge Bomb)", types: ["tm"] }
];
bingoList[3] = [
{ name: "Slakoth", types: ["pkmn"] },
{ name: "7 Different Berries", types: ["multiitem"] },
{ name: "Numel", types: ["pkmn"] },
{ name: "Lava Cookie", types: ["item"] }
];
bingoList[4] = [
{ name: "10 pokemon owned", types: ["dex"] },
{ name: "Zangoose or Seviper", types: ["pkmnpair"] },
{ name: "6 different water type Pokemon", types: ["dex"] },
{ name: "A Pokemon with Double Kick or Mud Shot", types: ["starter"] }
];
bingoList[5] = [
{ name: "Plusle or Minun", types: ["pkmnpair"] },
{ name: "Defeat Winstrate Family", types: ["trainer"] },
{ name: "Participate in a Contest", types: ["contest"] },
{ name: "Mawile or Sableye", types: ["pkmnpair"] }
];
bingoList[6] = [
{ name: "10 TMs", types: ["tm"] },
{ name: "Ether", types: ["item"] },
{ name: "Magikarp", types: ["pkmn", "karp"] },
{ name: "Full Daycare", types: ["egg"] }
];
bingoList[7] = [
{ name: "A powder item", types: ["itempair"] },
{ name: "No money on hand", types: ["cash"] },
{ name: "Do not catch a Legendary Pokemon", types: ["instant"] },
{ name: "Trade with an NPC", types: ["trade"] }
];
bingoList[8] = [
{ name: "6 different flying type Pokemon", types: ["dex"] },
{ name: "Feed a Pokemon a Pokeblock", types: ["pokeblock"] },
{ name: "A Pokemon with a status related ability", types: ["ability"] },
{ name: "Volbeat or Illumise", types: ["pkmnpair"] }
];
bingoList[9] = [
{ name: "Defeat a Slugma", types: ["pkmn"] },
{ name: "A Pokemon with a weather related ability", types: ["ability"] },
{ name: "Defeat all 5 cyclists on Cycling Road", types: ["trainer"] },
{ name: "Complete a Trick House maze", types: ["trickmaster"] }
];
bingoList[10] = [
{ name: "Dustox or Beautifly", types: ["pkmnpair"] },
{ name: "Do not heal at any Pokemon Centers", types: ["heal", "instant"] },
{ name: "Sell a Rare Candy", types: ["item"] },
{ name: "Make a secret base", types: ["tm"] }
];
bingoList[11] = [
{ name: "Gloom", types: ["pkmn"] },
{ name: "A Pokemon with 4 moves with STAB", types: ["tm"] },
{ name: "Exp Share", types: ["item"] },
{ name: "TM44 (Rest)", types: ["tm"] }
];
bingoList[12] = [
{ name: "Pearl or Big Pearl", types: ["itempair"] },
{ name: "Spoink", types: ["pkmn"] },
{ name: "Hatch an egg", types: ["egg"] },
{ name: "Make a Pokémon relearn a move", types: ["item"] }
];
bingoList[13] = [
{ name: "Swablu", types: ["pkmn"] },
{ name: "Do not use any TMs", types: ["tm", "instant"] },
{ name: "Ninjask or Shedinja", types: ["pkmn"] },
{ name: "Three type-boosting items", types: ["multiitem"] }
];
bingoList[14] = [
{ name: "Golbat", types: ["pkmn"] },
{ name: "Solrock or Lunatone", types: ["pkmnpair"] },
{ name: "A Pokemon with 4 non-TM status moves", types: ["move"] },
{ name: "Pokemon with an evasion boosting move", types: ["move"] }
];
bingoList[15] = [
{ name: "7 different types of Poke Ball", types: ["multiitem"] },
{ name: "Barboach", types: ["pkmn"] },
{ name: "Evolve 5 different Pokémon", types: ["hm", "instant"] },
{ name: "A baby Pokemon", types: ["egg", "pkmn"] }
];
bingoList[16] = [
{ name: "20 Pokemon owned", types: ["dex"] },
{ name: "Stop starter evolving 6 times", types: ["starter"] },
{ name: "Lileep or Anorith", types: ["pkmnpair"] },
{ name: "Pelipper", types: ["pkmn"] }
];
bingoList[17] = [
{ name: "TM19 (Giga Drain)", types: ["tm"] },
{ name: "Use a stone to evolve a Pokemon", types: ["multiitem"] },
{ name: "Shuppet or Duskull", types: ["pkmn"]},
{ name: "50 pokemon seen", types: ["dex"] }
];
bingoList[18] = [
{ name: "Defeat 4 Kecleons", types: ["kecleon"] },
{ name: "Gyarados", types: ["pkmn", "karp"] },
{ name: "Defeat all 7 trainers on Route 123", types: ["trainer"] },
{ name: "Breloom", types: ["pkmn"] }
];
bingoList[19] = [
{ name: "Vulpix", types: ["pkmn"] },
{ name: "Defeat 10 Swimmers", types: ["trainer"] },
{ name: "Catch something from Safari Zone", types: ["safari"] },
{ name: "5 Valuable Items", types: ["multiitem"] }
];
bingoList[20] = [
{ name: "Burn a Kecleon", types: ["move"] },
{ name: "20 TMs", types: ["item"] },
{ name: "HM02 (Fly)", types: ["hm"] },
{ name: "Sea or Lax Incense", types: ["item"] }
];
bingoList[21] = [
{ name: "Featherbadge", types: ["badge"] },
{ name: "Magneton", types: ["pkmn"] },
{ name: "$50,000", types: ["cash"] },
{ name: "Put a Pokeblock into a Safari Zone Container", types: ["pokeblock"] }
];
bingoList[22] = [
{ name: "Two different non-key exchangeable items", types: ["multiitem"] },
{ name: "A Trade Evolution Item", types: ["multiitem"] },
{ name: "Wobbuffet", types: ["pkmn"] },
{ name: "3 different level 30 Pokemon", types: ["dex"] }
];
bingoList[23] = [
{ name: "TM21 (Frustration) or TM27 (Return)", types: ["tm"] },
{ name: "All rods", types: ["rods"] },
{ name: "Defeat 5 Ninja Boys", types: ["trainer"] },
{ name: "HM08 (Dive)", types: ["hm"] }
];
bingoList[24] = [
{ name: "Seadra", types: ["pkmn"] },
{ name: "Grovyle", types: ["starter", "pkmn"] },
{ name: "TM04 (Calm Mind)", types: ["tm"] },
{ name: "Relicanth or Wailord", types: ["pkmnpair"] }
];
bingoList[25] = [
{ name: "Defeat all 6 Trainers on Route 125", types: ["trainer"] },
{ name: "Catch a Dragon-type Pokemon", types: ["pkmn"] },
{ name: "All badges", types: ["badge"] },
{ name: "Heracross or Pinsir", types: ["pkmnpair"] }
];
