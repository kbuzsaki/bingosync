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

//synerGen: a bingo generator based on SRLv5 and Hollow Knight's generators.
bingoGenerator = function(bingoList, opts) {

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
        if (rf == 1)
            template.reverse();

        function inverse(t) { //inverts the table
            var s = [];
            for (var j = 0; j < t.length; j++)
                s.push([]);
            for (var j = 0; j < t.length; j++) {
                for (var k = 0; k < t.length; k++)
                    s[j][k] = t[k][j];
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

            if (!bingoList[key].hasOwnProperty("Desc"))
                bingoList[key].Desc = "#!#" + key + "#!#";

            if (!bingoList[key].hasOwnProperty("Diff"))
                bingoList[key].Diff = 0;

            if (!bingoList[key].hasOwnProperty("Types"))
                bingoList[key].Types = [];

            if (!bingoList[key].hasOwnProperty("Excludes"))
                bingoList[key].Excludes = [];

            if (!bingoList[key].hasOwnProperty("Synergy"))
                bingoList[key].Synergy = [];

            if (!bingoList[key].hasOwnProperty("Score"))
                bingoList[key].Score = 0;
        }
    }

    //Make sure everything exists that should, pull out maxScore and bingoTypes from bingoList
    var bingoTypes = bingoList.bingoTypes;
    delete bingoList.bingoTypes;
    var maxScore = bingoList.maxScore;
    delete bingoList.maxScore;
    preprocessBingoList(bingoList);

    //Separate goals into currently choosable / unchoosable (all goals are choosable at the start)
    var choosable = [];
    var unchoosable = [];
    for (const key of Object.keys(bingoList))
        choosable.push(key);

    //Create counts for all types
    var types = { };
    for (const key of Object.keys(bingoTypes)) {
        if (!bingoTypes[key].hasOwnProperty("Max"))
            bingoTypes[key].Max = 5;
        types[key] = bingoTypes[key].Max;
    }

    //Seed the random
    seed = Math.seedrandom(opts.seed || Math.ceil(999999 * Math.random()));
    //console.log(seed);

    //create a 1-dimensional array from the 2-dimensional matrix magicSquare[][]
    var square = magicSquare();
    var bingoBoard = square[0].concat(square[1], square[2], square[3], square[4]);

    var unchosenDiffs = bingoBoard.slice();
    var chosenGoals = [];
    for (var i = 1; i <= 25; i++)
        chosenGoals.push("");

    for (var i = 1; i <= 25; i++) {

        //this is necessary on the edge case that all the exclusions and difficulties wind up eliminating every goal
        if (choosable.length == 0) {
            var newChoosableDiffs = [];
            //add all goals with difficulty one more or less than any of the remaining difficulties back into choosable[]
            for (var j of unchosenDiffs) {
                var plusOne = j + 1;
                var minusOne = j - 1;
                if (!newChoosableDiffs.includes(plusOne) && plusOne <= 25)
                    newChoosableDiffs.push(plusOne);
                if (!newChoosableDiffs.includes(minusOne) && minusOne >= 1)
                    newChoosableDiffs.push(minusOne);
            }
            for (var k = 0; k < unchoosable.length; k++) {
                if (newChoosableDiffs.includes(bingoList[unchoosable[k]].Diff)) {
                    choosable = choosable.concat(unchoosable.splice(k, 1));
                    k--;
                }
            }
            //if choosable[] is still empty, just move everything from unchoosable[] back
            if (choosable.length == 0) {
                while (unchoosable.length > 0)
                    choosable = choosable.concat(unchoosable.splice(0, 1));
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
            if (types[goal.Types[j]] <= 0) {
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

        //decrement score
        maxScore = maxScore - goal.Score;
        //remove all goals of the same difficulty from choosable[], also remove excluded goals and goals with too high score if relevant
        for (var j = 0; j < choosable.length; j++) {
            if (bingoList[choosable[j]].Diff == goal.Diff && goal.Diff != 0) {
                unchoosable = unchoosable.concat(choosable.splice(j, 1));
                j--;
                continue;
            }
            if (bingoList[choosable[j]].Score > maxScore) {
                unchoosable = unchoosable.concat(choosable.splice(j, 1));
                j--;
            }
            for (var k = 0; k < goal.Excludes.length; k++) {
                if (choosable[j] == goal.Excludes[k]) {
                    unchoosable = unchoosable.concat(choosable.splice(j, 1));
                    j--;
                }
            }
        }

        //duplicate all goals sharing synergies with the chosen goal in choosable[] to make them more likely to be chosen
        for (var j = 0; j < goal.Synergy.length; j++) {
            var temp = [];
            for (var k = 0; k < choosable.length; k++) {
                if (goal.Synergy[j] == choosable[k]) //check if the goal itself is a synergy
                    temp.push(choosable[k]);
                for (var l = 0; l < bingoList[choosable[k]].Synergy.length; l++) { //check if it shares a synergy group that isn't an existing goal
                    if (goal.Synergy[j] == bingoList[choosable[k]].Synergy[l]
                        && !choosable.includes(bingoList[choosable[k]].Synergy[l])
                        && !unchoosable.includes(bingoList[choosable[k]].Synergy[l]))
                            temp.push(choosable[k]);
                }
            }
            choosable = choosable.concat(temp);
        }
    }
    return chosenGoals;
}

module.exports = bingoGenerator;
