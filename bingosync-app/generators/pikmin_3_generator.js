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
            bingoList[key].Diff = 0;
        }
        
        if (!bingoList[key].hasOwnProperty("Types")) {
            bingoList[key].Types = [];
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
    
    //Create counts for all types
    var types = { };
    for (const key of Object.keys(bingoTypes)) {
        if (!bingoTypes[key].hasOwnProperty("Max")) {
            bingoTypes.key.Max = 5;
        }
        types[key] = bingoTypes[key].Max;
    }

    //Seed the random
    seed = Math.seedrandom(opts.seed || Math.ceil(999999 * Math.random()));
    console.log(seed);

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
        var diffIndex = 0;
        if (goal.Diff == 0) {
            diffIndex = chosenGoals.indexOf("");
        } else {
            diffIndex = bingoBoard.indexOf(diff);
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
        }
        chosenGoals[diffIndex] = { "name": goal.Desc };

        //remove the chosen goal and any duplicates of it completely
        for (var j = 0; j < choosable.length; j++) {
            if (choosable[j] == goal.name) {
                choosable.splice(j, 1);
            }
        }
        //remove the goal's difficulty from unchosenDiffs[]
        var unchosenDiffIndex = unchosenDiffs.indexOf(goal.Diff);
        if (goal.Diff == 0) {
            unchosenDiffIndex = unchosenDiffs.indexOf(bingoBoard[diffIndex]);
        }
        if (unchosenDiffIndex != -1) {
            unchosenDiffs.splice(unchosenDiffIndex, 1);
        }
        
        //increment type counters if relevant, also remove other goals of the same type if relevant
        for (var j = 0; j < goal.Types.length; j++) {
            types[goal.Types[j]]--;
            if (types[goal.Types] <= 0) {
                for (var k = 0; k < choosable.length; k++) {
                    for (var l = 0; l < bingoList[choosable[k]].Types.length; l++) {
                        if (bingoList[choosable[k]].Types[l] === goal.Types[j]) {
                            unchoosable = unchoosable.concat(choosable.splice(k, 1));
                            k--;
                            break;
                        }
                    }
                }
            }
        }

        //remove all goals of the same difficulty from choosable[], also remove excluded goals if relevant
        for (var j = 0; j < choosable.length; j++) {
            if (bingoList[choosable[j]].Diff == goal.Diff && goal.Diff != 0) {
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

var bingoTypes = { 
    "Tiebreaker": {"Max": 1}, //4 Total
    "FO": {"Max": 3}, //8 Total
    "Revisit": {"Max": 5}, //12 Total
    "SpecificFruit": {"Max": 5}, //22 Total
    "FC": {"Max": 1} //4 Total
};

var bingoList = { 
    //Pikmin growth
    "1Pellet": {
        "Desc": "Collect a 1-Pellet of each color",
        "Diff": 2
    },
    "5Pellet": {
        "Desc": "Collect a 5-Pellet of each color",
        "Diff": 4
    },
    "100R": {
        "Desc": "100 Red Pikmin",
        "Diff": 3
    },
    "100Ro": {
        "Desc": "100 Rock Pikmin",
        "Diff": 5
    },
    "100Y": {
        "Desc": "100 Yellow Pikmin",
        "Diff": 6
    },
    "100W": {
        "Desc": "100 Winged Pikmin",
        "Diff": 8
    },
    "100B": {
        "Desc": "100 Blue Pikmin",
        "Diff": 12
    },
    "40Each": {
        "Desc": "40 Pikmin of each color",
        "Diff": 4,
        "Excludes": ["250Total"]
    },
    "250Total": {
        "Desc": "250 total Pikmin",
        "Diff": 10,
        "Excludes": ["40Each"]
    },
    "1000Total": {
        "Desc": "1000 total Pikmin",
        "Diff": 25,
        "Types": ["Tiebreaker"]
    },
    
    //Candypops, Sprays, Flowers
    "5CPB": {
        "Desc": "Make 5 Candypop Buds wilt",
        "Diff": 9
    },
    "8CPB": {
        "Desc": "Make 8 Candypop Buds wilt",
        "Diff": 16,
        "Types": ["Revisit"]
    },
    "5Spicy": {
        "Desc": "5 Spicy Sprays",
        "Diff": 8,
        "Excludes": ["8Spicy"]
    },
    "8Spicy": {
        "Desc": "8 Spicy Sprays",
        "Diff": 12,
        "Excludes": ["5Spicy"]
    },
    "Mature": {
        "Desc": "Have a Leaf Pikmin in the ground mature into a Flower Pikmin",
        "Diff": 1
    },
    "100Sprouts": {
        "Desc": "Have 100 sprouts out on the field at once",
        "Diff": 18
    },
    
    //Obstacles
    "4EGate": {
        "Desc": "Destroy 4 Electric Gates",
        "Diff": 11,
        "Excludes": ["6EGate"]
    },
    "6EGate": {
        "Desc": "Destroy 6 Electric Gates",
        "Diff": 20,
        "Excludes": ["4EGate"]
    },
    "8DirtWall": {
        "Desc": "Destroy 8 Dirt Walls",
        "Diff": 1,
        "Excludes": ["11DirtWall"]
    },
    "11DirtWall": {
        "Desc": "Destroy 11 Dirt Walls",
        "Diff": 9,
        "Excludes": ["8DirtWall"]
    },
    "2BombWall": {
        "Desc": "Destroy 2 Reinforced Walls",
        "Diff": 11,
        "Excludes": ["4BombWall"]
    },
    "4BombWall": {
        "Desc": "Destroy 4 Reinforced Walls",
        "Diff": 23,
        "Excludes": ["2BombWall"]
    },
    "3Clipboard": {
        "Desc": "Lift 3 Clipboards",
        "Diff": 8
    },
    "5Bag": {
        "Desc": "Push 5 Paper Bags",
        "Diff": 7,
        "Excludes": ["6Bag"]
    },
    "6Bag": {
        "Desc": "Push all 6 Paper Bags",
        "Diff": 11,
        "Types": ["FO"],
        "Excludes": ["5Bag"]
    },
    "4Mound": {
        "Desc": "Dig up 4 Dirt Mounds",
        "Diff": 10,
        "Excludes": ["7Mound"]
    },
    "7Mound": {
        "Desc": "Dig up 7 Dirt Mounds",
        "Diff": 17,
        "Excludes": ["4Mound"]
    },
    "HayRamp": {
        "Desc": "Build 1 Hay Ramp",
        "Diff": 6,
        "Excludes": ["HayRamp-NoSwap"]
    },
    "5Stick": {
        "Desc": "Unearth all 5 Climbing Sticks",
        "Diff": 5
    },
    "12Electrode": {
        "Desc": "Activate all 12 Electrodes",
        "Diff": 24,
        "Types": ["FO"]
    },
    "5Bridge": {
        "Desc": "Build 5 Bridges",
        "Diff": 14,
        "Excludes": ["8Bridge"]
    },
    "8Bridge": {
        "Desc": "Build 8 Bridges",
        "Diff": 21,
        "Excludes": ["5Bridge", "10Bridge"]
    },
    "10Bridge": {
        "Desc": "Build 10 Bridges",
        "Diff": 23,
        "Excludes": ["8Bridge"]
    },
    "DTMainBridge": {
        "Desc": "Build the main bridge in Distant Tundra",
        "Diff": 13
    },
    "GoHPot": {
        "Desc": "Build the pot in Garden of Hope",
        "Diff": 16,
        "Excludes": ["Mireclops-NoOoB"]
    },
    "TRElectrode": {
        "Desc": "Activate the Electrode in Twilight River",
        "Diff": 7
    },
    "HayRamp-NoSwap": {
        "Desc": "Build the Hay Ramp in Distant Tundra without swapping captains",
        "Diff": 9,
        "Excludes": ["HayRamp"]
    },
    "TRBridges": {
        "Desc": "Build both bridges in Twilight River",
        "Diff": 18,
        "Excludes": ["Wings-NoOoB", "Maestro-NoOoB"]
    },
    "DTDirtWall": {
        "Desc": "Destroy all 3 Dirt Walls in Distant Tundra",
        "Diff": 15,
        "Types": ["Revisit"]
    },
    "FODirtWall": {
        "Desc": "Destroy all 5 Dirt Walls in Formidable Oak",
        "Diff": 22,
        "Types": ["FO"],
        "Excludes": ["FOChase"]
    },
    
    //Get to places No OoB
    "Meerslug-NoOoB": {
        "Desc": "Get to the Sandbelching Meerslug without going out of bounds",
        "Diff": 10
    },
    "Wings-NoOoB": {
        "Desc": "Get to the Winged Onion without going out of bounds",
        "Diff": 16,
        "Excludes": ["TRBridges"]
    },
    "Maestro-NoOoB": {
        "Desc": "Get to the Scornet Maestro without going out of bounds",
        "Diff": 14,
        "Excludes": ["TRBridges"]
    },
    "Mireclops-NoOoB": {
        "Desc": "Get to the Quaggled Mireclops without going out of bounds",
        "Diff": 12,
        "Excludes": ["GoHPot"]
    },
    
    //Battle Enemies!™ with conditions
    "Phosbat-NoMainLight": {
        "Desc": "Defeat the Vehemoth Phosbat without activating the main light",
        "Diff": 21,
        "Excludes": ["Phosbat-NoElectrode"]
    },
    "Phosbat-NoElectrode": {
        "Desc": "Defeat the Vehemoth Phosbat without activating any Electrodes",
        "Diff": 24,
        "Excludes": ["Phosbat-NoMainLight"]
    },
    "Meerslug-BombsOnly": {
        "Desc": "Defeat the Sandbelching Meerslug using only Bomb Rocks",
        "Diff": 23
    },
    "Maestro-NoSwap": {
        "Desc": "Defeat the Scornet Maestro without switching captains",
        "Diff": 13
    },
    "Mireclops-NoWings": {
        "Desc": "Defeat the Quaggled Mireclops without Winged Pikmin",
        "Diff": 20,
        "Excludes": ["Mireclops-RocksOnly"]
    },
    "Mireclops-RocksOnly": {
        "Desc": "Defeat the Quaggled Mireclops with only Rock Pikmin",
        "Diff": 24,
        "Excludes": ["Mireclops-NoWings"]
    },
    "Wraith-NoElemental": {
        "Desc": "Defeat the Plasm Wraith without destroying any Elemental Plasms",
        "Diff": 25,
        "Types": ["Tiebreaker","FO"],
        "Excludes": ["Wraith"]
    },
    "Snagret-NoWingsBombs": {
        "Desc": "Defeat a Burrowing Snagret without Winged Pikmin or Bomb Rocks",
        "Diff": 17,
        "Excludes": ["MiniBoss"]
    },
    "Bulbear-NoBombsSprays": {
        "Desc": "Defeat a Bulbear without Bomb Rocks or Spicy Sprays",
        "Diff": 16,
        "Types": ["Revisit"]
    },
    "Crushblat-NoBombs": {
        "Desc": "Defeat a Calcified Crushblat without Bomb Rocks",
        "Diff": 16,
        "Types": ["Revisit"]
    },
    "ACL-NoRocks": {
        "Desc": "Defeat an Armored Cannon Larva without Rock Pikmin",
        "Diff": 10,
        "Excludes": ["ACL-Collect"]
    },
    "Blowhog-NoWings": {
        "Desc": "Defeat a Puffy Blowhog without Winged Pikmin",
        "Diff": 8
    },
    "Skutterchuck-Suicide": {
        "Desc": "Defeat 2 Skutterchucks without any Pikmin",
        "Diff": 2
    },
    "Blowhog-NoReds": {
        "Desc": "Defeat 2 Fiery Blowhogs without Red Pikmin",
        "Diff": 1
    },
    "OBulborb-NoBombs": {
        "Desc": "Defeat 3 Orange Bulborbs in Twilight River without Bomb Rocks",
        "Diff": 11,
        "Excludes": ["OBulborb"]
    },
    
    //Battle Enemies!™
    "MiniBoss": {
        "Desc": "Defeat 3 mini-bosses",
        "Diff": 15,
        "Excludes": ["SLL", "Snagret-NoWingsBombs"]
    },
    "Bloyster": {
        "Desc": "Defeat 2 Toady Bloysters",
        "Diff": 17,
        "Types": ["Revisit"]
    },
    "Crab": {
        "Desc": "Defeat 2 Peckish Aristocrabs",
        "Diff": 16,
        "Excludes": ["Crab-Collect"]
    },
    "Sputtlefish": {
        "Desc": "Defeat 3 Sputtlefish",
        "Diff": 10
    },
    "Wollywog": {
        "Desc": "Defeat 4 Yellow Wollywogs",
        "Diff": 11,
        "Excludes": ["Wollywog-Collect"]
    },
    "Arctic": {
        "Desc": "Defeat 4 Arctic Cannon Larvae",
        "Diff": 11,
        "Excludes": ["Arctic-Collect"]
    },
    "OBulborb": {
        "Desc": "Defeat 4 Orange Bulborbs",
        "Diff": 6,
        "Excludes": ["OBulborb-NoBombs"]
    },
    "Wogpole": {
        "Desc": "Defeat 5 Wogpoles",
        "Diff": 15
    },
    "Joustmite": {
        "Desc": "Defeat 5 Joustmites (of any kind)",
        "Diff": 8
    },
    "Blowhog": {
        "Desc": "Defeat 5 Fiery Blowhogs",
        "Diff": 10
    },
    "Dumple": {
        "Desc": "Defeat 7 Water Dumples",
        "Diff": 12,
        "Types": ["Revisit"]
    },
    "Sheargrub": {
        "Desc": "Defeat 8 Swarming Sheargrubs",
        "Diff": 4
    },
    "Shearwig": {
        "Desc": "Defeat a Shearwig",
        "Diff": 17,
        "Types": ["FO"]
    },
    "SLL": {
        "Desc": "Defeat 2 Shaggy Long Legs",
        "Diff": 19,
        "Excludes": ["MiniBoss"]
    },
    "Wraith": {
        "Desc": "Defeat the Plasm Wraith",
        "Diff": 22,
        "Types": ["FO"],
        "Excludes": ["Wraith-NoElemental"]
    },
    "Illusion": {
        "Desc": "Defeat every enemy illusion in Formidable Oak",
        "Diff": 25,
        "Types": ["Tiebreaker", "FO"],
        "Excludes": ["FOChase"]
    },
    "Wollywog-Collect": {
        "Desc": "Collect 2 Yellow Wollywogs",
        "Diff": 1,
        "Excludes": ["Wollywog"]
    },
    "Arctic-Collect": {
        "Desc": "Collect an Arctic Cannon Larva",
        "Diff": 3,
        "Excludes": ["Arctic"]
    },
    "Mawdad-Collect": {
        "Desc": "Collect the Armored Mawdad",
        "Diff": 4,
        "Excludes": ["Dragonfruit"]
    },
    "Meerslug-Collect": {
        "Desc": "Collect the Sandbelching Meerslug",
        "Diff": 6,
        "Excludes": ["Watermelon"]
    },
    "ACL-Collect": {
        "Desc": "Collect an Armored Cannon Larva",
        "Diff": 9,
        "Excludes": ["ACL-NoRocks"]
    },
    "Scornet-Collect": {
        "Desc": "Collect every Scornet dropped by the Scornet Maestro",
        "Diff": 15,
        "Excludes": ["Papaya"]
    },
    "Crab-Collect": {
        "Desc": "Collect 2 Peckish Aristocrabs",
        "Diff": 19,
        "Types": ["Revisit"],
        "Excludes": ["Crab"]
    },
    
    //Collect Treasure!™ with conditions
    "GoHGrapefruit-NoWings": {
        "Desc": "Astringent Clump in Garden of Hope without Winged Pikmin",
        "Diff": 14
    },
    "TWStarfruit-NoWingsYellows": {
        "Desc": "Stellar Extrusion in Tropical Wilds without Winged or Yellow Pikmin",
        "Diff": 19
    },
    "TRPersimmon-NoGate": {
        "Desc": "Portable Sunset in Twilight River without lifting the Bamboo Gate",
        "Diff": 7
    },
    "TWBanana-NoBombs": {
        "Desc": "Slapstick Crescent in Tropical Wilds without Bomb Rocks",
        "Diff": 12,
        "Types": ["Revisit"]
    },
    
    //Collect Treasure!™ - general
    "10Total": {
        "Desc": "10 total fruits",
        "Diff": 3,
        "Excludes": ["15Total"]
    },
    "15Total": {
        "Desc": "15 total fruits",
        "Diff": 10,
        "Excludes": ["10Total", "20Total", "3Each"]
    },
    "20Total": {
        "Desc": "20 total fruits",
        "Diff": 14,
        "Excludes": ["15Total", "25Total", "5Each"]
    },
    "25Total": {
        "Desc": "25 total fruits",
        "Diff": 18,
        "Excludes": ["20Total", "30Total"]
    },
    "30Total": {
        "Desc": "30 total fruits",
        "Diff": 22,
        "Excludes": ["25Total"]
    },
    "5Unique": {
        "Desc": "5 unique fruits",
        "Diff": 5,
        "Excludes": ["10Unique"]
    },
    "10Unique": {
        "Desc": "10 unique fruits",
        "Diff": 13,
        "Excludes": ["5Unique", "15Unique"]
    },
    "15Unique": {
        "Desc": "15 unique fruits",
        "Diff": 17,
        "Excludes": ["10Unique", "20Unique"]
    },
    "20Unique": {
        "Desc": "20 unique fruits",
        "Diff": 21,
        "Excludes": ["15Unique", "25Unique"]
    },
    "25Unique": {
        "Desc": "25 unique fruits",
        "Diff": 25,
        "Excludes": ["20Unique"]
    },
    "TWHalf": {
        "Desc": "8 fruits in Tropical Wilds",
        "Diff": 15
    },
    "TWFC": {
        "Desc": "All 18 fruits in Tropical Wilds",
        "Diff": 25,
        "Types": ["FC"]
    },
    "GoHHalf": {
        "Desc": "8 fruits in Garden of Hope",
        "Diff": 11
    },
    "GoHFC": {
        "Desc": "All 17 fruits in Garden of Hope",
        "Diff": 23,
        "Types": ["FC"]
    },
    "DTHalf": {
        "Desc": "7 fruits in Distant Tundra",
        "Diff": 13
    },
    "DTFC": {
        "Desc": "All 16 fruits in Distant Tundra",
        "Diff": 24,
        "Types": ["FC"]
    },
    "TRHalf": {
        "Desc": "7 fruits in Twilight River",
        "Diff": 9
    },
    "TRFC": {
        "Desc": "All 15 fruits in Twilight River",
        "Diff": 22,
        "Types": ["FC"]
    },
    "5Any": {
        "Desc": "5 fruits in any one area",
        "Diff": 2
    },
    "3Each": {
        "Desc": "3 fruits in each area",
        "Diff": 12,
        "Excludes": ["15Total", "5Each"]
    },
    "5Each": {
        "Desc": "5 fruits in each area",
        "Diff": 20,
        "Excludes": ["20Total", "3Each"]
    },
    
    //Collect Treasure!™ - specific
    "PlumUme": {
        "Desc": "5 Lesser Mock Bottoms and/or Searing Acidshocks",
        "Diff": 18,
        "Types": ["SpecificFruit"]
    },
    "Sunseed": {
        "Desc": "4 Sunseed Berries",
        "Diff": 9,
        "Types": ["SpecificFruit"]
    },
    "LemonLime": {
        "Desc": "4 Face Wrinklers and/or Zest Bombs",
        "Diff": 14,
        "Types": ["SpecificFruit"]
    },
    "Gaggle": {
        "Desc": "4 Juicy Gaggles",
        "Diff": 12,
        "Types": ["SpecificFruit"]
    },
    "Dreamdrop": {
        "Desc": "4 Velvety Dreamdrops",
        "Diff": 21,
        "Types": ["Revisit", "SpecificFruit"]
    },
    "Citrus": {
        "Desc": "3 Citrus Lumps",
        "Diff": 17,
        "Types": ["SpecificFruit"]
    },
    "Grenade": {
        "Desc": "3 Cupid's Grenades",
        "Diff": 16,
        "Types": ["Revisit", "SpecificFruit"]
    },
    "Grapes": {
        "Desc": "3 sets of Dawn and/or Dusk Pustules",
        "Diff": 11,
        "Types": ["SpecificFruit"]
    },
    "Kiwi": {
        "Desc": "3 Disguised Delicacies and/or Blonde Impostors",
        "Diff": 20,
        "Types": ["SpecificFruit"]
    },
    "Dapper": {
        "Desc": "3 Dapper Blobs",
        "Diff": 19,
        "Types": ["SpecificFruit"]
    },
    "Avocado": {
        "Desc": "2 Scaly Custards",
        "Diff": 15,
        "Types": ["SpecificFruit"]
    },
    "Fig": {
        "Desc": "2 Delectable Bouquets",
        "Diff": 13,
        "Types": ["SpecificFruit"]
    },
    "Airhead": {
        "Desc": "2 Pocked Airheads",
        "Diff": 10,
        "Types": ["SpecificFruit"]
    },
    "BossDrops": {
        "Desc": "4 fruits dropped by bosses and/or mini-bosses",
        "Diff": 14
    },
    "Sniffer": {
        "Desc": "Tremendous Sniffer",
        "Diff": 12,
        "Types": ["SpecificFruit"]
    },
    "Deluge": {
        "Desc": "Crunchy Deluge",
        "Diff": 16,
        "Types": ["Revisit", "SpecificFruit"]
    },
    "Peach": {
        "Desc": "Mock Bottom",
        "Diff": 15,
        "Types": ["Revisit", "SpecificFruit"]
    },
    "Apple": {
        "Desc": "Insect Condo",
        "Diff": 9,
        "Types": ["SpecificFruit"],
        "Excludes": ["ScorchGuard"]
    },
    "Dragonfruit": {
        "Desc": "Fire-Breathing Feast",
        "Diff": 8,
        "Types": ["SpecificFruit"],
        "Excludes": ["Mawdad-Collect"]
    },
    "Mango": {
        "Desc": "Heroine's Tear",
        "Diff": 6,
        "Types": ["SpecificFruit"]
    },
    "Watermelon": {
        "Desc": "Crimson Banquet",
        "Diff": 13,
        "Types": ["SpecificFruit"],
        "Excludes": ["Meerslug-Collect"]
    },
    "Papaya": {
        "Desc": "Seed Hive",
        "Diff": 10,
        "Types": ["SpecificFruit"],
        "Excludes": ["Scornet-Collect"]
    },
    "Moon": {
        "Desc": "Wayward Moon",
        "Diff": 11,
        "Types": ["SpecificFruit"],
        "Excludes": ["FOUnlock"]
    },
    
    //Misc. goals
    "MetalSuitZ": {
        "Desc": "Metal Suit Z",
        "Diff": 5
    },
    "AntiElectrifier": {
        "Desc": "Anti-Electrifier",
        "Diff": 9
    },
    "ScorchGuard": {
        "Desc": "Scorch Guard",
        "Diff": 7,
        "Excludes": ["Apple"]
    },
    "3Upgrade": {
        "Desc": "3 captain upgrades",
        "Diff": 10,
        "Excludes": ["4Upgrade"]
    },
    "4Upgrade": {
        "Desc": "4 captain upgrades",
        "Diff": 12,
        "Excludes": ["3Upgrade"]
    },
    "FOUnlock": {
        "Desc": "Unlock Formidable Oak",
        "Diff": 11,
        "Excludes": ["Moon"]
    },
    "BlueJuice": {
        "Desc": "Blue Juice: Mix a Juicy Gaggle with a Zest Bomb",
        "Diff": 8
    },
    "Drawings": {
        "Desc": "View 10 Pikmin drawings with the KopPad's camera",
        "Diff": 12
    },
    "19Bombs": {
        "Desc": "Have 19 Bomb Rocks in the party at once",
        "Diff": 10
    },
    "FOChase": {
        "Desc": "Complete the chase section of Formidable Oak without Winged Pikmin",
        "Diff": 24,
        "Types": ["FO", "Tiebreaker"],
        "Excludes": ["FODirtWall", "Illusion"]
    }
};
