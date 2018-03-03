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

// simpler generator that just does a random choice without duplicates
doGenerate = function(bingoList) {
    var availableGoals = bingoList.slice(0);
    var bingoBoard = [];

    for (var i = 1; i <= 25; i++) {
        // abort if we ran out of goals - shouldn't happen with this variant
        if (availableGoals.length === 0) {
            return [];
        }

        var randIndex = Math.floor(Math.random() * availableGoals.length);
        var goal = availableGoals[randIndex];

        availableGoals = availableGoals.filter(function(toFilter) {
            // filter this goal
            if (toFilter["name"] === goal["name"]) {
                return false;
            }
            // and any goals with the same types
            for (var j = 0; j < goal["types"].length; j++) {
                var type = goal["types"][j];
                if (toFilter["types"].indexOf(type) !== -1) {
                    return false;
                }
            }
            return true;
        });

        bingoBoard[i] = goal;
    }

    return bingoBoard;
}

bingoGenerator = function(bingoList, opts) {
    var LANG = opts.lang || 'name';
    var MODE = opts.mode || "normal";
    var cardType = "Normal";
    var SEED = opts.seed || Math.ceil(999999 * Math.random()).toString();
    var size = 5;

    var seed = SEED;
    for (var trys = 0; trys < 5; trys++) {
        Math.seedrandom(seed);
        card = doGenerate(bingoList);
        seed = seed + "1";
        if (card.length !== 0) {
            return card;
        }
    }

    var failArray = [];
    for (var i = 1; i <= 25; i++) {
        failArray[i] = {"name": "failed to generate"};
    }
    return failArray;
};

var bingoList = [
    {
        "name": "3 different special attacks on one monster",
        "types": []
    },
    {
        "name": "3 different types of spells on one monster",
        "types": []
    },
    {
        "name": "3 same-element spells on one monster",
        "types": []
    },
    {
        "name": "5 different magic spells on one monster",
        "types": []
    },
    {
        "name": "5000 Gold",
        "types": []
    },
    {
        "name": "A level 20 minion",
        "types": []
    },
    {
        "name": "A party that spells WIN",
        "types": []
    },
    {
        "name": "All 4 Warp Stones",
        "types": []
    },
    {
        "name": "All Knowledge Tablets",
        "types": []
    },
    {
        "name": "Both Magic Usage tablets",
        "types": []
    },
    {
        "name": "Both Merging Tablets",
        "types": []
    },
    {
        "name": "Capture 2 monsters of each element",
        "types": []
    },
    {
        "name": "Capture Karn/Geenwee",
        "types": []
    },
    {
        "name": "Capture Ojiae/Frey",
        "types": []
    },
    {
        "name": "Capture Skwoot/Nushab",
        "types": []
    },
    {
        "name": "Capture Yoalk/Ohzay",
        "types": []
    },
    {
        "name": "Capture level 10",
        "types": []
    },
    {
        "name": "Capture level 15",
        "types": []
    },
    {
        "name": "Capture level 20",
        "types": []
    },
    {
        "name": "Catch Arpatron Twice",
        "types": [
            "arpatron"
        ]
    },
    {
        "name": "Collect 3 Great Walnuts",
        "types": []
    },
    {
        "name": "Collect 5 Great Walnuts",
        "types": []
    },
    {
        "name": "Collect Nagi Belt",
        "types": []
    },
    {
        "name": "Complete Beetle Forest without summoning",
        "types": []
    },
    {
        "name": "Complete Dragonfly Forest without summoning",
        "types": []
    },
    {
        "name": "Complete Spider Forest without summoning",
        "types": []
    },
    {
        "name": "Defeat Dragonfly Forest Poacher",
        "types": []
    },
    {
        "name": "Defeat Earth Boss",
        "types": []
    },
    {
        "name": "Defeat Masked Boy",
        "types": []
    },
    {
        "name": "Defeat Spider Forest Poacher",
        "types": []
    },
    {
        "name": "Don't buy Accessories",
        "types": [
            "item_restrict"
        ]
    },
    {
        "name": "Don't buy Armour",
        "types": [
            "item_restrict"
        ]
    },
    {
        "name": "Don't buy Weapons",
        "types": [
            "item_restrict"
        ]
    },
    {
        "name": "Don't buy any items",
        "types": [
            "item_restrict"
        ]
    },
    {
        "name": "Don't catch Arpatron",
        "types": [
            "arpatron"
        ]
    },
    {
        "name": "Don't use any Sleep Powder",
        "types": [
            "item_restrict"
        ]
    },
    {
        "name": "Don't use heal items outside of battle",
        "types": []
    },
    {
        "name": "Inflict all 3 status ailments on an enemy",
        "types": []
    },
    {
        "name": "Keep 3 Skeleton Keys",
        "types": []
    },
    {
        "name": "Kill 3 monsters with magic seals",
        "types": []
    },
    {
        "name": "Kill 5 monsters with magic seals",
        "types": []
    },
    {
        "name": "Kill a monster using a magic seal",
        "types": []
    },
    {
        "name": "Kill all 3 monsters in a triple battle",
        "types": []
    },
    {
        "name": "Kill an Enemy with an Instant Death",
        "types": []
    },
    {
        "name": "Let a monster die of poison",
        "types": []
    },
    {
        "name": "Level up a minion 10 levels in one fight",
        "types": []
    },
    {
        "name": "Level up a minion 15 levels in one fight",
        "types": []
    },
    {
        "name": "Life Stealer",
        "types": []
    },
    {
        "name": "Merge Sherick",
        "types": []
    },
    {
        "name": "Merge Tweengo",
        "types": []
    },
    {
        "name": "Merge a minion with all 4 elements",
        "types": []
    },
    {
        "name": "Never Run From Battle",
        "types": []
    },
    {
        "name": "No HT in Beetle Forest",
        "types": []
    },
    {
        "name": "Obtain 3 spears in the forests",
        "types": []
    },
    {
        "name": "Obtain Thunderbolt",
        "types": []
    },
    {
        "name": "Open all pre-netherword chests",
        "types": []
    },
    {
        "name": "Play the Ocarina",
        "types": []
    },
    {
        "name": "Raise Levant's HP over 100",
        "types": []
    },
    {
        "name": "Raise Levant's HP over 108",
        "types": []
    },
    {
        "name": "Secret of Killing",
        "types": []
    },
    {
        "name": "Spider Forest Fetch Quests",
        "types": []
    },
    {
        "name": "Steal a Mugwort from Koris",
        "types": []
    },
    {
        "name": "Turn a monster to stone",
        "types": []
    }
];
