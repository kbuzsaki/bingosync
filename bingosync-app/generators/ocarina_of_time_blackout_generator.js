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
    this.mode = options.mode || 'blackout';
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
        "0": [],
        "1": [{
            "difficulty": 1,
            "id": "30-deku-nuts",
            "jp": "デクの実30個以上",
            "name": "30 Deku Nuts",
            "rowtypes": {
                "bottle": 0,
                "gclw": 0.5,
                "hookshot": 0,
                "ms": 0
            },
            "skill": 0,
            "subtypes": {
                "songs5": 0.5
            },
            "time": 1,
            "types": {
                "forest": 0.5,
                "selfsynergy": 0
            },
            "weight": -0.10000000000000002
        }, {
            "difficulty": 1,
            "id": "bomb-bag-30-",
            "jp": "ボム袋(30)",
            "name": "Bomb Bag (30)",
            "rowtypes": {
                "bottle": 100,
                "gclw": 0,
                "hookshot": 0,
                "ms": 3
            },
            "skill": 0,
            "subtypes": {
                "bbprize": 100,
                "childchu": -2.5,
                "quiver": -0.5
            },
            "time": 0,
            "types": {
                "bombbag": 100,
                "selfsynergy": 0
            },
            "weight": 0.35000000000000003
        }, {
            "difficulty": 1,
            "id": "bottled-fairy",
            "jp": "ビン(妖精)",
            "name": "Bottled Fairy",
            "rowtypes": {
                "bottle": 100,
                "gclw": 0,
                "hookshot": 0,
                "ms": 0
            },
            "skill": 0,
            "time": 0.5,
            "types": {
                "selfsynergy": 0
            },
            "weight": -0.05000000000000002
        }, {
            "difficulty": 1,
            "id": "bullet-bag-50-",
            "jp": "デクのタネ袋(50)",
            "name": "Bullet Bag (50)",
            "rowtypes": {
                "bottle": 0,
                "gclw": 0,
                "hookshot": 0,
                "ms": 0
            },
            "skill": 0,
            "subtypes": {
                "hearts4": 1,
                "strength": -1
            },
            "time": 0.5,
            "types": {
                "bulletbag": 100,
                "selfsynergy": 0
            },
            "weight": 0.1
        }, {
            "difficulty": 1,
            "id": "defeat-a-skull-kid",
            "jp": "スタルキッド撃破",
            "name": "Defeat a Skull Kid",
            "rowtypes": {
                "bottle": 0,
                "gclw": 1,
                "hookshot": 0,
                "ms": 4
            },
            "skill": 0,
            "time": 0.75,
            "types": {
                "forest": 0.25,
                "selfsynergy": 0
            },
            "weight": -0.1
        }, {
            "difficulty": 1,
            "id": "exactly-20-deku-sticks",
            "jp": "デクの棒20本",
            "name": "Exactly 20 Deku Sticks",
            "rowtypes": {
                "bottle": 1,
                "gclw": 0,
                "hookshot": 0,
                "ms": 1
            },
            "skill": 0,
            "time": 0.75,
            "types": {
                "selfsynergy": 0,
                "sticks": 100
            },
            "weight": -0.10000000000000002
        }, {
            "difficulty": 1,
            "id": "giant-s-knife",
            "jp": "巨人のナイフ",
            "name": "Giant's Knife",
            "rowtypes": {
                "bottle": 100,
                "gclw": 1,
                "hookshot": 0,
                "ms": 100
            },
            "skill": 0,
            "subtypes": {
                "bulletbag": -3
            },
            "time": 1,
            "types": {
                "incsword": 100,
                "selfsynergy": 0,
                "swords": 3
            },
            "weight": -0.05
        }, {
            "difficulty": 1,
            "id": "lens-of-truth",
            "jp": "まことのメガネ",
            "name": "Lens of Truth",
            "rowtypes": {
                "bottle": 0,
                "gclw": 0,
                "hookshot": 0,
                "ms": 0
            },
            "skill": 0,
            "time": 0.25,
            "types": {
                "childchu": 0,
                "selfsynergy": 0
            },
            "weight": 0.10000000000000002
        }, {
            "difficulty": 1,
            "id": "map-compass-in-bottom-of-the-well",
            "jp": "井戸の底のマップとコンパス",
            "name": "Map & Compass in Bottom of the Well",
            "rowtypes": {
                "bottle": 0,
                "gclw": 0,
                "hookshot": 0,
                "ms": 0
            },
            "skill": 0,
            "subtypes": {
                "compass": 1,
                "map": 1
            },
            "time": 1,
            "types": {
                "childchu": 0,
                "selfsynergy": 0
            },
            "weight": -0.15000000000000002
        }],
        "2": [{
            "difficulty": 2,
            "id": "bolero-of-fire",
            "jp": "炎のボレロ",
            "name": "Bolero of Fire",
            "rowtypes": {
                "bottle": 0,
                "gclw": 1,
                "hookshot": 0.25,
                "ms": 100
            },
            "skill": 0,
            "subtypes": {
                "bosskey": 1.5,
                "gtunic": 0.25,
                "hearts3": 0.5,
                "songs5": 1.25
            },
            "time": 1.5,
            "types": {
                "dmc": 0.75,
                "selfsynergy": 0
            },
            "weight": 0
        }, {
            "difficulty": 2,
            "id": "exactly-30-deku-sticks",
            "jp": "デクの棒30本",
            "name": "Exactly 30 Deku Sticks",
            "rowtypes": {
                "bottle": 100,
                "gclw": 0,
                "hookshot": 0,
                "ms": 2
            },
            "skill": 0,
            "subtypes": {
                "bulletbag": 100,
                "childchu": -0.5
            },
            "time": 1.5,
            "types": {
                "selfsynergy": 0,
                "sticks": 100
            },
            "weight": -0.15000000000000002
        }, {
            "difficulty": 2,
            "id": "goron-tunic",
            "jp": "ゴロンの服",
            "name": "Goron Tunic",
            "rowtypes": {
                "bottle": 0,
                "gclw": 1,
                "hookshot": 0,
                "ms": 100
            },
            "skill": 0,
            "subtypes": {
                "bosskey": 0.5,
                "songs5": 0.25
            },
            "time": 1.5,
            "types": {
                "gtunic": 1.5,
                "inctunic": 100,
                "selfsynergy": 0
            },
            "weight": 0
        }, {
            "difficulty": 2,
            "id": "minuet-of-forest",
            "jp": "森のメヌエット",
            "name": "Minuet of Forest",
            "rowtypes": {
                "bottle": 0,
                "gclw": 1,
                "hookshot": 0,
                "ms": 100
            },
            "skill": 0,
            "subtypes": {
                "bosskey2": 1.5,
                "hovers": 0.25,
                "lightarrow": -1.5,
                "skulls": 0.5,
                "songs5": 1.5
            },
            "time": 1.75,
            "types": {
                "forest": 1.5,
                "incforest": 100,
                "selfsynergy": 0
            },
            "weight": 0
        }, {
            "difficulty": 2,
            "id": "quiver-40-",
            "jp": "矢立て(40)",
            "name": "Quiver (40)",
            "rowtypes": {
                "bottle": 100,
                "gclw": 0,
                "hookshot": 0,
                "ms": 100
            },
            "skill": 0,
            "subtypes": {
                "childchu": -2.5,
                "quiver": 0.25
            },
            "time": 1.5,
            "types": {
                "bombbag": 100,
                "selfsynergy": 0
            },
            "weight": 0.05000000000000002
        }, {
            "difficulty": 2,
            "id": "zora-tunic",
            "jp": "ゾーラの服",
            "name": "Zora Tunic",
            "rowtypes": {
                "bottle": 0,
                "gclw": 1,
                "hookshot": 0,
                "ms": 100
            },
            "skill": 0,
            "subtypes": {
                "compass": 1.5,
                "hearts3": 0.5,
                "map": 1.5,
                "skulls": 0.25
            },
            "time": 1.75,
            "types": {
                "fountain": 1.5,
                "inctunic": 100,
                "selfsynergy": 0
            },
            "weight": 0.1
        }],
        "3": [{
            "difficulty": 3,
            "id": "5-hearts",
            "jp": "ハート5つ",
            "name": "5 Hearts",
            "rowtypes": {
                "bottle": 0,
                "gclw": 0,
                "hookshot": 0,
                "ms": 1
            },
            "skill": 0,
            "time": 2.5,
            "types": {
                "hearts3": 4,
                "inchearts": 100,
                "selfsynergy": -1
            },
            "weight": 0.5500000000000002
        }, {
            "difficulty": 3,
            "id": "5-magic-beans",
            "jp": "魔法のマメ5つ以上",
            "name": "5 Magic Beans",
            "rowtypes": {
                "bottle": 0,
                "gclw": 0,
                "hookshot": 0,
                "ms": 0
            },
            "skill": 0,
            "subtypes": {
                "child2": 3,
                "skulls": 0.25
            },
            "time": 2.5,
            "types": {
                "beans": 5,
                "childreset": 0.5,
                "incbeans": 100,
                "selfsynergy": 0
            },
            "weight": -0.2
        }, {
            "difficulty": 3,
            "id": "both-hps-in-death-mountain-crater",
            "jp": "デスマウンテン火口のハートのかけら２つ",
            "name": "Both HPs in Death Mountain Crater",
            "rowtypes": {
                "bottle": 0,
                "gclw": 1,
                "hookshot": 0,
                "ms": 0.5
            },
            "skill": 0,
            "subtypes": {
                "bosskey": 1,
                "dmcchild": 0.25,
                "hearts3": 1.5,
                "hovers": 0.25,
                "songs5": 1.5
            },
            "time": 2,
            "types": {
                "dmc": 0.5,
                "selfsynergy": 0
            },
            "weight": -0.05
        }, {
            "difficulty": 3,
            "id": "lon-lon-ranch-hp",
            "jp": "ロンロン牧場のハートのかけら",
            "name": "Lon Lon Ranch HP",
            "rowtypes": {
                "bottle": 0,
                "gclw": 0,
                "hookshot": 0,
                "ms": 0
            },
            "skill": 0,
            "subtypes": {
                "hearts3": 0.75,
                "hearts4": 0.25
            },
            "time": 2.25,
            "types": {
                "lonlon": 1.75,
                "selfsynergy": 0
            },
            "weight": -0.15
        }, {
            "difficulty": 3,
            "id": "map-compass-in-dodongo-s-cavern",
            "jp": "ドドンゴの洞窟のマップとコンパス",
            "name": "Map & Compass in Dodongo's Cavern",
            "rowtypes": {
                "bottle": 0,
                "gclw": 0.5,
                "hookshot": 0,
                "ms": 0
            },
            "skill": 0,
            "subtypes": {
                "compass": 1.75,
                "map": 1
            },
            "time": 2,
            "types": {
                "dc": 1,
                "selfsynergy": 0
            },
            "weight": -0.15000000000000002
        }],
        "4": [{
            "difficulty": 4,
            "id": "3-tunics",
            "jp": "服3種",
            "name": "3 Tunics",
            "rowtypes": {
                "bottle": 0,
                "gclw": 1,
                "hookshot": 0,
                "ms": 100
            },
            "skill": 0,
            "subtypes": {
                "bosskey": 0.25,
                "compass": 1.5,
                "dmc": 0.25,
                "hearts3": 0.5,
                "map": 1.5,
                "skulls": 0.5
            },
            "time": 3.25,
            "types": {
                "fountain": 1.5,
                "gtunic": 1.5,
                "inctunic": 100,
                "selfsynergy": 0
            },
            "weight": 0.1
        }, {
            "difficulty": 4,
            "id": "fire-temple-boss-key",
            "jp": "炎の神殿のボス部屋の鍵",
            "name": "Fire Temple Boss Key",
            "rowtypes": {
                "bottle": 0.5,
                "gclw": 1,
                "hookshot": 100,
                "ms": 12.25
            },
            "skill": 0,
            "subtypes": {
                "bosskey": 2.5,
                "gtunic": 0.25,
                "hearts3": 0.5,
                "songs5": 1
            },
            "time": 3,
            "types": {
                "dmc": 1,
                "fire": 0.25,
                "firearrow": 2.5,
                "incfirebk": 100,
                "selfsynergy": 0
            },
            "weight": 0
        }, {
            "difficulty": 4,
            "id": "silver-scale",
            "jp": "銀のウロコ",
            "name": "Silver Scale",
            "rowtypes": {
                "bottle": 0,
                "gclw": 0,
                "hookshot": 0,
                "ms": 0
            },
            "skill": 0,
            "subtypes": {
                "bottleslot": 4,
                "skulls": 100,
                "strength": 100
            },
            "time": 3,
            "types": {
                "inclhskull": 2,
                "selfsynergy": 0
            },
            "weight": -0.10000000000000002
        }],
        "5": [{
            "difficulty": 5,
            "id": "3-songs",
            "jp": "歌3つ以上",
            "name": "3 Songs",
            "rowtypes": {
                "bottle": 100,
                "gclw": 0,
                "hookshot": 0.5,
                "ms": 5
            },
            "skill": 0,
            "subtypes": {
                "czl": 1,
                "hearts3": 0.5,
                "saria": 2,
                "skulls": 0.25
            },
            "time": 4,
            "types": {
                "bothzl": -4,
                "incsongs": 100,
                "poachers": 4,
                "selfsynergy": 0,
                "songs4": 3,
                "songs5": 2
            },
            "weight": 0.95
        }, {
            "difficulty": 5,
            "id": "4-maps",
            "jp": "マップ4つ",
            "name": "4 Maps",
            "rowtypes": {
                "bottle": 0,
                "gclw": 0.5,
                "hookshot": 0.5,
                "ms": 0.5
            },
            "skill": 0,
            "subtypes": {
                "bosskey2": 2,
                "compass": 6,
                "hearts4": 1
            },
            "time": 3.5,
            "types": {
                "childchu": 0,
                "hovers": 2,
                "incmc": 100,
                "map": 6,
                "selfsynergy": -3
            },
            "weight": 0.65
        }, {
            "difficulty": 5,
            "id": "4-songs",
            "jp": "歌4つ以上",
            "name": "4 Songs",
            "rowtypes": {
                "bottle": 100,
                "gclw": 1,
                "hookshot": 0.5,
                "ms": 7
            },
            "skill": 0,
            "subtypes": {
                "aganon": 0.25,
                "childchu": -2.5,
                "czl": 1,
                "hearts3": 1,
                "saria": 2
            },
            "time": 4,
            "types": {
                "incsongs": 100,
                "poachers": 4,
                "selfsynergy": 0,
                "songs4": 3,
                "songs5": 2
            },
            "weight": 0.8
        }, {
            "difficulty": 5,
            "id": "all-3-skulltulas-in-bottom-of-the-well",
            "jp": "井戸の底の黄金のスタルチュラ3匹",
            "name": "All 3 Skulltulas in Bottom of the Well",
            "rowtypes": {
                "bottle": 0,
                "gclw": 0,
                "hookshot": 0,
                "ms": 0
            },
            "skill": 0.25,
            "subtypes": {
                "skulls": 1.5
            },
            "time": 3.5,
            "types": {
                "childchu": 0,
                "selfsynergy": 0
            },
            "weight": -0.65
        }, {
            "difficulty": 5,
            "id": "blue-fire",
            "jp": "青い炎",
            "name": "Blue Fire",
            "rowtypes": {
                "bottle": 100,
                "gclw": 0,
                "hookshot": 0,
                "ms": 0
            },
            "skill": 0,
            "subtypes": {
                "bosskey": 2.5,
                "compass": 3,
                "hearts3": 1,
                "map": 3,
                "skulls": 0.75
            },
            "time": 3.5,
            "types": {
                "aganon": 2.5,
                "bganon": -2.5,
                "cganon": 2.5,
                "fountain": 2,
                "ice": 1.5,
                "selfsynergy": 0
            },
            "weight": -0.1
        }, {
            "difficulty": 5,
            "id": "both-gerudo-valley-hps",
            "jp": "ゲルドの谷のハートのかけら2つ",
            "name": "Both Gerudo Valley HPs",
            "rowtypes": {
                "bottle": 0,
                "gclw": 0,
                "hookshot": 0,
                "ms": 0
            },
            "skill": 0,
            "subtypes": {
                "bosskey": 1,
                "hearts3": 1.5,
                "hearts4": 0.5,
                "hovers": 0.5,
                "map": 1,
                "skulls": 0.25
            },
            "time": 3.5,
            "types": {
                "fortress": 1.5,
                "selfsynergy": 0
            },
            "weight": -0.2
        }, {
            "difficulty": 5,
            "id": "fairy-slingshot",
            "jp": "妖精のパチンコ",
            "name": "Fairy Slingshot",
            "rowtypes": {
                "bottle": 0,
                "gclw": 0,
                "hookshot": 0,
                "ms": 0
            },
            "skill": 0,
            "subtypes": {
                "bulletbag": 1,
                "compass": 2,
                "czl": 3,
                "hearts4": 1,
                "hovers": 0.5,
                "map": 2
            },
            "time": 3.75,
            "types": {
                "deku": 2.5,
                "selfsynergy": 0
            },
            "weight": -0.15000000000000002
        }, {
            "difficulty": 5,
            "id": "giant-s-wallet",
            "jp": "巨人のサイフ",
            "name": "Giant's Wallet",
            "rowtypes": {
                "bottle": 100,
                "gclw": 0,
                "hookshot": 2,
                "ms": 6
            },
            "skill": 0.25,
            "subtypes": {
                "bulletbag": 100,
                "childchu": -2.5
            },
            "time": 3.75,
            "types": {
                "incbeans": 100,
                "selfsynergy": -3,
                "skulls": 100
            },
            "weight": -0.35
        }, {
            "difficulty": 5,
            "id": "ice-cavern-hp",
            "jp": "氷の洞窟のハートのかけら",
            "name": "Ice Cavern HP",
            "rowtypes": {
                "bottle": 0,
                "gclw": 1,
                "hookshot": 0,
                "ms": 1
            },
            "skill": 0,
            "subtypes": {
                "compass": 3,
                "hearts3": 1.5,
                "map": 3,
                "skulls": 1
            },
            "time": 3.5,
            "types": {
                "fountain": 2,
                "ice": 1.5,
                "selfsynergy": 0
            },
            "weight": -0.2
        }, {
            "difficulty": 5,
            "id": "map-compass-in-deku-tree",
            "jp": "デクの樹様の中のマップとコンパス",
            "name": "Map & Compass in Deku Tree",
            "rowtypes": {
                "bottle": 0,
                "gclw": 0,
                "hookshot": 0,
                "ms": 0
            },
            "skill": 0.25,
            "subtypes": {
                "compass": 3,
                "czl": 3,
                "hearts4": 1,
                "hovers": 0.5,
                "map": 3,
                "skulls": 0.5
            },
            "time": 3.75,
            "types": {
                "deku": 3,
                "selfsynergy": 0
            },
            "weight": -0.15000000000000002
        }, {
            "difficulty": 5,
            "id": "ruto-s-letter",
            "jp": "ルトの手紙",
            "name": "Ruto's Letter",
            "rowtypes": {
                "bottle": 0,
                "gclw": 0,
                "hookshot": 0,
                "ms": 0
            },
            "skill": 0,
            "subtypes": {
                "bottleslot": 4.5,
                "child2": 3,
                "jabu": 1.5,
                "skulls": 0.5
            },
            "time": 4,
            "types": {
                "inclhskull": 2,
                "selfsynergy": 0
            },
            "weight": -0.6000000000000001
        }],
        "6": [{
            "difficulty": 6,
            "id": "2-boss-keys",
            "jp": "ボス部屋の鍵2つ",
            "name": "2 Boss Keys",
            "rowtypes": {
                "bottle": 0.5,
                "gclw": 1,
                "hookshot": 2,
                "ms": 2
            },
            "skill": 0,
            "subtypes": {
                "compass": 2,
                "hearts3": 1,
                "hearts4": 1,
                "map": 3
            },
            "time": 4.75,
            "types": {
                "aganon": 3,
                "bganon": -3,
                "bosskey": 6.75,
                "cganon": 3,
                "incbk": 100,
                "selfsynergy": -2
            },
            "weight": 0.6500000000000001
        }, {
            "difficulty": 6,
            "id": "3-swords-3-tunics",
            "jp": "剣3種、服3種",
            "name": "3 Swords & 3 Tunics",
            "rowtypes": {
                "bottle": 100,
                "gclw": 1,
                "hookshot": 0,
                "ms": 100
            },
            "skill": 0,
            "subtypes": {
                "bosskey": 0.25,
                "bulletbag": -3,
                "childchu": -1,
                "compass": 1,
                "dmc": 0.25,
                "hearts3": 0.5,
                "skulls": 0.5
            },
            "time": 4.75,
            "types": {
                "fountain": 1.5,
                "gtunic": 1.5,
                "incsword": 100,
                "inctunic": 100,
                "selfsynergy": 0,
                "swords": 3
            },
            "weight": 0
        }, {
            "difficulty": 6,
            "id": "all-3-kokiri-forest-area-skulltulas",
            "jp": "コキリの森エリアの黄金のスタルチュラ３匹",
            "name": "All 3 Kokiri Forest area Skulltulas",
            "rowtypes": {
                "bottle": 100,
                "gclw": 1,
                "hookshot": 0.5,
                "ms": 100
            },
            "skill": 0,
            "subtypes": {
                "child2": 1,
                "skulls": 1.5
            },
            "time": 4.5,
            "types": {
                "childreset": 1.25,
                "deku": 0.25,
                "selfsynergy": 0
            },
            "weight": -0.25
        }, {
            "difficulty": 6,
            "id": "all-3-skulltulas-in-ice-cavern",
            "jp": "氷の洞窟の黄金のスタルチュラ3匹",
            "name": "All 3 Skulltulas in Ice Cavern",
            "rowtypes": {
                "bottle": 0,
                "gclw": 1,
                "hookshot": 1.5,
                "ms": 1
            },
            "skill": 0.25,
            "subtypes": {
                "compass": 3,
                "hearts3": 1,
                "hovers": 0.5,
                "map": 3,
                "skulls": 1.5
            },
            "time": 4.25,
            "types": {
                "fountain": 2,
                "ice": 1.5,
                "irons": 0.5,
                "selfsynergy": 0
            },
            "weight": 0.1
        }, {
            "difficulty": 6,
            "id": "all-4-skulltulas-in-jabu-jabu",
            "jp": "ジャブジャブ様のお腹の黄金のスタルチュラ4匹",
            "name": "All 4 Skulltulas in Jabu-Jabu",
            "rowtypes": {
                "bottle": 0,
                "gclw": 1,
                "hookshot": 1,
                "ms": 1
            },
            "skill": 0.25,
            "subtypes": {
                "compass": 1.5,
                "hearts3": 0.5,
                "skulls": 2
            },
            "time": 4.5,
            "types": {
                "fountain": 2,
                "jabu": 2,
                "selfsynergy": 0
            },
            "weight": -0.05000000000000002
        }, {
            "difficulty": 6,
            "id": "beat-the-deku-tree",
            "jp": "デクの樹様の中クリア",
            "name": "Beat the Deku Tree",
            "rowtypes": {
                "bottle": 100,
                "gclw": 0,
                "hookshot": 0,
                "ms": 0
            },
            "skill": 0.25,
            "subtypes": {
                "cganon": 2,
                "compass": 2.5,
                "czl": 3,
                "hearts3": 3,
                "hearts4": 1,
                "hovers": 0.5,
                "map": 2,
                "skulls": 0.25
            },
            "time": 4.75,
            "types": {
                "deku": 5,
                "endon": -2,
                "incgohma": 100,
                "selfsynergy": 0
            },
            "weight": 0
        }, {
            "difficulty": 6,
            "id": "blue-potion",
            "jp": "青いクスリ",
            "name": "Blue Potion",
            "rowtypes": {
                "bottle": 100,
                "gclw": 1,
                "hookshot": 0.5,
                "ms": 5
            },
            "skill": 0,
            "subtypes": {
                "aganon": 0.25,
                "childchu": -2.5,
                "hearts3": 1
            },
            "time": 4.25,
            "types": {
                "poachers": 4,
                "selfsynergy": 0
            },
            "weight": 0.4000000000000001
        }, {
            "difficulty": 6,
            "id": "both-gerudo-s-fortress-area-skulltulas",
            "jp": "ゲルドの砦の黄金のスタルチュラ2匹",
            "name": "Both Gerudo's Fortress area Skulltulas",
            "rowtypes": {
                "bottle": 0,
                "gclw": 0,
                "hookshot": 100,
                "ms": 100
            },
            "skill": 0.25,
            "subtypes": {
                "hearts4": 0.5,
                "hovers": 0.5,
                "map": 2,
                "skulls": 1.25
            },
            "time": 4.5,
            "types": {
                "fortress": 2.5,
                "selfsynergy": 0
            },
            "weight": 0.05
        }, {
            "difficulty": 6,
            "id": "cow-in-house",
            "jp": "牛(リンクの家)",
            "name": "Cow in House",
            "rowtypes": {
                "bottle": 0,
                "gclw": 0,
                "hookshot": 0,
                "ms": 100
            },
            "skill": 0,
            "time": 4.5,
            "types": {
                "selfsynergy": 0
            },
            "weight": -0.4
        }, {
            "difficulty": 6,
            "id": "defeat-a-white-wolfos",
            "jp": "ホワイトウルフォス撃破",
            "name": "Defeat a White Wolfos",
            "rowtypes": {
                "bottle": 0,
                "gclw": 0,
                "hookshot": 0.5,
                "ms": 0
            },
            "skill": 0.25,
            "subtypes": {
                "compass": 3,
                "hearts3": 0.5,
                "hovers": 0.5,
                "map": 3,
                "skulls": 0.25
            },
            "time": 4.75,
            "types": {
                "fortress": 3,
                "fountain": 2,
                "gtg": 1.5,
                "ice": 1.5,
                "irons": 1.5,
                "selfsynergy": 0
            },
            "weight": 0.4
        }, {
            "difficulty": 6,
            "id": "defeat-all-lizalfos-in-dodongo-s-cavern",
            "jp": "ドドンゴの洞窟のリザルフォス全て撃破",
            "name": "Defeat all Lizalfos in Dodongo's Cavern",
            "rowtypes": {
                "bottle": 0,
                "gclw": 0.5,
                "hookshot": 0,
                "ms": 1
            },
            "skill": 0,
            "subtypes": {
                "compass": 2,
                "hearts4": 1,
                "map": 2,
                "skulls": 0.5
            },
            "time": 4.5,
            "types": {
                "dc": 2,
                "selfsynergy": 0
            },
            "weight": -0.2
        }, {
            "difficulty": 6,
            "id": "defeat-king-dodongo",
            "jp": "キングドドンゴ撃破",
            "name": "Defeat King Dodongo",
            "rowtypes": {
                "bottle": 0.5,
                "gclw": 0.5,
                "hookshot": 0,
                "ms": 1
            },
            "skill": 0,
            "subtypes": {
                "compass": 2,
                "hearts3": 3,
                "hearts4": 1,
                "map": 2,
                "skulls": 0.5
            },
            "time": 4.5,
            "types": {
                "dc": 3,
                "incdodongo": 100,
                "kd": 2,
                "selfsynergy": 0
            },
            "weight": -0.15000000000000002
        }, {
            "difficulty": 6,
            "id": "defeat-phantom-ganon",
            "jp": "ファントムガノン撃破",
            "name": "Defeat Phantom Ganon",
            "rowtypes": {
                "bottle": 0.5,
                "gclw": 1,
                "hookshot": 100,
                "ms": 3
            },
            "skill": 0,
            "subtypes": {
                "bosskey2": 3,
                "compass": 1,
                "hearts3": 3,
                "hearts4": 1,
                "hovers": 0.25,
                "map": 2,
                "skulls": 0.75,
                "songs5": 1.75
            },
            "time": 4.75,
            "types": {
                "endon": -0.5,
                "forest": 3,
                "incfboss": 100,
                "pg": 1.5,
                "selfsynergy": 0
            },
            "weight": -0.1
        }, {
            "difficulty": 6,
            "id": "defeat-queen-gohma",
            "jp": "ゴーマ撃破",
            "name": "Defeat Queen Gohma",
            "rowtypes": {
                "bottle": 0,
                "gclw": 0,
                "hookshot": 0,
                "ms": 0
            },
            "skill": 0,
            "subtypes": {
                "cganon": 1.5,
                "compass": 2,
                "czl": 1,
                "hearts3": 3,
                "hearts4": 1,
                "hovers": 0.5,
                "map": 2,
                "skulls": 0.25
            },
            "time": 4.25,
            "types": {
                "deku": 5,
                "endon": -0.25,
                "incgohma": 100,
                "selfsynergy": 0
            },
            "weight": 0
        }, {
            "difficulty": 6,
            "id": "fill-all-4-bottle-slots",
            "jp": "4つの空きビンスロットを全て埋める",
            "name": "Fill all 4 Bottle Slots",
            "rowtypes": {
                "bottle": 100,
                "gclw": 0,
                "hookshot": 0,
                "ms": 0.5
            },
            "skill": 0,
            "subtypes": {
                "child2": 3,
                "jabu": 1.5
            },
            "time": 4.75,
            "types": {
                "bottleslot": 4.5,
                "selfsynergy": 0
            },
            "weight": -0.25
        }, {
            "difficulty": 6,
            "id": "ganon-s-castle-boss-key",
            "jp": "ガノン城のボス部屋の鍵",
            "name": "Ganon's Castle Boss Key",
            "rowtypes": {
                "bottle": 100,
                "gclw": 0,
                "hookshot": 0,
                "ms": 0
            },
            "skill": 0,
            "subtypes": {
                "bosskey": 4.25,
                "childtrade": 1.5,
                "czl": 1.5,
                "hearts3": 2,
                "hearts4": 1,
                "skulls": 0.25
            },
            "time": 4.25,
            "types": {
                "aganon": 3,
                "bganon": -3,
                "cganon": 3,
                "endon": -0.5,
                "selfsynergy": 0
            },
            "weight": 0.05
        }, {
            "difficulty": 6,
            "id": "map-compass-in-ice-cavern",
            "jp": "氷の洞窟のマップとコンパス",
            "name": "Map & Compass in Ice Cavern",
            "rowtypes": {
                "bottle": 0.5,
                "gclw": 1,
                "hookshot": 0,
                "ms": 1.5
            },
            "skill": 0.25,
            "subtypes": {
                "compass": 3,
                "hearts3": 1.5,
                "map": 3,
                "skulls": 1
            },
            "time": 4.75,
            "types": {
                "fountain": 2,
                "ice": 2,
                "selfsynergy": 0
            },
            "weight": -0.05
        }, {
            "difficulty": 6,
            "id": "map-compass-in-shadow-temple",
            "jp": "闇の神殿のマップとコンパス",
            "name": "Map & Compass in Shadow Temple",
            "rowtypes": {
                "bottle": 0,
                "gclw": 0,
                "hookshot": 0.75,
                "ms": 0.5
            },
            "skill": 0,
            "subtypes": {
                "bosskey2": 3,
                "compass": 3,
                "map": 3,
                "poachers": 0.25
            },
            "time": 4.75,
            "types": {
                "hovers": 2.5,
                "selfsynergy": 0,
                "shadow": 1
            },
            "weight": 0.1
        }, {
            "difficulty": 6,
            "id": "plant-bean-in-death-mountain-crater",
            "jp": "デスマウンテン火口の土にマメを植える",
            "name": "Plant bean in Death Mountain Crater",
            "rowtypes": {
                "bottle": 0,
                "gclw": 0,
                "hookshot": 0,
                "ms": 0
            },
            "skill": 0.25,
            "subtypes": {
                "beans": -1,
                "child2": 2,
                "childreset": 1.25,
                "hearts3": 0.5,
                "skulls": 0.5
            },
            "time": 4.5,
            "types": {
                "childchu": 0,
                "dmcchild": 1.25,
                "selfsynergy": 0
            },
            "weight": -0.30000000000000004
        }],
        "7": [{
            "difficulty": 7,
            "id": "15-different-skulltulas",
            "jp": "スタルチュラのしるし15個(増殖禁止)",
            "name": "15 Different Skulltulas",
            "rowtypes": {
                "bottle": 1,
                "gclw": 0.5,
                "hookshot": 2,
                "ms": 2
            },
            "skill": 0.5,
            "time": 5,
            "types": {
                "selfsynergy": -2,
                "skulls": 8
            },
            "weight": -0.2
        }, {
            "difficulty": 7,
            "id": "3-lake-hylia-skulltulas",
            "jp": "ハイリア湖畔エリアの黄金のスタルチュラ3匹以上",
            "name": "3 Lake Hylia Skulltulas",
            "rowtypes": {
                "bottle": 1.5,
                "gclw": 0,
                "hookshot": 0,
                "ms": 0
            },
            "skill": 0.25,
            "subtypes": {
                "bottleslot": 2,
                "child2": 2,
                "skulls": 1.5
            },
            "time": 5.5,
            "types": {
                "inclhskull": 100,
                "selfsynergy": 0
            },
            "weight": -0.44999999999999996
        }, {
            "difficulty": 7,
            "id": "4-unused-keys-in-gerudo-training-grounds",
            "jp": "ゲルドの修練場の未使用の鍵4つ",
            "name": "4 Unused Keys in Gerudo Training Grounds",
            "rowtypes": {
                "bottle": 0,
                "gclw": 0,
                "hookshot": 1,
                "ms": 0
            },
            "skill": 0.25,
            "subtypes": {
                "bosskey": 3,
                "hearts4": 0.25,
                "hovers": 0.5,
                "map": 3,
                "skulls": 0.25
            },
            "time": 5.25,
            "types": {
                "endon": -0.25,
                "fortress": 3,
                "gtg": 3,
                "incgtgkey": 100,
                "selfsynergy": 0
            },
            "weight": 0.1
        }, {
            "difficulty": 7,
            "id": "500-rupees",
            "jp": "500ルピー",
            "name": "500 Rupees",
            "rowtypes": {
                "bottle": 100,
                "gclw": 0,
                "hookshot": 2,
                "ms": 7
            },
            "skill": 0.25,
            "subtypes": {
                "bulletbag": 100,
                "childchu": -2.5
            },
            "time": 5.25,
            "types": {
                "selfsynergy": -3,
                "skulls": 100
            },
            "weight": -0.30000000000000004
        }, {
            "difficulty": 7,
            "id": "6-songs",
            "jp": "歌6つ以上",
            "name": "6 Songs",
            "rowtypes": {
                "bottle": 100,
                "gclw": 1,
                "hookshot": 0.5,
                "ms": 100
            },
            "skill": 0,
            "subtypes": {
                "aganon": 0.25,
                "childchu": -2.5,
                "hearts3": 1.5,
                "skulls": 0.25
            },
            "time": 5.25,
            "types": {
                "incsongs": 100,
                "poachers": 4,
                "selfsynergy": 0,
                "songs5": 1.25
            },
            "weight": 0.65
        }, {
            "difficulty": 7,
            "id": "all-4-lost-woods-area-skulltulas",
            "jp": "迷いの森エリアの黄金のスタルチュラ4匹",
            "name": "All 4 Lost Woods area Skulltulas",
            "rowtypes": {
                "bottle": 100,
                "gclw": 1,
                "hookshot": 2,
                "ms": 100
            },
            "skill": 0,
            "subtypes": {
                "skulls": 2,
                "songs5": 1
            },
            "time": 5.25,
            "types": {
                "childreset": 1.25,
                "forest": 1,
                "saria": 0.25,
                "selfsynergy": 0
            },
            "weight": -0.39999999999999997
        }, {
            "difficulty": 7,
            "id": "beat-the-forest-temple",
            "jp": "森の神殿クリア",
            "name": "Beat the Forest Temple",
            "rowtypes": {
                "bottle": 0.5,
                "gclw": 1,
                "hookshot": 100,
                "ms": 3
            },
            "skill": 0,
            "subtypes": {
                "bosskey2": 2,
                "compass": 1,
                "hearts3": 3,
                "hearts4": 1,
                "hovers": 0.25,
                "map": 2,
                "skulls": 0.75,
                "songs5": 1.75
            },
            "time": 5,
            "types": {
                "endon": -1,
                "forest": 3,
                "incfboss": 100,
                "pg": 2.25,
                "selfsynergy": 0
            },
            "weight": -0.2
        }, {
            "difficulty": 7,
            "id": "bullet-bag-40-",
            "jp": "デクのタネ袋(40)",
            "name": "Bullet Bag (40)",
            "rowtypes": {
                "bottle": 0,
                "gclw": 0,
                "hookshot": 0,
                "ms": 0
            },
            "skill": 0,
            "subtypes": {
                "czl": 3,
                "hearts4": 1,
                "strength": -1
            },
            "time": 5,
            "types": {
                "bulletbag": 100,
                "childreset": 0.5,
                "deku": 3,
                "selfsynergy": 0
            },
            "weight": -0.05000000000000002
        }, {
            "difficulty": 7,
            "id": "forest-medallion",
            "jp": "森のメダル",
            "name": "Forest Medallion",
            "rowtypes": {
                "bottle": 100,
                "gclw": 1,
                "hookshot": 1,
                "ms": 3
            },
            "skill": 0,
            "subtypes": {
                "bosskey2": 2,
                "childchu": -1,
                "compass": 1,
                "hearts3": 2,
                "hearts4": 1,
                "hovers": 0.25,
                "map": 3,
                "skulls": 0.75,
                "songs5": 1.75
            },
            "time": 5.5,
            "types": {
                "endon": -1,
                "forest": 4,
                "fortress": 2,
                "incfboss": 100,
                "inclacs": 100,
                "pg": 4,
                "poachers": 4,
                "selfsynergy": 0
            },
            "weight": 0.95
        }, {
            "difficulty": 7,
            "id": "ice-arrows",
            "jp": "氷の矢",
            "name": "Ice Arrows",
            "rowtypes": {
                "bottle": 0,
                "gclw": 0,
                "hookshot": 1,
                "ms": 0
            },
            "skill": 0.25,
            "subtypes": {
                "bosskey": 3.5,
                "hearts3": 0.5,
                "hearts4": 0.25,
                "hovers": 0.75,
                "incarrows": 100,
                "kd": 2,
                "map": 3,
                "quiver": 4.5,
                "skulls": 0.25
            },
            "time": 5,
            "types": {
                "fortress": 3,
                "gtg": 1,
                "selfsynergy": 0
            },
            "weight": 0.2
        }, {
            "difficulty": 7,
            "id": "iron-boots",
            "jp": "ヘビーブーツ",
            "name": "Iron Boots",
            "rowtypes": {
                "bottle": 0,
                "gclw": 1,
                "hookshot": 0,
                "ms": 2
            },
            "skill": 0.25,
            "subtypes": {
                "compass": 3,
                "hearts3": 1,
                "hearts4": 0.25,
                "hovers": 0.25,
                "map": 3,
                "skulls": 1,
                "songs4": 1.5
            },
            "time": 5.5,
            "types": {
                "endon": -0.5,
                "fountain": 2,
                "ice": 1.5,
                "incboot": 100,
                "incirons": 100,
                "irons": 2,
                "selfsynergy": 0
            },
            "weight": -0.1
        }, {
            "difficulty": 7,
            "id": "milk",
            "jp": "ロンロン牛乳",
            "name": "Milk",
            "rowtypes": {
                "bottle": 100,
                "gclw": 0,
                "hookshot": 0,
                "ms": 0
            },
            "skill": 0,
            "subtypes": {
                "bottleslot": 4.5,
                "childreset": 1,
                "czl": 2.5,
                "skulls": 0.5,
                "songs4": 0.5
            },
            "time": 5.5,
            "types": {
                "lonlon": 4,
                "selfsynergy": 0
            },
            "weight": -0.25000000000000006
        }, {
            "difficulty": 7,
            "id": "water-temple-boss-key",
            "jp": "水の神殿のボス部屋のカギ",
            "name": "Water Temple Boss Key",
            "rowtypes": {
                "bottle": 100,
                "gclw": 0,
                "hookshot": 1,
                "ms": 0
            },
            "skill": 0.25,
            "subtypes": {
                "bosskey": 4.25,
                "hearts3": 0.5,
                "hearts4": 0.25,
                "hovers": 0.75,
                "incarrows": 100,
                "map": 3,
                "skulls": 0.25
            },
            "time": 5.5,
            "types": {
                "fortress": 3,
                "selfsynergy": 0,
                "water": 1
            },
            "weight": 0.05
        }],
        "8": [{
            "difficulty": 8,
            "id": "3-unused-keys-in-gerudo-training-grounds",
            "jp": "ゲルドの修練場の未使用の鍵3つ",
            "name": "3 Unused Keys in Gerudo Training Grounds",
            "rowtypes": {
                "bottle": 0,
                "gclw": 0,
                "hookshot": 1,
                "ms": 0
            },
            "skill": 0.25,
            "subtypes": {
                "bosskey": 3,
                "hearts4": 0.25,
                "hovers": 0.75,
                "map": 3,
                "skulls": 0.25
            },
            "time": 6,
            "types": {
                "endon": -0.25,
                "fortress": 3,
                "gtg": 2,
                "incgtgkey": 100,
                "selfsynergy": 0
            },
            "weight": 0.15000000000000002
        }, {
            "difficulty": 8,
            "id": "37th-heart-piece-child-fortress-",
            "jp": "37番目のハートのかけら(子供のゲルドの砦)",
            "name": "37th Heart Piece (Child Fortress)",
            "rowtypes": {
                "bottle": 0,
                "gclw": 0,
                "hookshot": 0,
                "ms": 0
            },
            "skill": 0.25,
            "subtypes": {
                "bosskey": 2,
                "child2": 2,
                "hearts3": 0.75,
                "hearts4": 0.5,
                "kd": 2,
                "map": 2,
                "poachers": 3
            },
            "time": 6,
            "types": {
                "childreset": 1.25,
                "fortress": 2.5,
                "selfsynergy": 0
            },
            "weight": 0.3
        }, {
            "difficulty": 8,
            "id": "4-compasses",
            "jp": "コンパス4つ",
            "name": "4 Compasses",
            "rowtypes": {
                "bottle": 0,
                "gclw": 0.5,
                "hookshot": 0.5,
                "ms": 0.75
            },
            "skill": 0,
            "subtypes": {
                "bosskey2": 2,
                "hearts4": 1,
                "map": 7
            },
            "time": 6,
            "types": {
                "childchu": 0,
                "compass": 7,
                "hovers": 2,
                "incmc": 100,
                "selfsynergy": -3
            },
            "weight": 1.05
        }, {
            "difficulty": 8,
            "id": "4-unused-keys-in-forest-temple",
            "jp": "森の神殿の未使用の小さな鍵4つ",
            "name": "4 Unused Keys in Forest Temple",
            "rowtypes": {
                "bottle": 0.5,
                "gclw": 1,
                "hookshot": 100,
                "ms": 3
            },
            "skill": 0,
            "subtypes": {
                "bosskey2": 3,
                "hearts4": 1,
                "hovers": 0.75,
                "irons": 0.75,
                "map": 3,
                "skulls": 1.5,
                "songs5": 1.75
            },
            "time": 6.25,
            "types": {
                "forest": 3,
                "incforest": 100,
                "selfsynergy": 0
            },
            "weight": 0
        }, {
            "difficulty": 8,
            "id": "6-hearts",
            "jp": "ハート6つ",
            "name": "6 Hearts",
            "rowtypes": {
                "bottle": 0,
                "gclw": 0,
                "hookshot": 0,
                "ms": 2
            },
            "skill": 0.25,
            "time": 6.25,
            "types": {
                "hearts3": 7,
                "inchearts": 100,
                "selfsynergy": -1
            },
            "weight": 0.15
        }, {
            "difficulty": 8,
            "id": "7-magic-beans",
            "jp": "魔法のマメ7つ以上",
            "name": "7 Magic Beans",
            "rowtypes": {
                "bottle": 0,
                "gclw": 0,
                "hookshot": 0,
                "ms": 0
            },
            "skill": 0.25,
            "subtypes": {
                "child2": 3,
                "skulls": 0.25
            },
            "time": 6.25,
            "types": {
                "beans": 6,
                "childreset": 0.5,
                "incbeans": 100,
                "selfsynergy": 0
            },
            "weight": -0.35
        }, {
            "difficulty": 8,
            "id": "all-4-lon-lon-ranch-area-skulltulas",
            "jp": "ロンロン牧場エリアの黄金のスタルチュラ4匹",
            "name": "All 4 Lon-Lon Ranch area Skulltulas",
            "rowtypes": {
                "bottle": 100,
                "gclw": 0,
                "hookshot": 0,
                "ms": 0
            },
            "skill": 0.75,
            "subtypes": {
                "hearts4": 0.25,
                "jabu": 3,
                "skulls": 2
            },
            "time": 5.75,
            "types": {
                "childchu": 0,
                "lonlon": 1.75,
                "selfsynergy": 0
            },
            "weight": -0.5
        }, {
            "difficulty": 8,
            "id": "all-5-skulltulas-in-dodongo-s-cavern",
            "jp": "ドドンゴの洞窟の黄金のスタルチュラ5匹",
            "name": "All 5 Skulltulas in Dodongo's Cavern",
            "rowtypes": {
                "bottle": 0,
                "gclw": 0.5,
                "hookshot": 0.25,
                "ms": 1.5
            },
            "skill": 0,
            "subtypes": {
                "compass": 2,
                "hearts3": 1,
                "hearts4": 1,
                "hovers": 0.25,
                "map": 1,
                "skulls": 2.5
            },
            "time": 5.75,
            "types": {
                "dc": 4,
                "selfsynergy": 0
            },
            "weight": -0.2
        }, {
            "difficulty": 8,
            "id": "all-8-kakariko-area-skulltulas",
            "jp": "カカリコ村エリアの黄金のスタルチュラ8匹",
            "name": "All 8 Kakariko area Skulltulas",
            "rowtypes": {
                "bottle": 100,
                "gclw": 0,
                "hookshot": 1.5,
                "ms": 100
            },
            "skill": 0.25,
            "subtypes": {
                "jabu": 0.5,
                "skulls": 4
            },
            "time": 6.25,
            "types": {
                "childchu": 0,
                "selfsynergy": 0
            },
            "weight": -0.55
        }, {
            "difficulty": 8,
            "id": "beat-dodongo-s-cavern",
            "jp": "ドドンゴの洞窟クリア",
            "name": "Beat Dodongo's Cavern",
            "rowtypes": {
                "bottle": 0.5,
                "gclw": 0.5,
                "hookshot": 0,
                "ms": 1
            },
            "skill": 0.25,
            "subtypes": {
                "compass": 2,
                "hearts3": 3,
                "hearts4": 1,
                "map": 2,
                "skulls": 0.5
            },
            "time": 6.25,
            "types": {
                "dc": 3,
                "fortress": 2,
                "incdodongo": 100,
                "kd": 2,
                "selfsynergy": 0
            },
            "weight": 0
        }, {
            "difficulty": 8,
            "id": "defeat-big-octo",
            "jp": "大オクタ撃破",
            "name": "Defeat Big Octo",
            "rowtypes": {
                "bottle": 0,
                "gclw": 1,
                "hookshot": 0,
                "ms": 2
            },
            "skill": 0.25,
            "subtypes": {
                "compass": 1.5,
                "hearts3": 0.5,
                "skulls": 0.75
            },
            "time": 6.25,
            "types": {
                "fountain": 2,
                "jabu": 2,
                "selfsynergy": 0
            },
            "weight": -0.3
        }, {
            "difficulty": 8,
            "id": "defeat-bongo-bongo",
            "jp": "ボンゴボンゴ撃破",
            "name": "Defeat Bongo-Bongo",
            "rowtypes": {
                "bottle": 100,
                "gclw": 0,
                "hookshot": 100,
                "ms": 4
            },
            "skill": 0.5,
            "subtypes": {
                "bosskey2": 2,
                "hearts3": 3,
                "hearts4": 1,
                "poachers": 0.25,
                "skulls": 0.25
            },
            "time": 6,
            "types": {
                "deku": 2,
                "endon": -0.25,
                "hovers": 2.5,
                "incshboss": 100,
                "legitlacs": 100,
                "selfsynergy": 0,
                "shadow": 5
            },
            "weight": 0.1
        }, {
            "difficulty": 8,
            "id": "defeat-morpha",
            "jp": "モーファ撃破",
            "name": "Defeat Morpha",
            "rowtypes": {
                "bottle": 0,
                "gclw": 0,
                "hookshot": 100,
                "ms": 3
            },
            "skill": 0.25,
            "subtypes": {
                "compass": 2.5,
                "hearts3": 3,
                "hearts4": 1,
                "hovers": 1,
                "map": 2.5,
                "poachers": 1.25
            },
            "time": 5.75,
            "types": {
                "endon": -0.5,
                "incwboss": 100,
                "selfsynergy": 0,
                "water": 7
            },
            "weight": 0.1
        }, {
            "difficulty": 8,
            "id": "golden-gauntlets",
            "jp": "金のグローブ",
            "name": "Golden Gauntlets",
            "rowtypes": {
                "bottle": 100,
                "gclw": 0,
                "hookshot": 2.5,
                "ms": 0
            },
            "skill": 0.75,
            "subtypes": {
                "bombbag": 100,
                "bosskey": 2.5,
                "hovers": 1,
                "skulls": 0.25
            },
            "time": 5.75,
            "types": {
                "aganon": 3,
                "bganon": -3,
                "cganon": 3,
                "endon": -0.5,
                "incshtrial": 100,
                "selfsynergy": 0,
                "strength": 100
            },
            "weight": 0.1
        }, {
            "difficulty": 8,
            "id": "map-compass-in-water-temple",
            "jp": "水の神殿のマップとコンパス",
            "name": "Map & Compass in Water Temple",
            "rowtypes": {
                "bottle": 0,
                "gclw": 0.5,
                "hookshot": 0,
                "ms": 1.5
            },
            "skill": 0.5,
            "subtypes": {
                "compass": 3,
                "hearts4": 1,
                "map": 3,
                "poachers": 1.25
            },
            "time": 6.25,
            "types": {
                "gtg": 1,
                "selfsynergy": 0,
                "water": 3
            },
            "weight": -0.05
        }],
        "9": [{
            "difficulty": 9,
            "id": "5-maps",
            "jp": "マップ5つ",
            "name": "5 Maps",
            "rowtypes": {
                "bottle": 0,
                "gclw": 1,
                "hookshot": 0.5,
                "ms": 1.5
            },
            "skill": 0.25,
            "subtypes": {
                "bosskey2": 2,
                "compass": 9,
                "hearts3": 1,
                "hearts4": 1,
                "skulls": 0.5
            },
            "time": 7,
            "types": {
                "childchu": 0,
                "hovers": 2,
                "incmc": 100,
                "map": 9,
                "selfsynergy": -3
            },
            "weight": 0.5
        }, {
            "difficulty": 9,
            "id": "5-unused-keys-in-gerudo-training-grounds",
            "jp": "ゲルドの修練場の未使用の鍵5つ",
            "name": "5 Unused Keys in Gerudo Training Grounds",
            "rowtypes": {
                "bottle": 0,
                "gclw": 0,
                "hookshot": 1,
                "ms": 0
            },
            "skill": 0.25,
            "subtypes": {
                "bosskey": 3,
                "hearts4": 0.25,
                "hovers": 0.75,
                "map": 3,
                "skulls": 0.25
            },
            "time": 7,
            "types": {
                "endon": -0.25,
                "fortress": 3,
                "gtg": 4,
                "incgtgkey": 100,
                "selfsynergy": 0
            },
            "weight": 0
        }, {
            "difficulty": 9,
            "id": "7-songs",
            "jp": "歌7つ以上",
            "name": "7 Songs",
            "rowtypes": {
                "bottle": 100,
                "gclw": 1,
                "hookshot": 0.5,
                "ms": 100
            },
            "skill": 0,
            "subtypes": {
                "aganon": 0.25,
                "bosskey": 1.5,
                "child2": 2,
                "childchu": -2.5,
                "hearts3": 0.5,
                "skulls": 0.5
            },
            "time": 7,
            "types": {
                "incsongs": 100,
                "poachers": 4,
                "selfsynergy": 0,
                "songs5": 3.25
            },
            "weight": 0.5499999999999999
        }, {
            "difficulty": 9,
            "id": "all-4-gerudo-valley-area-skulltulas",
            "jp": "ゲルドの谷エリアの黄金のスタルチュラ4匹",
            "name": "All 4 Gerudo Valley area Skulltulas",
            "rowtypes": {
                "bottle": 100,
                "gclw": 0,
                "hookshot": 2,
                "ms": 100
            },
            "skill": 0.25,
            "subtypes": {
                "bosskey": 1.5,
                "child2": 1.5,
                "hearts3": 0.5,
                "hearts4": 0.25,
                "hovers": 0.25,
                "jabu": 0.5,
                "map": 1.5,
                "skulls": 2
            },
            "time": 7,
            "types": {
                "childchu": 0,
                "fortress": 2,
                "selfsynergy": 0
            },
            "weight": -0.5
        }, {
            "difficulty": 9,
            "id": "all-5-skulltulas-in-forest-temple",
            "jp": "森の神殿の黄金のスタルチュラ5匹",
            "name": "All 5 Skulltulas in Forest Temple",
            "rowtypes": {
                "bottle": 100,
                "gclw": 1,
                "hookshot": 100,
                "ms": 4
            },
            "skill": 0.25,
            "subtypes": {
                "bosskey2": 5,
                "compass": 1,
                "hearts4": 1,
                "hovers": 0.75,
                "map": 2.75,
                "skulls": 2.5,
                "songs5": 1.75
            },
            "time": 6.75,
            "types": {
                "forest": 3,
                "meg": 1,
                "selfsynergy": 0
            },
            "weight": -0.2
        }, {
            "difficulty": 9,
            "id": "beat-the-shadow-temple",
            "jp": "闇の神殿クリア",
            "name": "Beat the Shadow Temple",
            "rowtypes": {
                "bottle": 100,
                "gclw": 0,
                "hookshot": 100,
                "ms": 4
            },
            "skill": 0.75,
            "subtypes": {
                "bosskey2": 2,
                "hearts3": 3,
                "hearts4": 1,
                "poachers": 0.25,
                "skulls": 0.25
            },
            "time": 6.75,
            "types": {
                "deku": 2,
                "endon": -1,
                "hovers": 2.5,
                "incshboss": 100,
                "legitlacs": 100,
                "selfsynergy": 0,
                "shadow": 5
            },
            "weight": 0
        }, {
            "difficulty": 9,
            "id": "beat-the-water-temple",
            "jp": "水の神殿クリア",
            "name": "Beat the Water Temple",
            "rowtypes": {
                "bottle": 0,
                "gclw": 0,
                "hookshot": 100,
                "ms": 3
            },
            "skill": 0.25,
            "subtypes": {
                "compass": 2.5,
                "hearts3": 3,
                "hearts4": 1,
                "hovers": 1,
                "map": 2.5,
                "poachers": 1.25
            },
            "time": 6.5,
            "types": {
                "endon": -1,
                "incwboss": 100,
                "selfsynergy": 0,
                "water": 7
            },
            "weight": 0
        }, {
            "difficulty": 9,
            "id": "boomerang",
            "jp": "ブーメラン",
            "name": "Boomerang",
            "rowtypes": {
                "bottle": 0,
                "gclw": 1,
                "hookshot": 0,
                "ms": 1
            },
            "skill": 0.25,
            "subtypes": {
                "compass": 2,
                "hearts3": 1,
                "hearts4": 1,
                "map": 2,
                "skulls": 1
            },
            "time": 6.5,
            "types": {
                "fountain": 2,
                "incbarinade": 100,
                "jabu": 4,
                "selfsynergy": 0
            },
            "weight": -0.25
        }, {
            "difficulty": 9,
            "id": "defeat-dark-link",
            "jp": "ダークリンク撃破",
            "name": "Defeat Dark Link",
            "rowtypes": {
                "bottle": 100,
                "gclw": 0.5,
                "hookshot": 100,
                "ms": 7
            },
            "skill": 0.25,
            "subtypes": {
                "bbprize": -6,
                "childchu": -2.5,
                "compass": 3.5,
                "hearts4": 1,
                "hovers": 0.5,
                "map": 3.5,
                "poachers": 1.25,
                "skulls": 0.25
            },
            "time": 7,
            "types": {
                "dc": 2,
                "inclong": 100,
                "longshot": 4,
                "selfsynergy": 0,
                "water": 3
            },
            "weight": -0.15000000000000002
        }, {
            "difficulty": 9,
            "id": "epona-s-song",
            "jp": "エポナの歌",
            "name": "Epona's Song",
            "rowtypes": {
                "bottle": 0,
                "gclw": 0,
                "hookshot": 0,
                "ms": 0
            },
            "skill": 0,
            "subtypes": {
                "bottleslot": 3,
                "childreset": 1,
                "czl": 2.5,
                "marketgs": 2,
                "poachers": -100,
                "skulls": 0.5,
                "songs4": 1.75,
                "songs5": -3
            },
            "time": 6.75,
            "types": {
                "lonlon": 4,
                "selfsynergy": 0
            },
            "weight": 0.15000000000000002
        }, {
            "difficulty": 9,
            "id": "longshot",
            "jp": "ロングフック",
            "name": "Longshot",
            "rowtypes": {
                "bottle": 100,
                "gclw": 0.5,
                "hookshot": 100,
                "ms": 7
            },
            "skill": 0,
            "subtypes": {
                "bbprize": -6,
                "childchu": -2.5,
                "compass": 3.5,
                "hearts4": 1,
                "hovers": 0.25,
                "map": 3.5,
                "poachers": 1.25,
                "skulls": 0.25
            },
            "time": 7,
            "types": {
                "dc": 2,
                "inclong": 100,
                "longshot": 5,
                "selfsynergy": 0,
                "water": 3
            },
            "weight": -0.2
        }, {
            "difficulty": 9,
            "id": "stone-of-agony",
            "jp": "もだえ石",
            "name": "Stone of Agony",
            "rowtypes": {
                "bottle": 0,
                "gclw": 1,
                "hookshot": 100,
                "ms": 4
            },
            "skill": 0.5,
            "subtypes": {
                "hovers": 1
            },
            "time": 7,
            "types": {
                "forest": 0.5,
                "selfsynergy": 0
            },
            "weight": -0.39999999999999997
        }, {
            "difficulty": 9,
            "id": "water-medallion",
            "jp": "水のメダル",
            "name": "Water Medallion",
            "rowtypes": {
                "bottle": 100,
                "gclw": 0,
                "hookshot": 0.5,
                "ms": 3
            },
            "skill": 0,
            "subtypes": {
                "childchu": -1,
                "compass": 2.5,
                "hearts3": 3,
                "hearts4": 1,
                "hovers": 0.5,
                "map": 2.5
            },
            "time": 6.5,
            "types": {
                "fortress": 2,
                "inclacs": 100,
                "poachers": 4,
                "selfsynergy": 0,
                "water": 6.5
            },
            "weight": 0.7500000000000001
        }, {
            "difficulty": 9,
            "id": "win-bombchu-bowling-prize",
            "jp": "ボムチュウボウリングの景品を何か1つ入手",
            "name": "Win Bombchu Bowling Prize",
            "rowtypes": {
                "bottle": 0,
                "gclw": 0,
                "hookshot": 0,
                "ms": 0
            },
            "skill": 0.5,
            "subtypes": {
                "child2": 3,
                "compass": 2,
                "hearts3": 3,
                "hearts4": 1,
                "map": 2,
                "skulls": 0.5
            },
            "time": 6.75,
            "types": {
                "bbprize": 100,
                "childchu": 0,
                "dc": 3,
                "fortress": 1,
                "gtg": 1,
                "incdodongo": 100,
                "kd": 3,
                "selfsynergy": 0
            },
            "weight": -0.25
        }],
        "10": [{
            "difficulty": 10,
            "id": "1-skulltula-from-each-child-dungeon",
            "jp": "全ての子供ダンジョンからスタルチュラ最低1匹ずつ",
            "name": "1 Skulltula from each Child Dungeon",
            "rowtypes": {
                "bottle": 0,
                "gclw": 1,
                "hookshot": 0.5,
                "ms": 3
            },
            "skill": 0.25,
            "subtypes": {
                "compass": 4,
                "hearts3": 1,
                "hearts4": 1.5,
                "jabu": 2,
                "map": 4,
                "skulls": 2
            },
            "time": 7.25,
            "types": {
                "dc": 1,
                "deku": 2,
                "fountain": 2,
                "selfsynergy": 0
            },
            "weight": 0
        }, {
            "difficulty": 10,
            "id": "all-4-skulltulas-in-deku-tree",
            "jp": "デクの樹様の中の黄金のスタルチュラ4匹",
            "name": "All 4 Skulltulas in Deku Tree",
            "rowtypes": {
                "bottle": 0,
                "gclw": 0,
                "hookshot": 1,
                "ms": 0
            },
            "skill": 0.25,
            "subtypes": {
                "compass": 3,
                "hearts3": 0.5,
                "hearts4": 1,
                "hovers": 1,
                "map": 2,
                "skulls": 2
            },
            "time": 7.25,
            "types": {
                "deku": 3,
                "quiver": 1.75,
                "selfsynergy": 0
            },
            "weight": 0
        }, {
            "difficulty": 10,
            "id": "all-8-death-mountain-area-skulltulas",
            "jp": "デスマウンテンエリアの黄金のスタルチュラ8匹",
            "name": "All 8 Death Mountain area Skulltulas",
            "rowtypes": {
                "bottle": 100,
                "gclw": 0.75,
                "hookshot": 0.25,
                "ms": 100
            },
            "skill": 0.5,
            "subtypes": {
                "child2": 3,
                "childreset": 1.25,
                "hearts3": 0.5,
                "skulls": 4
            },
            "time": 7.5,
            "types": {
                "childchu": 0,
                "dmc": 0.25,
                "dmcchild": 1.25,
                "selfsynergy": 0
            },
            "weight": -0.8000000000000002
        }, {
            "difficulty": 10,
            "id": "both-hyrule-field-area-skulltulas",
            "jp": "ハイラル平原エリアの黄金ノスタルチュラ2匹",
            "name": "Both Hyrule Field area Skulltulas",
            "rowtypes": {
                "bottle": 0,
                "gclw": 0,
                "hookshot": 2,
                "ms": 1
            },
            "skill": 1,
            "subtypes": {
                "dmc": 1,
                "firearrow": 1,
                "gtunic": 0.25,
                "hearts4": 0.5,
                "magic": 2,
                "poachers": 0.25,
                "skulls": 1
            },
            "time": 7.25,
            "types": {
                "hovers": 2.5,
                "selfsynergy": 0
            },
            "weight": 0.30000000000000004
        }, {
            "difficulty": 10,
            "id": "get-to-the-end-of-fire-trial",
            "jp": "炎の結界の最後の部屋に到達",
            "name": "Get to the end of Fire Trial",
            "rowtypes": {
                "bottle": 0,
                "gclw": 1,
                "hookshot": 0.5,
                "ms": 3
            },
            "skill": 0.25,
            "subtypes": {
                "bosskey": 3.5,
                "gtunic": 0.25,
                "hearts4": 1.5,
                "poachers": 0.25,
                "skulls": 0.25
            },
            "time": 7.5,
            "types": {
                "aganon": 3,
                "endon": -0.5,
                "hovers": 2.5,
                "selfsynergy": 0
            },
            "weight": 0.15000000000000002
        }, {
            "difficulty": 10,
            "id": "requiem-of-spirit",
            "jp": "魂のレクイエム",
            "name": "Requiem of Spirit",
            "rowtypes": {
                "bottle": 0,
                "gclw": 0,
                "hookshot": 1.5,
                "ms": 0.5
            },
            "skill": 0.5,
            "subtypes": {
                "bosskey": 2,
                "compass": 1,
                "hearts4": 0.25,
                "hovers": 1,
                "map": 2,
                "poachers": -0.25,
                "skulls": 0.75,
                "songs5": 3
            },
            "time": 7.5,
            "types": {
                "endon": -0.25,
                "fortress": 2.5,
                "selfsynergy": 0,
                "spirit": 2.5
            },
            "weight": 0.35000000000000014
        }],
        "11": [{
            "difficulty": 11,
            "id": "3-boots",
            "jp": "靴3種",
            "name": "3 Boots",
            "rowtypes": {
                "bottle": 0,
                "gclw": 1,
                "hookshot": 0.5,
                "ms": 3
            },
            "skill": 0.25,
            "subtypes": {
                "compass": 3,
                "hearts3": 1,
                "hearts4": 0.25,
                "map": 3,
                "poachers": 0.25,
                "skulls": 1,
                "songs4": 1.5
            },
            "time": 8.25,
            "types": {
                "endon": -0.5,
                "fountain": 2,
                "hovers": 2.5,
                "ice": 1.5,
                "incboot": 100,
                "irons": 2,
                "selfsynergy": 0
            },
            "weight": -0.1
        }, {
            "difficulty": 11,
            "id": "3-boss-keys",
            "jp": "ボス部屋の鍵3つ",
            "name": "3 Boss Keys",
            "rowtypes": {
                "bottle": 0.5,
                "gclw": 1,
                "hookshot": 100,
                "ms": 100
            },
            "skill": 0.25,
            "subtypes": {
                "compass": 2,
                "hearts3": 2,
                "hearts4": 1,
                "map": 4
            },
            "time": 8.25,
            "types": {
                "aganon": 3,
                "bganon": -3,
                "bosskey": 12,
                "cganon": 3,
                "incbk": 100,
                "selfsynergy": -2
            },
            "weight": 0.25
        }, {
            "difficulty": 11,
            "id": "7-hearts",
            "jp": "ハート7つ",
            "name": "7 Hearts",
            "rowtypes": {
                "bottle": 0,
                "gclw": 0,
                "hookshot": 0.5,
                "ms": 4
            },
            "skill": 0.5,
            "time": 8.5,
            "types": {
                "hearts3": 10,
                "hearts4": 0.5,
                "inchearts": 100,
                "selfsynergy": -3
            },
            "weight": -0.35000000000000003
        }, {
            "difficulty": 11,
            "id": "8-songs",
            "jp": "歌8つ以上",
            "name": "8 Songs",
            "rowtypes": {
                "bottle": 100,
                "gclw": 1,
                "hookshot": 0.5,
                "ms": 100
            },
            "skill": 0,
            "subtypes": {
                "aganon": 0.25,
                "bosskey": 1.5,
                "childchu": -2.5,
                "hearts3": 1.5,
                "skulls": 0.5
            },
            "time": 8.25,
            "types": {
                "incsongs": 100,
                "poachers": 4,
                "selfsynergy": 0,
                "songs5": 5.5
            },
            "weight": 0.6
        }, {
            "difficulty": 11,
            "id": "bronze-gauntlets",
            "jp": "銅のグローブ",
            "name": "Bronze Gauntlets",
            "rowtypes": {
                "bottle": 100,
                "gclw": 0,
                "hookshot": 2.5,
                "ms": 100
            },
            "skill": 0.75,
            "subtypes": {
                "bombbag": 100,
                "bulletbag": 100,
                "hovers": 1.5,
                "skulls": 0.5
            },
            "time": 8.5,
            "types": {
                "aganon": 3,
                "bganon": -3,
                "cganon": 3,
                "endon": -0.5,
                "incshtrial": 100,
                "selfsynergy": 0,
                "strength": 100
            },
            "weight": -0.45
        }, {
            "difficulty": 11,
            "id": "fairy-bow",
            "jp": "妖精の弓",
            "name": "Fairy Bow",
            "rowtypes": {
                "bottle": 0.5,
                "gclw": 1,
                "hookshot": 100,
                "ms": 4
            },
            "skill": 0.25,
            "subtypes": {
                "bosskey": 2,
                "bosskey2": 6,
                "compass": 3,
                "hearts3": 0.25,
                "hearts4": 1,
                "hovers": 1.25,
                "map": 2.5,
                "quiver": 4.5,
                "skulls": 1,
                "songs5": 1.75
            },
            "time": 8,
            "types": {
                "forest": 3,
                "incforest": 100,
                "meg": 4.25,
                "selfsynergy": 0
            },
            "weight": -0.30000000000000004
        }, {
            "difficulty": 11,
            "id": "fire-arrows",
            "jp": "炎の矢",
            "name": "Fire Arrows",
            "rowtypes": {
                "bottle": 100,
                "gclw": 0,
                "hookshot": 0.5,
                "ms": 100
            },
            "skill": 0.5,
            "subtypes": {
                "bosskey": 2,
                "childchu": -2.5,
                "incarrows": 100,
                "map": 3,
                "poachers": 1.5,
                "skulls": 0.25
            },
            "time": 8.5,
            "types": {
                "firearrow": 8,
                "fortress": 3,
                "gtg": 1,
                "quiver": 4.5,
                "selfsynergy": 0,
                "water": 1.5
            },
            "weight": 0.1
        }, {
            "difficulty": 11,
            "id": "get-to-the-end-of-light-trial",
            "jp": "光の結界の最後の部屋に到達",
            "name": "Get to the end of Light Trial",
            "rowtypes": {
                "bottle": 100,
                "gclw": 1,
                "hookshot": 100,
                "ms": 3
            },
            "skill": 0.25,
            "subtypes": {
                "bosskey": 2.5,
                "childchu": -2.5,
                "chuczl": 2,
                "hearts3": 1,
                "skulls": 0.25
            },
            "time": 8,
            "types": {
                "aganon": 3,
                "bganon": -2,
                "bothzl": -4,
                "cganon": 2,
                "czl": 4,
                "endon": -0.5,
                "poachers": 4,
                "selfsynergy": 0
            },
            "weight": 0.75
        }, {
            "difficulty": 11,
            "id": "map-compass-in-jabu-jabu",
            "jp": "ジャブジャブ様のお腹のマップとコンパス",
            "name": "Map & Compass in Jabu-Jabu",
            "rowtypes": {
                "bottle": 0,
                "gclw": 1,
                "hookshot": 0,
                "ms": 1
            },
            "skill": 0.25,
            "subtypes": {
                "compass": 4,
                "hearts3": 1,
                "hearts4": 1,
                "map": 3,
                "skulls": 0.75
            },
            "time": 8,
            "types": {
                "fountain": 2,
                "incbarinade": 100,
                "jabu": 4,
                "selfsynergy": 0
            },
            "weight": -0.5
        }],
        "12": [{
            "difficulty": 12,
            "id": "5-compasses",
            "jp": "コンパス5つ",
            "name": "5 Compasses",
            "rowtypes": {
                "bottle": 0,
                "gclw": 1,
                "hookshot": 0.5,
                "ms": 2
            },
            "skill": 0.25,
            "subtypes": {
                "bosskey2": 2,
                "hearts3": 1.5,
                "hearts4": 1,
                "map": 10,
                "skulls": 1
            },
            "time": 9.25,
            "types": {
                "childchu": 0,
                "compass": 10,
                "hovers": 2,
                "incmc": 100,
                "selfsynergy": -3
            },
            "weight": 0.3
        }, {
            "difficulty": 12,
            "id": "6-unused-keys-in-gerudo-training-grounds",
            "jp": "ゲルドの修練場の未使用の鍵6つ",
            "name": "6 Unused Keys in Gerudo Training Grounds",
            "rowtypes": {
                "bottle": 0,
                "gclw": 0,
                "hookshot": 1,
                "ms": 0
            },
            "skill": 0.5,
            "subtypes": {
                "bosskey": 3,
                "hearts4": 0.25,
                "hovers": 0.75,
                "map": 3,
                "skulls": 0.25
            },
            "time": 9.25,
            "types": {
                "endon": -0.25,
                "fortress": 3,
                "gtg": 5,
                "incgtgkey": 100,
                "selfsynergy": 0
            },
            "weight": -0.25
        }, {
            "difficulty": 12,
            "id": "beat-jabu-jabu-s-belly",
            "jp": "ジャブジャブ様のお腹クリア",
            "name": "Beat Jabu-Jabu's Belly",
            "rowtypes": {
                "bottle": 0,
                "gclw": 1,
                "hookshot": 0,
                "ms": 3
            },
            "skill": 0.25,
            "subtypes": {
                "compass": 2,
                "hearts3": 4,
                "hearts4": 1,
                "map": 2,
                "skulls": 1.25
            },
            "time": 9,
            "types": {
                "endon": -1.75,
                "fountain": 2,
                "incbarinade": 100,
                "jabu": 6.5,
                "selfsynergy": 0
            },
            "weight": -0.8
        }, {
            "difficulty": 12,
            "id": "defeat-amy-green-poe-",
            "jp": "エイミー撃破(緑のポウ)ｴ",
            "name": "Defeat Amy (Green Poe)",
            "rowtypes": {
                "bottle": 0.5,
                "gclw": 1,
                "hookshot": 100,
                "ms": 100
            },
            "skill": 0,
            "subtypes": {
                "bosskey": 2,
                "bosskey2": 5,
                "childchu": -2.5,
                "compass": 2,
                "hearts4": 1,
                "hovers": 1,
                "map": 4,
                "skulls": 0.5,
                "songs5": 1.75
            },
            "time": 9.25,
            "types": {
                "forest": 3,
                "fortress": 3,
                "gtg": 1,
                "incforest": 100,
                "meg": 4.25,
                "quiver": 4.5,
                "selfsynergy": 0
            },
            "weight": 0
        }, {
            "difficulty": 12,
            "id": "defeat-barinade",
            "jp": "バリネード撃破",
            "name": "Defeat Barinade",
            "rowtypes": {
                "bottle": 0,
                "gclw": 1,
                "hookshot": 0,
                "ms": 2
            },
            "skill": 0.25,
            "subtypes": {
                "compass": 2,
                "hearts3": 4,
                "hearts4": 1,
                "map": 2,
                "skulls": 1.25
            },
            "time": 8.75,
            "types": {
                "endon": -0.25,
                "fountain": 2,
                "incbarinade": 100,
                "jabu": 6.5,
                "selfsynergy": 0
            },
            "weight": -0.7499999999999999
        }, {
            "difficulty": 12,
            "id": "double-magic",
            "jp": "魔力2倍",
            "name": "Double Magic",
            "rowtypes": {
                "bottle": 100,
                "gclw": 1,
                "hookshot": 0.5,
                "ms": 3
            },
            "skill": 0,
            "subtypes": {
                "aganon": 0.25,
                "bosskey": 1,
                "childchu": -2.5,
                "chuczl": 2,
                "gtunic": 0.25,
                "hearts3": 1.5,
                "songs5": 1
            },
            "time": 9.25,
            "types": {
                "bothzl": -4,
                "czl": 4,
                "dmc": 1,
                "magic": 2,
                "poachers": 4,
                "selfsynergy": 0
            },
            "weight": 0.9000000000000001
        }, {
            "difficulty": 12,
            "id": "gerudo-s-card",
            "jp": "ゲルドの会員証",
            "name": "Gerudo's Card",
            "rowtypes": {
                "bottle": 0,
                "gclw": 0,
                "hookshot": 0.75,
                "ms": 1
            },
            "skill": 0,
            "subtypes": {
                "beans": 0.25,
                "bosskey": 2.5,
                "hearts4": 0.25,
                "hovers": 0.5,
                "map": 2.5,
                "marketgs": 4,
                "skulls": 0.5
            },
            "time": 9.25,
            "types": {
                "fortress": 2.5,
                "incgcard": 100,
                "selfsynergy": 0,
                "spirit": 0.5
            },
            "weight": -0.3
        }, {
            "difficulty": 12,
            "id": "map-compass-in-fire-temple",
            "jp": "炎の神殿のマップとコンパス",
            "name": "Map & Compass in Fire Temple",
            "rowtypes": {
                "bottle": 0.5,
                "gclw": 1,
                "hookshot": 0.25,
                "ms": 2.75
            },
            "skill": 0,
            "subtypes": {
                "bosskey": 2,
                "compass": 4,
                "gtunic": 0.75,
                "hearts3": 0.5,
                "hovers": 0.25,
                "map": 3,
                "skulls": 0.25,
                "songs5": 1.25
            },
            "time": 8.75,
            "types": {
                "dmc": 1,
                "fire": 5,
                "selfsynergy": 0
            },
            "weight": -0.3
        }, {
            "difficulty": 12,
            "id": "shadow-temple-boss-key",
            "jp": "闇の神殿のボス部屋の鍵",
            "name": "Shadow Temple Boss Key",
            "rowtypes": {
                "bottle": 100,
                "gclw": 1,
                "hookshot": 1,
                "ms": 3
            },
            "skill": 0.25,
            "subtypes": {
                "aganon": 0.25,
                "bosskey": 4.25,
                "bosskey2": 5.75,
                "childchu": -2.5,
                "chuczl": 2,
                "compass": 1,
                "hearts3": 2.5,
                "skulls": 0.25
            },
            "time": 9,
            "types": {
                "bothzl": -4,
                "czl": 4,
                "hovers": 1.5,
                "poachers": 4,
                "selfsynergy": 0,
                "shadow": 6
            },
            "weight": 1.2000000000000002
        }],
        "13": [{
            "difficulty": 13,
            "id": "3-skulltulas-in-water-temple",
            "jp": "水の神殿の黄金のスタルチュラ3匹以上",
            "name": "3 Skulltulas in Water Temple",
            "rowtypes": {
                "bottle": 100,
                "gclw": 0.5,
                "hookshot": 100,
                "ms": 7
            },
            "skill": 0.5,
            "subtypes": {
                "aganon": 0.25,
                "bbprize": -4,
                "childchu": -2.5,
                "compass": 2.5,
                "hearts3": 1.5,
                "hearts4": 2.5,
                "hovers": 0.5,
                "map": 2.5,
                "skulls": 1.5
            },
            "time": 9.75,
            "types": {
                "dc": 2,
                "ice": 1.5,
                "incwskull": 100,
                "irons": 2,
                "longshot": 2,
                "selfsynergy": 0,
                "water": 3
            },
            "weight": -0.35
        }, {
            "difficulty": 13,
            "id": "3-swords-3-boots",
            "jp": "剣3種、靴3種",
            "name": "3 Swords & 3 Boots",
            "rowtypes": {
                "bottle": 100,
                "gclw": 1,
                "hookshot": 0.5,
                "ms": 100
            },
            "skill": 0.25,
            "subtypes": {
                "bulletbag": -3,
                "childchu": -1,
                "compass": 3,
                "hearts3": 1,
                "hearts4": 0.25,
                "map": 3,
                "poachers": 0.25,
                "skulls": 1,
                "songs4": 1.5
            },
            "time": 9.75,
            "types": {
                "endon": -0.5,
                "fountain": 2,
                "hovers": 2.5,
                "ice": 1.5,
                "incboot": 100,
                "incsword": 100,
                "irons": 2,
                "selfsynergy": 0,
                "swords": 3
            },
            "weight": 0
        }, {
            "difficulty": 13,
            "id": "3-tunics-3-boots",
            "jp": "服3種、靴3種",
            "name": "3 Tunics & 3 Boots",
            "rowtypes": {
                "bottle": 0,
                "gclw": 1,
                "hookshot": 0.5,
                "ms": 100
            },
            "skill": 0.25,
            "subtypes": {
                "bosskey": 0.25,
                "compass": 3,
                "dmc": 0.25,
                "hearts3": 1,
                "hearts4": 0.25,
                "map": 3,
                "poachers": 0.25,
                "skulls": 1,
                "songs4": 1.5
            },
            "time": 10,
            "types": {
                "endon": -0.5,
                "fountain": 2,
                "gtunic": 1.5,
                "hovers": 2.5,
                "ice": 1.5,
                "incboot": 100,
                "inctunic": 100,
                "irons": 2,
                "selfsynergy": 0
            },
            "weight": 0
        }, {
            "difficulty": 13,
            "id": "4-skulltulas-in-shadow-temple",
            "jp": "闇の神殿の黄金のスタルチュラ4匹以上",
            "name": "4 Skulltulas in Shadow Temple",
            "rowtypes": {
                "bottle": 0,
                "gclw": 0,
                "hookshot": 100,
                "ms": 6
            },
            "skill": 0.5,
            "subtypes": {
                "bosskey2": 2,
                "compass": 1,
                "poachers": 0.25,
                "skulls": 2
            },
            "time": 9.5,
            "types": {
                "hovers": 2.5,
                "selfsynergy": 0,
                "shadow": 6
            },
            "weight": -0.1
        }, {
            "difficulty": 13,
            "id": "7-different-unused-keys-in-gerudo-training-grounds",
            "jp": "ゲルドの修練場の未使用の鍵7つ(増殖禁止)",
            "name": "7 Different Unused Keys in Gerudo Training Grounds",
            "rowtypes": {
                "bottle": 100,
                "gclw": 0,
                "hookshot": 100,
                "ms": 7
            },
            "skill": 0.5,
            "subtypes": {
                "bosskey": 3,
                "hearts4": 0.25,
                "hovers": 0.75,
                "map": 3,
                "skulls": 0.5
            },
            "time": 9.75,
            "types": {
                "endon": -0.5,
                "fortress": 3,
                "gtg": 3,
                "incgtgkey": 100,
                "selfsynergy": 0
            },
            "weight": -0.1
        }, {
            "difficulty": 13,
            "id": "all-4-wasteland-colossus-area-skulltulas",
            "jp": "幻影の砂漠・巨大邪神像エリアの黄金のスタルチュラ4匹",
            "name": "All 4 Wasteland/ Colossus area Skulltulas",
            "rowtypes": {
                "bottle": 100,
                "gclw": 0,
                "hookshot": 100,
                "ms": 100
            },
            "skill": 0.5,
            "subtypes": {
                "bosskey": 2,
                "bosskey2": 4,
                "child2": 1,
                "childreset": 1.25,
                "hearts4": 0.25,
                "map": 1.5,
                "skulls": 2,
                "songs10": -5,
                "songs5": 3
            },
            "time": 10,
            "types": {
                "fortress": 2.5,
                "selfsynergy": 0,
                "spirit": 2.5
            },
            "weight": 0
        }, {
            "difficulty": 13,
            "id": "all-8-zora-s-domain-area-skulltulas",
            "jp": "ゾーラの里エリアの黄金のスタルチュラ8匹",
            "name": "All 8 Zora's Domain area Skulltulas",
            "rowtypes": {
                "bottle": 0,
                "gclw": 1,
                "hookshot": 100,
                "ms": 100
            },
            "skill": 0.5,
            "subtypes": {
                "childreset": 1.25,
                "compass": 2,
                "froghp": 1,
                "hearts3": 1,
                "jabu": 0.5,
                "map": 2,
                "skulls": 4
            },
            "time": 9.75,
            "types": {
                "childchu": 0,
                "fountain": 2,
                "inczoraskull": 100,
                "selfsynergy": 0
            },
            "weight": -1.5000000000000004
        }, {
            "difficulty": 13,
            "id": "double-defense",
            "jp": "防御力2倍",
            "name": "Double Defense",
            "rowtypes": {
                "bottle": 100,
                "gclw": 1,
                "hookshot": 0.5,
                "ms": 100
            },
            "skill": 0,
            "subtypes": {
                "aganon": 0.5,
                "childchu": -2.5,
                "chuczl": 2,
                "gtunic": 0.25,
                "hearts3": 1.5,
                "skulls": 0.25
            },
            "time": 9.75,
            "types": {
                "bothzl": -4,
                "czl": 4,
                "dmc": 1,
                "magic": 2,
                "poachers": 4,
                "selfsynergy": 0
            },
            "weight": 0.85
        }, {
            "difficulty": 13,
            "id": "forest-temple-boss-key",
            "jp": "森の神殿のボス部屋の鍵",
            "name": "Forest Temple Boss Key",
            "rowtypes": {
                "bottle": 0.5,
                "gclw": 1,
                "hookshot": 100,
                "ms": 3
            },
            "skill": 0.25,
            "subtypes": {
                "bosskey": 4.25,
                "bosskey2": 5.75,
                "compass": 3.5,
                "hearts4": 1,
                "hovers": 1.25,
                "lightarrow": 3,
                "map": 2.5,
                "quiver": 4.5,
                "skulls": 1,
                "songs5": 1.75
            },
            "time": 9.75,
            "types": {
                "claimcheck": 10,
                "forest": 4,
                "incforest": 100,
                "meg": 4.25,
                "selfsynergy": 0
            },
            "weight": -0.05
        }, {
            "difficulty": 13,
            "id": "get-bombchu-chest-in-spirit-temple",
            "jp": "魂の神殿のボムチュウ取得",
            "name": "Get Bombchu chest in Spirit Temple",
            "rowtypes": {
                "bottle": 0,
                "gclw": 0,
                "hookshot": 2,
                "ms": 1
            },
            "skill": 0.5,
            "subtypes": {
                "bosskey": 2,
                "compass": 1,
                "hearts4": 0.25,
                "map": 2,
                "poachers": 0.25,
                "skulls": 0.75
            },
            "time": 9.5,
            "types": {
                "fortress": 2.5,
                "hovers": 1.5,
                "selfsynergy": 0,
                "spirit": 5
            },
            "weight": 0.44999999999999996
        }, {
            "difficulty": 13,
            "id": "keaton-mask",
            "jp": "キータンのお面",
            "name": "Keaton Mask",
            "rowtypes": {
                "bottle": 0,
                "gclw": 0,
                "hookshot": 0,
                "ms": 0
            },
            "skill": 0,
            "subtypes": {
                "cganon": 2,
                "hearts3": 3,
                "hearts4": 1,
                "marketgs": 2,
                "songs4": 1.75
            },
            "time": 9.75,
            "types": {
                "childchu": 0,
                "childtrade": 2.75,
                "chuczl": 2,
                "czl": 5,
                "incctrade": 100,
                "selfsynergy": 0
            },
            "weight": 0
        }, {
            "difficulty": 13,
            "id": "megaton-hammer",
            "jp": "メガトンハンマー",
            "name": "Megaton Hammer",
            "rowtypes": {
                "bottle": 0.5,
                "gclw": 1,
                "hookshot": 0.25,
                "ms": 2.5
            },
            "skill": 0.25,
            "subtypes": {
                "bosskey": 2,
                "compass": 4,
                "gtunic": 0.75,
                "hearts3": 1.5,
                "hearts4": 1,
                "hovers": 0.25,
                "incgorons": 100,
                "map": 2,
                "skulls": 0.25,
                "songs5": 1.25
            },
            "time": 10,
            "types": {
                "dmc": 1,
                "fire": 7,
                "selfsynergy": 0
            },
            "weight": -0.1
        }, {
            "difficulty": 13,
            "id": "mirror-shield",
            "jp": "ミラーシールド",
            "name": "Mirror Shield",
            "rowtypes": {
                "bottle": 0,
                "gclw": 0,
                "hookshot": 100,
                "ms": 5.5
            },
            "skill": 0.5,
            "subtypes": {
                "bosskey": 3,
                "bosskey2": 5,
                "compass": 1,
                "hearts3": 0.5,
                "hearts4": 0.5,
                "map": 3,
                "poachers": 0.25,
                "skulls": 0.75,
                "songs5": 1
            },
            "time": 10,
            "types": {
                "fortress": 2.5,
                "gtg": 1,
                "hovers": 2.5,
                "incmirror": 100,
                "incshield": 100,
                "incspboss": 100,
                "selfsynergy": 0,
                "spirit": 3.5
            },
            "weight": 0.55
        }, {
            "difficulty": 13,
            "id": "obtain-all-5-small-keys-in-forest-temple",
            "jp": "森の神殿の小さな鍵の宝箱を5つ全て開ける",
            "name": "Obtain all 5 Small Keys in Forest Temple",
            "rowtypes": {
                "bottle": 0.5,
                "gclw": 1,
                "hookshot": 100,
                "ms": 5
            },
            "skill": 0.25,
            "subtypes": {
                "bosskey": 2,
                "bosskey2": 6,
                "compass": 4,
                "hearts4": 1,
                "hovers": 1.25,
                "map": 3,
                "quiver": 4.5,
                "skulls": 1,
                "songs5": 1.75
            },
            "time": 9.75,
            "types": {
                "forest": 3,
                "incforest": 100,
                "meg": 5,
                "selfsynergy": 0
            },
            "weight": -0.05
        }, {
            "difficulty": 13,
            "id": "obtain-all-8-small-keys-in-fire-temple",
            "jp": "炎の神殿の小さな鍵の宝箱を８つ全て開ける",
            "name": "Obtain all 8 Small Keys in Fire Temple",
            "rowtypes": {
                "bottle": 0.5,
                "gclw": 1,
                "hookshot": 100,
                "ms": 5
            },
            "skill": 0.25,
            "subtypes": {
                "bosskey": 2,
                "compass": 4,
                "gtunic": 0.75,
                "hearts3": 0.5,
                "hovers": 0.25,
                "map": 2,
                "skulls": 0.5,
                "songs5": 1.5
            },
            "time": 10,
            "types": {
                "dmc": 1,
                "fire": 5,
                "selfsynergy": 0
            },
            "weight": -0.15000000000000002
        }, {
            "difficulty": 13,
            "id": "silver-gauntlets",
            "jp": "銀のグローブ",
            "name": "Silver Gauntlets",
            "rowtypes": {
                "bottle": 0.5,
                "gclw": 0,
                "hookshot": 100,
                "ms": 3.25
            },
            "skill": 0.5,
            "subtypes": {
                "bombbag": 100,
                "bosskey": 3,
                "bosskey2": 4.5,
                "compass": 1,
                "hearts3": 0.5,
                "hearts4": 0.25,
                "map": 3,
                "poachers": 0.25,
                "skulls": 0.75,
                "songs5": 1
            },
            "time": 10,
            "types": {
                "endon": -1,
                "fortress": 3,
                "hovers": 2.5,
                "selfsynergy": 0,
                "spirit": 3.25,
                "strength": 100
            },
            "weight": 0.55
        }],
        "14": [{
            "difficulty": 14,
            "id": "3-shields",
            "jp": "盾3種",
            "name": "3 Shields",
            "rowtypes": {
                "bottle": 0,
                "gclw": 0,
                "hookshot": 100,
                "ms": 5
            },
            "skill": 0.5,
            "subtypes": {
                "bosskey": 3,
                "bosskey2": 5,
                "compass": 1,
                "hearts3": 0.5,
                "hearts4": 0.5,
                "map": 3,
                "poachers": 0.25
            },
            "time": 10.5,
            "types": {
                "fortress": 2.5,
                "hovers": 2.5,
                "incshield": 100,
                "selfsynergy": 0,
                "spirit": 3.5
            },
            "weight": 0.65
        }, {
            "difficulty": 14,
            "id": "5-zora-area-hps",
            "jp": "ゾーラエリアのハートのかけら5つ以上",
            "name": "5 Zora area HPs",
            "rowtypes": {
                "bottle": 0,
                "gclw": 1,
                "hookshot": 0.5,
                "ms": 100
            },
            "skill": 0.5,
            "subtypes": {
                "beans": 0.5,
                "child2": 2,
                "compass": 3,
                "froghp": 2,
                "hearts3": 3,
                "hearts4": 0.25,
                "hovers": 0.75,
                "incirons": 100,
                "map": 3
            },
            "time": 10.5,
            "types": {
                "fountain": 2,
                "ice": 1.5,
                "irons": 2,
                "selfsynergy": 0
            },
            "weight": -0.6000000000000002
        }, {
            "difficulty": 14,
            "id": "6-maps",
            "jp": "マップ6つ",
            "name": "6 Maps",
            "rowtypes": {
                "bottle": 0,
                "gclw": 1,
                "hookshot": 0.5,
                "ms": 2.5
            },
            "skill": 0.5,
            "subtypes": {
                "bosskey2": 2,
                "claimcheck": 3,
                "compass": 15,
                "hearts3": 1,
                "hearts4": 1.5,
                "poachers": 0.75,
                "skulls": 0.75,
                "songs5": 1.5
            },
            "time": 10.5,
            "types": {
                "childchu": 0,
                "hovers": 2.5,
                "incmc": 100,
                "map": 15,
                "selfsynergy": -3
            },
            "weight": 0.55
        }, {
            "difficulty": 14,
            "id": "8-different-unused-keys-in-gerudo-training-grounds",
            "jp": "ゲルドの修練場の未使用の鍵8つ(増殖禁止)",
            "name": "8 Different Unused Keys in Gerudo Training Grounds",
            "rowtypes": {
                "bottle": 100,
                "gclw": 0,
                "hookshot": 100,
                "ms": 100
            },
            "skill": 0.5,
            "subtypes": {
                "bosskey": 3,
                "bulletbag": 100,
                "childchu": -2.5,
                "hearts4": 0.25,
                "hovers": 0.75,
                "map": 3,
                "skulls": 0.25
            },
            "time": 10.5,
            "types": {
                "endon": -0.25,
                "fortress": 3,
                "gtg": 5,
                "incgtgkey": 100,
                "quiver": 4.5,
                "selfsynergy": 0
            },
            "weight": -0.30000000000000004
        }, {
            "difficulty": 14,
            "id": "map-compass-in-forest-temple",
            "jp": "森の神殿のマップとコンパス",
            "name": "Map & Compass in Forest Temple",
            "rowtypes": {
                "bottle": 0.5,
                "gclw": 1,
                "hookshot": 100,
                "ms": 6
            },
            "skill": 0.25,
            "subtypes": {
                "bosskey": 2,
                "bosskey2": 6,
                "compass": 4,
                "hearts4": 1,
                "hovers": 1.25,
                "map": 3,
                "quiver": 4.5,
                "skulls": 1,
                "songs5": 1.75
            },
            "time": 10.25,
            "types": {
                "forest": 3,
                "incforest": 100,
                "meg": 5,
                "selfsynergy": 0
            },
            "weight": -0.3000000000000001
        }],
        "15": [{
            "difficulty": 15,
            "id": "9-songs",
            "jp": "歌9つ以上",
            "name": "9 Songs",
            "rowtypes": {
                "bottle": 100,
                "gclw": 1,
                "hookshot": 0.5,
                "ms": 100
            },
            "skill": 0,
            "subtypes": {
                "aganon": 0.25,
                "bosskey": 1.5,
                "childchu": -2.5,
                "hearts3": 1.5,
                "skulls": 0.75
            },
            "time": 11.25,
            "types": {
                "incsongs": 100,
                "poachers": 4,
                "selfsynergy": 0,
                "songs5": 8.75
            },
            "weight": 0.15000000000000002
        }, {
            "difficulty": 15,
            "id": "blue-gauntlets",
            "jp": "青のグローブ",
            "name": "Blue Gauntlets",
            "rowtypes": {
                "bottle": 100,
                "gclw": 0,
                "hookshot": 100,
                "ms": 100
            },
            "skill": 0.5,
            "subtypes": {
                "bombbag": 100,
                "bosskey": 3,
                "bosskey2": 5,
                "bulletbag": 100,
                "compass": 1,
                "hearts3": 0.25,
                "hearts4": 0.5,
                "map": 3,
                "poachers": 0.25,
                "skulls": 0.75,
                "songs10": -0.5,
                "songs5": 1
            },
            "time": 11.5,
            "types": {
                "fortress": 2.5,
                "gtg": 1,
                "hovers": 2.5,
                "selfsynergy": 0,
                "spirit": 3.25,
                "strength": 100
            },
            "weight": 0.8000000000000002
        }, {
            "difficulty": 15,
            "id": "defeat-both-flare-dancers",
            "jp": "フレアダンサー2体撃破",
            "name": "Defeat both Flare Dancers",
            "rowtypes": {
                "bottle": 0.5,
                "gclw": 1,
                "hookshot": 0.25,
                "ms": 3.25
            },
            "skill": 0.25,
            "subtypes": {
                "bosskey": 2,
                "compass": 4,
                "gtunic": 0.75,
                "hovers": 0.25,
                "incgorons": 100,
                "map": 2.5,
                "skulls": 0.5,
                "songs5": 1.25
            },
            "time": 11.5,
            "types": {
                "dmc": 1,
                "fire": 8,
                "incflare": 100,
                "selfsynergy": 0
            },
            "weight": -1.1
        }, {
            "difficulty": 15,
            "id": "farore-s-wind",
            "jp": "フロルの風",
            "name": "Farore's Wind",
            "rowtypes": {
                "bottle": 0,
                "gclw": 1,
                "hookshot": 0.5,
                "ms": 3
            },
            "skill": 0,
            "subtypes": {
                "aganon": 0.25,
                "childchu": -2.5,
                "chuczl": 2,
                "compass": 2,
                "gtunic": 0.25,
                "hearts3": 2.5,
                "incfairy": 100,
                "map": 2,
                "skulls": 0.5
            },
            "time": 11.25,
            "types": {
                "bothzl": -4,
                "czl": 4,
                "dmc": 1,
                "fountain": 2,
                "magic": 2,
                "poachers": 4,
                "selfsynergy": 0
            },
            "weight": 0.55
        }, {
            "difficulty": 15,
            "id": "frog-s-hp",
            "jp": "カエルのハートのかけら(嵐の歌)",
            "name": "Frog's HP",
            "rowtypes": {
                "bottle": 100,
                "gclw": 1,
                "hookshot": 100,
                "ms": 100
            },
            "skill": 0.25,
            "subtypes": {
                "bosskey2": 3,
                "compass": 1,
                "hearts3": 4,
                "hearts4": 1.25,
                "map": 2,
                "poachers": 0.25,
                "skulls": 1,
                "songs4": 1.5,
                "songs5": 2
            },
            "time": 11.5,
            "types": {
                "child2": 5,
                "endon": 0,
                "forest": 3,
                "froghp": 3,
                "hovers": 2.5,
                "incfboss": 100,
                "pg": 2.25,
                "selfsynergy": 0
            },
            "weight": -0.3999999999999999
        }],
        "16": [{
            "difficulty": 16,
            "id": "all-5-skulltulas-in-fire-temple",
            "jp": "炎の神殿の黄金のスタルチュラ5匹",
            "name": "All 5 Skulltulas in Fire Temple",
            "rowtypes": {
                "bottle": 0,
                "gclw": 1,
                "hookshot": 100,
                "ms": 11
            },
            "skill": 0.5,
            "subtypes": {
                "bosskey": 2,
                "compass": 2,
                "gtunic": 0.75,
                "hearts3": 0.5,
                "hearts4": 1,
                "hovers": 0.25,
                "longshot": 1,
                "map": 3,
                "skulls": 2.5,
                "songs5": 1.25
            },
            "time": 12,
            "types": {
                "dmc": 1,
                "fire": 4.75,
                "selfsynergy": 0
            },
            "weight": -0.8000000000000004
        }, {
            "difficulty": 16,
            "id": "defeat-nabooru-knuckle",
            "jp": "アイアンナック(ナボール)撃破",
            "name": "Defeat Nabooru-Knuckle",
            "rowtypes": {
                "bottle": 0.5,
                "gclw": 0,
                "hookshot": 100,
                "ms": 100
            },
            "skill": 1,
            "subtypes": {
                "bosskey": 6,
                "bosskey2": 6,
                "compass": 1,
                "hearts4": 0.25,
                "map": 3,
                "poachers": 0.25,
                "skulls": 0.5,
                "songs5": 1
            },
            "time": 12.25,
            "types": {
                "endon": -0.5,
                "fortress": 2.5,
                "gtg": 1,
                "hovers": 1.5,
                "incspboss": 100,
                "selfsynergy": 0,
                "spirit": 8
            },
            "weight": 0.7500000000000002
        }, {
            "difficulty": 16,
            "id": "defeat-volvagia",
            "jp": "ヴァルバジア撃破",
            "name": "Defeat Volvagia",
            "rowtypes": {
                "bottle": 100,
                "gclw": 1,
                "hookshot": 0.25,
                "ms": 4.25
            },
            "skill": 0.25,
            "subtypes": {
                "aganon": 1,
                "bosskey": 2,
                "compass": 4,
                "gtunic": 1,
                "hearts3": 3.5,
                "hearts4": 2,
                "hovers": 0.25,
                "lightarrow": 3.5,
                "map": 2.5,
                "pg": 1,
                "skulls": 0.25,
                "songs5": 1.25
            },
            "time": 12,
            "types": {
                "dmc": 1,
                "endon": -0.5,
                "fire": 9,
                "forest": 1,
                "incvolvagia": 100,
                "selfsynergy": 0
            },
            "weight": -0.30000000000000004
        }, {
            "difficulty": 16,
            "id": "saria-s-song",
            "jp": "サリアの歌",
            "name": "Saria's Song",
            "rowtypes": {
                "bottle": 0,
                "gclw": 0,
                "hookshot": 0,
                "ms": 0
            },
            "skill": 0,
            "subtypes": {
                "cganon": 2,
                "child2": 2.5,
                "hearts3": 3,
                "hearts4": 1,
                "marketgs": 2,
                "skulls": 0.25,
                "songs4": 3,
                "songs5": -3
            },
            "time": 12,
            "types": {
                "childchu": 0,
                "childreset": 1.25,
                "childtrade": 2.75,
                "chuczl": 2,
                "czl": 5,
                "incsaria": 100,
                "saria": 3,
                "selfsynergy": 0
            },
            "weight": 0.3499999999999999
        }],
        "17": [{
            "difficulty": 17,
            "id": "3-swords-3-shields",
            "jp": "剣3種、盾3種",
            "name": "3 Swords & 3 Shields",
            "rowtypes": {
                "bottle": 100,
                "gclw": 1,
                "hookshot": 100,
                "ms": 100
            },
            "skill": 0.5,
            "subtypes": {
                "bosskey": 3,
                "bosskey2": 5,
                "bulletbag": -3,
                "childchu": -1,
                "compass": 1,
                "hearts3": 0.5,
                "hearts4": 0.5,
                "map": 3,
                "poachers": 0.25,
                "skulls": 0.75,
                "songs5": 1
            },
            "time": 12.5,
            "types": {
                "fortress": 2.5,
                "gtg": 1,
                "hovers": 2.5,
                "incshield": 100,
                "incsword": 100,
                "selfsynergy": 0,
                "spirit": 3.5,
                "swords": 3
            },
            "weight": 1.3500000000000003
        }, {
            "difficulty": 17,
            "id": "6-compasses",
            "jp": "コンパス6つ",
            "name": "6 Compasses",
            "rowtypes": {
                "bottle": 0,
                "gclw": 1,
                "hookshot": 0.5,
                "ms": 3
            },
            "skill": 0.5,
            "subtypes": {
                "bosskey2": 2,
                "hearts3": 1.5,
                "hearts4": 1,
                "map": 15,
                "poachers": 0.75,
                "skulls": 1
            },
            "time": 13,
            "types": {
                "childchu": 0,
                "compass": 15,
                "hovers": 2.5,
                "incmc": 100,
                "selfsynergy": -3
            },
            "weight": 0.7000000000000001
        }, {
            "difficulty": 17,
            "id": "8-hearts",
            "jp": "ハート8つ",
            "name": "8 Hearts",
            "rowtypes": {
                "bottle": 0,
                "gclw": 1,
                "hookshot": 1,
                "ms": 6
            },
            "skill": 0.75,
            "time": 12.75,
            "types": {
                "childtrade": 1,
                "hearts3": 13,
                "hearts4": 2,
                "inchearts": 100,
                "saria": 1,
                "selfsynergy": -3
            },
            "weight": -0.8500000000000001
        }, {
            "difficulty": 17,
            "id": "all-5-lake-hylia-skulltulas",
            "jp": "ハイリア湖畔エリアの黄金のスタルチュラ5匹",
            "name": "All 5 Lake Hylia Skulltulas",
            "rowtypes": {
                "bottle": 100,
                "gclw": 1,
                "hookshot": 100,
                "ms": 100
            },
            "skill": 0.5,
            "subtypes": {
                "bottleslot": 2,
                "child2": 3,
                "compass": 4,
                "hearts3": 1,
                "hearts4": 0.25,
                "hovers": 0.25,
                "incirons": 100,
                "map": 4,
                "skulls": 2.5
            },
            "time": 12.5,
            "types": {
                "fountain": 2,
                "ice": 1.5,
                "inclhskull": 100,
                "irons": 2,
                "selfsynergy": 0,
                "water": 1
            },
            "weight": -0.7999999999999999
        }, {
            "difficulty": 17,
            "id": "beat-the-fire-temple",
            "jp": "炎の神殿クリア",
            "name": "Beat the Fire Temple",
            "rowtypes": {
                "bottle": 100,
                "gclw": 1,
                "hookshot": 0.25,
                "ms": 4
            },
            "skill": 0.25,
            "subtypes": {
                "aganon": 2,
                "bosskey": 2,
                "compass": 4,
                "gtunic": 1,
                "hearts3": 2.5,
                "hearts4": 2,
                "hovers": 0.25,
                "lightarrow": 3,
                "map": 2.5,
                "pg": 1,
                "skulls": 0.25,
                "songs5": 1.25
            },
            "time": 12.5,
            "types": {
                "dmc": 1,
                "endon": -1,
                "fire": 10,
                "forest": 2,
                "incvolvagia": 100,
                "selfsynergy": 0
            },
            "weight": -0.4
        }],
        "18": [{
            "difficulty": 18,
            "id": "3-shields-3-tunics",
            "jp": "盾3種、服3種",
            "name": "3 Shields & 3 Tunics",
            "rowtypes": {
                "bottle": 0.5,
                "gclw": 1,
                "hookshot": 100,
                "ms": 100
            },
            "skill": 0.5,
            "subtypes": {
                "bosskey": 3.25,
                "bosskey2": 5,
                "compass": 2.5,
                "dmc": 0.25,
                "hearts3": 0.5,
                "hearts4": 0.5,
                "map": 4.5,
                "poachers": 0.25,
                "skulls": 1,
                "songs5": 1
            },
            "time": 13.25,
            "types": {
                "fortress": 2.5,
                "fountain": 1.5,
                "gtg": 1,
                "gtunic": 1.5,
                "hovers": 2.5,
                "incshield": 100,
                "inctunic": 100,
                "selfsynergy": 0,
                "spirit": 3.5
            },
            "weight": 1.5500000000000003
        }, {
            "difficulty": 18,
            "id": "fire-medallion",
            "jp": "炎のメダル",
            "name": "Fire Medallion",
            "rowtypes": {
                "bottle": 0.5,
                "gclw": 1,
                "hookshot": 0.5,
                "ms": 4.75
            },
            "skill": 0.25,
            "subtypes": {
                "aganon": 2.5,
                "bosskey": 2,
                "compass": 4,
                "gtunic": 1,
                "hearts3": 2.5,
                "hearts4": 2,
                "hovers": 0.25,
                "lightarrow": 3,
                "map": 2,
                "pg": 1,
                "skulls": 0.25,
                "songs5": 2.5
            },
            "time": 13.5,
            "types": {
                "dmc": 1,
                "fire": 10,
                "forest": 2,
                "incvolvagia": 100,
                "selfsynergy": 0
            },
            "weight": -0.6
        }, {
            "difficulty": 18,
            "id": "free-all-9-gorons-in-fire-temple",
            "jp": "炎の神殿で９人のゴロンを全員救う",
            "name": "Free all 9 Gorons in Fire Temple",
            "rowtypes": {
                "bottle": 0.5,
                "gclw": 1,
                "hookshot": 0.5,
                "ms": 3
            },
            "skill": 0.25,
            "subtypes": {
                "bosskey": 2.25,
                "compass": 4,
                "gtunic": 0.75,
                "hearts3": 0.5,
                "hearts4": 1,
                "hovers": 0.25,
                "map": 2,
                "skulls": 0.5,
                "songs5": 1.25
            },
            "time": 13.5,
            "types": {
                "dmc": 1,
                "fire": 8,
                "incfirebk": 100,
                "incflare": 100,
                "incgorons": 100,
                "selfsynergy": 0
            },
            "weight": -1.3000000000000003
        }, {
            "difficulty": 18,
            "id": "get-to-the-end-of-water-trial",
            "jp": "水の結界の最後の部屋に到達",
            "name": "Get to the end of Water Trial",
            "rowtypes": {
                "bottle": 100,
                "gclw": 1,
                "hookshot": 0.5,
                "ms": 5
            },
            "skill": 0.5,
            "subtypes": {
                "bosskey": 4.5,
                "compass": 4,
                "gtunic": 0.75,
                "hearts3": 2.5,
                "hearts4": 1,
                "hovers": 0.25,
                "map": 2,
                "pg": 2,
                "poachers": 3,
                "skulls": 0.5,
                "songs5": 1.25
            },
            "time": 13.5,
            "types": {
                "aganon": 3,
                "dmc": 1,
                "endon": -0.5,
                "fire": 7,
                "lightarrow": 10,
                "selfsynergy": 0
            },
            "weight": -0.2
        }, {
            "difficulty": 18,
            "id": "light-arrows",
            "jp": "光の矢",
            "name": "Light Arrows",
            "rowtypes": {
                "bottle": 100,
                "gclw": 1,
                "hookshot": 0.5,
                "ms": 100
            },
            "skill": 0,
            "subtypes": {
                "aganon": 1,
                "bosskey": 3,
                "bosskey2": 6,
                "childchu": -2.5,
                "hearts3": 1.5,
                "hearts4": 0.75,
                "hovers": 0.25,
                "incarrows": 100,
                "map": 3,
                "quiver": 4.5,
                "skulls": 0.25
            },
            "time": 13.25,
            "types": {
                "endon": -1,
                "fortress": 2,
                "inclacs": 100,
                "legitlacs": 100,
                "lightarrow": 6.5,
                "poachers": 4,
                "selfsynergy": 0
            },
            "weight": 0.5499999999999999
        }],
        "19": [{
            "difficulty": 19,
            "id": "7-maps",
            "jp": "マップ7つ",
            "name": "7 Maps",
            "rowtypes": {
                "bottle": 0.5,
                "gclw": 1,
                "hookshot": 1,
                "ms": 4
            },
            "skill": 0.5,
            "subtypes": {
                "bosskey2": 2,
                "claimcheck": 6,
                "compass": 20,
                "hearts3": 1,
                "hearts4": 2.5,
                "poachers": 1.5,
                "skulls": 0.75,
                "songs5": 1.5
            },
            "time": 14.5,
            "types": {
                "childchu": 0,
                "hovers": 2.5,
                "incmc": 100,
                "map": 20,
                "selfsynergy": -3
            },
            "weight": 0
        }, {
            "difficulty": 19,
            "id": "all-5-skulltulas-in-spirit-temple",
            "jp": "魂の神殿の黄金のスタルチュラ5匹",
            "name": "All 5 Skulltulas in Spirit Temple",
            "rowtypes": {
                "bottle": 0.5,
                "gclw": 0,
                "hookshot": 100,
                "ms": 2
            },
            "skill": 0.75,
            "subtypes": {
                "bosskey": 2,
                "bosskey2": 5,
                "compass": 2.5,
                "hearts4": 0.5,
                "map": 3,
                "poachers": 0.25,
                "skulls": 2.5,
                "songs5": 1
            },
            "time": 14.5,
            "types": {
                "fortress": 2.5,
                "hovers": 2.5,
                "selfsynergy": 0,
                "spirit": 5
            },
            "weight": 0.3
        }, {
            "difficulty": 19,
            "id": "defeat-meg-purple-poe-",
            "jp": "メグ撃破(紫のポウ)",
            "name": "Defeat Meg (purple Poe)",
            "rowtypes": {
                "bottle": 0.5,
                "gclw": 1,
                "hookshot": 100,
                "ms": 100
            },
            "skill": 0.25,
            "subtypes": {
                "bosskey2": 3,
                "compass": 4,
                "hearts3": 0.25,
                "hearts4": 1,
                "map": 2.5,
                "quiver": 4.5,
                "skulls": 1,
                "songs5": 1.75
            },
            "time": 14.25,
            "types": {
                "forest": 3,
                "hovers": 2,
                "incforest": 100,
                "meg": 8.75,
                "selfsynergy": 0
            },
            "weight": -0.9500000000000002
        }, {
            "difficulty": 19,
            "id": "din-s-fire",
            "jp": "ディンの炎",
            "name": "Din's Fire",
            "rowtypes": {
                "bottle": 0,
                "gclw": 0,
                "hookshot": 0,
                "ms": 0
            },
            "skill": 0,
            "subtypes": {
                "cganon": 2,
                "child2": 5.5,
                "childreset": 1.25,
                "compass": 2,
                "hearts3": 3.5,
                "hearts4": 1,
                "incfairy": 100,
                "map": 2,
                "marketgs": 4,
                "skulls": 0.5,
                "songs4": 1.75
            },
            "time": 14.25,
            "types": {
                "childchu": 0,
                "childtrade": 2.75,
                "chuczl": 2,
                "czl": 5,
                "dins": 3,
                "dmcchild": 1.25,
                "magic": 2,
                "selfsynergy": 0
            },
            "weight": -0.35
        }, {
            "difficulty": 19,
            "id": "get-to-the-end-of-spirit-trial",
            "jp": "魂の結界の最後の部屋に到達",
            "name": "Get to the end of Spirit Trial",
            "rowtypes": {
                "bottle": 100,
                "gclw": 0,
                "hookshot": 100,
                "ms": 100
            },
            "skill": 0.75,
            "subtypes": {
                "bosskey": 4.5,
                "bosskey2": 5,
                "compass": 1,
                "hearts3": 0.5,
                "hearts4": 0.5,
                "map": 3,
                "poachers": 0.25,
                "skulls": 1
            },
            "time": 14,
            "types": {
                "aganon": 3,
                "endon": -0.5,
                "fortress": 2.5,
                "gtg": 1,
                "hovers": 2.5,
                "incmirror": 100,
                "quiver": 1.5,
                "selfsynergy": 0,
                "spirit": 3.5
            },
            "weight": 0.5499999999999999
        }, {
            "difficulty": 19,
            "id": "quiver-50-",
            "jp": "矢立て(50)",
            "name": "Quiver (50)",
            "rowtypes": {
                "bottle": 100,
                "gclw": 0,
                "hookshot": 0,
                "ms": 100
            },
            "skill": 0,
            "subtypes": {
                "bosskey": 2.5,
                "childchu": -2.5,
                "hearts4": 0.5,
                "map": 2,
                "marketgs": 4,
                "skulls": 0.25
            },
            "time": 14.25,
            "types": {
                "beans": 10,
                "bombbag": 100,
                "fortress": 3,
                "incgcard": 100,
                "quiver": 1,
                "selfsynergy": 0,
                "spirit": 0.5
            },
            "weight": -1.05
        }, {
            "difficulty": 19,
            "id": "spirit-temple-boss-key",
            "jp": "魂の神殿のボス部屋の鍵",
            "name": "Spirit Temple Boss Key",
            "rowtypes": {
                "bottle": 100,
                "gclw": 1,
                "hookshot": 0,
                "ms": 8.5
            },
            "skill": 0,
            "subtypes": {
                "aganon": 1,
                "bosskey": 6,
                "bosskey2": 5.75,
                "childchu": -2.5,
                "chuczl": 2,
                "compass": 1,
                "hearts3": 1,
                "hearts4": 0.75,
                "map": 4.5,
                "skulls": 0.25
            },
            "time": 14,
            "types": {
                "bothzl": -4,
                "czl": 4,
                "fortress": 3,
                "hovers": 2.5,
                "inclacs": 100,
                "legitlacs": 100,
                "lightarrow": 7,
                "poachers": 4,
                "selfsynergy": 0,
                "spirit": 5
            },
            "weight": 1.5000000000000002
        }],
        "20": [{
            "difficulty": 20,
            "id": "get-to-the-end-of-shadow-trial",
            "jp": "闇の結界の最後の部屋に到達",
            "name": "Get to the end of Shadow Trial",
            "rowtypes": {
                "bottle": 100,
                "gclw": 1,
                "hookshot": 1,
                "ms": 5
            },
            "skill": 0.75,
            "subtypes": {
                "bosskey": 4.5,
                "compass": 4,
                "gtunic": 0.75,
                "hearts3": 2.5,
                "hearts4": 1,
                "hovers": 0.75,
                "map": 2,
                "pg": 2,
                "poachers": 3,
                "skulls": 0.5,
                "songs5": 1.25
            },
            "time": 14.75,
            "types": {
                "aganon": 3,
                "dmc": 1,
                "endon": -0.5,
                "fire": 7,
                "incshtrial": 100,
                "lightarrow": 10,
                "selfsynergy": 0
            },
            "weight": -0.65
        }, {
            "difficulty": 20,
            "id": "goron-bracelet",
            "jp": "ゴロンの腕輪",
            "name": "Goron Bracelet",
            "rowtypes": {
                "bottle": 0,
                "gclw": 0,
                "hookshot": 0,
                "ms": 0
            },
            "skill": 0,
            "subtypes": {
                "bombbag": 100,
                "cganon": 2,
                "child2": 2.5,
                "hearts3": 3,
                "hearts4": 1,
                "incsaria": 100,
                "marketgs": 2,
                "skulls": 100,
                "songs4": 3
            },
            "time": 15,
            "types": {
                "childchu": 0,
                "childreset": 1.25,
                "childtrade": 2.75,
                "chuczl": 2,
                "czl": 5,
                "dmcchild": 1,
                "saria": 5,
                "selfsynergy": 0,
                "strength": 100
            },
            "weight": -0.55
        }, {
            "difficulty": 20,
            "id": "nayru-s-love",
            "jp": "ネールの愛",
            "name": "Nayru's Love",
            "rowtypes": {
                "bottle": 100,
                "gclw": 0,
                "hookshot": 2.5,
                "ms": 4
            },
            "skill": 0.5,
            "subtypes": {
                "aganon": 0.25,
                "bosskey": 2,
                "bottleslot": 4,
                "childchu": -2.5,
                "chuczl": 2,
                "compass": 2.5,
                "hearts3": 1,
                "hearts4": 0.25,
                "incfairy": 100,
                "map": 2,
                "skulls": 0.5
            },
            "time": 15,
            "types": {
                "bothzl": -4,
                "czl": 4,
                "dmc": 1,
                "endon": -0.25,
                "fortress": 2.5,
                "hovers": 2,
                "magic": 2,
                "poachers": 4,
                "selfsynergy": 0,
                "spirit": 2
            },
            "weight": 0.9500000000000002
        }, {
            "difficulty": 20,
            "id": "obtain-all-5-small-keys-in-shadow-temple",
            "jp": "闇の神殿の小さな鍵５つ取得",
            "name": "Obtain all 5 Small Keys in Shadow Temple",
            "rowtypes": {
                "bottle": 0,
                "gclw": 1,
                "hookshot": 100,
                "ms": 8.5
            },
            "skill": 0.25,
            "subtypes": {
                "bosskey": 3.5,
                "bosskey2": 6,
                "childchu": -2.5,
                "chuczl": 2,
                "compass": 1,
                "hearts3": 2,
                "hearts4": 1,
                "skulls": 1.5
            },
            "time": 14.75,
            "types": {
                "bothzl": -4,
                "czl": 4,
                "hovers": 2.5,
                "poachers": 4,
                "selfsynergy": 0,
                "shadow": 8
            },
            "weight": 0.25
        }],
        "21": [{
            "difficulty": 21,
            "id": "1-unused-small-key-in-each-adult-dungeon",
            "jp": "全ての大人のダンジョンから未使用の鍵最低１つずつ",
            "name": "1 Unused Small Key in each Adult Dungeon",
            "rowtypes": {
                "bottle": 0.5,
                "gclw": 1,
                "hookshot": 100,
                "ms": 10
            },
            "skill": 0.75,
            "subtypes": {
                "bosskey": 4,
                "bosskey2": 3,
                "compass": 6,
                "hearts3": 0.5,
                "hearts4": 2.25,
                "map": 6,
                "poachers": 1.5,
                "skulls": 4.5,
                "songs5": 5
            },
            "time": 16,
            "types": {
                "dc": 2,
                "dmc": 1,
                "fire": 1,
                "forest": 2.75,
                "fortress": 2.5,
                "gtg": 1,
                "hovers": 2.5,
                "selfsynergy": -3,
                "shadow": 2,
                "spirit": 3,
                "water": 2
            },
            "weight": 0.15000000000000002
        }, {
            "difficulty": 21,
            "id": "3-shields-3-boots",
            "jp": "盾3種、靴3種",
            "name": "3 Shields & 3 Boots",
            "rowtypes": {
                "bottle": 0.5,
                "gclw": 1,
                "hookshot": 100,
                "ms": 8
            },
            "skill": 0.75,
            "subtypes": {
                "bosskey": 3,
                "bosskey2": 5,
                "compass": 4,
                "hearts3": 1.5,
                "hearts4": 0.75,
                "map": 6,
                "poachers": 0.25,
                "skulls": 1.5,
                "songs4": 1.5,
                "songs5": 1
            },
            "time": 15.75,
            "types": {
                "endon": -0.5,
                "fortress": 2.5,
                "fountain": 2,
                "gtg": 1,
                "hovers": 2.5,
                "ice": 1.5,
                "incboot": 100,
                "incshield": 100,
                "irons": 2,
                "selfsynergy": 0,
                "spirit": 3.5
            },
            "weight": 0.35000000000000003
        }, {
            "difficulty": 21,
            "id": "all-4-market-area-skulltulas",
            "jp": "城下町エリアの黄金のスタルチュラ4匹",
            "name": "All 4 Market area Skulltulas",
            "rowtypes": {
                "bottle": 100,
                "gclw": 1,
                "hookshot": 100,
                "ms": 100
            },
            "skill": 0.5,
            "subtypes": {
                "bosskey2": 2,
                "compass": 1,
                "hearts3": 3,
                "hearts4": 1,
                "map": 2,
                "poachers": 0.25,
                "skulls": 2,
                "songs4": 1.5,
                "songs5": 2
            },
            "time": 16,
            "types": {
                "child2": 5,
                "dins": 1,
                "endon": 0,
                "forest": 3,
                "hovers": 2.5,
                "incfboss": 100,
                "marketgs": 4,
                "pg": 2.25,
                "selfsynergy": 0
            },
            "weight": -0.9999999999999999
        }, {
            "difficulty": 21,
            "id": "all-5-skulltulas-in-shadow-temple",
            "jp": "闇の神殿の黄金のスタルチュラ5匹",
            "name": "All 5 Skulltulas in Shadow Temple",
            "rowtypes": {
                "bottle": 100,
                "gclw": 1,
                "hookshot": 100,
                "ms": 12
            },
            "skill": 0.5,
            "subtypes": {
                "aganon": 0.25,
                "bosskey": 3.5,
                "bosskey2": 6,
                "childchu": -2.5,
                "chuczl": 2,
                "compass": 1,
                "hearts3": 2,
                "hearts4": 1,
                "skulls": 2.5
            },
            "time": 15.5,
            "types": {
                "bothzl": -4,
                "czl": 4,
                "hovers": 2.5,
                "poachers": 4,
                "selfsynergy": 0,
                "shadow": 8
            },
            "weight": 0.1
        }, {
            "difficulty": 21,
            "id": "defeat-4-different-iron-knuckles",
            "jp": "アイアンナックを4体撃破",
            "name": "Defeat 4 Different Iron Knuckles",
            "rowtypes": {
                "bottle": 100,
                "gclw": 0,
                "hookshot": 100,
                "ms": 7
            },
            "skill": 0.75,
            "subtypes": {
                "bosskey": 7.25,
                "bosskey2": 5,
                "childtrade": 1.5,
                "compass": 1,
                "czl": 1.5,
                "hearts3": 2,
                "hearts4": 1.5,
                "map": 3,
                "poachers": 0.25,
                "skulls": 1,
                "songs5": 1
            },
            "time": 16,
            "types": {
                "aganon": 3,
                "bganon": -3,
                "cganon": 3,
                "fortress": 2.5,
                "gtg": 1,
                "hovers": 2.5,
                "selfsynergy": 0,
                "spirit": 4
            },
            "weight": 0.4
        }],
        "22": [{
            "difficulty": 22,
            "id": "3-swords-tunics-boots-and-shields",
            "jp": "",
            "name": "3 Swords, Tunics, Boots, and Shields",
            "rowtypes": {
                "bottle": 100,
                "gclw": 1,
                "hookshot": 100,
                "ms": 100
            },
            "skill": 0.75,
            "subtypes": {
                "bosskey": 3.25,
                "bosskey2": 5,
                "bulletbag": -3,
                "compass": 4,
                "dmc": 0.25,
                "hearts3": 1.5,
                "hearts4": 0.75,
                "map": 6,
                "poachers": 0.25,
                "skulls": 1.5,
                "songs4": 1.5,
                "songs5": 1
            },
            "time": 16.75,
            "types": {
                "endon": -0.5,
                "fortress": 2.5,
                "fountain": 1.5,
                "gtg": 1,
                "gtunic": 1.5,
                "hovers": 2.5,
                "ice": 1.5,
                "incboot": 100,
                "incshield": 100,
                "incsword": 100,
                "inctunic": 100,
                "irons": 2,
                "selfsynergy": -1,
                "spirit": 3.5,
                "swords": 3
            },
            "weight": 0.2
        }, {
            "difficulty": 22,
            "id": "all-5-skulltulas-in-water-temple",
            "jp": "水の神殿の黄金のスタルチュラ5匹",
            "name": "All 5 Skulltulas in Water Temple",
            "rowtypes": {
                "bottle": 100,
                "gclw": 0.5,
                "hookshot": 100,
                "ms": 100
            },
            "skill": 0.75,
            "subtypes": {
                "aganon": 0.25,
                "bbprize": -6,
                "bosskey": 3.75,
                "childchu": -2.5,
                "chuczl": 2,
                "compass": 3.5,
                "hearts3": 1.5,
                "hearts4": 2.5,
                "hovers": 0.5,
                "map": 3.5,
                "skulls": 2.5,
                "spirit": -1
            },
            "time": 16.25,
            "types": {
                "bothzl": -4,
                "czl": 4,
                "dc": 2,
                "ice": 1.5,
                "inclong": 100,
                "incwskull": 100,
                "irons": 2,
                "longshot": 4,
                "poachers": 4,
                "selfsynergy": 0,
                "water": 4
            },
            "weight": 0
        }, {
            "difficulty": 22,
            "id": "both-hps-in-lost-woods",
            "jp": "迷いの森のハートのかけら２つ",
            "name": "Both HPs in Lost Woods",
            "rowtypes": {
                "bottle": 0,
                "gclw": 0,
                "hookshot": 0,
                "ms": 0
            },
            "skill": 0,
            "subtypes": {
                "cganon": 2,
                "child2": 2.5,
                "hearts3": 4.5,
                "hearts4": 1.5,
                "incsaria": 100,
                "marketgs": 2,
                "skulls": 0.25,
                "songs4": 3
            },
            "time": 16.25,
            "types": {
                "childchu": 0,
                "childreset": 1.25,
                "childtrade": 2.75,
                "chuczl": 2,
                "czl": 5,
                "saria": 3,
                "selfsynergy": 0
            },
            "weight": -0.20000000000000007
        }],
        "23": [{
            "difficulty": 23,
            "id": "7-compasses",
            "jp": "コンパス7つ",
            "name": "7 Compasses",
            "rowtypes": {
                "bottle": 0.5,
                "gclw": 1,
                "hookshot": 100,
                "ms": 5
            },
            "skill": 1,
            "subtypes": {
                "bosskey2": 2,
                "hearts3": 1.5,
                "hearts4": 2,
                "map": 22,
                "poachers": 1.5,
                "skulls": 1
            },
            "time": 17,
            "types": {
                "childchu": 0,
                "compass": 22,
                "hovers": 2.5,
                "incmc": 100,
                "selfsynergy": -3
            },
            "weight": 0.15000000000000002
        }, {
            "difficulty": 23,
            "id": "9-hearts",
            "jp": "ハート9つ",
            "name": "9 Hearts",
            "rowtypes": {
                "bottle": 0,
                "gclw": 1,
                "hookshot": 1,
                "ms": 4
            },
            "skill": 1,
            "time": 17,
            "types": {
                "childtrade": 2.75,
                "hearts3": 16,
                "hearts4": 3,
                "inchearts": 100,
                "saria": 3,
                "selfsynergy": -3
            },
            "weight": -0.2
        }, {
            "difficulty": 23,
            "id": "defeat-twinrova",
            "jp": "ツインローバ撃破",
            "name": "Defeat Twinrova",
            "rowtypes": {
                "bottle": 0.5,
                "gclw": 0,
                "hookshot": 100,
                "ms": 100
            },
            "skill": 1,
            "subtypes": {
                "bosskey": 6,
                "bosskey2": 6,
                "compass": 1,
                "hearts3": 3,
                "hearts4": 1.5,
                "map": 3,
                "poachers": 0.25,
                "skulls": 0.5,
                "songs5": 1
            },
            "time": 17.25,
            "types": {
                "endon": -1,
                "fortress": 2.5,
                "gtg": 1,
                "hovers": 2.5,
                "incspboss": 100,
                "legitlacs": 100,
                "selfsynergy": 0,
                "spirit": 8
            },
            "weight": 0.05
        }, {
            "difficulty": 23,
            "id": "green-gauntlets",
            "jp": "緑のグローブ",
            "name": "Green Gauntlets",
            "rowtypes": {
                "bottle": 100,
                "gclw": 0,
                "hookshot": 0,
                "ms": 100
            },
            "skill": 0,
            "subtypes": {
                "bombbag": 100,
                "bulletbag": 100,
                "cganon": 2,
                "hearts3": 3,
                "hearts4": 1,
                "incsaria": 100,
                "skulls": 0.5,
                "songs4": 3
            },
            "time": 17,
            "types": {
                "childchu": 0,
                "childreset": 1.25,
                "childtrade": 2.75,
                "chuczl": 2,
                "czl": 5,
                "dmcchild": 1,
                "saria": 5,
                "selfsynergy": 0,
                "strength": 100
            },
            "weight": 0
        }],
        "24": [{
            "difficulty": 24,
            "id": "1-skulltula-from-each-adult-dungeon",
            "jp": "全ての大人ダンジョンからスタルチュラ最低1匹ずつ",
            "name": "1 Skulltula from each Adult Dungeon",
            "rowtypes": {
                "bottle": 0.5,
                "gclw": 1,
                "hookshot": 100,
                "ms": 12
            },
            "skill": 1,
            "subtypes": {
                "bosskey": 4,
                "bosskey2": 3,
                "childchu": -2.5,
                "compass": 6,
                "hearts3": 1,
                "hearts4": 2.25,
                "map": 6,
                "poachers": 1.5,
                "skulls": 4.5,
                "songs5": 5
            },
            "time": 17.75,
            "types": {
                "dmc": 1,
                "fire": 1.5,
                "forest": 2.75,
                "fortress": 2.5,
                "gtg": 1,
                "hovers": 2.5,
                "selfsynergy": -3,
                "shadow": 2,
                "spirit": 3,
                "water": 3
            },
            "weight": 0
        }, {
            "difficulty": 24,
            "id": "10-songs",
            "jp": "歌10つ以上",
            "name": "10 Songs",
            "rowtypes": {
                "bottle": 100,
                "gclw": 1,
                "hookshot": 2,
                "ms": 100
            },
            "skill": 0.25,
            "subtypes": {
                "aganon": 0.25,
                "bosskey": 3.5,
                "child2": 3,
                "childchu": -2.5,
                "compass": 1,
                "hearts3": 1.5,
                "hearts4": 0.25,
                "hovers": 1,
                "map": 2,
                "skulls": 1.5
            },
            "time": 17.75,
            "types": {
                "endon": -0.25,
                "fortress": 2.5,
                "incsongs": 100,
                "poachers": 4,
                "selfsynergy": 0,
                "songs10": 10,
                "songs5": 15,
                "spirit": 2.5
            },
            "weight": 0
        }],
        "25": [{
            "difficulty": 25,
            "id": "all-3-elemental-arrows",
            "jp": "魔法矢3つ",
            "name": "All 3 Elemental Arrows",
            "rowtypes": {
                "bottle": 100,
                "gclw": 1,
                "hookshot": 1.5,
                "ms": 100
            },
            "skill": 0.5,
            "subtypes": {
                "aganon": 1,
                "bosskey": 10,
                "bosskey2": 10,
                "childchu": -2.5,
                "hearts3": 1.5,
                "hearts4": 0.75,
                "hovers": 0.5,
                "kd": 2,
                "map": 3,
                "quiver": 4.5,
                "skulls": 0.25
            },
            "time": 18.75,
            "types": {
                "endon": -1,
                "firearrow": 8,
                "fortress": 3,
                "gtg": 1,
                "incarrows": 100,
                "inclacs": 100,
                "legitlacs": 100,
                "lightarrow": 6.5,
                "poachers": 4,
                "selfsynergy": -0.5
            },
            "weight": -0.1
        }, {
            "difficulty": 25,
            "id": "beat-the-spirit-temple",
            "jp": "魂の神殿クリア",
            "name": "Beat the Spirit Temple",
            "rowtypes": {
                "bottle": 1,
                "gclw": 0,
                "hookshot": 100,
                "ms": 100
            },
            "skill": 1,
            "subtypes": {
                "bosskey": 6,
                "bosskey2": 6,
                "compass": 1,
                "hearts3": 3,
                "hearts4": 1.5,
                "map": 3,
                "poachers": 0.25,
                "skulls": 0.5,
                "songs5": 1
            },
            "time": 18.5,
            "types": {
                "endon": -1,
                "fortress": 2.5,
                "gtg": 1,
                "hovers": 2.5,
                "incspboss": 100,
                "legitlacs": 100,
                "selfsynergy": 0,
                "spirit": 8
            },
            "weight": 0
        }, {
            "difficulty": 25,
            "id": "get-to-the-end-of-forest-trial",
            "jp": "森の結界の最後の部屋に到達",
            "name": "Get to the end of Forest Trial",
            "rowtypes": {
                "bottle": 100,
                "gclw": 1,
                "hookshot": 100,
                "ms": 4
            },
            "skill": 0.5,
            "subtypes": {
                "bosskey": 1,
                "childchu": -2.5,
                "chuczl": 2,
                "gtunic": 0.25,
                "hearts3": 1,
                "hearts4": 0.5,
                "songs5": 1
            },
            "time": 18.75,
            "types": {
                "aganon": 3,
                "bothzl": -4,
                "czl": 4,
                "dins": 3,
                "dmc": 0.75,
                "dmcchild": 0.75,
                "endon": -0.5,
                "firearrow": 8,
                "fortress": 2,
                "hovers": 1.5,
                "lightarrow": 10,
                "magic": 2,
                "poachers": 4,
                "selfsynergy": 0
            },
            "weight": 0
        }, {
            "difficulty": 25,
            "id": "map-compass-in-spirit-temple",
            "jp": "魂の神殿のマップとコンパス",
            "name": "Map & Compass in Spirit Temple",
            "rowtypes": {
                "bottle": 100,
                "gclw": 1,
                "hookshot": 100,
                "ms": 5.75
            },
            "skill": 1,
            "subtypes": {
                "aganon": 0.25,
                "bosskey": 2,
                "bosskey2": 4,
                "childchu": -2.5,
                "chuczl": 2,
                "compass": 4,
                "hearts3": 1,
                "hearts4": 0.25,
                "map": 3,
                "skulls": 1,
                "songs5": 1
            },
            "time": 18.5,
            "types": {
                "bothzl": -4,
                "czl": 4,
                "fortress": 3,
                "hovers": 2.5,
                "poachers": 4,
                "quiver": 1.5,
                "selfsynergy": -1,
                "spirit": 5
            },
            "weight": -0.05
        }, {
            "difficulty": 25,
            "id": "two-fairy-spells",
            "jp": "魔法のアイテム２つ",
            "name": "Two Fairy Spells",
            "rowtypes": {
                "bottle": 100,
                "gclw": 1,
                "hookshot": 1,
                "ms": 0
            },
            "skill": 0.25,
            "subtypes": {
                "aganon": 0.25,
                "bosskey": 3,
                "bottleslot": 4,
                "child2": 5.5,
                "childchu": -2.5,
                "chuczl": 2,
                "compass": 4,
                "gtunic": 0.25,
                "hearts3": 2.25,
                "hearts4": 0.5,
                "map": 4,
                "skulls": 0.75
            },
            "time": 18.75,
            "types": {
                "bothzl": -4,
                "childtrade": 2.75,
                "czl": 7,
                "dmc": 0.75,
                "dmcchild": 0.75,
                "endon": -0.25,
                "fortress": 2.5,
                "fountain": 2,
                "hovers": 2,
                "incfairy": 100,
                "magic": 2,
                "poachers": 4,
                "selfsynergy": -0.5,
                "spirit": 2
            },
            "weight": 0.15000000000000002
        }],
        "26": [],
        "27": [],
        "28": [],
        "29": [],
        "30": [],
        "31": [],
        "32": [],
        "33": [],
        "34": [],
        "35": [],
        "36": [],
        "37": [],
        "38": [],
        "39": [],
        "40": [],
        "41": [],
        "42": [],
        "43": [],
        "44": [],
        "45": [],
        "46": [],
        "47": [],
        "48": [],
        "49": [],
        "50": [],
        "info": {
            "version": "v9.3"
        },
        "rowtypes": {
            "bottle": 2,
            "gclw": 1,
            "hookshot": 3,
            "ms": 11
        },
        "synfilters": {
            "childchu": "min 1",
            "endon": "max -1",
            "legitlacs": "min -2"
        },
        "averageStandardDeviation": 54.28713604517094
};
