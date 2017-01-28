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
    "Visit all houses in Peach Town",
    "Got a local Peach Wine",
    "Got a Peach Doll",
    "Took Kevin home",
    "Delivered a wallet to the police station",
    "Cleared Barrel Dodging",
    "Gave a magazine",
    "Give James a peach",
    "Collect 7 gemstones",
    "Visit all houses in Fuji City",
    "Got the gold ornament",
    "Got the policemen's club",
    "Find Treasure Hunting Maze",
    "Complete Treasure Hunting Maze",
    "Beat the King in the sliding door race",
    "Save Otomi",
    "Meet Iwasuke",
    "Listen to Harosuke's Trumpet",
    "Have your fortune told",
    "Beat Natsuo in a Highway Race",
    "Visit all houses in Sandpolis",
    "Get the mini-tower",
    "Get the toy gun",
    "Impress Lisalisa",
    "Beat Johnny in a Drag race",
    "Catch Butch",
    "Deliver Football to Mr. King",
    "Figure 8 Step 1",
    "Figure 8 Step 2",
    "Figure 8 Step 3",
    "Figure 8 Step 4",
    "Figure 8 Step 5",
    "Play football/soccer",
    "Find Benji's fountain pen",
    "Got my own garage",
    "Sleepy Brian gave me a body",
    "Played Tunnel Race",
    "Beat Akiban in Tunnel Race",
    "Climb to the top of the big tower",
    "Clear Q's Rally",
    "Participate in the Endurance Race",
    "Visit all houses in Chestnut Canyon",
    "Maya Carton gave me her painting",
    "Got a model train",
    "Complete the volcano course",
    "Complete Rock Climbing",
    "Come up with a greeting",
    "Visit all houses in White Mountain",
    "Got the Christmas tree",
    "Got Arctic pattern",
    "Solved the ghost mystery",
    "Found a Papu flower",
    "Delivered a Package to Jousset",
    "Jumped over 140 in Ski Jumping",
    "Got a present from Santa Claus",
    "Opened millionaire Keitel's Safe",
    "Play Curling",
    "Score 200/300 in Curling",
    "Fulfill White mountain policeman's wish",
    "Visited all the houses in Papaya Island",
    "Got an Unbado doll",
    "Got a Papaya Ukulele",
    "Run through Obstacle Course",
    "Listened to Papu Tree's story",
    "Beat Micky in Beach Flag",
    "Mayor is motivated",
    "Delivered a Fluffy Mushroom to Shirley",
    "Found Kerori",
    "Catch 20 Fish",
    "Woke Sleepy Casa up",
    "Gave love letter to Minerva",
    "Visit all houses in Cloud Hill",
    "Got Angel's Wings",
    "Got God's Rod",
    "Beat Travis in a single lap race/Push him off the track",
    "Answer all the questions correct. (Duck Quiz)",
    "Clear the Rainbow Jump",
    "Visit all houses in Mushroom Road",
    "a Goddess gave me a horn",
    "Played all holes in Golf",
    "Scored under 36 in Golf",
    "Now we have a fanclub",
    "Guessed the correct amount of windmills",
    "Met the black bus Orpheus",
    "Made a first contact",
    "Became the President",
    "Recruit two teammates",
    "20 Quick Pics",
    "30 Coins",
    "Unlock 15 bodies (10,15,20)",
    "Unlock 10 bodies (10,15,20)",
    "Unlock 20 bodies (10,15,20)",
    "Unlock 6 horns",
    "Unlock 3 horns",
    "Unlock 9 horns",
    "Get the B licence",
    "Get the A licence",
    "Get all QuickPics in Peach Town",
    "Get all QuickPics in Fuji City",
    "Get all QuickPics in Sandpolis",
    "Get all QuickPics in Chestnut Canyon",
    "Get all QuickPics in White Mountain",
    "Get all QuickPics in Papaya Island",
    "Get all QuickPics in Cloud Hill",
    "Get all QuickPics in Mushroom Road",
    "Collect All Coins in Peach Town",
    "Collect All Coins in Fuji City",
    "Collect All Coins in Sandpolis",
    "Collect All Coins in Chestnut Canyon",
    "Collect All Coins in White Mountain",
    "Collect All Coins in Papaya Island",
    "Collect All Coins in Mushroom Road",
    "Unlock all warps",
    "Recruit 5 members to MyCity",
    "Push the Single Lap guy off the egde ",
    "Max score in curling ",
    "Go 400 in Ski Jump",
    "Get 1/2/3 in a race",
    "Collect Yellow Topaz",
    "Collect Blue Sapphire",
    "Collect Red Ruby",
    "Collect Violet Moonstone",
    "Collect Red-Violet Amethyst",
    "Collect Green Emerald",
    "Collect Black Opal",
    "Win the Grand Prix",
    "Earn mad cash money",
    "20 miles on a shop sign",
    "Recolour two teammates",
    "Get all parts (Devil Excluded, and the Coine ones)",
    "Win Football 3-0",
    "Beat King's challenge legit",
    "Collect all advert signs ",
    "Visit all Paint shops",
    "Visit all Parts shops ",
    "Visit all Bars ",
    "Visit all Body Shops ",
    "Win all Races in Peach Town ",
    "Win all Races in Fuji City",
    "Win all Races in Sandpolis",
    "Win all Races in Chestnut Canyon",
    "Win all Races in White Mountain ",
    "Win all Races in Papaya Island",
    "Win all Races in Mushroom Road ",
    "Win all Races in Cloud Hill ",
    "Beat all the mini games in Fuji City",
    "Beat all the mini games in Sandpolis",
    "Beat all the mini games in Chestnut Canyon",
    "Beat all the mini games in White Mountain ",
    "Beat all the mini games in Papaya Island",
    "Beat all the mini games in Cloud Hill",
    "Get all \"Special\" parts ",
    "Speak to 5 roaming cars in Peach Town",
    "Speak to 5 roaming cars in Fuji City",
    "Speak to 5 roaming cars in Sandpolis",
    "Speak to 5 roaming cars in Chestnut Canyon",
    "Speak to 5 roaming cars in White Moutain",
    "Speak to 5 roaming cars in Papaya Island",
    "Speak to 5 roaming cars in Cloud Hill"
];
