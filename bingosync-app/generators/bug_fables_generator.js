bingoGenerator = require("./generators/generator_bases/synerGen.js");

//initialization
    "bingoTypes": {
        "boss": {"Max": 4}, //21 total (14 counting hardmode exclusions)
        "miniboss": {"Max": 3}, //13 total (10 counting hardmode exclusions)
        "bounty": {"Max": 1}, //5 total
        "hardmode": {"Max": 3}, //12 total
        "chapter": {"Max": 2}, //8 total (5 counting hardmode exclusions)
        "quest": {"Max": 6}, //22 total
        "collectible": {"Max": 6}, //16 total
        "medal": {"Max": 6}, //14 total
        "cooking": {"Max": 2} //7 total
    },
    "maxScore": 0,
    
    //abilities
    "fly": {
        "Desc": "Learn the Bee Fly ability",
        "Diff": 16
    },
    "dash": {
        "Desc": "Learn the upgraded Horn Dash ability",
        "Diff": 18
    },
    "ice": {
        "Desc": "Learn the Icicle ability",
        "Diff": 17
    },
    
    //bosses
    "zm1": {
        "Desc": "Defeat Zasp & Mothiva 1",
        "Diff": 3,
        "Types": ["miniboss"]
    },
    "afunny": {
        "Desc": "Defeat Ahoneynation",
        "Diff": 7,
        "Types": ["miniboss"]
    },
    "asto": {
        "Desc": "Defeat Astotheles",
        "Diff": 7,
        "Excludes": ["astohard"],
        "Types": ["miniboss"]
    },
    "kalikabbu": {
        "Desc": "Defeat Kali & Kabbu",
        "Diff": 9,
        "Types": ["miniboss","quest"]
    },
    "brood": {
        "Desc": "Defeat Broodmother",
        "Diff": 11,
        "Excludes": ["broodhard"],
        "Types": ["boss"]
    },
    "mother": {
        "Desc": "Defeat Mother Chomper",
        "Diff": 12,
        "Excludes": ["motherhard"],
        "Types": ["boss"]
    },
    "devourer": {
        "Desc": "Defeat Devourer",
        "Diff": 13,
        "Types": ["boss","bounty"]
    },
    "beast": {
        "Desc": "Defeat the Beast",
        "Diff": 15,
        "Excludes": ["beasthard"],
        "Types": ["boss"]
    },
    "wyrm": {
        "Desc": "Defeat Tidal Wyrm",
        "Diff": 17,
        "Types": ["boss","bounty"]
    },
    "riz": {
        "Desc": "Defeat Riz",
        "Diff": 17,
        "Types": ["miniboss"]
    },
    "primal": {
        "Desc": "Defeat Primal Weevil",
        "Diff": 18,
        "Excludes": ["primalhard"],
        "Types": ["miniboss"]
    },
    "monarch": {
        "Desc": "Defeat False Monarch",
        "Diff": 19,
        "Types": ["boss","bounty"]
    },
    "zm2": {
        "Desc": "Defeat Zasp & Mothiva 2",
        "Diff": 20,
        "Excludes": ["zm2hard"],
        "Types": ["miniboss"]
    },
    "king": {
        "Desc": "Defeat Seedling King",
        "Diff": 21,
        "Types": ["boss","bounty"]
    },
    "carmina": {
        "Desc": "Defeat Carmina (in battle)",
        "Diff": 22,
        "Types": ["miniboss"]
    },
    "peacock": {
        "Desc": "Defeat Peacock Spider",
        "Diff": 24,
        "Types": ["boss","bounty"]
    },
    "ch2": {
        "Desc": "Complete Chapter 2",
        "Diff": 4,
        "Types": ["boss","chapter"]
    },
    "ch3": {
        "Desc": "Complete Chapter 3",
        "Diff": 7,
        "Excludes": ["b33hard"],
        "Types": ["boss","chapter"]
    },
    "ch4": {
        "Desc": "Complete Chapter 4",
        "Diff": 13,
        "Excludes": ["watcherhard"],
        "Types": ["boss","chapter"]
    },
    "ch5": {
        "Desc": "Complete Chapter 5",
        "Diff": 15,
        "Types": ["miniboss","chapter"]
    },
    "ch6": {
        "Desc": "Complete Chapter 6",
        "Diff": 23,
        "Excludes": ["tankhard"],
        "Types": ["boss","chapter"]
    },
    
    //bosses on hard mode
    "spuderhard": {
        "Desc": "Defeat Spider with Hard Mode equipped",
        "Diff": 2,
        "Types": ["boss","hardmode"]
    },
    "scarlethard": {
        "Desc": "Defeat Monsieur Scarlet with Hard Mode equipped",
        "Diff": 5,
        "Types": ["miniboss","hardmode"]
    },
    "b33hard": {
        "Desc": "Defeat Heavy Drone B-33 with Hard Mode equipped",
        "Diff": 8,
        "Excludes": ["ch3"],
        "Types": ["boss","hardmode","chapter"]
    },
    "astohard": {
        "Desc": "Defeat Astotheles with Hard Mode equipped",
        "Diff": 10,
        "Excludes": ["asto"],
        "Types": ["miniboss","hardmode"]
    },
    "broodhard": {
        "Desc": "Defeat Broodmother with Hard Mode equipped",
        "Diff": 14,
        "Excludes": ["brood"],
        "Types": ["boss","hardmode"]
    },
    "motherhard": {
        "Desc": "Defeat Mother Chomper with Hard Mode equipped",
        "Diff": 16,
        "Excludes": ["mother"],
        "Types": ["boss","hardmode"]
    },
    "watcherhard": {
        "Desc": "Defeat the Watcher with Hard Mode equipped",
        "Diff": 17,
        "Excludes": ["ch4"],
        "Types": ["boss","hardmode","chapter"]
    },
    "beasthard": {
        "Desc": "Defeat the Beast with Hard Mode equipped",
        "Diff": 18,
        "Excludes": ["beast"],
        "Types": ["boss","hardmode"]
    },
    "primalhard": {
        "Desc": "Defeat Primal Weevil with Hard Mode equipped",
        "Diff": 22,
        "Excludes": ["primal"],
        "Types": ["miniboss","hardmode"]
    },
    "zm2hard": {
        "Desc": "Defeat Zasp & Mothiva 2 with Hard Mode equipped",
        "Diff": 24,
        "Excludes": ["zm2"],
        "Types": ["miniboss","hardmode"]
    },
    "zommothhard": {
        "Desc": "Defeat Zommoth with Hard Mode equipped",
        "Diff": 25,
        "Excludes": ["leifquest"],
        "Types": ["boss","hardmode"]
    },
    "tankhard": {
        "Desc": "Defeat ULTIMAX Tank with Hard Mode equipped",
        "Diff": 25,
        "Excludes": ["ch6"],
        "Types": ["boss","hardmode","chapter"]
    },
    
    //quests
    "leifquest": {
        "Desc": "Complete Leif's Request",
        "Diff": 23,
        "Excludes": ["zommothhard"],
        "Types": ["boss"]
    },
    "viquest": {
        "Desc": "Complete Vi's Request",
        "Diff": 21
    },
    "eetl": {
        "Desc": "Complete \"Parts Delivery\"",
        "Diff": 1,
        "Types": ["quest"]
    },
    "tod": {
        "Desc": "Complete \"Lost Toy\"",
        "Diff": 1,
        "Types": ["quest"]
    },
    "hat": {
        "Desc": "Complete \"Dropped My Hat!\"",
        "Diff": 2,
        "Types": ["quest"]
    },
    "chuck": {
        "Desc": "Complete \"I Want A New Taste\"",
        "Diff": 2,
        "Types": ["quest"]
    },
    "cablecar": {
        "Desc": "Complete \"Cable Car Bodyguard\"",
        "Diff": 3,
        "Types": ["quest"]
    },
    "crisbee": {
        "Desc": "Complete \"I Wanna Get Better!\"",
        "Diff": 3,
        "Types": ["quest"]
    },
    "kut": {
        "Desc": "Complete \"My Specialty\"",
        "Diff": 5,
        "Types": ["quest"]
    },
    "fry": {
        "Desc": "Complete \"A Smiling Dish\"",
        "Diff": 5,
        "Excludes": ["dinner"],
        "Types": ["quest"]
    },
    "mm": {
        "Desc": "Complete \"Theater Help Wanted!\"",
        "Diff": 5,
        "Types": ["quest"]
    },
    "dinner": {
        "Desc": "Complete \"Team Snakemouth...\"",
        "Diff": 6,
        "Excludes": ["fry"],
        "Types": ["quest"]
    },
    "tangy": {
        "Desc": "Complete \"Huuuuuuuuu...!!!\"",
        "Diff": 8,
        "Types": ["quest"]
    },
    "doll": {
        "Desc": "Complete \"Lost Item\"",
        "Diff": 9,
        "Types": ["quest"]
    },
    "ore": {
        "Desc": "Complete \"Ore Wanted\"",
        "Diff": 11,
        "Types": ["quest"]
    },
    "spycards": {
        "Desc": "Complete \"Card Masters of Bugaria\"",
        "Diff": 12,
        "Excludes": ["tourney","blankcard"],
        "Types": ["quest"]
    },
    "badbook": {
        "Desc": "Complete \"Awful's Beauty\"",
        "Diff": 13,
        "Types": ["quest"]
    },
    "cennpisci": {
        "Desc": "Complete \"Explorer Check!\"",
        "Diff": 14,
        "Types": ["quest"]
    }, 
    "wizard": {
        "Desc": "Complete \"Find The Ingredients!\"",
        "Diff": 15,
        "Types": ["quest"]
    },
    "claw": {
        "Desc": "Complete \"My Mecha Claw!\"",
        "Diff": 18,
        "Types": ["quest"]
    },
    "sophie": {
        "Desc": "Complete \"Rare Item Wanted!\"",
        "Diff": 19,
        "Types": ["quest"]
    },
    "mun": {
        "Desc": "Complete \"Help Me Get It Back!\"",
        "Diff": 20,
        "Types": ["quest"]
    },
    "elom": {
        "Desc": "Complete \"In Search of Something\"",
        "Diff": 22,
        "Types": ["quest"]
    },
    
    
    //collectibles
    "10d": {
        "Desc": "10 Discoveries",
        "Diff": 1,
        "Excludes": ["15d"],
        "Types": ["collectible"]
    },
    "15d": {
        "Desc": "15 Discoveries",
        "Diff": 2,
        "Excludes": ["10d","20d"],
        "Types": ["collectible"]
    },
    "20d": {
        "Desc": "20 Discoveries",
        "Diff": 5,
        "Excludes": ["15d","25d"],
        "Types": ["collectible"]
    },
    "25d": {
        "Desc": "25 Discoveries",
        "Diff": 7,
        "Excludes": ["20d","30d"],
        "Types": ["collectible"]
    },
    "30d": {
        "Desc": "30 Discoveries",
        "Diff": 11,
        "Excludes": ["25d","35d"],
        "Types": ["collectible"]
    },
    "35d": {
        "Desc": "35 Discoveries",
        "Diff": 17,
        "Excludes": ["30d","40d"],
        "Types": ["collectible"]
    },
    "40d": {
        "Desc": "40 Discoveries",
        "Diff": 24,
        "Excludes": ["35d"],
        "Types": ["collectible"]
    },
    "10cb": {
        "Desc": "10 Crystal Berries",
        "Diff": 4,
        "Excludes": ["15cb"],
        "Types": ["collectible"]
    },
    "15cb": {
        "Desc": "15 Crystal Berries",
        "Diff": 6,
        "Excludes": ["10cb","20cb"],
        "Types": ["collectible"]
    },
    "20cb": {
        "Desc": "20 Crystal Berries",
        "Diff": 9,
        "Excludes": ["15cb","25cb"],
        "Types": ["collectible"]
    },
    "25cb": {
        "Desc": "25 Crystal Berries",
        "Diff": 14,
        "Excludes": ["20cb","30cb"],
        "Types": ["collectible"]
    },
    "30cb": {
        "Desc": "30 Crystal Berries",
        "Diff": 22,
        "Excludes": ["25cb"],
        "Types": ["collectible"]
    },
    "5lb": {
        "Desc": "5 Lore Books",
        "Diff": 6,
        "Excludes": ["10lb"],
        "Types": ["collectible"]
    },
    "10lb": {
        "Desc": "10 Lore Books",
        "Diff": 13,
        "Excludes": ["5lb","15lb"],
        "Types": ["collectible"]
    },
    "15lb": {
        "Desc": "15 Lore Books",
        "Diff": 19,
        "Excludes": ["10lb","20lb"],
        "Types": ["collectible"]
    },
    "20lb": {
        "Desc": "20 Lore Books",
        "Diff": 25,
        "Excludes": ["15lb"],
        "Types": ["collectible"]
    },
    
    
    //cave of trials
    "cot5": {
        "Desc": "Complete 5 Battles in Cave of Trials",
        "Diff": 12,
        "Excludes": ["cot10"]
    },
    "cot10": {
        "Desc": "Complete 10 Battles in Cave of Trials",
        "Diff": 15,
        "Excludes": ["cot5","cot15"]
    },
    "cot15": {
        "Desc": "Complete 15 Battles in Cave of Trials",
        "Diff": 18,
        "Excludes": ["cot10","cot20"]
    },
    "cot20": {
        "Desc": "Complete 20 Battles in Cave of Trials",
        "Diff": 21,
        "Excludes": ["cot15","cot25"]
    },
    "cot25": {
        "Desc": "Complete 25 Battles in Cave of Trials",
        "Diff": 25,
        "Excludes": ["cot20"]
    },
    
    
    //rank ups
    "lv6": {
        "Desc": "Reach Rank 6",
        "Diff": 8,
        "Excludes": ["lv9"]
    },
    "lv9": {
        "Desc": "Reach Rank 9",
        "Diff": 12,
        "Excludes": ["lv6","lv11"]
    },
    "lv11": {
        "Desc": "Reach Rank 11",
        "Diff": 16,
        "Excludes": ["lv9","lv13"]
    },
    "lv13": {
        "Desc": "Reach Rank 13",
        "Diff": 20,
        "Excludes": ["lv11","lv15"]
    },
    "lv15": {
        "Desc": "Reach Rank 15",
        "Diff": 24,
        "Excludes": ["lv13"]
    },
    "lvhp": {
        "Desc": "Rank up HP twice",
        "Diff": 6,
        "Excludes": ["lvtp","lvmp"]
    },
    "lvtp": {
        "Desc": "Rank up TP four times",
        "Diff": 10,
        "Excludes": ["lvhp","lvmp"]
    },
    "lvmp": {
        "Desc": "Rank up MP four times",
        "Diff": 9,
        "Excludes": ["lvhp","lvtp"]
    },
    
    
    //medals
    "back": {
        "Desc": "Back Support",
        "Diff": 3,
        "Types": ["medal"]
    },
    "hawk": {
        "Desc": "Tardigrade Shield",
        "Diff": 4,
        "Types": ["medal"]
    },
    "shock": {
        "Desc": "Shock Trooper",
        "Diff": 6,
        "Types": ["medal"]
    },
    "specs": {
        "Desc": "Spy Specs",
        "Diff": 8,
        "Excludes": ["detect"],
        "Types": ["medal"]
    },
    "berserk": {
        "Desc": "Berserker",
        "Diff": 8,
        "Types": ["medal"]
    },
    "detect": {
        "Desc": "Detector",
        "Diff": 10,
        "Excludes": ["specs"],
        "Types": ["medal"]
    },
    "house": {
        "Desc": "Charge Up",
        "Diff": 10,
        "Excludes": ["metalisland","statberry"],
        "Types": ["medal"]
    },
    "jaws": {
        "Desc": "Antlion Jaws",
        "Diff": 10,
        "Types": ["medal"]
    },
    "frostbite": {
        "Desc": "Frostbite",
        "Diff": 11,
        "Types": ["medal"]
    },
    "front": {
        "Desc": "Front Support",
        "Diff": 16,
        "Types": ["medal"]
    },
    "eternal": {
        "Desc": "Eternal Venom",
        "Diff": 19,
        "Types": ["medal"]
    },
    "exfreeze": {
        "Desc": "Extra Freeze",
        "Diff": 20,
        "Types": ["medal"]
    },
    "lifecast": {
        "Desc": "Life Cast",
        "Diff": 21,
        "Types": ["medal"]
    },
    "mirror": {
        "Desc": "Status Mirror",
        "Diff": 24,
        "Types": ["medal"]
    },
    
    
    //cooking
    "bigmistake": {
        "Desc": "Cook a Big Mistake",
        "Diff": 1,
        "Types": ["cooking"]
    },
    "danger": {
        "Desc": "Cook a Danger Dish",
        "Diff": 3,
        "Types": ["cooking"]
    },
    "hustle": {
        "Desc": "Cook a Hustle Candy",
        "Diff": 4,
        "Types": ["cooking"]
    },
    "squart": {
        "Desc": "Cook a Squash Tart",
        "Diff": 11,
        "Types": ["cooking"]
    },
    "shake": {
        "Desc": "Cook a Miracle Shake",
        "Diff": 12,
        "Excludes": ["smoothie"],
        "Types": ["cooking"]
    },
    "cherrybomb": {
        "Desc": "Cook Cherry Bombs",
        "Diff": 14,
        "Types": ["cooking"]
    },
    "smoothie": {
        "Desc": "Cook a Berry Smoothie",
        "Diff": 15,
        "Excludes": ["shake"],
        "Types": ["cooking"]
    },
    
    
    //misc
    "metalisland": {
        "Desc": "Visit Metal Island",
        "Diff": 4,
        "Excludes": ["house","statberry"]
    },
    "blankcard": {
        "Desc": "Obtain the Blank Card",
        "Diff": 7,
        "Excludes": ["spycards"]
    },
    "tourney": {
        "Desc": "Win the Spy Cards Tournament",
        "Diff": 20,
        "Excludes": ["spycards"]
    },
    "plush": {
        "Desc": "Buy the Green Ranger Plushie",
        "Diff": 2
    },
    "chompy": {
        "Desc": "Equip a bow on Chompy",
        "Diff": 13
    },
    "status": {
        "Desc": "Use all 4 types of status bombs (Poison, Sleep, Numb, Frost)",
        "Diff": 16
    },
    "kenny": {
        "Desc": "Get the Lore Book from Kenny",
        "Diff": 19
    },
    "spidercb": {
        "Desc": "Get the Crystal Berry from the Pink Spider",
        "Diff": 21
    },
    "statberry": {
        "Desc": "Buy every stat-boosting berry from the vendor in Defiant Root",
        "Diff": 23,
        "Excludes": ["metalisland","house"]
    },
    "mk": {
        "Desc": "9500 Points in Mite Knight",
        "Diff": 22,
        "Excludes": ["fj"]
    },
    "fj": {
        "Desc": "4500 Points in Flower Journey",
        "Diff": 23,
        "Excludes": ["mk"]
    }
}
