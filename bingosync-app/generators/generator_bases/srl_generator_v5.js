// presumably this is a seedrandom polyfill
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

bingoGenerator = function(bingoList, opts) {
    let size = opts.size || 5;
    let seedCycle = size;
    for (let i = 1; i <= size; i++) {
        seedCycle *= i * i;
    }
    let seedCount = seedCycle;
    if (seedCount < 1000000) {
        seedCount = Math.ceil(1000000 / seedCycle) * seedCycle;
    }
    let lang = opts.lang || 'name';
    let seed = opts.seed || Math.floor(seedCount * Math.random()).toString();

    // The original SRL generators were written with 1-indexed difficulty tiers.
    // If we get a goal list that is 1-indexed, hack it to be 0-indexed instead.
    if (bingoList.length === (size * size) + 1) {
        bingoList = bingoList.slice(1, (size * size) + 1);
    }
    // If we are doing a size for which the generator was not designed, shove it in anyway.
    if (bingoList.length !== size * size) {
        let concatenated = [];
        for (let i = 0; i < bingoList.length; i++) {
            if (typeof bingoList[i] !== 'undefined') {
                for (let j = 0; j < bingoList[i].length; j++) {
                    concatenated.push(bingoList[i][j]);
                }
            }
        }
        bingoList = [];
        const perEach = Math.floor(concatenated.length / (size * size));
        const remainder = concatenated.length % (size * size);
        for (let i = 0; i < size * size; i++) {
            bingoList.push([]);
            for (let j = 0; j < perEach; j++) {
                bingoList[i].push(concatenated.shift());
            }
            if (i < remainder) {
                bingoList[i].push(concatenated.shift());
            }
        }
    }

    Math.seedrandom(seed);

    var lineCheckList = [];
    for (let square = 0; square < size * size; square++) {
        lineCheckList[square] = [];
    }
    for (let row = 0; row < size; row++) {
        for (let col = 0; col < size; col++) {
            let square = row * size + col;
            for (let colX = 0; colX < size; colX++) {
                if (colX === col) {
                    continue;
                }
                let squareX = row * size + colX;
                lineCheckList[square].push(squareX);
            }
            for (let rowX = 0; rowX < size; rowX++) {
                if (rowX === row) {
                    continue;
                }
                let squareX = rowX * size + col;
                lineCheckList[square].push(squareX);
            }
            if (row === col) {
                for (let rowX = 0; rowX < size; rowX++) {
                    if (rowX === row) {
                        continue;
                    }
                    let squareX = rowX * size + rowX;
                    lineCheckList[square].push(squareX);
                }
            }
            if (row === size - 1 - col) {
                for (let rowX = 0; rowX < size; rowX++) {
                    if (rowX === row) {
                        continue;
                    }
                    let squareX = rowX * size + (size - 1 - col);
                    lineCheckList[square].push(squareX);
                }
            }
        }
    }
    let difficulty;
    if (size === 5) {
        difficulty = function(i) {

            //This function takes a space on the board between 0 and 24, and returns its difficulty score, also between 0 and 24.
            //These should always form a magic square if seed remains the same

            var firstThreeDigits = Math.floor(seed / 1000) % 1000
            var lastThreeDigits = seed % 1000

            //Use last 3 digits to generate 4 random numbers. between 0-1, 0-2, 0-3, and 0-4 respectively
            //Done by using relative prime factor modulo's. Except 2 and 4 which takes independent digits from a modulo 8
            //3, 5, and 8 are co-prime so their modulo's are independent

            var mod8 = lastThreeDigits % 8

            var random1 = mod8 % 2					//between 0-1    (this essentially takes the last bit of the 3 bit number)
            var random2 = lastThreeDigits % 3   	//between 0-2
            var random3 = Math.floor(mod8 / 2)		//between 0-3    (this essentially takes the first two bits of the 3 bit number)
            var random4 = lastThreeDigits % 5       //between 0-4

            //using the numbers generated above, we insert the numbers 0-4 into a list in a random order to create a shuffled table
            var randomTable1 = [0];
            randomTable1.splice(random1, 0, 1);
            randomTable1.splice(random2, 0, 2);
            randomTable1.splice(random3, 0, 3);
            randomTable1.splice(random4, 0, 4);


            //Do the same this as above for a second table

            mod8 = firstThreeDigits % 8
            random1 = mod8 % 2
            random2 = firstThreeDigits % 3
            random3 = Math.floor(mod8 / 2)
            random4 = firstThreeDigits % 5

            var randomTable2 = [0];
            randomTable2.splice(random1, 0, 1);
            randomTable2.splice(random2, 0, 2);
            randomTable2.splice(random3, 0, 3);
            randomTable2.splice(random4, 0, 4);

            //Since we use mod 3 5 and 8 for our random generation above, when dividing by 3*5*8=120 we have a new independent value.
            //We use this to create one last value between 0 and 4
            var lastDigitsSeed = Math.floor(lastThreeDigits / 120);
            var firstDigitsSeed = Math.floor(firstThreeDigits / 120);
            randomSeedX = (lastDigitsSeed * 8 + firstDigitsSeed) % 5;


            var y = Math.floor(i / 5);
            //This represents the y position on the board, top row being a 0, next a 1. esc.

            var x = (i + randomSeedX) % 5;
            //This represents the x position, modified by the randomSeedX. To make not every board use the same base for the magic square

            //since x is added to this value and then mod5'd, every distinct value of x returns a distinct value for index1.
            //and since every row has one objective of each x value, all objectives will have a different.
            //and since 3 and 5 do not share any common factors, every unique value of y will also give a unique value
            //so for index1, so each row also has 1 of each value.
            var index1 = (x + 3 * y) % 5
            //Same is true for index2
            var index2 = (3 * x + y) % 5


            //Now we use the tables generated earlier to get randomized difficulty scores. And since each row and column has every value
            //for index1/index2 once, and the tables both contain every number once, each row and column will still have every value once.
            var groupOf5 = randomTable1[index1];
            var withinGroup = randomTable2[index2];

            //Now calculate the actual true difficulty of the space.
            return 5 * groupOf5 + withinGroup;

            //since every row/column has every value for groupOf5 and withinGroup once, the total for all of them will be the same.
            // 5 * (0,1,2,3,4) + (0,1,2,3,4)
            // (0,5,10,15,20) + (0,1,2,3,4) = 60   (becomes 65 after 1-indexing)
        }
    } else {
        difficulty = function(i) {
            let seedMut = seed % seedCycle;
            let seedCycleMut = seedCycle;
            function extract(range) {
                let result = seedMut % range;
                seedMut = Math.floor(seedMut / range);
                seedCycleMut = Math.floor(seedCycleMut / range);
                return result;
            }
            function gcd(a, b) {
                if (!b) {
                    return a;
                }

                return gcd(b, a % b);
            }

            //This function takes a space on the board between 0 and 24, and returns its difficulty score, also between 0 and 24.
            //These should always form a magic square if seed remains the same

            //using the numbers generated above, we insert the numbers 0-4 into a list in a random order to create a shuffled table
            let randomTable1 = [0];
            for (let i = 1; i < size; i++) {
                randomTable1.splice(extract(i + 1), 0, i);
            }

            //Do the same this as above for a second table
            let randomTable2 = [0];
            for (let i = 1; i < size; i++) {
                randomTable2.splice(extract(i + 1), 0, i);
            }

            let randomSeedX = extract(size);

            let y = Math.floor(i / size);
            //This represents the y position on the board, top row being a 0, next a 1. esc.

            let x = (i + randomSeedX) % size;
            //This represents the x position, modified by the randomSeedX. To make not every board use the same base for the magic square

            //since x is added to this value and then mod5'd, every distinct value of x returns a distinct value for index1.
            //and since every row has one objective of each x value, all objectives will have a different.
            //and since 3 and 5 do not share any common factors, every unique value of y will also give a unique value
            //so for index1, so each row also has 1 of each value.
            let modFactor = 3;
            while (gcd(modFactor, size) !== 1) {
                modFactor++;
            }

            let index1 = (x + modFactor * y) % size;
            //Same is true for index2
            let index2 = (modFactor * x + y) % size;


            //Now we use the tables generated earlier to get randomized difficulty scores. And since each row and column has every value
            //for index1/index2 once, and the tables both contain every number once, each row and column will still have every value once.
            let groupOf5 = randomTable1[index1];
            let withinGroup = randomTable2[index2];

            //Now calculate the actual true difficulty of the space.
            let value = size * groupOf5 + withinGroup;

            //since every row/column has every value for groupOf5 and withinGroup once, the total for all of them will be the same.
            // 5 * (0,1,2,3,4) + (0,1,2,3,4)
            // (0,5,10,15,20) + (0,1,2,3,4) = 60   (becomes 65 after 1-indexing)

            // sanity check
            if (seedCycleMut !== 1) {
                throw new Error("Programming error");
            }
            return value;
        }
    }

    function checkLine(i, typesA) {
        var synergy = 0;
        for (var j = 0; j < lineCheckList[i].length; j++) {
            var typesB = bingoBoard[lineCheckList[i][j]].types;
            if (typeof typesA !== 'undefined' && typeof typesB !== 'undefined') {
                for (var k = 0; k < typesA.length; k++) {
                    for (var l = 0; l < typesB.length; l++) {
                        if (typesA[k] === typesB[l]) {
                            synergy++;
                            if (k === 0) {
                                synergy++;
                            }
                            if (l === 0) {
                                synergy++;
                            }
                        }
                    }
                }
            }
        }
        return synergy;
    }
    var bingoBoard = [];
    for (let i = 0; i < size * size; i++) {
        bingoBoard[i] = {
            difficulty: difficulty(i)
        };
    }
    for (let i = 0; i < size * size; i++) {
        let getDifficulty = bingoBoard[i].difficulty;
        let RNG = Math.floor(bingoList[getDifficulty].length * Math.random());
        if (RNG === bingoList[getDifficulty].length) {
            RNG--;
        }
        let j = 0,
            synergy = 0,
            currentObj = null,
            minSynObj = null;
        do {
            currentObj = bingoList[getDifficulty][(j + RNG) % bingoList[getDifficulty].length];
            synergy = checkLine(i, currentObj.types);
            if (minSynObj == null || synergy < minSynObj.synergy) {
                minSynObj = {
                    synergy: synergy,
                    value: currentObj
                };
            }
            j++;
        } while ((synergy !== 0) && (j < bingoList[getDifficulty].length));
        bingoBoard[i].types = minSynObj.value.types;
        bingoBoard[i].name = minSynObj.value[lang] || minSynObj.value.name;
        bingoBoard[i].synergy = minSynObj.synergy;
    }
    return {'objectives': bingoBoard, 'seed': seed};
}

module.exports = bingoGenerator;
