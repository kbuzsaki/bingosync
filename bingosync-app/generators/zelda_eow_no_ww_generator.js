bingoGenerator = require("./generators/generator_bases/synerGen.js");

var bingoList = {
  "bingoTypes": {
    "echoes": {
      "Max": 4
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
    "outfits": {
      "Max": 3
    },
    "overworld": {
      "Max": 5
    },
    "other": {
      "Max": 1
    },
    "dummy2": {
      "Max": 2
    },
    "dummy7": {
      "Max": 2
    },
    "dummy8": {
      "Max": 2
    },
    "dummy9": {
      "Max": 1
    },
    "dummy11": {
      "Max": 2
    },
    "dummy12": {
      "Max": 1
    },
    "dummy13": {
      "Max": 1
    },
    "dummy14": {
      "Max": 2
    },
    "dummy16": {
      "Max": 2
    },
    "dummy17": {
      "Max": 2
    },
    "dummy19": {
      "Max": 2
    },
    "dummy23": {
      "Max": 2
    },
    "dummy24": {
      "Max": 2
    },
    "dummy28": {
      "Max": 2
    },
    "dummy29": {
      "Max": 2
    },
    "dummy30": {
      "Max": 1
    },
    "dummy39": {
      "Max": 1
    },
    "dummy40": {
      "Max": 1
    }
  },
  "maxScore": 0,
  "r2c29": {
    "Desc": "Learn 10 Echoes",
    "Diff": 1,
    "Types": [
      "echoes",
      "dummy2"
    ]
  },
  "r3c29": {
    "Desc": "Learn \"Spiked Roller\" Echo",
    "Diff": 5,
    "Types": [
      "echoes"
    ]
  },
  "r4c29": {
    "Desc": "Learn \"Mothula\" Echo",
    "Diff": 17,
    "Types": [
      "echoes"
    ]
  },
  "r5c29": {
    "Desc": "Learn \"Rock Roast\" Echo",
    "Diff": 15,
    "Types": [
      "echoes"
    ]
  },
  "r6c29": {
    "Desc": "Learn \"Soft Bed\" Echo",
    "Diff": 3,
    "Types": [
      "echoes"
    ]
  },
  "r7c29": {
    "Desc": "Collect 5 Stamps",
    "Diff": 1,
    "Types": [
      "stamps",
      "overworld",
      "dummy7"
    ]
  },
  "r8c29": {
    "Desc": "Unlock 5 Unique Smoothie Recipies",
    "Diff": 2,
    "Types": [
      "smoothies",
      "dummy8"
    ]
  },
  "r9c29": {
    "Desc": "Obtain 7 Unique Smoothie Ingredients",
    "Diff": 10,
    "Types": [
      "smoothies",
      "dummy9"
    ]
  },
  "r10c29": {
    "Desc": "Create ANY Golden Smoothie",
    "Diff": 9,
    "Types": [
      "smoothies"
    ]
  },
  "r11c29": {
    "Desc": "Obtain 4 Heart Pieces",
    "Diff": 3,
    "Types": [
      "hearts",
      "dummy11"
    ]
  },
  "r12c29": {
    "Desc": "Obtain 2 Heart Containers",
    "Diff": 4,
    "Types": [
      "hearts",
      "dummy12"
    ]
  },
  "r13c29": {
    "Desc": "Open 5 Dungeon Chests",
    "Diff": 8,
    "Types": [
      "dungeons",
      "dummy13"
    ]
  },
  "r14c29": {
    "Desc": "Close 2 Rifts",
    "Diff": 10,
    "Types": [
      "dungeons",
      "dummy14"
    ]
  },
  "r15c29": {
    "Desc": "Aquire Link's Bow",
    "Diff": 7,
    "Types": [
      "dungeons"
    ]
  },
  "r16c29": {
    "Desc": "Discover 3 Dungeon Waypoints",
    "Diff": 12,
    "Types": [
      "dungeons",
      "waypoints",
      "dummy16"
    ]
  },
  "r17c29": {
    "Desc": "Discover 10 Overworld Waypoints",
    "Diff": 5,
    "Types": [
      "waypoints",
      "overworld",
      "dummy17"
    ]
  },
  "r18c29": {
    "Desc": "Rescue The King",
    "Diff": 25,
    "Types": [
      "quests"
    ]
  },
  "r19c29": {
    "Desc": "Complete 3 Sidequests",
    "Diff": 3,
    "Types": [
      "quests",
      "dummy19"
    ]
  },
  "r20c29": {
    "Desc": "Complete \"Deliver The Grilled Fish!\" Sidequest",
    "Diff": 7,
    "Types": [
      "quests"
    ]
  },
  "r21c29": {
    "Desc": "Complete \"The Flying Tile\" Sidequest",
    "Diff": 13,
    "Types": [
      "quests"
    ]
  },
  "r22c29": {
    "Desc": "Complete \"Getting It Twisted\" Sidequest",
    "Diff": 10,
    "Types": [
      "quests"
    ]
  },
  "r23c29": {
    "Desc": "Obtain 10 Might Crystals",
    "Diff": 3,
    "Types": [
      "crystals",
      "dummy23"
    ]
  },
  "r24c29": {
    "Desc": "Obtain 3 Equipment Items",
    "Diff": 6,
    "Types": [
      "outfits",
      "dummy24"
    ]
  },
  "r25c29": {
    "Desc": "Become Catgirl",
    "Diff": 9,
    "Types": [
      "outfits",
      "quests"
    ]
  },
  "r26c29": {
    "Desc": "Obtain Horseriding Outfit",
    "Diff": 8,
    "Types": [
      "outfits",
      "quests"
    ]
  },
  "r27c29": {
    "Desc": "Void Out In Lost Woods",
    "Diff": 2,
    "Types": [
      "overworld"
    ]
  },
  "r28c29": {
    "Desc": "Open 5 Overworld Chests",
    "Diff": 2,
    "Types": [
      "overworld",
      "dummy28"
    ]
  },
  "r29c29": {
    "Desc": "Discover 5 Cave Entrances",
    "Diff": 4,
    "Types": [
      "overworld",
      "dummy29"
    ]
  },
  "r30c29": {
    "Desc": "Discover 3 Shops",
    "Diff": 4,
    "Types": [
      "overworld",
      "dummy30"
    ]
  },
  "r31c29": {
    "Desc": "Defeat Any Boss (Not Ganon) Without Echoes",
    "Diff": 21,
    "Types": [
      "dungeons"
    ]
  },
  "r32c29": {
    "Desc": "Learn \"Sword Moblin Lvl. 3\" Echo",
    "Diff": 16,
    "Types": [
      "echoes"
    ]
  },
  "r33c29": {
    "Desc": "Complete \"The Blocked Road\" Sidequest",
    "Diff": 1,
    "Types": [
      "quests"
    ]
  },
  "r34c29": {
    "Desc": "Learn \"Firework\" Echo",
    "Diff": 10,
    "Types": [
      "quests",
      "echoes"
    ]
  },
  "r35c29": {
    "Desc": "Complete \"Glide Path Trailblazer\" Sidequest",
    "Diff": 18,
    "Types": [
      "quests"
    ]
  },
  "r36c29": {
    "Desc": "Complete \"Precious Treasure\" Sidequest",
    "Diff": 6,
    "Types": [
      "quests"
    ]
  },
  "r37c29": {
    "Desc": "Complete \"A Treat For My Person\" Sidequest",
    "Diff": 20,
    "Types": [
      "quests"
    ]
  },
  "r38c29": {
    "Desc": "Pause The Game For 10 Minutes",
    "Diff": 25,
    "Types": [
      "other"
    ]
  },
  "r39c29": {
    "Desc": "Drown 5 Unique Enemies (Not Echoes)",
    "Diff": 5,
    "Types": [
      "echoes",
      "dummy39"
    ]
  },
  "r40c29": {
    "Desc": "Read 10 Signs",
    "Diff": 2,
    "Types": [
      "overworld",
      "dummy40"
    ]
  },
  "r41c29": {
    "Desc": "Use Drippitune In Gerudo Desert",
    "Diff": 21,
    "Types": [
      "echoes"
    ]
  },
  "r2c30": {
    "Desc": "Learn 20 Echoes",
    "Diff": 4,
    "Types": [
      "echoes",
      "dummy2"
    ]
  },
  "r7c30": {
    "Desc": "Collect 10 Stamps",
    "Diff": 7,
    "Types": [
      "stamps",
      "overworld",
      "dummy7"
    ]
  },
  "r8c30": {
    "Desc": "Unlock 10 Unique Smoothie Recipies",
    "Diff": 6,
    "Types": [
      "smoothies",
      "dummy8"
    ]
  },
  "r9c30": {
    "Desc": "Obtain 10 Unique Smoothie Ingredients",
    "Diff": 14,
    "Types": [
      "smoothies",
      "dummy9"
    ]
  },
  "r11c30": {
    "Desc": "Obtain 8 Heart Pieces",
    "Diff": 8,
    "Types": [
      "hearts",
      "dummy11"
    ]
  },
  "r12c30": {
    "Desc": "Obtain 5 Heart Containers",
    "Diff": 12,
    "Types": [
      "hearts",
      "dummy12"
    ]
  },
  "r13c30": {
    "Desc": "Open 10 Dungeon Chests",
    "Diff": 13,
    "Types": [
      "dungeons",
      "dummy13"
    ]
  },
  "r14c30": {
    "Desc": "Close 3 Rifts",
    "Diff": 15,
    "Types": [
      "dungeons",
      "dummy14"
    ]
  },
  "r16c30": {
    "Desc": "Discover 5 Dungeon Waypoints",
    "Diff": 17,
    "Types": [
      "dungeons",
      "waypoints",
      "dummy16"
    ]
  },
  "r17c30": {
    "Desc": "Discover 20 Overworld Waypoints",
    "Diff": 11,
    "Types": [
      "waypoints",
      "overworld",
      "dummy17"
    ]
  },
  "r19c30": {
    "Desc": "Complete 6 Sidequests",
    "Diff": 9,
    "Types": [
      "quests",
      "dummy19"
    ]
  },
  "r23c30": {
    "Desc": "Obtain 20 Might Crystals",
    "Diff": 6,
    "Types": [
      "crystals",
      "dummy23"
    ]
  },
  "r24c30": {
    "Desc": "Obtain 5 Equipment Items",
    "Diff": 11,
    "Types": [
      "outfits",
      "dummy24"
    ]
  },
  "r28c30": {
    "Desc": "Open 10 Overworld Chests",
    "Diff": 7,
    "Types": [
      "overworld",
      "dummy28"
    ]
  },
  "r29c30": {
    "Desc": "Discover 15 Cave Entrances",
    "Diff": 5,
    "Types": [
      "overworld",
      "dummy29"
    ]
  },
  "r30c30": {
    "Desc": "Discover 5 Shops",
    "Diff": 11,
    "Types": [
      "overworld",
      "dummy30"
    ]
  },
  "r39c30": {
    "Desc": "Drown 10 Unique Enemies (Not Echoes)",
    "Diff": 10,
    "Types": [
      "echoes",
      "dummy39"
    ]
  },
  "r40c30": {
    "Desc": "Read 25 Signs",
    "Diff": 14,
    "Types": [
      "overworld",
      "dummy40"
    ]
  },
  "r2c31": {
    "Desc": "Learn 30 Echoes",
    "Diff": 8,
    "Types": [
      "echoes",
      "dummy2"
    ]
  },
  "r7c31": {
    "Desc": "Collect 15 Stamps",
    "Diff": 13,
    "Types": [
      "stamps",
      "overworld",
      "dummy7"
    ]
  },
  "r8c31": {
    "Desc": "Unlock 15 Unique Smoothie Recipies",
    "Diff": 15,
    "Types": [
      "smoothies",
      "dummy8"
    ]
  },
  "r11c31": {
    "Desc": "Obtain 12 Heart Pieces",
    "Diff": 13,
    "Types": [
      "hearts",
      "dummy11"
    ]
  },
  "r13c31": {
    "Desc": "Open 15 Dungeon Chests",
    "Diff": 17,
    "Types": [
      "dungeons",
      "dummy13"
    ]
  },
  "r14c31": {
    "Desc": "Close 5 Rifts",
    "Diff": 24,
    "Types": [
      "dungeons",
      "dummy14"
    ]
  },
  "r16c31": {
    "Desc": "Discover 7 Dungeon Waypoints",
    "Diff": 23,
    "Types": [
      "dungeons",
      "waypoints",
      "dummy16"
    ]
  },
  "r17c31": {
    "Desc": "Discover 35 Overworld Waypoints",
    "Diff": 22,
    "Types": [
      "waypoints",
      "overworld",
      "dummy17"
    ]
  },
  "r19c31": {
    "Desc": "Complete 9 Sidequests",
    "Diff": 14,
    "Types": [
      "quests",
      "dummy19"
    ]
  },
  "r23c31": {
    "Desc": "Obtain 35 Might Crystals",
    "Diff": 11,
    "Types": [
      "crystals",
      "dummy23"
    ]
  },
  "r24c31": {
    "Desc": "Obtain 7 Equipment Items",
    "Diff": 16,
    "Types": [
      "outfits",
      "dummy24"
    ]
  },
  "r28c31": {
    "Desc": "Open 25 Overworld Chests",
    "Diff": 14,
    "Types": [
      "overworld",
      "dummy28"
    ]
  },
  "r29c31": {
    "Desc": "Discover 25 Cave Entrances",
    "Diff": 9,
    "Types": [
      "overworld",
      "dummy29"
    ]
  },
  "r30c31": {
    "Desc": "Discover all 7 Shops",
    "Diff": 20,
    "Types": [
      "overworld",
      "dummy30"
    ]
  },
  "r39c31": {
    "Desc": "Drown 15 Unique Enemies (Not Echoes)",
    "Diff": 15,
    "Types": [
      "echoes",
      "dummy39"
    ]
  },
  "r2c32": {
    "Desc": "Learn 40 Echoes",
    "Diff": 12,
    "Types": [
      "echoes",
      "dummy2"
    ]
  },
  "r7c32": {
    "Desc": "Collect 20 Stamps",
    "Diff": 19,
    "Types": [
      "stamps",
      "overworld",
      "dummy7"
    ]
  },
  "r8c32": {
    "Desc": "Unlock 20 Unique Smoothie Recipies",
    "Diff": 20,
    "Types": [
      "smoothies",
      "dummy8"
    ]
  },
  "r11c32": {
    "Desc": "Obtain 20 Heart Pieces",
    "Diff": 18,
    "Types": [
      "hearts",
      "dummy11"
    ]
  },
  "r19c32": {
    "Desc": "Complete 12 Sidequests",
    "Diff": 19,
    "Types": [
      "quests",
      "dummy19"
    ]
  },
  "r23c32": {
    "Desc": "Obtain 50 Might Crystals",
    "Diff": 25,
    "Types": [
      "crystals",
      "dummy23"
    ]
  },
  "r24c32": {
    "Desc": "Obtain 10 Equipment Items",
    "Diff": 21,
    "Types": [
      "outfits",
      "dummy24"
    ]
  },
  "r28c32": {
    "Desc": "Open 40 Overworld Chests",
    "Diff": 18,
    "Types": [
      "overworld",
      "dummy28"
    ]
  },
  "r29c32": {
    "Desc": "Discover 35 Cave Entrances",
    "Diff": 12,
    "Types": [
      "overworld",
      "dummy29"
    ]
  },
  "r2c33": {
    "Desc": "Learn 50 Echoes",
    "Diff": 16,
    "Types": [
      "echoes",
      "dummy2"
    ]
  },
  "r7c33": {
    "Desc": "Collect all 25 Stamps",
    "Diff": 23,
    "Types": [
      "stamps",
      "overworld",
      "dummy7"
    ]
  },
  "r8c33": {
    "Desc": "Unlock 30 Unique Smoothie Recipies",
    "Diff": 24,
    "Types": [
      "smoothies",
      "dummy8"
    ]
  },
  "r24c33": {
    "Desc": "Obtain 15 Equipment Items",
    "Diff": 22,
    "Types": [
      "outfits",
      "dummy24"
    ]
  },
  "r29c33": {
    "Desc": "Discover 45 Cave Entrances",
    "Diff": 19,
    "Types": [
      "overworld",
      "dummy29"
    ]
  }
}
