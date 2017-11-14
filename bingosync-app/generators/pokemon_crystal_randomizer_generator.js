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
 { name: "Map Card", types: ["map"] },
 { name: "Beedrill or Butterfree", types: ["bugs"] },
 { name: "Itemfinder", types: ["item"] },
 { name: "Radio Card", types: ["radio"] },
 { name: "Charcoal", types: ["coal"] }
];
bingoList[2] = [
 { name: "Call a Bug Catcher", types: ["call"] },
 { name: "Nidoking or Nidoqueen", types: ["nido"] },
 { name: "4 different types of Poké Ball", types: ["ball"] },
 { name: "Give a Pokémon a haircut", types: ["snip"] },
 { name: "Encounter a Legendary Pokémon", types: ["free"] }
];
bingoList[3] = [
 { name: "Win Bug Catching Contest", types: ["place"] },
 { name: "Clefable or Wigglytuff", types: ["stone"] },
 { name: "Arcanine or Ninetales", types: ["stone"] },
 { name: "Sunflora or Exeggutor", types: ["stone"] },
 { name: "Starmie or Cloyster", types: ["stone"] }
];
bingoList[4] = [
 { name: "Hatch an egg", types: ["egg"] },
 { name: "TM11 (Sunny Day)", types: ["rocket"] },
 { name: "Slowpoketail", types: ["money"] },
 { name: "10+ Pokémon owned", types: ["pkmn"] },
 { name: "Release starter before Lv11", types: ["starter"] }
];
bingoList[5] = [
 { name: "A Pokémon with 4 STAB moves", types: ["stab"] },
 { name: "Bayleef, Quilava, or Croconaw", types: ["starters"] },
 { name: "Ivysaur, Charmeleon, or Wartortle", types: ["starters"] },
 { name: "Defeat all 4 trainers in National Park", types: ["park"] },
 { name: "HM05 (Flash)", types: ["flash"] }
];
bingoList[6] = [
 { name: "Flaaffy or Skiploom", types: ["15"] },
 { name: "Granbull or Furret", types: ["15"] },
 { name: "Corsola, Octillery, or Lanturn", types: ["ocean"] },
 { name: "TM05 (Roar)", types: ["violet"] },
 { name: "TM50 (Nightmare)", types: ["violet"] }
];
bingoList[7] = [
 { name: "Buy a Game Corner Pokémon", types: ["coins"] },
 { name: "TM10 (Hidden Power)", types: ["lake"] },
 { name: "Azumarill or Quagsire", types: ["20"] },
 { name: "Raticate or Fearow", types: ["20"] },
 { name: "Ariados or Ledian", types: ["20"] }
];
bingoList[8] = [
 { name: "3 eggs", types: ["egg"] },
 { name: "Weepinbell or Gloom", types: ["8"] },
 { name: "Sandslash or Arbok", types: ["8"] },
 { name: "Complete 2 Ruins of Alph puzzles", types: ["unown"] },
 { name: "Everstone", types: ["place"] }
];
bingoList[9] = [
 { name: "Graveler or Haunter", types: ["link"] },
 { name: "Kadabra or Machoke", types: ["link"] },
 { name: "Defeat a Ponyta or Rapidash", types: ["pony"] },
 { name: "Status Sudowoodo", types: ["tree"] },
 { name: "7 different types of Berry", types: ["berry"] }
];
bingoList[10] = [
 { name: "Slowpoke or Poliwhirl", types: ["split"] },
 { name: "$0 on hand/mom", types: ["cash"] },
 { name: "Big Pearl", types: ["day"] },
 { name: "Defeat all 8 trainers on Route 32", types: ["train"] },
 { name: "Defeat all 9 trainers on Route 35", types: ["train"] }
];
bingoList[11] = [
 { name: "TM28 (Dig)", types: ["random"] },
 { name: "Don't use Potions", types: ["instant"] },
 { name: "Gold Berry", types: ["place"] },
 { name: "Venomoth or Parasect", types: ["11"] },
 { name: "Noctowl or Xatu", types: ["11"] }
];
bingoList[12] = [
 { name: "A Ghost type Pokémon", types: ["ghost"] },
 { name: "A Pokémon with a Ghost type move", types: ["lick"] },
 { name: "A Pokémon with a Dark type move", types: ["pursuit"] },
 { name: "2 Eevee evolutions", types: ["eevee"] },
 { name: "A Dragon type Pokémon", types: ["dragon"] }
];
bingoList[13] = [
 { name: "A shiny Pokémon", types: ["lake"] },
 { name: "Don't use Repels", types: ["instant"] },
 { name: "Catch a Pokémon in Kanto", types: ["kanto"] },
 { name: "Defeat 9 Pokémaniacs", types: ["maniac"] },
 { name: "Houndoom or Murkrow", types: ["fire"] }
];
bingoList[14] = [
 { name: "Electabuzz, Jynx, or Magmar", types: ["blessed"] },
 { name: "Hitmonlee, Hitmonchan, or Hitmontop", types: ["dojo"] },
 { name: "TM13 (Snore)", types: ["berry"] },
 { name: "A Pokémon with 4 non-TM non-damaging moves", types: ["flash"] },
 { name: "Mystic Water", types: ["violet"] }
];
bingoList[15] = [
 { name: "Donphan or Ursaring", types: ["gs"] },
 { name: "King's Rock", types: ["slow"] },
 { name: "TM34 (Swagger)", types: ["random"] },
 { name: "Soft Sand", types: ["pro"] },
 { name: "Exp. Share", types: ["whirl"] }
];
bingoList[16] = [
 { name: "Zubat, Koffing, or Grimer", types: ["rocket"] },
 { name: "20+ different TMs", types: ["tm"] },
 { name: "20+ Pokémon owned", types: ["pkmn"] },
 { name: "A Pokémon with Sunny Day, Rain Dance, or Sandstorm", types: ["move"] },
 { name: "Evolve Eevee", types: ["eevee"] }
];
bingoList[17] = [
 { name: "TM21 (Frustration) or TM27 (Return)", types: ["day"] },
 { name: "Defeat Lapras", types: ["day"] },
 { name: "Black Belt", types: ["day"] },
 { name: "Encounter Suicune on Route 42", types: ["chuck"] },
 { name: "HM02 (Fly)", types: ["chuck"] }
];
bingoList[18] = [
 { name: "Suicune, Raikou, or Entei", types: ["beasts"] },
 { name: "Omanyte, Kabuto, or Aerodactyl", types: ["trio"] },
 { name: "Gligar, Delibird, or Sneasel", types: ["trio"] },
 { name: "Heracross, Pinsir, or Aipom", types: ["trio"] },
 { name: "Dunsparce, Wobbuffet, or Girafarig", types: ["trio"] }
];
bingoList[19] = [
 { name: "A Pokémon with Explosion or Selfdestruct", types: ["move"] },
 { name: "A Pokémon with Minimize or Double Team", types: ["move"] },
 { name: "Defeat Electrode", types: ["elec"] },
 { name: "Trade a Pokémon", types: ["trade"] },
 { name: "Own 10 different Water type Pokémon", types: ["pkmn"] }
];
bingoList[20] = [
 { name: "Articuno, Zapdos, or Moltres", types: ["birds"] },
 { name: "90 Pokémon seen", types: ["pkmn"] },
 { name: "Stop starter evolving 3 times", types: ["raise"] },
 { name: "Spell Tag", types: ["blackthorn"] },
 { name: "Call a Black Belt", types: ["blackthorn"] }
];
bingoList[21] = [
 { name: "Mewtwo, Mew, or Celebi", types: ["mythical"] },
 { name: "Evolve 4 different Pokémon", types: ["raise"] },
 { name: "Max Phonebook", types: ["battles"] },
 { name: "TM46 (Thief)", types: ["random"] },
 { name: "2 baby Pokémon", types: ["egg"] }
];
bingoList[22] = [
 { name: "Own 8 different Normal type Pokémon", types: ["pkmn"] },
 { name: "Own 8 different Flying type Pokémon", types: ["pkmn"] },
 { name: "Glacier Badge", types: ["whirl"] },
 { name: "6 Badges", types: ["badges"] }
];
bingoList[23] = [
 { name: "$50,000+", types: ["cash"] },
 { name: "Defeat Rival 4", types: ["ass"] },
 { name: "Mineral Badge", types: ["steel"] },
 { name: "3 level 30+ Pokémon", types: ["tin"] },
 { name: "Don't use more than one TM", types: ["tm", "instant"] }
];
bingoList[24] = [
 { name: "Onix or Scyther", types: ["duo"] },
 { name: "Mantine or Skarmory", types: ["duo"] },
 { name: "Miltank or Tauros", types: ["duo"] },
 { name: "Tangela or Lickitung", types: ["duo"] },
 { name: "Yanma or Piloswine", types: ["duo"] }
];
bingoList[25] = [
 { name: "Ho-Oh or Lugia", types: ["cover"] },
 { name: "Defeat a Level 40+ Pokémon", types: ["clair"] },
 { name: "Defeat Clair", types: ["clair"] },
 { name: "Berry Juice or Elixer", types: ["shuck"] },
 { name: "Blackglasses", types: ["dark"] }
];
