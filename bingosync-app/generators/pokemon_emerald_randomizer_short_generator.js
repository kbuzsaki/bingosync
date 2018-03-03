//everything except the contents of bingoList copied from pokemon_emerald_randomizer_generator.js
//TODO: make the RNG more sophisticated a la the Crystal tourney card generator

//NOTE: All of the goals on this card are obtainable without going beyond Lilycove.
//	Clearing out the Magma and Aqua Hideouts takes too much time.
//	In the future, if I can find or make a gatekeeper-less ROM, that may change.
//  - mewtwo15026

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
    "Evolve something at Level 15",
    "Evolve something at Level 20",
    "Evolve something at Level 25",
    "Evolve something at Level 30",
    "Evolve something through Happiness",
    "Evolve something with a Fire Stone",
    "Evolve something with a Leaf Stone",
    "Evolve something with a Moon Stone",
    "Evolve something with a Sun Stone",
    "Evolve something with a Thunder Stone",
    "Evolve something with a Water Stone",
    "Call a Battle Girl",
    "Call a Beauty",
    "Call a Bird Keeper",
    "Call a Black Belt",
    "Call a Bug Catcher",
    "Call a Bug Maniac",
    "Call a Camper",
    "Call a Collector",
    "Call a Cooltrainer",
    "Call a Double Battle team",
    "Call a Fisherman",
    "Call a Gentleman",
    "Call a Guitarist",
    "Call a Hex Maniac",
    "Call a Hiker",
    "Call a Kindler",
    "Call a Lady",
    "Call a Lass",
    "Call a Ninja Boy",
    "Call a Parasol Lady",
    "Call a Picnicker",
    "Call a PKMN Breeder",
    "Call a PKMN Ranger",
    "Call a Pokemaniac",
    "Call a Psychic",
    "Call a Rich Boy",
    "Call a Ruin Maniac",
    "Call a Sailor",
    "Call a School Kid",
    "Call a Swimmer",
    "Call a Triathlete",
    "Call a Tuber",
    "Call a Youngster",
    "Call an Expert",
    "Don't sell treasure",
    "Don't use Repels",
    "Don't use TMs or Move Tutors",
    "Get an item made on Route 113",
    "Release your starter before Lv11",
    "Catch four invisible Pokemon",
    "A Pokemon with 4 non-TM moves of the same type",
    "Beat Brawly before visiting Slateport",
    "Beat Brendan/May in Rustboro",
    "Win a Tag Battle",
    "10 Water-type Pokemon",
    "10 Johto Pokemon",
    "10 Hoenn Pokemon",
    "2 Dark-type Pokemon",
    "2 Dragon-type Pokemon",
    "2 Fighting-type Pokemon",
    "2 Ghost-type Pokemon",
    "2 Ice-type Pokemon",
    "2 Steel-type Pokemon",
    "10 Kanto Pokemon",
    "3 Bug-type Pokemon",
    "3 Electric-type Pokemon",
    "4 Fire-type Pokemon",
    "4 Rock-type Pokemon",
    "5 Grass-type Pokemon",
    "5 Ground-type Pokemon",
    "5 Poison-type Pokemon",
    "5 Psychic-type Pokemon",
    "6 Flying-type Pokemon",
    "7 Normal-type Pokemon",
    "Any 2 baby Pokemon",
    "Any Eeveelution",
    "Any fully-evolved Fossil Pokemon",
    "Articuno, Zapdos, or Moltres",
    "Bayleef, Quilava, or Croconaw",
    "Dragonair, Pupitar, Metang, or Shelgon",
    "Fearow, Noctowl, or Swellow",
    "Graveler, Haunter, Machoke, or Kadabra",
    "Groudon, Kyogre, or Rayquaza",
    "Grovyle, Combusken, or Marshtomp",
    "Hitmonlee, Hitmonchan, or Hitmontop",
    "Ivysaur, Charmeleon, or Wartortle",
    "Jynx, Magmar, or Electabuzz",
    "Latios, Latias, or Wobbuffet",
    "Butterfree, Beedrill, Beautifly, or Dustox",
    "Lickitung, Mr. Mime, or Farfetch'd",
    "Ludicolo, Seviper, Sableye, or Lunatone",
    "Masquerain, Medicham, or Roselia",
    "Mew, Celebi, Jirachi, or Deoxys",
    "Mewtwo, Ho-oh, or Lugia",
    "Pikachu, Plusle, or Minun",
    "Raikou, Entei, or Suicune",
    "Raticate, Furret, Mightyena, or Linoone",
    "Regirock, Regice, or Registeel",
    "Sandshrew, Phanpy, Spheal, or Shroomish",
    "Shiftry, Zangoose, Mawile, or Solrock",
    "12 Berry species",
    "20 TMs",
    "Amulet Coin",
    "At least seven types of Poke Ball",
    "Both items in Fiery Path",
    "Charcoal",
    "Cleanse Tag",
    "Coin Case",
    "Exp. Share",
    "Feather Badge",
    "Get all 8 items in Granite Cave",
    "Get the Blackglasses Guy to leave",
    "Good Rod",
    "Hard Stone",
    "HM01 (Cut)",
    "HM04 (Strength)",
    "HM05 (Flash)",
    "Item in Scorched Slab",
    "Lotad Doll",
    "Macho Brace",
    "Miracle Seed",
    "Old Rod",
    "PokeBlock Case",
    "Quick Claw",
    "Silk Scarf",
    "Smoke Ball",
    "Soft Sand",
    "Soothe Bell",
    "Spelon Berry",
    "Take all of the Berry Master's Berries",
    "TM05 (Roar)",
    "TM09 (Bullet Seed)",
    "TM10 (Hidden Power)",
    "TM12 (Taunt)",
    "TM13 (Ice Beam)",
    "TM14 (Blizzard)",
    "TM15 (Hyper Beam)",
    "TM16 (Light Screen)",
    "TM17 (Protect)",
    "TM19 (Giga Drain)",
    "TM20 (Safeguard)",
    "TM24 (Thunderbolt)",
    "TM25 (Thunder)",
    "TM27 (Return)",
    "TM28 (Dig)",
    "TM32 (Double Team)",
    "TM33 (Reflect)",
    "TM35 (Flamethrower)",
    "TM36 (Sludge Bomb)",
    "TM38 (Fire Blast)",
    "TM41 (Torment)",
    "TM43 (Secret Power)",
    "TM44 (Rest)",
    "TM45 (Attract)",
    "TM46 (Thief)",
    "Wailmer Pail",
    "White Herb",
    "A Pokemon with fewer than 4 moves",
    "Beat five levels of the Trick House",
    "Beat the Fallarbor Battle Tent",
    "Beat the Slateport Battle Tent",
    "Beat the Verdanturf Battle Tent",
    "Fix the generator in New Mauville",
    "Get an Effort Ribbon",
    "Own 2 Eggs and/or hatched Pokemon",
    "Normal Rank Beauty",
    "Normal Rank Cool",
    "Normal Rank Cute",
    "Normal Rank Smart",
    "Normal Rank Tough",
    "Put 3 Dolls in your Secret Base",
    "Revive a fossil",
    "Secret Base above the sand slope on Route 115",
    "Set a record on Cycling Road",
    "Adamant, Brave, Lonely, or Naughty",
    "Bashful, Docile, Hardy, Quirky, or Serious",
    "Bold, Impish, Lax, or Relaxed",
    "Calm, Careful, Gentle, or Sassy",
    "Catch 2 Pokemon in the Safari Zone",
    "Hasty, Jolly, Naive, or Timid",
    "Met at Mirage Tower",
    "Met at Team Aqua Hideout",
    "Met at Team Magma Hideout",
    "Mild, Modest, Quiet, or Rash",
    "A Pokemon with 4 non-TM status moves",
    "Aeroblast, Sacred Fire, Water Spout, or Eruption",
    "Any 50% recovery move",
    "Fissure, Horn Drill, Guillotine, or Sheer Cold",
    "Hyper Beam, Frenzy Plant, Blast Burn, or Hydro Cannon",
    "Leaf Blade, Blaze Kick, Muddy Water, or Volt Tackle",
    "Metronome, Assist, Nature Power, or Mirror Move",
    "Mist Ball, Luster Purge, Doom Desire, or Psycho Boost",
    "Psywave, Seismic Toss, Night Shade, or Super Fang",
    "Selfdestruct, Explosion, Memento, or Perish Song",
    "Defeat all the trainers on the Jagged Pass",
    "Defeat all trainers atop Mt. Chimney",
    "Defeat all trainers inside Mt. Pyre",
    "Defeat all 8 trainers on Route 103",
    "Defeat all 7 trainers on Route 105",
    "Defeat all 16 trainers on Route 109",
    "Defeat all 11 trainers on Route 110",
    "Defeat all 18 trainers on Route 111 (except Winstrates)",
    "Defeat all 10 trainers on Route 115",
    "Defeat all 17 trainers on Route 119",
    "Defeat all 15 trainers on Route 123",
    "Defeat all 7 trainers on the Abandoned Ship",
    "Defeat the Winstrate Family",
    "Double Team, Minimize, Smokescreen, or Sand-Attack",
    "Met at Petalburg City",
    "Barrage, Icicle Spear, Bone Rush, or Arm Thrust",
    "Rollout, Ice Ball, Fury Cutter, or Rage",
    "Lock-On, Mind Reader, Foresight, or Odor Sleuth",
    "Grasswhistle, Sing, Supersonic, or Hypnosis",
    "Block, Mean Look, Spider Web, or Spikes",
    "Vulpix, Growlithe, Mankey, or Meowth",
    "Murkrow, Misdreavus, Ariados, or Ledian",
    "Gligar, Delibird, Mantine, or Skarmory",
    "Tangela, Yanma, or Aipom",
    "Sharpedo, Wailord, Camerupt, or Claydol",
    "Prevent the same Pokemon from evolving 5 times",
    "Evolve 4 Pokemon",
    "Hatch an Egg",
    "Get the Mystery Gift",
    "Dusclops, Banette, Ninjask, or Shedinja",
    "One Lv50 Pokemon",
    "Gyarados, Milotic, or Kingdra",
    "Magneton, Rhydon, or Porygon2",
];