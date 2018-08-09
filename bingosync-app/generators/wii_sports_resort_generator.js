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
    "Beat an opponent in an 11-Point match in Table Tennis - Match",
    "Beat an opponent other than Cole 6-0 in Table Tennis - Match",
    "Beat the opponents by 15 points or more in Basketball - Pickup Game",
    "Collect 3 i Points on Wedge Island in Island Flyover",
    "Complete 3 stages in Canoeing",
    "Complete a stage of Power Cruising without goin out of bounds",
    "Complete any 3 hole course Blind (Holding 2 before selecting course)",
    "Complete any Cycling race without going down to 0 hearts",
    "Complete the \"Up the Volcano\" race in Cycling",
    "Complete the Power Crusing course \"Shoals\"",
    "Crash 10 times in Island Flyover",
    "Crash into lava in Island Flyover",
    "Fall off a cliff/into a river 5 times in Cycling",
    "Finish 1st in any Cycling race",
    "Finish any Frisbee Golf 3 hole course with only the Midrange Frisbee",
    "Gain 50 points in Table Tennis - Return Challenge without hitting any can",
    "Get 5 spares in any Bowling mode",
    "Get a score higher than 5 in 4 gates on Power Cruising",
    "Get a score of 1.0 on 7 gates in Power Cruising",
    "Get a score of 1600 or over in Wakeboarding - Beginner",
    "Get a score of over 1500 in Bowling - 100-Pin Game",
    "Get a score of over 70 points in Archery - Intermediate",
    "Get a time of under 2:03.00 in Cycling - To the Beach",
    "Get a turkey in any bowling mode",
    "Get any stamp in Basketball - Pickup Game",
    "Get any stamp in Frisbee Golf",
    "Get any stamp in Swordplay - Showdown",
    "Get any stamp in Wakeboarding",
    "Get over 100 points in Table Tennis - Return Challenge",
    "Get over 150 points in Bowling - Spin Control",
    "Get par on any 3 hole course in Golf",
    "Get the \"Miguels's Plane\" i Point in Island Flyover",
    "Get two mid-air catches in Frisbee Dog",
    "Get two slam dunks in Basketball - Pickup game",
    "Get under par in Resort C in Golf",
    "Give Up on 5 different holes in Golf",
    "Give up on 2 different holes in Golf with only water hazards",
    "Hit 10 cans in Table Tennis - Return Challenge",
    "Hit at least one pin in every throw in Bowling - Spin Control",
    "Hit the 10 point mark on Archery 4 times in a row",
    "Hit the barriers every throw in Bowling - Spin Control (Minus the 10th frame)",
    "Hit the five point area in Archery",
    "Hit the server's face with a ball 10 times in Table Tennis - Return Challenge",
    "Hit your opponent in the face 5 times with a ball in Table Tennis - Match",
    "Pop a balloon in Frisbee Dog two times",
    "Ride over 3 different rocks/bananas in Cycling (Doesn't have to be all in 1 race)",
    "Slice two candles in Swordplay - Speed Slice",
    "Stun your opponent by blocking 7 times in Swordplay - Duel",
    "Take a picture with Gwen in Skydiving",
    "Win a game of Swordplay - Speed Slice without letting the opponent get any points",
    "Win a match of Swordplay - Duel without getting stuned by an opponent's block"
];
