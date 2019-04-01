// Create Math.seedrandom function and maybe some other stuff idk can't be bothered to understand this obfuscated crap
(function(j, i, g, m, k, n, o) { function q(b) { var e, f, a = this, c = b.length, d = 0, h = a.i = a.j = a.m = 0; a.S = []; a.c = []; for (c || (b = [c++]); d < g;) a.S[d] = d++; for (d = 0; d < g; d++) e = a.S[d], h = h + e + b[d % c] & g - 1, f = a.S[h], a.S[d] = f, a.S[h] = e; a.g = function(b) { var c = a.S, d = a.i + 1 & g - 1, e = c[d], f = a.j + e & g - 1, h = c[f]; c[d] = h; c[f] = e; for (var i = c[e + h & g - 1]; --b;) d = d + 1 & g - 1, e = c[d], f = f + e & g - 1, h = c[f], c[d] = h, c[f] = e, i = i * g + c[e + h & g - 1]; a.i = d; a.j = f; return i }; a.g(g) } function p(b, e, f, a, c) { f = []; c = typeof b; if (e && c == "object") for (a in b) if (a.indexOf("S") < 5) try { f.push(p(b[a], e - 1)) } catch (d) {} return f.length ? f : b + (c != "string" ? "\0" : "") } function l(b, e, f, a) { b += ""; for (a = f = 0; a < b.length; a++) { var c = e, d = a & g - 1, h = (f ^= e[a & g - 1] * 19) + b.charCodeAt(a); c[d] = h & g - 1 } b = ""; for (a in e) b += String.fromCharCode(e[a]); return b } i.seedrandom = function(b, e) { var f = [], a; b = l(p(e ? [b, j] : arguments.length ? b : [(new Date).getTime(), j, window], 3), f); a = new q(f); l(a.S, j); i.random = function() { for (var c = a.g(m), d = o, b = 0; c < k;) c = (c + b) * g, d *= g, b = a.g(1); for (; c >= n;) c /= 2, d /= 2, b >>>= 1; return (c + b) / d }; return b }; o = i.pow(g, m); k = i.pow(2, k); n = k * 2; l(i.random(), j) })([], Math, 256, 6, 52);

// Reduces fluff in bingoList object if there's a method to set defaults
function preprocessBingoList(bingoList) {
    for (const key of Object.keys(bingoList)) {
        bingoList[key].Name = key;
        
        if (!bingoList[key].hasOwnProperty("Desc")) {
            bingoList[key].Desc = "#!#" + key + "#!#";
        }
        
        if (!bingoList[key].hasOwnProperty("Type")) {
            bingoList[key].Type = "Generic";
        }
        
        if (!bingoList[key].hasOwnProperty("Excludes")) {
            bingoList[key].Excludes = [];
        }
        
        if (!bingoList[key].hasOwnProperty("Prereqs")) {
            bingoList[key].Prereqs = [];
        }
    }
}

bingoGenerator = function(bingoList, opts) {
    // Make sure everything exists that should
    preprocessBingoList(bingoList);
    
    // Separate goals into currently choosable / unchoosable
    var choosable = [];
    var unchoosable = [];
    
    for (const key of Object.keys(bingoList)) {
        if (bingoList[key].Prereqs.length > 0) {
            unchoosable.push(key);
        } else {
            choosable.push(key);
        }
    }
    
    // Create counts for all types
    var types = { };
    for (const key of Object.keys(bingoTypes)) {
        types[key] = bingoTypes[key].Max;
    }
    
    // Seed the random
    Math.seedrandom(opts.seed || Math.ceil(999999 * Math.random()).toString());
    
    var chosenGoals = [];
    for (var i = 0; i < 25; i++) {
        // Get a random goal, add to chosen
        var index = Math.floor(Math.random() * choosable.length);
        var goal = bingoList[choosable[index]];
        chosenGoals.push({ "Name": goal.Desc });
        
        // Remove chosen goal from choosable list
        choosable.splice(index, 1);
        
        // Increment type counter, remove other goals of type if relevant
        types[goal.Type]--;
        if (types[goal.Type] <= 0) {
            for (var j = 0; j < choosable.length; j++) {
                if (choosable[j].Type === goal.Type) {
                    choosable.splice(j, 1);
                    j--;
                }
            }
            
            // Gotta check both arrays
            // Pretty dumb code duplication but at this point I'm not gonna bother changing the design
            for (var j = 0; j < unchoosable.length; j++) {
                if (unchoosable[j].Type === goal.Type) {
                    unchoosable.splice(j, 1);
                    j--;
                }
            }
        }
        
        // Remove excluded goals if relevant
        for (var j = 0; j < goal.Excludes.length; j++) {
            for (var k = 0; k < choosable.length; k++) {
                if (choosable[k] == goal.Excludes[j]) {
                    choosable.splice(k, 1);
                    k--;
                }
            }
            
            for (var k = 0; k < unchoosable.length; k++) {
                if (unchoosable[k] == goal.Excludes[j]) {
                    unchoosable.splice(k, 1);
                    k--;
                }
            }
        }
        
        // Check for newly choosable goals
        for (var j = 0; j < unchoosable.length; j++) {
            for (var k = 0; k < bingoList[unchoosable[j]].Prereqs.length; k++) {
                if (bingoList[unchoosable[j]].Prereqs[k] === goal.Name) {
                    choosable.push(unchoosable[j]);
                    unchoosable.splice(j, 1);
                    j--;
                    break;
                }
            }
        }
    }
    
    return chosenGoals;
}

var bingoList = {
    // Uncategorized goals
    "QuantumLeap": {
        "Desc": "QL 3 different transitions without soft locking"
    },
    "SoftLock": {
        "Desc": "Soft lock in 3 different spots" // Risky tech and quantum leap in separate spots shouldn't count but that's too wordy
    },
    "Zip3": {
        "Desc": "Zip in 3 different spots"
    },
    "thetim2Jump": {
        "Desc": "Fish jump without using rockets"
    },
    "Joel": {
        "Desc": "Pick up Joel's letter"
    },
    "UsurperBackwards": {
        "Desc": "Leave the Usurper room backwards"
    },
    "AcridShots": {
        "Desc": "Acrid shot 5 times"
    },
    "BlockrockRails": {
        "Desc": "Ride all 5 rails in Blockrock"
    },
    "ShardRails": {
        "Desc": "Ride all 8 rails in Shard Wastelands"
    },
    "TwoBeds": {
        "Desc": "Sleep in 2 beds"
    },
    "FiveBeds": {
        "Desc": "Sleep in 5 beds"
    },
    "Leticia": {
        "Desc": "Visit all Leticia rooms"
    },
    "RollCancel15": {
        "Desc": "Roll cancel in 15 different spots"
    },
    "RollCancel30": {
        "Desc": "Roll cancel in 30 different spots"
    },
    "TriangleCircle": {
        "Desc": "Mix triangle and circle in the box puzzle"
    },
    "OCWLore": {
        "Desc": "Interact with 8 computers in One Concern West"
    },
    "Lore7": {
        "Desc": "Interact with 7 lore papers"
    },
    "Lore12": {
        "Desc": "Interact with 12 lore papers"
    },
    "Keys6": {
        "Desc": "Collect 6 keys"
    },
    "Keys12": {
        "Desc": "Collect 12 keys"
    },
    "WeenRock": {
        "Desc": "Crush the Herculean in Blockrock"
    },
    "MaxTweaks": {
        "Desc": "Have 3 tweaks equipped"
    },
    "Break3Tweaks": {
        "Desc": "Break 3 different tweaks"
    },
    "StompSoldiers": {
        "Desc": "Stomp all 13 soldiers before wrench 2"
    },
    "TowerFastTravel": {
        "Desc": "Unlock the Tower fast travel"
    },
    "OCWFastTravel": {
        "Desc": "Unlock the One Concern West fast travel"
    },
    "GenocideWrench": {
        "Desc": "Kill all enemies before wrench (Excluding Grass room)",
        "Excludes": [ "PacifistWrench" ]
    },
    "PacifistWrench": {
        "Desc": "Kill no enemies before wrench (Excluding Controller)",
        "Excludes": [ "GenocideWrench" ]
    },
    "Pecan": {
        "Desc": "See the full pecan joke"
    },
    "BlackCutscenes": {
        "Desc": "Watch two cutscenes featuring Black"
    },
    "DrownAirswim": {
        "Desc": "Drown in airswim"
    },
    // Character upgrade goals
    "Wrench2": {
        "Desc": "Wrench 2"
    },
    "Wrench3": {
        "Desc": "Wrench 3"
    },
    "Bomb": {
        "Desc": "Bomb Gun"
    },
    "Usurper": {
        "Desc": "Usurper"
    },
    // Ingredient goals
    "Metallium": {
        "Desc": "Collect 4 Metallium"
    },
    "Improvium": {
        "Desc": "Have 3 Improvium"
    },
    "IvoryOil": {
        "Desc": "Collect 3 Ivory Oil"
    },
    "Technium": {
        "Desc": "Have 2 Technium"
    },
    "SleuthTechnium": {
        "Desc": "Get the Technium next to Sleuth without using rails"
    },
    "TASBomb": {
        "Desc": "Get the TAS bomb shot chests"
    },
    "DeerJump": {
        "Desc": "Get the deer jump chest"
    },
    // Schematic goals
    "Sleuth": {
        "Desc": "Collect the Sleuth schematic"
    },
    "Chemistry": {
        "Desc": "Collect the Chemistry Schematic"
    },
    "Coolant": {
        "Desc": "Collect the Coolant schematic"
    },
    "Wood": {
        "Desc": "Collect the Wood schematic"
    },
    "Grass": {
        "Desc": "Collect the Grass schematic"
    },
    // Boss goals
    "Kerthunk": {
        "Desc": "Beat Kerthunk"
    },
    "Kibuka": {
        "Desc": "Beat Kibuka"
    },
    "SwagParry": {
        "Desc": "Backwards parry 3 times in the Helicopter fight"
    },
    "Spaceman": {
        "Desc": "Beat Spaceman on Challenge",
        "Excludes": [ "BarTalk" ]
    },
    "Carver": {
        "Desc": "Beat Carver on Challenge"
    },
    "Watchman1": {
        "Desc": "Beat Watchman 1 on challenge"
    },
    "Watchman2": {
        "Desc": "Beat Watchman 2 without using any guns"
    },
    "Watchman4Tennis": {
        "Desc": "Stagger Watchman 4 with the tennis minigame"
    },
    "AshMina": {
        "Desc": "Beat Ash using only Mina for damage"
    },
    "Black1NoUsurper": {
        "Desc": "Beat Black 1 without using Usurper"
    },
    // Talk goals
    "IsilugarTalk": {
        "Desc": "Talk to 3 children in Isilugar"
    },
    "CityOneTalk": {
        "Desc": "Talk to 5 citizens in City One"
    },
    "BastionTalk": {
        "Desc": "Talk to everyone in the Bastion"
    },
    "BarTalk": {
        "Desc": "Talk to everyone in the Settlement 17 bar",
        "Excludes": [ "Spaceman" ]
    },
    "GustavoTalk": {
        "Desc": "Talk to Gustavo in 3 different spots"
    },
    // Crafting goals
    "Craft1Spindle": {
        "Desc": "Craft 1 Spindle",
        "Type": "Craft",
        "Excludes": [ "Craft2Spindle" ]
    },
    "Craft2Spindle": {
        "Desc": "Craft 2 Spindle",
        "Type": "Craft",
        "Excludes": [ "Craft1Spindle" ]
    },
    "Craft3Spindle": {
        "Desc": "Craft 3 Spindle",
        "Type": "Craft",
        "Prereqs": [ "Craft1Spindle", "Craft2Spindle" ]
    },
    "Craft1Fleetfoot": {
        "Desc": "Craft 1 Fleetfoot",
        "Type": "Craft",
        "Excludes": [ "Craft2Fleetfoot" ]
    },
    "Craft2Fleetfoot": {
        "Desc": "Craft 2 Fleetfoot",
        "Type": "Craft",
        "Excludes": [ "Craft1Fleetfoot" ]
    },
    "Craft3Fleetfoot": {
        "Desc": "Craft 3 Fleetfoot",
        "Type": "Craft",
        "Prereqs": [ "Craft1Fleetfoot", "Craft2Fleetfoot" ]
    },
    "Craft1Breathless": {
        "Desc": "Craft 1 Breathless",
        "Type": "Craft",
        "Excludes": [ "Craft2Breathless" ]
    },
    "Craft2Breathless": {
        "Desc": "Craft 2 Breathless",
        "Type": "Craft",
        "Excludes": [ "Craft1Breathless" ]
    },
    "Craft3Breathless": {
        "Desc": "Craft 3 Breathless",
        "Type": "Craft",
        "Prereqs": [ "Craft1Breathless", "Craft2Breathless" ]
    },
    "Craft1IronHeart": {
        "Desc": "Craft 1 Iron Heart",
        "Type": "Craft",
        "Excludes": [ "Craft2IronHeart" ]
    },
    "Craft2IronHeart": {
        "Desc": "Craft 2 Iron Heart",
        "Type": "Craft",
        "Excludes": [ "Craft1IronHeart" ]
    },
    "Craft3IronHeart": {
        "Desc": "Craft 3 Iron Heart",
        "Type": "Craft",
        "Prereqs": [ "Craft1IronHeart", "Craft2IronHeart" ]
    },
    "Craft1ToolAssist": {
        "Desc": "Craft 1 Tool Assist",
        "Type": "Craft",
        "Excludes": [ "Craft2ToolAssist" ]
    },
    "Craft2ToolAssist": {
        "Desc": "Craft 2 Tool Assist",
        "Type": "Craft",
        "Excludes": [ "Craft1ToolAssist" ]
    },
    "Craft3ToolAssist": {
        "Desc": "Craft 3 Tool Assist",
        "Type": "Craft",
        "Prereqs": [ "Craft1ToolAssist", "Craft2ToolAssist" ]
    },
    "Craft1ShockValue": {
        "Desc": "Craft 1 Shock Value",
        "Type": "Craft",
        "Excludes": [ "Craft2ShockValue" ]
    },
    "Craft2ShockValue": {
        "Desc": "Craft 2 Shock Value",
        "Type": "Craft",
        "Excludes": [ "Craft1ShockValue" ]
    },
    "Craft3ShockValue": {
        "Desc": "Craft 3 Shock Value",
        "Type": "Craft",
        "Prereqs": [ "Craft1ShockValue", "Craft2ShockValue" ]
    },
    // Deliberately not in "Craft" type because they are unique tweaks
    "Cooldown": {
        "Desc": "Craft Cooldown S or B"
    },
    "Dodger": {
        "Desc": "Craft Dodger"
    },
    // Completion goals
    "BlockrockHalf": {
        "Desc": "Blockrock 50%",
        "Type": "Completion",
        "Excludes": [ "BlockrockAll" ]
    },
    "BlockrockAll": {
        "Desc": "Blockrock 100%",
        "Type": "Completion",
        "Excludes": [ "BlockrockHalf" ]
    },
    "ShardHalf": {
        "Desc": "Shard Wastelands 50%",
        "Type": "Completion",
        "Excludes": [ "ShardAll" ]
    },
    "ShardAll": {
        "Desc": "Shard Wastelands 100%",
        "Type": "Completion",
        "Excludes": [ "ShardHalf" ]
    },
    "IsilugarHalf": {
        "Desc": "Isilugar 53%",
        "Type": "Completion",
        "Excludes": [ "IsilugarAll" ]
    },
    "IsilugarAll": {
        "Desc": "Isilugar 100%",
        "Type": "Completion",
        "Excludes": [ "IsilugarHalf" ]
    },
    "ShockwoodsHalf": {
        "Desc": "Shockwoods 50%",
        "Type": "Completion",
        "Excludes": [ "ShockwoodsAll" ]
    },
    "ShockwoodsAll": {
        "Desc": "Shockwoods 100%",
        "Type": "Completion",
        "Excludes": [ "ShockwoodsHalf" ]
    },
    "TowerHalf": {
        "Desc": "Tower 50%",
        "Type": "Completion",
        "Excludes": [ "TowerAll" ]
    },
    "TowerAll": {
        "Desc": "Tower 100%",
        "Type": "Completion",
        "Excludes": [ "TowerHalf" ]
    },
    "DarlandHalf": {
        "Desc": "Darland Ascent 50%",
        "Type": "Completion",
        "Excludes": [ "DarlandAll" ]
    },
    "DarlandAll": {
        "Desc": "Darland Ascent 100%",
        "Type": "Completion",
        "Excludes": [ "DarlandHalf" ]
    },
    "OCWHalf": {
        "Desc": "One Concern West 55%",
        "Type": "Completion",
        "Excludes": [ "OCWAll" ]
    },
    "OCWAll": {
        "Desc": "One Concern West 100%",
        "Type": "Completion",
        "Excludes": [ "OCWHalf" ]
    },
    "OCEHalf": {
        "Desc": "One Concern East 66%",
        "Type": "Completion",
        "Excludes": [ "OCEAll" ]
    },
    "OCEAll": {
        "Desc": "One Concern East 100%",
        "Type": "Completion",
        "Excludes": [ "OCEHalf" ]
    },
    "GlassAll": {
        "Desc": "Glass Strait 100%",
        "Type": "Completion"
    }
};

var bingoTypes = {
    "Generic": {
        "Max": Number.MAX_SAFE_INTEGER
    },
    "Craft": {
        "Max": 4
    },
    "Completion": {
        "Max": 3
    }
};