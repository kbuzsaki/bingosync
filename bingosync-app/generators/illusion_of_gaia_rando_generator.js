// Inspired from alttp rando generator
// Copy from simple_generator
(function(j, i, g, m, k, n, o) { function q(b) { var e, f, a = this, c = b.length, d = 0, h = a.i = a.j = a.m = 0; a.S = []; a.c = []; for (c || (b = [c++]); d < g;) a.S[d] = d++; for (d = 0; d < g; d++) e = a.S[d], h = h + e + b[d % c] & g - 1, f = a.S[h], a.S[d] = f, a.S[h] = e; a.g = function(b) { var c = a.S, d = a.i + 1 & g - 1, e = c[d], f = a.j + e & g - 1, h = c[f]; c[d] = h; c[f] = e; for (var i = c[e + h & g - 1]; --b;) d = d + 1 & g - 1, e = c[d], f = f + e & g - 1, h = c[f], c[d] = h, c[f] = e, i = i * g + c[e + h & g - 1]; a.i = d; a.j = f; return i }; a.g(g) } function p(b, e, f, a, c) { f = []; c = typeof b; if (e && c == "object") for (a in b) if (a.indexOf("S") < 5) try { f.push(p(b[a], e - 1)) } catch (d) {} return f.length ? f : b + (c != "string" ? "\0" : "") } function l(b, e, f, a) { b += ""; for (a = f = 0; a < b.length; a++) { var c = e, d = a & g - 1, h = (f ^= e[a & g - 1] * 19) + b.charCodeAt(a); c[d] = h & g - 1 } b = ""; for (a in e) b += String.fromCharCode(e[a]); return b } i.seedrandom = function(b, e) { var f = [], a; b = l(p(e ? [b, j] : arguments.length ? b : [(new Date).getTime(), j, window], 3), f); a = new q(f); l(a.S, j); i.random = function() { for (var c = a.g(m), d = o, b = 0; c < k;) c = (c + b) * g, d *= g, b = a.g(1); for (; c >= n;) c /= 2, d /= 2, b >>>= 1; return (c + b) / d }; return b }; o = i.pow(g, m); k = i.pow(2, k); n = k * 2; l(i.random(), j) })([], Math, 256, 6, 52);

bingoGenerator = function(bingoList, opts) {
    var LANG = opts.lang || 'name';
    var MODE = opts.mode || "normal";
    var cardType = "Normal";
    var SEED = opts.seed || Math.ceil(999999 * Math.random()).toString();
    var size = 5;

    // simpler generator that just does a random choice without duplicates
    Math.seedrandom(SEED);
    if (true) {
        var usedGoals = {};
        var bingoBoard = [];

        // Add extra constraints to avoid sub goals (1 and 3 statue for example)
        var isStatueGoal = function(s) {
            return s.indexOf("Mystic Statue") != -1;
        };
        var statueGoalAdded = false;

        var isJewelGoal = function(s) {
            return s.indexOf("Red Jewel") != -1;
        };
        var jewelGoalAdded = false;

        var isHintGoal = function(s) {
            return s.indexOf("Hint") != -1;
        };
        var hintGoalAdded = false;

        for (var i = 1; i <= 25; i++) {
            var randIndex = Math.floor(Math.random() * bingoList.length);
            while (usedGoals[randIndex] ||
              (statueGoalAdded && isStatueGoal(bingoList[randIndex])) ||
              (jewelGoalAdded && isJewelGoal(bingoList[randIndex])) ||
              (hintGoalAdded && isHintGoal(bingoList[randIndex]))) {
                randIndex = Math.floor(Math.random() * bingoList.length);
            }
            usedGoals[randIndex] = true;

            var goal = bingoList[randIndex];
            bingoBoard[i] = {"name": goal};
            if (isStatueGoal(goal)) {
                statueGoalAdded = true;
            }
            if (isJewelGoal(goal)) {
                jewelGoalAdded = true;
            }
            if (isHintGoal(goal)) {
                hintGoalAdded = true;
            }
        }

        return bingoBoard;
    }
};

var bingoList = [
    "Escape from the prison",
    "Defeat Castoth",
    "Free all miners in Diamond Mine",
    "Defeat Viper",
    "Talk to Buffy",
    "Defeat the vampires",
    "Find the differences in Angel Village",
    "Defeat Sandfanger",
    "Grow all mushrooms on Mt. Kress",
    "Talk to the spirit in Angkor Wat",
    "Get the item behind Killer 6",
    "Defeat Mummy Queen",
    "Kill a boss... Twice.",
    "Get 1 Mystic Statue",
    "Get 2 Mystic Statues",
    "Get 3 Mystic Statues",
    "Get 4 Mystic Statues",
    "Get 5 Mystic Statues",
    "Get all Mystic Statues",
    "Get 1 Hint",
    "Get 5 Hints",
    "Get all 11 Hints",
    "Get 10 Red Jewels",
    "Get 20 Red Jewels",
    "Get 30 Red Jewels",
    "Get 40 Red Jewels",
    "Get 50 Red Jewels",
    "Defeat Strong Arm",
    "Save Kara from the painting",
    "Give Ann an Apple",
    "Use the Teapot",
    "Use all 3 melodies",
    "Get 4 keys",
    "Learn Psycho Dash",
    "Learn Psycho Slidder",
    "Learn Spin Dash",
    "Learn Dark Friar",
    "Learn Aura Barrier",
    "Learn EarthQuaker",
    "Transform into Shadow",
    "Wear glasses and have a ring",
    "Read 3 letters",
    "Use the Gorgon Flower",
    "Hit a snake",
    "Make the dog in Diamond Coast wave it's tail",
    "Get a Health upgrade",
    "Get a Strength upgrade",
    "Get a Defense upgrade",
    "Exit a minor dungeons from the end without dying",
    "Get a Continue (100DP)",
    "Climb a ladder as Shadow",
    "Drop an item",
    "Defeat Mummy Queen as Freedan",
    "Defeat Vampires as Will"
];
