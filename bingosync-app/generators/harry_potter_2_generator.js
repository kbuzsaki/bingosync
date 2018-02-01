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
    { name:"Get all 28 beans in Willow" , types: ["willow"] },
    { name:"Activate both secrets in Willow from out of bounds" , types: ["willow"] },
];
bingoList[2] = [
    { name:"Complete Willow without using the mouse" , types: ["willow"] },
    { name:"Get all of the beans in the chasm" , types: ["rictu"] },
    { name:"Get Hagrid's Wizard Card during your first night at Hogwarts" , types: ["cards", "outside"] },
];
bingoList[3] = [
    { name:"Get 8 challenge stars in Rictusempra" , types: ["rictu", "stars"] },
    { name:"Hit 10 cauldrons" , types: ["collection"] },
    { name:"Get on top of Hagrid's Hut" , types: ["outside"] },
];
bingoList[4] = [
    { name:"Get all Rictusempra secrets" , types: ["rictu", "cards"] },
    { name:"Put 15 crabs into pits during Rictusempra" , types: ["rictu"] },
    { name:"Kill Peeves" , types: ["skurge"] },
    { name:"Finish a spell challenge with a gnome in your hand" , types: ["compstar"] },
    { name:"Collect the 14 beans on the roof in the Bean Bonus Room" , types: ["beans"] },
];
bingoList[5] = [
    { name:"Complete a Quidditch game before learning how to fly" , types: ["outside"] },
    { name:"Lose 5 house points" , types: ["inside"] },
    { name:"Cast at all 3 of the pigs near Hagrid's Hut" , types: ["outside"] },
    { name:"Get behind the Quidditch gate" , types: ["outside"] },
    { name:"Get the 16 beans on Lockhart's balcony" , types: [ "stairs"] },
];
bingoList[6] = [
    { name:"Complete Rictusempra without using the mouse" , types: ["rictu"] },
    { name:"Get 8 Skurge challenge stars" , types: ["skurge", "stars"] },
    { name:"Get all Skurge secrets" , types: ["skurge", "cards"] },
    { name:"Clip 4 gnomes out of bounds" , types: ["bicorn"] },
    { name:"Enter Quidditch practice from out of bounds" , types: ["outside"] },
];
bingoList[7] = [
    { name:"All Bicorn secrets" , types: ["bicorn", "cards"] },
    { name:"Empty 10 armor stands" , types: ["inside"] },
    { name:"Lose a Quidditch match by 250 points" , types: ["outside"] },
];
bingoList[8] = [
    { name:"Complete Skurge without using the mouse" , types: ["skurge"] },
    { name:"Get enough ingredients for 4 potions during Bicorn" , types: ["bicorn", "potions"] },
    { name:"Complete all 10 duels" , types: ["duels", "beans"] },
    { name:"Activate a potion cauldron with a gnome" , types: ["potions"] },
    { name:"Get to the Diffindo classroom before Quidditch practice" , types: ["outside"] },
];
bingoList[9] = [
    { name:"Complete Diffindo without casting Diffindo" , types: ["diffindo"] },
    { name:"Empty 5 bean boxes" , types: ["collection"] },
    { name:"Buy the Quidditch Armor" , types: ["beans"] },
    { name:"Talk to Percy, Hagrid, Snape, and Madam Pomfrey" , types: ["inside", "outside", "stairs"] }
];
bingoList[10] = [
    { name:"Beat Peter without Expelliarmus" , types: ["duels", "beans"] },
    { name:"Get 9 Diffindo challenge stars" , types: ["diffindo", "stars"] },
    { name:"Complete Diffindo without using the mouse" , types: ["diffindo"] },
    { name:"Have 15 potions" , types: ["potions"] },
    { name:"Buy the Nimbus 2001" , types: ["beans"] },
];
bingoList[11] = [
    { name:"Make a 5 mushroom high tower in Diffindo" , types: ["diffindo"] },
    { name:"Get all Boomslang secrets" , types: ["boom", "cards"] },
    { name:"Collect 3 chocolate frogs in Boomslang" , types: ["boom"] },
    { name:"Buy 3 Bronze Wizard Cards" , types: ["cards", "beans"] },
    { name:"Get 2 health increases" , types: ["cards", "beans"] },
];
bingoList[12] = [
    { name:"Beat Malfoy with only Mimblewimble"  , types: ["diffindo"] },
    { name:"Cut all Venomous Tentacula heads off in Boomslang" , types: ["boom"] },
    { name:"Collect 17 challenge stars" , types: ["stars"] },
    { name:"Finish with 1000 beans"  , types: ["beans"] },
];
bingoList[13] = [
    { name:"Get 13 Diffindo challenge stars" , types: ["diffindo", "stars"] },
    { name:"Complete Boomslang without jumping" , types: ["boom"] },
    { name:"Complete Goyle without casting Skurge" , types: ["goyle"] },
    { name:"Go up the fireplace in Goyle" , types: ["goyle"] },
    { name:"Get 2 keys" , types: ["cards", "beans"] },
];
bingoList[14] = [
    { name:"Let McGonagall fall down during the second Nick cutscene" , types: ["stairs", "goyle"] },
    { name:"Buy 4 Silver Wizard Cards" , types: ["cards", "beans"] },
    { name:"Collect 23 wizard cards" , types: ["cards"] },
    { name:"Get all Goyle secrets" , types: ["goyle", "cards"] },
];
bingoList[15] = [
    { name:"Win a Quidditch match by 60 points" , types: ["outside"] },
    { name:"Open 5 of each of the 4 chest types" , types: ["collection"] },
    { name:"Hit 8 different Lumos statues in Goyle" , types: ["goyle"] },
    { name:"Knock over 8 flower pots" , types: ["collection", "boom"] },
];
bingoList[16] = [
    { name:"Collect both potion ingredients as Harry in Slytherin" , types: ["slyth"] },
    { name:"Hit 25 cauldrons" , types: ["collection"] },
    { name:"Spawn 12 gnomes in the girl's bathroom" , types: ["collection"] },
    { name:"Finish with 2000 beans" , types: ["beans"] },
];
bingoList[17] = [
    { name:"Get 3 health increases" , types: ["cards", "beans"] },
    { name:"Buy 8 Bronze Wizard Cards" , types: ["cards", "beans"] },
    { name:"Get all Slytherin secrets" , types: ["slyth", "cards"] },
];
bingoList[18] = [
    { name:"Walk up the stairs to Girl's Dormitory in Slytherin" , types: ["slyth"] },
    { name:"Collect 37 wizard cards" , types: ["cards"] },
    { name:"Collect 31 challenge stars" , types: ["stars"] },
];
bingoList[19] = [
    { name:"Get 5 secrets as Harry in Slytherin" , types: ["slyth"] },
    { name:"Complete Spongify without using the mouse" , types: ["sponge"] },
    { name:"Jump on 5 Spongify tiles in a row without landing" , types: ["sponge"] },
    { name:"Enter Forest from out of bounds" , types: ["forest"] },
    { name:"Get 3 keys" , types: ["cards", "beans"] },
];
bingoList[20] = [
    { name:"Get all 4 completion stars" , types: ["sponge", "compstar"] },
    { name:"Open all 5 Peeves chests" , types: ["goyle"] },
    { name:"Collect 8 beans from the Great Hall at night" , types: ["inside", "forest"] },
    { name:"Get all Grounds secrets in both day and night" , types: ["cards"] },
    { name:"Get all Entry Hall secrets" , types: ["cards", "inside"] },
];
bingoList[21] = [
    { name:"Have 9 Slytherins surrounding you on the table in Slytherin" , types: ["slyth"] },
    { name:"Get all Forest secrets" , types: ["forest", "cards"] },
    { name:"Get all Grand Staircase secrets" , types: ["cards", "stairs", "sponge"] },
    { name:"Hit all of the ropes in the Aragog fight" , types: ["forest"] },
];
bingoList[22] = [
    { name:"Kill 12 spiders in the Aragog fight" , types: ["forest"] },
    { name:"Get 8 Spongify challenge stars" , types: ["sponge", "stars"] },
    { name:"Cast on 5 Lumos statues during Spongify" , types: ["sponge"] },
    { name:"Use all 9 Spongify tiles in the Grand Staircase area" , types: ["sponge", "stairs"] },
];
bingoList[23] = [
    { name:"Get all Spongify secrets" , types: ["sponge", "cards"] },
    { name:"All Chamber secrets" , types: ["chamber"] },
    { name:"Skip the boulder cutscene in Chamber" , types: ["chamber"] },
    { name:"Collect 53 wizard cards" , types: ["cards"] },
];
bingoList[24] = [
    { name:"Put 4 imps into the same hole" , types: ["sponge"] },
    { name:"Avoid fire damage from the snake statues in Chamber" , types: ["chamber"] },
    { name:"Finish the game" , types: ["chamber"] },
];
bingoList[25] = [
    { name:"Take no damage in the Basilisk fight" , types: ["chamber"] },
    { name:"Get the Harry Potter Wizard Card" , types: ["cards"] },
    { name:"Get 5 health increases" , types: ["cards", "beans"] },
];
