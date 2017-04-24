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
 'Artemis Arrows',
 'Charm Arrows',
 'Darkness Arrows',
 'Fire Arrows',
 'Ice Arrows',
 'Lit Arrows',
 'Medusa Arrows',
 'Mute Arrows',
 'Poison Arrows',
 'Samurai Arrows',
 'White Arrows',
 'Dwarf Axe',
 'Ogre Axe',
 'Poison Axe',
 'Rune Axe',
 'Boomerang',
 'FullMoon',
 'Archer Bow',
 'Artemis Bow',
 'CrossBow',
 'ElvenBow',
 'GreatBow',
 'Samurai Bow',
 'CatClaw',
 'Charm Claw',
 'Poison Claw',
 'Darkness Sword',
 'Black Sword',
 'Earth Hammer',
 'Silver Hammer',
 'Charm Harp',
 'Crystal Sword',
 'Excalibur',
 'Legend Sword',
 'Light Sword',
 'Long Katana',
 'Middle Katana',
 'Masamune',
 'Murasame',
 'Ninja Katana',
 'Dancing Dagger',
 'Mute Dagger',
 'Spoon',
 'Change Rod',
 'Charm Rod',
 'FlameRod',
 'IceRod',
 'Lilith Rod',
 'Stardust Rod',
 'Thunder Rod',
 'Blizzard Spear',
 'Dragoon Spear',
 'Drain Spear',
 'Flame Spear',
 'Gungnir Spear',
 'White Spear',
 'Wind Spear',
 'Life Staff',
 'Lunar Staff',
 'Power Staff',
 'Silence Staff',
 'Silver Staff',
 'Ancient Sword',
 'Avenger Sword',
 'Defense Sword',
 'Drain Sword',
 'Fire Sword',
 'IceBrand Sword',
 'Medusa Sword',
 'Silver Sword',
 'Slumber Sword',
 'Blitz Whip',
 'Chain Whip',
 'Dragon Whip',
 'Flame Whip',
 'Whip',
 'Black Armor',
 'Crystal Armor',
 'Darkness Armor',
 'Diamond Armor',
 'Dragoon Armor',
 'Fire Armor',
 'Ice Armor',
 'Paladin Armor',
 'Samurai Armor',
 'Silver Armor',
 'Bl. Belt',
 'Black Robe',
 'Gaea Robe',
 'Heroine Robe',
 'Karate Gi',
 'Ninja Gi',
 'Power Robe',
 'Sorcerer Robe',
 'White Robe',
 'Wizard Robe',
 'Bandana',
 'Black Helmet',
 'Crystal Helm',
 'Darkness Helm',
 'Diamond Helm',
 'Dragoon Helm',
 'Gaea Hat',
 'Leather Hat',
 'Glass Helmet',
 'Headband',
 'Ninja Hat',
 'Paladin Helm',
 'Ribbon',
 'Samurai Helm',
 'Silver Helmet',
 'Tiara',
 'Wizard Cap',
 'Aegis Shield',
 'Black Shield',
 'Crystal Shield',
 'Diamond Shield',
 'Dragoon Shield',
 'Fire Shield',
 'Ice Shield',
 'Paladin Shield',
 'Samurai Shield',
 'Silver Shield',
 'Black Gauntlets',
 'Crystal Gauntlets',
 'Darkness Gauntlets',
 'Diamond Gauntlets',
 'Dragoon Gauntlets',
 'Paladin Gauntlets',
 'Samurai Gauntlets',
 'Silver Gauntlets',
 'Zeus Gauntlets',
 'Crystal Ring',
 'Cursed Ring',
 'Diamond Ring',
 'Protect Ring',
 'Rune Ring',
 'Silver Ring',
 'Strength Ring',
 'Bomb Summon',
 'Cockatrice Summon',
 'Mage Summon',
 'Imp Summon',
 'Elixir',
 'Cabin',
 'Whistle',
 'Rat Tail'
];
