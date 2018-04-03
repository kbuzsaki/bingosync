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
    "Buy 3x Cobra Bracelet",
    "Buy Kung Fu Dress",
    "Buy Walnut",
    "Talk to Elder after Chest",
    "Talk to Elman",
    "Talk to Cannon Wife",
    "Rescue Primm twice",
    "Get Magic Rope",
    "Get Minor Mallet",
    "Level Sword to 3 (at least on 1 char)",
    "Level Spear to 2 (at least on 1 char)",
    "Level Gloves to 2 (at least on 1 char)",
    "Level Javelin to 2 (at least on 1 char)",
    "Level Boomerang to 2 (at least on 1 char)",
    "Level Bow to 2 (at least on 1 char)",
    "Level Whip to 2 (at least on 1 char)",
    "Level Axe to 2 (at least on 1 char)",
    "Level Undine to 2 (at least on 1 char)",
    "Level Gnome to 2 (at least on 1 char)",
    "Kill Mantis Ant without dying",
    "Kill Tropikallo without killing the Vine",
    "Kill Spikey Tiger without using range Weapons",
    "Kill Fire Gigas without Magic",
    "Kill Middle Eye of Wall Face last",
    "Kill Kilroy while at least two Chars are Moogle",
    "Kill Jabberwocky without Magic",
    "Never Kill Rabite, Lullabud, Mushboom and Buzz Bee",
    "Never Kill Blat, Kid Goblin and Green Drop",
    "Never Kill ChobinHood, Eye Spy, Polter Chair and Werewolf",
    "Never Kill Iffish and Water Bandit",
    "Never Kill Ma Goblin, Goblin and Chess Knight",
    "Never Kill Zombie, Tomato Man, Evil Sword and Chess Knight"
];
