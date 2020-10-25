bingoGenerator = require("./generators/generator_bases/synerGen.js");

var bingoList = { 
    //initialization
    "bingoTypes": {
        "Tiebreaker": {"Max": 1}, //4 Total
        "FO": {"Max": 3}, //8 Total
        "Revisit": {"Max": 5}, //12 Total
        "SpecificFruit": {"Max": 5}, //22 Total
        "FC": {"Max": 1} //4 Total
    },
    "maxScore": 0,
    
    //Pikmin growth
    "1Pellet": {
        "Desc": "Collect a 1-Pellet of each color",
        "Diff": 2
    },
    "5Pellet": {
        "Desc": "Collect a 5-Pellet of each color",
        "Diff": 4
    },
    "100R": {
        "Desc": "100 Red Pikmin",
        "Diff": 3
    },
    "100Ro": {
        "Desc": "100 Rock Pikmin",
        "Diff": 5
    },
    "100Y": {
        "Desc": "100 Yellow Pikmin",
        "Diff": 6
    },
    "100W": {
        "Desc": "100 Winged Pikmin",
        "Diff": 8
    },
    "100B": {
        "Desc": "100 Blue Pikmin",
        "Diff": 12
    },
    "40Each": {
        "Desc": "40 Pikmin of each color",
        "Diff": 4,
        "Excludes": ["250Total"]
    },
    "250Total": {
        "Desc": "250 total Pikmin",
        "Diff": 10,
        "Excludes": ["40Each"]
    },
    "1000Total": {
        "Desc": "1000 total Pikmin",
        "Diff": 25,
        "Types": ["Tiebreaker"]
    },
    
    //Candypops, Sprays, Flowers
    "5CPB": {
        "Desc": "Make 5 Candypop Buds wilt",
        "Diff": 9
    },
    "8CPB": {
        "Desc": "Make 8 Candypop Buds wilt",
        "Diff": 16,
        "Types": ["Revisit"]
    },
    "5Spicy": {
        "Desc": "5 Spicy Sprays",
        "Diff": 8,
        "Excludes": ["8Spicy"]
    },
    "8Spicy": {
        "Desc": "8 Spicy Sprays",
        "Diff": 12,
        "Excludes": ["5Spicy"]
    },
    "Mature": {
        "Desc": "Have a Leaf Pikmin in the ground mature into a Flower Pikmin",
        "Diff": 1
    },
    "100Sprouts": {
        "Desc": "Have 100 sprouts out on the field at once",
        "Diff": 18
    },
    
    //Obstacles
    "4EGate": {
        "Desc": "Destroy 4 Electric Gates",
        "Diff": 11,
        "Excludes": ["6EGate"]
    },
    "6EGate": {
        "Desc": "Destroy 6 Electric Gates",
        "Diff": 20,
        "Excludes": ["4EGate"]
    },
    "8DirtWall": {
        "Desc": "Destroy 8 Dirt Walls",
        "Diff": 1,
        "Excludes": ["11DirtWall"]
    },
    "11DirtWall": {
        "Desc": "Destroy 11 Dirt Walls",
        "Diff": 9,
        "Excludes": ["8DirtWall"]
    },
    "2BombWall": {
        "Desc": "Destroy 2 Reinforced Walls",
        "Diff": 11,
        "Excludes": ["4BombWall"]
    },
    "4BombWall": {
        "Desc": "Destroy 4 Reinforced Walls",
        "Diff": 23,
        "Excludes": ["2BombWall"]
    },
    "3Clipboard": {
        "Desc": "Lift 3 Clipboards",
        "Diff": 8
    },
    "5Bag": {
        "Desc": "Push 5 Paper Bags",
        "Diff": 7,
        "Excludes": ["6Bag"]
    },
    "6Bag": {
        "Desc": "Push all 6 Paper Bags",
        "Diff": 11,
        "Types": ["FO"],
        "Excludes": ["5Bag"]
    },
    "4Mound": {
        "Desc": "Dig up 4 Dirt Mounds",
        "Diff": 10,
        "Excludes": ["7Mound"]
    },
    "7Mound": {
        "Desc": "Dig up 7 Dirt Mounds",
        "Diff": 17,
        "Excludes": ["4Mound"]
    },
    "HayRamp": {
        "Desc": "Build 1 Hay Ramp",
        "Diff": 6
    },
    "5Stick": {
        "Desc": "Unearth all 5 Climbing Sticks",
        "Diff": 5
    },
    "12Electrode": {
        "Desc": "Activate all 12 Electrodes",
        "Diff": 24,
        "Types": ["FO"]
    },
    "5Bridge": {
        "Desc": "Build 5 Bridges",
        "Diff": 14,
        "Excludes": ["8Bridge"]
    },
    "8Bridge": {
        "Desc": "Build 8 Bridges",
        "Diff": 21,
        "Excludes": ["5Bridge", "10Bridge"]
    },
    "10Bridge": {
        "Desc": "Build 10 Bridges",
        "Diff": 23,
        "Excludes": ["8Bridge"]
    },
    "DTMainBridge": {
        "Desc": "Build the main bridge in Distant Tundra",
        "Diff": 13
    },
    "GoHPot": {
        "Desc": "Build the pot in Garden of Hope",
        "Diff": 16,
        "Excludes": ["Mireclops-NoOoB"]
    },
    "TRElectrode": {
        "Desc": "Activate the Electrode in Twilight River",
        "Diff": 7
    },
    "TRBridges": {
        "Desc": "Build both bridges in Twilight River",
        "Diff": 18,
        "Excludes": ["Wings-NoOoB", "Maestro-NoOoB"]
    },
    "DTDirtWall": {
        "Desc": "Destroy all 3 Dirt Walls in Distant Tundra",
        "Diff": 15,
        "Types": ["Revisit"]
    },
    "FODirtWall": {
        "Desc": "Destroy all 5 Dirt Walls in Formidable Oak",
        "Diff": 22,
        "Types": ["FO"],
        "Excludes": ["FOChase"]
    },
    
    //Get to places No OoB
    "Meerslug-NoOoB": {
        "Desc": "Get to the Sandbelching Meerslug without going out of bounds",
        "Diff": 10
    },
    "Wings-NoOoB": {
        "Desc": "Get to the Winged Onion without going out of bounds",
        "Diff": 16,
        "Excludes": ["TRBridges"]
    },
    "Maestro-NoOoB": {
        "Desc": "Get to the Scornet Maestro without going out of bounds",
        "Diff": 14,
        "Excludes": ["TRBridges"]
    },
    "Mireclops-NoOoB": {
        "Desc": "Get to the Quaggled Mireclops without going out of bounds",
        "Diff": 12,
        "Excludes": ["GoHPot"]
    },
    
    //Battle Enemies!™ with conditions
    "Phosbat-NoMainLight": {
        "Desc": "Defeat the Vehemoth Phosbat without activating the main light",
        "Diff": 21,
        "Excludes": ["Phosbat-NoElectrode"]
    },
    "Phosbat-NoElectrode": {
        "Desc": "Defeat the Vehemoth Phosbat without activating any Electrodes",
        "Diff": 24,
        "Excludes": ["Phosbat-NoMainLight"]
    },
    "Meerslug-BombsOnly": {
        "Desc": "Defeat the Sandbelching Meerslug using only Bomb Rocks",
        "Diff": 23
    },
    "Maestro-NoSwap": {
        "Desc": "Defeat the Scornet Maestro without switching captains",
        "Diff": 13
    },
    "Mireclops-NoWings": {
        "Desc": "Defeat the Quaggled Mireclops without Winged Pikmin",
        "Diff": 20,
        "Excludes": ["Mireclops-RocksOnly"]
    },
    "Mireclops-RocksOnly": {
        "Desc": "Defeat the Quaggled Mireclops with only Rock Pikmin",
        "Diff": 24,
        "Excludes": ["Mireclops-NoWings"]
    },
    "Wraith-NoElemental": {
        "Desc": "Defeat the Plasm Wraith without destroying any Elemental Plasms",
        "Diff": 25,
        "Types": ["Tiebreaker","FO"],
        "Excludes": ["Wraith"]
    },
    "Snagret-NoWingsBombs": {
        "Desc": "Defeat a Burrowing Snagret without Winged Pikmin or Bomb Rocks",
        "Diff": 17,
        "Excludes": ["MiniBoss"]
    },
    "Bulbear-NoBombsSprays": {
        "Desc": "Defeat a Bulbear without Bomb Rocks or Spicy Sprays",
        "Diff": 16,
        "Types": ["Revisit"]
    },
    "Crushblat-NoBombs": {
        "Desc": "Defeat a Calcified Crushblat without Bomb Rocks",
        "Diff": 16,
        "Types": ["Revisit"]
    },
    "ACL-NoRocks": {
        "Desc": "Defeat an Armored Cannon Larva without Rock Pikmin",
        "Diff": 10,
        "Excludes": ["ACL-Collect"]
    },
    "Blowhog-NoWings": {
        "Desc": "Defeat a Puffy Blowhog without Winged Pikmin",
        "Diff": 8
    },
    "Skutterchuck-Suicide": {
        "Desc": "Defeat 2 Skutterchucks without any Pikmin",
        "Diff": 2
    },
    "Blowhog-NoReds": {
        "Desc": "Defeat 2 Fiery Blowhogs without Red Pikmin",
        "Diff": 1
    },
    "OBulborb-NoBombs": {
        "Desc": "Defeat 3 Orange Bulborbs in Twilight River without Bomb Rocks",
        "Diff": 11,
        "Excludes": ["OBulborb"]
    },
    
    //Battle Enemies!™
    "MiniBoss": {
        "Desc": "Defeat 3 mini-bosses",
        "Diff": 15,
        "Excludes": ["SLL", "Snagret-NoWingsBombs"]
    },
    "Bloyster": {
        "Desc": "Defeat 2 Toady Bloysters",
        "Diff": 17,
        "Types": ["Revisit"]
    },
    "Crab": {
        "Desc": "Defeat 2 Peckish Aristocrabs",
        "Diff": 16,
        "Excludes": ["Crab-Collect"]
    },
    "Sputtlefish": {
        "Desc": "Defeat 3 Sputtlefish",
        "Diff": 10
    },
    "Wollywog": {
        "Desc": "Defeat 4 Yellow Wollywogs",
        "Diff": 11,
        "Excludes": ["Wollywog-Collect"]
    },
    "Arctic": {
        "Desc": "Defeat 4 Arctic Cannon Larvae",
        "Diff": 11,
        "Excludes": ["Arctic-Collect"]
    },
    "OBulborb": {
        "Desc": "Defeat 4 Orange Bulborbs",
        "Diff": 6,
        "Excludes": ["OBulborb-NoBombs"]
    },
    "Wogpole": {
        "Desc": "Defeat 5 Wogpoles",
        "Diff": 15
    },
    "Joustmite": {
        "Desc": "Defeat 5 Joustmites (of any kind)",
        "Diff": 8
    },
    "Blowhog": {
        "Desc": "Defeat 5 Fiery Blowhogs",
        "Diff": 10
    },
    "Dumple": {
        "Desc": "Defeat 7 Water Dumples",
        "Diff": 12,
        "Types": ["Revisit"]
    },
    "Sheargrub": {
        "Desc": "Defeat 8 Swarming Sheargrubs",
        "Diff": 4
    },
    "Shearwig": {
        "Desc": "Defeat a Shearwig",
        "Diff": 17,
        "Types": ["FO"]
    },
    "SLL": {
        "Desc": "Defeat 2 Shaggy Long Legs",
        "Diff": 19,
        "Excludes": ["MiniBoss"]
    },
    "Wraith": {
        "Desc": "Defeat the Plasm Wraith",
        "Diff": 22,
        "Types": ["FO"],
        "Excludes": ["Wraith-NoElemental"]
    },
    "Illusion": {
        "Desc": "Defeat every enemy illusion in Formidable Oak",
        "Diff": 25,
        "Types": ["Tiebreaker", "FO"],
        "Excludes": ["FOChase"]
    },
    "Wollywog-Collect": {
        "Desc": "Collect 2 Yellow Wollywogs",
        "Diff": 1,
        "Excludes": ["Wollywog"]
    },
    "Arctic-Collect": {
        "Desc": "Collect an Arctic Cannon Larva",
        "Diff": 3,
        "Excludes": ["Arctic"]
    },
    "Mawdad-Collect": {
        "Desc": "Collect the Armored Mawdad",
        "Diff": 4,
        "Excludes": ["Dragonfruit"]
    },
    "Meerslug-Collect": {
        "Desc": "Collect the Sandbelching Meerslug",
        "Diff": 6,
        "Excludes": ["Watermelon"]
    },
    "ACL-Collect": {
        "Desc": "Collect an Armored Cannon Larva",
        "Diff": 9,
        "Excludes": ["ACL-NoRocks"]
    },
    "Scornet-Collect": {
        "Desc": "Collect every Scornet dropped by the Scornet Maestro",
        "Diff": 15,
        "Excludes": ["Papaya"]
    },
    "Crab-Collect": {
        "Desc": "Collect 2 Peckish Aristocrabs",
        "Diff": 19,
        "Types": ["Revisit"],
        "Excludes": ["Crab"]
    },
    
    //Collect Treasure!™ with conditions
    "GoHGrapefruit-NoWings": {
        "Desc": "Astringent Clump in Garden of Hope without Winged Pikmin",
        "Diff": 14
    },
    "TWStarfruit-NoWingsYellows": {
        "Desc": "Stellar Extrusion in Tropical Wilds without Winged or Yellow Pikmin",
        "Diff": 19
    },
    "TRPersimmon-NoGate": {
        "Desc": "Portable Sunset in Twilight River without lifting the Bamboo Gate",
        "Diff": 7
    },
    "TWBanana-NoBombs": {
        "Desc": "Slapstick Crescent in Tropical Wilds without Bomb Rocks",
        "Diff": 12,
        "Types": ["Revisit"]
    },
    
    //Collect Treasure!™ - general
    "10Total": {
        "Desc": "10 total fruits",
        "Diff": 3,
        "Excludes": ["15Total"]
    },
    "15Total": {
        "Desc": "15 total fruits",
        "Diff": 10,
        "Excludes": ["10Total", "20Total", "3Each"]
    },
    "20Total": {
        "Desc": "20 total fruits",
        "Diff": 14,
        "Excludes": ["15Total", "25Total", "5Each"]
    },
    "25Total": {
        "Desc": "25 total fruits",
        "Diff": 18,
        "Excludes": ["20Total", "30Total"]
    },
    "30Total": {
        "Desc": "30 total fruits",
        "Diff": 22,
        "Excludes": ["25Total"]
    },
    "5Unique": {
        "Desc": "5 unique fruits",
        "Diff": 5,
        "Excludes": ["10Unique"]
    },
    "10Unique": {
        "Desc": "10 unique fruits",
        "Diff": 13,
        "Excludes": ["5Unique", "15Unique"]
    },
    "15Unique": {
        "Desc": "15 unique fruits",
        "Diff": 17,
        "Excludes": ["10Unique", "20Unique"]
    },
    "20Unique": {
        "Desc": "20 unique fruits",
        "Diff": 21,
        "Excludes": ["15Unique", "25Unique"]
    },
    "25Unique": {
        "Desc": "25 unique fruits",
        "Diff": 25,
        "Excludes": ["20Unique"]
    },
    "TWHalf": {
        "Desc": "8 fruits in Tropical Wilds",
        "Diff": 15
    },
    "TWFC": {
        "Desc": "All 18 fruits in Tropical Wilds",
        "Diff": 25,
        "Types": ["FC"]
    },
    "GoHHalf": {
        "Desc": "8 fruits in Garden of Hope",
        "Diff": 11
    },
    "GoHFC": {
        "Desc": "All 17 fruits in Garden of Hope",
        "Diff": 23,
        "Types": ["FC"]
    },
    "DTHalf": {
        "Desc": "7 fruits in Distant Tundra",
        "Diff": 13
    },
    "DTFC": {
        "Desc": "All 16 fruits in Distant Tundra",
        "Diff": 24,
        "Types": ["FC"]
    },
    "TRHalf": {
        "Desc": "7 fruits in Twilight River",
        "Diff": 9
    },
    "TRFC": {
        "Desc": "All 15 fruits in Twilight River",
        "Diff": 22,
        "Types": ["FC"]
    },
    "5Any": {
        "Desc": "5 fruits in any one area",
        "Diff": 2
    },
    "3Each": {
        "Desc": "3 fruits in each area",
        "Diff": 12,
        "Excludes": ["15Total", "5Each"]
    },
    "5Each": {
        "Desc": "5 fruits in each area",
        "Diff": 20,
        "Excludes": ["20Total", "3Each"]
    },
    
    //Collect Treasure!™ - specific
    "PlumUme": {
        "Desc": "5 Lesser Mock Bottoms and/or Searing Acidshocks",
        "Diff": 18,
        "Types": ["SpecificFruit"]
    },
    "Sunseed": {
        "Desc": "4 Sunseed Berries",
        "Diff": 9,
        "Types": ["SpecificFruit"]
    },
    "LemonLime": {
        "Desc": "4 Face Wrinklers and/or Zest Bombs",
        "Diff": 14,
        "Types": ["SpecificFruit"]
    },
    "Gaggle": {
        "Desc": "4 Juicy Gaggles",
        "Diff": 12,
        "Types": ["SpecificFruit"]
    },
    "Dreamdrop": {
        "Desc": "4 Velvety Dreamdrops",
        "Diff": 21,
        "Types": ["Revisit", "SpecificFruit"]
    },
    "Citrus": {
        "Desc": "3 Citrus Lumps",
        "Diff": 17,
        "Types": ["SpecificFruit"]
    },
    "Grenade": {
        "Desc": "3 Cupid's Grenades",
        "Diff": 16,
        "Types": ["Revisit", "SpecificFruit"]
    },
    "Grapes": {
        "Desc": "3 sets of Dawn and/or Dusk Pustules",
        "Diff": 11,
        "Types": ["SpecificFruit"]
    },
    "Kiwi": {
        "Desc": "3 Disguised Delicacies and/or Blonde Impostors",
        "Diff": 20,
        "Types": ["SpecificFruit"]
    },
    "Dapper": {
        "Desc": "3 Dapper Blobs",
        "Diff": 19,
        "Types": ["SpecificFruit"]
    },
    "Avocado": {
        "Desc": "2 Scaly Custards",
        "Diff": 15,
        "Types": ["SpecificFruit"]
    },
    "Fig": {
        "Desc": "2 Delectable Bouquets",
        "Diff": 13,
        "Types": ["SpecificFruit"]
    },
    "Airhead": {
        "Desc": "2 Pocked Airheads",
        "Diff": 10,
        "Types": ["SpecificFruit"]
    },
    "BossDrops": {
        "Desc": "4 fruits dropped by bosses and/or mini-bosses",
        "Diff": 14
    },
    "Sniffer": {
        "Desc": "Tremendous Sniffer",
        "Diff": 12,
        "Types": ["SpecificFruit"]
    },
    "Deluge": {
        "Desc": "Crunchy Deluge",
        "Diff": 16,
        "Types": ["Revisit", "SpecificFruit"]
    },
    "Peach": {
        "Desc": "Mock Bottom",
        "Diff": 15,
        "Types": ["Revisit", "SpecificFruit"]
    },
    "Apple": {
        "Desc": "Insect Condo",
        "Diff": 9,
        "Types": ["SpecificFruit"],
        "Excludes": ["ScorchGuard"]
    },
    "Dragonfruit": {
        "Desc": "Fire-Breathing Feast",
        "Diff": 8,
        "Types": ["SpecificFruit"],
        "Excludes": ["Mawdad-Collect"]
    },
    "Mango": {
        "Desc": "Heroine's Tear",
        "Diff": 6,
        "Types": ["SpecificFruit"]
    },
    "Watermelon": {
        "Desc": "Crimson Banquet",
        "Diff": 13,
        "Types": ["SpecificFruit"],
        "Excludes": ["Meerslug-Collect"]
    },
    "Papaya": {
        "Desc": "Seed Hive",
        "Diff": 10,
        "Types": ["SpecificFruit"],
        "Excludes": ["Scornet-Collect"]
    },
    "Moon": {
        "Desc": "Wayward Moon",
        "Diff": 11,
        "Types": ["SpecificFruit"],
        "Excludes": ["FOUnlock"]
    },
    
    //Misc. goals
    "MetalSuitZ": {
        "Desc": "Metal Suit Z",
        "Diff": 5
    },
    "AntiElectrifier": {
        "Desc": "Anti-Electrifier",
        "Diff": 9
    },
    "ScorchGuard": {
        "Desc": "Scorch Guard",
        "Diff": 7,
        "Excludes": ["Apple"]
    },
    "3Upgrade": {
        "Desc": "3 captain upgrades",
        "Diff": 10,
        "Excludes": ["4Upgrade"]
    },
    "4Upgrade": {
        "Desc": "4 captain upgrades",
        "Diff": 12,
        "Excludes": ["3Upgrade"]
    },
    "FOUnlock": {
        "Desc": "Unlock Formidable Oak",
        "Diff": 11,
        "Excludes": ["Moon"]
    },
    "BlueJuice": {
        "Desc": "Blue Juice: Mix a Juicy Gaggle with a Zest Bomb",
        "Diff": 8
    },
    "Drawings": {
        "Desc": "View 10 Pikmin drawings with the KopPad's camera",
        "Diff": 12
    },
    "19Bombs": {
        "Desc": "Have 19 Bomb Rocks in the party at once",
        "Diff": 10
    },
    "FOChase": {
        "Desc": "Complete the chase section of Formidable Oak without Winged Pikmin",
        "Diff": 24,
        "Types": ["FO", "Tiebreaker"],
        "Excludes": ["FODirtWall", "Illusion"]
    }
};
