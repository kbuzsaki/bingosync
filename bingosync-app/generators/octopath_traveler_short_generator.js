// This is using a modified SynerGen. Mostly it tries harder to not break typings and has finite loops for retrying at picking goals. There is also some "testlog" code that I've commented out, can be ignored.
//The Goal List is further down after the generator for those who are looking for them.

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

    var testlog = "";
    var test_diff = [];

    //create a 1-dimensional array from the 2-dimensional matrix magicSquare[][]
    var square = magicSquare();
    var bingoBoard = square[0].concat(square[1], square[2], square[3], square[4]);

    var unchosenDiffs = bingoBoard.slice();
    var chosenGoals = [];
    for (var i = 1; i <= 25; i++)
        chosenGoals.push("");
        test_diff.push(0);

    var reroll = 0;
    var super_roll = 0;

    for (var i = 1; i <= 25; i++) {

        //this is necessary on the edge case that all the exclusions and difficulties wind up eliminating every goal
        if (choosable.length == 0 || reroll > 5) {
            if (reroll > 5) {
              super_roll++;
            }
            reroll = 0;
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
            //testlog += "Spread Used | ";
            for (var k = 0; k < unchoosable.length; k++) {
                if (newChoosableDiffs.includes(bingoList[unchoosable[k]].Diff)) {
                  var check_types = true;
                  for (var l = 0; l < bingoList[unchoosable[k]].Types.length; l++) {
                      if (types[bingoList[unchoosable[k]].Types[l]] <= 0) {
                          check_types = false;
                          break;
                      }
                  }
                  if (check_types) {
                      choosable = choosable.concat(unchoosable.splice(k, 1));
                      k--;
                  }
                }
            }
            //if choosable[] is still empty, just move everything from unchoosable[] back
            if (choosable.length == 0 || super_roll > 1) {
              testlog += "Full Spread | ";
              for (var k = 0; k < unchoosable.length; k++) {
                  var check_types = true;
                  for (var l = 0; l < bingoList[unchoosable[k]].Types.length; l++) {
                      if (types[bingoList[unchoosable[k]].Types[l]] <= 0) {
                          check_types = false;
                          break;
                      }
                  }
                  if (check_types) {
                      choosable = choosable.concat(unchoosable.splice(k, 1));
                      k--;
                  }
              }
              //if choosable[] is still empty, just move everything from unchoosable[] back
              if (choosable.length == 0 || super_roll > 2) {
                  while (unchoosable.length > 0)
                      choosable = choosable.concat(unchoosable.splice(0, 1));
                  testlog += "Generation Broke (i = "+i+")| ";
                  for (var y in types) {
                      //if (y in ["test"])
                      testlog += y +":" + types[y] + " ~ ";
                  }
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
                if (diff < 25) {diffIndex = bingoBoard.indexOf(diff - 1);}
                if (chosenGoals[diffIndex] != "") {
                    if (diff > 1) {diffIndex = bingoBoard.indexOf(diff + 1);}

                    //these while loops go through the remaining difficulties, first those less than the true diff, then those greater.
                    if (chosenGoals[diffIndex] != "") {
                        var rel_diff = diff - 2;
                        while (rel_diff >= 1 && chosenGoals[diffIndex] != "") {
                            diffIndex = bingoBoard.indexOf(rel_diff);
                            rel_diff--;
                        }
                        if (chosenGoals[diffIndex] != "") {
                            if (reroll <= 5) {
                                testlog += "Rerolling ("+reroll+") ";
                                reroll++;
                                goal = null;
                            } else {
                                rel_diff = diff + 2;
                                while (rel_diff <= 25 && chosenGoals[diffIndex] != "") {
                                    diffIndex = bingoBoard.indexOf(rel_diff);
                                    rel_diff++;
                                }
                            }
                        }
                    }
                    //this remaining safety case should not occur anymore anyways
                    if (chosenGoals[diffIndex] != "") {
                        diffIndex = chosenGoals.indexOf("");
                    }
                }
            }
        }
        if (goal === null) {
          i--;
          continue;
        } else {
          reroll = 0;
          super_roll = 0;
        }
        chosenGoals[diffIndex] = { "name": goal.Desc };
        test_diff[diffIndex] = goal.Diff;
        //testlog += "(Adding "+choosable[index]+": "+diff+")";
        //remove the chosen goal and any duplicates of it completely
        for (var j = 0; j < choosable.length; j++) {
            if (choosable[j] == goal.name) {
                choosable.splice(j, 1);
                j--;
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
              //testlog += goal.Types[j] + " maxed, removing: "
                for (var k = 0; k < choosable.length; k++) {
                    for (var l = 0; l < bingoList[choosable[k]].Types.length; l++) {
                        if (bingoList[choosable[k]].Types[l] === goal.Types[j]) {
                            //testlog += choosable[k] + ", "
                            unchoosable = unchoosable.concat(choosable.splice(k, 1));
                            k--;
                            break;
                        }
                    }
                }
                //testlog += " | "
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

    /*
    let sum = 0;
    for (var i = 0; i < 25; i++) {
      testlog += test_diff[i];
      sum += test_diff[i];
      if ((i+1)%5 == 0) {
        testlog += ",";
        //testlog += ","+sum+"|";
        sum = 0;
      } else {
        testlog += ",";
      }
    }*/
    /*
    for (var i = 0; i < 5; i++) {
      testlog += (test_diff[i+0]+test_diff[i+5]+test_diff[i+10]+test_diff[i+15]+test_diff[i+20]);
      testlog += ",";
    }
    testlog += "\\" + (test_diff[0]+test_diff[6]+test_diff[12]+test_diff[18]+test_diff[24]);
    testlog += ",/" + (test_diff[4]+test_diff[8]+test_diff[12]+test_diff[16]+test_diff[20]);
    */
    /*
    if (testlog != "" && true) {
        chosenGoals[24] = {"name": chosenGoals[24].name + " (" + testlog + ")"};
    }
    */
    return chosenGoals;
}

//List made by Doid
//This is the Short game length Variant
//The list has been generated with the help of this Google Sheet:
//https://docs.google.com/spreadsheets/d/1csndIf-XziHWjSTF8f_ZrFrwRYPLBQK_lxpZu3Y4l2Y/edit?usp=sharing

//Edit: after some substantial playtesting, the goals have been rebalanced and modified considerably from their original spreadsheet difficulty values.

var bingoList = {

"bingoTypes": {
        "items": {"Max": 5},
        "item_set": {"Max": 3},
        "broad_item_set": {"Max": 3},
        "item_count": {"Max": 3},
        "weapon": {"Max": 3},
        "armor": {"Max": 2},
        "accessory": {"Max": 2},
        "soulstone": {"Max": 1},
        "nut": {"Max": 1},
        "gold_item": {"Max": 1},
        "forbidden": {"Max": 1},
        "elem_reduce": {"Max": 1},
        "status_stone": {"Max": 1},
        "stat_accessory": {"Max": 1},
        "bottle": {"Max": 1},
        "info_counts": {"Max": 1},
        "stats": {"Max": 3},
        "hp": {"Max": 1},
        "sp": {"Max": 1},
        "phys_atk": {"Max": 1},
        "elem_atk": {"Max": 1},
        "phys_def": {"Max": 1},
        "elem_def": {"Max": 1},
        "crit": {"Max": 1},
        "evasion": {"Max": 1},
        "speed": {"Max": 1},
        "accuracy": {"Max": 1},
        "side_stories": {"Max": 5},
        "broad_ss_set": {"Max": 3},
        "ss_set": {"Max": 3},
        "ss_chain": {"Max": 2},
        "ss_II": {"Max": 2},
        "ss_III": {"Max": 1},
        "ss_frostlands": {"Max": 2},
        "ss_flatlands": {"Max": 2},
        "ss_coastlands": {"Max": 2},
        "ss_highlands": {"Max": 2},
        "ss_sunlands": {"Max": 2},
        "ss_riverlands": {"Max": 2},
        "ss_cliftlands": {"Max": 2},
        "ss_woodlands": {"Max": 2},
        "ss_specific": {"Max": 3},
        "ss_boss": {"Max": 4},
        "specific_character": {"Max": 10},
        "exploration": {"Max": 6},
        "chest": {"Max": 2},
        "chest_set": {"Max": 1},
        "chest_counts": {"Max": 2},
        "combat": {"Max": 5},
        "subjob": {"Max": 2},
        "boss": {"Max": 6},
        "advanced_boss": {"Max": 2},
        "combat_counts": {"Max": 3},
        "beast_lore": {"Max": 3},
        "extended_combat": {"Max": 5},
        "combat_set": {"Max": 4},
        "combat_challenge": {"Max": 2},
        "progression": {"Max": 8},
        "specific_chapter": {"Max": 4},
        "ch_1": {"Max": 3},
        "ch_2": {"Max": 4},
        "ch_3": {"Max": 3},
        "chapter": {"Max": 8},
        "#_t_pouches": {"Max": 1},
        "#_u_gold_items": {"Max": 1},
        "#_u_iron": {"Max": 1},
        "#_u_silver": {"Max": 1},
        "#_u_dragon": {"Max": 1},
        "#_u_arcane": {"Max": 1},
        "#_u_magus": {"Max": 1},
        "#_u_soul": {"Max": 1},
        "#_u_rune": {"Max": 1},
        "#_u_adamantine": {"Max": 1},
        "#_u_elem_wpn": {"Max": 1},
        "#_u_phys_staves": {"Max": 1},
        "#_u_evasion": {"Max": 1},
        "#_u_critical": {"Max": 1},
        "#_u_speed": {"Max": 1},
        "#_u_accuracy": {"Max": 1},
        "#_u_boss_drop": {"Max": 1},
        "#_t_s_sstones": {"Max": 1},
        "#_t_m_sstones": {"Max": 1},
        "#_t_l_sstones": {"Max": 1},
        "#_t_s_nuts": {"Max": 1},
        "#_t_m_nuts": {"Max": 1},
        "#_t_l_nuts": {"Max": 1},
        "#_t_nuts": {"Max": 1},
        "#_u_sstones": {"Max": 1},
        "#_t_olives": {"Max": 1},
        "#_u_swords": {"Max": 1},
        "#_u_spears": {"Max": 1},
        "#_u_daggers": {"Max": 1},
        "#_u_axes": {"Max": 1},
        "#_u_bows": {"Max": 1},
        "#_u_staves": {"Max": 1},
        "#_u_forbidden": {"Max": 1},
        "#_u_weapons": {"Max": 1},
        "#_u_headgears": {"Max": 1},
        "#_u_body_armors": {"Max": 1},
        "#_u_shields": {"Max": 1},
        "#_u_armors": {"Max": 1},
        "#_u_elem_reduce": {"Max": 1},
        "#_t_strong_amulets": {"Max": 1},
        "#_u_stones": {"Max": 1},
        "#_t_elem_amulets": {"Max": 1},
        "#_t_stones": {"Max": 1},
        "#_u_earrings": {"Max": 1},
        "#_u_rings": {"Max": 1},
        "#_u_bracelets": {"Max": 1},
        "#_u_necklaces": {"Max": 1},
        "#_alluring": {"Max": 1},
        "#_u_accessories": {"Max": 1},
        "#_t_bottles": {"Max": 1},
        "#_bottle_sets": {"Max": 1},
        "#_u_town_boosts": {"Max": 1},
        "#_t_town_boosts": {"Max": 1},
        "#_t_items": {"Max": 1},
        "#_hp": {"Max": 1},
        "#_sp": {"Max": 1},
        "#_phys_atk": {"Max": 1},
        "#_elem_atk": {"Max": 1},
        "#_phys_def": {"Max": 1},
        "#_elem_def": {"Max": 1},
        "#_accuracy": {"Max": 1},
        "#_speed": {"Max": 1},
        "#_critical": {"Max": 1},
        "#_evasion": {"Max": 1},
        "#_side_stories": {"Max": 1},
        "#_ss_region_sets": {"Max": 1},
        "#_ss_II_sets": {"Max": 1},
        "#_ss_III_sets": {"Max": 1},
        "#_ss_frostlands": {"Max": 1},
        "#_ss_flatlands": {"Max": 1},
        "#_ss_coastlands": {"Max": 1},
        "#_ss_highlands": {"Max": 1},
        "#_ss_sunlands": {"Max": 1},
        "#_ss_riverlands": {"Max": 1},
        "#_ss_cliftlands": {"Max": 1},
        "#_ss_woodlands": {"Max": 1},
        "#_ss_bosses": {"Max": 1},
        "#_t_brown_chests": {"Max": 1},
        "#_t_red_chests": {"Max": 1},
        "#_t_purple_chests": {"Max": 1},
        "#_t_chests": {"Max": 1},
        "#_optional_bosses": {"Max": 1},
        "#_advanced_bosses": {"Max": 1},
        "#_weakness_sets": {"Max": 1},
        "#_u_concoct": {"Max": 1},
        "#_u_str_bl": {"Max": 1},
        "#_npc_summons": {"Max": 1},
        "#_bl_summons": {"Max": 1},
        "#_u_bl": {"Max": 1},
        "#_u_lizards_bl": {"Max": 1},
        "#_u_frogs_bl": {"Max": 1},
        "#_u_birds_bl": {"Max": 1},
        "#_u_rats_bl": {"Max": 1},
        "#_u_magic_bl": {"Max": 1},
        "str_#_bl": {"Max": 1},
        "str_#_NPC": {"Max": 1},
        "#_bg_yolo": {"Max": 1},
        "#_ch_1": {"Max": 1},
        "#_ch_2": {"Max": 1},
        "#_ch_3": {"Max": 1},
        "#_ch_4": {"Max": 1},
        "#_u_elem_boost": {"Max": 1},
        "#_u_bt_equip": {"Max": 1},
        "#_ss_post_game": {"Max": 1}
},

"5_u_gold_items": {
        "Desc": "5 Unique Gold Items",
        "Diff": 1,
        "Types": ["broad_item_set","gold_item","items","#_u_gold_items"]
},

"4_u_iron": {
        "Desc": "4 Unique Iron Equipments",
        "Diff": 1,
        "Types": ["item_set","armor","weapon","items","#_u_iron"]
},

"3_u_silver": {
        "Desc": "3 Unique Silver Equipments",
        "Diff": 1,
        "Types": ["item_set","armor","weapon","items","#_u_silver"]
},

"3_u_arcane": {
        "Desc": "3 Unique Arcane Weapons",
        "Diff": 1,
        "Types": ["item_set","weapon","elem_atk","items","#_u_arcane"]
},

"1_u_magus": {
        "Desc": "1 Magus Weapon",
        "Diff": 1,
        "Types": ["item_set","weapon","elem_atk","items","#_u_magus"]
},

"5_u_speed": {
        "Desc": "5 Unique Speed Equipments",
        "Diff": 1,
        "Types": ["broad_item_set","armor","weapon","speed","items","#_u_speed"]
},

"5_u_accuracy": {
        "Desc": "5 Unique Accuracy Equipments",
        "Diff": 1,
        "Types": ["broad_item_set","armor","weapon","accuracy","items","#_u_accuracy"]
},

"4_u_shields": {
        "Desc": "4 Unique Shields",
        "Diff": 1,
        "Types": ["broad_item_set","armor","items","#_u_shields"]
},

"5_u_iron": {
        "Desc": "5 Unique Iron Equipments",
        "Diff": 2,
        "Types": ["item_set","armor","weapon","items","#_u_iron"]
},

"5_u_evasion": {
        "Desc": "5 Unique Evasion Equipments",
        "Diff": 2,
        "Types": ["broad_item_set","armor","weapon","evasion","items","#_u_evasion"]
},

"5_t_s_nuts": {
        "Desc": "5 Nut (S)'s",
        "Diff": 4,
        "Types": ["item_count","nut","item_set","items","#_t_s_nuts"]
},

"6_u_sstones": {
        "Desc": "6 Unique Soulstones",
        "Diff": 2,
        "Types": ["broad_item_set","soulstone","items","#_u_sstones"]
},

"5_weakness_sets": {
        "Desc": "5 Revealed Weakness Sets",
        "Diff": 2,
        "Types": ["combat_counts","extended_combat","combat","#_weakness_sets"]
},

"2_bg_yolo": {
        "Desc": "Use BG Lv. 4 a total of 2 times in one fight",
        "Diff": 4,
        "Types": ["extended_combat","combat","#_bg_yolo"]
},

"5_t_pouches": {
        "Desc": "5 Total Money Pouches",
        "Diff": 2,
        "Types": ["item_count","gold_item","broad_item_set","items","#_t_pouches"]
},

"4_u_silver": {
        "Desc": "4 Unique Silver Equipments",
        "Diff": 2,
        "Types": ["item_set","armor","weapon","items","#_u_silver"]
},

"5_u_critical": {
        "Desc": "5 Unique Critical Equipments",
        "Diff": 2,
        "Types": ["broad_item_set","armor","weapon","crit","items","#_u_critical"]
},

"5_u_staves": {
        "Desc": "5 Unique Staves",
        "Diff": 2,
        "Types": ["broad_item_set","weapon","items","#_u_staves"]
},

"3_u_earrings": {
        "Desc": "3 Unique Earrings",
        "Diff": 2,
        "Types": ["item_set","accessory","stat_accessory","items","#_u_earrings"]
},

"2_u_magus": {
        "Desc": "2 Unique Magus Weapons",
        "Diff": 3,
        "Types": ["item_set","weapon","elem_atk","items","#_u_magus"]
},

"10_t_s_sstones": {
        "Desc": "10 Soulstone (S)'s",
        "Diff": 3,
        "Types": ["item_count","soulstone","item_set","items","#_t_s_sstones"]
},

"6_u_headgears": {
        "Desc": "6 Unique Headgears",
        "Diff": 3,
        "Types": ["broad_item_set","armor","items","#_u_headgears"]
},

"6_u_body_armors": {
        "Desc": "6 Unique Body Armors",
        "Diff": 3,
        "Types": ["broad_item_set","armor","items","#_u_body_armors"]
},

"3_u_elem_reduce": {
        "Desc": "3 Unique Elemental Reduction Equipments",
        "Diff": 3,
        "Types": ["item_set","armor","accessory","elem_reduce","items","#_u_elem_reduce"]
},

"5_t_bottles": {
        "Desc": "5 Status Bottles",
        "Diff": 3,
        "Types": ["item_set","item_count","bottle","items","#_t_bottles"]
},

"1_bottle_sets": {
        "Desc": "1 Complete Set of Status Bottles",
        "Diff": 3,
        "Types": ["item_set","item_count","bottle","items","#_bottle_sets"]
},

"str_4_NPC": {
        "Desc": "Defeat a Strength 4 NPC",
        "Diff": 3,
        "Types": ["combat_set","combat","str_#_NPC"]
},

"all_pouches": {
        "Desc": "Each (5) Unique Money Pouches",
        "Diff": 4,
        "Types": ["item_set","gold_item","items"]
},

"10_t_pouches": {
        "Desc": "10 Total Money Pouches",
        "Diff": 6,
        "Types": ["item_count","gold_item","broad_item_set","items","#_t_pouches"]
},

"6_u_iron": {
        "Desc": "6 Unique Iron Equipments",
        "Diff": 4,
        "Types": ["item_set","armor","weapon","items","#_u_iron"]
},

"4_u_arcane": {
        "Desc": "4 Unique Arcane Weapons",
        "Diff": 4,
        "Types": ["item_set","weapon","elem_atk","items","#_u_arcane"]
},

"5_u_elem_wpn": {
        "Desc": "5 Unique Elemental Non-Staff Weapons",
        "Diff": 4,
        "Types": ["broad_item_set","weapon","elem_atk","items","#_u_elem_wpn"]
},

"5_t_m_nuts": {
        "Desc": "5 Nut (M)'s",
        "Diff": 6,
        "Types": ["item_count","nut","item_set","items","#_t_m_nuts"]
},

"5_u_swords": {
        "Desc": "5 Unique Swords",
        "Diff": 4,
        "Types": ["broad_item_set","weapon","items","#_u_swords"]
},

"5_u_daggers": {
        "Desc": "5 Unique Daggers",
        "Diff": 4,
        "Types": ["broad_item_set","weapon","items","#_u_daggers"]
},

"5_u_axes": {
        "Desc": "5 Unique Axes",
        "Diff": 4,
        "Types": ["broad_item_set","weapon","items","#_u_axes"]
},

"3_u_rings": {
        "Desc": "3 Unique Rings",
        "Diff": 3,
        "Types": ["item_set","accessory","stat_accessory","items","#_u_rings"]
},

"2_ss_flatlands": {
        "Desc": "2 Side Stories in Flatlands (No Kit)",
        "Diff": 2,
        "Types": ["ss_set","ss_flatlands","side_stories","#_ss_flatlands"]
},

"2_ss_coastlands": {
        "Desc": "2 Side Stories in Coastlands (No Kit)",
        "Diff": 2,
        "Types": ["ss_set","ss_coastlands","side_stories","#_ss_coastlands"]
},

"3_dead_boss": {
        "Desc": "Defeat a boss with 3 Travelers dead",
        "Diff": 4,
        "Types": ["extended_combat","combat_challenge","combat"]
},

"4_bg_yolo": {
        "Desc": "Use BG Lv. 4 a total of 4 times in one fight",
        "Diff": 7,
        "Types": ["extended_combat","combat","#_bg_yolo"]
},

"10_u_gold_items": {
        "Desc": "10 Unique Gold Items",
        "Diff": 6,
        "Types": ["broad_item_set","gold_item","items","#_u_gold_items"]
},

"2_u_phys_staves": {
        "Desc": "2 Unique Physical Staves",
        "Diff": 5,
        "Types": ["item_set","weapon","phys_atk","items","#_u_phys_staves"]
},

"3_t_l_nuts": {
        "Desc": "3 Nut (L)'s",
        "Diff": 7,
        "Types": ["item_count","nut","item_set","items","#_t_l_nuts"]
},

"5_u_spears": {
        "Desc": "5 Unique Spears",
        "Diff": 5,
        "Types": ["broad_item_set","weapon","items","#_u_spears"]
},

"5_u_bows": {
        "Desc": "5 Unique Bows",
        "Diff": 5,
        "Types": ["broad_item_set","weapon","items","#_u_bows"]
},

"3_t_strong_amulets": {
        "Desc": "3 Strong Elemental Reduction Amulets",
        "Diff": 5,
        "Types": ["item_set","item_count","accessory","elem_reduce","items","#_t_strong_amulets"]
},

"2_u_bracelets": {
        "Desc": "2 Unique Bracelets",
        "Diff": 5,
        "Types": ["item_set","accessory","stat_accessory","items","#_u_bracelets"]
},

"1_alluring": {
        "Desc": "1 Alluring Ribbon",
        "Diff": 4,
        "Types": ["item_set","accessory","side_stories","items","#_alluring"]
},

"ss_opt_6": {
        "Desc": "SS: The Weaver's Predicament",
        "Diff": 2,
        "Types": ["ss_specific","ss_cliftlands","side_stories"]
},

"3_u_lizards_bl": {
        "Desc": "Capture 3 Unique Lizardmen / Lizardking",
        "Diff": 5,
        "Types": ["combat_counts","specific_character","beast_lore","combat_set","combat","#_u_lizards_bl"]
},

"3_u_frogs_bl": {
        "Desc": "Capture 3 Unique Froggen / Frogking",
        "Diff": 5,
        "Types": ["combat_counts","specific_character","beast_lore","combat_set","combat","#_u_frogs_bl"]
},

"3_u_birds_bl": {
        "Desc": "Capture 3 Unique Birdian / Birdking",
        "Diff": 5,
        "Types": ["combat_counts","specific_character","beast_lore","combat_set","combat","#_u_birds_bl"]
},

"3_u_rats_bl": {
        "Desc": "Capture 3 Unique Ratkin / Ratking",
        "Diff": 5,
        "Types": ["combat_counts","specific_character","beast_lore","combat_set","combat","#_u_rats_bl"]
},

"2_u_magic_bl": {
        "Desc": "Capture 2 Unique Elemental Themed Enemies",
        "Diff": 5,
        "Types": ["combat_counts","specific_character","beast_lore","combat_set","combat","#_u_magic_bl"]
},

"5_ch_1": {
        "Desc": "Complete 5 Chapter 1's",
        "Diff": 6,
        "Types": ["chapter","progression","#_ch_1","ch_1"]
},

"5_u_silver": {
        "Desc": "5 Unique Silver Equipments",
        "Diff": 6,
        "Types": ["item_set","armor","weapon","items","#_u_silver"]
},

"1_u_soul": {
        "Desc": "1 Soul Weapon",
        "Diff": 6,
        "Types": ["item_set","weapon","elem_atk","items","#_u_soul"]
},

"2_u_adamantine": {
        "Desc": "2 Unique Adamantine Equipments",
        "Diff": 8,
        "Types": ["item_set","weapon","elem_atk","armor","items","#_u_adamantine"]
},

"10_t_nuts": {
        "Desc": "10 Nuts",
        "Diff": 8,
        "Types": ["item_count","nut","item_set","items","#_t_nuts"]
},

"5_u_earrings": {
        "Desc": "5 Unique Earrings",
        "Diff": 6,
        "Types": ["item_set","accessory","stat_accessory","items","#_u_earrings"]
},

"1500_hp": {
        "Desc": "1500+ HP",
        "Diff": 6,
        "Types": ["hp","stats","#_hp"]
},

"1_ss_II_sets": {
        "Desc": "1 (II) Side Story",
        "Diff": 6,
        "Types": ["ss_set","ss_chain","ss_II","side_stories","#_ss_II_sets"]
},

"2_ss_frostlands": {
        "Desc": "2 Side Stories in Frostlands (No Kit)",
        "Diff": 3,
        "Types": ["ss_set","ss_frostlands","side_stories","#_ss_frostlands"]
},

"ss_opt_7": {
        "Desc": "SS: A Cub with No Name",
        "Diff": 5,
        "Types": ["ss_specific","ss_woodlands","side_stories"]
},

"1_npc_summons": {
        "Desc": "Expend all Summons on an NPC",
        "Diff": 7,
        "Types": ["combat_counts","extended_combat","combat","#_npc_summons"]
},

"3_t_olives": {
        "Desc": "3 Olive (L)'s",
        "Diff": 6,
        "Types": ["item_count","broad_item_set","items","#_t_olives"]
},

"2_u_forbidden": {
        "Desc": "2 Unique Forbbiden Equipments",
        "Diff": 7,
        "Types": ["item_set","weapon","forbidden","items","#_u_forbidden"]
},

"7_u_shields": {
        "Desc": "7 Unique Shields",
        "Diff": 7,
        "Types": ["broad_item_set","armor","items","#_u_shields"]
},

"1_u_necklaces": {
        "Desc": "1 Necklace",
        "Diff": 7,
        "Types": ["item_set","accessory","stat_accessory","items","#_u_necklaces"]
},

"4_u_town_boosts": {
        "Desc": "Inquire/Scrutinize 4 Unique Town Boosts",
        "Diff": 1,
        "Types": ["item_set","info_counts","items","#_u_town_boosts"]
},

"10_t_town_boosts": {
        "Desc": "10 Total Town Boost Infos",
        "Diff": 7,
        "Types": ["item_set","item_count","info_counts","items","#_t_town_boosts"]
},

"3_t_items": {
        "Desc": "3 Pages in All Items",
        "Diff": 7,
        "Types": ["broad_item_set","item_count","items","#_t_items"]
},

"550_phys_atk": {
        "Desc": "550+ Physical Attack",
        "Diff": 7,
        "Types": ["phys_atk","stats","#_phys_atk"]
},

"550_elem_atk": {
        "Desc": "550+ Elemental Attack",
        "Diff": 7,
        "Types": ["elem_atk","stats","#_elem_atk"]
},

"200_accuracy": {
        "Desc": "200+ Accuracy",
        "Diff": 7,
        "Types": ["accuracy","stats","#_accuracy"]
},

"300_speed": {
        "Desc": "300+ Speed",
        "Diff": 7,
        "Types": ["speed","stats","#_speed"]
},

"430_evasion": {
        "Desc": "430+ Evasion",
        "Diff": 7,
        "Types": ["evasion","stats","#_evasion"]
},

"3_ss_coastlands": {
        "Desc": "3 Side Stories in Coastlands (No Kit)",
        "Diff": 5,
        "Types": ["ss_set","ss_coastlands","side_stories","#_ss_coastlands"]
},

"2_ss_highlands": {
        "Desc": "2 Side Stories in Highlands (No Kit)",
        "Diff": 5,
        "Types": ["ss_set","ss_highlands","side_stories","#_ss_highlands"]
},

"2_ss_sunlands": {
        "Desc": "2 Side Stories in Sunlands (No Kit)",
        "Diff": 5,
        "Types": ["ss_set","ss_sunlands","side_stories","#_ss_sunlands"]
},

"2_ss_cliftlands": {
        "Desc": "2 Side Stories in Cliftlands (No Kit)",
        "Diff": 5,
        "Types": ["ss_set","ss_cliftlands","side_stories","#_ss_cliftlands"]
},

"2_ss_woodlands": {
        "Desc": "2 Side Stories in Woodlands (No Kit)",
        "Diff": 5,
        "Types": ["ss_set","ss_woodlands","side_stories","#_ss_woodlands"]
},

"1_optional_bosses": {
        "Desc": "Defeat 1 Optional Boss",
        "Diff": 7,
        "Types": ["boss","exploration","#_optional_bosses"]
},

"8_u_concoct": {
        "Desc": "4 Unique Concoctions Used",
        "Diff": 5,
        "Types": ["combat_counts","items","specific_character","combat","#_u_concoct"]
},

"str_5_NPC": {
        "Desc": "Defeat a Strength 5 NPC",
        "Diff": 7,
        "Types": ["combat_set","combat","str_#_NPC"]
},

"6_u_silver": {
        "Desc": "6 Unique Silver Equipments",
        "Diff": 8,
        "Types": ["item_set","armor","weapon","items","#_u_silver"]
},

"1_u_rune": {
        "Desc": "1 Rune Weapon",
        "Diff": 8,
        "Types": ["item_set","weapon","elem_atk","items","#_u_rune"]
},

"10_u_speed": {
        "Desc": "10 Unique Speed Equipments",
        "Diff": 8,
        "Types": ["broad_item_set","armor","weapon","speed","items","#_u_speed"]
},

"10_t_m_sstones": {
        "Desc": "10 Soulstone (M)'s",
        "Diff": 10,
        "Types": ["item_count","soulstone","item_set","items","#_t_m_sstones"]
},

"2_u_stones": {
        "Desc": "2 Unique Status Stones",
        "Diff": 8,
        "Types": ["item_set","accessory","status_stone","accessory","items","#_u_stones"]
},

"5_t_elem_amulets": {
        "Desc": "5 Elemental Reduction Amulets/Charms",
        "Diff": 8,
        "Types": ["item_set","item_count","elem_reduce","accessory","items","#_t_elem_amulets"]
},

"3_u_bracelets": {
        "Desc": "3 Unique Bracelets",
        "Diff": 8,
        "Types": ["item_set","accessory","stat_accessory","items","#_u_bracelets"]
},

"10_u_accessories": {
        "Desc": "10 Unique Accessories",
        "Diff": 8,
        "Types": ["broad_item_set","accessory","stat_accessory","elem_reduce","items","#_u_accessories"]
},

"2_ss_riverlands": {
        "Desc": "2 Side Stories in Riverlands (No Kit)",
        "Diff": 6,
        "Types": ["ss_set","ss_riverlands","side_stories","#_ss_riverlands"]
},

"ss_opt_2": {
        "Desc": "SS: An Exotic Aroma",
        "Diff": 5,
        "Types": ["ss_specific","ss_coastlands","side_stories"]
},

"ss_opt_4": {
        "Desc": "SS: A Corpse with No Name",
        "Diff": 7,
        "Types": ["ss_specific","ss_riverlands","side_stories"]
},

"ss_opt_5": {
        "Desc": "SS: The Bandit's Code",
        "Diff": 6,
        "Types": ["ss_specific","ss_cliftlands","specific_character","side_stories"]
},

"5_chapter_2_chests": {
        "Desc": "Open 5 Chests in a single Chapter 2 Dungeon",
        "Diff": 5,
        "Types": ["chest","chest_set","exploration","ch_2"]
},

"6_ch_1": {
        "Desc": "Complete 6 Chapter 1's",
        "Diff": 9,
        "Types": ["chapter","progression","#_ch_1","ch_1"],
        "Excludes": ["5_ch_1"]
},

"7_u_iron": {
        "Desc": "7 Unique Iron Equipments",
        "Diff": 9,
        "Types": ["item_set","armor","weapon","items","#_u_iron"]
},

"3_u_magus": {
        "Desc": "3 Unique Magus Weapons",
        "Diff": 9,
        "Types": ["item_set","weapon","elem_atk","items","#_u_magus"]
},

"2_u_soul": {
        "Desc": "2 Unique Soul Weapons",
        "Diff": 10,
        "Types": ["item_set","weapon","elem_atk","items","#_u_soul"]
},

"3_u_phys_staves": {
        "Desc": "3 Unique Physical Staves",
        "Diff": 9,
        "Types": ["item_set","weapon","phys_atk","items","#_u_phys_staves"]
},

"1_u_boss_drop": {
        "Desc": "1 Boss Equipment Drop",
        "Diff": 9,
        "Types": ["broad_item_set","armor","weapon","progression","items","progression","#_u_boss_drop"]
},

"10_t_s_nuts": {
        "Desc": "10 Nut (S)'s",
        "Diff": 11,
        "Types": ["item_count","nut","item_set","items","#_t_s_nuts"]
},

"12_u_headgears": {
        "Desc": "12 Unique Headgears",
        "Diff": 9,
        "Types": ["broad_item_set","armor","items","#_u_headgears"]
},

"15_u_armors": {
        "Desc": "15 Unique Armors",
        "Diff": 9,
        "Types": ["broad_item_set","armor","items","#_u_armors"]
},

"5_t_stones": {
        "Desc": "5 Status Stones",
        "Diff": 9,
        "Types": ["item_set","item_count","status_stone","accessory","items","#_t_stones"]
},

"150_sp": {
        "Desc": "150+ SP",
        "Diff": 9,
        "Types": ["sp","stats","#_sp"]
},

"3_ss_frostlands": {
        "Desc": "3 Side Stories in Frostlands (No Kit)",
        "Diff": 10,
        "Types": ["ss_set","ss_frostlands","side_stories","#_ss_frostlands"]
},

"3_ss_flatlands": {
        "Desc": "3 Side Stories in Flatlands (No Kit)",
        "Diff": 7,
        "Types": ["ss_set","ss_flatlands","side_stories","#_ss_flatlands"]
},

"ss_opt_3": {
        "Desc": "SS: Performance Art",
        "Diff": 8,
        "Types": ["ss_specific","ss_highlands","side_stories"]
},

"ss_chain_6": {
        "Desc": "SS: Meryl, Lost then Found (III)",
        "Diff": 14,
        "Types": ["ss_specific","ss_riverlands","ss_chain","ss_III","specific_character","ss_II","side_stories"]
},

"4_u_str_bl": {
        "Desc": "4 Different Strength Monsters in Beast Lore (No Linde)",
        "Diff": 9,
        "Types": ["combat_counts","specific_character","beast_lore","extended_combat","combat_set","combat","#_u_str_bl"]
},

"str_4_bl": {
        "Desc": "Capture a Strength 4+ Monster",
        "Diff": 6,
        "Types": ["extended_combat","specific_character","beast_lore","combat_set","combat","str_#_bl"]
},

"ophilia_ch_2": {
        "Desc": "Complete Ophilia Chapter 2",
        "Diff": 14,
        "Types": ["chapter","progression","ch_2","specific_chapter","specific_character"],
        "Excludes": ["1_ch_2"]
},

"cyrus_ch_2": {
        "Desc": "Complete Cyrus Chapter 2",
        "Diff": 11,
        "Types": ["chapter","progression","ch_2","specific_chapter","specific_character"],
        "Excludes": ["1_ch_2","2_ch_2","tressa_ch_2","therion_ch_2"]
},

"tressa_ch_2": {
        "Desc": "Complete Tressa Chapter 2",
        "Diff": 13,
        "Types": ["chapter","progression","ch_2","specific_chapter","specific_character"],
        "Excludes": ["1_ch_2","2_ch_2","cyrus_ch_2","therion_ch_2"]
},

"olberic_ch_2": {
        "Desc": "Complete Olberic Chapter 2",
        "Diff": 23,
        "Types": ["chapter","progression","ch_2","specific_chapter","specific_character"],
        "Excludes": ["1_ch_2"]
},

"primrose_ch_2": {
        "Desc": "Complete Primrose Chapter 2",
        "Diff": 13,
        "Types": ["chapter","progression","ch_2","specific_chapter","specific_character"],
        "Excludes": ["1_ch_2"]
},

"alfyn_ch_2": {
        "Desc": "Complete Alfyn Chapter 2",
        "Diff": 16,
        "Types": ["chapter","progression","ch_2","specific_chapter","specific_character"],
        "Excludes": ["1_ch_2"]
},

"therion_ch_2": {
        "Desc": "Complete Therion Chapter 2",
        "Diff": 14,
        "Types": ["chapter","progression","ch_2","specific_chapter","specific_character"],
        "Excludes": ["1_ch_2","2_ch_2","cyrus_ch_2","tressa_ch_2"]
},

"haanit_ch_2": {
        "Desc": "Complete H'aanit Chapter 2",
        "Diff": 17,
        "Types": ["chapter","progression","ch_2","specific_chapter","specific_character"],
        "Excludes": ["1_ch_2"]
},

"15_t_pouches": {
        "Desc": "15 Total Money Pouches",
        "Diff": 16,
        "Types": ["item_count","gold_item","broad_item_set","items","#_t_pouches"]
},

"3_u_adamantine": {
        "Desc": "3 Unique Adamantine Equipments",
        "Diff": 13,
        "Types": ["item_set","weapon","elem_atk","armor","items","#_u_adamantine"]
},

"10_u_evasion": {
        "Desc": "10 Unique Evasion Equipments",
        "Diff": 10,
        "Types": ["broad_item_set","armor","weapon","evasion","items","#_u_evasion"]
},

"10_u_accuracy": {
        "Desc": "10 Unique Accuracy Equipments",
        "Diff": 10,
        "Types": ["broad_item_set","armor","weapon","accuracy","items","#_u_accuracy"]
},

"10_t_m_nuts": {
        "Desc": "10 Nut (M)'s",
        "Diff": 13,
        "Types": ["item_count","nut","item_set","items","#_t_m_nuts"]
},

"12_u_sstones": {
        "Desc": "12 Unique Soulstones",
        "Diff": 11,
        "Types": ["broad_item_set","soulstone","items","#_u_sstones"]
},

"12_u_body_armors": {
        "Desc": "12 Unique Body Armors",
        "Diff": 10,
        "Types": ["broad_item_set","armor","items","#_u_body_armors"]
},

"6_u_elem_reduce": {
        "Desc": "6 Unique Elemental Reduction Equipments",
        "Diff": 10,
        "Types": ["item_set","armor","accessory","elem_reduce","items","#_u_elem_reduce"]
},

"600_elem_atk": {
        "Desc": "600+ Elemental Attack",
        "Diff": 10,
        "Types": ["elem_atk","stats","#_elem_atk"]
},

"350_speed": {
        "Desc": "350+ Speed",
        "Diff": 10,
        "Types": ["speed","stats","#_speed"]
},

"3_ss_highlands": {
        "Desc": "3 Side Stories in Highlands (No Kit)",
        "Diff": 8,
        "Types": ["ss_set","ss_highlands","side_stories","#_ss_highlands"]
},

"3_ss_sunlands": {
        "Desc": "3 Side Stories in Sunlands (No Kit)",
        "Diff": 9,
        "Types": ["ss_set","ss_sunlands","side_stories","#_ss_sunlands"]
},

"3_ss_cliftlands": {
        "Desc": "3 Side Stories in Cliftlands (No Kit)",
        "Diff": 9,
        "Types": ["ss_set","ss_cliftlands","side_stories","#_ss_cliftlands"]
},

"3_ss_woodlands": {
        "Desc": "3 Side Stories in Woodlands (No Kit)",
        "Diff": 9,
        "Types": ["ss_set","ss_woodlands","side_stories","#_ss_woodlands"]
},

"ss_opt_1": {
        "Desc": "SS: Left Behind",
        "Diff": 7,
        "Types": ["ss_specific","ss_coastlands","side_stories"]
},

"ss_chain_4": {
        "Desc": "SS: Noelle, Seeker of Knowledge (III)",
        "Diff": 14,
        "Types": ["ss_specific","ss_highlands","ss_chain","ss_III","specific_character","ss_II","side_stories"]
},

"ss_chain_5": {
        "Desc": "SS: Ria, Born to Roam (III)",
        "Diff": 13,
        "Types": ["ss_specific","ss_sunlands","ss_chain","ss_III","specific_character","ss_II","side_stories"]
},

"ss_chain_9": {
        "Desc": "SS: In Search of Father (II)",
        "Diff": 10,
        "Types": ["ss_specific","ss_chain","ss_II","side_stories"]
},

"6_u_bl": {
        "Desc": "Have 6 unique Monsters in Beast Lore",
        "Diff": 7,
        "Types": ["combat_counts","specific_character","beast_lore","combat","#_u_bl"]
},

"20_t_s_sstones": {
        "Desc": "20 Soulstone (S)'s",
        "Diff": 11,
        "Types": ["item_count","soulstone","item_set","items","#_t_s_sstones"]
},

"450_phys_def": {
        "Desc": "450+ Physical Defense",
        "Diff": 11,
        "Types": ["phys_def","stats","#_phys_def"]
},

"400_elem_def": {
        "Desc": "400+ Elemental Defense",
        "Diff": 11,
        "Types": ["elem_def","stats","#_elem_def"]
},

"300_critical": {
        "Desc": "300+ Critical",
        "Diff": 11,
        "Types": ["crit","stats","#_critical"]
},

"ss_collect_1": {
        "Desc": "SS: Here Be Dragons",
        "Diff": 15,
        "Types": ["ss_specific","ss_frostlands","side_stories"]
},

"2_optional_bosses": {
        "Desc": "Defeat 2 Unique Optional Bosses",
        "Diff": 13,
        "Types": ["boss","exploration","#_optional_bosses"]
},

"2_npc_summons": {
        "Desc": "Expend all Summons on an NPC 2 times",
        "Diff": 14,
        "Types": ["combat_counts","extended_combat","combat","#_npc_summons"]
},

"7_ch_1": {
        "Desc": "Complete 7 Chapter 1's",
        "Diff": 12,
        "Types": ["chapter","progression","#_ch_1","ch_1"],
        "Excludes": ["5_ch_1","6_ch_1"]
},

"7_u_silver": {
        "Desc": "7 Unique Silver Equipments",
        "Diff": 10,
        "Types": ["item_set","armor","weapon","items","#_u_silver"]
},

"2_u_dragon": {
        "Desc": "2 Unique Dragon Equipments",
        "Diff": 10,
        "Types": ["item_set","armor","weapon","crit","items","#_u_dragon"]
},

"4_u_magus": {
        "Desc": "4 Unique Magus Weapons",
        "Diff": 12,
        "Types": ["item_set","weapon","elem_atk","items","#_u_magus"]
},

"10_u_axes": {
        "Desc": "10 Unique Axes",
        "Diff": 12,
        "Types": ["broad_item_set","weapon","items","#_u_axes"]
},

"10_u_staves": {
        "Desc": "10 Unique Staves",
        "Diff": 12,
        "Types": ["broad_item_set","weapon","items","#_u_staves"]
},

"20_u_weapons": {
        "Desc": "20 Unique Weapons",
        "Diff": 12,
        "Types": ["broad_item_set","weapon","items","#_u_weapons"]
},

"200_sp": {
        "Desc": "200+ SP",
        "Diff": 12,
        "Types": ["sp","stats","#_sp"]
},

"1_ss_region_sets": {
        "Desc": "1 Side Story in Each Region",
        "Diff": 12,
        "Types": ["broad_ss_set","side_stories","#_ss_region_sets"]
},

"2_ss_II_sets": {
        "Desc": "2 (II) Side Stories",
        "Diff": 10,
        "Types": ["ss_set","ss_chain","ss_II","side_stories","#_ss_II_sets"],
        "Excludes": ["1_ss_II_sets"]
},

"4_ss_frostlands": {
        "Desc": "4 Side Stories in Frostlands (No Kit)",
        "Diff": 12,
        "Types": ["ss_set","ss_frostlands","side_stories","#_ss_frostlands"]
},

"4_ss_coastlands": {
        "Desc": "4 Side Stories in Coastlands (No Kit)",
        "Diff": 11,
        "Types": ["ss_set","ss_coastlands","side_stories","#_ss_coastlands"]
},

"ss_chain_1": {
        "Desc": "SS: Sir Miles, Servant of the Flame (III)",
        "Diff": 16,
        "Types": ["ss_specific","ss_frostlands","ss_chain","ss_III","specific_character","ss_II","side_stories"]
},

"ss_chain_2": {
        "Desc": "SS: Theracio's Tutelage (III)",
        "Diff": 14,
        "Types": ["ss_specific","ss_flatlands","ss_chain","ss_III","specific_character","ss_II","side_stories"]
},

"ss_chain_8": {
        "Desc": "SS: Ashlan the Beastmaster (III)",
        "Diff": 14,
        "Types": ["ss_specific","ss_woodlands","ss_chain","ss_III","specific_character","ss_II","side_stories"]
},

"str_6_NPC": {
        "Desc": "Defeat a Strength 6 NPC",
        "Diff": 12,
        "Types": ["combat_set","combat","str_#_NPC"]
},

"10_u_critical": {
        "Desc": "10 Unique Critical Equipments",
        "Diff": 13,
        "Types": ["broad_item_set","armor","weapon","crit","items","#_u_critical"]
},

"5_t_l_nuts": {
        "Desc": "5 Nut (L)'s",
        "Diff": 16,
        "Types": ["item_count","nut","item_set","items","#_t_l_nuts"]
},

"5_u_rings": {
        "Desc": "5 Unique Rings",
        "Diff": 13,
        "Types": ["item_set","accessory","stat_accessory","items","#_u_rings"]
},

"2_u_necklaces": {
        "Desc": "2 Unique Necklaces",
        "Diff": 13,
        "Types": ["item_set","accessory","stat_accessory","items","#_u_necklaces"]
},

"10_t_bottles": {
        "Desc": "10 Status Bottles",
        "Diff": 12,
        "Types": ["item_set","item_count","bottle","items","#_t_bottles"]
},

"2_bottle_sets": {
        "Desc": "2 Complete Sets of Status Bottles",
        "Diff": 11,
        "Types": ["item_set","item_count","bottle","items","#_bottle_sets"]
},

"2500_hp": {
        "Desc": "2500+ HP",
        "Diff": 13,
        "Types": ["hp","stats","#_hp"]
},

"650_elem_atk": {
        "Desc": "650+ Elemental Attack",
        "Diff": 13,
        "Types": ["elem_atk","stats","#_elem_atk"]
},

"250_accuracy": {
        "Desc": "250+ Accuracy",
        "Diff": 13,
        "Types": ["accuracy","stats","#_accuracy"]
},

"480_evasion": {
        "Desc": "480+ Evasion",
        "Diff": 13,
        "Types": ["evasion","stats","#_evasion"]
},

"10_side_stories": {
        "Desc": "10 Side Stories",
        "Diff": 12,
        "Types": ["broad_ss_set","side_stories","#_side_stories"]
},

"3_ss_riverlands": {
        "Desc": "3 Side Stories in Riverlands (No Kit)",
        "Diff": 10,
        "Types": ["ss_set","ss_riverlands","side_stories","#_ss_riverlands"]
},

"4_ss_cliftlands": {
        "Desc": "4 Side Stories in Cliftlands (No Kit)",
        "Diff": 11,
        "Types": ["ss_set","ss_cliftlands","side_stories","#_ss_cliftlands"]
},

"ss_boss_1": {
        "Desc": "SS: The Slumbering Giant",
        "Diff": 12,
        "Types": ["ss_specific","ss_frostlands","ss_boss","specific_character","boss","side_stories"]
},

"ss_chain_10": {
        "Desc": "SS: Daughter of the Dark God (II)",
        "Diff": 10,
        "Types": ["ss_specific","ss_chain","ss_II","side_stories"]
},

"6_u_lizards_bl": {
        "Desc": "Capture 6 Unique Lizardmen / Lizardking",
        "Diff": 13,
        "Types": ["combat_counts","specific_character","beast_lore","combat_set","combat","#_u_lizards_bl"]
},

"10_u_elem_wpn": {
        "Desc": "10 Unique Elemental Non-Staff Weapons",
        "Diff": 14,
        "Types": ["broad_item_set","weapon","elem_atk","items","#_u_elem_wpn"]
},

"10_u_spears": {
        "Desc": "10 Unique Spears",
        "Diff": 14,
        "Types": ["broad_item_set","weapon","items","#_u_spears"]
},

"10_u_daggers": {
        "Desc": "10 Unique Daggers",
        "Diff": 14,
        "Types": ["broad_item_set","weapon","items","#_u_daggers"]
},

"7_u_earrings": {
        "Desc": "7 Unique Earrings",
        "Diff": 14,
        "Types": ["item_set","accessory","stat_accessory","items","#_u_earrings"]
},

"2_alluring": {
        "Desc": "2 Alluring Ribbons",
        "Diff": 14,
        "Types": ["item_set","accessory","side_stories","items","#_alluring"]
},

"400_speed": {
        "Desc": "400+ Speed",
        "Diff": 14,
        "Types": ["speed","stats","#_speed"]
},

"1_ss_III_sets": {
        "Desc": "1 (III) Side Story",
        "Diff": 11,
        "Types": ["ss_set","ss_chain","ss_III","side_stories","#_ss_III_sets"],
        "Excludes": ["1_ss_II_sets"]
},

"4_ss_flatlands": {
        "Desc": "4 Side Stories in Flatlands (No Kit)",
        "Diff": 12,
        "Types": ["ss_set","ss_flatlands","side_stories","#_ss_flatlands"]
},

"ss_collect_2": {
        "Desc": "SS: The Price of Vengeance",
        "Diff": 20,
        "Types": ["ss_specific","ss_flatlands","side_stories"]
},

"1_ss_bosses": {
        "Desc": "Defeat 1 Side Story Boss",
        "Diff": 11,
        "Types": ["ss_set","ss_boss","boss","side_stories","#_ss_bosses"]
},

"8_subjobs": {
        "Desc": "Obtain 8 Subjobs",
        "Diff": 14,
        "Types": ["subjob","exploration"]
},

"6_u_frogs_bl": {
        "Desc": "Capture 6 Unique Froggen / Frogking",
        "Diff": 14,
        "Types": ["combat_counts","specific_character","beast_lore","combat_set","combat","#_u_frogs_bl"]
},

"6_u_birds_bl": {
        "Desc": "Capture 6 Unique Birdian / Birdking",
        "Diff": 14,
        "Types": ["combat_counts","specific_character","beast_lore","combat_set","combat","#_u_birds_bl"]
},

"6_u_rats_bl": {
        "Desc": "Capture 6 Unique Ratkin / Ratking",
        "Diff": 14,
        "Types": ["combat_counts","specific_character","beast_lore","combat_set","combat","#_u_rats_bl"]
},

"str_5_bl": {
        "Desc": "Capture a Strength 5+ Monster",
        "Diff": 9,
        "Types": ["extended_combat","specific_character","beast_lore","combat_set","combat","str_#_bl"]
},

"20_t_nuts": {
        "Desc": "20 Nuts",
        "Diff": 18,
        "Types": ["item_count","nut","item_set","items","#_t_nuts"]
},

"10_u_bows": {
        "Desc": "10 Unique Bows",
        "Diff": 15,
        "Types": ["broad_item_set","weapon","items","#_u_bows"]
},

"6_t_strong_amulets": {
        "Desc": "6 Strong Elemental Reduction Amulets",
        "Diff": 15,
        "Types": ["item_set","item_count","accessory","elem_reduce","items","#_t_strong_amulets"]
},

"4_ss_highlands": {
        "Desc": "4 Side Stories in Highlands (No Kit)",
        "Diff": 13,
        "Types": ["ss_set","ss_highlands","side_stories","#_ss_highlands"]
},

"4_ss_sunlands": {
        "Desc": "4 Side Stories in Sunlands (No Kit)",
        "Diff": 13,
        "Types": ["ss_set","ss_sunlands","side_stories","#_ss_sunlands"]
},

"4_ss_riverlands": {
        "Desc": "4 Side Stories in Riverlands (No Kit)",
        "Diff": 14,
        "Types": ["ss_set","ss_riverlands","side_stories","#_ss_riverlands"]
},

"4_ss_woodlands": {
        "Desc": "4 Side Stories in Woodlands (No Kit)",
        "Diff": 12,
        "Types": ["ss_set","ss_woodlands","side_stories","#_ss_woodlands"]
},

"3_optional_bosses": {
        "Desc": "Defeat 3 Unique Optional Bosses",
        "Diff": 19,
        "Types": ["boss","exploration","#_optional_bosses"]
},

"16_u_concoct": {
        "Desc": "8 Unique Concoctions Used",
        "Diff": 10,
        "Types": ["combat_counts","items","specific_character","combat","#_u_concoct"]
},

"15_u_gold_items": {
        "Desc": "15 Unique Gold Items",
        "Diff": 19,
        "Types": ["broad_item_set","gold_item","items","#_u_gold_items"]
},

"3_u_soul": {
        "Desc": "3 Unique Soul Weapons",
        "Diff": 16,
        "Types": ["item_set","weapon","elem_atk","items","#_u_soul"]
},

"10_t_l_sstones": {
        "Desc": "10 Soulstone (L)'s",
        "Diff": 19,
        "Types": ["item_count","soulstone","item_set","items","#_t_l_sstones"]
},

"10_u_shields": {
        "Desc": "10 Unique Shields",
        "Diff": 16,
        "Types": ["broad_item_set","armor","items","#_u_shields"]
},

"4_u_bracelets": {
        "Desc": "4 Unique Bracelets",
        "Diff": 16,
        "Types": ["item_set","accessory","stat_accessory","items","#_u_bracelets"]
},

"8_u_town_boosts": {
        "Desc": "Inquire/Scrutinize 8 Unique Town Boosts",
        "Diff": 14,
        "Types": ["item_set","info_counts","items","#_u_town_boosts"]
},

"600_phys_atk": {
        "Desc": "600+ Physical Attack",
        "Diff": 16,
        "Types": ["phys_atk","stats","#_phys_atk"]
},

"350_critical": {
        "Desc": "350+ Critical",
        "Diff": 16,
        "Types": ["crit","stats","#_critical"]
},

"530_evasion": {
        "Desc": "530+ Evasion",
        "Diff": 16,
        "Types": ["evasion","stats","#_evasion"]
},

"5_ss_frostlands": {
        "Desc": "5 Side Stories in Frostlands (No Kit)",
        "Diff": 16,
        "Types": ["ss_set","ss_frostlands","side_stories","#_ss_frostlands"]
},

"5_ss_coastlands": {
        "Desc": "5 Side Stories in Coastlands (No Kit)",
        "Diff": 15,
        "Types": ["ss_set","ss_coastlands","side_stories","#_ss_coastlands"]
},

"5_ss_cliftlands": {
        "Desc": "5 Side Stories in Cliftlands (No Kit)",
        "Diff": 14,
        "Types": ["ss_set","ss_cliftlands","side_stories","#_ss_cliftlands"]
},

"6_u_magic_bl": {
        "Desc": "Capture 6 Unique Elemental Themed Enemies",
        "Diff": 19,
        "Types": ["combat_counts","specific_character","beast_lore","combat_set","combat","#_u_magic_bl"]
},

"2_ch_2": {
        "Desc": "Complete 2 Chapter 2's",
        "Diff": 18,
        "Types": ["chapter","progression","#_ch_2","ch_2"],
        "Excludes": ["1_ch_2"]
},

"3_u_dragon": {
        "Desc": "3 Unique Dragon Equipments",
        "Diff": 15,
        "Types": ["item_set","armor","weapon","crit","items","#_u_dragon"]
},

"2_u_boss_drop": {
        "Desc": "2 Unique Boss Equipment Drops",
        "Diff": 17,
        "Types": ["broad_item_set","armor","weapon","progression","items","progression","#_u_boss_drop"]
},

"4_u_stones": {
        "Desc": "4 Unique Status Stones",
        "Diff": 17,
        "Types": ["item_set","accessory","status_stone","accessory","items","#_u_stones"]
},

"500_elem_def": {
        "Desc": "500+ Elemental Defense",
        "Diff": 17,
        "Types": ["elem_def","stats","#_elem_def"]
},

"8_u_silver": {
        "Desc": "8 Unique Silver Equipments",
        "Diff": 15,
        "Types": ["item_set","armor","weapon","items","#_u_silver"]
},

"2_u_rune": {
        "Desc": "2 Unique Rune Weapons",
        "Diff": 14,
        "Types": ["item_set","weapon","elem_atk","items","#_u_rune"]
},

"4_u_adamantine": {
        "Desc": "4 Unique Adamantine Equipments",
        "Diff": 21,
        "Types": ["item_set","weapon","elem_atk","armor","items","#_u_adamantine"]
},

"4_u_phys_staves": {
        "Desc": "4 Unique Physical Staves",
        "Diff": 18,
        "Types": ["item_set","weapon","phys_atk","items","#_u_phys_staves"]
},

"15_u_evasion": {
        "Desc": "15 Unique Evasion Equipments",
        "Diff": 18,
        "Types": ["broad_item_set","armor","weapon","evasion","items","#_u_evasion"]
},

"15_u_speed": {
        "Desc": "15 Unique Speed Equipments",
        "Diff": 18,
        "Types": ["broad_item_set","armor","weapon","speed","items","#_u_speed"]
},

"20_t_m_sstones": {
        "Desc": "20 Soulstone (M)'s",
        "Diff": 21,
        "Types": ["item_count","soulstone","item_set","items","#_t_m_sstones"]
},

"7_t_l_nuts": {
        "Desc": "7 Nut (L)'s",
        "Diff": 22,
        "Types": ["item_count","nut","item_set","items","#_t_l_nuts"]
},

"10_u_swords": {
        "Desc": "10 Unique Swords",
        "Diff": 18,
        "Types": ["broad_item_set","weapon","items","#_u_swords"]
},

"3_u_necklaces": {
        "Desc": "3 Unique Necklaces",
        "Diff": 18,
        "Types": ["item_set","accessory","stat_accessory","items","#_u_necklaces"]
},

"300_accuracy": {
        "Desc": "300+ Accuracy",
        "Diff": 18,
        "Types": ["accuracy","stats","#_accuracy"]
},

"3_ss_II_sets": {
        "Desc": "3 (II) Side Stories",
        "Diff": 14,
        "Types": ["ss_set","ss_chain","ss_II","side_stories","#_ss_II_sets"],
        "Excludes": ["1_ss_II_sets","2_ss_II_sets"]
},

"5_ss_flatlands": {
        "Desc": "5 Side Stories in Flatlands (No Kit)",
        "Diff": 16,
        "Types": ["ss_set","ss_flatlands","side_stories","#_ss_flatlands"]
},

"5_ss_highlands": {
        "Desc": "5 Side Stories in Highlands (No Kit)",
        "Diff": 15,
        "Types": ["ss_set","ss_highlands","side_stories","#_ss_highlands"]
},

"5_ss_woodlands": {
        "Desc": "5 Side Stories in Woodlands (No Kit)",
        "Diff": 14,
        "Types": ["ss_set","ss_woodlands","side_stories","#_ss_woodlands"]
},

"5_chapter_3_chests": {
        "Desc": "Open 5 Chests in a Chapter 3 Dungeon",
        "Diff": 14,
        "Types": ["chest","chest_set","exploration","ch_3"]
},

"ch_2_duo": {
        "Desc": "Chapter 2 Boss with 2 only Travelers",
        "Diff": 17,
        "Types": ["combat_challenge","boss","progression","combat","ch_2"]
},

"8_ch_1": {
        "Desc": "Complete 8 Chapter 1's",
        "Diff": 15,
        "Types": ["chapter","progression","#_ch_1","ch_1"],
        "Excludes": ["5_ch_1","6_ch_1","7_ch_1"]
},

"25_u_armors": {
        "Desc": "25 Unique Armors",
        "Diff": 19,
        "Types": ["broad_item_set","armor","items","#_u_armors"]
},

"525_phys_def": {
        "Desc": "525+ Physical Defense",
        "Diff": 19,
        "Types": ["phys_def","stats","#_phys_def"]
},

"str_7_NPC": {
        "Desc": "Defeat a Strength 7+ NPC",
        "Diff": 19,
        "Types": ["combat_set","combat","str_#_NPC"]
},

"15_t_s_nuts": {
        "Desc": "15 Nut (S)'s",
        "Diff": 22,
        "Types": ["item_count","nut","item_set","items","#_t_s_nuts"]
},

"6_t_olives": {
        "Desc": "6 Olive (L)'s",
        "Diff": 21,
        "Types": ["item_count","broad_item_set","items","#_t_olives"]
},

"10_t_elem_amulets": {
        "Desc": "10 Elemental Reduction Amulets/Charms",
        "Diff": 20,
        "Types": ["item_set","item_count","elem_reduce","accessory","items","#_t_elem_amulets"]
},

"5_u_bracelets": {
        "Desc": "5 Unique Bracelets",
        "Diff": 20,
        "Types": ["item_set","accessory","stat_accessory","items","#_u_bracelets"]
},

"250_sp": {
        "Desc": "250+ SP",
        "Diff": 20,
        "Types": ["sp","stats","#_sp"]
},

"700_elem_atk": {
        "Desc": "700+ Elemental Attack",
        "Diff": 20,
        "Types": ["elem_atk","stats","#_elem_atk"]
},

"450_speed": {
        "Desc": "450+ Speed",
        "Diff": 20,
        "Types": ["speed","stats","#_speed"]
},

"400_critical": {
        "Desc": "400+ Critical",
        "Diff": 20,
        "Types": ["crit","stats","#_critical"]
},

"5_ss_sunlands": {
        "Desc": "5 Side Stories in Sunlands (No Kit)",
        "Diff": 16,
        "Types": ["ss_set","ss_sunlands","side_stories","#_ss_sunlands"]
},

"5_ss_riverlands": {
        "Desc": "5 Side Stories in Riverlands (No Kit)",
        "Diff": 16,
        "Types": ["ss_set","ss_riverlands","side_stories","#_ss_riverlands"]
},

"4_optional_bosses": {
        "Desc": "Defeat 4 Unique Optional Bosses",
        "Diff": 23,
        "Types": ["boss","exploration","#_optional_bosses"]
},

"1_ch_3": {
        "Desc": "Complete a Chapter 3",
        "Diff": 21,
        "Types": ["chapter","progression","#_ch_3","ch_3"],
        "Excludes": ["1_ch_2"]
},

"3_u_forbidden": {
        "Desc": "3 Unique Forbbiden Equipments",
        "Diff": 20,
        "Types": ["item_set","weapon","forbidden","items","#_u_forbidden"]
},

"18_u_headgears": {
        "Desc": "18 Unique Headgears",
        "Diff": 20,
        "Types": ["broad_item_set","armor","items","#_u_headgears"]
},

"18_u_body_armors": {
        "Desc": "18 Unique Body Armors",
        "Diff": 20,
        "Types": ["broad_item_set","armor","items","#_u_body_armors"]
},

"10_t_stones": {
        "Desc": "10 Status Stones",
        "Diff": 20,
        "Types": ["item_set","item_count","status_stone","accessory","items","#_t_stones"]
},

"3_ch_2": {
        "Desc": "Complete 3 Chapter 2's",
        "Diff": 22,
        "Types": ["chapter","progression","#_ch_2","ch_2"],
        "Excludes": ["1_ch_2","2_ch_2"]
},

"30_t_s_sstones": {
        "Desc": "30 Soulstone (S)'s",
        "Diff": 23,
        "Types": ["item_count","soulstone","item_set","items","#_t_s_sstones"]
},

"7_u_rings": {
        "Desc": "7 Unique Rings",
        "Diff": 21,
        "Types": ["item_set","accessory","stat_accessory","items","#_u_rings"]
},

"3_alluring": {
        "Desc": "3 Alluring Ribbons",
        "Diff": 21,
        "Types": ["item_set","accessory","side_stories","items","#_alluring"]
},

"600_elem_def": {
        "Desc": "600+ Elemental Defense",
        "Diff": 21,
        "Types": ["elem_def","stats","#_elem_def"]
},

"6_ss_cliftlands": {
        "Desc": "6 Side Stories in Cliftlands (No Kit)",
        "Diff": 17,
        "Types": ["ss_set","ss_cliftlands","side_stories","#_ss_cliftlands"]
},

"3_u_boss_drop": {
        "Desc": "3 Unique Boss Equipment Drops",
        "Diff": 22,
        "Types": ["broad_item_set","armor","weapon","progression","items","progression","#_u_boss_drop"]
},

"6_t_items": {
        "Desc": "6 Pages in All Items",
        "Diff": 22,
        "Types": ["broad_item_set","item_count","items","#_t_items"]
},

"3500_hp": {
        "Desc": "3500+ HP",
        "Diff": 22,
        "Types": ["hp","stats","#_hp"]
},

"650_phys_atk": {
        "Desc": "650+ Physical Attack",
        "Diff": 22,
        "Types": ["phys_atk","stats","#_phys_atk"]
},

"2_ss_region_sets": {
        "Desc": "2 Side Stories in Each Region",
        "Diff": 20,
        "Types": ["broad_ss_set","side_stories","#_ss_region_sets"]
},

"2_ss_III_sets": {
        "Desc": "2 (III) Side Stories",
        "Diff": 18,
        "Types": ["ss_set","ss_chain","ss_III","side_stories","#_ss_III_sets"],
        "Excludes": ["1_ss_II_sets","2_ss_II_sets","1_ss_III_sets"]
},

"6_ss_frostlands": {
        "Desc": "6 Side Stories in Frostlands (No Kit)",
        "Diff": 20,
        "Types": ["ss_set","ss_frostlands","side_stories","#_ss_frostlands"]
},

"6_ss_flatlands": {
        "Desc": "6 Side Stories in Flatlands (No Kit)",
        "Diff": 18,
        "Types": ["ss_set","ss_flatlands","side_stories","#_ss_flatlands"]
},

"6_ss_coastlands": {
        "Desc": "6 Side Stories in Coastlands (No Kit)",
        "Diff": 19,
        "Types": ["ss_set","ss_coastlands","side_stories","#_ss_coastlands"]
},

"str_6_bl": {
        "Desc": "Capture a Strength 6+ Monster",
        "Diff": 15,
        "Types": ["extended_combat","specific_character","beast_lore","combat_set","combat","str_#_bl"]
},

"ch_2_slow": {
        "Desc": "Chapter 2 Boss without Vets",
        "Diff": 23,
        "Types": ["combat_challenge","boss","progression","combat","ch_2"]
},

"ch_2_no_boost": {
        "Desc": "Chapter 2 Boss without Boosting",
        "Diff": 20,
        "Types": ["combat_challenge","boss","progression","combat","ch_2"]
},

"4_u_dragon": {
        "Desc": "4 Unique Dragon Equipments",
        "Diff": 19,
        "Types": ["item_set","armor","weapon","crit","items","#_u_dragon"]
},

"15_u_accuracy": {
        "Desc": "15 Unique Accuracy Equipments",
        "Diff": 22,
        "Types": ["broad_item_set","armor","weapon","accuracy","items","#_u_accuracy"]
},

"15_t_m_nuts": {
        "Desc": "15 Nut (M)'s",
        "Diff": 25,
        "Types": ["item_count","nut","item_set","items","side_stories","#_t_m_nuts"]
},

"30_u_weapons": {
        "Desc": "30 Unique Weapons",
        "Diff": 22,
        "Types": ["broad_item_set","weapon","items","#_u_weapons"]
},

"6_u_stones": {
        "Desc": "6 Unique Status Stones",
        "Diff": 22,
        "Types": ["item_set","accessory","status_stone","accessory","items","#_u_stones"]
},

"20_u_accessories": {
        "Desc": "20 Unique Accessories",
        "Diff": 22,
        "Types": ["broad_item_set","accessory","stat_accessory","elem_reduce","items","#_u_accessories"]
},

"4_ss_II_sets": {
        "Desc": "4 (II) Side Stories",
        "Diff": 17,
        "Types": ["ss_set","ss_chain","ss_II","side_stories","#_ss_II_sets"],
        "Excludes": ["1_ss_II_sets","2_ss_II_sets","3_ss_II_sets"]
},

"9_u_lizards_bl": {
        "Desc": "Capture 9 Unique Lizardmen / Lizardking",
        "Diff": 22,
        "Types": ["combat_counts","specific_character","beast_lore","combat_set","combat","#_u_lizards_bl"]
},

"9_u_frogs_bl": {
        "Desc": "Capture 9 Unique Froggen / Frogking",
        "Diff": 22,
        "Types": ["combat_counts","specific_character","beast_lore","combat_set","combat","#_u_frogs_bl"]
},

"9_u_birds_bl": {
        "Desc": "Capture 9 Unique Birdian / Birdking",
        "Diff": 22,
        "Types": ["combat_counts","specific_character","beast_lore","combat_set","combat","#_u_birds_bl"]
},

"9_u_rats_bl": {
        "Desc": "Capture 9 Unique Ratkin / Ratking",
        "Diff": 22,
        "Types": ["combat_counts","specific_character","beast_lore","combat_set","combat","#_u_rats_bl"]
},

"15_u_critical": {
        "Desc": "15 Unique Critical Equipments",
        "Diff": 22,
        "Types": ["broad_item_set","armor","weapon","crit","items","#_u_critical"]
},

"7_ss_frostlands": {
        "Desc": "7 Side Stories in Frostlands (No Kit)",
        "Diff": 22,
        "Types": ["ss_set","ss_frostlands","side_stories","#_ss_frostlands"]
},

"6_ss_woodlands": {
        "Desc": "6 Side Stories in Woodlands (No Kit)",
        "Diff": 16,
        "Types": ["ss_set","ss_woodlands","side_stories","#_ss_woodlands"]
},

"15_u_elem_wpn": {
        "Desc": "15 Unique Elemental Non-Staff Weapons",
        "Diff": 23,
        "Types": ["broad_item_set","weapon","elem_atk","items","#_u_elem_wpn"]
},

"30_t_nuts": {
        "Desc": "30 Nuts",
        "Diff": 25,
        "Types": ["item_count","nut","item_set","items","side_stories","#_t_nuts"]
},

"18_u_sstones": {
        "Desc": "18 Unique Soulstones",
        "Diff": 24,
        "Types": ["broad_item_set","soulstone","items","#_u_sstones"]
},

"15_u_axes": {
        "Desc": "15 Unique Axes",
        "Diff": 23,
        "Types": ["broad_item_set","weapon","items","#_u_axes"]
},

"9_u_elem_reduce": {
        "Desc": "9 Unique Elemental Reduction Equipments",
        "Diff": 23,
        "Types": ["item_set","armor","accessory","elem_reduce","items","#_u_elem_reduce"]
},

"580_evasion": {
        "Desc": "580+ Evasion",
        "Diff": 23,
        "Types": ["evasion","stats","#_evasion"]
},

"ss_boss_3": {
        "Desc": "SS: Scourge of the Seas",
        "Diff": 20,
        "Types": ["ss_specific","ss_coastlands","ss_boss","boss","side_stories"]
},

"20_u_gold_items": {
        "Desc": "20 Unique Gold Items",
        "Diff": 25,
        "Types": ["broad_item_set","gold_item","items","#_u_gold_items"]
},

"5_u_phys_staves": {
        "Desc": "5 Unique Physical Staves",
        "Diff": 23,
        "Types": ["item_set","weapon","phys_atk","items","#_u_phys_staves"]
},

"15_u_spears": {
        "Desc": "15 Unique Spears",
        "Diff": 23,
        "Types": ["broad_item_set","weapon","items","#_u_spears"]
},

"4_u_necklaces": {
        "Desc": "4 Unique Necklaces",
        "Diff": 23,
        "Types": ["item_set","accessory","stat_accessory","items","#_u_necklaces"]
},

"300_sp": {
        "Desc": "300+ SP",
        "Diff": 23,
        "Types": ["sp","stats","#_sp"]
},

"600_phys_def": {
        "Desc": "600+ Physical Defense",
        "Diff": 23,
        "Types": ["phys_def","stats","#_phys_def"]
},

"450_critical": {
        "Desc": "450+ Critical",
        "Diff": 23,
        "Types": ["crit","stats","#_critical"]
},

"7_ss_flatlands": {
        "Desc": "7 Side Stories in Flatlands (No Kit)",
        "Diff": 21,
        "Types": ["ss_set","ss_flatlands","side_stories","#_ss_flatlands"]
},

"6_ss_sunlands": {
        "Desc": "6 Side Stories in Sunlands (No Kit)",
        "Diff": 18,
        "Types": ["ss_set","ss_sunlands","side_stories","#_ss_sunlands"]
},

"15_u_daggers": {
        "Desc": "15 Unique Daggers",
        "Diff": 24,
        "Types": ["broad_item_set","weapon","items","#_u_daggers"]
},

"13_u_shields": {
        "Desc": "13 Unique Shields",
        "Diff": 24,
        "Types": ["broad_item_set","armor","items","#_u_shields"]
},

"35_u_armors": {
        "Desc": "35 Unique Armors",
        "Diff": 24,
        "Types": ["broad_item_set","armor","items","#_u_armors"]
},

"500_speed": {
        "Desc": "500+ Speed",
        "Diff": 24,
        "Types": ["speed","stats","#_speed"]
},

"20_side_stories": {
        "Desc": "20 Side Stories",
        "Diff": 19,
        "Types": ["broad_ss_set","side_stories","#_side_stories"]
},

"7_ss_highlands": {
        "Desc": "7 Side Stories in Highlands (No Kit)",
        "Diff": 18,
        "Types": ["ss_set","ss_highlands","side_stories","#_ss_highlands"]
},

"ss_boss_4": {
        "Desc": "SS: Shadow over the Sands",
        "Diff": 23,
        "Types": ["ss_specific","ss_sunlands","ss_boss","boss","side_stories"]
},

"630_evasion": {
        "Desc": "630+ Evasion",
        "Diff": 24,
        "Types": ["evasion","stats","#_evasion"]
},

"6_ss_riverlands": {
        "Desc": "6 Side Stories in Riverlands (No Kit)",
        "Diff": 18,
        "Types": ["ss_set","ss_riverlands","side_stories","#_ss_riverlands"]
},

"4_ch_2": {
        "Desc": "Complete 4 Chapter 2's",
        "Diff": 25,
        "Types": ["chapter","progression","#_ch_2","ch_2"],
        "Excludes": ["1_ch_2","2_ch_2","3_ch_2"]
},

"20_u_speed": {
        "Desc": "20 Unique Speed Equipments",
        "Diff": 25,
        "Types": ["broad_item_set","armor","weapon","speed","items","#_u_speed"]
},

"30_t_m_sstones": {
        "Desc": "30 Soulstone (M)'s",
        "Diff": 25,
        "Types": ["item_count","soulstone","item_set","items","#_t_m_sstones"]
},

"15_u_bows": {
        "Desc": "15 Unique Bows",
        "Diff": 25,
        "Types": ["broad_item_set","weapon","items","#_u_bows"]
},

"6_u_bracelets": {
        "Desc": "6 Unique Bracelets",
        "Diff": 25,
        "Types": ["item_set","accessory","stat_accessory","items","#_u_bracelets"]
},

"350_accuracy": {
        "Desc": "350+ Accuracy",
        "Diff": 25,
        "Types": ["accuracy","stats","#_accuracy"]
},

"7_ss_woodlands": {
        "Desc": "7 Side Stories in Woodlands (No Kit)",
        "Diff": 18,
        "Types": ["ss_set","ss_woodlands","side_stories","#_ss_woodlands"]
},

"10_u_magic_bl": {
        "Desc": "Capture 9 Unique Elemental Themed Enemies",
        "Diff": 25,
        "Types": ["combat_counts","specific_character","beast_lore","combat_set","combat","#_u_magic_bl"]
},

"3_u_rune": {
        "Desc": "3 Unique Rune Weapons",
        "Diff": 20,
        "Types": ["item_set","weapon","elem_atk","items","progression","#_u_rune"]
},

/*
"3_chest_swords": {
        "Desc": "Open 3 Chests containing Swords",
        "Diff": 6,
        "Types": ["item_set","weapon","items","#_u_swords","chests","chest_counts"]
},

"6_chest_swords": {
        "Desc": "Open 6 Chests containing Swords",
        "Diff": 13,
        "Types": ["item_set","weapon","items","#_u_swords","chests","chest_counts","exploration"]
},

"2_chest_spears": {
        "Desc": "Open 2 Chests containing Spears",
        "Diff": 4,
        "Types": ["item_set","weapon","items","#_u_spears","chests","chest_counts"]
},

"4_chest_spears": {
        "Desc": "Open 4 Chests containing Spears",
        "Diff": 9,
        "Types": ["item_set","weapon","items","#_u_spears","chests","chest_counts","exploration"]
},

"3_chest_daggers": {
        "Desc": "Open 3 Chests containing Daggers",
        "Diff": 5,
        "Types": ["item_set","weapon","items","#_u_daggers","chests","chest_counts","specific_character"]
},

"5_chest_daggers": {
        "Desc": "Open 5 Chests containing Daggers",
        "Diff": 10,
        "Types": ["item_set","weapon","items","#_u_daggers","chests","chest_counts","specific_character","exploration"]
},

"2_chest_axes": {
        "Desc": "Open 2 Chests containing Axes",
        "Diff": 5,
        "Types": ["item_set","weapon","items","#_u_axes","chests","chest_counts","specific_character"]
},

"4_chest_axes": {
        "Desc": "Open 4 Chests containing Axes",
        "Diff": 10,
        "Types": ["item_set","weapon","items","#_u_axes","chests","chest_counts","specific_character","exploration"]
},

"2_chest_bows": {
        "Desc": "Open 2 Chests containing Bows",
        "Diff": 6,
        "Types": ["item_set","weapon","items","#_u_bows","chests","chest_counts","specific_character"]
},

"4_chest_bows": {
        "Desc": "Open 4 Chests containing Bows",
        "Diff": 11,
        "Types": ["item_set","weapon","items","#_u_bows","chests","chest_counts","specific_character","exploration"]
},

"3_chest_staves": {
        "Desc": "Open 3 Chests containing Staves",
        "Diff": 7,
        "Types": ["item_set","weapon","items","#_u_staves","chests","chest_counts","specific_character","exploration"]
},

"5_chest_staves": {
        "Desc": "Open 5 Chests containing Staves",
        "Diff": 11,
        "Types": ["item_set","weapon","items","#_u_staves","chests","chest_counts","specific_character","exploration"]
},
*/

"1_5_region_chapters": {
        "Desc": "Complete at least 1 chapter in 5 different regions",
        "Diff": 7,
        "Types": ["chapter","progression","#_ch_1","ch_1"],
        "Excludes": ["1_ch_2"]
},

"1_6_region_chapters": {
        "Desc": "Complete at least 1 chapter in 6 different regions",
        "Diff": 12,
        "Types": ["chapter","progression","#_ch_1","ch_1"],
        "Excludes": ["1_ch_2"]
},

"1_7_region_chapters": {
        "Desc": "Complete at least 1 chapter in 7 different regions",
        "Diff": 16,
        "Types": ["chapter","progression","#_ch_1","ch_1"],
        "Excludes": ["1_ch_2","2_ch_2"]
},

"1_8_region_chapters": {
        "Desc": "Complete at least 1 chapter in each region",
        "Diff": 19,
        "Types": ["chapter","progression","#_ch_1","ch_1"],
        "Excludes": ["1_ch_2","2_ch_2"]
},

"2_2_region_chapters": {
        "Desc": "Complete at least 2 chapters in each of 2 different regions",
        "Diff": 20,
        "Types": ["chapter","progression","#_ch_1","ch_1","#_ch_2","ch_2"],
        "Excludes": ["1_ch_2","2_ch_2"]
},

"2_3_region_chapters": {
        "Desc": "Complete at least 2 chapters in each of 3 different regions",
        "Diff": 24,
        "Types": ["chapter","progression","#_ch_1","ch_1","#_ch_2","ch_2"],
        "Excludes": ["1_ch_2","2_ch_2","3_ch_2"]
},

};


/*
"2_purple_highlands": {
        "Desc": "2 Purple Chests in Highlands",
        "Diff": 5,
        "Types": ["chests","chest_counts","exploration","specific_character"]
},

"4_purple_highlands": {
        "Desc": "4 Purple Chests in Highlands",
        "Diff": 6,
        "Types": ["chests","chest_counts","exploration","specific_character"]
},

"5_purple_highlands": {
        "Desc": "5 Purple Chests in Highlands",
        "Diff": 9,
        "Types": ["chests","chest_counts","exploration","specific_character"]
},

"3_purple_sunlands": {
        "Desc": "3 Purple Chests in Sunlands",
        "Diff": 4,
        "Types": ["chests","chest_counts","exploration","specific_character"]
},

"6_purple_sunlands": {
        "Desc": "6 Purple Chests in Sunlands",
        "Diff": 8,
        "Types": ["chests","chest_counts","exploration","specific_character"]
},

"7_purple_sunlands": {
        "Desc": "8 Purple Chests in Sunlands",
        "Diff": 10,
        "Types": ["chests","chest_counts","exploration","specific_character"]
},

"3_purple_riverlands": {
        "Desc": "3 Purple Chests in Riverlands",
        "Diff": 4,
        "Types": ["chests","chest_counts","exploration","specific_character"]
},

"3_purple_riverlands": {
        "Desc": "6 Purple Chests in Riverlands",
        "Diff": 8,
        "Types": ["chests","chest_counts","exploration","specific_character"]
},

"3_purple_riverlands": {
        "Desc": "8 Purple Chests in Riverlands",
        "Diff": 10,
        "Types": ["chests","chest_counts","exploration","specific_character"]
},
*/
