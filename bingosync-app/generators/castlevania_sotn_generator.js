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
var bingoList=[];
bingoList[1]=[{
name:"Start w/ 30 MP and Neutron bomb",types:["intro"]},{
name:"Spirit Orb",types:["marblegallery"]},{
name:"Get Stoned, Cursed, and Poisoned (not all at once)",types:["status"]},{
name:"Finish at Zircon",types:["finishplace"]}];
bingoList[2]=[{
name:"Alucart gear",types:["marblegallery"]},{
name:"Power of Wolf",types:["wolf"]},{
name:"No Shield Rod",types:["shieldrod"]},{
name:"Finish at Aquamarine",types:["finishplace"]},{
name:"Skill of Wolf",types:["wolf"]}];
bingoList[3]=[{
name:"Meet Librarian w/o Soul of Wolf",types:["library"]},{
name:"Estoc",types:["chairs"]},{
name:"Nunchaku",types:["scylla"]},{
name:"Kill 5 Feathered Enemies",types:["bestiary"]},{
name:"Beat Slogra & Gaibon w/ Basilard",types:["entrance"]}];
bingoList[4]=[{
name:"Power of Mist and Ghost Card",types:["keep"]},{
name:"Beat Doppleganger10 with Jewel Knuckles, no subweapons",types:["dopple10","subweapons"]},{
name:"Have the faerie heal Stone, Curse and Poison statuses",types:["status"]},{
name:"Beat Slogra & Gaibon w/ Knife Subweapon Only",types:["entrance","subweapons"]},{
name:"Finish at Turquoise",types:["finishplace"]}];
bingoList[5]=[{
name:"Beat Lesser Demon w/ Holy Rod",types:["lesserdemon"]},{
name:"Finish at Silver Ring",types:["finishplace","jewelopen"]},{
name:"Kill 8 types of Knights",types:["bestiary"]}];
bingoList[6]=[{
name:"Bat Card",types:["wolf"]},{
name:"Complete the Spell menu",types:["spell","powerofwolf","swordcard"]},{
name:"Sit in 6 different chairs",types:["chairs"]},{
name:"Gravity Boots",types:["marblegallery"]},{
name:"Crystal Cloak",types:["scylla"]}];
bingoList[7]=[{
name:"Holy Mail",types:["wolf"]},{
name:"Merman Statue",types:["scylla"]},{
name:"Heal by blood with Bloodstone Equipped",types:["jewelopen"]},{
name:"Start w/ Potion",types:["intro"]},{
name:"Hear a confession wearing Ankh of Life",types:["hippogryph"]}];
bingoList[8]=[{
name:"Beat Minotaur & Werewolf wearing Blood Cloak",types:["minotaur"]},{
name:"Gold Plate",types:["clocktower"]},{
name:"All 1st castle warps",types:["warps"]},{
name:"Faerie Card w/o Sword Card",types:["swordcard"]},{
name:"Force of Echo",types:["dopple40"]}];
bingoList[9]=[{
name:"Holy Symbol",types:["holysymbol"]},{
name:"Dark Blade",types:["dopple40"]},{
name:"Kill both types of Witch",types:["bestiary"]},{
name:"Finish at Mormegil",types:["finishplace","granfaloon"]},{
name:"Finish at Spike Breaker",types:["finishplace","granfaloon"]},{
name:"Finish at Onyx",types:["finishplace"]},{
name:"No Subweapons",types:["challenges","subweapons"]},{
name:"Use only 1 type of expendable item in 1st castle",types:["challenges"]}];
bingoList[10]=[{
name:"Fight off Slogra & Gaibon in the Entrance",types:["entrance"]},{
name:"Beat Doppleganger40 w/ Badelaire",types:["dopple40"]},{
name:"Shaman Shield w/o Soul of Bat",types:["clocktower"]},{
name:"Beat a 2nd castle boss w/o equips/items",types:["equips"]},{
name:"Have Fairie identify 5 suspicious walls",types:["fairie"]},{
name:"Get Stoned by 4 different enemies",types:["status"]},{
name:"Get Cursed by 3 different enemies",types:["status"]},{
name:"Kill the 3 Giant brothers",types:["bestiary"]}];
bingoList[11]=[{
name:"No Gem Duplication",types:["challenges","swordcard","gem"]},{
name:"Fire, Ice & Lightning Mails",types:["keep"]},{
name:"Beat Hippogryph wearing Mystic Pendant",types:["hippogryph"]},{
name:"Silver Crown w/o Sword Card",types:["swordcard"]},{
name:"Kill 4 aqautic enemies (SUSHI)",types:["bestiary"]},{
name:"Beat Karasuman w/ Cutlass",types:["karasuman"]}];
bingoList[12]=[{
name:"Beat Granfaloon wearing Bandanna",types:["granfaloon","scylla"]},{
name:"Have a CON boost of at least +20",types:["con"]},{
name:"Talisman",types:["entrance2"]},{
name:"Finish at Garnet",types:["finishplace"]},{
name:"Kill 5 bosses while poisoned",types:["bestiary","challenges"]},{
name:"Beat Akmodan wearing Sunstone",types:["akmodan"]},{
name:"Jewel Sword & Beryl Circlet",types:["wolf","entrance2"]}];
bingoList[13]=[{
name:"Gram",types:["cv3triplets"]},{
name:"Silver Ring and Twilight Cloak",types:["jewelopen"]},{
name:"Have an INT boost of at least +40",types:["intelligence"]},{
name:"Have a STR boost of at least +40",types:["strength"]},{
name:"Broadsword & Sword of Hador",types:["olrox"]},{
name:"Kill Hellfire Beast, Frozen Half, and Fire Demon",types:["bestiary","jewelopen"]},{
name:"Kill a 2nd castle boss with Summon Spirit, no items",types:["challenges"]},{
name:"Finish at Twilight Cloak",types:["finishplace"]}];
bingoList[14]=[{
name:"Have a LCK boost of at least +60",types:["luck"]},{
name:"Beat Lesser Demon w/ Star flail",types:["lesserdemon"]},{
name:"2 Neutron Bombs",types:["forbiddenlibrary"]},{
name:"Kill 6 different types of zombies",types:["bestiary"]},{
name:"Jewel Knuckles & Shotel",types:["dopple10","creature","medusa"]},{
name:"Beat a 1st castle boss w/ Bastard sword",types:["sword"]}];
bingoList[15]=[{
name:"Staurolite",types:["forbiddenlibrary"]},{
name:"Scimitar & Knuckle Duster",types:["scylla"]},{
name:"Finish by seeing Ferry in Outer Wall telescope",types:["finishplace"]},{
name:"Damage a boss w/ Force of Echo",types:["echo"]},{
name:"Kill 5 mounted enemies",types:["bestiary"]},{
name:"No Human Spell Usage (wingsmash/wolfdash OK)",types:["challenges"]},{
name:"Damage bosses w/ 6 different subweapons",types:["cubezoe","subweapons"]}];
bingoList[16]=[{
name:"All 2nd castle warps",types:["warps"]},{
name:"Beat Medusa with Alucard Sword",types:["medusa","darkwing"]},{
name:"No Jewel of Open",types:["jewelopen"]},{
name:"Beat Galamoth",types:["galamoth"]},{
name:"Finish at Opal",types:["finishplace"]},{
name:"Cannot Kill any Skeleton enemies",types:["bestiary","death"]},{
name:"Ring of Arcana",types:["beelzebub","librarian"]}];
bingoList[17]=[{
name:"Beat Darkwing Bat w/ Claymore",types:["medusa","darkwing"]},{
name:"Beat Minotaur & Werewolf w/ Morningstar",types:["minotaur","hippogryph"]},{
name:"Finish at Ruby Circlet",types:["finishplace","galamoth"]},{
name:"300+ HP",types:["hp"]},{
name:"Kill 4 invisible types of enemies",types:["bestiary"]},{
name:"No Cube of Zoe",types:["challenges","cubezoe","subweapons"]}];
bingoList[18]=[{
name:"Beat Beelzebub w/ Moon Rod",types:["beelzebub"]},{
name:"Beat Creature w/ Sword of Dawn",types:["creature","medusa"]},{
name:"Bekatowa & Luminus",types:["clocktower"]},{
name:"Beat Death w/ Alucart Sword",types:["death"]},{
name:"Kill all 3 levels of Spectral Sword",types:["bestiary"]},{
name:"200+ kills",types:["kills"]},{
name:"Finish at Diamond",types:["finishplace"]},{
name:"Beat Cerberus w/ Combat Knife",types:["cerberus"]}];
bingoList[19]=[{
name:"Visit 20 save rooms",types:["saves"]},{
name:"Sunstone & Moonstone",types:["stones"]},{
name:"Crystal Cloak & Dark Blade",types:["dopple40","scylla"]},{
name:"Beat Trevor/Grant/Sypha w/ Sword of Hador",types:["cv3triplets"]},{
name:"Katana",types:["necromancy"]}];
bingoList[20]=[{
name:"Finish in Forbidden Library save room",types:["finishplace"]},{
name:"Use 6 different Shield spells vs. 1 boss",types:["shieldrod"]},{
name:"3 Power of Sires",types:["powersire"]},{
name:"Destory all 4 types of Weeds",types:["bestiary"]},{
name:"No Mana Prism",types:["challenges"]}];
bingoList[21]=[{
name:"Finish by beating Beelzebub",types:["finishplace"]},{
name:"Finish at Dragon Helm",types:["finishplace"]},{
name:"Finish with 255 of each gem",types:["finishplace","gem"]},{
name:"Osafune katana",types:["death"]},{
name:"180+ Hearts",types:["hearts"]}];
bingoList[22]=[{
name:"Fire of Bat and Dragon Helm",types:["clocktower"]},{
name:"Demon Card and Alucard Sword",types:["scylla","jewelopen"]},{
name:"Use 4 different full screen attack items vs. 1 boss",types:["forbiddenlibrary","intro"]},{
name:"Merman Statue and Alucard Shield",types:["merman"]},{
name:"Finish with starting equipment",types:["alucard"]}];
bingoList[23]=[{
name:"Finish by beating Olrox wearing Secret Boots",types:["finishplace","echo"]},{
name:"2 of each Resist (Fire, Ice, Thunder, Dark, Holy, Stone)",types:["resist"]},{
name:"Restore HP from poison damage",types:["wolf"]},{
name:"600+ rooms",types:["rooms"]},{
name:"Damage a boss w/ 6 different 2-handed swords",types:["equips"]}];
bingoList[24]=[{
name:"3 Heart Refreshes",types:["hr"]},{
name:"Break spikes in 5 different rooms",types:["granfaloon"]},{
name:"Activate 5 Maria cutscenes as Alucard",types:["maria"]},{
name:"Finish by beating Dracula",types:["finishplace"]},{
name:"Get big tossed by 3 different enemies",types:["hp"]},{
name:"Sunglasses and Goddess Shield",types:["beelzebub","alchemylab"]}];
bingoList[25]=[{
name:"Holy Sword and Fury Plate",types:["2castles"]},{
name:"Finish at Holy Glasses",types:["finishplace","jewelopen"]},{
name:"All 5 Dracula Relics",types:["warps","darkwing"]},{
name:"Beat Succubus w/o Soul of Bat",types:["jewelopen"]},{
name:"Restore HP from cat damage",types:["akmodan"]},{
name:"Finish by killing Richter",types:["finishplace","keep"]}];
