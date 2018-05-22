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
{ name: "All gems in Glimmer & Scorch Skill Point", types: ["gem1"] },
{ name: "All orbs in Robotica Farms", types: ["orb3"] },
{ name: "Outdoor Lamps & Tractor Path", types: ["outdoorlamps","tractorpath","glirob"] },
{ name: "Outdoor Lamps & Party Crashers", types: ["outdoorlamps","partycrashers","glimag"] },
{ name: "4+ orbs in Hurricos & Magma Cone", types: [] },
{ name: "Speak to all 9 instances of Zoe", types: [] },
{ name: "Use all '2' powerups", types: ["2p"] },
{ name: "100% Glimmer", types: ["max1"] }
];
bingoList[2] = [
{ name: "All gems in Hurricos", types: ["gem1"] },
{ name: "All orbs in Shady Oasis", types: ["orb3"] },
{ name: "Lightning Orbs & Lamp Thieves", types: ["lightningorbs","lampthieves","hursha"] },
{ name: "Lightning Orbs & Floating Mines", types: ["lightningorbs","floatingmines","hurbre"] },
{ name: "5+ orbs in Breeze Harbour and Zephyr", types: [] },
{ name: "Buy Climb & Headbash", types: [] },
{ name: "Use all invincibility powerups", types: [] },
{ name: "100% Hurricos", types: ["max1"] }
];
bingoList[3] = [
{ name: "All orbs in Breeze Harbor", types: ["orb2"] },
{ name: "All orbs in Hurricos", types: ["orb1"] },
{ name: "Factory Glide 2 & Trolley", types: ["factoryglide2","trolley","hurbre"] },
{ name: "Trolley & Lamp Thieves", types: ["trolley","lampthieves","bresha"] },
{ name: "Break 3 Mystery Jars", types: [] },
{ name: "600 combined gems in Skelos Badlands & Shady Oasis", types: [] },
{ name: "Use all '18' powerups", types: ["18p"] },
{ name: "100% Breeze Harbor", types: ["max2"] }
];
bingoList[4] = [
{ name: "All gems in Crystal Glacier", types: ["gem2"] },
{ name: "All orbs in Fracture Hills", types: ["orb3"] },
{ name: "George & Juliet 2", types: ["george","juliet2","cryzep"] },
{ name: "George & Faun", types: ["george","faun","cryfra"] },
{ name: "250 gems in both Zephyr and Shady Oasis", types: [] },
{ name: "Use all supercharge powerups", types: [] },
{ name: "10 Autumn Plains orbs", types: [] },
{ name: "100% Crystal Glacier", types: ["max2"] }
];
bingoList[5] = [
{ name: "Unlock all speedways", types: [] },
{ name: "All gems in 3 speedways", types: [] },
{ name: "All gems in 3 speedways", types: [] },
{ name: "Ocean & Canyon orbs", types: [] },
{ name: "Ocean & Metro orbs", types: [] },
{ name: "Metro & Icy orbs", types: [] },
{ name: "Icy & Canyon orbs", types: [] },
{ name: "Unlock all speedways", types: [] }
];
bingoList[6] = [
{ name: "100% Autumn Plains", types: ["hw1"] },
{ name: "100% Winter Tundra", types: ["hw2"] },
{ name: "All Boss Skill Points", types: ["hw3"] },
{ name: "1000 Winter Tundra gems", types: ["hw4"] },
{ name: "1200 Autumn Plains gems", types: ["hw5"] },
{ name: "1000 Summer Forest gems", types: ["hw6"] },
{ name: "Enter 3 inactive portals from out of bounds", types: ["hw7"] },
{ name: "800 Homeworld gems", types: ["hw8"] },
{ name: "7 Homeworld orbs", types: ["hw9"] },
{ name: "Unlock Aquaria, Zephyr and Shady", types: ["hw10"] },
{ name: "100% Summer Forest", types: ["hw11"] }
];
bingoList[7] = [
{ name: "Break 15 butterfly jars", types: ["misc1"] },
{ name: "Ignite 4 rockets", types: ["misc2"] },
{ name: "Break 3 headbash chests", types: ["misc3"] },
{ name: "Stand on 10 portals & both Skelos skulls", types: ["misc4"] },
{ name: "Stand on 5 portals you own the talismans for", types: ["misc5"] },
{ name: "Enter 8 return home portals", types: ["misc6"] },
{ name: "7 skill points", types: ["misc7"] },
{ name: "Collect 8 pink gems", types: ["misc8"] },
{ name: "Break 15 firework bottles", types: ["misc9"] },
{ name: "Defeat all enemies in 5 levels", types: ["misc10"] },
{ name: "Break 11 strong chests", types: ["misc11"] }
];
bingoList[8] = [
{ name: "All gems in Metropolis", types: ["gem3"] },
{ name: "All orbs in Scorch", types: ["orb2"] },
{ name: "Bells & Ox", types: ["bells","ox","clomet"] },
{ name: "Monkeys & Ox", types: ["monkeys","ox","scomet"] },
{ name: "Use all '2' powerups", types: ["2p"] },
{ name: "Use all '20' powerups", types: ["20p"] },
{ name: "8 Winter Tundra orbs", types: [] },
{ name: "100% Metropolis", types: ["max3"] }
];
bingoList[9] = [
{ name: "Turtle Soup 2 & UFOs 2", types: ["turtlesoup2","ufos2","sunmet"] },
{ name: "Alchemist & Popcorn 2", types: ["alchemist","popcorn2","framag"] },
{ name: "Cowleks 2 & UFOs 2", types: ["cowleks2","ufos2","zepmet"] },
{ name: "Lizard Hunt & #BoneDance", types: ["lizardhunt","bonedance","gliske"] },
{ name: "Talismans in Hurricos, Scorch & Magma Cone", types: [] },
{ name: "Talismans in Idol Springs, Zephyr & Shady Oasis", types: [] },
{ name: "Talismans in Colossus, Aquaria Towers & Breeze Harbor", types: [] },
{ name: "Talismans in Sunny Beach, Skelos Badlands & Scorch", types: [] },
{ name: "Lizard Hunt & Hockey 2", types: ["lizardhunt","hockey2","glicol"] }
];
bingoList[10] = [
{ name: "All gems in Colossus", types: ["gem1"] },
{ name: "All gems in Mystic Marsh", types: ["gem3"] },
{ name: "Hockey 1 & Basil", types: ["hockey1","basil","colmys"] },
{ name: "Hockey 1 & Dinos 1", types: ["hockey1","dinos1","colske"] },
{ name: "4+ orbs in Skelos Badlands & Mystic Marsh", types: [] },
{ name: "650 combined gems in Glimmer & Skelos Badlands", types: [] },
{ name: "Seaweed Skill Point", types: [] },
{ name: "100% Colossus", types: ["max1"] }
];
bingoList[11] = [
{ name: "All gems in Idol Springs", types: ["gem1"] },
{ name: "All orbs in Aquaria Towers", types: ["orb1"] },
{ name: "Hula Girls & Turtle Boxes", types: ["hulagirls","turtleboxes","idosun"] },
{ name: "Hula Girls & Mantas 2", types: ["hulagirls","mantas2","idoaqu"] },
{ name: "4+ orbs in Glimmer & Sunny Beach", types: [] },
{ name: "Buy Swim with 8+ orbs", types: [] },
{ name: "Use all fireball powerups", types: [] },
{ name: "100% Idol Springs", types: ["max1"] }
];
bingoList[12] = [
{ name: "All gems in Sunny Beach", types: ["gem1"] },
{ name: "All orbs in Idol Springs", types: ["orb1"] },
{ name: "Turtle Soup 1 & Mantas 2", types: ["turtlesoup1","mantas2","sunaqu"] },
{ name: "Puzzle & Turtle Soup 1", types: ["puzzle","turtlesoup1","idosun"] },
{ name: "Plant all seeds in Zephyr", types: [] },
{ name: "600 combined gems in Magma Cone & Aquaria Towers", types: [] },
{ name: "12 Summer Forest orbs", types: [] },
{ name: "100% Sunny Beach", types: ["max1"] }
];
bingoList[13] = [
{ name: "All gems in Robotica Farms", types: ["gem3"] },
{ name: "All gems in Magma Cone", types: ["gem2"] },
{ name: "Indoor Lamps & Robot Scarecrows", types: ["indoorlamps","robotscarecrows","glirob"] },
{ name: "Party Crashers & Robot Scarecrows", types: ["partycrashers","robotscarecrows","magrob"] },
{ name: "Pay Moneybags 7 times", types: [] },
{ name: "250 gems in both Glimmer & Metropolis", types: [] },
{ name: "Use all superfly powerups", types: [] },
{ name: "100% Robotica Farms", types: ["max3"] }
];
bingoList[14] = [
{ name: "All gems in Aquaria Towers", types: ["gem1"] },
{ name: "All orbs in Sunny Beach", types: ["orb1"] },
{ name: "Puzzle & Seahorses", types: ["puzzle","seahorses","idoaqu"] },
{ name: "Turtle Boxes & Seahorses", types: ["turtleboxes","seahorses","sunaqu"] },
{ name: "250 gems in both Idol Springs & Cloud Temples", types: [] },
{ name: "Use all '14' powerups", types: ["14p"] },
{ name: "All enemies in Aquaria Towers", types: [] },
{ name: "100% Aquaria Towers", types: ["max1"] }
];
bingoList[15] = [
{ name: "All gems in Skelos Badlands", types: ["gem2"] },
{ name: "All orbs in Colossus", types: ["orb1"] },
{ name: "Spirit Statues & Dinos 1", types: ["spiritstatues","dinos1","colske"] },
{ name: "Dinos 1 & Basil", types: ["dinos1","basil","skemys"] },
{ name: "300 gems in both Idol Springs and Colossus", types: [] },
{ name: "Use all spring powerups", types: [] },
{ name: "2 Professor orbs", types: [] },
{ name: "100% Skelos Badlands", types: ["max2"] }
];
bingoList[16] = [
{ name: "All orbs in Mystic Marsh", types: ["orb3"] },
{ name: "All orbs in Skelos Badlands", types: ["orb2"] },
{ name: "Dinos 2 & Pencil", types: ["dinos2","pencil","skemys"] },
{ name: "Spirit Statues & Pencil", types: ["spiritstatues","pencil","colmys"] },
{ name: "Hockey Skill Point", types: [] },
{ name: "Use all '18' powerups", types: ["18p"] },
{ name: "All enemies in Mystic Marsh", types: [] },
{ name: "100% Mystic Marsh", types: ["max3"] }
];
bingoList[17] = [
{ name: "All gems in Scorch", types: ["gem2"] },
{ name: "All gems in Cloud Temples", types: ["gem3"] },
{ name: "Bombo & UFOs 1", types: ["bombo","ufos1","scomet"] },
{ name: "Bombo & Bells", types: ["bombo","bells","scoclo"] },
{ name: "5+ orbs in Cloud Temples & Metropolis", types: [] },
{ name: "600 combined gems in Fracture Hills & Metropolis", types: [] },
{ name: "All enemies in Scorch", types: [] },
{ name: "100% Scorch", types: ["max2"] }
];
bingoList[18] = [
{ name: "100% Autumn Plains", types: ["hw1"] },
{ name: "100% Winter Tundra", types: ["hw2"] },
{ name: "All Boss Skill Points", types: ["hw3"] },
{ name: "1000 Winter Tundra gems", types: ["hw4"] },
{ name: "1200 Autumn Plains gems", types: ["hw5"] },
{ name: "1000 Summer Forest gems", types: ["hw6"] },
{ name: "Enter 3 inactive portals from out of bounds", types: ["hw7"] },
{ name: "800 Homeworld gems", types: ["hw8"] },
{ name: "7 Homeworld orbs", types: ["hw9"] },
{ name: "Unlock Aquaria, Zephyr and Shady", types: ["hw10"] },
{ name: "100% Summer Forest", types: ["hw11"] }
];
bingoList[19] = [
{ name: "Break 15 butterfly jars", types: ["misc1"] },
{ name: "Ignite 4 rockets", types: ["misc2"] },
{ name: "Break 3 headbash chests", types: ["misc3"] },
{ name: "Stand on 10 portals & both Skelos skulls", types: ["misc4"] },
{ name: "Stand on 5 portals you own the talismans for", types: ["misc5"] },
{ name: "Enter 8 return home portals", types: ["misc6"] },
{ name: "7 skill points", types: ["misc7"] },
{ name: "Collect 8 pink gems", types: ["misc8"] },
{ name: "Break 15 firework bottles", types: ["misc9"] },
{ name: "Defeat all enemies in 5 levels", types: ["misc10"] },
{ name: "Break 11 strong chests", types: ["misc11"] }
];
bingoList[20] = [
{ name: "All orbs in Cloud Temples", types: ["orb3"] },
{ name: "All orbs in Metropolis", types: ["orb3"] },
{ name: "Monkeys & Agent 0", types: ["monkeys","agent0","scoclo"] },
{ name: "Agent 0 & UFOs 1", types: ["agent0","ufos1","clomet"] },
{ name: "Use all '20' powerups", types: ["20p"] },
{ name: "250 gems in both Scorch & Fracture Hills", types: [] },
{ name: "Use 5 unique powerup types", types: [] },
{ name: "100% Cloud Temples", types: ["max3"] }
];
bingoList[21] = [
{ name: "Turtle Soup 2 & Alchemist", types: ["turtlesoup2","alchemist","sunfra"] },
{ name: "Mantas 1 & Popcorn 2", types: ["mantas1","popcorn2","aqumag"] },
{ name: "Factory Glide 1 & Cowleks 2", types: ["factoryglide1","cowleks2","hurzep"] },
{ name: "Mantas 2 & #BoneDance", types: ["mantas2","bonedance","aquske"] },
{ name: "20 orbs", types: [] },
{ name: "20 orbs", types: [] },
{ name: "2000 gems", types: [] },
{ name: "2000 gems", types: [] },
{ name: "Hockey 2 & Factory Glide 1", types: ["hockey2","factoryglide1","colhur"] }
];
bingoList[22] = [
{ name: "All gems in Shady Oasis", types: ["gem3"] },
{ name: "All gems in Breeze Harbor", types: ["gem2"] },
{ name: "Floating Mines & Hippos", types: ["floatingmines","hippos","bresha"] },
{ name: "Factory Glide 2 & Hippos", types: ["factoryglide2","hippos","hursha"] },
{ name: "Speak to Brother Curtis with 4+ talismans & 4+ orbs", types: [] },
{ name: "250 gems in both Sunny Beach & Breeze Harbor", types: [] },
{ name: "All end of level orbs", types: [] },
{ name: "100% Shady Oasis", types: ["max3"] }
];
bingoList[23] = [
{ name: "All gems in Fracture Hills", types: ["gem2"] },
{ name: "All orbs in Zephyr", types: ["orb2"] },
{ name: "Draclets & Earthshapers", types: ["draclets","earthshapers"] },
{ name: "Juliet 2 &  Earthshapers", types: ["juliet2","earthshapers","zepfra"] },
{ name: "Use all '14' powerups", types: ["14p"] },
{ name: "Use all '15' powerups", types: ["15p"] },
{ name: "All enemies in Fracture Hills", types: [] },
{ name: "100% Fracture Hills", types: ["max3"] }
];
bingoList[24] = [
{ name: "All gems in Zephyr", types: ["gem2"] },
{ name: "All orbs in Crystal Glacier", types: ["orb2"] },
{ name: "Cowleks 1 & Faun", types: ["cowleks1","faun","zepfra"] },
{ name: "Draclets & Cowleks 1", types: ["draclets","cowleks1","cryzep"] },
{ name: "4+ orbs in Colossus & Fracture Hills", types: [] },
{ name: "650 combined gems in Hurricos & Fracture Hills", types: [] },
{ name: "All enemies in Zephyr", types: [] },
{ name: "100% Zephyr", types: ["max2"] }
];
bingoList[25] = [
{ name: "All orbs in Magma Cone", types: ["orb2"] },
{ name: "All orbs in Glimmer", types: ["orb1"] },
{ name: "Indoor Lamps & Popcorn 1", types: ["indoorlamps","popcorn1","glimag"] },
{ name: "Popcorn 1 & Tractor Path", types: ["popcorn1","tractorpath","robmag"] },
{ name: "Use all '15' powerups", types: ["15p"] },
{ name: "600 combined gems in Crystal Glacier and Robotica Farms", types: [] },
{ name: "Unlock Cloud Temples", types: [] },
{ name: "100% Magma Cone", types: ["max2"] }
];
