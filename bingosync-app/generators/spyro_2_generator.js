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
        var typesA = testsquare.types;
        var synergy = 0;
        var rows = rowCheckList[i], elements = [];
        var childCount = 0;
        for(var k=0;k<rows.length;k++)
        {
            elements = rowElements[rows[k]];
            childCount = 0;
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
                if(bingoBoard[elements[m]].child == "yes")
                {
                    childCount++;
                }
            }
            //Remove child-only rows, remove adult goals from short
            if(MODE == "short")
            {
                if(testsquare.child == "no")
                {
                    childCount--;
                }
                console.debug(rows[k]);
                console.debug(childCount);
                if(childCount < 5)
                {
                    synergy += 3;
                }
            }
            else
            {
                if(testsquare.child == "yes")
                {
                    childCount++;
                }
                if(childCount > 4)
                {
                    synergy += 3;
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
        bingoBoard[sq].name = minSynObj.value[LANG] || minSynObj.value.name;
        bingoBoard[sq].child = minSynObj.value.child;
        bingoBoard[sq].synergy = minSynObj.synergy;
    }

    return bingoBoard;
}

var bingoList = [];
// Summer Forest 1
bingoList[1] = [
  { name: "All orbs in Glimmer", types: ["Glimmer", "orbs"] },
  { name: "All orbs in Aquaria Towers", types: ["Aquaria Towers", "orbs"] },
  { name: "All orbs in Colossus", types: ["Colossus", "orbs"] }
];
bingoList[2] = [
  { name: "All gems in Glimmer", types: ["Glimmer", "all gems"] },
  { name: "All gems in Idol Springs", types: ["Idol Springs", "all gems"] },
  { name: "All gems in Crystal Glacier", types: ["Crystal Glacier", "all gems"] }
];
bingoList[3] = [
  { name: "Hockey Skillpoint", types: ["Colossus", "skillpoint"] },
  { name: "Seaweed skillpoint", types: ["Aquaria Towers", "skillpoint"] },
  { name: "Destroy 2 ?-mark bottles", types: ["Skelos Badlands", "Zephyr", "Shady Oasis", "Robotica Farms", "skillpoint"] }
];
bingoList[4] = [
  { name: "100% Glimmer", types: ["Glimmer", "all gems", "orbs", "talismans"] },
  { name: "100% Hurricos", types: ["Hurricos", "all gems", "orbs", "talismans"] },
  { name: "100% Crystal Glacier", types: ["Crystal Glacier", "all gems", "orbs", "talismans"] },
  { name: "100% Colossus", types: ["Colossus", "all gems", "orbs", "talismans"] }
];
bingoList[5] = [
  { name: "Talk to Brother Curtis with 4+ talismans", types: ["talismans", "Colossus", "meme"] },
  { name: "Stand on 4 level portals that you own the talisman for", types: ["talismans", "portals", "meme"] },
  { name: "Enter 5 Return Home portals", types: ["talismans", "portals"] },
  { name: "Stand on top of 10 portals", types: ["portals", "meme"] }
];
//
bingoList[6] = [
  { name: "4 combined orbs in Glimmer & Sunny Beach", types: ["Glimmer", "Sunny Beach", "orbs"] },
  { name: "Statue Spirits orb & Baby Seahorses orb", types: ["Colossus", "Aquaria Towers", "orbs"] },
  { name: "First Turtle Soup orb & First Manta orb", types: ["Sunny Beach", "Aquaria Towers", "orbs", "Hunter"] },
  { name: "Cave Lamps orb & Second Turtle Soup orb", types: ["Glimmer", "Sunny Beach", "orbs"] }
];
bingoList[7] = [
  { name: "Ocean Speedway orb", types: ["Ocean Speedway", "orbs"] },
  { name: "#BoneDance", types: ["Skelos Badlands", "orbs"] },
  { name: "Icy Speedway orb", types: ["Icy Speedway", "orbs"] },
  { name: "Metro Speedway orb", types: ["Metro Speedway", "orbs"] }
];
bingoList[8] = [
  { name: "100% Skelos Badlands", types: ["Skelos Badlands", "all gems", "orbs"] },
  { name: "600 combined gems in Skelos Badlands & Fracture Hills", types: ["Fracture Hills", "Skelos Badlands", "500+ gems"] },
  { name: "All gems in Scorch", types: ["Scorch", "all gems"] },
  { name: "Alchemist orb & Party Crashers orb", types: ["Fracture Hills", "Magma Cone", "orbs"] },
  { name: "Second Romeo and Juliet orb & Free the Faun orb", types: ["Fracture Hills", "Zephyr", "orbs"] }
];
bingoList[9] = [
  { name: "Trouble with the Trolley orb & Second Popcorn orb", types: ["Breeze Harbor", "Magma Cone", "orbs"] },
  { name: "All orbs in Breeze Harbor", types: ["Breeze Harbor", "orbs"] },
  { name: "Collect 8 orbs", types: ["orbs"] },
  { name: "Unlock all speedways", types: ["speedway", "Ocean Speedway", "Metro Speedway", "Icy Speedway", "Canyon Speedway", "orbs", "Moneybags"] },
  { name: "Pay Moneybags 4 times", types: ["Moneybags", "500+ gems", "orbs"] }
];
bingoList[10] = [
  { name: "Enter 8 Return Home portals", types: ["talismans", "portals"] },
  { name: "Activate all '18' powerups", types: ["enemies", "spirits", "powerups", "Hurricos", "Shady Oasis"] },
  { name: "Collect all enemy spirits in 3 levels", types: ["enemies", "spirits", "powerup"] },
  { name: "Talismans from Colossus, Skelos Badlands & Fracture Hills", types: ["Colossus", "Skelos Badlands", "Fracture Hills", "talismans"] },
  { name: "Talismans from Hurricos, Scorch & Magma Cone", types: ["Hurricos", "Scorch", "Magma Cone", "talismans"] }
];
//
bingoList[11] = [
  { name: "First Hockey orb & First Popcorn orb", types: ["Colossus", "Magma Cone", "orbs", "Hunter"] },
  { name: "10 Summer Forest orbs", types: ["Summer Forest", "orbs"] },
  { name: "Lightning Stone Thieves orb & Monkeys orb", types: ["Hurricos", "Scorch", "orbs"] },
  { name: "100% Summer Forest Homeworld", types: ["Summer Forest", "orbs"] },
  { name: "100% Sunny Beach", types: ["Sunny Beach", "orbs"] }
];
bingoList[12] = [
  { name: "100% Idol Springs", types: ["Idol Springs", "500+ gems"] },
  { name: "Pencil orb", types: ["Mystic Marsh", "500+ gems"] },
  { name: "650 combined gems in Glimmer & Hurricos", types: ["Glimmer", "Hurricos", "500+ gems"] },
  { name: "650 combined gems in Idol Springs & Scorch", types: ["Idol Springs", "Scorch", "500+ gems"] },
  { name: "650 combined gems in Colossus & Crystal Glacier", types: ["Colossus", "Crystal Glacier", "500+ gems"] },
  { name: "All orbs in Winter Tundra Homeworld", types: ["Winter Tundra", "500+ gems"] }
];
bingoList[13] = [
  { name: "Second Dinosaur orb & Bombo orb", types: ["Skelos Badlands", "Scorch", "orbs"] },
  { name: "All orbs in Zephyr", types: ["Zephyr", "orbs"] },
  { name: "Stand on both skulls in Skelos", types: ["Skelos Badlands", "orbs"] },
  { name: "Break 12 butterfly jars", types: ["extra lives", "orbs"] },
  { name: "Plant all seeds in Zephyr", types: ["Moneybags", "orbs"] },
  { name: "Robot Scarecrows orb", types: ["Robotica Farms", "orbs"] }
];
//
bingoList[14] = [
  { name: "Turtle Boxes orb & Draclet Cave orb", types: ["Sunny Beach", "Crystal Glacier", "orbs", "Swim"] },
  { name: "6 Autumn Plains orbs", types: ["Autumn Plains", "orbs"] },
  { name: "5 Hunter orbs", types: ["Hunter", "orbs"] },
  { name: "100% Magma Cone", types: ["Magma Cone", "orbs"] },
  { name: "Canyon Speedway orb", types: ["Canyon Speedway", "orbs"] },
  { name: "Bomb the Ox orb", types: ["Metropolis", "orbs"] }
];
bingoList[15] = [
  { name: "Collect 1250 gems", types: ["enemies", "spirits", "powerups"] },
  { name: "Activate all '20' powerups", types: ["enemies", "spirits", "powerups"] },
  { name: "Activate all '2' powerups", types: ["enemies", "spirits", "powerups"] },
  { name: "Activate all '15' powerups", types: ["enemies", "spirits", "powerups"] },
  { name: "Collect all enemy spirits in 6 levels", types: ["enemies", "spirits", "powerup"] }
];
//
bingoList[16] = [
  { name: "12 Summer Forest orbs", types: ["Summer Forest", "orbs"] },
  { name: "5 Winter Tundra orbs", types: ["Winter Tundra", "orbs"] },
  { name: "Buy Swim with 10 orbs", types: ["Moneybags", "orbs"] },
  { name: "100% Autumn Plains Homeworld", types: ["Autumn Plains", "orbs"] },
  { name: "End of level orb in Cloud Temples", types: ["Cloud Temples", "orbs"] }
];
bingoList[17] = [
  { name: "All orbs in Fracture Hills", types: ["Fracture Hills", "orbs"] },
  { name: "Agent 0 orb", types: ["Cloud Temples", "orbs"] },
  { name: "Enter 2 portals from OoB", types: ["Dragon Shores", "orbs"] },
  { name: "7 Homeworld orbs", types: ["Summer Forest", "orbs"] },
  { name: "100% Winter Tundra Homeworld", types: ["Winter Tundra", "orbs"] }
];
bingoList[18] = [
  { name: "Beat 3 Speedways", types: ["Ocean Speedway", "orbs"] },
  { name: "6 Hunter orbs", types: ["Hunter", "orbs"] },
  { name: "Explorer Bazil orb", types: ["Mystic Marsh", "orbs"] },
  { name: "800 combined Homeworld gems", types: ["Summer Forest", "orbs"] },
  { name: "Hippo Brothers orb", types: ["Shady Oasis", "orbs"] }
];
bingoList[19] = [
  { name: "Puzzle orb & Rescue George orb", types: ["Crystal Glacier", "orbs"] },
  { name: "9 Autumn Plains orbs", types: ["Autumn Plains", "orbs"] },
  { name: "Pay Moneybags 6 times", types: ["Moneybags", "500+ gems"] },
  { name: "Buy Climb and Headbash", types: ["Headbash", "500+ gems"] }
];
bingoList[20] = [
  { name: "150 gems in both Sunny Beach & Robotica Farms", types: ["Sunny Beach", "Robotica Farms", "500+ gems"] },
  { name: "All gems in Shady Oasis", types: ["Shady Oasis", "Moneybags", "500+ gems"] },
  { name: "Destroy 7 strong chests", types: ["Idol Springs", "Colossus", "500+ gems"] },
  { name: "650 combined gems in Magma Cone & Shady Oasis", types: ["Magma Cone", "Shady Oasis", "500+ gems"] }
];
//
bingoList[21] = [
  { name: "13 Summer Forest orbs", types: ["orbs"] },
  { name: "8 Winter Tundra orbs", types: ["orbs"] },
  { name: "Collect 15 orbs", types: ["orbs"] },
  { name: "2 end of level orbs in Winter Tundra", types: ["orbs"] }
  ];
bingoList[22] = [
  { name: "150 gems in both Idol Springs & Mystic Marsh", types: ["Mystic Marsh", "orbs"] },
  { name: "7 Skillpoints", types: ["skillpoints", "orbs"] },
  { name: "Second Sheep Saucers orb", types: ["Metropolis", "orbs"] }
];
bingoList[23] = [
  { name: "7 Hunter orbs", types: ["Hunter", "500+ gems"] },
  { name: "Destroy 3 ?-mark bottles", types: ["Robotica Farms", "500+ gems"] },
  { name: "175 gems in both Zephyr & Cloud Temples", types: ["Cloud Temples", "500+ gems"] }
];
bingoList[24] = [
  { name: "8 Skillpoints", types: ["skillpoints", "500+ gems"] },
  { name: "Pay Moneybags 7 times", types: ["Moneybags", "500+ gems"] },
  { name: "11 Autumn Plains orbs", types: ["Autumn Plains", "500+ gems"] }
];
bingoList[25] = [
  { name: "175 gems in both Breeze Harbor & Metropolis", types: ["500+ gems"] },
  { name: "Collect 2000 gems", types: ["500+ gems"] },
  { name: "Destroy 11 strong chests", types: ["500+ gems"] }
];
