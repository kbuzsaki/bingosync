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
    "Erhalte Magisches Seil, Schrumpfhammer und Moogle Gürtel",
    "Erhalte Greifenhelm",
    "Erhalte Elfenkrone",
    "Erhalte Elfenarmring",
    "Erhalte Elfenumhang",
    "Erhalte Götteranzug",
    "Erhalte Kükenkappe",
    "Erhalte Platinhelm",
    "Erhalte Saturnring",
    "Erhalte Federhandschuh",
    "Erhalte Drachenspirale",
    "Erhalte Zyklopenring",
    "Erhalte Zauberring",
    "Erhalte Fetischring",
    "Level Schwert auf 8 (mindestens auf einem Char)",
    "Level Lanze auf 8 (mindestens auf einem Char)",
    "Level Kalue auf 7 (mindestens auf einem Char)",
    "Level Speer auf 8 (mindestens auf einem Char)",
    "Level Bumerang auf 8 (mindestens auf einem Char)",
    "Level Bogen auf 8 (mindestens auf einem Char)",
    "Level Peitsche auf 8 (mindestens auf einem Char)",
    "Level Axt auf 7 (mindestens auf einem Char)",
    "Level frosta auf 7 (mindestens auf einem Char)",
    "Level Rocky auf 7 (mindestens auf einem Char)",
    "Level Elektra auf 7 (mindestens auf einem Char)",
    "Level Vesuvio auf 7 (mindestens auf einem Char)",
    "Level Laterna auf 7",
    "Level Nacturn auf 7",
    "Level Lunatic auf 7 (mindestens auf einem Char)",
    "Level Harzinger auf 7 (mindestens auf einem Char)",
    "Töte 15 Bosse ohne Magie",
    "Töte 25 Bosse ohne Magie",
    "Töte 10 Bosse ohne Waffen",
    "Töte keine Normale Gegner bis du die Hochlande erreicht hast",
    "Töte keine Normale Gegner in den Hochlanden bis du die Wüste oder die Weihnachtsinssel erreicht hast",
    "Töte keine Normale Gegner in der Wüste und im Feuertempel",
    "Töte keine Normale Gegner in auf der Weihnachtsinsel und im Eistempel",
    "Töte keine Normale Gegner im Imperium (Süd-, Nord-, und Goldstadt)",
    "Töte keine Normale Gegner auf dem Schicksalsberg, dem Tempel der Dunkelheit und der Mutprobe",
    "Töte keine Normale Gegner auf der kompletten Dracheninsel"
];
