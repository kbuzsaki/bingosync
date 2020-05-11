// Create Math.seedrandom function and maybe some other stuff idk can't be bothered to understand this obfuscated crap
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

//Create a magic square that the board will be based on
function magicSquare() {
    var A = B = C = D = E = f = g = h = i = j = 0;
    //var tableA = [A, B, C, D, E];
    //var tableF = [f, g, h, i, j];
    //this whole thing generates one of the 144 "unique" 5x5 magic squares
    //for more info visit https://www.grogono.com/magic/5x5pan144.php
    var table1 = [];
    table1[0] = [0, 5, 10, 15, 20];
    table1[1] = [0, 5, 10, 20, 15];
    table1[2] = [0, 5, 15, 10, 20];
    table1[3] = [0, 5, 15, 20, 10];
    table1[4] = [0, 5, 20, 10, 15];
    table1[5] = [0, 5, 20, 15, 10];
    
    var table2 = [];
    table2[0] = [0, 1, 2, 3, 4];
    table2[1] = [0, 1, 2, 4, 3];
    table2[2] = [0, 1, 3, 2, 4];
    table2[3] = [0, 1, 3, 4, 2];
    table2[4] = [0, 1, 4, 2, 3];
    table2[5] = [0, 1, 4, 3, 2];
    table2[6] = [0, 2, 1, 3, 4];
    table2[7] = [0, 2, 1, 4, 3];
    table2[8] = [0, 2, 3, 1, 4];
    table2[9] = [0, 2, 3, 4, 1];
    table2[10] = [0, 2, 4, 1, 3];
    table2[11] = [0, 2, 4, 3, 1];
    table2[12] = [0, 3, 1, 2, 4];
    table2[13] = [0, 3, 1, 4, 2];
    table2[14] = [0, 3, 2, 1, 4];
    table2[15] = [0, 3, 2, 4, 1];
    table2[16] = [0, 3, 4, 1, 2];
    table2[17] = [0, 3, 4, 2, 1];
    table2[18] = [0, 4, 1, 2, 3];
    table2[19] = [0, 4, 1, 3, 2];
    table2[20] = [0, 4, 2, 1, 3];
    table2[21] = [0, 4, 2, 3, 1];
    table2[22] = [0, 4, 3, 1, 2];
    table2[23] = [0, 4, 3, 2, 1];
    
    var randTable1 = table1[Math.floor(6 * Math.random())];
    var randTable2 = table2[Math.floor(24 * Math.random())];
    /*for (var x = 0; x <= 4; x++) {
        tableA[x] = randTable1[x];
    }
    for (var y = 0; y <= 4; y++) {
        tableF[y] = randTable2[y];
    }*/
    A = randTable1[0];
    B = randTable1[1];
    C = randTable1[2];
    D = randTable1[3];
    E = randTable1[4];
    f = randTable2[0];
    g = randTable2[1];
    h = randTable2[2];
    i = randTable2[3];
    j = randTable2[4];
    
    var template = [];
    template[0] = [(A+f+1), (B+i+1), (C+g+1), (D+j+1), (E+h+1)];
    template[1] = [(D+g+1), (E+j+1), (A+h+1), (B+f+1), (C+i+1)];
    template[2] = [(B+h+1), (C+f+1), (D+i+1), (E+g+1), (A+j+1)];
    template[3] = [(E+i+1), (A+g+1), (B+j+1), (C+h+1), (D+f+1)];
    template[4] = [(C+j+1), (D+h+1), (E+f+1), (A+i+1), (B+g+1)];
    
    //here starts the translocations, rotations, and reflections that increase the possible magic squares to 28800
    var ro = Math.floor(4 * Math.random());
    var rf = Math.floor(2 * Math.random());
    var tH = Math.floor(5 * Math.random());
    var tV = Math.floor(5 * Math.random());
    
    template = translocate(template, tH, 0);
    template = translocate(template, tV, 1);
    template = rotate(template, ro);
    if (rf == 1) {
        template.reverse();
    }
    
    function inverse(t) { //inverts the table
        var s = [];
        for (var j = 0; j < t.length; j++) {
            s.push([]);
        }
        for (var j = 0; j < t.length; j++) {
            for (var k = 0; k < t.length; k++) {
                s[j][k] = t[k][j];
            }
        }
    }

    function rotate(t, i) { //rotates ccw i times
        for (var j = 1; j <= i; j++) {
            inverse(t);
            t.reverse();
        }
        return t;
    }

    function translocate(t, i, dir) {
        if (dir == 1) { //shifts down i times
            for (j = 1; j <= i; j++) {
                var s = t.shift();
                t.push(s);
            }
        } else {
            for (j = 1; j <= i; j++) { //shifts left i times
                for (k = 0; k <= 4; k++) {
                    var s = t[k].shift();
                    t[k].push(s);
                }
            }
        }
        return t;
    }
    //do a checksum to make sure it's a valid magic square
    /*try {
        var checksumTotal = 0
        for (var x = 0; x <= 4; x++) {
            var checksumLine = 0;
            for (var y = 0; y <= 4; y++) {
                checksumTotal += template[x][y];
                checksumLine += template[x][y];
            }
            if (checksumLine != 65) {
                throw "Line sum is not 65";
            }
        }
        if (checksumTotal != 325) {
            throw "Sum is not 325";
        }
    }
    catch(err) {
        console.log(err);
    }*/
    
    return template;
}


//Reduces fluff in bingoList object if there's a method to set defaults
function preprocessBingoList(bingoList) {
    for (const key of Object.keys(bingoList)) {
        bingoList[key].name = key;

        if (!bingoList[key].hasOwnProperty("Desc")) {
            bingoList[key].Desc = "#!#" + key + "#!#";
        }

        if (!bingoList[key].hasOwnProperty("Diff")) {
            bingoList[key].Diff = 13;
        }

        if (!bingoList[key].hasOwnProperty("Excludes")) {
            bingoList[key].Excludes = [];
        }

        if (!bingoList[key].hasOwnProperty("Synergy")) {
            bingoList[key].Synergy = [];
        }
    }
}

//synerGen: a bingo generator based on SRLv5 and Hollow Knight's generators.
bingoGenerator = function(bingoList, opts) {
    //Make sure everything exists that should
    preprocessBingoList(bingoList);

    //Separate goals into currently choosable / unchoosable (all goals are choosable at the start)
    var choosable = [];
    var unchoosable = [];
    for (const key of Object.keys(bingoList)) {
        choosable.push(key);
    }
    //console.log("Total goals: " + choosable.length);

    //Seed the random
    seed = Math.seedrandom(opts.seed || Math.ceil(999999 * Math.random()));
    console.log("Seed: " + seed);
    
    //create a 1-dimensional array from the 2-dimensional matrix magicSquare[][]
    var square = magicSquare();
    var bingoBoard = square[0].concat(square[1], square[2], square[3], square[4]);
    
    var unchosenDiffs = bingoBoard.slice();
    var chosenGoals = [];
    for (var i = 1; i <= 25; i++) {
        chosenGoals.push("");
    }
    for (var i = 1; i <= 25; i++) {
        //this is necessary on the edge case that all the exclusions and difficulties wind up eliminating every goal
        if (choosable.length == 0) {
            //console.log("\nchoosable is empty, current unchoosable goals: " + unchoosable.length);
            var newChoosableDiffs = [];
            //add all goals with difficulty one more or less than any of the remaining difficulties back into choosable[]
            for (var j of unchosenDiffs) {
                var plusOne = j + 1;
                var minusOne = j - 1;
                if (!newChoosableDiffs.includes(plusOne) && plusOne <= 25) {
                    newChoosableDiffs.push(plusOne);
                }
                if (!newChoosableDiffs.includes(minusOne) && minusOne >= 1) {
                    newChoosableDiffs.push(minusOne);
                }
            }
            for (var k = 0; k < unchoosable.length; k++) {
                if (newChoosableDiffs.includes(bingoList[unchoosable[k]].Diff)) {
                    var l = unchoosable.splice(k, 1);
                    choosable = choosable.concat(l);
                    k--;
                }
            }
            //if choosable[] is still empty, just move everything from unchoosable[] back
            if (choosable.length == 0) {
                while (unchoosable.length > 0) {
                    var l = unchoosable.splice(0, 1);
                    choosable = choosable.concat(l);
                }
            }
        }
        
        //finally, choosing goals can begin
        //Get a random goal, add to chosen
        var index = Math.floor(Math.random() * choosable.length);
        var goal = bingoList[choosable[index]];
        var diff = goal.Diff;
        var diffIndex = bingoBoard.indexOf(diff);
        //deal with the edge case of the difficulty not matching
        if (chosenGoals[diffIndex] != "") {
            diffIndex = bingoBoard.indexOf(diff + 1);
            if (chosenGoals[diffIndex] != "") {
                diffIndex = bingoBoard.indexOf(diff - 1);
                if (chosenGoals[diffIndex] != "") {
                    diffIndex = chosenGoals.indexOf("");
                }
            }
        }
        chosenGoals[diffIndex] = { "name": goal.Desc };
        //console.log("Goal " + i + " chosen: " + goal.name + "; difficulty: " + goal.Diff);
        
        //remove the chosen goal and any duplicates of it completely
        for (var j = 0; j < choosable.length; j++) {
            if (choosable[j] == goal.name) {
                choosable.splice(j, 1);
            }
        }
        //remove the goal's difficulty from unchosenDiffs[]
        var unchosenDiffIndex = unchosenDiffs.indexOf(goal.Diff);
        if (unchosenDiffIndex != -1) {
            unchosenDiffs.splice(unchosenDiffIndex, 1);
        }
        
        //console.log(goal);
        //remove all goals of the same difficulty from choosable[], also remove excluded goals if relevant
        for (var j = 0; j < choosable.length; j++) {
            if (bingoList[choosable[j]].Diff == goal.Diff) {
                var l = choosable.splice(j, 1);
                unchoosable = unchoosable.concat(l);
                j--;
                continue;
            }
            for (var k = 0; k < goal.Excludes.length; k++) {
                if (choosable[j] == goal.Excludes[k]) {
                    var m = choosable.splice(j, 1);
                    unchoosable = unchoosable.concat(m);
                    j--;
                }
            }
        }
        //console.log("Current unchoosable goals: " + unchoosable.length);
        //duplicate all goals sharing synergies with the chosen goal in choosable[] to make them more likely to be chosen
        for (var j = 0; j < goal.Synergy.length; j++) {
            var temp = [];
            for (var k = 0; k < choosable.length; k++) {
                if (goal.Synergy[j] == choosable[k]) { //check if the goal itself is a synergy
                    var m = choosable[k];
                    temp.push(m);
                }
                for (var l = 0; l < bingoList[choosable[k]].Synergy.length; l++) { //check if it shares a synergy group that isn't an existing goal
                    if (goal.Synergy[j] == bingoList[choosable[k]].Synergy[l] 
                        && !choosable.includes(bingoList[choosable[k]].Synergy[l])
                        && !unchoosable.includes(bingoList[choosable[k]].Synergy[l])) {
                            var n = choosable[k];
                            temp.push(n);
                    }
                }
            }
            choosable = choosable.concat(temp);
        }
    }
    return chosenGoals;
}

var bingoList = {
    
    //Goals sorted by area, general goals first
    /*"Key": {
        "Desc": "Desc",
        "Diff": 13,
        "Excludes": [],
        "Synergy": []
    },
    */
    
    //Pikmin-related goals
    "150R": {
        "Desc": "150 Reds",
        "Diff": 16,
        "Excludes": ["150OneType", "200Total"],
        "Synergy": ["50RBY", "100OneType", "300Total"]
    },
    "60Y": {
        "Desc": "60 Yellows",
        "Diff": 8,
        "Excludes": ["100Y", "1Y"],
        "Synergy": ["50RBY", "100OneType"]
    },
    "100Y": {
        "Desc": "100 Yellows",
        "Diff": 14,
        "Excludes": ["60Y", "100OneType", "100B"],
        "Synergy": ["50RBY", "150OneType", "200Total"]
    },
    "100B": {
        "Desc": "100 Blues",
        "Diff": 9,
        "Excludes": ["100OneType", "100Y"],
        "Synergy": ["50RBY", "150OneType", "200Total"]
    },
    "50RBY": {
        "Desc": "50 Reds, 50 Yellows, and 50 Blues",
        "Diff": 7,
        "Synergy": ["150R", "60Y", "100Y", "100B"]
    },
    "45P": {
        "Desc": "45 Purples",
        "Diff": 14,
        "Excludes": ["45W"],
        "Synergy": ["CPB"]
    },
    "45W": {
        "Desc": "45 Whites",
        "Diff": 14,
        "Excludes": ["45P"],
        "Synergy": ["CPB"]
    },
    "100OneType": {
        "Desc": "100 Pikmin of a single type",
        "Diff": 7,
        "Excludes": ["100Y", "100B"],
        "Synergy": ["150OneType", "200Total", "150R"]
    },
    "150OneType": {
        "Desc": "150 Pikmin of a single type",
        "Diff": 14,
        "Excludes": ["150R", "200Total"],
        "Synergy": ["100OneType", "100Y", "100B", "300Total"]
    },
    "200Total": {
        "Desc": "200 Total Pikmin",
        "Diff": 9,
        "Excludes": ["150R", "150OneType"],
        "Synergy": ["100Y", "100B", "100OneType"]
    },
    "300Total": {
        "Desc": "300 Total Pikmin",
        "Diff": 16,
        "Synergy": ["150R", "150OneType"]
    },
    
    //Pellet-related goals
    "1Pellet": {
        "Desc": "Collect a 1-Pellet of each color",
        "Diff": 2
    },
    "5Pellet": {
        "Desc": "Collect a 5-Pellet of each color",
        "Diff": 5,
        "Synergy": ["1Y", "VoRSnagret"]
    },
    "10Pellet": {
        "Desc": "Collect a 10-Pellet of each color",
        "Diff": 20,
        "Excludes": ["AM"],
        "Synergy": ["1Y"]
    },
    
    //Enemy-related goals
    "Dumples": {
        "Desc": "Defeat 8 Water Dumples",
        "Diff": 9
    },
    "Blowhogs": {
        "Desc": "Defeat 8 Blowhogs (of any kind)",
        "Diff": 8,
        "Synergy": ["FarVoR"]
    },
    "Dweevils": {
        "Desc": "Defeat 8 Dweevils (of any kind)",
        "Diff": 18,
        "Synergy": ["BK", "CoS"]
    },
    "ACBs": {
        "Desc": "Defeat 8 Cannon Beetles (of any kind)",
        "Diff": 20,
        "Synergy": ["FarVoR", "VoRACB", "SCx3"]
    },
    "Wollywogs": {
        "Desc": "Defeat 6 Wollywogs (of any kind)",
        "Diff": 11
    },
    "Snitchbugs": {
        "Desc": "Defeat 6 Snitchbugs (of any kind)",
        "Diff": 12
    },
    "Bulblaxes": {
        "Desc": "Defeat 2 Fiery Bulblaxes",
        "Diff": 16,
        "Excludes": ["TempMech"]
    },
    "Snagrets": {
        "Desc": "Defeat 2 Burrowing Snagrets",
        "Diff": 4,
        "Excludes": ["VoRSnagret"],
        "Synergy": ["SH"]
    },
    "Empire": {
        "Desc": "Defeat an Emperor and Empress Bulblax",
        "Diff": 13,
        "Excludes": ["Empress", "Gauge", "Emperor"],
        "Synergy": ["RushBoots"]
    },
    
    //Obstacle-related goals
    "ElecGates": {
        "Desc": "Destroy 2 electric gates",
        "Diff": 21,
        "Synergy": ["OI", "SREarly"]
    },
    "PoisonGates": {
        "Desc": "Destroy 2 poison gates",
        "Diff": 16,
        "Excludes": ["VoRPoisonGate", "AWGasPipes"]
    },
    
    //Themed treasure goals
    "4EK": {
        "Desc": "4 Explorer's Kit treasures",
        "Diff": 13,
        "Synergy": ["EK"]
    },
    "Food": {
        "Desc": "5 food treasures",
        "Diff": 7,
        "Synergy": ["GBB", "SmC"]
    },
    "BuriedTreasure": {
        "Desc": "6 fully buried treasures",
        "Diff": 22,
        "Synergy": ["Gauge"]
    },
    "5AG": {
        "Desc": "5 above ground treasures",
        "Diff": 2,
        "Excludes": ["8AG"]
    },
    "8AG": {
        "Desc": "8 above ground treasures",
        "Diff": 13,
        "Excludes": ["5AG"],
        "Synergy": ["FarVoR"]
    },
    "HighValue": {
        "Desc": "7 treasures worth 160 Pokos or more",
        "Diff": 14
    },
    "LowValue": {
        "Desc": "6 treasures worth 25 Pokos or fewer",
        "Diff": 20,
        "Synergy": ["Feather+Clover"]
    },
    "100Value": {
        "Desc": "12 treasures worth exactly 100 Pokos",
        "Diff": 25
    },
    
    //Spray-related goals
    "1Spicy": {
        "Desc": "Discover Spicy Sprays",
        "Diff": 2,
        "Synergy": ["Spicy"]
    },
    "1Bitter": {
        "Desc": "Discover Bitter Sprays",
        "Diff": 5,
        "Synergy": ["Bitter"]
    },
    "8Spicy": {
        "Desc": "8 Spicy Sprays",
        "Diff": 10,
        "Excludes": ["8Bitter"],
        "Synergy": ["Spicy"]
    },
    "8Bitter": {
        "Desc": "8 Bitter Sprays",
        "Diff": 15,
        "Excludes": ["8Spicy"],
        "Synergy": ["Bitter", "FCEarly"]
    },
    "5Spicy5Bitter": {
        "Desc": "5 Spicy Sprays and 5 Bitter Sprays",
        "Diff": 17,
        "Synergy": ["Spicy", "Bitter"]
    },
    
    //Misc goals
    "Extinction": {
        "Desc": "Get a non-Red Pikmin Extinction",
        "Diff": 5
    },
    "Hazards": {
        "Desc": "Trigger all 3 hazard cutscenes (Poison, Fire, and Water)",
        "Diff": 6
    },
    "Mold": {
        "Desc": "Destroy a Burgeoning Spiderwort mold",
        "Diff": 3,
        "Synergy": ["PPBridges"]
    },
    "Mature": {
        "Desc": "Have a Leaf Pikmin in the ground mature into a Flower Pikmin",
        "Diff": 7
    },
    "Bulbmin": {
        "Desc": "Turn 15 Bulbmin into other types",
        "Diff": 18,
        "Synergy": ["CPB", "FCLate", "SmC"]
    },
    "Poisoned": {
        "Desc": "Defeat 5 enemies by poisoning them",
        "Diff": 4
    },
    "BuriedPikmin": {
        "Desc": "Leave 10 Pikmin buried underground in a cave",
        "Diff": 8,
        "Synergy": ["CPB"]
    },
    
    
    //Awakening Wood Above Ground
    "AWEnter": {
        "Desc": "Enter all 4 caves in AW",
        "Diff": 10,
        "Excludes": ["VoREnter", "PPEnter"]
    },
    "AWWogpoles": {
        "Desc": "Defeat all 3 Wogpoles in AW",
        "Diff": 3
    },
    "AWMums": {
        "Desc": "Defeat all 3 Creeping Chrysanthemums in AW",
        "Diff": 8
    },
    "AWBridges": {
        "Desc": "Build all 3 bridges in AW",
        "Diff": 14,
        "Synergy": ["AWGasPipes", "AirBrake"]
    },
    "AWGasPipes": {
        "Desc": "Destroy all 6 gas pipes in AW",
        "Diff": 24,
        "Excludes": ["PoisonGates"],
        "Synergy": ["AWBridges"]
    },
    "PBulb": {
        "Desc": "Pilgrim Bulb (AW)",
        "Diff": 1
    },
    "AirBrake": {
        "Desc": "Air Brake (AW)",
        "Diff": 16,
        "Synergy": ["AWBridges"]
    },
    
    //Hole of Beasts
    "Empress": {
        "Desc": "Defeat an Empress Bulblax",
        "Diff": 2,
        "Excludes": ["Gauge", "Empire"],
        "Synergy": ["RushBoots"]
    },
    "HoBMitites": {
        "Desc": "Defeat all 10 Mitites on HoB4",
        "Diff": 1
    },
    "Gauge": {
        "Desc": "Prototype Detector",
        "Diff": 2,
        "Excludes": ["Empress", "Empire"],
        "Synergy": ["BuriedTreasure", "HoBClear", "EK"]
    },
    "HoBClear": {
        "Desc": "Complete HoB",
        "Diff": 7,
        "Synergy": ["Gauge"]
    },
    
    //White Flower Garden
    "TToadstool": {
        "Desc": "Toxic Toadstool (WFG4)",
        "Diff": 1
    },
    
    //Snagret Hole
    "SH4Enemy": {
        "Desc": "Defeat all enemies on SH4",
        "Diff": 15,
        "Synergy": ["SH"]
    },
    "Marbles": {
        "Desc": "Crystallized Telekinesis, Telepathy, and Clairvoyance (SH1, 4, and 5)",
        "Diff": 15,
        "Excludes": ["Capacitors"],
        "Synergy": ["SH"]
    },
    "Feather+Clover": {
        "Desc": "Leviathan Feather (SH1) and Science Project (SH6)",
        "Diff": 14,
        "Synergy": ["SH", "LowValue"]
    },
    "SH6": {
        "Desc": "Clear SH6",
        "Diff": 23,
        "Synergy": ["SH"]
    },
    "Pileated": {
        "Desc": "Justice Alloy",
        "Diff": 11,
        "Synergy": ["SH", "EK"]
    },
    
    //Bulblax Kingdom
    "CrystalCK": {
        "Desc": "Crystal Clover (BK1) and Crystal King (BK4)",
        "Diff": 11,
        "Synergy": ["BK"]
    },
    "RedCPB": {
        "Desc": "Make a Crimson Candypop Bud Wilt (BK6)",
        "Diff": 7,
        "Excludes": ["YellowCPB"],
        "Synergy": ["CPB"]
    },
    "Fossils": {
        "Desc": "Olimarnite Shell (BK3) and Colossal Fossil (BK6)",
        "Diff": 15,
        "Synergy": ["BK"]
    },
    "Emperor": {
        "Desc": "Forged Courage (BK7)",
        "Diff": 11,
        "Excludes": ["Empire"],
        "Synergy": ["BK", "EK"]
    },
    
    //Valley of Repose Above Ground
    "VoREnter": {
        "Desc": "Enter all 3 caves in VoR",
        "Diff": 11,
        "Excludes": ["AWEnter", "PPEnter"]
    },
    "VoRACB": {
        "Desc": "Defeat all 3 Cannon Beetles in VoR",
        "Diff": 14,
        "Synergy": ["FarVoR", "ACBs"]
    },
    "VoRSnagret": {
        "Desc": "Defeat the Burrowing Snagret in VoR",
        "Diff": 6,
        "Excludes": ["Snagrets"]
    },
    "VoRPoisonGate": {
        "Desc": "Destroy the poison gate in VoR",
        "Diff": 15,
        "Excludes": ["PoisonGates"]
    },
    "Ursidae": {
        "Desc": "Fossilized Ursidae (VoR)",
        "Diff": 9,
        "Synergy": ["FarVoR"]
    },
    "TempMech": {
        "Desc": "Temporal Mechanism (VoR)",
        "Diff": 19,
        "Excludes": ["Bulblaxes"],
        "Synergy": ["FarVoR"]
    },
    "Crown": {
        "Desc": "Unspeakable Wonder (VoR)",
        "Diff": 19,
        "Synergy": ["FarVoR"]
    },
    
    //Subterranean Complex
    "SCxCPB": {
        "Desc": "Make 5 Candypop Buds in SCx wilt",
        "Diff": 16,
        "Synergy": ["CPB"]
    },
    "Groinks": {
        "Desc": "Defeat 2 Gatling Groinks",
        "Diff": 13,
        "Excludes": ["ThirstActivator", "SCx7Bombs"],
        "Synergy": ["Capacitors"]
    },
    "SCx3": {
        "Desc": "Clear SCx3",
        "Diff": 16,
        "Synergy": ["SCxEarly", "ACBs"]
    },
    "SCx5": {
        "Desc": "Clear SCx5",
        "Diff": 16,
        "Synergy": ["SCxLate"]
    },
    "SCx6Enemy": {
        "Desc": "Defeat all enemies on SCx6",
        "Diff": 17,
        "Excludes": ["SCx6"],
        "Synergy": ["SCxLate"]
    },
    "SCx6": {
        "Desc": "Clear SCx6",
        "Diff": 19,
        "Excludes": ["SCx6Enemy"],
        "Synergy": ["SCxLate"]
    },
    "SCx7Bombs": {
        "Desc": "Activate every dormant Bomb Rock on SCx7",
        "Diff": 12,
        "Excludes": ["Groinks", "ThirstActivator"]
    },
    "ThirstActivator": {
        "Desc": "Thirst Activator [US] / Perfect Container [PAL] (SCx7)",
        "Diff": 11,
        "Excludes": ["Groinks", "SCx7Bombs"],
        "Synergy": ["SCxLate"]
    },
    "Capacitors": {
        "Desc": "Network Mainbrain, Vacuum Processor, and Indomitable CPU (SCx2, 6, and 7)",
        "Diff": 18,
        "Excludes": ["Marbles"],
        "Synergy": ["SCxLate", "Groinks"]
    },
    "MAL": {
        "Desc": "Stellar Orb (SCx9)",
        "Diff": 20,
        "Synergy": ["EK", "SCxLate"]
    },
    
    //Frontier Cavern
    "FCCPB": {
        "Desc": "Make 4 Candypop Buds in FC wilt",
        "Diff": 13,
        "Synergy": ["CPB"]
    },
    "FC3": {
        "Desc": "Clear FC3",
        "Diff": 15,
        "Excludes": ["Bells"],
        "Synergy": ["FCEarly"]
    },
    "FC4Enemy": {
        "Desc": "Defeat all enemies on FC4",
        "Diff": 17,
        "Excludes": ["Ornaments"],
        "Synergy": ["FCEarly"]
    },
    "Ornaments": {
        "Desc": "Essential Furnishing (FC1) and Innocence Lost (FC4)",
        "Diff": 11,
        "Excludes": ["FC4Enemy"],
        "Synergy": ["FCEarly"]
    },
    "FC6": {
        "Desc": "Clear FC6",
        "Diff": 21,
        "Synergy": ["FCLate"]
    },
    "Bells": {
        "Desc": "Danger Chime (FC3) and Spouse Alert (FC7)",
        "Diff": 14,
        "Excludes": ["FC3"],
        "Synergy": ["FCLate"]
    },
    "RushBoots": {
        "Desc": "Repugnant Appendage (FC8)",
        "Diff": 20,
        "Synergy": ["Empress", "Empire", "EK", "FCLate"]
    },
    
    //Perplexing Pool Above Ground
    "1Y": {
        "Desc": "Discover Yellow Pikmin",
        "Diff": 1,
        "Excludes": ["60Y"],
        "Synergy": ["5Pellet", "10Pellet"]
    },
    "PPEnter": {
        "Desc": "Enter all 4 caves in PP",
        "Diff": 20,
        "Excludes": ["AWEnter", "VoREnter"]
    },
    "PPCrawmads": {
        "Desc": "Defeat both Hermit Crawmads in PP",
        "Diff": 9
    },
    "PPLake": {
        "Desc": "Drain the Main Lake in PP",
        "Diff": 11
    },
    "PPBridges": {
        "Desc": "Build all 3 bridges in PP",
        "Diff": 13,
        "Synergy": ["Mold"]
    },
    "Scourge": {
        "Desc": "Impediment Scourge (PP)",
        "Diff": 7,
    },
    "AM": {
        "Desc": "Aquatic Mine (PP)",
        "Diff": 6,
        "Excludes": ["10Pellet"]
    },
    "OI": {
        "Desc": "Optical Illustration [US] / Abstract Masterpiece [PAL]",
        "Diff": 23,
        "Synergy": ["ElecGates"]
    },
    "OnionReplica": {
        "Desc": "Onion Replica (PP)",
        "Diff": 20
    },
    
    //Citadel of Spiders
    "CoS4Enemy": {
        "Desc": "Defeat all enemies on CoS4",
        "Diff": 14,
        "Synergy": ["CoS"]
    },
    "BLL": {
        "Desc": "The Key (CoS5)",
        "Diff": 10,
        "Synergy": ["CoS"]
    },
    
    //Glutton's Kitchen
    "Breadbugs": {
        "Desc": "Defeat 5 Breadbugs",
        "Diff": 18,
        "Synergy": ["GBB"]
    },
    "YellowCPB": {
        "Desc": "Make a Golden Candypop Bud wilt (GK3)",
        "Diff": 9,
        "Excludes": ["RedCPB"],
        "Synergy": ["CPB"]
    },
    "GK4": {
        "Desc": "Clear GK4",
        "Diff": 15,
        "Synergy": ["GK"]
    },
    "GBB": {
        "Desc": "Dream Material (GK6)",
        "Diff": 12,
        "Synergy": ["GK", "Food", "EK", "Breadbugs"]
    },
    
    //Submerged Castle
    "SmC3": {
        "Desc": "Clear SmC3",
        "Diff": 22,
        "Synergy": ["SmC"]
    },
    "SmC4": {
        "Desc": "Clear SmC4",
        "Diff": 24,
        "Synergy": ["SmC"]
    },
    "Wraith": {
        "Desc": "Professional Noisemaker (SmC5)",
        "Diff": 21,
        "Synergy": ["SmC", "EK"]
    },
    
    //Shower Room
    "Jellyfloats": {
        "Desc": "Defeat 4 Jellyfloats (of any kind)",
        "Diff": 18
    },
    "MirroredStage": {
        "Desc": "Mirrored Stage (SR3)",
        "Diff": 18,
        "Excludes": ["SR3"],
        "Synergy": ["SREarly"]
    },
    "SR3": {
        "Desc": "Clear SR3",
        "Diff": 19,
        "Excludes": ["MirroredStage"],
        "Synergy": ["SREarly"]
    },
    "Repository": {
        "Desc": "Endless Respository [US] / Permanent Container [PAL] (SR5)",
        "Diff": 21,
        "Excludes": ["SR5"],
        "Synergy": ["SRLate"]
    },
    "SR5": {
        "Desc": "Clear SR5",
        "Diff": 25,
        "Excludes": ["Repository"],
        "Synergy": ["SRLate"]
    },
    "SR6": {
        "Desc": "Clear SR6",
        "Diff": 23,
        "Synergy": ["SRLate"]
    },
    "Bloyster": {
        "Desc": "Amplified Amplifier (SR7)",
        "Diff": 19,
        "Synergy": ["SRLate", "EK"]
    },
    
    //Multi-cave / area goals
    "Chance": {
        "Desc": "Luck Wafer (HoB4) and Chance Totem (AW)",
        "Diff": 3,
        "Synergy": ["HoB"]
    },
    "Bottlecaps": {
        "Desc": "Quenching Emblem (EC1) and Drought Ender (WFG2)",
        "Diff": 3
    },
    "Strawberry": {
        "Desc": "Sunseed Berry (AW) and Combustion Berry (SH2)",
        "Diff": 4,
        "Synergy": ["SH"]
    },
    "Tape": {
        "Desc": "Superstick Textile (WFG3) and Exhausted Superstick (SCx1)",
        "Diff": 9,
        "Synergy": ["SCxEarly"]
    },
    "Gems": {
        "Desc": "Petrified Heart (WFG2), Tear Stone (BK2), and Regal Diamond (CoS5)",
        "Diff": 17,
        "Synergy": ["CoS", "BK"]
    },
    "Truffles": {
        "Desc": "King of Sweets (CoS4), Diet Doomer (SmC1), and Pale Passion (SmC4)",
        "Diff": 24,
        "Excludes": ["Batteries"],
        "Synergy": ["CoS", "SmC"]
    },
    "Shells": {
        "Desc": "Memorial Shell (CoS3) and Scrumptious Shell (SR3)",
        "Diff": 20,
        "Excludes": ["Ducks"],
        "Synergy": ["CoS", "SREarly"]
    },
    "Ducks": {
        "Desc": "Paradoxical Enigma (CoS2) and Rubber Ugly (SR6)",
        "Diff": 22,
        "Excludes": ["Shells"],
        "Synergy": ["CoS", "SRLate"]
    },
    "Batteries": {
        "Desc": "Durable Energy Cell (SR2) and Proton AA (SmC4)",
        "Diff": 25,
        "Excludes": ["Truffles"],
        "Synergy": ["SREarly", "SmC"]
    }
};
