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
                if (typeof typesA != "undefined" && typeof typesB != 'undefined') {
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
    {name:'Tutorial Hallway EP'},
    {name:'Tutorial Cloud EP'},
    {name:'Tutorial Gate EP'},
    {name:'Tutorial Pillar'},
    {name:'Tutorial Patio Floor Panel'},
    {name:'Tutorial Flowers EP'},
    {name:'Tutorial: Close the Gate'},
    {name:'Short Sewer EP'},
    {name:'Tutorial Patio Roof Audio Log', types: ['audio_log']},
    {name:'Tutorial Garden EP'},
    {name:'Move any object that is not a Boat, Door, Staircase, or Laser'},
    {name:'Turn on the EEE Lightswitch'}
];
bingoList[2] = [
    {name:'Tutorial Vault', types: ['vault']},
    {name:'Tutorial Path EP'},
    {name:'Tutorial Gate Audio Log', types: ['audio_log']},
    {name:'Tractor EP'},
    {name:'Tutorial Dots Panels (5)'},
    {name:'Symmetry Discarded Panel', types: ['discard']},
    {name:'Glass Factory Yellow Vase EP'},
    {name:'Tutorial Stones Panels (9)'},
    {name:'Glass Factory Vertical Symmetry Panels (5)'},
    {name:'Orchard Panels (5)'},
    {name:'Tutorial Discarded Panel', types: ['discard']},
    {name:'Glass Factory Melting Panels (3)'}
];
bingoList[3] = [
    {name:'Town: Open the Windmill'},
    {name:'Town Orange Crate Discarded Panel'},
    {name:'Town Redirect Black Line EP'},
    {name:'Town Church Panels (2)'},
    {name:'Town Bell Tower Black Line EP'},
    {name:'Town Eraser Panel'},
    {name:'Town Rooftop Discarded Panel', types: ['discard']},
    {name:'Town Bridge Underside EP'}
];
bingoList[4] = [
    {name:'Desert Sand Snake EP'},
    {name:'Quarry Rock Line EPs (2)'},
    {name:'Quarry Entrance Pipe EP'},
    {name:'Quarry Entry Gate Panels (2)'},
    {name:'Keep Red Flowers EP'},
    {name:'Mill Rooftop Vent EP'},
    {name:'Shadows: Open the Tutorial Door'},
    {name:'Keep Purple Flowers EP'},
    {name:'Shadows Laser Panel'}
];
bingoList[5] = [
    {name:'Jungle Entrance EP'},
    {name:'Jungle Discarded Panel', types: ['discard']},
    {name:'Jungle Tree Halo EP'},
    {name:'Jungle Pop-up Wall Moss EP'},
    {name:'Jungle: Summon the Boat'},
    {name:'Jungle Courtyard Gate Panel'},
    {name:'Jungle Waves Set 1 Panels (3)'},
    {name:'Jungle Vault', types: ['vault']},
    {name:'Jungle Green Leaf Moss EP'},
    {name:'Jungle Bamboo Sky EPs (2)'},
    {name:'Jungle Waves Set 2 Panels (4)'},
    {name:'Jungle Moss Same Start Point EPs (3)'}
];
bingoList[6] = [
    {name:'Desert Facade EPs (2)'},
    {name:'Desert Discarded Panel', types: ['discard']},
    {name:'Desert Shore EP'},
    {name:'Desert Light Room Panels (4)'},
    {name:'Desert Stairs EPs (2)'},
    {name:'Desert Island EP'},
    {name:'Desert Broken Wall EPs (2)'},
    {name:'Desert Vault', types: ['vault']}
];
bingoList[7] = [
    {name:'Town Tower Underside EPs (4)'},
    {name:'Town Green Light EP'},
    {name:'Town R/G/B Light Panels (3)'},
    {name:'Theater Discarded Panel', types: ['discard']},
    {name:'Theater Church EP'},
    {name:'Theater Exit Panels (2)'},
    {name:'Theater Book EPs (2)'},
    {name:'Theater Video Panels (6)'}
];
bingoList[8] = [
    {name:'Monastery Entrance Doors (2)'},
    {name:'Monastery Exterior Panels (3)'},
    {name:'Monastery Grass Stairs EP'},
    {name:'Monastery Right Courtyard EP'},
    {name:'Monastery Stone Wall EP'},
    {name:'Monastery Facade EPs (6)'},
    {name:'Monastery Interior Panels (5)'},
    {name:'Monastery Left Courtyard EP'},
    {name:'Monastery Left Shutters Audio Log', types: ['audio_log']},
    {name:'Monastery Laser'},
    {name:'Monastery Shutter EPs (3)'}
];
bingoList[9] = [
    {name:'Treehouse Beach Shadow EPs (2)'},
    {name:'Mountainside Bush and Cove EPs (2)'},
    {name:'Treehouse Drawbridge Panel'},
    {name:'Mountainside Discarded Panel', types: ['discard']},
    {name:'Mountain Vault', types: ['vault']},
    {name:'Mountaintop River EP'},
    {name:'Mountaintop River Panel'},
    {name:'Mountaintop Black Arch EP'},
    {name:'Mountaintop White Arch EPs (2)'}
];
bingoList[10] = [
    {name:'Mill Discarded Panel', types: ['discard']},
    {name:'Mill Door Panels (2)'},
    {name:'Mill Sand Pile and Shore EPs (2)'},
    {name:'Quarry: Summon the Boat'},
    {name:'Boathouse: Raise the Ramp'},
    {name:'Mill Lower Row Panels (6)'},
    {name:'Boathouse Erasers and Shapers Panels (5)'},
    {name:'Mill Upper Row Panels (8)'},
    {name:'Boathouse: Move the Ramp'},
    {name:'Boathouse Hook Control Panel'}
];
bingoList[11] = [
    {name:'Town Maze, Bridge, and Blue Panels (7)'},
    {name:'Town Red Light EP'},
    {name:'Town Red Hexagonal Panel'},
    {name:'Windmill First Blade EP'},
    {name:'Summon Boat at Town'},
    {name:'Town Obelisk Audio Log', types: ['audio_log']},
    {name:'Windmill Second Blade EP'},
    {name:'Windmill Third Blade EP'}
];
bingoList[12] = [
    {name:'Any 7 Non-Laser Panels that do not increase solve count'},
    {name:'Bunker Entry Door Panel'},
    {name:'Any 2 Vaults', types: ['vault']},
    {name:'Any 8 Audio Logs', types: ['audio_log']},
    {name:'Any 2 Discarded Panels', types: ['discard']},
    {name:'Shadows Tutorial Panels (8)'},
    {name:'Any 4 Straight Line EPs'},
    {name:'Any 2 Boat EPs', types: ['boat_ep']}
];
bingoList[13] = [
    {name:'Keep Hedge Maze Panels (4)'},
    {name:'Keep Discarded Panel', types: ['discard']},
    {name:'Any 3 Discarded Panels', types: ['discard']},
    {name:'Keep Pressure Plates (4)'},
    {name:'Shipwreck Circle EPs (3)'},
    {name:'Shipwreck Discarded Panel', types: ['discard']},
    {name:'Shipwreck Vault', types: ['vault']},
    {name:'Shipwreck Rope EPs (2)'},
    {name:'Shipwreck Stern EP'}
];
bingoList[14] = [
    {name:'Bunker Tutorial Panels (5)'},
    {name:'Jungle: Raise the Pop-up Wall'},
    {name:'Bunker Advanced Panels (4)'},
    {name:'Bunker Glass Room Panels (3)'},
    {name:'Jungle Dots Panels (6)'},
    {name:'Bunker Ultraviolet Panels (2)'},
    {name:'Bunker Doorway EP'},
    {name:'Jungle Laser'},
    {name:'Bunker Elevator Panel'}
];
bingoList[15] = [
    {name:'Symmetry Black Dots Panels (5)'},
    {name:'Glass Factory Black Line EP'},
    {name:'Glass Factory Black Line Reflection EP'},
    {name:'Symmetry Transparent Panels (5)'},
    {name:'Symmetry Solid Colored Lines Panels (6)'},
    {name:'Symmetry Fading Colored Lines Panels (7)'},
    {name:'Summon Boat at Symmetry'},
    {name:'Symmetry Laser'}
];
bingoList[16] = [
    {name:'Desert Surface Panels (8)'},
    {name:'Desert Pond Room EPs (2)'},
    {name:'Desert Pond Room Panels (5)'},
    {name:'Desert Flood Room Panels (6)'},
    {name:'Desert Laser', types: ['desert_laser']},
    {name:'Desert Flood Room EP'},
    {name:'Desert Elevator EP', types: ['desert_laser']},
    {name:'Desert Broken Wall Audio Log', types: ['audio_log']}
];
bingoList[17] = [
    {name:'Swamp Tutorial Panels (14)'},
    {name:'Swamp Laser'},
    {name:'Swamp Island Control Panels (2)'},
    {name:'Swamp Sliding Bridge EPs (2)'},
    {name:'Swamp Red Shortcut Panels (2)'},
    {name:'Swamp Red Panels (4)'},
    {name:'Summon Boat at Swamp'},
    {name:'Swamp Discontinuous Panels (4)'},
    {name:'Swamp: Close the Flood Gate'},
    {name:'Swamp Stern of Boat EP'},
    {name:'Swamp Floodgate EP'}
];
bingoList[18] = [
    {name:'Keep Dirt Path EP'},
    {name:'Keep Laser'},
    {name:'Keep Hedge Mazes EP'},
    {name:'Keep Guitar Amp Audio Log', types: ['audio_log']},
    {name:'Keep Yellow Pressure Plate EP'},
    {name:'Keep Green Pressure Plate EP'},
    {name:'Keep Purple Pressure Plate EP'},
    {name:'Keep Corridor Audio Log', types: ['audio_log']},
    {name:'Keep Laser Panels (2)'},
    {name:'Keep Pressure Plate EPs (5)'},
    {name:'Keep Front Wall Audio Log', types: ['audio_log']}
];
bingoList[19] = [
    {name:'Mill Stairs Audio Log', types: ['audio_log']},
    {name:'Boathouse Ramp Hook EP'},
    {name:'Mill Control Room Panels (2)'},
    {name:'Mill Stairs Control Panel'},
    {name:'Boathouse Ramp in Motion EP'},
    {name:'Mill Left Light EP'},
    {name:'Mill Right Light EP'},
    {name:'Boathouse Erasers and Star Panels (7)'},
    {name:'Boathouse Erasers, Shapers, and Stars Panels (5)'}
];
bingoList[20] = [
    {name:'Shadows Follow Panels (5)'},
    {name:'Shadows Avoid Panels (8)'},
    {name:'Shadows Orange Crate Audio Log', types: ['audio_log']},
    {name:'Any 10 Audio Logs', types: ['audio_log']},
    {name:'Any 3 Vaults', types: ['vault']},
    {name:'Any 4 Discarded Panels', types: ['discard']},
    {name:'Peninsula Audio Log', types: ['audio_log']},
    {name:'Treehouse Buoy EP'}
];
bingoList[21] = [
    {name:'Boat Tutorial Moss EP', types: ['boat_ep']},
    {name:'Boat CW Shipwreck Underside EP', types: ['boat_ep']},
    {name:'Boat CCW Shipwreck Underside EP', types: ['boat_ep']},
    {name:'Boat Orange Crate EP', types: ['boat_ep']},
    {name:'Boat Long Sewer EP', types: ['boat_ep']},
    {name:'Boat Tutorial Reflection EP', types: ['boat_ep']},
    {name:'Boat Tutorial EP', types: ['boat_ep']},
    {name:'Boat Bunker EP', types: ['boat_ep']},
    {name:'Boat Desert EP', types: ['boat_ep']},
    {name:'Boat Green Shipwreck EP', types: ['boat_ep']}
];
bingoList[22] = [
    {name:'Town Laser'},
    {name:'Thundercloud EP', types: ['desert_laser']},
    {name:'Boat Broken Boat Audio Log', types: ['audio_log']},
    {name:'Any 3 Boat EPs', types: ['boat_ep']},
    {name:'Jungle Laser Audio Log', types: ['audio_log']},
    {name:'Cloud Cycle Audio Log', types: ['audio_log']},
    {name:'Couch EP'},
    {name:'Bunker Green Room EP'},
    {name:'Any 12 Audio Logs', types: ['audio_log']},
    {name:'Mill Railroad EP'},
    {name:'Bunker Laser'}
];
bingoList[23] = [
    {name:'Swamp Bridge CW Shadow EP'},
    {name:'Swamp Bridge CCW Shadow EP'},
    {name:'Swamp Purple Shaper Panel'},
    {name:'Treehouse Yellow Bridge Panels (9)'},
    {name:'Boat Treehouse Rock Audio Log', types: ['audio_log']},
    {name:'Swamp Blue Underwater Panels (5)'},
    {name:'Swamp Underwater Yellow and Orange Line EPs (2)'},
    {name:'Treehouse Laser Door Panel'},
    {name:'Swamp Teal Underwater Panels (5)'}
];
bingoList[24] = [
    {name:'Treehouse Green Bridge Panels (7)'},
    {name:'Treehouse Green Bridge Discarded Panel'},
    {name:'Swamp Purple Sand EPs (3)'},
    {name:'Swamp Sliding Bridge Underwater EP'},
    {name:'Treehouse Right Orange Bridge Panels (12)'},
    {name:'Treehouse Laser Discarded Panel'},
    {name:'Treehouse Purple Bridge Panels (12)'},
    {name:'Swamp Shortcut Audio Log', types: ['audio_log']},
    {name:'Treehouse Left Orange Bridge Panels (15)'},
    {name:'Treehouse Burned House Shadow EP'},
    {name:'Treehouse Short Bridge EP'}
];
bingoList[25] = [
    {name:'Quarry Laser'},
    {name:'Monastery Obelisk'},
    {name:'Treehouse Laser'},
    {name:'All 5 Vaults', types: ['vault']},
    {name:'Treehouse Long Bridge EP'},
    {name:'Jungle Beach Audio Log', types: ['audio_log']},
    {name:'Mountaintop Audio Log', types: ['audio_log']},
    {name:'Quarry Obelisk'},
    {name:'Desert Obelisk'},
    {name:'Cloud Cycle EP'},
    {name:'Treehouse Obelisk'}
];
