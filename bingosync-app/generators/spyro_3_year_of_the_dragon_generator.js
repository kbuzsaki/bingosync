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
  { name: "4 Eggs & 300 Gems in Sunny", types: ["max1"] },
  { name: "325 Gems in Sunny Villa", types: ["gem1"] },
  { name: "Lizard Skating I & Bluto", types: ["lizard1","bluto","sunnyseashell"] },
  { name: "Lizard Skating I & Jack II", types: ["lizard1","jack2","sunnycharmed"] },
  { name: "Jack II & Farley", types: ["jack2","farley","enchantedcharmed"] },
  { name: "8 Eggs in Seashell, Crystal & Sheila", types: [] },
  { name: "200 Gems in Both Seashell & Cloud", types: [] },
  { name: "Pay All Moneybags in Midday", types: [] },
  { name: "Both Dino Skill Points", types: [] }
];
bingoList[2] = [
  { name: "100% Seashell Shore", types: ["max1"] },
  { name: "All Eggs in Seashell Shore", types: ["egg1"] },
  { name: "Seashell Tunnel & Lizard Skating II", types: ["stunnel","lizard2","sunnyseashell"] },
  { name: "Seashell Tunnel & Witches", types: ["stunnel","witches","seashellcharmed"] },
  { name: "Lizard Skating II & Ninja HQ", types: ["lizard2","hq","sunnyfireworks"] },
  { name: "7 Eggs in Charmed, Bamboo & Sunny", types: [] },
  { name: "200 Gems in Both Sunny & Molten", types: [] },
  { name: "Skill Points in Molten, Haunted & Bentley", types: [] },
  { name: "Kill All Birds in Icy & Lost", types: [] }
];
bingoList[3] = [
  { name: "100% Frozen Altars", types: ["max2"] },
  { name: "All Gems in Frozen Altars", types: ["gem2"] },
  { name: "Yeti Boxing I & Farley", types: ["yeti1","farley","enchantedfrozen"] },
  { name: "Yeti Boxing I & Tanks II", types: ["yeti1","tanks2","frozenhaunted"] },
  { name: "Tanks II & Sharks", types: ["tanks2","sharks","deserthaunted"] },
  { name: "#BoneDance & Rapunzel", types: ["bone","rapunzel","sunnyenchanted"] },
  { name: "250 Gems in Both Enchanted & Icy", types: [] },
  { name: "3 Combined Rockets & Mystery Jars", types: [] },
  { name: "Pay Moneybags in Desert & Crystal", types: [] }
];
bingoList[4] = [
  { name: "All Eggs & 350 Gems in Bamboo", types: ["max2"] },
  { name: "All Eggs in Bamboo Terrace", types: ["egg1"] },
  { name: "Mountain Top & Bomb Escort II", types: ["mountain","escort2","spookybamboo"] },
  { name: "Mountain Top & You're Doomed II", types: ["mountain","doomed2","spookyfireworks"] },
  { name: "Bomb Escort II & Sand Castle", types: ["escort2","sand","seashellspooky"] },
  { name: "You're Doomed II & Rapunzel", types: ["doomed2","rapunzel","sunnyfireworks"] },
  { name: "700 Combined Gems in Spooky & Sheila", types: [] },
  { name: "3000 Gems", types: [] },
  { name: "All Boulders in Sheila & Spooky Skill Point", types: [] }
];
bingoList[5] = [
  { name: "4 Speedway Eggs", types: [] },
  { name: "2 Speedway Races", types: [] },
  { name: "Hunter Eggs in Mushroom & Harbor", types: [] },
  { name: "Hunter Eggs in Country & Honey", types: [] },
  { name: "Hunter Eggs in Mushroom & Honey", types: [] },
  { name: "Time Attack in 3 Speedways", types: [] },
  { name: "Defeat Buzz & Honey Race", types: [] },
  { name: "Hunter Eggs in Country & Harbor", types: [] }
];
bingoList[6] = [
  { name: "100% Sunrise & Midnight", types: ["hw1"] },
  { name: "100% Midday & Evening", types: ["hw2"] },
  { name: "100% 2 Homeworlds", types: ["hw1"] },
  { name: "15 Homeworld Eggs", types: ["hw3"] },
  { name: "1000 Homeworld Gems", types: ["hw3"] },
  { name: "Use Powerups in 6 Levels", types: ["hw3"] },
  { name: "Enter 3 Inactive Portals", types: ["hw3"] }
];
bingoList[7] = [
  { name: "4 Blue Egg Thieves", types: [] },
  { name: "6 Egg Thieves", types: [] },
  { name: "8 Balloon Bottles", types: [] },
  { name: "Destroy a Strong Chest in 5 Levels", types: ["misc1"] },
  { name: "Play as All 6 Side Characters", types: [] },
  { name: "Talk to Zoe in 6 Levels", types: ["misc2"] },
  { name: "Hunter Eggs in 4 Levels", types: [] },
  { name: "Pay Moneybags 5 Times", types: [] },
  { name: "8 Skill Points", types: [] }
];
bingoList[8] = [
  { name: "5 Eggs & 600 Gems in Dino", types: ["max3"] },
  { name: "All Eggs in Dino Mines", types: ["egg2"] },
  { name: "Dino Tunnel & Subs II", types: ["dtunnel","subs2","lostdino"] },
  { name: "Dino Tunnel & Snakes", types: ["dtunnel","snakes","haunteddino"] },
  { name: "Subs II & Sun Seeds", types: ["subs2","seeds","cloudlost"] },
  { name: "8 Eggs in Haunted, Icy & Spooky", types: [] },
  { name: "450 Gems in Both Haunted & Desert", types: [] },
  { name: "All Birds in Icy & Lost", types: [] },
  { name: "35 Eggs", types: [] }
];
bingoList[9] = [
  { name: "Starfish Reef Egg", types: [] },
  { name: "150 Gems in Spider Town", types: ["sparx2"] },
  { name: "100 Gems in Starfish Reef", types: [] },
  { name: "350 Combined Sparx Level Gems", types: ["sparx2"] },
  { name: "2 Eggs or 250 Combined Gems in Sparx Levels", types: ["sparx2"] },
  { name: "100% Spider Town", types: ["sparx2"] },
  { name: "150 Gems in Crawdad and Spider Town Egg", types: ["sparx2"] }
];
bingoList[10] = [
  { name: "100% Molten Crater", types: ["max1"] },
  { name: "All Gems in Molten Crater", types: ["gem1"] },
  { name: "Tiki Heads & Sleepy Head", types: ["tiki","sleepy","moltenspooky"] },
  { name: "Tiki Heads & Sun Seeds", types: ["tiki","seeds","cloudmolten"] },
  { name: "6 Eggs in Spooky & Icy", types: [] },
  { name: "7 Eggs in Cloud & Icy", types: [] },
  { name: "600 Combined Gems in Cloud & Agent 9", types: [] },
  { name: "Both Sunny Skill Points", types: [] },
  { name: "Press All Buttons", types: [] }
];
bingoList[11] = [
  { name: "100% Cloud Spires", types: ["max1"] },
  { name: "All Gems in Cloud Spires", types: ["gem1"] },
  { name: "Spirits & Enchanted Skate II", types: ["spirits","eskate2","cloudenchanted"] },
  { name: "Spirits & Witches", types: ["spirits","witches","cloudcharmed"] },
  { name: "Enchanted Skate II & Haunted Slide", types: ["eskate2","hslide","enchantedhaunted"] },
  { name: "7 Eggs in Charmed, Dino & Bentley", types: [] },
  { name: "800 Combined Gems in Charmed & Crystal", types: [] },
  { name: "15 Sunrise Eggs", types: [] },
  { name: "Use all Invincibility & Superfly Powerups", types: [] }
];
bingoList[12] = [
  { name: "All Eggs & 400 Gems in Icy", types: ["max1"] },
  { name: "All Eggs in Icy Peak", types: ["egg1"] },
  { name: "Nancy & Bluto", types: ["nancy","bluto","seashellicy"] },
  { name: "Nancy & Panda Autoscroller", types: ["nancy","panda","icybamboo"] },
  { name: "Sand Castle & Twin Dragons", types: ["sand","dragons","seashellfireworks"] },
  { name: "6 Eggs in Bamboo & Cloud", types: [] },
  { name: "800 Combined Gems in Bamboo & Bentley", types: [] },
  { name: "15 Midday Eggs", types: [] },
  { name: "15,000 Points in Skating", types: [] }
];
bingoList[13] = [
  { name: "5 Eggs & 600 Gems in Haunted", types: ["max3"] },
  { name: "All Eggs in Haunted Tomb", types: ["egg2"] },
  { name: "Tanks I & #BoneDance", types: ["tanks1","bones","enchantedhaunted"] },
  { name: "Tanks I & Boats", types: ["tanks1","boats","hauntedlab"] },
  { name: "6 Eggs in Molten & Frozen", types: [] },
  { name: "7 Eggs in Haunted & Molten", types: [] },
  { name: "500 Combined Gems in Icy & Seashell", types: [] },
  { name: "Unlock 3 Locked Chests", types: [] },
  { name: "Pay Moneybags in Molten, Icy & Frozen", types: [] }
];
bingoList[14] = [
  { name: "4 Eggs & 300 Gems in Enchanted", types: ["max2"] },
  { name: "4 Eggs in Enchanted Towers", types: ["egg1"] },
  { name: "Enchanted Skate I & Rhynoc Race", types: ["eskate1","rhynoc","enchantedlost"] },
  { name: "Enchanted Skate I & Yeti Boxing II", types: ["eskate1","yeti2","enchantedfrozen"] },
  { name: "Yeti Boxing II & Sharks", types: ["yeti2","sharks","frozendesert"] },
  { name: "Rhynoc Race & Sleepy Head", types: ["rhynoc","sleepy","spookylost"] },
  { name: "300 Gems in Both Lost & Charmed", types: [] },
  { name: "3 Combined Bosses & Minibosses", types: [] },
  { name: "Funky Chicken & Bonk the Chicken", types: [] }
];
bingoList[15] = [
  { name: "4 Eggs & 400 Gems in Spooky", types: ["max2"] },
  { name: "All Gems in Spooky Swamp", types: ["gem1"] },
  { name: "Bomb Escort I & Panda Autoscroller", types: ["escort1","panda","spookybamboo"] },
  { name: "Bomb Escort I & Whack a Mole", types: ["escort1","mole","spookycrystal"] },
  { name: "7 Eggs in Bamboo & Molten", types: [] },
  { name: "7 Eggs in Crystal & Dino", types: [] },
  { name: "700 Combined Gems in Crystal & Sgt. Byrd", types: [] },
  { name: "Moneybags Egg", types: [] },
  { name: "Light All Firework Bottles & Use All Fireball Powerups", types: [] }
];
bingoList[16] = [
  { name: "All Eggs & 550 Gems in Crystal", types: ["max3"] },
  { name: "600 Gems in Crystal Islands", types: ["gem2"] },
  { name: "Crystal Slide & Hunter Race", types: ["cslide","hrace","lostcrystal"] },
  { name: "Crystal Slide & Rail Shooter", types: ["cslide","rail","crystaldino"] },
  { name: "Hunter Race & Haunted Slide", types: ["hrace","hslide","losthaunted"] },
  { name: "8 Eggs in Dino, Cloud & Bentley", types: [] },
  { name: "800 Combined Gems in Dino & Bamboo", types: [] },
  { name: "15 Midnight Eggs", types: [] },
  { name: "10 Balloon Bottles", types: [] }
];
bingoList[17] = [
  { name: "3 Eggs & 350 Gems in Lost", types: ["max3"] },
  { name: "4 Eggs in Lost Fleet", types: ["egg2"] },
  { name: "Subs I & Sidescroller II", types: ["subs1","sidescroll2","lostdesert"] },
  { name: "Subs I & Hummingbirds", types: ["subs1","humming","baselost"] },
  { name: "Sidescroller II & Cat Hockey", types: ["sidescroll2","hockey","frozendesert"] },
  { name: "6 Eggs in Icy & Sunny", types: [] },
  { name: "800 Combined Gems in Desert & Spooky", types: [] },
  { name: "7 Eggs from Each Homeworld", types: [] },
  { name: "Pay Moneybags in Cloud, Charmed & Desert", types: [] }
];
bingoList[18] = [
  { name: "1000 Sunrise Gems", types: ["hw1"] },
  { name: "1200 Midday Gems", types: ["hw2"] },
  { name: "1400 Evening Gems", types: ["hw2"] },
  { name: "1600 Midnight Gems", types: ["hw1"] },
  { name: "Buy Sgt. Byrd with 25 Eggs", types: ["hw3"] },
  { name: "Buy Bentley with 20 Eggs", types: ["hw3"] }
];
bingoList[19] = [
  { name: "Enter 8 Return Home Portals", types: [] },
  { name: "18 Strong Chests", types: ["misc1"] },
  { name: "13 Butterfly Jars", types: [] },
  { name: "13 Headbash Chests", types: [] },
  { name: "6 Mouth Items", types: [] },
  { name: "8 Cracked Walls/Floors", types: [] },
  { name: "Swim Underwater in 7 Levels", types: ["misc2"] },
  { name: "Use Whirlwinds in 7 Levels", types: ["misc2"] }
];
bingoList[20] = [
  { name: "100% Desert Ruins", types: ["max3"] },
  { name: "All Eggs in Desert Ruins", types: ["egg2"] },
  { name: "Sidescroller I & Rail Shooter", types: ["sidscroll1","rail","desertdino"] },
  { name: "Sidescroller I & Twin Dragons", types: ["sidescroll1","dragons","fireworksdesert"] },
  { name: "Ninja HQ & Snakes", types: ["hq","snakes","fireworkshaunted"] },
  { name: "8 Eggs in Dino, Bamboo & Sheila", types: [] },
  { name: "300 Gems in Both Fireworks & Frozen", types: [] },
  { name: "4 Midnight End of Level Eggs", types: [] },
  { name: "Pay Moneybags 2400 Gems", types: [] }
];
bingoList[21] = [
  { name: "2 Agent 9 Skill Points", types: ["side4"] },
  { name: "2 Sgt. Byrd Skill Points", types: ["side2"] },
  { name: "7 Sheila Eggs", types: ["side1"] },
  { name: "3 Sgt. Byrd Eggs", types: ["side2"] },
  { name: "Bentley Eggs in 2 Side Areas", types: ["side3"] },
  { name: "4 Agent 9 Eggs", types: ["side4"] }
];
bingoList[22] = [
  { name: "4 Eggs & 500 Gems in Charmed", types: ["max3"] },
  { name: "500 Gems in Charmed Ridge", types: ["gem2"] },
  { name: "Jack I & Cat Hockey", types: ["jack1","hockey","frozencharmed"] },
  { name: "Jack I & Boats", types: ["jack1","boats","charmedlab"] },
  { name: "6 Eggs in Frozen & Icy", types: [] },
  { name: "8 Eggs in Molten & Icy", types: [] },
  { name: "700 Combined Gems in Frozen & Sunny", types: [] },
  { name: "15 Evening Eggs", types: [] },
  { name: "Kill All Enemies in Haunted Main Area", types: [] }
];
bingoList[23] = [
  { name: "3 Eggs & 350 Gems in Fireworks", types: ["max2"] },
  { name: "4 Eggs in Fireworks Factory", types: ["egg2"] },
  { name: "You're Doomed I & Whack a Mole", types: ["doomed1","mole","fireworkscrystal"] },
  { name: "You're Doomed I & Hummingbirds", types: ["doomed1","humming","basefireworks"] },
  { name: "7 Eggs in Molten & Desert", types: [] },
  { name: "7 Eggs in Crystal & Desert", types: [] },
  { name: "500 Combined Gems in Molten & Lost", types: [] },
  { name: "Defeat Scorch with only Green Rockets", types: [] },
  { name: "Buy a Character & Pay Moneybags in Cloud & Crystal", types: [] }
];
bingoList[24] = [
  { name: "Buy Agent 9 & Sheila", types: ["side1", "side4"] },
  { name: "Enter All 4 Side Character Levels", types: [] },
  { name: "100% Sheila's Alp", types: ["side1", "max1"] },
  { name: "100% Bentley's Outpost", types: ["side3", "max2"] },
  { name: "Buy Bentley & Sgt. Byrd", types: ["side2", "side3"] },
  { name: "Agent 9's Lab Skill Point", types: ["side4"] }
];
bingoList[25] = [
  { name: "Harbor Race & Crawdad Egg", types: ["sparx1"] },
  { name: "Spider Town Egg & Beat Spike", types: ["sparx2"] },
  { name: "Beat 4 Combined Bosses & Sparx Bosses", types: [] },
  { name: "500 Combined Gems in Crawdad & Sheila", types: ["sparx1"] },
  { name: "5 Combined Speedway & Sparx Eggs", types: [] },
  { name: "Spider Town Egg & Mushroom Time Attack", types: ["sparx2"] },
  { name: "Enter Bugbot Factory", types: [] }
];