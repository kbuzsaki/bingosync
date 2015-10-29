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

//Version 1.4 of Pikmin Bingo

//Changes from 1.3
//Swapped Pilot's Seat and Zirconium Rotor because Zirconium Rotor is harder but was placed lower
//Puffy Blowhogs decreased from 3 to 2 because 3 seems a bit much for level 16
//Added defeat 6 Shearwigs
//Added build 3 bridges in Distant Spring
//Added collect an Armored Cannon Beetle corpse
//Added make Olimar lose all his health
//Moved a few goals around by 1 or 2 values to guarantee certain types of tasks
//Changed Puffstool with bomb rocks to hit Puffstool with a bomb rock
//Moved Beady Long Legs without yellows from 21 to 13 because it's the standard strategy these days
//Moved Mamuta and Goolix from 13 to 21 because resetting days adds a ton of time
//Moved 3 Burrowing Snagrets from 17 to 23 because it's more fitting there; might move it again because it's in FoH
//Changed all 5 stone walls in FN to 3 walls and moved it from 23 to 17 because it takes 2 days otherwise
//Water Dumples decreased from 8 to 7 because there are only 7 in front
//Wollywogs decreased from 6 to 4 because there are only 4 in FN and it's a level 2 task, also changed to regular Wollywogs
//Added defeat 3 Yellow Wollywogs
//Added lifeguarding task because it's a cool mechanic few people ever use

//Changes from 1.2
//Fixed a glitch that could cause two of a goal to appear in the same row on the same card
//Added getting a 20-pellet of each color
//Added maximum of 100 total pikmin alive task
//Decreased the counts required for certain "Have X Pikmin" tasks because they took overwhelmingly long
//Moved stuff for general balance

//Changes from 1.1
//Moved Puffstool with bomb rocks from 14 to 23 because it's ridiculous

//Changes from 1.0
//Added Pellet Posies task
//Added picking a flowered Pikmin
//Added Bulbear with bomb rocks
//Added Puffstool with bomb rocks
//Added grubdogs task
//Added Swooping Snitchbug task
//Moved stuff for general balance

var bingoList = [];
bingoList[1] = [
  { name: "Eternal Fuel Dynamo", types: ["dynamo"], child: "no" },
  { name: "Whimsical Radar", types: ["radar"], child: "no" },
];
bingoList[2] = [
  { name: "Defeat 5 Fiery Blowhogs", types: ["fiery"], child: "no" },
  { name: "Defeat 4 regular Wollywogs", types: ["wolly"], child: "no" },
  { name: "Defeat all 24 Pellet Posies in the Impact Site (after Day 1)", types: ["is"], child: "no" },
];
bingoList[3] = [
  { name: "Defeat 6 Spotty Bulborbs", types: ["grubdog"], child: "no" },
  { name: "Defeat a Spotty Bulborb using bomb rocks", types: ["grubdog", "bomb"], child: "no" },
  { name: "Defeat the Wogpoles in Forest of Hope", types: ["wogpole"], child: "no" },
  { name: "Defeat 6 Shearwigs", types: ["shear"], child: "no" },
];
bingoList[4] = [
  { name: "Extraordinary Bolt", types: ["extraordinary"], child: "no" },
  { name: "Hit 3 Honeywisps", types: ["nectar"], child: "no" },
  { name: "Hit an Iridescent Flint Beetle", types: ["beetle"], child: "no" },
  { name: "Have a Blue Pikmin 'lifeguard' a drowning Pikmin", types: ["lifeguard"], child: "no" },
  { name: "Pluck a flowered Pikmin", types: ["is"], child: "no" },
];
bingoList[5] = [
  { name: "Shock Absorber", types: ["absorber"], child: "no" },
  { name: "Shock Absorber without defeating the Spotty Bulborb", types: [], child: "no" },
  { name: "Sagittarius", types: ["sagi"], child: "no" },
  { name: "Sagittarius without Blue Pikmin", types: ["sagi"], child: "no" },
];
bingoList[6] = [
  { name: "Leave 30 Pikmin behind in one night", types: ["night"], child: "no" },
  { name: "Automatic Gear", types: ["gear"], child: "no"},
  { name: "Space Float", types: ["un"], child: "no" },
  { name: "Nova Blaster", types: ["un"], child: "no" },
  { name: "Build 4 Geysers", types: ["geysers"], child: "no"},
];
bingoList[7] = [
  { name: "Omega Stabilizer", types: ["puffstool"], child: "no" },
  { name: "Guard Satellite", types: ["bll"], child: "no" },
];
bingoList[8] = [
  { name: "Positron Generator", types: ["is"], child: "no" },
  { name: "Defeat a Pearly Clam-Clamp in one cycle", types: ["is"], child: "no" },
];
bingoList[9] = [
  { name: "Gravity Jumper", types: ["jumper"], child: "no" },
  { name: "Kill a mushroom Pikmin", types: ["puffstool"], child: "no" },
  { name: "Defeat 7 Water Dumples", types: ["grubdog"], child: "no" },
  { name: "Radiation Canopy", types: ["acb"] , child: "no"},
  { name: "Collect an Armored Cannon Beetle corpse", types: ["acb"] , child: "no"},
  { name: "Hit Puffstool with a bomb rock", types: ["puffstool"] , child: "no"},
];
bingoList[10] = [
  { name: "Libra", types: ["libra"], child: "no" },
  { name: "Analog Computer", types: ["analog"], child: "no" },
];
bingoList[11] = [
  { name: "Gluon Drive", types: ["gluon"], child: "no" },
  { name: "#1 Ionium Jet", types: ["ionium1"], child: "no" },
];
bingoList[12] = [
  { name: "Build 3 climbable sticks in Forest Navel in one day", types: ["sticks"], child: "no" },
  { name: "Repair-type Bolt", types: ["repair"], child: "no" },
  { name: "Collect a 5-pellet of each color", types: ["pellet"], child: "no" },
  { name: "Collect a 20-pellet of each color", types: ["pellet"], child: "no" },
];
bingoList[13] = [
  { name: "Break 3 stone gates in Forest Navel", types: ["obstacle"], child: "no" },
  { name: "Build all 5 bridges in Forest Navel", types: ["obstacle"], child: "no" },
  { name: "Break all gates in Forest of Hope", types: ["obstacle"], child: "no" },
  { name: "Build 3 bridges in Distant Spring", types: ["obstacle"], child: "no" },
];
bingoList[14] = [
  { name: "Defeat any Wollywog without Pikmin", types: ["hands", "wolly"], child: "no" },
  { name: "Defeat a Fiery Blowhog without Pikmin", types: ["hands", "fiery"], child: "no" },
  { name: "Defeat a Spotty Bulbear using bomb rocks", types: ["bear", "grubdog", "bomb"], child: "no" },
  { name: "Defeat Beady Long Legs without Yellow Pikmin", types: ["bll"], child: "no" },
];
bingoList[15] = [
  { name: "Have 200 Red Pikmin", types: ["count"], child: "no" },
  { name: "Have 150 Blue Pikmin", types: ["count"], child: "no" },
  { name: "Have 150 Yellow Pikmin", types: ["count"], child: "no" },
  { name: "Have 75 of each type of Pikmin", types: ["count"], child: "no"},
];
bingoList[16] = [
  { name: "Defeat 3 Yellow Wollywogs", types: ["wolly"], child: "no"},
  { name: "Defeat 2 Puffy Blowhogs", types: ["puffy"], child: "no"},
  { name: "Interstellar Radio", types: ["puffy"], child: "no" },
];
bingoList[17] = [
  { name: "Throw 20 Pikmin in a Candypop Bud", types: ["candypop"], child: "no" },
  { name: "Never exceed 100 total Pikmin alive", types: ["count"], child: "no" },
  { name: "Have Olimar lose all of his health", types: ["health"], child: "no" },
];
bingoList[18] = [
  { name: "All parts in Forest of Hope", types: ["all_parts"], child: "no" },
  { name: "Geiger Counter", types: ["snagret"], child: "no"},
  { name: "Anti-Dioxin Filter", types: ["dioxin"], child: "no" },
];
bingoList[19] = [
  { name: "Pilot’s Seat", types: ["pilot"], child: "no" },
  { name: "Defeat 3 different species of grubdog", types: ["grubdog"] , child: "no"},
  { name: "Defeat Mamuta", types: ["is"], child: "no" },
  { name: "Defeat Goolix", types: ["is"], child: "no" },
];
bingoList[20] = [
  { name: "3 'Unnecessary' Parts", types: ["un"], child: "no" },
  { name: "Massage Machine", types: ["un"], child: "no" },
  { name: "UV Lamp", types: ["un"], child: "no" },
];
bingoList[21] = [
  { name: "Never use nectar", types: ["nectar"], child: "no" },
  { name: "Defeat 4 Spotty Bulbears", types: ["bear", "grubdog"], child: "no"},
  { name: "Have a Swooping Snitchbug plant a Pikmin of each color", types: ["snitchbug"], child: "no"},
];
bingoList[22] = [
  { name: "Zirconium Rotor", types: ["zirconium"], child: "no" },
  { name: "#2 Ionium Jet", types: ["ionium2"], child: "no" },
];
bingoList[23] = [
  { name: "Defeat both Armored Cannon Beetles", types: ["acb"], child: "no"},
  { name: "Defeat 3 Burrowing Snagrets", types: ["snagret"], child: "no" },
];
bingoList[24] = [
  { name: "Get 15 parts", types: ["all_parts"], child: "no" },
  { name: "All parts in Forest Navel", types: ["all_parts"], child: "no" },
];
bingoList[25] = [
  { name: "Defeat Smoky Progg", types: ["smoky"], child: "no" },
  { name: "Chronos Reactor", types: ["chronos"], child: "no" },
  { name: "Bowsprit", types: ["acb"] , child: "no"},
];
