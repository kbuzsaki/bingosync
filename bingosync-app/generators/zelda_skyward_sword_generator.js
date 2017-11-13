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

var bingoListVersion = "2.1";
var bingoList = [];

bingoList[1] = [
  { name: "Bring Mia to Horwell", types: ["Skyloft"] },
  { name: "Four Skyloft Chests", types: ["Skyloft", "Chests"] },
  { name: "Glittering Spores", types: ["Bottles", "Faron"] },
  { name: "Revitalizing Potion", types: ["Bottles", "Potions"] },
  { name: "Bottled Water", types: ["Bottles"] },
];
bingoList[2] = [
  { name: "Heart Potion", types: ["Potions"] },
  { name: "Practice Sword", types: ["Skyloft"] },
  { name: "Chandelier Heart Piece", types: ["Hearts", "Pumpkin"] },
  { name: "Complete a ringer skydive", types: ["Sky"] },
  { name: "Mushroom Spores", types: ["Bottles", "Faron"] },
];
bingoList[3] = [
  { name: "Guardian Potion", types: ["Bottles", "Potions"] },
  { name: "Hot Pumpkin Soup", types: ["Bottles"] },
  { name: "Kill three guays in the sky", types: ["Sky"] },
  { name: "Beedle's Gratitude Crystal", types: ["Crystals"] },
  { name: "10 Blessed Butterflies", types: ["Bugs"] },
];
bingoList[4] = [
  { name: "Heart Dowsing Target", types: ["Misc"] },
  { name: "Floria Waterfall Bird Statue", types: ["Faron"] },
  { name: "Sailcloth", types: ["Sailcloth", "Skyloft"] },
  { name: "Finish the Sword Tutorial", types: ["Skyloft"] },
  { name: "Finish with 6 Hearts", types: ["Restriction", "Hearts"] },
];
bingoList[5] = [
  { name: "3 Extra Wallets", types: ["Rupees"] },
  { name: "5 Skyloft Mantises", types: ["Bugs"] },
  { name: "5 Starry Fireflies", types: ["Bugs"] },
  { name: "Sleep in Zelda's Bed", types: ["Skyloft", "Sailcloth"] },
  { name: "Win the Wing Ceremony Twice", types: ["BiT", "Skyloft"] },
];
bingoList[6] = [
  { name: "3 Blue Bird Feathers", types: ["Treasures"] },
  { name: "5 Bird Feathers", types: ["Treasures"] },
  { name: "Banded Shield", types: ["Shields"] },
  { name: "10 Amber Relics", types: ["Treasures"] },
  { name: "50 Deku Hornets", types: ["Bugs"] },
  { name: "10 Woodland Rhino Beetles", types: ["Bugs"] },
];
bingoList[7] = [
  { name: "6 Pouch Slots", types: ["Pouch", "Rupees"] },
  { name: "4 Heart Pieces", types: ["Hearts"] },
  { name: "8 Faron Bird Statues", types: ["Statues", "Faron"] },
  { name: "5 Faron Goddess Cubes", types: ["Cubes", "Faron"] },
  { name: "5 Goddess Cubes", types: ["Cubes"] },
  { name: "500 Rupees", types: ["Rupees"] },
];
bingoList[8] = [
  { name: "10 Scattered Gratitude Crystals", types: ["Crystals"] },
  { name: "3 Bottles", types: ["Bottles"] },
  { name: "Batreaux's Heart Piece", types: ["Hearts", "Crystals"] },
  { name: "Orielle's Gratitude Crystals", types: ["Crystals"] },
  { name: "15 Gratitude Crystals", types: ["Crystals"] },
  { name: "Parrow's Gratitude Crystals", types: ["Crystals"] },
];
bingoList[9] = [
  { name: "Skyview Dungeon Map", types: ["Map", "Skyview"] },
  { name: "Defeat Ghirahim with a dart", types: ["Skyview"] },
  { name: "Skyview Zero Dungeon Map", types: ["Map", "Skyview", "BiT"] },
  { name: "Open all Skyview Temple Chests", types: ["Chests", "Skyview"] },
  { name: "Two Unused Small Keys", types: ["BiT", "Skyview"] },
  { name: "Both Faron Heart Pieces", types: ["Faron", "Hearts"] },
];
bingoList[10] = [
  { name: "Sleep in every Knight Academy Bed", types: ["Misc", "Sailcloth"] },
  { name: "28+ cuts at Bamboo Island", types: ["Misc"] },
  { name: "4 Eldin Bird Statues", types: ["Statues", "Eldin"] },
  { name: "Eldin Heart Piece", types: ["Hearts", "Eldin"] },
  { name: "Farore's Courage", types: ["BiT"] },
  { name: "Enter Isle of Songs", types: ["BiT"] },
];
bingoList[11] = [
  { name: "10 Volcanic Ladybugs", types: ["Bugs"] },
  { name: "60 Deku Seeds", types: ["Ammo"] },
  { name: "5 Eldin Ore", types: ["Treasures"] },
  { name: "3 Medals", types: ["Medals"] },
  { name: "Treasure Medal", types: ["Medals"] },
  { name: "3 Unique Shields", types: ["Shields"] },
];
bingoList[12] = [
  { name: "Fairy in a Bottle", types: ["Bottles"] },
  { name: "Heart Potion+", types: ["Potions"] },
  { name: "Guardian Potion+", types: ["Potions"] },
  { name: "Revitalizing Potion+", types: ["Potions"] },
  { name: "3 Unique Potion Upgrades", types: ["Potions", "Bottles"] },
  { name: "3 Unique Potions", types: ["Potions", "Bottles"] },
];
bingoList[13] = [
  { name: "Zelda's Heart Piece", types: ["End", "Hearts", "Sailcloth"] },
  { name: "25 Gratitude Crystals", types: ["Crystals"] },
  { name: "Zelda's Gratitude Crystal", types: ["End", "Crystals", "Sailcloth"] },
  { name: "Peatrice's Gratitude Crystals", types: ["Crystals"] },
  { name: "Clear a Thrill Digger Board", types: ["Eldin"] },
  { name: "6 Eldin Goddess Cubes", types: ["Cubes", "Eldin"] },
];
bingoList[14] = [
  { name: "Life Tree Seedling", types: ["BiT"] },
  { name: "Open all Earth Temple Chests", types: ["Chests", "Earth"] },
  { name: "Kina's Pumpkin Carrying Game", types: ["Pumpkin"] },
  { name: "Earth Temple Dungeon Map", types: ["Map", "Earth"] },
  { name: "5 Lizard Tails", types: ["Earth"] },
  { name: "Destroy all of Scaldera's Rocks", types: ["Earth"] },
];
bingoList[15] = [
  { name: "7 Pouch Slots", types: ["Pouch", "Rupees"] },
  { name: "1000 Rupees", types: ["Rupees"] },
  { name: "10 Goddess Cubes", types: ["Cubes"] },
  { name: "30 Bombs", types: ["Ammo"] },
  { name: "Bug Medal", types: ["Medals"] },
  { name: "Reinforced Shield", types: ["Shields"] },
];
bingoList[16] = [
  { name: "Obtain one of every treasure", types: ["Treasures"] },
  { name: "3 Unique Wooden Shields", types: ["Shields"] },
  { name: "Catch one of every bug", types: ["Bugs"] },
  { name: "Braced Shield", types: ["Shields"] },
  { name: "Big Bug Net", types: ["Upgrade"] },
  { name: "Quick Beetle", types: ["Upgrade"] },
];
bingoList[17] = [
  { name: "Updated Lanaryu Desert Map", types: ["Lanayru"] },
  { name: "Five map beacons", types: ["Lanayru"] },
  { name: "Duplicate an Ampilus Egg", types: ["Lanayru"] },
  { name: "Obtain a Recovery Heart", types: ["Misc"] },
  { name: "Both Life Medals", types: ["Medals"] },
  { name: "Lanayru Heart Piece", types: ["Hearts"] },
  { name: "5 Lanayru Goddess Cubes", types: ["Lanayru", "Cubes"] },
];
bingoList[18] = [
  { name: "Cursed Medal", types: ["Medals", "Crystals"] },
  { name: "15 Goddess Cubes", types: ["Cubes"] },
  { name: "4 Medals", types: ["Medals"] },
  { name: "12 Hearts", types: ["Hearts"] },
  { name: "1500 Rupees", types: ["Rupees"] },
  { name: "8 Heart Pieces", types: ["Hearts"] },
];
bingoList[19] = [
  { name: "Fortified Shield", types: ["Shields"] },
  { name: "Heart Potion++", types: ["Potions"] },
  { name: "Revitalizing Potion++", types: ["Potions"] },
  { name: "Large Slingshot Satchel", types: ["Ammo", "Upgrade"] },
  { name: "4 Unique Shields", types: ["Shields"] },
  { name: "Large Bomb Bag", types: ["Ammo", "Upgrade"] },
];
bingoList[20] = [
  { name: "Baby's Rattle", types: ["Misc"] },
  { name: "Mallara's Gratitude Crystals", types: ["Crystals"] },
  { name: "Turn a windmill", types: ["Misc"] },
  { name: "LMF Dungeon Map", types: ["Map", "LMF"] },
  { name: "3 Dungeon Maps", types: ["Map"] },
  { name: "3 Goddess Plumes", types: ["Treasures"] },
];
bingoList[21] = [
  { name: "16 Goddess Cubes", types: ["Cubes"] },
  { name: "11 Heart Pieces", types: ["Hearts"] },
  { name: "3 Unique Iron Shields", types: ["Shields"] },
  { name: "5 Unique Shields", types: ["Shields"] },
  { name: "Tough Beetle", types: ["Upgrade"] },
  { name: "Scattershot", types: ["Upgrade", "Harp", "BiT"] },
];
bingoList[22] = [
  { name: "20 Bird Statues", types: ["Statues", "Harp"] },
  { name: "Open all LMF Chests", types: ["LMF", "Chests"] },
  { name: "Goddess Harp", types: ["Harp"] },
  { name: "Stamina Potion", types: ["Potions"] },
  { name: "Temple of Time Bird Statue", types: ["Statues", "Harp"] },
  { name: "8 Lanayru Bird Statues", types: ["Statues", "Harp"] },
];
bingoList[23] = [
  { name: "8 Pouch Slots", types: ["Pouch", "Rupees"] },
  { name: "6 Medals", types: ["Medals"] },
  { name: "1900 Rupees", types: ["Rupees"] },
  { name: "Beedle's Heart Piece", types: ["Hearts", "Rupees"] },
  { name: "40 Gratitude Crystals", types: ["Crystals", "Imp"] },
  { name: "Open 40 Chests", types: ["Chests"] },
];
bingoList[24] = [
  { name: "Summon a Gossip Stone", types: ["Harp"] },
  { name: "Get Fairies from a Goddess Wall", types: ["BiT", "Harp"] },
  { name: "Stamina Potion+", types: ["Potions"] },
  { name: "Water Dragon's Scale", types: ["Harp", "BiT", "Scale"] },
  { name: "Reseal the Imprisoned", types: ["Harp", "Imp"] },
  { name: "Ballad of the Goddess", types: ["Harp"] },
];
bingoList[25] = [
  { name: "Talk to Yerbal", types: ["Harp", "BiT"] },
  { name: "Repair Scrapper", types: ["Harp", "Imp"] },
  { name: "Cawlin's Letter", types: ["Harp"] },
  { name: "Air Potion", types: ["Potions", "Scale", "BiT"] },
  { name: "Sacred Shield", types: ["Shields", "Imp", "Harp"] },
  { name: "Lake Floria Goddess Cube", types: ["Harp", "BiT", "Scale"] },
  { name: "All 10 Faron Bird Statues", types: ["Harp", "BiT", "Scale", "Statues"] },
];
