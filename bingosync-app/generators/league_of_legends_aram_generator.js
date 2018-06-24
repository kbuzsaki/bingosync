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
}
var bingoList = [];
bingoList[1] = [
{ name: "Get a pentakill.", types: ["Multikill"] },
{ name: "Deny a pentakill (after quadra).", types: [] },
{ name: "Get a triplekill with one spellcast.", types: ["MultikillOneSpell"] },
{ name: "Die in fountain while all (enemy) towers are up.", types: [] },
];
bingoList[2] = [
{ name: "Get 1000 AP.", types: ["AP"] },
{ name: "Have the same amount of kills, deaths and assists.", types: ["KDA"] },
{ name: "Play a game with only melee champs in your team.", types: ["Teamcomp"] },
{ name: "Die only 1 time.", types: ["Dying"] },
];
bingoList[3] = [
{ name: "Either team gets a pentakill.", types: ["Multikill"] },
{ name: "Destroy the enemy inhibitor 3 times.", types: [] },
{ name: "Deal 3000 damage with the keystone mastery.", types: ["Damage"] },
{ name: "Both teams get aced at the same time.", types: [] },
];
bingoList[4] = [
{ name: "Win a game with 0 Kills.", types: [] },
{ name: "Kill a tower before 5min.", types: [] },
{ name: "Hard cc 5 enemies at the same time.", types: [] },
{ name: "Flash to block an ability that would hit an ally under 100/200/300 HP up to Lvl 5/10/15.", types: [] },
];
bingoList[5] = [
{ name: "All 5 teammembers reroll.", types: [] },
{ name: "Get an ace before level 6.", types: [] },
{ name: "Get 750 AP.", types: ["AP"] },
{ name: "Get a doublekill with one spellcast.", types: ["MultikillOneSpell"] },
];
bingoList[6] = [
{ name: "Win 4 games.", types: ["Winning"] },
{ name: "Play a game with at least 4 supportchamps.", types: ["Teamcomp"] },
{ name: "Have the same amount of deaths and assists.", types: ["KDA"] },
{ name: "Get 0 cs.", types: ["Cs"] },
];
bingoList[7] = [
{ name: "Get a quadrakill.", types: ["Multikill"] },
{ name: "Win a game with at least 3 yordles on your team.", types: ["Teamcomp"] },
{ name: "Have 5 champs of a specific region in your team.", types: ["Teamcomp"] },
{ name: "Play with a full skinset team.", types: ["Teamcomp"] },
];
bingoList[8] = [
{ name: "Proxy an entire minion wave.", types: [] },
{ name: "Die only 2 times.", types: ["Dying"] },
{ name: "Mitigate 60k dmg.", types: ["Mitigation"] },
{ name: "Reach 600 ms.", types: ["Movespeed"] },
{ name: "Build 3 complete items that build out of Sheen.", types: ["StackItems"] },
];
bingoList[9] = [
{ name: "Fully stack tear in 7min.", types: ["Tear"] },
{ name: "Deal 2000 damage with the keystone mastery.", types: ["Damage"] },
{ name: "Buy 3 complete lifesteal items (no startitem).", types: [] },
{ name: "Have the same amount of kills and assists.", types: ["KDA"] },
{ name: "Win within 15min.", types: ["Wintime"] },
];
bingoList[10] = [
{ name: "Get a triplekill.", types: ["Multikill"] },
{ name: "Get 200 armor or MR.", types: ["Resistances"] },
{ name: "At least 3 Rabadons out of all 10 players.", types: [] },
{ name: "Get 100 Bonus AD and 100 AP.", types: ["AD"," AP"] },
{ name: "Build no AP/AD on only AP/AD scaling champ.", types: ["AD"," AP"] },
];
bingoList[11] = [
{ name: "Use stopwatch and zhonyas in quick succession.", types: [] },
{ name: "Win 3 games.", types: ["Winning"] },
{ name: "Get 500 AP.", types: ["AP"] },
{ name: "Deal 700 dmg with one crit.", types: ["Critdmg"] },
];
bingoList[12] = [
{ name: "Kill a tower before 7min.", types: [] },
{ name: "Heal/shield no ally (as heal champ).", types: [] },
{ name: "Build no health on a tank.", types: [] },
{ name: "Overcap CDR by 20% (60% total CDR).", types: ["Stats"] },
{ name: "Mitigate 50k dmg.", types: ["Mitigation"] },
{ name: "Have the same amount of kills and deaths.", types: ["KDA"] },
];
bingoList[13] = [
{ name: "Get the lasthit on the nexus.", types: [] },
{ name: "Deal most damage out of all 10 players in a game.", types: [] },
{ name: "Feed the same poro 10 snacks.", types: [] },
{ name: "Heal 20k dmg.", types: ["Heal"] },
];
bingoList[14] = [
{ name: "Deal more than 125k dmg as team.", types: ["Teamdmg"] },
{ name: "Reach 550 ms.", types: ["Movespeed"] },
{ name: "Finish the Game with only identical finished items.", types: ["StackItems"] },
{ name: "Get 75 cs.", types: ["Cs"] },
];
bingoList[15] = [
{ name: "Don't kill a tower before 15min.", types: ["Tower"] },
{ name: "Accumulate 10k gold.", types: ["Gold"] },
{ name: "Have 5k max health.", types: ["HP"] },
{ name: "Take 30k damage in a game.", types: ["Damage taken"] },
{ name: "Get executed.", types: [] },
];
bingoList[16] = [
{ name: "Fully stack tear in 8min.", types: ["Tear"] },
{ name: "Get 100% critchance.", types: ["Crit"] },
{ name: "Deal 1000 damage with the keystone mastery.", types: ["Damage"] },
{ name: "Get 150 armor or MR.", types: ["Resistances"] },
{ name: "Deal 500 dmg with one crit.", types: ["Critdmg"] },
{ name: "Fully stack a tear (but don't upgrade it).", types: [] },
];
bingoList[17] = [
{ name: "All 10 players have a skin (without RP boost).", types: [] },
{ name: "Buy at least 1k mana as manaless champ.", types: [] },
{ name: "Die only 3 times.", types: ["Dying"] },
{ name: "Finish with 6 tears at the end of the game.", types: ["StackItems"] },
{ name: "Get 50 cs.", types: ["Cs"] },
];
bingoList[18] = [
{ name: "Don't skill Q until Lvl 12.", types: ["Skillpoints"] },
{ name: "Don't skill W until Lvl 12.", types: ["Skillpoints"] },
{ name: "Don't skill E until Lvl 12.", types: ["Skillpoints"] },
{ name: "Heal 15k dmg.", types: ["Heal"] },
{ name: "Deal more than 100k dmg as team.", types: ["Teamdmg"] },
{ name: "Win within 20min.", types: ["Wintime"] },
];
bingoList[19] = [
{ name: "Kill a tower before 9min.", types: ["Tower"] },
{ name: "Accumulate 5k gold.", types: ["Gold"] },
{ name: "Have 4k max health.", types: ["HP"] },
{ name: "But my body is telling me yeeees (always follow snowball).", types: ["Snowball"] },
{ name: "Take 25k damage in a game.", types: ["Damage taken"] },
{ name: "Reach 500 ms.", types: ["Movespeed"] },
];
bingoList[20] = [
{ name: "Build at least 2500 HP as adc.", types: [] },
{ name: "Get above 50% tenacity.", types: [] },
{ name: "Get 25 cs.", types: ["Cs"] },
{ name: "BM with Lvl 7 mastery after you die.", types: [] },
{ name: "My mind is telling me no (never follow snowball).", types: ["Snowball"] },
{ name: "Deal 300 dmg with one crit.", types: ["Critdmg"] },
{ name: "Sell one fullbuild item (and dont rebuy it).", types: [] },
];
bingoList[21] = [
{ name: "Run neither flash nor snowball.", types: [] },
{ name: "Reach level 18.", types: [] },
{ name: "Mitigate 40k dmg.", types: ["Mitigation"] },
{ name: "Win 2 games.", types: ["Winning"] },
{ name: "Get 100 armor or MR.", types: ["Resistances"] },
];
bingoList[22] = [
{ name: "Don't skill R until Lvl 9.", types: ["Skillpoints"] },
{ name: "Troll a teammate with a wall.", types: [] },
{ name: "Heal 10k dmg.", types: ["Heal"] },
{ name: "Accumulate 3k gold.", types: ["Gold"] },
{ name: "Deal more than 75k dmg as team.", types: ["Teamdmg"] },
{ name: "Win within 25min.", types: ["Wintime"] },
];
bingoList[23] = [
{ name: "Fully stack tear in 9 min.", types: ["Tear"] },
{ name: "Have 3k max health.", types: ["HP"] },
{ name: "Buy a potion of every kind.", types: [] },
{ name: "Buy Twin Shadows and roleplay while activating (BOOOO).", types: [] },
];
bingoList[24] = [
{ name: "Get a doublekill.", types: ["Multikill"] },
{ name: "Flash for a healthstation.", types: [] },
{ name: "Take 20k damage in a game.", types: ["Damage taken"] },
{ name: "Complete a Sheen item.", types: [] },
];
bingoList[25] = [
{ name: "Get no boots.", types: [] },
{ name: "Sell no items.", types: [] },
{ name: "Buy no starting items.", types: [] },
{ name: "Use no potions of any kind.", types: [] },
];
