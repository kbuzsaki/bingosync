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
name:"10+ Power Bombs",types:["powerbomb"]},{
name:"Spazer",types:["spazer"]},{
name:"Defeat Spore Spawn",types:["sporespawn"]},{
name:"Activate Brinstar Map Station",types:["brinstarmap"]},{
name:"3+ Energy Tanks",types:["energytank"]}];
bingoList[2]=[{
name:"15+ Power Bombs",types:["powerbomb"]},{
name:"15+ Super Missiles",types:["supermissile"]},{
name:"Activate Crateria Save Station",types:["save"]},{
name:"Brinstar Reserve Tank",types:["reservetank"]},{
name:"Activate Crateria Map Station",types:["crateriamap"]}];
bingoList[3]=[{
name:"20+ Power Bombs",types:["powerbomb"]},{
name:"Collect or Skip Both Charge Beam and Spazer",types:["chargebeam","spazer"]},{
name:"4+ Energy Tanks",types:["energytank"]},{
name:"Collect Ice Beam and skip Speed Booster",types:["icebeam","speedbooster"]},{
name:"Skip Charge Beam",types:["chargebeam"]}];
bingoList[4]=[{
name:"Skip Hi-Jump Boots",types:["hijump"]},{
name:"50+ Missiles",types:["missile"]},{
name:"Activate Both Brinstar Missile Recharge Stations",types:["missilerecharge","brinstar"]},{
name:"Collect only 1 of Ice Beam or Hi-Jump Boots",types:["icebeam","hijump"]},{
name:"5+ Energy Tanks",types:["energytank"]}];
bingoList[5]=[{
name:"4+ Energy Tanks and 15+ Power Bombs",types:["energytank","powerbomb"]},{
name:"Collect 25+ Crateria Missiles or 40+ Brinstar Missiles",types:["missile","areamissile"]},{
name:"Destroy at least 1 statue",types:["statueroom"]},{
name:"75+ Missiles",types:["missile"]},{
name:"4+ Energy Tanks and 35+ Missiles",types:["energytank","missile"]}];
bingoList[6]=[{
name:"6+ Energy Tanks",types:["energytank"]},{
name:"2+ Reserve Tanks",types:["reservetank"]},{
name:"Ice Beam",types:["icebeam"]},{
name:"25+ Power Bombs",types:["powerbomb"]},{
name:"Defeat Crocomire",types:["crocomire"]}];
bingoList[7]=[{
name:"Activate Norfair Map Station",types:["norfairmap"]},{
name:"Wave Beam",types:["wavebeam"]},{
name:"Defeat Crocomire and skip Hi-Jump Boots",types:["crocomire","hijump"]},{
name:"100+ Missiles",types:["missile"]},{
name:"7+ Energy Tanks",types:["energytank"]}];
bingoList[8]=[{
name:"Skip Wave Beam",types:["wavebeam"]},{
name:"Grapple Beam",types:["grapplebeam","crocomire"]},{
name:"Norfair Reserve Tank",types:["reservetank"]},{
name:"Collect only 1 of Ice Beam or Speed Booster",types:["icebeam","speedbooster"]},{
name:"Collect Grapple Beam and skip Charge Beam",types:["grapplebeam","chargebeam","crocomire"]}];
bingoList[9]=[{
name:"Activate 4+ Brinstar Save Stations",types:["save"]},{
name:"30+ Power Bombs",types:["powerbomb"]},{
name:"125+ Missiles",types:["missile"]},{
name:"Collect all 10 Wrecked Ship Super Missiles",types:["supermissile"]},{
name:"8+ Energy Tanks",types:["energytank"]}];
bingoList[10]=[{
name:"Activate Maridia Map Station",types:["maridiamap"]},{
name:"Collect only 1 of Wave Beam or Speed Booster",types:["speedbooster","wavebeam"]},{
name:"Collect only 1 of Speed Booster or Grapple Beam",types:["speedbooster","grapplebeam"]},{
name:"7+ Energy Tanks and 70+ Missiles",types:["energytank","missile"]},{
name:"Collect or Skip Both Wave Beam and Charge Beam",types:["wavebeam","chargebeam"]}];
bingoList[11]=[{
name:"Collect all 40 Crateria Missiles",types:["missile"]},{
name:"Activate Wrecked Ship Map Station",types:["wsmap","phantoon"]},{
name:"Collect 55 out of 75 Norfair Missiles",types:["missile"]},{
name:"Crateria Power Bomb",types:["powerbomb"]},{
name:"Collect Both Crateria Energy Tanks",types:["energytank"]}];
bingoList[12]=[{
name:"Collect all 15 Brinstar Super Missiles",types:["supermissile"]},{
name:"Collect all 25 Brinstar Power Bombs",types:["powerbomb"]},{
name:"2 Norfair Energy Tanks and 1 Maridia Energy Tank",types:["energytank"]},{
name:"Visit Lower Norfair Elevator",types:["norfairelev"]},{
name:"Collect all 15 Wrecked Ship Missiles",types:["missile","phantoon"]}];
bingoList[13]=[{
name:"Crateria Super Missile",types:["supermissile","speedbooster"]},{
name:"Wrecked Ship Energy Tank",types:["energytank","wsetroom"]},{
name:"Wrecked Ship Reserve Tank",types:["reservetank","speedbooster"]},{
name:"Collect all 5 Brinstar Energy Tanks",types:["energytank","speedbooster"]},{
name:"Collect all 60 Brinstar Missiles",types:["missile"]}];
bingoList[14]=[{
name:"Finish in Springball room",types:["finish"]},{
name:"Finish in an Elevator",types:["finish","forgottenarea","norfairelev"]},{
name:"Finish in X-Ray Scope room",types:["finish"]},{
name:"Finish in Grapple Beam room",types:["finish","grapplebeam"]},{
name:"Finish in Kraid's room",types:["finish","variasuit"]},{
name:"Finish at Landing site",types:["finish","landing"]}];
bingoList[15]=[{
name:"Finish in Metal Pirate room",types:["finish"]},{
name:"Finish in 'Mama Turtle' room",types:["finish"]},{
name:"Finish in Wrecked Ship Energy Tank room",types:["finish","wsetroom"]},{
name:"Finish in Spore Spawn's room",types:["finish","sporespawn"]},{
name:"Finish near Spazer, Charge Beam, Ice Beam, Wave Beam, or Plasma Beam",types:["finish"]},{
name:"Finish in a Shinespark or Crystal Flash",types:["finish"]}];
bingoList[16]=[{
name:"20+ Super Missiles",types:["supermissile"]},{
name:"Activate all 3 Brinstar Energy Recharge Stations",types:["energyrecharge","speedbooster"]},{
name:"Collect Gauntlet Energy Tank or X-Ray Scope",types:["energytank","xrayscope"]},{
name:"35+ Power Bombs",types:["powerbomb"]},{
name:"Fully explore the Wrecked Ship",types:["phantoon","gravitysuit"]}];
bingoList[17]=[{
name:"25+ Super Missiles",types:["supermissile"]},{
name:"9+ Energy Tanks",types:["energytank"]},{
name:"3+ Reserve Tanks",types:["reservetank"]},{
name:"X-Ray Scope",types:["xrayscope"]},{
name:"Fully explore the Landing Site",types:["landing","speedbooster"]},{
name:"10+ Energy Tanks",types:["energytank"]}];
bingoList[18]=[{
name:"30+ Super Missiles",types:["supermissile"]},{
name:"Visit the critters",types:["speedbooster"]},{
name:"Collect only 1 of Varia Suit or Gravity Suit",types:["variasuit","gravitysuit"]},{
name:"Collect Grapple Beam or Wrecked Ship Energy Tank",types:["grapplebeam","wsetroom"]},{
name:"Collect X-Ray Scope and skip Grapple Beam",types:["xrayscope","grapplebeam"]}];
bingoList[19]=[{
name:"Visit Crateria-Maridia Elevator",types:["forgottenarea"]},{
name:"Collect Gravity Suit and skip Varia Suit",types:["gravitysuit","variasuit"]},{
name:"Collect 50+ Combined Super Missiles and Power Bombs",types:["supermissile","powerbomb"]},{
name:"Collect 11+ Combined Energy Tanks and Reserve Tanks",types:["energytank","reserve"]},{
name:"Activate Lower Norfair Save Station",types:["save","norfairelev"]}];
bingoList[20]=[{
name:"Activate all 4 Map Stations",types:["crateriamap","wsmap","norfairmap","maridiamap"]},{
name:"Norfair Reserve Tank or Wrecked Ship Reserve Tank",types:["reservetank"]},{
name:"60+ Missiles and 20+ Super Missiles",types:["missile","supermissile"]},{
name:"Screw Attack",types:["screwattack","norfairelev"]},{
name:"Activate Both Norfair Energy Recharge Stations",types:["energyrecharge","norfairelev"]},{
name:"Destroy at least 2 statues",types:["statueroom"]}];
bingoList[21]=[{
name:"Defeat Botwoon",types:["botwoon"]},{
name:"Maridia Power Bomb",types:["powerbomb"]},{
name:"Defeat Spore Spawn and Botwoon",types:["sporespawn","botwoon"]},{
name:"Springball",types:["springball"]},{
name:"Defeat Golden Torizo",types:["gt","screwattack"]},{
name:"40+ Power Bombs",types:["powerbomb"]},{
name:"Maridia Reserve Tank",types:["reservetank"]}];
bingoList[22]=[{
name:"Defeat Golden Torizo and Spore Spawn",types:["gt","sporespawn","screwattack"]},{
name:"Defeat Ridley",types:["ridley"]},{
name:"Defeat Draygon",types:["draygon"]},{
name:"Activate Both Maridia Energy and Missile Recharge Stations",types:["energyrecharge","missilerecharge"]},{
name:"Collect all 15 Norfair Power Bombs",types:["powerbomb"]},{
name:"Collect Springball or defeat Draygon",types:["springball","draygon","icebeam","grapplebeam"]},{
name:"Defeat Crocomire and Draygon",types:["crocomire","draygon"]}];
bingoList[23]=[{
name:"Space Jump",types:["spacejump","draygon"]},{
name:"Charge Beam, Spazer, Wave Beam, Ice Beam, and Plasma Beam",types:["chargebeam","spazer","wavebeam","icebeam","plasmabeam"]},{
name:"Norfair Super Missile",types:["supermissile"]},{
name:"Collect Springball and skip Ice Beam",types:["springball","icebeam"]},{
name:"4 Reserve Tanks",types:["reservetank","speedbooster"]},{
name:"Collect Springball and skip Grapple Beam",types:["springball","grapplebeam"]},{
name:"Collect all 40 Maridia Missiles",types:["missile"]}];
bingoList[24]=[{
name:"Plasma Beam",types:["plasmabeam","draygon"]},{
name:"Skip Gravity Suit",types:["gravitysuit"]},{
name:"Defeat Crocomire and Ridley",types:["crocomire","ridley"]},{
name:"Collect Plasma Beam and skip Space Jump",types:["plasmabeam","spacejump","draygon"]},{
name:"Collect Space Jump and skip Hi-Jump Boots",types:["spacejump","hijump","draygon"]},{
name:"Collect all 4 Norfair Energy Tanks",types:["energytank","ridley"]},{
name:"Collect 15 of 20 Lower Norfair Missiles",types:["missiles"]},{
name:"35+ Super Missiles",types:["supermissile"]}];
bingoList[25]=[{
name:"Collect Plasma Beam or defeat Ridley",types:["plasma","ridley","draygon"]},{
name:"Collect all 15 Maridia Super Missiles",types:["supermissile"]},{
name:"Activate all Maridia Save Stations",types:["save","forgottenarea"]},{
name:"11+ Energy Tanks",types:["energytank"]},{
name:"Activate the Chozo Statue to Drain the Acid",types:["finish"]},{
name:"Hi-Jump Boots, Speed Booster, and Space Jump",types:["hijump","speedbooster","spacejump"]}];