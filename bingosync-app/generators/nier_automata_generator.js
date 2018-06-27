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
    "Activate City Ruins: Center Transporter",
    "Activate City Ruins: Near Factory Transporter",
    "Activate City Ruins: Near the Tower Transporter",
    "Activate Desert: Camp Transporter",
    "Activate Desert: Center Transporter",
    "Activate Desert: Housing Complex Transporter",
    "Activate Desert: Oil Field Transporter",
    "Activate Factory: Entrance Transporter",
    "Activate Flooded City: Coast Transporter",
    "Activate Forest Castle: Front Transporter",
    "Activate Forest Castle: Royal Chamber Transporter",
    "Activate Forest Zone: Center Transporter",
    "Activate Park Ruins: Attraction Sq. Transporter",
    "Activate Pascal’s Village Transporter",
    "Collect all stamps",
    "Collect the Amusement Park Photograph",
    "Collect the Forest Photograph",
    "Collect the Oasis Photograph",
    "Collect ⅔ Photographs for Photographs quest",
    "Complete 11B’s Memento",
    "Complete 3 sidequests",
    "Complete 4 sidequests",
    "Complete 5 sidequests",
    "Complete Anemone’s Past",
    "Complete Animal Care",
    "Complete Camp Development",
    "Complete Culinary Researcher",
    "Complete Family Squabble",
    "Complete Improving Communications",
    "Complete Investigating Communications",
    "Complete Machine Examination 1",
    "Complete Machine Examination 2",
    "Complete Resistance Disappearance",
    "Complete Retrieve the Confidential Intel",
    "Complete Robo Dojo -- Black Belt",
    "Complete Robo Dojo -- Brown Belt",
    "Complete Robo Dojo -- White Belt",
    "Complete Sartre’s (Jean-Paul’s) Melancholy",
    "Complete Sorting Trouble",
    "Complete Terminal Repair",
    "Complete The Manager’s Request",
    "Complete The Wandering Couple",
    "Complete Turf War",
    "Complete YoRHa Betrayers",
    "Complete fights for Jackass’s Research",
    "Complete one Speed Star race",
    "Complete three Speed Star races",
    "Complete two Speed Star races",
    "Defeat 2 Apologetic Machines",
    "Defeat 5 Enemies while mounted on an animal",
    "Defeat 5 animals",
    "Defeat A2",
    "Defeat Goliath Tank in the Amusement Park",
    "Defeat both City Engels",
    "Defeat the Animal-loving Machine",
    "Don’t upgrade Virtuous Contract to level 2",
    "Equip Blue Ribbon",
    "Equip Pink Ribbon",
    "Fish in Amusement Park Sewer Pipe once",
    "Fish in Amusement Park once",
    "Fish in City Ruins once",
    "Fish in Flooded City Access Point once",
    "Fish in Flooded City Coast once",
    "Fish in Flooded City Sewer Pipe once",
    "Fish in Forest Castle River once",
    "Fish in Oasis once",
    "Fish in Oil Field once",
    "Fully expand your Program Data",
    "Get 1 Jukebox Sound Data",
    "Get Ending H (Ignore the City Engels encounter)",
    "Get Ending K (Obtain & eat a Mackerel)",
    "Get Ending N (Destroy the machines in Pascal’s Village)",
    "Get Ending T (Remove your OS chip)",
    "Get Ending U (Self-Destruct in bunker)",
    "Interact with the Lunar Tear in the Amusement Park",
    "Interact with the Lunar Tear in the Commercial Center",
    "Interact with the Lunar Tear in the Desert",
    "Interact with the Lunar Tear in the Forest",
    "Kill a Special Unit Machine",
    "Kill a Special Unit Machine Weaponless",
    "No transporting",
    "Obtain Ancient Overlord",
    "Obtain Angel’s Folly",
    "Obtain Beastbane",
    "Obtain Beastlord",
    "Obtain Beautiful Glass",
    "Obtain Choice Sachet",
    "Obtain Cypress Stick",
    "Obtain Dragoon Lance",
    "Obtain Fang of the Twins",
    "Obtain Letter for Sartre",
    "Obtain Lunar Tear (accessory)",
    "Obtain Machine Axe",
    "Obtain Machine Fossil",
    "Obtain Machine Spear",
    "Obtain Machine Sword",
    "Obtain Phoenix Dagger",
    "Obtain Sartre’s Letter",
    "Obtain Type-3 Fists",
    "Obtain Type-3 Lance",
    "Obtain Type-4O Lance",
    "Obtain Type-4O Sword",
    "Obtain Virtuous Dignity",
    "Obtain Virtuous Grief",
    "Obtain Virtuous Treaty",
    "Obtain YoRHa-issue Blade",
    "Obtain a Desert Flower",
    "Obtain a Mackerel",
    "Obtain a Memory Alloy",
    "Obtain a Meteorite",
    "Obtain a Silver Ore",
    "Obtain a Small Gear",
    "Obtain a chip/material from Emil’s Desert route",
    "Obtain an E-Drug",
    "Obtain the EXP Gauge System chip",
    "Obtain the Fishing Data System chip",
    "Obtain the Item Scan Support chip",
    "Obtain the Sound Data System chip",
    "Purchase Blade Pod Program upon first entry of Resistance camp, equip to Pod A and do not change",
    "Purchase Hammer Pod Program upon first entry of Resistance camp, equip to Pod A and do not change",
    "Purchase Mirage Pod Program upon first entry of Resistance camp, equip to Pod A and do not change",
    "Purchase Spear Pod Program upon first entry of Resistance camp, equip to Pod A and do not change",
    "Retrieve 2B’s Body",
    "Single DG run (No Small Sword on Weapon Set 1’s heavy slot)",
    "Take a nap (in resistance camp or bunker)",
    "Talk to the Apologetic Robot in the Desert",
    "Talk to the Apologetic Robot in the Flooded City",
    "Talk to the Apologetic Robot in the Forest",
    "Talk to the YoRHa member in the Oasis",
    "Talk to the YoRHa member in the Oil Field",
    "Upgrade Ancient Overlord to level 2",
    "Upgrade Beastbane to level 2",
    "Upgrade Beastlord to level 2",
    "Upgrade Cypress Stick to level 2",
    "Upgrade Dragoon Lance to level 2",
    "Upgrade Fang of the Twins to level 2",
    "Upgrade Machine Axe to level 2",
    "Upgrade Machine Spear to level 2",
    "Upgrade Machine Sword to level 2",
    "Upgrade Phoenix Dagger to level 2",
    "Upgrade Type-3 Lance to level 2",
    "Upgrade Type-4O Lance to level 2",
    "Upgrade Type-4O Sword to level 2",
    "Upgrade Virtuous Dignity to level 2",
    "Upgrade Virtuous Grief to level 2",
    "Upgrade Virtuous Treaty to level 2",
    "Upgrade YoRHa-issue Blade to level 2",
    "Upgrade any weapon to level 3",
    "Visit Emil’s giant heads in the desert",
    "Visit the Commercial Facility",
    "Visit the Forest King’s Cradle",
    "Visit the Place of Memories",
    "Visit the old Forest King’s grave",
    "Watch Romeo & Juliet’s play"
];
