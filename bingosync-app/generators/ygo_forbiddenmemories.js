// Yu-Gi-Oh! Forbidden Memories Bingo Version 1 - Maintained by GFC (twitch.tv/gfc_) and duke1102 (twitch.tv/duke1102)

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
bingoList[1] = [
    { name: "Beat Simon Muran", types: ["short1"] },
    { name: "Have Dark Hole", types: ["short2"] },
    { name: "Get a Ritual card", types: ["short3"] },
    { name: "Buy a reptile-type card", types: ["short4"] },
    { name: "Watch a full 3D battle", types: ["short5"] },
    { name: "Buy an equip", types: ["short7"] }
  ];
  bingoList[2] = [
    { name: "Lose to Teana", types: ["medium1"] },
    { name: "Buy a thunder-type card", types: ["medium2"] },
    { name: "Fuse Cockroach Knight", types: ["medium3"] },
    { name: "Have the AI fuse", types: ["medium4"] },
    { name: "Get Tomozaurus", types: ["medium5"] },
    { name: "Get a defensive win", types: ["medium6"] }
  ];
  bingoList[3] = [
    { name: "Beat every Villager", types: ["lo"] },
    { name: "Fuse THTD", types: ["lo"] },
    { name: "Fuse Dark Elf", types: ["lo"] },
    { name: "Lose by decking out", types: ["lo"] },
    { name: "Win 5 duels in a row", types: ["lo"] },
    { name: "Play a magic 3 duels in a row", types: ["lo"] },
    { name: "Unlock Jono in Free Duel", types: ["lo"] }
  ];
  bingoList[4] = [
    { name: "Fuse to make a magic card", types: ["lo"] },
    { name: "Win a 1200+ atk monster", types: ["lo"] },
    { name: "5 Duel Master K Free Duels", types: ["lo"] },
    { name: "Have the AI change the field", types: ["lo"] },
    { name: "Win a duel without fusing", types: ["lo"] },
    { name: "Win a duel by dealing exact damage", types: ["lo"] },
    { name: "Have 5 card with less than 600atk in your hand", types: ["lo"] }
  ];
  bingoList[5] = [
    { name: "Lose to Shadi in campaign", types: ["lo"] },
    { name: "Get 3 D-TEC in a row", types: ["lo"] },
    { name: "Suicide a monster into one with equal atk", types: ["lo"] },
    { name: "Fuse Crimson Sunbird", types: ["lo"] },
    { name: "Crash 2 of the same monster together", types: ["lo"] },
    { name: "Obtain Little D.", types: ["lo"] },
    { name: "Have AI increase their LP", types: ["lo"] },
    { name: "Make a THTD without a thunder", types: ["lo"] },
    { name: "Win Crawling Dragon #2", types: ["lo"] },
    { name: "Fuse Great Mammoth of Goldfine", types: ["lo"] },
    { name: "Watch a 3D battle against Kaiba", types: ["lo"] },
    { name: "Kill someone with Sparks", types: ["lo"] },
    { name: "Kill someone with Mushroom Man", types: ["lo"] },
    { name: "Win an equip", types: ["lo"] },
    { name: "Fuse Soul Hunter", types: ["lo"] },
    { name: "Fuse Garvas with an unusable beast", types: ["lo"] },
    { name: "Win a dragon/thunder from Duel Master K", types: ["lo"] },
    { name: "1 card draw Raigeki", types: ["lo"] }
  ];
  bingoList[6] = [
    { name: "5 card fusion THTD", types: ["lo"] },
    { name: "7 Weevil Free Duels", types: ["lo"] },
    { name: "Win Time Wizard", types: ["lo"] },
    { name: "Play 2 THTD in 1 duel", types: ["lo"] },
    { name: "Have 3 Skull Servant", types: ["lo"] },
    { name: "Have the AI fuse THTD", types: ["lo"] },
    { name: "Destroy an MBD", types: ["lo"] },
    { name: "Have Gate Deeg and Dig Beak in hand", types: ["lo"] },
    { name: "Have the AI equip a card", types: ["lo"] }
  ];
  bingoList[7] = [
    { name: "5 card fusion Pumpking", types: ["lo"] },
    { name: "Win the same card back to back", types: ["lo"] },
    { name: "Win a duel with 50LP remaining", types: ["lo"] },
    { name: "Win a duel in 3 turns", types: ["lo"] },
    { name: "Fuse Thousand Dragon", types: ["lo"] },
    { name: "7 wins against Keith in free duel", types: ["lo"] },
    { name: "Have the AI do a 4+ card fusion", types: ["lo"] },
    { name: "Have 4 copies of the same card", types: ["lo"] },
    { name: "Obtain Behegon", types: ["lo"] },
    { name: "Ritual summon any card", types: ["lo"] }
  ];
  bingoList[8] = [
    { name: "Isis plays B. Skull Dragon", types: ["lo"] },
    { name: "S-TEC someone", types: ["lo"] },
    { name: "Kill a ritual monster", types: ["lo"] },
    { name: "Fuse Summoned Skull", types: ["lo"] },
    { name: "Play 3 THTD in 1 duel", types: ["lo"] },
    { name: "Fuse Psychic Kappa + Kappa Avenger", types: ["lo"] },
    { name: "Have 5 identical monsters on the field", types: ["lo"] }
  ];
  bingoList[9] = [
    { name: "Beat the World Tournament", types: ["lo"] },
    { name: "Summon Cosmo Queen", types: ["lo"] },
    { name: "Do a 6 card fusion", types: ["lo"] }
  ];
  bingoList[10] = [
    { name: "Fuse 23 times in 1 duel", types: ["lo"] },
    { name: "Have 3 copies of the same dragon-type", types: ["lo"] },
    { name: "Kill Kaiba with a Yaiba Robo", types: ["lo"] },
    { name: "Destroy a monster with a trap", types: ["lo"] },
    { name: "Get every rank at least once", types: ["lo"] }
  ];
  bingoList[11] = [
    { name: "Beat Heishin 1", types: ["lo"] },
    { name: "Purchase a card for 100+ starchips", types: ["lo"] },
    { name: "Win Shadow Specter from Meadow Mage", types: ["lo"] },
    { name: "Have 5 different females on your side at once", types: ["lo"] },
    { name: "Trigger Reverse Trap", types: ["lo"] },
    { name: "Get 11 wins on Mage Soldier before the mages", types: ["lo"] }
  ];
  bingoList[12] = [
    { name: "Win any 20/22 from Meadow Mage", types: ["lo"] },
    { name: "Dark Hole 5 monsters + 5 non-monsters at once", types: ["lo"] },
    { name: "Win against Keith/Bakura without fusing", types: ["lo"] },
    { name: "Win 10 females in free duel", types: ["lo"] },
    { name: "Have 5 card with 1000+atk in your hand", types: ["lo"] }
  ];
  bingoList[13] = [
    { name: "Do a 7 magic trapless A-TEC", types: ["lo"] },
    { name: "Obtain Raigeki and Dark Hole", types: ["lo"] },
    { name: "Win Dragon Capture Jar or Warrior Elimination", types: ["lo"] }
  ];
  bingoList[14] = [
    { name: "Get 200 starchips", types: ["lo"] },
    { name: "Beat WT without THTD", types: ["lo"] },
    { name: "Beat Seto 2nd", types: ["lo"] },
    { name: "Fuse THTD + 2 working equips in 1 hand", types: ["lo"] },
    { name: "Kill a monster that's boosted by terrain and guardian star", types: ["lo"] },
    { name: "Win Umi from Isis", types: ["lo"] },
    { name: "Buy Crawling Dragon", types: ["lo"] },
    { name: "Have a monster with 3500+ atk on the field", types: ["lo"] }
  ];
  bingoList[15] = [
    { name: "Have 40 of any 1 type of card", types: ["lo"] },
    { name: "Win any Exodia piece", types: ["lo"] },
    { name: "Trigger 2 traps (your own) in 1 duel", types: ["lo"] },
    { name: "Fuse THTD with two Thunder Dragon", types: ["lo"] },
    { name: "Beat Labyrinth Mage 3 times in the labyrinth", types: ["lo"] },
    { name: "Fuse Darkfire Dragon", types: ["lo"] },
    { name: "Kill BEWD with Dark Magician", types: ["lo"] },
    { name: "Beat Secmeton without THTD", types: ["lo"] },
    { name: "Effective attack on Zera the Mant", types: ["lo"] }
  ];
  bingoList[16] = [
    { name: "Obtain every field card", types: ["lo"] },
    { name: "Trigger the Suicide Glitch", types: ["lo"] },
    { name: "Win a duel after bring Raigeki'd 3 times", types: ["lo"] },
    { name: "Draw a trap as the 40th card", types: ["lo"] },
    { name: "Win Megamorph", types: ["lo"] },
    { name: "Equip a Crimson Sunbird", types: ["lo"] },
    { name: "Play Dark Hole 20 total times", types: ["lo"] }
  ];
  bingoList[17] = [
    { name: "Activate every field spell in 1 duel", types: ["lo"] },
    { name: "Win Beast Fangs", types: ["lo"] },
    { name: "Get a Victory By Attrition", types: ["lo"] },
    { name: "Win a duel in 2 turns", types: ["lo"] },
    { name: "Win Meteor B. Dragon", types: ["lo"] },
    { name: "Win a card with a droprate of 10 or less", types: ["lo"] },
    { name: "Have 150 cards in your chest", types: ["lo"] },
    { name: "Win Crush Card", types: ["lo"] }
  ];
  bingoList[18] = [
    { name: "Fuse Meteor B. Dragon", types: ["lo"] },
    { name: "Win Tatsunootoshigo", types: ["lo"] },
    { name: "SA-POW Kepura 7 times", types: ["lo"] },
    { name: "Fuse B. Skull Dragon", types: ["lo"] },
    { name: "Equip 1 monster with 3 different equips", types: ["lo"] },
    { name: "Win THTD", types: ["lo"] },
    { name: "SA-TEC all high mages", types: ["lo"] },
    { name: "Have 5 cards with 1600+atk in your hand", types: ["lo"] }
  ];
  bingoList[19] = [
    { name: "Activate 3 different traps (your own) in 1 duel", types: ["lo"] },
    { name: "Beat any Heishin using no equips", types: ["lo"] },
    { name: "Beat all mages with only monster cards", types: ["lo"] },
    { name: "Win 20 Seto 2nd free duels", types: ["lo"] }
  ];
  bingoList[20] = [
    { name: "Win 3 Dark Magician", types: ["lo"] },
    { name: "Successfully fuse 2 equips", types: ["lo"] },
    { name: "Equip Labyrinth Wall 3 times in 1 duel", types: ["lo"] },
    { name: "Win Crimson Sunbird", types: ["lo"] }
  ];
  bingoList[21] = [
    { name: "Enter the Final 6/7", types: ["lo"] },
    { name: "Die to anyone in the final 6/7", types: ["lo"] },
    { name: "Spend 500 starchips total", types: ["lo"] }
  ];
  bingoList[22] = [
    { name: "Obtain MetalZoa", types: ["lo"] },
    { name: "Make Darknite run out of monsters, and win", types: ["lo"] },
    { name: "Win MBD or Skull Knight from Mountain Mage", types: ["lo"] },
    { name: "Win a duel where BEUD is played turn 1", types: ["lo"] }
  ];
  bingoList[23] = [
    { name: "Buy Bright Castle", types: ["lo"] },
    { name: "Beat Heishin 1 with the starter deck", types: ["lo"] },
    { name: "Complete a full page of the library", types: ["lo"] },
    { name: "Beat all high mages in campaign without saving", types: ["lo"] },
    { name: "Overpower and kill a BEUD", types: ["lo"] },
    { name: "Watch a full 3D battle against Nitemare", types: ["lo"] }
  ];
  bingoList[24] = [
    { name: "Beat every high mage without THTD", types: ["lo"] },
    { name: "Fuse Swords of Revealing Light", types: ["lo"] },
    { name: "Play MBD in Mars against Heishin 2, and win", types: ["lo"] },
    { name: "SA-TEC someone in the final 6", types: ["lo"] },
    { name: "Witness 3 BEUD played in 1 duel", types: ["lo"] },
    { name: "Have Heishin Megamorph a monster, and win", types: ["lo"] }
  ];
  bingoList[25] = [
    { name: "Unlock every duelist in Free Duel", types: ["lo"] },
    { name: "Beat Nitemare", types: ["lo"] },
    { name: "SA-POW/TEC Nitemare", types: ["lo"] },
    { name: "Beat the Final 7", types: ["lo"] },
    { name: "Beat the Final 6 without THTD or MBD", types: ["lo"] }
  ];
