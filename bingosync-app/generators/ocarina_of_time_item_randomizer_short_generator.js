// board types, set in opts.boardtype
var OOTRANDO_BOARDTYPE_ROWCOL   = 0;
var OOTRANDO_BOARDTYPE_BLACKOUT = 1;
var OOTRANDO_BOARDTYPE_RANDOM   = 2;
// any bigger than this breaks the randomization
var OOTRANDO_MAX_SEED_SIZE = 2147483646;

// list based on v9, https://pastebin.com/raw/RGVA7RwU

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
            [[1,1,0,0],[1,0,1,0],[0,1,0,1],[0,0,1,1]],
            [[0,1,0,1],[1,0,1,0],[1,0,1,0],[0,1,0,1]],
            [[1,0,1,0],[0,1,0,1],[0,1,0,1],[1,0,1,0]],
            [[1,1,0,0],[0,0,1,1],[0,0,1,1],[1,1,0,0]],
            [[0,1,0,1],[0,1,0,1],[1,0,1,0],[1,0,1,0]],
            [[0,0,1,1],[1,1,0,0],[0,0,1,1],[1,1,0,0]],
            [[1,0,1,0],[0,0,1,1],[1,1,0,0],[0,1,0,1]],
            [[0,0,1,1],[1,1,0,0],[1,1,0,0],[0,0,1,1]],
            [[0,0,1,1],[0,1,0,1],[1,0,1,0],[1,1,0,0]],
            [[1,0,1,0],[0,1,0,1],[0,1,0,1],[1,0,1,0]],
            ];

var DoGoalList=[
           "VISITALLADULT|1 Skulltula from 3 different Adult Dungeons",
           "VISITALLCHILD|1 Skulltula from each Child Dungeon",
           "VISITALLADULT|Obtain 1 Small Key in 3 different Adult Dungeons",
           "All 3 Kokiri Forest area Skulltulas",
           "All 3 Skulltulas in Bottom of the Well",
           "All 3 Skulltulas in Ice Cavern",
           "All 4 Gerudo Valley area Skulltulas",
           "All 4 Lon-Lon Ranch area Skulltulas",
           "All 4 Lost Woods area Skulltulas",
           "DEKUSKULLS|ALLDUNGEONSKULLS|All 4 Skulltulas in Deku Tree",
           "JABUSKULLS|ALLDUNGEONSKULLS|All 4 Skulltulas in Jabu-Jabu",
           "All 4 Wasteland/ Colossus area Skulltulas",
           "LAKEHYLIA|3 Lake Hylia Skulltulas",
           "DODONGOSKULLS|ALLDUNGEONSKULLS|All 5 Skulltulas in Dodongo's Cavern",
           "FIRESKULLS|3 Skulltulas in Fire Temple",
           "FIRESKULLS|ALLTEMPLESKULLS|All 5 Skulltulas in Fire Temple",
           "FORESTSKULLS|3 Skulltulas in Forest Temple",
           "FORESTSKULLS|ALLTEMPLESKULLS|All 5 Skulltulas in Forest Temple",
           "SHADOWSKULLS|3 Skulltulas in Shadow Temple",
           "SHADOWSKULLS|ALLTEMPLESKULLS|All 5 Skulltulas in Shadow Temple",
           "SPIRITSKULLS|3 Skulltulas in Spirit Temple",
           "SPIRITSKULLS|ALLTEMPLESKULLS|All 5 Skulltulas in Spirit Temple",
           "WATERSKULLS|3 Skulltulas in Water Temple",
           "DEATHMOUNTAINSKULLS|All 8 Death Mountain area Skulltulas",
           "DEATHMOUNTAINSKULLS|ALLOVERWORLDSKULLS|All 8 Death Mountain area Skulltulas",
           "KAKARIKOSKULLS|6 Kakariko area Skulltulas",
           "KAKARIKOSKULLS|ALLOVERWORLDSKULLS|All 8 Kakariko area Skulltulas",
           "DOMAINSKULLS|6 Zora's Domain area Skulltulas",
           "DOMAINSKULLS|ALLOVERWORLDSKULLS|All 8 Zora's Domain area Skulltulas",
           "Both Gerudo's Fortress area Skulltulas",
           "All 4 Adult Zora's Domain area Skulltulas",
           "All 4 Child Zora's Domain area Skulltulas",
           "Both Hyrule Field area Skulltulas",
           "4 Soft Soil Skulltulas",
           "DODONGOBOSS|Beat Dodongo's Cavern",
           "DEKUBOSS|Beat the Deku Tree",
           "FORESTBOSS|Beat the Forest Temple",
           "SHADOWBOSS|Beat the Shadow Temple",
           "WATERBOSS|Beat the Water Temple",
           "FORESTTEMPLE|Defeat Amy (Green Poe)",
           "GTG|ICECAVERN|Defeat a White Wolfos",
           "DODONGOSCAVERN|LIZALFOS|Defeat all Lizalfos in Dodongo's Cavern",
           "SPIRITTEMPLE|LIZALFOS|Defeat all Lizalfos in Spirit Temple",
           "FIRETEMPLE|Free 7 Different Gorons in Fire Temple",
           "JABUJABUSBELLY|Defeat Big Octo",
           "SHADOWBOSS|Defeat Bongo-Bongo",
           "FIRETEMPLE|Defeat both Flare Dancers",
           "WATERTEMPLE|Defeat Dark Link",
           "DODONGOBOSS|Defeat King Dodongo",
           "FORESTTEMPLE|Defeat Meg (purple Poe)",
           "WATERBOSS|Defeat Morpha",
           "IRONKNUCKLE|SPIRITBOSS|Defeat Nabooru-Knuckle",
           "FORESTBOSS|Defeat Phantom Ganon",
           "DEKUBOSS|Defeat Queen Gohma",
           "IRONKNUCKLE|Defeat 4 Different Iron Knuckles",
           "GANONSCASTLE|Get to the end of Fire Trial",
           "GANONSCASTLE|Get to the end of Forest Trial",
           "GANONSCASTLE|Get to the end of Light Trial",
           "GANONSCASTLE|Get to the end of Shadow Trial",
           "GANONSCASTLE|Get to the end of Spirit Trial",
           "EPONA|Cow in House",
           "Defeat a Skull Kid",
           "GTG|Gerudo's Card",
           "MASK|Spooky Mask",
           "BEANS|Plant bean in Death Mountain Crater",
           "Win A Bombchu Bowling Prize",
           "SKULLREWARD|Collect the reward for 10 skulltula tokens",
           "SKULLREWARD|Collect the reward for 20 skulltula tokens",
           "Collect the song/item from Sheik at Colossus",
           "Collect the item/song from the pot in Goron City",
           "Collect the item/song from Deku Theatre Skull Mask",
           "SILVERRUPEES|Complete 3 Silver Rupee Rooms",
           "SILVERRUPEES|Complete 4 Silver Rupee Rooms",
           "Defeat 3 Different Big Poes",
           "Defeat 4 Different Like-Likes",
           "Open Shadow Temple",
           "SPIRITTEMPLE|Defeat 2 Iron Knuckles in Spirit Temple",
           "Defeat both Dead Hands"
            ];

var FindGoalList=[
               "DUNGEONS|DEKUBOSS|DODONGOBOSS|FORESTBOSS|WATERBOSS|SHADOWBOSS|2 Stones",
               "DUNGEONS|DEKUBOSS|DODONGOBOSS|FORESTBOSS|WATERBOSS|SHADOWBOSS|3 Medallions",
               "DUNGEONS|DEKUBOSS|DODONGOBOSS|FORESTBOSS|WATERBOSS|SHADOWBOSS|4 Medallions",
               "DUNGEONS|FORESTBOSS|WATERBOSS|SHADOWBOSS|Beat 2 adult dungeons",
               "FIBK|FOBK|SHBK|SPBK|WBK|GBK|2 Boss Keys",
               "FIRETEMPLE|FIBK|Fire Temple Boss Key",
               "FORESTTEMPLE|FOBK|Forest Temple Boss Key",
               "WBK|Water Temple Boss Key",
               "SHBK|Shadow Temple Boss Key",
               "SPBK|Spirit Temple Boss Key",
               "GBK|Ganon's Castle Boss Key",
               "BOOTS|At least 2 Boots",
               "SHIELDS|At least 2 Shields",
               "SWORDS|WALLET|3rd Sword Slot Occupied",
               "TUNICS|WALLET|Goron Tunic",
               "TUNICS|WALLET|GIANTSWALLET|Zora Tunic",
               "COMPASSES|4 Compasses",
               "COMPASSES|5 Compasses",
               "MAPS|4 Maps",
               "MAPS|5 Maps",
               "Map & Compass in Deku Tree",
               "Map & Compass in Dodongo’s Cavern",
               "Map & Compass in Bottom of the Well",
               "Map & Compass in Forest Temple",
               "Map & Compass in Fire Temple",
               "Map & Compass in Shadow Temple",
               "Map & Compass in Ice Cavern",
               "NUT|30 Deku Nut Capacity or Better",
               "BOMBBAG|Bomb Bag 30 or Better",
               "WALLET|200 Rupees",
               "WALLET|Adult's Wallet or better",
               "SLINGSHOT|Fairy Slingshot",
               "SLINGSHOT|Bullet Bag 40 or Better",
               "DEKUSTICK|20 Deku Stick Capacity or Better",
               "BOW|QUIVER|Fairy Bow",
               "BOW|QUIVER|Quiver 40 or Better",
               "STRENGTH|Goron Bracelet or Better",
               "STRENGTH|Silver Gauntlets or Better",
               "SCALE|Silver Scale or Better",
               "BOTTLE|Fill at least 2 Bottle Slots",
               "SONGS|5 Songs",
               "SONGS|6 Songs",
               "SONGS|At least 4 warpsongs",
               "HEARTS|9 Hearts",
               "HEARTS|10 Hearts",
               "FORESTKEYS|Obtain 4 Different Keys in Forest Temple",
               "FORESTKEYS|MAXKEYS|Obtain all 5 Small Keys in Forest Temple",
               "WATERKEYS|Obtain 4 Different Small Keys in Water Temple",
               "SHADOWKEYS|Obtain 4 Different Small Keys in Shadow Temple",
               "SHADOWKEYS|MAXKEYS|Obtain all 5 Small Keys in Shadow Temple",
               "FIREKEYS|Obtain 6 Different Small Keys in Fire Temple",
               "FIREKEYS|MAXKEYS|Obtain all 8 Small Keys in Fire Temple",
               "BOTTLE|Bottle of Blue Fire",
               "BOTTLE|Bottled Fairy",
               "BOTTLE|EPONA|Bottle of Milk",
               "Double Defense OR Double Magic",
               "FAIRYSPELL|At least two Fairy Spells",
               "Fall Prey to 3 Ice Traps",
               "ELEMENTALARROWS|At least 2 Elemental Arrows",
               "BOW|QUIVER|SLINGSHOT|Quiver 50 OR Bullet Bag 50"
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
                        //Add  blank goals to last column and last row. Since we know there aren't any conflicts, push directly to board
                        if (row ==5 || col == 5){
                        var goal = BlankGoal;
                        var goal_text = BlankGoal.goal;
                        board[row-1].push(goal);
                        final_bingo_list[final_list_index] = {"name": goal_text};
                        final_list_index++;
                        continue;
                        }
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
                                //console.log(goal_index);
                                //console.log(goals);
                                //console.log(goal)
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
