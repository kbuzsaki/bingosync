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
    {name: "City Escape M2", types: ["1"]},
    {name: "2 Chao Boxes in City Escape and finish", types: ["1"]},
    {name: "5 hidden Chao animals in City Escape and finish", types: ["1"]},
    {name: "Rename a Chao after a person you're racing", types: ["1"]},
    {name: "Complete City Escape M1 with a Magnetic Shield", types: ["1"]},
    {name: "Iron Gate M2", types: ["1"]},
    {name: "Complete Iron Gate M1 with 100+ Rings", types: ["1"]},
    {name: "2 Chao Boxes in Iron Gate and finish", types: ["1"]},
    {name: "5 hidden Chao animals in Iron Gate and finish", types: ["1"]},
    {name: "Wild Canyon M1 Hintless", types: ["1"]}
];
bingoList[2] = [
    {name: "Dry Lagoon M1 Hintless", types: ["2"]},
    {name: "City Escape M3", types: ["2"]},
    {name: "Wild Canyon M2", types: ["2"]},
    {name: "Complete Wild Canyon M1 with 100+ Rings", types: ["2"]},
    {name: "2 Chao Boxes in Wild Canyon and finish", types: ["2"]},
    {name: "Unlock Chao Garden for all Hero Story characters", types: ["2"]},
    {name: "5 hidden Chao animals in Wild Canyon and finish", types: ["2"]}
];
bingoList[3] = [
    {name: "Wild Canyon M3", types: ["3"]},
    {name: "Wild Canyon M3 B-Rank", types: ["3"]},
    {name: "Dry Lagoon M2", types: ["3"]},
    {name: "Complete Dry Lagoon M1 with 100+ Rings", types: ["3"]},
    {name: "2 Chao Boxes in Dry Lagoon and finish", types: ["3"]},
    {name: "5 hidden Chao animals in Dry Lagoon and finish", types: ["3"]},
    {name: "Wild Canyon M4", types: ["3"]},
    {name: "Dry Lagoon M3", types: ["3"]},
    {name: "Dry Lagoon M3 B-Rank", types: ["3"]},
    {name: "City Escape M4", types: ["3"]},
    {name: "Wild Canyon M5", types: ["3"]},
    {name: "Defeat both Big Foot and Hot Shot", types: ["3"]},
    {name: "Dry Lagoon M4", types: ["3"]}
];
bingoList[4] = [
    {name: "Wild Canyon M4 A-Rank", types: ["4"]},
    {name: "City Escape M4 A-Rank", types: ["4"]},
    {name: "Wild Canyon M5 A-Rank", types: ["4"]},
    {name: "Dry Lagoon M4 A-Rank", types: ["4"]},
    {name: "Prison Lane M2", types: ["4"]},
    {name: "Complete Prison Lane M1 with 100+ Rings", types: ["4"]},
    {name: "2 Chao Boxes in Prison Lane and finish", types: ["4"]},
    {name: "5 hidden Chao animals in Prison Lane and finish", types: ["4"]},
    {name: "Destroy the Gold Beetle in 3 Hero Story stages", types: ["4"]},
    {name: "Complete Prison Lane M1 with a Green Shield", types: ["4"]},
    {name: "Sand Ocean M2", types: ["4"]},
    {name: "Complete Sand Ocean M1 with 100+ Rings", types: ["4"]},
    {name: "2 Chao Boxes in Sand Ocean and finish", types: ["4"]},
    {name: "5 hidden Chao animals in Sand Ocean and finish", types: ["4"]},
    {name: "Beginner Chao Karate Emblem (with a new Chao)", types: ["4"]},
    {name: "City Escape M5", types: ["4"]},
    {name: "Dry Lagoon M5", types: ["4"]},
    {name: "Shadow's Flame Ring", types: ["4"]},
    {name: "Metal Harbor M2", types: ["4"]},
    {name: "2 Chao Boxes in Metal Harbor and finish", types: ["4"]},
    {name: "5 hidden Chao animals in Metal Harbor and finish", types: ["4"]},
    {name: "Pacifist Metal Harbor M1", types: ["4"]},
    {name: "Unlock Chao Garden for all Dark Story characters", types: ["4"]},
    {name: "Metal Harbor M3", types: ["4"]},
    {name: "Metal Harbor M3 B-Rank", types: ["4"]}
];
bingoList[5] = [
    {name: "Wild Canyon All Missions A-Rank", types: ["5"]},
    {name: "City Escape M5 A-Rank", types: ["5"]},
    {name: "Dry Lagoon M5 A-Rank", types: ["5"]},
    {name: "Radical Highway M2", types: ["5"]},
    {name: "Complete Radical Highway M1 with 100+ Rings", types: ["5"]},
    {name: "2 Chao Boxes in Radical Highway and finish", types: ["5"]},
    {name: "5 hidden Chao animals in Radical Highway and finish", types: ["5"]},
    {name: "Destroy the Gold Beetle in 3 Dark Story stages", types: ["5"]},
    {name: "Pacifist Radical Highway M1", types: ["5"]},
    {name: "Egg Quarters M1 Hintless", types: ["5"]},
    {name: "Metal Harbor M4", types: ["5"]},
    {name: "Radical Highway M3", types: ["5"]},
    {name: "Sonic's Ancient Light", types: ["5"]},
    {name: "Egg Quarters M2", types: ["5"]},
    {name: "Complete Egg Quarters M1 with 100+ Rings", types: ["5"]},
    {name: "2 Chao Boxes in Egg Quarters and finish", types: ["5"]},
    {name: "5 hidden Chao animals in Egg Quarters and finish", types: ["5"]},
    {name: "Complete Egg Quarters M1 with a Magnetic Shield", types: ["5"]}
];
bingoList[6] = [
    {name: "City Escape All Missions A-Rank", types: ["6"]},
    {name: "Dry Lagoon All Missions A-Rank", types: ["6"]},
    {name: "Metal Harbor M4 A-Rank", types: ["6"]},
    {name: "Green Forest M2", types: ["6"]},
    {name: "Complete Green Forest M1 with 100+ Rings", types: ["6"]},
    {name: "2 Chao Boxes in Green Forest and finish", types: ["6"]},
    {name: "5 hidden Chao animals in Green Forest and finish", types: ["6"]},
    {name: "Pacifist Green Forest M1", types: ["6"]},
    {name: "Complete Green Forest M1 with a Magnetic Shield", types: ["6"]},
    {name: "Metal Harbor M5", types: ["6"]},
    {name: "Egg Quarters M3", types: ["6"]},
    {name: "Pumpkin Hill M1 Hintless", types: ["6"]},
    {name: "Green Forest M3", types: ["6"]},
    {name: "Radical Highway M4", types: ["6"]},
    {name: "Pumpkin Hill M2", types: ["6"]},
    {name: "Complete Pumpkin Hill M1 with 100+ Rings", types: ["6"]},
    {name: "2 Chao Boxes in Pumpkin Hill and finish", types: ["6"]},
    {name: "5 hidden Chao animals in Pumpkin Hill and finish", types: ["6"]},
    {name: "Pumpkin Hill M3", types: ["6"]},
    {name: "Egg Quarters M4", types: ["6"]},
    {name: "Destroy the Gold Beetle in 5 different stages", types: ["6"]}
];
bingoList[7] = [
    {name: "Metal Harbor M5 A-Rank", types: ["7"]},
    {name: "Radical Highway M4 A-Rank", types: ["7"]},
    {name: "Egg Quarters M4 A-Rank", types: ["7"]},
    {name: "Lost Colony M2", types: ["7"]},
    {name: "Sand Ocean M3", types: ["7"]},
    {name: "Complete Lost Colony M1 with 100+ Rings", types: ["7"]},
    {name: "2 Chao Boxes in Lost Colony and finish", types: ["7"]},
    {name: "5 hidden Chao animals in Lost Colony and finish", types: ["7"]},
    {name: "Radical Highway M5", types: ["7"]},
    {name: "Pumpkin Hill M4", types: ["7"]},
    {name: "Green Forest M4", types: ["7"]},
    {name: "Game Over during Mission Street M1", types: ["7"]},
    {name: "Iron Gate M3", types: ["7"]},
    {name: "Egg Quarters M5", types: ["7"]},
    {name: "Unlock Chao Garden for every character", types: ["7"]},
    {name: "Pumpkin Hill M5", types: ["7"]},
    {name: "Game Over during Tails 1", types: ["7"]},
    {name: "Weapons Bed M2", types: ["7"]},
    {name: "Complete Weapons Bed M1 with 100+ Rings", types: ["7"]},
    {name: "2 Chao Boxes in Weapons Bed and finish", types: ["7"]},
    {name: "5 hidden Chao animals in Weapons Bed and finish", types: ["7"]},
    {name: "Pacifist Weapons Bed M1", types: ["7"]},
    {name: "Sand Ocean M4", types: ["7"]}
];
bingoList[8] = [
    {name: "Metal Harbor All Missions A-Rank", types: ["8"]},
    {name: "Radical Highway M5 A-Rank", types: ["8"]},
    {name: "Pumpkin Hill M4 A-Rank", types: ["8"]},
    {name: "Green Forest M4 A-Rank", types: ["8"]},
    {name: "Egg Quarters M5 A-Rank", types: ["8"]},
    {name: "Pumpkin Hill M5 A-Rank", types: ["8"]},
    {name: "Sand Ocean M4 A-Rank", types: ["8"]},
    {name: "Knuckles' Air Necklace", types: ["8"]},
    {name: "Aquatic Mine M1 Hintless", types: ["8"]},
    {name: "Rouge's Treasure Scope", types: ["8"]},
    {name: "Security Hall M1 Hintless", types: ["8"]},
    {name: "Mission Street M2", types: ["8"]},
    {name: "Iron Gate M4", types: ["8"]},
    {name: "Complete Mission Street M1 with 100+ Rings", types: ["8"]},
    {name: "2 Chao Boxes in Mission Street and finish", types: ["8"]},
    {name: "5 hidden Chao animals in Mission Street and finish", types: ["8"]},
    {name: "Destroy the Gold Beetle in 6 Hero Story stages", types: ["8"]},
    {name: "Pacifist Mission Street M1", types: ["8"]},
    {name: "Lost Colony M3", types: ["8"]},
    {name: "Aquatic Mine M2", types: ["8"]},
    {name: "Weapons Bed M3", types: ["8"]},
    {name: "Dr Eggman's Laser Blaster", types: ["8"]},
    {name: "Complete Aquatic Mine M1 with 100+ Rings", types: ["8"]},
    {name: "2 Chao Boxes in Aquatic Mine and finish", types: ["8"]},
    {name: "5 hidden Chao animals in Aquatic Mine and finish", types: ["8"]},
    {name: "Green Forest M5", types: ["8"]},
    {name: "Aquatic Mine M3", types: ["8"]},
    {name: "Game Over during Flying Dog", types: ["8"]},
    {name: "Security Hall M2", types: ["8"]},
    {name: "Complete Security Hall M1 with 100+ Rings", types: ["8"]},
    {name: "2 Chao Boxes in Security Hall and finish", types: ["8"]},
    {name: "5 hidden Chao animals in Security Hall and finish", types: ["8"]},
    {name: "Destroy the Gold Beetle in 6 Dark Story stages", types: ["8"]},
    {name: "Complete Security Hall M1 with a Magnetic Shield", types: ["8"]}
];
bingoList[9] = [
    {name: "Radical Highway All Missions A-Rank", types: ["9"]},
    {name: "Egg Quarters All Missions A-Rank", types: ["9"]},
    {name: "Pumpkin Hill All Missions A-Rank", types: ["9"]},
    {name: "Iron Gate M4 A-Rank", types: ["9"]},
    {name: "Green Forest M5 A-Rank", types: ["9"]},
    {name: "Iron Gate M5", types: ["9"]},
    {name: "Sand Ocean M5", types: ["9"]},
    {name: "Game Over during Route 101 M1", types: ["9"]},
    {name: "Aquatic Mine M4", types: ["9"]},
    {name: "Security Hall M3", types: ["9"]},
    {name: "Security Hall M3 B-Rank", types: ["9"]},
    {name: "Weapons Bed M4", types: ["9"]},
    {name: "Route 101 M2", types: ["9"]},
    {name: "Defeat both Tails 1 and Dr Eggman 1", types: ["9"]},
    {name: "Security Hall M4", types: ["9"]},
    {name: "Lost Colony M4", types: ["9"]},
    {name: "White Jungle M2", types: ["9"]},
    {name: "Weapons Bed M5", types: ["9"]},
    {name: "Complete White Jungle M1 with 100+ Rings", types: ["9"]},
    {name: "2 Chao Boxes in White Jungle and finish", types: ["9"]},
    {name: "5 hidden Chao animals in White Jungle and finish", types: ["9"]},
    {name: "Game Over during Sonic 1", types: ["9"]},
    {name: "Pacifist White Jungle M1", types: ["9"]}
];
bingoList[10] = [
    {name: "Green Forest All Missions A-Rank", types: ["10"]},
    {name: "Iron Gate M5 A-Rank", types: ["10"]},
    {name: "Sand Ocean M5 A-Rank", types: ["10"]},
    {name: "Aquatic Mine M4 A-Rank", types: ["10"]},
    {name: "Weapons Bed M4 A-Rank", types: ["10"]},
    {name: "Security Hall M4 A-Rank", types: ["10"]},
    {name: "Lost Colony M4 A-Rank", types: ["10"]},
    {name: "Weapons Bed M5 A-Rank", types: ["10"]},
    {name: "Beginner Kart Racing Emblem", types: ["10"]},
    {name: "Destroy the Gold Beetle in 3 Hero Story stages (M5 only)", types: ["10"]},
    {name: "Security Hall M5", types: ["10"]},
    {name: "Route 101 M3", types: ["10"]},
    {name: "Hidden Base M2", types: ["10"]},
    {name: "Complete Hidden Base M1 with 100+ Rings", types: ["10"]},
    {name: "2 Chao Boxes in Hidden Base and finish", types: ["10"]},
    {name: "5 hidden Chao animals in Hidden Base and finish", types: ["10"]},
    {name: "White Jungle M3", types: ["10"]},
    {name: "Game Over during Pyramid Cave M1", types: ["10"]}
];
bingoList[11] = [
    {name: "Iron Gate All Missions A-Rank", types: ["11"]},
    {name: "Sand Ocean All Missions A-Rank", types: ["11"]},
    {name: "Weapons Bed All Missions A-Rank", types: ["11"]},
    {name: "Security Hall M5 A-Rank", types: ["11"]},
    {name: "Pyramid Cave M2", types: ["11"]},
    {name: "Lost Colony M5", types: ["11"]},
    {name: "Complete Pyramid Cave M1 with 100+ Rings", types: ["11"]},
    {name: "2 Chao Boxes in Pyramid Cave and finish", types: ["11"]},
    {name: "5 hidden Chao animals in Pyramid Cave and finish", types: ["11"]},
    {name: "Game Over during Route 280 M1", types: ["11"]},
    {name: "Route 101 M4", types: ["11"]},
    {name: "Hidden Base M3", types: ["11"]},
    {name: "Death Chamber M1 Hintless", types: ["11"]},
    {name: "Route 280 M2", types: ["11"]},
    {name: "Pyramid Cave M3", types: ["11"]},
    {name: "White Jungle M4", types: ["11"]},
    {name: "Shadow's Ancient Light", types: ["11"]}
];
bingoList[12] = [
    {name: "Security Hall All Missions A-Rank", types: ["12"]},
    {name: "Lost Colony M5 A-Rank", types: ["12"]},
    {name: "Route 101 M4 A-Rank", types: ["12"]},
    {name: "White Jungle M4 A-Rank", types: ["12"]},
    {name: "Game Over during King Boom Boo", types: ["12"]},
    {name: "Death Chamber M2", types: ["12"]},
    {name: "Complete Death Chamber M1 with 100+ Rings", types: ["12"]},
    {name: "2 Chao Boxes in Death Chamber and finish", types: ["12"]},
    {name: "5 hidden Chao animals in Death Chamber and finish", types: ["12"]},
    {name: "Hidden Base M4", types: ["12"]},
    {name: "Route 101 M5", types: ["12"]},
    {name: "Sky Rail M2", types: ["12"]},
    {name: "Complete Sky Rail M1 with 100+ Rings", types: ["12"]},
    {name: "2 Chao Boxes in Sky Rail and finish", types: ["12"]},
    {name: "5 hidden Chao animals in Sky Rail and finish", types: ["12"]},
    {name: "Death Chamber M3", types: ["12"]},
    {name: "Pyramid Cave M4", types: ["12"]},
    {name: "Sky Rail M3", types: ["12"]},
    {name: "White Jungle M5", types: ["12"]},
    {name: "All Kart Racing Emblems", types: ["12"]},
    {name: "Mad Space M1 Hintless", types: ["12"]},
    {name: "Death Chamber M4", types: ["12"]},
    {name: "Route 280 M3", types: ["12"]}
];
bingoList[13] = [
    {name: "Lost Colony All Missions A-Rank", types: ["13"]},
    {name: "Hidden Base M4 A-Rank", types: ["13"]},
    {name: "Route 101 M5 A-Rank", types: ["13"]},
    {name: "Pyramid Cave M4 A-Rank", types: ["13"]},
    {name: "White Jungle M5 A-Rank", types: ["13"]},
    {name: "Death Chamber M4 A-Rank", types: ["13"]},
    {name: "Finish any mission with 25+ Lives (No Underflow)", types: ["13"]},
    {name: "Hidden Base M5", types: ["13"]},
    {name: "Mad Space M2", types: ["13"]},
    {name: "Complete Mad Space M1 with 100+ Rings", types: ["13"]},
    {name: "2 Chao Boxes in Mad Space and finish", types: ["13"]},
    {name: "5 hidden Chao animals in Mad Space and finish", types: ["13"]},
    {name: "Sky Rail M4", types: ["13"]},
    {name: "Pyramid Cave M5", types: ["13"]},
    {name: "Death Chamber M5", types: ["13"]},
    {name: "Defeat both Shadow 1 and Sonic 1", types: ["13"]},
    {name: "Sky Rail M5", types: ["13"]},
    {name: "Destroy the Gold Beetle in 3 Dark Story stages (M5 only)", types: ["13"]},
    {name: "Mad Space M3", types: ["13"]},
    {name: "Route 280 M4", types: ["13"]}
];
bingoList[14] = [
    {name: "Route 101 All Missions A-Rank", types: ["14"]},
    {name: "White Jungle All Missions A-Rank", types: ["14"]},
    {name: "Hidden Base M5 A-Rank", types: ["14"]},
    {name: "Sky Rail M4 A-Rank", types: ["14"]},
    {name: "Pyramid Cave M5 A-Rank", types: ["14"]},
    {name: "Death Chamber M5 A-Rank", types: ["14"]},
    {name: "Sky Rail M5 A-Rank", types: ["14"]},
    {name: "Route 280 M4 A-Rank", types: ["14"]},
    {name: "Eternal Engine M2", types: ["14"]},
    {name: "Mad Space M4", types: ["14"]},
    {name: "Dr Eggman's Protective Armor", types: ["14"]},
    {name: "Complete Eternal Engine M1 with 100+ Rings", types: ["14"]},
    {name: "2 Chao Boxes in Eternal Engine and finish", types: ["14"]},
    {name: "5 hidden Chao animals in Eternal Engine and finish", types: ["14"]},
    {name: "Meteor Herd M1 Hintless", types: ["14"]},
    {name: "Complete Eternal Engine M1 with a Green Shield", types: ["14"]},
    {name: "Knuckles' Sunglasses", types: ["14"]},
    {name: "Meteor Herd M2", types: ["14"]},
    {name: "Tails' Laser Blaster", types: ["14"]},
    {name: "Complete Meteor Herd M1 with 100+ Rings", types: ["14"]},
    {name: "2 Chao Boxes in Meteor Herd and finish", types: ["14"]},
    {name: "5 hidden Chao animals in Meteor Herd and finish", types: ["14"]},
    {name: "Destroy the Gold Beetle in 10 different stages", types: ["14"]}
];
bingoList[15] = [
    {name: "Hidden Base All Missions A-Rank", types: ["15"]},
    {name: "Pyramid Cave All Missions A-Rank", types: ["15"]},
    {name: "Death Chamber All Missions A-Rank", types: ["15"]},
    {name: "Sky Rail All Missions A-Rank", types: ["15"]},
    {name: "Mad Space M4 A-Rank", types: ["15"]},
    {name: "Prison Lane M3", types: ["15"]},
    {name: "Mad Space M5", types: ["15"]},
    {name: "Meteor Herd M3", types: ["15"]},
    {name: "Route 280 M5", types: ["15"]},
    {name: "Mission Street M3", types: ["15"]},
    {name: "Eternal Engine M3", types: ["15"]},
    {name: "Aquatic Mine M5", types: ["15"]},
    {name: "Meteor Herd M4", types: ["15"]},
    {name: "Sonic's Flame Ring", types: ["15"]},
    {name: "Prison Lane M4", types: ["15"]},
    {name: "Meteor Herd M5", types: ["15"]}
];
bingoList[16] = [
    {name: "Mad Space M5 A-Rank", types: ["16"]},
    {name: "Route 280 M5 A-Rank", types: ["16"]},
    {name: "Aquatic Mine M5 A-Rank", types: ["16"]},
    {name: "Meteor Herd M4 A-Rank", types: ["16"]},
    {name: "Prison Lane M4 A-Rank", types: ["16"]},
    {name: "Meteor Herd M5 A-Rank", types: ["16"]},
    {name: "Cosmic Wall M2", types: ["16"]},
    {name: "Complete Cosmic Wall M1 with 100+ Rings", types: ["16"]},
    {name: "5 hidden Chao animals in Cosmic Wall and finish", types: ["16"]},
    {name: "Crazy Gadget M2", types: ["16"]},
    {name: "Complete Crazy Gadget M1 with 100+ Rings", types: ["16"]},
    {name: "2 Chao Boxes in Crazy Gadget and finish", types: ["16"]},
    {name: "5 hidden Chao animals in Crazy Gadget and finish", types: ["16"]},
    {name: "Complete Crazy Gadget M1 with a Green Shield", types: ["16"]},
    {name: "Mission Street M4", types: ["16"]},
    {name: "Cosmic Wall M3", types: ["16"]},
    {name: "Eternal Engine M4", types: ["16"]},
    {name: "Prison Lane M5", types: ["16"]},
    {name: "Sonic's Magic Gloves", types: ["16"]},
    {name: "Crazy Gadget M3", types: ["16"]},
    {name: "2500 Total Rings", types: ["16"]}
];
bingoList[17] = [
    {name: "Mad Space All Missions A-Rank", types: ["17"]},
    {name: "Route 280 All Missions A-Rank", types: ["17"]},
    {name: "Aquatic Mine All Missions A-Rank", types: ["17"]},
    {name: "Meteor Herd All Missions A-Rank", types: ["17"]},
    {name: "Mission Street M4 A-Rank", types: ["17"]},
    {name: "Eternal Engine M4 A-Rank", types: ["17"]},
    {name: "Prison Lane M5 A-Rank", types: ["17"]},
    {name: "Final Rush M2", types: ["17"]},
    {name: "Complete Final Rush M1 with 100+ Rings", types: ["17"]},
    {name: "2 Chao Boxes in Final Rush and finish", types: ["17"]},
    {name: "5 hidden Chao animals in Final Rush and finish", types: ["17"]},
    {name: "All Hero Story Character's Upgrades", types: ["17"]},
    {name: "Complete Final Rush M1 with a Magnetic Shield", types: ["17"]},
    {name: "All Hero Story Character's Mystic Melody", types: ["14"]},
    {name: "All Dark Story Character's Mystic Melody", types: ["17"]},
    {name: "Mission Street M5", types: ["17"]},
    {name: "Crazy Gadget M4", types: ["17"]},
    {name: "Final Chase M2", types: ["17"]},
    {name: "Complete Final Chase M1 with 100+ Rings", types: ["17"]},
    {name: "2 Chao Boxes in Final Chase and finish", types: ["17"]},
    {name: "5 hidden Chao animals in Final Chase and finish", types: ["17"]},
    {name: "All Dark Story Character's Upgrades", types: ["17"]},
    {name: "Eternal Engine M5", types: ["17"]},
    {name: "Final Rush M3", types: ["17"]}
];
bingoList[18] = [
    {name: "Prison Lane All Missions A-Rank", types: ["18"]},
    {name: "Mission Street M5 A-Rank", types: ["18"]},
    {name: "Crazy Gadget M4 A-Rank", types: ["18"]},
    {name: "Eternal Engine M5 A-Rank", types: ["18"]},
    {name: "Final Rush M3 A-Rank", types: ["18"]},
    {name: "Cosmic Wall M4", types: ["18"]},
    {name: "Final Rush M4", types: ["18"]},
    {name: "Crazy Gadget M5", types: ["18"]},
    {name: "Final Chase M3", types: ["18"]},
    {name: "Hero Story Emblem", types: ["18"]},
    {name: "Dark Story Emblem", types: ["18"]}
];
bingoList[19] = [
    {name: "Mission Street All Missions A-Rank", types: ["19"]},
    {name: "Eternal Engine All Missions A-Rank", types: ["19"]},
    {name: "Cosmic Wall M4 A-Rank", types: ["19"]},
    {name: "Crazy Gadget M5 A-Rank", types: ["19"]},
    {name: "Final Rush M4 A-Rank", types: ["19"]},
    {name: "Route 101 M1 & Route 280 M1", types: ["19"]},
    {name: "Final Rush M5", types: ["19"]},
    {name: "Final Chase M4", types: ["19"]},
    {name: "All Character's Mystic Melody (Team Combined)", types: ["19"]},
    {name: "Defeat both King Boom Boo and Flying Dog", types: ["19"]}
];
bingoList[20] = [
    {name: "Crazy Gadget All Missions A-Rank", types: ["20"]},
    {name: "Final Rush M5 A-Rank", types: ["20"]},
    {name: "Final Chase M4 A-Rank", types: ["20"]},
    {name: "Cosmic Wall M5", types: ["20"]},
    {name: "Final Chase M5", types: ["20"]}
];
bingoList[21] = [
    {name: "Final Rush All Missions A-Rank", types: ["21"]},
    {name: "Cosmic Wall M5 A-Rank", types: ["21"]},
    {name: "8000 Total Rings (Team Combined)", types: ["21"]},
    {name: "Final Chase M5 A-Rank", types: ["21"]}
];
bingoList[22] = [
    {name: "Cosmic Wall All Missions A-Rank", types: ["22"]},
    {name: "Hero Story Boss Rush Emblem", types: ["22"]},
    {name: "Dark Story Boss Rush Emblem", types: ["22"]},
    {name: "Final Chase All Missions A-Rank", types: ["22"]}
];
bingoList[23] = [
    {name: "Knuckles' Alternative Kart", types: ["23"]},
    {name: "Rouge's Alternative Kart", types: ["23"]},
    {name: "Defeat both Knuckles and Rouge", types: ["23"]},
    {name: "Defeat Egg Golem as both Sonic and Dr Eggman", types: ["23"]}
];
bingoList[24] = [
    {name: "Shadow's Alternative Kart", types: ["24"]},
    {name: "Tails' Alternative Kart", types: ["24"]},
    {name: "Defeat both Tails 2 and Dr Eggman 2", types: ["24"]},
    {name: "Sonic's Alternative Kart", types: ["24"]},
    {name: "Eggman's Alternative Kart", types: ["24"]}
];
bingoList[25] = [
    {name: "90 Emblems (Team Combined)", types: ["25"]}
];
