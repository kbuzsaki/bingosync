// Inspired from alttp rando generator and iconoclasts generator
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
    var usedGoals = {};
    var bingoBoard = [];

    let objective_type_count = { };
    for (const key of Object.keys(typeLimits)) {
        objective_type_count[key] = typeLimits[key];
    }

    let objective_difficulty_count = { };
    for (const key of Object.keys(difficultyLimits)) {
        objective_difficulty_count[key] = difficultyLimits[key];
    }

    let is_objective_useable = function(objective) {
        const difficulty = objective.Difficulty;
        const obj_type = objective.Type;
        return (objective_difficulty_count[difficulty] > 0) && (objective_type_count[obj_type] > 0);
    };

    for (var i = 1; i <= 25; i++) {
        var randIndex = Math.floor(Math.random() * bingoList.length);
        while (usedGoals[randIndex] || !is_objective_useable(bingoList[randIndex])) {
            randIndex = Math.floor(Math.random() * bingoList.length);
        }
        usedGoals[randIndex] = true;

        var goal = bingoList[randIndex];
        bingoBoard[i] = {"name": goal.Name};
        objective_difficulty_count[goal.Difficulty]--;
        objective_type_count[goal.Type]--;
    }

    return bingoBoard;
};

var bingoList = [
    {
      "Name": "Hit a snake",
      "Type": "Generic",
      "Difficulty": 1
    },
    {
      "Name": "Make a dog wave it's tail",
      "Type": "Generic",
      "Difficulty": 1
    },
    {
      "Name": "Get a Strength upgrade",
      "Type": "Generic",
      "Difficulty": 1
    },
    {
      "Name": "Get a Defense upgrade",
      "Type": "Generic",
      "Difficulty": 1
    },
    {
      "Name": "Get a Health upgrade",
      "Type": "Generic",
      "Difficulty": 1
    },
    {
      "Name": "Drop an item",
      "Type": "Generic",
      "Difficulty": 1
    },
    {
      "Name": "Talk to the laborer in Freejia entering from the roof.",
      "Type": "Generic",
      "Difficulty": 1
    },
    {
      "Name": "Refuse to give food to a child",
      "Type": "Generic",
      "Difficulty": 1
    },
    {
      "Name": "Set someone hairs on fire",
      "Type": "Generic",
      "Difficulty": 1
    },
    {
      "Name": "Break up a couple",
      "Type": "Generic",
      "Difficulty": 1
    },
    {
      "Name": "Have a full inventory while getting an item",
      "Type": "Generic",
      "Difficulty": 1
    },
    {
      "Name": "Get the SW sky garden chest running from the east ramp",
      "Type": "Generic",
      "Difficulty": 1
    },
    {
      "Name": "Discard a status upgrade gem",
      "Type": "Generic",
      "Difficulty": 1
    },
    {
      "Name": "Talk to all your friends in Seaside Palace",
      "Type": "Generic",
      "Difficulty": 1
    },
    {
      "Name": "Offend 2 women by jumping down in front of them",
      "Type": "Generic",
      "Difficulty": 1
    },
    {
      "Name": "Break all barriers in Diamond Mine",
      "Type": "Generic",
      "Difficulty": 1
    },
    {
      "Name": "Use the teapot",
      "Type": "Generic",
      "Difficulty": 1
    },
    {
      "Name": "Learn Psycho Slider",
      "Type": "Abilities",
      "Difficulty": 1
    },
    {
      "Name": "Learn Spin dash",
      "Type": "Abilities",
      "Difficulty": 1
    },
    {
      "Name": "Transform into Shadow",
      "Type": "Generic",
      "Difficulty": 1
    },
    {
      "Name": "Give food to the child",
      "Type": "Generic",
      "Difficulty": 1
    },
    {
      "Name": "Use the Mu Palace key",
      "Type": "Generic",
      "Difficulty": 1
    },
    {
      "Name": "Get a Hint",
      "Type": "Hints",
      "Difficulty": 1
    },
    {
      "Name": "Free all miners in Diamond Mine",
      "Type": "Generic",
      "Difficulty": 2
    },
    {
      "Name": "Talk to Buffy",
      "Type": "Generic",
      "Difficulty": 2
    },
    {
      "Name": "Find the differences in Angel Village",
      "Type": "Generic",
      "Difficulty": 2
    },
    {
      "Name": "Bring an Apple to Ann",
      "Type": "Generic",
      "Difficulty": 2
    },
    {
      "Name": "Learn Psycho Dash",
      "Type": "Abilities",
      "Difficulty": 2
    },
    {
      "Name": "Learn Dark Friar",
      "Type": "Abilities",
      "Difficulty": 2
    },
    {
      "Name": "Learn Aura Barrier",
      "Type": "Abilities",
      "Difficulty": 2
    },
    {
      "Name": "Learn Earthquaker",
      "Type": "Abilities",
      "Difficulty": 2
    },
    {
      "Name": "Use the Gorgon flower",
      "Type": "Generic",
      "Difficulty": 2
    },
    {
      "Name": "Deliver the Journal in the pyramid",
      "Type": "Journal",
      "Difficulty": 2
    },
    {
      "Name": "Open both coffins in Seaside Palace",
      "Type": "Generic",
      "Difficulty": 2
    },
    {
      "Name": "Talk to kara's portrait after freeing her",
      "Type": "Generic",
      "Difficulty": 2
    },
    {
      "Name": "Talk to a spirit to warp down Babel Tower",
      "Type": "Generic",
      "Difficulty": 2
    },
    {
      "Name": "Turn in the Will",
      "Type": "Generic",
      "Difficulty": 2
    },
    {
      "Name": "Unlock all three ladders in Inca Ruins",
      "Type": "Generic",
      "Difficulty": 2
    },
    {
      "Name": "Give Lilly a ride in your pocket",
      "Type": "Generic",
      "Difficulty": 2
    },
    {
      "Name": "Use the purification stone on the coffin",
      "Type": "Generic",
      "Difficulty": 2
    },
    {
      "Name": "Defeat all switch activated statues in Inca Ruins",
      "Type": "Generic",
      "Difficulty": 2
    },
    {
      "Name": "Fail one of Ishtar's puzzle",
      "Type": "Generic",
      "Difficulty": 2
    },
    {
      "Name": "Complete the snake game. Twice.",
      "Type": "Generic",
      "Difficulty": 2
    },
    {
      "Name": "Get a continue (100DP)",
      "Type": "Generic",
      "Difficulty": 3
    },
    {
      "Name": "Use a continue (100DP)",
      "Type": "Generic",
      "Difficulty": 3
    },
    {
      "Name": "Clear Room in Ankor Wat",
      "Type": "Generic",
      "Difficulty": 3
    },
    {
      "Name": "Defeat Sandfanger",
      "Type": "Sandfanger",
      "Difficulty": 3
    },
    {
      "Name": "Exit a minor dungeon without dying",
      "Type": "Generic",
      "Difficulty": 3
    },
    {
      "Name": "Climb a ladder as Shadow",
      "Type": "Generic",
      "Difficulty": 3
    },
    {
      "Name": "Discard 5 herbs",
      "Type": "Generic",
      "Difficulty": 3
    },
    {
      "Name": "Enter all Dark Spaces in Great Wall",
      "Type": "Generic",
      "Difficulty": 3
    },
    {
      "Name": "Get to the 5th hieroglyph Using Freedan",
      "Type": "Generic",
      "Difficulty": 3
    },
    {
      "Name": "Get to the 2nd hieroglyph Using Freedan",
      "Type": "Generic",
      "Difficulty": 3
    },
    {
      "Name": "Get to the 6th hieroglyph Using Freedan",
      "Type": "Generic",
      "Difficulty": 3
    },
    {
      "Name": "Let 2 egg cycle go by without hitting Sandfanger once",
      "Type": "Sandfanger",
      "Difficulty": 3
    },
    {
      "Name": "Enter all 3 dark space in Ankor Wat",
      "Type": "Generic",
      "Difficulty": 3
    },
    {
      "Name": "Finish with your father journal in your inventory",
      "Type": "Journal",
      "Difficulty": 3
    },
    {
      "Name": "Use all 3 melodies",
      "Type": "Generic",
      "Difficulty": 3
    },
    {
      "Name": "Use the Glasses and the Ring",
      "Type": "Generic",
      "Difficulty": 3
    },
    {
      "Name": "Upgrade Dark Friar twice",
      "Type": "Generic",
      "Difficulty": 3
    },
    {
      "Name": "Discard Lance's Letter without reading it",
      "Type": "Generic",
      "Difficulty": 3
    },
    {
      "Name": "Kill all enemies in a pyramid room",
      "Type": "Generic",
      "Difficulty": 3
    },
    {
      "Name": "Get 5 hints",
      "Type": "Hints",
      "Difficulty": 3
    },
    {
      "Name": "Survive Killer 6",
      "Type": "Generic",
      "Difficulty": 4
    },
    {
      "Name": "Escape the prison",
      "Type": "Generic",
      "Difficulty": 4
    },
    {
      "Name": "Defeat Castoth",
      "Type": "Castoth",
      "Difficulty": 4
    },
    {
      "Name": "Defeat Viper",
      "Type": "Viper",
      "Difficulty": 4
    },
    {
      "Name": "Get 1 Mystic Statue",
      "Type": "Statue",
      "Difficulty": 4
    },
    {
      "Name": "Get 2 Mystic Statues",
      "Type": "Statue",
      "Difficulty": 4
    },
    {
      "Name": "Save Kara",
      "Type": "Generic",
      "Difficulty": 4
    },
    {
      "Name": "Get 10 Red Jewels",
      "Type": "Jewels",
      "Difficulty": 4
    },
    {
      "Name": "Get 20 Red Jewels",
      "Type": "Jewels",
      "Difficulty": 4
    },
    {
      "Name": "Get 30 Red Jewels",
      "Type": "Jewels",
      "Difficulty": 4
    },
    {
      "Name": "Read 3 items",
      "Type": "Generic",
      "Difficulty": 4
    },
    {
      "Name": "Place all 6 hieroglyphs in their proper slot",
      "Type": "Generic",
      "Difficulty": 4
    },
    {
      "Name": "Enter all Dark Spaces in Mt. Temple",
      "Type": "Generic",
      "Difficulty": 4
    },
    {
      "Name": "Talk to all the spirits in the last room of Mu",
      "Type": "Generic",
      "Difficulty": 4
    },
    {
      "Name": "Get 11 hints",
      "Type": "Hints",
      "Difficulty": 4
    },
    {
      "Name": "Ladies' Man",
      "Type": "Generic",
      "Difficulty": 5
    },
    {
      "Name": "Defeat the vampires",
      "Type": "Vampires",
      "Difficulty": 5
    },
    {
      "Name": "Defeat the vampires as Will",
      "Type": "Vampires",
      "Difficulty": 5
    },
    {
      "Name": "Grow all mushrooms in Mt. temple",
      "Type": "Generic",
      "Difficulty": 5
    },
    {
      "Name": "Talk to a spirit in Ankor Wat",
      "Type": "Generic",
      "Difficulty": 5
    },
    {
      "Name": "Defeat Mummy Queen",
      "Type": "Mummy",
      "Difficulty": 5
    },
    {
      "Name": "Defeat Mummy Queen as Freedan",
      "Type": "Mummy",
      "Difficulty": 5
    },
    {
      "Name": "Kill a boss twice",
      "Type": "Generic",
      "Difficulty": 5
    },
    {
      "Name": "Place all 4 statues in Mu",
      "Type": "Generic",
      "Difficulty": 5
    },
    {
      "Name": "Get the item in Jeweler's Mansion",
      "Type": "Generic",
      "Difficulty": 5
    },
    {
      "Name": "Clear all enemies in a Mu room",
      "Type": "Generic",
      "Difficulty": 5
    },
    {
      "Name": "Open the secret door in Inca Ruins while the tile is not glowing",
      "Type": "Generic",
      "Difficulty": 5
    },
    {
      "Name": "Get 3 Mystic Statues",
      "Type": "Statue",
      "Difficulty": 5
    },
    {
      "Name": "Get 4 Mystic Statues",
      "Type": "Statue",
      "Difficulty": 5
    },
    {
      "Name": "Get 40 Red Jewels",
      "Type": "Jewels",
      "Difficulty": 5
    },
    {
      "Name": "Get the 5 keys",
      "Type": "Generic",
      "Difficulty": 6
    },
    {
      "Name": "Defeat Solid Arm",
      "Type": "Generic",
      "Difficulty": 6
    },
    {
      "Name": "Learn all abilities",
      "Type": "Abilities",
      "Difficulty": 6
    },
    {
      "Name": "Get 5 Mystic Statues",
      "Type": "Statue",
      "Difficulty": 6
    },
    {
      "Name": "Get 6 Mystic Statues",
      "Type": "Statue",
      "Difficulty": 6
    },
    {
      "Name": "Get 50 Red Jewels",
      "Type": "Jewels",
      "Difficulty": 6
    }
];

var typeLimits = {
    "Generic": Number.MAX_SAFE_INTEGER,
    "Statue": 1,
    "Jewels": 1,
    "Hints": 1,
    "Castoth": 1,
    "Viper": 1,
    "Vampires": 1,
    "Sandfanger": 1,
    "Mummy":  1,
    "Journal": 1,
    "Abilities": 2
};

var difficultyLimits = {
  1: 6,
  2: 6,
  3: 6,
  4: 6,
  5: 6,
  6: 2,
};
