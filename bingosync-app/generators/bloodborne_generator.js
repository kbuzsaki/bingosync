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
    "+10 weapon",
    "40 arcane",
    "40 bloodtinge",
    "40 skill",
    "40 strength",
    "Don't level your character",
    "Enter the Unseen Village through a snatcher",
    "Finish with a +5 weapon",
    "Get A Call Beyond",
    "Get Anti-Clockwise Metamorphosis rune",
    "Get Arcane Lake rune",
    "Get Arianna's Shoes",
    "Get Beast rune",
    "Get Beast's Embrace rune",
    "Get Blood Rapture rune",
    "Get Clawmark rune",
    "Get Clear Deep Sea rune",
    "Get Clockwise Metamorphosis rune",
    "Get Communion rune",
    "Get Corruption rune",
    "Get Deep Sea rune",
    "Get Dissipating Lake rune",
    "Get Eye rune",
    "Get Fading Lake rune",
    "Get Formless Oedon rune",
    "Get Great Deep Sea rune",
    "Get Great Lake rune",
    "Get Guidance rune",
    "Get Heir rune",
    "Get Henryk's Hunter Set",
    "Get Hunter rune",
    "Get Impurity rune",
    "Get Lake rune",
    "Get Milkweed rune",
    "Get Moon rune",
    "Get Oedon Writhe rune",
    "Get Radiance rune",
    "Get Stunning Deep Sea rune",
    "Get all One Third of Umbilical Cords",
    "Get the Amygdalan Arm",
    "Get the Arcane Damp Blood Gem",
    "Get the Beast Claw",
    "Get the Beast Cutter",
    "Get the Beasthunter Saif",
    "Get the Blacksky Eye",
    "Get the Blade of Mercy",
    "Get the Bloodletter",
    "Get the Boom Hammer",
    "Get the Cannon",
    "Get the Chikage",
    "Get the Church Cannon",
    "Get the Church Pick",
    "Get the Cursed Tempering Damp Blood Gem",
    "Get the Doll Set",
    "Get the Double-barreled Shotgun",
    "Get the Empty Phantasm Shell",
    "Get the Evelyn",
    "Get the Executioner's Gloves",
    "Get the Fist of Gratia",
    "Get the Gatling Gun",
    "Get the Holy Moonlight Sword",
    "Get the Knight's set",
    "Get the Kos Parasite",
    "Get the Loch Shield",
    "Get the Logarius' Wheel",
    "Get the Ludwig's Holy Blade",
    "Get the Ludwig's Rifle",
    "Get the Madaras Whistle",
    "Get the Messenger's Gift",
    "Get the Piercing Rifle",
    "Get the Rakuyo",
    "Get the Reiterpallasch",
    "Get the Rifle Spear",
    "Get the Rosmarinus",
    "Get the Simon's Bowblade",
    "Get the Stake Driver",
    "Get the Tear Blood Gem",
    "Get the Tiny Tonitrus",
    "Get the Tomb Prospector Set",
    "Get the Tonitrus",
    "Get the Whirligig Saw",
    "Get the White Church Set",
    "Join Cainhurst Vilebloods covenant",
    "Join Executioners covenant",
    "Join Hunter of Hunters covenant",
    "Join Lumenwood Kin covenant",
    "Join The Blood Beast covenant",
    "Join The League covenant",
    "Kill 5 npc's",
    "Kill Afflicted Beggar",
    "Kill Amelia",
    "Kill Amelia hitless",
    "Kill Amygdala",
    "Kill Amygdala hitless",
    "Kill Darkbeast Paarl",
    "Kill Gehrman",
    "Kill Laurence",
    "Kill Laurence",
    "Kill Logarius",
    "Kill Maria",
    "Kill Mergo's Wet Nurse",
    "Kill Mergo's Wet Nurse hitless",
    "Kill Micolash",
    "Kill Micolash hitless",
    "Kill Micolash with poison knives",
    "Kill Moon Presence",
    "Kill Orphan of Kos",
    "Kill Rom",
    "Kill a Fluorescent Flower",
    "Kill a boss with a Hunter's Tool only",
    "Kill a boss with backstabs only",
    "Kill a boss with bare fists",
    "Kill a boss with gun only",
    "Kill a boss with parries only",
    "Kill a boss with projectiles only",
    "Kill a boss with torch only",
    "Never upgrade your weapons",
    "Never visit the Hunter's Dream",
    "One-cycle Rom"
];
