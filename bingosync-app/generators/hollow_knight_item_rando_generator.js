// Create Math.seedrandom function and maybe some other stuff idk can't be bothered to understand this obfuscated crap
(function(j, i, g, m, k, n, o) { function q(b) { var e, f, a = this, c = b.length, d = 0, h = a.i = a.j = a.m = 0; a.S = []; a.c = []; for (c || (b = [c++]); d < g;) a.S[d] = d++; for (d = 0; d < g; d++) e = a.S[d], h = h + e + b[d % c] & g - 1, f = a.S[h], a.S[d] = f, a.S[h] = e; a.g = function(b) { var c = a.S, d = a.i + 1 & g - 1, e = c[d], f = a.j + e & g - 1, h = c[f]; c[d] = h; c[f] = e; for (var i = c[e + h & g - 1]; --b;) d = d + 1 & g - 1, e = c[d], f = f + e & g - 1, h = c[f], c[d] = h, c[f] = e, i = i * g + c[e + h & g - 1]; a.i = d; a.j = f; return i }; a.g(g) } function p(b, e, f, a, c) { f = []; c = typeof b; if (e && c == "object") for (a in b) if (a.indexOf("S") < 5) try { f.push(p(b[a], e - 1)) } catch (d) {} return f.length ? f : b + (c != "string" ? "\0" : "") } function l(b, e, f, a) { b += ""; for (a = f = 0; a < b.length; a++) { var c = e, d = a & g - 1, h = (f ^= e[a & g - 1] * 19) + b.charCodeAt(a); c[d] = h & g - 1 } b = ""; for (a in e) b += String.fromCharCode(e[a]); return b } i.seedrandom = function(b, e) { var f = [], a; b = l(p(e ? [b, j] : arguments.length ? b : [(new Date).getTime(), j, window], 3), f); a = new q(f); l(a.S, j); i.random = function() { for (var c = a.g(m), d = o, b = 0; c < k;) c = (c + b) * g, d *= g, b = a.g(1); for (; c >= n;) c /= 2, d /= 2, b >>>= 1; return (c + b) / d }; return b }; o = i.pow(g, m); k = i.pow(2, k); n = k * 2; l(i.random(), j) })([], Math, 256, 6, 52);

// Reduces fluff in bingoList object if there's a method to set defaults
function preprocessBingoList(bingoList) {
    for (const key of Object.keys(bingoList)) {
        bingoList[key].name = key;

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
        chosenGoals.push({ "name": goal.Desc });

        // Remove chosen goal from choosable list
        choosable.splice(index, 1);

        // Increment type counter, remove other goals of type if relevant
        types[goal.Type]--;
        if (types[goal.Type] <= 0) {
            for (var j = 0; j < choosable.length; j++) {
                if (bingoList[choosable[j]].Type === goal.Type) {
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
                if (bingoList[unchoosable[j]].Prereqs[k] === goal.name) {
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
//Sorted alphabetically and grouped

//Bosses. Dream versions grouped instead of alphabetical

  "BVessel":{
      "Desc":"Broken Vessel",
      "Excludes": ["LostKin"]
  },

  "LostKin":{
      "Desc":"Lost Kin",
      "Excludes": ["BVessel"]
  },

  "CG1":{
      "Desc": "Crystal Guardian 1",
      "Excludes": ["CG2"]
  },

  "CG2": {
      "Desc":"Crystal Guardian 2",
      "Excludes": ["CG1"]
  },

  "Collector":{
      "Desc": "Collector"
  },

  "DDefender":{
      "Desc":"Dung Defender",
      "Excludes": ["WhiteDefender"]
  },

  "WhiteDefender":{
    "Desc":"Defeat double damage White Defender",
    "Type": "Tiebreaker",
    "Excludes": ["DDefender"]
  },


  "FChamp": {
      "Desc": "Failed Champion"
  },

  "FKnight_BMawlek": {
      "Desc": "False Knight + Brooding Mawlek"
  },

  "Flukemarm":{
      "Desc": "Flukemarm"
  },

  "Flukemarm2":{
      "Desc": "Ascended Flukemarm",
      "Type": "Tiebreaker",
      "Excludes": ["Godhome"]
  },

  "GPZote":{
      "Desc": "Grey Prince Zote",
      "Type": "Tiebreaker",
      "Excludes": [ "ColoZote", "Colo1" ]
  },

  "HiveKnight":{
      "Desc": "Hive Knight",
      "Excludes": [ "HiveMask" ]
  },

  "Hornet2": {
      "Desc": "Hornet 2"
  },

  "MLords":{
      "Desc": "Mantis Lords"
  },

  "Nosk":{
      "Desc": "Nosk"
  },

  "PaleLurker":{
      "Desc":"Pale Lurker"
  },

  "SoulMaster": {
      "Desc": "Soul Master",
      "Excludes": ["SoulTyrant"]
  },

  "SoulTyrant": {
      "Desc": "Soul Tyrant",
      "Excludes": [ "SoulMaster" ]
  },

  "TLord":{
      "Desc": "Traitor Lord",
      "Excludes": [ "WhiteLady" ]
  },

  "TMGrimm":{
      "Desc":"Troupe Master Grimm"
  },

  "NKGrimm":{
      "Desc": "Nightmare King Grimm",
      "Type": "Tiebreaker",
      "Excludes": [ "CarefreeMelody" ]
  },

  "Uumuu":{
      "Desc": "Uumuu"
  },

  "WK":{
      "Desc": "Watcher Knights"
  },

  "VK_MMC":{
      "Desc":"Vengefly King + Massive Moss Charger"
  },




  //Dream Warriors


  "Galien":{
      "Desc":"Galien"
  },

  "Gorb":{
      "Desc":"Gorb"
  },

  "Hu":{
      "Desc":"Elder Hu"
  },

  "Marmu":{
    "Desc":"Marmu"
  },

  "Markoth":{
      "Desc":"Markoth"
  },

  "NoEyes":{
    "Desc":"No Eyes"
  },

  "Xero":{
      "Desc":"Xero"
  },




  //Enemies

  "2Warriors":{
      "Desc":"Kill 2 Soul Warriors",
      "Excludes":[ "SSoulCheck" ]
  },

  "Aluba":{
      "Desc":"Kill an Aluba"
  },

  "Aluba2":{
      "Desc":"Kill two different Alubas"
  },

  "Colo1":{
      "Desc":"Colosseum 1",
      "Excludes":[ "ColoZote" ]
  },

  "Colo3":{
      "Desc":"Colosseum 3",
      "Type":"Tiebreaker"
  },

  "ColoZote":{
      "Desc":"Defeat Colosseum Zote",
      "Excludes":["Colo1", "GPZote" ]
  },

  "Devout":{
      "Desc":"Kill 6 different Stalking Devouts"
  },

  "GHopper":{
      "Desc":"Kill a Great Hopper"
  },

  "GHusk":{
      "Desc":"Kill Gorgeous Husk"
  },

  "LoreVillage":{
    "Desc":"Kill a Kingsmould"
  },

  "Maggots":{
      "Desc":"Kill two different Maggots"
  },

  "Millibelle":{
      "Desc":"Slash Millibelle in Pleasure House",
      "Excludes":[ "Bank" ]
  },

  "Mimics":{
      "Desc":"Kill 4 Mimics"
  },

  "Myla":{
      "Desc":"Kill Myla"
  },




  //Items. Different types (Dreamers/Skills/Keys/etc) grouped together

  "Herrah":{
      "Desc":"Obtain Herrah"
  },

  "Lurien":{
      "Desc":"Obtain Lurien"
  },

  "Monomon":{
      "Desc":"Obtain Monomon"
  },


  "DeepStag":{
      "Desc":"Ride the stag to Distant Village",
      "Excludes":[ "Midwife", "VisitDistantHive" ]
  },

  "GardenStag":{
      "Desc":"Ride the stag to Queen's Garden"
  },

  "HiddenStag":{
      "Desc":"Ride the stag to Hidden Station",
      "Excludes":[ "WPShadeSkip" ]
  },

  "KingStag":{
      "Desc":"Ride the stag to King's Station"
  },

  "QueensStag":{
      "Desc":"Ride the stag to Queen's Station"
  },



  "CarefreeMelody":{
    "Desc": "Obtain Carefree Melody",
    "Excludes": [ "NKGrimm" ]
  },

  "CompassSwarm":{
      "Desc":"Obtain Wayward Compass or Gathering Swarm"
  },

  "DWielderShield":{
      "Desc":"Obtain Dream Wielder or Dreamshield"
  },

  "FCharms":{
      "Desc":"Obtain two Unbreakable charms"
  },

  "FlukenestFury":{
      "Desc":"Obtain Flukenest or Fury or the Fallen"
  },

  "GrubsongElegy":{
      "Desc":"Obtain Grubsong or Grubberfly's Elegy"
  },

  "GWombWeavers":{
      "Desc":"Obtain Glowing Womb or Weaversong"
  },

  "HeavyBlowSteady":{
      "Desc":"Obtain Heavy Blow or Steady Body" 
  },

  "HivebloodShadow":{
      "Desc":"Obtain Hiveblood or Sharp Shadow" 
  },

  "LifebloodCharms":{
      "Desc":"Obtain two Lifeblood charms"
  },

  "Longnail":{
      "Desc":"Obtain Longnail or Mark of Pride"
  },

  "QSlashGlory":{
      "Desc":"Obtain Quick Slash or Nailmaster's Glory"
  },

  "QuickDeepFocus":{
      "Desc":"Obtain Quick Focus or Deep Focus"
  },

  "ShamanStoneTwister":{
      "Desc":"Obtain Shaman Stone or Spell Twister"
  },

  "SprintmasterDashmaster":{
      "Desc":"Obtain Sprintmaster or Dashmaster"
  },

  "SoulTools":{
      "Desc":"Obtain Soul Eater or Soul Catcher"
  },

  "UnnShell":{
      "Desc":"Obtain Shape of Unn or Baldur Shell"
  },

  "LoveKey":{
      "Desc": "Obtain the Love Key"
  },



  "CHeart":{
      "Desc":"Obtain Crystal Heart",
      "Excludes": [ "CrossroadsCanyonGrubs", "GWombSkip", "CHeartSkip", "TearCheck" ]
  },

  "DDark":{
      "Desc":"Descending Dark",
      "Excludes":[ "SSoul", "Shriek" ]
  },

  "DNail":{
      "Desc":"Obtain Dream Nail"
  },

  "DGate":{
      "Desc":"Obtain Dream Gate"
  },

  "Dive":{
      "Desc":"Obtain Desolate Dive",
      "Excludes":[ "3Floors" ]
  },

  "MantisClaw":{
      "Desc":"Obtain Mantis Claw", 
      "Excludes":[ "SanctuarySkip", "WPShadeSkip", "VillageJournal", "CHeartSkip" ]
  },

  "NailArts":{
      "Desc":"Obtain 2 Nail Arts"
  },

  "SCloak":{
      "Desc":"Obtain Shade Cloak"
  },

  "Shriek":{
      "Desc":"Obtain Abyss Shriek", 
      "Excludes":[ "SSoul", "DDark" ]
  },

  "SSoul":{
      "Desc":"Obtain Shade Soul",
      "Excludes": [ "Shriek", "DDark" ]
  },

  "Tear":{
      "Desc":"Obtain Isma's Tear",
      "Excludes": [ "UnnSkip", "LoveKeySkip" ]
  },

  "VSpirit":{
      "Desc":"Obtain Vengeful Spirit"
  },

  "Wings":{
      "Desc":"Obtain Monarch Wings"
  },

  "Wraiths":{
      "Desc":"Obtain Howling Wraiths"
  },



  "15Grub":{
      "Desc":"Obtain 15 grubs"
  },

  "2Ore":{
      "Desc":"Obtain 2 Pale Ore", 
      "Excludes":[ "Nail3" ]
  },

  "2Keys":{
      "Desc":"Use 2 Simple Keys"
  },

  "3Maps":{
      "Desc":"Have 3 different maps not counting Dirtmouth or Hive"
  },

  "CollectorMap":{
      "Desc":"Obtain Collector's Map"
  },

  "Egg":{
      "Desc":"Obtain 1 Arcane Egg"
  },

  "Godtuner":{
      "Desc":"Obtain Godtuner"
  },

  "Idols":{
      "Desc":"Obtain 3 King's Idols"
  },

  "Journals":{
      "Desc":"Obtain 5 Wanderer's Journals"
  },

  "Lantern":{
      "Desc":"Obtain Lumafly Lantern", 
      "Excludes":[ "JoniDarkRoom" ]
  },

  "Mask1":{
      "Desc":"Obtain 1 extra mask"
  },

  "Notches":{
      "Desc":"Have 6 Charm Notches total"
  },

  "RancidEggs":{
      "Desc":"Obtain 4 Rancid Eggs"
  },

  "Seals":{
      "Desc":"Obtain 5 Hallownest Seals"
  },

  "SoulVessel":{
      "Desc":"Obtain 1 extra soul vessel"
  },

  "TramPass":{
      "Desc":"Obtain Tram Pass", 
      "Excludes":[ "PinsAll" ]
  },

  "WorldSense":{
      "Desc":"Obtain World Sense"
  },



  //Checks (Grubs are grouped)


  "Cornifer3":{
      "Desc":"Interact with 3 Cornifer locations"
  },

  "Dreamers":{
      "Desc":"Get 2 Dreamer's checks",
      "Excludes":[ "Uumuu", "WK", "VisitDistantHive" ]
  },

  "GreenpathRoot":{
      "Desc":"Complete the Greenpath Root"
  },

  "HallownestCrown":{
      "Desc":"Check the Hallownest Crown"
  },

  "Fountain":{
      "Desc":"Buy the Basin fountain check",
      "Excludes":[ "3000", "4000" ]
  },

  "GWombSkip":{
      "Desc":"Check Glowing Womb", 
      "Excludes":[ "CHeart" ]
  },

  "HiveMask":{
      "Desc":"Check the Hive Mask Shard", 
      "Excludes":[ "HiveKnight" ]
  },

  "JoniDarkRoom":{
      "Desc":"Check Joni's Blessing", 
      "Excludes":[ "Lantern" ]
  },

  "KEdgeRoot":{
      "Desc":"Complete the Kingdom's Edge Root"
  },

  "LoveKeySkip":{
      "Desc":"Check Love Key", 
      "Excludes":[ "Tear" ]
  },

  "Nailmasters":{
      "Desc":"Check 2 Nailmasters"
  },

  "SanctuarySkip":{
      "Desc":"Check the journal below Stone Sanctuary",
      "Excludes":[ "MantisClaw" ]
  },

  "Sheo":{
      "Desc":"Check Sheo"
  },

  "Shops":{
      "Desc":"Visit every shop"
  },

  "StagVessel":{
      "Desc":"Check the Stag Nest vessel fragment"
  },

  "SSoulCheck":{
      "Desc":"Check Shade Soul",
      "Excludes":[ "2Warriors" ]
  },

  "TearCheck":{
      "Desc":"Check Isma's Tear",
      "Excludes":[ "CHeart" ]
  },

  "Trees4":{
      "Desc":"Complete 4 full dream trees"
  },

  "UnnSkip":{
      "Desc":"Check Shape of Unn",
      "Excludes":[ "Tear" ]
  },

  "VillageJournal":{
      "Desc":"Check the journal above Mantis Village",
      "Excludes":[ "MantisClaw" ]
  },

  "VoidHeart":{
      "Desc":"Check Void Heart"
  },


  "CoTGrubs":{
      "Desc":"Check/Free all grubs in CoT (5)"
  },

  "CrossroadsCanyonGrubs":{
      "Desc":"Check/Free all grubs in Crossroads (5) + Fog Canyon (1)",
      "Excludes":[ "CHeart" ]
  },

  "DeepnestGrubs":{
      "Desc":"Check/Free all grubs in Deepnest (5)"
  },

  "FunGreenGrub":{
      "Desc":"Check/Free all grubs in Greenpath (4) and in Fungal (2)"
  },

  "PeaksGrub":{
      "Desc":"Check/Free all grubs in Crystal Peaks (7)"
  },

  "QueenGrub":{
      "Desc":"Check/Free all grubs in Queen's Gardens (3)"
  },

  "WaterGrub":{
      "Desc": "Check/Free all grubs in Waterways (3)"
  },




  //Misc.

  "3Floors":{
      "Desc":"Break 3 floors using Dive",
      "Excludes":[ "Dive" ]
  },

  "420Rock":{
      "Desc":"Break the 420 geo rock in Kingdom's Edge"
  },

  "500Essence":{
      "Desc":"Collect 500 essence"
  },

  "3000":{
      "Desc":"Spend 3000 geo",
      "Excludes":[ "Fountain", "4000" ]
  },

  "4000":{
      "Desc":"Spend 4000 geo", 
      "Excludes":[ "Fountain", "3000", "5000" ]
  },

  "5000":{
      "Desc":"Spend 5000 geo", 
      "Excludes":[ "4000" ]
  },

  "Bank":{
      "Desc":"Have 1500 geo in the bank",
      "Excludes":[ "Millibelle" ]
  },

  "Bardoon":{
      "Desc":"Talk to Bardoon"
  },

  "BrettaSly":{
      "Desc":"Rescue Bretta + Sly"
  },

  "Brumm":{
    "Desc":"Get Brumm's flame"
  },

  "ClothQuest":{
      "Desc":"Complete either ending of the Cloth questline"
  },

  "CrestElevator":{
      "Desc":"Use City Crest + Ride both CoT large elevators"
  },

  "DeepnestZote":{
      "Desc":"Rescue Zote in Deepnest"
  },

  "DefenderSign":{
    "Desc":"Read the Dung Defender sign before Isma's Grove"
  },

  "DirtmouthElevator":{
      "Desc":"Open the Dirtmouth/Crystal Peaks elevator"
  },

  "ElderFlower":{
      "Desc":"Give Flower to Elderbug"
  },

  "Emilitia":{
      "Desc":"Talk to Emilitia (shortcut out of sewers)"
  },

  "FlukeHermit":{
      "Desc":"Talk to the Fluke Hermit"
  },

  "Godhome":{
      "Desc":"Enter Godhome",
      "Excludes":[ "Flukemarm2", "Ordeal20" ]
  },

  "GoamGarpede":{
      "Desc":"Goam and Garpede Journal Entries"
  },

  "Jiji":{
      "Desc":"Open Jiji's Hut"
  },

  "HopperHell":{
      "Desc":"Hit the Oro scarecrow up until the hoppers spawn"
  },


  "Lemm":{
      "Desc":"Talk to Lemm with Defender's Crest equipped"
  },

  "LegEater":{
      "Desc":"Buy out Leg Eater"
  },

 "Lifeblood":{
      "Desc":"10 Lifeblood masks at the same time"
  },

  "LifebloodRoom":{
      "Desc":"Enter the Lifeblood Core room without wearing any Lifeblood charms"
  },

  "LoreBasin":{
    "Desc":"Read the lore tablet in Ancient Basin"
  },

  "LoreCliffs":{
    "Desc":"Read 3 lore tablets in Teacher's Archives"
  },

  "LoreCliffs":{
    "Desc":"Read the lore tablet in Howling Cliffs"
  },

  "LoreKEdge":{
    "Desc":"Read the lore tablet in Kingdom's Edge (requires Spore Shroom)"
  },

  "LorePilgrims":{
    "Desc":"Read two Pilgrim's Way lore tablets"
  },

  "LoreSanctum":{
    "Desc":"Read both lore tablets in Soul Sanctum"
  },

  "LoreVillage":{
    "Desc":"Read both lore tablets in Mantis Village"
  },


  "MaskMaker":{
      "Desc":"Talk to Mask Maker"
  },

  "Midwife":{
      "Desc":"Talk to Midwife",
      "Excludes":[ "DeepStag", "VisitDistantHive" ]
  },

  "MossProphet":{
      "Desc":"Bow to Moss Prophet, dead or alive"
  },

  "MrMushroom1":{
      "Desc":"Interact with Mr. Mushroom once (Does not require Spore Shroom)"
  },

  "Nail2":{
      "Desc":"Nail 2"
  },

  "Nail3":{
      "Desc":"Nail 3",
      "Excludes":[ "2Ore" ]
  },

  "Ordeal20":{
      "Desc":"Eternal Ordeal: 20 Zotes",
      "Type": "Tiebreaker",
      "Excludes":[ "Godhome" ]
  },

  "Pins":{
      "Desc":"Buy 6 map pins from Iselda (All but two)",
      "Excludes":[ "PinsAll" ]
  },

  "PinsAll":{
      "Desc":"Buy 8 map pins from Iselda (All)",
      "Excludes":[ "Pins", "TramPass" ]
  },

  "Revek":{
      "Desc":"Parry Revek 3 times without dying (Spirit's Glade Guard)", 
      "Excludes":[ "ShrineOfBelievers" ]
  },

  "Salubra":{
      "Desc":"Buy out Salubra"
  },

  "Springs":{
      "Desc":"Take a bath in 4 different Hot Springs"
  },

  "SpringSplash":{
      "Desc":"Splash the NPC in the Colosseum's hot spring"
  },

  "ShrineOfBelievers":{
      "Desc":"Visit Shrine of Believers", 
      "Excludes":[ "Revek" ]
  },
  
  "Tendrils":{
      "Desc":"Void Tendrils Journal Entry"
  },

  "Tiso":{
    "Desc": "Swat away Tiso's shield from his corpse"
  },

  "Tuk":{
      "Desc":"Talk to Tuk"
  },

  "VisitDistantHive":{
      "Desc":"Visit Distant Village or Hive",
      "Excludes": [ "TramPass", "DeepStag", "Midwife" ]

  },

  "VisitLakes":{
      "Desc":"Visit Lake of Unn or Blue Lake"
  },


  "VisitMounds":{
      "Desc":"Visit Overgrown Mound or Crystallized Mound (Crystallized requires dive)"
  },


  "VisitSanctumWaterways":{
      "Desc":"Visit Soul Sanctum or Royal Waterways"
  },

  "VisitTower":{
      "Desc":"Visit Tower of Love (Love Key not required)"
  },

  "WhiteLady":{
      "Desc":"Dream Nail White Lady", 
      "Excludes":[ "TLord" ]
  },

  "Willow":{
    "Desc": "Dream Nail Willoh's meal"
  },

  "WPShadeSkip":{
      "Desc":"Sit down in Hidden Station",
      "Excludes":[ "HiddenStag", "Wings" ]
  }

};

var bingoTypes = {

    "Generic":{
        "Max":Number.MAX_SAFE_INTEGER
    },

    "Tiebreaker":{
        "Max":1
    }

};