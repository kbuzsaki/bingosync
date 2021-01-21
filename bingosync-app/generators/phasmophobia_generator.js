bingoGenerator = require("./generators/generator_bases/synerGen.js");

var bingoList = {
    "bingoTypes": {
        "Tiebreaker": {"Max": 1}
    },

    "maxScore": 9.5,

    // Individual map completions

    "CompTanglewood": {
        "Desc": "COMPLETE Tanglewood map",
        "Excludes": ["CompEdgefield", "CompRidgeview", "CompGrafton", "CompBleasdale", "CompHighSchool", "CompPrison", "CompAsylum"]
    },

    "CompEdgefield": {
        "Desc": "COMPLETE Edgefield map",
        "Excludes": ["CompTanglewood", "CompRidgeview", "CompGrafton", "CompBleasdale", "CompHighSchool", "CompPrison", "CompAsylum"]
    },
    
    "CompRidgeview": { 
        "Desc": "COMPLETE Ridgeview map",
        "Excludes": ["CompTanglewood", "CompEdgefield", "CompGrafton", "CompBleasdale", "CompHighSchool", "CompPrison", "CompAsylum"]
    },

    "CompGrafton": { 
        "Desc": "COMPLETE Grafton map",
        "Excludes": ["CompTanglewood", "CompEdgefield", "CompRidgeview", "CompBleasdale", "CompHighSchool", "CompPrison", "CompAsylum"]
    },

    "CompBleasdale": { 
        "Desc": "COMPLETE Bleasdale map",
        "Excludes": ["CompTanglewood", "CompEdgefield", "CompRidgeview", "CompGrafton", "CompHighSchool", "CompPrison", "CompAsylum"]
    },

    "CompHighSchool": { 
        "Desc": "COMPLETE High School map",
        "Excludes": ["CompTanglewood", "CompEdgefield", "CompRidgeview", "CompGrafton", "CompBleasdale", "CompPrison", "CompAsylum"]
    },

    "CompPrison": { 
        "Desc": "COMPLETE Prison map",
        "Excludes": ["CompTanglewood", "CompEdgefield", "CompRidgeview", "CompGrafton", "CompBleasdale", "CompHighSchool", "CompAsylum"]
    },

    "CompAsylum": { 
        "Desc": "COMPLETE Asylum map",
        "Excludes": ["CompTanglewood", "CompEdgefield", "CompRidgeview", "CompGrafton", "CompBleasdale", "CompHighSchool", "CompPrison"]
    },

    // Individual evidence item exclusions

    "DontEMF": { 
        "Desc": "DON'T USE EMF Reader"
    },

    "DontThermo": { 
        "Desc": "DON'T USE Thermometer"
    },

    "DontBox": { 
        "Desc": "DON'T USE Spirit Box"
    },

    "DontBook": {
        "Desc": "DON'T USE Writing Book"
    },

    "DontUV": { 
        "Desc": "DON'T USE UV Light"
    },
    
    "DontVideo": { 
        "Desc": "DON'T USE Video Camera"
    },

    // Ghost interactions with various room elements or items

    "GhostSalt": { 
        "Desc": "GHOST TRIGGERS Salt"
    },

    "GhostDoor": { 
        "Desc": "GHOST TRIGGERS door"
    },
    
    "GhostLight": { 
        "Desc": "GHOST TRIGGERS light switch"
    },

    "GhostSink": { 
        "Desc": "GHOST TRIGGERS sink (Dirty Water) or breaker"
    },

    "GhostMotion": { 
        "Desc": "GHOST TRIGGERS Motion Sensor"
    },

    "GhostSound": { 
        "Desc": "GHOST TRIGGERS Sound Sensor"
    },

    "GhostEMF": { 
        "Desc": "GHOST TRIGGERS EMF Reader"
    },

    // Ghost hunt survival restrictions

    "SurviveRoom": { 
        "Desc": "SURVIVE HUNT by hiding in a non-bathroom room",
        "Excludes": ["SurviveLoop", "SurviveNoLoop", "SurviveBathroom"]
    },

    "SurviveLoop": { 
        "Desc": "SURVIVE HUNT by looping it",
        "Excludes": ["SurviveRoom", "SurviveNoLoop", "SurviveBathroom"]
    },

    "SurviveNoLoop": { 
        "Desc": "SURVIVE HUNT without hiding or looping furniture",
        "Excludes": ["SurviveRoom", "SurviveLoop", "SurviveBathroom"]
    },

    "SurviveBathroom": { 
        "Desc": "SURVIVE HUNT by hiding in bathroom",
        "Excludes": ["SurviveRoom", "SurviveLoop", "SurviveNoLoop"]
    },

    // Required photos to take

    "PhotoGhost": { 
        "Desc": "TAKE PHOTO of the Ghost"
    },

    "PhotoBreaker": { 
        "Desc": "TAKE PHOTO of the breaker"
    },

    "PhotoEMF": { 
        "Desc": "TAKE PHOTO of the EMF Reader with a reading of 2 or greater"
    },

    "PhotoSalt": { 
        "Desc": "TAKE PHOTO of Salt (stepped in)"
    },

    "PhotoEvent": { 
        "Desc": "TAKE PHOTO of a Ghost Event (Interaction)"
    },

    "PhotoTelephone": { 
        "Desc": "TAKE PHOTO of a telephone"
    },

    "PhotoWaterBone": { 
        "Desc": "TAKE PHOTO of Dirty Water or the Bone"
    },

    "PhotoVan": { 
        "Desc": "TAKE PHOTO of the van from inside the map"
    },

    // Sanity requirements and restrictions

    "SanityNoPill": { 
        "Desc": "SANITY can't be increased with pills",
        "Excludes": ["Sanity100"]
    },

    "Sanity0": { 
        "Desc": "SANITY must reach 0"
    },

    "Sanity100": { 
        "Desc": "SANITY must finish at 100"
    },

    "SanityTossPills": { 
        "Desc": "SANITY Pills must all be thrown into the ghost room"
    },

    "SanityDark": { 
        "Desc": "SANITY dropped by spending 2 minutes in the dark before starting map"
    },

    // Evidence item restrictions or acquisition logic

    "EvidencePhoto": { 
        "Desc": "EVIDENCE items unlocked alphabetically by each labelled photo taken",
        "Excludes": ["Evidence1", "Evidence2", "Evidence3"]
    },

    "Evidence1": { 
        "Desc": "EVIDENCE items must be limited to 1 chosen item",
        "Excludes": ["EvidencePhoto", "Evidence2", "Evidence3"]
    },

    "Evidence2": { 
        "Desc": "EVIDENCE items must be limited to 2 chosen items",
        "Excludes": ["EvidencePhoto", "Evidence1", "Evidence3"]
    },

    "Evidence3": { 
        "Desc": "EVIDENCE items must be limited to 3 chosen items",
        "Excludes": ["EvidencePhoto", "Evidence1", "Evidence2"]
    },

    "EvidenceNoBoxBook": { 
        "Desc": "EVIDENCE items can't include Spirit Box or Writing Book",
        "Excludes": ["EvidenceNoEMFThermo"]
    },

    "EvidenceNoEMFThermo": { 
        "Desc": "EVIDENCE items can't include EMF Reader or Thermometer",
        "Excludes": ["EvidenceNoBoxBook"]
    },

    // Locating ghost room rules

    "LocateSensors": { 
        "Desc": "LOCATE GHOST with Sensors (Motion and Sound) only",
        "Excludes": ["LocateEMF", "LocateTalking"]
    },

    "LocateEMF": { 
        "Desc": "LOCATE GHOST with EMF Reader only",
        "Excludes": ["LocateSensors", "LocateTalking"]
    },

    "LocateTalking": { 
        "Desc": "LOCATE GHOST by talking to ghost only",
        "Excludes": ["LocateSensors", "LocateEMF"]
    },

    // Ghost hunts required totals 

    "Hunted0": { 
        "Desc": "HUNTED 0 times",
        "Excludes": ["Hunted1", "Hunted2", "Hunted3"]
    },

    "Hunted1": { 
        "Desc": "HUNTED 1 or more times",
        "Excludes": ["Hunted0", "Hunted2", "Hunted3"]
    },

    "Hunted2": { 
        "Desc": "HUNTED 2 or more times",
        "Excludes": ["Hunted0", "Hunted1", "Hunted3"]
    },

    "Hunted3": { 
        "Desc": "HUNTED 3 or more times",
        "Excludes": ["Hunted0", "Hunted1", "Hunted2"]
    },

    // Van trips required totals

    "Van0": { 
        "Desc": "ENTERING VAN forbidden unless leaving map",
        "Excludes": ["Van1", "Van2"]
    },

    "Van1": { 
        "Desc": "ENTERING VAN only 1 time unless leaving map",
        "Excludes": ["Van0", "Van2"]
    },

    "Van2": { 
        "Desc": "ENTERING VAN only 2 times unless leaving map",
        "Excludes": ["Van0", "Van1"]
    },

    // Map/House trips required totals

    "Map1": { 
        "Desc": "ENTERING MAP only once",
        "Excludes": ["Map2"]
    },

    "Map2": { 
        "Desc": "ENTERING MAP only twice",
        "Excludes": ["Map1"]
    },

    // Ghost room added objectives

    "RoomSmudge": { 
        "Desc": "GHOST ROOM smudged by using Smudge Sticks"
    },

    "RoomCandles": { 
        "Desc": "GHOST ROOM lit by 4 Candles"
    },

    "RoomMotion": { 
        "Desc": "GHOST ROOM triggers Motion Sensor"
    },

    "RoomSound": { 
        "Desc": "GHOST ROOM triggers Sound Sensor"
    },

    // Flashlight substitutions or removal

    "LightUV": { 
        "Desc": "FLASHLIGHTS are replaced by UV Lights",
        "Excludes": ["LightCandles", "LightNo"]
    },
    
    "LightCandles": { 
        "Desc": "FLASHLIGHTS are replaced by lit candles",
        "Excludes": ["LightUV", "LightNo"]
    },

    "LightNo": { 
        "Desc": "FLASHLIGHTS are forbidden",
        "Excludes": ["LightUV", "LightCandles"]
    },

    // Ghost name required speaking

    "NameMap": { 
        "Desc": "GHOST NAME said 3 times when first entering map"
    },

    "NameRoom": { 
        "Desc": "GHOST NAME said 3 times when first entering ghost room (after identified)"
    },

    "NameLeaving": { 
        "Desc": "GHOST NAME said 3 times in bathroom before leaving map"
    },

    // Various random objectives or limitations

    "BreakerNo": { 
        "Desc": "BREAKER stays off"
    },

    "LeaveTwo": { 
        "Desc": "LEAVE WITH 2 of any carryable item from house"
    },

    "RoomStay": { 
        "Desc": "GHOST ROOM must not be left after identified until the Ghost appears"
    }
};
