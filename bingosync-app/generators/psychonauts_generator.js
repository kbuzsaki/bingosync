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
    "Level 10",
    "Level 20",
    "Level 30",
    "Level 40",
    "Level 50",
    "Level 60",
    "Level 70",
    "Level 80",
    "Level 90",
    "Level 100",
    "Defeat The Mega Censor",
    "Defeat The Phantom",
    "Defeat The Den Mother",
    "Defeat Linda",
    "Aquire Confusion Grenade",
    "Aquire Telekenisys",
    "Aquire Pyrokenisys",
    "Aquire Invisibility",
    "Aquire Clairevoyance",
    "Collect all of Baggage (Oleander)",
    "Collect all of Baggage (Tumbler)",
    "Collect all of Baggage (Sasha)",
    "Collect all of Baggage (Milla)",
    "Collect all of Baggage (Linda)",
    "Collect all of Baggage (Boyd)",
    "Collect all of Baggage (Gloria)",
    "Collect all of Baggage (Fred)",
    "Collect all of Baggage (Edgar)",
    "Collect a Mental Layer Upgrade",
    "Collect an Ammo Upgrade",
    "Aquire the Dowsing Rod",
    "Aquire the Cobweb Duster",
    "By a Psi Core",
    "Create a psi Card for cobwebs",
    "Change your Psi ball color",
    "Aquire Mental Magnet",
    "Collect 50 Arrowheads",
    "Collect 100 Arrowheads",
    "Collect 150 Arrowheads",
    "Collect 200 Arrowheads",
    "Eat Dinner (Cook a critter)",
    "Defeat 1 Wrestler",
    "Defeat 2 Wrestlers",
    "Defeat 3 Wrestlers",
    "Defeat 4 Wrestlers",
    "Defeat 1 Nightmare",
    "Defeat 2 Nightmares",
    "Buy a painting (over 0 cost)",
    "Collect 4 scavenger hunt items",
    "Collect 8 scavenger hunt items",
    "Collect 12 scavenger hunt items",
    "Collect 16 scavenger hunt items",
    "Enter Milla's toybox",
    "Defeat Kochamara",
    "Collect Rolling Pin",
    "Take a bird's eye view (Clairvoyance a bird)",
    "Collect 2 Brains",
    "Collect 4 Brains",
    "Collect 6 Brains",
    "Collect 8 Brains",
    "Collect 10 Brains",
    "Collect Crow's Feather",
    "Collect Lilli's Bracelet",
    "Defeat Coach punching game Level 1",
    "Defeat Coach punching game Level 2",
    "Defeat Coach punching game Level 3",
    "Free the Blimp Pilot",
    "Collect 2 Psi Challenge markers",
    "Collect 4 Psi Challenge markers",
    "Collect 6 Psi Challenge markers",
    "Open a safe in Oleander's mind",
    "Open a safe in the Brain Tumbler",
    "Open a safe in Sasha's Mind",
    "Open a safe in Milla's Mind",
    "Open a safe in Linda's Mind",
    "Open a safe in Boyd's Mind",
    "Open a safe in Gloria's Mind",
    "Open a safe in Edgar's Mind",
    "Open a safe in Fred's Mind",
    "Open a safe in Meat Circus",
    "Open a safe in Every Mind",
    "Defeat Oly's Dad (Battle 1)",
    "Defeat Oly's and Raz's Dads (Battle 2)",
    "Defeat Dad Monster (Final Battle)",
    "Defeat a Brain Tank",
    "Visit Every part of camp",
    "Talk to Every Version of Cruller",
    "Shoot Hoops with Raz as ball",
    "Climb to the top of the GCP (above the trees)",
    "Visit Edgar's Secret Garden",
    "Help Dogen through minefield",
    "Have Raz repeat Oleander's Speech",
    "Change a TV channel",
    "Teleport via Worm",
    "Back to HQ using Bacon",
    "Read a message",
    "Kill a Psychic Bear",
    "Set off a car Alarm",
    "Get Sniped",
    "Get confused by rat",
    "Show Pokeylope to 5 Campers",
    "Telekenysis 5 Campers",
    "Psi blast 5 Campers",
    "Heat up 5 Campers",
    "Kill a psychic cougar",
    "Steal a Squirrel's Nuts",
    "Visit Oleander's Secret Tunnel",
    "Camp History Lesson",
    "Light the Main Campfire",
    "Waterfall Secret Psi Card",
    "Offer Someone cake",
    "Haybale Target Practice",
    "Buy some Candy",
    "Fire behind the Firestarters",
    "Ride a canoe",
    "Use a bathroom",
    "Recruit a soldier",
    "Recruit a builder",
    "Storm the Castle",
    "Grab a bunny",
    "Make your own Psi challenge marker",
    "Clear 5 cobwebs",
    "Clear 10 cobwebs",
    "Clear 15 cobwebs",
    "Collect 20 figments in a level",
    "Collect 40 figments in a level"
];
