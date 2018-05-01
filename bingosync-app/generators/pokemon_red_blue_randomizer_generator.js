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
            typesA = typesA || [];
            var synergy = 0;
            for (var j = 0; j < lineCheckList[i].length; j++) {
                var typesB = bingoBoard[lineCheckList[i][j] + 1].types || [];
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
bingoList = {
    "0": [],
    "1": [
        {
            "name": "Town Map"
        },
        {
            "name": "View the Space Shuttle Columbia"
        },
        {
            "name": "Release starter before level 11"
        },
        {
            "name": "10 Pokemon owned", "types": ["owned"]
        },
        {
            "name": "Leave a Pokemon at Daycare"
        },
        {
            "name": "Talk to a Machop"
        },
        {
            "name": "Defeat Viridian Rival"
        }
    ],
    "2": [
        {
            "name": "Finish inside cut bush"
        },
        {
            "name": "Release starter before level 8", "types": ["starter"]
        },
        {
            "name": "HM5 (Flash)"
        },
        {
            "name": "Teach TM 49", "types": ["notms"]
        },
        {
            "name": "Defeat all 3 trainers in the Forest"
        },
        {
            "name": "One starting move on starter", "types": ["starter"]
        },
        {
            "name": "Party Pokemon Names spell out \"BINGO!\""
        },
        {
            "name": "Play the Slots"
        }
    ],
    "3": [
        {
            "name": "Defeat 2 Engineers"
        },
        {
            "name": "TM42"
        },
        {
            "name": "Old Amber"
        },
        {
            "name": "Finish on the SS Anne"
        },
        {
            "name": "Defeat all 8 trainers on Route 3"
        },
        {
            "name": "6 Different not fully evolved Pokemon"
        },
        {
            "name": "Talk to 3 overworld Pokemon"
        },
        {
            "name": "A Pokemon with 4 non Normal Moves"
        }
    ],
    "4": [
        {
            "name": "Use no X items"
        },
        {
            "name": "Teach a Pokemon 3 TMs", "types": ["notms"]
        },
        {
            "name": "Collect 4 Gift Pokemon"
        }
    ],
    "5": [
        {
            "name": "Any Pokemon with a multi-hit move"
        },
        {
            "name": "Catch a Pokemon Fished up by a rod"
        },
        {
            "name": "Teach 3 of Gym Leader TMs", "types": ["notms"]
        },
        {
            "name": "6 Key Items"
        },
        {
            "name": "A Pokemon with exactly Height of 5'11\" (1.8m)"
        }
    ],
    "6": [
        {
            "name": "2 different Pokemon without an evolution"
        },
        {
            "name": "Haunter, Kadabra, Machoke, or Graveler"
        },
        {
            "name": "Any Pokemon with a 5 PP move"
        },
        {
            "name": "Exactly $0", "types": ["money"]
        },
        {
            "name": "Pokemon with 4 No-PP-left moves"
        },
        {
            "name": "Any Pokemon with 4 damage dealing physical moves"
        },
        {
            "name": "Teach 6 different TMs", "types": ["notms"]
        },
        {
            "name": "Snorlax"
        }
    ],
    "7": [
        {
            "name": "Any Pokemon with a move execute consecutively"
        },
        {
            "name": "Any Pokemon with a charging-turn move except Fly"
        },
        {
            "name": "Defeat 5 trainers in Route 10"
        },
        {
            "name": "Any Pokemon with 4 status moves"
        },
        {
            "name": "Defeat all 12 trainers in Mt Moon"
        }
    ],
    "8": [
        {
            "name": "Ice-type Pokemon"
        },
        {
            "name": "Any Pokemon with a recoil move"
        },
        {
            "name": "2 of the following: Eevee, Vaporeon, Jolteon, and Flareon"
        },
        {
            "name": "3 HMs"
        },
        {
            "name": "Pickup and keep an item that contains the word Max"
        },
        {
            "name": "Defeat all trainers in each Gym you enter"
        },
        {
            "name": "Fully evolved 3-stage Pokemon"
        },
        {
            "name": "Defeat a Swimmer on land"
        }
    ],
    "9": [
        {
            "name": "Any Pokemon with a high critical hit move"
        },
        {
            "name": "Ivysaur, Charmeleon, or Wartortle"
        },
        {
            "name": "4 Badges", "types": ["badges"]
        },
        {
            "name": "Obtain 20 different TMs"
        },
        {
            "name": "Defeat all 16 trainers on Routes 24 and 25"
        }
    ],
    "10": [
        {
            "name": "6 Different Poison type Pokemon"
        },
        {
            "name": "2 different fully evolved 2-staged Pokemon"
        },
        {
            "name": "6 Different Water-type Pokemon"
        },
        {
            "name": "6 Different Normal-type Pokemon"
        },
        {
            "name": "Any Fossil Pokemon"
        },
        {
            "name": "PP Healing Item"
        },
        {
            "name": "Defeat 2 Rockers"
        }
    ],
    "11": [
        {
            "name": "6 Different Pokemon not sharing any types"
        },
        {
            "name": "Defeat Giovanni"
        },
        {
            "name": "Defeat all 10 trainers in Route 11"
        }
    ],
    "12": [
        {
            "name": "Get Pok\u00e9balls From Oak"
        },
        {
            "name": "Any Pokemon with 4 damage dealing special moves"
        },
        {
            "name": "2 Fishing Rods"
        },
        {
            "name": "Silph Scope"
        },
        {
            "name": "Catch 3 different Safari Pokemon"
        },
        {
            "name": "90 Pokemon seen", "types": ["seen"]
        },
        {
            "name": "TM36"
        },
        {
            "name": "Arcanine or Ninetales"
        },
        {
            "name": "Starmie or Cloyster"
        },
        {
            "name": "Alakazam, Gengar, Machamp, or Golem"
        },
        {
            "name": "Chansey, Tauros, or Kangaskhan"
        },
        {
            "name": "Victreebell or Vileplume"
        },
        {
            "name": "Beedrill or Butterfree"
        }
    ],
    "13": [
        {
            "name": "Sell no items"
        },
        {
            "name": "20 Pokemon owned", "types": ["owned"]
        },
        {
            "name": "Faint a Poliwrath"
        },
        {
            "name": "Faint a Parasect"
        },
        {
            "name": "Faint a Chansey"
        },
        {
            "name": "Faint a Mew"
        },
        {
            "name": "Faint a Mewtwo"
        },
        {
            "name": "Faint a Slowbro"
        }
    ],
    "14": [
        {
            "name": "Defeat all 15 trainers in Routes 6 and 8"
        },
        {
            "name": "Kill or catch both Pokeflute Pokemon"
        },
        {
            "name": "Pokemon with 3 STAB Moves"
        },
        {
            "name": "Get a Pokemon in Silph Co."
        },
        {
            "name": "Defeat 4 Beauties"
        },
        {
            "name": "Sandshrew, Ekans, or Drowzee"
        },
        {
            "name": "Rattata, Spearow, or Pidgey "
        }
    ],
    "15": [
        {
            "name": "Kabuto"
        },
        {
            "name": "Lapras"
        },
        {
            "name": "Catch a Pokemon in Route 23"
        },
        {
            "name": "Bulbasaur, Squirtle, or Charmander"
        },
        {
            "name": "Ghost-type Pokemon"
        },
        {
            "name": "Dragon-type Pokemon"
        },
        {
            "name": "Defeat all 5 trainers in Fighting Dojo"
        },
        {
            "name": "Use no repels"
        },
        {
            "name": "A Pokemon with a Bug Move"
        },
        {
            "name": "Conduct an in-game trade"
        }
    ],
    "16": [
        {
            "name": "Arbok or Sandslash"
        },
        {
            "name": "Defeat all 17 trainers aboard the SS Anne"
        },
        {
            "name": "Defeat 3 Scientists"
        },
        {
            "name": "3 different Pokemon without an evolution", "types": ["no_evolution"]
        },
        {
            "name": "Obtain a Pokemon with Dig"
        },
        {
            "name": "Defeat the only trainer on Route 4"
        }
    ],
    "17": [
        {
            "name": "Jigglypuff or Clefairy"
        },
        {
            "name": "Nidoran (Male or Female)"
        },
        {
            "name": "Grimer or Koffing"
        },
        {
            "name": "Diglett or Abra"
        },
        {
            "name": "Voltorb or Magnemite"
        },
        {
            "name": "Psyduck or Seel"
        },
        {
            "name": "4 different level 30 Pokemon"
        },
        {
            "name": "Defeat 5 Jugglers"
        },
        {
            "name": "5 Badges", "types": ["badges"]
        },
        {
            "name": "Defeat all 17 trainers inside Pokemon Tower"
        },
        {
            "name": "$50,000", "types": ["money"]
        },
        {
            "name": "Charizard, Blastoise, or Venusaur"
        },
        {
            "name": "Nidoking or Nidoqueen"
        },
        {
            "name": "Hitmonchan or Hitmonlee"
        },
        {
            "name": "A Pokemon with a Ghost Move"
        },
        {
            "name": "Fill a PC Box"
        },
        {
            "name": "Pokemon with 4 field moves"
        },
        {
            "name": "Wigglytuff or Clefable"
        }
    ],
    "18": [
        {
            "name": "Persian or Primeape"
        },
        {
            "name": "Catch a Pokemon while Surfing"
        },
        {
            "name": "Push a Boulder"
        },
        {
            "name": "Master Ball"
        },
        {
            "name": "TM35"
        }
    ],
    "19": [
        {
            "name": "Raichu"
        },
        {
            "name": "TM31"
        },
        {
            "name": "6 Different Pokemon sharing a type except Wtr/Poi/Nor"
        },
        {
            "name": "Obtain a Pokemon with Teleport"
        },
        {
            "name": "TM41"
        }
    ],
    "20": [
        {
            "name": "Magmar or Electabuzz"
        },
        {
            "name": "Zubat"
        },
        {
            "name": "Magneton or Electrode"
        },
        {
            "name": "Cubone or Marowak"
        },
        {
            "name": "Defeat all 15 trainers in Rock Tunnel"
        },
        {
            "name": "Any Pokemon with Splash"
        },
        {
            "name": "Obtain a Pokemon with Whirlwind or Roar"
        },
        {
            "name": "Obtain a Pokemon with Explosion or Self-Destruct"
        },
        {
            "name": "Revive a Fossil"
        },
        {
            "name": "Catch 5 Different Pokemon in the Safari Zone", "types": ["safari"]
        },
        {
            "name": "Use an HP UP, Protein, Iron, Carbos, and Calcium"
        },
        {
            "name": "A Pokemon with 4 moves of the same type"
        },
        {
            "name": "25 Pokemon owned", "types": ["owned"]
        }
    ],
    "21": [
        {
            "name": "Volcanobadge or Marshbadge"
        },
        {
            "name": "Any level 50 Pokemon"
        },
        {
            "name": "Use Pokeflute to wake up in battle"
        },
        {
            "name": "Faint all 3 starters evolutionary line"
        }
    ],
    "22": [
        {
            "name": "Farfetch'd"
        },
        {
            "name": "Tangela"
        },
        {
            "name": "Mr. Mime"
        },
        {
            "name": "Onix"
        },
        {
            "name": "Defeat 3 Burglars"
        },
        {
            "name": "Evolve a Pokemon at level 30 or higher"
        }
    ],
    "23": [
        {
            "name": "Mew"
        },
        {
            "name": "Ditto"
        },
        {
            "name": "Evolve a Pokemon twice"
        },
        {
            "name": "Conduct 2 in-game trades"
        },
        {
            "name": "Use 4 different stones to evolve Pokemon"
        }
    ],
    "24": [
        {
            "name": "Mewtwo"
        },
        {
            "name": "Articuno"
        },
        {
            "name": "Zapdos"
        },
        {
            "name": "Moltres"
        },
        {
            "name": "Use no Potions of any kind in battle"
        },
        {
            "name": "3 Pokemon with different status ailments"
        }
    ],
    "25": [
        {
            "name": "100 Pokemon seen", "types": ["seen"]
        },
        {
            "name": "Own 6 Consecutive Dex Pokemon"
        },
        {
            "name": "$75,000", "types": ["money"]
        },
        {
            "name": "6 Badges", "types": ["badges"]
        },
        {
            "name": "Do not use any TMs", "types": ["notms"]
        },
        {
            "name": "35 Pokemon owned", "types": ["owned"]
        },
        {
            "name": "Faint 5 Pikachus"
        }
    ]
};
