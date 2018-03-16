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

        // add extra constraint to prevent multiple "Finish in x" goals from being on the board
        var isFinishGoal = function(s) {
            return s.indexOf("Finish") == 0;
        };
        var finishGoalAdded = false;

        for (var i = 1; i <= 25; i++) {
            var randIndex = Math.floor(Math.random() * bingoList.length);
            while (usedGoals[randIndex] || (finishGoalAdded && isFinishGoal(bingoList[randIndex]))) {
                randIndex = Math.floor(Math.random() * bingoList.length);
            }
            usedGoals[randIndex] = true;

            var goal = bingoList[randIndex];
            bingoBoard[i] = {"name": goal};
            if (isFinishGoal(goal)) {
                finishGoalAdded = true;
            }
        }

        return bingoBoard;
    }
};

var bingoList = [
    "Defeat Armos",
    "Defeat Lanmolas",
    "Defeat Moldorm",
    "Defeat Agahnim",
    "Defeat Helmasaur King",
    "Defeat Arrghus",
    "Defeat Mothula",
    "Defeat Blind",
    "Defeat Kholdstare",
    "Defeat Vitreous",
    "Die to Trinexx",
    "Desert Palace Big Chest",
    "Tower of Hera Big Chest",
    "Palace of Darkness Big Chest",
    "Swamp Palace Big Chest",
    "Skull Woods Big Chest",
    "Thieves' Town Big Chest",
    "Ice Palace Big Chest",
    "Misery Mire Big Chest",
    "Turtle Rock Big Chest",
    "Desert Palace Compass",
    "Tower of Hera Compass",
    "Palace of Darkness Compass",
    "Swamp Palace Compass",
    "Skull Woods Compass",
    "Thieves' Town Compass",
    "Ice Palace Compass",
    "Misery Mire Compass",
    "Turtle Rock Compass",
    "Desert Map",
    "Hera Map",
    "Darkness Map",
    "Swamp Map",
    "Skull Map",
    "Thieves' Map",
    "Ice Map",
    "Mire Map",
    "TRock Map",
    "Open 5 Small Key Doors (Palace of Darkness)",
    "Open 4 Small Key Doors (Skull Woods)",
    "Open 6 Small Key Doors (Ice Palace)",
    "Open 6 Small Key Doors (Misery Mire)",
    "Open Purple Chest",
    "Break Ether Monolith",
    "Break Bombos Monolith",
    "Open Misery Mire",
    "Open Turtle Rock",
    "Death Mountain Lonely Island",
    "Lumberjack Tree",
    "Byrna Cave",
    "Mimic Cave",
    "Lake Hylia Island",
    "Bonk Grave",
    "Rescue the Dwarf",
    "Speak to Fat Faerie",
    "Perfect Archery Game",
    "3 Whirlpool Pairs",
    "Spend 1000 rupees",
    "Spend 1500 rupees",
    "40 Arrows",
    "50 Arrows",
    "20 Bombs",
    "30 Bombs",
    "40 Arrows and 20 Bombs",
    "8 Heart Pieces",
    "12 Heart Pieces",
    "4 Heart Containers",
    "6 Heart Containers",
    "10+ Total Hearts",
    "12+ Total Hearts",
    "Master Sword Pedestal",
    "2 Pendants",
    "2 Crystals",
    "3 Crystals",
    "2 Light World Dungeons",
    "3 Light World Dungeons",
    "2 Dark World Dungeons",
    "3 Dark World Dungeons",
    "Bomb open a cracked floor in any dungeon",
    "Bomb open a cracked door in any dungeon",
    "Move or destroy a wall in any dungeon",
    "Hit Crystal Switch with Frozen Enemy",
    "Read 3 Dark World Dungeon Telepathic Tiles",
    "2 Dungeon Blue Rupee Rooms",
    "Spawn a chest in 2 dungeons",
    "Collect Sahasrahla's Prize",
    "Pull a Tounge Statue",
    "Clear 2 Tile Rooms",
    "Finish in a Light World Dungeon Fairy Room",
    "Finish in a Dark Room",
    "Finish in a Rupee Floor Room",
    "Finish in a Trap Room",
    "Finish in a Prison Cell",
    "Finish in a Room with a Bumper",
    "Finish in a Room with an Orange Warp",
    "Finish as a Bunny",
    "Defeat all 6 Freezors",
    "Collect the Bow",
    "Collect the Lantern",
    "Collect the Hookshot",
    "Collect a Medallion",
    "Activate the Flute",
    "Bottled Bee",
    "Bottled Faerie",
    "Bottled Potion",
    "Lantern or Fire Rod",
    "Collect Rod + Cane of the same color",
    "Collect Rod + Cane of opposite colors",
    "3 A-Items",
    "Upgrade Shield",
    "Upgrade Sword",
    "Visit the Catfish with a Follower",
    "Pay the Hamburger Helper Hand",
    "Buy from 2 Shops in each World",
    "4 NPC/Object Followers",
    "Reveal a Hidden Cave under a rock in both Worlds",
    "Complete 1 Line of Y-Items"
];
