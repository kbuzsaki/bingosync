// board types, set in opts.boardtype
var OOTRANDO_BOARDTYPE_ROWCOL   = 0;
var OOTRANDO_BOARDTYPE_BLACKOUT = 1;
var OOTRANDO_BOARDTYPE_RANDOM   = 2;
// any bigger than this breaks the randomization
var OOTRANDO_MAX_SEED_SIZE = 2147483646;

// Generator based on the OoT Randomiser Short Blackout generator

// A different generator said this made the Math.seedrandom function. Dunno, seems like some weird voodoo to me
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

var GoalSpread=[
[[1,0,0,1,1],[1,0,0,1,0],[1,1,0,0,1],[0,1,1,1,0],[0,1,1,0,0]],
[[0,0,1,0,1],[1,1,0,1,0],[0,1,0,1,1],[1,0,0,1,0],[1,0,1,0,0]],
[[1,0,1,0,0],[0,0,1,1,1],[0,1,0,0,1],[0,1,1,0,0],[1,0,0,1,1]],
[[0,1,0,1,0],[1,0,0,1,0],[0,1,1,0,1],[0,0,0,1,1],[1,1,1,0,0]],
[[1,1,0,1,0],[1,0,0,1,1],[0,0,1,1,0],[1,0,1,0,1],[0,1,1,0,0]],
[[0,0,0,1,1],[1,1,0,0,0],[1,0,1,1,0],[1,0,1,0,1],[0,1,1,0,1]],
[[0,1,0,1,1],[1,1,0,0,1],[1,0,1,1,0],[0,0,0,1,1],[1,1,1,0,0]],
[[1,0,1,0,1],[0,1,1,0,0],[0,1,0,1,0],[0,1,0,0,1],[1,0,1,1,0]],
[[0,1,1,1,0],[1,1,0,1,0],[0,1,1,0,0],[1,0,0,0,1],[0,0,1,1,1]],
[[0,1,0,1,0],[1,0,0,1,0],[0,1,1,0,1],[1,0,1,0,0],[0,0,0,1,1]]
            ];

var DoGoalList=[
   "DEFEAT|Defeat a Peahat",
   "DEFEAT|Defeat 2 Giant Dodongos",
   "DEFEAT|Defeat 3 Dinalfos",
   "DEFEAT|Defeat a Gekko",
   "DEFEAT|Defeat 2 Wizzrobes",
   "DEFEAT|Defeat 2 Pirates in Combat",
   "DEFEAT|Defeat a Wart",
   "DEFEAT|Defeat an Eyegore",
   "DEFEAT|Defeat 2 Garos",
   "DEFEAT|Defeat a Garo Master",
   "DEFEAT|Defeat Igos du Ikana",
   "DEFEAT|Defeat an Iron Knuckle",
   "DEFEAT|Defeat a Big Poe",
   "DEFEAT|Defeat Gomess",
   "PICTOGRAPH|Show Swamp Tour Guide a Tingle Picture",
   "PICTOGRAPH|Photograph the Deku King",
   "PICTOGRAPH|Photograph the Goron Elder's Son",
   "PICTOGRAPH|Photograph a Pirate",
   "PICTOGRAPH|Photograph Lulu",
   "PICTOGRAPH|Photograph a Dancing Re-Dead",
   "RUPEES|Buy Something from the Curiosity Shop",
   "RUPEES|Third Bank Reward (1000)",
   "RUPEES|Buy an Item from a Deku Scrub",
   "FREESTANDINGITEM|North Clock Town Freestanding Item",
   "FREESTANDINGITEM|Deku Palace Freestanding Item",
   "FREESTANDINGITEM|Path to Snowhead Freestanding Item",
   "FREESTANDINGITEM|Pirate's Fortress Sewer Freestanding Item",
   "FREESTANDINGITEM|Ikana Castle Freestanding Item",
   "Steal a Goron's Reservation",
   "Toilet Hand Reward",
   "Rosa Sisters Reward",
   "Listen to a Story from Grandma without Falling Asleep",
   "Make Sure Mama Gets the Letter",
   "LONG|Reunite Anju and Kafei",
   "MINIGAME|Keaton Quiz Reward",
   "MINIGAME|Win Postman Challenge",
   "MINIGAME|Win the Chest Minigame as Deku",
   "MINIGAME|Win the Chest Minigame as Goron",
   "MINIGAME|Win the Chest Minigame as Zora",
   "MINIGAME|Shoot 40+ Red Octoroks in Town Archery",
   "MINIGAME|Win Honey & Darling All Three Days",
   "MINIGAME|Win Deku Playground All Three Days",
   "MINIGAME|Swamp Archery 2120 Points",
   "MINIGAME|Boat Archery Reward",
   "MINIGAME|Fisherman Minigame Reward",
   "MINIGAME|Poe House Reward",
   "FAIRIES|LONG|All Stray Fairies from One Dungeon",
   "FAIRIES|10 Woodfall Temple Fairies",
   "FAIRIES|10 Snowhead Temple Fairies",
   "FAIRIES|10 Great Bay Temple Fairies",
   "FAIRIES|10 Stone Tower Temple Fairies",
   "SKULLS|LONG|Get a Skull House Reward",
   "SKULLS|15 Swamp Skulls",
   "SKULLS|15 Ocean Skulls",
   "HEAL|Heal Kamaro",
   "HEAL|Heal Darmani",
   "HEAL|Heal Mikau",
   "HEAL|Heal Pamela's Father",
   "RACE|Win Deku Butler Race",
   "RACE|Win Gorman Brothers Race",
   "RACE|Win Goron Race",
   "RACE|Beat Captain Keeta to the Chest",
   "RACE|Win a Beaver Race",
   "REMAINS|Odalwa's Remains",
   "REMAINS|Goht's Remains",
   "REMAINS|Gyorg's Remains",
   "REMAINS|Twinmold's Remains",
   "REMAINS|2 Boss Remains",
   "Knock the Person out of the Tree",
   "Gossip Stone Reward",
   "Save Koume",
   "Plant a Magic Bean",
   "Bottle Deku Princess",
   "Purify the Woodfall Temple Water",
   "Feed the Hungry Goron",
   "Raise Snowhead Temple Platform",
   "Unfreeze Mountain Smithy Hearth",
   "Open the Goron Racetrack",
   "LONG|Reunite Frog Choir",
   "Raise Grog's Chickens",
   "Save the Ranch",
   "LONG|Deliver Milk to Termina",
   "Bet on a Winning Dog",
   "Reunite Sea Horses",
   "Help Evan Steal Your Song",
   "Light the Zora Hall Stage",
   "LONG|Rescue Pirates Fortress Eggs",
   "LONG|Rescue Pinnacle Rock Eggs",
   "Change GBT Water Direction",
   "Play on Stage with the Indigo-Go's",
   "Save Shiro",
   "Open 2 Graves",
   "LONG|Save the Sun Mask",
   "LONG|Secret Shrine Final Chest",
   "Unbar 5 Doors in the Well",
   "Flip Stone Tower Temple",
   "Help a Deku Scrub Salesman Relocate",
   "Activate All 10 Owl Statues"
];

var FindGoalList=[
   "UPGRADES|Fairy Bow",
   "UPGRADES|Quiver 40 or Better",
   "UPGRADES|Bomb Bag",
   "UPGRADES|Bomb Bag 30 or Better",
   "UPGRADES|Razor Sword or Better",
   "UPGRADES|Adult Wallet or Better",
   "SINGLEITEMWEAPON|Hookshot",
   "SINGLEITEMWEAPON|Powder Keg",
   "SINGLEITEMWEAPON|Great Fairy Sword",
   "SINGLEITEMWEAPON|Mirror Shield",
   "SINGLEITEMARROWS|Fire Arrows",
   "SINGLEITEMARROWS|Ice Arrows",
   "SINGLEITEMARROWS|Light Arrows",
   "SINGLEITEMDOUBLE|Double Magic",
   "SINGLEITEMDOUBLE|Double Defense",
   "PERISHABLEBOTTLECONTENT|Milk",
   "PERISHABLEBOTTLECONTENT|Gold Dust",
   "PERISHABLEBOTTLECONTENT|Red Potion",
   "PERISHABLEBOTTLECONTENT|Green Potion",
   "PERISHABLEBOTTLECONTENT|Blue Potion",
   "PERISHABLEBOTTLECONTENT|Chateau Romani",
   "PERISHABLEQUESTITEM|Room Key",
   "PERISHABLEQUESTITEM|Letter to Mama",
   "PERISHABLEQUESTITEM|Kafei's Letter",
   "PERISHABLEQUESTITEM|Pendant of Memories",
   "DEED|Land Title Deed",
   "DEED|Swamp Title Deed",
   "DEED|Mountain Title Deed",
   "DEED|Ocean Title Deed",
   "MULTIDEED|Collect Two Deeds in Same Cycle",
   "MULTIDEED|Collect Three Deeds in Same Cycle",
   "MAPSNCOMPASSES|2 Dungeon Maps",
   "MAPSNCOMPASSES|3 Dungeon Maps",
   "MAPSNCOMPASSES|2 Compasses",
   "MAPSNCOMPASSES|3 Compasses",
   "MAPSNCOMPASSES|Woodfall Temple Map or Compass",
   "MAPSNCOMPASSES|Snowhead Temple Map or Compass",
   "MAPSNCOMPASSES|Great Bay Temple Map or Compass",
   "MAPSNCOMPASSES|Stone Tower Temple Map or Compass",
   "KEY|2 Boss Keys",
   "KEY|3 Boss Keys",
   "KEY|Woodfall Temple Boss Key",
   "KEY|Snowhead Temple Boss Key",
   "KEY|Great Bay Temple Boss Key",
   "KEY|Stone Tower Temple Boss Key",
   "HEARTS|7 Hearts",
   "HEARTS|8 Hearts",
   "HEARTS|9 Hearts",
   "HEARTS|10 Hearts",
   "HEARTS|11 Hearts",
   "HEARTS|12 Hearts",
   "SONGNUMBER|6 Songs",
   "SONGNUMBER|7 Songs",
   "SONGNUMBER|8 Songs",
   "SONGINDIVIDUAL|Song of Healing",
   "SONGINDIVIDUAL|Song of Storms",
   "SONGINDIVIDUAL|Epona's Song",
   "SONGINDIVIDUAL|Sonata of Awakening",
   "SONGINDIVIDUAL|Goron Lullaby",
   "SONGINDIVIDUAL|New Wave Bossa Nova",
   "SONGINDIVIDUAL|Elegy of Emptiness",
   "SONGINDIVIDUAL|Oath to Order",
   "MASKNUMBER|9 Masks",
   "MASKNUMBER|10 Masks",
   "MASKNUMBER|11 Masks",
   "MASKNUMBER|12 Masks",
   "MASKNUMBER|Row of Six Masks",
   "MASKNUMBER|Column of Four Masks",
   "MASKNUMBER|TRANSFORMATIONMASK|Three Transformation Masks",
   "MASKCHOICE|Blast Mask or All-Night Mask",
   "MASKCHOICE|Bremen Mask or Don Gero Mask",
   "MASKCHOICE|Gibdo Mask or Garo Mask",
   "MASKCHOICE|Bunny Hood or Postman's Hat",
   "MASKCHOICE|Stone Mask or Giant's Mask",
   "MASKCHOICE|Great Fairy Mask or Couple's Mask",
   "MASKCHOICE|Mask of Truth or Mask of Scents",
   "MASKCHOICE|Romani Mask or Circus Leader Mask",
   "MASKCHOICE|Kafei Mask or Keaton Mask",
   "MASKCHOICE|Captain's Hat or Kamaro Mask",
   "TRANSFORMATIONMASK|Deku Mask",
   "TRANSFORMATIONMASK|Goron Mask",
   "TRANSFORMATIONMASK|Zora Mask",
   "TRANSFORMATIONMASK|Fierce Deity Mask"
];

// https://gist.github.com/blixt/f17b47c62508be59987b
// --------------------------------------------------
function OOTRANDO_RandomOOTSeed(seed) {
        seed = Math.floor(seed);
        this._seed = seed % 2147483647;
        if (this._seed <= 0) this._seed += OOTRANDO_MAX_SEED_SIZE;
}
OOTRANDO_RandomOOTSeed.prototype.next = function () { // 2^31 - 2 (2147483646) upper limit
        return this._seed = this._seed * 16807 % (OOTRANDO_MAX_SEED_SIZE + 1);
};
// --------------------------------------------------



innerBingoGenerator = function(DoGoalList, FindGoalList, opts) {
        var final_bingo_list = []; // array of 25 goals

        var board = [];
        var seed_val = opts.seed;
        if (seed_val > OOTRANDO_MAX_SEED_SIZE) {
                seed_val = OOTRANDO_MAX_SEED_SIZE;
        }
        seed=Math.seedrandom(String(seed_val))

        var BlankGoal= {
                        goal: " ",
                        groups: []
                };

    var board_type = opts.boardtype || OOTRANDO_BOARDTYPE_BLACKOUT;

        // split lines into objects w a group array
        var FindGoals = [];
        for (var i=0; i<FindGoalList.length; i++) {
                var line = FindGoalList[i];
                var split = line.split('|');
                var groups = [];
                for (var j=0; j<split.length-1; j++) {
                        groups.push(split[j]);
                }
                var goal_object = {
                        goal: split[split.length-1],
                        groups: groups
                };
                FindGoals.push(goal_object);
        }

        // split lines into objects w a group array
        var DoGoals = [];
        for (var i=0; i<DoGoalList.length; i++) {
                var line = DoGoalList[i];
                var split = line.split('|');
                var groups = [];
                for (var j=0; j<split.length-1; j++) {
                        groups.push(split[j]);
                }
                var goal_object = {
                        goal: split[split.length-1],
                        groups: groups
                };
                DoGoals.push(goal_object);
        }


        var rng = new OOTRANDO_RandomOOTSeed(seed_val);
        // Get a valid board layout
        const BoardLayout= GoalSpread[Math.floor(Math.random() * GoalSpread.length)];

        var final_list_index = 0;
        for (var row=1; row<=5; row++){
                board.push([]);
                for (var col=1; col<=5; col++){
                        // no conflict initially
                        var conflict;
                        var goal;
                        do {
                                conflict = false;
                                // get goal from the goals list
                                if (BoardLayout[row-1][col-1] == 0){
                                var goal_index = rng.next() % DoGoals.length;
                                goal = DoGoals[goal_index];
                                var goals = DoGoals;
                                } else {
                                var goal_index = rng.next() % FindGoals.length;
                                goal = FindGoals[goal_index];
                                var goals = FindGoals;
                                }
                                // if blackout, no two goals may share a group
                                if (board_type == OOTRANDO_BOARDTYPE_BLACKOUT) {
                                        for (var i=0; i<goal.groups.length; i++) {
                                                // loop checking the groups of the potential goal
                                                for (var j=0; j<board.length; j++) {
                                                        // loop checking board rows
                                                        for (var k=0; k<board[j].length; k++) {
                                                                // loop checking board columns
                                                                if (board[j][k].groups.indexOf(goal.groups[i]) !== -1) {
                                                                        conflict = goal.groups[i]; // conflict found !!
                                                                        break;
                                                                }
                                                        }
                                                        if (conflict) break;
                                                }
                                                if (conflict) break;
                                        }
                                // rows / cols / tlbr / bltr
                                } else if (board_type == OOTRANDO_BOARDTYPE_ROWCOL) {
                                        for (var i=0; i<goal.groups.length; i++) {
                                                // loop checking the groups of the potential goal
                                                for (var j=1; j<row && !conflict; j++) {
                                                        // current row
                                                        var square = board[j-1][col-1];
                                                        if (square.groups.indexOf(goal.groups[i]) !== -1) {
                                                                conflict = square; // conflict found !!
                                                        }
                                                }
                                                for (var j=1; j<col && !conflict; j++) {
                                                        // current col
                                                        var square = board[row-1][j-1];
                                                        if (board[row-1][j-1].groups.indexOf(goal.groups[i]) !== -1) {
                                                                conflict = board[row-1][j-1]; // conflict found !!
                                                        }
                                                }
                                                for (var j=1; j<row && row==col && !conflict; j++) {
                                                        // tlbr
                                                        var square = board[j-1][j-1];
                                                        if (square.groups.indexOf(goal.groups[i]) !== -1) {
                                                                conflict = square;
                                                        }
                                                }
                                                for (var j=1; j<row && 6-row==col && !conflict; j++) {
                                                        // bltr
                                                        var square = board[j-1][j-1];
                                                        if (square.groups.indexOf(goal.groups[i]) !== -1) {
                                                                conflict = square;
                                                        }
                                                }
                                                if (conflict) { break; }
                                        }
                                } else {
                                        // random
                                }
                        } while (conflict);
                        // executes once a goal that matches the current filters is found
                        var goal_text = goals[goal_index].goal;
                        board[row-1].push(goal);
                        goals.splice(goal_index, 1);
                        final_bingo_list[final_list_index] = {"name": goal_text};
                        final_list_index++;
                }
        }

        return final_bingo_list;
}

var bingoList = [];
var bingoGenerator = function(ignored, opts) {
    return innerBingoGenerator(DoGoalList, FindGoalList, opts);
}