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
    {name: "City Escape M2", types: ["cityescape"]},
    {name: "2 Chao Boxes in City Escape and finish", types: ["cityescape"]},
    {name: "5 hidden Chao animals in City Escape and finish", types: ["cityescape"]},
    {name: "Rename a Chao after a person you're racing", types: ["multistory"]},
    {name: "Complete City Escape M1 with a Magnetic Shield", types: ["cityescape"]},
    {name: "Iron Gate M2", types: ["irongate"]},
    {name: "Complete Iron Gate M1 with 100+ Rings", types: ["irongate"]},
    {name: "2 Chao Boxes in Iron Gate and finish", types: ["irongate"]},
    {name: "5 hidden Chao animals in Iron Gate and finish", types: ["irongate"]},
    {name: "Wild Canyon M1 Hintless", types: ["wildcanyon"]}
];
bingoList[2] = [
    {name: "Dry Lagoon M1 Hintless", types: ["drylagoon"]},
    {name: "City Escape M3", types: ["cityescape"]},
    {name: "Wild Canyon M2", types: ["wildcanyon"]},
    {name: "Complete Wild Canyon M1 with 100+ Rings", types: ["wildcanyon"]},
    {name: "2 Chao Boxes in Wild Canyon and finish", types: ["wildcanyon"]},
    {name: "5 hidden Chao animals in Wild Canyon and finish", types: ["wildcanyon"]}
];
bingoList[3] = [
    {name: "Wild Canyon M3", types: ["wildcanyon"]},
    {name: "Wild Canyon M3 B-Rank", types: ["wildcanyon", "brank"]},
    {name: "Dry Lagoon M2", types: ["drylagoon"]},
    {name: "Complete Dry Lagoon M1 with 100+ Rings", types: ["drylagoon"]},
    {name: "2 Chao Boxes in Dry Lagoon and finish", types: ["drylagoon"]},
    {name: "5 hidden Chao animals in Dry Lagoon and finish", types: ["drylagoon"]},
    {name: "Wild Canyon M4", types: ["wildcanyon"]},
    {name: "Dry Lagoon M3", types: ["drylagoon"]},
    {name: "Dry Lagoon M3 B-Rank", types: ["drylagoon", "brank"]},
    {name: "City Escape M4", types: ["cityescape"]},
    {name: "Wild Canyon M5", types: ["wildcanyon"]},
    {name: "Defeat both Big Foot and Hot Shot", types: ["multistory"]},
    {name: "Unlock Chao Garden for all Hero Story characters", types: ["chaogarden"]},
    {name: "Dry Lagoon M4", types: ["drylagoon"]}
];
bingoList[4] = [
    {name: "Wild Canyon M4 A-Rank", types: ["wildcanyon", "arank"]},
    {name: "City Escape M4 A-Rank", types: ["cityescape", "arank"]},
    {name: "Wild Canyon M5 A-Rank", types: ["wildcanyon", "arank"]},
    {name: "Dry Lagoon M4 A-Rank", types: ["drylagoon", "arank"]},
    {name: "Prison Lane M2", types: ["prisonlane"]},
    {name: "Complete Prison Lane M1 with 100+ Rings", types: ["prisonlane"]},
    {name: "2 Chao Boxes in Prison Lane and finish", types: ["prisonlane"]},
    {name: "5 hidden Chao animals in Prison Lane and finish", types: ["prisonlane"]},
    {name: "Destroy the Gold Beetle in 3 Hero Story stages", types: ["goldbeetle"]},
    {name: "Complete Prison Lane M1 with a Green Shield", types: ["prisonlane"]},
    {name: "Sand Ocean M2", types: ["sandocean"]},
    {name: "Complete Sand Ocean M1 with 100+ Rings", types: ["sandocean"]},
    {name: "2 Chao Boxes in Sand Ocean and finish", types: ["sandocean"]},
    {name: "5 hidden Chao animals in Sand Ocean and finish", types: ["sandocean"]},
    {name: "Beginner Chao Karate Emblem (with a new Chao)", types: ["multistory"]},
    {name: "City Escape M5", types: ["cityescape"]},
    {name: "Dry Lagoon M5", types: ["drylagoon"]},
    {name: "Shadow's Flame Ring", types: ["radicalhighway"]},
    {name: "Metal Harbor M2", types: ["metalharbor"]},
    {name: "2 Chao Boxes in Metal Harbor and finish", types: ["metalharbor"]},
    {name: "5 hidden Chao animals in Metal Harbor and finish", types: ["metalharbor"]},
    {name: "Pacifist Metal Harbor M1", types: ["metalharbor"]},
    {name: "Unlock Chao Garden for all Dark Story characters", types: ["chaogarden"]},
    {name: "Metal Harbor M3", types: ["metalharbor"]},
    {name: "Metal Harbor M3 B-Rank", types: ["metalharbor", "brank"]}
];
bingoList[5] = [
    {name: "Wild Canyon All Missions A-Rank", types: ["wildcanyon", "arank", "allmissions"]},
    {name: "City Escape M5 A-Rank", types: ["cityescape", "arank"]},
    {name: "Dry Lagoon M5 A-Rank", types: ["drylagoon", "arank"]},
    {name: "Radical Highway M2", types: ["radicalhighway"]},
    {name: "Complete Radical Highway M1 with 100+ Rings", types: ["radicalhighway"]},
    {name: "2 Chao Boxes in Radical Highway and finish", types: ["radicalhighway"]},
    {name: "5 hidden Chao animals in Radical Highway and finish", types: ["radicalhighway"]},
    {name: "Destroy the Gold Beetle in 3 Dark Story stages", types: ["goldbeetle"]},
    {name: "Pacifist Radical Highway M1", types: ["radicalhighway"]},
    {name: "Egg Quarters M1 Hintless", types: ["eggquarters"]},
    {name: "Metal Harbor M4", types: ["metalharbor"]},
    {name: "Radical Highway M3", types: ["radicalhighway"]},
    {name: "Sonic's Ancient Light", types: ["greenforest"]},
    {name: "Egg Quarters M2", types: ["eggquarters"]},
    {name: "Complete Egg Quarters M1 with 100+ Rings", types: ["eggquarters"]},
    {name: "2 Chao Boxes in Egg Quarters and finish", types: ["eggquarters"]},
    {name: "5 hidden Chao animals in Egg Quarters and finish", types: ["eggquarters"]},
    {name: "Complete Egg Quarters M1 with a Magnetic Shield", types: ["eggquarters"]}
];
bingoList[6] = [
    {name: "City Escape All Missions A-Rank", types: ["cityescape", "arank", "allmissions"]},
    {name: "Dry Lagoon All Missions A-Rank", types: ["drylagoon", "arank", "allmissions"]},
    {name: "Metal Harbor M4 A-Rank", types: ["metalharbor", "arank"]},
    {name: "Green Forest M2", types: ["greenforest"]},
    {name: "Complete Green Forest M1 with 100+ Rings", types: ["greenforest"]},
    {name: "2 Chao Boxes in Green Forest and finish", types: ["greenforest"]},
    {name: "5 hidden Chao animals in Green Forest and finish", types: ["greenforest"]},
    {name: "Pacifist Green Forest M1", types: ["greenforest"]},
    {name: "Complete Green Forest M1 with a Magnetic Shield", types: ["greenforest"]},
    {name: "Metal Harbor M5", types: ["metalharbor"]},
    {name: "Egg Quarters M3", types: ["eggquarters"]},
    {name: "Pumpkin Hill M1 Hintless", types: ["pumpkinhill"]},
    {name: "Green Forest M3", types: ["greenforest"]},
    {name: "Radical Highway M4", types: ["radicalhighway"]},
    {name: "Pumpkin Hill M2", types: ["pumpkinhill"]},
    {name: "Complete Pumpkin Hill M1 with 100+ Rings", types: ["pumpkinhill"]},
    {name: "2 Chao Boxes in Pumpkin Hill and finish", types: ["pumpkinhill"]},
    {name: "5 hidden Chao animals in Pumpkin Hill and finish", types: ["pumpkinhill"]},
    {name: "Pumpkin Hill M3", types: ["pumpkinhill"]},
    {name: "Egg Quarters M4", types: ["eggquarters"]},
    {name: "Destroy the Gold Beetle in 5 different stages", types: ["goldbeetle",  "multistory"]}
];
bingoList[7] = [
    {name: "Metal Harbor M5 A-Rank", types: ["metalharbor", "arank"]},
    {name: "Radical Highway M4 A-Rank", types: ["radicalhighway", "arank"]},
    {name: "Egg Quarters M4 A-Rank", types: ["eggquarters", "arank"]},
    {name: "Lost Colony M2", types: ["lostcolony"]},
    {name: "Sand Ocean M3", types: ["sandocean"]},
    {name: "Complete Lost Colony M1 with 100+ Rings", types: ["lostcolony"]},
    {name: "2 Chao Boxes in Lost Colony and finish", types: ["lostcolony"]},
    {name: "5 hidden Chao animals in Lost Colony and finish", types: ["lostcolony"]},
    {name: "Radical Highway M5", types: ["radicalhighway"]},
    {name: "Pumpkin Hill M4", types: ["pumpkinhill"]},
    {name: "Green Forest M4", types: ["greenforest"]},
    {name: "Game Over during Mission Street M1", types: ["missionstreet",  "gameover"]},
    {name: "Iron Gate M3", types: ["irongate"]},
    {name: "Egg Quarters M5", types: ["eggquarters"]},
    {name: "Unlock Chao Garden for every character", types: ["chaogarden", "multistory"]},
    {name: "Pumpkin Hill M5", types: ["pumpkinhill"]},
    {name: "Game Over during Tails 1", types: ["gameover"]},
    {name: "Weapons Bed M2", types: ["weaponsbed"]},
    {name: "Complete Weapons Bed M1 with 100+ Rings", types: ["weaponsbed"]},
    {name: "2 Chao Boxes in Weapons Bed and finish", types: ["weaponsbed"]},
    {name: "5 hidden Chao animals in Weapons Bed and finish", types: ["weaponsbed"]},
    {name: "Pacifist Weapons Bed M1", types: ["weaponsbed"]},
    {name: "Sand Ocean M4", types: ["sandocean"]}
];
bingoList[8] = [
    {name: "Metal Harbor All Missions A-Rank", types: ["metalharbor", "arank", "allmissions"]},
    {name: "Radical Highway M5 A-Rank", types: ["radicalhighway", "arank"]},
    {name: "Pumpkin Hill M4 A-Rank", types: ["pumpkinhill", "arank"]},
    {name: "Green Forest M4 A-Rank", types: ["greenforest", "arank"]},
    {name: "Egg Quarters M5 A-Rank", types: ["eggquarters", "arank"]},
    {name: "Pumpkin Hill M5 A-Rank", types: ["pumpkinhill", "arank"]},
    {name: "Sand Ocean M4 A-Rank", types: ["sandocean", "arank"]},
    {name: "Knuckles' Air Necklace", types: ["aquaticmine"]},
    {name: "Aquatic Mine M1 Hintless", types: ["aquaticmine"]},
    {name: "Rouge's Treasure Scope", types: ["securityhall"]},
    {name: "Security Hall M1 Hintless", types: ["securityhall"]},
    {name: "Mission Street M2", types: ["missionstreet"]},
    {name: "Iron Gate M4", types: ["irongate"]},
    {name: "Complete Mission Street M1 with 100+ Rings", types: ["missionstreet"]},
    {name: "2 Chao Boxes in Mission Street and finish", types: ["missionstreet"]},
    {name: "5 hidden Chao animals in Mission Street and finish", types: ["missionstreet"]},
    {name: "Destroy the Gold Beetle in 6 Hero Story stages", types: ["goldbeetle"]},
    {name: "Pacifist Mission Street M1", types: ["missionstreet"]},
    {name: "Lost Colony M3", types: ["lostcolony"]},
    {name: "Aquatic Mine M2", types: ["aquaticmine"]},
    {name: "Weapons Bed M3", types: ["weaponsbed"]},
    {name: "Dr Eggman's Laser Blaster", types: ["irongate"]},
    {name: "Complete Aquatic Mine M1 with 100+ Rings", types: ["aquaticmine"]},
    {name: "2 Chao Boxes in Aquatic Mine and finish", types: ["aquaticmine"]},
    {name: "5 hidden Chao animals in Aquatic Mine and finish", types: ["aquaticmine"]},
    {name: "Green Forest M5", types: ["greenforest"]},
    {name: "Aquatic Mine M3", types: ["aquaticmine"]},
    {name: "Game Over during Flying Dog", types: ["gameover"]},
    {name: "Security Hall M2", types: ["securityhall"]},
    {name: "Complete Security Hall M1 with 100+ Rings", types: ["securityhall"]},
    {name: "2 Chao Boxes in Security Hall and finish", types: ["securityhall"]},
    {name: "5 hidden Chao animals in Security Hall and finish", types: ["securityhall"]},
    {name: "Destroy the Gold Beetle in 6 Dark Story stages", types: ["goldbeetle"]},
    {name: "Complete Security Hall M1 with a Magnetic Shield", types: ["securityhall"]}
];
bingoList[9] = [
    {name: "Radical Highway All Missions A-Rank", types: ["radicalhighway", "arank", "allmissions"]},
    {name: "Egg Quarters All Missions A-Rank", types: ["eggquarters", "arank", "allmissions"]},
    {name: "Pumpkin Hill All Missions A-Rank", types: ["pumpkinhill", "arank", "allmissions"]},
    {name: "Iron Gate M4 A-Rank", types: ["irongate", "arank"]},
    {name: "Green Forest M5 A-Rank", types: ["greenforest", "arank"]},
    {name: "Iron Gate M5", types: ["irongate"]},
    {name: "Sand Ocean M5", types: ["sandocean"]},
    {name: "Game Over during Route 101 M1", types: ["route101",  "gameover"]},
    {name: "Aquatic Mine M4", types: ["aquaticmine"]},
    {name: "Security Hall M3", types: ["securityhall"]},
    {name: "Security Hall M3 B-Rank", types: ["securityhall", "brank"]},
    {name: "Weapons Bed M4", types: ["weaponsbed"]},
    {name: "Route 101 M2", types: ["route101"]},
    {name: "Defeat both Tails 1 and Dr Eggman 1", types: ["multistory"]},
    {name: "Security Hall M4", types: ["securityhall"]},
    {name: "Lost Colony M4", types: ["lostcolony"]},
    {name: "White Jungle M2", types: ["whitejungle"]},
    {name: "Weapons Bed M5", types: ["weaponsbed"]},
    {name: "Complete White Jungle M1 with 100+ Rings", types: ["whitejungle"]},
    {name: "2 Chao Boxes in White Jungle and finish", types: ["whitejungle"]},
    {name: "5 hidden Chao animals in White Jungle and finish", types: ["whitejungle"]},
    {name: "Game Over during Sonic 1", types: ["gameover"]},
    {name: "Pacifist White Jungle M1", types: ["whitejungle"]}
];
bingoList[10] = [
    {name: "Green Forest All Missions A-Rank", types: ["greenforest", "arank", "allmissions"]},
    {name: "Iron Gate M5 A-Rank", types: ["irongate", "arank"]},
    {name: "Sand Ocean M5 A-Rank", types: ["sandocean", "arank"]},
    {name: "Aquatic Mine M4 A-Rank", types: ["aquaticmine", "arank"]},
    {name: "Weapons Bed M4 A-Rank", types: ["weaponsbed", "arank"]},
    {name: "Security Hall M4 A-Rank", types: ["securityhall", "arank"]},
    {name: "Lost Colony M4 A-Rank", types: ["lostcolony", "arank"]},
    {name: "Weapons Bed M5 A-Rank", types: ["weaponsbed", "arank"]},
    {name: "Beginner Kart Racing Emblem", types: ["multistory"]},
    {name: "Destroy the Gold Beetle in 3 Hero Story stages (M5 only)", types: ["goldbeetle"]},
    {name: "Security Hall M5", types: ["securityhall"]},
    {name: "Route 101 M3", types: ["route101"]},
    {name: "Hidden Base M2", types: ["hiddenbase"]},
    {name: "Complete Hidden Base M1 with 100+ Rings", types: ["hiddenbase"]},
    {name: "2 Chao Boxes in Hidden Base and finish", types: ["hiddenbase"]},
    {name: "5 hidden Chao animals in Hidden Base and finish", types: ["hiddenbase"]},
    {name: "White Jungle M3", types: ["whitejungle"]},
    {name: "Game Over during Pyramid Cave M1", types: ["pyramidcave",  "gameover"]}
];
bingoList[11] = [
    {name: "Iron Gate All Missions A-Rank", types: ["irongate", "arank", "allmissions"]},
    {name: "Sand Ocean All Missions A-Rank", types: ["sandocean", "arank", "allmissions"]},
    {name: "Weapons Bed All Missions A-Rank", types: ["weaponsbed", "arank", "allmissions"]},
    {name: "Security Hall M5 A-Rank", types: ["securityhall", "arank"]},
    {name: "Pyramid Cave M2", types: ["pyramidcave"]},
    {name: "Lost Colony M5", types: ["lostcolony"]},
    {name: "Complete Pyramid Cave M1 with 100+ Rings", types: ["pyramidcave"]},
    {name: "2 Chao Boxes in Pyramid Cave and finish", types: ["pyramidcave"]},
    {name: "5 hidden Chao animals in Pyramid Cave and finish", types: ["pyramidcave"]},
    {name: "Game Over during Route 280 M1", types: ["route280",  "gameover"]},
    {name: "Route 101 M4", types: ["route101"]},
    {name: "Hidden Base M3", types: ["hiddenbase"]},
    {name: "Death Chamber M1 Hintless", types: ["deathchamber"]},
    {name: "Route 280 M2", types: ["route280"]},
    {name: "Pyramid Cave M3", types: ["pyramidcave"]},
    {name: "White Jungle M4", types: ["whitejungle"]},
    {name: "Shadow's Ancient Light", types: ["skyrail"]}
];
bingoList[12] = [
    {name: "Security Hall All Missions A-Rank", types: ["securityhall", "arank", "allmissions"]},
    {name: "Lost Colony M5 A-Rank", types: ["lostcolony", "arank"]},
    {name: "Route 101 M4 A-Rank", types: ["route101", "arank"]},
    {name: "White Jungle M4 A-Rank", types: ["whitejungle", "arank"]},
    {name: "Game Over during King Boom Boo", types: ["gameover"]},
    {name: "Death Chamber M2", types: ["deathchamber"]},
    {name: "Complete Death Chamber M1 with 100+ Rings", types: ["deathchamber"]},
    {name: "2 Chao Boxes in Death Chamber and finish", types: ["deathchamber"]},
    {name: "5 hidden Chao animals in Death Chamber and finish", types: ["deathchamber"]},
    {name: "Hidden Base M4", types: ["hiddenbase"]},
    {name: "Route 101 M5", types: ["route101"]},
    {name: "Sky Rail M2", types: ["skyrail"]},
    {name: "Complete Sky Rail M1 with 100+ Rings", types: ["skyrail"]},
    {name: "2 Chao Boxes in Sky Rail and finish", types: ["skyrail"]},
    {name: "5 hidden Chao animals in Sky Rail and finish", types: ["skyrail"]},
    {name: "Death Chamber M3", types: ["deathchamber"]},
    {name: "Pyramid Cave M4", types: ["pyramidcave"]},
    {name: "Sky Rail M3", types: ["skyrail"]},
    {name: "White Jungle M5", types: ["whitejungle"]},
    {name: "All Kart Racing Emblems", types: ["multistory"]},
    {name: "Mad Space M1 Hintless", types: ["madspace"]},
    {name: "Death Chamber M4", types: ["deathchamber"]},
    {name: "Route 280 M3", types: ["route280"]}
];
bingoList[13] = [
    {name: "Lost Colony All Missions A-Rank", types: ["lostcolony", "arank", "allmissions"]},
    {name: "Hidden Base M4 A-Rank", types: ["hiddenbase", "arank"]},
    {name: "Route 101 M5 A-Rank", types: ["route101", "arank"]},
    {name: "Pyramid Cave M4 A-Rank", types: ["pyramidcave", "arank"]},
    {name: "White Jungle M5 A-Rank", types: ["whitejungle", "arank"]},
    {name: "Death Chamber M4 A-Rank", types: ["deathchamber", "arank"]},
    {name: "Finish any mission with 25+ Lives (No Underflow)", types: ["multistory"]},
    {name: "Hidden Base M5", types: ["hiddenbase"]},
    {name: "Mad Space M2", types: ["madspace"]},
    {name: "Complete Mad Space M1 with 100+ Rings", types: ["madspace"]},
    {name: "2 Chao Boxes in Mad Space and finish", types: ["madspace"]},
    {name: "5 hidden Chao animals in Mad Space and finish", types: ["madspace"]},
    {name: "Sky Rail M4", types: ["skyrail"]},
    {name: "Pyramid Cave M5", types: ["pyramidcave"]},
    {name: "Death Chamber M5", types: ["deathchamber"]},
    {name: "Defeat both Shadow 1 and Sonic 1", types: ["multistory"]},
    {name: "Sky Rail M5", types: ["skyrail"]},
    {name: "Mad Space M3", types: ["madspace"]},
    {name: "Destroy the Gold Beetle in 3 Dark Story stages (M5 only)", types: ["goldbeetle"]},
    {name: "Route 280 M4", types: ["route280"]}
];
bingoList[14] = [
    {name: "Route 101 All Missions A-Rank", types: ["route101", "arank", "allmissions"]},
    {name: "White Jungle All Missions A-Rank", types: ["whitejungle", "arank", "allmissions"]},
    {name: "Hidden Base M5 A-Rank", types: ["hiddenbase", "arank"]},
    {name: "Sky Rail M4 A-Rank", types: ["skyrail", "arank"]},
    {name: "Pyramid Cave M5 A-Rank", types: ["pyramidcave", "arank"]},
    {name: "Death Chamber M5 A-Rank", types: ["deathchamber", "arank"]},
    {name: "Sky Rail M5 A-Rank", types: ["skyrail", "arank"]},
    {name: "Route 280 M4 A-Rank", types: ["route280", "arank"]},
    {name: "Eternal Engine M2", types: ["eternalengine"]},
    {name: "Mad Space M4", types: ["madspace"]},
    {name: "Dr Eggman's Protective Armor", types: ["cosmicwall"]},
    {name: "Complete Eternal Engine M1 with 100+ Rings", types: ["eternalengine"]},
    {name: "2 Chao Boxes in Eternal Engine and finish", types: ["eternalengine"]},
    {name: "5 hidden Chao animals in Eternal Engine and finish", types: ["eternalengine"]},
    {name: "Meteor Herd M1 Hintless", types: ["meteorherd"]},
    {name: "Complete Eternal Engine M1 with a Green Shield", types: ["eternalengine"]},
    {name: "Knuckles' Sunglasses", types: ["meteorherd"]},
    {name: "Meteor Herd M2", types: ["meteorherd"]},
    {name: "Tails' Laser Blaster", types: ["eternalengine"]},
    {name: "Complete Meteor Herd M1 with 100+ Rings", types: ["meteorherd"]},
    {name: "2 Chao Boxes in Meteor Herd and finish", types: ["meteorherd"]},
    {name: "5 hidden Chao animals in Meteor Herd and finish", types: ["meteorherd"]},
    {name: "Destroy the Gold Beetle in 10 different stages", types: ["goldbeetle",  "multistory"]}
];
bingoList[15] = [
    {name: "Hidden Base All Missions A-Rank", types: ["hiddenbase", "arank", "allmissions"]},
    {name: "Pyramid Cave All Missions A-Rank", types: ["pyramidcave", "arank", "allmissions"]},
    {name: "Death Chamber All Missions A-Rank", types: ["deathchamber", "arank", "allmissions"]},
    {name: "Sky Rail All Missions A-Rank", types: ["skyrail", "arank", "allmissions"]},
    {name: "Mad Space M4 A-Rank", types: ["madspace", "arank"]},
    {name: "Prison Lane M3", types: ["prisonlane"]},
    {name: "Mad Space M5", types: ["madspace"]},
    {name: "Meteor Herd M3", types: ["meteorherd"]},
    {name: "Route 280 M5", types: ["route280"]},
    {name: "Mission Street M3", types: ["missionstreet"]},
    {name: "Eternal Engine M3", types: ["eternalengine"]},
    {name: "Aquatic Mine M5", types: ["aquaticmine"]},
    {name: "Meteor Herd M4", types: ["meteorherd"]},
    {name: "Sonic's Flame Ring", types: ["crazygadget"]},
    {name: "Prison Lane M4", types: ["prisonlane"]},
    {name: "Meteor Herd M5", types: ["meteorherd"]}
];
bingoList[16] = [
    {name: "Mad Space M5 A-Rank", types: ["madspace", "arank"]},
    {name: "Route 280 M5 A-Rank", types: ["route280", "arank"]},
    {name: "Aquatic Mine M5 A-Rank", types: ["aquaticmine", "arank"]},
    {name: "Meteor Herd M4 A-Rank", types: ["meteorherd", "arank"]},
    {name: "Prison Lane M4 A-Rank", types: ["prisonlane", "arank"]},
    {name: "Meteor Herd M5 A-Rank", types: ["meteorherd", "arank"]},
    {name: "Cosmic Wall M2", types: ["cosmicwall"]},
    {name: "Complete Cosmic Wall M1 with 100+ Rings", types: ["cosmicwall"]},
    {name: "5 hidden Chao animals in Cosmic Wall and finish", types: ["cosmicwall"]},
    {name: "Crazy Gadget M2", types: ["crazygadget"]},
    {name: "Complete Crazy Gadget M1 with 100+ Rings", types: ["crazygadget"]},
    {name: "2 Chao Boxes in Crazy Gadget and finish", types: ["crazygadget"]},
    {name: "5 hidden Chao animals in Crazy Gadget and finish", types: ["crazygadget"]},
    {name: "Complete Crazy Gadget M1 with a Green Shield", types: ["crazygadget"]},
    {name: "Mission Street M4", types: ["missionstreet"]},
    {name: "Cosmic Wall M3", types: ["cosmicwall"]},
    {name: "Eternal Engine M4", types: ["eternalengine"]},
    {name: "Prison Lane M5", types: ["prisonlane"]},
    {name: "Sonic's Magic Gloves", types: ["crazygadget"]},
    {name: "Crazy Gadget M3", types: ["crazygadget"]},
    {name: "2500 Total Rings", types: ["multistory"]}
];
bingoList[17] = [
    {name: "Mad Space All Missions A-Rank", types: ["madspace", "arank", "allmissions"]},
    {name: "Route 280 All Missions A-Rank", types: ["route280", "arank", "allmissions"]},
    {name: "Aquatic Mine All Missions A-Rank", types: ["aquaticmine", "arank", "allmissions"]},
    {name: "Meteor Herd All Missions A-Rank", types: ["meteorherd", "arank", "allmissions"]},
    {name: "Mission Street M4 A-Rank", types: ["missionstreet", "arank"]},
    {name: "Eternal Engine M4 A-Rank", types: ["eternalengine", "arank"]},
    {name: "Prison Lane M5 A-Rank", types: ["prisonlane", "arank"]},
    {name: "Final Rush M2", types: ["finalrush"]},
    {name: "Complete Final Rush M1 with 100+ Rings", types: ["finalrush"]},
    {name: "2 Chao Boxes in Final Rush and finish", types: ["finalrush"]},
    {name: "5 hidden Chao animals in Final Rush and finish", types: ["finalrush"]},
    {name: "All Hero Story Character's Upgrades", types: ["finalrush"]},
    {name: "Complete Final Rush M1 with a Magnetic Shield", types: ["finalrush"]},
    {name: "All Hero Story Character's Mystic Melody", types: ["aquaticmine", "arank", "allmissions"]},
    {name: "All Dark Story Character's Mystic Melody", types: ["finalchase", "mysticmelody"]},
    {name: "Mission Street M5", types: ["missionstreet"]},
    {name: "Crazy Gadget M4", types: ["crazygadget"]},
    {name: "Final Chase M2", types: ["finalchase"]},
    {name: "Complete Final Chase M1 with 100+ Rings", types: ["finalchase"]},
    {name: "2 Chao Boxes in Final Chase and finish", types: ["finalchase"]},
    {name: "5 hidden Chao animals in Final Chase and finish", types: ["finalchase"]},
    {name: "All Dark Story Character's Upgrades", types: ["finalchase"]},
    {name: "Eternal Engine M5", types: ["eternalengine"]},
    {name: "Final Rush M3", types: ["finalrush"]}
];
bingoList[18] = [
    {name: "Prison Lane All Missions A-Rank", types: ["prisonlane", "arank", "allmissions"]},
    {name: "Mission Street M5 A-Rank", types: ["missionstreet", "arank"]},
    {name: "Crazy Gadget M4 A-Rank", types: ["crazygadget", "arank"]},
    {name: "Eternal Engine M5 A-Rank", types: ["eternalengine", "arank"]},
    {name: "Final Rush M3 A-Rank", types: ["finalrush", "arank"]},
    {name: "Cosmic Wall M4", types: ["cosmicwall"]},
    {name: "Final Rush M4", types: ["finalrush"]},
    {name: "Crazy Gadget M5", types: ["crazygadget"]},
    {name: "Final Chase M3", types: ["finalchase"]},
    {name: "Hero Story Emblem", types: ["storyemblem"]},
    {name: "Dark Story Emblem", types: ["storyemblem"]}
];
bingoList[19] = [
    {name: "Mission Street All Missions A-Rank", types: ["missionstreet", "arank", "allmissions"]},
    {name: "Eternal Engine All Missions A-Rank", types: ["eternalengine", "arank", "allmissions"]},
    {name: "Cosmic Wall M4 A-Rank", types: ["cosmicwall", "arank"]},
    {name: "Crazy Gadget M5 A-Rank", types: ["crazygadget", "arank"]},
    {name: "Final Rush M4 A-Rank", types: ["finalrush", "arank"]},
    {name: "Route 101 M1 & Route 280 M1", types: ["multistory"]},
    {name: "Final Rush M5", types: ["finalrush"]},
    {name: "Final Chase M4", types: ["finalchase"]},
    {name: "All Character's Mystic Melody (Team Combined)", types: ["mysticmelody", "multistory"]},
    {name: "Defeat both King Boom Boo and Flying Dog", types: ["multistory"]}
];
bingoList[20] = [
    {name: "Crazy Gadget All Missions A-Rank", types: ["crazygadget", "arank", "allmissions"]},
    {name: "Final Rush M5 A-Rank", types: ["finalrush", "arank"]},
    {name: "Final Chase M4 A-Rank", types: ["finalchase", "arank"]},
    {name: "Cosmic Wall M5", types: ["cosmicwall"]},
    {name: "Final Chase M5", types: ["finalchase"]}
];
bingoList[21] = [
    {name: "Final Rush All Missions A-Rank", types: ["finalrush", "arank", "allmissions"]},
    {name: "Cosmic Wall M5 A-Rank", types: ["cosmicwall", "arank"]},
    {name: "Final Chase M5 A-Rank", types: ["finalchase", "arank"]}
];
bingoList[22] = [
    {name: "Cosmic Wall All Missions A-Rank", types: ["cosmicwall", "arank", "allmissions"]},
    {name: "Hero Story Boss Rush Emblem", types: ["storyemblem", "bossrush"]},
    {name: "Dark Story Boss Rush Emblem", types: ["storyemblem", "bossrush"]},
    {name: "8000 Total Rings (Team Combined)", types: ["rings", "multistory"]},
    {name: "Final Chase All Missions A-Rank", types: ["finalchase", "arank", "allmissions"]}
];
bingoList[23] = [
    {name: "Knuckles' Alternative Kart", types: ["meteorherd", "altkart"]},
    {name: "Rouge's Alternative Kart", types: ["madspace", "altkart"]},
    {name: "Defeat both Knuckles and Rouge", types: ["multistory"]},
    {name: "Defeat Egg Golem as both Sonic and Dr Eggman", types: ["multistory"]}
];
bingoList[24] = [
    {name: "Shadow's Alternative Kart", types: ["finalchase", "altkart"]},
    {name: "Tails' Alternative Kart", types: ["eternalengine", "altkart"]},
    {name: "Defeat both Tails 2 and Dr Eggman 2", types: ["multistory"]},
    {name: "Sonic's Alternative Kart", types: ["finalrush", "altkart"]},
    {name: "Eggman's Alternative Kart", types: ["cosmicwall", "altkart"]}
];
bingoList[25] = [
    {name: "90 Emblems (Team Combined)", types: ["emblems"]}
];
