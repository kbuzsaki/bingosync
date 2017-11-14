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
    "Grab 10 moons from 8-bit sections",
    "Win a Koopa Race in 3 different kingdoms",
    "Plant 8 seeds",
    "Get 3 moped related moons",
    "Get 3 Hidden Art Moons",
    "Get 25 Cube Moons",
    "Obtain moons from 3 lotteries",
    "Have 1000 coins at any point",
    "Correctly answer 15 Sphynx questions",
    "Collect 250 purple coins",
    "Get 25 different checkpoints",
    "Light all lights in Cap Kingdom",
    "Get 5 Hidden Art Moons",
    "Get \"Jump-Rope Genius\" moon",
    "Obtain 5 moons from deep forest",
    "Collect 2 Koopa walking moons",
    "Collect 50 purple coins in a single kingdom",
    "Win a race of Bound Bowl",
    "Get 4 Goombette moons",
    "Purchase 25 souvenirs",
    "Get 7 Moons as a Cheep Cheep",
    "Collect 4 moons via Moon Pieces",
    "Get 3 fishing moons",
    "Buy a full costume from 4 different kingdoms",
    "Collect 8 Multimoons",
    "Grow all seed moons in seaside",
    "Collect 300 purple coins",
    "Collect 200 purple coins",
    "Activate all of the p-switches in Wooded",
    "Enter 10 pipes",
    "Defeat at least 2 bosses in Wooded and Sand",
    "Get to top of tallest tower in New donk city without captures",
    "Capture 12 unique things",
    "Get at least 12 moons in every kingdom",
    "Bring World Peace to Lake, Seaside and Snow",
    "Collect 25 total story moons",
    "Complete 6 moons related to the rocket ship",
    "Beat 2 bosses in Mushroom Kingdom",
    "Collect 25 moons in a single kingdom",
    "Defeat each Broodal at least once",
    "Get all 3 Turnip Recipe moons in Luncheon",
    "Collect 20 total story moons",
    "Buy 6 moons from the moons lists",
    "Collect 3 capless moons (scarecrow takes your hat)",
    "Finish the Metro Kingdom Festival",
    "Collect the moon \"Treasure made of coins\u201c in Deep Forest",
    "Take 7 pictures of hint art",
    "Bust 5 nuts in Wooded Kingdom",
    "Enter 5 warp-paintings",
    "Collect a picture match moon",
    "Visit Peach at 4 Kingdoms",
    "Collect 7 moons from Captain Toad",
    "Get \"Behind the Waterfall\" in Cascade",
    "Use warp paintings to access Sand, Seaside and Mushroom",
    "Collect 10 moons from Goombete",
    "Purchase 15 souvenirs",
    "Purchase 15 moons total"
];
