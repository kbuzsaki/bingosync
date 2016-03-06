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
// Twinsanity Bingo
// version 5
// by BetaM

var bingoList = [];

bingoList[1] = [
 { name: "Gain a life from monkeys",types: []},
 { name: "Highest reachable point of the beach chunk",types: []},
 { name: "Roll an acorn to the top of the cliff" ,types: []},
];
bingoList[2] = [
{ name: "Push a tribesman into a hole" ,types: []},
{ name: "Reach the secret beach" ,types: []},
{ name: "Stop the bouncy crates in JB" ,types: []},
{ name: "Ride Cortex's plasma for 5 seconds" ,types: []}
];
bingoList[3] = [
{ name: "Get 2 Cortex in a single cutscene" ,types: []},
{ name: "Take Cortex to the first beach" ,types: []},
 { name: "Touch CoCortex" ,types: []}
];
bingoList[4] = [
{ name: "Destroy 5 life crates as the ball" ,types: []},
{ name: "Activate all the crystals in Cavern" ,types: []},
{ name: "Complete Ernest Emu's worm minigame" ,types: []},
{ name: "Teleport to the void at drill chase" ,types: []}
];
bingoList[5] = [
{ name: "Do the Boat OoB and cross the river" ,types: []},
{ name: "Cheat death in Totem Hokum" ,types: []},
{ name: "Hug Papu Papu" ,types: []},
{ name: "Kill everything in the village" ,types: []},
];
bingoList[6] = [
{ name: "Escape from the village" ,types: []},
{ name: "Look at Tikimon from below" ,types: []},
{ name: "Escape back to the village after the chase" ,types: []}
];
bingoList[7] = [
{ name: "Backtrack from the drill fight and collect a gem" ,types: []},
{ name: "Go back into Cavern from the farm" ,types: []},
{ name: "Beat Tikimon" ,types: []}
];
bingoList[8] = [
{ name: "Collect all gems in Iceberg Lab" ,types: []},
{ name: "Collect all gems in N.Sanity Island" ,types: []},
{ name: "Collect all gems in the AoE hub" ,types: []},
{ name: "Collect all gems in TI and BP" ,types: []}
];
bingoList[9] = [
{ name: "Bodyslam Cortex 4 times in the boss fight" ,types: []},
{ name: "Go through the drill chase without the drill" ,types: []},
{ name: "Escape from the drill chase" ,types: []}
];
bingoList[10] = [
{ name: "Take Cortex with you to the penguins" ,types: []},
{ name: "Kill all dogs" ,types: []},
{ name: "Kill all the chickens at the farm" ,types: []}
];
bingoList[11] = [
{ name: "Damage boost from a bat" ,types: []},
{ name: "Yellow gem in IC using Cortex" ,types: []},
{ name: "Make N. Gin hit himself 3 times in one shot" ,types: []}
];
bingoList[12] = [
{ name: "Beat the ant fight in Iceberg Lab" ,types: []},
{ name: "Go through the shortcut to HSH" ,types: []},
{ name: "Beat all enemies after the bus chase" ,types: []}
];
bingoList[13] = [
{ name: "Destroy all life crates on ice before HSH" ,types: []},
{ name: "Kill every swinger in the swinger room" ,types: []},
{ name: "Follow the mystery springs in HSH" ,types: []}
];
bingoList[14] = [
{ name: "Touch N.Gin" ,types: []},
{ name: "Ride SSI backwards until the first checkpoint" ,types: []},
{ name: "Beat the AA crossroad puzzle" ,types: []},
];
bingoList[15] = [
{ name: "Kill airship ants by sliding as Cortex" ,types: []},
{ name: "Destroy all life crates in the walrus chase" ,types: []},
{ name: "Make an ant spin you on a gargoyle post 3 times" ,types: []},
{ name: "Ride the bus" ,types: []}
];
bingoList[16] = [
{ name: "Go OoB in Boiler Room Doom" ,types: []},
{ name: "Collect the first gem in BRD as Zombie" ,types: []},
{ name: "Skip 3 puzzles in BRD" ,types: []}
];
bingoList[17] = [
{ name: "Stay on the BRD rodeo for 5 seconds" ,types: []},
{ name: "Fall into the hole below the slime" ,types: []},
{ name: "Beat a frog room as Cortex" ,types: []}
];
bingoList[18] = [
{ name: "Feed bombs to every totem" ,types: []},
{ name: "Kill 3 invisible enemies in Classroom" ,types: []}
];
bingoList[19] = [
{ name: "Avoid ringing bells in Rooftop yourself" ,types: []},
{ name: "Beat Amberly glitchless" ,types: []},
{ name: "Avoid all gems in a Humiliskate level" ,types: []}
];
bingoList[20] = [
{ name: "Collect 3 Cortex lives as Crash" ,types: []},
{ name: "Roll a ball into the shortcut cave in TI" ,types: []},
{ name: "Destroy all life boxes in TI" ,types: []},
{ name: "Collect all stuff in drills in Rockslide" ,types: []}
];
bingoList[21] = [
{ name: "Get all 3 caged gems glitchless in TI" ,types: []},
{ name: "Break all blue light bulbs in AA" ,types: []},
{ name: "Go through 2 sets of color cycles backwards" ,types: []},
{ name: "Bypass the final colors using the wall" ,types: []}
];
bingoList[22] = [
{ name: "Skip all Cortex triggers in BP" ,types: []},
{ name: "Backtrack from AA's entrance to BP while OoB" ,types: []},
{ name: "Kill an Ant Flyer by sliding into it", types: []},
{ name: "Fix the Evil Crash glitch", types: []}
];
bingoList[23] = [
{ name: "Gain invulnerability 5 times" ,types: []},
{ name: "50 lives" ,types: []},
{ name: "Beat any boss twice" ,types: []}
];
bingoList[24] = [
{ name: "Touch the real Coco before she gets zapped" ,types: []},
{ name: "Reach AA treasure room" ,types: []},
{ name: "Enter a slide without triggering its cutscene" ,types: []}
];
bingoList[25] = [
{ name: "100% two levels from different hubs" ,types: []},
{ name: "Collect at least 4 gems in every Hub" ,types: []},
{ name: "Collect 10 gems in a hub" ,types: []},
{ name: "Collect at least 8 crystals" ,types: []}
];
