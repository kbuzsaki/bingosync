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
bingoList[1] = [
    {name: "City Escape M2 A-Rank", types: ["sonic", "arank"]},
    {name: "City Escape M3", types: ["sonic"]},
    {name: "Wild Canyon M2", types: ["knuckles"]},
    {name: "Wild Canyon M3", types: ["knuckles"]},
    {name: "Wild Canyon M4", types: ["knuckles"]},
    {name: "Iron Gate M2", types: ["eggman"]},
    {name: "Dry Lagoon M2", types: ["rouge"]},
    {name: "Dry Lagoon M3", types: ["rouge"]}
];
bingoList[2] = [
    {name: "Iron Gate M2 A-Rank", types: ["eggman", "arank"]},
    {name: "City Escape M3 A-Rank", types: ["sonic", "arank"]},
    {name: "Wild Canyon M2 A-Rank", types: ["knuckles", "arank"]},
    {name: "Wild Canyon M3 A-Rank", types: ["knuckles", "arank"]},
    {name: "Dry Lagoon M2 A-Rank", types: ["rouge", "arank"]},
    {name: "Wild Canyon M4 A-Rank", types: ["knuckles", "arank"]},
    {name: "Dry Lagoon M3 A-Rank", types: ["rouge", "arank"]},
    {name: "City Escape M4", types: ["sonic"]},
    {name: "Wild Canyon M5", types: ["knuckles"]},
    {name: "Dry Lagoon M4", types: ["rouge"]},
    {name: "Prison Lane M2", types: ["tails"]},
    {name: "Sand Ocean M2", types: ["eggman"]},
    {name: "City Escape M5", types: ["sonic"]},
    {name: "Dry Lagoon M5", types: ["rouge"]},
    {name: "Defeat both Big Foot and Hot Shot", types: ["story"]},
    {name: "Rouge's Mystic Melody", types: ["rouge", "mysticmelody"]}
];
bingoList[3] = [
    {name: "Prison Lane M2 A-Rank", types: ["tails", "arank"]},
    {name: "Dry Lagoon M4 A-Rank", types: ["rouge", "arank"]},
    {name: "City Escape M4 A-Rank", types: ["sonic", "arank"]},
    {name: "Wild Canyon M5 A-Rank", types: ["knuckles", "arank"]},
    {name: "Sand Ocean M2 A-Rank", types: ["eggman", "arank"]},
    {name: "City Escape M5 A-Rank", types: ["sonic", "arank"]},
    {name: "Dry Lagoon M5 A-Rank", types: ["rouge", "arank"]},
    {name: "Metal Harbor M2", types: ["sonic"]},
    {name: "Metal Harbor M3", types: ["sonic"]},
    {name: "Radical Highway M2", types: ["shadow"]},
    {name: "Metal Harbor M4", types: ["sonic"]},
    {name: "Radical Highway M3", types: ["shadow"]},
    {name: "500 Total Rings", types: ["rings"]},
    {name: "Knuckles' Mystic Melody", types: ["knuckles", "mysticmelody"]},
    {name: "Dr Eggman's Mystic Melody", types: ["eggman", "mysticmelody"]}
];
bingoList[4] = [
    {name: "Wild Canyon All Missions A-Rank", types: ["knuckles", "allmissions"]},
    {name: "City Escape All Missions A-Rank", types: ["sonic", "allmissions"]},
    {name: "Dry Lagoon All Missions A-Rank", types: ["rouge", "allmissions"]},
    {name: "Metal Harbor M2 A-Rank", types: ["sonic", "arank"]},
    {name: "Metal Harbor M3 A-Rank", types: ["sonic", "arank"]},
    {name: "Radical Highway M2 A-Rank", types: ["shadow", "arank"]},
    {name: "Metal Harbor M4 A-Rank", types: ["sonic", "arank"]},
    {name: "Radical Highway M3 A-Rank", types: ["shadow", "arank"]},
    {name: "Egg Quarters M2", types: ["rouge"]},
    {name: "Green Forest M2", types: ["sonic"]},
    {name: "Metal Harbor M5", types: ["sonic"]},
    {name: "Egg Quarters M3", types: ["rouge"]},
    {name: "Green Forest M3", types: ["sonic"]},
    {name: "Radical Highway M4", types: ["shadow"]},
    {name: "Pumpkin Hill M2", types: ["knuckles"]},
    {name: "Pumpkin Hill M3", types: ["knuckles"]},
    {name: "Egg Quarters M4", types: ["rouge"]}
];
bingoList[5] = [
    {name: "Egg Quarters M2 A-Rank", types: ["rouge", "arank"]},
    {name: "Green Forest M2 A-Rank", types: ["sonic", "arank"]},
    {name: "Metal Harbor M5 A-Rank", types: ["sonic", "arank"]},
    {name: "Egg Quarters M3 A-Rank", types: ["rouge", "arank"]},
    {name: "Green Forest M3 A-Rank", types: ["sonic", "arank"]},
    {name: "Radical Highway M4 A-Rank", types: ["shadow", "arank"]},
    {name: "Pumpkin Hill M2 A-Rank", types: ["knuckles", "arank"]},
    {name: "Pumpkin Hill M3 A-Rank", types: ["knuckles", "arank"]},
    {name: "Egg Quarters M4 A-Rank", types: ["rouge", "arank"]},
    {name: "Lost Colony M2", types: ["eggman"]},
    {name: "Sand Ocean M3", types: ["eggman"]},
    {name: "Radical Highway M5", types: ["shadow"]},
    {name: "Pumpkin Hill M4", types: ["knuckles"]},
    {name: "Green Forest M4", types: ["sonic"]},
    {name: "Iron Gate M3", types: ["eggman"]},
    {name: "Egg Quarters M5", types: ["rouge"]},
    {name: "Pumpkin Hill M5", types: ["knuckles"]},
    {name: "Weapons Bed M2", types: ["eggman"]},
    {name: "Sand Ocean M4", types: ["eggman"]},
    {name: "10 Emblems", types: ["emblems"]}
];
bingoList[6] = [
    {name: "Metal Harbor All Missions A-Rank", types: ["sonic", "allmissions"]},
    {name: "Lost Colony M2 A-Rank", types: ["eggman", "arank"]},
    {name: "Sand Ocean M3 A-Rank", types: ["eggman", "arank"]},
    {name: "Radical Highway M5 A-Rank", types: ["shadow", "arank"]},
    {name: "Mission Street M2", types: ["tails"]},
    {name: "Iron Gate M4", types: ["eggman"]},
    {name: "Lost Colony M3", types: ["eggman"]},
    {name: "Aquatic Mine M2", types: ["knuckles"]},
    {name: "Weapons Bed M3", types: ["eggman"]},
    {name: "Green Forest M5", types: ["sonic"]},
    {name: "Aquatic Mine M3", types: ["knuckles"]},
    {name: "Security Hall M2", types: ["rouge"]},
    {name: "Pumpkin Hill M4 A-Rank", types: ["knuckles", "arank"]},
    {name: "Green Forest M4 A-Rank", types: ["sonic", "arank"]},
    {name: "Iron Gate M3 A-Rank", types: ["eggman", "arank"]},
    {name: "Egg Quarters M5 A-Rank", types: ["rouge", "arank"]},
    {name: "Pumpkin Hill M5 A-Rank", types: ["knuckles", "arank"]},
    {name: "Weapons Bed M2 A-Rank", types: ["eggman", "arank"]},
    {name: "Sand Ocean M4 A-Rank", types: ["eggman", "arank"]},
    {name: "Iron Gate M5", types: ["eggman"]},
    {name: "Sand Ocean M5", types: ["eggman"]},
    {name: "Aquatic Mine M4", types: ["knuckles"]},
    {name: "Security Hall M3", types: ["rouge"]},
    {name: "Weapons Bed M4", types: ["eggman"]},
    {name: "Dr Eggman's Laser Blaster", types: ["eggman"]}
];
bingoList[7] = [
    {name: "Radical Highway All Missions A-Rank", types: ["shadow", "allmissions"]},
    {name: "Egg Quarters All Missions A-Rank", types: ["rouge", "allmissions"]},
    {name: "Pumpkin Hill All Missions A-Rank", types: ["knuckles", "allmissions"]},
    {name: "Mission Street M2 A-Rank", types: ["tails", "arank"]},
    {name: "Iron Gate M4 A-Rank", types: ["eggman", "arank"]},
    {name: "Lost Colony M3 A-Rank", types: ["eggman", "arank"]},
    {name: "Aquatic Mine M2 A-Rank", types: ["knuckles", "arank"]},
    {name: "Weapons Bed M3 A-Rank", types: ["eggman", "arank"]},
    {name: "Green Forest M5 A-Rank", types: ["sonic", "arank"]},
    {name: "Aquatic Mine M3 A-Rank", types: ["knuckles", "arank"]},
    {name: "Security Hall M2 A-Rank", types: ["rouge", "arank"]},
    {name: "Iron Gate M5 A-Rank", types: ["eggman", "arank"]},
    {name: "Sand Ocean M5 A-Rank", types: ["eggman", "arank"]},
    {name: "Aquatic Mine M4 A-Rank", types: ["knuckles", "arank"]},
    {name: "Security Hall M3 A-Rank", types: ["rouge", "arank"]},
    {name: "Weapons Bed M4 A-Rank", types: ["eggman", "arank"]},
    {name: "Route 101 M2", types: ["tails"]},
    {name: "Security Hall M4", types: ["rouge"]},
    {name: "Lost Colony M4", types: ["eggman"]},
    {name: "White Jungle M2", types: ["shadow"]},
    {name: "Weapons Bed M5", types: ["eggman"]},
    {name: "Security Hall M5", types: ["rouge"]},
    {name: "Route 101 M3", types: ["tails"]},
    {name: "Defeat both Tails 1 and Dr Eggman 1", types: ["story"]},
    {name: "Tails' Mystic Melody", types: ["tails", "mysticmelody"]},
    {name: "Beginner Kart Racing Emblem", types: ["kartracing"]}
];
bingoList[8] = [
    {name: "Green Forest All Missions A-Rank", types: ["sonic", "allmissions"]},
    {name: "Iron Gate All Missions A-Rank", types: ["eggman", "allmissions"]},
    {name: "Sand Ocean All Missions A-Rank", types: ["eggman", "allmissions"]},
    {name: "Route 101 M2 A-Rank", types: ["tails", "arank"]},
    {name: "Security Hall M4 A-Rank", types: ["rouge", "arank"]},
    {name: "Lost Colony M4 A-Rank", types: ["eggman", "arank"]},
    {name: "White Jungle M2 A-Rank", types: ["shadow", "arank"]},
    {name: "Weapons Bed M5 A-Rank", types: ["eggman", "arank"]},
    {name: "Security Hall M5 A-Rank", types: ["rouge", "arank"]},
    {name: "Route 101 M3 A-Rank", types: ["tails", "arank"]},
    {name: "Hidden Base M2", types: ["tails"]},
    {name: "White Jungle M3", types: ["shadow"]},
    {name: "Pyramid Cave M2", types: ["sonic"]},
    {name: "Lost Colony M5", types: ["eggman"]},
    {name: "Route 101 M4", types: ["tails"]},
    {name: "Hidden Base M3", types: ["tails"]},
    {name: "Route 280 M2", types: ["rouge"]}
];
bingoList[9] = [
    {name: "Weapons Bed All Missions A-Rank", types: ["eggman", "allmissions"]},
    {name: "Security Hall All Missions A-Rank", types: ["rouge", "allmissions"]},
    {name: "Hidden Base M2 A-Rank", types: ["tails", "arank"]},
    {name: "Pyramid Cave M2 A-Rank", types: ["sonic", "arank"]},
    {name: "White Jungle M3 A-Rank", types: ["shadow", "arank"]},
    {name: "Lost Colony M5 A-Rank", types: ["eggman", "arank"]},
    {name: "Route 101 M4 A-Rank", types: ["tails", "arank"]},
    {name: "Hidden Base M3 A-Rank", types: ["tails", "arank"]},
    {name: "Route 280 M2 A-Rank", types: ["rouge", "arank"]},
    {name: "Death Chamber M2", types: ["knuckles"]},
    {name: "Hidden Base M4", types: ["tails"]},
    {name: "Route 101 M5", types: ["tails"]},
    {name: "Sky Rail M2", types: ["shadow"]},
    {name: "Death Chamber M3", types: ["knuckles"]},
    {name: "Pyramid Cave M3", types: ["sonic"]},
    {name: "Pyramid Cave M4", types: ["sonic"]},
    {name: "Sky Rail M3", types: ["shadow"]},
    {name: "White Jungle M4", types: ["shadow"]},
    {name: "White Jungle M5", types: ["shadow"]},
    {name: "All Kart Racing Emblems", types: ["kartracing"]},
    {name: "Death Chamber M4", types: ["knuckles"]},
    {name: "Route 280 M3", types: ["rouge"]}
];
bingoList[10] = [
    {name: "Lost Colony All Missions A-Rank", types: ["eggman", "allmissions"]},
    {name: "Death Chamber M2 A-Rank", types: ["knuckles", "arank"]},
    {name: "Hidden Base M4 A-Rank", types: ["tails", "arank"]},
    {name: "Route 101 M5 A-Rank", types: ["tails", "arank"]},
    {name: "Sky Rail M2 A-Rank", types: ["shadow", "arank"]},
    {name: "Death Chamber M3 A-Rank", types: ["knuckles", "arank"]},
    {name: "Pyramid Cave M3 A-Rank", types: ["sonic", "arank"]},
    {name: "Pyramid Cave M4 A-Rank", types: ["sonic", "arank"]},
    {name: "Sky Rail M3 A-Rank", types: ["shadow", "arank"]},
    {name: "White Jungle M4 A-Rank", types: ["shadow", "arank"]},
    {name: "White Jungle M5 A-Rank", types: ["shadow", "arank"]},
    {name: "Death Chamber M4 A-Rank", types: ["knuckles", "arank"]},
    {name: "Route 280 M3 A-Rank", types: ["rouge", "arank"]},
    {name: "Defeat both Shadow 1 and Sonic 1", types: ["story"]},
    {name: "Sky Rail M5", types: ["shadow"]},
    {name: "Mad Space M3", types: ["rouge"]},
    {name: "Route 280 M4", types: ["rouge"]},
    {name: "Hidden Base M5", types: ["tails"]},
    {name: "Mad Space M2", types: ["rouge"]},
    {name: "Sky Rail M4", types: ["shadow"]},
    {name: "Pyramid Cave M5", types: ["sonic"]},
    {name: "Death Chamber M5", types: ["knuckles"]}
];
bingoList[11] = [
    {name: "Pyramid Cave M5 A-Rank", types: ["sonic", "arank"]},
    {name: "Eternal Engine M2", types: ["tails"]},
    {name: "Prison Lane M3", types: ["tails"]},
    {name: "Hidden Base M5 A-Rank", types: ["tails", "arank"]},
    {name: "Route 101 All Missions A-Rank", types: ["tails", "allmissions"]},
    {name: "Meteor Herd M2", types: ["knuckles"]},
    {name: "Meteor Herd M3", types: ["knuckles"]},
    {name: "Death Chamber M5 A-Rank", types: ["knuckles", "arank"]},
    {name: "Sky Rail M4 A-Rank", types: ["shadow", "arank"]},
    {name: "Sky Rail M5 A-Rank", types: ["shadow", "arank"]},
    {name: "White Jungle All Missions A-Rank", types: ["shadow", "allmissions"]},
    {name: "Mad Space M2 A-Rank", types: ["rouge", "arank"]},
    {name: "Mad Space M3 A-Rank", types: ["rouge", "arank"]},
    {name: "Route 280 M4 A-Rank", types: ["rouge", "arank"]},
    {name: "Mad Space M4", types: ["rouge"]},
    {name: "Route 280 M5", types: ["rouge"]},
    {name: "Mad Space M5", types: ["rouge"]},
    {name: "Tails' Laser Blaster", types: ["tails"]},
    {name: "Knuckles' Sunglasses", types: ["knuckles", "story"]},
    {name: "Dr Eggman's Protective Armor", types: ["eggman", "story"]},
    {name: "20 Emblems", types: ["emblems"]}
];
bingoList[12] = [
    {name: "Sky Rail All Missions A-Rank", types: ["shadow", "allmissions"]},
    {name: "Hidden Base All Missions A-Rank", types: ["tails", "allmissions"]},
    {name: "Death Chamber All Missions A-Rank", types: ["knuckles", "allmissions"]},
    {name: "Eternal Engine M2 A-Rank", types: ["tails", "arank"]},
    {name: "Mad Space M4 A-Rank", types: ["rouge", "arank"]},
    {name: "Meteor Herd M2 A-Rank", types: ["knuckles", "arank"]},
    {name: "Prison Lane M3 A-Rank", types: ["tails", "arank"]},
    {name: "Mad Space M5 A-Rank", types: ["rouge", "arank"]},
    {name: "Meteor Herd M3 A-Rank", types: ["knuckles", "arank"]},
    {name: "Route 280 M5 A-Rank", types: ["rouge", "arank"]},
    {name: "Mission Street M3", types: ["tails"]},
    {name: "Eternal Engine M3", types: ["tails"]},
    {name: "Aquatic Mine M5", types: ["knuckles"]},
    {name: "Meteor Herd M4", types: ["knuckles"]},
    {name: "Prison Lane M4", types: ["tails"]},
    {name: "Meteor Herd M5", types: ["knuckles"]},
    {name: "Cosmic Wall M2", types: ["eggman"]},
    {name: "Crazy Gadget M2", types: ["sonic"]},
    {name: "Mission Street M4", types: ["tails"]},
    {name: "Cosmic Wall M3", types: ["eggman"]},
    {name: "Eternal Engine M4", types: ["tails"]},
    {name: "Sonic's Magic Gloves", types: ["sonic"]},
    {name: "Sonic's Mystic Melody", types: ["sonic", "mysticmelody"]},
    {name: "Shadow's Mystic Melody", types: ["shadow", "mysticmelody"]}
];
bingoList[13] = [
    {name: "Crazy Gadget M3", types: ["sonic"]},
    {name: "Final Rush M2", types: ["sonic"]},
    {name: "Mission Street M5", types: ["tails"]},
    {name: "Crazy Gadget M4", types: ["sonic"]},
    {name: "Final Chase M2", types: ["shadow"]},
    {name: "Eternal Engine M5", types: ["tails"]},
    {name: "Mad Space All Missions A-Rank", types: ["rouge", "allmissions"]},
    {name: "Route 280 All Missions A-Rank", types: ["rouge", "allmissions"]},
    {name: "Mission Street M3 A-Rank", types: ["tails", "arank"]},
    {name: "Eternal Engine M3 A-Rank", types: ["tails", "arank"]},
    {name: "Aquatic Mine M5 A-Rank", types: ["knuckles", "arank"]},
    {name: "Meteor Herd M4 A-Rank", types: ["knuckles", "arank"]},
    {name: "Prison Lane M4 A-Rank", types: ["tails", "arank"]},
    {name: "Meteor Herd M5 A-Rank", types: ["knuckles", "arank"]},
    {name: "Cosmic Wall M2 A-Rank", types: ["eggman", "arank"]},
    {name: "Crazy Gadget M2 A-Rank", types: ["sonic", "arank"]},
    {name: "Mission Street M4 A-Rank", types: ["tails", "arank"]},
    {name: "Cosmic Wall M3 A-Rank", types: ["eggman", "arank"]},
    {name: "Prison Lane M5", types: ["tails"]},
    {name: "All Hero Story Character's Mystic Melody", types: ["sonic", "tails", "knuckles", "mysticmelody"]},
    {name: "All Dark Story Character's Mystic Melody", types: ["shadow", "eggman", "rouge", "mysticmelody"]},
    {name: "1500 Total Rings", types: ["rings"]}
];
bingoList[14] = [
    {name: "Hero Story Emblem", types: ["story", "endgameemblem"]},
    {name: "Dark Story Emblem", types: ["story", "endgameemblem"]},
    {name: "Final Rush M2 A-Rank", types: ["sonic", "arank"]},
    {name: "Crazy Gadget M3 A-Rank", types: ["sonic", "arank"]},
    {name: "Final Rush M3", types: ["sonic"]},
    {name: "Crazy Gadget M4 A-Rank", types: ["sonic", "arank"]},
    {name: "Final Rush M4", types: ["sonic"]},
    {name: "Crazy Gadget M5", types: ["sonic"]},
    {name: "Eternal Engine M4 A-Rank", types: ["tails", "arank"]},
    {name: "Mission Street M5 A-Rank", types: ["tails", "arank"]},
    {name: "Final Chase M2 A-Rank", types: ["shadow", "arank"]},
    {name: "Prison Lane M5 A-Rank", types: ["tails", "arank"]},
    {name: "Final Chase M3", types: ["shadow"]},
    {name: "Aquatic Mine All Missions A-Rank", types: ["knuckles", "allmissions"]},
    {name: "Meteor Herd All Missions A-Rank", types: ["knuckles", "allmissions"]},
    {name: "Cosmic Wall M4", types: ["eggman"]}
];
bingoList[15] = [
    {name: "Final Rush M3 A-Rank", types: ["sonic", "arank"]},
    {name: "Final Rush M4 A-Rank", types: ["sonic", "arank"]},
    {name: "Crazy Gadget M5 A-Rank", types: ["sonic", "arank"]},
    {name: "Final Rush M5", types: ["sonic"]},
    {name: "Eternal Engine M5 A-Rank", types: ["tails", "arank"]},
    {name: "Prison Lane All Missions A-Rank", types: ["tails", "allmissions"]},
    {name: "Mission Street All Missions A-Rank", types: ["tails", "allmissions"]},
    {name: "Final Chase M3 A-Rank", types: ["shadow", "arank"]},
    {name: "Final Chase M4", types: ["shadow"]},
    {name: "Cosmic Wall M4 A-Rank", types: ["eggman", "arank"]},
    {name: "Defeat both King Boom Boo and Flying Dog", types: ["story"]},
    {name: "Route 101 M1 & Route 280 M1", types: ["story"]}
];
bingoList[16] = [
    {name: "Crazy Gadget All Missions A-Rank", types: ["sonic", "allmissions"]},
    {name: "Final Rush M5 A-Rank", types: ["sonic", "arank"]},
    {name: "Final Chase M4 A-Rank", types: ["shadow", "arank"]},
    {name: "Eternal Engine All Missions A-Rank", types: ["tails", "allmissions"]}
];
bingoList[17] = [
    {name: "Final Rush All Missions A-Rank", types: ["sonic", "allmissions"]},
    {name: "Final Chase M5", types: ["shadow"]},
    {name: "Cosmic Wall M5", types: ["eggman"]},
    {name: "Knuckles' Alternative Kart", types: ["knuckles", "kart"]}
];
bingoList[18] = [
    {name: "Cosmic Wall M5 A-Rank", types: ["eggman", "arank"]},
    {name: "Final Chase M5 A-Rank", types: ["shadow", "arank"]}
];
bingoList[19] = [
    {name: "Hero Story Boss Rush Emblem", types: ["bossrush", "endgameemblem"]},
    {name: "Dark Story Boss Rush Emblem", types: ["bossrush", "endgameemblem"]},
    {name: "Rouge's Alternative Kart", types: ["rouge", "kart"]}
];
bingoList[20] = [
    {name: "Cosmic Wall All Missions A-Rank", types: ["eggman", "allmissions"]},
    {name: "Final Chase All Missions A-Rank", types: ["shadow", "allmissions"]}
];
bingoList[21] = [
    {name: "Defeat Egg Golem as both Sonic and Dr Eggman", types: ["story"]},
    {name: "30 Emblems", types: ["emblems"]}
];
bingoList[22] = [
    {name: "Defeat both Knuckles and Rouge", types: ["story"]},
    {name: "2500 Total Rings", types: ["rings"]}
];
bingoList[23] = [
    {name: "Defeat both Tails 2 and Dr Eggman 2", types: ["story"]},
    {name: "Shadow's Alternative Kart", types: ["shadow", "kart"]}
];
bingoList[24] = [
    {name: "Tails' Alternative Kart", types: ["tails", "kart"]},
    {name: "All Character's Mystic Melody", types: ["mysticmelody"]}
];
bingoList[25] = [
    {name: "Sonic's Alternative Kart", types: ["sonic", "kart"]},
    {name: "Dr Eggman's Alternative Kart", types: ["eggman", "kart"]},
    {name: "Both Hero Story and Dark Story Emblems", types: ["story", "endgameemblem"]}
];
