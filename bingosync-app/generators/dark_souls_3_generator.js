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
    "20 Attunement",
    "20 Vitality",
    "40 Dexterity",
    "40 Endurance",
    "40 Faith",
    "40 Intelligence",
    "40 Luck",
    "40 Strength",
    "40 Vigor",
    "Burn all Undead Bone Shards",
    "Disable the Ballista in the Smoldering lake",
    "Don’t get poisoned in Farron Keep",
    "Get Antiquated Set",
    "Get Arbalest",
    "Get Armor of Favor Set",
    "Get Avelyn",
    "Get Black Witch Set",
    "Get Blacksmith Hammer",
    "Get Blue Tearstone Ring",
    "Get Brass Set",
    "Get Catarina Set",
    "Get Chaos Blade",
    "Get Cloranthy Ring",
    "Get Crow Talons",
    "Get Crown of Dusk",
    "Get Crucifix of the Mad King",
    "Get Crystal Scroll",
    "Get Deep Divine Braille Tome",
    "Get Divine Braille Tome of Carim",
    "Get Divine Braille Tome of Lothric",
    "Get Dragon Tooth",
    "Get Drang Hammers",
    "Get Earth Seeker",
    "Get Emit Force",
    "Get Estus Ring",
    "Get Firekeeper Set",
    "Get Flame Fan",
    "Get Flame Stoneplate Ring",
    "Get Follower Sabre",
    "Get Golden Scroll",
    "Get Grave Warden Tome",
    "Get Great Swamp Tome",
    "Get Harald Curved Greatsword",
    "Get Havel's Set",
    "Get Hawk Ring",
    "Get Hornet Ring",
    "Get Horsehoof Ring",
    "Get Hunter’s Ring",
    "Get Izalith Staff",
    "Get Izalith Tome",
    "Get Karla's Set",
    "Get Lightning Arrow",
    "Get Logan's Scroll",
    "Get Maiden Set",
    "Get Millwood Battle Axe",
    "Get Millwood Set",
    "Get Milwood Greatbow",
    "Get Mourne’s Ring",
    "Get Murky Hand Scythe",
    "Get Old Sorcerer Set",
    "Get Preacher's Right Arm",
    "Get Quakestone Hammer",
    "Get Quelana Tome",
    "Get Reversal Ring",
    "Get Ricard's Rapier",
    "Get Ring of Favor",
    "Get Ringed Knight Paired Greatswords",
    "Get Ringed Knight Spear",
    "Get Ruin Set",
    "Get Sacred Chime of Filianore",
    "Get Sacred Flame",
    "Get Sage's Scroll",
    "Get Scholar’s Ring",
    "Get Slave Set",
    "Get Slumbering Dragoncrest Ring",
    "Get Slumbering Dragoncrest Ring",
    "Get Soul Stream",
    "Get Sun Princess Ring",
    "Get Sunlight Straight Sword",
    "Get Way of the White Corona",
    "Get White Birch Bow",
    "Get White Hair Talisman",
    "Get Witch's Locks",
    "Get Wrath of the Gods",
    "Get ring of Steel Protection",
    "Get the Pyromancer's Parting Flame",
    "Infuse an item with a Blessed Gem",
    "Infuse an item with a Blood Gem",
    "Infuse an item with a Chaos Gem",
    "Infuse an item with a Crystal Gem",
    "Infuse an item with a Deep Gem",
    "Infuse an item with a Heavy Gem",
    "Infuse an item with a Hollow Gem",
    "Infuse an item with a Lightning Gem",
    "Infuse an item with a Poison Gem",
    "Infuse an item with a Sharp Gem",
    "Infuse an item with a Simple Gem",
    "Kill 2 giant crabs",
    "Kill 3 Elder Ghrus",
    "Kill 3 Giant Serpent-Men",
    "Kill 3 Smoldering Ghrus",
    "Kill 3 giants",
    "Kill Abyss Watchers",
    "Kill Aldrich",
    "Kill All Ravenous Crystal Lizards",
    "Kill Both Deep Accurseds",
    "Kill Both fire demons",
    "Kill Carthus sandworm",
    "Kill Champion Gundyr",
    "Kill Crystal Sage",
    "Kill Crystal Sage in Phase 1",
    "Kill Curse-Rotted Greatwood",
    "Kill Dancer",
    "Kill Deacons of the Deep",
    "Kill Demon Prince",
    "Kill Dragonslayer Armor",
    "Kill Gael",
    "Kill Gravetender",
    "Kill Halflight",
    "Kill Midir",
    "Kill Nameless King",
    "Kill Oceiros",
    "Kill Old Demon King",
    "Kill Pontiff",
    "Kill Pontiff without parrying",
    "Kill Pontiff without parrying",
    "Kill Sister Friede",
    "Kill Soul of Cinder",
    "Kill Stray Demon",
    "Kill Twin Princes",
    "Kill Wolnir",
    "Kill Wolnir without breaking all bracelets",
    "Kill Wyvern",
    "Kill Yhorm",
    "Kill Yhorm without storm ruler",
    "Kill a Boss with a shield only",
    "Kill a boss with consumables only",
    "Kill a boss with fists only",
    "Kill a boss with only backstabs",
    "Kill a boss with only ripostes",
    "Kill a boss with weapon art only",
    "Kill a gargoyle",
    "Kill all 3 Pontiff beasts",
    "Kill all angels in the dreg heap",
    "Kill all outrider knights",
    "Kill at least 3 Wyverns",
    "Kill every jailer in the dungeon",
    "Parry Dragonslayer Armor",
    "Parry Lorian",
    "Upgrade Estus Flask to full",
    "Upgrade a regular titanite weapon to +10",
    "Upgrade a scales weapon to +5",
    "Upgrade a twinkling weapon to +5"
]

