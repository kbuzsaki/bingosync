//Created by Cotote & TK & Kolapro
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
  { "name": "100% Terrace Village", "types": ["max"] },
  { "name": "2 dragons & 50 gems in Dark Hollow", "types": ["max"] },
  { "name": "6 dragons in Dark Hollow & Misty Bog", "types": ["dragon3"] },
  { "name": "ELV all Artisans levels", "types": ["elv"] },
  { "name": "6 eggs & 1500 gems", "types": ["egg"] },
  { "name": "Get 200 gems in 2 levels sparxless", "types": ["misc2"] },
  { "name": "Bump into the force fields in Stone Hill, Cliff Town & Jacques", "types": ["misc2"] },
  { "name": "250 combined gems in Toasty & Peace Keepers Home", "types": ["gem"] }  
];
bingoList[2] = [
{ "name": "100% Misty Bog", "types": ["max"] },
  { "name": "2 dragons & 300 gems in Cliff Town", "types": ["max"] },
  { "name": "3 Dragons in Dr Shemp, Jacques & Gnorc Gnexus", "types": ["dragon1"] },
  { "name": "ELV all Peace Keepers levels", "types": ["elv"] },
   { "name": "Get electrocuted in 4 levels", "types": ["misc1"] },
  { "name": "Use all supercharge ramps in Tree Tops & get ultra-superflame in Haunted Towers", "types": ["misc2"] },
  { "name": "All life chests from Peace Keepers levels", "types": ["misc1"] },
  { "name": "600 combined gems in Ice Cavern & High Caves", "types": ["gem"] }
	
];
bingoList[3] = [
 { "name": "100% Dark Hollow", "types": ["max"] },
  { "name": "300 gems in Terrace Village", "types": ["max"] },
  { "name": "250 gems in both Dark Passage & Gnorc Cove", "types": ["gem"] },
  { "name": "ELV all Magic Crafters levels", "types": ["elv"] },
  { "name": "3 dragons from each of 3 Artisans levels", "types": ["world"] },
  { "name": "Stand on the lighthouse in Twilight Harbor & the shack in Misty Bog", "types": ["misc1"] },
  { "name": "Do 5 laps of the purple gem area in Cliff Town without dying in between", "types":
["misc2"] },
  { "name": "5 dragons in Wizard Peak & Cliff Town", "types":
["dragon1"] }
];
bingoList[4] = [
 { "name": "100% Gnorc Cove", "types": ["max"] },
  { "name": "All dragons in Misty Bog", "types": ["max"] },
  { "name": "700 Combined Gems in Alpine Ridge & Haunted Towers", "types": ["gem"] },
  { "name": "ELV all Beast Makers levels", "types": ["elv"] },
  { "name": "4 dragons from each of 4 different worlds", "types": ["world"] },
  { "name": "Use a supercharge ramp in 4 levels'", "types": ["misc3"] },
 { "name": "2000 gems", "types": [] },
  { "name": "5 dragons in Dark Hollow & Wizard Peak", "types":
["dragon3"] }
];
bingoList[5] = [
 { "name": "100% Toasty", "types": ["max"] },
  { "name": "Complete Sunny Flight & defeat Blowhard", "types": [""] },
  { "name": "Complete Night Flight & defeat Metalhead", "types": [""] },
  { "name": "Complete Crystal Flight & defeat Dr Shemp", "types": [""] },
  { "name": "Complete Icy Flight & ELV Ice Cavern", "types": [""] },
  { "name": "Complete Wild Flight & defeat Jacques", "types": [""] },
  { "name": "Defeat Toasty & first hit on Gnasty Gnorc", "types": [] },
  { "name": "5 combined bosses & flights", "types": [""] }
];
bingoList[6] = [
{ "name": "ELV 1 level from 5 worlds", "types": ["hw"] },
  { "name": "100% Magic Crafters Home", "types": ["max"] },
  { "name": "100% Artisans Home", "types": ["max"] },
  { "name": "100% Peace Keepers Home", "types": ["max"] },
  { "name": "Talk to each balloonist", "types": ["hw"] },
  { "name": "600 Homeworld Gems", "types": ["hw"] },
  { "name": "1 dragon & 50 gems from each of 5 homeworlds", "types": ["hw"] },
  { "name": "Kill 5 gnorcs with the canon & evolve/devolve 5 different enemies'", "types": ["hw"] }
];
bingoList[7] = [
{ "name": "100% Cliff Town", "types": ["max"] },
  { "name": "Break a life chest in 5 non-homeworld levels", "types": ["misc1"] },
  { "name": "Break 13 fan chests", "types": ["misc2"] },
  { "name": "Use a whirlwind in 6 levels", "types": ["misc1"] },
  { "name": "Break 9 fireworks chests", "types": ["misc2"] },
  { "name": "Rescue 7 dragons who say 'thank(s) (you) for releasing me", "types": ["misc3"] },
  { "name": "Break a fireworks chest in 6 levels", "types": ["misc3"] },
  { "name": "Ignite 8 combined rockets & fireworks chests", "types": ["misc3"] }
];
bingoList[8] = [
{ "name": "100% Tree Tops", "types": ["max"] },
  { "name": "300 gems in Gnorc Cove", "types": ["max"] },
  { "name": "ELV all Dream Weavers levels", "types": ["elv"] },
  { "name": "1 egg from Peace Keepers Home, Magic Crafters Home & High Caves", "types": ["egg"] },
  { "name": "250 gems in each of 3 Peace Keepers levels", "types": ["world"] },
  { "name": "Rescue Lucas and then complete Sunny Flight", "types": ["misc2"] },
  { "name": "Key chests in Ice Cavern, Beast Makers Home & Gnorc Cove", "types": ["misc3"]},
  { "name": "600 combined gems in Terrace Village & Dark Passage", "types": ["gem"] }
];
bingoList[9] = [
 { "name": "100% Wizard Peak", "types": ["max"] },
  { "name": "All dragons in Haunted Towers", "types": ["max"] },
  { "name": "600 Combined gems in Dr Shemp & Gnasty Gnorc", "types": ["gem"] },
  { "name": "9 eggs", "types": ["egg"] },
  { "name": "3 dragons from each of 3 Magic Crafters levels", "types": ["world"] },
  { "name": "25 dragons", "types": [] },
  { "name": "Key chests in Peace Keepers Home, Tree Tops & Jacques", "types": ["misc3"] },
  { "name": "5 Dragons in Tree Tops & Lofty Castle", "types": ["dragon3"] }
];
bingoList[10] = [
 { "name": "100% Lofty Castle", "types": ["max"] },
  { "name": "300 gems and 2 dragons in Wizard Peak", "types": ["max"] },
  { "name": "8 dragons in Ice Cavern & Dark Passage", "types": ["dragon1"] },
  { "name": "Eggs from Town Square, Peace Keepers Home & Alpine Ridge", "types": ["egg"] },
  { "name": "3 dragons from each of 3 Peace Keepers levels", "types": ["gem"] },
  { "name": "Complete 3 flights", "types": [] },
  { "name": "All life chests in Gnorc Cove & Twilight Harbor", "types": ["misc1"] },
  { "name": "200 gems in 4 ‘300 gems’ levels", "types": ["world"] }
];
bingoList[11] = [
  { "name": "100% Haunted Towers", "types": ["max"] },
  { "name": "300 gems & 2 dragons in High Caves", "types": ["max"] },
  { "name": "4 dragons in Dr Shemp, Beast Makers Home & Twilight Harbor", "types": ["dragon2"] },
  { "name": "350 Combined Gems in Town Square & Lofty Castle", "types": ["gem"] }, 
  { "name": "Break all red & purple spring chests", "types": ["misc3"] },
  { "name": "3 dragons from each of 3 Dream Weavers levels", "types": ["world"] },
  { "name": "Rescue all caged faeries in Lofty Castle", "types": ["misc2"] },
  { "name": "250 gems in both Misty Bog & Haunted Towers", "types": ["gem"] }
];
bingoList[12] = [
  { "name": "100% Dark Passage", "types": ["max"] },
  { "name": "400 gems in Gnasty Gnorc", "types": ["max"] },
  { "name": "350 Combined Gems in Stone Hill & Magic Crafters Home", "types": ["gem"] },
  { "name": "7 dragons in Town Square & Alpine Ridge", "types": ["dragon1"] },
  { "name": "15 lives", "types": [] },
  { "name": "Jump over Dr Shemp’s spinning rod 25 times without getting hit in between", "types": ["misc2"] },
  { "name": "ELV Twilight Harbor without getting hit", "types": ["elv"] },
  { "name": "300 gems in 3 ‘500 gems’ levels", "types": ["world"] }
];
bingoList[13] = [
 { "name": "100% Twilight Harbor", "types": ["max"] },
  { "name": "300 gems and 2 dragons in Lofty Castle", "types": ["max"] },
  { "name": "ELV both 'Dark' levels", "types": ["elv"] },
  { "name": "700 Combined Gems in Wizard Peak & Misty Bog", "types": ["gem"] },
  { "name": "10 Peace Keepers Dragons", "types": ["world"] },
  { "name": "Complete 5 laps chasing Gnasty Gnorc", "types": ["misc2"] },
  { "name": "Collect an egg in Stone Hill, Cliff Town & Wizard Peak", "types": ["egg"] },
  { "name": "4 dragons in Cliff Town, Blowhard & Gnorc Gnexus", "types": ["dragon3"] }
];
bingoList[14] = [
{ "name": "100% High Caves", "types": ["max"] },
  { "name": "400 gems in Jacques", "types": ["max"] },
  { "name": "250 Gems in both Dry Canyon & Tree Tops", "types": ["gem"] },
  { "name": "Ignite 4 rockets", "types": ["misc2"] },
  { "name": "Defeat 3 bosses", "types": [] },
  { "name": "All dragons in 3 boss levels", "types": ["misc3"] },
  { "name": "50 gems in 4 Artisans levels", "types": ["world"] },
  { "name": "3 dragons in Toasty, Beast Makers Home & Metalhead", "types": ["dragon3"] }
];
bingoList[15] = [
 { "name": "100% Stone Hill", "types": ["max"] },
  { "name": "300 gems in Twilight Harbor", "types": ["max"] },
  { "name": "6 dragons in Artisans Home & Tree Tops", "types": ["dragon3"] },
  { "name": "400 Combined Gems in Dark Hollow & Twilight Harbor", "types": ["gem"] },
  { "name": "Kiss all superflame faeries", "types": ["misc3"] },
  { "name": "300 gems in each of 2 Gnasty’s World levels", "types": ["world"] },
  { "name": "Light both torches in Dark Hollow & Collect all 6 lamp gems in Ice Cavern", "types": ["misc2"] },
  { "name": "200 gems in 3 ‘400 gems’ levels", "types": ["world"] }
];
bingoList[16] = [
 { "name": "100% Ice Cavern", "types": ["max"] },
  { "name": "All Dragons in Dark Passage", "types": ["max"] },
  { "name": "3 dragons in Toasty, Blowhard & Terrace Village", "types": ["dragon2"] },
  { "name": "500 Combined Gems in Ice Cavern & Dream Weavers Home", "types": ["gem"] },
  { "name": "10 Magic Crafters dragons", "types": ["world"] },
  { "name": "Get a key in 3 levels and leave through the vortex with it still in the inventory", "types": ["misc3"] },
  { "name": "Defeat all 9 druids in Alpine Ridge & rescue 15 dragons", "types": [] },
  { "name": "100 gems in 3 ‘200 gems’ levels", "types": ["world"] }
];
bingoList[17] = [
 { "name": "100% Town Square", "types": ["max"] },
  { "name": "400 gems in Metalhead", "types": ["max"] },
{ "name": "5 dragons in High Caves & Dream Weavers home", "types": ["dragon2"] },
  { "name": "ELV both ‘Town’ levels", "types": ["elv"] },
  { "name": "2 dragons from each of 3 Beast Makers levels", "types": ["world"] },
  { "name": "Activate all clock fools", "types": ["misc2"] },
  { "name": "All life chests in Artisans levels", "types": ["misc1"] },
{ "name": "300 gems in both Alpine Ridge & Jacques", "types":
["gem"] }
];
bingoList[18] = [
  { "name": "100% Blowhard", "types": ["max"] },
  { "name": "300 gems and 2 dragons in Tree Tops", "types": ["max"] },
  { "name": "600 Artisans gems", "types": ["world"] },
  { "name": "800 Peace Keepers gems", "types": ["world"] },
  { "name": "1200 Magic Crafters gems", "types": ["world"] },
  { "name": "1000 Beast Makers gems", "types": ["world"] },
  { "name": "1000 Dream Weavers gems", "types": ["world"] },
  { "name": "600 Gnasty's World’s gems", "types": ["world"] }
];
bingoList[19] = [
  { "name": "100% Dr Shemp", "types": ["max"] },
  { "name": "Enter 7 vortexes", "types": ["elv"] },
  { "name": "Break 10 blue spring chests", "types": ["misc2"] },
  { "name": "Break 7 yellow spring chests", "types": ["misc1"] },
  { "name": "Break 10 green spring chests", "types": ["misc2"] },
  { "name": "Break a fan chest in 5 levels", "types": ["misc1"] },
  { "name": "Break 10 strong chests", "types": ["misc2"] },
  { "name": "11 Purple gems", "types": ["misc1"] }
];
bingoList[20] = [
 { "name": "100% Alpine Ridge", "types": ["max"] },
  { "name": "100 gems & 3 dragons in Stone Hill", "types": ["max"] },
  { "name": "4 Dragons in Magic Crafters Home, Metalhead & Gnorc Cove", "types": ["dragon2"] },
  { "name": "Collect all eggs from Artisans & Peace Keepers levels", "types": ["egg"] },
  { "name": "5 Gnasty’s World dragons", "types": ["world"] },
  { "name": "Defeat all thieves in both Tree Tops & Gnasty Gnorc", "types": ["misc3"] },
  { "name": "Key chests in Stone Hill, Dry Canyon & Metalhead", "types": ["misc3"] },
  { "name": "450 combined gems in Dry Canyon & Gnorc Gnexus", "types":
["gem"] }
];
bingoList[21] = [
 { "name": "Rescue 10 homeworld dragons", "types": ["hw"] },
  { "name": "All dragons in each of 4 homeworlds", "types": ["hw"] },
  { "name": "Unlock/Break all homeworld key & strong chests", "types": ["hw"] },
  { "name": "100% Dream Weavers Home", "types": ["max"] },
  { "name": "100% Gnorc Gnexus", "types": ["max"] },
  { "name": "100% Beast Makers Home", "types": ["max"] },
  { "name": "Unlock/Break 5 key chests", "types": ["misc3"] },
  { "name": "1 life chest from 4 homeworlds", "types": ["misc1"] }
];
bingoList[22] = [
 { "name": "100% Dry Canyon", "types": ["max"] },
  { "name": "All dragons in Alpine Ridge", "types": ["max"] },
  { "name": "300 Gems in both High Caves & Jacques", "types": ["gem"] },
  { "name": "250 gems in each of 3 Beast Makers levels", "types": ["world"] },
  { "name": "All key & strong chests from Gnasty's World levels", "types": ["misc3"] },
  { "name": "10 Dream Weavers dragons", "types": ["world"] },
  { "name": "All gems from Toasty & Gnorc Gnexus", "types": ["gem"] },
  { "name": "4 dragons in Peace Keepers Home & Twilight Harbor", "types":
["dragon1"] }
];
bingoList[23] = [
 { "name": "100% Jacques", "types": ["max"] },
  { "name": "3 dragons & 250 gems in Ice Cavern", "types": ["max"] },
  { "name": "250 Gems in Both Cliff Town & Blowhard", "types": ["gem"] },
  { "name": "6 dragons in Stone Hill & Haunted Towers", "types": ["dragon3"] },
  { "name": "Get slapped, electrocuted and eaten", "types": ["misc2"] },
  { "name": "12 Artisans Dragons", "types": ["world"] },
  { "name": "Kill both platform druids in High Caves w/supercharge", "types": ["misc2"] },
  { "name": "Break the strong chests in Dark Passage & Twilight Harbor", "types": ["misc1"] }
];
bingoList[24] = [
{ "name": "100% Metalhead", "types": ["max"] },
  { "name": "All dragons in Dry Canyon", "types": ["max"] },
  { "name": "400 combined gems in Artisans Home & Terrace Village", "types": ["gem"] },
  { "name": "5 Magic Crafters eggs", "types": ["egg"] },
  { "name": "Kill all big mamas & all metal spiders", "types": ["misc2"] },
  { "name": "200 gems in each of 3 Dream Weavers levels", "types": ["world"] },
  { "name": "Key chests in Dark Hollow, Magic Crafters Home & Lofty Castle", "types": ["misc3"] },
  { "name": "5 dragons in Gnorc Cove & Stone Hill", "types": ["dragon1"] }
];
bingoList[25] = [
 { "name": "Rescue Nestor & Defeat Gnasty Gnorc", "types": ["max"] },
  { "name": "All dragons in Town Square", "types": ["max"] },
  { "name": "250 Gems in Both Metalhead & Twilight Harbor", "types": ["gem"] },
  { "name": "6 dragons in Dry Canyon & Lofty Castle", "types": ["dragon2"] },
  { "name": "300 gems in each of 3 Magic Crafters levels", "types": ["world"] },
  { "name": "8 Beast Makers dragons", "types": ["world"] },
  { "name": "ELV 3 levels whilst collecting 0 gems", "types": ["misc2"] },
{ "name": "Collect an extra life through collecting orbs", "types": ["misc3"] }
];
