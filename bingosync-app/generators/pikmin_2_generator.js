bingoGenerator = require("./generators/generator_bases/synerGen.js");

var bingoList = {
    "bingoTypes": { },
    "maxScore": 0,
    //Goals sorted by area, general goals first
    //Pikmin-related goals
    "150R": {
        "Desc": "150 Reds",
        "Diff": 16,
        "Excludes": ["150OneType", "200Total"],
        "Synergy": ["50RBY", "100OneType", "300Total"]
    },
    "60Y": {
        "Desc": "60 Yellows",
        "Diff": 8,
        "Excludes": ["100Y", "1Y"],
        "Synergy": ["50RBY", "100OneType"]
    },
    "100Y": {
        "Desc": "100 Yellows",
        "Diff": 14,
        "Excludes": ["60Y", "100OneType", "100B"],
        "Synergy": ["50RBY", "150OneType", "200Total"]
    },
    "100B": {
        "Desc": "100 Blues",
        "Diff": 9,
        "Excludes": ["100OneType", "100Y"],
        "Synergy": ["50RBY", "150OneType", "200Total"]
    },
    "50RBY": {
        "Desc": "50 Reds, 50 Yellows, and 50 Blues",
        "Diff": 7,
        "Synergy": ["150R", "60Y", "100Y", "100B"]
    },
    "45P": {
        "Desc": "45 Purples",
        "Diff": 14,
        "Excludes": ["45W"],
        "Synergy": ["CPB"]
    },
    "45W": {
        "Desc": "45 Whites",
        "Diff": 14,
        "Excludes": ["45P"],
        "Synergy": ["CPB"]
    },
    "100OneType": {
        "Desc": "100 Pikmin of a single type",
        "Diff": 7,
        "Excludes": ["100Y", "100B"],
        "Synergy": ["150OneType", "200Total", "150R"]
    },
    "150OneType": {
        "Desc": "150 Pikmin of a single type",
        "Diff": 14,
        "Excludes": ["150R", "200Total"],
        "Synergy": ["100OneType", "100Y", "100B", "300Total"]
    },
    "200Total": {
        "Desc": "200 Total Pikmin",
        "Diff": 9,
        "Excludes": ["150R", "150OneType"],
        "Synergy": ["100Y", "100B", "100OneType"]
    },
    "300Total": {
        "Desc": "300 Total Pikmin",
        "Diff": 16,
        "Synergy": ["150R", "150OneType"]
    },

    //Pellet-related goals
    "1Pellet": {
        "Desc": "Collect a 1-Pellet of each color",
        "Diff": 2
    },
    "5Pellet": {
        "Desc": "Collect a 5-Pellet of each color",
        "Diff": 5,
        "Synergy": ["1Y", "VoRSnagret"]
    },
    "10Pellet": {
        "Desc": "Collect a 10-Pellet of each color",
        "Diff": 20,
        "Excludes": ["AM"],
        "Synergy": ["1Y"]
    },

    //Enemy-related goals
    "Dumples": {
        "Desc": "Defeat 8 Water Dumples",
        "Diff": 9
    },
    "Blowhogs": {
        "Desc": "Defeat 8 Blowhogs (of any kind)",
        "Diff": 8,
        "Synergy": ["FarVoR"]
    },
    "Dweevils": {
        "Desc": "Defeat 8 Dweevils (of any kind)",
        "Diff": 18,
        "Synergy": ["BK", "CoS"]
    },
    "ACBs": {
        "Desc": "Defeat 8 Cannon Beetles (of any kind)",
        "Diff": 20,
        "Synergy": ["FarVoR", "VoRACB", "SCx3"]
    },
    "Wollywogs": {
        "Desc": "Defeat 6 Wollywogs (of any kind)",
        "Diff": 11
    },
    "Snitchbugs": {
        "Desc": "Defeat 6 Snitchbugs (of any kind)",
        "Diff": 12
    },
    "Bulblaxes": {
        "Desc": "Defeat 2 Fiery Bulblaxes",
        "Diff": 16,
        "Excludes": ["TempMech"]
    },
    "Snagrets": {
        "Desc": "Defeat 2 Burrowing Snagrets",
        "Diff": 4,
        "Excludes": ["VoRSnagret"],
        "Synergy": ["SH"]
    },
    "Empire": {
        "Desc": "Defeat an Emperor and Empress Bulblax",
        "Diff": 13,
        "Excludes": ["Empress", "Gauge", "Emperor"],
        "Synergy": ["RushBoots"]
    },

    //Obstacle-related goals
    "ElecGates": {
        "Desc": "Destroy 2 electric gates",
        "Diff": 21,
        "Synergy": ["OI", "SREarly"]
    },
    "PoisonGates": {
        "Desc": "Destroy 2 poison gates",
        "Diff": 16,
        "Excludes": ["VoRPoisonGate", "AWGasPipes"]
    },

    //Themed treasure goals
    "4EK": {
        "Desc": "4 Explorer's Kit treasures",
        "Diff": 13,
        "Synergy": ["EK"]
    },
    "BuriedTreasure": {
        "Desc": "6 fully buried treasures",
        "Diff": 22,
        "Synergy": ["Gauge"]
    },
    "5AG": {
        "Desc": "5 above ground treasures",
        "Diff": 2,
        "Excludes": ["8AG"]
    },
    "8AG": {
        "Desc": "8 above ground treasures",
        "Diff": 13,
        "Excludes": ["5AG"],
        "Synergy": ["FarVoR"]
    },
    "HighValue": {
        "Desc": "7 treasures worth 160 Pokos or more",
        "Diff": 14
    },
    "LowValue": {
        "Desc": "6 treasures worth 25 Pokos or fewer",
        "Diff": 20,
        "Synergy": ["Feather+Clover"]
    },
    "100Value": {
        "Desc": "12 treasures worth exactly 100 Pokos",
        "Diff": 25
    },

    //Spray-related goals
    "1Spicy": {
        "Desc": "Discover Spicy Sprays",
        "Diff": 2,
        "Synergy": ["Spicy"]
    },
    "1Bitter": {
        "Desc": "Discover Bitter Sprays",
        "Diff": 5,
        "Synergy": ["Bitter"]
    },
    "8Spicy": {
        "Desc": "8 Spicy Sprays",
        "Diff": 10,
        "Excludes": ["8Bitter"],
        "Synergy": ["Spicy"]
    },
    "8Bitter": {
        "Desc": "8 Bitter Sprays",
        "Diff": 15,
        "Excludes": ["8Spicy"],
        "Synergy": ["Bitter", "FCEarly"]
    },
    "5Spicy5Bitter": {
        "Desc": "5 Spicy Sprays and 5 Bitter Sprays",
        "Diff": 17,
        "Synergy": ["Spicy", "Bitter"]
    },

    //Misc goals
    "Extinction": {
        "Desc": "Get a non-Red Pikmin Extinction",
        "Diff": 5
    },
    "Hazards": {
        "Desc": "Trigger all 3 hazard cutscenes (Poison, Fire, and Water)",
        "Diff": 6
    },
    "Mold": {
        "Desc": "Destroy a Burgeoning Spiderwort mold",
        "Diff": 3,
        "Synergy": ["PPBridges"]
    },
    "Mature": {
        "Desc": "Have a Leaf Pikmin in the ground mature into a Flower Pikmin",
        "Diff": 7
    },
    "Bulbmin": {
        "Desc": "Turn 15 Bulbmin into other types",
        "Diff": 18,
        "Synergy": ["CPB", "FCLate", "SmC"]
    },
    "Poisoned": {
        "Desc": "Defeat 5 enemies by poisoning them",
        "Diff": 4
    },
    "BuriedPikmin": {
        "Desc": "Leave 10 Pikmin buried underground in a cave",
        "Diff": 8,
        "Synergy": ["CPB"]
    },


    //Awakening Wood Above Ground
    "AWEnter": {
        "Desc": "Enter all 4 caves in AW",
        "Diff": 10,
        "Excludes": ["VoREnter", "PPEnter"]
    },
    "AWWogpoles": {
        "Desc": "Defeat all 3 Wogpoles in AW",
        "Diff": 3
    },
    "AWMums": {
        "Desc": "Defeat all 3 Creeping Chrysanthemums in AW",
        "Diff": 8
    },
    "AWBridges": {
        "Desc": "Build all 3 bridges in AW",
        "Diff": 14,
        "Synergy": ["AWGasPipes", "AirBrake"]
    },
    "AWGasPipes": {
        "Desc": "Destroy all 6 gas pipes in AW",
        "Diff": 24,
        "Excludes": ["PoisonGates"],
        "Synergy": ["AWBridges"]
    },
    "PBulb": {
        "Desc": "Pilgrim Bulb (AW)",
        "Diff": 1
    },
    "AirBrake": {
        "Desc": "Air Brake (AW)",
        "Diff": 16,
        "Synergy": ["AWBridges"]
    },

    //Hole of Beasts
    "Empress": {
        "Desc": "Defeat an Empress Bulblax",
        "Diff": 2,
        "Excludes": ["Gauge", "Empire"],
        "Synergy": ["RushBoots"]
    },
    "HoBMitites": {
        "Desc": "Defeat all 10 Mitites on HoB4",
        "Diff": 1
    },
    "Gauge": {
        "Desc": "Prototype Detector (HoB5)",
        "Diff": 2,
        "Excludes": ["Empress", "Empire"],
        "Synergy": ["BuriedTreasure", "HoBClear", "EK"]
    },
    "HoBClear": {
        "Desc": "Complete HoB",
        "Diff": 7,
        "Synergy": ["Gauge"]
    },

    //White Flower Garden
    "TToadstool": {
        "Desc": "Toxic Toadstool (WFG4)",
        "Diff": 1
    },

    //Snagret Hole
    "SH4Enemy": {
        "Desc": "Defeat all enemies on SH4",
        "Diff": 15,
        "Synergy": ["SH"]
    },
    "Marbles": {
        "Desc": "Crystallized Telekinesis, Telepathy, and Clairvoyance (SH1, 4, and 5)",
        "Diff": 15,
        "Excludes": ["Capacitors"],
        "Synergy": ["SH"]
    },
    "Feather+Clover": {
        "Desc": "Leviathan Feather (SH1) and Science Project (SH6)",
        "Diff": 14,
        "Synergy": ["SH", "LowValue"]
    },
    "SH6": {
        "Desc": "Clear SH6",
        "Diff": 23,
        "Synergy": ["SH"]
    },
    "Pileated": {
        "Desc": "Justice Alloy (SH7)",
        "Diff": 11,
        "Synergy": ["SH", "EK"]
    },

    //Bulblax Kingdom
    "CrystalCK": {
        "Desc": "Crystal Clover (BK1) and Crystal King (BK4)",
        "Diff": 11,
        "Synergy": ["BK"]
    },
    "RedCPB": {
        "Desc": "Make a Crimson Candypop Bud Wilt (BK6)",
        "Diff": 7,
        "Excludes": ["YellowCPB"],
        "Synergy": ["CPB"]
    },
    "Fossils": {
        "Desc": "Olimarnite Shell (BK3) and Colossal Fossil (BK6)",
        "Diff": 15,
        "Synergy": ["BK"]
    },
    "Emperor": {
        "Desc": "Forged Courage (BK7)",
        "Diff": 11,
        "Excludes": ["Empire"],
        "Synergy": ["BK", "EK"]
    },

    //Valley of Repose Above Ground
    "VoREnter": {
        "Desc": "Enter all 3 caves in VoR",
        "Diff": 11,
        "Excludes": ["AWEnter", "PPEnter"]
    },
    "VoRACB": {
        "Desc": "Defeat all 3 Cannon Beetles in VoR",
        "Diff": 14,
        "Synergy": ["FarVoR", "ACBs"]
    },
    "VoRSnagret": {
        "Desc": "Defeat the Burrowing Snagret in VoR",
        "Diff": 6,
        "Excludes": ["Snagrets"]
    },
    "VoRPoisonGate": {
        "Desc": "Destroy the poison gate in VoR",
        "Diff": 15,
        "Excludes": ["PoisonGates"]
    },
    "Ursidae": {
        "Desc": "Fossilized Ursidae (VoR)",
        "Diff": 9,
        "Synergy": ["FarVoR"]
    },
    "TempMech": {
        "Desc": "Temporal Mechanism (VoR)",
        "Diff": 19,
        "Excludes": ["Bulblaxes"],
        "Synergy": ["FarVoR"]
    },
    "Crown": {
        "Desc": "Unspeakable Wonder (VoR)",
        "Diff": 19,
        "Synergy": ["FarVoR"]
    },

    //Subterranean Complex
    "SCxCPB": {
        "Desc": "Make 5 Candypop Buds in SCx wilt",
        "Diff": 16,
        "Synergy": ["CPB"]
    },
    "Groinks": {
        "Desc": "Defeat 2 Gatling Groinks",
        "Diff": 13,
        "Excludes": ["ThirstActivator", "SCx7Bombs"],
        "Synergy": ["Capacitors"]
    },
    "SCx3": {
        "Desc": "Clear SCx3",
        "Diff": 16,
        "Synergy": ["SCxEarly", "ACBs"]
    },
    "SCx5": {
        "Desc": "Clear SCx5",
        "Diff": 16,
        "Synergy": ["SCxLate"]
    },
    "SCx6Enemy": {
        "Desc": "Defeat all enemies on SCx6",
        "Diff": 17,
        "Excludes": ["SCx6"],
        "Synergy": ["SCxLate"]
    },
    "SCx6": {
        "Desc": "Clear SCx6",
        "Diff": 19,
        "Excludes": ["SCx6Enemy"],
        "Synergy": ["SCxLate"]
    },
    "SCx7Bombs": {
        "Desc": "Activate every dormant Bomb Rock on SCx7",
        "Diff": 12,
        "Excludes": ["Groinks", "ThirstActivator"]
    },
    "ThirstActivator": {
        "Desc": "Thirst Activator [US] / Perfect Container [PAL] (SCx7)",
        "Diff": 11,
        "Excludes": ["Groinks", "SCx7Bombs"],
        "Synergy": ["SCxLate"]
    },
    "Capacitors": {
        "Desc": "Network Mainbrain, Vacuum Processor, and Indomitable CPU (SCx2, 6, and 7)",
        "Diff": 18,
        "Excludes": ["Marbles"],
        "Synergy": ["SCxLate", "Groinks"]
    },
    "MAL": {
        "Desc": "Stellar Orb (SCx9)",
        "Diff": 20,
        "Synergy": ["EK", "SCxLate"]
    },

    //Frontier Cavern
    "FCCPB": {
        "Desc": "Make 4 Candypop Buds in FC wilt",
        "Diff": 13,
        "Synergy": ["CPB"]
    },
    "FC3": {
        "Desc": "Clear FC3",
        "Diff": 15,
        "Excludes": ["Bells"],
        "Synergy": ["FCEarly"]
    },
    "FC4Enemy": {
        "Desc": "Defeat all enemies on FC4",
        "Diff": 17,
        "Excludes": ["Ornaments"],
        "Synergy": ["FCEarly"]
    },
    "Ornaments": {
        "Desc": "Essential Furnishing (FC1) and Innocence Lost (FC4)",
        "Diff": 11,
        "Excludes": ["FC4Enemy"],
        "Synergy": ["FCEarly"]
    },
    "FC6": {
        "Desc": "Clear FC6",
        "Diff": 21,
        "Synergy": ["FCLate"]
    },
    "Bells": {
        "Desc": "Danger Chime (FC3) and Spouse Alert (FC7)",
        "Diff": 14,
        "Excludes": ["FC3"],
        "Synergy": ["FCLate"]
    },
    "RushBoots": {
        "Desc": "Repugnant Appendage (FC8)",
        "Diff": 20,
        "Synergy": ["Empress", "Empire", "EK", "FCLate"]
    },

    //Perplexing Pool Above Ground
    "1Y": {
        "Desc": "Discover Yellow Pikmin",
        "Diff": 1,
        "Excludes": ["60Y"],
        "Synergy": ["5Pellet", "10Pellet"]
    },
    "PPEnter": {
        "Desc": "Enter all 4 caves in PP",
        "Diff": 20,
        "Excludes": ["AWEnter", "VoREnter"]
    },
    "PPCrawmads": {
        "Desc": "Defeat both Hermit Crawmads in PP",
        "Diff": 9
    },
    "PPLake": {
        "Desc": "Drain the Main Lake in PP",
        "Diff": 11
    },
    "PPBridges": {
        "Desc": "Build all 3 bridges in PP",
        "Diff": 13,
        "Synergy": ["Mold"]
    },
    "Scourge": {
        "Desc": "Impediment Scourge (PP)",
        "Diff": 7,
    },
    "AM": {
        "Desc": "Aquatic Mine (PP)",
        "Diff": 6,
        "Excludes": ["10Pellet"]
    },
    "OI": {
        "Desc": "Optical Illustration [US] / Abstract Masterpiece [PAL] (PP)",
        "Diff": 23,
        "Synergy": ["ElecGates"]
    },
    "OnionReplica": {
        "Desc": "Onion Replica (PP)",
        "Diff": 20
    },

    //Citadel of Spiders
    "CoS4Enemy": {
        "Desc": "Defeat all enemies on CoS4",
        "Diff": 14,
        "Synergy": ["CoS"]
    },
    "BLL": {
        "Desc": "The Key (CoS5)",
        "Diff": 10,
        "Synergy": ["CoS"]
    },

    //Glutton's Kitchen
    "Breadbugs": {
        "Desc": "Defeat 5 Breadbugs",
        "Diff": 18,
        "Synergy": ["GBB"]
    },
    "YellowCPB": {
        "Desc": "Make a Golden Candypop Bud wilt (GK3)",
        "Diff": 9,
        "Excludes": ["RedCPB"],
        "Synergy": ["CPB"]
    },
    "GK4": {
        "Desc": "Clear GK4",
        "Diff": 15,
        "Synergy": ["GK"]
    },
    "GBB": {
        "Desc": "Dream Material (GK6)",
        "Diff": 12,
        "Synergy": ["GK", "Food", "EK", "Breadbugs"]
    },

    //Submerged Castle
    "SmC3": {
        "Desc": "Clear SmC3",
        "Diff": 22,
        "Synergy": ["SmC"]
    },
    "SmC4": {
        "Desc": "Clear SmC4",
        "Diff": 24,
        "Synergy": ["SmC"]
    },
    "Wraith": {
        "Desc": "Professional Noisemaker (SmC5)",
        "Diff": 21,
        "Synergy": ["SmC", "EK"]
    },

    //Shower Room
    "Jellyfloats": {
        "Desc": "Defeat 4 Jellyfloats (of any kind)",
        "Diff": 18
    },
    "MirroredStage": {
        "Desc": "Mirrored Stage (SR3)",
        "Diff": 18,
        "Excludes": ["SR3"],
        "Synergy": ["SREarly"]
    },
    "SR3": {
        "Desc": "Clear SR3",
        "Diff": 19,
        "Excludes": ["MirroredStage"],
        "Synergy": ["SREarly"]
    },
    "Repository": {
        "Desc": "Endless Respository [US] / Permanent Container [PAL] (SR5)",
        "Diff": 21,
        "Excludes": ["SR5"],
        "Synergy": ["SRLate"]
    },
    "SR5": {
        "Desc": "Clear SR5",
        "Diff": 25,
        "Excludes": ["Repository"],
        "Synergy": ["SRLate"]
    },
    "SR6": {
        "Desc": "Clear SR6",
        "Diff": 23,
        "Synergy": ["SRLate"]
    },
    "Bloyster": {
        "Desc": "Amplified Amplifier (SR7)",
        "Diff": 19,
        "Synergy": ["SRLate", "EK"]
    },

    //Multi-cave / area goals
    "Chance": {
        "Desc": "Luck Wafer (HoB4) and Chance Totem (AW)",
        "Diff": 3,
        "Synergy": ["HoB"]
    },
    "Bottlecaps": {
        "Desc": "Quenching Emblem (EC1) and Drought Ender (WFG2)",
        "Diff": 3
    },
    "Strawberry": {
        "Desc": "Sunseed Berry (AW) and Combustion Berry (SH2)",
        "Diff": 4,
        "Synergy": ["SH"]
    },
    "Tape": {
        "Desc": "Superstick Textile (WFG3) and Exhausted Superstick (SCx1)",
        "Diff": 9,
        "Synergy": ["SCxEarly"]
    },
    "Gems": {
        "Desc": "Petrified Heart (WFG2), Tear Stone (BK2), and Regal Diamond (CoS5)",
        "Diff": 17,
        "Synergy": ["CoS", "BK"]
    },
    "Truffles": {
        "Desc": "King of Sweets (CoS4), Diet Doomer (SmC1), and Pale Passion (SmC4)",
        "Diff": 24,
        "Excludes": ["Batteries"],
        "Synergy": ["CoS", "SmC"]
    },
    "Shells": {
        "Desc": "Memorial Shell (CoS3) and Scrumptious Shell (SR3)",
        "Diff": 20,
        "Excludes": ["Ducks"],
        "Synergy": ["CoS", "SREarly"]
    },
    "Ducks": {
        "Desc": "Paradoxical Enigma (CoS2) and Rubber Ugly (SR6)",
        "Diff": 22,
        "Excludes": ["Shells"],
        "Synergy": ["CoS", "SRLate"]
    },
    "Batteries": {
        "Desc": "Durable Energy Cell (SR2) and Proton AA (SmC4)",
        "Diff": 25,
        "Excludes": ["Truffles"],
        "Synergy": ["SREarly", "SmC"]
    }
};
