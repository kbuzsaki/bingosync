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
    "All Socks: Bikini Bottom",
    "All Socks: Downtown",
    "All Socks: Downtown Streets",
    "All Socks: Dream",
    "All Socks: Flounder Hill",
    "All Socks: Goo Lagoon",
    "All Socks: Goo Lagoon Beach",
    "All Socks: Graveyard",
    "All Socks: Jellyfish Fields",
    "All Socks: Jellyfish Rock",
    "All Socks: Kelp Forest",
    "All Socks: Kelp Swamp",
    "All Socks: Kelp Woods",
    "All Socks: Mermalair",
    "All Socks: Museum",
    "All Socks: Pier",
    "All Socks: Rock Bottom",
    "All Socks: Sand Mountain",
    "All Socks: Sea Caves",
    "All Socks: Slide 3 (Sand Mountain)",
    "All Spatulas: Bikini Bottom",
    "All Spatulas: Downtown",
    "All Spatulas: Dream",
    "All Spatulas: Goo Lagoon",
    "All Spatulas: Graveyard",
    "All Spatulas: Jellyfish Fields",
    "All Spatulas: Kelp Forest",
    "All Spatulas: Mermalair",
    "All Spatulas: Rock Bottom",
    "All Spatulas: Sand Mountain",
    "Bubble Buddy Time Challenge",
    "Clear Krusty Krab",
    "Clear Lighthouse",
    "Clear Tree-Dome",
    "Complete Chum Bucket Lab",
    "Complete Industrial Park",
    "Complete Poseidome",
    "Defeat Flying Dutchman",
    "Defeat King Jellyfish",
    "Defeat Prawn",
    "Drain the Lake",
    "End of the Road",
    "Flounder Hill",
    "Funnel Machines",
    "Guppy Mound",
    "Here You Go",
    "Ice Pillar Sock",
    "Jellyfish Bowling Sock",
    "Jellyfish Caves Sock",
    "Jellyfish Lake Tiki Sock",
    "Kelp Vines Sock",
    "Krabby Patty Platforms",
    "Krusty Sock",
    "Larry Time Challenge",
    "Lasers",
    "Lobby Sock",
    "Museum Spatula",
    "Oil Tower Sock",
    "Power Crystal Crisis",
    "Puff Time Challenge",
    "Return Museum Art",
    "Rolling Ball Room",
    "Sand Mountain (Slide 3)",
    "Sandman Sock",
    "Save the Children",
    "Sea Needle Sock",
    "Security Tunnel Sock",
    "Slidin’ Texas Style",
    "Squid’s Dream",
    "Tikis Go Boom",
    "Top of the Chum Bucket",
    "Tower Bungee",
    "Towers of Power",
    "Wack-A-Tiki Sock"
];
