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
    {name: "City Escape M2", types: ["sonic", "cityescape"]},
    {name: "Complete City Escape M1 with 100+ Rings", types: ["sonic", "cityescape", "m1", "rings"]},
    {name: "2 Chao Boxes in City Escape and finish", types: ["sonic", "cityescape", "m1", "chao"]},
    {name: "5 hidden Chao animals in City Escape and finish", types: ["sonic", "cityescape", "m1", "chao"]},
    {name: "Rename a Chao after a person you're racing", types: ["chao"]},
    {name: "Iron Gate M2", types: ["eggman", "irongate"]},
    {name: "Complete Iron Gate M1 with 100+ Rings", types: ["eggman", "irongate", "m1", "rings"]},
    {name: "2 Chao Boxes in Iron Gate and finish", types: ["eggman", "irongate", "m1", "chao"]},
    {name: "5 hidden Chao animals in Iron Gate and finish", types: ["eggman", "irongate", "m1", "chao"]},
    {name: "City Escape M3", types: ["sonic", "cityescape"]},
    {name: "Wild Canyon M2", types: ["knuckles", "wildcanyon"]},
    {name: "Complete Wild Canyon M1 with 100+ Rings", types: ["knuckles", "wildcanyon", "m1", "rings"]},
    {name: "2 Chao Boxes in Wild Canyon and finish", types: ["knuckles", "wildcanyon", "m1", "chao"]},
    {name: "5 hidden Chao animals in Wild Canyon and finish", types: ["knuckles", "wildcanyon", "m1", "chao"]},
    {name: "Wild Canyon M3", types: ["knuckles", "wildcanyon"]},
    {name: "Dry Lagoon M2", types: ["rouge", "drylagoon"]},
    {name: "Complete Dry Lagoon M1 with 100+ Rings", types: ["rouge", "drylagoon", "m1", "rings"]},
    {name: "2 Chao Boxes in Dry Lagoon and finish", types: ["rouge", "drylagoon", "m1", "chao"]},
    {name: "5 hidden Chao animals in Dry Lagoon and finish", types: ["rouge", "drylagoon", "m1", "chao"]},
    {name: "Wild Canyon M4", types: ["knuckles", "wildcanyon"]},
    {name: "Dry Lagoon M3", types: ["rouge", "drylagoon"]}
];
bingoList[2] = [
    {name: "City Escape M2 A-Rank", types: ["sonic", "cityescape", "arank"]},
    {name: "Iron Gate M2 A-Rank", types: ["eggman", "irongate", "arank"]},
    {name: "City Escape M3 A-Rank", types: ["sonic", "cityescape", "arank"]},
    {name: "Wild Canyon M2 A-Rank", types: ["knuckles", "wildcanyon", "arank"]},
    {name: "Wild Canyon M3 A-Rank", types: ["knuckles", "wildcanyon", "arank"]},
    {name: "Dry Lagoon M2 A-Rank", types: ["rouge", "drylagoon", "arank"]},
    {name: "Wild Canyon M4 A-Rank", types: ["knuckles", "wildcanyon", "arank"]},
    {name: "Dry Lagoon M3 A-Rank", types: ["rouge", "drylagoon", "arank"]},
    {name: "City Escape M4", types: ["sonic", "cityescape"]},
    {name: "Wild Canyon M5", types: ["knuckles", "wildcanyon"]},
    {name: "Defeat both Big Foot and Hot Shot", types: ["multistory"]},
    {name: "Unlock Chao Garden for all Hero Story characters", types: ["sonic", "tails", "knuckles", "chaogarden"]}
];
bingoList[3] = [
    {name: "City Escape M4 A-Rank", types: ["sonic", "cityescape", "arank"]},
    {name: "Wild Canyon M5 A-Rank", types: ["knuckles", "wildcanyon", "arank"]},
    {name: "Dry Lagoon M4", types: ["rouge", "drylagoon"]},
    {name: "Prison Lane M2", types: ["tails", "prisonlane"]},
    {name: "Complete Prison Lane M1 with 100+ Rings", types: ["tails", "prisonlane", "m1", "rings"]},
    {name: "2 Chao Boxes in Prison Lane and finish", types: ["tails", "prisonlane", "m1", "chao"]},
    {name: "5 hidden Chao animals in Prison Lane and finish", types: ["tails", "prisonlane", "m1", "chao"]},
    {name: "3 Hero Story Gold Beetles", types: ["goldbeetle", "m1"]}
];
bingoList[4] = [
    {name: "Dry Lagoon M4 A-Rank", types: ["rouge", "drylagoon", "arank"]},
    {name: "Prison Lane M2 A-Rank", types: ["tails", "prisonlane", "arank"]},
    {name: "Sand Ocean M2", types: ["eggman", "sandocean"]},
    {name: "Complete Sand Ocean M1 with 100+ Rings", types: ["eggman", "sandocean", "m1", "rings"]},
    {name: "2 Chao Boxes in Sand Ocean and finish", types: ["eggman", "sandocean", "m1", "chao"]},
    {name: "5 hidden Chao animals in Sand Ocean and finish", types: ["eggman", "sandocean", "m1", "chao"]},
    {name: "City Escape M5", types: ["sonic", "cityescape"]},
    {name: "Dry Lagoon M5", types: ["rouge", "drylagoon"]}
];
bingoList[5] = [
    {name: "Sand Ocean M2 A-Rank", types: ["eggman", "sandocean", "arank"]},
    {name: "City Escape M5 A-Rank", types: ["sonic", "cityescape", "arank"]},
    {name: "Dry Lagoon M5 A-Rank", types: ["rouge", "drylagoon", "arank"]},
    {name: "Shadow's Flame Ring", types: ["shadow", "m1", "radicalhighway"]},
    {name: "Metal Harbor M2", types: ["sonic", "metalharbor"]},
    {name: "Complete Metal Harbor M1 with 100+ Rings", types: ["sonic", "metalharbor", "m1", "rings"]},
    {name: "2 Chao Boxes in Metal Harbor and finish", types: ["sonic", "metalharbor", "m1", "chao"]},
    {name: "5 hidden Chao animals in Metal Harbor and finish", types: ["sonic", "metalharbor", "m1", "chao"]},
    {name: "Unlock Chao Garden for all Dark Story characters", types: ["shadow", "eggman", "rouge", "chaogarden"]},
    {name: "Metal Harbor M3", types: ["sonic", "metalharbor"]}
];
bingoList[6] = [
    {name: "Metal Harbor M2 A-Rank", types: ["sonic", "metalharbor", "arank"]},
    {name: "Metal Harbor M3 A-Rank", types: ["sonic", "metalharbor", "arank"]},
    {name: "Radical Highway M2", types: ["shadow", "radicalhighway"]},
    {name: "Complete Radical Highway M1 with 100+ Rings", types: ["shadow", "radicalhighway", "m1", "rings"]},
    {name: "2 Chao Boxes in Radical Highway and finish", types: ["shadow", "radicalhighway", "m1", "chao"]},
    {name: "5 hidden Chao animals in Radical Highway and finish", types: ["shadow", "radicalhighway", "m1", "chao"]},
    {name: "3 Dark Story Gold Beetles", types: ["goldbeetle", "m1"]}
];
bingoList[7] = [
    {name: "Radical Highway M2 A-Rank", types: ["shadow", "radicalhighway", "arank"]},
    {name: "Metal Harbor M4", types: ["sonic", "metalharbor"]},
    {name: "Radical Highway M3", types: ["shadow", "radicalhighway"]},
    {name: "Rouge's Mystic Melody", types: ["rouge", "drylagoon"]},
    {name: "500 Total Rings", types: ["rings"]},
    {name: "Sonic's Ancient Light", types: ["sonic", "m1", "greenforest"]}
];
bingoList[8] = [
    {name: "Metal Harbor M4 A-Rank", types: ["sonic", "metalharbor", "arank"]},
    {name: "Radical Highway M3 A-Rank", types: ["shadow", "radicalhighway", "arank"]},
    {name: "Egg Quarters M2", types: ["rouge", "eggquarters"]},
    {name: "Complete Egg Quarters M1 with 100+ Rings", types: ["rouge", "eggquarters", "m1", "rings"]},
    {name: "2 Chao Boxes in Egg Quarters and finish", types: ["rouge", "eggquarters", "m1", "chao"]},
    {name: "5 hidden Chao animals in Egg Quarters and finish", types: ["rouge", "eggquarters", "m1", "chao"]},
    {name: "Green Forest M2", types: ["sonic", "greenforest"]},
    {name: "Complete Green Forest M1 with 100+ Rings", types: ["sonic", "greenforest", "m1", "rings"]},
    {name: "2 Chao Boxes in Green Forest and finish", types: ["sonic", "greenforest", "m1", "chao"]},
    {name: "5 hidden Chao animals in Green Forest and finish", types: ["sonic", "greenforest", "m1", "chao"]},
    {name: "Metal Harbor M5", types: ["sonic", "metalharbor"]}
];
bingoList[9] = [
    {name: "Egg Quarters M2 A-Rank", types: ["rouge", "eggquarters", "arank"]},
    {name: "Green Forest M2 A-Rank", types: ["sonic", "greenforest", "arank"]},
    {name: "Metal Harbor M5 A-Rank", types: ["sonic", "metalharbor", "arank"]},
    {name: "Egg Quarters M3", types: ["rouge", "eggquarters"]},
    {name: "Green Forest M3", types: ["sonic", "greenforest"]},
    {name: "Radical Highway M4", types: ["shadow", "radicalhighway"]},
    {name: "Knuckles' Mystic Melody", types: ["knuckles", "wildcanyon", "mysticmelody"]},
    {name: "Dr Eggman's Mystic Melody", types: ["eggman", "sandocean", "mysticmelody"]}
];
bingoList[10] = [
    {name: "Egg Quarters M3 A-Rank", types: ["rouge", "eggquarters", "arank"]},
    {name: "Green Forest M3 A-Rank", types: ["sonic", "greenforest", "arank"]},
    {name: "Radical Highway M4 A-Rank", types: ["shadow", "radicalhighway", "arank"]},
    {name: "Pumpkin Hill M2", types: ["knuckles", "pumpkinhill"]},
    {name: "Complete Pumpkin Hill M1 with 100+ Rings", types: ["knuckles", "pumpkinhill", "m1", "rings"]},
    {name: "2 Chao Boxes in Pumpkin Hill and finish", types: ["knuckles", "pumpkinhill", "m1", "chao"]},
    {name: "5 hidden Chao animals in Pumpkin Hill and finish", types: ["knuckles", "pumpkinhill", "m1", "chao"]},
    {name: "Pumpkin Hill M3", types: ["knuckles", "pumpkinhill"]},
    {name: "Egg Quarters M4", types: ["rouge", "eggquarters"]},
    {name: "5 Gold Beetles across both Stories", types: ["goldbeetle", "m1", "multistory"]}
];
bingoList[11] = [
    {name: "Pumpkin Hill M2 A-Rank", types: ["knuckles", "pumpkinhill", "arank"]},
    {name: "Pumpkin Hill M3 A-Rank", types: ["knuckles", "pumpkinhill", "arank"]},
    {name: "Egg Quarters M4 A-Rank", types: ["rouge", "eggquarters", "arank"]},
    {name: "Lost Colony M2", types: ["eggman", "lostcolony"]},
    {name: "Sand Ocean M3", types: ["eggman", "sandocean"]},
    {name: "Complete Lost Colony M1 with 100+ Rings", types: ["eggman", "lostcolony", "m1", "rings"]},
    {name: "2 Chao Boxes in Lost Colony and finish", types: ["eggman", "lostcolony", "m1", "chao"]},
    {name: "5 hidden Chao animals in Lost Colony and finish", types: ["eggman", "lostcolony", "m1", "chao"]},
    {name: "Radical Highway M5", types: ["shadow", "radicalhighway"]},
    {name: "Pumpkin Hill M4", types: ["knuckles", "pumpkinhill"]},
    {name: "10 Emblems", types: ["emblems"]}
];
bingoList[12] = [
    {name: "Lost Colony M2 A-Rank", types: ["eggman", "lostcolony", "arank"]},
    {name: "Sand Ocean M3 A-Rank", types: ["eggman", "sandocean", "arank"]},
    {name: "Radical Highway M5 A-Rank", types: ["shadow", "radicalhighway", "arank"]},
    {name: "Pumpkin Hill M4 A-Rank", types: ["knuckles", "pumpkinhill", "arank"]},
    {name: "Green Forest M4", types: ["sonic", "greenforest"]},
    {name: "Iron Gate M3", types: ["eggman", "irongate"]},
    {name: "Egg Quarters M5", types: ["rouge", "eggquarters"]},
    {name: "Unlock Chao Garden for every character", types: ["chaogarden", "multistory"]},
    {name: "Pumpkin Hill M5", types: ["knuckles", "pumpkinhill"]}
];
bingoList[13] = [
    {name: "Weapons Bed M2", types: ["eggman", "weaponsbed"]},
    {name: "Complete Weapons Bed M1 with 100+ Rings", types: ["eggman", "weaponsbed", "m1", "rings"]},
    {name: "2 Chao Boxes in Weapons Bed and finish", types: ["eggman", "weaponsbed", "m1", "chao"]},
    {name: "5 hidden Chao animals in Weapons Bed and finish", types: ["eggman", "weaponsbed", "m1", "chao"]},
    {name: "Sand Ocean M4", types: ["eggman", "sandocean"]},
    {name: "Knuckles' Air Necklace", types: ["knuckles", "m1", "aquaticmine"]},
    {name: "Green Forest M4 A-Rank", types: ["sonic", "greenforest", "arank"]},
    {name: "Iron Gate M3 A-Rank", types: ["eggman", "irongate", "arank"]},
    {name: "Egg Quarters M5 A-Rank", types: ["rouge", "eggquarters", "arank"]},
    {name: "Pumpkin Hill M5 A-Rank", types: ["knuckles", "pumpkinhill", "arank"]}
];
bingoList[14] = [
    {name: "Weapons Bed M2 A-Rank", types: ["eggman", "weaponsbed", "arank"]},
    {name: "Sand Ocean M4 A-Rank", types: ["eggman", "sandocean", "arank"]},
    {name: "Rouge's Treasure Scope", types: ["rouge", "m1", "securityhall"]},
    {name: "Mission Street M2", types: ["tails", "missionstreet"]},
    {name: "Iron Gate M4", types: ["eggman", "irongate"]},
    {name: "Complete Mission Street M1 with 100+ Rings", types: ["tails", "missionstreet", "m1", "rings"]},
    {name: "2 Chao Boxes in Mission Street and finish", types: ["tails", "missionstreet", "m1", "chao"]},
    {name: "5 hidden Chao animals in Mission Street and finish", types: ["tails", "missionstreet", "m1", "chao"]},
    {name: "6 Hero Story Gold Beetles", types: ["goldbeetle", "m1"]},
    {name: "Lost Colony M3", types: ["eggman", "lostcolony"]},
    {name: "Aquatic Mine M2", types: ["knuckles", "aquaticmine"]},
    {name: "Weapons Bed M3", types: ["eggman", "weaponsbed"]},
    {name: "Dr Eggman's Laser Blaster", types: ["eggman", "irongate"]},
    {name: "Complete Aquatic Mine M1 with 100+ Rings", types: ["knuckles", "aquaticmine", "m1", "rings"]},
    {name: "2 Chao Boxes in Aquatic Mine and finish", types: ["knuckles", "aquaticmine", "m1", "chao"]},
    {name: "5 hidden Chao animals in Aquatic Mine and finish", types: ["knuckles", "aquaticmine", "m1", "chao"]},
    {name: "Green Forest M5", types: ["sonic", "greenforest"]},
    {name: "Aquatic Mine M3", types: ["knuckles", "aquaticmine"]}
];
bingoList[15] = [
    {name: "Security Hall M2", types: ["rouge", "securityhall"]},
    {name: "Complete Security Hall M1 with 100+ Rings", types: ["rouge", "securityhall", "m1", "rings"]},
    {name: "2 Chao Boxes in Security Hall and finish", types: ["rouge", "securityhall", "m1", "chao"]},
    {name: "5 hidden Chao animals in Security Hall and finish", types: ["rouge", "securityhall", "m1", "chao"]},
    {name: "6 Dark Story Gold Beetles", types: ["goldbeetle", "m1"]},
    {name: "Mission Street M2 A-Rank", types: ["tails", "missionstreet", "arank"]},
    {name: "Iron Gate M4 A-Rank", types: ["eggman", "irongate", "arank"]},
    {name: "Lost Colony M3 A-Rank", types: ["eggman", "lostcolony", "arank"]},
    {name: "Aquatic Mine M2 A-Rank", types: ["knuckles", "aquaticmine", "arank"]},
    {name: "Weapons Bed M3 A-Rank", types: ["eggman", "weaponsbed", "arank"]},
    {name: "Green Forest M5 A-Rank", types: ["sonic", "greenforest", "arank"]},
    {name: "Aquatic Mine M3 A-Rank", types: ["knuckles", "aquaticmine", "arank"]}
];
bingoList[16] = [
    {name: "Security Hall M2 A-Rank", types: ["rouge", "securityhall", "arank"]},
    {name: "Iron Gate M5", types: ["eggman", "irongate"]},
    {name: "Sand Ocean M5", types: ["eggman", "sandocean"]},
    {name: "Aquatic Mine M4", types: ["knuckles", "aquaticmine"]},
    {name: "Security Hall M3", types: ["rouge", "securityhall"]},
    {name: "Weapons Bed M4", types: ["eggman", "weaponsbed"]}
];
bingoList[17] = [
    {name: "Route 101 M2", types: ["tails", "route101"]},
    {name: "Defeat both Tails 1 and Dr Eggman 1", types: ["multistory"]},
    {name: "Security Hall M4", types: ["rouge", "securityhall"]},
    {name: "Lost Colony M4", types: ["eggman", "lostcolony"]},
    {name: "Iron Gate M5 A-Rank", types: ["eggman", "irongate", "arank"]},
    {name: "Sand Ocean M5 A-Rank", types: ["eggman", "sandocean", "arank"]},
    {name: "Aquatic Mine M4 A-Rank", types: ["knuckles", "aquaticmine", "arank"]},
    {name: "Security Hall M3 A-Rank", types: ["rouge", "securityhall", "arank"]},
    {name: "Weapons Bed M4 A-Rank", types: ["eggman", "weaponsbed", "arank"]}
];
bingoList[18] = [
    {name: "Route 101 M2 A-Rank", types: ["tails", "route101", "arank"]},
    {name: "Security Hall M4 A-Rank", types: ["rouge", "securityhall", "arank"]},
    {name: "Lost Colony M4 A-Rank", types: ["eggman", "lostcolony", "arank"]},
    {name: "White Jungle M2", types: ["shadow", "whitejungle"]},
    {name: "Weapons Bed M5", types: ["eggman", "weaponsbed"]},
    {name: "Complete White Jungle M1 with 100+ Rings", types: ["shadow", "whitejungle", "m1", "rings"]},
    {name: "2 Chao Boxes in White Jungle and finish", types: ["shadow", "whitejungle", "m1", "chao"]},
    {name: "5 hidden Chao animals in White Jungle and finish", types: ["shadow", "whitejungle", "m1", "chao"]},
    {name: "Beginner Kart Racing Emblem", types: ["kartracing", "route101", "route280"]}
];
bingoList[19] = [
    {name: "Security Hall M5", types: ["rouge", "securityhall"]},
    {name: "Route 101 M3", types: ["tails", "route101"]},
    {name: "White Jungle M2 A-Rank", types: ["shadow", "whitejungle", "arank"]},
    {name: "Weapons Bed M5 A-Rank", types: ["eggman", "weaponsbed", "arank"]}
];
bingoList[20] = [
    {name: "Security Hall M5 A-Rank", types: ["rouge", "securityhall", "arank"]},
    {name: "Route 101 M3 A-Rank", types: ["tails", "route101", "arank"]},
    {name: "Hidden Base M2", types: ["tails", "hiddenbase"]},
    {name: "Complete Hidden Base M1 with 100+ Rings", types: ["tails", "hiddenbase", "m1", "rings"]},
    {name: "2 Chao Boxes in Hidden Base and finish", types: ["tails", "hiddenbase", "m1", "chao"]},
    {name: "5 hidden Chao animals in Hidden Base and finish", types: ["tails", "hiddenbase", "m1", "chao"]},
    {name: "White Jungle M3", types: ["shadow", "whitejungle"]}
];
bingoList[21] = [
    {name: "Pyramid Cave M2", types: ["sonic", "pyramidcave"]},
    {name: "Lost Colony M5", types: ["eggman", "lostcolony"]},
    {name: "Complete Pyramid Cave M1 with 100+ Rings", types: ["sonic", "pyramidcave", "m1", "rings"]},
    {name: "2 Chao Boxes in Pyramid Cave and finish", types: ["sonic", "pyramidcave", "m1", "chao"]},
    {name: "5 hidden Chao animals in Pyramid Cave and finish", types: ["sonic", "pyramidcave", "m1", "chao"]},
    {name: "Route 101 M4", types: ["tails", "route101"]},
    {name: "Hidden Base M2 A-Rank", types: ["tails", "hiddenbase", "arank"]},
    {name: "White Jungle M3 A-Rank", types: ["shadow", "whitejungle", "arank"]}
];
bingoList[22] = [
    {name: "Pyramid Cave M2 A-Rank", types: ["sonic", "pyramidcave", "arank"]},
    {name: "Lost Colony M5 A-Rank", types: ["eggman", "lostcolony", "arank"]},
    {name: "Route 101 M4 A-Rank", types: ["tails", "route101", "arank"]},
    {name: "Hidden Base M3", types: ["tails", "hiddenbase"]},
    {name: "Route 280 M2", types: ["rouge", "route280"]}
];
bingoList[23] = [
    {name: "Pyramid Cave M3", types: ["sonic", "pyramidcave"]},
    {name: "White Jungle M4", types: ["shadow", "whitejungle"]},
    {name: "Shadow's Ancient Light", types: ["shadow", "m1", "skyrail"]},
    {name: "Death Chamber M2", types: ["knuckles", "deathchamber"]},
    {name: "Complete Death Chamber M1 with 100+ Rings", types: ["knuckles", "deathchamber", "m1", "rings"]},
    {name: "2 Chao Boxes in Death Chamber and finish", types: ["knuckles", "deathchamber", "m1", "chao"]},
    {name: "5 hidden Chao animals in Death Chamber and finish", types: ["knuckles", "deathchamber", "m1", "chao"]},
    {name: "Hidden Base M3 A-Rank", types: ["tails", "hiddenbase", "arank"]},
    {name: "Route 280 M2 A-Rank", types: ["rouge", "route280", "arank"]}
];
bingoList[24] = [
    {name: "Pyramid Cave M3 A-Rank", types: ["sonic", "pyramidcave", "arank"]},
    {name: "White Jungle M4 A-Rank", types: ["shadow", "whitejungle", "arank"]},
    {name: "Death Chamber M2 A-Rank", types: ["knuckles", "deathchamber", "arank"]},
    {name: "Hidden Base M4", types: ["tails", "hiddenbase"]},
    {name: "Route 101 M5", types: ["tails", "route101"]},
    {name: "Sky Rail M2", types: ["shadow", "skyrail"]},
    {name: "Complete Sky Rail M1 with 100+ Rings", types: ["shadow", "skyrail", "m1", "rings"]},
    {name: "2 Chao Boxes in Sky Rail and finish", types: ["shadow", "skyrail", "m1", "chao"]},
    {name: "5 hidden Chao animals in Sky Rail and finish", types: ["shadow", "skyrail", "m1", "chao"]},
    {name: "Death Chamber M3", types: ["knuckles", "deathchamber"]},
    {name: "Pyramid Cave M4", types: ["sonic", "pyramidcave"]}
];
bingoList[25] = [
    {name: "Sky Rail M3", types: ["shadow", "skyrail"]},
    {name: "White Jungle M5", types: ["shadow", "whitejungle"]},
    {name: "All Kart Racing Emblems", types: ["kartracing", "route101", "route280"]},
    {name: "Death Chamber M4", types: ["knuckles", "deathchamber"]},
    {name: "Route 280 M3", types: ["rouge", "route280"]},
    {name: "Finish with 25+ Lives (No Underflow)", types: ["multistory"]},
    {name: "Hidden Base M4 A-Rank", types: ["tails", "hiddenbase", "arank"]},
    {name: "Route 101 M5 A-Rank", types: ["tails", "route101", "arank"]},
    {name: "Sky Rail M2 A-Rank", types: ["shadow", "skyrail", "arank"]},
    {name: "Death Chamber M3 A-Rank", types: ["knuckles", "deathchamber", "arank"]},
    {name: "Pyramid Cave M4 A-Rank", types: ["sonic", "pyramidcave", "arank"]}
];
