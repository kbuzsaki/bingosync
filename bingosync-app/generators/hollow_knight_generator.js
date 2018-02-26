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

function randomKey(jsonObj){
	var obj_keys = Object.keys(jsonObj);
  var ran_key = obj_keys[Math.floor(Math.random() *obj_keys.length)];
  return ran_key;
}

bingoGenerator = function(bingoList, opts) {
    var SEED = opts.seed || Math.ceil(999999 * Math.random()).toString();
    Math.seedrandom(SEED);

    var selectedGoals = []

    for(var i = 1; i <= 25; i++){
        randomkey = randomKey(bingoList);

        for(var key in bingoList[randomkey]["excludes"]) {
            var exc = bingoList[randomkey]["excludes"][key];
            if( bingoList.hasOwnProperty(exc))
            delete bingoList[exc];
        }

        var goal = bingoList[randomkey]["Name"];
        selectedGoals[i] = {"name": goal};

        delete bingoList[randomkey];
    }

    return selectedGoals;
};

var bingoList = {
"FChamp": {"Name": "Failed Champion", "excludes":{}},
"FKBM": {"Name": "False Knight + Brooding Mawlek", "excludes":{}},
"SM": {"Name": "Soul Master", "excludes":{}},
"ST": {"Name": "Soul Tyrant", "excludes":{}},
"H2": {"Name": "Hornet 2", "excludes": {}},
"CG1":{"Name": "Crystal Guardian 1", "excludes":{}},
"CG2": {"Name":"Crystal Guardian 2", "excludes":{}},
"Dung":{"Name":"Dung Defender","excludes":["DCrest", "Lemm"]},
"Flukemarm":{"Name": "Flukemarm", "excludes":["Flukenest"]},
"Nosk":{"Name": "Nosk", "excludes":{}},
"Lords":{"Name": "Mantis Lords", "excludes":{}},
"Collector":{"Name": "Collector", "excludes":{}},
"Traitor":{"Name": "Traitor Lord", "excludes":["ClothQuest"]},
"Uumuu":{"Name": "Uumuu", "excludes":[]},
"WK":{"Name": "Watcher Knights", "excludes":[]},
"Lurien":{"Name": "Lurien", "excludes":[]},
"Monomon":{"Name":"Monomon", "excludes":[]},
"Herrah":{"Name": "Herrah", "excludes":[]},
"VKMMC":{"Name":"Vengefly King + Massive Moss Charger", "excludes":[]},
"Xero":{"Name":"Xero", "excludes":[]},
"Gorb":{"Name":"Gorb", "excludes":[]},
"Hu":{"Name":"Elder Hu", "excludes":[]},
"Galien":{"Name":"Galien", "excludes":[]},
"Markoth":{"Name":"Markoth", "excludes":[]},
"Marmu":{"Name":"Marmu", "excludes":[]},
"NoEyes":{"Name":"No Eyes", "excludes":[]},
"GChildUp":{"Name":"Upgrade Grimmchild once", "excludes":[]},
"Grimm":{"Name":"Grimm", "excludes":[]},
"BVessel":{"Name":"Broken Vessel", "excludes":["Wings"]},
"LostKin":{"Name":"Lost Kin", "excludes":[]},
"SS":{"Name":"Shade Soul", "excludes":[]},
"Shriek":{"Name":"Abyss Shriek", "excludes":[]},
"Wraiths":{"Name":"Howling Wraiths", "excludes":[]},
"Dive":{"Name":"Desolate Dive", "excludes":[]},
"N2":{"Name":"Nail 2", "excludes":[]},
"N3":{"Name":"Nail 3", "excludes":["2Ore"]},
"DNail":{"Name":"Dream Nail", "excludes":[]},
"DGate":{"Name":"Dream Gate", "excludes":[]},
"2Ore":{"Name":"Have 2 Pale Ore", "excludes":["N3"]},
"Cyclone":{"Name":"Cyclone Slash", "excludes":[]},
"Great":{"Name":"Great Slash", "excludes":[]},
"DashSlash":{"Name":"Dash Slash", "excludes":[]},
"Wings":{"Name":"Monarch Wings", "excludes":["BVessel"]},
"CH":{"Name":"Crystal Heart", "excludes":[]},
"SCloak":{"Name":"Shade Cloak", "excludes":["Egg"]},
"Tear":{"Name":"Isma's Tear", "excludes":[]},
"Tram":{"Name":"Tram Pass + Visit all 5 Tram Stations", "excludes":[]},
"Lantern":{"Name":"Lumafly Lantern", "excludes":[]},
"XRoadsGrub":{"Name":"Save the 5 grubs in Xroads + 1 in Fog Canyon", "excludes":[]},
"CoTGrub":{"Name":"Save the 5 grubs in CoT", "excludes":[]},
"FunGreenGrub":{"Name":"Save the 2 grubs in Fungal Wastes + the 4 in Greenpath", "excludes":[]},
"PeaksGrub":{"Name":"Save the 7 grubs in Crystal Peaks","excludes":[]},
"WaterGrub":{"Name": "Save the 3 grubs in Waterways", "excludes":[]},
"QueenGrub":{"Name":"Save the 3 grubs in Queen's Garden","excludes":[]},
"DeepGrub":{"Name":"Save the 5 grubs in Deepnest","excludes":[]},
"15Grub":{"Name":"Save 15 grubs","excludes":[]},
"20Grub":{"Name":"Save 20 grubs","excludes":[]},
"Fountain":{"Name":"Obtain fountain vessel fragment","excludes":["3000", "4000"]},
"Notches":{"Name":"Obtain 3 extra notches", "excludes":[]},
"Soul1":{"Name":"Obtain 1 extra soul vessel", "excludes":[]},
"Mask1":{"Name":"Obtain 1 extra mask", "excludes":[]},
"Mask2":{"Name":"Obtain 2 extra masks", "excludes":[]},
"Journals":{"Name":"Have 5 Wanderer's Journals", "excludes":[]},
"Seals":{"Name":"Have 5 Hallownest Seals", "excludes":[]},
"Idols":{"Name":"Collect 3 King's Idols","excludes":[]},
"Egg":{"Name":"Collect 1 Arcane Egg","excludes":["SCloak"]},
"ElderFlower":{"Name":"Give Flower to Elderbug","excludes":[]},
"ColoZote":{"Name":"Defeat Colosseum Zote","excludes":["DeepZote"]},
"Colo1":{"Name":"Colosseum 1","excludes":["Colo2"]},
"Colo2":{"Name":"Colosseum 2","excludes":["Colo1"]},
"BrettaSly":{"Name":"Rescue Bretta + Sly", "excludes":[]},
"2Keys":{"Name":"Use 2 Simple Keys","excludes":[]},
"DeepZote":{"Name":"Rescue Zote in Deepnest","excludes":["ColoZote"]},
"CrestElevator":{"Name":"Use City Crest + Ride both CoT large elevators","excludes":[]},
"Lemm":{"Name":"Talk to Lemm with Crest Equipped","excludes":["Dung", "DCrest"]},
"Bank":{"Name":"Have 1500 geo in the bank","excludes":[]},
"420":{"Name":"Break the 420 geo rock in Kingdom's Edge","excludes":[]},
"HiddenStag":{"Name":"Unlock Hidden Stag Station","excludes":[]},
"GardenStag":{"Name":"Unlock Queen's Garden Stag", "excludes":[]},
"DeepStag":{"Name":"Unlock Deepnest Stag","excludes":["Midwife"]},
"Pins":{"Name":"Buy 7 map pins from Iselda (All but one)","excludes":[]},
"KingStag":{"Name":"Unlock Queen's Stag + King's Stag Stations","excludes":[]},
"HornetMom":{"Name":"Encounter Hornet at CoT Statue + in Deepnest","excludes":[]},
"ClothQuest":{"Name":"Watch Cloth Die","excludes":["Traitor"]},
"Myla":{"Name":"Kill Myla","excludes":[]},
"3000":{"Name":"Spend 3000 geo","excludes":["Fountain", "4000"]},
"4000":{"Name":"Spend 4000 geo", "excludes":["Fountain", "3000", "5000"]},
"5000":{"Name":"Spend 5000 geo", "excludes":["Fountain", "4000"]},
"Tolls":{"Name":"Pay for 5 tolls","excludes":[]},
"NailRange":{"Name":"Longnail + MoP","excludes":[]},
"Fragile":{"Name":"Fragile Heart, Greed, and Strength","excludes":[]},
"SPEED":{"Name":"Sprintmaster + Dashmaster","excludes":[]},
"FOCUS":{"Name":"Deep Focus + Quick Focus","excludes":[]},
"SpellCharms":{"Name":"Spell Twister + Shaman Stone","excludes":[]},
"BlueBlood":{"Name":"Lifeblood Heart + Joni's Blessing","excludes":[]},
"Weaversong":{"Name":"Weaversong","excludes":[]},
"Grubsong":{"Name":"Grubsong","excludes":[]},
"SharpShadow":{"Name":"Sharp Shadow","excludes":[]},
"Unn":{"Name":"Shape of Unn","excludes":[]},
"ThornsTrio":{"Name":"Thorns of agony + Baldur Shell + Spore Shroom","excludes":[]},
"QSlash":{"Name":"Quick Slash","excludes":[]},
"BlowBody":{"Name":"Heavy Blow + Steady Body","excludes":[]},
"MaskMaker":{"Name":"Talk to Mask Maker","excludes":[]},
"Midwife":{"Name":"Talk to Midwife","excludes":[]},
"RancidEggs":{"Name":"Have 4 Rancid Eggs","excludes":[]},
"Jiji":{"Name":"Kill your shade in Jiji's Hut","excludes":[]},
"500Essence":{"Name":"Collect 500 essence","excludes":["DWielder"]},
"DWielder":{"Name":"Dream Wielder","excludes":["500Essence"]},
"Cornifer5":{"Name":"Interact with 5 Cornifer locations","excludes":[]},
"Flukenest":{"Name":"Flukenest","excludes":["Flukemarm"]},
"StagVessel":{"Name":"Stag Nest vessel fragment","excludes":[]},
"Trees3":{"Name":"Complete 3 full dream trees","excludes":[]},
"2Warriors":{"Name":"Kill 2 Soul Warriors","excludes":[]},
"4Maps":{"Name":"Buy 4 maps", "excludes":[]},
};
