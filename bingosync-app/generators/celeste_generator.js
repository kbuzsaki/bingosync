var bingoGenerator = require("./generators/generator_bases/srl_generator_v5.js");

var bingoList = 
[
  [
    {
      "name": "All Berries in Start of 1A (6)",
      "types": [
        "checkpoint_berries"
      ]
    },
    {
      "name": "Old Site Blue Heart",
      "types": [
        "earlygame",
        "blue_heart"
      ]
    },
    {
      "name": "Talk to Theo in Crossing",
      "types": [
        "earlygame",
        "cutscene"
      ]
    },
    {
      "name": "Complete 1A Start without dashing",
      "types": [
        "earlygame",
        "task"
      ]
    },
    {
      "name": "Forsaken City Cassette",
      "types": [
        "earlygame",
        "cassette"
      ]
    },
    {
      "name": "All Berries in Chasm (5)",
      "types": [
        "checkpoint_berries"
      ]
    },
    {
      "name": "Forsaken City Blue Heart",
      "types": [
        "earlygame",
        "blue_heart"
      ]
    },
    {
      "name": "Get a 1-Up in 1A",
      "types": [
        "earlygame",
        "1up"
      ]
    },
    {
      "name": "Complete 1A Start without jumping",
      "types": [
        "earlygame",
        "task"
      ]
    }
  ],
  [
    {
      "name": "Complete Chasm without dashing",
      "types": [
        "earlygame",
        "task"
      ]
    },
    {
      "name": "Get two 1-Ups",
      "types": [
        "1up"
      ]
    },
    {
      "name": "Complete Awake without dashing",
      "types": [
        "earlygame",
        "task"
      ]
    },
    {
      "name": "Talk to Theo in Awake",
      "types": [
        "earlygame",
        "cutscene"
      ]
    },
    {
      "name": "All Berries in Start of 2A (9)",
      "types": [
        "checkpoint_berries"
      ]
    },
    {
      "name": "All Berries in Awake (1)",
      "types": [
        "earlygame"
      ]
    },
    {
      "name": "10 Berries in 1A",
      "types": [
        "amount_berries"
      ]
    },
    {
      "name": "Old Site Cassette",
      "types": [
        "earlygame",
        "cassette"
      ]
    }
  ],
  [
    {
      "name": "5 Berries in 3 Chapters",
      "types": [
        "x_berries_in_x"
      ]
    },
    {
      "name": "Read the Poem in 2A",
      "types": [
        "earlygame"
      ]
    },
    {
      "name": "All Berries in Crossing (9)",
      "types": [
        "checkpoint_berries"
      ]
    },
    {
      "name": "Find Letter and PICO-8 in Huge Mess",
      "types": [
        "cutscene"
      ]
    },
    {
      "name": "10 Berries in 2A",
      "types": [
        "amount_berries"
      ]
    },
    {
      "name": "Get a 1-Up in 2 Chapters",
      "types": [
        "1up",
        "challenge"
      ]
    },
    {
      "name": "Grabless Start of 3A",
      "types": [
        "grabless"
      ]
    },
    {
      "name": "2 optional Theo cutscenes",
      "types": [
        "cutscene"
      ]
    },
    {
      "name": "2 Cassettes",
      "types": [
        "cassette"
      ]
    }
  ],
  [
    {
      "name": "Get a 1-Up in 2A",
      "types": [
        "1up"
      ]
    },
    {
      "name": "All Collectibles in 1A",
      "types": [
        "fullclear"
      ]
    },
    {
      "name": "Complete Crossing without dashing",
      "types": [
        "task",
        "challenge"
      ]
    },
    {
      "name": "Complete Shrine without dashing",
      "types": [
        "task",
        "midgame"
      ]
    },
    {
      "name": "Grabless Start of 4A",
      "types": [
        "grabless",
        "progress"
      ]
    },
    {
      "name": "All Berries in Intervention (8)",
      "types": [
        "checkpoint_berries"
      ]
    },
    {
      "name": "5 Berries in 4 Chapters",
      "types": [
        "x_berries_in_x"
      ]
    },
    {
      "name": "Get 5 Berries in PICO-8",
      "types": [
        "pico-8"
      ]
    },
    {
      "name": "Get a 1-Up in 4A",
      "types": [
        "1up",
        "progress"
      ]
    },
    {
      "name": "Old Site B-Side",
      "types": [
        "b-side"
      ]
    }
  ],
  [
    {
      "name": "Grabless 1A",
      "types": [
        "grabless"
      ]
    },
    {
      "name": "4 Winged Berries",
      "types": [
        "special_berries"
      ]
    },
    {
      "name": "3 Blue Hearts",
      "types": [
        "amount_hearts"
      ]
    },
    {
      "name": "Get three 1-Ups",
      "types": [
        "1up",
        "challenge"
      ]
    },
    {
      "name": "3 Winged Berries",
      "types": [
        "special_berries",
        "earlygame"
      ]
    },
    {
      "name": "Grabless 2A",
      "types": [
        "grabless"
      ]
    },
    {
      "name": "Reach Old Site in PICO-8",
      "types": [
        "pico-8"
      ]
    },
    {
      "name": "Forsaken City B-Side",
      "types": [
        "b-side"
      ]
    }
  ],
  [
    {
      "name": "Huge Mess: Chest \u2193 Books \u2191 Towel \u2192",
      "types": [
        "huge_mess_pathing"
      ]
    },
    {
      "name": "Blue and Red Heart in Forsaken City",
      "types": [
        "b-side"
      ]
    },
    {
      "name": "Celestial Resort Blue Heart",
      "types": [
        "blue_heart"
      ]
    },
    {
      "name": "Huge Mess: Chest \u2193 Towel \u2192 Books \u2191",
      "types": [
        "huge_mess_pathing"
      ]
    },
    {
      "name": "Blue and Red Heart in Old Site",
      "types": [
        "b-side"
      ]
    },
    {
      "name": "2 Seeded Berries",
      "types": [
        "special_berries",
        "midgame"
      ]
    },
    {
      "name": "Huge Mess: Towel \u2192 Books \u2191 Chest \u2193",
      "types": [
        "huge_mess_pathing"
      ]
    },
    {
      "name": "All Berries in Presidential Suite (3)",
      "types": [
        "checkpoint_berries"
      ]
    },
    {
      "name": "Talk to Theo in Elevator Shaft",
      "types": [
        "cutscene"
      ]
    },
    {
      "name": "Grabless Huge Mess",
      "types": [
        "grabless"
      ]
    }
  ],
  [
    {
      "name": "Golden Ridge Cassette",
      "types": [
        "cassette",
        "midgame"
      ]
    },
    {
      "name": "Read Diary in Elevator Shaft",
      "types": [
        "cutscene"
      ]
    },
    {
      "name": "Grabless Elevator Shaft",
      "types": [
        "grabless"
      ]
    },
    {
      "name": "All Berries in Start of 4A (8)",
      "types": [
        "checkpoint_berries",
        "midgame"
      ]
    },
    {
      "name": "Get a 1-Up in 3 Chapters",
      "types": [
        "1up",
        "challenge"
      ]
    },
    {
      "name": "Complete 3 A-Sides",
      "types": [
        "amount_chapters",
        "progress"
      ]
    },
    {
      "name": "All Collectibles in 2A",
      "types": [
        "fullclear"
      ]
    },
    {
      "name": "Golden Ridge Blue Heart",
      "types": [
        "blue_heart",
        "progress"
      ]
    },
    {
      "name": "2 Winged Berries in 2 Chapters",
      "types": [
        "special_berries"
      ]
    }
  ],
  [
    {
      "name": "Huge Mess: Books \u2191 Towel \u2192 Chest \u2193",
      "types": [
        "huge_mess_pathing"
      ]
    },
    {
      "name": "Jump on 10 Snowballs",
      "types": [
        "progress",
        "task"
      ]
    },
    {
      "name": "All Berries in Elevator Shaft (4)",
      "types": [
        "checkpoint_berries"
      ]
    },
    {
      "name": "Huge Mess: Books \u2191 Chest \u2193 Towel \u2192",
      "types": [
        "huge_mess_pathing"
      ]
    },
    {
      "name": "20 Berries",
      "types": [
        "amount_berries"
      ]
    },
    {
      "name": "5 Keys",
      "types": [
        "keys"
      ]
    },
    {
      "name": "All Berries in Huge Mess (7)",
      "types": [
        "checkpoint_berries"
      ]
    },
    {
      "name": "Huge Mess: Towel \u2192 Chest \u2193 Books \u2191",
      "types": [
        "huge_mess_pathing"
      ]
    },
    {
      "name": "Grabless Cliff Face",
      "types": [
        "grabless",
        "progress"
      ]
    },
    {
      "name": "All Berries in Cliff Face (5)",
      "types": [
        "checkpoint_berries",
        "progress"
      ]
    },
    {
      "name": "25 Berries",
      "types": [
        "amount_berries"
      ]
    }
  ],
  [
    {
      "name": "Grabless Presidential Suite",
      "types": [
        "grabless"
      ]
    },
    {
      "name": "4 Blue Hearts",
      "types": [
        "amount_hearts"
      ]
    },
    {
      "name": "5 Winged Berries",
      "types": [
        "special_berries"
      ]
    },
    {
      "name": "Find Theo\u0027s Phone in 5A",
      "types": [
        "cutscene",
        "progress"
      ]
    },
    {
      "name": "Celestial Resort Cassette",
      "types": [
        "cassette"
      ]
    },
    {
      "name": "5 Berries in 5 Chapters",
      "types": [
        "x_berries_in_x"
      ]
    },
    {
      "name": "3 Seeded Berries",
      "types": [
        "special_berries"
      ]
    },
    {
      "name": "Mirror Temple Cassette",
      "types": [
        "cassette",
        "progress"
      ]
    }
  ],
  [
    {
      "name": "Grabless Search",
      "types": [
        "grabless",
        "5a"
      ]
    },
    {
      "name": "4 Cassettes",
      "types": [
        "cassette"
      ]
    },
    {
      "name": "15 Berries in 4A",
      "types": [
        "amount_berries"
      ]
    },
    {
      "name": "Get a 1-Up in 5A",
      "types": [
        "1up",
        "midgame"
      ]
    },
    {
      "name": "Use 1 Binocular in 4 Chapters",
      "types": [
        "binoculars",
        "progress"
      ]
    },
    {
      "name": "Talk to Theo in Search",
      "types": [
        "cutscene",
        "5a"
      ]
    },
    {
      "name": "All Berries in Old Trail (7)",
      "types": [
        "checkpoint_berries"
      ]
    },
    {
      "name": "Get 2 Keys in 5B",
      "types": [
        "5b",
        "midgame",
        "keys"
      ]
    },
    {
      "name": "Grabless Unraveling",
      "types": [
        "grabless",
        "5a"
      ]
    },
    {
      "name": "3 Hearts and 3 Cassettes",
      "types": [
        "cassette"
      ]
    }
  ],
  [
    {
      "name": "Use 5 Binoculars in B-Sides",
      "types": [
        "binoculars"
      ]
    },
    {
      "name": "Get 10 Berries in PICO-8",
      "types": [
        "pico-8"
      ]
    },
    {
      "name": "Stun Oshiro 10 Times",
      "types": [
        "task"
      ]
    },
    {
      "name": "All Berries in Into the Core (1)",
      "types": [
        "core"
      ]
    },
    {
      "name": "Golden Ridge B-Side",
      "types": [
        "b-side"
      ]
    },
    {
      "name": "Grabless Depths",
      "types": [
        "grabless",
        "midgame"
      ]
    },
    {
      "name": "10 Berries in 3A",
      "types": [
        "amount_berries"
      ]
    },
    {
      "name": "Use 6 Binoculars in B-Sides",
      "types": [
        "binoculars"
      ]
    },
    {
      "name": "2 Keys in 2 Chapters",
      "types": [
        "keys"
      ]
    },
    {
      "name": "Mirror Temple B-Side",
      "types": [
        "5b",
        "progress"
      ]
    }
  ],
  [
    {
      "name": "All Berries in Start of 5A (12)",
      "types": [
        "checkpoint_berries"
      ]
    },
    {
      "name": "Complete 2 B-Sides",
      "types": [
        "b-side"
      ]
    },
    {
      "name": "Get the Key in Depths",
      "types": [
        "keys",
        "midgame"
      ]
    },
    {
      "name": "All Berries in Start of 3A (11)",
      "types": [
        "checkpoint_berries"
      ]
    },
    {
      "name": "Mirror Temple Blue Heart",
      "types": [
        "blue_heart"
      ]
    },
    {
      "name": "Hit a Kevin block from all 4 sides",
      "types": [
        "task",
        "progress"
      ]
    },
    {
      "name": "All Berries in Shrine (9)",
      "types": [
        "checkpoint_berries"
      ]
    },
    {
      "name": "15 Berries in 3A",
      "types": [
        "amount_berries"
      ]
    },
    {
      "name": "All Berries in Unraveling (1)",
      "types": [
        "5a"
      ]
    }
  ],
  [
    {
      "name": "Reflection Cutscene in Hollows",
      "types": [
        "cutscene",
        "progress"
      ]
    },
    {
      "name": "2 Blue and 2 Red Hearts",
      "types": [
        "b-side",
        "amount_hearts"
      ]
    },
    {
      "name": "Get the Orb in PICO-8",
      "types": [
        "pico-8"
      ]
    },
    {
      "name": "All Berries in Rescue (1)",
      "types": [
        "5a"
      ]
    },
    {
      "name": "Switch to Ice on the right of Into the Core",
      "types": [
        "core"
      ]
    },
    {
      "name": "Grabless Lake",
      "types": [
        "grabless",
        "progress"
      ]
    },
    {
      "name": "Get 1 Key in Power Source",
      "types": [
        "ch9",
        "keys"
      ]
    },
    {
      "name": "Reach Library (3B Checkpoint)",
      "types": [
        "3b"
      ]
    }
  ],
  [
    {
      "name": "35 Berries",
      "types": [
        "amount_berries"
      ]
    },
    {
      "name": "3 optional Theo cutscenes",
      "types": [
        "cutscene"
      ]
    },
    {
      "name": "Kill a Seeker",
      "types": [
        "seeker",
        "task",
        "progress"
      ]
    },
    {
      "name": "Only top route in Hollows",
      "types": [
        "task"
      ]
    },
    {
      "name": "40 Berries",
      "types": [
        "amount_berries"
      ]
    },
    {
      "name": "Get 1 Key in Search",
      "types": [
        "5a",
        "keys"
      ]
    },
    {
      "name": "Reflection Cassette",
      "types": [
        "cassette",
        "progress"
      ]
    },
    {
      "name": "Reflection Blue Heart",
      "types": [
        "blue_heart"
      ]
    },
    {
      "name": "Complete PICO-8",
      "types": [
        "pico-8"
      ]
    },
    {
      "name": "15 Berries in 2 Chapters",
      "types": [
        "x_berries_in_x"
      ]
    }
  ],
  [
    {
      "name": "All Berries in Depths (11)",
      "types": [
        "checkpoint_berries"
      ]
    },
    {
      "name": "Get 2 Keys in Power Source",
      "types": [
        "ch9",
        "keys"
      ]
    },
    {
      "name": "Complete 2 A-Sides and 2 B-Sides",
      "types": [
        "b-side"
      ]
    },
    {
      "name": "All Berries in Hot and Cold (3)",
      "types": [
        "checkpoint_berries",
        "core"
      ]
    },
    {
      "name": "Blue and Red Heart in Golden Ridge",
      "types": [
        "b-side"
      ]
    },
    {
      "name": "All Berries in Search (6)",
      "types": [
        "checkpoint_berries",
        "5a"
      ]
    },
    {
      "name": "5 Cassettes",
      "types": [
        "cassette"
      ]
    },
    {
      "name": "Use 5 Binoculars in Farewell",
      "types": [
        "ch9",
        "binoculars"
      ]
    },
    {
      "name": "Stun Seekers 15 Times",
      "types": [
        "seeker",
        "task"
      ]
    },
    {
      "name": "Mirror Temple A-Side",
      "types": [
        "5a"
      ]
    }
  ],
  [
    {
      "name": "Use 7 Binoculars",
      "types": [
        "binoculars"
      ]
    },
    {
      "name": "5 Hearts",
      "types": [
        "amount_hearts"
      ]
    },
    {
      "name": "20 Berries in 5A",
      "types": [
        "amount_berries"
      ]
    },
    {
      "name": "Get 2 Keys in Search",
      "types": [
        "5a",
        "keys"
      ]
    },
    {
      "name": "Use 8 Binoculars",
      "types": [
        "binoculars"
      ]
    },
    {
      "name": "Celestial Resort B-Side",
      "types": [
        "3b"
      ]
    },
    {
      "name": "Only bottom route in Hollows",
      "types": [
        "task"
      ]
    },
    {
      "name": "Use 2 Binoculars in 3 Chapters",
      "types": [
        "binoculars"
      ]
    },
    {
      "name": "Get 15 Berries in PICO-8",
      "types": [
        "pico-8",
        "challenge"
      ]
    },
    {
      "name": "Get 3 Keys in Search",
      "types": [
        "5a",
        "keys"
      ]
    }
  ],
  [
    {
      "name": "6 Winged Berries",
      "types": [
        "special_berries"
      ]
    },
    {
      "name": "Get 3 Keys in Power Source",
      "types": [
        "ch9",
        "keys"
      ]
    },
    {
      "name": "Kill 2 Different Seekers",
      "types": [
        "seeker",
        "task"
      ]
    },
    {
      "name": "Use 1 Binocular in 5 Chapters",
      "types": [
        "binoculars"
      ]
    },
    {
      "name": "10 Berries in 3 Chapters",
      "types": [
        "x_berries_in_x"
      ]
    },
    {
      "name": "7 Winged Berries",
      "types": [
        "special_berries"
      ]
    },
    {
      "name": "Get 4 Keys in Power Source",
      "types": [
        "ch9",
        "keys"
      ]
    },
    {
      "name": "Kill 3 Different Seekers",
      "types": [
        "seeker",
        "task"
      ]
    },
    {
      "name": "4 Hearts and 4 Cassettes",
      "types": [
        "cassette"
      ]
    }
  ],
  [
    {
      "name": "Complete 3 B-Sides",
      "types": [
        "amount_chapters"
      ]
    },
    {
      "name": "5 Blue Hearts",
      "types": [
        "amount_hearts"
      ]
    },
    {
      "name": "Stun Seekers 20 Times",
      "types": [
        "seeker",
        "task"
      ]
    },
    {
      "name": "Grabless Hollows",
      "types": [
        "grabless"
      ]
    },
    {
      "name": "15 Berries in 3 Chapters",
      "types": [
        "x_berries_in_x"
      ]
    },
    {
      "name": "3 Blue and 3 Red Hearts",
      "types": [
        "amount_chapters",
        "amount_hearts"
      ]
    },
    {
      "name": "Easteregg Room in Reflection",
      "types": [
        "task",
        "6a"
      ]
    },
    {
      "name": "Complete 4 A-Sides",
      "types": [
        "amount_chapters"
      ]
    },
    {
      "name": "Grabless Power Source",
      "types": [
        "grabless",
        "ch9"
      ]
    }
  ],
  [
    {
      "name": "All Berries in 0M (4)",
      "types": [
        "progress"
      ]
    },
    {
      "name": "45 Berries",
      "types": [
        "amount_berries"
      ]
    },
    {
      "name": "Reach Rock Bottom (6A/6B Checkpoint)",
      "types": [
        "lategame",
        "6a",
        "6b"
      ]
    },
    {
      "name": "Blue and Red Heart in Mirror Temple",
      "types": [
        "5b"
      ]
    },
    {
      "name": "Use All Binoculars in 500M (3)",
      "types": [
        "binoculars",
        "progress"
      ]
    },
    {
      "name": "All Berries in Heart of the Mountain (1)",
      "types": [
        "core"
      ]
    },
    {
      "name": "50 Berries",
      "types": [
        "amount_berries"
      ]
    },
    {
      "name": "Grabless Rock Bottom",
      "types": [
        "grabless"
      ]
    },
    {
      "name": "Use 2 Binoculars in 4 Chapters",
      "types": [
        "binoculars"
      ]
    },
    {
      "name": "All Collectibles in 4A",
      "types": [
        "fullclear"
      ]
    }
  ],
  [
    {
      "name": "10 Berries in 4 Chapters",
      "types": [
        "x_berries_in_x"
      ]
    },
    {
      "name": "8 Winged Berries",
      "types": [
        "special_berries"
      ]
    },
    {
      "name": "Complete 3 A-Sides and 3 B-Sides",
      "types": [
        "amount_chapters"
      ]
    },
    {
      "name": "3 Gems in The Summit",
      "types": [
        "gems"
      ]
    },
    {
      "name": "5 Berries in 8A",
      "types": [
        "core",
        "amount_berries"
      ]
    },
    {
      "name": "Grabless 3A",
      "types": [
        "grabless"
      ]
    },
    {
      "name": "9 Winged Berries",
      "types": [
        "special_berries"
      ]
    },
    {
      "name": "All Collectibles in 3A",
      "types": [
        "fullclear"
      ]
    },
    {
      "name": "0M and 500M Gems",
      "types": [
        "gems",
        "progress"
      ]
    },
    {
      "name": "Reflection A-Side",
      "types": [
        "lategame",
        "6a"
      ]
    },
    {
      "name": "Reach the Orb in Heart of the Mountain",
      "types": [
        "core"
      ]
    }
  ],
  [
    {
      "name": "20 Berries in 7A",
      "types": [
        "lategame"
      ]
    },
    {
      "name": "6 Hearts",
      "types": [
        "amount_hearts"
      ]
    },
    {
      "name": "Use 9 Binoculars",
      "types": [
        "binoculars"
      ]
    },
    {
      "name": "All Berries in 500M (6)",
      "types": [
        "checkpoint_berries"
      ]
    },
    {
      "name": "Winged Golden Berry",
      "types": [
        "challenge"
      ]
    },
    {
      "name": "All 4 optional Theo cutscenes",
      "types": [
        "cutscene"
      ]
    },
    {
      "name": "7 Hearts",
      "types": [
        "amount_hearts"
      ]
    },
    {
      "name": "Use 10 Binoculars",
      "types": [
        "binoculars"
      ]
    },
    {
      "name": "All Berries in 1000M (6)",
      "types": [
        "lategame"
      ]
    },
    {
      "name": "Grabless 5A",
      "types": [
        "grabless",
        "5a"
      ]
    }
  ],
  [
    {
      "name": "Use 5 Binoculars in The Summit",
      "types": [
        "binoculars"
      ]
    },
    {
      "name": "65 Berries",
      "types": [
        "amount_berries",
        "big_berries"
      ]
    },
    {
      "name": "5 Keys in 2 Chapters",
      "types": [
        "keys"
      ]
    },
    {
      "name": "4 Gems in The Summit",
      "types": [
        "gems",
        "lategame"
      ]
    },
    {
      "name": "Use all Binoculars in 1000M (4)",
      "types": [
        "binoculars"
      ]
    },
    {
      "name": "75 Berries",
      "types": [
        "amount_berries",
        "big_berries"
      ]
    },
    {
      "name": "The Summit Cassette",
      "types": [
        "cassette"
      ]
    },
    {
      "name": "Blue and Red Heart in Celestial Resort",
      "types": [
        "3b"
      ]
    },
    {
      "name": "1000M and 1500M Gems",
      "types": [
        "gems",
        "lategame"
      ]
    },
    {
      "name": "10 Berries in 5 Chapters",
      "types": [
        "x_berries_in_x"
      ]
    },
    {
      "name": "5 Keys in 2 Chapters",
      "types": [
        "keys"
      ]
    }
  ],
  [
    {
      "name": "All Berries in 1500M (8)",
      "types": [
        "lategame"
      ]
    },
    {
      "name": "Complete 4 B-Sides",
      "types": [
        "amount_chapters"
      ]
    },
    {
      "name": "Reflection B-Side",
      "types": [
        "6b"
      ]
    },
    {
      "name": "5 Gems in The Summit",
      "types": [
        "gems",
        "lategame"
      ]
    },
    {
      "name": "Get 5 Keys in Power Source",
      "types": [
        "ch9",
        "keys"
      ]
    },
    {
      "name": "All Berries in 2000M (8)",
      "types": [
        "lategame"
      ]
    },
    {
      "name": "15 Berries in 4 Chapters",
      "types": [
        "x_berries_in_x",
        "big_berries"
      ]
    },
    {
      "name": "2000M and 2500M Gems",
      "types": [
        "gems",
        "lategame"
      ]
    },
    {
      "name": "Reach an Intro Car in Farewell",
      "types": [
        "ch9",
        "task",
        "challenge"
      ]
    },
    {
      "name": "4 Seeded Berries",
      "types": [
        "special_berries",
        "lategame"
      ]
    }
  ],
  [
    {
      "name": "All Berries in 2500M (8)",
      "types": [
        "lategame"
      ]
    },
    {
      "name": "Blue and Red Heart in Reflection",
      "types": [
        "6b"
      ]
    },
    {
      "name": "Use 2 Binoculars in 5 Chapters",
      "types": [
        "binoculars"
      ]
    },
    {
      "name": "35 Berries in 7A",
      "types": [
        "lategame"
      ]
    },
    {
      "name": "Complete 5 A-Sides",
      "types": [
        "amount_chapters"
      ]
    },
    {
      "name": "Reach 2000M (7B Checkpoint)",
      "types": []
    },
    {
      "name": "All Collectibles in 5A",
      "types": [
        "fullclear"
      ]
    },
    {
      "name": "All Flags in 3000M",
      "types": [
        "lategame",
        "task"
      ]
    },
    {
      "name": "Core Blue Heart",
      "types": [
        "core"
      ]
    }
  ],
  [
    {
      "name": "100 Berries",
      "types": [
        "amount_berries",
        "big_berries"
      ]
    },
    {
      "name": "Reach Event Horizon (FW Checkpoint)",
      "types": [
        "ch9"
      ]
    },
    {
      "name": "All Collectibles in 8A",
      "types": [
        "core",
        "fullclear"
      ]
    },
    {
      "name": "The Summit Blue Heart",
      "types": [
        "gems",
        "blue_heart"
      ]
    },
    {
      "name": "All Berries in 3000M (7)",
      "types": [
        "lategame"
      ]
    },
    {
      "name": "The Summit B-Side",
      "types": []
    },
    {
      "name": "Visit the Bird\u0027s Nest in Epilogue",
      "types": [
        "lategame",
        "task"
      ]
    },
    {
      "name": "Complete 5 B-Sides",
      "types": [
        "amount_chapters"
      ]
    },
    {
      "name": "15 Berries in 5 Chapters",
      "types": [
        "x_berries_in_x"
      ]
    }
  ]
];
