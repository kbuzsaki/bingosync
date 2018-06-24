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
    "25% map completion",
    "50% map completion",
    "75% map completion",
    "85% map completion",
    "Beat Alura Une",
    "Beat Balore",
    "Beat Big Golem",
    "Beat Chaos",
    "Beat Chronomage",
    "Beat Creaking Skull",
    "Beat Death",
    "Beat Final Guard",
    "Beat Flame Demon",
    "Beat Giant Skeleton",
    "Beat Graham",
    "Beat Great Armor",
    "Beat Headhunter",
    "Beat Julius",
    "Beat Legion",
    "Beat Manticore",
    "Beat Mimic",
    "Beat Red Minotaur",
    "Beat Tsuchinoko",
    "Get 10 Bullet Souls",
    "Get 10 Enchanted Souls",
    "Get 10 Guardian Souls",
    "Get 10 accessories",
    "Get 10 armors",
    "Get 10 weapons",
    "Get 3 Ability Souls",
    "Get 4 Ability Souls",
    "Get 6 Ability Souls",
    "Get 6 Bullet Souls",
    "Get 6 Enchanted Souls",
    "Get 6 Guardian Souls",
    "Get 6 accessories",
    "Get 6 armors",
    "Get 6 weapons",
    "Get 8 Bullet Souls",
    "Get 8 Enchanted Souls",
    "Get 8 Guardian Souls",
    "Get 8 accessories",
    "Get 8 armors",
    "Get 8 weapons",
    "Get Ancient Belt",
    "Get Ancient Book 1",
    "Get Ancient Book 2",
    "Get Ancient Book 3",
    "Get Armor of Water",
    "Get Balore soul",
    "Get Baselard",
    "Get Black Belt",
    "Get Black Panther soul",
    "Get Castle Map 1",
    "Get Castle Map 2",
    "Get Castle Map 3",
    "Get Chronomage soul",
    "Get Claimh Solais",
    "Get Creaking Skull soul",
    "Get Devil soul",
    "Get Dracula's Tunic",
    "Get Eversing",
    "Get Final Sword",
    "Get Flying Armor soul",
    "Get Galamoth soul (Time stop immunity)",
    "Get Giant Bat soul",
    "Get Grave keeper soul (Back Dash)",
    "Get Hippogryph soul (High jump)",
    "Get Iron Plate",
    "Get Kaladbolg",
    "Get Kicker skeletton soul (Comet Kick)",
    "Get Leather Plate",
    "Get Legion soul",
    "Get Lucky Charm",
    "Get Malphas soul (Double jump)",
    "Get Muramasa",
    "Get Mystletain",
    "Get Olrox's Suit",
    "Get Red Minotaur soul",
    "Get Red Scarf",
    "Get Satan's Ring",
    "Get Skeleton blade soul (Slide)",
    "Get Skula soul",
    "Get Soul Eater Ring",
    "Get Triton soul",
    "Get Tsuchinoko soul",
    "Get Undine soul",
    "Get all Ancient Books",
    "Get all Castle Maps",
    "Reach Level 15",
    "Reach Level 20",
    "Reach Level 25",
    "Reach Level 30",
    "Unlock 10 save point",
    "Unlock 4 teleporter",
    "Unlock 5 teleporter",
    "Unlock 6 teleporter",
    "Visit shop",
    "own 15000$",
    "own 25000$",
    "own 5000$",
    "own 50000$"
];
