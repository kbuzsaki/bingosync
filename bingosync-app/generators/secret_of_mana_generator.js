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
    "Get Magic Rope, Minor Mallet and Moogle Belt",
    "Get Griffin Helm",
    "Get Faerie Crown",
    "Get Faerie's Ring",
    "Get Faerie Cloak",
    "Get Power Suit",
    "Get Cockatrice Cap",
    "Get Amulet Helm",
    "Get Guardain Ring",
    "Get Ninja Gloves",
    "Get Dragon Ring",
    "Get Watcher Ring",
    "Get Imp's Ring",
    "Get Amulet Ring",
    "Get Vampire Cape",
    "Level Sword to 8 (at least on 1 char)",
    "Level Spear to 8 (at least on 1 char)",
    "Level Gloves to 7 (at least on 1 char)",
    "Level Javelin to 8 (at least on 1 char)",
    "Level Boomerang to 8 (at least on 1 char)",
    "Level Bow to 8 (at least on 1 char)",
    "Level Whip to 8 (at least on 1 char)",
    "Level Axe to 7 (at least on 1 char)",
    "Level Undine to 7 (at least on 1 char)",
    "Level Gnome to 7 (at least on 1 char)",
    "Level Sylphid to 7 (at least on 1 char)",
    "Level Salamando to 7 (at least on 1 char)",
    "Level Lumina to 7",
    "Level Shade to 7",
    "Level Luna to 7 (at least on 1 char)",
    "Level Dryad to 7 (at least on 1 char)",
    "Kill 15 Bossenemies without Magic",
    "Kill 25 Bossenemies without Magic",
    "Kill 10 Bossenemies without Weapons",
    "Never Kill Normal Enemies until you reach the Upper Lands",
    "Never Kill Normal Enemies in the Upper Lands until you reach Desert/Ice Country (except the 3 Pebblers)",
    "Never Kill Normal Enemies in the Desert and the Fire Palace",
    "Never Kill Normal Enemies in the Ice Country and the Ice Palast",
    "Never Kill Normal Enemies in the whole Empire (South-, North- and Goldcity)",
    "Never Kill Normal Enemies in the Lofty Mountains, the Palace of Darkness and the true Courage",
    "Never Kill Normal Enemies in Great Palace and Undercity"
];
