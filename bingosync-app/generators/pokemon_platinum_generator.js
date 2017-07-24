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
  { name:"Odd Keystone", types: ["keystone"] },
  { name:"Sprayduck", types: ["keyitem"] },
  { name:"Evolve a Pokémon", types: ["evolve"] },
  { name:"Poffin Case", types: ["keyitem"] }
];
bingoList[2] = [
  { name:"Porygon", types: ["porygon"] },
  { name:"Catch a Pokémon with the Old Rod", types: ["fish"] },
  { name:"TM88 (Pluck)", types: ["floaroma1"] },
  { name:"Defeat a Gym Leader with animations on", types: ["leader"] }
];
bingoList[3] = [
  { name:"Digger Drill", types: ["underground"] },
  { name:"Don’t heal at Pokemon Centers", types: ["instant"] },
  { name:"TM67 (Recycle)", types: ["eterna"] },
  { name:"8 Pokétch Apps", types: ["poketch"] },
];
bingoList[4] = [
  { name:"Magmarizer or Electrizer", types: ["items"] },
  { name:"5 different type-boosting items", types: ["items"] },
  { name: "Kricketune", types: ["delelewoop"] },
  { name:"10 different berries", types: ["berries"] },
  { name:"Apply a Ball Seal to a Pokémon", types: ["seals"] }
];
bingoList[5] = [
  { name:"Use a 4x super-effective move", types: ["parasect"] },
  { name:"60 Pokemon seen", types: ["pkmn"] },
  { name:"Wormadam or Mothim", types: ["burmy"] },
  { name:"Defeat a doubles partner", types: ["doubles"] },
  { name:"TM51 (Roost)", types: ["abovesolaceon"] }
];
bingoList[6] = [
  { name:"Release starter before level 11", types: ["starter"] },
  { name:"Slather honey on 7 different trees", types: ["honey"] },
  { name:"Stunky or Glameow", types: ["exclusives"] },
  { name:"7 Different types of Poke Ball", types: ["balls"] },
  { name:"10 pokemon owned", types: ["pkmn"] }
];
bingoList[7] = [
  { name:"3 Pokémon that start with the same letter", types: ["letter"] },
  { name:"A Pokémon with a non-TM stat-boosting move", types: ["move"] },
  { name:"Vespiquen", types: ["combee"] },
  { name:"Return the Suite Key", types: ["hotel"] },
  { name:"TM92 (Trick Room)", types: ["hotel"] },
];
bingoList[8] = [
  { name:"A Pokemon with a non-TM move with 5 PP", types: ["move"] },
  { name:"Battle Rotom (TV Pokémon)", types: ["clock"] },
  { name:"Aipom or Lickitung", types: ["normal"] },
  { name:"15 TMs", types: ["tms"] },
  { name:"2 eggs", types: ["egg"] }
];
bingoList[9] = [
  { name:"Defeat all 8 trainers in Eterna Forest", types: ["trainers"] },
  { name:"Defeat Drifloon", types: ["date"] },
  { name:"TM78 (Captivate)", types: ["floaroma2"] },
  { name:"Catch a Pokémon with the Good Rod", types: ["fish"] }
];
bingoList[10] = [
  { name:"Revive a Fossil", types: ["fossil"] },
  { name:"HM05 (Defog)", types: ["hms"] },
  { name:"Kirlia", types: ["kirlia"] },
  { name:"Snorunt", types: ["snorunt"] }
];
bingoList[11] = [
  { name:"Murkrow or Misdreavus", types: ["dusk"] },
  { name:"BlackGlasses, Wise Glasses, or Choice Specs", types: ["celestic"] },
  { name:"TM77 (Psych Up)", types: ["celestic"] },
  { name:"Piloswine, Tangela, or Yanma", types: ["marsh"] },
];
bingoList[12] = [
  { name:"Defeat all 8 trainers in Galactic Eterna Building", types: ["missable"] },
  { name:"Defeat 8 Hikers", types: ["class"] },
  { name:"Gastrodon", types: ["gastrodon"] },
  { name:"Defeat all 6 trainers in Fantina’s gym", types: ["trainers"] },
  { name:"Enter Amity Square", types: ["amity"] }
];
bingoList[13] = [
  { name:"15 Pokemon owned", types: ["pkmn"] },
  { name:"A Pokemon with 4 non-TM status moves", types: ["hms"] },
  { name:"Catch a Pokémon in the Trophy Garden", types: ["mansion"] },
  { name:"Sneasel or Gligar", types: ["razor"] }
];
bingoList[14] = [
  { name:"Hatch a Pokémon from an egg", types: ["hatch"] },
  { name:"Defeat all 4 non-double trainers in Lost Tower", types: ["trainers"] },
  { name:"Staraptor", types: ["bird"] },
  { name:"Defeat all 8 trainers on Cycling Road", types: ["trainers"] },
  { name:"Battle a trainer in a Pokémon Center", types: ["clock"] }
];
bingoList[15] = [
  { name:"A Pokémon with 4 STAB moves", types: ["stab"] },
  { name:"A Pokémon with red HP", types: ["endgame"] },
  { name:"Magnezone or Probopass", types: ["coronet"] },
  { name:"Battle a Legendary Pokemon", types: ["legend"] },
  { name:"HM03 (Surf)", types: ["celestic"] }
];
bingoList[16] = [
  { name:"Catch 4 different Pokémon on the same route", types: ["earlygame"] },
  { name:"A Pokémon weighing at least 300 lbs", types: ["heavy"] },
  { name:"A Pokémon with a non-HM 2-turn move", types: ["two"] },
  { name:"A Pokémon with a stat-related ability", types: ["ability"] },
  { name:"Defeat the maids at Mr. Backlot’s Mansion", types: ["mansion"] }
];
bingoList[17] = [
  { name:"3 baby Pokemon", types: ["baby"] },
  { name:"Use a stone to evolve a Pokemon", types: ["evolve"] },
  { name:"12 Pokétch Apps", types: ["poketch"] },
  { name:"A Pokémon with a status-related ability", types: ["ability"] }
];
bingoList[18] = [
  { name:"Chatot", types: ["chatot"] },
  { name:"Land a move with at most 70% accuracy", types: ["miss"] },
  { name:"Train a Pokémon to Level 45", types: ["raise"] },
  { name:"3 rematches with trainers", types: ["rematch"] }
];
bingoList[19] = [
  { name:"6 different Flying-type Pokemon", types: ["catch6"] },
  { name:"$50,000", types: ["money"] },
  { name: "Riolu", types: ["riolu"] },
  { name:"No money on hand", types: ["money"] },
  { name:"Participate in a Contest", types: ["contest"] }
];
bingoList[20] = [
  { name:"Teach 4 TMs to the same Pokemon", types: ["tms"] },
  { name:"All Pokémon of only one gender", types: ["instant"] },
  { name:"Defeat all 3 trainers in Fuego Ironworks", types: ["surf"] },
  { name:"Trade a Pokemon", types: ["trade"] }
];
bingoList[21] = [
  { name:"6 different Water-type Pokemon", types: ["catch6"] },
  { name:"25 TMs", types: ["tms"] },
  { name:"Footprint Ribbon", types: ["footprint"] },
  { name:"A Pokemon with an evasion boosting move", types: ["move"] }
];
bingoList[22] = [
  { name:"A Pokémon with each unique type", types: ["types"] },
  { name:"Don’t use X items", types: ["instant"] },
  { name:"A Pokémon with an item-related ability", types: ["ability"] },
  { name:"Evolve 4 different Pokemon", types: ["evolve"] }
];
bingoList[23] = [
  { name:"Use Struggle", types: ["pp"] },
  { name:"3 Pokemon in the same evolution chain", types: ["evolve"] },
  { name:"A Pokémon with a weather-related ability", types: ["ability"] },
  { name:"20 Pokemon owned", types: ["pkmn"] },
  { name:"Giratina", types: ["giratina"] }
];
bingoList[24] = [
  { name:"Hit 5 times with a multi-hit move", types: ["skilllink"] },
  { name:"Stop starter evolving 3 times", types: ["raise"] },
  { name:"Mine Badge", types: ["surf"] },
  { name:"100 Pokemon seen", types: ["pkmn"] }
];
bingoList[25] = [
  { name:"Defeat all 11 trainers in Route 210’s fog", types: ["fog"] },
  { name:"Don’t use Repels", types: ["instant"] },
  { name:"Complete Mira’s sidequest", types: ["sidequest"] },
  { name:"Complete Riley’s sidequest", types: ["sidequest"] }
];
