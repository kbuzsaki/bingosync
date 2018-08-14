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
    "11 gold greenies",
    "1500 gold 3 missions",
    "2 Toad escort missions",
    "2 missions 20 seconds off WR",
    "20 total gems",
    "2000 gold one mission",
    "3 bonus missions",
    "3 boss missions",
    "3 floor normal hunter",
    "3 floor normal polterpup",
    "3 missions 20 seconds off WR",
    "3 missions Clockworks",
    "3 missions Mines",
    "4 bonus missions",
    "4 boss missions",
    "4 floor normal rush",
    "4 missions Gloomy",
    "4 missions Haunted",
    "4 missions Treacherous",
    "5 bonus rooms",
    "5 gold bloonberries",
    "6 Greenie Types",
    "8 gems Clockworks",
    "8 gems Gloomy",
    "8 gems Haunted",
    "8 gems Mines",
    "8 gems Treacherous",
    "8 total missions completed",
    "A-1 and A-3 Any% route",
    "A-4 Boo and Booper Trooper",
    "All Polterpup levels",
    "All bonus missions",
    "All gems Clockworks",
    "All gems Gloomy",
    "All gems Haunted",
    "All gems Mines",
    "All gems Treacherous",
    "All gold greenies Clockworks",
    "All gold greenies Gloomy",
    "All gold greenies Haunted",
    "All gold greenies Mines",
    "All gold greenies Treacherous",
    "Die 3 times different missions",
    "Every Poltergeist variety",
    "Every non-special normal ghost variety",
    "Every strong ghost variety",
    "Kill one of each gold critter type",
    "King Boo and Boolossus",
    "Low% 2 levels or bonus missions",
    "Low% a level or bonus mission",
    "One mission from each mansion",
    "Take 150 health 3 missions",
    "Trifecta"
];
