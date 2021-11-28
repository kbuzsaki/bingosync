bingoGenerator = require("./generators/generator_bases/synerGen.js");

var bingoList = {
    //initialization
    "bingoTypes": { },
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
        "Diff": 3
    },
    "afunny": {
        "Desc": "Defeat Ahoneynation",
        "Diff": 7
    },
    "asto": {
        "Desc": "Defeat Astotheles",
        "Diff": 7,
        "Excludes": ["astohard"]
    },
    "kalikabbu": {
        "Desc": "Defeat Kali & Kabbu",
        "Diff": 9
    },
    "brood": {
        "Desc": "Defeat Broodmother",
        "Diff": 11,
        "Excludes": ["broodhard"]
    },
    "mother": {
        "Desc": "Defeat Mother Chomper",
        "Diff": 12,
        "Excludes": ["motherhard"]
    },
    "devourer": {
        "Desc": "Defeat Devourer",
        "Diff": 13
    },
    "beast": {
        "Desc": "Defeat the Beast",
        "Diff": 15,
        "Excludes": ["beasthard"]
    },
    "wyrm": {
        "Desc": "Defeat Tidal Wyrm",
        "Diff": 17
    },
    "riz": {
        "Desc": "Defeat Riz",
        "Diff": 17
    },
    "primal": {
        "Desc": "Defeat Primal Weevil",
        "Diff": 18,
        "Excludes": ["primalhard"]
    },
    "monarch": {
        "Desc": "Defeat False Monarch",
        "Diff": 19
    },
    "zm2": {
        "Desc": "Defeat Zasp & Mothiva 2",
        "Diff": 20,
        "Excludes": ["zm2hard"]
    },
    "king": {
        "Desc": "Defeat Seedling King",
        "Diff": 21
    },
    "carmina": {
        "Desc": "Defeat Carmina (in battle)",
        "Diff": 22
    },
    "peacock": {
        "Desc": "Defeat Peacock Spider",
        "Diff": 24
    },
    "ch2": {
        "Desc": "Complete Chapter 2",
        "Diff": 4
    },
    "ch3": {
        "Desc": "Complete Chapter 3",
        "Diff": 7,
        "Excludes": ["b33hard"]
    },
    "ch4": {
        "Desc": "Complete Chapter 4",
        "Diff": 13,
        "Excludes": ["watcherhard"]
    },
    "ch5": {
        "Desc": "Complete Chapter 5",
        "Diff": 15
    },
    "ch6": {
        "Desc": "Complete Chapter 6",
        "Diff": 23,
        "Excludes": ["tankhard"]
    },
    
    //bosses on hard mode
    "spuderhard": {
        "Desc": "Defeat Spider with Hard Mode equipped",
        "Diff": 2
    },
    "scarlethard": {
        "Desc": "Defeat Monsieur Scarlet with Hard Mode equipped",
        "Diff": 5
    },
    "b33hard": {
        "Desc": "Defeat Heavy Drone B-33 with Hard Mode equipped",
        "Diff": 8,
        "Excludes": ["ch3"]
    },
    "astohard": {
        "Desc": "Defeat Astotheles with Hard Mode equipped",
        "Diff": 10,
        "Excludes": ["asto"]
    },
    "broodhard": {
        "Desc": "Defeat Broodmother with Hard Mode equipped",
        "Diff": 14,
        "Excludes": ["brood"]
    },
    "motherhard": {
        "Desc": "Defeat Mother Chomper with Hard Mode equipped",
        "Diff": 16,
        "Excludes": ["mother"]
    },
    "watcherhard": {
        "Desc": "Defeat the Watcher with Hard Mode equipped",
        "Diff": 17,
        "Excludes": ["ch4"]
    },
    "beasthard": {
        "Desc": "Defeat the Beast with Hard Mode equipped",
        "Diff": 18,
        "Excludes": ["beast"]
    },
    "primalhard": {
        "Desc": "Defeat Primal Weevil with Hard Mode equipped",
        "Diff": 22,
        "Excludes": ["primal"]
    },
    "zm2hard": {
        "Desc": "Defeat Zasp & Mothiva 2 with Hard Mode equipped",
        "Diff": 24,
        "Excludes": ["zm2"]
    },
    "zommothhard": {
        "Desc": "Defeat Zommoth with Hard Mode equipped",
        "Diff": 25,
        "Excludes": ["leifquest"]
    },
    "tankhard": {
        "Desc": "Defeat ULTIMAX Tank with Hard Mode equipped",
        "Diff": 25,
        "Excludes": ["ch6"]
    },
    
    //quests
    "leifquest": {
        "Desc": "Complete Leif's Request",
        "Diff": 23,
        "Excludes": ["zommothhard"]
    },
    "viquest": {
        "Desc": "Complete Vi's Request",
        "Diff": 21
    },
    "eetl": {
        "Desc": "Complete \"Parts Delivery\"",
        "Diff": 1
    },
    "tod": {
        "Desc": "Complete \"Lost Toy\"",
        "Diff": 1
    },
    "hat": {
        "Desc": "Complete \"Dropped My Hat!\"",
        "Diff": 2
    },
    "chuck": {
        "Desc": "Complete \"I Want A New Taste\"",
        "Diff": 2
    },
    "cablecar": {
        "Desc": "Complete \"Cable Car Bodyguard\"",
        "Diff": 3
    },
    "crisbee": {
        "Desc": "Complete \"I Wanna Get Better!\"",
        "Diff": 3
    },
    "kut": {
        "Desc": "Complete \"My Specialty\"",
        "Diff": 5
    },
    "fry": {
        "Desc": "Complete \"A Smiling Dish\"",
        "Diff": 5,
        "Excludes": ["dinner"]
    },
    "mm": {
        "Desc": "Complete \"Theater Help Wanted!\"",
        "Diff": 5
    },
    "dinner": {
        "Desc": "Complete \"Team Snakemouth...\"",
        "Diff": 6,
        "Excludes": ["fry"]
    },
    "tangy": {
        "Desc": "Complete \"Huuuuuuuuu...!!!\"",
        "Diff": 8
    },
    "doll": {
        "Desc": "Complete \"Lost Item\"",
        "Diff": 9
    },
    "ore": {
        "Desc": "Complete \"Ore Wanted\"",
        "Diff": 11
    },
    "spycards": {
        "Desc": "Complete \"Card Masters of Bugaria\"",
        "Diff": 12,
        "Excludes": ["tourney","blankcard"]
    },
    "badbook": {
        "Desc": "Complete \"Awful's Beauty\"",
        "Diff": 13
    },
    "cennpisci": {
        "Desc": "Complete \"Explorer Check!\"",
        "Diff": 14
    },
    "wizard": {
        "Desc": "Complete \"Find The Ingredients!\"",
        "Diff": 15
    },
    "claw": {
        "Desc": "Complete \"My Mecha Claw!\"",
        "Diff": 18
    },
    "sophie": {
        "Desc": "Complete \"Rare Item Wanted!\"",
        "Diff": 19
    },
    "mun": {
        "Desc": "Complete \"Help Me Get It Back!\"",
        "Diff": 20
    },
    "elom": {
        "Desc": "Complete \"In Search of Something\"",
        "Diff": 22
    },
    
    
    //collectibles
    "10d": {
        "Desc": "10 Discoveries",
        "Diff": 1,
        "Excludes": ["15d"]
    },
    "15d": {
        "Desc": "15 Discoveries",
        "Diff": 2,
        "Excludes": ["10d","20d"]
    },
    "20d": {
        "Desc": "20 Discoveries",
        "Diff": 5,
        "Excludes": ["15d","25d"]
    },
    "25d": {
        "Desc": "25 Discoveries",
        "Diff": 7,
        "Excludes": ["20d","30d"]
    },
    "30d": {
        "Desc": "30 Discoveries",
        "Diff": 11,
        "Excludes": ["25d","35d"]
    },
    "35d": {
        "Desc": "35 Discoveries",
        "Diff": 17,
        "Excludes": ["30d","40d"]
    },
    "40d": {
        "Desc": "40 Discoveries",
        "Diff": 24,
        "Excludes": ["35d"]
    },
    "10cb": {
        "Desc": "10 Crystal Berries",
        "Diff": 4,
        "Excludes": ["15cb"]
    },
    "15cb": {
        "Desc": "15 Crystal Berries",
        "Diff": 6,
        "Excludes": ["10cb","20cb"]
    },
    "20cb": {
        "Desc": "20 Crystal Berries",
        "Diff": 9,
        "Excludes": ["15cb","25cb"]
    },
    "25cb": {
        "Desc": "25 Crystal Berries",
        "Diff": 14,
        "Excludes": ["20cb","30cb"]
    },
    "30cb": {
        "Desc": "30 Crystal Berries",
        "Diff": 22,
        "Excludes": ["25cb"]
    },
    "5lb": {
        "Desc": "5 Lore Books",
        "Diff": 6,
        "Excludes": ["10lb"]
    },
    "10lb": {
        "Desc": "10 Lore Books",
        "Diff": 13,
        "Excludes": ["5lb","15lb"]
    },
    "15lb": {
        "Desc": "15 Lore Books",
        "Diff": 19,
        "Excludes": ["10lb","20lb"]
    },
    "20lb": {
        "Desc": "20 Lore Books",
        "Diff": 25,
        "Excludes": ["15lb"]
    },
    
    
    //cave of trials
    "cot10": {
        "Desc": "Complete 10 Battles in Cave of Trials",
        "Diff": 9,
        "Excludes": ["cot15"]
    },
    "cot15": {
        "Desc": "Complete 15 Battles in Cave of Trials",
        "Diff": 12,
        "Excludes": ["cot10","cot20"]
    },
    "cot20": {
        "Desc": "Complete 20 Battles in Cave of Trials",
        "Diff": 15,
        "Excludes": ["cot15","cot25"]
    },
    "cot25": {
        "Desc": "Complete 25 Battles in Cave of Trials",
        "Diff": 18,
        "Excludes": ["cot20","cot30"]
    },
    "cot30": {
        "Desc": "Complete 30 Battles in Cave of Trials",
        "Diff": 21,
        "Excludes": ["cot25","cot35"]
    },
    "cot35": {
        "Desc": "Complete 35 Battles in Cave of Trials",
        "Diff": 23,
        "Excludes": ["cot30","cot40"]
    },
    "cot40": {
        "Desc": "Complete 40 Battles in Cave of Trials",
        "Diff": 25,
        "Excludes": ["cot35"]
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
        "Diff": 3
    },
    "hawk": {
        "Desc": "Tardigrade Shield",
        "Diff": 4
    },
    "shock": {
        "Desc": "Shock Trooper",
        "Diff": 6
    },
    "specs": {
        "Desc": "Spy Specs",
        "Diff": 8,
        "Excludes": ["detect"]
    },
    "berserk": {
        "Desc": "Berserker",
        "Diff": 8
    },
    "detect": {
        "Desc": "Detector",
        "Diff": 10,
        "Excludes": ["specs"]
    },
    "house": {
        "Desc": "Charge Up",
        "Diff": 10,
        "Excludes": ["metalisland","statberry"]
    },
    "jaws": {
        "Desc": "Antlion Jaws",
        "Diff": 10
    },
    "frostbite": {
        "Desc": "Frostbite",
        "Diff": 11
    },
    "front": {
        "Desc": "Front Support",
        "Diff": 16
    },
    "eternal": {
        "Desc": "Eternal Venom",
        "Diff": 19
    },
    "exfreeze": {
        "Desc": "Extra Freeze",
        "Diff": 20
    },
    "lifecast": {
        "Desc": "Life Cast",
        "Diff": 21
    },
    "mirror": {
        "Desc": "Status Mirror",
        "Diff": 24
    },
    
    
    //cooking
    "bigmistake": {
        "Desc": "Cook a Big Mistake",
        "Diff": 1
    },
    "danger": {
        "Desc": "Cook a Danger Dish",
        "Diff": 3
    },
    "hustle": {
        "Desc": "Cook a Hustle Candy",
        "Diff": 4
    },
    "squart": {
        "Desc": "Cook a Squash Tart",
        "Diff": 11
    },
    "shake": {
        "Desc": "Cook a Miracle Shake",
        "Diff": 12,
        "Excludes": ["smoothie"]
    },
    "cherrybomb": {
        "Desc": "Cook Cherry Bombs",
        "Diff": 14
    },
    "smoothie": {
        "Desc": "Cook a Berry Smoothie",
        "Diff": 15,
        "Excludes": ["shake"]
    },
    
    
    //misc
    "metalisland": {
        "Desc": "Take a trip to Metal Island for 300 Berries",
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
    "abomb": {
        "Desc": "Use an Abombination against the Wasp King",
        "Diff": 14
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
