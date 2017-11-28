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
    "14 Total Checkpoints",
    "15 Total Checkpoints",
    "16 Total Checkpoints",
    "17 Total Checkpoints",
    "18 Total Checkpoints",
    "19 Total Checkpoints",
    "20 Total Checkpoints",
    "21 Total Checkpoints",
    "22 Total Checkpoints",
    "4 Power Moons from 8-bit Sections",
    "5 Power Moons from 8-bit Sections",
    "6 Power Moons from 8-bit Sections",
    "Plant 3 Seeds",
    "Plant 4 Seeds",
    "Plant 5 Seeds",
    "5 Power Moons from Moon Shards",
    "6 Power Moons from Moon Shards",
    "7 Power Moons from Moon Shards",
    "Bring Peace to 3 Kingdoms",
    "Bring Peace to 4 Kingdoms",
    "1 Power Moon from Fishing",
    "100 Total Regional Coins",
    "125 Total Regional Coins",
    "150 Total Regional Coins",
    "175 Total Regional Coins",
    "200 Total Regional Coins",
    "5 Multi Moons",
    "6 Multi Moons",
    "3 Power Moons from Captain Toad",
    "4 Power Moons from Captain Toad",
    "5 Power Moons from Captain Toad",
    "1 Power Moon from Slots",
    "2 Power Moon from Slots",
    "4 Power Moons from Music Note Challenges",
    "5 Power Moons from Music Note Challenges",
    "6 Power Moons from Music Note Challenges",
    "5 Power Moons from Timer Challenges",
    "6 Power Moons from Timer Challenges",
    "7 Power Moons from Timer Challenges",
    "6 Total Power Moons from sub-areas",
    "8 Total Power Moons from sub-areas",
    "10 Total Power Moons from sub-areas",
    "Purchase 2 Kingdom Stickers",
    "Purchase 3 Kingdom Stickers",
    "Purchase 4 Kingdom Stickers",
    "Purchase 5 Kingdom Stickers",
    "4 Power Moons from the Cap Kingdom",
    "5 Power Moons from the Cap Kingdom",
    "6 Power Moons from the Cap Kingdom",
    "7 Power Moons from the Cap Kingdom",
    "8 Power Moons from the Cap Kingdom",
    "20 Regional Coins from the Cap Kingdom",
    "25 Regional Coins from the Cap Kingdom",
    "30 Regional Coins from the Cap Kingdom",
    "Purchase a Power Moon in the Cap Kingdom",
    "1 Timer Challenge from the Cap Kingdom",
    "Purchase the Bonneton Sticker (Cap Kingdom)",
    "Captain Toad in the Cap Kingdom",
    "2 Checkpoints from the Cap Kingdom",
    "2 Power Moons from sub-areas (Cap Kingdom)",
    "9 Power Moons from the Cascade Kingdom",
    "10 Power Moons from the Cascade Kingdom",
    "11 Power Moons from the Cascade Kingdom",
    "12 Power Moons from the Cascade Kingdom",
    "13 Power Moons from the Cascade Kingdom",
    "14 Power Moons from the Cascade Kingdom",
    "15 Power Moons from the Cascade Kingdom",
    "25 Regional Coins from the Cascade Kingdom",
    "20 Regional Coins from the Cascade Kingdom",
    "30 Regional Coins from the Cascade Kingdom",
    "Purchase a Power Moon in the Cascade Kingdom",
    "1 Timer Challenge from the Cascade Kingdom",
    "2 Timer Challenges from the Cascade Kingdom",
    "Purchase the Fossil Falls Sticker (Cascade Kingdom)",
    "Captain Toad in the Cascade Kingdom",
    "2 Power Moons from sub-areas (Cascade Kingdom)",
    "2 Checkpoints from the Cascade Kingdom",
    "3 Checkpoints from the Cascade Kingdom",
    "20 Power Moons from the Sand Kingdom",
    "21 Power Moons from the Sand Kingdom",
    "22 Power Moons from the Sand Kingdom",
    "23 Power Moons from the Sand Kingdom",
    "24 Power Moons from the Sand Kingdom",
    "25 Power Moons from the Sand Kingdom",
    "26 Power Moons from the Sand Kingdom",
    "27 Power Moons from the Sand Kingdom",
    "28 Power Moons from the Sand Kingdom",
    "29 Power Moons from the Sand Kingdom",
    "30 Power Moons from the Sand Kingdom",
    "20 Regional Coins from the Sand Kingdom",
    "25 Regional Coins from the Sand Kingdom",
    "30 Regional Coins from the Sand Kingdom",
    "Power Moon atop the Ruins Tower (Sand Kingdom)",
    "Moon Shards in the Moe-Eye Habitat (Sand Kingdom)",
    "Broodals at the Inverted Pyramid! (Sand Kingdom)",
    "Tostarena Secret Room: Dancing on Stage! (Sand Kingdom)",
    "Call Jaxi from 2 Different Jaxi-Stands",
    "Call Jaxi from 3 Different Jaxi-Stands",
    "Call Jaxi from 3 Different Jaxi-Stands",
    "Score 90 Points on Koopa Trace-Walking (Sand Kingdom)",
    "Sand Kingdom Slots",
    "Purchase a Power Moon in the Sand Kingdom",
    "Purchase the Tostarena Sticker (Sand Kingdom)",
    "2 Power Moons from sub-areas (Sand Kingdom)",
    "4 Power Moons from sub-areas (Sand Kingdom)",
    "4 Checkpoints from the Sand Kingdom",
    "5 Checkpoints from the Sand Kingdom",
    "6 Checkpoints from the Sand Kingdom",
    "13 Power Moons from the Lake Kingdom",
    "14 Power Moons from the Lake Kingdom",
    "15 Power Moons from the Lake Kingdom",
    "16 Power Moons from the Lake Kingdom",
    "17 Power Moons from the Lake Kingdom",
    "18 Power Moons from the Lake Kingdom",
    "20 Regional Coins from the Lake Kingdom",
    "25 Regional Coins from the Lake Kingdom",
    "30 Regional Coins from the Lake Kingdom",
    "Lake Lamode Secret Room: Dress Display Case (Lake Kingdom)",
    "Lakitu-Fishing Power Moon (Lake Kingdom)",
    "Purchase a Power Moon in the Lake Kingdom",
    "Purchase the Lake Lamode Sticker (Lake Kingdom)",
    "Captain Toad in the Lake Kingdom",
    "2 Power Moons from sub-areas (Lake Kingdom)",
    "3 Checkpoints from the Lake Kingdom",
    "4 Checkpoints from the Lake Kingdom",
    "20 Power Moons from the Wooded Kingdom",
    "21 Power Moons from the Wooded Kingdom",
    "22 Power Moons from the Wooded Kingdom",
    "23 Power Moons from the Wooded Kingdom",
    "24 Power Moons from the Wooded Kingdom",
    "25 Power Moons from the Wooded Kingdom",
    "20 Regional Coins from the Wooded Kingdom",
    "25 Regional Coins from the Wooded Kingdom",
    "30 Regional Coins from the Wooded Kingdom",
    "3 Power Moons in the Deep Woods",
    "4 Power Moons in the Deep Woods",
    "7 Power Moons from Nuts (Wooded Kingdom)",
    "8 Power Moons from Nuts (Wooded Kingdom)",
    "9 Power Moons from Nuts (Wooded Kingdom)",
    "10 Power Moons from Nuts (Wooded Kingdom)",
    "Steam Gardens Secret Room: Explorer in the Deep Woods! (Wooded Kingdom)",
    "Purchase the Steam Gardens Sticker (Wooded Kingdom)",
    "4 Checkpoints from the Wooded Kingdom",
    "5 Checkpoints from the Wooded Kingdom",
    "6 Checkpoints from the Wooded Kingdom",
    "2 Power Moons from sub-areas (Wooded Kingdom)",
    "4 Power Moons from sub-areas (Wooded Kingdom)",
    "Score 85 Points on Picture Match (Cloud Kingdom)",
    "14 Power Moons from the Lost Kingdom",
    "15 Power Moons from the Lost Kingdom",
    "16 Power Moons from the Lost Kingdom",
    "17 Power Moons from the Lost Kingdom",
    "18 Power Moons from the Lost Kingdom",
    "20 Regional Coins from the Lost Kingdom",
    "25 Regional Coins from the Lost Kingdom",
    "30 Regional Coins from the Lost Kingdom",
    "Purchase a Power Moon in the Lost Kingdom",
    "Captain Toad in the Lost Kingdom",
    "Purchase the Forgotten Isle Sticker (Lost Kingdom)",
    "3 Checkpoints from the Lost Kingdom",
    "24 Power Moons from the Metro Kingdom",
    "25 Power Moons from the Metro Kingdom",
    "26 Power Moons from the Metro Kingdom",
    "27 Power Moons from the Metro Kingdom",
    "28 Power Moons from the Metro Kingdom",
    "29 Power Moons from the Metro Kingdom",
    "30 Power Moons from the Metro Kingdom",
    "31 Power Moons from the Metro Kingdom",
    "32 Power Moons from the Metro Kingdom",
    "33 Power Moons from the Metro Kingdom",
    "34 Power Moons from the Metro Kingdom",
    "35 Power Moons from the Metro Kingdom",
    "20 Regional Coins from the Metro Kingdom",
    "25 Regional Coins from the Metro Kingdom",
    "30 Regional Coins from the Metro Kingdom",
    "Metro Kingdom Slots",
    "Purchase a Power Moon in the Metro Kingdom",
    "3 Power Moons from Musicians (Metro Kingdom)",
    "4 Power Moons from Musicians (Metro Kingdom)",
    "New Donk City Secret Room: Construction Mario (Metro Kingdom)",
    "Captain Toad in the Metro Kingdom",
    "Purchase the New Donk City Sticker (Metro Kingdom)",
    "2 Power Moons from sub-areas (Metro Kingdom)",
    "4 Power Moons from sub-areas (Metro Kingdom)",
    "4 Checkpoints from the Metro Kingdom",
    "5 Checkpoints from the Metro Kingdom",
    "6 Checkpoints from the Metro Kingdom",
    "14 Power Moons from the Snow Kingdom",
    "15 Power Moons from the Snow Kingdom",
    "16 Power Moons from the Snow Kingdom",
    "17 Power Moons from the Snow Kingdom",
    "18 Power Moons from the Snow Kingdom",
    "20 Regional Coins from the Snow Kingdom",
    "25 Regional Coins from the Snow Kingdom",
    "30 Regional Coins from the Snow Kingdom",
    "Purchase a Power Moon from the Snow Kingdom",
    "Score 85 Points on Koopa Trace-Walking (Snow Kingdom)",
    "Shiveria Secret Room: Dressed for the Weather (Snow Kingdom)",
    "3 Barrier-Opening Power Moons (Snow Kingdom)",
    "4 Barrier-Opening Power Moons (Snow Kingdom)",
    "Captain Toad in the Snow Kingdom",
    "Purchase the Shiveria Sticker (Snow Kingdom)",
    "14 Power Moons from the Seaside Kingdom",
    "15 Power Moons from the Seaside Kingdom",
    "16 Power Moons from the Seaside Kingdom",
    "17 Power Moons from the Seaside Kingdom",
    "18 Power Moons from the Seaside Kingdom",
    "20 Regional Coins from the Seaside Kingdom",
    "25 Regional Coins from the Seaside Kingdom",
    "30 Regional Coins from the Seaside Kingdom",
    "2 Fountain-Seal Power Moons (Seaside Kingdom",
    "3 Fountain-Seal Power Moons (Seaside Kingdom)",
    "4 Fountain-Seal Power Moons (Seaside Kingdom)",
    "Uncorn 1 Fountain (Seaside Kingdom)",
    "Uncork 2 Fountains (Seaside Kingdom)",
    "Uncork 3 Fountains (Seaside Kingdom)",
    "Purchase a Power Moon from the Seaside Kingdom",
    "Bubblaine Secret Room: A Relaxing Dance (Seaside Kingdom)",
    "Purchase the Bubblaine Sticker (Seaside Kingdom)",
    "Captain Toad in the Seaside Kingdom",
    "2 Power Moons from sub-areas (Seaside Kingdom)",
    "3 Checkpoints from the Seaside Kingdom",
    "4 Checkpoints from the Seaside Kingdom",
    "24 Power Moons from the Luncheon Kingdom",
    "25 Power Moons from the Luncheon Kingdom",
    "26 Power Moons from the Luncheon Kingdom",
    "27 Power Moons from the Luncheon Kingdom",
    "28 Power Moons from the Luncheon Kingdom",
    "29 Power Moons from the Luncheon Kingdom",
    "30 Power Moons from the Luncheon Kingdom",
    "20 Regional Coins from the Luncheon Kingdom",
    "25 Regional Coins from the Luncheon Kingdom",
    "30 Regional Coins from the Luncheon Kingdom",
    "Mount Volbono Secret Room: Heat Up the First Pot! (Luncheon Kingdom)",
    "Mount Volbono Secret Room: Heat Up the Second Pot! (Luncheon Kingdom)",
    "2 Power Moons from Golden Turnips (Luncheon Kingdom)",
    "3 Power Moons from Golden Turnips (Luncheon Kingdom)",
    "Luncheon Kingdom Slots",
    "Purchase a Power Moon from the Luncheon Kingdom",
    "Purchase the Mount Volbono Sticker (Luncheon Kingdom)",
    "2 Power Moons from sub-areas (Luncheon Kingdom)",
    "4 Power Moons from sub-areas (Luncheon Kingdom)",
    "3 Checkpoints from the Luncheon Kingdom",
    "4 Checkpoints from the Luncheon Kingdom",
    "13 Power Moons from Bowser's Kingdom",
    "14 Power Moons from Bowser's Kingdom",
    "15 Power Moons from Bowser's Kingdom",
    "16 Power Moons from Bowser's Kingdom",
    "17 Power Moons from Bowser's Kingdom",
    "18 Power Moons from Bowser's Kingdom",
    "20 Regional Coins from Bowser's Kingdom",
    "25 Regional Coins from Bowser's Kingdom",
    "30 Regional Coins from Bowser's Kingdom",
    "Purchase a Power Moon from Bowser's Kingdom",
    "Bowser's Castle Secret Room: 8-bit Samurai Action (Bowser's Kingdom)",
    "Captain Toad in Bowser's Kingdom",
    "Purchase the Bowser's Castle Sticker (Bowser's Kingdom)",
    "6 Checkpoints from Bowser's Kingdom",
    "7 Checkpoints from Bowser's Kingdom",
    "8 Checkpoints from Bowser's Kingdom",
    "9 Checkpoints from Bowser's Kingdom",
    "2 Power Moons from sub-areas (Bowser's Kingdom)",
    "3 Power Moons from the Moon Kingdom",
    "4 Power Moons from the Moon Kingdom",
    "5 Power Moons from the Moon Kingdom",
    "6 Power Moons from the Moon Kingdom",
    "7 Power Moons from the Moon Kingdom",
    "8 Power Moons from the Moon Kingdom",
    "15 Regional Coins from the Moon Kingdom",
    "20 Regional Coins from the Moon Kingdom",
    "25 Regional Coins from the Moon Kingdom",
    "Power Moon from the Rabbit (Moon Kingdom)",
    "2 Checkpoints from the Moon Kingdom",
    "3 Checkpoints from the Moon Kingdom"
];
