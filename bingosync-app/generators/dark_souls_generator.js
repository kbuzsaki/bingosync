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
    if (true) {
        Math.seedrandom(SEED);
        var MAX_SEED = 999999;

        var lineCheckList = [];
        if (size == 5) {
            lineCheckList[1] = [1, 2, 3, 4, 5, 10, 15, 20, 6, 12, 18, 24];
            lineCheckList[2] = [0, 2, 3, 4, 6, 11, 16, 21];
            lineCheckList[3] = [0, 1, 3, 4, 7, 12, 17, 22];
            lineCheckList[4] = [0, 1, 2, 4, 8, 13, 18, 23];
            lineCheckList[5] = [0, 1, 2, 3, 8, 12, 16, 20, 9, 14, 19, 24];
            lineCheckList[6] = [0, 10, 15, 20, 6, 7, 8, 9];
            lineCheckList[7] = [0, 12, 18, 24, 5, 7, 8, 9, 1, 11, 16, 21];
            lineCheckList[8] = [5, 6, 8, 9, 2, 12, 17, 22];
            lineCheckList[9] = [4, 12, 16, 20, 9, 7, 6, 5, 3, 13, 18, 23];
            lineCheckList[10] = [4, 14, 19, 24, 8, 7, 6, 5];
            lineCheckList[11] = [0, 5, 15, 20, 11, 12, 13, 14];
            lineCheckList[12] = [1, 6, 16, 21, 10, 12, 13, 14];
            lineCheckList[13] = [0, 6, 12, 18, 24, 20, 16, 8, 4, 2, 7, 17, 22, 10, 11, 13, 14];
            lineCheckList[14] = [3, 8, 18, 23, 10, 11, 12, 14];
            lineCheckList[15] = [4, 9, 19, 24, 10, 11, 12, 13];
            lineCheckList[16] = [0, 5, 10, 20, 16, 17, 18, 19];
            lineCheckList[17] = [15, 17, 18, 19, 1, 6, 11, 21, 20, 12, 8, 4];
            lineCheckList[18] = [15, 16, 18, 19, 2, 7, 12, 22];
            lineCheckList[19] = [15, 16, 17, 19, 23, 13, 8, 3, 24, 12, 6, 0];
            lineCheckList[20] = [4, 9, 14, 24, 15, 16, 17, 18];
            lineCheckList[21] = [0, 5, 10, 15, 16, 12, 8, 4, 21, 22, 23, 24];
            lineCheckList[22] = [20, 22, 23, 24, 1, 6, 11, 16];
            lineCheckList[23] = [2, 7, 12, 17, 20, 21, 23, 24];
            lineCheckList[24] = [20, 21, 22, 24, 3, 8, 13, 18];
            lineCheckList[25] = [0, 6, 12, 18, 20, 21, 22, 23, 19, 14, 9, 4];
        }

        function mirror(i) {
            if (i == 0) {
                i = 4;
            } else if (i == 1) {
                i = 3;
            } else if (i == 3) {
                i = 1;
            } else if (i == 4) {
                i = 0;
            }
            return i;
        }

        function difficulty(i) {
            var Num3 = SEED % 1000;
            var Rem8 = Num3 % 8;
            var Rem4 = Math.floor(Rem8 / 2);
            var Rem2 = Rem8 % 2;
            var Rem5 = Num3 % 5;
            var Rem3 = Num3 % 3;
            var RemT = Math.floor(Num3 / 120);
            var Table5 = [0];
            Table5.splice(Rem2, 0, 1);
            Table5.splice(Rem3, 0, 2);
            Table5.splice(Rem4, 0, 3);
            Table5.splice(Rem5, 0, 4);
            Num3 = Math.floor(SEED / 1000);
            Num3 = Num3 % 1000;
            Rem8 = Num3 % 8;
            Rem4 = Math.floor(Rem8 / 2);
            Rem2 = Rem8 % 2;
            Rem5 = Num3 % 5;
            Rem3 = Num3 % 3;
            RemT = RemT * 8 + Math.floor(Num3 / 120);
            var Table1 = [0];
            Table1.splice(Rem2, 0, 1);
            Table1.splice(Rem3, 0, 2);
            Table1.splice(Rem4, 0, 3);
            Table1.splice(Rem5, 0, 4);
            i--;
            RemT = RemT % 5;
            x = (i + RemT) % 5;
            y = Math.floor(i / 5);
            var e5 = Table5[(x + 3 * y) % 5];
            var e1 = Table1[(3 * x + y) % 5];
            value = 5 * e5 + e1;
            if (MODE == "short") {
                value = Math.floor(value / 2);
            } else if (MODE == "long") {
                value = Math.floor((value + 25) / 2);
            }
            value++;
            return value;
        }

        function checkLine(i, typesA) {
            var synergy = 0;
            for (var j = 0; j < lineCheckList[i].length; j++) {
                var typesB = bingoBoard[lineCheckList[i][j] + 1].types;
                if (typeof typesB != 'undefined') {
                    for (var k = 0; k < typesA.length; k++) {
                        for (var l = 0; l < typesB.length; l++) {
                            if (typesA[k] == typesB[l]) {
                                synergy++;
                                if (k == 0) {
                                    synergy++
                                };
                                if (l == 0) {
                                    synergy++
                                };
                            }
                        }
                    }
                }
            }
            return synergy;
        }
        var bingoBoard = [];
        for (var i = 1; i <= 25; i++) {
            bingoBoard[i] = {
                difficulty: difficulty(i)
            };
        }
        for (var i = 1; i <= 25; i++) {
            var getDifficulty = bingoBoard[i].difficulty;
            var RNG = Math.floor(bingoList[getDifficulty].length * Math.random());
            if (RNG == bingoList[getDifficulty].length) {
                RNG--;
            };
            var j = 0,
                synergy = 0,
                currentObj = null,
                minSynObj = null;
            do {
                currentObj = bingoList[getDifficulty][(j + RNG) % bingoList[getDifficulty].length];
                synergy = checkLine(i, currentObj.types);
                if (minSynObj == null || synergy < minSynObj.synergy) {
                    minSynObj = {
                        synergy: synergy,
                        value: currentObj
                    };
                }
                j++;
            } while ((synergy != 0) && (j < bingoList[getDifficulty].length));
            bingoBoard[i].types = minSynObj.value.types;
            bingoBoard[i].name = minSynObj.value[LANG] || minSynObj.value.name;
            bingoBoard[i].synergy = minSynObj.synergy;
        }
        return bingoBoard;
    }
};

 var bingoList = [];
// Short is up to O&S Including tomb up to nito amd izalith lord vessel barriers
// Starting class and items
bingoList[1] = [
  { name: "Bandit Class", types: ["startingclass","restrict_axe"] },
  { name: "Knight Class", types: ["startingclass","restrict_sword"] },
  { name: "Hunter Class", types: ["startingclass","restrict_sword"] },
  { name: "Pyromancer Class", types: ["startingclass","restrict_axe"] },
  { name: "Depraved Class", types: ["startingclass"] },
  { name: "Wanderer Class", types: ["startingclass"] },
  { name: "Thief Class", types: ["startingclass","restrict_key"] },
  { name: "Warrior Class", types: ["startingclass","restrict_sword"] },
  { name: "Cleric Class", types: ["startingclass"] }
];
// Starting items
bingoList[2] = [
  { name: "No Master Key", types: ["startingitem","restrict_key"] },
  { name: "Take Pendant as gift", types: ["startingitem","restrict_key"] },
  { name: "Take Binoculars as gift", types: ["startingitem","restrict_key"] },
  { name: "Take Old witches ring as gift", types: ["startingitem","restrict_key"] },
  { name: "Right hand wielding only", types: ["restriction","wielding"] },
  { name: "Left hand wielding only", types: ["restriction","wielding"] },
  { name: "No Swords", types: ["restriction","restrict_weapons"] }
];
// Item Restrictions
bingoList[3] = [
  { name: "No Shields", types: ["restriction","restrict_weapons"] },
  { name: "No Swords", types: ["restriction","restrict_weapons"] },
  { name: "No Polearms", types: ["restriction","restrict_weapons"] },
  { name: "Daggers Only", types: ["restriction","restrict_weapons"] },
  { name: "Axes only", types: ["restriction","restrict_weapons"] },
  { name: "No Rings", types: ["restriction","restrict_armour"] },
  { name: "Starting Armour only", types: ["restriction","restrict_armour"] },
  { name: "Starting Weapons only", types: ["restriction","restrict_armour"] }
];
// Firelink
bingoList[4] = [
  { name: "Summon Lautrec for Gargoyles", types: ["npcs","parish"] },
  { name: "Obtain Fire Keeper Soul (Parish)", types: ["humanity","parish"] },
  { name: "Kill Armoured Boar (Parish)", types: ["enemies","parish"] },
  { name: "Join Warriors of Sunlight", types: ["covenant","parish"] },
  { name: "Cut Off a Gargoyle's Tail", types: ["bosses","parish","items"] },
  { name: "Obtain Crest of Artorias", types: ["items","parish"] },
  { name: "Bloodbite Ring", types: ["rings","parish"] },
  { name: "Poisonbite Ring", types: ["rings","parish"] },
  { name: "3 Purging Stones", types: ["items","parish"] }
];
// Depths and Darkroot
bingoList[5] = [
  { name: "Open Lower Burg / Depths to Firelink Gate", types: ["shortcut","lowerburg"] },
  { name: "Rescue Griggs", types: ["npcs","lowerburg"] },
  { name: "Join Forest Hunters", types: ["covenant","darkroot","npcs"] },
  { name: "Obtain Divine Ember", types: ["darkroot","ember"] },
  { name: "Obtain Enchanted Ember", types: ["darkroot","ember"] },
  { name: "Kill Black Knight (Darkroot)", types: ["darkroot","ember"] },
  { name: "Kill Capra Demon", types: ["lowerburg","bosses"] },
  { name: "Obtain Grass Crest Shield", types: ["items","armour","darkroot"] },
  { name: "Obtain Soul of the Moonlight Butterfly", types: ["bosses","darkroot"] }
];
// Lower Burg and Depths
bingoList[6] = [
  { name: "Obtain heavy Crossbow", types: ["weapons","depths","items"] },
  { name: "Obtain Ring of Evil Eye", types: ["rings","depths","items"] },
  { name: "Defeat Kirk (Depths)", types: ["npcs","depths","enemies"] },
  { name: "Kill Gaping Dragon", types: ["bosses","depths"] },
  { name: "Kill 2 Butchers", types: ["enemies","depths"] },
  { name: "Obtain Large Ember", types: ["items","ember","depths"] },
  { name: "Rescue Laurentius", types: ["npcs","depths","pyromancy"] },
  { name: "Kill Sif", types: ["darkroot","bosses","sif"] },
  { name: "Obtain Hornet Ring", types: ["darkroot","bosses","sif"] }
];
bingoList[7] = [
// Blighttown
  { name: "Obtain Whip", types: ["weapons","blighttown"] },
  { name: "Obtain Server", types: ["weapons","blighttown"] },
  { name: "Obtain Iaito", types: ["weapons","blighttown"] },
  { name: "Obtain Force Within", types: ["items","spells","blighttown"] },
  { name: "Obtain Tin Banishment Catalyst", types: ["items","weapons"] },
  { name: "Obtain Remedy", types: ["items","spells"] },
  { name: "Obtain Fire Keeper Soul (Blighttown)", types: ["blighttown","items","humanity"] },
  { name: "Obtain Queelag's Soul", types: ["bosses","depths","items"] },
  { name: "Obtain Remedy", types: ["sorcery","blighttown"] },
  { name: "Defeat Maneater Mildred", types: ["bosses","depths"] }
];
// Valley of the Drakes and New Londo
bingoList[8] = [
  { name: "Obtain Fire Keeper Soul (New Londo)", types: ["drakeslondo","items","humanity"] },
  { name: "Obtain Astora's Straight Sword", types: ["weapons","drakeslondo","items"] },
  { name: "Obtain Very Large Ember", types: ["items","drakeslondo",] },
  { name: "Obtain Cursebite Ring", types: ["rings","drakeslondo"] },
  { name: "Obtain Composite Bow", types: ["weapons","drakeslondo","items"] },
  { name: "Obtain 10 Cracked Red Eye Orbs", types: ["items","drakeslondo"] },
  { name: "Defeat Four Kings", types: ["bosses","drakeslondo"] },
  { name: "Kill Undead Dragon (Valley of the Drakes)", types: ["bosses","drakeslondo"] }
];
// Catacombs
bingoList[9] = [
  { name: "Obtain Lucerne", types: ["weapons","catacombs"] },
  { name: "Obtain 6 Eyes of Death", types: ["items","catacombs","totg"] },
  { name: "Obtain Darkmoon Seance Ring", types: ["enemies","catacombs"] },
  { name: "Obtain Gravelord Greastword", types: ["covenant","catacombs"] },
  { name: "Obtain Great Scythe", types: ["catacombs"] },
  { name: "Obtain Tranquil Walk of Peace", types: ["items","spells","catacombs"] },
  { name: "Kill Black Knight (Catacombs)", types: ["items","spells","catacombs"] },
  { name: "Kill Titanite Demon (The Catacombs)", types: ["enemies","catacombs"] },
  { name: "Kill Patches", types: ["npcs","catacombs"] },
  { name: "Summon Paladin Leeroy", types: ["covenant","catacombs"] },
  { name: "Craft a Fire Weapon", types: ["vamos","catacombs"] }
];
// Asylum
bingoList[10] = [
  { name: "Kill 2 Black Knights in the Asylum", types: ["asylum","enemies"] },
  { name: "Obtain Peculiar Doll", types: ["asylum","items"] },
  { name: "Obtain Rusted Iron Ring", types: ["asylum","items"] },
  { name: "Kill Stray Demon", types: ["asylum","bosses"] },
  { name: "Trade an item with Snuggly", types: ["asylum","items"] }
];
// Demon Ruins without lordvessel
bingoList[11] = [
  { name: "Obtain Chaos Ember", types: ["demonruins","items","ember"] },
  { name: "Obtain Large Flame Ember", types: ["demonruins","items","ember"] },
  { name: "Obtain Gold-Hemmed Black Set", types: ["demonruins","bosses"] },
  { name: "Kill Ceaseless Discharge", types: ["demonruins","bosses"] },
  { name: "Murder Chaos Covenant Leader", types: ["demonruins","npcs","covenant"] },
  { name: "Join Chaos Covenant", types: ["demonruins","npcs","covenant"] },
  { name: "Get the Egg Head Infection", types: ["demonruins","enemies","armour"] }
];
// Sen's Fortress
bingoList[12] = [
  { name: "Obtain Lightning Spear", types: ["items","weapons"] },
  { name: "Obtain Covetous Gold Serpent Ring", types: ["items","rings","sens"] },
  { name: "Obtain Ring of Steel Protection", types: ["items","rings","sens"] },
  { name: "Obtain Flame Stoneplate Ring", types: ["items","rings","sens"] },
  { name: "Obtain Sniper Crossbow", types: ["items","weapons","sens"] },
  { name: "Obtain Ricard's Rapier", types: ["items","weapons","sens","npcs"] },
  { name: "Obtain Hush", types: ["items","sens","spells"] },
  { name: "Obtain Core of Iron Golem", types: ["sens","items","bosses"] },
  { name: "Kill All 3 Giants in Sens", types: ["enemies","sens"] }
];
// NPC Interactions
bingoList[13] = [
  { name: "Summon Iron Tarkus", types: ["npcs","lautrec"] },
  { name: "Summon Witch Beatrice", types: ["npcs","Beatrice"] },
  { name: "Murder Siegmeyer", types: ["npcs","lautrec"] },
  { name: "Murder Andre", types: ["parish","items"] },
  { name: "Murder Solaire", types: ["covenant","solaire"] }
];
bingoList[14] = [
  { name: "Kill Lady of the Darkling", types: ["npc","anorlondo"] },
  { name: "Murder Giant Blacksmith", types: ["anorlondo","npc","smithy"] },
  { name: "Join Darkmoon Covenant", types: ["npcs","bosses","anorlondo"] },
  { name: "Kill Dark Sun Gwyndolin", types: ["npcs","bosses","anorlondo"] },
  { name: "Obtain Silver Knight Set", types: ["anorlondo","armour"] }
];
bingoList[15] = [
  { name: "Summon Solaire in Anor Londo", types: ["covenant","solaire"] },
  { name: "Kill Crestfallen Merchant", types: ["sens","npc"] },
  { name: "Rescue Griggs in Lower Burg", types: ["lowerburg","npc"] },
  { name: "Rescue Logan in Sen's", types: ["sens","npc","spells"] },
  { name: "Cause Crestfallen Warrior to go Hollow", types: ["firelink","npc"] }
];
// More Restrictions
bingoList[16] = [
  { name: "Never use Sorcery", types: ["restriction","restrict_spell"] },
  { name: "Never use Miracles", types: ["restriction","restrict_spell"] },
  { name: "Never use Consumables", types: ["restriction", "restrict_consumable"] },
  { name: "Only heal with Humanities", types: ["restriction", "restrict_consumable"] },
  { name: "Never use Pyromancy", types: ["restriction","restrict_spell"] },
  { name: "Never wear Armour", types: ["restriction"] }
];
// Anor Londo
bingoList[17] = [
  { name: "Obtain Tiny Being's Ring (Siegmeyer)", types: ["npcs","anorlondo2"] },
  { name: "Obtain Ring of the Sun's Firstborn", types: ["anorlondo"] },
  { name: "Obtain Hawk Ring", types: ["anorlondo"] },
  { name: "Kill Three Mimics", types: ["anorlondo"] },
  { name: "Kill Titanite Demon (Anor Londo)", types: ["anorlondo","ornsmo"] },
  { name: "Kill Titanite Demon (Anor Londo)", types: ["anorlondo","ornsmo"] },
  { name: "Obtain Havel's Set", types: ["anorlondo","armour"] }
];
bingoList[18] = [
  { name: "Obtain Soul of Ornstein", types: ["anorlondo","ornsmo"] },
  { name: "Obtain Leo Ring", types: ["anorlondo","ornsmo"] },
  { name: "Invade Lautrec at Anor Londo", types: ["anorlondo","lautrec"] },
  { name: "Join Princess Guard", types: ["anorlondo","tits","ornsmo"] },
  { name: "Obtain Soul of Smough", types: ["anorlondo","ornsmo"] },
  { name: "Kill Gwynevere", types: ["anorlondo","ornsmo"] }
];
// Painted World
bingoList[19] = [
  { name: "Obtain Black Iron Set", types: ["paintedworld","guardians"] },
  { name: "Obtain Dark Ember", types: ["paintedworld","ember"] },
  { name: "Obtain Red Sign Soapstone", types: ["paintedworld","guardians"] },
  { name: "Obtain Bloodshield", types: ["paintedworld","guardians"] },
  { name: "Defeat Undead Dragon (Painted World)", types: ["paintedworld","items"] }
];
bingoList[20] = [
  { name: "Defeat Jeremiah", types: ["paintedworld","enemies"] },
  { name: "Obtain Painting Guardian Set", types: ["paintedworld","armour"] },
  { name: "Obtain Velka's Rapier", types: ["paintedworld","weapons"] },
  { name: "Murder Priscilla", types: ["paintedworld","youmonster"] },
  { name: "Obtain Dried Finger", types: ["paintedworld","items"] }
];
// Tomb of the Giants
bingoList[21] = [
  { name: "Kill Black Knight (Tomb of the Giants)", types: ["enemies","totg"] },
  { name: "Rescue Rhea", types: ["npcs","totg","rhea"] },
  { name: "Get pushed by Patches", types: ["npcs","totg"] },
  { name: "Obtain Skull Lantern", types: ["weapons","totg" ] },
  { name: "Obtain Effigy Shield", types: ["weapons","totg" ] },
  { name: "Obtain Large Divine Ember", types: ["ember","totg" ] },
  { name: "Obtain Covetous Silver Serpent Ring", types: ["rings","totg" ] }

];
// Long Darkroot
bingoList[22] = [
  { name: "Obtain Dusk Crown Ring", types: ["darkroothard","dusk"] },
  { name: "Obtain Chameleon", types: ["darkroothard","dusk","spells"] },
  { name: "Obtain Antiquated Set", types: ["darkroothard","dusk","spells"] },
  { name: "Never Light a bonfire", types: ["restriction"] },
  { name: "Fully kindle a bonfire", types: ["restriction"] },
  { name: "Nver upgrade weapons", types: ["restriction"] }
];
// Ash Lake
bingoList[23] = [
  { name: "Join Path of the Dragon", types: ["covenant","ashlake"] },
  { name: "Obtain Great Magic Barrier", types: ["miracles","ashlake"] },
  { name: "Light Ash Lake Bonfire", types: ["ashlake"] },
  { name: "Obtain Cloranthy Ring", types: ["ashlake"] }
];
// Humanity souls and stats
bingoList[24] = [
  { name: "Obtain 2 Soul of a Hero", types: ["stats","humanity"] },
  { name: "20 soft humanity", types: ["stats","humanity"] },
  { name: "150000 souls", types: ["stats","souls"] },
  { name: "26 Resistance", types: ["stats","condition"] },
  { name: "36 Vitality", types: ["stats","condition"] },
  { name: "36 Endurance", types: ["stats","condition"] },
  { name: "No Endurance levelling", types: ["stats","restriction","condition"] },
  { name: "No Vitality levelling", types: ["stats","restriction","condition"] }
];
// Humanity souls and stats
bingoList[25] = [
  { name: "36 Dexterity", types: ["stats","attack"] },
  { name: "36 Strength", types: ["stats","attack"] },
  { name: "28 Attunement", types: ["stats","casting"] },
  { name: "36 Intelligence", types: ["stats","casting"] },
  { name: "36 Faith", types: ["stats","casting"] }
];

