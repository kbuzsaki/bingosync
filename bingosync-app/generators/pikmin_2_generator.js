//Uses SRL Generator

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

//Version 1.0 of Pikmin 2 Bingo

var bingoList = [];
bingoList[1] = [
  { name: "Toxic Toadstool (WFG4)", types: ["wfg"] },
  { name: "Collect a 1-Pellet of each color", types: ["pellet"] }, 
];
bingoList[2] = [
  { name: "Enter SmC", types: ["caveenter"] },
  { name: "Kill 10 Mitites on HoB4", types: ["hobenemies"] },
  { name: "Kill the Burrowing Snagret in VoR", types: ["snagret"] },
];
bingoList[3] = [
  { name: "Kill Louie twice", types: ["selfharm"] },
  { name: "Get a Red Pikmin Extinction", types: ["red","selfharm"] },
  { name: "Pilgrim Bulb (AW)", types: ["aw"] },
  { name: "Fall into the void", types: ["void"] },
];
bingoList[4] = [
  { name: "Get a Pikmin Extinction inside a cave", types: ["selfharm"] },
  { name: "Activate every dormant bomb rock on SCx5", types: ["scxbomb"] },
  { name: "Use a Red Candypop Bud", types: ["red","primcpb"] },
  { name: "Enter all 4 caves in AW", types: ["caveenter"] },
];
bingoList[5] = [
  { name: "Discover Yellow Pikmin", types: ["ylw"] },
  { name: "Collect an Empress Bulblax", types: ["empress","hobenemies"] },
  { name: "Collect a 5-Pellet of each color", types: ["pellet"] },
  { name: "Collect 2 Burrowing Snagret heads", types: ["snagret","wfgenemies"] },
];
bingoList[6] = [
  { name: "Destroy the poison gate in VoR", types: ["poisongate"] },
  { name: "Kill all enemies in HoB and WFG", types: ["hobenemies","wfgenemies"] },
  { name: "Crystal Clover (BK1) and Crystal King (BK4)", types: ["earlybk"] },
  { name: "Trigger all 3 hazard cutscenes", types: ["selfharm"] },
  { name: "Enter all 3 caves in VoR", types: ["caveenter"] },
];
bingoList[7] = [
  { name: "Collect 8 Dweevils (of any kind)", types: ["xenemy"] },
  { name: "45 Yellows", types: ["ylw","onetype"] },
  { name: "Kill 8 Blowhogs (of any kind)", types: ["xenemy"] },
  { name: "Fossilized Ursidae (VoR)", types: ["vor"] },
];
bingoList[8] = [
  { name: "Destroy a Burgeoning Spiderwort mold", types: ["mold"] },
  { name: "Turn 15 Bulbmin into other types", types: ["blb","primcpb","prpwht","vorcpb"] },
  { name: "8 Spicy Sprays", types: ["spray"] },
  { name: "Never use any Spicy Sprays", types: ["spray","instant"] },
];
bingoList[9] = [
  { name: "Never get Prototype Detector (HoB5)", types: ["nogauge","instant"] },
  { name: "Kill all 3 Creeping Chrysanthemums in AW", types: ["allenemy"] },
  { name: "Impediment Scourge (PP)", types: ["pp"] },
  { name: "Olimarnite Shell (BK3)", types: ["earlybk"] },
  { name: "Enter all 4 caves in PP", types: ["caveenter"] },
];
bingoList[10] = [
  { name: "Kill 8 Water Dumples", types: ["xenemy"] },
  { name: "Kill all 2 Hermit Crawmads in PP", types: ["allenemy"] },
  { name: "45 Whites", types: ["prpwht","onetype"] },
  { name: "Destroy all 2 electric gates in AW", types: ["elecgate","awgate"] },
  { name: "Collect all 3 Wogpoles in AW", types: ["wogpole"] },
];
bingoList[11] = [
  { name: "Clear FC3", types: ["earlyfc"] },
  { name: "Use 5 Candypop Buds in SCx", types: ["vorcpb","prpwht"] },
  { name: "Clear SCx3", types: ["earlyscx"] },
  { name: "8 Bitter Sprays", types: ["spray"] },
];
bingoList[12] = [
  { name: "Aquatic Mine (PP)", types: ["pp"] },
  { name: "Never discover Sprays", types: ["spray","instant"] },
  { name: "100 Pikmin of a single type", types: ["onetype","masspik"] },
  { name: "Kill 5 Bulbmin", types: ["blb","selfharm"] },
];
bingoList[13] = [
  { name: "Drain the main lake in PP", types: ["drain"] },
  { name: "Build all 3 bridges in AW", types: ["bridge","brake"] },
  { name: "Never do Early Blues", types: ["awgate","instant"] },
  { name: "200 Total Pikmin", types: ["masspik"] },
];
bingoList[14] = [
  { name: "5 Spicy Sprays and 5 Bitter Sprays", types: ["spray"] },
  { name: "4 Treasures worth 30 Pokos or fewer", types: ["lowpoko","sh","smc"] },
  { name: "Use 4 Candypop Buds in FC", types: ["vorcpb","prpwht"] },
];
bingoList[15] = [
  { name: "Destroy all 6 poison geysers in AW", types: ["poisongate","awgate","brake"] },
  { name: "Collect 2 Gattling Groinks", types: ["xenemy","latescx"] },
  { name: "Thirst Activator(NTSC-U)/Perfect Container(PAL) (SCx7)", types: ["latescx","hipoko"] },
  { name: "Leviathan Feather (SH1) and Science Project (SH6)", types: ["sh","lowpoko"] },
];
bingoList[16] = [
  { name: "Unspeakable Wonder (VoR)", types: ["vor","acb"] },
  { name: "3 Explorer's Kit treasures", types: ["easyboss","hardboss","gk"] },
  { name: "Collect all 3 Cannon Beetle corpses in VoR", types: ["acb","allenemy"] },
  { name: "Have a Leaf Pikmin in the ground mature into a Flower Pikmin", types: ["mature"] },
];
bingoList[17] = [
  { name: "45 Purples", types: ["prpwht","onetype"] },
  { name: "Clear GK2 and GK6", types: ["gk","breadbug"] },
  { name: "Kill 2 Fiery Bulblaxes", types: ["fiery"] },
  { name: "Build all 3 bridges in PP", types: ["bridge"] },
];
bingoList[18] = [
  { name: "4 Treasures worth 200 Pokos or more", types: ["hipoko"] },
  { name: "2500 Pokos", types: ["total"] },
  { name: "Use a Yellow Candypop Bud", types: ["ylw","primcpb"] },
  { name: "Clear SCx6", types: ["latescx"] },
];
bingoList[19] = [
  { name: "Kill 5 Breadbugs", types: ["breadbug"] },
  { name: "The Key (CoS5)", types: ["easyboss","cos"] },
  { name: "Optical Illustration(NTSC-U)/Pondering Emblem(PAL) (PP)", types: ["pp","ppgate"] },
  { name: "Collect all 5 Wogpoles in PP", types: ["wogpole","ppgate"] },
];
bingoList[20] = [
  { name: "Destroy all 2 black gates in PP", types: ["blkgate","ppgate"] },
  { name: "Destroy all 3 electric gates in PP", types: ["elecgate","ppgate"] },
  { name: "Onion Replica (PP)", types: ["pp","blkgate","void","lowpoko"] },
  { name: "Stupendous Lens(NTSC-U)/Mysterious Remains(PAL) (SH6)", types: ["sh"] },
];
bingoList[21] = [
  { name: "Collect the 20-Pellet in AW", types: ["pellet"] },
  { name: "Collect Temporal Mechanism (VoR) without using any Bitter Sprays", types: ["vor","fiery"] },
  { name: "Repugnant Appendage (FC8)", types: ["easyboss","empress"] },
  { name: "Mirrored Stage (SR3)", types: ["sr"] },
];
bingoList[22] = [
  { name: "Destroy 4 poison gates", types: ["poisongate"] },
  { name: "Air Brake (AW)", types: ["aw","brake"] },
  { name: "Amplified Amplifier (SR7)", types: ["easyboss"] },
];
bingoList[23] = [
  { name: "Clear FC6", types: ["latefc","blb"] },
  { name: "Clear SH6", types: ["sh","lowpoko","snagret"] },
  { name: "Decorative Goo (AW)", types: ["awgate","aw"] },
];
bingoList[24] = [
  { name: "Professional Noisemaker (SmC5)", types: ["hardboss"] },
  { name: "Endless Repository(NTSC-U)/Permanent Container(PAL) (SR5)", types: ["sr"] },
  { name: "Stellar Orb (SCx9)", types: ["hardboss"] },
];
bingoList[25] = [
  { name: "Clear SmC4", types: ["smc"] },
  { name: "Justice Alloy (SH7)", types: ["hardboss"] },
];