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
var bingoList = [];
bingoList[1] = [
    { name: "Pic: Gust-using Pidgey", types: ["beach"] },
    { name: "Pic: Sleeping Snorlax", types: ["beach"] },
    { name: "Pic: Vulpix (Uncentered)", types: ["colcano"] },
    { name: "Look at Butterfree in report", types: ["report"] },
    { name: "Drive out of Tunnel", types: ["tunnel","drive"] },
    { name: "Unlock Pester Balls", types: ["perster"] }
];
bingoList[2] = [
    { name: "Make Pikachu ride Electrode", types: ["tunnel"] },
    { name: "Make three Dugtrios appear", types: ["tunnel"] },
    { name: "Pic: Fainted Doduo", types: ["beach"] },
    { name: "Throw Meowth down the hill", types: ["beach","perster"] },
    { name: "Pic: Slowbro", types: ["river"] },
    { name: "Pic: Charmeleon", types: ["volcano"] }
];
bingoList[3] = [
    { name: "Release three Porygons", types: ["river","perster"] },
    { name: "Pic: Speed Pikachu", types: ["river"] },
    { name: "Pic: Shellder Sign", types: ["river"] },
    { name: "Pic: Surfer Pikachu", types: ["beach"] },
    { name: "Add a Rapidash to your album", types: ["volcano","album"] },
    { name: "Pic: Wonderful Zubat (Cave)", types: ["cave"] },
    { name: "Pic: Beach Sign", types: ["beach"] }
];
bingoList[4] = [
    { name: "Hit a Kakuna with an apple", types: ["river"] },
    { name: "Make Victreebel appear", types: ["cave"] },
    { name: "Full camera film in Tunnel", types: ["film"] },
    { name: "Throw a perster ball at Electrabuzz", types: ["perster","tunnel"] },
    { name: "3000+ Pic of Butterfree", types: ["beach"] },
    { name: "Pic: Digging Sandslash", types: ["valley"] }
];
bingoList[5] = [
    { name: "1000- Pic of Electrode", types: ["tunnel"] },
    { name: "Save Meowth from the Pidgeys", types: ["beach"] },
    { name: "Unlock the PokeFlute", types: ["flute"] },
    { name: "Make a sparkling Dratini spawn", types: ["valley"] },
    { name: "Pic: Climbing Graveler", types: ["valley","graveler"] },
    { name: "Wonderful pic of Jynx", types: ["cave"] },
    { name: "make both Electrabuzz activate the TV screens", types: ["tunnel"] }
];
bingoList[6] = [
    { name: "Pic: Running Poliwag", types: ["river"] },
    { name: "Get all Poliwags into the water", types: ["river","perster"] },
    { name: "Pic: Sparkling Magikarp (Cave)", types: ["cave","perster"] },
    { name: "4000+ Haunter", types: ["tunnel"] },
    { name: "Volcano Sign", types: ["sign","volcano"] },
    { name: "Pester ball a Vulpix", types: ["volcano","perster"] },
    { name: "Crash into the egg of Moltres", types: ["volcano"] }
];
bingoList[7] = [
    { name: "Pic: Three Bulbasaurs", types: ["river"] },
    { name: "Add a Pic of a palm tree to the album", types: ["album"] },
    { name: "Pic: Magikarp in Volcano", types: ["castle"] },
    { name: "Pic: Geodude w/ bonus points", types: ["valley"] },
    { name: "3000+ Shellder", types: ["river"] },
    { name: "300- Jynx", types: ["cave"] }
];
bingoList[8] = [
    { name: "Pic: Two Muks", types: ["cave"] },
    { name: "Make both Slowbros spawn", types: ["river"] },
    { name: "Drive out of Cave", types: ["cave","drive"] },
    { name: "Wonderful pic of Arcanine", types: ["volcano"] },
    { name: "Wonderful pic of Magikarp in River", types: ["river"] },
    { name: "3000+ Doduo", types: ["beach"] },
    { name: "4000+ Slowbro", types: ["river"] },
    { name: "Unlock Valley", types: ["valley","rainbow","flute"] }
];
bingoList[9] = [
    { name: "Pic: Jigglypuff Trio", types: ["cave"] },
    { name: "Pic: Fainted Weepinbell", types: ["cave"] },
    { name: "Wonderful pic of Staryu", types: ["valley"] },
    { name: "Pic: Magikarp lying on the floor", types: ["valley"] },
    { name: "Hit the last Electrode in Tunnel without activating the cutscene", types: ["tunnel"] },
    { name: "Add a pic of a dead tree to the album", types: ["valley"] }
];
bingoList[10] = [
    { name: "Pic: Mid-air Sandshrew", types: ["valley"] },
    { name: "Pic: Dancing Slowpoke", types: ["river","flute"] },
    { name: "Pic: Fighting Magmars", types: ["volcano"] },
    { name: "Pic: Balloon Pikachu", types: ["cave"] },
    { name: "4000+ Porygon", types: ["river"] },
    { name: "Lave Volcano w/ 4 pics left", types: ["volcano"] },
    { name: "3200+ Psyduck", types: ["river"] }
];
bingoList[11] = [
    { name: "Pic: Two Cloysters", types: ["river"] },
    { name: "Make Charizard spawn", types: ["volcano"] },
    { name: "Pic: Three Vulpix", types: ["volcano"] },
    { name: "Hit a Cloyster with an apple", types: ["river"] },
    { name: "3500+ Charizard", types: ["volcano"] },
    { name: "Throw twelve apples into a trunk", types: ["river"] },
    { name: "2500+ Weepinbell", types: ["cave"] },
    { name: "Pics of all three Pikachus in Tunnel in the album", types: ["tunnel","album"] }
];
bingoList[12] = [
    { name: "Dancing Meowth pic", types: ["beach","flute"] },
    { name: "Make Magmar attack Charmander", types: ["volcano"] },
    { name: "500- Moltres", types: ["volcano"] },
    { name: "Pic: Kangaskhan in the air", types: ["beach"] },
    { name: "Pic: Snorlax with both feet in the air", types: ["beach"] }
];
bingoList[13] = [
    { name: "Wonderful pic of four Metapods", types: ["river"] },
    { name: "3000+ Chansey", types: ["beach"] },
    { name: "Wonderful pic of the Porygon activating the switch", types: ["river"] },
    { name: "Make all four Bulbasaurs in Cave evolve", types: ["perster","bulbasaur"] },
    { name: "3000+ Ditto", types: ["cave"] },
    { name: "Hit Moltres with an apple", types: ["volcano"] },
    { name: "Wonderful pic of Magikarp in Beach", types: ["beach"] }
];
bingoList[14] = [
    { name: "3000+ Scyther", types: ["beach","perster"] },
    { name: "3500+ Kangaskhan", types: ["beach"] },
    { name: "3000+ Cloyster", types: ["river"] },
    { name: "3000+ Koffing", types: ["cave"] },
    { name: "3000+ Zubat", types: ["cave"] },
    { name: "4000+ Rapidash", types: ["volcano"] },
    { name: "3000+ Charmeleon", types: ["volcano"] },
    { name: "2000+ Dratini", types: ["valley"] },
    { name: "4000+ Gyarados", types: ["valley"] }
];
bingoList[15] = [
    { name: "4500+ Dragonite", types: ["valley","perster"] },
    { name: "Pic of Rapidash standing on the front legs", types: ["volcano"] },
    { name: "Make Sandslash faint with a perster ball", types: ["valley","perster"] },
    { name: "Get eight different Pokemon in Beach", types: ["beach"] },
    { name: "Crash into a Dratini with your cart", types: ["valley"] },
    { name: "Pic: Four different Pokemon", types: ["rainbow"] }
];
bingoList[16] = [
    { name: "Pic: Jumping Graveler", types: ["valley","graveler"] },
    { name: "20 pics of the first Grimer in Cave", types: ["cave"] },
    { name: "15+ pics in the album", types: ["album"] },
    { name: "Sparkling Goldeen pic", types: ["valley","perster"] },
    { name: "Pic: Six Charmanders dancing", types: ["volcano","flute"] },
    { name: "Dancing Gravelers pic", types: ["valley","flute","graveler"] },
    { name: "Crash into a Vulpix", types: ["volcano"] },
    { name: "4000+ Kakuna", types: ["cave"] }
];
bingoList[17] = [
    { name: "Full camera film in Rainbow Cloud", types: ["film","rainbow"] },
    { name: "Submit an uncentered Moltres pic", types: ["volcano"] },
    { name: "Pic: Zapdos activating the generator", types: ["tunnel"] },
    { name: "Cave sign", types: ["cave","sign"] },
    { name: "River sign", types: ["river","sign"] },
    { name: "Tunnel sign", types: ["sign","tunnel"] }
];
bingoList[18] = [
    { name: "Pics of three different Snorlax dances in the album", types: ["flute","beach","album"] },
    { name: "Four pics of four different Mankeys in the album", types: ["valley","album"] },
    { name: "Knock out three different Mankeys", types: ["valley","perster"] },
    { name: "4200+ Gyarados", types: ["perster","valley"] },
    { name: "Wonderful pic of Starmie", types: ["valley"] },
    { name: "Pic: Three Squirtles", types: ["valley","perster"] }
];
bingoList[19] = [
    { name: "Pic: Haunter and a flying apple", types: ["tunnel"] },
    { name: "Make the second Scyther spawn", types: ["beach"] },
    { name: "Pics of all three Vileplume dances in the album", types: ["river","flute","album"] },
    { name: "Pic: Three Growlithes", types: ["volcano"] },
    { name: "3500+ Magnemite", types: ["tunnel"] },
    { name: "3500+ Magneton", types: ["tunnel"] },
    { name: "3750+ Snorlax", types: ["beach"] },
    { name: "3000+ Zapdos", types: ["tunnel"] },
    { name: "3000+ Lapras", types: ["beach"] }
];
bingoList[20] = [
    { name: "Six pics of Charizard spitting fire", types: ["volcano"] },
    { name: "Pics of five different exploded Electrodes in the album", types: ["apple","tunnel","album"] },
    { name: "Pics of all three legendary bird eggs in the album", types: ["album"] },
    { name: "Pic of two combined Magnemites in the album", types: ["tunnel"] },
    { name: "Unlock Rainbow Cloud", types: ["rainbow"] },
    { name: "3500+ Electrode", types: ["tunnel"] },
    { name: "5000+ Pidgey", types: ["beach"] },
    { name: "4800+ Magmar", types: ["volcano"] }
];
bingoList[21] = [
    { name: "pic of a jumping Vileplume in the album", types: ["river","flute","album"] },
    { name: "4400+ Jigglypuff", types: ["cave"] },
    { name: "4000+ Grimer", types: ["cave"] },
    { name: "4000+ Victreebel", types: ["cave"] },
    { name: "3500+ Poliwag", types: ["river"] }
];
bingoList[22] = [
    { name: "4500+ Moltres", types: ["volcano"] },
    { name: "Pic: Two Psyducks", types: ["river"] },
    { name: "Snipe first Psyduck w/o using boost (River)", types: ["river"] },
    { name: "Wonderful pic of Metapod climbing back up", types: ["river"] },
    { name: "Crash into a jumping Psyduck", types: ["river"] },
    { name: "4000+ Muk", types: ["cave"] },
    { name: "500- Koffing", types: ["cave"] }
];
bingoList[23] = [
    { name: "4800 Sandslash", types: ["valley"] },
    { name: "Pics of two different Charmeleons lying on the floor", types: ["volcano","perster"] },
    { name: "Pic: Exactly three Charmanders dancing", types: ["volcano"] },
    { name: "Pic: Three Rapidashes", types: ["volcano"] },
    { name: "Pic: One wing of Zubat only", types: ["tunnel","cave"] },
    { name: "Pic: Four Kakunas", types: ["tunnel"] },
    { name: "Submit 11 uncentered pics in Tunnel", types: ["tunnel"] },
    { name: "Look at Mew in the Pokemon Report", types: ["rainbow"] }
];
bingoList[24] = [
    { name: "Pic: Three Arcanines", types: ["volcano","perster"] },
    { name: "Pic: Two Electabuzz eating the same apple", types: ["tunnel"] },
    { name: "Watch the end credits", types: ["rainbow"] },
    { name: "3000- Mew", types: ["rainbow"] },
    { name: "3400+ Diglett", types: ["tunnel"] },
    { name: "Pester Ball a Zubat in Cave", types: ["cave","perster"] }
];
bingoList[25] = [
    { name: "Pic: Mew facing you", types: ["rainbow"] },
    { name: "11 Wonderful pics of different Pokemon in Valley", types: ["valley"] },
    { name: "Pic: Pikachu riding Articuno", types: ["cave"] },
    { name: "Two Pokemon signs and their corresponding Pokemon in the album", types: ["volcano"] },
    { name: "Throw 200 apples into the river in Valley", types: ["valley","apple"] },
    { name: "Challenge score in Beach", types: ["challenge"] },
    { name: "Challenge score in Volcano", types: ["challenge"] }
];
