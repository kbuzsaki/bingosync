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
var bingoList = []; //number represents difficulty
   bingoList[1] = [
       { name: "Baboon Blast GB in Jungle Japes", types: ["japes","donkey"] },
       { name: "50 Bananas in Gloomy Galleon", types: ["gloomy","gloomybananas"] },
       { name: "Angry Aztec Lobby GB", types: ["isles","bonus","tiny"] },
       { name: "100 Bananas in Jungle Japes", types: ["japes","japesbananas"] },
       { name: "5 Blueprints", types: ["bp","japesbp","aztecbp","factorybp","gloomybp","fungibp","cavebp","castlebp","islesbp"] },
       { name: "50 bananas in Creepy Castle", types: ["castle","castlebananas"] },
       { name: "Open Gloomy Galleon Treasure Room", types: ["gloomy"] },
       { name: "Activate Production Room in Factory", types: ["factory","donkey"] },
       { name: "Key 2", types: ["key"] },
       { name: "1 GB on each kong", types: ["japesgb","aztecgb","factorygb","gloomygb","fungigb","cavegb","castlegb","islesgb"] }
   ];
   bingoList[2] = [
       { name: "3 Tiny Blueprints", types: ["bp","tiny","japesbp","aztecbp","factorybp","gloomybp","fungibp","cavebp","castlebp","islesbp"] },
       { name: "2 Battle Crowns", types: ["japescrown","azteccrown","factorycrown","gloomycrown","fungicrown","cavecrown","castlecrown","islescrown","helmcrown"] },
       { name: "Complete 3 Baboon Blasts", types: ["donkey","blast"] },
       { name: "100 Bananas in Angry Aztec", types: ["aztec","aztecbananas"] },
       { name: "3 Donkey Blueprints", types: ["donkey","bp","japesbp","aztecbp","factorybp","gloomybp","fungibp","cavebp","castlebp","islesbp"] },
       { name: "3 Diddy Blueprints", types: ["diddy","bp","japesbp","aztecbp","factorybp","gloomybp","fungibp","cavebp","castlebp","islesbp"] },
       { name: "5 GBs in Jungle Japes", types: ["japes","japesgb"] },
       { name: "150 Bananas in any Level", types: ["japesbananas","aztecbananas","factorybananas","gloomybananas","fungibananas","cavebananas","castlebananas"] },
       { name: "50 Bananas in Crystal Caves", types: ["cave","cavebananas"] },
       { name: "50 Bananas in Fungi Forest", types: ["fungibananas","fungi"] },
       { name: "Gloomy Galleon Battle Crown", types: ["gloomy","gloomycrown"] }
   ];
   bingoList[3] = [
       { name: "Key 1", types: ["key"] },
       { name: "Baboon Blast GB in Crystal Caves", types: ["cave","donkey","blast"] },
       { name: "Seal Race GB", types: ["donkey","gloomy","race"] },
       { name: "Shoot 10 Banana Balloons", types: ["japesbananas","aztecbananas","factorybananas","gloomybananas","fungibananas","cavebananas","castlebananas"] },
       { name: "Galleon Submarine GB", types: ["gloomy","bonus","tiny"] },
       { name: "Tile Flipping GB in Crystal Caves", types: ["cave","lanky"] },
       { name: "100 Bananas in Frantic Factory", types: ["factory","factorybananas"] },
       { name: "Cannon Game GB in Gloomy Galleon", types: ["chunky","gloomy"] },
       { name: "Kill Giant Kosha", types: ["cave"] },
       { name: "Frantic Factory Battle Crown", types: ["factory","factorycrown"] },
       { name: "Vulture GB", types: ["diddy","aztec"] }
   ];
   bingoList[4] = [
       { name: "100 Bananas in Gloomy Galleon", types: ["gloomybananas","gloomy"] },
       { name: "Key 4", types: ["key"] },
       { name: "Crystal Caves Battle Crown", types: ["cave","cavecrown"] },
       { name: "Llama Temple Matching Game GB", types: ["lanky","aztec"] },
       { name: "Both Banana Fairies in Gloomy Galleon", types: ["gloomy","fairy"] },
       { name: "5 GBs in DK Isles", types: ["islesgb","isles"] },
       { name: "100 Bananas in Creepy Castle", types: ["castlebananas","castle"] },
       { name: "Diddy Minecart GB", types: ["japes","diddy","race"] },
       { name: "25 Coins with all Kongs", types: ["coin","restrict_coin"] }
   ];
   bingoList[5] = [
       { name: "All Caged GBs in Jungle Japes", types: ["japesgb","japes"] },
       { name: "Key 3", types: ["key","key3"] },
       { name: "Fungi Forest Battle Crown", types: ["fungi","fungicrown"] },
       { name: "Turn on Lighthouse", types: ["gloomy","donkey"] },
       { name: "3 Chunky Blueprints", types: ["chunky","bp","japesbp","aztecbp","factorybp","gloomybp","fungibp","cavebp","castlebp","islesbp"] },
       { name: "Activate All Warps in Jungle Japes", types: ["japes","japeswarp"] },
       { name: "Activate All Warps in Frantic Factory", types: ["factory","factorywarp"] },
       { name: "5 Banana Fairies", types: ["fairy","key8"] },
       { name: "3 Lanky Blueprints", types: ["lanky","bp","japesbp","aztecbp","factorybp","gloomybp","fungibp","cavebp","castlebp","islesbp"] },
       { name: "All 100 Bananas with any Kong in any level", types: ["japesbananas","aztecbananas","factorybananas","gloomybananas","fungibananas","cavebananas","castlebananas"] }
   ];
   bingoList[6] = [
       { name: "100 Bananas in Crystal Caves", types: ["cave","cavebananas"] },
       { name: "Pound the X GB in DK Isles", types: ["chunky","isles"] },
       { name: "Giant Toy Monster GB", types: ["chunky","factory"] },
       { name: "All Blueprints in Frantic Factory", types: ["factory","manybp","bp","factorybp"] },
       { name: "Both Banana Fairies in Frantic Factory", types: ["factory","fairy"] },
       { name: "250 Total Bananas", types: ["japesbananas","aztecbananas","factorybananas","gloomybananas","fungibananas","cavebananas","castlebananas"] },
       { name: "DK Isles Summit GB", types: ["diddy","bonus","isles"] },
       { name: "5 GBs in Angry Aztec", types: ["aztec","aztecgb"] },
       { name: "Both Stealthy Snoop GBs", types: ["aztec","gloomy","bonus"] },
       { name: "9 Rainbow Coins", types: ["coin","restrict_coin"] }
   ];
   bingoList[7] = [
       { name: "100 Bananas in Fungi Forest", types: ["fungi","fungibananas"] },
       { name: "Key 6", types: ["key","key6"] },
       { name: "Pearl Rescue GB", types: ["tiny","gloomy"] },
       { name: "All Blueprints in Jungle Japes", types: ["japes","manybp","bp","japesbp"] },
       { name: "Angry Aztec Battle Crown", types: ["aztec","lanky","azteccrown"] },
       { name: "Both Banana Fairies in Angry Aztec", types: ["aztec","fairy"] },
       { name: "Both Banana Fairies in Jungle Japes", types: ["japes","fairy"] },
       { name: "10 GBs", types: ["manybp","bp","japesgb","aztecgb","factorygb","gloomygb","fungigb","cavegb","castlegb","islesgb"] },
       { name: "1 GB for each Kong in Factory", types: ["factory","factorygb"] },
       { name: "All Caged GBs in DK Isles", types: ["islesgb","isles"] },
       { name: "5 GBs in Frantic Factory", types: ["factory","factorygb"] }
   ];
   bingoList[8] = [
       { name: "Chunky's Caged Bonus GB in Angry Aztec", types: ["aztec","chunky","bonus"] },
       { name: "3 Battle Crowns", types: ["japescrown","azteccrown","factorycrown","gloomycrown","fungicrown","cavecrown","castlecrown","islescrown","helmcrown"] },
       { name: "Mechanical Fish GB", types: ["diddy","gloomy"] },
       { name: "Key 8", types: ["key","fairy","helm","key8"] },
       { name: "5 GBs in Gloomy Galleon", types: ["gloomygb","gloomy"] },
       { name: "Squash Tomatoes GB", types: ["fungi","chunky"] },
       { name: "Both Splish-Splash Salvage GBs", types: ["gloomy","bonus","japes"] },
       { name: "5 Tiny Blueprints", types: ["bp","tiny","japesbp","aztecbp","factorybp","gloomybp","fungibp","cavebp","castlebp","islesbp"] },
       { name: "Chunky's Seasickness GB", types: ["gloomy","chunky","donkey"] },
       { name: "All 3 Batty Barrel Bandit GBs", types: ["factory","gloomy","bonus"] }
   ];
   bingoList[9] = [
       { name: "Both Tree GBs in Creepy Castle", types: ["chunky","donkey","castle"] },
       { name: "All Blueprints in Gloomy Galleon", types: ["gloomy","manybp","bp","galleonbp"] },
       { name: "Activate All Warps in Creepy Castle", types: ["castle","castlewarp"] },
       { name: "Activate All Warps in Angry Aztec", types: ["aztec","aztecwarp"] },
       { name: "5 Diddy Blueprints", types: ["bp","diddy","japesbp","aztecbp","factorybp","gloomybp","fungibp","cavebp","castlebp","islesbp"] },
       { name: "Spider Mini-Boss GB", types: ["tiny","fungi"] },
       { name: "Both Mad Maze Maul GBs", types: ["cave","bonus","japes"] },
       { name: "100 bananas for any Kong in Jungle Japes", types: ["japesbananas","japes"] },
       { name: "5 Lobby GBs", types: ["isles","islesgb"] },
       { name: "1 GB for each Kong in Jungle Japes", types: ["japes","japesgb"] }
   ];
   bingoList[10] = [
       { name: "Both Banana Fairies in Crystal Caves", types: ["cave","fairy"] },
       { name: "All Blueprints in Creepy Castle", types: ["manybp","castle","bp","castlebp"] },
       { name: "All Blueprints in Crystal Caves", types: ["manybp","cave","bp","cavebp"] },
       { name: "Key 7", types: ["castle","key7","key"] },
       { name: "200 Bananas in Jungle Japes", types: ["japes","japesbananas"] },
       { name: "Activate All Warps in Gloomy Galleon", types: ["gloomy","gloomywarp"] },
       { name: "10 Blueprints", types: ["bp","manybp","japesbp","aztecbp","factorybp","gloomybp","fungibp","cavebp","castlebp","islesbp"] },
       { name: "5 Donkey Blueprints", types: ["bp","donkey","japesbp","aztecbp","factorybp","gloomybp","fungibp","cavebp","castlebp","islesbp"] },
       { name: "Beanstalk GB", types: ["tiny","fungi"] },
       { name: "Creepy Castle Battle Crown", types: ["castlecrown","castle","lanky"] },
       { name: "Enter Every Level", types: ["helm","manylevel"] }
   ];
   bingoList[11] = [
       { name: "Chunky Minecart GB", types: ["chunky","fungi","race"] },
       { name: "8 Banana Fairies", types: ["fairy"] },
       { name: "Both Speedy Swing Sortie GBs", types: ["japes","bonus","fungi"] },
       { name: "5 Bonus Barrel GBs", types: ["bonus","japesgb","aztecgb","factorygb","gloomygb","fungigb","cavegb","castlegb","islesgb"] },
       { name: "3 Banana Medals in Jungle Japes", types: ["japesbananas","japes","medal"] },
       { name: "10 Donkey GBs", types: ["donkey","bp","japesgb","aztecgb","factorygb","gloomygb","fungigb","cavegb","castlegb","islesgb"] },
       { name: "1 GB for each Kong in Gloomy Galleon", types: ["gloomy","gloomygb"] },
       { name: "200 Bananas in Frantic Factory", types: ["factorybananas","factory"] },
       { name: "100 Bananas for any Kong in Angry Aztec", types: ["aztec","aztecbananas"] },
       { name: "Activate All Warps in Crystal Caves", types: ["cave","cavewarp"] }
   ];
   bingoList[12] = [
       { name: "Rabbit Race GB", types: ["fungi","lanky"] },
       { name: "Ballroom GB", types: ["diddy","castle","bonus"] },
       { name: "Both Banana Fairies in Fungi Forest", types: ["fungi","fairy"] },
       { name: "5 Lanky Blueprints", types: ["bp","lanky","japesbp","aztecbp","factorybp","gloomybp","fungibp","cavebp","castlebp","islesbp"] },
       { name: "5 Chunky Blueprints", types: ["bp","chunky","japesbp","aztecbp","factorybp","gloomybp","fungibp","cavebp","castlebp","islesbp"] },
       { name: "2 GBs on each kong", types: ["manybp","japesgb","aztecgb","factorygb","gloomygb","fungigb","cavegb","castlegb","islesgb"] },
       { name: "Activate All Warps in Fungi Forest", types: ["fungi","fungiwarp"] },
       { name: "5 GBs in Crystal Caves", types: ["cave","cavegb"] },
       { name: "3 Banana Medals", types: ["medal","japesbananas","aztecbananas","factorybananas","gloomybananas","fungibananas","cavebananas","castlebananas"] },
       { name: "All 3 Beehive area GBs", types: ["japes", "japesgb"] },
       { name: "Hideout Helm Battle Crown", types: ["helm","helmcrown"] }
   ];
   bingoList[13] = [
       { name: "Owl GB", types: ["diddy","bonus","fungi"] },
       { name: "Both DK Isles Battle Crowns", types: ["islescrown","isles"] },
       { name: "Both Banana Fairies in Creepy Castle", types: ["fairy","castle"] },
       { name: "Donkey Minecart GB", types: ["donkey","castle","race"] },
       { name: "250 Total Bananas With Donkey", types: ["japesbananas","aztecbananas","factorybananas","gloomybananas","fungibananas","cavebananas","castlebananas","donkey"] },
       { name: "200 Bananas in Gloomy Galleon", types: ["gloomy","gloomybananas"] },
       { name: "15 GBs", types: ["manybp","bp","japesgb","aztecgb","factorygb","gloomygb","fungigb","cavegb","castlegb","islesgb"] },
       { name: "All 5 DK Isles Instrument Pad GBs", types: ["islesgb","isles"] },
       { name: "100 Bananas for any Kong in Frantic Factory", types: ["factory","factorybananas"] },
       { name: "100 Bananas for any Kong in Gloomy Galleon", types: ["gloomy","gloomybananas"] }
   ];
   bingoList[14] = [
       { name: "5 GBs in Fungi Forest", types: ["fungi","fungigb"] },
       { name: "All Banana Fairies in DK Isles", types: ["fairy","isles"] },
       { name: "All Blueprints in DK Isles", types: ["isles","bp","manybp","islesbp"] },
       { name: "10 GBs in Jungle Japes", types: ["japes","japesgb"] },
       { name: "1 GB for each Kong in Angry Aztec", types: ["aztec","aztecgb"] },
       { name: "2 Blueprints on each Kong", types: ["manybp","bp","japesbp","aztecbp","factorybp","gloomybp","fungibp","cavebp","castlebp","islesbp"] },
       { name: "All Blueprints in Angry Aztec", types: ["aztec","bp","manybp","aztecbp"] },
       { name: "200 Bananas in Angry Aztec", types: ["aztec","aztecbananas"] },
       { name: "1 GB for each Kong in Crystal Caves", types: ["cave","cavegb"] },
       { name: "2 Minecart Mayhem GBs", types: ["bonus"] },
       { name: "5 GBs in Creepy Castle", types: ["castle","castlegb"] }
   ];
   bingoList[15] = [
       { name: "3 Banana Medals in Frantic Factory", types: ["factory","medal","factorybananas"] },
       { name: "100 bananas for any Kong in Fungi Forest", types: ["fungi","fungibananas"] },
       { name: "All 5 GBs in 5 Door Igloo", types: ["cavegb","cave"] },
       { name: "100 bananas for any Kong in Crystal Caves", types: ["cave","cavebananas"] },
       { name: "All 3 GBs in Castle Dungeon", types: ["castle", "castlegb"] },
       { name: "3 Donkey Banana Medals", types: ["medal","japesbananas","aztecbananas","factorybananas","gloomybananas","fungibananas","cavebananas","castlebananas"] },
       { name: "All 4 GB's in Llama Temple", types: ["aztec", "aztecgb"] },
       { name: "350 Total Bananas", types: ["japesbananas","aztecbananas","factorybananas","gloomybananas","fungibananas","cavebananas","castlebananas"] },
       { name: "Both Car Races", types: ["tiny","race"] },
       { name: "All 4 GBs in Tiny Temple", types: ["aztecgb","aztec"] }
   ];
   bingoList[16] = [
       { name: "12 Rainbow Coins", types: ["coin ","restrict_coin"] },
       { name: "13 Blueprints", types: ["bp","manybp","japesbp","aztecbp","factorybp","gloomybp","fungibp","cavebp","castlebp","islesbp"] },
       { name: "250 Total Bananas With Diddy", types: ["japesbananas","aztecbananas","factorybananas","gloomybananas","fungibananas","cavebananas","castlebananas","diddy"] },
       { name: "Both Beetle Slides", types: ["race"] },
       { name: "1 GB for each Kong in Fungi Forest", types: ["fungi","fungigb"] },
       { name: "50 Coins with any 3 Kongs", types: ["coin","restrict_coin"] },
       { name: "100 bananas for any Kong in Creepy Castle", types: ["castle","castlebananas"] },
       { name: "All 5 GBs from 5 Door Ship", types: ["gloomy","gloomygb"] },
       { name: "10 Banana Fairies", types: ["fairy"] },
       { name: "200 Bananas in Crystal Caves", types: ["cave","cavebananas"] }
   ];
   bingoList[17] = [
       { name: "1 GB per level", types: ["manylevel","japesgb","aztecgb","factorygb","gloomygb","fungigb","cavegb","castlegb","islesgb"] },
       { name: "All 3 Beaver Bother GBs", types: ["bonus","castle"] },
       { name: "Donkey's Banana Medal in Hideout Helm", types: ["donkey","helm","medal"] },
       { name: "50 Bananas in every level", types: ["manylevel","japesbananas","aztecbananas","factorybananas","gloomybananas","fungibananas","cavebananas","castlebananas"] },
       { name: "All 5 Production Room GBs", types: ["factory","factorygb"] },
       { name: "3 Banana Medals in Gloomy Galleon", types: ["gloomy","medal","gloomybananas"] },
       { name: "All Blueprints in Fungi Forest", types: ["fungi","bp","manybp","fungibp"] },
       { name: "7 Tiny Blueprints", types: ["bp","tiny","japesbp","aztecbp","factorybp","gloomybp","fungibp","cavebp","castlebp","islesbp"] },
       { name: "1 GB for each Kong in Creepy Castle", types: ["castlegb","castle"] },
       { name: "250 Total Bananas With Lanky", types: ["lanky","japesbananas","aztecbananas","factorybananas","gloomybananas","fungibananas","cavebananas","castlebananas"] }
   ];
   bingoList[18] = [
       { name: "10 Diddy GBs", types: ["diddy","bp","japesgb","aztecgb","factorygb","gloomygb","fungigb","cavegb","castlegb","islesgb"] },
       { name: "75 Coins with any Kong", types: ["coin","restrict_coin"] },
       { name: "Nintendo Coin", types: ["factory","donkey"] },
       { name: "16 Blueprints", types: ["bp","manybp","japesbp","aztecbp","factorybp","gloomybp","fungibp","cavebp","castlebp","islesbp"] },
       { name: "All 4 Bonus Barrel GBs in Giant Mushroom area", types: ["fungi, fungigb"] },
       { name: "3 Banana Medals in Angry Aztec", types: ["aztec","aztecbananas"] },
       { name: "250 Total Bananas With Tiny", types: ["tiny","japesbananas","aztecbananas","factorybananas","gloomybananas","fungibananas","cavebananas","castlebananas"] },
       { name: "All 5 GBs in 5 Door Cabin", types: ["cavegb","diddy","cave"] },
       { name: "3 Lanky Banana Medals", types: ["medal","lanky","japesbananas","aztecbananas","factorybananas","gloomybananas","fungibananas","cavebananas","castlebananas"] },
       { name: "2 GBs for each Kong in Jungle Japes", types: ["japesgb","manybp","japes"] }
   ];
   bingoList[19] = [
       { name: "Open Crown Door in Helm", types: ["helm","japescrown","azteccrown","factorycrown","gloomycrown","fungicrown","cavecrown","castlecrown","islescrown","helmcrown"] },
       { name: "3 Diddy Banana Medals", types: ["diddy","medal","japesbananas","aztecbananas","factorybananas","gloomybananas","fungibananas","cavebananas","castlebananas"] },
       { name: "5 Boss Keys", types: ["key","manykey"] },
       { name: "250 Total Bananas With Chunky", types: ["chunky","japesbananas","aztecbananas","factorybananas","gloomybananas","fungibananas","cavebananas","castlebananas"] },
       { name: "200 Bananas in Fungi Forest", types: ["fungibananas","fungi"] },
       { name: "3 Banana Medals in Crystal Caves", types: ["medal","cavebananas","cave"] },
       { name: "7 Diddy Blueprints", types: ["bp","diddy","japesbp","aztecbp","factorybp","gloomybp","fungibp","cavebp","castlebp","islesbp"] },
       { name: "7 Lanky Blueprints", types: ["bp","lanky","japesbp","aztecbp","factorybp","gloomybp","fungibp","cavebp","castlebp","islesbp"] },
       { name: "2 GBs for each Kong in Frantic Factory", types: ["factory","manybp","factorygb"] },
       { name: "3 Blueprints on each Kong", types: ["manybp","japesbp","aztecbp","factorybp","gloomybp","fungibp","cavebp","castlebp","islesbp"] }
   ];
   bingoList[20] = [
       { name: "7 Donkey Blueprints", types: ["bp","donkey","japesbp","aztecbp","factorybp","gloomybp","fungibp","cavebp","castlebp","islesbp"] },
       { name: "3 Tiny Banana Medals", types: ["medal","tiny","japesbananas","aztecbananas","factorybananas","gloomybananas","fungibananas","cavebananas","castlebananas"] },
       { name: "10 GBs in Frantic Factory", types: ["factory","factorygb"] },
       { name: "10 GBs in DK Isles", types: ["isles","islesgb"] },
       { name: "7 Chunky Blueprints", types: ["bp","chunky","japesbp","aztecbp","factorybp","gloomybp","fungibp","cavebp","castlebp","islesbp"] },
       { name: "Spawn K. Rool Battle", types: ["key3","key8","key","manykey"] },
       { name: "10 Lanky GBs", types: ["lanky","japesgb","aztecgb","factorygb","gloomygb","fungigb","cavegb","castlegb","islesgb"] },
       { name: "200 Bananas in Creepy Castle", types: ["castlebananas","castle"] },
       { name: "3 Chunky Banana Medals", types: ["medal","chunky","japesbananas","aztecbananas","factorybananas","gloomybananas","fungibananas","cavebananas","castlebananas"] },
       { name: "10 GBs in Gloomy Galleon", types: ["gloomy","galleongb"] },
       { name: "10 Tiny GBs", types: ["tiny","japesgb","aztecgb","factorygb","gloomygb","fungigb","cavegb","castlegb","islesgb"] }
   ];
   bingoList[21] = [
       { name: "300 Total Banana Coins", types: ["coin","restrict_coin"] },
       { name: "5 Banana Medals", types: ["medal","japesbananas","aztecbananas","factorybananas","gloomybananas","fungibananas","cavebananas","castlebananas"] },
       { name: "Activate All Purple Warps", types: ["manylevel","japeswarp","aztecwarp","factorywarp","gloomywarp","fungiwarp","cavewarp","castlewarp"] },
       { name: "Activate All Green Warps", types: ["manylevel","japeswarp","aztecwarp","factorywarp","gloomywarp","fungiwarp","cavewarp","castlewarp"] },
       { name: "Open Helm Lobby", types: ["key7","key6","key","manykey"] },
       { name: "10 GBs in Angry Aztec", types: ["aztecgb","aztec"] },
       { name: "20 GBs", types: ["bp","manybp","japesgb","aztecgb","factorygb","gloomygb","fungigb","cavegb","castlegb","islesgb"] },
       { name: "10 Chunky GBs", types: ["chunky","japesgb","aztecgb","factorygb","gloomygb","fungigb","cavegb","castlegb","islesgb"] },
       { name: "3 GBs on each kong", types: ["manybp","japesgb","aztecgb","factorygb","gloomygb","fungigb","cavegb","castlegb","islesgb"] },
       { name: "2 GBs for each Kong in Gloomy Galleon", types: ["gloomy","manybp","galleongb"] }
   ];
   bingoList[22] = [
       { name: "Chunky's Banana Medal in Hideout Helm", types: ["helm","medal","chunky"] },
       { name: "10 GBs in Crystal Caves", types: ["cavegb","cave"] },
       { name: "3 Banana Medals in Fungi Forest", types: ["fungibananas","medal","fungi"] },
       { name: "500 Total Bananas", types: ["japesbananas","aztecbananas","factorybananas","gloomybananas","fungibananas","cavebananas","castlebananas"] },
       { name: "20 Blueprints", types: ["bp","manybp","japesbp","aztecbp","factorybp","gloomybp","fungibp","cavebp","castlebp","islesbp"] },
       { name: "3 Banana Medals in Creepy Castle", types: ["castlebananas","castle","medal"] },
       { name: "15 Donkey GBs", types: ["donkey","japesgb","aztecgb","factorygb","gloomygb","fungigb","cavegb","castlegb","islesgb"] },
       { name: "2 GBs for each Kong in DK Isles", types: ["isles","manybp","islesgb"] },
       { name: "Activate All Red Warps", types: ["manylevel","japeswarp","aztecwarp","factorywarp","gloomywarp","fungiwarp","cavewarp","castlewarp"] },
       { name: "Activate All Yellow Warps", types: ["manylevel","japeswarp","aztecwarp","factorywarp","gloomywarp","fungiwarp","cavewarp","castlewarp"] }
   ];
   bingoList[23] = [
       { name: "6 Battle Crowns", types: ["japescrown","azteccrown","factorycrown","gloomycrown","fungicrown","cavecrown","castlecrown","islescrown","helmcrown"] },
       { name: "All 5 GBs from 5 Door Temple", types: ["aztecgb","aztec"] },
       { name: "All 4 R&D GBs", types: ["factorygb","factory"] },
       { name: "Complete DK phase of K. Rool Fight", types: ["key3","key8","key","manykey"] },
       { name: "10 GBs in Creepy Castle", types: ["castlegb","castle"] },
       { name: "2 GBs per level", types: ["manylevel","japesgb","aztecgb","factorygb","gloomygb","fungigb","cavegb","castlegb","islesgb"] },
       { name: "Banana Medal with Every Kong", types: ["medal","japesbananas","aztecbananas","factorybananas","gloomybananas","fungibananas","cavebananas","castlebananas"] },
       { name: "90 coins with one Kong", types: ["coin","restrict_coin"] },
       { name: "2 GBs for each Kong in Crystal Caves", types: ["cavegb","cave","manybp"] },
       { name: "Activate All Blue Warps", types: ["manylevel","japeswarp","aztecwarp","factorywarp","gloomywarp","fungiwarp","cavewarp","castlewarp"] }
   ];
   bingoList[24] = [
       { name: "All 5 Crypt GBs in Castle", types: ["castle","castlegb"] },
       { name: "13 Banana Fairies", types: ["fairy","key8"] },
       { name: "Complete All 7 Baboon Blasts", types: ["donkey","manylevel","japesgb","aztecgb","factorygb","gloomygb","fungigb","cavegb","castlegb","islesgb"] },
       { name: "2 GBs for each Kong in Fungi Forest", types: ["fungigb","fungi"] },
       { name: "4 Blueprints on each Kong", types: ["bp","manybp","japesbp","aztecbp","factorybp","gloomybp","fungibp","cavebp","castlebp","islesbp"] },
       { name: "6 Boss Keys", types: ["key","manykey"] },
       { name: "All 3 Minecart rides", types: ["race"] },
       { name: "10 GBs in Fungi Forest", types: ["fungigb","fungi"] },
       { name: "2 GBs for each Kong in Angry Aztec", types: ["aztec","manybp","aztecgb"] },
       { name: "8 Bonus Barrel GBs", types: ["bonus","japesgb","aztecgb","factorygb","gloomygb","fungigb","cavegb","castlegb","islesgb"] }
   ];
   bingoList[25] = [
       { name: "4 GBs on each kong", types: ["manybp","japesgb","aztecgb","factorygb","gloomygb","fungigb","cavegb","castlegb","islesgb"] },
       { name: "Complete Diddy's phase of K. Rool Fight", types: ["key3","key8","key","manykey"] },
       { name: "Complete 4 Coin-Collecting Courses", types: ["race"] },
       { name: "600 Total Bananas", types: ["japesbananas","aztecbananas","factorybananas","gloomybananas","fungibananas","cavebananas","castlebananas"] },
       { name: "25 Blueprints", types: ["bp","manybp","japesbp","aztecbp","factorybp","gloomybp","fungibp","cavebp","castlebp","islesbp"] },
       { name: "2 GBs for Each Kong in Creepy Castle", types: ["castle","castlegb"] },
       { name: "15 Diddy GBs", types: ["diddy","japesgb","aztecgb","factorygb","gloomygb","fungigb","cavegb","castlegb","islesgb"] },
       { name: "Lanky's Medal in Helm", types: ["helm","medal","lanky"] },
       { name: "25 GBs", types: ["bp","manybp","japesgb","aztecgb","factorygb","gloomygb","fungigb","cavegb","castlegb","islesgb"] },
       { name: "All banana medals for any level", types: ["medal","japesbananas","aztecbananas","factorybananas","gloomybananas","fungibananas","cavebananas","castlebananas"] }
   ];
