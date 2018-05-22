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

    // simpler generator that just does a random choice without duplicates
    Math.seedrandom(SEED);
    if (true) {
        var usedGoals = {};
        var bingoBoard = [];

        for (var i = 1; i <= 25; i++) {
            var randIndex = Math.floor(Math.random() * bingoList.length);
            while (usedGoals[randIndex]) {
                randIndex = Math.floor(Math.random() * bingoList.length);
            }
            usedGoals[randIndex] = true;

            var goal = bingoList[randIndex];
            bingoBoard[i] = {"name": goal};
        }

        return bingoBoard;
    }
};

var bingoList = [
    "$50000",
    "3 Baby Pokemon",
    "3 Different Dragon-Type Pokemon",
    "3 Different Gems",
    "3 Different Plates",
    "3 Eggs",
    "3 Pokemon with Adjacent Pokedex Numbers",
    "4 Different Bug-Type Pokemon",
    "5 Berries",
    "5 Different Damage Boosting Items",
    "5 Different Normal-Type Pokemon",
    "7 Different Pokeballs",
    "8 Different Water-Type Pokemon",
    "A Pokemon Weighing at Least 300lbs",
    "A Pokemon that Changes Abilities",
    "A Pokemon with 4 STAB Moves",
    "A Pokemon with Each Different Type",
    "A Pokemon with a 150BP+ Move",
    "A Pokemon with a 2-Turn Move",
    "A Pokemon with a Stat-Related Ability",
    "A Pokemon with a Status-Related Ability",
    "A Pokemon with a Weather-Related Ability",
    "A Pokemon with an Exclusive Move",
    "A Pokemon with an Item-Related Ability",
    "Adamant Orb, Lustrous Orb,Griseous Orb",
    "All 3 Pokemon in an Evolution Chain",
    "Ampharos, Manectric, Luxray, Zebstrika",
    "Any Evolution Stone",
    "Any Trade Evolution Item",
    "Beautifly, Dustox, Kricketune, Mothim, Vespiquen",
    "Butterfree, Beedrill, Ledian, Ariados",
    "Buy 10 Items from a Vending Machine",
    "Catch 5 Pokemon that do not Evolve",
    "Catch a Pokemon with only 1 Weakness",
    "Catch a shaking grass Pokemon",
    "Catch an Eeveelution",
    "Catch any 3 Legendaries",
    "Catch any 3 Starter Pokemon",
    "Catch any Fossil Pokemon",
    "Catch any Pokemon that Evolves by Friendship",
    "Catch any Pokemon with Multiple Forms",
    "Catch any Pseudo Legendary",
    "Complete a Rotation Battle",
    "Complete a Triple Battle",
    "Darkrai, Shaymin, Arceus",
    "Darmanitan, Heatmor, Volcarona",
    "Defeat 4 Spinners",
    "Defeat 8 Trainers in Chargestone Cave (Excluding Plasma)",
    "Defeat 8 Trainers in Pinwheel Forest (Excluding Plasma)",
    "Defeat Bianca 4 Times",
    "Defeat Cheren 4 Times",
    "Defeat Lenora with only 1 Pokemon",
    "Defeat N 4 Times",
    "Defeat a Gym Leader With Battle Animations",
    "Defeat a Rival without taking Damage",
    "Defeat all 10 Trainers in Desert Resort",
    "Defeat all the Trainers on Route 5",
    "Defeat your own Pokemon in a Doubles Battle",
    "Dialga, Palkia, Giratina",
    "Don’t Use X Items",
    "Evolve 5 Different Pokemon",
    "Focus Band, Focus Sash, Black Belt, Expert Belt",
    "Gigalith, Conkeldurr, Excadrill, Seismitoad",
    "Groudon, Kyogre, Rayquaza",
    "HM04",
    "Hatch an Egg",
    "Life Orb, Flame Orb, Toxic Orb",
    "Mawile, Sableye, Seviper, Zangoose",
    "Mew, Celebi, Jirachi, Deoxys",
    "Mewtwo, Lugia, Ho-oh",
    "No Money on Hand",
    "Obtain a Drive",
    "Obtain a Fossil",
    "Obtain a Scarf",
    "Obtain an Incense",
    "Obtain the Bicycle",
    "Obtain the Gift Pokemon from the Season Research Lab",
    "Obtain the Light / Dark Stone",
    "Participate in the Battle Subway",
    "Pidgeot, Noctowl, Swellow, Staraptor, Unfezant",
    "Pikachu, Plusle, Minun, Pachirisu, Emolga",
    "Quagsire, Whiscash, Gastrodon",
    "Raticate, Furret, Linoone, Bibarel, Watchog",
    "Regirock, Regice, Registeel, Regigigas",
    "Reshiram, Zekrom, Kyurem",
    "Simisage, Simisear, Simipour",
    "TM16",
    "TM20",
    "TM22",
    "TM28",
    "TM30",
    "TM36",
    "TM42",
    "TM44",
    "TM45",
    "TM46",
    "TM47",
    "TM49",
    "TM52",
    "TM57",
    "TM61",
    "TM70",
    "TM85",
    "TM91",
    "TM94",
    "Train a Pokemon to Level 35",
    "Tyrogue, Hitmonchan, Hitmonlee, Hitmontop",
    "Use a 4x super-effective Move",
    "Victini, Keldeo, Meloette, Genesect",
    "Whimsicott, Leavanny, Lilligant, Maractus"
];
