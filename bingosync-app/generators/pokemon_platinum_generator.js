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
  { name:"TM88 (Pluck)", types: ["floaroma1"] },
  { name:"Sprayduck", types: ["keyitem"] },
  { name:"Evolve a Pokémon", types: ["evolve"] },
  { name:"Wormadam, Mothim, or Beautifly", types: ["gen4bugs"] }
];
bingoList[2] = [
  { name:"Give a Pokémon a massage", types: ["massage"] },
  { name:"Catch a Pokémon with the Old Rod", types: ["fishing"] },
  { name:"Defeat a Gym Leader with animations on", types: ["leader"] },
  { name:"Poffin Case", types: ["keyitem"] },
  { name:"Beautifly or Dustox", types: ["gen3bugs"] }
];
bingoList[3] = [
  { name:"Don’t heal at Pokémon Centers", types: ["instant"] },
  { name:"TM67 (Recycle)", types: ["eterna"] },
  { name:"Slather honey on 10 different trees", types: ["honey"] },
  { name:"8 Pokétch Apps", types: ["poketch"] },
  { name:"Kadabra, Machoke, or Graveler", types: ["trade"] }
];
bingoList[4] = [
  { name:"Use a 4x super-effective move", types: ["parasect"] },
  { name:"5 different type-boosting items", types: ["items"] },
  { name:"10 different berries", types: ["berries"] },
  { name:"Apply a Ball Seal to a Pokémon", types: ["seals"] },
  { name:"Bibarel or Staravia", types: ["bidoof"] }
];
bingoList[5] = [
  { name:"Protector, Reaper Cloth, Magmarizer, or Electrizer", types: ["tradeitems"] },
  { name:"5 different Water-type Pokémon", types: ["catch5"] },
  { name:"Defeat a doubles partner", types: ["doubles"] },
  { name:"TM51 (Roost)", types: ["abovesolaceon"] },
  { name:"Tangela, Yanma, or Piloswine", types: ["ancientpower"] }
];
bingoList[6] = [
  { name:"5 different Normal-type Pokémon", types: ["catch5easy"] },
  { name:"Release starter before level 11", types: ["starter"] },
  { name:"7 Different types of Poké Ball", types: ["balls"] },
  { name:"10 Pokémon owned", types: ["pkmn"] },
  { name:"Kirlia or Snorunt", types: ["dawn"] }
];
bingoList[7] = [
  { name:"5 different Flying-type Pokémon", types: ["catch5easy"] },
  { name:"3 Pokémon that start with the same letter", types: ["letter"] },
  { name:"A Pokémon with a non-TM stat-boosting move", types: ["move"] },
  { name:"Return the Suite Key", types: ["hotel"] },
  { name:"TM92 (Trick Room)", types: ["hotel"] },
  { name:"Electabuzz, Magmar, or Jynx", types: ["punches"] }
];
bingoList[8] = [
  { name:"5 different Grass-type Pokémon", types: ["catch5easy"] },
  { name:"A Pokémon with a non-TM move with 5 PP", types: ["move"] },
  { name:"Battle Rotom (TV Pokémon)", types: ["clock"] },
  { name:"15 TMs", types: ["tms"] },
  { name:"2 eggs", types: ["egg"] },
  { name:"Magnezone or Probopass", types: ["coronet"] }
];
bingoList[9] = [
  { name:"5 different Psychic-type Pokémon", types: ["catch5easy"] },
  { name:"Defeat all 8 trainers in Eterna Forest", types: ["trainers"] },
  { name:"Defeat Drifloon", types: ["date"] },
  { name:"TM78 (Captivate)", types: ["floaroma2"] },
  { name:"Catch a Pokémon with the Good Rod", types: ["fishing"] },
  { name:"Mightyena or Houndoom", types: ["frankerz"] }
];
bingoList[10] = [
  { name:"5 different Poison-type Pokémon", types: ["catch5easy"] },
  { name:"Revive a Fossil", types: ["fossil"] },
  { name:"HM05 (Defog)", types: ["hms"] },
  { name:"Evolve 3 different Pokémon", types: ["evolve"] },
  { name:"Quagsire or Pelipper", types: ["waters"] }
];
bingoList[11] = [
  { name:"5 different Ground-type Pokémon", types: ["catch5medium"] },
  { name:"BlackGlasses, Wise Glasses, or Choice Specs", types: ["celestic"] },
  { name:"TM77 (Psych Up)", types: ["celestic"] },
  { name:"Aron or Spheal", types: ["gen3things"] }
];
bingoList[12] = [
  { name:"5 different Bug-type Pokémon", types: ["catch5medium"] },
  { name:"Defeat all 7 trainers in Galactic Eterna Building", types: ["missable"] },
  { name:"Defeat 8 Hikers", types: ["class"] },
  { name:"Defeat all 6 trainers in Fantina’s gym", types: ["trainers"] },
  { name:"Enter Amity Square", types: ["amity"] },
  { name:"Seel or Slowpoke", types: ["derp"] }
];
bingoList[13] = [
  { name:"5 different Rock-type Pokémon", types: ["catch5medium"] },
  { name:"15 Pokémon owned", types: ["pkmn"] },
  { name:"A Pokémon with 4 non-TM status moves", types: ["hms"] },
  { name:"5 rematches with trainers", types: ["rematch"] },
  { name:"Larvitar, Gible, or Bagon", types: ["pseudo"] }
];
bingoList[14] = [
  { name:"5 different Fire-type Pokémon", types: ["catch5medium"] },
  { name:"Hatch a Pokémon from an egg", types: ["hatch"] },
  { name:"Defeat all 4 non-double trainers in Lost Tower", types: ["trainers"] },
  { name:"Defeat all 8 trainers on Cycling Road", types: ["trainers"] },
  { name:"3 battles inside Pokémon Centers", types: ["center"] },
  { name:"Stunky or Glameow", types: ["mammals"] }
];
bingoList[15] = [
  { name:"5 different Electric-type Pokémon", types: ["catch5medium"] },
  { name:"A Pokémon with 4 STAB moves", types: ["stab"] },
  { name:"A Pokémon with red HP", types: ["endgame"] },
  { name:"Battle a Legendary Pokémon", types: ["legend"] },
  { name:"HM03 (Surf)", types: ["celestic"] },
  { name:"Sneasel or Gligar", types: ["razor"] }
];
bingoList[16] = [
  { name:"5 different Steel-type Pokémon", types: ["catch5medium"] },
  { name:"A Pokémon weighing at least 300 lbs", types: ["heavy"] },
  { name:"A Pokémon with a non-HM 2-turn move", types: ["two"] },
  { name:"A Pokémon with a stat-related ability", types: ["ability"] },
  { name:"Defeat the maids at Mr. Backlot’s Mansion", types: ["mansion"] },
  { name:"Aipom or Lickitung", types: ["normals"] }
];
bingoList[17] = [
  { name:"5 different Fighting-type Pokémon", types: ["catch5medium"] },
  { name:"3 baby Pokémon", types: ["baby"] },
  { name:"Use a stone to evolve a Pokémon", types: ["evolve"] },
  { name:"12 Pokétch Apps", types: ["poketch"] },
  { name:"A Pokémon with a status-related ability", types: ["ability"] },
  { name:"Murkrow or Misdreavus", types: ["dusk"] }
];
bingoList[18] = [
  { name:"5 different Dark-type Pokémon", types: ["catch5hard"] },
  { name:"Land a move with at most 70% accuracy", types: ["miss"] },
  { name:"Train a Pokémon to Level 45", types: ["raise"] },
  { name:"Earn a reward from the Pokémon News Press", types: ["news"] },
  { name:"Buizel or Shellos", types: ["gen4waters"] }
];
bingoList[19] = [
  { name:"5 different Ice-type Pokémon", types: ["catch5hard"] },
  { name:"$50,000", types: ["money"] },
  { name:"No money on hand", types: ["money"] },
  { name:"Participate in a Contest", types: ["contest"] },
  { name:"Goldeen or Barboach", types: ["fish"] }
];
bingoList[20] = [
  { name:"5 different Dragon-type Pokémon", types: ["catch5hard"] },
  { name:"Teach 4 TMs to the same Pokémon", types: ["tms"] },
  { name:"All Pokémon of only one gender", types: ["instant"] },
  { name:"Defeat all 3 trainers in Fuego Ironworks", types: ["surf"] },
  { name:"Finneon or Remoraid", types: ["fish"] }
];
bingoList[21] = [
  { name:"5 different Ghost-type Pokemon", types: ["catch5hard"] },
  { name:"10 rematches with trainers", types: ["rematch"] },
  { name:"25 TMs", types: ["tms"] },
  { name:"Footprint Ribbon", types: ["footprint"] },
  { name:"A Pokemon with an evasion boosting move", types: ["move"] },
  { name:"Feebas or Magikarp", types: ["fish"] }
];
bingoList[22] = [
  { name:"A Pokémon with each different type", types: ["types"] },
  { name:"Don’t use X items", types: ["instant"] },
  { name:"A Pokémon with an item-related ability", types: ["ability"] },
  { name:"Evolve 5 different Pokémon", types: ["evolve"] },
  { name:"Skorupi or Croagunk", types: ["gen4poisons"] }
];
bingoList[23] = [
  { name:"Use Struggle", types: ["pp"] },
  { name:"3 Pokémon in the same evolution chain", types: ["evolve"] },
  { name:"A Pokémon with a weather-related ability", types: ["ability"] },
  { name:"20 Pokémon owned", types: ["pkmn"] },
  { name:"Scyther or Pinsir", types: ["gen1bugs"] }
];
bingoList[24] = [
  { name:"Hit 5 times with a multi-hit move", types: ["skilllink"] },
  { name:"Stop starter evolving 3 times", types: ["raise"] },
  { name:"Digger Drill", types: ["underground"]},
  { name:"Mine Badge", types: ["surf"] },
  { name:"Kecleon or Stantler", types: ["normals"] }
];
bingoList[25] = [
  { name:"Defeat all 11 trainers in Route 210’s fog", types: ["fog"] },
  { name:"Don’t use Repels", types: ["instant"] },
  { name:"Complete Mira’s sidequest", types: ["sidequest"] },
  { name:"Complete Riley’s sidequest", types: ["sidequest"] },
  { name:"Dialga, Palkia, or Giratina", types: ["legends"] }
];
