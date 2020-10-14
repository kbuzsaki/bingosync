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
  template[0] = [(A + f + 1), (B + i + 1), (C + g + 1), (D + j + 1), (E + h + 1)];
  template[1] = [(D + g + 1), (E + j + 1), (A + h + 1), (B + f + 1), (C + i + 1)];
  template[2] = [(B + h + 1), (C + f + 1), (D + i + 1), (E + g + 1), (A + j + 1)];
  template[3] = [(E + i + 1), (A + g + 1), (B + j + 1), (C + h + 1), (D + f + 1)];
  template[4] = [(C + j + 1), (D + h + 1), (E + f + 1), (A + i + 1), (B + g + 1)];

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

    if (!bingoList[key].hasOwnProperty("Score")) {
      bingoList[key].Score = 0;
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
  var types = {};
  for (const key of Object.keys(bingoTypes)) {
    if (!bingoTypes[key].hasOwnProperty("Max")) {
      bingoTypes.key.Max = 5;
    }
    types[key] = bingoTypes[key].Max;
  }

  var maxScore = 9.5;
  var remainingScore = maxScore;

  //Seed the random
  seed = Math.seedrandom(opts.seed || Math.ceil(999999 * Math.random()));

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
    chosenGoals[diffIndex] = {
      "name": goal.Desc
    };

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
            }
          }
        }
      }
    }

    //increment score
    //console.log("Chosen Goal's Score: " + goal.Score);
    remainingScore = remainingScore - goal.Score;
    //console.log("Remaining Score: " + remainingScore);
    //remove all goals of the same difficulty from choosable[], also remove excluded goals if relevant
    //also remove goals with too high score if relevant
    for (var j = 0; j < choosable.length; j++) {
      if (bingoList[choosable[j]].Diff == goal.Diff && goal.Diff != 0) {
        var l = choosable.splice(j, 1);
        unchoosable = unchoosable.concat(l);
        j--;
        continue;
      }
      if (bingoList[choosable[j]].Score > remainingScore) {
        unchoosable = unchoosable.concat(choosable.splice(j, 1));
        j--;
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
          if (goal.Synergy[j] == bingoList[choosable[k]].Synergy[l] &&
            !choosable.includes(bingoList[choosable[k]].Synergy[l]) &&
            !unchoosable.includes(bingoList[choosable[k]].Synergy[l])) {
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

var bingoTypes = {};

var bingoList = {
  //Sorted alphabetically and grouped

  //Bosses. Dream versions grouped instead of alphabetical


  "2DreamBosses": {
    "Desc": "Defeat two Dream Bosses"
  },

  "BVessel": {
    "Desc": "Defeat Broken Vessel",
    "Excludes": ["LostKin"]
  },

  "LostKin": {
    "Desc": "Defeat Lost Kin",
    "Excludes": ["BVessel"]
  },

  "CG1": {
    "Desc": "Defeat Crystal Guardian 1",
    "Excludes": ["CG2"]
  },

  "CG2": {
    "Desc": "Defeat Crystal Guardian 2",
    "Excludes": ["CG1"]
  },

  "Collector": {
    "Desc": "Defeat Collector",
    "Excludes": ["KEGrubs"]
  },

  "DDefender": {
    "Desc": "Defeat Dung Defender",
    "Excludes": ["WhiteDefender"]
  },

  /*"WhiteDefender": {
    "Desc": "Defeat White Defender",
    "Types": ["Tiebreaker"],
    "Excludes": ["DDefender", "MrMushroom1"]
  },*/

  "FChamp": {
    "Desc": "Defeat Failed Champion"
  },

  "FKnight_BMawlek": {
    "Desc": "Defeat False Knight + Brooding Mawlek"
  },

  "Flukemarm": {
    "Desc": "Defeat Flukemarm"
  },

/*
  "GPZote": {
    "Desc": "Defeat Grey Prince Zote",
    "Types": ["Tiebreaker"],
    "Excludes": ["ColoZote", "DeepnestZote", "Colo1"]
  },
 */

  "HiveKnight": {
    "Desc": "Defeat Hive Knight",
    "Excludes": ["HiveMask"]
  },

  "Hornet2": {
    "Desc": "Defeat Hornet 2",
    "Excludes": ["VisitQueensShell"]
  },

  "MLords": {
    "Desc": "Defeat Mantis Lords"
  },

  "Nosk": {
    "Desc": "Defeat Nosk",
    "Excludes": ["PaleOreCheck"]
  },

/*
  "OroMato": {
    "Desc": "Defeat Oro and Mato",
    "Types": ["Tiebreaker"],
    "Excludes": ["Godhome", "Radiant"]
  },
  */

  "PaleLurker": {
    "Desc": "Defeat Pale Lurker"
  },

/*
  "PaintmasterSheo": {
    "Desc": "Defeat Paintmaster Sheo",
    "Types": ["Tiebreaker"],
    "Excludes": ["Godhome", "Radiant"]
  },

  "PVessel": {
    "Desc": "Defeat Pure Vessel",
    "Types": ["Tiebreaker"],
    "Excludes": ["Godhome", "Radiant"]
  },

*/

  "Radiant": { // Under I know you're reading this and I hope it fills you with joy
    "Desc": "Defeat any one Radiant Boss",
    "Excludes": ["Godhome", "Ordeal20"]
  },

  "SoulMaster": {
    "Desc": "Defeat Soul Master",
    "Excludes": ["SoulTyrant"]
  },

  "SoulTyrant": {
    "Desc": "Defeat Soul Tyrant",
    "Excludes": ["SoulMaster"]
  },

  "TLord": {
    "Desc": "Defeat Traitor Lord",
    "Excludes": ["WhiteLady", "ClothQuest"]
  },

  "TMGrimm": {
    "Desc": "Defeat Troupe Master Grimm"
  },

  /*"NKGrimm": {
    "Desc": "Defeat Nightmare King Grimm",
    "Types": ["Tiebreaker"],
    "Excludes": ["CarefreeMelody"]
  },*/

  "Uumuu": {
    "Desc": "Defeat Uumuu"
  },

  "WK": {
    "Desc": "Defeat Watcher Knights"
  },

  "VK_MMC": {
    "Desc": "Defeat Vengefly King + Massive Moss Charger"
  },




  //Dream Warriors


  "2DreamWarriors": {
    "Desc": "Defeat two dream warriors" // No exclusion for now - but I wouldn't be surprised if a type demand rises up
  },

  "Galien": {
    "Desc": "Defeat Galien"
  },

  "Gorb": {
    "Desc": "Defeat Gorb"
  },

  "Hu": {
    "Desc": "Defeat Elder Hu"
  },

  "Marmu": {
    "Desc": "Defeat Marmu"
  },

  "Markoth": {
    "Desc": "Defeat Markoth"
  },

  "NoEyes": {
    "Desc": "Defeat No Eyes"
  },

  "Xero": {
    "Desc": "Defeat Xero"
  },




  //Enemies

  "2Warriors": {
    "Desc": "Kill two Soul Warriors",
    "Excludes": ["SSoulCheck"]
  },

  "3Sentries": {
    "Desc": "Kill three different Great Husk Sentries",
    "Excludes": ["GHusk"]
  },

  "Aluba": {
    "Desc": "Kill an Aluba"
  },

  "Aluba2": {
    "Desc": "Kill two different Alubas"
  },

  "Colo1": {
    "Desc": "Colosseum 1",
    "Excludes": ["ColoZote", "GPZote"]
  },

/*
  "Colo3": {
    "Desc": "Colosseum 3",
    "Types": ["Tiebreaker"]
  },

*/

  "ColoZote": {
    "Desc": "Defeat Colosseum Zote",
    "Excludes": ["Colo1", "GPZote"]
  },

  "CrystalCrawler": {
    "Desc": "Crystal Crawler Journal Entry"
  },

  "Devout": {
    "Desc": "Kill 6 different Stalking Devouts"
  },

  "Durandoo": {
    "Desc": "Kill a Durandoo",
    "Excludes": ["Gulka"]
  },

  "GHopper": {
    "Desc": "Kill a Great Hopper"
  },

  "GHusk": {
    "Desc": "Kill Gorgeous Husk",
    "Excludes": ["3Sentries"]
  },

  "Gulka": {
    "Desc": "Kill a Gulka with its own projectile",
    "Excludes": ["Durandoo"]
  },

  "Kingsmould": {
    "Desc": "Kill a Kingsmould",
    "Excludes": ["PoP"],
    "Score": 0.88
  },

  "Lightseed": {
    "Desc": "Kill a Lightseed"
  },

  "Maggots": {
    "Desc": "Kill two different Maggots"
  },

  "Marissa": {
    "Desc": "Dream Nail Marissa",
    "Excludes": ["Springs", "2Keys"]
  },

  "Millibelle": {
    "Desc": "Slash Millibelle in Pleasure House",
    "Excludes": ["Bank"]
  },

  "Mimics": {
    "Desc": "Kill 4 Mimics"
  },

  "Myla": {
    "Desc": "Kill Myla",
    "Score": 1.18
  },




  //Items. Different types (Dreamers/Skills/Keys/etc) grouped together

  "Herrah": {
    "Desc": "Obtain Herrah",
    "Score": 1.30
  },

  "Lurien": {
    "Desc": "Obtain Lurien",
    "Score": 1.30
  },

  "Monomon": {
    "Desc": "Obtain Monomon",
    "Score": 1.30
  },


  "DeepStag": {
    "Desc": "Ride the stag to Distant Village",
    "Excludes": ["Midwife", "VisitDistantHive"],
    "Score": 1.30
  },

  "GardenStag": {
    "Desc": "Ride the stag to Queen's Gardens",
    "Score": 1.30
  },

  "HiddenStag": {
    "Desc": "Ride the stag to Hidden Station",
    "Excludes": ["WPShadeSkip"],
    "Score": 1.30
  },

  "KingStag": {
    "Desc": "Ride the stag to King's Station",
    "Score": 1.30
  },

  "QueensStag": {
    "Desc": "Ride the stag to Queen's Station",
    "Score": 1.30
  },



  "5Charms": {
    "Desc": "Have 5 or more Charms",
    "Score": 0.20
  },

  "5CharmsEquipped": {
    "Desc": "Equip 5 Charms at the same time",
  },


  "CarefreeMelody": {
    "Desc": "Obtain Carefree Melody",
    "Excludes": ["NKGrimm", "Brumm"]
  },

  "CompassSwarm": {
    "Desc": "Obtain Wayward Compass or Gathering Swarm",
    "Score": 1.06
  },

  "DWielderShield": {
    "Desc": "Obtain Dream Wielder or Dreamshield",
    "Score": 1.06
  },

  "FCharms": {
    "Desc": "Obtain two Unbreakable charms",
    "Score": 1.00
  },

  "FlukenestFury": {
    "Desc": "Obtain Flukenest or Fury of the Fallen",
    "Score": 1.06
  },

  "GrubsongElegy": {
    "Desc": "Obtain Grubsong or Grubberfly's Elegy",
    "Score": 1.06
  },

  "GWombWeavers": {
    "Desc": "Obtain Glowing Womb or Weaversong",
    "Score": 1.06
  },

  "HeavyBlowSteady": {
    "Desc": "Obtain Heavy Blow or Steady Body",
    "Score": 1.06
  },

  "HivebloodShadow": {
    "Desc": "Obtain Hiveblood or Sharp Shadow",
    "Score": 1.06
  },

  "LifebloodCharms": {
    "Desc": "Obtain two Lifeblood charms",
    "Score": 1.00
  },

  "Longnail": {
    "Desc": "Obtain Longnail or Mark of Pride",
    "Score": 1.06
  },

  "QSlashGlory": {
    "Desc": "Obtain Quick Slash or Nailmaster's Glory",
    "Score": 1.06
  },

  "QuickDeepFocus": {
    "Desc": "Obtain Quick Focus or Deep Focus",
    "Score": 1.06
  },

  "ShamanStoneTwister": {
    "Desc": "Obtain Shaman Stone or Spell Twister",
    "Score": 1.06
  },

  "SprintmasterDashmaster": {
    "Desc": "Obtain Sprintmaster or Dashmaster",
    "Score": 1.06
  },

  "SoulTools": {
    "Desc": "Obtain Soul Eater or Soul Catcher",
    "Score": 1.06
  },

  "ThornsStalwart": {
    "Desc": "Obtain Thorns of Agony or Stalwart Shell",
    "Score": 1.06
  },

  "UnnShell": {
    "Desc": "Obtain Shape of Unn or Baldur Shell",
    "Score": 1.06
  },

  "LoveKey": {
    "Desc": "Obtain the Love Key",
    "Excludes": ["KEGrubs"],
    "Score": 1.30
  },


  "DDark": {
    "Desc": "Obtain Descending Dark",
    "Score": 1.03
  },

  "DNail": {
    "Desc": "Obtain Dream Nail",
    "Score": 0.80
  },

  "DGate": {
    "Desc": "Obtain Dream Gate",
    "Score": 0.95
  },

  "NailArts": {
    "Desc": "Obtain 2 Nail Arts",
    "Score": 1.00
  },

  "Shriek": {
    "Desc": "Obtain Abyss Shriek",
    "Score": 1.03
  },

  "SSoul": {
    "Desc": "Obtain Shade Soul",
    "Score": 1.03
  },

  "Tear": {
    "Desc": "Obtain Isma's Tear",
    "Excludes": ["UnnSkip", "LoveKeySkip"],
    "Score": 1.18
  },

  "VSpirit": {
    "Desc": "Obtain Vengeful Spirit",
    "Score": 0.96
  },

  "Wraiths": {
    "Desc": "Obtain Howling Wraiths",
    "Score": 0.96
  },



  "15Grub": {
    "Desc": "Obtain 15 grubs",
    "Excludes": ["KEGrubs", "35Grub"]
  },

/*
  "35Grub": {
    "Desc": "Obtain 35 grubs",
    "Excludes": ["KEGrubs", "15Grub", "DeepnestGrubs", "BasinGrubs", "CrossroadsCanyonGrubs", "PeaksGrub", "QueenGrub", "WaterGrub", "FunGreenGrub"],
    "Types": ["Tiebreaker"]
  },
*/

  "2Ore": {
    "Desc": "Obtain 2 Pale Ore",
    "Excludes": ["Nail3"],
    "Score": 0.71
  },

  "2Keys": {
    "Desc": "Use 2 Simple Keys",
    "Excludes": ["Jiji", "Marissa"],
    "Score": 0.89
  },

  "3Maps": {
    "Desc": "Have 3 different maps not counting Dirtmouth or Hive",
    "Excludes": ["Cornifer3"]
  },

  "CollectorMap": {
    "Desc": "Obtain Collector's Map",
    "Score": 1.30
  },

  "Egg": {
    "Desc": "Obtain 1 Arcane Egg",
    "Score": 0.73
  },

  "Godtuner": {
    "Desc": "Obtain Godtuner",
    "Score": 1.30
  },

  "Idols": {
    "Desc": "Obtain 3 King's Idols",
    "Score": 0.66
  },

  "Journals": {
    "Desc": "Obtain 5 Wanderer's Journals",
    "Score": 0.51
  },

  "Lantern": {
    "Desc": "Obtain Lumafly Lantern",
    "Excludes": ["JoniDarkRoom"],
    "Score": 1.30
  },

  "Mask1": {
    "Desc": "Obtain 1 extra mask",
    "Score": 0.43
  },

  "Notches": {
    "Desc": "Have 6 Charm Notches total",
    "Score": 0.41
  },

  "RancidEggs": {
    "Desc": "Obtain 4 Rancid Eggs",
    "Score": 0.36
  },

  "Seals": {
    "Desc": "Obtain 5 Hallownest Seals",
    "Score": 0.44
  },

  "SoulVessel": {
    "Desc": "Obtain 1 extra soul vessel",
    "Score": 0.61
  },

  "TramPass": {
    "Desc": "Obtain Tram Pass",
    "Excludes": ["PinsAll", "KEGrubs"],
    "Score": 1.30
  },

  "WorldSense": {
    "Desc": "Obtain World Sense",
    "Score": 1.30
  },



  //Checks (Grubs are grouped)


  "Cornifer3": {
    "Desc": "Interact with 3 Cornifer locations",
    "Excludes": ["3Maps"]

  },


  "CHeartCheck": {
    "Desc": "Check Crystal Heart"
  },

  "CPeaksChest": {
    "Desc": "Open the Crystal Peaks chest"
  },

  "DeepFocusCheck": {
    "Desc": "Check Deep Focus"
  },

  "Dreamers": {
    "Desc": "Get 2 Dreamer's checks (Requires Dream nail)",
    "Excludes": ["Uumuu", "WK", "VisitDistantHive"]
  },

  "GreenpathRoot": {
    "Desc": "Complete the Greenpath Root"
  },

  "HallownestCrown": {
    "Desc": "Check the Hallownest Crown"
  },

  "Fountain": {
    "Desc": "Buy the Basin fountain check",
    "Excludes": ["3000", "4000"]
  },

  "FungalCoreElder": {
    "Desc": "Bow to the Fungal Core Elder"
  },

  "GWombSkip": {
    "Desc": "Check Glowing Womb"
  },

  "HiveMask": {
    "Desc": "Check the Hive Mask Shard",
    "Excludes": ["HiveKnight", "KEGrubs"]
  },

  "JoniDarkRoom": {
    "Desc": "Check Joni's Blessing",
    "Excludes": ["Lantern"]
  },

  "KEdgeRoot": {
    "Desc": "Complete the Kingdom's Edge Root"
  },

  "LoveKeySkip": {
    "Desc": "Check Love Key",
    "Excludes": ["Tear"]
  },

  "Nailmasters": {
    "Desc": "Check 2 Nailmasters"
  },

  "PaleOreCheck": {
    "Desc": "Get two Pale Ore checks (Grubs / Essence excluded)",
    "Excludes": ["Nosk"]
  },

  "SanctuarySkip": {
    "Desc": "Check the journal below Stone Sanctuary"
  },

  "Sheo": {
    "Desc": "Check Sheo"
  },

  "Shops": {
    "Desc": "Visit all 4 shops (Sly, Iselda, Salubra and Leg Eater)",
    "Excludes": ["Cloth"]
  },

  "SpellLocations": {
    "Desc": "Check three different spell locations"
  },

  "StagVessel": {
    "Desc": "Check the Stag Nest vessel fragment"
  },

  "SSoulCheck": {
    "Desc": "Check Shade Soul",
    "Excludes": ["2Warriors"],
    "Score": 1.30
  },

  "ShriekCheck": {
    "Desc": "Get the Abyss Shriek check"
  },

  "TearCheck": {
    "Desc": "Check Isma's Tear"
  },

  "Trees4": {
    "Desc": "Complete 4 full dream trees"
  },

  "UnnSkip": {
    "Desc": "Check Shape of Unn",
    "Excludes": ["Tear"]
  },

  "VillageJournal": {
    "Desc": "Check the journal above Mantis Village"
  },

  "VoidHeart": {
    "Desc": "Check Void Heart"
  },


  "BasinGrubs": {
    "Desc": "Check/Free all grubs in Ancient Basin (2)"
  },

  "CoTGrubs": {
    "Desc": "Check/Free all grubs in City of Tears (5)"
  },

  "CrossroadsCanyonGrubs": {
    "Desc": "Check/Free all grubs in Crossroads (5) + Fog Canyon (1)"
  },

  "DeepnestGrubs": {
    "Desc": "Check/Free all grubs in Deepnest (5)"
  },

  "FunGreenGrub": {
    "Desc": "Check/Free all grubs in Greenpath (4) and in Fungal (2)"
  },

  /*

  "KEGrubs": {
    "Desc": "Check/Free all grubs in Kingdom's Edge (7)",
    "Excludes": ["3Floors", "15Grub", "TramPass", "HiveMask", "Collector", "LoveKey"],
    "Types": ["Tiebreaker"]
  },

*/

  "PeaksGrub": {
    "Desc": "Check/Free all grubs in Crystal Peaks (7)"
  },

  "QueenGrub": {
    "Desc": "Check/Free all grubs in Queen's Gardens (3)"
  },

  "WaterGrub": {
    "Desc": "Check/Free all grubs in Waterways (3)"
  },




  //Misc.

  "3Floors": {
    "Desc": "Break 3 floors using Dive",
    "Excludes": ["KEGrubs"]

  },

  "420Rock": {
    "Desc": "Break the 420 geo rock in Kingdom's Edge"
  },

  "500Essence": {
    "Desc": "Collect 500 essence"
  },

  "3000": {
    "Desc": "Spend 3000 geo",
    "Excludes": ["Fountain", "4000"]
  },

  "4000": {
    "Desc": "Spend 4000 geo",
    "Excludes": ["Fountain", "3000", "5000"]
  },

  "5000": {
    "Desc": "Spend 5000 geo",
    "Excludes": ["4000"]
  },

  "Bank": {
    "Desc": "Have 1500 geo in the bank",
    "Excludes": ["Millibelle"]
  },

  "Bardoon": {
    "Desc": "Talk to Bardoon"
  },

  "BrettaSly": {
    "Desc": "Rescue Bretta + Sly"
  },

  "Brumm": {
    "Desc": "Get Brumm's flame",
    "Excludes": ["CarefreeMelody"]
  },

  "Cloth": {
    "Desc": "Talk to Cloth",
    "Excludes": ["Shops"]
  },

  "ClothQuest": {
    "Desc": "Complete either ending of the Cloth questline",
    "Excludes": ["TLord", "WhiteLady"]
  },

  "CotQuirrel": {
    "Desc": "Sit on the City of Tears Quirrel bench"
  },

  "CrestElevator": {
    "Desc": "Use City Crest + Ride both CoT large elevators",
    "Score": 1.30
  },

  "DamnItGrimmchild": { //https://clips.twitch.tv/LivelySpookyBibimbapTakeNRG
    "Desc": "Kill 3 Oomas using a minion charm",
    "Score": 0.87
  },

  "DeepnestZote": {
    "Desc": "Rescue Zote in Deepnest",
    "Excludes": ["GPZote"]

  },

  "DefenderSign": {
    "Desc": "Read the Dung Defender sign before Isma's Grove"
  },

  "DirtmouthElevator": {
    "Desc": "Open the Dirtmouth / Crystal Peaks elevator"
  },

  "ElderFlower": {
    "Desc": "Give Flower to Elderbug"
  },

  "Emilitia": {
    "Desc": "Talk to Emilitia (shortcut out of sewers)"
  },

  "FlukeHermit": {
    "Desc": "Talk to the Fluke Hermit"
  },

  "Godhome": {
    "Desc": "Enter Godhome",
    "Excludes": ["Ordeal20", "Radiant"]
  },

  "GoamGarpede": {
    "Desc": "Goam and Garpede Journal Entries"
  },

  "Jiji": {
    "Desc": "Open Jiji's Hut"
  },

  "HopperHell": {
    "Desc": "Hit the Oro scarecrow up until the hoppers spawn"
  },

  "Lemm": {
    "Desc": "Talk to Lemm in his shop with Defender's Crest equipped",
    "Score": 1.30
  },

  "LegEater": {
    "Desc": "Buy out Leg Eater"
  },

  "Lifeblood": {
    "Desc": "10 Lifeblood masks at the same time"
  },

  "LifebloodRoom": {
    "Desc": "Enter the Lifeblood Core room without wearing any Lifeblood charms"
  },

  "LoreArchives": {
    "Desc": "Read 3 lore tablets in Teacher's Archives"
  },

  "LoreBasin": {
    "Desc": "Read the lore tablet in Ancient Basin"
  },

  "LoreCity": {
    "Desc": "Read two lore tablets in City of Tears proper (No sub areas)"
  },

  "LoreCliffs": {
    "Desc": "Read the lore tablet in Howling Cliffs"
  },


  "LoreGreenpath": {
    "Desc": "Read three lore tablets in Greenpath"
  },

  "LoreKEdge": {
    "Desc": "Read the lore tablet in Kingdom's Edge (requires Spore Shroom)",
    "Score": 1.30
  },

  "LorePilgrims": {
    "Desc": "Read both Pilgrim's Way lore tablets"
  },

  "LoreSanctum": {
    "Desc": "Read both lore tablets in Soul Sanctum"
  },

  "LoreVillage": {
    "Desc": "Read both lore tablets in Mantis Village"
  },

  "Lumafly": {
    "Desc": "Charged Lumafly Journal Entry"
  },

  "MaskMaker": {
    "Desc": "Talk to Mask Maker"
  },

  "Midwife": {
    "Desc": "Talk to Midwife",
    "Excludes": ["DeepStag", "VisitDistantHive"]
  },

  "MossProphet": {
    "Desc": "Bow to Moss Prophet, dead or alive"
  },

  "MrMushroom1": {
    "Desc": "Interact with Mr. Mushroom once (Does not require Spore Shroom)",
    "Score": 0.88
  },

  "Nail2": {
    "Desc": "Nail 2",
    "Score": 0.55
  },

  "Nail3": {
    "Desc": "Nail 3",
    "Excludes": ["2Ore"],
    "Score": 0.78
  },

  "NailHut": {
    "Desc": "Use a Nail Art in its vanilla Nailmaster's Hut"
  },

  /*"Ordeal20": {
    "Desc": "Eternal Ordeal: 20 Zotes",
    "Types": ["Tiebreaker"],
    "Excludes": ["Godhome", "Radiant"]
  },*/

  "Overcharm": {
    "Desc": "Talk to Salubra while overcharmed"
  },

  /*"PoP": {
    "Desc": "Complete Path of Pain",
    "Types": ["Tiebreaker"],
    "Excludes": ["Kingsmould"]
  },
*/
  "Pins": {
    "Desc": "Buy 6 map pins from Iselda (All but two)",
    "Excludes": ["PinsAll"],
    "Score": 0.68
  },

  "PinsAll": {
    "Desc": "Buy 8 map pins from Iselda (All)",
    "Excludes": ["Pins", "TramPass"],
    "Score": 1.15
  },

  "Revek": {
    "Desc": "Parry Revek 3 times without dying (Spirit's Glade Guard)",
    "Excludes": ["ShrineOfBelievers"]
  },

  "Salubra": {
    "Desc": "Buy out Salubra"
  },

  "ShadeGates": {
    "Desc": "Slash two Shade Gates"
  },

  "Springs": {
    "Desc": "Take a bath in 4 different Hot Springs",
    "Excludes": ["Marissa"]
  },

  "SpringSplash": {
    "Desc": "Splash the NPC in the Colosseum's hot spring"
  },

  "ShrineOfBelievers": {
    "Desc": "Visit Shrine of Believers",
    "Excludes": ["Revek"]
  },

  "Telescope": {
    "Desc": "Look through Lurien's telescope"
  },

  "Tendrils": {
    "Desc": "Void Tendrils Journal Entry"
  },

  "Tiso": {
    "Desc": "Swat Tiso's shield away from his corpse"
  },

  "Trilobite": {
    "Desc": "Slash the Beast's Den Trilobite"
  },

  "Tuk": {
    "Desc": "Talk to Tuk"
  },

  "VisitDistantHive": {
    "Desc": "Visit Distant Village or Hive",
    "Excludes": ["TramPass", "DeepStag", "Midwife"]

  },

  "VisitLakes": {
    "Desc": "Visit Lake of Unn or Blue Lake"
  },

  "VisitMounds": {
    "Desc": "Visit Overgrown Mound or Crystalised Mound (Crystalised requires dive)"
  },

  "VisitQueensShell": {
    "Desc": "Visit Queen's Gardens or Cast Off Shell",
    "Excludes": ["Hornet2"]

  },

  "VisitSanctumWaterways": {
    "Desc": "Visit Soul Sanctum or Royal Waterways"
  },

  "VisitTower": {
    "Desc": "Visit Tower of Love (Love Key not required)"
  },

  "VoidPool": {
    "Desc": "Swim in a Void Pool"
  },

  "WhiteLady": {
    "Desc": "Dream Nail White Lady",
    "Excludes": ["TLord", "ClothQuest"]
  },

  "Willow": {
    "Desc": "Dream Nail Willoh's meal"
  },

  "WPShadeSkip": {
    "Desc": "Sit down in Hidden Station",
    "Excludes": ["HiddenStag", "Wings"]
  }

};