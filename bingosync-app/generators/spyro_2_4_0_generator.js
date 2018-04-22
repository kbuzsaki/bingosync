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

bingoGenerator = function (bingoList, opts) {
    var LANG = opts.lang || 'name';
    var MODE = opts.mode || "normal";
    var cardType = "Normal";
    var SEED = opts.seed || Math.ceil(999999 * Math.random()).toString();
    var size = 5;

	Math.seedrandom(SEED); //sets up the RNG
	var MAX_SEED = 999999; //1 million cards

    var rowCheckList = [];
    var rowElements = new Object();
    if(size == 5)
    {
        rowElements["row1"] = [1,2,3,4,5];
        rowElements["row2"] = [6,7,8,9,10];
        rowElements["row3"] = [11,12,13,14,15];
        rowElements["row4"] = [16,17,18,19,20];
        rowElements["row5"] = [21,22,23,24,25];
        rowElements["col1"] = [1,6,11,16,21];
        rowElements["col2"] = [2,7,12,17,22];
        rowElements["col3"] = [3,8,13,18,23];
        rowElements["col4"] = [4,9,14,19,24];
        rowElements["col5"] = [5,10,15,20,25];
        rowElements["tlbr"] = [1,7,13,19,25];
        rowElements["bltr"] = [5,9,13,17,21];

        rowCheckList[1] = ["row1","col1","tlbr"];
        rowCheckList[2] = ["row1","col2"];
        rowCheckList[3] = ["row1","col3"];
        rowCheckList[4] = ["row1","col4"];
        rowCheckList[5] = ["row1","col5","bltr"];

        rowCheckList[6] = ["row2","col1"];
        rowCheckList[7] = ["row2","col2","tlbr"];
        rowCheckList[8] = ["row2","col3"];
        rowCheckList[9] = ["row2","col4","bltr"];
        rowCheckList[10] = ["row2","col5"];

        rowCheckList[11] = ["row3","col1"];
        rowCheckList[12] = ["row3","col2"];
        rowCheckList[13] = ["row3","col3","tlbr","bltr"];
        rowCheckList[14] = ["row3","col4"];
        rowCheckList[15] = ["row3","col5"];

        rowCheckList[16] = ["row4","col1"];
        rowCheckList[17] = ["row4","col2","bltr"];
        rowCheckList[18] = ["row4","col3"];
        rowCheckList[19] = ["row4","col4","tlbr"];
        rowCheckList[20] = ["row4","col5"];

        rowCheckList[21] = ["row5","col1","bltr"];
        rowCheckList[22] = ["row5","col2"];
        rowCheckList[23] = ["row5","col3"];
        rowCheckList[24] = ["row5","col4"];
        rowCheckList[25] = ["row5","col5","tlbr"];
    }

    function mirror(i) {
        if      (i == 0) { i = 4; }
        else if (i == 1) { i = 3; }
        else if (i == 3) { i = 1; }
        else if (i == 4) { i = 0; }
        return i;
    }

    function difficulty(i) {
        // To create the magic square we need 2 random orderings of the numbers 0, 1, 2, 3, 4.
        // The following creates those orderings and calls them Table5 and Table1

        var Num3 = SEED%1000;	// Table5 will use the ones, tens, and hundreds digits.

        var Rem8 = Num3%8;
        var Rem4 = Math.floor(Rem8/2);
        var Rem2 = Rem8%2;
        var Rem5 = Num3%5;
        var Rem3 = Num3%3;	// Note that Rem2, Rem3, Rem4, and Rem5 are mathematically independent.
        var RemT = Math.floor(Num3/120);	// This is between 0 and 8

        // The idea is to begin with an array containing a single number, 0.
        // Each number 1 through 4 is added in a random spot in the array's current size.
        // The result - the numbers 0 to 4 are in the array in a random (and uniform) order.
        var Table5 = [0];
        Table5.splice(Rem2, 0, 1);
        Table5.splice(Rem3, 0, 2);
        Table5.splice(Rem4, 0, 3);
        Table5.splice(Rem5, 0, 4);

        Num3 = Math.floor(SEED/1000);	// Table1 will use the next 3 digits.
        Num3 = Num3%1000;

        Rem8 = Num3%8;
        Rem4 = Math.floor(Rem8/2);
        Rem2 = Rem8%2;
        Rem5 = Num3%5;
        Rem3 = Num3%3;
        RemT = RemT * 8 + Math.floor(Num3/120);	 // This is between 0 and 64.

        var Table1 = [0];
        Table1.splice(Rem2, 0, 1);
        Table1.splice(Rem3, 0, 2);
        Table1.splice(Rem4, 0, 3);
        Table1.splice(Rem5, 0, 4);

        i--;
        RemT = RemT%5;		//  Between 0 and 4, fairly uniformly.
        x = (i+RemT)%5;		//  RemT is horizontal shift to put any diagonal on the main diagonal.
        y = Math.floor(i/5);

        // The Tables are set into a single magic square template
        // Some are the same up to some rotation, reflection, or row permutation.
        // However, all genuinely different magic squares can arise in this fashion.
        var e5 = Table5[(x + 3*y)%5];
        var e1 = Table1[(3*x + y)%5];

        // Table5 controls the 5* part and Table1 controls the 1* part.
        value = 5*e5 + e1;

        if (MODE == "short") { value = Math.floor(value/2); } // if short mode, limit difficulty
            else if (MODE == "long") { value = Math.floor((value + 25) / 2); }
            value++;
        return value;
    }

    //Uniformly shuffles an array (note: the original array will be changed)
    function shuffle(toShuffle)
    {
        for(var i=0;i<toShuffle.length;i++)
        {
            var randElement = Math.floor(Math.random()*(i+1));
            var temp = toShuffle[i];
            toShuffle[i] = toShuffle[randElement];
            toShuffle[randElement] = temp;
        }
    }

    //Get a uniformly shuffled array of all the goals of a given difficulty tier
    function getShuffledGoals(difficulty)
    {
        var newArray = bingoList[difficulty].slice();
        shuffle(newArray);
        return newArray;
    }

    //Given a difficulty as an argument, find the square that contains that difficulty
    function getDifficultyIndex(difficulty)
    {
        for(var i=1;i<=25;i++)
        {
            if(bingoBoard[i].difficulty == difficulty)
            {
                return i;
            }
        }
        return 0;
    }

    function checkLine(i, testsquare)
    {
        var boardTypesA = testsquare.boardtypes || [];
        var boardSynergy = 0;
        // first check boardtypes synergy, which is per board
        for (var b_i = 1; b_i <= 25; b_i++) {
            var boardTypesB = bingoBoard[b_i].boardtypes || [];
            // check for any overlap
            for (var i_a = 0; i_a < boardTypesA.length; i_a++) {
                for (var i_b = 0; i_b < boardTypesB.length; i_b++) {
                    // If a boardtype matches, use a high synergy to try to force abort
                    if (boardTypesA[i_a] == boardTypesB[i_b]) {
                        boardSynergy += 5;
                    }
                }
            }
        }
        if (boardSynergy !== 0) {
            return boardSynergy;
        }

        // then check for "types" synergy, which is per row
        var typesA = testsquare.types || [];
        var synergy = 0;
        var rows = rowCheckList[i], elements = [];
        for(var k=0;k<rows.length;k++)
        {
            elements = rowElements[rows[k]];
            for(var m=0;m<elements.length;m++)
            {
                var typesB = bingoBoard[elements[m]].types;
                if(typeof typesB != 'undefined')
                {
                    for(var n=0;n<typesA.length;n++)
                    {
                        for(var p=0;p<typesB.length;p++)
                        {
                            if(typesA[n] == typesB[p])
                            {
                                synergy++; //if match increase
                                if(n==0) { synergy++ }; //if main type increase
                                if(p==0) { synergy++ }; //if main type increase
                            }
                        }
                    }
                }
            }
        }
        return synergy;
    }



    var bingoBoard = []; //the board itself stored as an array first
    for (var i=1;i<=25;i++) {
        if(MODE == "short")
        {
            bingoBoard[i] = {difficulty: difficulty(i), child: "yes"};
        }
        else
        {
            bingoBoard[i] = {difficulty: difficulty(i), child: "no"};
        }
    }                                          // in order 1-25


    //giuocob 19-2-13: bingoBoard is no longer populated left to right:
    //It is now populated mostly randomly, with high difficult goals and
    //goals on the diagonals out in front
    var populationOrder = [];
    populationOrder[1] = 13;   //Populate center first
    var diagonals = [1,7,19,25,5,9,17,21];
    shuffle(diagonals);
    populationOrder = populationOrder.concat(diagonals);   //Next populate diagonals
    var nondiagonals = [2,3,4,6,8,10,11,12,14,15,16,18,20,22,23,24];
    shuffle(nondiagonals);
    populationOrder = populationOrder.concat(nondiagonals);   //Finally add the rest of the squares
    //Lastly, find location of difficulty 23,24,25 elements and put them out front
    for(var k=23;k<=25;k++)
    {
        var currentSquare = getDifficultyIndex(k);
        if(currentSquare == 0) continue;
        for(var i=1;i<25;i++)
        {
            if(populationOrder[i] == currentSquare)
            {
                populationOrder.splice(i,1);
                break;
            }
        }
        populationOrder.splice(1,0,currentSquare);
    }



    //Populate the bingo board in the array
    //giuocob 16-8-12: changed this section to:
    //1. Support uniform goal selection by shuffling arrays before checking goals
    //2. Remove all child rows by checking child tag
    //3. If no goal is suitable, instead of choosing goal with lowest synergy, now next difficulty up is checked
    for(var i=1;i<=25;i++)
    {
        var sq = populationOrder[i];
        var getDifficulty = bingoBoard[sq].difficulty;
        var goalArray = getShuffledGoals(getDifficulty);
        var j=0, synergy=0, currentObj=null, minSynObj=null;
        do
        {
            currentObj = goalArray[j];
            synergy = checkLine(sq,currentObj);
            if(minSynObj == null || synergy < minSynObj.synergy)
            {
                minSynObj = {synergy: synergy, value: currentObj};
            }
            j++;
            if(j >= goalArray.length)
            {
                getDifficulty++;
                if(getDifficulty > 25)
                {
                    break;
                }
                else
                {
                    goalArray = getShuffledGoals(getDifficulty);
                    j = 0;
                }
            }
        } while(synergy != 0);   //Perhaps increase to 1 if difficulty increases happen too often


        bingoBoard[sq].types = minSynObj.value.types;
        bingoBoard[sq].boardtypes = minSynObj.value.boardtypes;
        bingoBoard[sq].name = minSynObj.value[LANG] || minSynObj.value.name;
        bingoBoard[sq].child = minSynObj.value.child;
        bingoBoard[sq].synergy = minSynObj.synergy;
    }

    return bingoBoard;
}

var bingoList = [];
bingoList[1] = [
  { name: "Outdoor Lamps & Tractor Path", boardtypes: ["outdoorlamps","tractorpath"] },
  { name: "100% Glimmer", boardtypes: ["max1a"] },
  { name: "All gems in Glimmer", boardtypes: ["max1b"] },
  { name: "All orbs in Glimmer", boardtypes: ["max1c"] },
  { name: "4+ orbs in Hurricos & Magma Cone", boardtypes: [] },
  { name: "Lizard Hunt & Hockey 2", boardtypes: [] },
  { name: "Use all superfly powerups", boardtypes: [] },
  { name: "Buy climb with 10+ orbs", boardtypes: [] },
  { name: "Outdoor Lamps & Party Crashers", boardtypes: ["outdoorlamps","partycrashers"] }
];
bingoList[2] = [
  { name: "Hula Girls & Turtle Boxes", boardtypes: ["hulagirls","turtleboxes"] },
  { name: "100% Idol Springs", boardtypes: ["max1a"] },
  { name: "All gems in Idol Springs", boardtypes: ["max1b"] },
  { name: "All orbs in Idol Springs", boardtypes: ["max1c"] },
  { name: "4+ orbs in Glimmer & Sunny Beach", boardtypes: [] },
  { name: "Turtle Soup 2 & Factory Glide 1", boardtypes: ["turtlesoup2","factoryglide1"] },
  { name: "Break 11 Strong Chests", boardtypes: [] },
  { name: "Hula Girls & Mantas 2", boardtypes: ["hulagirls","mantas2"] }
];
bingoList[3] = [
  { name: "Hockey 1 & Pencil", boardtypes: ["hockey","pencil"] },
  { name: "100% Colossus", boardtypes: ["max1a"] },
  { name: "All gems in Colossus", boardtypes: ["max1a"] },
  { name: "All orbs in Colossus", boardtypes: ["max1a"] },
  { name: "4+ orbs in Skelos Badlands & Mystic Marsh", boardtypes: [] },
  { name: "Hockey 2 & Factory Glide 2", boardtypes: ["hockey2","factoryglide2"] },
  { name: "12 Summer Forest orbs", boardtypes: [] },
  { name: "Hockey 1 & Dinos 2", boardtypes: ["hockey1","dinos2"] }
];
bingoList[4] = [
  { name: "Lightning Orbs & Lamp Thieves", boardtypes: ["lightningorbs","lampthieves"] },
  { name: "100% Hurricos", boardtypes: ["max1a"] },
  { name: "All orbs in Hurricos", boardtypes: ["max1b"] },
  { name: "All gems in Hurricos", boardtypes: ["max1c"] },
  { name: "5+ orbs in Breeze Harbor & Zephyr", boardtypes: [] },
  { name: "Factory Glide 1 & Cowleks 2", boardtypes: ["factoryglide1","cowleks2"] },
  { name: "10 Autumn Plains orbs", boardtypes: [] },
  { name: "Collect 8 pink gems", boardtypes: [] },
  { name: "Lightning Orbs & Floating Mines", boardtypes: ["lightningorbs","floatingmines"] }
];
bingoList[5] = [
  { name: "George & Juliet 2", boardtypes: ["george","juliet2"] },
  { name: "100% Crystal Glacier", boardtypes: ["max2a"] },
  { name: "All orbs in Crystal Glacier", boardtypes: ["max2b"] },
  { name: "All gems in Crystal Glacier", boardtypes: ["max2c"] },
  { name: "4+ orbs in Colossus & Fracture Hills", boardtypes: [] },
  { name: "250 gems in both Crystal Glacier & Metropolis", boardtypes: [] },
  { name: "250 gems in both Colossus & Sunny Beach", boardtypes: [] },
  { name: "800+ homeworld gems", boardtypes: [] },
  { name: "George & Faun", boardtypes: ["george","faun"] }
];
bingoList[6] = [
  { name: "Bombo & UFOs 1", boardtypes: ["bombo","ufos1"] },
  { name: "100% Scorch", boardtypes: ["max3a"] },
  { name: "All orbs in Scorch", boardtypes: ["max3b"] },
  { name: "All gems in Scorch", boardtypes: ["max3c"] },
  { name: "5+ orbs in Cloud Temples & Metropolis", boardtypes: [] },
  { name: "All enemies in Scorch", boardtypes: [] },
  { name: "All end of level orbs", boardtypes: [] },
  { name: "Break 15 firework bottles", boardtypes: [] },
  { name: "Bombo & Bells", boardtypes: ["bombo","bells"] }
];
bingoList[7] = [
  { name: "2 Professor Orbs", boardtypes: [] },
  { name: "Enter 3 inactive portals from out of bounds", boardtypes: [] },
  { name: "Climb a ladder in 4 different levels", boardtypes: [] },
  { name: "4+ orbs in Aquaria Towers & Scorch", boardtypes: [] },
  { name: "Speak to all 8 instances of Zoe", boardtypes: [] }
];
bingoList[8] = [
  { name: "Use all '14' powerups", boardtypes: [] },
  { name: "Break 3 Mystery Jars", boardtypes: [] },
  { name: "Use all '15' powerups", boardtypes: [] }
];
bingoList[9] = [
  { name: "Ignite 4 rockets", boardtypes: [] },
  { name: "Buy Swim with 8+ orbs", boardtypes: [] },
  { name: "Unlock Aquaria Towers, Zephyr & Shady Oasis", boardtypes: [] },
  { name: "Collect all spirit particles in 5 levels", boardtypes: [] }
];
bingoList[10] = [
  { name: "Agent 0 & Monkeys", boardtypes: ["agent0","monkeys"] },
  { name: "100% Cloud Temples", boardtypes: ["max3a"] },
  { name: "All gems in Cloud Temples", boardtypes: ["max3b"] },
  { name: "All orbs in Cloud Temples", boardtypes: ["max3c"] },
  { name: "600+ gems in Scorch & Metropolis", boardtypes: [] },
  { name: "All enemies in Cloud Temples", boardtypes: [] },
  { name: "Break 4 Headbash Chests", boardtypes: [] },
  { name: "250 gems in both Scorch & Mystic Marsh", boardtypes: [] },
  { name: "Agent 0 & UFOs 1", boardtypes: ["agent0","ufos1"] }
];
bingoList[11] = [
  { name: "Earthshapers & Draclets", boardtypes: ["earthshapers","draclets"] },
  { name: "100% Fracture Hills", boardtypes: ["max3a"] },
  { name: "All orbs in Fracture Hills", boardtypes: ["max3b"] },
  { name: "All gems in Fracture Hills", boardtypes: ["max2c"] },
  { name: "Defeat all enemies in Fracture Hills", boardtypes: [] },
  { name: "300 gems in both Skelos Badlands & Breeze Harbor", boardtypes: [] },
  { name: "Alchemist & Popcorn 2", boardtypes: [] },
  { name: "Earthshapers & Juliet 2", boardtypes: ["earthshapers","juliet2"] }
];
bingoList[12] = [
  { name: "Trolley & Factory Glide 2", boardtypes: ["trolley","factoryglide2"] },
  { name: "100% Breeze Harbor", boardtypes: ["max2a"] },
  { name: "All orbs in Breeze Harbor", boardtypes: ["max2b"] },
  { name: "All gems in Breeze Harbor", boardtypes: ["max2c"] },
  { name: "650+ gems in Hurricos & Breeze Harbor", boardtypes: [] },
  { name: "Stand on 10 Portals & both Skelos Skulls", boardtypes: [] },
  { name: "Activate 5 different powerup types", boardtypes: [] },
  { name: "Use all invincibility powerups", boardtypes: [] },
  { name: "Trolley & Lamp Thieves", boardtypes: ["trolley","lampthieves"] }
];
bingoList[13] = [
  { name: "Popcorn 1 & Indoor Lamps", boardtypes: ["popcorn1","indoorlamps"] },
  { name: "100% Magma Cone", boardtypes: ["max2a"] },
  { name: "All gems in Magma Cone", boardtypes: ["max2b"] },
  { name: "All orbs in Magma Cone", boardtypes: ["max2c"] },
  { name: "600+ gems in Glimmer & Crystal Glacier", boardtypes: [] },
  { name: "Break 15 butterfly jars", boardtypes: [] },
  { name: "Popcorn 2 & Mantas 1", boardtypes: ["popcorn2","mantas1"] },
  { name: "Popcorn 1 & Tractor Path", boardtypes: ["popcorn1","tractorpath"] }
];
bingoList[14] = [
  { name: "Turtle Soup 1 & Mantas 2", boardtypes: ["turtlesoup1","mantas2"] },
  { name: "100% Sunny Beach", boardtypes: ["max1a"] },
  { name: "All gems in Sunny Beach", boardtypes: ["max1b"] },
  { name: "All orbs in Sunny Beach", boardtypes: ["max1c"] },
  { name: "600+ gems in Idol Springs & Skelos Badlands", boardtypes: [] },
  { name: "Seaweed Skill Point", boardtypes: [] },
  { name: "275 gems in both Idol Springs & Fracture Hills", boardtypes: [] },
  { name: "Use all fireball powerups", boardtypes: [] },
  { name: "Turtle Soup 1 & Puzzle", boardtypes: ["turtlesoup1","puzzle"] }
];
bingoList[15] = [
  { name: "Dinos 1 & Spirit Statues", boardtypes: ["dinos1","spiritstatues"] },
  { name: "100% Skelos Badlands", boardtypes: ["max2a"] },
  { name: "All gems in Skelos Badlands", boardtypes: ["max2b"] },
  { name: "All orbs in Skelos Badlands", boardtypes: ["max2c"] },
  { name: "600+ gems in Colossus & Shady Oasis", boardtypes: [] },
  { name: "7 skill points", boardtypes: [] },
  { name: "#BoneDance & Turtle Soup 2", boardtypes: ["bonedance","turtlesoup2"] },
  { name: "Dinos 1 & Pencil", boardtypes: ["dinos1","pencil"] }
];
bingoList[16] = [
  { name: "1000+ Summer Forest gems", boardtypes: [] },
  { name: "100% Summer Forest", boardtypes: [] },
  { name: "100% Winter Tundra", boardtypes: [] },
  { name: "Hockey Skill Point", boardtypes: [] }
];
bingoList[17] = [
  { name: "Ocean & Icy orbs", boardtypes: [] },
  { name: "All gems in 3 speedways", boardtypes: [] },
  { name: "Metro & Icy orbs", boardtypes: [] },
  { name: "Ocean & Canyon orbs", boardtypes: [] },
  { name: "Metro & Canyon orbs", boardtypes: [] }
];
bingoList[18] = [
  { name: "Stand on 5 portals you own the talisman for", boardtypes: [] },
  { name: "Use all '2' powerups", boardtypes: [] },
  { name: "Use all '18' powerups", boardtypes: [] },
  { name: "Use all '20' powerups", boardtypes: [] }
];
bingoList[19] = [
  { name: "Collect an orb in 10 different levels", boardtypes: [] },
  { name: "Talk to Brother Curtis with 4+ Talismans & 4+ orbs", boardtypes: [] },
  { name: "Unlock all speedways", boardtypes: [] },
  { name: "Use all supercharge powerups", boardtypes: [] }
];
bingoList[20] = [
  { name: "Ox & Bells", boardtypes: ["ox","bombo"] },
  { name: "100% Metropolis", boardtypes: ["max3a"] },
  { name: "All orbs in Metropolis", boardtypes: ["max3b"] },
  { name: "All gems in Metropolis", boardtypes: ["max3c"] },
  { name: "1000+ gems in Winter Tundra", boardtypes: [] },
  { name: "All boss skill points", boardtypes: [] },
  { name: "250 gems in both Cloud Temples & Robotica Farms", boardtypes: [] },
  { name: "Ox & Monkeys", boardtypes: ["ox","monkeys"] }
];
bingoList[21] = [
  { name: "Cowleks 1 & Faun", boardtypes: ["cowleks1","faun"] },
  { name: "100% Zephyr", boardtypes: ["max2a"] },
  { name: "All orbs in Zephyr", boardtypes: ["max2b"] },
  { name: "All gems in Zephyr", boardtypes: ["max2c"] },
  { name: "600+ gems in Sunny Beach & Zephyr", boardtypes: [] },
  { name: "Defeat all enemies in Zephyr", boardtypes: [] },
  { name: "Plant all seeds in Zephyr", boardtypes: [] },
  { name: "Cowleks 2 & UFOs 2", boardtypes: ["cowleks2","ufos2"] },
  { name: "Cowleks 1 & Draclets", boardtypes: ["cowleks1","draclets"] }
];
bingoList[22] = [
  { name: "Hippos & Floating Mines", boardtypes: ["hippos","floatingmines"] },
  { name: "100% Shady Oasis", boardtypes: ["max3a"] },
  { name: "All orbs in Shady Oasis", boardtypes: ["max3b"] },
  { name: "All gems in Shady Oasis", boardtypes: ["max3c"] },
  { name: "Talismans in Hurricos, Aquaria Towers & Shady Oasis", boardtypes: [] },
  { name: "Buy headbash with 4 talismans", boardtypes: [] },
  { name: "Pay moneybags 7 times", boardtypes: [] },
  { name: "20 orbs", boardtypes: [] },
  { name: "Hippos & Factory Glide 2", boardtypes: ["hippos","factoryglide2"] }
];
bingoList[23] = [
  { name: "Basil & Dinos 2", boardtypes: ["basil","dinos2"] },
  { name: "100% Mystic Marsh", boardtypes: ["max3a"] },
  { name: "All gems in Mystic Marsh", boardtypes: ["max3b"] },
  { name: "All orbs in Mystic Marsh", boardtypes: ["max3c"] },
  { name: "Talismans in Colossus, Skelos Badlands & Fracture Hills", boardtypes: [] },
  { name: "All enemies in Mystic Marsh", boardtypes: [] },
  { name: "Enter 8 return home portals", boardtypes: [] },
  { name: "9 Winter Tundra orbs", boardtypes: [] },
  { name: "Basil & Spirit Statues", boardtypes: ["basil","spiritstatues"] }
];
bingoList[24] = [
  { name: "Seahorses & Puzzle", boardtypes: ["seahorses","puzzle"] },
  { name: "100% Aquaria Towers", boardtypes: ["max1a"] },
  { name: "All gems in Aquaria Towers", boardtypes: ["max1b"] },
  { name: "All orbs in Aquaria Towers", boardtypes: ["max1c"] },
  { name: "Talismans in Idol Springs, Sunny Beach & Scorch", boardtypes: [] },
  { name: "Mantas 1 & #BoneDance", boardtypes: ["mantas1","bonedance"] },
  { name: "Defeat all enemies in Aquaria Towers", boardtypes: [] },
  { name: "Seahorses & Turtle Boxes", boardtypes: ["seahorses","turtleboxes"] }
];
bingoList[25] = [
  { name: "Robot Scarecrows & Party Crashers", boardtypes: ["robotscarecrows","partycrashers"] },
  { name: "100% Robotica Farms", boardtypes: ["max3a"] },
  { name: "All gems in Robotica Farms", boardtypes: ["max3b"] },
  { name: "All orbs in Robotica Farms", boardtypes: ["max3c"] },
  { name: "Talismans in Crystal Glacier, Magma Cone & Zephyr", boardtypes: [] },
  { name: "Unlock Cloud Temples", boardtypes: [] },
  { name: "100% Autumn Plains", boardtypes: [] },
  { name: "Robot Scarecrows & Indoor Lamps", boardtypes: ["robotscarecrows","partycrashers"] }
];
