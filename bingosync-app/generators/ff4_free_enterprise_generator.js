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
    "All 5 Characters at 50+",
    "Collect 13 key items",
    "Collect 3 pieces of Crystal Set",
    "Collect 3 pieces of Dragoon Set",
    "Collect 3 pieces of Paladin Set",
    "Collect 3 pieces of Samurai Set",
    "Collect Adamant Ore",
    "Collect Adamant from Grotto",
    "Collect Ancient Sword",
    "Collect Avenger Sword",
    "Collect Bahamut Summon",
    "Collect Baron Key",
    "Collect Crystal",
    "Collect Cursed Ring",
    "Collect Darkness Crystal",
    "Collect Dragon Whip",
    "Collect Earth Crystal",
    "Collect Excalibur from Kokkol",
    "Collect Glass Helmet",
    "Collect Hook",
    "Collect Leviathan Summon",
    "Collect Lilith Rod",
    "Collect Luca Key",
    "Collect Magma Key",
    "Collect Masamune",
    "Collect Odin Summon",
    "Collect Package",
    "Collect Pan",
    "Collect Pass",
    "Collect Pink Tail",
    "Collect Rat Tail",
    "Collect Ribbon",
    "Collect Rune Axe",
    "Collect Sandyruby",
    "Collect Spoon",
    "Collect Stardust Rod",
    "Collect Sylph Summon",
    "Collect Tower Key",
    "Collect Twinharp",
    "Collect White Lance",
    "Collect Zeus Gauntlet",
    "Collect only Edge or Cecil",
    "Collect only Rydia or Rosa",
    "Complete Giant of Babil",
    "Defeat Asura & Leviathan",
    "Defeat Bahamut",
    "Defeat Boss in Bahamut's Spot",
    "Defeat Boss in Mist Dragon's Spot",
    "Defeat Boss in Octomamm's Spot",
    "Defeat Boss in Odin's Spot",
    "Defeat Boss in Wyvern's Spot",
    "Defeat Bosses in Asura & Leviathan's Spot",
    "Defeat CPU",
    "Defeat Elements",
    "Defeat Evil Wall",
    "Defeat Golbez",
    "Defeat K Eblan & Q Eblan",
    "Defeat Odin",
    "Defeat Ogopogo",
    "Defeat Pale Dim",
    "Defeat Wyvern",
    "Finish with Cid or Kain",
    "Finish with Palom or Porom",
    "Finish with Tellah or Edward",
    "Have Edward Defeat a Boss",
    "Have Rydia or Palom learn Meteo",
    "Skip Edge",
    "Skip FuSoYa"
];
