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

  var maxScore = 10;
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

var bingoTypes = {
  "Tiebreaker": {
    "Max": 1
  }
};

var bingoList = {
  //Sorted alphabetically and grouped

  //Bosses. Dream versions grouped instead of alphabetical


  "2DreamBosses": {
    "Desc": "Mate dois Chefes dos Sonhos"
  },

  "BVessel": {
    "Desc": "Mate o Receptáculo Quebrado",
    "Excludes": ["LostKin"]
  },

  "LostKin": {
    "Desc": "Mate o Parente Perdido",
    "Excludes": ["BVessel"]
  },

  "CG1": {
    "Desc": "Mate o Guardião Cristalizado 1",
    "Excludes": ["CG2"]
  },

  "CG2": {
    "Desc": "Mate o Guardião Cristalizado 2",
    "Excludes": ["CG1"]
  },

  "Collector": {
    "Desc": "Mate O Colecionador",
    "Excludes": ["KEGrubs"]
  },

  "DDefender": {
    "Desc": "Mate o Defensor do Esterco",
    "Excludes": ["WhiteDefender"]
  },

  "WhiteDefender": {
    "Desc": "Mate o Defensor Branco",
    "Types": ["Tiebreaker"],
    "Excludes": ["DDefender", "MrMushroom1"]
  },

  "FChamp": {
    "Desc": "Mate o Campeão Fracassado"
  },

  "FKnight_BMawlek": {
    "Desc": "Mate Falso Cavaleiro + Mawlek Incubador"
  },

  "Flukemarm": {
    "Desc": "Mate Flukemarm"
  },

  "GPZote": {
    "Desc": "Mate o Príncipe Cinza Zote",
    "Types": ["Tiebreaker"],
    "Excludes": ["ColoZote", "DeepnestZote", "Colo1"]
  },

  "HiveKnight": {
    "Desc": "Mate o Cavaleiro da Colmeia",
    "Excludes": ["HiveMask"]
  },

  "Hornet2": {
    "Desc": "Mate Hornet 2",
    "Excludes": ["VisitQueensShell"]
  },

  "MLords": {
    "Desc": "Mate Lordes Louva-a-Deus"
  },

  "Nosk": {
    "Desc": "Mate Nosk",
    "Excludes": ["PaleOreCheck"]
  },

  "OroMato": {
    "Desc": "Mate Oro and Mato",
    "Types": ["Tiebreaker"],
    "Excludes": ["Godhome", "Radiant"]
  },

  "PaleLurker": {
    "Desc": "Mate o Pale Lurker"
  },

  "PaintmasterSheo": {
    "Desc": "Mate o Mestre da Pintura Sheo",
    "Types": ["Tiebreaker"],
    "Excludes": ["Godhome", "Radiant"]
  },

  "PVessel": {
    "Desc": "Mate o Receptáculo Puro",
    "Types": ["Tiebreaker"],
    "Excludes": ["Godhome", "Radiant"]
  },

  "Radiant": { // Under I know you're reading this and I hope it fills you with joy
    "Desc": "Mate qualquer chefe radiante",
    "Excludes": ["Godhome", "Ordeal20"]
  },

  "SoulMaster": {
    "Desc": "Mate o Mestre das Almas",
    "Excludes": ["SoulTyrant"]
  },

  "SoulTyrant": {
    "Desc": "Mate o Tirano das Almas",
    "Excludes": ["SoulMaster"]
  },

  "TLord": {
    "Desc": "Mate o Lorde Traidor",
    "Excludes": ["WhiteLady", "ClothQuest"]
  },

  "TMGrimm": {
    "Desc": "Mate o Grimm"
  },

  "NKGrimm": {
    "Desc": "Mate o Rei do Pesadelo Grimm",
    "Types": ["Tiebreaker"],
    "Excludes": ["CarefreeMelody"]
  },

  "Uumuu": {
    "Desc": "Mate Uumuu"
  },

  "WK": {
    "Desc": "Mate Cavaleiro Sentinela"
  },

  "VK_MMC": {
    "Desc": "Mate Batedor Musgoso Imenso + Rei Vengemosca"
  },




  //Dream Warriors


  "2DreamWarriors": {
    "Desc": "Mate dois Guerreiros dos Sonhos" // No exclusion for now - but I wouldn't be surprised if a type demand rises up
  },

  "Galien": {
    "Desc": "Mate Galien"
  },

  "Gorb": {
    "Desc": "Mate Gorb"
  },

  "Hu": {
    "Desc": "Mate o Ancião Hu"
  },

  "Marmu": {
    "Desc": "Mate Marmu"
  },

  "Markoth": {
    "Desc": "Mate Markoth"
  },

  "NoEyes": {
    "Desc": "Mate Sem Olhos"
  },

  "Xero": {
    "Desc": "Mate Xero"
  },




  //Enemies

  "2Warriors": {
    "Desc": "Mate dois Guerreiros das Almas",
    "Excludes": ["SSoulCheck"]
  },

  "3Sentries": {
    "Desc": "Mate três Carcaça Sentinela Grandiosa",
    "Excludes": ["GHusk"]
  },

  "Aluba": {
    "Desc": "Mate um Aluba"
  },

  "Aluba2": {
    "Desc": "Mate dois alubas distintos"
  },

  "Colo1": {
    "Desc": "Coliseu 1",
    "Excludes": ["ColoZote", "GPZote"]
  },

  "Colo3": {
    "Desc": "Coliseu 3",
    "Types": ["Tiebreaker"]
  },

  "ColoZote": {
    "Desc": "Mate Zote no Coliseu",
    "Excludes": ["Colo1", "GPZote"]
  },

  "CrystalCrawler": {
    "Desc": "Consiga um Rastejador de Cristal no Diário do Caçador"
  },

  "Devout": {
    "Desc": "Mate 6 Devotos Espreitadores distintos"
  },

  "Durandoo": {
    "Desc": "Mate um Durandoo",
    "Excludes": ["Gulka"]
  },

  "GHopper": {
    "Desc": "Mate um Grande Saltador"
  },

  "GHusk": {
    "Desc": "Mate a Carcaça Deslumbrante",
    "Excludes": ["3Sentries"]
  },

  "Gulka": {
    "Desc": "Mate um Gulka com seu próprio projétil",
    "Excludes": ["Durandoo"]
  },

  "Kingsmould": {
    "Desc": "Mate uma Armadura Real",
    "Excludes": ["PoP"],
    "Score": 0.88
  },

  "Lightseed": {
    "Desc": "Mate um Germe de Luz"
  },

  "Maggots": {
    "Desc": "Kill two different Maggots"
  },

  "Marissa": {
    "Desc": "Use seu Ferrão dos Sonhos na Marissa",
    "Excludes": ["Springs", "2Keys"]
  },

  "Millibelle": {
    "Desc": "Ataque Millibelle na Casa dos Prazer",
    "Excludes": ["Bank"]
  },

  "Mimics": {
    "Desc": "Mate quatro Mímicos de Larva"
  },

  "Myla": {
    "Desc": "Mate Myla",
    "Score": 1.18
  },




  //Items. Different types (Dreamers/Skills/Keys/etc) grouped together

  "Herrah": {
    "Desc": "Obtenha Herrah",
    "Score": 1.30
  },

  "Lurien": {
    "Desc": "Obtenha Lurien",
    "Score": 1.30
  },

  "Monomon": {
    "Desc": "Obtenha Monomon",
    "Score": 1.30
  },


  "DeepStag": {
    "Desc": "Monte no besouro até a Aldeia Distante",
    "Excludes": ["Midwife", "VisitDistantHive"],
    "Score": 1.30
  },

  "GardenStag": {
    "Desc": "Monte no besouro até os Jardins da Rainha",
    "Score": 1.30
  },

  "HiddenStag": {
    "Desc": "Monte no besouro até a Estação Escondida",
    "Excludes": ["WPShadeSkip"],
    "Score": 1.30
  },

  "KingStag": {
    "Desc": "Monte no besouro até a Estação do Rei",
    "Score": 1.30
  },

  "QueensStag": {
    "Desc": "Monte no besouro até a Estação da Rainha",
    "Score": 1.30
  },



  "5Charms": {
    "Desc": "Tenha 5 ou mais amuletos",
    "Score": 0.20
  },

  "5CharmsEquipped": {
    "Desc": "Tenha 5 amuletos equipados simultaneamente",
  },


  "CarefreeMelody": {
    "Desc": "Obtenha Melodia Despreocupada",
    "Excludes": ["NKGrimm", "Brumm"]
  },

  "CompassSwarm": {
    "Desc": "Obtenha Bússola Caprichosa ou Enxame de Colecionadores",
    "Score": 1.06
  },

  "DWielderShield": {
    "Desc": "Obtenha Portador dos Sonhos ou Escudo dos Sonhos",
    "Score": 1.06
  },

  "FCharms": {
    "Desc": "Obtenha dois amuletos inquebráveis",
    "Score": 1.00
  },

  "FlukenestFury": {
    "Desc": "Obtenha Ninho de Flukes ou Fúria dos Caídos",
    "Score": 1.06
  },

  "GrubsongElegy": {
    "Desc": "Obtenha Canção das Larvas ou Elegia da Larvamosca",
    "Score": 1.06
  },

  "GWombWeavers": {
    "Desc": "Obtenha Útero Brilhante ou Canção das Tecelãs",
    "Score": 1.06
  },

  "HeavyBlowSteady": {
    "Desc": "Obtenha Golpe Pesado ou Corpo Firme",
    "Score": 1.06
  },

  "HivebloodShadow": {
    "Desc": "Obtenha Sangue da Colmeia ou Sombra Afiada",
    "Score": 1.06
  },

  "LifebloodCharms": {
    "Desc": "Obtenha dois amuletos de Sangue Vital",
    "Score": 1.00
  },

  "Longnail": {
    "Desc": "Obtenha Ferrão Longo ou Marca de Orgulho",
    "Score": 1.06
  },

  "QSlashGlory": {
    "Desc": "Obtenha Corte Rápido ou Glória do Mestre do Ferrão",
    "Score": 1.06
  },

  "QuickDeepFocus": {
    "Desc": "Obtenha Foco Rápido ou Foco Profundo",
    "Score": 1.06
  },

  "ShamanStoneTwister": {
    "Desc": "Obtenha Pedra do Xamã ou Dobrador de Magias",
    "Score": 1.06
  },

  "SprintmasterDashmaster": {
    "Desc": "Obtenha Mestre da Esquiva ou Mestre da Corrida",
    "Score": 1.06
  },

  "SoulTools": {
    "Desc": "Obtenha Devorador de Almas ou Apanhador de Almas",
    "Score": 1.06
  },

  "ThornsStalwart": {
    "Desc": "Obtenha Espinhos da Agonia ou Carapaça Robusta",
    "Score": 1.06
  },

  "UnnShell": {
    "Desc": "Obtenha Forma de Unn ou Carapaça de Baldur",
    "Score": 1.06
  },

  "LoveKey": {
    "Desc": "Obtenha Chave do Amor",
    "Excludes": ["KEGrubs"],
    "Score": 1.30
  },


  "DDark": {
    "Desc": "Obtenha Escuridão Descente",
    "Score": 1.03
  },

  "DNail": {
    "Desc": "Obtenha Ferrão dos Sonhos",
    "Score": 0.80
  },

  "DGate": {
    "Desc": "Obtenha Portal dos Sonhos",
    "Score": 0.95
  },

  "NailArts": {
    "Desc": "Obtenha duas Artes do Ferrão",
    "Score": 1.00
  },

  "Shriek": {
    "Desc": "Obtenha Grito do Abismo",
    "Score": 1.03
  },

  "SSoul": {
    "Desc": "Obtenha Alma Sombria",
    "Score": 1.03
  },

  "Tear": {
    "Desc": "Obtenha Lágrima de Isma",
    "Excludes": ["UnnSkip", "LoveKeySkip"],
    "Score": 1.18
  },

  "VSpirit": {
    "Desc": "Obtenha Espírito Vingativo",
    "Score": 0.96
  },

  "Wraiths": {
    "Desc": "Obtenha Espectro Uivantes",
    "Score": 0.96
  },



  "15Grub": {
    "Desc": "Obtenha 15 larvas",
    "Excludes": ["KEGrubs", "35Grub"]
  },

  "35Grub": {
    "Desc": "Obtenha 35 larvas",
    "Excludes": ["KEGrubs", "15Grub", "DeepnestGrubs", "BasinGrubs", "CrossroadsCanyonGrubs", "PeaksGrub", "QueenGrub", "WaterGrub", "FunGreenGrub"],
    "Types": ["Tiebreaker"]
  },

  "2Ore": {
    "Desc": "Obtenha 2 Minérios Palido",
    "Excludes": ["Nail3"],
    "Score": 0.71
  },

  "2Keys": {
    "Desc": "Use duas Chaves Simples",
    "Excludes": ["Jiji", "Marissa"],
    "Score": 0.89
  },

  "3Maps": {
    "Desc": "Tenha 3 mapas diferentes sem ser da Colmeia ou Dirtmouth",
    "Excludes": ["Cornifer3"]
  },

  "CollectorMap": {
    "Desc": "Obtenha Mapa do Colecionador",
    "Score": 1.30
  },

  "Egg": {
    "Desc": "Obtenha 1 Ovo Arcano",
    "Score": 0.73
  },

  "Godtuner": {
    "Desc": "Obtenha Sintonizador de Deuses",
    "Score": 1.30
  },

  "Idols": {
    "Desc": "Obtenha 3 Ídolos do Rei",
    "Score": 0.66
  },

  "Journals": {
    "Desc": "Obtenha 5 Diários de Viajante",
    "Score": 0.51
  },

  "Lantern": {
    "Desc": "Obtenha Lanterna de Lumélula",
    "Excludes": ["JoniDarkRoom"],
    "Score": 1.30
  },

  "Mask1": {
    "Desc": "Obtenha uma máscara extra",
    "Score": 0.43
  },

  "Notches": {
    "Desc": "Tenha 6 Encaixes de Amuleto",
    "Score": 0.41
  },

  "RancidEggs": {
    "Desc": "Obtenha 4 Ovos Rançosos",
    "Score": 0.36
  },

  "Seals": {
    "Desc": "Obtenha 5 Selos de Hallownest",
    "Score": 0.44
  },

  "SoulVessel": {
    "Desc": "Obtenha um Receptáculo de Alma extra",
    "Score": 0.61
  },

  "TramPass": {
    "Desc": "Obtenha Passe do Trem",
    "Excludes": ["PinsAll", "KEGrubs"],
    "Score": 1.30
  },

  "WorldSense": {
    "Desc": "Obtenha Percepção do Mundo",
    "Score": 1.30
  },



  //Checks (Grubs are grouped)


  "Cornifer3": {
    "Desc": "Interaja 3 vezes com Cornifer",
    "Excludes": ["3Maps"]

  },


  "CHeartCheck": {
    "Desc": "Verifique o local do Coração de Cristal"
  },

  "CPeaksChest": {
    "Desc": "Abra o baú do Pico de Cristal"
  },

  "DeepFocusCheck": {
    "Desc": "Verifique o local do Foco Profundo"
  },

  "Dreamers": {
    "Desc": "Verifique o local de dois sonhadores(Requer ferrão dos sonhos)",
    "Excludes": ["Uumuu", "WK", "VisitDistantHive"]
  },

  "GreenpathRoot": {
    "Desc": "Complete a Raíz Sussurrante do Caminho Verde"
  },

  "HallownestCrown": {
    "Desc": "Verifique a Coroa de Hallownest"
  },

  "Fountain": {
    "Desc": "Compre o item na fonte da Bacia Antiga",
    "Excludes": ["3000", "4000"]
  },

  "FungalCoreElder": {
    "Desc": "Curve-se para o Ancião do núcleo fúngico"
  },

  "GWombSkip": {
    "Desc": "Verifique o local do Útero Brilhante"
  },

  "HiveMask": {
    "Desc": "Verifique o local do Fragmento de Máscara da Colmeia",
    "Excludes": ["HiveKnight", "KEGrubs"]
  },

  "JoniDarkRoom": {
    "Desc": "Verifique o local da Bênção de Joni",
    "Excludes": ["Lantern"]
  },

  "KEdgeRoot": {
    "Desc": "Complete a Raíz Sussurante em Borda do Reino"
  },

  "LoveKeySkip": {
    "Desc": "Verifique o local da Chave do Amor",
    "Excludes": ["Tear"]
  },

  "Nailmasters": {
    "Desc": "Verifique dois Mestres do Ferrão"
  },

  "PaleOreCheck": {
    "Desc": "Verifique o local de dois minérios pálidos (Sem contar Larvas/Essência)",
    "Excludes": ["Nosk"]
  },

  "SanctuarySkip": {
    "Desc": "Verifique o local do Diário de Viajante embaixo do Santuário de Pedra"
  },

  "Sheo": {
    "Desc": "Verifique o Mestre de Ferrão Sheo"
  },

  "Shops": {
    "Desc": "Visite todos as lojas(Sly, Iselda, Salubra e Come Pernas)",
    "Excludes": ["Cloth"]
  },

  "SpellLocations": {
    "Desc": "Verifique os locais de três magias diferentes"
  },

  "StagVessel": {
    "Desc": "Verifique o local do Fragmento de Receptaculo no Ninho dos Besouros"
  },

  "SSoulCheck": {
    "Desc": "Verifique o local da Alma Sombria",
    "Excludes": ["2Warriors"],
    "Score": 1.30
  },

  "ShriekCheck": {
    "Desc": "Verifique o local do Grito do Abismo"
  },

  "TearCheck": {
    "Desc": "Verifique o local da Lágrima de Isma"
  },

  "Trees4": {
    "Desc": "Complete 4 Raízes Sussurantes"
  },

  "UnnSkip": {
    "Desc": "Verifique o local da Forma de Unn",
    "Excludes": ["Tear"]
  },

  "VillageJournal": {
    "Desc": "Verifique o Diário do Viajante em cima da Vila dos Louva-a-Deus"
  },

  "VoidHeart": {
    "Desc": "Verifique o local do Coração Vazio"
  },


  "BasinGrubs": {
    "Desc": "Verifique todas larvas em: Bacia Antiga (2)"
  },

  "CoTGrubs": {
    "Desc": "Verifique todas larvas em: Cidade das Lágrimas (5)"
  },

  "CrossroadsCanyonGrubs": {
    "Desc": "Verifique todas larvas em: Encruzilhada(5); Cânion da Nevoa (1)"
  },

  "DeepnestGrubs": {
    "Desc": "Verifique todas larvas em: Ninho Profundo (5)"
  },

  "FunGreenGrub": {
    "Desc": "Verifique todas larvas em: Caminho Verde(4); Ermos Fúngicos (2)"
  },

  "KEGrubs": {
    "Desc": "Verifique todas larvas em: Borda do Reino (7)",
    "Excludes": ["3Floors", "15Grub", "TramPass", "HiveMask", "Collector", "LoveKey"],
    "Types": ["Tiebreaker"]
  },

  "PeaksGrub": {
    "Desc": "Verifique todas larvas em: Pico de Cristal (7)"
  },

  "QueenGrub": {
    "Desc": "Verifique todas larvas em: Jardins da Rainha (3)"
  },

  "WaterGrub": {
    "Desc": "Verifique todas larvas em: Hidrovia Real (3)"
  },




  //Misc.

  "3Floors": {
    "Desc": "Quebre 3 chãos usando Mergulho Desolador",
    "Excludes": ["KEGrubs"]

  },

  "420Rock": {
    "Desc": "Quebre a pedra com 420 geo na Borda do Reino"
  },

  "500Essence": {
    "Desc": "Colete 500 essências"
  },

  "3000": {
    "Desc": "Gaste 3000 geo",
    "Excludes": ["Fountain", "4000"]
  },

  "4000": {
    "Desc": "Gaste 4000 geo",
    "Excludes": ["Fountain", "3000", "5000"]
  },

  "5000": {
    "Desc": "Gaste 5000 geo",
    "Excludes": ["4000"]
  },

  "Bank": {
    "Desc": "Tenha 1500 no banco",
    "Excludes": ["Millibelle"]
  },

  "Bardoon": {
    "Desc": "Fale com Bardoon"
  },

  "BrettaSly": {
    "Desc": "Resgate Bretta + Sly"
  },

  "Brumm": {
    "Desc": "Adquira a chama de Brumm",
    "Excludes": ["CarefreeMelody"]
  },

  "Cloth": {
    "Desc": "Fale com Cloth",
    "Excludes": ["Shops"]
  },

  "ClothQuest": {
    "Desc": "Complete qualquer final da história de Cloth",
    "Excludes": ["TLord", "WhiteLady"]
  },

  "CotQuirrel": {
    "Desc": "Sente-se no banco do Quirrel na Cidade das Lágrimas"
  },

  "CrestElevator": {
    "Desc": "Use o Brasão da Cidade e os dois elevadores grandes da Cidade das Lágrimas",
    "Score": 1.30
  },

  "DamnItGrimmchild": { //https://clips.twitch.tv/LivelySpookyBibimbapTakeNRG
    "Desc": "KMate 3 Oomas com uma invocação(amuleto)",
    "Score": 0.87
  },

  "DeepnestZote": {
    "Desc": "Resgate Zote no Ninho Profundo",
    "Excludes": ["GPZote"]

  },

  "DefenderSign": {
    "Desc": "Leia a placa do Defensor do Esterco antes do Bosque de Isma"
  },

  "DirtmouthElevator": {
    "Desc": "Libere o elevador entre Dirtmouth e Pico de Cristal"
  },

  "ElderFlower": {
    "Desc": "Dê flor delicada para Inseto Ancião"
  },

  "Emilitia": {
    "Desc": "Fale com Emilitia (atalho para Bosque de Isma)"
  },

  "FlukeHermit": {
    "Desc": "Fale com Fluke Eremita"
  },

  "Godhome": {
    "Desc": "Entre no Lar dos Deuses",
    "Excludes": ["Ordeal20", "Radiant"]
  },

  "GoamGarpede": {
    "Desc": "Consiga Goam e Garpede no Diário do Caçador"
  },

  "Jiji": {
    "Desc": "Abra a cabana da Confessora Jiji"
  },

  "HopperHell": {
    "Desc": "Bata no espantalho de Oro até que Grande Saltadores apareçam"
  },

  "Lemm": {
    "Desc": "Fale com Lemm na sua loja com Insignia do Defensor equipado",
    "Score": 1.30
  },

  "LegEater": {
    "Desc": "Compre tudo do Come Pernas"
  },

  "Lifeblood": {
    "Desc": "Tenha 10 Sangues Vitais ao mesmo tempo"
  },

  "LifebloodRoom": {
    "Desc": "Entre no núcleo do Sangue Vital sem amuletos de Sangue Vital"
  },

  "LoreArchives": {
    "Desc": "Leia três pontos de história em: Arquivos da Professora"
  },

  "LoreBasin": {
    "Desc": "Leia o ponto de história em: Bacia Antiga"
  },

  "LoreCity": {
    "Desc": "Leia dois pontos de história em: Cidade das Lágrimas (Subáreas não contam)"
  },

  "LoreCliffs": {
    "Desc": "Leia o ponto de história em: Penhascos Uivantes"
  },


  "LoreGreenpath": {
    "Desc": "Leia três pontos de história em: Caminho Verde"
  },

  "LoreKEdge": {
    "Desc": "Leia 3 pontos de história em:Borda do Reino(com Cogumelo com Esporos)",
    "Score": 1.30
  },

  "LorePilgrims": {
    "Desc": "Leia o ponto de história nos dois Caminhos do Peregrino"
  },

  "LoreSanctum": {
    "Desc": "Leia 2 pontos de história em: Santuário das Almas"
  },

  "LoreVillage": {
    "Desc": "Leia 2 pontos de história em: Vila dos Louva-a-Deus"
  },

  "Lumafly": {
    "Desc": "Consiga Lumélulas Elétricas no Díario do Caçador"
  },

  "MaskMaker": {
    "Desc": "Fale com o Criador de Máscaras"
  },

  "Midwife": {
    "Desc": "Fale com a Parteira",
    "Excludes": ["DeepStag", "VisitDistantHive"]
  },

  "MossProphet": {
    "Desc": "Curve-se para o Profeta do Musgo"
  },

  "MrMushroom1": {
    "Desc": "Interaja com o Sr. Cogumelo",
    "Score": 0.88
  },

  "Nail2": {
    "Desc": "Ferrão 2",
    "Score": 0.55
  },

  "Nail3": {
    "Desc": "Ferrão 3",
    "Excludes": ["2Ore"],
    "Score": 0.78
  },

  "NailHut": {
    "Desc": "Use a Arte do Ferrão na casa do respectivo Mestre do Ferrão"
  },

  "Ordeal20": {
    "Desc": "Provação Eterna: Mate 20 Zotes",
    "Types": ["Tiebreaker"],
    "Excludes": ["Godhome", "Radiant"]
  },

  "Overcharm": {
    "Desc": "Fale com Salubra enquanto sobrecarregado"
  },

  "PoP": {
    "Desc": "Complete o Caminho da Dor",
    "Types": ["Tiebreaker"],
    "Excludes": ["Kingsmould"]
  },

  "Pins": {
    "Desc": "Compre 6 pinos da Iselda (Todos menos 2)",
    "Excludes": ["PinsAll"],
    "Score": 0.68
  },

  "PinsAll": {
    "Desc": "Compre 8 pinos da Iselda (Todos)",
    "Excludes": ["Pins", "TramPass"],
    "Score": 1.15
  },

  "Revek": {
    "Desc": "Bata na cabeça de Revek 3 vezes sem morrer (Guarda da Clareira dos Espíritos)",
    "Excludes": ["ShrineOfBelievers"]
  },

  "Salubra": {
    "Desc": "Compre tudo de Salubra"
  },

  "ShadeGates": {
    "Desc": "Ataque dois portões de sombra"
  },

  "Springs": {
    "Desc": "Tome um banho em 4 fontes termais diferentes",
    "Excludes": ["Marissa"]
  },

  "SpringSplash": {
    "Desc": "Jogue água no NPC na fonte termal do Coliseu"
  },

  "ShrineOfBelievers": {
    "Desc": "Visite o Santuário dos Fieis",
    "Excludes": ["Revek"]
  },

  "Telescope": {
    "Desc": "Olhe no telescópio de Lurien"
  },

  "Tendrils": {
    "Desc": "Consiga Tentáculos do Vazio no Diário de Caçador"
  },

  "Tiso": {
    "Desc": "Golpeie o Escudo de Tiso para longe de seu corpo"
  },

  "Trilobite": {
    "Desc": "Golpeie a Trilobita em Covil das Tecelãs"
  },

  "Tuk": {
    "Desc": "Fale com Tuk"
  },

  "VisitDistantHive": {
    "Desc": "Visite a Aldeia Distante ou A Colmeia",
    "Excludes": ["TramPass", "DeepStag", "Midwife"]

  },

  "VisitLakes": {
    "Desc": "Visite o Lago Azul ou o Lago de Unn"
  },

  "VisitMounds": {
    "Desc": "Visite Monte Luxuriante ou Cristalizado(M. Cristalizado requer Mergulho Desolador)"
  },

  "VisitQueensShell": {
    "Desc": "Visite Jardins da Rainha ou Carapaça Abandonada",
    "Excludes": ["Hornet2"]

  },

  "VisitSanctumWaterways": {
    "Desc": "Visite Santuário da Alma or Hidrovia Real"
  },

  "VisitTower": {
    "Desc": "Visite Torre do Amor (Não precisa da Chave do Amor)"
  },

  "VoidPool": {
    "Desc": "Nade em uma piscina de sombras"
  },

  "WhiteLady": {
    "Desc": "Use o Ferrão dos Sonhos na Dama Branca",
    "Excludes": ["TLord", "ClothQuest"]
  },

  "Willow": {
    "Desc": "Use o Ferrão dos Sonhos na comida de Willoh"
  },

  "WPShadeSkip": {
    "Desc": "Sente-se na Estação Escondida",
    "Excludes": ["HiddenStag", "Wings"]
  }

};
