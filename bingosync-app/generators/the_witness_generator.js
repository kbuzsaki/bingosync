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
	{name:'Tutorial Floor Panel'},
	{name:'Tutorial Flowers EP'},
	{name:'Tutorial Vault', types: ['vault']},
	{name:"Move any object that isn't a Boat, Door, Staircase, or Laser"},
	{name:'Turn on the Lightswitch'},
];
bingoList[2] = [
	{name:'Boat Short Sewer EP'},
	{name:'Tutorial Path EP'},
	{name:'Tutorial Garden EP'},
	{name:'Tractor EP'},
	{name:'Dots Tutorial'},
	{name:'Symmetry Discarded Panel', types: ['discard']},
	{name:'Glass Factory Yellow Vase EP'},
	{name:'Squares Tutorial'},
	{name:'Pink Trees Panels'},
	{name:'Tutorial Discarded Panel', types: ['discard']},
];
bingoList[3] = [
	{name:'Town Orange Crate Discarded Panel'},
	{name:'Town Redirect Black Line EP'},
	{name:'Town Church Panels'},
	{name:'Town Bell Tower Black Line EP'},
	{name:'Town Negation Panel'},
	{name:'Town Rooftop Discarded Panel', types: ['discard']},
	{name:'Town Underside Retracted Bridge EP'},
	{name:'All 4 Town Tower Underside EPs'},
];
bingoList[4] = [
	{name:'Desert Sand Snake EP'},
	{name:'Quarry Entrance Pipe EP'},
	{name:'Quarry Gate Panels'},
	{name:'Keep Red Flowers EP'},
	{name:'Mill Rooftop Vent EP'},
	{name:'Keep Purple Flowers EP'},
	{name:'Shadows Laser'},
];
bingoList[5] = [
	{name:'Jungle Entrance EP'},
	{name:'Jungle Discarded Panel', types: ['discard']},
	{name:'Jungle Tree Halo EP'},
	{name:'Jungle Pop-up Wall Moss EP'},
	{name:'Summon Boat at Jungle'},
	{name:'Jungle Set 1 Panels'},
	{name:'Jungle Vault', types: ['vault']},
	{name:'Jungle Green Leaf Moss EP'},
	{name:'Both Jungle Bamboo Sky EPs'},
	{name:'Jungle Set 2 Panels'},
	{name:'All 3 Jungle Moss EPs from the Same Starting Point'},
];
bingoList[6] = [
	{name:'Both Desert Facade EPs'},
	{name:'Desert Discarded Panel', types: ['discard']},
	{name:'Desert Shoreline EP'},
	{name:'Both Desert Stairs EPs'},
	{name:'Desert Island EP'},
	{name:'Both Desert Broken Wall EPs'},
	{name:'Desert Vault', types: ['vault']},
];
bingoList[7] = [
	{name:'Town Green Flowers EP'},
	{name:'All 3 Town R/G/B Light Panels'},
	{name:'Cinema Discarded Panel', types: ['discard']},
	{name:'Nostalgia Video EP'},
	{name:'Cinema Exit Panels'},
	{name:'Both BBC Video EPs'},
	{name:'All 6 Cinema Video Panels'},
];
bingoList[8] = [
	{name:'Monastery Exterior Panels'},
	{name:'Monastery Stairs EP'},
	{name:'Right Monastery Courtyard EP'},
	{name:'Monastery Stone Wall EP'},
	{name:'All 6 Monastery Facade EPs'},
	{name:'All 5 Interior Monastery Panels'},
	{name:'Left Monastery Courtyard EP'},
	{name:'Monastery Laser'},
	{name:'All 3 Monastery Shutter EPs'},
];
bingoList[9] = [
	{name:'Mill Rooftop Discarded Panel', types: ['discard']},
	{name:'Mill Door Panels'},
	{name:'Mill Sand Pile and Shore EPs'},
	{name:'Summon Boat at Quarry'},
	{name:'Raise Boathouse Ramp'},
	{name:'Mill Lower Row Panels'},
	{name:'Boathouse Negation and Polyomino Panels'},
	{name:'Mill Upper Row Panels'},
	{name:'Boathouse Claw Panel'},
];
bingoList[10] = [
	{name:'Town Maze, Bridge, and Blue Panels'},
	{name:'Town Red Flowers EP'},
	{name:'Town Red Hexagonal Panel'},
	{name:'Windmill First Blade EP'},
	{name:'Summon Boat at Town'},
	{name:'Windmill Second Blade EP'},
	{name:'Windmill Third Blade EP'},
];
bingoList[11] = [
	{name:'Both Treehouse Beach Shadow EPs'},
	{name:'Mountainside Bush and Cove EP'},
	{name:'Treehouse Drawbridge'},
	{name:'Mountainside Discarded Panel', types: ['discard']},
	{name:'Mountain Vault', types: ['vault']},
	{name:'Mountaintop River EP'},
	{name:'Mountaintop River Panel'},
	{name:'Mountaintop Black Arch EP'},
	{name:'Both Mountaintop White Arch EPs'},
];
bingoList[12] = [
	{name:'Desert Light Switch Room Panels'},
	{name:'Desert Surface Panels'},
	{name:'Desert Pool Room'},
	{name:'Both Desert Pool Room EPs'},
	{name:'Desert Flood Room Panels'},
	{name:'Desert Laser', types: ['desert_laser']},
	{name:'Desert Flood Room EP'},
	{name:'Desert Elevator EP', types: ['desert_laser']},
];
bingoList[13] = [
	{name:"Any 7 Non-Laser Panels that don't increase solve count"},
	{name:'Any 2 Vaults', types: ['vault']},
	{name:'Any 8 Audio Logs', types: ['audio_log']},
	{name:'Any 2 Discarded Panels', types: ['discard']},
	{name:'Shadows - First Third'},
	{name:'Shadows - Follow'},
	{name:'Shadows - Avoid'},
	{name:'Listen to the Entire Peninsula Audio Log', types: ['audio_log']},
];
bingoList[14] = [
	{name:'Symmetry Glass Factory'},
	{name:'Symmetry Island Black Dots Panels'},
	{name:'Glass Factory Black Line EP'},
	{name:'Glass Factory Black Line Reflection EP'},
	{name:'Symmetry Look-Through Panels'},
	{name:'Symmetry Island Colored Dots and Solid Lines Panels'},
	{name:'Symmetry Island Colored Dots and Fading Lines Panels'},
	{name:'Summon Boat at Symmetry'},
	{name:'Symmetry Laser'},
];
bingoList[15] = [
	{name:'Front Half of Keep'},
	{name:'Keep Discarded Panel', types: ['discard']},
	{name:'All 3 Shipwreck Circle EPs'},
	{name:'Shipwreck Discarded Panel', types: ['discard']},
	{name:'Shipwreck Vault', types: ['vault']},
	{name:'Both Shipwreck Rope EPs'},
	{name:'Back End of Shipwreck EP'},
];
bingoList[16] = [
	{name:'Bunker Back Wall Panels'},
	{name:'Any 3 Discarded Panels', types: ['discard']},
	{name:'Bunker Flower Room'},
	{name:'Bunker UV Room'},
	{name:'Bunker Doorway EP'},
	{name:'Any 2 Boat EPs', types: ['boat_ep']},
	{name:'Bunker Elevator Panel'},
];
bingoList[17] = [
	{name:'Swamp Tutorial'},
	{name:'Swamp Laser'},
	{name:'Both Swamp Red Island Panels'},
	{name:'Both Swamp Sliding Bridge EPs'},
	{name:'Both Swamp Red Shortcut Door Panels'},
	{name:'Swamp Red Panels'},
	{name:'Summon Boat at Swamp'},
	{name:'Swamp Back of Boat EP'},
	{name:'Swamp Double Rotating Bridge EP'},
];
bingoList[18] = [
	{name:'Keep Dirt Path EP'},
	{name:'Keep Laser'},
	{name:'Back Half of Keep'},
	{name:'Keep Hedge Mazes EP'},
	{name:'Keep Yellow Walk-On EP'},
	{name:'Keep Green Walk-On EP'},
	{name:'Keep Purple Walk-On EP'},
	{name:'Both Keep Laser Panels'},
	{name:'All 5 Keep Walk-On EPs'},
];
bingoList[19] = [
	{name:'Boathouse Claw Ramp EP'},
	{name:'Mill Control Room Panels'},
	{name:'Boathouse Ramp in Motion EP'},
	{name:'Left Mill Light EP'},
	{name:'Right Mill Light EP'},
	{name:'Boathouse Negation and Star Panels'},
	{name:'Boathouse Negation, Star, and Polyomino Panels'},
];
bingoList[20] = [
	{name:'Boat Tutorial Moss EP', types: ['boat_ep']},
	{name:'Boat Clockwise Shipwreck Underside EP', types: ['boat_ep']},
	{name:'Boat Counterclockwise Shipwreck Underside EP', types: ['boat_ep']},
	{name:'Boat Orange Container EP', types: ['boat_ep']},
	{name:'Boat Long Sewer EP', types: ['boat_ep']},
	{name:'Boat Tutorial Reflection EP', types: ['boat_ep']},
	{name:'Boat Tutorial EP', types: ['boat_ep']},
	{name:'Boat Bunker EP', types: ['boat_ep']},
	{name:'Boat Desert EP', types: ['boat_ep']},
	{name:'Boat Green Shipwreck EP', types: ['boat_ep']},
];
bingoList[21] = [
	{name:'Any 10 Audio Logs', types: ['audio_log']},
	{name:'Any 3 Vaults', types: ['vault']},
	{name:'Any 4 Straight Line EPs'},
	{name:'Any 4 Discarded Panels', types: ['discard']},
	{name:'Jungle Pop-up Wall Panels'},
	{name:'Treehouse Buoy EP'},
	{name:'Jungle Laser'},
];
bingoList[22] = [
	{name:'Town Laser'},
	{name:'Thundercloud EP', types: ['desert_laser']},
	{name:'Any 3 Boat EPs', types: ['boat_ep']},
	{name:'Couch EP'},
	{name:'Bunker Green Room EP'},
	{name:'Any 12 Audio Logs', types: ['audio_log']},
];
bingoList[23] = [
	{name:'Swamp Bridge Clockwise Shadow EP'},
	{name:'Swamp Bridge Counterclockwise Shadow EP'},
	{name:'Swamp Optional Tetris Panel'},
	{name:'Quarry Railroad EP'},
	{name:'Bunker Laser'},
	{name:'Treehouse Tutorial Bridge'},
	{name:'Swamp Blue Underwater Panels'},
	{name:'Swamp Yellow and Orange Underwater Line EPs'},
];
bingoList[24] = [
	{name:'Swamp Teal Underwater Panels'},
	{name:'Treehouse Green Bridge'},
	{name:'Treehouse Green Bridge Discarded Panel'},
	{name:'All 3 Swamp Purple Sand EPs'},
	{name:'Swamp Underwater Bridge EP'},
	{name:'Treehouse Right Orange Bridge'},
	{name:'Swamp Red Underwater Panels'},
	{name:'Both Treehouse Purple Bridges'},
	{name:'Quarry Laser'},
];
bingoList[25] = [
	{name:'Monastery Obelisk'},
	{name:'Treehouse Left Orange Bridge'},
	{name:'Treehouse Burnt House Shadow EP'},
	{name:'Treehouse Laser Discarded Panel'},
	{name:'Short Treehouse Bridge EP'},
	{name:'Treehouse Laser'},
	{name:'All 5 Vaults', types: ['vault']},
	{name:'Long Treehouse Bridge EP'},
	{name:'Listen to the Entire Mountaintop Audio Log', types: ['audio_log']},
	{name:'Quarry Obelisk'},
	{name:'Desert Obelisk'},
	{name:'Cloud Cycle EP'},
	{name:'Treehouse Obelisk'},
];
