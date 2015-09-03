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
var bingoList=[];
bingoList[1]=[{
name:"Map Card",types:["map"]},{
name:"TM28 (Dig)",types:["dig"]},{
name:"Itemfinder",types:["item"]},{
name:"Radio Card",types:["radio"]},];
bingoList[2]=[{
name:"Koffing",types:["gas"]},{
name:"4 Different types of Poke Ball",types:["ball"]},{
name:"Give a Pokemon a haircut",types:["snip"]},{
name:"Charcoal",types:["fire"]}];
bingoList[3]=[{
name:"Call a Youngster",types:["shorts"]},{
name:"Magikarp",types:["lol"]},{
name:"Teach TM12 (Sweet Scent)",types:["bug"]},{
name:"Rattata",types:["lol"]},];
bingoList[4]=[{
name:"TM20 (Endure)",types:["endure"]},{
name:"Slowpoketail",types:["money"]},{
name:"Growlithe",types:["grow"]},{
name:"10 pokemon owned",types:["pkmn"]}];
bingoList[5]=[{
name:"Goldeen",types:["oldeen"]},{
name:"Onix",types:["rock"]},{
name:"Venonat",types:["radar"]},{
name:"Defeat all 4 trainers in National Park",types:["park"]}];
bingoList[6]=[{
name:"Cubone",types:["money"]},{
name:"Slowpoke",types:["dopey"]},{
name:"A Pokemon with 4 moves with STAB",types:["tm"]},{
name:"TM05 (Roar)",types:["thirty"]}];
bingoList[7]=[{
name:"Ariados",types:["time"]},{
name:"No money on hand or mom",types:["cash"]},{
name:"Farfetch'd",types:["time"]},{
name:"TM50 (Nightmare)",types:["thirty"]}];
bingoList[8]=[{
name:"3 eggs",types:["egg"]},{
name:"Kadabra",types:["abra"]},{
name:"Beedrill and Butterfree",types:["buggy"]},{
name:"Unown Pokedex",types:["unown"]},{
name:"Everstone",types:["egg"]}];
bingoList[9]=[{
name:"Noctowl",types:["trees"]},{
name:"Defeat a Ponyta",types:["thirty"]},{
name:"Aipom",types:["pompom"]},{
name:"Use no repels",types:["repel","instant"]},{
name:"7 Different berries",types:["berry"]}];
bingoList[10]=[{
name:"TM40 (Swagger)",types:["sandwich"]},{
name:"Graveler",types:["gravel"]},{
name:"Do not heal at any Pokemon Centers",types:["heal","instant"]},{
name:"Defeat all 8 trainers on route 32",types:["train"]}];
bingoList[11]=[{
name:"TM10 (Hidden Power)",types:["time"]},{
name:"Burn Sudowoodo",types:["wtf"]},{
name:"Phanpy",types:["time"]},{
name:"HM05 (Flash)",types:["flash"]}];
bingoList[12]=[{
name:"Azumarill",types:["time"]},{
name:"A Pokemon with Focus Energy",types:["focus"]},{
name:"Win Bug Catching contest",types:["day"]},{
name:"Corsola",types:["rod"]}];
bingoList[13]=[{
name:"Catch Shuckle",types:["shuck"]},{
name:"Do not use any TMs",types:["tm","instant"]},{
name:"A shiny Pokemon",types:["waters"]},{
name:"Release starter before level 11",types:["starter"]}];
bingoList[14]=[{
name:"Miltank",types:["time"]},{
name:"TM 13 (Snore)",types:["zzz"]},{
name:"A Pokemon with 4 non-TM status moves",types:["hop"]},{
name:"Mystic Water",types:["thirty"]}];
bingoList[15]=[{
name:"20 TMs",types:["tm"]},{
name:"King's Rock",types:["slow"]},{
name:"Soft Sand",types:["pro"]},{
name:"Exp Share",types:["whirl"]}];
bingoList[16]=[{
name:"20 Pokemon owned",types:["pkmn"]},{
name:"Mantine",types:["mant"]},{
name:"Heracross",types:["hera"]},{
name:"Evolve Eevee",types:["stone"]}];
bingoList[17]=[{
name:"Stop starter evolving 6 times",types:["starter"]},{
name:"Wobbuffet",types:["time"]},{
name:"Xatu",types:["alph"]},{
name:"Defeat Lapras",types:["day"]}];
bingoList[18]=[{
name:"Poliwhirl",types:["raise"]},{
name:"Encounter Suicune on route 42",types:["cune"]},{
name:"Dunsparce",types:["sparce"]},{
name:"4 Rare Candies",types:["rare"]}];
bingoList[19]=[{
name:"A Pokemon with pursuit",types:["suit"]},{
name:"Pokemon with an evasion boosting move",types:["ass"]},{
name:"TM 46 (Thief)",types:["whirl"]},{
name:"Nidoking or Nidoqueen",types:["nido"]}];
bingoList[20]=[{
name:"Granbull",types:["raise"]},{
name:"Berry Juice",types:["shuck"]},{
name:"Max phonebook",types:["battles"]},{
name:"HM02 (Fly)",types:["whee"]}];
bingoList[21]=[{
name:"Mineralbadge",types:["steel"]},{
name:"80 Pokemon seen",types:["pkmn"]},{
name:"Electrode",types:["elec"]},{
name:"3 baby Pokemon",types:["egg"]}];
bingoList[22]=[{
name:"Bayleef",types:["starter"]},{
name:"TM21 (Frustration) or TM27 (Return)",types:["day"]},{
name:"A Pokemon with Flame Wheel",types:["starter"]},{
name:"Own 10 different Flying type Pokemon",types:["pkmn"]}];
bingoList[23]=[{
name:"3 level 30 Pokemon",types:["red"]},{
name:"Glacierbadge",types:["whirl"]},{
name:"Defeat 10 Pokemaniacs",types:["harley"]},{
name:"Sandslash",types:["raise"]}];
bingoList[24]=[{
name:"$50,000",types:["money","cash"]},{
name:"Battle a Legendary Pokemon",types:["ass"]},{
name:"30 Pokemon owned",types:["pkmn"]},{
name:"Lanturn",types:["raise"]}];
bingoList[25]=[{
name:"Jumpluff",types:["raise"]},{
name:"Receive elixer from Fishing Guru",types:["karp"]},{
name:"Win a Battle Tower match",types:["gg"]},{
name:"6 Badges",types:["whee"]}];
