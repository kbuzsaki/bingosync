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
    var SEED = opts.seed || Math.ceil(999999 * Math.random()).toString();
    Math.seedrandom(SEED);

    var selectedGoals = []

    for(var i = 1; i <= 25; i++){
        randomind = Math.floor(Math.random() * bingoList.length);
        randomkey = bingoList[randomind];

        bingoList = bingoList.filter(goals =>
            (!goals.hasOwnProperty("group")
            || goals["group"] != randomkey["group"])
        );

        var goal = randomkey["name"];
        selectedGoals[i] = {"name": goal};
    }

    return selectedGoals;
};

var bingoList = [
{"name": "Boomerang"},
{"name": "Hookshot"},
{"name": "Magic Rod"},
{"name": "Pegasus Boots"},
{"name": "Roc's Feather"},
{"name": "Power Bracelet"},
{"name": "Power Bracelet L-2"},
{"name": "Flippers"},
{"name": "Ocarina"},
{"name": "Magic Potion"},
{"name": "Mirror Shield"},
{"name": "10 Sea Shells"},
{"name": "Level 2 Sword"},
{"name": "Tail Key"},
{"name": "Slime Key"},
{"name": "Angler Key"},
{"name": "Face Key"},
{"name": "Bird Key"},
{"name": "Do the Raft Minigame"},
{"name": "Marin's Cucco Killing Text"},
{"name": "Pick up Crane Game Owner"},
{"name": "Talk to a Buzz Blob"},
{"name": "Moblin King"},
{"name": "Turtle Rock Entrance Boss"},
{"name": "Kill Master Stalfos at least once"},
{"name": "Gohma"},
{"name": "Grim Creeper"},
{"name": "Blaino"},
{"name": "Dethyl"},
{"name": "Rooster"},
{"name": "Marin"},
{"name": "Bow-wow"},
{"name": "Return Bow-wow"},
{"name": "8 Heart Pieces"},
{"name": "12 Heart Pieces"},
{"name": "Bomb Curse"},
{"name": "Arrow Curse"},
{"name": "Powder Curse"},
{"name": "Steal From Shop 5 Times"},
{"name": "Ulrira Picture"},
{"name": "Bow-wow Picture"},
{"name": "Zora Picture"},
{"name": "Fisherman Picture"},
{"name": "Game Over Picture"},
{"name": "Kanalet Castle Picture"},
{"name": "Bridge Picture"},
{"name": "4 Overworld Warp Holes"},
{"name": "Giant Ghini"},
{"name": "Ball and Chain Trooper"},
{"name": "Anti-Kirby"},
{"name": "Ballad of the Wind Fish"},
{"name": "Manbo's Mambo"},
{"name": "Frog's Song of Soul"},
{"name": "Map and Compass in Tail Cave"},
{"name": "Map and Compass in Bottle Grotto"},
{"name": "Map and Compass in Key Cavern"},
{"name": "Map and Compass in Angler's Tunnel"},
{"name": "Map and Compass in Catfish's Maw"},
{"name": "Map and Compass in Face Shrine"},
{"name": "Map and Compass in Eagle's Tower"},
{"name": "Map and Compass in Turtle Rock"},
{"name": "Map and Compass in Color Dungeon"},
{"name": "Talk to all Owl Statues in Tail Cave"},
{"name": "Talk to all Owl Statues in Bottle Grotto"},
{"name": "Talk to all Owl Statues in Key Cavern"},
{"name": "Talk to all Owl Statues in Angler's Tunnel"},
{"name": "Talk to all Owl Statues in Catfish's Maw"},
{"name": "Talk to all Owl Statues in Face Shrine"},
{"name": "Talk to all Owl Statues in Eagle's Tower"},
{"name": "Talk to all Owl Statues in Turtle Rock"},
{"name": "Talk to all Owl Statues in Color Dungeon"},
{"name": "Defeat 2 Sets of 3-Of-A-Kind (D1, D7)"},
{"name": "Stand 6 HorseHeads in D6"},
{"name": "5 Golden Leaves"},
{"name": "Defeat Mad Bomber (outside Kanalet Castle)"},
{"name": "Totaka's Song in Richard's Villa"},
{"name": "Save Raccoon Tarin"},
{"name": "Yoshi Doll"},
{"name": "Save Papahl on the mountain"},
{"name": "Kiki Bridge"},
{"name": "Save Marin on the Mountain Bridge"},
{"name": "End with <10 rupees"},
{"name": "End with 999 rupees"},
{"name": "Bonk the Beach Monkey"},
{"name": "Kill an enemy with an enemy"},
{"name": "Kill an enemy after transforming"},
{"name": "Destroy all Pillars with the Ball"},

{"name": "Blue Tunic", "group": "tunic"},
{"name": "Red Tunic", "group": "tunic"},
{"name": "Buy the Bow", "group": "bow"},
{"name": "Bow", "group": "bow"},
{"name": "Buy the Deluxe Shovel", "group": "shovel"},
{"name": "Deluxe Shovel", "group": "shovel"},
{"name": "Magic Powder", "group": "powder"},
{"name": "Mushroom", "group": "powder"},
{"name": "Moldorm", "group": "d1"},
{"name": "Full Moon Cello", "group": "d1"},
{"name": "Genie in a Bottle", "group": "d2"},
{"name": "Conch Horn", "group": "d2"},
{"name": "Slime Eyes", "group": "d3"},
{"name": "Sea Lily's Bell", "group": "d3"},
{"name": "Angler Fish", "group": "d4"},
{"name": "Surf Harp", "group": "d4"},
{"name": "Slime Eel", "group": "d5"},
{"name": "Wind Marimba", "group": "d5"},
{"name": "Facade", "group": "d6"},
{"name": "Coral Triangle", "group": "d6"},
{"name": "Evil Eagle", "group": "d7"},
{"name": "Organ of Evening Calm", "group": "d7"},
{"name": "Hot Head", "group": "d8"},
{"name": "Thunder Drum", "group": "d8"},
{"name": "Rolling Bones", "group": "rollingbones"},
{"name": "Rolling Bones in Tail Cave", "group": "rollingbones"},
{"name": "Rolling Bones in Turtle Rock", "group": "rollingbones"},
{"name": "Hinox", "group": "hinox"},
{"name": "Orange Hinox", "group": "hinox"},
{"name": "Red Hinox", "group": "hinox"},
{"name": "Blue Hinox", "group": "hinox"},
{"name": "Stone Hinox (D0)", "group": "hinox"},
{"name": "Dodongos", "group": "dongs"},
{"name": "Dodongos in Key Cavern", "group": "dongs"},
{"name": "Dodongos in Face Shrine", "group": "dongs"},
{"name": "Dodongos in Turtle Rock", "group": "dongs"},
{"name": "Cue Ball", "group": "cueball"},
{"name": "Cue Ball in Angler Tunnel", "group": "cueball"},
{"name": "Cue Ball in Turtle Rock", "group": "cueball"},
{"name": "Smasher", "group": "smasher"},
{"name": "Smasher in Face Shrine", "group": "smasher"},
{"name": "Smasher in Turtle Rock", "group": "smasher"},
{"name": "2 Followers at the same time", "group": "multifollower"},
{"name": "3 Followers at the same time", "group": "multifollower"},
{"name": "Marin Weathercock Picture", "group": "marinpic"},
{"name": "Marin Well Picture", "group": "marinpic"},
{"name": "Marin Beach Picture", "group": "marinpic"},
{"name": "Collect 4 Pictures", "group": "pics"},
{"name": "Collect 5 Pictures", "group": "pics"},
{"name": "Collect 6 Pictures", "group": "pics"},
{"name": "Visit 4 Fountain Fairies", "group": "fairies"},
{"name": "Visit 5 Fountain Fairies", "group": "fairies"},
{"name": "8+ Heart Containers", "group": "hps"},
{"name": "9+ Heart Containers", "group": "hps"},
{"name": "10+ Heart Containers", "group": "hps"},
];