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
    "1 Spatula from Mr. Krabs",
    "1 Spatula from Patrick",
    "2 Spatulas from Mr. Krabs",
    "2 Spatulas from Patrick",
    "3 Spatulas from Patrick",
    "Across the Dreamscape",
    "All Golden Underwear",
    "Ambush at Tree-Dome",
    "Ambush in Lighthouse",
    "Annoy Squidward",
    "Ball Room Sock",
    "Bikini Bottom: All Socks (8)",
    "Bikini Bottom: All Spatulas (8)",
    "Bowl a 50 in Skee-Ball",
    "Clear Bumper Boats",
    "Complete Robot Viewer (Police Station)",
    "Computer Room Purple Shiny Objects (2)",
    "Computer Room Sock",
    "Connect the Towers",
    "Defeat Flying Dutchman",
    "Defeat Prawn",
    "Destroy the Robot Ship",
    "Down in the Swamp",
    "Downtown Copper Building Sock",
    "Downtown Copper Platform Sock",
    "Downtown Rock Bottom: All Socks (3)",
    "Downtown Rock Bottom: All Spatulas (4)",
    "Downtown Rooftops: All Socks (3)",
    "Downtown Rooftops: All Spatulas (2)",
    "Downtown Streets: All Socks (4)",
    "Downtown Streets: All Spatulas (3)",
    "Downtown: All Socks (9)",
    "Downtown: All Spatulas (8)",
    "Drain the Lake",
    "Dream: All Socks (5)",
    "Dream: All Spatulas (8)",
    "Dreamscape: All Spatulas (3)",
    "Dumpster Sock",
    "Duplicatotron Pier Sock",
    "End of the Road",
    "Extreme Bungee",
    "Find All Lost Campers",
    "Flounder Hill Sandman Sock",
    "Flounder Hill: All Socks (2)",
    "Flounder Hill: All Spatulas (2)",
    "Follow Bouncing Ball",
    "Frosty Bungee",
    "Funnel Machines",
    "Gated Jellyfish Caves Sock",
    "Get Aloft There, Matey",
    "Goo Lagoon Beach: All Socks (5)",
    "Goo Lagoon Beach: All Spatulas (3)",
    "Goo Lagoon Pier: All Socks (3)",
    "Goo Lagoon Pier: All Spatulas (3)",
    "Goo Lagoon: All Socks (11)",
    "Goo Lagoon: All Spatulas (8)",
    "Graveyard Lake Sock",
    "Graveyard Lake: All Spatulas (3)",
    "Graveyard: All Socks (3)",
    "Graveyard: All Spatulas (8)",
    "Grill Sock",
    "Guppy Mound Lasso Purple Shiny Object",
    "Guppy Mound: All Socks (3)",
    "Guppy Mound: All Spatulas (2)",
    "Here You Go",
    "How in Tarnation",
    "Ice Pillar Sock in Slide 3",
    "Infestation at Krusty Krab",
    "Inside Downtown Fallen Building Sock",
    "Jellyfish Barrel Island Sock",
    "Jellyfish Bowling Sock",
    "Jellyfish Caves: All Socks (4)",
    "Jellyfish Caves: All Spatulas (2)",
    "Jellyfish Fields: All Socks (14)",
    "Jellyfish Fields: All Spatulas (8)",
    "Jellyfish Fountain Sock",
    "Jellyfish Lake: All Socks (3)",
    "Jellyfish Rock: All Socks (6)",
    "Jellyfish Rock: All Spatulas (3)",
    "Kah - Rah - Tae",
    "Kelp Caves Sock",
    "Kelp Forest: All Socks (7)",
    "Kelp Forest: All Spatulas (8)",
    "Kelp Swamp: All Socks (2)",
    "Kelp Tiki Bowl Sock",
    "Kelp Vines Sock",
    "Kelp Woods: All Socks (3)",
    "Kelp Woods: All Spatulas (2)",
    "King of the Castle",
    "Krabby Patty Platforms",
    "Krusty Sock",
    "Lasers are Fun",
    "Learn Sandy's Moves",
    "Lodge Sandman Sock",
    "Mermaid Man Time Challenge",
    "Mermalair Lobby Sock",
    "Mermalair Main Chamber: All Spatulas (4)",
    "Mermalair: All Socks (4)",
    "Mermalair: All Spatulas (8)",
    "Museum Purple Shiny Object",
    "Music in the Ear of the Beholder",
    "Navigate Canyons and Mesas",
    "Patrick's Dilemma",
    "Patrick's Rock Sock",
    "Pineapple Sock",
    "Plundering Robots in Museum",
    "Power Crystal Crisis",
    "Return Museum's Art",
    "Robo-Patrick Ahoy",
    "Robot Ship Sock",
    "Rock Bottom Museum: All Socks (3)",
    "Rock Bottom: All Socks (9)",
    "Rock Bottom: All Spatulas (8)",
    "Rolling Ball Room",
    "Rumble at Poseidome",
    "Sand Mountain Lodge: All Socks (2)",
    "Sand Mountain Lodge: All Spatulas (2)",
    "Sand Mountain Slide 3: All Socks (3)",
    "Sand Mountain Slide 3: All Spatulas (2)",
    "Sand Mountain: All Socks (10)",
    "Sand Mountain: All Spatulas (8)",
    "Sandy's Dream: All Socks (3)",
    "Sandy's Dream: All Spatulas (2)",
    "Save the Children",
    "Sea Caves: All Socks (3)",
    "Sea Needle Sock",
    "Security Tunnel Purple Shiny Object",
    "Security Tunnel Sock",
    "Shipwreck Sock",
    "Shut Down Security System",
    "Slide 3 Cave Purple Shiny Object",
    "Slide 3 Cave Sock",
    "Slide Leap",
    "Slidin' Texas Style",
    "Slip Sliding Away",
    "Small Shall Rule",
    "Sock Behind Lighthouse",
    "Sock Inside Lighthouse",
    "Spelunking",
    "SpongeBob's Closet",
    "Spongeball Arena Purple Shiny Objects (2)",
    "Spork Mountain Sock",
    "Squid's Dream Sock",
    "Squidward's House Sock",
    "Stack of Ships Purple Shiny Object",
    "Super Bounce",
    "Swingalong Spatula",
    "Swingers Ahoy",
    "Swingin' Sandy",
    "TV Sock",
    "Texas Manor Sock",
    "Texas Oil Tower Sock",
    "Texas Slide Lasso Sock",
    "Through the Sea Caves",
    "Tikis Go Boom",
    "Top of Computer Area",
    "Top of Downtown Fallen Building Sock",
    "Top of Pineapple",
    "Top of Security Tunnel",
    "Top of Shady Shoals",
    "Top of Stack of Ships",
    "Top of the Chum Bucket",
    "Top of the Hill",
    "Top of the Lodge",
    "Tower Bungee",
    "Towers of Power",
    "Trench Clam Sock",
    "Trench of Darkness: All Socks (3)",
    "Trench of Darkness: All Spatulas (3)",
    "Unlock Theater",
    "Wack-A-Tiki Sock",
    "Wall Jump in Chum Bucket"
];
