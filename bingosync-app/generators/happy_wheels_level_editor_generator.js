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

    function makeCard() {
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
            var j=0, synergy=0, spill = 0, currentObj=null, minSynObj=null;
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
                    spill++;
                    if(getDifficulty > 25) {
                        return false;
                    } else if (spill >= 3) {
                        return false;
                    } else {
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

    //Loop over cards until one is accepted.
	var card;
	var iterations = 0;
	while (iterations < 5) {
		iterations++;
		card = makeCard();
		if(card === false) {
			continue;
		} else {
			break;
		}
	}

  	return card;
}


var bingoList = [];

bingoList[1] = [
{ name: "Banned tr. action: wake from sleep", types: ["basic_trigger_tools", "fixing_type"] },
{ name: "Max. art shape w/h: 250", types: ["basic_art", "width_height"] },
{ name: "Max. editor space: height: 5000", types: ["width_height", "editor_limits", "unmatching37"] },
{ name: "Max. tr. w/h: 50", types: ["width_height"] },
{ name: "Max. vehicle acceleration: 5", types: ["vehicles", "vehicle_condition"] },
{ name: "Min. art left: 5000", types: ["basic_art", "editor_limits"] },
{ name: "No checkpoints", types: []},
{ name: "No customized font", types: ["fonts", "unmatching22"] },
{ name: "No tr. rotation", types: ["rotation"] },
{ name: "No triggered by 1", types: ["basic_trigger_tools"] },
{ name: "No triggered by 2", types: ["basic_trigger_tools"] },
{ name: "No triggered by 5", types: ["basic_trigger_tools"] },
{ name: "No use of outlines", types: ["basic_art"] }
];
bingoList[2] = [
{ name: "Alignment 1 only", types: ["texts"] },
{ name: "ch. op. time: 0 sec.", types: ["opacity"] },
{ name: "Falling obstacles incl.", types: ["unmatching1", "unmatching2", "unmatching31"] },
{ name: "Forced char.: Irresponsible dad", types: ["character", "unmatching32"] },
{ name: "Forced char.: Segway guy", types: ["character", "unmatching32"] },
{ name: "Hide vehicle: false", types: ["vehicles", "character", "unmatching13"] },
{ name: "Min. font size: 15", types: ["width_height", "texts"] },
{ name: "No low-op. shapes", types: ["opacity"] },
{ name: "No pinkish colors", types: ["basic_art", "colors"] },
{ name: "No rectangle interactives", types: ["basic_interactives"] },
{ name: "Polygon interactives only", types: ["basic_interactives"] }
];
bingoList[3] = [
{ name: "Alignment 2 only", types: ["texts"] },
{ name: "Banned col.: 5", types: ["basic_interactives", "collision"] },
{ name: "Banned col.: 6", types: ["basic_interactives", "collision"] },
{ name: "Banned tr. action: apply impulse", types: ["basic_trigger_tools", "unmatching3"] },
{ name: "Coin victory", types: ["victory", "unmatching20", "unmatching40"] },
{ name: "Font 2 only", types: ["fonts"] },
{ name: "Font 3 only", types: ["fonts"] },
{ name: "Font 4 only", types: ["fonts"] },
{ name: "Font 5 only", types: ["fonts"] },
{ name: "Max. interactives den.: 10", types: ["unmatching2", "basic_interactives", "density"] },
{ name: "Max. interactives w/h: 1000", types: ["width_height", "basic_interactives"] },
{ name: "Max. text tools: 10 (no customized fonts)", types: ["texts", "fonts"] },
{ name: "No 'limit rotation/range'", types: ["joints"] },
{ name: "No jets attached to vehicles", types: ["vehicles", "vehicle_condition", "joints", "unmatching5"] },
{ name: "No repeat type 4", types: ["basic_trigger_tools"] },
{ name: "No text rotation", types: ["rotation", "texts"] },
{ name: "No triggered by 3", types: ["basic_trigger_tools", "unmatching3", "unmatching41"] },
{ name: "Vehicle acceleration: 1", types: ["vehicles", "vehicle_condition"] },
];
bingoList[4] = [
{ name: "20 colors only", types: ["basic_art", "colors"] },
{ name: "Banned col.: 4", types: ["basic_interactives", "collision"] },
{ name: "Banned tr. action: ch. col.", types: ["basic_trigger_tools", "collision"] },
{ name: "Banned tr. action: set to non fixed", types: ["basic_trigger_tools", "fixing_type"] },
{ name: "Font 1 only", types: ["fonts"] },
{ name: "Main movement: right", types: ["movement", "unmatching38"] },
{ name: "Max. editor space: width: 10000", types: ["width_height", "editor_limits", "unmatching38"] },
{ name: "Max. motor speed amount: 5", types: ["vehicles", "joints"] },
{ name: "Max. targets per tr.: 10", types: ["basic_trigger_tools"] },
{ name: "Max. tr. w/h: 10", types: ["width_height"] },
{ name: "Min. interactives w/h: 50", types: ["width_height", "basic_interactives"] },
{ name: "No purplish colors", types: ["basic_art", "colors"] },
{ name: "No vehicle linking", types: ["vehicles", "vehicle_condition", "joints"] },
{ name: "No wheel vehicles", types: ["vehicles", "vehicle_condition", "joints"] },
{ name: "Piston incl.", types: ["joints", "unmatching6"] },
{ name: "Text op. 100 only", types: ["texts", "opacity"] }
];
bingoList[5] = [
{ name: "Banned tr. action: ch. motor speed", types: ["basic_trigger_tools", "joints"] },
{ name: "Banned tr. action: delete self", types: ["basic_trigger_tools"] },
{ name: "Banned tr. action: set to fixed", types: ["basic_trigger_tools", "fixing_type", "unmatching7"] },
{ name: "ch. op. time: 3 sec.", types: ["opacity"] },
{ name: "Forced char.: Pogostick man", types: ["character", "unmatching25", "unmatching35"] },
{ name: "Forced char.: Wheelchair guy", types: ["character", "unmatching25", "unmatching32"] },
{ name: "Freezing game incl.", types: ["fixing_type", "unmatching7"] },
{ name: "Min. art left: 7500", types: ["basic_art", "editor_limits"] },
{ name: "Min. motor torque: 1000", types: ["vehicles", "joints"] },
{ name: "Min. shapes left: 300", types: ["editor_limits", "basic_interactives"] },
{ name: "No black holes", types: ["density", "unmatching4"] },
{ name: "No cyanish colors", types: ["basic_art", "colors"] },
{ name: "No repeat type 3", types: ["basic_trigger_tools"] },
{ name: "No shading", types: ["basic_art"] },
{ name: "No start disabled", types: ["basic_trigger_tools"] },
{ name: "No triggered by 6", types: ["basic_trigger_tools"] },
{ name: "Playable char.: Irresponsible dad", types: ["character", "unmatching32"] },
{ name: "Playable char.: Segway guy", types: ["character", "unmatching32"] },
{ name: "Slow part incl.", types: ["unmatching29"] },
{ name: "Spikefall incl.", types: ["unmatching8", "unmatching27", "unmatching28"] },
{ name: "Vertical sliding joints only", types: ["vehicles", "joints"] }
];
bingoList[6] = [
{ name: "Activate object tr. only", types: ["basic_trigger_tools"] },
{ name: "Ballfall incl.", types: ["unmatching9", "unmatching39"] },
{ name: "Banned col.: 2", types: ["basic_interactives", "collision"] },
{ name: "Banned col.: 3", types: ["basic_interactives", "collision"] },
{ name: "Black text only", types: ["texts", "colors"] },
{ name: "'Collide connected' joints only", types: ["vehicles", "collision", "joints"] },
{ name: "Elevator part incl.", types: ["joints", "unmatching26"] },
{ name: "End screen incl.", types: []},
{ name: "Max. tr.: 100", types: ["basic_trigger_tools", "editor_limits"] },
{ name: "Min. interactives den.: 10", types: ["basic_interactives", "density"] },
{ name: "Min. motor speed amount: 3", types: ["vehicles", "joints"] },
{ name: "Negative motor speed only", types: ["vehicles", "joints"] },
{ name: "No polygons", types: ["basic_interactives"] },
{ name: "No triggered by 4", types: ["basic_trigger_tools", "unmatching3", "unmatching41"] },
{ name: "Positive motor speed only", types: ["vehicles", "joints"] },
{ name: "Rectangle interactives only", types: ["basic_interactives"] },
{ name: "Sleeping banned", types: ["basic_interactives", "fixing_type"] }
];
bingoList[7] = [
{ name: "Alignment 3 only", types: ["texts"] },
{ name: "Banned col.: 7", types: ["basic_interactives", "collision"] },
{ name: "Banned tr. action: enable", types: ["basic_trigger_tools"] },
{ name: "Bottlerun incl.", types: ["fixing_type", "unmatching25"] },
{ name: "Forced char.: Irresponsible mum", types: ["character", "unmatching32"] },
{ name: "Hide'n'seek part incl.", types: ["unmatching10"] },
{ name: "Light sources incl.", types: ["unmatching11"] },
{ name: "Max. font size: 20", types: ["width_height", "texts"] },
{ name: "Max. text tools: 5 (no customized fonts)", types: ["texts", "fonts"] },
{ name: "Min. art shape w/h: 25", types: ["basic_art", "width_height"] },
{ name: "No 'collide connected'", types: ["vehicles", "collision", "joints"] },
{ name: "No 'set to vehicle'", types: ["vehicles", "vehicle_condition"] },
{ name: "No orangish colors", types: ["basic_art", "colors"] },
{ name: "No vehicle space/shift/ctrl actions", types: ["vehicles", "vehicle_condition"] },
{ name: "No yellowish colors", types: ["basic_art", "colors"] },
{ name: "One word per line only (texts)", types: ["texts"] },
{ name: "White text only", types: ["texts", "colors"] }
];
bingoList[8] = [
{ name: "Art style: Minimalistic", types: ["basic_art", "colors"] },
{ name: "Banned col.: 1", types: ["basic_interactives", "collision"] },
{ name: "Banned tr. action: ch. op.", types: ["basic_trigger_tools", "opacity"] },
{ name: "Banned tr. action: disable", types: ["basic_trigger_tools"] },
{ name: "Colorful text only", types: ["texts", "colors"] },
{ name: "Customized font", types: ["fonts", "unmatching22"] },
{ name: "Horizontal sliding joints only", types: ["vehicles", "joints"] },
{ name: "Interactives den.: 0.1", types: ["basic_interactives", "unmatching2", "density"] },
{ name: "Intro incl.", types: ["texts"] },
{ name: "Max. editor space: height: 2000", types: ["width_height", "editor_limits", "unmatching37"] },
{ name: "Max. motor torque: 100", types: ["vehicles", "joints"] },
{ name: "Music/beat incl.", types: ["basic_trigger_tools", "unmatching3"] },
{ name: "No bluish colors", types: ["basic_art", "colors"] },
{ name: "No greenish colors", types: ["basic_art", "colors"] },
{ name: "No groups with fixed angle", types: ["fixing_type", "groups"] },
{ name: "No reddish colors", types: ["basic_art", "colors"] },
{ name: "Playable char.: Pogostick man", types: ["character", "unmatching25", "unmatching35"] },
{ name: "Playable char.: Wheelchair guy", types: ["character", "unmatching25", "unmatching32"] },
{ name: "Throwing game incl.", types: ["unmatching12", "unmatching13", "unmatching14"] }
];
bingoList[9] = [
{ name: "10 colors only", types: ["basic_art", "colors"] },
{ name: "All movement special items", types: ["special_items"] },
{ name: "Boss battle incl. (2 attacks min.)", types: ["unmatching15", "unmatching30"] },
{ name: "Green hills background", types: ["basic_art", "environment"] },
{ name: "Max. art shape w/h: 100", types: ["basic_art", "width_height"] },
{ name: "Max. interactives w/h: 200", types: ["width_height", "basic_interactives"] },
{ name: "Max. motor speed amount: 1", types: ["vehicles", "joints"] },
{ name: "Max. targets per tr.: 5", types: ["basic_trigger_tools"] },
{ name: "Min. 5 coins victory", types: ["victory", "unmatching20", "unmatching40"] },
{ name: "Min. art left: 9000", types: ["basic_art", "editor_limits"] },
{ name: "Min. font size: 30", types: ["width_height", "texts"] },
{ name: "No foreground groups", types: ["groups", "unmatching16"] },
{ name: "No numbers (texts)", types: ["texts"] },
{ name: "No punctuation marks (texts)", types: ["texts"] },
{ name: "No repeat type 2", types: ["basic_trigger_tools"] },
{ name: "Playable char.: Irresponsible mum", types: ["character", "unmatching32"] },
{ name: "Randomized event incl.", types: ["unmatching17"] },
{ name: "Secret victory incl.", types: ["victory"] },
{ name: "Triggered by 3 only", types: ["basic_trigger_tools", "unmatching3", "unmatching41"] }
];
bingoList[10] = [
{ name: "All blade weapons", types: ["special_items"] },
{ name: "Art style: 'Badland'", types: ["basic_art", "colors"] },
{ name: "Art style: Comic", types: ["basic_art", "colors"] },
{ name: "Art style: Realistic", types: ["basic_art", "colors"] },
{ name: "Art style: Three-dimensional", types: ["basic_art", "colors"] },
{ name: "City background", types: ["basic_art", "environment"] },
{ name: "Forced char.: Helicopter man", types: ["character", "unmatching25", "unmatching27", "unmatching35"] },
{ name: "Forced char.: Moped couple", types: ["character", "unmatching32"] },
{ name: "Main movement: down", types: ["movement", "unmatching37"] },
{ name: "Max. motor torque: 5", types: ["vehicles", "joints"] },
{ name: "Min. motor speed amount: 20", types: ["vehicles", "joints"] },
{ name: "Triggered by 4 only", types: ["basic_trigger_tools", "unmatching3", "unmatching41"] }
];
bingoList[11] = [
{ name: "All hazards", types: ["unmatching8", "special_items", "unmatching18"] },
{ name: "Art style: Pixels", types: ["basic_art", "colors"] },
{ name: "Art style: Scribbled", types: ["basic_art", "colors"] },
{ name: "Building time: 5 days", types: ["building_time"] },
{ name: "Col. 1 only", types: ["basic_interactives", "collision"] },
{ name: "Forced char.: Lawnmower man", types: ["character", "unmatching32"] },
{ name: "Level mood: dark", types: ["colors"] },
{ name: "Level mood: happy", types: ["colors", "unmatching19"] },
{ name: "Main environment: inside a building", types: ["environment"] },
{ name: "Main environment: nature", types: ["environment"] },
{ name: "Min. interactives den.: 100", types: ["basic_interactives", "density", "unmatching12"] },
{ name: "No repeat type 1", types: ["basic_trigger_tools"] },
{ name: "No sliding joints", types: ["vehicles", "joints"] },
{ name: "No special items", types: ["unmatching5", "unmatching8", "special_items", "unmatching20"] },
{ name: "No text tool", types: ["texts", "fonts"] },
{ name: "No tr. clocks", types: ["basic_trigger_tools", "unmatching3", "unmatching41"] },
{ name: "No vocals (a, e, i, o, u)", types: ["texts"] },
{ name: "Triggered by 2 only", types: ["basic_trigger_tools", "unmatching3", "unmatching41"] }
];
bingoList[12] = [
{ name: "All miscellaneous special items", types: ["special_items"] },
{ name: "Art style: Colorful", types: ["basic_art", "colors"] },
{ name: "Color bar left half only (red-cyan)", types: ["basic_art", "colors"] },
{ name: "Main environment: city", types: ["environment"] },
{ name: "Max. text tools: 1 (no customized fonts)", types: ["texts", "fonts"] },
{ name: "Max. tr.: 50", types: ["basic_trigger_tools", "editor_limits"] },
{ name: "Min. shapes left: 450", types: ["editor_limits", "basic_interactives"] },
{ name: "No motors", types: ["vehicles", "joints"] },
{ name: "No tr. delay", types: ["basic_trigger_tools"] },
{ name: "Playable char.: Moped couple", types: ["character", "unmatching32"] },
{ name: "Text rotation: 90 and -90 degrees.", types: ["rotation", "texts"] }
];
bingoList[13] = [
{ name: "All 16 NPCs", types: ["special_items"] },
{ name: "Art style: Outlines only", types: ["basic_art", "colors"] },
{ name: "Banned tr. action: activate", types: ["basic_trigger_tools"] },
{ name: "Bluish colors only", types: ["basic_art", "colors"] },
{ name: "Color bar right half only (cyan-red)", types: ["basic_art", "colors"] },
{ name: "Dark colors only", types: ["basic_art", "colors"] },
{ name: "Forced char.: Effective shopper", types: ["character", "unmatching32"] },
{ name: "Forced char.: Indiana Jones", types: ["character", "unmatching32"] },
{ name: "Greenish colors only", types: ["basic_art", "colors"] },
{ name: "Hide vehicle: true", types: ["vehicles", "character", "unmatching25", "unmatching32"] },
{ name: "Level mood: sad", types: ["colors"] },
{ name: "Main environment: forest", types: ["environment"] },
{ name: "Main movement: left", types: ["movement", "unmatching38"] },
{ name: "Min. art left: 9500", types: ["basic_art", "editor_limits"] },
{ name: "No overlapping art shapes", types: ["basic_art"] },
{ name: "No pin joints", types: ["vehicles", "joints"] },
{ name: "Playable char.: Lawnmower man", types: ["character", "unmatching32"] },
{ name: "Reddish colors only", types: ["basic_art", "colors"] },
{ name: "Repeat type 2 only", types: ["basic_trigger_tools"] },
{ name: "Slightly saturated colors only", types: ["basic_art", "colors"] },
{ name: "Standard colors only", types: ["basic_art", "colors"] },
{ name: "Triangle interactives only", types: ["basic_interactives"] },
{ name: "Triggered by 1 only", types: ["basic_trigger_tools", "unmatching3", "unmatching41"] }
];
bingoList[14] = [
{ name: "Animated font", types: ["fonts", "unmatching21", "unmatching22"] },
{ name: "Art style: 'Badland' (inverted)", types: ["basic_art", "colors"] },
{ name: "Art style: Abstract", types: ["basic_art", "colors"] },
{ name: "Bright colors only", types: ["basic_art", "colors", "unmatching33"] },
{ name: "Customized char.", types: ["vehicles", "vehicle_condition", "character", "unmatching13", "unmatching16", "unmatching25", "unmatching27", "unmatching32", "unmatching40", "unmatching41", "collision"] },
{ name: "Forced char.: Santa Claus", types: ["character", "unmatching25", "unmatching26", "unmatching27", "unmatching32", "unmatching36"] },
{ name: "Horizontal and vertical interactive edges only", types: ["basic_interactives", "movement"] },
{ name: "Main environment: cave", types: ["environment", "unmatching19", "unmatching23", "unmatching33"] },
{ name: "Main environment: under water", types: ["environment"] },
{ name: "Main movement: up", types: ["movement", "unmatching9", "unmatching28", "unmatching32", "unmatching37"] },
{ name: "Max. art shape w/h: 50", types: ["basic_art", "width_height", "environment"] },
{ name: "Max. editor space: width: 5000", types: ["width_height", "editor_limits", "unmatching38"] },
{ name: "Max. font size: 10", types: ["width_height", "texts"] },
{ name: "Max. targets per tr.: 3", types: ["basic_trigger_tools"] },
{ name: "Min. font size: 50", types: ["width_height", "texts"] },
{ name: "No rotation (interactives)", types: ["rotation", "basic_interactives"] },
{ name: "No touching interactives", types: ["basic_interactives"] },
{ name: "Numbers only (texts)", types: ["texts"] },
{ name: "Orangish colors only", types: ["basic_art", "colors"] },
{ name: "Playable char.: Effective shopper", types: ["character", "unmatching32"] },
{ name: "Repeat type 3 only", types: ["basic_trigger_tools"] },
{ name: "Vehicle ch. during level", types: ["vehicles", "vehicle_condition", "character"] },
];
bingoList[15] = [
{ name: "4-corners art shapes", types: ["basic_art"] },
{ name: "5 colors only", types: ["basic_art", "colors"] },
{ name: "Cyanish colors only", types: ["basic_art", "colors"] },
{ name: "Level mood: dramatic", types: ["colors"] },
{ name: "Main environment: not on earth", types: ["environment", "unmatching23"] },
{ name: "Min. 20 coins victory", types: ["victory", "unmatching20", "unmatching40"] },
{ name: "Min. art shape w/h: 50", types: ["basic_art", "width_height", "unmatching22", "environment"] },
{ name: "No saturation (B'n'W)", types: ["basic_art", "colors"] },
{ name: "Playable char.: Helicopter man", types: ["character", "unmatching25", "unmatching27", "unmatching35"] },
{ name: "Playable char.: Indiana Jones", types: ["character", "unmatching32"] },
{ name: "Purplish colors only", types: ["basic_art", "colors"] },
{ name: "Repeat type 4 only", types: ["basic_trigger_tools"] },
{ name: "Yellowish colors only", types: ["basic_art", "colors"] }
];
bingoList[16] = [
{ name: "Art style: Minimalistic (inverted)", types: ["basic_art", "colors"] },
{ name: "Black outlines forced", types: ["basic_art", "colors"] },
{ name: "Char. moving backwards", types: ["character", "movement"] },
{ name: "Col. 4 only", types: ["basic_interactives", "collision"] },
{ name: "Col. 7 only", types: ["basic_interactives", "collision"] },
{ name: "Level mood: romantic", types: ["colors", "unmatching23"] },
{ name: "Max. editor space: height: 1000", types: ["width_height", "editor_limits", "unmatching35", "unmatching37"] },
{ name: "No art shapes in groups", types: ["basic_art"] },
{ name: "No texts", types: ["texts", "fonts"] },
{ name: "Pinkish colors only", types: ["basic_art", "colors"] },
{ name: "Repeat type 1 only", types: ["basic_trigger_tools", "unmatching41"] }
];
bingoList[17] = [
{ name: "Customized vehicle char.", types: ["vehicles", "vehicle_condition", "character", "unmatching13", "unmatching16", "unmatching27", "unmatching32", "unmatching40", "unmatching41", "collision"] },
{ name: "Highly saturated colors only", types: ["basic_art", "colors"] },
{ name: "Max. targets per tr.: 2", types: ["basic_trigger_tools"] },
{ name: "Max. tr.: 20", types: ["basic_trigger_tools", "editor_limits"] },
{ name: "No joints", types: ["vehicles", "joints", "unmatching34"] },
{ name: "Playable char.: Santa Claus", types: ["character", "unmatching25", "unmatching26", "unmatching27", "unmatching32", "unmatching36"] }
];
bingoList[18] = [
{ name: "Art style: Realistic (inverted)", types: ["basic_art", "colors"] },
{ name: "Max. interactives w/h: 50", types: ["width_height", "basic_interactives"] },
{ name: "Min. interactives w/h: 200", types: ["width_height", "basic_interactives"] },
{ name: "No background art", types: ["basic_art", "environment"] },
{ name: "No interactive groups", types: ["vehicle_condition", "basic_interactives", "groups"] },
{ name: "Triggered by 6 only", types: ["basic_trigger_tools", "unmatching41"] }
];
bingoList[19] = [
{ name: "3 colors only", types: ["basic_art", "colors"] },
{ name: "Building time: 2 days", types: ["building_time"] },
{ name: "Min. art left: 9900", types: ["basic_art", "editor_limits", "unmatching11", "environment"] },
{ name: "Tr. not connectable to tr.", types: ["basic_trigger_tools", "unmatching41"] },
{ name: "White outlines forced", types: ["basic_art", "colors"] }
];
bingoList[20] = [
{ name: "Blank white background", types: ["basic_art", "colors", "environment"] },
{ name: "Customized walking char.", types: ["vehicles", "vehicle_condition", "character", "unmatching13", "unmatching16", "unmatching25", "unmatching27", "unmatching32", "unmatching40", "unmatching41", "collision"] },
{ name: "No touching art shapes", types: ["basic_art"] },
{ name: "Only rect. shapes as art", types: ["basic_art"] },
{ name: "Triggered by 5 only (single triggering)", types: ["basic_trigger_tools", "unmatching6", "unmatching7", "unmatching10", "unmatching15", "unmatching17", "unmatching21", "unmatching41"] }
];
bingoList[21] = [
{ name: "2 colors only", types: ["basic_art", "colors"] },
{ name: "Force char.: false", types: ["character", "unmatching25", "unmatching26", "unmatching27", "unmatching32", "unmatching35", "unmatching36"] },
{ name: "Max. editor space: height: 500", types: ["width_height", "editor_limits", "unmatching35", "unmatching37"] },
{ name: "No fixed interactives", types: ["basic_interactives", "fixing_type", "unmatching34"] },
{ name: "No groups", types: ["basic_art", "vehicle_condition", "groups"] },
];
bingoList[22] = [
{ name: "3 colors only (+op. banned)", types: ["basic_art", "opacity", "colors", "unmatching11"] },
{ name: "Complement outlines forced", types: ["basic_art", "colors"] },
{ name: "Customized flying char.", types: ["vehicles", "vehicle_condition", "character", "unmatching13", "unmatching16", "unmatching25", "unmatching27", "unmatching40", "unmatching41", "collision"] },
{ name: "Max. editor space: width: 1000", types: ["width_height", "editor_limits", "unmatching36", "unmatching38"] },
{ name: "Min. art left: 9980", types: ["basic_art", "editor_limits", "unmatching11", "environment"] },
{ name: "Min. art shape w/h: 100", types: ["basic_art", "width_height", "unmatching22", "environment"] },
{ name: "Pure black/white only", types: ["basic_art", "colors"] }
];
bingoList[23] = [
{ name: "3-corners art shapes", types: ["basic_art"] },
{ name: "Col. 2 only", types: ["basic_interactives", "collision"] },
{ name: "Max. tr.: 5", types: ["basic_trigger_tools", "editor_limits", "unmatching6", "unmatching10", "unmatching41"] },
{ name: "Min. shapes left: 700", types: ["editor_limits", "basic_interactives"] },
{ name: "Tr. only connectable to tr.", types: ["basic_trigger_tools", "unmatching6", "unmatching7", "unmatching10", "unmatching15", "unmatching17", "unmatching21", "unmatching41"] }
];
bingoList[24] = [
{ name: "2 colors only (+op. banned)", types: ["basic_art", "opacity", "colors", "unmatching11"] },
{ name: "No activate object tr.", types: ["basic_trigger_tools", "unmatching41"] },
{ name: "No art shapes", types: ["basic_art", "editor_limits", "unmatching11", "environment"] },
{ name: "No main char.", types: ["character", "unmatching13", "unmatching16", "unmatching25", "unmatching26", "unmatching27", "unmatching29", "unmatching30", "movement", "unmatching31", "unmatching34", "unmatching39", "unmatching40"] }
];
bingoList[25] = [
{ name: "Building time: 12 hours", types: ["building_time"] },
{ name: "Fixed interactives only", types: ["vehicle_condition", "unmatching1", "basic_interactives", "fixing_type", "unmatching3", "unmatching4", "joints", "unmatching14", "unmatching18"] },
{ name: "No tr.", types: ["basic_trigger_tools", "editor_limits", "unmatching6", "unmatching7", "unmatching10", "unmatching15", "unmatching17", "unmatching21", "unmatching41"] },
{ name: "Pure black/white only (+op. banned)", types: ["basic_art", "opacity", "colors", "unmatching11"] }
];
