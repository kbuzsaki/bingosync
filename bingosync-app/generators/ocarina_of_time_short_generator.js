(function(j,i,g,m,k,n,o){function q(b){var e,f,a=this,c=b.length,d=0,h=a.i=a.j=a.m=0;a.S=[];a.c=[];for(c||(b=[c++]);d<g;)a.S[d]=d++;for(d=0;d<g;d++)e=a.S[d],h=h+e+b[d%c]&g-1,f=a.S[h],a.S[d]=f,a.S[h]=e;a.g=function(b){var c=a.S,d=a.i+1&g-1,e=c[d],f=a.j+e&g-1,h=c[f];c[d]=h;c[f]=e;for(var i=c[e+h&g-1];--b;)d=d+1&g-1,e=c[d],f=f+e&g-1,h=c[f],c[d]=h,c[f]=e,i=i*g+c[e+h&g-1];a.i=d;a.j=f;return i};a.g(g)}function p(b,e,f,a,c){f=[];c=typeof b;if(e&&c=="object")for(a in b)if(a.indexOf("S")<5)try{f.push(p(b[a],e-1))}catch(d){}return f.length?f:b+(c!="string"?"\0":"")}function l(b,e,f,a){b+="";for(a=f=0;a<b.length;a++){var c=e,d=a&g-1,h=(f^=e[a&g-1]*19)+b.charCodeAt(a);c[d]=h&g-1}b="";for(a in e)b+=String.fromCharCode(e[a]);return b}i.seedrandom=function(b,e){var f=[],a;b=l(p(e?[b,j]:arguments.length?b:[(new Date).getTime(),j,window],3),f);a=new q(f);l(a.S,j);i.random=function(){for(var c=a.g(m),d=o,b=0;c<k;)c=(c+b)*g,d*=g,b=a.g(1);for(;c>=n;)c/=2,d/=2,b>>>=1;return(c+b)/d};return b};o=i.pow(g,m);k=i.pow(2,k);n=k*2;l(i.random(),j)})([],Math,256,6,52);
//NOTICE: As of version 6, this script will only generate cards correctly for Ocarina of Time bingo
//and as such should be saved alongside the regular bingo script.


// 100 is way higher than would ever be allowed, so use it
// as a signal to get out
var TOO_MUCH_SYNERGY = 100;

// the number of squares in a row on the board
// might change in the future if we want to support arbitrarily sized boards
var SQUARES_PER_ROW = 5;

/*
 * Profile Format:
 *
 * defaultMinimumSynergy: the minimum synergy allowed in any one row
 * defaultMaximumSynergy: the maximum synergy allowed in any one row
 * defaultMaximumIndividualSynergy: the maximum synergy allowed between a pair of goals
 * defaultMaximumSpill:   the maximum allowed spill up in difficulty when choosing a goal
 * defaultInitialOffset:  the initial deviation from the desired time to allow when choosing a goal
 * defaultMaximumOffset:  the maximum allowed deviation from the desired time when choosing a goal
 * baselineTime:          the base amount of time that is factored in to account for starting / common setup
 * timePerDifficulty:     the ratio between time and difficulty
 */
var DEFAULT_PROFILE = {
    defaultMinimumSynergy: -3,
    defaultMaximumSynergy: 7,
    defaultMaximumIndividualSynergy: 3.75,
    defaultMaximumSpill: 2,
    defaultInitialOffset: 1,
    defaultMaximumOffset: 2,
    baselineTime: 27.75,
    timePerDifficulty: 0.75
};

var NORMAL_PROFILE = {
    defaultMinimumSynergy: DEFAULT_PROFILE.defaultMinimumSynergy,
    defaultMaximumSynergy: DEFAULT_PROFILE.defaultMaximumSynergy,
    defaultMaximumIndividualSynergy: DEFAULT_PROFILE.defaultMaximumIndividualSynergy,
    defaultMaximumSpill: DEFAULT_PROFILE.defaultMaximumSpill,
    defaultInitialOffset: DEFAULT_PROFILE.defaultInitialOffset,
    defaultMaximumOffset: DEFAULT_PROFILE.defaultMaximumOffset,
    baselineTime: DEFAULT_PROFILE.baselineTime,
    timePerDifficulty: DEFAULT_PROFILE.timePerDifficulty
};

var SHORT_PROFILE = {
    defaultMinimumSynergy: DEFAULT_PROFILE.defaultMinimumSynergy,
    defaultMaximumSynergy: 3,
    defaultMaximumIndividualSynergy: DEFAULT_PROFILE.defaultMaximumIndividualSynergy,
    defaultMaximumSpill: DEFAULT_PROFILE.defaultMaximumSpill,
    defaultInitialOffset: DEFAULT_PROFILE.defaultInitialOffset,
    defaultMaximumOffset: DEFAULT_PROFILE.defaultMaximumOffset,
    baselineTime: 12,
    timePerDifficulty: 0.5
};

var BLACKOUT_PROFILE = {
    defaultMinimumSynergy: -10,
    defaultMaximumSynergy: 10,
    defaultMaximumIndividualSynergy: 4.5,
    defaultMaximumSpill: 4,
    defaultInitialOffset: 2,
    defaultMaximumOffset: 6,
    baselineTime: DEFAULT_PROFILE.baselineTime,
    timePerDifficulty: DEFAULT_PROFILE.timePerDifficulty
};

var SHORTBLACKOUT_PROFILE = {
    defaultMinimumSynergy: -4,
    defaultMaximumSynergy: 4,
    defaultMaximumIndividualSynergy: DEFAULT_PROFILE.defaultMaximumIndividualSynergy,
    defaultMaximumSpill: DEFAULT_PROFILE.defaultMaximumSpill,
    defaultInitialOffset: 2,
    defaultMaximumOffset: 6,
    baselineTime: 12,
    timePerDifficulty: 0.5
};

Array.prototype.sortNumerically = function() {
    return this.sort(function(a, b) {
        return a - b;
    });
};

Array.prototype.shuffled = function() {
    var toShuffle = this.slice();
    for (var i = 0; i < toShuffle.length; i++) {
        var randElement = Math.floor(Math.random() * (i + 1));
        var temp = toShuffle[i];
        toShuffle[i] = toShuffle[randElement];
        toShuffle[randElement] = temp;
    }
    return toShuffle;
};

function hasDuplicateStrings(array) {
    var seen = {};

    for (var i = 0; i < array.length; i++) {
        var el = array[i];
        if (el in seen) {
            return true;
        }
        seen[el] = true;
    }

    return false;
};

//giuocob 16-8-12: lineCheckList[] has been replaced to allow for removal of all-child rows
//Note: the INDICES_PER_ROW relation is simply the inverse of the ROWS_PER_INDEX relation
var INDICES_PER_ROW = {
    "row1": [1, 2, 3, 4, 5],
    "row2": [6, 7, 8, 9, 10],
    "row3": [11, 12, 13, 14, 15],
    "row4": [16, 17, 18, 19, 20],
    "row5": [21, 22, 23, 24, 25],
    "col1": [1, 6, 11, 16, 21],
    "col2": [2, 7, 12, 17, 22],
    "col3": [3, 8, 13, 18, 23],
    "col4": [4, 9, 14, 19, 24],
    "col5": [5, 10, 15, 20, 25],
    "tlbr": [1, 7, 13, 19, 25],
    "bltr": [5, 9, 13, 17, 21]
};

//Given an object that maps keys to flat arrays, invert said object
function invertObject(obj) {
    var ret = {};
    Object.keys(obj).forEach(function (key) {
        obj[key].forEach(function (item) {
            if (!ret[item]) ret[item] = [];
            ret[item].push(key);
        });
    });
    return ret;
}

// a mapping from board slot to the rows that it's a part of
// for example, ROWS_PER_INDEX[1] returns ["row1", "col1", "tlbr"]
var ROWS_PER_INDEX = invertObject(INDICES_PER_ROW);

var BingoGenerator = function(bingoList, options) {
    if (!options) {
        options = {};
    }

    this.language = options.lang || 'name';
    this.mode = options.mode || 'short';
    this.seed = options.seed || Math.ceil(999999 * Math.random()).toString();

    if (bingoList.info && bingoList.info.combined === 'true') {
        if (bingoList[this.mode]) {
            bingoList = bingoList[this.mode];
        }
        else if (bingoList["normal"]) {
            bingoList = bingoList["normal"];
        }
        else {
            console.log("bingoList doesn't contain a valid sub goal list for mode: \"" + this.mode + "\"");
        }
    }

    this.goalsByDifficulty = bingoList;
    this.rowtypeTimeSave = bingoList.rowtypes;
    this.synergyFilters = bingoList.synfilters || {};

    // assemble a list of all goals sorted by the goals' times
    this.goalsList = [];
    for (var i = 1; i <= 25; i++) {
        this.goalsList = this.goalsList.concat(bingoList[i]);
    }
    this.goalsList.sort(function(a, b) {
        var timeDiff = a.time - b.time;

        if (timeDiff !== 0) {
            return timeDiff;
        }

        if (a.id > b.id) {
            return 1;
        }
        else if (a.id < b.id) {
            return -1;
        }
        else {
            return 0;
        }
    });

    this.goalsByName = {};
    for (var i = 0; i < this.goalsList.length; i++) {
        var goal = this.goalsList[i];
        this.goalsByName[goal.name] = goal;
    }

    this.profile = NORMAL_PROFILE;
    if (this.mode === 'short') {
        this.profile = SHORT_PROFILE;
    }
    else if (this.mode === 'blackout') {
        this.profile = BLACKOUT_PROFILE;
    }

    this.baselineTime = options.baselineTime || this.profile.baselineTime;
    this.timePerDifficulty = options.timePerDifficulty || this.profile.timePerDifficulty;

    this.minimumSynergy = options.minimumSynergy || this.profile.defaultMinimumSynergy;
    this.maximumSynergy = options.maximumSynergy || this.profile.defaultMaximumSynergy;
    this.maximumIndividualSynergy = options.maximumIndividualSynergy || this.profile.defaultMaximumIndividualSynergy;
    this.maximumSpill = options.maximumSpill || this.profile.defaultMaximumSpill;
    this.initialOffset = options.initialOffset || this.profile.defaultInitialOffset;
    this.maximumOffset = options.maximumOffset || this.profile.defaultMaximumOffset;

    Math.seedrandom(this.seed);
};

//Main entry point
BingoGenerator.prototype.makeCard = function() {
    // set up the bingo board by filling in the difficulties based on a magic square
    this.bingoBoard = this.generateMagicSquare();

    // fill in the goals of the board in a random order
    var populationOrder = this.generatePopulationOrder();
    for (var i = 1; i <= 25; i++) {
        var nextPosition = populationOrder[i];

        var result = this.chooseGoalForPosition(nextPosition);

        if (result.goal) {
            // copy the goal data into the square
            this.bingoBoard[nextPosition].types = result.goal.types;
            this.bingoBoard[nextPosition].subtypes = result.goal.subtypes;
            this.bingoBoard[nextPosition].rowtypes = result.goal.rowtypes;
            this.bingoBoard[nextPosition].name = result.goal[this.language] || result.goal.name;
            this.bingoBoard[nextPosition].id = result.goal.id;
            this.bingoBoard[nextPosition].time = result.goal.time;
            this.bingoBoard[nextPosition].goal = result.goal;

            // also copy the synergy
            this.bingoBoard[nextPosition].synergy = result.synergy;
        }
        else {
            return false;
        }
    }

    return this.bingoBoard;
};

/**
 * Generate an initial magic square of difficulties based on the random seed
 * @returns {Array}
 */
BingoGenerator.prototype.generateMagicSquare = function() {
    var magicSquare = [];

    for (var i = 1; i <= 25; i++) {
        var difficulty = this.difficulty(i);

        magicSquare[i] = {
            difficulty: difficulty,
            desiredTime: difficulty * this.timePerDifficulty
        };
    }

    return magicSquare;
};

function weightedShuffle(arr) {
    return arr.map(function(el) {
            var sortVal = (el.weight || 0) + Math.random() + Math.random() + Math.random() + Math.random() - 2;
            return {
                el: el,
                sortVal: sortVal
            };
        })
        .sort(function(pair1, pair2) {
            var sv1 = pair1.sortVal;
            var sv2 = pair2.sortVal;
            return sv2 - sv1;
        })
        .map(function(pair) {
            return pair.el;
        });
}

/**
 * Given a position on the board, chooses a goal that can be placed in that position without
 * blowing our synergy budget.
 * @param position  the position on the board that we want to find a goal for
 * @returns  {goal, synergy} or false
 */
BingoGenerator.prototype.chooseGoalForPosition = function(position) {
    var desiredDifficulty = this.bingoBoard[position].difficulty;
    var desiredTime = desiredDifficulty * this.timePerDifficulty;

    // scan through the acceptable difficulty ranges
    for (var offset = this.initialOffset; offset <= this.maximumOffset; offset++) {
        var minTime = desiredTime - offset;
        var maxTime = desiredTime + offset;

        var goalsAtTime = this.getGoalsInTimeRange(minTime, maxTime);
        goalsAtTime = weightedShuffle(goalsAtTime);

        // scan through each goal at this difficulty level
        for (var j = 0; j < goalsAtTime.length; j++) {
            var goal = goalsAtTime[j];

            // don't allow duplicates of goals
            if (this.hasGoalOnBoard(goal)) {
                continue;
            }

            // in blackout mode, don't allow goals that conflict with each other, e.g. 8 hearts and 9 hearts,
            // even if they are in different rows
            if (this.mode === 'blackout') {
                if (this.hasConflictsOnBoard(goal)) {
                    continue;
                }
						}

            var synergies = this.checkLine(position, goal);

            if (this.maximumSynergy >= synergies.maxSynergy && synergies.minSynergy >= this.minimumSynergy) {
                return {goal: goal, synergy: synergies.maxSynergy};
            }
        }
    }

    return false;
};

/**
 * Generate a semi-random order to populate the bingo board goals in
 * @returns {Array}
 */
BingoGenerator.prototype.generatePopulationOrder = function() {
    //giuocob 19-2-13: this.bingoBoard is no longer populated left to right:
    //It is now populated mostly randomly, with high difficult goals and
    //goals on the diagonals out in front

    //Populate center first
    var populationOrder = [];
    populationOrder[1] = 13;

    //Next populate diagonals
    var diagonals = [1, 7, 19, 25, 5, 9, 17, 21].shuffled();
    populationOrder = populationOrder.concat(diagonals);

    //Finally add the rest of the squares
    var nondiagonals = [2, 3, 4, 6, 8, 10, 11, 12, 14, 15, 16, 18, 20, 22, 23, 24].shuffled();
    populationOrder = populationOrder.concat(nondiagonals);

    //Lastly, find location of difficulty 23,24,25 elements and put them out front
    for (var k = 23; k <= 25; k++) {
        var currentSquare = this.getDifficultyIndex(k);
        if (currentSquare === 0) continue;
        for (var i = 1; i < 25; i++) {
            if (populationOrder[i] == currentSquare) {
                populationOrder.splice(i, 1);
                break;
            }
        }
        populationOrder.splice(1, 0, currentSquare);
    }

    return populationOrder;
};

// uses a magic square to calculate the intended difficulty of a location on the bingo board
BingoGenerator.prototype.difficulty = function(i) {
    // To create the magic square we need 2 random orderings of the numbers 0, 1, 2, 3, 4.
    // The following creates those orderings and calls them Table5 and Table1

    var Num3 = this.seed % 1000; // Table5 will use the ones, tens, and hundreds digits.

    var Rem8 = Num3 % 8;
    var Rem4 = Math.floor(Rem8 / 2);
    var Rem2 = Rem8 % 2;
    var Rem5 = Num3 % 5;
    var Rem3 = Num3 % 3;    // Note that Rem2, Rem3, Rem4, and Rem5 are mathematically independent.
    var RemT = Math.floor(Num3 / 120);  // This is between 0 and 8

    // The idea is to begin with an array containing a single number, 0.
    // Each number 1 through 4 is added in a random spot in the array's current size.
    // The result - the numbers 0 to 4 are in the array in a random (and uniform) order.
    var Table5 = [0];
    Table5.splice(Rem2, 0, 1);
    Table5.splice(Rem3, 0, 2);
    Table5.splice(Rem4, 0, 3);
    Table5.splice(Rem5, 0, 4);

    Num3 = Math.floor(this.seed / 1000); // Table1 will use the next 3 digits.
    Num3 = Num3 % 1000;

    Rem8 = Num3 % 8;
    Rem4 = Math.floor(Rem8 / 2);
    Rem2 = Rem8 % 2;
    Rem5 = Num3 % 5;
    Rem3 = Num3 % 3;
    RemT = RemT * 8 + Math.floor(Num3 / 120);   // This is between 0 and 64.

    var Table1 = [0];
    Table1.splice(Rem2, 0, 1);
    Table1.splice(Rem3, 0, 2);
    Table1.splice(Rem4, 0, 3);
    Table1.splice(Rem5, 0, 4);

    i--;
    RemT = RemT % 5;        //  Between 0 and 4, fairly uniformly.
    x = (i + RemT) % 5;     //  RemT is horizontal shift to put any diagonal on the main diagonal.
    y = Math.floor(i / 5);

    // The Tables are set into a single magic square template
    // Some are the same up to some rotation, reflection, or row permutation.
    // However, all genuinely different magic squares can arise in this fashion.
    var e5 = Table5[(x + 3 * y) % 5];
    var e1 = Table1[(3 * x + y) % 5];

    // Table5 controls the 5* part and Table1 controls the 1* part.
    value = 5 * e5 + e1;

    if (this.mode == "long") {
        value = Math.floor((value + 25) / 2);
    }
    value++;
    return value;
};

//Get a uniformly shuffled array of all the goals of a given difficulty tier
BingoGenerator.prototype.getShuffledGoals = function(difficulty) {
    return this.goalsByDifficulty[difficulty].shuffled();
};

//Given a difficulty as an argument, find the square that contains that difficulty
BingoGenerator.prototype.getDifficultyIndex = function(difficulty) {
    for (var i = 1; i <= 25; i++) {
        if (this.bingoBoard[i].difficulty == difficulty) {
            return i;
        }
    }
    return 0;
};

/**
 * Returns all of the goals in the goalsList that have a time value in the range [minTime, maxTime]
 * (the range is inclusive on both ends).
 * Does not take into account any synergy between goals.
 * @param minTime  the minimum acceptable time, inclusive
 * @param maxTime  the maximum acceptable time, inclusive
 * @returns {Array.<T>}  sorted array of goals within the range of times
 */
BingoGenerator.prototype.getGoalsInTimeRange = function(minTime, maxTime) {
    // if linear scan ends up being too slow, we can optimize this by finding the min using binary search
    // and bailing out early after the first goal exceeds maxTime
    return this.goalsList.filter(function(goal) {
        return minTime <= goal.time && goal.time <= maxTime;
    });
};

/**
 * Returns true if the given goal has already been placed on the board.
 * Does so by checking against the ids of goals already on the board. Therefore relies on
 * different goals having different id fields.
 * @param goal  the goal to check for
 * @returns {boolean}  true if the goal is on the board, false otherwise
 */
BingoGenerator.prototype.hasGoalOnBoard = function(goal) {
    for (var i = 1; i <= 25; i++) {
        if (this.bingoBoard[i].id === goal.id) {
            return true;
        }
    }

    return false;
};

/**
 * Returns true if there are goals that conflict with the given goal anywhere on the board.
 * This is intended for helping to generate better blackout cards.
 * @param goal  the goal to check for conflicts with (not already on the board)
 * @returns {boolean} true if the board contains goals that conflict with the given goal
 */
BingoGenerator.prototype.hasConflictsOnBoard = function(goal) {
    for (var i = 1; i <= 25; i++) {
        var square = this.bingoBoard[i];
        if (square.goal) {
            var squares = [goal, square.goal];
            var synergy = this.evaluateSquares(squares);
            if (synergy >= TOO_MUCH_SYNERGY) {
                return true;
            }
        }
    }

    return false;
};

/**
 * Return the squares in the given row *EXCEPT* the square at the given position.
 *
 * for example, getOtherSquares("row1", 4) would return the squares at positions [1, 2, 3, 5],
 * but not the square at position 4.
 *
 * @param row  the row on the board to pull squares from
 * @param position  the position to ignore
 * @returns {*|Array}
 */
BingoGenerator.prototype.getOtherSquares = function(row, position) {
    var rowIndices = INDICES_PER_ROW[row].filter(function(index) {
        return index != position;
    });

    var board = this;

    return rowIndices.map(function(index) {
        return board.bingoBoard[index];
    });
};

/**
 * Given a position on the board and a potential goal, determines the maximum amount of synergy that
 * any row containing the position would have
 * @param position  the position on the bingo board
 * @param potentialGoal  the goal that we're considering adding to the position
 * @returns {number}  the maximum synergy that the goal would have at that position
 */
BingoGenerator.prototype.checkLine = function(position, potentialGoal) {
    var rows = ROWS_PER_INDEX[position];
    var maxSynergy = 0;
    var minSynergy = TOO_MUCH_SYNERGY;

    for (var rowIndex = 0; rowIndex < rows.length; rowIndex++) {
        var row = rows[rowIndex];

        // include the desired difficulty along with the goal to make the "potential square"
        // because we use desired time now for calculating "difficulty" synergy
        var potentialSquare = JSON.parse(JSON.stringify(potentialGoal));
        potentialSquare.desiredTime = this.bingoBoard[position].desiredTime;

        // get the list of other squares in the row and append the potential one
        var potentialRow = this.getOtherSquares(row, position);
        potentialRow.push(potentialSquare);

        var effectiveRowSynergy = this.evaluateSquares(potentialRow);

        maxSynergy = Math.max(maxSynergy, effectiveRowSynergy);
        minSynergy = Math.min(minSynergy, effectiveRowSynergy);
    }

    return {
        minSynergy: minSynergy,
        maxSynergy: maxSynergy
    };
};

/**
 * Given a row, calculates the effective synergy between the squares in the row.
 * @param row  the string name of the row to check
 * @returns {number}
 */
BingoGenerator.prototype.evaluateRow = function(row) {
    return this.evaluateSquares(this.getOtherSquares(row));
};

BingoGenerator.prototype.getEffectiveTypeSynergiesForRow = function(row) {
    var synergiesForSquares = this.calculateSynergiesForSquares(this.getOtherSquares(row));
    var effectiveTypeSynergies = this.calculateEffectiveTypeSynergies(this.calculateCombinedTypeSynergies(synergiesForSquares));
    var rowtypeSynergies = this.filterRowtypeSynergies(synergiesForSquares);
    return [effectiveTypeSynergies, rowtypeSynergies];
};

/**
 * Given an array of squares, calculates the effective synergy between the squares.
 * This is determined using the type and subtype information of the goals in each square.
 * @param squares
 */
BingoGenerator.prototype.evaluateSquares = function(squares) {
    // bail out if there are duplicate goals
    // NOTE: keep this in addition to the duplicate checking from chooseGoalForPosition
    // because this still detects cases from hardcoded boards for analysis
    var ids = squares.map(function(el) { return el.id; }).filter(function(el) { return el; });
    if (hasDuplicateStrings(ids)) {
        return TOO_MUCH_SYNERGY;
    }

    var synergiesForSquares = this.calculateSynergiesForSquares(squares);
    return this.calculateEffectiveSynergyForSquares(synergiesForSquares);
};

// aggregates type synergy data from the squares in a row for later use
BingoGenerator.prototype.calculateSynergiesForSquares = function(squares) {
    // a map of type -> list of type synergy values
    var typeSynergies = {};
    // a map of subtype -> list of subtype synergy values
    var subtypeSynergies = {};
    // a map of rowtype -> list of rowtype synergy values
    var rowtypeSynergies = {};
    // list of differences between desiredTime and actual time
    var timeDifferences = [];

    for (var m = 0; m < squares.length; m++) {
        var square = squares[m];

        this.mergeTypeSynergies(typeSynergies, square.types);
        this.mergeTypeSynergies(subtypeSynergies, square.subtypes);
        this.mergeTypeSynergies(rowtypeSynergies, square.rowtypes);

        // can't add a time difference for squares that are empty (since it's undefined)
        if (square.time !== undefined && square.desiredTime !== undefined) {
            timeDifferences.push(square.desiredTime - square.time);
        }
    }

    return {
        typeSynergies: typeSynergies,
        subtypeSynergies: subtypeSynergies,
        rowtypeSynergies: rowtypeSynergies,
        goals: squares,
        timeDifferences: timeDifferences
    };
};

// helper method for implementing calculateSynergiesForSquares
BingoGenerator.prototype.mergeTypeSynergies = function(typeSynergies, newTypeSynergies) {
    for (var type in newTypeSynergies) {
        if (!typeSynergies[type]) {
            typeSynergies[type] = [];
        }

        typeSynergies[type].push(newTypeSynergies[type]);
    }
};

BingoGenerator.prototype.calculateCombinedTypeSynergies = function(synergiesForSquares) {
    var typeSynergies = synergiesForSquares.typeSynergies;
    var subtypeSynergies = synergiesForSquares.subtypeSynergies;

    var combinedTypeSynergies = {};

    // Check each subtype found to see if there is a matching type somewhere in the row
    // If so, add the subtype to the grand list
    for (var type in typeSynergies) {
        if (type in subtypeSynergies) {
            combinedTypeSynergies[type] = typeSynergies[type].concat(subtypeSynergies[type]);
        }
        else {
            combinedTypeSynergies[type] = typeSynergies[type];
        }
    }

    return combinedTypeSynergies;
};

/**
 * Filters rowtypeSynergies to only include entries that are present in every square of the board
 * @param synergiesForSquares
 */
BingoGenerator.prototype.filterRowtypeSynergies = function(synergiesForSquares) {
    var rowtypeSynergies = {};

    for (var rowtype in synergiesForSquares.rowtypeSynergies) {
        var rowtypeSynergy = synergiesForSquares.rowtypeSynergies[rowtype];

        // don't count it yet until we've filled up the entire row
        if (rowtypeSynergy.length < SQUARES_PER_ROW) {
            continue;
        }

        var rowtypeCost = 0;
        for (var i = 0; i < rowtypeSynergy.length; i++) {
            rowtypeCost += rowtypeSynergy[i];
        }

        var rowTypeThreshold = this.rowtypeTimeSave[rowtype];
        // "regular" row type synergy
        if (rowTypeThreshold > 0 && rowTypeThreshold > rowtypeCost) {
            rowtypeSynergies[rowtype] = rowTypeThreshold - rowtypeCost;
        }
        // "reverse" row type synergy
        else if (rowTypeThreshold < 0 && rowTypeThreshold > rowtypeCost) {
            rowtypeSynergies[rowtype] = rowtypeCost - rowTypeThreshold;
        }
    }

    return rowtypeSynergies;
};

BingoGenerator.prototype.calculateEffectiveTypeSynergies = function(typeSynergies) {
    var effectiveTypeSynergies = {};

    for (var type in typeSynergies) {
        var synergies = typeSynergies[type];

        var effectiveSynergies = this.filterSynergyValuesForType(type, synergies);

        if (effectiveSynergies.length > 0) {
            effectiveTypeSynergies[type] = effectiveSynergies;
        }
    }

    return effectiveTypeSynergies;
};

BingoGenerator.prototype.filterSynergyValuesForType = function(type, synergies) {
    synergies.sortNumerically();

    var filter = this.synergyFilters[type] || "";
    if (/^min/.test(filter)) {
        var count = Number(filter.split(" ")[1]);
        return synergies.slice(0, count);
    }
    else if (/^max/.test(filter)) {
        var count = Number(filter.split(" ")[1]);
        synergies.reverse();
        return synergies.slice(0, count);
    }
    else {
        return synergies.slice(0, -1);
    }
};

// given aggregated type synergies for the row, calculates the effective synergy for that row
BingoGenerator.prototype.calculateEffectiveSynergyForSquares = function(synergiesForSquares) {
    var typeSynergies = this.calculateCombinedTypeSynergies(synergiesForSquares);
    var rowtypeSynergies = this.filterRowtypeSynergies(synergiesForSquares);

    // Assess final row synergy by removing the largest element from each type and adding the rest
    var effectiveTypeSynergies = this.calculateEffectiveTypeSynergies(typeSynergies);

    // total synergy in the row
    var rowSynergy = 0;

    // by this point we've already filtered out the highest value synergy in
    // calculateEffectiveTypeSynergies(), so just sum the synergies and return the value
    for (var type in effectiveTypeSynergies) {
        var synergies = effectiveTypeSynergies[type];

        for (var i = 0; i < synergies.length; i++) {
            if (synergies[i] > this.maximumIndividualSynergy) {
                return TOO_MUCH_SYNERGY;
            }

            rowSynergy += synergies[i];
        }
    }

    // we've already prefiltered/calculated these values, so just add them up
    // see filterRowtypeSynergies for details
    for (var rowtype in rowtypeSynergies) {
        rowSynergy += rowtypeSynergies[rowtype];
    }

    var timeDifferences = synergiesForSquares.timeDifferences;
    // here's where we factor in expected time vs desired time:
    for (var i = 0; i < timeDifferences.length; i++) {
        // this is desiredTime - actualTime, so a positive value means a goal that is faster than desired
        var timeDifference = timeDifferences[i];

        rowSynergy += timeDifference;
    }

    return rowSynergy;
};


// preserve this function name for compatibility with existing code
bingoGenerator = function (bingoList, opts) {

    var generator = new BingoGenerator(bingoList, opts);

    // repeatedly attempt to generate a card until it succeeds, bailing out after 10 fails
    var card = false;
    var iterations = 0;
    while (!card && iterations < 100) {
        card = generator.makeCard();
        iterations++;
    }

    card["meta"] = {iterations: iterations};

    if (!card) {
        console.log();
        console.log(iterations);
    }

    return card;
};
var bingoList = {
        "0": [{
            "difficulty": 0,
            "id": "lens-of-truth",
            "jp": "まことのメガネ",
            "name": "Lens of Truth",
            "skill": 0,
            "time": 0.25,
            "types": {
                "selfsynergy": 0
            }
        }],
        "1": [{
            "difficulty": 1,
            "id": "2-shields",
            "jp": "盾2種",
            "name": "2 Shields",
            "skill": 0,
            "time": 0.5,
            "types": {
                "selfsynergy": 0
            }
        }, {
            "difficulty": 1,
            "id": "99-rupees",
            "jp": "99ルピー",
            "name": "99 Rupees",
            "skill": 0,
            "subtypes": {
                "incrupees": 100
            },
            "time": 0.5,
            "types": {
                "selfsynergy": 0
            }
        }, {
            "difficulty": 1,
            "id": "fairy-ocarina",
            "jp": "妖精のオカリナ",
            "name": "Fairy Ocarina",
            "skill": 0,
            "subtypes": {
                "bottle": 1,
                "songs": 0.25
            },
            "time": 0.5,
            "types": {
                "field": 0.75,
                "selfsynergy": 0
            }
        }],
        "2": [{
            "difficulty": 2,
            "id": "20-deku-sticks",
            "jp": "デクの棒20本",
            "name": "20 Deku Sticks",
            "skill": 0,
            "time": 1,
            "types": {
                "selfsynergy": 0,
                "sticks": 100
            }
        }, {
            "difficulty": 2,
            "id": "30-deku-nuts",
            "jp": "デクの実30個以上",
            "name": "30 Deku Nuts",
            "skill": 0,
            "subtypes": {
                "plant": 0.5,
                "songs": 0.5,
                "wallet": 0.25
            },
            "time": 1,
            "types": {
                "selfsynergy": 0
            }
        }, {
            "difficulty": 2,
            "id": "bullet-bag-50-",
            "jp": "デクのタネ袋(50)",
            "name": "Bullet Bag (50)",
            "skill": 0,
            "subtypes": {
                "plant": 0.25
            },
            "time": 1.25,
            "types": {
                "bulletbag": 100,
                "selfsynergy": 0
            }
        }, {
            "difficulty": 2,
            "id": "lost-dog-hp",
            "jp": "リチャードのハートのかけら",
            "name": "Lost Dog HP",
            "skill": 0,
            "subtypes": {
                "hearts": 1
            },
            "time": 1.25,
            "types": {
                "field": 0.75,
                "selfsynergy": 0
            }
        }, {
            "difficulty": 2,
            "id": "map-compass-in-bottom-of-the-well",
            "jp": "井戸の底のマップとコンパス",
            "name": "Map & Compass in Bottom of the Well",
            "skill": 0,
            "subtypes": {
                "compass": 0.5,
                "map": 0.5
            },
            "time": 1,
            "types": {
                "selfsynergy": 0
            }
        }],
        "3": [],
        "4": [{
            "difficulty": 4,
            "id": "plant-3-magic-beans",
            "jp": "魔法の豆を3ヶ所に埋める",
            "name": "Plant 3 Magic Beans",
            "skill": 0,
            "time": 2.25,
            "types": {
                "beans": 10,
                "incbeans": 100,
                "plant": 2,
                "selfsynergy": -0.5
            }
        }],
        "5": [{
            "difficulty": 5,
            "id": "bottled-fairy",
            "jp": "ビン(妖精)",
            "name": "Bottled Fairy",
            "skill": 0,
            "time": 2.5,
            "types": {
                "bottle": 2,
                "selfsynergy": 0
            }
        }, {
            "difficulty": 5,
            "id": "green-potion",
            "jp": "緑のクスリ",
            "name": "Green Potion",
            "skill": 0,
            "time": 2.5,
            "types": {
                "bottle": 2,
                "endbottle": -2.5,
                "selfsynergy": 0
            }
        }, {
            "difficulty": 5,
            "id": "red-potion",
            "jp": "赤いクスリ",
            "name": "Red Potion",
            "skill": 0,
            "time": 2.5,
            "types": {
                "bottle": 2,
                "endbottle": -2.5,
                "selfsynergy": 0
            }
        }],
        "6": [{
            "difficulty": 6,
            "id": "all-3-skulltulas-in-bottom-of-the-well",
            "jp": "井戸の底の黄金のスタルチュラ3匹",
            "name": "All 3 Skulltulas in Bottom of the Well",
            "skill": 0,
            "subtypes": {
                "wallet": 1.75
            },
            "time": 3.25,
            "types": {
                "selfsynergy": 0
            }
        }, {
            "difficulty": 6,
            "id": "bottled-poe",
            "jp": "ビン(ポウ)",
            "name": "Bottled Poe",
            "skill": 0,
            "subtypes": {
                "plant": 0.5
            },
            "time": 3,
            "types": {
                "bottle": 2,
                "endbottle": -2.5,
                "selfsynergy": 0
            }
        }, {
            "difficulty": 6,
            "id": "lon-lon-ranch-hp",
            "jp": "ロンロン牧場のハートのかけら",
            "name": "Lon Lon Ranch HP",
            "skill": 0,
            "subtypes": {
                "hearts": 1,
                "wallet": 0.5
            },
            "time": 3,
            "types": {
                "field": 0.75,
                "lonlon": 1.75,
                "selfsynergy": 0
            }
        }, {
            "difficulty": 6,
            "id": "plant-4-magic-beans",
            "jp": "魔法の豆を4ヶ所に埋める",
            "name": "Plant 4 Magic Beans",
            "skill": 0,
            "time": 3,
            "types": {
                "beans": 10,
                "incbeans": 100,
                "plant": 2.75,
                "selfsynergy": -0.5
            }
        }],
        "7": [{
            "difficulty": 7,
            "id": "5-magic-beans",
            "jp": "魔法のマメ5つ以上",
            "name": "5 Magic Beans",
            "skill": 0,
            "subtypes": {
                "wallet": 0.25
            },
            "time": 3.75,
            "types": {
                "beans": 10,
                "incbeans": 100,
                "selfsynergy": 0
            }
        }, {
            "difficulty": 7,
            "id": "both-child-lost-woods-area-skulltulas",
            "jp": "迷いの森エリアの黄金のスタルチュラ4匹",
            "name": "Both Child Lost Woods area Skulltulas",
            "skill": 0,
            "subtypes": {
                "plant": 1.25,
                "songs": 1,
                "wallet": 1
            },
            "time": 3.5,
            "types": {
                "bottle": 2,
                "saria": 0.25,
                "selfsynergy": 0
            }
        }, {
            "difficulty": 7,
            "id": "both-heart-pieces-in-death-mountain-crater",
            "jp": "デスマウンテン火口のハートのかけら２つ",
            "name": "Both heart pieces in Death Mountain Crater",
            "skill": 0,
            "subtypes": {
                "bosskey": 1,
                "compass": 1,
                "hearts": 2,
                "map": 1,
                "plant": 0.5,
                "plant2": 1.5,
                "songs": 1.5,
                "wallet": 1
            },
            "time": 3.5,
            "types": {
                "dmc": 3,
                "selfsynergy": 0
            }
        }, {
            "difficulty": 7,
            "id": "plant-bean-in-death-mountain-crater",
            "jp": "デスマウンテン火口の土にマメを植える",
            "name": "Plant bean in Death Mountain Crater",
            "skill": 0,
            "subtypes": {
                "compass": 1,
                "hearts": 1,
                "map": 1,
                "plant": 0.75,
                "plant2": 1.5,
                "wallet": 0.5
            },
            "time": 3.5,
            "types": {
                "beans": -1,
                "dmc": 3,
                "selfsynergy": 0
            }
        }],
        "8": [{
            "difficulty": 8,
            "id": "both-child-kokiri-forest-area-skulltulas",
            "jp": "コキリの森エリアの黄金のスタルチュラ３匹",
            "name": "Both Child Kokiri Forest area Skulltulas",
            "skill": 0,
            "subtypes": {
                "plant": 0.5,
                "wallet": 1
            },
            "time": 4,
            "types": {
                "bottle": 2,
                "selfsynergy": 0
            }
        }, {
            "difficulty": 8,
            "id": "both-gerudo-valley-hps",
            "jp": "ゲルドの谷のハートのかけら2つ",
            "name": "Both Gerudo Valley HPs",
            "skill": 0,
            "subtypes": {
                "bosskey": 1,
                "hearts": 2,
                "plant": 0.5,
                "plant2": 1.5,
                "wallet": 0.25
            },
            "time": 4.25,
            "types": {
                "field": 0.75,
                "fortress": 1.5,
                "selfsynergy": 0
            }
        }, {
            "difficulty": 8,
            "id": "fairy-slingshot",
            "jp": "妖精のパチンコ",
            "name": "Fairy Slingshot",
            "skill": 0,
            "subtypes": {
                "bulletbag": 100,
                "compass": 2,
                "ganon": 2.5,
                "hearts": 2.5,
                "map": 3,
                "plant": 0.25,
                "wallet": 0.25
            },
            "time": 4,
            "types": {
                "deku": 2.5,
                "selfsynergy": 0
            }
        }, {
            "difficulty": 8,
            "id": "golden-scale",
            "jp": "金のウロコ",
            "name": "Golden Scale",
            "skill": 0,
            "subtypes": {
                "plant": 0.25,
                "plant2": 1.5
            },
            "time": 4,
            "types": {
                "fountain": 1,
                "scale": 100,
                "selfsynergy": 0
            }
        }, {
            "difficulty": 8,
            "id": "map-compass-in-deku-tree",
            "jp": "デクの樹様の中のマップとコンパス",
            "name": "Map & Compass in Deku Tree",
            "skill": 0,
            "subtypes": {
                "compass": 4,
                "ganon": 2.5,
                "hearts": 3,
                "map": 3.25,
                "plant": 0.25,
                "wallet": 0.5
            },
            "time": 4.25,
            "types": {
                "deku": 3,
                "selfsynergy": 0
            }
        }, {
            "difficulty": 8,
            "id": "map-compass-in-dodongo-s-cavern",
            "jp": "ドドンゴの洞窟のマップとコンパス",
            "name": "Map & Compass in Dodongo's Cavern",
            "skill": 0,
            "subtypes": {
                "compass": 3.5,
                "hearts": 1,
                "map": 3,
                "plant": 0.5,
                "plant2": 1.5,
                "wallet": 0.25
            },
            "time": 4,
            "types": {
                "dc": 3,
                "dmc": 1,
                "selfsynergy": 0
            }
        }, {
            "difficulty": 8,
            "id": "silver-scale",
            "jp": "銀のウロコ",
            "name": "Silver Scale",
            "skill": 0,
            "subtypes": {
                "bottle": 1,
                "plant2": 0.75
            },
            "time": 4,
            "types": {
                "field": 0.25,
                "fountain": 1,
                "ruto": 4,
                "scale": 100,
                "selfsynergy": 0
            }
        }],
        "9": [{
            "difficulty": 9,
            "id": "bullet-bag-40-",
            "jp": "デクのタネ袋(40)",
            "name": "Bullet Bag (40)",
            "skill": 0,
            "subtypes": {
                "compass": 3,
                "ganon": 2.5,
                "hearts": 2.5,
                "map": 3,
                "plant": 0.25,
                "wallet": 0.25
            },
            "time": 4.5,
            "types": {
                "bulletbag": 100,
                "deku": 3,
                "selfsynergy": 0
            }
        }, {
            "difficulty": 9,
            "id": "ice-arrows",
            "jp": "氷の矢",
            "name": "Ice Arrows",
            "skill": 0,
            "subtypes": {
                "bosskey": 3.5,
                "hearts": 0.75,
                "kd": 2.5,
                "plant2": 0.5
            },
            "time": 4.75,
            "types": {
                "field": 0.75,
                "fortress": 3,
                "gtg": 2.5,
                "selfsynergy": 0
            }
        }, {
            "difficulty": 9,
            "id": "ruto-s-letter",
            "jp": "ルトの手紙",
            "name": "Ruto's Letter",
            "skill": 0,
            "subtypes": {
                "plant2": 1.25
            },
            "time": 4.5,
            "types": {
                "ruto": 4.5,
                "selfsynergy": 0
            }
        }],
        "10": [{
            "difficulty": 10,
            "id": "2-unused-keys-in-gerudo-training-grounds",
            "jp": "ゲルドの修練場の未使用のカギ2つ",
            "name": "2 unused keys in Gerudo Training Grounds",
            "skill": 0,
            "subtypes": {
                "hearts": 0.75,
                "kd": 2.5,
                "plant2": 0.5
            },
            "time": 5.25,
            "types": {
                "endon": -0.5,
                "field": 0.75,
                "fortress": 3,
                "gtg": 2,
                "incgtgkey": 100,
                "selfsynergy": 0
            }
        }, {
            "difficulty": 10,
            "id": "3-unused-keys-in-gerudo-training-grounds",
            "jp": "ゲルドの修練場の未使用のカギ3つ",
            "name": "3 unused keys in Gerudo Training Grounds",
            "skill": 0,
            "subtypes": {
                "bosskey": 3,
                "hearts": 0.75,
                "kd": 2.5,
                "plant2": 0.5
            },
            "time": 5.25,
            "types": {
                "endon": -0.5,
                "field": 0.75,
                "fortress": 3,
                "gtg": 2,
                "incgtgkey": 100,
                "selfsynergy": 0
            }
        }, {
            "difficulty": 10,
            "id": "adult-s-wallet",
            "jp": "大人のサイフ",
            "name": "Adult's Wallet",
            "skill": 0,
            "subtypes": {
                "bottle": 1,
                "incrupees": 100,
                "plant": 4
            },
            "time": 5,
            "types": {
                "selfsynergy": -2,
                "wallet": 6
            }
        }, {
            "difficulty": 10,
            "id": "both-child-gerudo-valley-area-skulltulas",
            "jp": "ゲルドの谷エリアの黄金のスタルチュラ4匹",
            "name": "Both Child Gerudo Valley area Skulltulas",
            "skill": 0,
            "subtypes": {
                "bosskey": 1.5,
                "hearts": 0.75,
                "plant": 1,
                "plant2": 1.5,
                "wallet": 1.25
            },
            "time": 5,
            "types": {
                "field": 0.75,
                "fortress": 2,
                "gtg": 1,
                "jabu": 0.5,
                "selfsynergy": 0
            }
        }, {
            "difficulty": 10,
            "id": "defeat-queen-gohma",
            "jp": "ゴーマ撃破",
            "name": "Defeat Queen Gohma",
            "skill": 0,
            "subtypes": {
                "compass": 3.5,
                "ganon": 4,
                "hearts": 3,
                "hearts2": 2,
                "map": 3,
                "plant": 0.25,
                "wallet": 0.5
            },
            "time": 5.25,
            "types": {
                "deku": 5,
                "endon": -0.5,
                "incgohma": 100,
                "selfsynergy": 0
            }
        }],
        "11": [{
            "difficulty": 11,
            "id": "200-rupees",
            "jp": "200ルピー",
            "name": "200 Rupees",
            "skill": 0,
            "subtypes": {
                "bottle": 1,
                "plant": 4
            },
            "time": 5.5,
            "types": {
                "incrupees": 100,
                "selfsynergy": -2,
                "wallet": 6
            }
        }, {
            "difficulty": 11,
            "id": "30-deku-sticks",
            "jp": "デクの棒30本",
            "name": "30 Deku Sticks",
            "skill": 0,
            "time": 5.5,
            "types": {
                "dc": 3,
                "selfsynergy": 0,
                "sticks": 100
            }
        }, {
            "difficulty": 11,
            "id": "defeat-a-white-wolfos",
            "jp": "ホワイトウルフォス撃破",
            "name": "Defeat a White Wolfos",
            "skill": 0,
            "subtypes": {
                "hearts": 0.75,
                "plant2": 0.5
            },
            "time": 5.5,
            "types": {
                "field": 0.75,
                "fortress": 3,
                "gtg": 1.5,
                "ice": 1.5,
                "irons": 1.5,
                "selfsynergy": 0
            }
        }, {
            "difficulty": 11,
            "id": "defeat-all-lizalfos-in-dodongo-s-cavern",
            "jp": "ドドンゴの洞窟のリザルフォス全て撃破",
            "name": "Defeat all Lizalfos in Dodongo's Cavern",
            "skill": 0,
            "subtypes": {
                "compass": 3,
                "hearts": 2,
                "map": 2.75,
                "plant": 0.5,
                "plant2": 1.5,
                "wallet": 0.5
            },
            "time": 5.5,
            "types": {
                "dc": 4,
                "dmc": 1,
                "endon": -0.5,
                "selfsynergy": 0
            }
        }, {
            "difficulty": 11,
            "id": "milk",
            "jp": "ロンロン牛乳",
            "name": "Milk",
            "skill": 0,
            "subtypes": {
                "bottle": 2,
                "wallet": 0.5,
                "zl": 1
            },
            "time": 5.75,
            "types": {
                "endbottle": -2.5,
                "field": 0.75,
                "lonlon": 4,
                "selfsynergy": 0
            }
        }, {
            "difficulty": 11,
            "id": "plant-5-magic-beans",
            "jp": "魔法の豆を5ヶ所に埋める",
            "name": "Plant 5 Magic Beans",
            "skill": 0,
            "time": 5.5,
            "types": {
                "beans": 10,
                "incbeans": 100,
                "plant": 3.5,
                "selfsynergy": -0.5
            }
        }],
        "12": [{
            "difficulty": 12,
            "id": "37th-heart-piece-child-fortress-",
            "jp": "37番目のハートのかけら(子供のゲルドの砦)",
            "name": "37th heart piece (Child Fortress)",
            "skill": 0,
            "subtypes": {
                "bosskey": 2,
                "hearts": 1.75,
                "kd": 2.5,
                "plant2": 0.5
            },
            "time": 6.25,
            "types": {
                "fortress": 2.5,
                "selfsynergy": 0
            }
        }, {
            "difficulty": 12,
            "id": "4-unused-keys-in-gerudo-training-grounds",
            "jp": "ゲルドの修練場の未使用のカギ4つ",
            "name": "4 unused keys in Gerudo Training Grounds",
            "skill": 0,
            "subtypes": {
                "bosskey": 3,
                "hearts": 0.75,
                "kd": 2.5,
                "plant2": 0.5
            },
            "time": 6.25,
            "types": {
                "endon": -0.5,
                "field": 0.75,
                "fortress": 3,
                "gtg": 3,
                "incgtgkey": 100,
                "selfsynergy": 0
            }
        }, {
            "difficulty": 12,
            "id": "5-hearts",
            "jp": "ハート5つ",
            "name": "5 Hearts",
            "skill": 0,
            "subtypes": {
                "plant": 1,
                "plant2": 1,
                "wallet": 1
            },
            "time": 6,
            "types": {
                "hearts": 5,
                "hearts2": 1,
                "selfsynergy": -2
            }
        }, {
            "difficulty": 12,
            "id": "all-4-child-zora-s-domain-area-skulltulas",
            "jp": "ゾーラの里エリアの黄金のスタルチュラ8匹",
            "name": "All 4 Child Zora's Domain area Skulltulas",
            "skill": 0,
            "subtypes": {
                "compass": 2,
                "hearts": 0.75,
                "jabu": 0.5,
                "map": 2,
                "ruto": 1,
                "wallet": 2.5
            },
            "time": 6,
            "types": {
                "fountain": 2,
                "selfsynergy": 0
            }
        }, {
            "difficulty": 12,
            "id": "6-magic-beans",
            "jp": "魔法のマメ6つ以上",
            "name": "6 Magic Beans",
            "skill": 0,
            "subtypes": {
                "wallet": 0.25
            },
            "time": 6.25,
            "types": {
                "beans": 10,
                "incbeans": 100,
                "selfsynergy": 0
            }
        }, {
            "difficulty": 12,
            "id": "blue-fire",
            "jp": "青い炎",
            "name": "Blue Fire",
            "skill": 0,
            "subtypes": {
                "bosskey": 2.5,
                "compass": 3.5,
                "hearts": 3,
                "hearts2": 2,
                "map": 3,
                "plant": 0.25,
                "wallet": 0.75,
                "zl": 2
            },
            "time": 6,
            "types": {
                "bottle": 2,
                "fountain": 2,
                "ganon": 5,
                "ice": 1.5,
                "selfsynergy": 0
            }
        }],
        "13": [{
            "difficulty": 13,
            "id": "3-maps",
            "jp": "マップ3つ",
            "name": "3 Maps",
            "skill": 0,
            "subtypes": {
                "compass": 6,
                "ganon": 2.5,
                "hearts": 2,
                "hearts2": 1.5,
                "plant": 1,
                "plant2": 1,
                "wallet": 0.75
            },
            "time": 6.75,
            "types": {
                "incmap": 100,
                "map": 6,
                "selfsynergy": 0
            }
        }, {
            "difficulty": 13,
            "id": "bomb-bag-30-",
            "jp": "ボム袋(30)",
            "name": "Bomb Bag (30)",
            "skill": 0,
            "subtypes": {
                "compass": 3,
                "map": 2.75,
                "plant": 0.5,
                "plant2": 1.5,
                "wallet": 1
            },
            "time": 6.5,
            "types": {
                "dc": 4,
                "dmc": 1,
                "selfsynergy": 0
            }
        }, {
            "difficulty": 13,
            "id": "defeat-big-octo",
            "jp": "大オクタ撃破",
            "name": "Defeat Big Octo",
            "skill": 0,
            "subtypes": {
                "compass": 5,
                "map": 5,
                "ruto": 1,
                "wallet": 0.75
            },
            "time": 6.5,
            "types": {
                "fountain": 2,
                "gtg": 1,
                "jabu": 3,
                "selfsynergy": 0
            }
        }],
        "14": [{
            "difficulty": 14,
            "id": "5-unused-keys-in-gerudo-training-grounds",
            "jp": "ゲルドの修練場の未使用のカギ5つ",
            "name": "5 unused keys in Gerudo Training Grounds",
            "skill": 0,
            "subtypes": {
                "bosskey": 3,
                "hearts": 0.75,
                "kd": 2.5,
                "plant2": 0.5
            },
            "time": 7,
            "types": {
                "endon": -0.5,
                "field": 0.75,
                "fortress": 3,
                "gtg": 4,
                "incgtgkey": 100,
                "selfsynergy": 0
            }
        }, {
            "difficulty": 14,
            "id": "all-3-child-lake-hylia-skulltulas",
            "jp": "ハイリア湖畔エリアの黄金のスタルチュラ3匹以上",
            "name": "All 3 Child Lake Hylia Skulltulas",
            "skill": 0,
            "subtypes": {
                "plant": 0.5,
                "plant2": 1.5,
                "ruto": 2,
                "wallet": 1.75
            },
            "time": 7,
            "types": {
                "bottle": 2,
                "field": 0.75,
                "fountain": 0.5,
                "selfsynergy": 0
            }
        }, {
            "difficulty": 14,
            "id": "boomerang",
            "jp": "ブーメラン",
            "name": "Boomerang",
            "skill": 0,
            "subtypes": {
                "compass": 6,
                "hearts": 1,
                "hearts2": 2,
                "map": 6,
                "ruto": 1,
                "wallet": 1.5
            },
            "time": 7,
            "types": {
                "fountain": 2,
                "incbarinade": 100,
                "jabu": 5,
                "selfsynergy": 0
            }
        }, {
            "difficulty": 14,
            "id": "ganon-s-castle-boss-key",
            "jp": "ガノン城のボス部屋のカギ",
            "name": "Ganon's Castle Boss Key",
            "skill": 0,
            "subtypes": {
                "bosskey": 4.25,
                "hearts": 3,
                "hearts2": 2,
                "plant": 0.25,
                "wallet": 0.5
            },
            "time": 7,
            "types": {
                "bottle": 2,
                "endon": -0.5,
                "ganon": 5,
                "incgohma": 100,
                "selfsynergy": 0
            }
        }],
        "15": [{
            "difficulty": 15,
            "id": "fill-all-4-bottle-slots",
            "jp": "4つの空きビンスロットを全て埋める",
            "name": "Fill all 4 Bottle Slots",
            "skill": 0,
            "subtypes": {
                "plant2": 1.25
            },
            "time": 7.75,
            "types": {
                "bottle": 2,
                "ruto": 4.5,
                "selfsynergy": 0
            }
        }, {
            "difficulty": 15,
            "id": "requiem-of-spirit",
            "jp": "魂のレクイエム",
            "name": "Requiem of Spirit",
            "skill": 0,
            "subtypes": {
                "bosskey": 2,
                "hearts": 0.75,
                "map": 2,
                "plant": 0.5,
                "plant2": 1.5,
                "songs": 3,
                "wallet": 0.5
            },
            "time": 7.5,
            "types": {
                "endon": -0.5,
                "field": 0.75,
                "fortress": 2.5,
                "selfsynergy": 0,
                "spirit": 2.5
            }
        }],
        "16": [{
            "difficulty": 16,
            "id": "15-different-skulltulas",
            "jp": "スタルチュラのしるし15個(増殖禁止)",
            "name": "15 Different Skulltulas",
            "skill": 0,
            "subtypes": {
                "plant": 4.5,
                "plant2": 2
            },
            "time": 8,
            "types": {
                "bottle": 2,
                "selfsynergy": -2,
                "wallet": 8
            }
        }, {
            "difficulty": 16,
            "id": "3-compasses",
            "jp": "コンパス3つ",
            "name": "3 Compasses",
            "skill": 0,
            "subtypes": {
                "ganon": 2.5,
                "hearts": 3,
                "hearts2": 1.5,
                "map": 8,
                "plant": 1,
                "plant2": 1,
                "wallet": 0.75
            },
            "time": 8,
            "types": {
                "compass": 8,
                "inccomp": 100,
                "selfsynergy": 0
            }
        }, {
            "difficulty": 16,
            "id": "6-unused-keys-in-gerudo-training-grounds",
            "jp": "ゲルドの修練場の未使用のカギ6つ",
            "name": "6 unused keys in Gerudo Training Grounds",
            "skill": 0,
            "subtypes": {
                "bosskey": 3,
                "hearts": 0.75,
                "kd": 2.5,
                "plant2": 0.5
            },
            "time": 8,
            "types": {
                "endon": -0.5,
                "field": 0.75,
                "fortress": 3,
                "gtg": 5,
                "incgtgkey": 100,
                "selfsynergy": 0
            }
        }, {
            "difficulty": 16,
            "id": "all-4-lon-lon-ranch-area-skulltulas",
            "jp": "ロンロン牧場エリアの黄金のスタルチュラ4匹",
            "name": "All 4 Lon-Lon Ranch area Skulltulas",
            "skill": 0,
            "subtypes": {
                "hearts": 0.25,
                "jabu": 2,
                "wallet": 2.5
            },
            "time": 8,
            "types": {
                "field": 0.75,
                "lonlon": 1.5,
                "selfsynergy": 0
            }
        }, {
            "difficulty": 16,
            "id": "all-4-skulltulas-in-deku-tree",
            "jp": "デクの樹様の中の黄金のスタルチュラ4匹",
            "name": "All 4 Skulltulas in Deku Tree",
            "skill": 0,
            "subtypes": {
                "compass": 3.75,
                "ganon": 3,
                "hearts": 3,
                "jabu": 1,
                "map": 3,
                "plant": 0.25,
                "wallet": 2.5
            },
            "time": 8.25,
            "types": {
                "deku": 3,
                "endon": -0.5,
                "selfsynergy": 0
            }
        }, {
            "difficulty": 16,
            "id": "all-4-skulltulas-in-jabu-jabu",
            "jp": "ジャブジャブ様のお腹の黄金のスタルチュラ4匹",
            "name": "All 4 Skulltulas in Jabu-Jabu",
            "skill": 0,
            "subtypes": {
                "compass": 5,
                "hearts": 2,
                "map": 5,
                "ruto": 1,
                "wallet": 2.5
            },
            "time": 8,
            "types": {
                "endon": -0.5,
                "fountain": 2,
                "gtg": 1,
                "jabu": 3,
                "selfsynergy": 0
            }
        }, {
            "difficulty": 16,
            "id": "all-5-skulltulas-in-dodongo-s-cavern",
            "jp": "ドドンゴの洞窟の黄金のスタルチュラ5匹",
            "name": "All 5 Skulltulas in Dodongo's Cavern",
            "skill": 0,
            "subtypes": {
                "compass": 3,
                "hearts": 2,
                "hearts2": 2,
                "kd": 1.5,
                "map": 2.75,
                "plant": 0.5,
                "plant2": 1.5,
                "wallet": 3.25
            },
            "time": 8.25,
            "types": {
                "dc": 3,
                "dmc": 1,
                "endon": -0.5,
                "selfsynergy": 0
            }
        }, {
            "difficulty": 16,
            "id": "7-magic-beans",
            "jp": "魔法のマメ7つ以上",
            "name": "7 Magic Beans",
            "skill": 0,
            "subtypes": {
                "wallet": 0.25
            },
            "time": 8,
            "types": {
                "beans": 10,
                "incbeans": 100,
                "selfsynergy": 0
            }
        }, {
            "difficulty": 16,
            "id": "defeat-king-dodongo",
            "jp": "キングドドンゴ撃破",
            "name": "Defeat King Dodongo",
            "skill": 0,
            "subtypes": {
                "compass": 3,
                "hearts": 3,
                "hearts2": 2,
                "map": 2.75,
                "plant": 0.5,
                "plant2": 1.5,
                "wallet": 1
            },
            "time": 8.25,
            "types": {
                "dc": 4,
                "dmc": 1,
                "endon": -0.5,
                "fortress": 2,
                "inckd": 100,
                "kd": 3,
                "selfsynergy": 0
            }
        }, {
            "difficulty": 16,
            "id": "epona-s-song",
            "jp": "エポナの歌",
            "name": "Epona's Song",
            "skill": 0,
            "subtypes": {
                "wallet": 0.5,
                "zl": 1
            },
            "time": 8,
            "types": {
                "bottle": 2,
                "field": 0.75,
                "lonlon": 4,
                "selfsynergy": 0
            }
        }],
        "17": [{
            "difficulty": 17,
            "id": "all-5-child-death-mountain-area-skulltulas",
            "jp": "デスマウンテンエリアの黄金のスタルチュラ8匹",
            "name": "All 5 Child Death Mountain area Skulltulas",
            "skill": 0,
            "subtypes": {
                "childtrade": 1,
                "compass": 1,
                "hearts": 1.5,
                "map": 1,
                "plant": 0.5,
                "plant2": 1.5,
                "wallet": 3.25
            },
            "time": 8.5,
            "types": {
                "bottle": 2,
                "dmc": 3,
                "selfsynergy": 0
            }
        }, {
            "difficulty": 17,
            "id": "beat-the-deku-tree",
            "jp": "デクの樹様の中クリア",
            "name": "Beat the Deku Tree",
            "skill": 0,
            "subtypes": {
                "compass": 3.5,
                "ganon": 5,
                "hearts": 3,
                "hearts2": 2,
                "map": 3,
                "plant": 0.25,
                "wallet": 0.5,
                "zl": 2.25
            },
            "time": 8.5,
            "types": {
                "bottle": 2,
                "deku": 5,
                "endon": -1,
                "incgohma": 100,
                "selfsynergy": 0
            }
        }, {
            "difficulty": 17,
            "id": "kokiri-s-emerald",
            "jp": "コキリのヒスイ",
            "name": "Kokiri's Emerald",
            "skill": 0,
            "subtypes": {
                "compass": 3.5,
                "ganon": 5,
                "hearts": 3,
                "hearts2": 2,
                "map": 3,
                "plant": 0.25,
                "wallet": 0.5,
                "zl": 2.25
            },
            "time": 8.5,
            "types": {
                "bottle": 2,
                "deku": 5,
                "incgohma": 100,
                "selfsynergy": 0
            }
        }, {
            "difficulty": 17,
            "id": "map-compass-in-jabu-jabu",
            "jp": "ジャブジャブ様のお腹のマップとコンパス",
            "name": "Map & Compass in Jabu-Jabu",
            "skill": 0,
            "subtypes": {
                "compass": 8.5,
                "hearts": 0.5,
                "map": 7.5,
                "ruto": 1,
                "wallet": 1
            },
            "time": 8.5,
            "types": {
                "fountain": 2,
                "jabu": 5,
                "selfsynergy": 0
            }
        }],
        "18": [{
            "difficulty": 18,
            "id": "all-7-child-kakariko-area-skulltulas",
            "jp": "カカリコ村エリアの黄金のスタルチュラ8匹",
            "name": "All 7 Child Kakariko area Skulltulas",
            "skill": 0,
            "subtypes": {
                "jabu": 1,
                "plant": 0.5,
                "wallet": 4.5
            },
            "time": 9,
            "types": {
                "bottle": 2,
                "selfsynergy": 0
            }
        }, {
            "difficulty": 18,
            "id": "both-child-wasteland-colossus-area-skulltulas",
            "jp": "幻影の砂漠・巨大邪神像エリアの黄金のスタルチュラ4匹",
            "name": "Both Child Wasteland/ Colossus area Skulltulas",
            "skill": 0,
            "subtypes": {
                "bosskey": 2,
                "bosskey2": 4,
                "hearts": 0.75,
                "map": 2,
                "plant": 0.5,
                "plant2": 1.5,
                "songs": 3,
                "wallet": 1.25
            },
            "time": 9,
            "types": {
                "bottle": 2,
                "field": 0.75,
                "fortress": 2.5,
                "selfsynergy": 0,
                "spirit": 2.5
            }
        }],
        "19": [{
            "difficulty": 19,
            "id": "1-skulltula-from-each-child-dungeon",
            "jp": "全ての子供ダンジョンからスタルチュラ最低1匹ずつ",
            "name": "1 Skulltula from each Child Dungeon",
            "skill": 0,
            "subtypes": {
                "compass": 4,
                "ganon": 2.5,
                "map": 4,
                "plant": 0.5,
                "plant2": 1.5,
                "ruto": 1,
                "wallet": 3
            },
            "time": 9.5,
            "types": {
                "dc": 2,
                "deku": 3,
                "dmc": 1,
                "fountain": 2,
                "jabu": 3,
                "selfsynergy": -3.5
            }
        }, {
            "difficulty": 19,
            "id": "defeat-barinade",
            "jp": "バリネード撃破",
            "name": "Defeat Barinade",
            "skill": 0,
            "subtypes": {
                "compass": 6,
                "hearts": 3,
                "hearts2": 2,
                "map": 6,
                "ruto": 1,
                "wallet": 1
            },
            "time": 9.5,
            "types": {
                "endon": -0.5,
                "fountain": 2,
                "incbarinade": 100,
                "jabu": 8,
                "selfsynergy": 0
            }
        }, {
            "difficulty": 19,
            "id": "goron-s-ruby",
            "jp": "ゴロンのルビー",
            "name": "Goron's Ruby",
            "skill": 0,
            "subtypes": {
                "compass": 3,
                "hearts": 3,
                "hearts2": 2,
                "map": 2.75,
                "plant": 0.5,
                "plant2": 1.5,
                "wallet": 1
            },
            "time": 9.5,
            "types": {
                "dc": 4,
                "dmc": 1,
                "endon": -0.5,
                "inckd": 100,
                "kd": 3,
                "selfsynergy": 0
            }
        }],
        "20": [{
            "difficulty": 20,
            "id": "beat-dodongo-s-cavern",
            "jp": "ドドンゴの洞窟クリア",
            "name": "Beat Dodongo's Cavern",
            "skill": 0,
            "subtypes": {
                "compass": 3,
                "fortress": 3,
                "hearts": 3,
                "hearts2": 2,
                "map": 2.75,
                "plant": 0.5,
                "plant2": 1.5,
                "wallet": 1
            },
            "time": 10,
            "types": {
                "dc": 4,
                "dmc": 1,
                "endon": -1,
                "inckd": 100,
                "kd": 3,
                "selfsynergy": 0
            }
        }, {
            "difficulty": 20,
            "id": "beat-jabu-jabu-s-belly",
            "jp": "ジャブジャブ様のお腹クリア",
            "name": "Beat Jabu-Jabu's Belly",
            "skill": 0,
            "subtypes": {
                "compass": 6,
                "hearts": 3,
                "hearts2": 2,
                "map": 6,
                "ruto": 1,
                "wallet": 1
            },
            "time": 10,
            "types": {
                "endon": -1,
                "fountain": 2,
                "incbarinade": 100,
                "jabu": 8,
                "selfsynergy": 0
            }
        }, {
            "difficulty": 20,
            "id": "keaton-mask",
            "jp": "キータンのお面",
            "name": "Keaton Mask",
            "skill": 0,
            "subtypes": {
                "hearts": 2,
                "hearts2": 2
            },
            "time": 10.25,
            "types": {
                "childtrade": 2.75,
                "dmc": 0.5,
                "field": 0.75,
                "selfsynergy": 0,
                "zl": 6.75
            }
        }, {
            "difficulty": 20,
            "id": "plant-6-magic-beans",
            "jp": "魔法の豆を6ヶ所に埋める",
            "name": "Plant 6 Magic Beans",
            "skill": 0,
            "time": 10,
            "types": {
                "beans": 10,
                "incbeans": 100,
                "plant": 4.5,
                "selfsynergy": -0.5
            }
        }],
        "21": [{
            "difficulty": 21,
            "id": "8-magic-beans",
            "jp": "魔法のマメ8つ以上",
            "name": "8 Magic Beans",
            "skill": 0,
            "subtypes": {
                "wallet": 0.5
            },
            "time": 10.75,
            "types": {
                "beans": 10,
                "incbeans": 100,
                "selfsynergy": 0
            }
        }, {
            "difficulty": 21,
            "id": "saria-s-song",
            "jp": "サリアの歌",
            "name": "Saria's Song",
            "skill": 0,
            "subtypes": {
                "hearts": 2,
                "hearts2": 2,
                "plant": 0.5,
                "wallet": 0.25
            },
            "time": 10.5,
            "types": {
                "field": 0.75,
                "incsaria": 100,
                "saria": 3,
                "selfsynergy": 0,
                "zl": 6.75
            }
        }],
        "22": [{
            "difficulty": 22,
            "id": "4-maps",
            "jp": "マップ4つ",
            "name": "4 Maps",
            "skill": 0,
            "subtypes": {
                "bosskey2": 2,
                "compass": 14,
                "ganon": 2.5,
                "hearts": 3,
                "hearts2": 3,
                "plant": 1,
                "plant2": 1,
                "wallet": 1
            },
            "time": 11.25,
            "types": {
                "fountain": 2,
                "incmap": 100,
                "jabu": 5,
                "map": 14,
                "selfsynergy": -3
            }
        }, {
            "difficulty": 22,
            "id": "6-hearts",
            "jp": "ハート6つ",
            "name": "6 Hearts",
            "skill": 0,
            "subtypes": {
                "plant": 1,
                "plant2": 1,
                "wallet": 1
            },
            "time": 11,
            "types": {
                "hearts": 8,
                "hearts2": 4,
                "selfsynergy": -2
            }
        }, {
            "difficulty": 22,
            "id": "win-bombchu-bowling-prize",
            "jp": "ボムチュウボウリングの景品",
            "name": "Win Bombchu Bowling Prize",
            "skill": 0,
            "subtypes": {
                "compass": 3,
                "fortress": 3,
                "hearts": 3,
                "hearts2": 2,
                "map": 2.75,
                "plant": 0.5,
                "plant2": 1.5,
                "wallet": 1
            },
            "time": 11,
            "types": {
                "dc": 4,
                "inckd": 100,
                "kd": 3,
                "selfsynergy": 0
            }
        }, {
            "difficulty": 22,
            "id": "zora-s-sapphire",
            "jp": "ゾーラのサファイア",
            "name": "Zora's Sapphire",
            "skill": 0,
            "subtypes": {
                "compass": 6,
                "hearts": 3,
                "hearts2": 2,
                "map": 6,
                "ruto": 1,
                "wallet": 1
            },
            "time": 11,
            "types": {
                "fountain": 2,
                "incbarinade": 100,
                "jabu": 8,
                "selfsynergy": 0
            }
        }],
        "23": [{
            "difficulty": 23,
            "id": "defeat-a-skull-kid",
            "jp": "スタルキッド撃破",
            "name": "Defeat a Skull Kid",
            "skill": 0,
            "subtypes": {
                "plant": 0.25
            },
            "time": 11.5,
            "types": {
                "field": 0.75,
                "incsaria": 100,
                "saria": 3,
                "selfsynergy": 0,
                "zl": 6.75
            }
        }, {
            "difficulty": 23,
            "id": "gerudo-s-card",
            "jp": "ゲルドの会員証",
            "name": "Gerudo's Card",
            "skill": 0,
            "subtypes": {
                "bosskey": 2.5,
                "hearts": 0.75,
                "plant2": 0.5
            },
            "time": 11.5,
            "types": {
                "field": 0.75,
                "fortress": 2.5,
                "selfsynergy": 0
            }
        }, {
            "difficulty": 23,
            "id": "get-bombchu-chest-in-spirit-temple",
            "jp": "魂の神殿のボムチュウ取得",
            "name": "Get Bombchu chest in Spirit Temple",
            "skill": 0,
            "subtypes": {
                "bosskey": 2,
                "compass": 1,
                "hearts": 0.75,
                "map": 2,
                "plant": 0.5,
                "plant2": 1.5,
                "wallet": 0.5
            },
            "time": 11.5,
            "types": {
                "field": 0.75,
                "fortress": 2.5,
                "selfsynergy": 0,
                "spirit": 6
            }
        }],
        "24": [{
            "difficulty": 24,
            "id": "plant-7-magic-beans",
            "jp": "魔法の豆を7ヶ所に埋める",
            "name": "Plant 7 Magic Beans",
            "skill": 0,
            "time": 12.25,
            "types": {
                "beans": 10,
                "field": 0.75,
                "incbeans": 100,
                "plant": 4.5,
                "plant2": 2,
                "selfsynergy": -2
            }
        }],
        "25": [{
            "difficulty": 25,
            "id": "4-compasses",
            "jp": "コンパス4つ",
            "name": "4 Compasses",
            "skill": 0,
            "subtypes": {
                "bosskey2": 2,
                "ganon": 2.5,
                "hearts": 3,
                "hearts2": 4,
                "map": 16,
                "plant": 1,
                "plant2": 1,
                "wallet": 1
            },
            "time": 12.5,
            "types": {
                "compass": 16,
                "fountain": 2,
                "inccomp": 100,
                "jabu": 5,
                "selfsynergy": -4
            }
        }, {
            "difficulty": 25,
            "id": "magic-bar",
            "jp": "魔力メーター",
            "name": "Magic Bar",
            "skill": 0,
            "subtypes": {
                "hearts": 2,
                "hearts2": 2
            },
            "time": 12.5,
            "types": {
                "bottle": 2,
                "dmc": 2.5,
                "incmagic": 100,
                "magic": 2,
                "zl": 6.75
            }
        }, {
            "difficulty": 25,
            "id": "skull-mask",
            "jp": "ドクロのお面",
            "name": "Skull Mask",
            "skill": 0,
            "subtypes": {
                "hearts": 2,
                "hearts2": 2,
                "plant": 0.5,
                "wallet": 0.25
            },
            "time": 12.5,
            "types": {
                "childtrade": 5,
                "field": 0.75,
                "saria": 3,
                "selfsynergy": 0,
                "zl": 6.75
            }
        }],
        "26": [{
            "difficulty": 26,
            "id": "9-magic-beans",
            "jp": "魔法のマメ9つ以上",
            "name": "9 Magic Beans",
            "skill": 0,
            "subtypes": {
                "wallet": 0.5
            },
            "time": 13.25,
            "types": {
                "beans": 10,
                "incbeans": 100,
                "selfsynergy": 0
            }
        }],
        "27": [],
        "28": [{
            "difficulty": 28,
            "id": "double-magic",
            "jp": "魔力2倍",
            "name": "Double Magic",
            "skill": 0,
            "subtypes": {
                "bosskey": 1,
                "compass": 1,
                "hearts": 2,
                "hearts2": 2,
                "map": 1,
                "plant": 0.5,
                "songs": 1,
                "wallet": 0.5
            },
            "time": 14.25,
            "types": {
                "bottle": 2,
                "dmc": 1,
                "field": 0.75,
                "incmagic": 100,
                "magic": 2,
                "selfsynergy": 0,
                "zl": 6.75
            }
        }, {
            "difficulty": 28,
            "id": "silver-gauntlets",
            "jp": "銀のグローブ",
            "name": "Silver Gauntlets",
            "skill": 0,
            "subtypes": {
                "bosskey": 3,
                "bosskey2": 4.5,
                "hearts": 0.75,
                "map": 6,
                "plant": 0.5,
                "plant2": 1.5,
                "songs": 1,
                "wallet": 0.25
            },
            "time": 14,
            "types": {
                "endon": -1,
                "field": 0.75,
                "fortress": 2.5,
                "selfsynergy": 0,
                "spirit": 6,
                "strength": 100
            }
        }],
        "29": [],
        "30": [{
            "difficulty": 30,
            "id": "goron-bracelet",
            "jp": "ゴロンの腕輪",
            "name": "Goron Bracelet",
            "skill": 0,
            "subtypes": {
                "plant": 0.5,
                "plant2": 0.5,
                "wallet": 0.25
            },
            "time": 15,
            "types": {
                "bottle": 2,
                "field": 0.75,
                "saria": 5,
                "selfsynergy": 0,
                "strength": 100,
                "zl": 6.75
            }
        }],
        "31": [{
            "difficulty": 31,
            "id": "3-songs",
            "jp": "歌3つ以上",
            "name": "3 Songs",
            "skill": 0,
            "subtypes": {
                "hearts": 2,
                "hearts2": 2,
                "plant": 0.5,
                "wallet": 0.25
            },
            "time": 15.5,
            "types": {
                "bottle": 2,
                "incsong": 100,
                "selfsynergy": 0,
                "songs": 2,
                "zl": 6.75
            }
        }],
        "32": [],
        "33": [],
        "34": [],
        "35": [{
            "difficulty": 35,
            "id": "both-heart-pieces-in-lost-woods",
            "jp": "迷いの森のハートのかけら２つ",
            "name": "Both heart pieces in Lost Woods",
            "skill": 0,
            "subtypes": {
                "hearts": 2,
                "plant": 0.5,
                "wallet": 0.25
            },
            "time": 17.75,
            "types": {
                "bottle": 2,
                "childtrade": 2.75,
                "field": 0.75,
                "saria": 3,
                "selfsynergy": 0,
                "zl": 6.75
            }
        }],
        "36": [],
        "37": [{
            "difficulty": 37,
            "id": "4-songs",
            "jp": "歌4つ以上",
            "name": "4 Songs",
            "skill": 0,
            "subtypes": {
                "hearts": 2,
                "hearts2": 2,
                "plant": 1,
                "wallet": 0.5
            },
            "time": 18.5,
            "types": {
                "bottle": 2,
                "incsong": 100,
                "selfsynergy": 0,
                "zl": 6.75
            }
        }],
        "38": [{
            "difficulty": 38,
            "id": "din-s-fire",
            "jp": "ディンの炎",
            "name": "Din's Fire",
            "skill": 0,
            "subtypes": {
                "hearts": 0.75,
                "plant": 0.5,
                "wallet": 0.5
            },
            "time": 19,
            "types": {
                "bottle": 2,
                "dins": 2,
                "dmc": 2.5,
                "field": 0.75,
                "magic": 2,
                "selfsynergy": 0,
                "zl": 6.75
            }
        }, {
            "difficulty": 38,
            "id": "farore-s-wind",
            "jp": "フロルの風",
            "name": "Farore's Wind",
            "skill": 0,
            "subtypes": {
                "hearts": 2,
                "hearts2": 2,
                "ruto": 1,
                "wallet": 0.5
            },
            "time": 19,
            "types": {
                "bottle": 2,
                "dmc": 1,
                "field": 0.75,
                "fountain": 2,
                "magic": 2,
                "selfsynergy": 0,
                "zl": 6.75
            }
        }],
        "39": [],
        "40": [],
        "41": [],
        "42": [],
        "43": [{
            "difficulty": 43,
            "id": "nayru-s-love",
            "jp": "ネールの愛",
            "name": "Nayru's Love",
            "skill": 0,
            "subtypes": {
                "bosskey": 2,
                "compass": 1,
                "hearts": 1.5,
                "map": 1,
                "plant2": 1,
                "wallet": 0.25
            },
            "time": 21.5,
            "types": {
                "bottle": 2,
                "dmc": 2.5,
                "endon": -0.5,
                "field": 0.75,
                "fortress": 2.5,
                "magic": 2,
                "selfsynergy": 0,
                "spirit": 2,
                "zl": 6.75
            }
        }],
        "44": [],
        "45": [],
        "46": [{
            "difficulty": 46,
            "id": "two-fairy-spells",
            "jp": "魔法のアイテム２つ",
            "name": "Two Fairy Spells",
            "skill": 0,
            "subtypes": {
                "bosskey": 3,
                "compass": 1,
                "hearts": 2,
                "hearts2": 2,
                "map": 1,
                "plant": 0.5,
                "plant2": 1.25,
                "ruto": 1,
                "wallet": 1
            },
            "time": 23,
            "types": {
                "bottle": 2,
                "childtrade": 2.75,
                "dmc": 1,
                "endon": -0.5,
                "fortress": 2.5,
                "fountain": 2,
                "magic": 2,
                "selfsynergy": 0,
                "spirit": 2,
                "zl": 4.25
            }
        }],
        "47": [],
        "48": [],
        "49": [],
        "50": [{
            "difficulty": 50,
            "id": "both-hyrule-field-area-skulltulas",
            "jp": "ハイラル平原エリアの黄金ノスタルチュラ2匹",
            "name": "Both Hyrule Field area Skulltulas",
            "skill": 0,
            "subtypes": {
                "compass": 1,
                "dins": 2,
                "dmc": 1,
                "magic": 2,
                "map": 1,
                "plant2": 0.5,
                "wallet": 1.25
            },
            "time": 25,
            "types": {
                "bottle": 2,
                "field": 0.75,
                "fortress": 1,
                "selfsynergy": 0,
                "zl": 6.75
            }
        }, {
            "difficulty": 50,
            "id": "ocarina-of-time",
            "jp": "時のオカリナ",
            "name": "Ocarina of Time",
            "skill": 0,
            "subtypes": {
                "compass": 15,
                "hearts": 12,
                "map": 15,
                "plant": 0.75,
                "plant2": 1.5,
                "wallet": 3
            },
            "time": 29,
            "types": {
                "dmc": 1,
                "field": 0.75,
                "selfsynergy": 0
            }
        }, {
            "difficulty": 50,
            "id": "spooky-mask",
            "jp": "こわそなお面",
            "name": "Spooky Mask",
            "skill": 0,
            "subtypes": {
                "bosskey": 2.5,
                "hearts": 2,
                "hearts2": 2,
                "plant": 0.5,
                "wallet": 0.25
            },
            "time": 25,
            "types": {
                "beans": 15,
                "childtrade": 6.5,
                "fortress": 3,
                "saria": 3,
                "selfsynergy": 0
            }
        }],
        "info": {
            "version": "v9.3"
        },
        "rowtypes": {},
        "synfilters": {
            "endon": "max -1"
        }
};
