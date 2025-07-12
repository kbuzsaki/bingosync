bingoGenerator = require("./generators/generator_bases/synerGen.js");

var bingoList = {
  "bingoTypes": {
    "echoes": {
      "Max": 5
    },
    "stamps": {
      "Max": 2
    },
    "smoothies": {
      "Max": 3
    },
    "hearts": {
      "Max": 2
    },
    "dungeons": {
      "Max": 7
    },
    "waypoints": {
      "Max": 3
    },
    "quests": {
      "Max": 5
    },
    "crystals": {
      "Max": 2
    },
    "equipment": {
      "Max": 3
    },
    "overworld": {
      "Max": 6
    },
    "rupees": {
      "Max": 2
    },
    "specificEcho": {
      "Max": 3
    },
    "dummy2": {
      "Max": 2
    },
    "dummy4": {
      "Max": 2
    },
    "dummy8": {
      "Max": 2
    },
    "dummy17": {
      "Max": 2
    },
    "dummy18": {
      "Max": 2
    },
    "dummy19": {
      "Max": 2
    },
    "dummy20": {
      "Max": 1
    },
    "dummy21": {
      "Max": 1
    },
    "dummy22": {
      "Max": 2
    },
    "dummy23": {
      "Max": 1
    },
    "dummy24": {
      "Max": 1
    },
    "dummy25": {
      "Max": 2
    },
    "dummy26": {
      "Max": 1
    },
    "dummy27": {
      "Max": 2
    },
    "dummy29": {
      "Max": 1
    },
    "dummy30": {
      "Max": 2
    },
    "dummy31": {
      "Max": 1
    },
    "dummy32": {
      "Max": 1
    },
    "dummy34": {
      "Max": 2
    }
  },
  "maxScore": 0,
  "r2c29": {
    "Desc": "Collect 5 Stamps",
    "Diff": 1,
    "Types": [
      "stamps",
      "overworld",
      "dummy2"
    ]
  },
  "r3c29": {
    "Desc": "Aquire Link's Bow",
    "Diff": 7,
    "Types": [
      "dungeons"
    ]
  },
  "r4c29": {
    "Desc": "Close 2 Rifts",
    "Diff": 10,
    "Types": [
      "dungeons",
      "dummy4"
    ]
  },
  "r5c29": {
    "Desc": "Fully Activate The Fountain In Jabul Ruins",
    "Diff": 22,
    "Types": [
      "dungeons"
    ]
  },
  "r6c29": {
    "Desc": "Collect A Purple Rupee",
    "Diff": 3,
    "Types": [
      "rupees"
    ]
  },
  "r7c29": {
    "Desc": "Collect A Silver Rupee",
    "Diff": 21,
    "Types": [
      "rupees"
    ]
  },
  "r8c29": {
    "Desc": "Complete 3 Sidequests",
    "Diff": 3,
    "Types": [
      "quests",
      "dummy8"
    ]
  },
  "r9c29": {
    "Desc": "Complete \"Deliver The Grilled Fish!\" Sidequest",
    "Diff": 7,
    "Types": [
      "quests"
    ]
  },
  "r10c29": {
    "Desc": "Complete \"Getting It Twisted\" Sidequest",
    "Diff": 9,
    "Types": [
      "quests"
    ]
  },
  "r11c29": {
    "Desc": "Complete \"Glide Path Trailblazer\" Sidequest",
    "Diff": 18,
    "Types": [
      "quests"
    ]
  },
  "r12c29": {
    "Desc": "Complete \"Precious Treasure\" Sidequest",
    "Diff": 6,
    "Types": [
      "quests"
    ]
  },
  "r13c29": {
    "Desc": "Complete \"The Blocked Road\" Sidequest",
    "Diff": 1,
    "Types": [
      "quests"
    ]
  },
  "r14c29": {
    "Desc": "Complete \"The Flying Tile\" Sidequest",
    "Diff": 13,
    "Types": [
      "quests"
    ]
  },
  "r15c29": {
    "Desc": "Create ANY Golden Smoothie",
    "Diff": 9,
    "Types": [
      "smoothies"
    ]
  },
  "r16c29": {
    "Desc": "Defeat Any Boss As Zelda Without Echoes",
    "Diff": 25,
    "Types": [
      "dungeons"
    ]
  },
  "r17c29": {
    "Desc": "Discover 5 Cave Entrances",
    "Diff": 5,
    "Types": [
      "overworld",
      "dummy17"
    ]
  },
  "r18c29": {
    "Desc": "Discover 3 Dungeon Waypoints",
    "Diff": 12,
    "Types": [
      "dungeons",
      "waypoints",
      "dummy18"
    ]
  },
  "r19c29": {
    "Desc": "Discover 10 Overworld Waypoints",
    "Diff": 5,
    "Types": [
      "waypoints",
      "overworld",
      "dummy19"
    ]
  },
  "r20c29": {
    "Desc": "Discover 3 Shops",
    "Diff": 4,
    "Types": [
      "overworld",
      "dummy20"
    ]
  },
  "r21c29": {
    "Desc": "Drown 5 Unique Enemies (Not Echoes)",
    "Diff": 5,
    "Types": [
      "echoes",
      "dummy21"
    ]
  },
  "r22c29": {
    "Desc": "Learn 20 Echoes",
    "Diff": 4,
    "Types": [
      "echoes",
      "dummy22"
    ]
  },
  "r23c29": {
    "Desc": "Obtain 3 Equipment Items",
    "Diff": 16,
    "Types": [
      "equipment",
      "dummy23"
    ]
  },
  "r24c29": {
    "Desc": "Obtain 2 Heart Containers",
    "Diff": 8,
    "Types": [
      "hearts",
      "dummy24"
    ]
  },
  "r25c29": {
    "Desc": "Obtain 4 Heart Pieces",
    "Diff": 3,
    "Types": [
      "hearts",
      "dummy25"
    ]
  },
  "r26c29": {
    "Desc": "Obtain 7 Unique Smoothie Ingredients",
    "Diff": 10,
    "Types": [
      "smoothies",
      "dummy26"
    ]
  },
  "r27c29": {
    "Desc": "Obtain 10 Unusual Crystals",
    "Diff": 1,
    "Types": [
      "crystals",
      "dummy27"
    ]
  },
  "r28c29": {
    "Desc": "Obtain 5 Unusual Crystals From Under Rocks",
    "Diff": 4,
    "Types": [
      "crystals",
      "overworld",
      "dummy28"
    ]
  },
  "r29c29": {
    "Desc": "Open 5 Dungeon Chests",
    "Diff": 8,
    "Types": [
      "dungeons",
      "dummy29"
    ]
  },
  "r30c29": {
    "Desc": "Open 5 Overworld Chests",
    "Diff": 2,
    "Types": [
      "overworld",
      "dummy30"
    ]
  },
  "r31c29": {
    "Desc": "Possess 500 Or More Rupees",
    "Diff": 6,
    "Types": [
      "rupees",
      "dummy31"
    ]
  },
  "r32c29": {
    "Desc": "Read 5 Signs (Not Echoes)",
    "Diff": 4,
    "Types": [
      "overworld",
      "dummy32"
    ]
  },
  "r33c29": {
    "Desc": "Rescue The King",
    "Diff": 25,
    "Types": [
      "quests"
    ]
  },
  "r34c29": {
    "Desc": "Unlock 5 Unique Smoothie Recipies",
    "Diff": 2,
    "Types": [
      "smoothies",
      "dummy34"
    ]
  },
  "r35c29": {
    "Desc": "Use Drippitune In Gerudo Desert",
    "Diff": 21,
    "Types": [
      "echoes"
    ]
  },
  "r36c29": {
    "Desc": "Void Out In Lost Woods",
    "Diff": 2,
    "Types": [
      "overworld"
    ]
  },
  "r37c29": {
    "Desc": "Complete \"A Curious Child\" Sidequest",
    "Diff": 4,
    "Types": [
      "quests"
    ]
  },
  "r38c29": {
    "Desc": "Complete \"Runaway Horse\" Sidequest",
    "Diff": 5,
    "Types": [
      "quests"
    ]
  },
  "r39c29": {
    "Desc": "Complete \"Let's Play a Game\" Sidequest",
    "Diff": 16,
    "Types": [
      "quests"
    ]
  },
  "r40c29": {
    "Desc": "Complete \"Cuccos on the Loose\" Sidequest",
    "Diff": 12,
    "Types": [
      "quests"
    ]
  },
  "r41c29": {
    "Desc": "Complete \"The Firework Artist\" Sidequest",
    "Diff": 11,
    "Types": [
      "quests"
    ]
  },
  "r42c29": {
    "Desc": "Complete \"Glide Path\" Sidequest",
    "Diff": 11,
    "Types": [
      "quests"
    ]
  },
  "r43c29": {
    "Desc": "Complete \"The Rain-Making Monster\" Sidequest",
    "Diff": 11,
    "Types": [
      "quests"
    ]
  },
  "r44c29": {
    "Desc": "Complete \"Up a Wall\" Sidequest",
    "Diff": 4,
    "Types": [
      "quests"
    ]
  },
  "r45c29": {
    "Desc": "Complete \"The Zora Child's Fate\" Sidequest",
    "Diff": 11,
    "Types": [
      "quests"
    ]
  },
  "r46c29": {
    "Desc": "Complete \"Elusive Tumbleweeds\" Sidequest",
    "Diff": 9,
    "Types": [
      "quests"
    ]
  },
  "r47c29": {
    "Desc": "Complete \"Gerudo Tag Training\" Sidequest",
    "Diff": 9,
    "Types": [
      "quests"
    ]
  },
  "r48c29": {
    "Desc": "Complete \"Tornado Ghost?\" Sidequest",
    "Diff": 10,
    "Types": [
      "quests"
    ]
  },
  "r49c29": {
    "Desc": "Complete \"Out of Bubble Kelp\" Sidequest",
    "Diff": 11,
    "Types": [
      "quests"
    ]
  },
  "r2c30": {
    "Desc": "Collect 10 Stamps",
    "Diff": 7,
    "Types": [
      "stamps",
      "overworld",
      "dummy2"
    ]
  },
  "r4c30": {
    "Desc": "Close 3 Rifts",
    "Diff": 15,
    "Types": [
      "dungeons",
      "dummy4"
    ]
  },
  "r8c30": {
    "Desc": "Complete 6 Sidequests",
    "Diff": 9,
    "Types": [
      "quests",
      "dummy8"
    ]
  },
  "r17c30": {
    "Desc": "Discover 15 Cave Entrances",
    "Diff": 9,
    "Types": [
      "overworld",
      "dummy17"
    ]
  },
  "r18c30": {
    "Desc": "Discover 5 Dungeon Waypoints",
    "Diff": 17,
    "Types": [
      "dungeons",
      "waypoints",
      "dummy18"
    ]
  },
  "r19c30": {
    "Desc": "Discover 20 Overworld Waypoints",
    "Diff": 11,
    "Types": [
      "waypoints",
      "overworld",
      "dummy19"
    ]
  },
  "r20c30": {
    "Desc": "Discover 5 Shops",
    "Diff": 11,
    "Types": [
      "overworld",
      "dummy20"
    ]
  },
  "r21c30": {
    "Desc": "Drown 10 Unique Enemies (Not Echoes)",
    "Diff": 10,
    "Types": [
      "echoes",
      "dummy21"
    ]
  },
  "r22c30": {
    "Desc": "Learn 30 Echoes",
    "Diff": 8,
    "Types": [
      "echoes",
      "dummy22"
    ]
  },
  "r23c30": {
    "Desc": "Obtain 5 Equipment Items",
    "Diff": 22,
    "Types": [
      "equipment",
      "dummy23"
    ]
  },
  "r24c30": {
    "Desc": "Obtain 3 Heart Containers",
    "Diff": 12,
    "Types": [
      "hearts",
      "dummy24"
    ]
  },
  "r25c30": {
    "Desc": "Obtain 8 Heart Pieces",
    "Diff": 8,
    "Types": [
      "hearts",
      "dummy25"
    ]
  },
  "r26c30": {
    "Desc": "Obtain 10 Unique Smoothie Ingredients",
    "Diff": 14,
    "Types": [
      "smoothies",
      "dummy26"
    ]
  },
  "r27c30": {
    "Desc": "Obtain 20 Unusual Crystals",
    "Diff": 6,
    "Types": [
      "crystals",
      "dummy27"
    ]
  },
  "r28c30": {
    "Desc": "Obtain 10 Unusual Crystals From Under Rocks",
    "Diff": 17,
    "Types": [
      "crystals",
      "overworld",
      "dummy28"
    ]
  },
  "r29c30": {
    "Desc": "Open 10 Dungeon Chests",
    "Diff": 13,
    "Types": [
      "dungeons",
      "dummy29"
    ]
  },
  "r30c30": {
    "Desc": "Open 10 Overworld Chests",
    "Diff": 7,
    "Types": [
      "overworld",
      "dummy30"
    ]
  },
  "r31c30": {
    "Desc": "Possess 1000 Or More Rupees",
    "Diff": 16,
    "Types": [
      "rupees",
      "dummy31"
    ]
  },
  "r32c30": {
    "Desc": "Read 10 Signs (Not Echoes)",
    "Diff": 7,
    "Types": [
      "overworld",
      "dummy32"
    ]
  },
  "r34c30": {
    "Desc": "Unlock 10 Unique Smoothie Recipies",
    "Diff": 6,
    "Types": [
      "smoothies",
      "dummy34"
    ]
  },
  "r2c31": {
    "Desc": "Collect 15 Stamps",
    "Diff": 13,
    "Types": [
      "stamps",
      "overworld",
      "dummy2"
    ]
  },
  "r4c31": {
    "Desc": "Close 5 Rifts",
    "Diff": 24,
    "Types": [
      "dungeons",
      "dummy4"
    ]
  },
  "r8c31": {
    "Desc": "Complete 9 Sidequests",
    "Diff": 17,
    "Types": [
      "quests",
      "dummy8"
    ]
  },
  "r17c31": {
    "Desc": "Discover 25 Cave Entrances",
    "Diff": 12,
    "Types": [
      "overworld",
      "dummy17"
    ]
  },
  "r18c31": {
    "Desc": "Discover 7 Dungeon Waypoints",
    "Diff": 23,
    "Types": [
      "dungeons",
      "waypoints",
      "dummy18"
    ]
  },
  "r19c31": {
    "Desc": "Discover 35 Overworld Waypoints",
    "Diff": 22,
    "Types": [
      "waypoints",
      "overworld",
      "dummy19"
    ]
  },
  "r20c31": {
    "Desc": "Discover 7 Shops",
    "Diff": 20,
    "Types": [
      "overworld",
      "dummy20"
    ]
  },
  "r21c31": {
    "Desc": "Drown 15 Unique Enemies (Not Echoes)",
    "Diff": 15,
    "Types": [
      "echoes",
      "dummy21"
    ]
  },
  "r22c31": {
    "Desc": "Learn 40 Echoes",
    "Diff": 12,
    "Types": [
      "echoes",
      "dummy22"
    ]
  },
  "r25c31": {
    "Desc": "Obtain 12 Heart Pieces",
    "Diff": 13,
    "Types": [
      "hearts",
      "dummy25"
    ]
  },
  "r26c31": {
    "Desc": "Obtain 13 Unique Smoothie Ingredients",
    "Diff": 20,
    "Types": [
      "smoothies",
      "dummy26"
    ]
  },
  "r27c31": {
    "Desc": "Obtain 35 Unusual Crystals",
    "Diff": 11,
    "Types": [
      "crystals",
      "dummy27"
    ]
  },
  "r28c31": {
    "Desc": "Obtain 15 Unusual Crystals From Under Rocks",
    "Diff": 21,
    "Types": [
      "crystals",
      "overworld",
      "dummy28"
    ]
  },
  "r29c31": {
    "Desc": "Open 15 Dungeon Chests",
    "Diff": 17,
    "Types": [
      "dungeons",
      "dummy29"
    ]
  },
  "r30c31": {
    "Desc": "Open 25 Overworld Chests",
    "Diff": 14,
    "Types": [
      "overworld",
      "dummy30"
    ]
  },
  "r31c31": {
    "Desc": "Possess 2500 Or More Rupees",
    "Diff": 23,
    "Types": [
      "rupees",
      "dummy31"
    ]
  },
  "r32c31": {
    "Desc": "Read 15 Signs (Not Echoes)",
    "Diff": 12,
    "Types": [
      "overworld",
      "dummy32"
    ]
  },
  "r34c31": {
    "Desc": "Unlock 15 Unique Smoothie Recipies",
    "Diff": 15,
    "Types": [
      "smoothies",
      "dummy34"
    ]
  },
  "r2c32": {
    "Desc": "Collect 20 Stamps",
    "Diff": 19,
    "Types": [
      "stamps",
      "overworld",
      "dummy2"
    ]
  },
  "r8c32": {
    "Desc": "Complete 12 Sidequests",
    "Diff": 19,
    "Types": [
      "quests",
      "dummy8"
    ]
  },
  "r17c32": {
    "Desc": "Discover 35 Cave Entrances",
    "Diff": 19,
    "Types": [
      "overworld",
      "dummy17"
    ]
  },
  "r22c32": {
    "Desc": "Learn 50 Echoes",
    "Diff": 16,
    "Types": [
      "echoes",
      "dummy22"
    ]
  },
  "r25c32": {
    "Desc": "Obtain 20 Heart Pieces",
    "Diff": 18,
    "Types": [
      "hearts",
      "dummy25"
    ]
  },
  "r27c32": {
    "Desc": "Obtain 50 Unusual Crystals",
    "Diff": 25,
    "Types": [
      "crystals",
      "dummy27"
    ]
  },
  "r30c32": {
    "Desc": "Open 40 Overworld Chests",
    "Diff": 18,
    "Types": [
      "overworld",
      "dummy30"
    ]
  },
  "r34c32": {
    "Desc": "Unlock 20 Unique Smoothie Recipies",
    "Diff": 20,
    "Types": [
      "smoothies",
      "dummy34"
    ]
  },
  "r2c33": {
    "Desc": "Collect 24 Stamps",
    "Diff": 23,
    "Types": [
      "stamps",
      "overworld",
      "dummy2"
    ]
  },
  "r22c33": {
    "Desc": "Learn 60 Echoes",
    "Diff": 20,
    "Types": [
      "echoes",
      "dummy22"
    ]
  },
  "r25c33": {
    "Desc": "Obtain 24 Heart Pieces",
    "Diff": 24,
    "Types": [
      "hearts",
      "dummy25"
    ]
  },
  "r34c33": {
    "Desc": "Unlock 30 Unique Smoothie Recipies",
    "Diff": 24,
    "Types": [
      "smoothies",
      "dummy34"
    ]
  },
  "r2c1": {
    "Desc": "Learn the \"Albatrawl\" Echo",
    "Diff": 8,
    "Types": [
      "specificEcho",
      "echoes"
    ]
  },
  "r3c1": {
    "Desc": "Learn the \"Armos\" Echo",
    "Diff": 16,
    "Types": [
      "specificEcho",
      "echoes"
    ]
  },
  "r4c1": {
    "Desc": "Learn the \"Aruroda\" Echo",
    "Diff": 13,
    "Types": [
      "specificEcho",
      "echoes"
    ]
  },
  "r5c1": {
    "Desc": "Learn the \"Baby Gohma\" Echo",
    "Diff": 14,
    "Types": [
      "specificEcho",
      "echoes"
    ]
  },
  "r6c1": {
    "Desc": "Learn the \"Ball-and-Chain Trooper\" Echo",
    "Diff": 25,
    "Types": [
      "specificEcho",
      "echoes"
    ]
  },
  "r7c1": {
    "Desc": "Learn the \"Beakon\" Echo",
    "Diff": 15,
    "Types": [
      "specificEcho",
      "echoes"
    ]
  },
  "r8c1": {
    "Desc": "Learn the \"Beamos\" Echo",
    "Diff": 16,
    "Types": [
      "specificEcho",
      "echoes"
    ]
  },
  "r9c1": {
    "Desc": "Learn the \"Beetle\" Echo",
    "Diff": 16,
    "Types": [
      "specificEcho",
      "echoes"
    ]
  },
  "r10c1": {
    "Desc": "Learn the \"Beetle Mound\" Echo",
    "Diff": 16,
    "Types": [
      "specificEcho",
      "echoes"
    ]
  },
  "r11c1": {
    "Desc": "Learn the \"Bio Deku Baba\" Echo",
    "Diff": 13,
    "Types": [
      "specificEcho",
      "echoes"
    ]
  },
  "r12c1": {
    "Desc": "Learn the \"Biri\" Echo",
    "Diff": 14,
    "Types": [
      "specificEcho",
      "echoes"
    ]
  },
  "r13c1": {
    "Desc": "Learn the \"Bombfish\" Echo",
    "Diff": 14,
    "Types": [
      "specificEcho",
      "echoes"
    ]
  },
  "r14c1": {
    "Desc": "Learn the \"Boomerang Boarblin\" Echo",
    "Diff": 12,
    "Types": [
      "specificEcho",
      "echoes"
    ]
  },
  "r15c1": {
    "Desc": "Learn the \"Boomerang Boarblin Lv. 2\" Echo",
    "Diff": 12,
    "Types": [
      "specificEcho",
      "echoes"
    ]
  },
  "r16c1": {
    "Desc": "Learn the \"Boulder\" Echo",
    "Diff": 8,
    "Types": [
      "specificEcho",
      "echoes"
    ]
  },
  "r17c1": {
    "Desc": "Learn the \"Brazier\" Echo",
    "Diff": 3,
    "Types": [
      "specificEcho",
      "echoes"
    ]
  },
  "r18c1": {
    "Desc": "Learn the \"Buzz Blob\" Echo",
    "Diff": 15,
    "Types": [
      "specificEcho",
      "echoes"
    ]
  },
  "r19c1": {
    "Desc": "Learn the \"Caromadillo\" Echo",
    "Diff": 7,
    "Types": [
      "specificEcho",
      "echoes"
    ]
  },
  "r20c1": {
    "Desc": "Learn the \"Caromadillo Lv. 2\" Echo",
    "Diff": 15,
    "Types": [
      "specificEcho",
      "echoes"
    ]
  },
  "r21c1": {
    "Desc": "Learn the \"Cat Statue\" Echo",
    "Diff": 15,
    "Types": [
      "specificEcho",
      "echoes"
    ]
  },
  "r22c1": {
    "Desc": "Learn the \"Chompfin\" Echo",
    "Diff": 14,
    "Types": [
      "specificEcho",
      "echoes"
    ]
  },
  "r23c1": {
    "Desc": "Learn the \"Club Boarblin\" Echo",
    "Diff": 12,
    "Types": [
      "specificEcho",
      "echoes"
    ]
  },
  "r24c1": {
    "Desc": "Learn the \"Club Boarblin Lv. 2\" Echo",
    "Diff": 12,
    "Types": [
      "specificEcho",
      "echoes"
    ]
  },
  "r25c1": {
    "Desc": "Learn the \"Crawltula\" Echo",
    "Diff": 5,
    "Types": [
      "specificEcho",
      "echoes"
    ]
  },
  "r26c1": {
    "Desc": "Learn the \"Crow\" Echo",
    "Diff": 6,
    "Types": [
      "specificEcho",
      "echoes"
    ]
  },
  "r27c1": {
    "Desc": "Learn the \"Darknut\" Echo",
    "Diff": 7,
    "Types": [
      "specificEcho",
      "echoes"
    ]
  },
  "r28c1": {
    "Desc": "Learn the \"Darknut Lv. 2\" Echo",
    "Diff": 25,
    "Types": [
      "specificEcho",
      "echoes"
    ]
  },
  "r29c1": {
    "Desc": "Learn the \"Darknut Lv. 3\" Echo",
    "Diff": 18,
    "Types": [
      "specificEcho",
      "echoes"
    ]
  },
  "r30c1": {
    "Desc": "Learn the \"Decorative Shrub\" Echo",
    "Diff": 10,
    "Types": [
      "specificEcho",
      "echoes"
    ]
  },
  "r31c1": {
    "Desc": "Learn the \"Deku Baba\" Echo",
    "Diff": 14,
    "Types": [
      "specificEcho",
      "echoes"
    ]
  },
  "r32c1": {
    "Desc": "Learn the \"Deku Baba Lv. 2\" Echo",
    "Diff": 14,
    "Types": [
      "specificEcho",
      "echoes"
    ]
  },
  "r33c1": {
    "Desc": "Learn the \"Drippitune\" Echo",
    "Diff": 15,
    "Types": [
      "specificEcho",
      "echoes"
    ]
  },
  "r34c1": {
    "Desc": "Learn the \"Electric Wizzrobe\" Echo",
    "Diff": 15,
    "Types": [
      "specificEcho",
      "echoes"
    ]
  },
  "r35c1": {
    "Desc": "Learn the \"Elephant Statue\" Echo",
    "Diff": 14,
    "Types": [
      "specificEcho",
      "echoes"
    ]
  },
  "r36c1": {
    "Desc": "Learn the \"Fire Octo\" Echo",
    "Diff": 12,
    "Types": [
      "specificEcho",
      "echoes"
    ]
  },
  "r37c1": {
    "Desc": "Learn the \"Fire Wizzrobe\" Echo",
    "Diff": 15,
    "Types": [
      "specificEcho",
      "echoes"
    ]
  },
  "r38c1": {
    "Desc": "Learn the \"Firework\" Echo",
    "Diff": 16,
    "Types": [
      "specificEcho",
      "echoes"
    ]
  },
  "r39c1": {
    "Desc": "Learn the \"Flying Tile\" Echo",
    "Diff": 13,
    "Types": [
      "specificEcho",
      "echoes"
    ]
  },
  "r40c1": {
    "Desc": "Learn the \"Freezard\" Echo",
    "Diff": 17,
    "Types": [
      "specificEcho",
      "echoes"
    ]
  },
  "r41c1": {
    "Desc": "Learn the \"Gerudo Pot\" Echo",
    "Diff": 7,
    "Types": [
      "specificEcho",
      "echoes"
    ]
  },
  "r42c1": {
    "Desc": "Learn the \"Ghini\" Echo",
    "Diff": 19,
    "Types": [
      "specificEcho",
      "echoes"
    ]
  },
  "r43c1": {
    "Desc": "Learn the \"Ghini Lv. 2\" Echo",
    "Diff": 19,
    "Types": [
      "specificEcho",
      "echoes"
    ]
  },
  "r44c1": {
    "Desc": "Learn the \"Ghirro\" Echo",
    "Diff": 18,
    "Types": [
      "specificEcho",
      "echoes"
    ]
  },
  "r45c1": {
    "Desc": "Learn the \"Giant Goponga Flower\" Echo",
    "Diff": 14,
    "Types": [
      "specificEcho",
      "echoes"
    ]
  },
  "r46c1": {
    "Desc": "Learn the \"Gibdo\" Echo",
    "Diff": 17,
    "Types": [
      "specificEcho",
      "echoes"
    ]
  },
  "r47c1": {
    "Desc": "Learn the \"Gibdo Lv. 2\" Echo",
    "Diff": 17,
    "Types": [
      "specificEcho",
      "echoes"
    ]
  },
  "r48c1": {
    "Desc": "Learn the \"Goo Specter\" Echo",
    "Diff": 20,
    "Types": [
      "specificEcho",
      "echoes"
    ]
  },
  "r49c1": {
    "Desc": "Learn the \"Grilled Fish\" Echo",
    "Diff": 8,
    "Types": [
      "specificEcho",
      "echoes"
    ]
  },
  "r50c1": {
    "Desc": "Learn the \"Guay\" Echo",
    "Diff": 7,
    "Types": [
      "specificEcho",
      "echoes"
    ]
  },
  "r51c1": {
    "Desc": "Learn the \"Gustmaster\" Echo",
    "Diff": 22,
    "Types": [
      "specificEcho",
      "echoes"
    ]
  },
  "r52c1": {
    "Desc": "Learn the \"Hawk Statue\" Echo",
    "Diff": 14,
    "Types": [
      "specificEcho",
      "echoes"
    ]
  },
  "r53c1": {
    "Desc": "Learn the \"Hoarder\" Echo",
    "Diff": 15,
    "Types": [
      "specificEcho",
      "echoes"
    ]
  },
  "r54c1": {
    "Desc": "Learn the \"Holmill\" Echo",
    "Diff": 7,
    "Types": [
      "specificEcho",
      "echoes"
    ]
  },
  "r55c1": {
    "Desc": "Learn the \"Hydrozol\" Echo",
    "Diff": 7,
    "Types": [
      "specificEcho",
      "echoes"
    ]
  },
  "r56c1": {
    "Desc": "Learn the \"Hyrule Castle Pot\" Echo",
    "Diff": 6,
    "Types": [
      "specificEcho",
      "echoes"
    ]
  },
  "r57c1": {
    "Desc": "Learn the \"Ice Block\" Echo",
    "Diff": 19,
    "Types": [
      "specificEcho",
      "echoes"
    ]
  },
  "r58c1": {
    "Desc": "Learn the \"Ice Keese\" Echo",
    "Diff": 18,
    "Types": [
      "specificEcho",
      "echoes"
    ]
  },
  "r59c1": {
    "Desc": "Learn the \"Ice Octo\" Echo",
    "Diff": 18,
    "Types": [
      "specificEcho",
      "echoes"
    ]
  },
  "r60c1": {
    "Desc": "Learn the \"Ice Wizzrobe\" Echo",
    "Diff": 19,
    "Types": [
      "specificEcho",
      "echoes"
    ]
  },
  "r61c1": {
    "Desc": "Learn the \"Ignizol\" Echo",
    "Diff": 2,
    "Types": [
      "specificEcho",
      "echoes"
    ]
  },
  "r62c1": {
    "Desc": "Learn the \"Keese\" Echo",
    "Diff": 3,
    "Types": [
      "specificEcho",
      "echoes"
    ]
  },
  "r63c1": {
    "Desc": "Learn the \"Lava Rock\" Echo",
    "Diff": 16,
    "Types": [
      "specificEcho",
      "echoes"
    ]
  },
  "r64c1": {
    "Desc": "Learn the \"Leever\" Echo",
    "Diff": 17,
    "Types": [
      "specificEcho",
      "echoes"
    ]
  },
  "r65c1": {
    "Desc": "Learn the \"Lizalfos\" Echo",
    "Diff": 14,
    "Types": [
      "specificEcho",
      "echoes"
    ]
  },
  "r66c1": {
    "Desc": "Learn the \"Lizalfos Lv. 2\" Echo",
    "Diff": 16,
    "Types": [
      "specificEcho",
      "echoes"
    ]
  },
  "r67c1": {
    "Desc": "Learn the \"Lizalfos Lv. 3\" Echo",
    "Diff": 19,
    "Types": [
      "specificEcho",
      "echoes"
    ]
  },
  "r68c1": {
    "Desc": "Learn the \"Lynel\" Echo",
    "Diff": 16,
    "Types": [
      "specificEcho",
      "echoes"
    ]
  },
  "r69c1": {
    "Desc": "Learn the \"Meat\" Echo",
    "Diff": 2,
    "Types": [
      "specificEcho",
      "echoes"
    ]
  },
  "r70c1": {
    "Desc": "Learn the \"Mini-Moldorm\" Echo",
    "Diff": 12,
    "Types": [
      "specificEcho",
      "echoes"
    ]
  },
  "r71c1": {
    "Desc": "Learn the \"Moa\" Echo",
    "Diff": 17,
    "Types": [
      "specificEcho",
      "echoes"
    ]
  },
  "r72c1": {
    "Desc": "Learn the \"Mothula\" Echo",
    "Diff": 14,
    "Types": [
      "specificEcho",
      "echoes"
    ]
  },
  "r73c1": {
    "Desc": "Learn the \"Mothula Lv. 2\" Echo",
    "Diff": 14,
    "Types": [
      "specificEcho",
      "echoes"
    ]
  },
  "r74c1": {
    "Desc": "Learn the \"Needlefly\" Echo",
    "Diff": 8,
    "Types": [
      "specificEcho",
      "echoes"
    ]
  },
  "r75c1": {
    "Desc": "Learn the \"Octorok\" Echo",
    "Diff": 4,
    "Types": [
      "specificEcho",
      "echoes"
    ]
  },
  "r76c1": {
    "Desc": "Learn the \"Old Bed\" Echo",
    "Diff": 10,
    "Types": [
      "specificEcho",
      "echoes"
    ]
  },
  "r77c1": {
    "Desc": "Learn the \"Pathblade\" Echo",
    "Diff": 13,
    "Types": [
      "specificEcho",
      "echoes"
    ]
  },
  "r78c1": {
    "Desc": "Learn the \"Peahat\" Echo",
    "Diff": 10,
    "Types": [
      "specificEcho",
      "echoes"
    ]
  },
  "r79c1": {
    "Desc": "Learn the \"Piranha\" Echo",
    "Diff": 8,
    "Types": [
      "specificEcho",
      "echoes"
    ]
  },
  "r80c1": {
    "Desc": "Learn the \"Platboom\" Echo",
    "Diff": 13,
    "Types": [
      "specificEcho",
      "echoes"
    ]
  },
  "r81c1": {
    "Desc": "Learn the \"Poe\" Echo",
    "Diff": 14,
    "Types": [
      "specificEcho",
      "echoes"
    ]
  },
  "r82c1": {
    "Desc": "Learn the \"Pot\" Echo",
    "Diff": 3,
    "Types": [
      "specificEcho",
      "echoes"
    ]
  },
  "r83c1": {
    "Desc": "Learn the \"ReDead\" Echo",
    "Diff": 10,
    "Types": [
      "specificEcho",
      "echoes"
    ]
  },
  "r84c1": {
    "Desc": "Learn the \"Ribbitune\" Echo",
    "Diff": 15,
    "Types": [
      "specificEcho",
      "echoes"
    ]
  },
  "r85c1": {
    "Desc": "Learn the \"Rock\" Echo",
    "Diff": 3,
    "Types": [
      "specificEcho",
      "echoes"
    ]
  },
  "r86c1": {
    "Desc": "Learn the \"Rock Roast\" Echo",
    "Diff": 15,
    "Types": [
      "specificEcho",
      "echoes"
    ]
  },
  "r87c1": {
    "Desc": "Learn the \"Rope\" Echo",
    "Diff": 4,
    "Types": [
      "specificEcho",
      "echoes"
    ]
  },
  "r88c1": {
    "Desc": "Learn the \"Sand Crab\" Echo",
    "Diff": 6,
    "Types": [
      "specificEcho",
      "echoes"
    ]
  },
  "r89c1": {
    "Desc": "Learn the \"Sand Piranha\" Echo",
    "Diff": 7,
    "Types": [
      "specificEcho",
      "echoes"
    ]
  },
  "r90c1": {
    "Desc": "Learn the \"Sea Urchin\" Echo",
    "Diff": 2,
    "Types": [
      "specificEcho",
      "echoes"
    ]
  },
  "r91c1": {
    "Desc": "Learn the \"Sign\" Echo",
    "Diff": 1,
    "Types": [
      "specificEcho",
      "echoes"
    ]
  },
  "r92c1": {
    "Desc": "Learn the \"Snake Statue\" Echo",
    "Diff": 15,
    "Types": [
      "specificEcho",
      "echoes"
    ]
  },
  "r93c1": {
    "Desc": "Learn the \"Snomaul\" Echo",
    "Diff": 18,
    "Types": [
      "specificEcho",
      "echoes"
    ]
  },
  "r94c1": {
    "Desc": "Learn the \"Snowball\" Echo",
    "Diff": 19,
    "Types": [
      "specificEcho",
      "echoes"
    ]
  },
  "r95c1": {
    "Desc": "Learn the \"Soft Bed\" Echo",
    "Diff": 9,
    "Types": [
      "specificEcho",
      "echoes"
    ]
  },
  "r96c1": {
    "Desc": "Learn the \"Spark\" Echo",
    "Diff": 16,
    "Types": [
      "specificEcho",
      "echoes"
    ]
  },
  "r97c1": {
    "Desc": "Learn the \"Spear Moblin\" Echo",
    "Diff": 5,
    "Types": [
      "specificEcho",
      "echoes"
    ]
  },
  "r98c1": {
    "Desc": "Learn the \"Spear Moblin Lv. 2\" Echo",
    "Diff": 13,
    "Types": [
      "specificEcho",
      "echoes"
    ]
  },
  "r99c1": {
    "Desc": "Learn the \"Spiked Roller\" Echo",
    "Diff": 6,
    "Types": [
      "specificEcho",
      "echoes"
    ]
  },
  "r100c1": {
    "Desc": "Learn the \"Strandtula\" Echo",
    "Diff": 5,
    "Types": [
      "specificEcho",
      "echoes"
    ]
  },
  "r101c1": {
    "Desc": "Learn the \"Stuffed Toy\" Echo",
    "Diff": 13,
    "Types": [
      "specificEcho",
      "echoes"
    ]
  },
  "r102c1": {
    "Desc": "Learn the \"Sword Moblin\" Echo",
    "Diff": 7,
    "Types": [
      "specificEcho",
      "echoes"
    ]
  },
  "r103c1": {
    "Desc": "Learn the \"Sword Moblin Lv. 2\" Echo",
    "Diff": 13,
    "Types": [
      "specificEcho",
      "echoes"
    ]
  },
  "r104c1": {
    "Desc": "Learn the \"Sword Moblin Lv. 3\" Echo",
    "Diff": 20,
    "Types": [
      "specificEcho",
      "echoes"
    ]
  },
  "r105c1": {
    "Desc": "Learn the \"Tangler\" Echo",
    "Diff": 9,
    "Types": [
      "specificEcho",
      "echoes"
    ]
  },
  "r106c1": {
    "Desc": "Learn the \"Tangler Lv. 2\" Echo",
    "Diff": 13,
    "Types": [
      "specificEcho",
      "echoes"
    ]
  },
  "r107c1": {
    "Desc": "Learn the \"Tektite\" Echo",
    "Diff": 8,
    "Types": [
      "specificEcho",
      "echoes"
    ]
  },
  "r108c1": {
    "Desc": "Learn the \"Tektite Lv. 2\" Echo",
    "Diff": 13,
    "Types": [
      "specificEcho",
      "echoes"
    ]
  },
  "r109c1": {
    "Desc": "Learn the \"Temper Tweelus\" Echo",
    "Diff": 20,
    "Types": [
      "specificEcho",
      "echoes"
    ]
  },
  "r110c1": {
    "Desc": "Learn the \"Torch Slug\" Echo",
    "Diff": 12,
    "Types": [
      "specificEcho",
      "echoes"
    ]
  },
  "r111c1": {
    "Desc": "Learn the \"Tornado\" Echo",
    "Diff": 5,
    "Types": [
      "specificEcho",
      "echoes"
    ]
  },
  "r112c1": {
    "Desc": "Learn the \"Trampoline\" Echo",
    "Diff": 1,
    "Types": [
      "specificEcho",
      "echoes"
    ]
  },
  "r113c1": {
    "Desc": "Learn the \"Tweelus\" Echo",
    "Diff": 13,
    "Types": [
      "specificEcho",
      "echoes"
    ]
  },
  "r114c1": {
    "Desc": "Learn the \"Water Block\" Echo",
    "Diff": 14,
    "Types": [
      "specificEcho",
      "echoes"
    ]
  },
  "r115c1": {
    "Desc": "Learn the \"Wind Cannon\" Echo",
    "Diff": 12,
    "Types": [
      "specificEcho",
      "echoes"
    ]
  },
  "r116c1": {
    "Desc": "Learn the \"Wolfos\" Echo",
    "Diff": 18,
    "Types": [
      "specificEcho",
      "echoes"
    ]
  },
  "r117c1": {
    "Desc": "Learn the \"Wooden Box\" Echo",
    "Diff": 1,
    "Types": [
      "specificEcho",
      "echoes"
    ]
  },
  "r118c1": {
    "Desc": "Learn the \"Zirro\" Echo",
    "Diff": 13,
    "Types": [
      "specificEcho",
      "echoes"
    ]
  },
  "r119c1": {
    "Desc": "Learn the \"Zol\" Echo",
    "Diff": 2,
    "Types": [
      "specificEcho",
      "echoes"
    ]
  }
}
